import React from 'react'
import { useNavigate } from 'react-router-dom'


const About = () => {

  const navigate = useNavigate()

  const handleClick = ()=>{
    navigate('/')
  }
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Move to Home Page</button>
    </div>
  )
}

export default About