import React from 'react'
import Rating4 from '../assets/image/rating4.svg'
import AuthorGirl from '../assets/image/authorgirl.svg'
import Quotes from '../assets/image/quotes.svg'
import Rating from '../assets/image/rating.svg'
import AuthorMan from '../assets/image/authorguy.svg'
import Quotes2 from '../assets/image/quotes.svg'

const Rewiev = () => {
    return (
        <section className="fifth-background">
            <div className="container-5">
                <div className="customers">
                    <h2>Clients are<br />Loving Our App</h2>
                </div>
                <div className="customer-grid">
                    <div className="customer-rating">
                        <div className="feature-text">
                            <h3><img src={Rating4} alt="" /></h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum error accusamus
                                molestiae. Sit tempora eveniet odit. Explicabo sunt est totam porro delectus tenetur</p>
                            <div className="author-woman">
                                <img src={AuthorGirl} alt="" />
                            </div>
                            <div className="quote-icon">
                                <img src={Quotes} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="customer-rating">
                        <div className="feature-text">
                            <h3><img src={Rating} alt="" /></h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit voluptatem hic dolorum
                                nemo explicabo itaque, sit corporis dolor quas quam magni error</p>
                            <div className="author-man">
                                <img src={AuthorMan} alt="" />
                            </div>
                            <div className="quote-icon-2">
                                <img src={Quotes2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Rewiev