import React, { useCallback, useEffect, useState } from 'react'

const PasswordGenerator = () => {

  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const[password, setpassword] = useState('')

  const passwordGenerator = useCallback(()=>{

    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numberAllowed) str+= '0123456789'
    if(charAllowed) str=+ '!@#$%&(){}[]|\?/><.'

    for(let i = 1; i<= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass)

  },[length, numberAllowed, charAllowed, setpassword])



  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed, charAllowed, passwordGenerator])


  return (
    <div className='flex flex-col  gap-4'>

      <h2 className='text-center text-2xl'>Password Generator</h2>

     <div>
     <input type="text"
      value={password}
      readOnly
      placeholder='password' />
      <button>Copy</button>
     </div>

    <div className='flex items-center justify-center text-sm gap-x-1'>

    <div className='flex  gap-x-1'>
      <input 
      type="range"
      min={8}
      max={40}
      value={length}
      onChange={(e)=>{setlength(e.target.value)}}
       />
      <label>Length : {length}</label>
    </div>

    <div className='flex  gap-x-1'>
      <input 
      type="checkbox"
      defaultChecked={numberAllowed}
      onChange={()=>{setnumberAllowed((prev)=>!prev)}}
       />
       <label>Number</label>
       <input 
      type="checkbox"
      defaultChecked={charAllowed}
      onChange={()=>{charAllowed((prev)=>!prev)}}
       />
       <label>Character</label>
    </div>

    </div>

    </div>
  )
}

export default PasswordGenerator