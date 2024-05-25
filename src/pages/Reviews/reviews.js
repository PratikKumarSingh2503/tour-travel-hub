import React from 'react';
import './reviews.css';
import review1 from '../../assests/review1.webp';
import review2 from '../../assests/review2.webp';
import review3 from '../../assests/review3.webp';
import review4 from '../../assests/review4.webp';
import review5 from '../../assests/review5.jpeg';
import review6 from '../../assests/review6.jpeg';
import review7 from '../../assests/review7.png';
import review8 from '../../assests/review8.png';
import { Link as RouterLink } from 'react-router-dom';

const Reviews = () => {

    return (
        <section className="reviews">
            <div className="reviewsSec">
                <div className='reviewsTitle'>
                    <span>C</span>
                    <span>U</span>
                    <span>S</span>
                    <span>T</span>
                    <span>O</span>
                    <span>M</span>
                    <span>E</span>
                    <span>R</span>
                    <span style={{ background: 'white' }}></span>
                    <span>R</span>
                    <span>E</span>
                    <span>V</span>
                    <span>I</span>
                    <span>E</span>
                    <span>W</span>
                </div>

                <div className="reviewsContainer">

                    <div className='reviewsSlide'>
                        <p className='reviewsComment'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente error eum minima nesciunt a minus et ea ipsam corporis
                        </p>
                        <div className='reviewsUser'>
                            <img src={review1} alt='' />
                            <div className='reviewsUserInfo'>
                                <h3>John Deo</h3>
                                <span>Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className='reviewsSlide'>
                        <p className='reviewsComment'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente error eum minima nesciunt a minus et ea ipsam corporis
                        </p>
                        <div className='reviewsUser'>
                            <img src={review2} alt='' />
                            <div className='reviewsUserInfo'>
                                <h3>John Deo</h3>
                                <span>Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className='reviewsSlide'>
                        <p className='reviewsComment'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente error eum minima nesciunt a minus et ea ipsam corporis
                        </p>
                        <div className='reviewsUser'>
                            <img src={review3} alt='' />
                            <div className='reviewsUserInfo'>
                                <h3>John Deo</h3>
                                <span>Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className='reviewsSlide'>
                        <p className='reviewsComment'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente error eum minima nesciunt a minus et ea ipsam corporis
                        </p>
                        <div className='reviewsUser'>
                            <img src={review4} alt='' />
                            <div className='reviewsUserInfo'>
                                <h3>John Deo</h3>
                                <span>Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className='reviewsSlide'>
                        <p className='reviewsComment'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente error eum minima nesciunt a minus et ea ipsam corporis
                        </p>
                        <div className='reviewsUser'>
                            <img src={review5} alt='' />
                            <div className='reviewsUserInfo'>
                                <h3>John Deo</h3>
                                <span>Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className='reviewsSlide'>
                        <p className='reviewsComment'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente error eum minima nesciunt a minus et ea ipsam corporis
                        </p>
                        <div className='reviewsUser'>
                            <img src={review6} alt='' />
                            <div className='reviewsUserInfo'>
                                <h3>John Deo</h3>
                                <span>Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className='reviewsSlide'>
                        <p className='reviewsComment'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente error eum minima nesciunt a minus et ea ipsam corporis
                        </p>
                        <div className='reviewsUser'>
                            <img src={review7} alt='' />
                            <div className='reviewsUserInfo'>
                                <h3>John Deo</h3>
                                <span>Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className='reviewsSlide'>
                        <p className='reviewsComment'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente error eum minima nesciunt a minus et ea ipsam corporis
                        </p>
                        <div className='reviewsUser'>
                            <img src={review8} alt='' />
                            <div className='reviewsUserInfo'>
                                <h3>John Deo</h3>
                                <span>Designer</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='tohome'>
                <RouterLink to="/">
                    <button>Home</button>
                </RouterLink>
            </div>
        </section>
    );
}

export default Reviews;