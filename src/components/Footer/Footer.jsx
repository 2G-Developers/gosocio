import React from 'react'
import { NavLink } from "react-router-dom";

import {ReactComponent as Facebook} from '../../images/facebook.svg'
import {ReactComponent as Instagram} from '../../images/instagram.svg'
import {ReactComponent as Linkedin} from '../../images/linkedin.svg'

function Footer() {

    return (
        <footer id="footer" className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer__wrapper">
                        <ul className="footer__nav">
                            <li className="footer__item">
                                <NavLink exact activeStyle={{color: "#EB4D37" }} to="/" className="footer__link">Home</NavLink>
                            </li>
                            <li className="footer__item">
                                <NavLink exact activeStyle={{color: "#EB4D37" }} to="/about" className="footer__link">About Us</NavLink>
                            </li>
                            <li className="footer__item">
                                <NavLink exact activeStyle={{color: "#EB4D37" }} to="/contact" className="footer__link">Contact</NavLink>
                            </li>
                        </ul>

                        <span className="footer__text">© 2020 Go Sociobutterfly. All rights reserved.</span>

                        <ul className="footer__nav">
                            <li className="footer__item footer__item--icon">
                                <a href="https://instagram.com/gosociobutterfly?igshid=1x6vyl7dz6e6h" target="_blank" rel="noreferrer" className="footer__link">
                                    <Instagram width="1rem" height="1rem" fill="#fff" />
                                </a>
                            </li>
                            <li className="footer__item footer__item--icon">
                                <a href="https://www.facebook.com/gosociobutterfly" target="_blank" rel="noreferrer" className="footer__link">
                                    <Facebook width="1rem" height="1rem" fill="#fff" />
                                </a>
                            </li>
                            <li className="footer__item footer__item--icon">
                                <a href="https://www.linkedin.com/company/go-socialbutterfly" target="_blank" rel="noreferrer" className="footer__link">
                                    <Linkedin width="1rem" height="1rem" fill="#fff" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
