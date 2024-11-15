import React from 'react'
import Carousel from '../assets/image/carousel.svg'

const HowDoesItWork = () => {
  return (
    <section className="thirdpage-background">
            <div className="container-3">
                <div className="thir-page-container">
                    <h2 className="third-h2">How does it work?</h2>
                </div>
                <div>
                <img src={Carousel} alt="" />
                </div>
                <h3 className="third-h3">Latest transaction history</h3>
                <p className="third-p">Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis
                    tristique<br /> quisque hac in consectetur condimentum. </p>
            </div>
    </section>
  )
}

export default HowDoesItWork