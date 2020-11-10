import React, {useEffect} from 'react'
import raziya from '../../images/raziya.png'
import hair from '../../images/hair.png'
import skylon from '../../images/skylon.png'
import sooja from '../../images/sooja.png'
import Skylon2 from '../../images/skylon-2.png'
// import couchy from '../../images/couchy.png'
import vr from '../../images/vr.png'
import amaas from '../../images/amaas.png'
import Button from '../Button/Button'
// import Zoom from 'react-reveal/Zoom';
import Slider from "react-slick";

import Aos from 'aos';
import "aos/dist/aos.css";

import test1 from '../../images/843x528_1.jpg'
import test2 from '../../images/418x528_1.jpg'

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
                                We're a digital marketing agency based in  Chennai
                            </h3>
                            <p>Social Butterfly is a fully integrated digital marketing and branding agency that believes that our strategic, creative and innovative digital ideas can transform your business. We create leading ideas that are unique and help your brand progress digitally. We think, envision and create with you to build a strong digital future.</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-3" style={{padding: "0 15px"}}>
                    <div className="col-md-8">
                        <div  data-aos="zoom-in" className="about__wrapper">
                            <Slider {...singleSettings}>
                                <div id="test1" className="about__img">
                                    <img src={raziya} className="img-fluid small-margin" alt="Raziya" />
                                </div>
                                <div className="about__img">
                                    <img src={amaas} className="img-fluid small-margin" alt="Amaas" />
                                </div>
                                <div className="about__img">
                                    <img src={Skylon2} className="img-fluid small-margin" alt="Skylon" />
                                </div>
                                <div className="about__img">
                                    <img src={sooja} className="img-fluid small-margin" alt="Sooja" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div  data-aos="zoom-in" className="about__wrapper" >
                            <div className="about__img">
                                <img src={hair} className="img-fluid small-margin" alt="The Hair Experts" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-3" style={{padding: "0 15px"}}>
                    <div className="col-md-4">
                        <div  data-aos="zoom-in" className="about__wrapper">
                            <div className="about__img">
                                <img src={skylon} className="img-fluid small-margin" alt="Skylon" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div  data-aos="zoom-in" className="about__wrapper">
                            <div className="about__img">
                                <img src={Skylon2} className="img-fluid small-margin" alt="Skylon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-3" style={{padding: "0 15px"}}>
                    <div className="col-md-8">
                        <div  data-aos="zoom-in" className="about__wrapper">
                            <div className="about__img">
                                <img src={test1} className="img-fluid small-margin" alt="Raziya" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div  data-aos="zoom-in" className="about__wrapper">
                            <div className="about__img">
                                <img src={test2} className="img-fluid small-margin" alt="Couchy" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-3" style={{padding: "0 15px"}}>
                    <div className="col-md-4">
                        <div  data-aos="zoom-in" className="about__wrapper">
                            <div className="about__img">
                                <img src={vr} className="img-fluid small-margin" alt="Skylon VR" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div  data-aos="zoom-in" className="about__wrapper">
                            <Slider {...singleSettings}>
                                <div className="about__img">
                                    <img src={amaas} className="img-fluid small-margin" alt="Amaas" />
                                </div>
                                <div className="about__img">
                                    <img src={raziya} className="img-fluid small-margin" alt="Raziya" />
                                </div>
                                <div className="about__img">
                                    <img src={sooja} className="img-fluid small-margin" alt="Sooja" />
                                </div>
                                <div className="about__img">
                                    <img src={Skylon2} className="img-fluid small-margin" alt="Skylon" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="about__cta">
                    <Button />
                </div>
            </div>
        </section>
    )
}

export default About
