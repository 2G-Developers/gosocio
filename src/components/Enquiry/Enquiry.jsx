import React, { useState } from 'react'
import Dropdown from '../Dropdown/Dropdown';
import ArrowRightCircle from '../../images/arrow-right-circle.svg'

function Enquiry() {
    const [enquiriesChecked, setEnquiriesChecked] = useState(true);
    
    const tabForm = () => {
        if(enquiriesChecked) {
            return (
                <div className="enquiry__pane mt-4">
                    <form>
                        <div className="enquiry__form">
                            <input type="text" className="enquiry__input" placeholder="First Name" />
                            <input type="text" className="enquiry__input" placeholder="Last Name" />
                            <input type="text" className="enquiry__input" placeholder="Company Name" />
                        </div>
                        <div className="enquiry__form mt-5">
                            <input type="text" className="enquiry__input" placeholder="Email address" />
                            <input type="text" className="enquiry__input" placeholder="Phone" />
                        </div>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="enquiry__pane mt-4">
                    <form>
                        <div className="enquiry__form">
                            <input type="text" className="enquiry__input" placeholder="First Name" />
                            <input type="text" className="enquiry__input" placeholder="Last Name" />
                            <Dropdown />
                        </div>
                        <div className="enquiry__form">
                            <input type="text" className="enquiry__input" placeholder="Email address" />
                            <input type="text" className="enquiry__input" placeholder="Phone" />
                        </div>
                    </form>
                </div>
            )
        }
    }

    return (
        <section id="enquiry" className="enquiry">
            <div className="container">
                <div className="row" style={{justifyContent: "center"}}>
                    <div className="col-md-8">
                        <div className="enquiry__wrapper">
                            <ul className="enquiry__tabs">
                                <li className={`enquiry__item ${enquiriesChecked ? 'enquiry__item--active': ''}`} onClick={() => setEnquiriesChecked(true)}>
                                    {/* eslint-disable-next-line */
                                    }<a className={`enquiry__link ${enquiriesChecked ? 'enquiry__link--active': ''}`}>Business Enquiries</a>
                                </li>
                                <li className={`enquiry__item ${!enquiriesChecked ? 'enquiry__item--active': ''}`} onClick={() => setEnquiriesChecked(false)}>
                                    {/* eslint-disable-next-line */
                                    }<a className={`enquiry__link ${!enquiriesChecked ? 'enquiry__link--active': ''}`}>Careers</a>
                                </li>
                            </ul>
                            <div className="enquiry__content">
                                { tabForm() }
                            </div>
                            <div className="enquiry__button">
                                <span className="enquiry__button--text">Send</span>
                                <img src={ArrowRightCircle} alt="Arrow right circle"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Enquiry
