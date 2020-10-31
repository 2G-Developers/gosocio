import React from 'react'
// import {ReactComponent as facebook} from '../../images/facebook.svg'
// import instagram from '../../images/instagram.svg'
// import linkedin from '../../images/linkedin.svg'

function Footer() {
    let year = new Date().getFullYear();

    return (
        <footer id="footer" className="footer">
            <div className="footer__wrapper">
                <div className="footer__text">
                    <span className="year">{year}</span> GO SocioButterfly Pvt Ltd. All Right Reserved.
                </div>
                <div className="footer__icon">
                    {/* <a href="faceboo.com" className="footer__link">
                        <img src={facebook} alt=""/>
                    </a>
                    <a href="faceboo.com">
                        <img src={instagram} alt="" className="footer__link"/>
                    </a>
                    <a href="faceboo.com">
                        <img src={linkedin} alt="" className="footer__link"/>
                    </a> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer
