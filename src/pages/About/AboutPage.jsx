import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import Client from '../../components/Client/Client'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Service from '../../components/Service/Service'
// import contact from '../../images/contact.png' 

import About from '../../images/2.jpg'
import AboutMobile from '../../images/2_Mobile.jpg'

function AboutPage() {
    return (
        <>
            <Navbar isSecondary={true} class2="navbar-list-active"/>
            {/* <Carousel images={contact} altText="Contact" heading="Moving businesses, customers and the world forward with creative digital products!" /> */}
            <Carousel images={About} 
                imagesMobile={AboutMobile} />
            <Service />
            <Contact isgrey={true} />
            <Client />
            <Footer />
        </>
    )
}

export default AboutPage
