import React from 'react';
import './packages.css';
import Ram from '../../assests/Ram.jpg'
import mumbai from '../../assests/mumbai.jpg';
import kolkata from '../../assests/kolkata.jpg';
import kedernath from '../../assests/kedernath.jpg';
import goa from '../../assests/goa.jpg';
import lakshadweep from '../../assests/lakshadweep.jpg';
import { Link as RouterLink } from 'react-router-dom';

const Packages = () => {

  return (
    <section className="packages">
      <div className="packagesSec">
        <div className='packagesTitle'>
          <span>P</span>
          <span>O</span>
          <span>P</span>
          <span>U</span>
          <span>L</span>
          <span>A</span>
          <span>P</span>
          <span>R</span>
          <span style={{ backgroundColor: 'white' }}></span>
          <span>P</span>
          <span>A</span>
          <span>C</span>
          <span>K</span>
          <span>A</span>
          <span>G</span>
          <span>E</span>
          <span>S</span>
        </div>

        <div className="packagesContainer">
          <div className='packagesSlide'>
            <div className='packagesImage'>
              <img src={Ram} alt='' />
              <div className='packagesImageIcons'>
                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                <a href='#'><i class="fa-solid fa-eye"></i></a>
                <a href='#'><i class="fa-solid fa-share"></i></a>
              </div>
            </div>
            <div className='packagesContent'>
              <h3><i class="fa-solid fa-location-dot"></i>
                <spam> Ayodhya</spam></h3>
              <p>
                Lorem ipsum  <br/>
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
              </p>
              <div className='packagesRating'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div className='packagesPrice'>
                <i class="fa-solid fa-indian-rupee-sign"></i>
                <spam> 600</spam>
              </div>
              <button>Book Now</button>
            </div>
          </div>
          <div className='packagesSlide'>
            <div className='packagesImage'>
              <img src={mumbai} alt='' />
              <div className='packagesImageIcons'>
                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                <a href='#'><i class="fa-solid fa-eye"></i></a>
                <a href='#'><i class="fa-solid fa-share"></i></a>
              </div>
            </div>
            <div className='packagesContent'>

              <h3>
                <i class="fa-solid fa-location-dot"></i>
                <span> Mumbai</span>
              </h3>
              <p>
                Lorem Ipsum  <br/>
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
              </p>
              <div className='packagesRating'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div className='packagesPrice'>
                <i class="fa-solid fa-indian-rupee-sign"></i>
                <spam> 600</spam>
              </div>
              <button>Book Now</button>
            </div>
          </div>
          <div className='packagesSlide'>
            <div className='packagesImage'>
              <img src={kolkata} alt='' />
              <div className='packagesImageIcons'>
                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                <a href='#'><i class="fa-solid fa-eye"></i></a>
                <a href='#'><i class="fa-solid fa-share"></i></a>
              </div>
            </div>
            <div className='packagesContent'>
              <h3>
                <i class="fa-solid fa-location-dot"></i>
                <spam> Kolkata</spam>
              </h3>
              <p>
                Lorem Ipsum  <br/>
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
              </p>
              <div className='packagesRating'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div className='packagesPrice'>
                <i class="fa-solid fa-indian-rupee-sign"></i>
                <spam> 600</spam>
              </div>
              <button>Book Now</button>
            </div>
          </div>
          <div className='packagesSlide'>
            <div className='packagesImage'>
              <img src={kedernath} alt='' />
              <div className='packagesImageIcons'>
                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                <a href='#'><i class="fa-solid fa-eye"></i></a>
                <a href='#'><i class="fa-solid fa-share"></i></a>
              </div>
            </div>
            <div className='packagesContent'>
              <h3><i class="fa-solid fa-location-dot"></i>
                <spam> Kedernath</spam></h3>
              <p>
                Lorem Ipsum  <br/>
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
              </p>
              <div className='packagesRating'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div className='packagesPrice'>
                <i class="fa-solid fa-indian-rupee-sign"></i>
                <spam> 600</spam>
              </div>
              <button>Book Now</button>
            </div>
          </div>
          <div className='packagesSlide'>
            <div className='packagesImage'>
              <img src={goa} alt='' />
              <div className='packagesImageIcons'>
                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                <a href='#'><i class="fa-solid fa-eye"></i></a>
                <a href='#'><i class="fa-solid fa-share"></i></a>
              </div>
            </div>
            <div className='packagesContent'>
              <h3><i class="fa-solid fa-location-dot"></i>
                <spam> Goa</spam></h3>
              <p>
                Lorem Ipsum  <br/>
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
              </p>
              <div className='packagesRating'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div className='packagesPrice'>
                <i class="fa-solid fa-indian-rupee-sign"></i>
                <spam> 600</spam>
              </div>
              <button>Book Now</button>
            </div>
          </div>
          <div className='packagesSlide'>
            <div className='packagesImage'>
              <img src={lakshadweep} alt='' height={10} />
              <div className='packagesImageIcons'>
                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                <a href='#'><i class="fa-solid fa-eye"></i></a>
                <a href='#'><i class="fa-solid fa-share"></i></a>
              </div>
            </div>
            <div className='packagesContent'>
              <h3><i class="fa-solid fa-location-dot"></i>
                <spam> lakshadweep </spam></h3>
              <p>
                Lorem Ipsum  <br/>
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
              </p>
              <div className='packagesRating'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div className='packagesPrice'>
                <i class="fa-solid fa-indian-rupee-sign"></i>
                <spam> 600</spam>
              </div>
              <button>Book Now</button>
            </div>
          </div>

        </div>
      </div>


      <div className='tohome'>
        <RouterLink to="/" >
          <button>Home</button>
        </RouterLink>
      </div>
    </section>
  );
}

export default Packages;