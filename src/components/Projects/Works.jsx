import React from 'react'
import './Works.css'
import Proj from '../../assets/Works/Projects.js'
const Works = () => {
  return (
   <div className="projects-container" id = "pro">
     <div className="section-title"><h1>My Works</h1></div>
     <div className="work-wrapper">
     <div className="works-grid">
      {
        Proj.map(proj => {
          return <div key = {proj.proj_no}className="works-card">
             <div className="icon">
                <img src= {proj.icon} alt= {proj.proj_name} className= 'com-icons' />
             </div>
             <h3>{proj.proj_name}</h3>
             <p>{proj.proj_desc}</p>
          </div>
        })
      }
     </div>
     </div>
   </div>
  )
}

export default Works