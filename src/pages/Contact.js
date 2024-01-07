import React from 'react'
import foodtruck from "../assests/truck12.gif";
import '../style/Contact.css';

function Contact() {
  return (
    <div className='contact'>
        <div
        className="leftSide"
        style={{ backgroundImage: `url(${foodtruck})` }}
      ></div>
        <div className='rightside'>
            <h1>Contact Us</h1>
            <form id="contact-form" method='POST'>
                <label htmlFor='name'>Full Name</label>
                <input name="name" placeholder='Type your name' type='text'/>
                <label htmlFor='email'>Email</label>
                <input name="email" placeholder='Enter Your Mail' type='email'/>
                <label htmlFor='message'>Message</label>
                <textarea rows="5" placeholder='Enter Your Message Here....' name='message' required>
                </textarea>
                <button>Send message</button>
            </form>

        </div>
      
    </div>
  );
}

export default Contact
