import React, { useState } from 'react';
import Notif from '../assets/image/notification.svg'

const Email = () => {
    const [email, setEmail] = React.useState('');
    const [error, setError] = React.useState(false);

    
    const handleSubmit = (e) => {
      e.preventDefault();

      
      if (email === '' || !email.includes('@')) {
        console.log('Invalid email');
        setError(true); 
        return;
      }

      
      setError(false);
      
      console.log('Form submitted with email:', email);
    };

    
    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
    
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            setError(true);
        } else {
            setError(false);
        }
    };

  return (
    <section class="seventh-background">
            <div class="subscribe-container">
                <div class="subscribe">
                    <img class="notif" img src={Notif} alt="" />
                    <h2 class="subscribe-head">Subscribe to our newsletter to stay informed about latest updates</h2>
                </div>
                <form id="regSubmit" onSubmit={handleSubmit}>
                <div className="emails">
                    <div className='invalid-contain'>
                        <input 
                            id='yourEmail' 
                            type="text" 
                            placeholder="✉ Your email" 
                            className={`email-input ${error ? 'error' : ''}`} 
                            value={email} 
                            onChange={handleEmailChange} 
                        />
                        <p className="invalid-input">You need to enter a valid Email</p>
                    </div>
                    <button className="subscribe-button">Subscribe</button>
                </div>
                </form>
            </div>

        </section>
  )
}


export default Email