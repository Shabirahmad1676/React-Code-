import React, { useCallback, useState } from "react";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Params from "./components/Params";
import Error from "./components/Error";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counter/counterSlice";


function App(){

  // const router = createBrowserRouter([
  //   {
  //     path:'/',
  //     element: <div>
  //        <Navbar/>
  //        <Home/>
  //     </div>
  //   },
  //   {
  //     path: '/about',
  //     element: <div>
  //       <Navbar/>
  //       <About/>
  //     </div>
  //   },
  //   {
  //     path:'/student/:id',
  //     element: <div>
  //       <Navbar/>
  //       <Params/>
  //     </div>
  //   },{
  //     path:'*',
  //     element:<Error/>
  //   }
  // ])

// const [count, setcount] = useState(0)

// const newFn = ()=>{}

  
  // const newFn = useCallback(()=>{},[count])



  //useSelector is to fetch data from state
  const count = useSelector((state)=> state.counter.value )


  //To dispatch action 
  const dispatch = useDispatch()



  const handleIncrement = ()=>{
    dispatch(increment());
  }
  const handleDecrement = ()=>{
    dispatch(decrement());
  }
 
  return (
    <>
  {/* <PasswordGenerator/> */}
  {/* <RouterProvider router={router} /> */}

  <div>
    <button onClick={handleIncrement}>+</button>
    <h2>Count:{count} </h2>
    <button onClick={handleDecrement}>-</button>
  </div>
  
    </>
  )
}

export default App