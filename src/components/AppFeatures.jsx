import React from 'react'
import PhoneWithApp from '../assets/image/Mobile 2.svg'
import Payment from '../assets/image/payment.svg'
import Data from '../assets/image/data.svg'
import Statistic from '../assets/image/statistic.svg'
import Support from '../assets/image/payment.svg'
import Cashback from '../assets/image/payment.svg'
import Top from '../assets/image/payment.svg'

const AppFeatures = () => {
  return (
    <div className="container">

    <div className="phone-section">
    <img src={PhoneWithApp} alt="" />
    </div>

    {/* <!-- App Features section --> */}
    <div className="features-section">
        <h2>App Features</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut beatae ducimus expedita modi et tempora
            ipsa repudiandae aperiam, laudantium delectus architecto, quasi tenetur eos fuga possimus sapiente
            est fugit consequuntur!</p>

        <div className="features-grid">
            <div className="feature">
                <div className="icon"><img src={Payment} alt="" /></div>
                <div className="feature-text">
                    <h3>Easy Payments</h3>
                    <p>Finns inget enklare sätt att betala på. Till och med ett nyfött barn skulle lösa detta.
                    </p>
                </div>
            </div>
            <div className="feature">
                <div className="icon"><img src={Data} alt="" /></div>
                <div className="feature-text">
                    <h3>Data Security</h3>
                    <p>Säkrare än pentagon. Dina uppgifter kommer aldrig att komma ut.</p>
                </div>
            </div>
            <div className="feature">
                <div className="icon"><img src={Statistic} alt="" /></div>
                <div className="feature-text">
                    <h3>Cost Statistics</h3>
                    <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                </div>
            </div>
            <div className="feature">
                <div className="icon"><img src={Support} alt="" /></div>
                <div className="feature-text">
                    <h3>Support 24/7</h3>
                    <p>Man kan kontakta oss när som helst. Vi har även öppet på röda dagar.</p>
                </div>
            </div>
            <div className="feature">
                <div className="icon"><img src={Cashback} alt="" /></div>
                <div className="feature-text">
                    <h3>Regular Cashback</h3>
                    <p>Nästan så att du får tillbaka pengarna när du använder appen.</p>
                </div>
            </div>
            <div className="feature">
                <div className="icon"><img src={Top} alt="" /></div>
                <div className="feature-text">
                    <h3>Top Standards</h3>
                    <p>Finns ingen som har våran standard. Vi är höjdpunkten av perfektion</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default AppFeatures