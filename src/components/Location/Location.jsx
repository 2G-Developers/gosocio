import React from 'react'
import Central from '../../images/Central.png'
import Button from '../Button/Button'

function Location() {
    return (
        <section id="location" className="location">
            <div className="location--red">
                <h2>Our Location</h2>
            </div>
            <div className="container location__negative-margin">
                <div className="row" style={{justifyContent: "center"}}>
                    <div className="col-md-8">
                        <div className="location__wrapper">
                            <div className="location__image">
                                <img src={Central} alt="" className="img-fluid" />
                            </div>
                            <div className="location__details">
                                <a href="tel:+918939907815" className="location__link">
                                    <p>+918939907815</p>
                                </a>
                                <p className="location__address">
                                    The Executive Zone, Shakti Towers-1, <br />
                                    766, Anna Salai, Chennai - 600002.
                                </p>
                                <div className="location__cta">
                                    <Button />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Location
