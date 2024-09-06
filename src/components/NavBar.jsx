import React from 'react'
import { Link, useNavigate } from 'react-router-dom'



function NavBar() {
  return (
    <div className='flex justify-between p-4 bg-orange-300'>
        <h1>Navbar</h1>
        <nav className='flex gap-4'>
          <Link to='/'>Home</Link>  
          <Link to='/About'>About</Link>  
          <Link to='/Login'>Login</Link>  
        </nav>
    </div>
  )
}

export default NavBar