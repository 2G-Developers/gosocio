import React from 'react'
import About from '../../components/About/About'
import Carousel from '../../components/Carousel/Carousel'
import Client from '../../components/Client/Client'
import Contact from '../../components/Contact/Contact'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
// import Hero from '../../images/hero.png'

import Home from '../../images/Home-Banner.jpg'
import HomeMobile from '../../images/Home-Mobile-Banner.jpg'


function HomePage() {
    return (
        <>
           <Navbar isSecondary={false} class1="navbar-list-active"/>
            {/* <Carousel images={Hero} altText="Hero" 
                heading="We Are Creative Agency" 
                subheading="Grow your business fast" /> */}
            <Carousel images={Home} altText="Hero" 
                imagesMobile={HomeMobile} />
            <About />
            
            <Contact isgrey={false} />
            <Client />
            <Footer />
        </>
    )
}

export default HomePage
