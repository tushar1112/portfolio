import React from 'react'
import Tittle from '../components/Tittle'
import SkillSection from './../components/skillSection';
function Skills() {
    return (
        <div>
            <Tittle title={'My Skills'} span={'My Skills'}/>
            <div className="skills-container">
                <SkillSection skill={'C'} progress={'70%'}/>
                <SkillSection skill={'C++'} progress={'70%'}/>
                <SkillSection skill={'JavaScript'} progress={'50%'}/>
                <SkillSection skill={'React.js'} progress={'60%'}/>
                <SkillSection skill={'HTML'} progress={'70%'}/>
                <SkillSection skill={'CSS'} progress={'60%'}/>
                <SkillSection skill={'Bootstrap'} progress={'60%'}/>
                <SkillSection skill={'Node.js'} progress={'50%'}/>
                <SkillSection skill={'MongoDB'} progress={'50%'}/>
                <SkillSection skill={'RestApi'} progress={'50%'}/>
            </div>
        </div>
    )
}

export default Skills
