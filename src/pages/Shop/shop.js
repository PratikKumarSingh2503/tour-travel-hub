import React from 'react';
import './shop.css';
import shop1 from '../../assests/shop1.webp';
import shop2 from '../../assests/shop2.webp';
import shop3 from '../../assests/shop3.jpg';
import shop4 from '../../assests/shop4.jpg';
import shop5 from '../../assests/shop5.webp';
import shop6 from '../../assests/shop6.jpg';
import shop7 from '../../assests/shop7.png';
import shop8 from '../../assests/shop8.jpg';
import { Link as RouterLink } from 'react-router-dom';


const Shop = () => {

  return (
    <div className='shop'>
      <div className="shopSec">
        <div className='shopTitle'>
          <span>F</span>
          <span>E</span>
          <span>A</span>
          <span>T</span>
          <span>U</span>
          <span>R</span>
          <span>E</span>
          <span>D</span>
          <span style={{ background: 'white' }}></span>
          <span>P</span>
          <span>R</span>
          <span>O</span>
          <span>D</span>
          <span>U</span>
          <span>C</span>
          <span>T</span>
          <span>S</span>
        </div>

        <div className="shopContainer">
          <div className='shopSlide'>
            <div className='shopImage'>
              <img src={shop1} alt='' />
              <div className='shopImageIcons'>
                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                <a href='#'><i class="fa-solid fa-eye"></i></a>
                <a href='#'><i class="fa-solid fa-share"></i></a>
              </div>
            </div>
            <div className='shopContent'>
              <h3>Survival Kits</h3>
              <p>
                $5.00 - $25.00
              </p>
              <button>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </button>
            </div>
          </div>
          <div className='shopSlide'>
            <div className='shopImage'>
              <img src={shop2} alt='' />
              <div className='shopImageIcons'>
                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                <a href='#'><i class="fa-solid fa-eye"></i></a>
                <a href='#'><i class="fa-solid fa-share"></i></a>
              </div>
            </div>
            <div className='shopContent'>
              <h3>Survival Kits</h3>
              <p>
                $5.00 - $25.00
              </p>
              <button>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </button>
            </div>
          </div>
          <div className='shopSlide'>
            <div className='shopImage'>
              <img src={shop3} alt='' />
              <div className='shopImageIcons'>
                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                <a href='#'><i class="fa-solid fa-eye"></i></a>
                <a href='#'><i class="fa-solid fa-share"></i></a>
              </div>
            </div>
            <div className='shopContent'>
              <h3>Survival Kits</h3>
              <p>
                $5.00 - $25.00
              </p>
              <button>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </button>
            </div>
          </div>
          <div className='shopSlide'>
            <div className='shopImage'>
              <img src={shop4} alt='' />
              <div className='shopImageIcons'>
                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                <a href='#'><i class="fa-solid fa-eye"></i></a>
                <a href='#'><i class="fa-solid fa-share"></i></a>
              </div>
            </div>
            <div className='shopContent'>
              <h3>Survival Kits</h3>
              <p>
                $5.00 - $25.00
              </p>
              <button>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </button>
            </div>
          </div>
          <div className='shopSlide'>
            <div className='shopImage'>
              <img src={shop5} alt='' />
              <div className='shopImageIcons'>
                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                <a href='#'><i class="fa-solid fa-eye"></i></a>
                <a href='#'><i class="fa-solid fa-share"></i></a>
              </div>
            </div>
            <div className='shopContent'>
              <h3>Survival Kits</h3>
              <p>
                $5.00 - $25.00
              </p>
              <button>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </button>
            </div>
          </div>
          <div className='shopSlide'>
            <div className='shopImage'>
              <img src={shop6} alt='' />
              <div className='shopImageIcons'>
                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                <a href='#'><i class="fa-solid fa-eye"></i></a>
                <a href='#'><i class="fa-solid fa-share"></i></a>
              </div>
            </div>
            <div className='shopContent'>
              <h3>Survival Kits</h3>
              <p>
                $5.00 - $25.00
              </p>
              <button>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </button>
            </div>
          </div>
          <div className='shopSlide'>
            <div className='shopImage'>
              <img src={shop7} alt='' />
              <div className='shopImageIcons'>
                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                <a href='#'><i class="fa-solid fa-eye"></i></a>
                <a href='#'><i class="fa-solid fa-share"></i></a>
              </div>
            </div>
            <div className='shopContent'>
              <h3>Survival Kits</h3>
              <p>
                $5.00 - $25.00
              </p>
              <button>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </button>
            </div>
          </div>
          <div className='shopSlide'>
            <div className='shopImage'>
              <img src={shop8} alt='' />
              <div className='shopImageIcons'>
                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                <a href='#'><i class="fa-solid fa-eye"></i></a>
                <a href='#'><i class="fa-solid fa-share"></i></a>
              </div>
            </div>
            <div className='shopContent'>
              <h3>Survival Kits</h3>
              <p>
                $5.00 - $25.00
              </p>
              <button>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </button>
            </div>
          </div>
          <div className='shopSlide'>
            <div className='shopImage'>
              <img src={'/'} alt='' />
              <div className='shopImageIcons'>
                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                <a href='#'><i class="fa-solid fa-eye"></i></a>
                <a href='#'><i class="fa-solid fa-share"></i></a>
              </div>
            </div>
            <div className='shopContent'>
              <h3>Survival Kits</h3>
              <p>
                $5.00 - $25.00
              </p>
              <button>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </button>
            </div>
          </div>
          <div className='shopSlide'>
            <div className='shopImage'>
              <img src={'/'} alt='' />
              <div className='shopImageIcons'>
                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                <a href='#'><i class="fa-solid fa-eye"></i></a>
                <a href='#'><i class="fa-solid fa-share"></i></a>
              </div>
            </div>
            <div className='shopContent'>
              <h3>Survival Kits</h3>
              <p>
                $5.00 - $25.00
              </p>
              <button>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </button>
            </div>
          </div>
          <div className='shopSlide'>
            <div className='shopImage'>
              <img src={'/'} alt='' />
              <div className='shopImageIcons'>
                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                <a href='#'><i class="fa-solid fa-eye"></i></a>
                <a href='#'><i class="fa-solid fa-share"></i></a>
              </div>
            </div>
            <div className='shopContent'>
              <h3>Survival Kits</h3>
              <p>
                $5.00 - $25.00
              </p>
              <button>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </button>
            </div>
          </div>
          <div className='shopSlide'>
            <div className='shopImage'>
              <img src={'/'} alt='' />
              <div className='shopImageIcons'>
                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                <a href='#'><i class="fa-solid fa-eye"></i></a>
                <a href='#'><i class="fa-solid fa-share"></i></a>
              </div>
            </div>
            <div className='shopContent'>
              <h3>Survival Kits</h3>
              <p>
                $5.00 - $25.00
              </p>
              <button>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </button>
            </div>
          </div>

        </div>
      </div>
      

      <div className='tohome'>
          <RouterLink to="/">
            <button>Home</button>
          </RouterLink>
        </div>
    </div>
  );
}

export default Shop;