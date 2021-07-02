import React from 'react'
import display from '../display.jpg';
function image() {
    return (
        <div className="imagesection">
            <div className="img">
                <img src={display} alt=""/>
            </div>
            <div className="about-info">
                <h4> I am <span> D Tushar</span></h4>
                <p>
                    my name is D tushar. i love Cp and baketball. 
                    i want job in MNCs like Google and amazon. i am currently studing at
                    army institute of technology.
                </p>
            <div className="about-details">
                <div className="left-section">
                    <p>Full Name</p>
                    <p>Age</p>
                    <p>profession</p>
                    <p>country</p>
                </div>
                <div className="right-section">
                    <p>: D Tushar</p>
                    <p>: 21</p>
                    <p>: web developer</p>
                    <p>: India</p>
                </div>
            </div>
            <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default image
