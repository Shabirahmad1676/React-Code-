import React from "react";
import { useState,useMemo } from "react";



const Usememo = () => {

  const [number, setnumber] = useState(0)
  const [counter, setcounter] = useState(0)

  function cubeNum(num){
    return Math.pow(num,3)
  }

  const result = useMemo(()=>{
    return cubeNum(number)
  },[number])

  return (
    <>
    <input type="number" onChange={(e)=>{setnumber(e.target.value)}} />
    <h1>Cube of given number: {result} </h1>
    <button onClick={()=>{setcounter(counter+1)}}>Counter++</button>
    <h1>Counter: {counter}</h1>
    </>
  )
}

export default Usememo