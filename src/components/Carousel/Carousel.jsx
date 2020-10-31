import React from 'react'

function Carousel({images, altText, heading, subheading}) {
    return (
        <header id="hero" className="hero">
            <div className="hero__img">
                <img src={images} className="img-fluid" alt={altText} />
                {/* <div className="backdrop"></div> */}
                <div className="hero__caption">
                    <h3>{heading}</h3>
                    {subheading ? <p>{subheading}</p>: null}
                </div>
            </div>
        </header>
    )
}

export default Carousel
