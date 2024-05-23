import React from 'react';
import './review.css';
import review1 from '../../assests/review1.webp';
import review2 from '../../assests/review2.webp';
import review3 from '../../assests/review3.webp';
import review4 from '../../assests/review4.webp';
import { Link as RouterLink } from 'react-router-dom';

const Review = () => {

    return (
        <section className="review">
            <div className="reviewSec">
                <div className='reviewTitle'>
                    <span>C</span>
                    <span>U</span>
                    <span>S</span>
                    <span>T</span>
                    <span>O</span>
                    <span>M</span>
                    <span>E</span>
                    <span>R</span>
                    <span></span>
                    <span>R</span>
                    <span>E</span>
                    <span>V</span>
                    <span>I</span>
                    <span>E</span>
                    <span>W</span>
                </div>

                <div className="reviewContainer">

                    <div className='reviewSlide'>
                        <p className='reviewComment'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente error eum minima nesciunt a minus et ea ipsam corporis
                        </p>
                        <div className='reviewUser'>
                            <img src={review1} alt='' />
                            <div className='reviewUserInfo'>
                                <h3>John Deo</h3>
                                <span>Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className='reviewSlide'>
                        <p className='reviewComment'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente error eum minima nesciunt a minus et ea ipsam corporis
                        </p>
                        <div className='reviewUser'>
                            <img src={review2} alt='' />
                            <div className='reviewUserInfo'>
                                <h3>John Deo</h3>
                                <span>Designer</span>
                            </div>
                        </div>

                    </div>
                    <div className='reviewSlide'>
                        <p className='reviewComment'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente error eum minima nesciunt a minus et ea ipsam corporis
                        </p>
                        <div className='reviewUser'>
                            <img src={review3} alt='' />
                            <div className='reviewUserInfo'>
                                <h3>John Deo</h3>
                                <span>Designer</span>
                            </div>
                        </div>

                    </div>
                    <div className='reviewSlide'>
                        <p className='reviewComment'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente error eum minima nesciunt a minus et ea ipsam corporis
                        </p>
                        <div className='reviewUser'>
                            <img src={review4} alt='' />
                            <div className='reviewUserInfo'>
                                <h3>John Deo</h3>
                                <span>Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className='reviewSlide'>
                        <p className='reviewComment'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente error eum minima nesciunt a minus et ea ipsam corporis
                        </p>
                        <div className='reviewUser'>
                            <img src={review4} alt='' />
                            <div className='reviewUserInfo'>
                                <h3>John Deo</h3>
                                <span>Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className='reviewSlide'>
                        <p className='reviewComment'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente error eum minima nesciunt a minus et ea ipsam corporis
                        </p>
                        <div className='reviewUser'>
                            <img src={review4} alt='' />
                            <div className='reviewUserInfo'>
                                <h3>John Deo</h3>
                                <span>Designer</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='toreview'>
                    <RouterLink to="/reviews">
                        <button>All Reviews</button>
                    </RouterLink>
                </div>
            </div>
        </section>
    );
}

export default Review;