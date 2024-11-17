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
        <section className="seventh-background">
            <div className="subscribe-container">
                <div className="subscribe">
                    <img className="notif" src={Notif} alt="Notification Icon" />
                    <h2 className="subscribe-head">
                        Subscribe to our newsletter to stay informed about the latest updates
                    </h2>
                </div>
                <form id="regSubmit" onSubmit={handleSubmit}>
                    <div className="emails">
                        <div className="invalid-contain">
                            <input
                                id="yourEmail"
                                type="text"
                                placeholder="✉ Your email"
                                className={`email-input ${error ? 'error' : ''}`}
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <p className="invalid-input">You need to enter a valid Email</p>
                        </div>
                        <button className="subscribe-button" type="submit">Subscribe</button>
                    </div>
                </form>
                {success && (
                    <div className="success-popup">
                        <p>Thanks for your subscription!</p>
                        <button onClick={() => setSuccess(false)}>Close</button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Email;
