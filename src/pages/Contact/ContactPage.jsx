import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import Enquiry from '../../components/Enquiry/Enquiry'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Location from '../../components/Location/Location'
// import Contact from '../../images/contact.png'

import Contact from '../../images/3.jpg'
import ContactMobile from '../../images/3_Mobile.jpg'

function ContactPage() {
    return (
        <>
            <Navbar isSecondary={false} class3="navbar-list-active"/>
            {/* <Carousel images={Contact} 
                altText="Contact" 
                heading="Ready to fly digitally with us? Let's talk!" 
                subheading="Kindly fill in your details in the relevant container below or contact us at"
                span="info@gosociobutterfly.com" /> */}
            <Carousel images={Contact} 
                imagesMobile={ContactMobile} />
            <Enquiry />
            <Location />
            <Footer />
        </>
    )
}

export default ContactPage
