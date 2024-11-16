import React, { useEffect } from 'react';
import PhoneGreen from '../assets/image/icongreen.svg';
import PhoneIcon from '../assets/image/iconphone.svg';

const FAQ = () => {
  useEffect(() => {
    let lastChecked = null;


    const radioButtons = document.querySelectorAll('.input-radio');


    radioButtons.forEach((radio) => {
      radio.addEventListener('click', function () {
        if (radio === lastChecked) {
          radio.checked = false;
          lastChecked = null;
        } else {
          lastChecked = radio;
        }
      });
    });


    return () => {
      radioButtons.forEach((radio) => {
        radio.removeEventListener('click', () => { });
      });
    };
  }, []);

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
              <img src={PhoneIcon} alt="" />
              <p className="phone-p">Still have questions?</p>
              <a href="" className="the-phone-1">
                <span>Contact us</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="call-feature-2">
            <div className="the-phones">
              <img src={PhoneGreen} alt="" />
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
            <li>
              <input
                type="radio"
                name="accordion"
                id="first-collapse"
                className="input-radio"
              />
              <label htmlFor="first-collapse" className="lab-text">
                Is any of my personal information stored in the App
                <span className="circles">
                  <i className="fa-solid fa-chevron-up"></i>
                </span>
              </label>
              <div className="all-content">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorem delectus nesciunt veritatis ipsa deserunt nemo facilis
                  labore! Numquam quasi reprehenderit praesentium saepe libero
                  ea voluptate. Nostrum nam ullam omnis praesentium?
                </p>
              </div>
            </li>
            <li>
              <input
                type="radio"
                name="accordion"
                id="second-collapse"
                className="input-radio"
              />
              <label htmlFor="second-collapse" className="lab-text">
                What formats can I download my transaction history in?
                <span className="circles">
                  <i className="fa-solid fa-chevron-up"></i>
                </span>
              </label>
              <div className="all-content">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorem delectus nesciunt veritatis ipsa deserunt nemo facilis
                  labore! Numquam quasi reprehenderit praesentium saepe libero
                  ea voluptate. Nostrum nam ullam omnis praesentium?
                </p>
              </div>
            </li>
            <li>
              <input
                type="radio"
                name="accordion"
                id="third-collapse"
                className="input-radio"
              />
              <label htmlFor="third-collapse" className="lab-text">
                Can I schedule future transfers?
                <span className="circles">
                  <i className="fa-solid fa-chevron-up"></i>
                </span>
              </label>
              <div className="all-content">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorem delectus nesciunt veritatis ipsa deserunt nemo facilis
                  labore! Numquam quasi reprehenderit praesentium saepe libero
                  ea voluptate. Nostrum nam ullam omnis praesentium?
                </p>
              </div>
            </li>
            <li>
              <input
                type="radio"
                name="accordion"
                id="fourth-collapse"
                className="input-radio"
              />
              <label htmlFor="fourth-collapse" className="lab-text">
                When can I use Banking App services?
                <span className="circles">
                  <i className="fa-solid fa-chevron-up"></i>
                </span>
              </label>
              <div className="all-content">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorem delectus nesciunt veritatis ipsa deserunt nemo facilis
                  labore! Numquam quasi reprehenderit praesentium saepe libero
                  ea voluptate. Nostrum nam ullam omnis praesentium?
                </p>
              </div>
            </li>
            <li>
              <input
                type="radio"
                name="accordion"
                id="fifth-collapse"
                className="input-radio"
              />
              <label htmlFor="fifth-collapse" className="lab-text">
                Can I create my own password that is easy for me to remember?
                <span className="circles">
                  <i className="fa-solid fa-chevron-up"></i>
                </span>
              </label>
              <div className="all-content">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorem delectus nesciunt veritatis ipsa deserunt nemo facilis
                  labore! Numquam quasi reprehenderit praesentium saepe libero
                  ea voluptate. Nostrum nam ullam omnis praesentium?
                </p>
              </div>
            </li>
            <li>
              <input
                type="radio"
                name="accordion"
                id="sixth-collapse"
                className="input-radio"
              />
              <label htmlFor="sixth-collapse" className="lab-text">
                What happens if I forget or lose my password?
                <span className="circles">
                  <i className="fa-solid fa-chevron-up"></i>
                </span>
              </label>
              <div className="all-content">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorem delectus nesciunt veritatis ipsa deserunt nemo facilis
                  labore! Numquam quasi reprehenderit praesentium saepe libero
                  ea voluptate. Nostrum nam ullam omnis praesentium?
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQ;