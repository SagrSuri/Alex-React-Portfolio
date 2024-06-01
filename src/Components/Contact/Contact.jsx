import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
    <div id='Contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="theme_pattern" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects, so feel free to send me a message anthing that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" />
                        <p>greatstackdev@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" />
                        <p>+91888888888</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" />
                        <p>Nagpur, Maharashtra, 441202</p>
                    </div>
                </div>
            </div>
            <form className="contact-right">
                <label id='name' htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' id='name' />
                <label id='email' htmlFor="">Your Email</label>
                <input id='email' type="email" placeholder='Enter your email' name='email' />
                <label id='message' htmlFor="">Write your message here</label>
                <textarea id='message' name="message" placeholder='Enter your message' rows="8"></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact