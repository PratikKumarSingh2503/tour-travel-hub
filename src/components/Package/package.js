import React from 'react';
import './package.css';
import mumbai from '../../assests/mumbai.jpg';
import kolkata from '../../assests/kolkata.jpg';
import kedernath from '../../assests/kedernath.jpg';
import goa from '../../assests/goa.jpg';
import { Link as RouterLink } from 'react-router-dom';

const Package = () => {

    return (
        <section className="package">
            <div className="packageSec">
                <div className='packageTitle'>
                    <span>P</span>
                    <span>O</span>
                    <span>P</span>
                    <span>U</span>
                    <span>L</span>
                    <span>A</span>
                    <span>P</span>
                    <span>R</span>
                    <span></span>
                    <span>P</span>
                    <span>A</span>
                    <span>C</span>
                    <span>K</span>
                    <span>A</span>
                    <span>G</span>
                    <span>E</span>
                    <span>S</span>
                </div>

                <div className="packageContainer">
                    <div className='packageSlide'>
                        <div className='packageImage'>
                            <img src={mumbai} alt='' />
                            <div className='packageImageIcons'>
                                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                                <a href='#'><i class="fa-solid fa-eye"></i></a>
                                <a href='#'><i class="fa-solid fa-share"></i></a>
                            </div>
                        </div>
                        <div className='packageContent'>

                            <h3>
                                <i class="fa-solid fa-location-dot"></i>
                                <span> Mumbai</span>
                            </h3>
                            <p>
                                Lorem Ipsum Dolor Sit Amet ...
                            </p>
                            <div className='packageRating'>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div className='packagePrice'>
                                <i class="fa-solid fa-indian-rupee-sign"></i>
                                <spam> 600</spam>
                            </div>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className='packageSlide'>
                        <div className='packageImage'>
                            <img src={kolkata} alt='' />
                            <div className='packageImageIcons'>
                                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                                <a href='#'><i class="fa-solid fa-eye"></i></a>
                                <a href='#'><i class="fa-solid fa-share"></i></a>
                            </div>
                        </div>
                        <div className='packageContent'>
                            <h3>
                                <i class="fa-solid fa-location-dot"></i>
                                <spam> Kolkata</spam>
                            </h3>
                            <p>
                                Lorem Ipsum Dolor Sit Amet ...
                            </p>
                            <div className='packageRating'>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div className='packagePrice'>
                                <i class="fa-solid fa-indian-rupee-sign"></i>
                                <spam> 600</spam>
                            </div>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className='packageSlide'>
                        <div className='packageImage'>
                            <img src={kedernath} alt='' />
                            <div className='packageImageIcons'>
                                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                                <a href='#'><i class="fa-solid fa-eye"></i></a>
                                <a href='#'><i class="fa-solid fa-share"></i></a>
                            </div>
                        </div>
                        <div className='packageContent'>
                            <h3><i class="fa-solid fa-location-dot"></i>
                                <spam> Kedernath</spam></h3>
                            <p>
                                Lorem Ipsum Dolor Sit Amet ...
                            </p>
                            <div className='packageRating'>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div className='packagePrice'>
                                <i class="fa-solid fa-indian-rupee-sign"></i>
                                <spam> 600</spam>
                            </div>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className='packageSlide'>
                        <div className='packageImage'>
                            <img src={goa} alt='' />
                            <div className='packageImageIcons'>
                                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                                <a href='#'><i class="fa-solid fa-eye"></i></a>
                                <a href='#'><i class="fa-solid fa-share"></i></a>
                            </div>
                        </div>
                        <div className='packageContent'>
                            <h3><i class="fa-solid fa-location-dot"></i>
                                <spam> Goa</spam></h3>
                            <p>
                                Lorem Ipsum Dolor Sit Amet ...
                            </p>
                            <div className='packageRating'>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div className='packagePrice'>
                                <i class="fa-solid fa-indian-rupee-sign"></i>
                                <spam> 600</spam>
                            </div>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className='packageSlide'>
                        <div className='packageImage'>
                            <img src={goa} alt='' />
                            <div className='packageImageIcons'>
                                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                                <a href='#'><i class="fa-solid fa-eye"></i></a>
                                <a href='#'><i class="fa-solid fa-share"></i></a>
                            </div>
                        </div>
                        <div className='packageContent'>
                            <h3><i class="fa-solid fa-location-dot"></i>
                                <spam> Goa</spam></h3>
                            <p>
                                Lorem Ipsum Dolor Sit Amet ...
                            </p>
                            <div className='packageRating'>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div className='packagePrice'>
                                <i class="fa-solid fa-indian-rupee-sign"></i>
                                <spam> 600</spam>
                            </div>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className='packageSlide'>
                        <div className='packageImage'>
                            <img src={goa} alt='' />
                            <div className='packageImageIcons'>
                                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                                <a href='#'><i class="fa-solid fa-eye"></i></a>
                                <a href='#'><i class="fa-solid fa-share"></i></a>
                            </div>
                        </div>
                        <div className='packageContent'>
                            <h3><i class="fa-solid fa-location-dot"></i>
                                <spam> Goa</spam></h3>
                            <p>
                                Lorem Ipsum Dolor Sit Amet ...
                            </p>
                            <div className='packageRating'>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div className='packagePrice'>
                                <i class="fa-solid fa-indian-rupee-sign"></i>
                                <spam> 600</spam>
                            </div>
                            <button>Book Now</button>
                        </div>
                    </div>
                </div>

                <div className='topackage'>
                    <RouterLink to="/packages" className='shopLink'>
                        <button>Exciting Packages</button>
                    </RouterLink>
                </div>
            </div>
        </section>
    );
}

export default Package;