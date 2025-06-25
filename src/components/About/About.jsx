import React, { useState } from "react";
import "../About/About.css";
import PassPort from "../About/PassPort.jpeg";
const About = () => {
  const [active , setActive] = useState('Core')
   return (
    <section className="about" id="About">
      <h1 className="about-title">
        About Me
      </h1>
      <div className="about-sections">
        <div className="about-left">
          <img src={PassPort} />
        </div>
        <div className="about-right">
          <p>
            I'm Pranay Sai Kolloju , a passionate Engineer with a strong
            foundation in Core Languages , iam a
            Front-end Web Developer with hands-on experience in web Technologies. I build responsive , interactive and
            user-friendly interfaces with clean , maintainable code and a focus
            on performance and design aesthetics.I graduated with a degree in
            Computer Science and Engineering from Vaagdevi College Of
            Engineering
          </p>
          <div className="Skill-set">
            <button onClick={()=>setActive('Core')} className={ active === 'Core' ? "active" : ""}>Core Programming</button>
            <button onClick={()=>setActive("Web")}className={ active === 'Web' ? "active" : ""}>Web Technologies</button>
            <button onClick={()=>setActive("Education")} className={ active === 'Education' ? "active" : ""}>Education</button>
          </div>
          <div className="result">
            {active === 'Core' && (
              <div className="Core">
                <div className="skill">
                  <h3>C Lang</h3>
                <hr className="c-line"/>
                </div> 
                <div className="skill">
                   <h3>Python</h3>
                <hr className="p-line"/>
                </div>
                <div className="skill">
                  <h3>Java</h3>
                <hr className="j-line"/>
                </div>
                
              </div>
            )}
            {
             active === 'Web' && (
              <div className="web">
                <div className="skill">
                    <h3>HTML&CSS</h3>
                <hr className="h-line" />
                </div>
                <div className="skill">
                   <h3>JavaScript</h3>
                <hr className="js-line"/>
                </div>
                <div className="skill">
                <h3>React js</h3>
                <hr className="react-line"/>
                </div>

                
              </div>
             )
            }
            {
              active === 'Education' && (
                <div className="edu">
                  
                      <h3>Bachelor Of Technology</h3>
                  <p>CSE (AI & ML) | 2021 - 2025 | CGPA : 8.7</p>
                    <h3>Intermediate</h3>
                    <p>MPC | 2019-2021 | Marks : 912/1000</p>
                    <h3>Secondary Education</h3>
                    <p>2018-2019 | CGPA : 9.5</p>
                </div>
              )
            }
          </div>
        </div>
 
      </div>
             <div className="acheived">
        <div className="acheive">
          <h1>4yrs</h1>
          <p>Merit Scholarship</p>
        </div>
        <div className="acheive">
          <h1>2023</h1>
          <p>Best Calender Award</p>
        </div>
        <div className="acheive">
          <h1>2022</h1>
          <p>Technical Quiz Winner</p>
        </div>
        <div className="acheive">
          <h1>4+ yrs</h1>
          <p>Coding Experience</p>
        </div>
      </div>

    </section>
  );
};

export default About;
