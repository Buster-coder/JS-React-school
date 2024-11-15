import React from 'react'
import Brandbox1 from '../assets/image/Brand-1.svg'
import Brandbox2 from '../assets/image/Brand-2.svg'
import Brandbox3 from '../assets/image/Brand-3.svg'
import Brandbox4 from '../assets/image/Brand-4.svg'
import Brandbox5 from '../assets/image/Brand-5.svg'
import Brandbox6 from '../assets/image/Brand-6.svg'

const BrandBoxes = () => {
    return (
        <main>
            <section id="branding">
                <div className="container">
                    <div id="brand-1" className="brand-box">
                        <img src={Brandbox1} alt="" />
                    </div>
                    <div id="brand-2" className="brand-box">
                        <img src={Brandbox2} alt="" />
                    </div>
                    <div id="brand-3" className="brand-box">
                        <img src={Brandbox3} alt="" />
                    </div>
                    <div id="brand-4" className="brand-box">
                        <img src={Brandbox4} alt="" />
                    </div>
                    <div id="brand-5" className="brand-box">
                        <img src={Brandbox5} alt="" />
                    </div>
                    <div id="brand-6" className="brand-box">
                        <img src={Brandbox6} alt="" />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default BrandBoxes