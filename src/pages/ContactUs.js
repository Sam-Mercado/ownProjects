import React from 'react';
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function ContactUs() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage: `url(${PizzaLeft})`}}></div>
        <div className='rightSide'> 
            <h1>Contact Us</h1>
            <form id='contact-form' method='POST'>
                <label htmlFor='name'>Full Name</label> 
                <input name='name' placeholder='Enter full name...' type='text'/>
                <label htmlFor='email'>Full Name</label> 
                <input name='email' placeholder='email' type='email'/>
                <label htmlFor='message'>Message</label> 
                <textarea row="6" placeholder='Enter message...' name="message" required> </textarea>
                <button type='submit'> Send Message </button>
            </form>
        </div>
    </div>
  )
}

export default ContactUs
