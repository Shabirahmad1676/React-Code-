  import React from 'react'
  import { useState } from "react"



  const TodoList = () => {
    const [todo, setTodo] = useState([])
    const[inputValue,setinputValue] = useState('')

    const handleSubmit = (e)=>{

      e.preventDefault();
      if(inputValue.trim()){
        setTodo([...todo,inputValue])
        setinputValue('')
      }
      
    }

    function handleChange(e){
      setinputValue(e.target.value)
    }

    return (
      <>
    <form>
      <input
      type="text"
      value={inputValue}
      placeholder='Add Task'
      onChange={handleChange}
      />
      <button onClick={handleSubmit} type="submit">Add Task</button>
    </form>

    <ul>
      {todo.map((task,index)=>(
        <li key={index}>{task}</li>
      ))}
    </ul>
      </>

    )
  }

  export default TodoList