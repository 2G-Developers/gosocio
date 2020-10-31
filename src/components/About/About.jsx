import React from 'react'
import raziya from '../../images/raziya.png'
import hair from '../../images/hair.png'
import skylon from '../../images/skylon.png'
import sooja from '../../images/sooja.png'
import Skylon2 from '../../images/skylon-2.png'
import couchy from '../../images/couchy.png'
import vr from '../../images/vr.png'
import amaas from '../../images/amaas.png'
import Button from '../Button/Button'
import Carousel from 'nuka-carousel';

function About() {
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
                    <div className="col-md-8">
                        <div className="about__img">
                            <Carousel 
                             autoplay={true}
                             speed={2000}
                             withoutControls={true}
                             wrapAround={true}
                            >
                                <img src={raziya} className="img-fluid small-margin" alt="Raziya" />
                                <img src={amaas} className="img-fluid small-margin" alt="Amaas" />
                                <img src={Skylon2} className="img-fluid small-margin" alt="Skylon" />
                                <img src={sooja} className="img-fluid small-margin" alt="Sooja" />
                            </Carousel>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="about__img">
                            <img src={hair} className="img-fluid small-margin" alt="The Hair Experts" />
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-4">
                        <div className="about__img">
                            <img src={skylon} className="img-fluid small-margin" alt="Skylon" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="about__img">
                            <Carousel 
                             autoplay={true}
                             speed={2000}
                             withoutControls={true}
                             wrapAround={true}
                            >
                                <img src={Skylon2} className="img-fluid small-margin" alt="Skylon" />
                                <img src={sooja} className="img-fluid small-margin" alt="Sooja" />
                                <img src={amaas} className="img-fluid small-margin" alt="Amaas" />
                                <img src={raziya} className="img-fluid small-margin" alt="Raziya" />
                            </Carousel>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-8">
                        <div className="about__img">
                            <Carousel 
                             autoplay={true}
                             speed={2000}
                             withoutControls={true}
                             wrapAround={true}
                            >
                                <img src={sooja} className="img-fluid small-margin" alt="Sooja" />
                                <img src={Skylon2} className="img-fluid small-margin" alt="Skylon" />
                                <img src={raziya} className="img-fluid small-margin" alt="Raziya" />
                                <img src={amaas} className="img-fluid small-margin" alt="Amaas" />
                            </Carousel>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="about__img">
                            <img src={couchy} className="img-fluid small-margin" alt="Couchy" />
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-4">
                        <div className="about__img">
                            <img src={vr} className="img-fluid small-margin" alt="Skylon VR" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="about__img">
                            <Carousel 
                             autoplay={true}
                             speed={2000}
                             withoutControls={true}
                             wrapAround={true}
                            >
                                <img src={amaas} className="img-fluid small-margin" alt="Amaas" />
                                <img src={raziya} className="img-fluid small-margin" alt="Raziya" />
                                <img src={sooja} className="img-fluid small-margin" alt="Sooja" />
                                <img src={Skylon2} className="img-fluid small-margin" alt="Skylon" />
                            </Carousel>
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
