import React from 'react'
import About from '../../components/About/About'
import Carousel from '../../components/Carousel/Carousel'
import Client from '../../components/Client/Client'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import Hero from '../../images/hero.png'

function HomePage() {
    return (
        <>
            <Carousel images={Hero} altText="Hero" 
                heading="We Are Creative Agency" 
                subheading="Grow your business fast" />
            <About />
            <Contact isgrey={false} />
            <Client />
            <Footer />
        </>
    )
}

export default HomePage
