import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div id='About' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="theme_pattern" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img className='profile_image' src={profile_img} alt="profile_img" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experienced Frontend Developer with over a decade of professional experities in the field. Troughout my corner. I have had the privilage of collaborating with prestigious organizations, contributing to their success and growth.</p>
                    <p>My passion for frontend development is not only refflected in my extensive experience but also in the enthusiasm I bring to each project.</p>
                </div>
                
                <div className="about-skills">
                  <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                  <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                  <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}} /></div>
                  <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}} /></div>
                </div>

            </div>
            
        </div>
        <div className="about-achivements">
            <div className="about-achievment">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievment">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievment">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About