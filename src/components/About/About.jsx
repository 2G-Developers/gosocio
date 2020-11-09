import React from 'react'
import raziya from '../../images/raziya.png'
import hair from '../../images/hair.png'
import skylon from '../../images/skylon.png'
import sooja from '../../images/sooja.png'
import Skylon2 from '../../images/skylon-2.png'
// import couchy from '../../images/couchy.png'
import vr from '../../images/vr.png'
import amaas from '../../images/amaas.png'
import Button from '../Button/Button'
import Zoom from 'react-reveal/Zoom';
import Slider from "react-slick";

import test1 from '../../images/843x528_1.jpg'
import test2 from '../../images/418x528_1.jpg'

function About() {
    const singleSettings = {
        dots: false,
        autoplay: true,
        fade: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1
    };

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
                <div className="row mt-3" style={{justifyContent: "center"}}>
                    <div className="col-md-8 p-0">
                        <Zoom bottom duration={1000} delay={600}>
                            <Slider {...singleSettings}>
                                <div className="about__img">
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
                        </Zoom>
                    </div>
                    <div className="col-md-4 pr-0">
                        <Zoom bottom duration={1000} delay={600}>
                            <div className="about__img" style={{backgroundImage: `url('${hair}')`}}>
                                {/* <img src={hair} className="img-fluid small-margin" alt="The Hair Experts" /> */}
                            </div>
                        </Zoom>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-4 pl-0">
                        <Zoom bottom duration={2000} delay={1000}>
                            <div className="about__img" style={{backgroundImage: `url('${skylon}')`}}>
                                {/* <img src={skylon} className="img-fluid small-margin" alt="Skylon" /> */}
                            </div>
                        </Zoom>
                    </div>
                    <div className="col-md-8 p-0">
                        <Zoom bottom duration={2000} delay={1000}>
                            <div className="about__img">
                                <img src={Skylon2} className="img-fluid small-margin" alt="Skylon" />
                            </div>
                        </Zoom>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-8 p-0">
                        <Zoom bottom duration={2000} delay={1400}>
                            <div className="about__img">
                                <img src={test1} className="img-fluid small-margin" alt="Raziya" />
                            </div>
                        </Zoom>
                    </div>
                    <div className="col-md-4 pr-0">
                        <Zoom bottom duration={2000} delay={1400}>
                            <div className="about__img" style={{backgroundImage: `url('${test2}')`}}>
                                {/* <img src={test2} className="img-fluid small-margin" alt="Couchy" /> */}
                            </div>
                        </Zoom>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-4 pl-0">
                        <Zoom bottom duration={2000} delay={1800} distance="30px">
                            <div className="about__img" style={{backgroundImage: `url('${vr}')`}}>
                                {/* <img src={vr} className="img-fluid small-margin" alt="Skylon VR" /> */}
                            </div>
                        </Zoom>
                    </div>
                    <div className="col-md-8 p-0">
                        <Zoom bottom duration={2000} delay={1800}>
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
                        </Zoom>
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
