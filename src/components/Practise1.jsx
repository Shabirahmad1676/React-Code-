import { Data } from "../App";
import { useContext } from "react";


import React from 'react'

const Practise1 = () => {

  const user = useContext(Data)

  return (
    // <div>
    //   <Data.Consumer>
    //     { (name)=>{
    //       return <h1>{name}</h1>
    //     } }
    //   </Data.Consumer>
    // </div>
    <>
  <h1>{user}</h1>
    </>
  )
}

export default Practise1