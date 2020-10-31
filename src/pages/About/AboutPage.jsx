import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import Client from '../../components/Client/Client'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import Service from '../../components/Service/Service'
import contact from '../../images/contact.png'

function AboutPage() {
    return (
        <>
            <Carousel images={contact} altText="Contact" heading="Moving businesses, customers and the world forward with creative digital products!" />
            <Service />
            <Contact isgrey={true} />
            <Client />
            <Footer />
        </>
    )
}

export default AboutPage
