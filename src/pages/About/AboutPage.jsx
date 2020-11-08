import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import Client from '../../components/Client/Client'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Service from '../../components/Service/Service'
import contact from '../../images/contact.png' 

function AboutPage() {
    return (
        <>
            <Navbar class2="navbar-list-active"/>
            <Carousel images={contact} altText="Contact" heading="Moving businesses, customers and the world forward with creative digital products!" />
            <Service />
            <Contact isgrey={true} />
            <Client />
            <Footer />
        </>
    )
}

export default AboutPage
