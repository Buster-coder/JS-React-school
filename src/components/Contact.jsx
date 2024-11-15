import React from 'react'
import Envelope from '../assets/image/icon envelope.svg'
import Plus from '../assets/image/icon plus.svg'

const Contact = () => {
  return (
    <section className="eight-background">
            <div className="contact-container">
                <h1 className="con-us">
                    Contact us
                </h1>
                <div className="emailing">
                    <div className="header-icon">
                    <img className="icon-enve" img src={Envelope} alt="" />
                <h3 className="mail-us">
                    Email us
                </h3>
                </div>
                <p className="drop-line">Please feel free to drop us a line. We will respond as soon as possible</p>
                <a href="#" className="leave-message">
                    <span className="leaving-message">Leave a message</span>
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
                </div>
                <div className="careers">
                    <div className="header-icon">
                    <img src={Plus} alt="" />
                    <h3 className="career">
                        Careers
                    </h3>
                    </div>
                    <p className="sit-ac">Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum</p>
                    <a href="#" className="sending-app">
                        <span className="send-app">Send an application</span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>   
                </div>
            </div>
            <div className="consultation-container">
                <div>
              <h2 className="online-con">
                Get Online Consultation
              </h2>
              
                  <div className="full-name">
                        <h5 className="full-na">Name</h5>
                        <input id="conName" type="text" placeholder="Name" className="name-in" />
                        <p className="con-names">You need to enter a valid Full name</p>
                    </div>
                </div>
                <div className="mail-add">
                    <h5 className="the-mail">Email address</h5>
                    <input id="conMail" type="text" placeholder="Email" className="mail-in" />
                    <p className="con-invalid">You need to enter a valid Email</p>
                </div>
                <div className="specialist">
                    <h5 className="special-ist">Specialist</h5>
                    <select name="" id="" className="special-s">
                        <option value="">Select a specialist</option>
                        <option value="">Joakim Lindh</option>
                        <option value="">Hans Mattin-Lassei</option>
                        <option value="">There Lidbom</option>
                    </select>
                </div>
                <button type="submit" id="appoint-submit" className="appointment">
                    Make an appointment
                </button>
                
            </div>
        </section>
  )
}

export default Contact