import React from 'react'
import { useParams } from 'react-router-dom'

const Params = () => {
  const {id} = useParams()
  return (
    <div>
      <h2>Params: {id}</h2>
    </div>
  )
}

export default Params