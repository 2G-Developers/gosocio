import React , { useState } from 'react'
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg'
import logo2 from '../../images/logo-2.svg'

function Navbar({isSecondary,class1="navbar-list", class2="navbar-list", class3="navbar-list",color='#fff'}){
    const [showNav,setShownav ] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return(

    <div className="nav">

    <div className={navbar ? 'navbar active-nav': 'navbar'} style={{background: `${ navbar ? color : 'transparent'}`}}>
        {isSecondary ? null : <Link to="/"><img className="logo" src={logo} alt="logo"/></Link> }
        {isSecondary ? <Link to="/"><img className="logo" src={logo2} alt="logo"/></Link> : null }
        <div className="navbar-hamburg" onClick={()=>setShownav(!showNav)}>
            <div className="navbar-hamburg-bar" style={{background: `${isSecondary ? '#fff': '#000'}`}}></div>
            <div className="navbar-hamburg-bar" style={{background: `${isSecondary ? '#fff': '#000'}`}}></div>
            <div className="navbar-hamburg-bar" style={{background: `${isSecondary ? '#fff': '#000'}`}}></div>
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