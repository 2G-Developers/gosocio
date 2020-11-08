import React from 'react'
import arjee from '../../images/arjee-client.png'
import hair from '../../images/hair-client.png'
import raziya from '../../images/raziya-client.png'
import sangeetha from '../../images/sangeetha-client.png'
import skylon from '../../images/skylon-client.png'
import Ammus from '../../images/ammus-client.png'
import Couchy from '../../images/couchy-client.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Contact({isgrey}) {
    let colorStyle = isgrey ? '#f4f4f4' : '#fff';

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        variableWidth: true,
        slidesToShow: 3,
        speed: 2000,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    infinite: true
                }
            },
            {
            breakpoint: 480,
            settings: {
                    slidesToShow: 1,
                    infinite: true
                }
            }
        ]
    };

    return (
        <section id="contact" className="contact" style={{background: colorStyle}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="heading">Some of our awesome clients</h2>
                        <div className="contact__carousel">
                            <Slider {...settings}>
                                <div className="contact__image">
                                    <img src={arjee} alt="Arjee" className="img-fluid"/>
                                </div>
                                <div className="contact__image">
                                    <img src={hair} alt="The Hair Experts" className="img-fluid"/>
                                </div>
                                <div className="contact__image">
                                    <img src={raziya} alt="Raziya" className="img-fluid"/>
                                </div>
                                <div className="contact__image">
                                    <img src={sangeetha} alt="Raziya" className="img-fluid"/>
                                </div>
                                <div className="contact__image">
                                    <img src={skylon} alt="Raziya" className="img-fluid"/>
                                </div>
                                <div className="contact__image">
                                    <img src={Ammus} alt="Raziya" className="img-fluid"/>
                                </div>
                                <div className="contact__image">
                                    <img src={Couchy} alt="Raziya" className="img-fluid"/>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
