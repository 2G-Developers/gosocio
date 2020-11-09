import React , { useState } from 'react'
import { Link } from "react-router-dom";

function Navbar({class1="navbar-list", class2="navbar-list", class3="navbar-list"}){
    const [showNav,setShownav ] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 300) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return(

    <div className="nav">

    <div className={navbar ? 'navbar active': 'navbar'}>
        <div className="navbar-hamburg" onClick={()=>setShownav(!showNav)}>
            <div className="navbar-hamburg-bar"></div>
            <div className="navbar-hamburg-bar"></div>
            <div className="navbar-hamburg-bar"></div>
        </div>
    </div>  
    <div className="navbar-page" style={{display: showNav ? 'block' : 'none' }}>
        <div id="mdiv" onClick={()=>setShownav(!showNav)}>
            <div className="mdiv">
                 <div className="md"></div>
             </div>
        </div>
        <div className="navbar-content">

            <Link to="/" className={class1}>Home</Link>
            <Link to="/about" className={class2}>About</Link>
            <Link to="/contact" className={class3}>Contact</Link>

        </div>
    </div>
    </div>)
}
export default Navbar