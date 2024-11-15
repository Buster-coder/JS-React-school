import React from 'react'
import PinMap from '../assets/image/pin-map.svg'
import PhoneCall from '../assets/image/bx-phone-call.svg'
import TimeFive from '../assets/image/bx-time-five.svg'
import Facebook from '../assets/image/facebook.svg'
import Twitter from '../assets/image/twitter.svg'
import Instagram from '../assets/image/instagram.svg'
import Youtube from '../assets/image/youtube.svg'


const Location = () => {
    return (
        <section class="ninth-background">
            <div class="map-container">
                <iframe src="https://www.google.com/maps/d/embed?mid=1sDOyTD14_beKdMxYBWXlKelPvnkeQVI&ehbc=2E312F"
                    width="640" height="480"></iframe>
            </div>
            <div class="medical-container" >
                <div class="florida-center">
                    <h3 class="florida-header">
                        Florida Medical Center
                    </h3>
                    <p class="florida-loc"><img src={PinMap} alt="" />5000 W Oakland Park Blvd, Fort Lauderdale, FL
                        33313</p>
                    <p class="florida-tel"><img src={PhoneCall} alt="" />+1 954-735-6000</p>
                    <p class="florida-hours"><img src={TimeFive} alt="" /><strong class="days">Mon - Fri:</strong>
                     Open around the clock</p>
                    <p class="florida-weekend"><strong class="days">Sat - Sun:</strong>Open around the clock</p>
                    <a class="florida-web" href="https://floridamedctr.org/"><i
                        class="fa-solid fa-globe"></i>www.floridamedctr.org</a>
                    <div class="social-flo">
                        <img src={Facebook} alt="" />
                        <img src={Twitter} alt="" />
                        <img src={Instagram} alt="" />
                        <img src={Youtube} alt="" />
                    </div>
                </div>
                <div class="medical-center">
                    <h3 class="medical-header">
                        Medical Center International
                    </h3>
                    <p class="medical-loc"><img src={PinMap} alt="" />401 E Oakland Park Blvd, Oakland Park, FL 33334
                    </p>
                    <p class="medical-tel"><img src={PhoneCall} alt="" />+1 954-916-7241</p>
                    <p class="medical-hours"><img src={TimeFive} alt="" /><strong class="days">Mon - Sat:</strong>
                        09:00 am – 06:00 pm</p>
                    <p class="medical-weekend"><strong class="days">Sun:</strong> Closed</p>
                    <a class="medical-web" href="https://medicalcenterinternational.com/"><i
                        class="fa-solid fa-globe"></i>www.medicalcenterinternational.com/</a>
                    <div class="social-flo">
                        <img src={Facebook} alt="" />
                        <img src={Twitter} alt="" />
                        <img src={Instagram} alt="" />
                        <img src={Youtube} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Location