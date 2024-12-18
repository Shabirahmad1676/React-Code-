import { useState } from "react"

import React from 'react'

const Counter = () => {

const[count, setCount] = useState(0)

function incremental(){
  setCount(count + 1)
}
  return (
    <>
    <h1>Value{count}</h1>
    <button onClick={incremental}>Increment</button>
    </>
  )
}

export default Counter