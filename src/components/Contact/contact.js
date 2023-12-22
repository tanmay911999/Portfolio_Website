import React, { useRef } from 'react'
import './contact.css'
import LinkdinIcon from '../../assets/linkedin.png'
import NokariIcon from '../../assets/nokari.png'
import GithubIcon from '../../assets/github.png'
import SkypeIcon from '../../assets/skype.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_73budbq', 'template_veg0qms', form.current, 'rzJHQhdutwkHKc2pm')
    .then((result) => {
        console.log(result.text);
        e.target.reset();
        alert('Email Sent');
    }, (error) => {
        console.log(error.text);
    });
  };
  return (
    <section id='contactPage'>
      <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDecs'>Please fill out the form below to discus any work opportunities</span>

        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name' name='your_name'/>
            <input type='email' className='email' placeholder='Your email' name='your_email'/>
            <textarea className='msg' name='message' rows='6' placeholder='Your message'></textarea>
            <button type='submit' value='Send' className='submitBtn'>Submit</button>
            <div className='links'>
            <img src={LinkdinIcon} alt='Linkdin' className='link'/>
            <img src={NokariIcon} alt='Nokari' className='link'/>
            <img src={GithubIcon} alt='Github' className='link'/>
            <img src={SkypeIcon} alt='Skype' className='link'/>
            </div>         
        </form>

      </div>
    </section>
  )
}

export default Contact
