import React from 'react';
import './services.css';
import service1 from '../../assests/service1.png'
import service2 from '../../assests/service2.png'
import service3 from '../../assests/service3.png'
import service4 from '../../assests/service4.png'
import service5 from '../../assests/service5.png'
import service6 from '../../assests/service6.png'
import service7 from '../../assests/service7.png'
import service8 from '../../assests/service8.png'
import { Link as RouterLink } from 'react-router-dom';

const Services = () => {

  return (
    <section className="services">
      <div className="servicesSec">
        <div className='servicesTitle'>
          <span>W</span>
          <span>H</span>
          <span>A</span>
          <span>T</span>
          <span style={{ background: 'white' }}></span>
          <span>W</span>
          <span>E</span>
          <span style={{ background: 'white' }}></span>
          <span>O</span>
          <span>F</span>
          <span>F</span>
          <span>E</span>
          <span>R</span>
          <span style={{ background: 'white' }}></span>
          <span>!</span>
        </div>

        <div className="servicesContainer">

          <div className='servicesSlide'>
            <img src={service1} alt='' />
            <h3>affordable hotels</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente error eum minima nesciunt a minus et ea ipsam corporis
            </p>
            <button>Read More</button>
          </div>
          <div className='servicesSlide'>
            <img src={service2} alt='' />
            <h3>affordable hotels</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente error eum minima nesciunt a minus et ea ipsam corporis
            </p>
            <button>Read More</button>
          </div>
          <div className='servicesSlide'>
            <img src={service3} alt='' height={'50px'} width={'50px'} />
            <h3>affordable hotels</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente error eum minima nesciunt a minus et ea ipsam corporis
            </p>
            <button>Read More</button>
          </div>
          <div className='servicesSlide'>
            <img src={service4} alt='' height={'50px'} width={'50px'} />
            <h3>affordable hotels</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente error eum minima nesciunt a minus et ea ipsam corporis
            </p>
            <button>Read More</button>
          </div>
          <div className='servicesSlide'>
            <img src={service5} alt='' height={'50px'} width={'50px'} />
            <h3>affordable hotels</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente error eum minima nesciunt a minus et ea ipsam corporis
            </p>
            <button>Read More</button>
          </div>
          <div className='servicesSlide'>
            <img src={service6} alt='' height={'50px'} width={'50px'} />
            <h3>affordable hotels</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente error eum minima nesciunt a minus et ea ipsam corporis
            </p>
            <button>Read More</button>
          </div>
          <div className='servicesSlide'>
            <img src={service7} alt='' height={'50px'} width={'50px'} />
            <h3>affordable hotels</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente error eum minima nesciunt a minus et ea ipsam corporis
            </p>
            <button>Read More</button>
          </div>
          <div className='servicesSlide'>
            <img src={service8} alt='' height={'50px'} width={'50px'} />
            <h3>affordable hotels</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente error eum minima nesciunt a minus et ea ipsam corporis
            </p>
            <button>Read More</button>
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

export default Services;