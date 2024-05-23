import React from 'react';
import './service.css';
import service1 from '../../assests/service1.png'
import service2 from '../../assests/service2.png'
import service3 from '../../assests/service3.png'
import service4 from '../../assests/service4.png'
import { Link as RouterLink } from 'react-router-dom';

const Service = () => {

    return (
        <section className="service">
            <div className="serviceSec">
                <div className='serviceTitle'>
                    <span>W</span>
                    <span>H</span>
                    <span>A</span>
                    <span>T</span>
                    <span></span>
                    <span>W</span>
                    <span>E</span>
                    <span></span>
                    <span>O</span>
                    <span>F</span>
                    <span>F</span>
                    <span>E</span>
                    <span>R</span>
                </div>

                <div className="serviceContainer">
                    <div className='serviceSlide'>
                        <img src={service1} alt='' />
                        <h3>Complete Guide</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente error eum minima nesciunt a minus et ea ipsam corporis
                        </p>
                        <button>Read More</button>
                    </div>
                    <div className='serviceSlide'>
                        <img src={service2} alt='' />
                        <h3>Custom Package</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente error eum minima nesciunt a minus et ea ipsam corporis
                        </p>
                        <button>Read More</button>
                    </div>
                    <div className='serviceSlide'>
                        <img src={service3} alt='' />
                        <h3>Family Trips</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente error eum minima nesciunt a minus et ea ipsam corporis
                        </p>
                        <button>Read More</button>
                    </div>
                    <div className='serviceSlide'>
                        <img src={service4} alt='' />
                        <h3>Adventure Trail</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente error eum minima nesciunt a minus et ea ipsam corporis
                        </p>
                        <button>Read More</button>
                    </div>
                    <div className='serviceSlide'>
                        <img src={service4} alt='' />
                        <h3>Adventure Trail</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente error eum minima nesciunt a minus et ea ipsam corporis
                        </p>
                        <button>Read More</button>
                    </div>
                    <div className='serviceSlide'>
                        <img src={service4} alt='' />
                        <h3>Adventure Trail</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente error eum minima nesciunt a minus et ea ipsam corporis
                        </p>
                        <button>Read More</button>
                    </div>
                    <div className='serviceSlide'>
                        <img src={service4} alt='' />
                        <h3>Adventure Trail</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente error eum minima nesciunt a minus et ea ipsam corporis
                        </p>
                        <button>Read More</button>
                    </div>
                </div>

                <div className='toservices'>
                    <RouterLink to="/services">
                        <button>Services</button>
                    </RouterLink>
                </div>
            </div>
        </section>
    );
}

export default Service;