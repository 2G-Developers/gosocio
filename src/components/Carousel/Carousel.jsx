import React from 'react'

function Carousel({images, altText, heading, subheading, span}) {
    return (
        <header id="hero" className="hero">
            <div className="hero__img" style={{backgroundImage: `url(${images})`}}>
                {/* <img src={images} className="img-fluid" alt={altText} /> */}
                <div className="hero__caption">
                    <h3>{heading}</h3>
                    {subheading ? <p>{subheading} <span>{span}</span></p>: null}
                </div>
            </div>
        </header>
    )
}

export default Carousel
