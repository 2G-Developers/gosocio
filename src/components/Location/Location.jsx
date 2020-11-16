import React from 'react'
import Central from '../../images/Central.png'
import {ReactComponent as Call} from '../../images/CallIcon.svg'
import {ReactComponent as LocationIcon} from '../../images/LocationIcon.svg'

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
                                    <p><Call width="16px" height="16px" fill="#EB4D37" /> +918939907815</p>
                                </a>
                                <p className="location__address">
                                    <LocationIcon width="18px" height="18px" fill="#EB4D37" /> 
                                    <span className="p-0"> The Executive Zone, Shakti Towers-1, <br />
                                    </span><span className="pl-3">
                                    766, Anna Salai, Chennai - 600002.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Location
