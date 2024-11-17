import React, { useEffect, useState } from 'react';
import Rating4 from '../assets/image/rating4.svg';
import AuthorGirl from '../assets/image/authorgirl.svg';
import Quotes from '../assets/image/quotes.svg';
import Rating from '../assets/image/rating.svg';
import AuthorMan from '../assets/image/authorguy.svg';
import Quotes2 from '../assets/image/quotes.svg';

const Review = () => {
    const [reviewsData, setReviewsData] = useState([]);

    useEffect(() => {
        const fetchReviewsData = async () => {
            try {
                const response = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');
                const data = await response.json();
                console.log(data);
                setReviewsData(data);
            } catch (err) {
                console.error('Failed to fetch reviews:', err);
            }
        };

        fetchReviewsData();
    }, []);

    return (
        <section className="fifth-background">
            <div className="container-5">
                <div className="customers">
                    <h2>Clients are<br />Loving Our App</h2>
                </div>
                <div className="customer-grid">
                    {reviewsData.map((review, index) => (
                        <div key={index} className="customer-rating">
                            <div className="feature-text">
                                <h3>
                                    <img 
                                        src={review.starRating === 4 ? Rating4 : Rating} 
                                        alt="rating" 
                                    />
                                </h3>
                                <p>{review.comment}</p>
                                <div className="author-info">
                                    <img src={review.avatarUrl || (index % 2 === 0 ? AuthorGirl : AuthorMan)} alt={review.author} />
                                    <div className="author-details">
                                        <p>{review.author}</p>
                                        
                                        {review.jobRole && <p className="author-jobrole">{review.jobRole}</p>}
                                    </div>
                                </div>
                                {index % 2 === 0 ? (
                                    <div className="quote-icon">
                                        <img src={Quotes} alt="quote icon" />
                                    </div>
                                ) : (
                                    <div className="quote-icon-2">
                                        <img src={Quotes2} alt="quote icon" />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Review;
