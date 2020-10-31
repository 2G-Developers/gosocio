import React from 'react'
import { Link } from "react-router-dom";

function Button() {
    return (
        <>
            <Link to="/about" className="primary__cta">View All Work</Link>
        </>
    )
}

export default Button
