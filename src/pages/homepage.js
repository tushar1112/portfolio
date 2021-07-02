import React from 'react'
import {faFacebook,faGithub,faYoutube,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function homepage() {
    return (
        <div className="homepage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, i am 
                    <span> D Tushar Sahu</span>
                </h1>
                <p className="hero-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Cupiditate facere, numquam vitae placeat consequatur corrupti officia 
                    quibusdam. Blanditiis doloremque nemo ex facilis neque. 
                    A sint ipsam earum nemo omnis et. 
                </p>
                <div className="icons">
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon"/>
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon"/>
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faYoutube} className="icon"/>
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon"/>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default homepage
