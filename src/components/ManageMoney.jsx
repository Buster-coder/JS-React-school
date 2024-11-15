import React from 'react'
import MobileDesktop from '../assets/image/Mobile desktop.svg'
import AppleVector from '../assets/image/Apple Vector.svg'
import GoogleVector from '../assets/image/Google Vector.svg'

const AppleGoogle = () => {
  return (
    <section className="hero">
    <div className="hero-container">
        <div className="colum-left">
            <h1>Manage all your <br />Money In one app</h1>
            <p className="app-p">We offer a new generation of the mobile banking.</p>
            <p className="app-p">Save, spend & manage money in your pocket.</p>
        </div>
        <div className="mobile-phone">
            <img src={MobileDesktop} alt="" />
        </div>
        <section id="google-apple">
            <a className="app-store" href="#">
                <img className="apple-logo" src={AppleVector} alt="" />
                <div>
                    <span className="download-on-the-text"> Download on </span>
                    <br />
                    <span className="app-store-text">App Store</span>
                </div>
            </a>
            <a className="google-store" href="#">
                <img className="google-logo" src={GoogleVector} alt="" />
                <div>
                    <span className="get-it-on-text">Get it on</span>
                    <br />
                    <span className="google-play-text">Google Play</span>
                </div>
                </a>
                <div className="container-discover">
                    <div className="circle-discover">
                        <span className="chevron-discover"><i className="fa-solid fa-chevron-down"></i></span>
                    </div>
                    <span className="discover-text">Discover more</span>
                </div>
        </section>
    </div>
</section>
  )
}

export default AppleGoogle