import React, { useEffect, useState } from 'react';
import PhoneGreen from '../assets/image/icongreen.svg';
import PhoneIcon from '../assets/image/iconphone.svg';

const FAQ = () => {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
        const data = await response.json();
        setFaqData(data);
      } catch (err) {
        console.error('Failed to fetch FAQs:', err);
      }
    };

    fetchFaqData();
  }, []);

  useEffect(() => {
    let lastChecked = null;

    const radioButtons = document.querySelectorAll('.input-radio');

    const handleClick = (event) => {
      const radio = event.target;
      if (radio === lastChecked) {
        radio.checked = false;
        lastChecked = null;
      } else {
        lastChecked = radio;
      }
    };

    radioButtons.forEach((radio) => {
      radio.addEventListener('click', handleClick);
    });

    return () => {
      radioButtons.forEach((radio) => {
        radio.removeEventListener('click', handleClick);
      });
    };
  }, [faqData]); 

  return (
    <section className="sixth-background">
      <div className="phone-container">
        <div className="the-left-text">
          <h2>
            Any questions?
            <br />
            Check out the FAQs
          </h2>
          <p className="phony-p">
            Still have unanswered questions and need to get
            <br />
            in touch?
          </p>
          <div className="call-feature">
            <div className="the-phone">
              <img src={PhoneIcon} alt="Phone Icon" />
              <p className="phone-p">Still have questions?</p>
              <a href="#" className="the-phone-1">
                <span>Contact us</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="call-feature-2">
            <div className="the-phones">
              <img src={PhoneGreen} alt="Phone Green Icon" />
              <p className="phone-p">Don’t like phone calls?</p>
              <a href="#" className="the-phone-1">
                <span className="phones-green">Contact us</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="the-right-stuff">
          <ul className="the-right-side">
            {faqData.map((faq) => (
              <li key={faq.id}>
                <input
                  type="radio"
                  name="accordion"
                  id={faq.id}
                  className="input-radio"
                />
                <label htmlFor={faq.id} className="lab-text">
                  {faq.title}
                  <span className="circles">
                    <i className="fa-solid fa-chevron-up"></i>
                  </span>
                </label>
                <div className="all-content">
                  <p>{faq.content}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
