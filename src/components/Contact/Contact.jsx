import React from 'react'
import arjee from '../../images/arjee-client.png'
import hair from '../../images/hair-client.png'
import raziya from '../../images/raziya-client.png'
import sangeetha from '../../images/sangeetha-client.png'
import skylon from '../../images/skylon-client.png'

function Contact({isgrey}) {
    let colorStyle = isgrey ? '#f4f4f4' : '#fff';
    return (
        <section id="contact" className="contact" style={{background: colorStyle}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="heading">Some of our awesome clients</h2>
                        <div className="contact__images">
                            <img src={arjee} alt="Arjee" className="img-fluid my-3"/>
                            <img src={hair} alt="The Hair Experts" className="img-fluid my-3"/>
                            <img src={raziya} alt="Raziya" className="img-fluid my-3"/>
                            <img src={sangeetha} alt="Sangeetha" className="img-fluid my-3"/>
                            <img src={skylon} alt="Skylon" className="img-fluid my-3"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
