import React from 'react'



const Header = () => {

  let data = new Date();

  return (
    <>
      <h1>Greetings!</h1>
      <p>Date: {data.getDate()}</p>
    </>
  )
}

export default Header