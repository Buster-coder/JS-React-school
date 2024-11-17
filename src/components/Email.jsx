import React, { useState } from 'react';
import Notif from '../assets/image/notification.svg';

const Email = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        
        if (
            !email.endsWith('@gmail.com') && 
            !email.endsWith('@hotmail.com') ||
            (email.match(/@/g) || []).length !== 1 ||
            !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)

        ) {
            setError(true);
            console.log('Invalid email');
            return;
        }
        setError(false);
        setSuccess(true); 
        setEmail(''); 

      

        console.log('Form submitted with email:', email);
    };

    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);

        
        if (
            !emailValue.endsWith('@gmail.com') &&
            !emailValue.endsWith('@hotmail.com') ||
            (emailValue.match(/@/g) || []).length !== 1
        ) {
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