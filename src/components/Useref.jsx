import React from 'react'
import { useRef } from 'react';

const Useref = () => {


  // Useref => create mutable-variable which not re-render the components

  // const [value, setValue] = useState(0)
  // const count = useRef(0)

  // useEffect(()=>{
  //   count.current = count.current + 1
  // })

  
  // example 2

  const value = useRef();

  const clicked = ()=>{
    value.current.style.backgroundColor = 'crimson'
    value.current.style.color = 'white'
  }

  return (
    <div>
        {/* useRef example 1 */}
    {/* <h1>{count.current}</h1>
    <h1>{value}</h1>
    <button onClick={()=>{setValue(prev=> prev + 100)}}>+1</button> */}

    {/* useref example 2 */}
    <input type="text" ref={value} />
    <button onClick={clicked}>Click</button>
    </div>
  )
}

export default Useref