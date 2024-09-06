import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider, Link, Navigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import About from '../components/About'
import Login from '../components/Login'


const guestRouter = createBrowserRouter([
    {
        path : '/',
        element : (
            <>
              <NavBar/>
              <Outlet />  
            </>
        ),
        children : [
            {path : '', element: <Home />},
            {path : 'About', element: <About/>},
            {path : 'Login', element: <Login />},
            {path : '*', element: <Home />},

        ]


    }
])


function AppRouter() {
  return (
   <RouterProvider router={guestRouter} />
  )
}

export default AppRouter