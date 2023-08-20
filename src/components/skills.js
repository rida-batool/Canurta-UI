import React, {useState} from "react"
import data from "../yourdata"

const Skills = () => {

  const [skillShowing, setSkillShowing] = useState("Skills");
  const [unsub, setUnsub] = useState();


  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>{skillShowing}</h1>
          <div className="skills-grid">
            {data.skills.map((skill, index) => (
              <div className="skill" key={index}>
                <img 
                onMouseEnter = {()=>{
                  clearTimeout(unsub)
                  setSkillShowing(skill.name)}} 
                onMouseLeave = {()=>{
                
                  const unsub = setTimeout(() => {
                    setSkillShowing("Skills")
                  }, 3000);

                  setUnsub(unsub);
                  
                }}
                src={skill.img} alt="css"></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
