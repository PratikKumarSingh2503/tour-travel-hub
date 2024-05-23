import React, { useRef } from 'react';
import './product.css';
import shop1 from '../../assests/shop1.webp';
import shop2 from '../../assests/shop2.webp';
import shop3 from '../../assests/shop3.jpg';
import shop4 from '../../assests/shop4.jpg';
import shop5 from '../../assests/shop5.webp';
import shop6 from '../../assests/shop6.jpg';
import shop7 from '../../assests/shop7.png';
import shop8 from '../../assests/shop8.jpg';
import { Link as RouterLink } from 'react-router-dom';

const Product = () => {

    

    return (
        <section className="product">
            <div className="productSec">
                <div className='productTitle'>
                    <span>F</span>
                    <span>E</span>
                    <span>A</span>
                    <span>T</span>
                    <span>U</span>
                    <span>R</span>
                    <span>E</span>
                    <span>D</span>
                    <span> </span>
                    <span>P</span>
                    <span>R</span>
                    <span>O</span>
                    <span>D</span>
                    <span>U</span>
                    <span>C</span>
                    <span>T</span>
                    <span>S</span>
                </div>

                <div className="productContainer">
                    <div className='productSlide'>
                        <div className='productImage'>
                            <img src={shop1} alt='' />
                            <div className='productImageIcons'>
                                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                                <a href='#'><i class="fa-solid fa-eye"></i></a>
                                <a href='#'><i class="fa-solid fa-share"></i></a>
                            </div>
                        </div>
                        <div className='productContent'>
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
                    <div className='productSlide'>
                        <div className='productImage'>
                            <img src={shop2} alt='' />
                            <div className='productImageIcons'>
                                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                                <a href='#'><i class="fa-solid fa-eye"></i></a>
                                <a href='#'><i class="fa-solid fa-share"></i></a>
                            </div>
                        </div>
                        <div className='productContent'>
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
                    <div className='productSlide'>
                        <div className='productImage'>
                            <img src={shop3} alt='' />
                            <div className='productImageIcons'>
                                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                                <a href='#'><i class="fa-solid fa-eye"></i></a>
                                <a href='#'><i class="fa-solid fa-share"></i></a>
                            </div>
                        </div>
                        <div className='productContent'>
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
                    <div className='productSlide'>
                        <div className='productImage'>
                            <img src={shop4} alt='' />
                            <div className='productImageIcons'>
                                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                                <a href='#'><i class="fa-solid fa-eye"></i></a>
                                <a href='#'><i class="fa-solid fa-share"></i></a>
                            </div>
                        </div>
                        <div className='productContent'>
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
                    <div className='productSlide'>
                        <div className='productImage'>
                            <img src={shop5} alt='' />
                            <div className='productImageIcons'>
                                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                                <a href='#'><i class="fa-solid fa-eye"></i></a>
                                <a href='#'><i class="fa-solid fa-share"></i></a>
                            </div>
                        </div>
                        <div className='productContent'>
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
                    <div className='productSlide'>
                        <div className='productImage'>
                            <img src={shop6} alt='' />
                            <div className='productImageIcons'>
                                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                                <a href='#'><i class="fa-solid fa-eye"></i></a>
                                <a href='#'><i class="fa-solid fa-share"></i></a>
                            </div>
                        </div>
                        <div className='productContent'>
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
                    <div className='productSlide'>
                        <div className='productImage'>
                            <img src={shop7} alt='' />
                            <div className='productImageIcons'>
                                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                                <a href='#'><i class="fa-solid fa-eye"></i></a>
                                <a href='#'><i class="fa-solid fa-share"></i></a>
                            </div>
                        </div>
                        <div className='productContent'>
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
                    <div className='productSlide'>
                        <div className='productImage'>
                            <img src={shop8} alt='' />
                            <div className='productImageIcons'>
                                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                                <a href='#'><i class="fa-solid fa-eye"></i></a>
                                <a href='#'><i class="fa-solid fa-share"></i></a>
                            </div>
                        </div>
                        <div className='productContent'>
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

                <div className='toproduct'>
                    <RouterLink to="/products" >
                        <button>Shop More</button>
                    </RouterLink>
                </div>
            </div>
        </section>
    );
}

export default Product;