import React from 'react'
import Testimonial from './Testimonial'
import StarRatings from 'react-star-ratings'
import './Testimonials.css'
function Testimonials() {
    return (
        <div className="testimonials">
            <div className="testimonials-text">
                <h2 className="testimonials-heading">Know why they love us</h2>
                <p className="testimonials-text">Whether you’re a website beginner or an expert, our web hosting plans offer the flexibility to choose what works best for you.</p>
            </div>
            <div className="testimonials-rating">
                <div className="testimonials-star">
                    <StarRatings 
                        rating = {4.75}
                        starRatedColor = "#fcbd2b"
                        numberOfStars={5}
                        name='rating'
                        starDimension="30px"
                        starSpacing="2px"
                    />
                </div>
                <div className="testimonials-company">9.5 Hostadvice</div>
            </div>
            <div className="testimonial-card">
                <Testimonial
                text = "I definitely recommend them to everybody they have the best Encoding servers, very fast and Very responsive, their support is Awesome. I will buy only from them and recommend them to everybody. I have been happy with them ever since I bought RDP from them."
                name = "Michael Ammar"
                img = "data:image/jpeg;base64,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"
                client="Customer, USA"
                />
                <Testimonial
                text = "I definitely recommend them to everybody they have the best Encoding servers, very fast and Very responsive, their support is Awesome. I will buy only from them and recommend them to everybody. I have been happy with them ever since I bought RDP from them."
                name = "Michael Ammar"
                img = "data:image/jpeg;base64,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"
                client="Customer, USA"
                />
            </div>
        </div>
    )
}

export default Testimonials
