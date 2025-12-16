import React, { useState } from 'react'
import "./../styles/navbar.css"
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [openMenu, setOpenMenu] = useState(false);
    
    function handleClick(){
        setOpenMenu(!openMenu);
    }
  return (
    <div className='container'>
        {/* ----------- LEFT SIDE ----------- */}
        <div className='left-side'>
            <h1>AGENTIC<span>AI</span>BOT</h1>
        </div>
        {/* ----------- MIDDLE ----------- */}
        <div className={`middle ${openMenu ? "showMenu" : ""} `}>
            <h3  
            className={location.pathname === "/" ? "active" : ""} 
            onClick={() => navigate('/')}>Home</h3>
            <h3 
            className={location.pathname === "/hospital" ? "active" : ""} 
            onClick={() => navigate('/hospital')}>Chat-bot</h3>

            <h3
             className={location.pathname === "/ambulance" ? "active" : ""}  
             onClick={() => navigate('/ambulance')}>Features</h3>
            <h3 
            className={location.pathname === "/about-us" ? "active" : ""} 
            onClick={() => navigate('/about-us')}>About</h3>
        </div>

        {/* ----------- RIGHT SIDE ----------- */}
        <div className='right-side'>
            <h3 
            className={location.pathname === "/login" ? "active" : ""} 
            onClick={() => navigate('/login')}>Login</h3>
 
        </div>

        

    </div>
  )
}

export default Navbar