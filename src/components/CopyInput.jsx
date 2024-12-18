import React from 'react'
import { useState } from 'react'
import PopupContent from './PopupContent'


const CopyInput = () => {

  const [InputValue, setInputValue] = useState('')

  const[copied, setCopied] = useState(false)

  const handleCopy = ()=>{
    navigator.clipboard.writeText(InputValue).then(()=>{
      setCopied(true);
      setTimeout(()=>setCopied(false),5000)
    });
  };


  return (
    <>
    <input 
    type="text"
    value={InputValue}
    placeholder='Write to copy'
    onChange={e=> setInputValue(e.target.value)}/>
    <button onClick={handleCopy}>Copy</button>

    <PopupContent copied={copied} />
    </>
  )
}

export default CopyInput