import React from 'react'

function Cart() {

  let items =  ["Cap🧢","Bag🎒","Shoes👞","Socks🧦"]

  return (
    <>
    {items.length > 0 && <h1>You have {items.length} item in your cart </h1>}
    <ul>
      {items.map((elem,index)=>(
        <li>{elem}</li>
      ))}
    </ul>
    </>
  )
}

export default Cart