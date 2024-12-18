import React, { useCallback, useState } from "react";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Params from "./components/Params";
import Error from "./components/Error";


function App(){

  const router = createBrowserRouter([
    {
      path:'/',
      element: <div>
         <Navbar/>
         <Home/>
      </div>
    },
    {
      path: '/about',
      element: <div>
        <Navbar/>
        <About/>
      </div>
    },
    {
      path:'/student/:id',
      element: <div>
        <Navbar/>
        <Params/>
      </div>
    },{
      path:'*',
      element:<Error/>
    }
  ])

// const [count, setcount] = useState(0)

// const newFn = ()=>{}

  // const newFn = useCallback(()=>{},[count])
 
  return (
    <>
  {/* <PasswordGenerator/> */}
  <RouterProvider router={router} />
  
    </>
  )
}

export default App