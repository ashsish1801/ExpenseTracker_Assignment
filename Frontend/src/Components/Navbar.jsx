import React from 'react'
import '../Styles/Navbar.css'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className='outerNavbarDiv'>
        <div className='logo'>
            <h4>Your Logo</h4>
        </div>
        <div className='contentNavbar'>
            <button onClick={()=>{navigate('/')}}>Home</button>
            <button onClick={()=>{navigate('/aboutUs')}}>About Us</button>
        </div>
    </div>
    </>
  )
}

export default Navbar