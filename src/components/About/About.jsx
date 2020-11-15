import React, {useEffect} from 'react'

import Slider from "react-slick";

import Aos from 'aos';
import "aos/dist/aos.css";

// Sooja
import sooja from '../../images/sooja.png'

// untold
import untold from '../../images/untold.jpg'

// Skylon
import Skylon2 from '../../images/skylon-2.png'
import skylon from '../../images/skylon.png'
import vr from '../../images/vr.png'

// Amaas
import amaas from '../../images/amaas.png'
import ammus from '../../images/ammus.jpg'

// Arjee
import arjee from '../../images/arjee.jpg'

// Raziya
import raziya from '../../images/raziya.jpg'

// Hair
import hair from '../../images/hair.jpg'
import hair1 from '../../images/intro_the.jpg'
import hair2 from '../../images/sam.jpg'
import hair3 from '../../images/hair3.jpg'
import hairDiwaliA from '../../images/thediwalia.jpg'
import hairDiwaliB from '../../images/thediwalib.jpg'
import hairDiwaliC from '../../images/thediwalic.jpg'

// Couchy
import couchy from '../../images/couchy.png'
import couchyComfy from '../../images/couchyComfy.jpg'
import couchyIndependence from '../../images/couchyIndependence.jpg'
import couchyWebsite from '../../images/couchyWebsite.jpg'

// Electice
import eclectic from '../../images/eclectic.jpg'


function About() {
    // const [slideHeight, setSlideHeight] = useState(0)
    const singleSettings = {
        dots: false,
        autoplay: true,
        fade: true,
        infinite: true,
        arrows: false,
        speed: 1500,
        slidesToShow: 1
    };

    useEffect(() => {
        Aos.init({
            duration: 1000,
        })
        // setTimeout(function() {
        //     const hh = document.getElementById('test1').clientHeight
        //     setSlideHeight(hh)
        //     console.log(hh)

        // },0)
    }, [])

    return (
        <section id="about" className="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="about__heading">
                            <h3>
                                We are a multi-disciplinary digital marketing agency
                            </h3>
                            {/* <h3>
                                
                            </h3> */}
                            <p>Go Socio Butterfly is a fully integrated digital marketing and branding agency that
utilises our strategic, creative and innovative digital ideas to transform your business.
We create leading ideas that are unique and help your brand progress digitally. We
think, envision and create with you to build a strong digital future.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8" style={{padding: 0}}>
                        <div  data-aos="zoom-in" className="about__wrapper">
                            <Slider {...singleSettings}>
                                <div id="test1" className="about__img">
                                    <img src={ammus} className="img-fluid small-margin" alt="ammus" />
                                </div>
                                <div className="about__img">
                                    <img src={amaas} className="img-fluid small-margin" alt="Amaas" />
                                </div>
                                <div className="about__img">
                                    <img src={arjee} className="img-fluid small-margin" alt="arjee" />
                                </div>
                                <div className="about__img">
                                    <img src={sooja} className="img-fluid small-margin" alt="Pooja" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="col-md-4" style={{padding: 0}}>
                        <div  data-aos="zoom-in" className="about__wrapper" >
                            <Slider {...singleSettings}>
                                <div id="test1" className="about__img">
                                    <img src={hair} className="img-fluid small-margin" alt="Raziya" />
                                </div>
                                <div className="about__img">
                                    <img src={hair1} className="img-fluid small-margin" alt="Amaas" />
                                </div>
                                <div className="about__img">
                                    <img src={hair2} className="img-fluid small-margin" alt="Skylon" />
                                </div>
                                <div className="about__img">
                                    <img src={hairDiwaliB} className="img-fluid small-margin" alt="Sooja" />
                                </div>
                                <div className="about__img">
                                    <img src={hairDiwaliC} className="img-fluid small-margin" alt="Sooja" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4" style={{padding: 0}}>
                        <div  data-aos="zoom-in" className="about__wrapper">
                            <Slider {...singleSettings}>
                                <div id="test1" className="about__img">
                                    <img src={couchy} className="img-fluid small-margin" alt="Raziya" />
                                </div>
                                <div className="about__img">
                                    <img src={couchyComfy} className="img-fluid small-margin" alt="Amaas" />
                                </div>
                                <div className="about__img">
                                    <img src={couchyIndependence} className="img-fluid small-margin" alt="Skylon" />
                                </div>
                                <div className="about__img">
                                    <img src={couchyWebsite} className="img-fluid small-margin" alt="Sooja" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="col-md-8" style={{padding: 0}}>
                        <div  data-aos="zoom-in" className="about__wrapper">
                            <Slider {...singleSettings}>
                                <div id="test1" className="about__img">
                                    <img src={raziya} className="img-fluid small-margin" alt="Raziya" />
                                </div>
                                <div className="about__img">
                                    <img src={Skylon2} className="img-fluid small-margin" alt="skylon" />
                                </div>
                                <div className="about__img">
                                    <img src={eclectic} className="img-fluid small-margin" alt="Skylon" />
                                </div>
                                <div className="about__img">
                                    <img src={untold} className="img-fluid small-margin" alt="Sooja" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8" style={{padding: 0}}>
                        <div  data-aos="zoom-in" className="about__wrapper">
                            <Slider {...singleSettings}>
                                <div className="about__img">
                                    <img src={arjee} className="img-fluid small-margin" alt="arjee" />
                                </div>
                                <div className="about__img">
                                    <img src={sooja} className="img-fluid small-margin" alt="pooja" />
                                </div>
                                <div className="about__img">
                                    <img src={amaas} className="img-fluid small-margin" alt="amaas" />
                                </div>
                                <div className="about__img">
                                    <img src={ammus} className="img-fluid small-margin" alt="ammus" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="col-md-4" style={{padding: 0}}>
                        <div  data-aos="zoom-in" className="about__wrapper">
                            <Slider {...singleSettings}>
                                <div id="test1" className="about__img">
                                    <img src={skylon} className="img-fluid small-margin" alt="Raziya" />
                                </div>
                                <div className="about__img">
                                    <img src={vr} className="img-fluid small-margin" alt="Amaas" />
                                </div>
                                <div className="about__img">
                                    <img src={hair3} className="img-fluid small-margin" alt="Sooja" />
                                </div>
                                <div className="about__img">
                                    <img src={hairDiwaliA} className="img-fluid small-margin" alt="Sooja" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4" style={{padding: 0}}>
                        <div  data-aos="zoom-in" className="about__wrapper">
                            <Slider {...singleSettings}>
                                <div id="test1" className="about__img">
                                    <img src={couchy} className="img-fluid small-margin" alt="Raziya" />
                                </div>
                                <div className="about__img">
                                    <img src={couchyComfy} className="img-fluid small-margin" alt="Amaas" />
                                </div>
                                <div className="about__img">
                                    <img src={hair3} className="img-fluid small-margin" alt="Sooja" />
                                </div>
                                <div className="about__img">
                                    <img src={hairDiwaliA} className="img-fluid small-margin" alt="Sooja" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="col-md-8" style={{padding: 0}}>
                        <div  data-aos="zoom-in" className="about__wrapper">
                            <Slider {...singleSettings}>
                                <div className="about__img">
                                    <img src={eclectic} className="img-fluid small-margin" alt="Amaas" />
                                </div>
                                <div className="about__img">
                                    <img src={untold} className="img-fluid small-margin" alt="Raziya" />
                                </div>
                                <div className="about__img">
                                    <img src={raziya} className="img-fluid small-margin" alt="Sooja" />
                                </div>
                                <div className="about__img">
                                    <img src={Skylon2} className="img-fluid small-margin" alt="Skylon" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
