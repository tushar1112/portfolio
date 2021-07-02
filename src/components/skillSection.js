import React from 'react'

function skillSection({skill,progress}) {
    return (
        <div className="skillsection">
            <div className="skill-container">
                <h5 className="skill-title">{skill}</h5>
                <div className="skill-bar">
                    <p className="skill-text">{progress}</p>
                    <div className="skill-progress">
                        <div className="progress">
                            <div className="inner-width" style={{width:progress}}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default skillSection
