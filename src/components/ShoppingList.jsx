import React, { useState } from 'react'

const ShoppingList = () => {

  const [item, setItem] = useState([])
  const [name, setName] = useState('')
  const [quantity, setQantity] = useState('')

  const handleSubmit = (e)=>{

    e.preventDefault()

    if(!name || !quantity){
      alert("Enter Full details")
      return -1
    }

    const newItem = {
      name , quantity: parseInt(quantity)
    }

    setItem((prevItem)=> [...prevItem, newItem])
    setName('')
    setQantity("")

  }
 

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      value={name}
      placeholder='Name'
      onChange={(e)=> setName(e.target.value)} />

      <input 
      type="number"
      value={quantity}
      placeholder='Quantity'
      onChange={(e)=> setQantity(e.target.value)} />

      <button type='submit'>Add Item</button>
    </form>

    
    <ul>
    <h2>Shopping List Items</h2>
      { item.map((elem,index)=>(
        <li key={index}>
          Name: {elem.name} - Quantity: {elem.quantity}
        </li>
      )) }
    </ul>
    </>
  )
}

export default ShoppingList