import React from 'react'

function Props({image, name,age}) {
  return (
    <div className='m-auto flex items-center flex-col'>
      <img src={image} alt={name}  width={200} className='rounded-lg  ' />
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
    </div>
  )
}

export default Props