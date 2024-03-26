import React from 'react';
import './books.css';
import home from '../../assests/home.jpg';
import { Link as RouterLink } from 'react-router-dom';

const Books = () => {
    return (
        <section className="books">
            <div className="booksSec">
                <div className='booksTitle'>
                    <span>B</span>
                    <span>O</span>
                    <span>O</span>
                    <span>K</span>
                    <span style={{ backgroundColor: 'white' }}></span>
                    <span>N</span>
                    <span>O</span>
                    <span>W</span>
                </div>

                <div className="booksContainer">
                    <div className='booksSlide'>
                        <div className='booksImage'>
                            <img src={home} alt='' />
                            <div className='booksImageIcons'>
                                <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                                <a href='#'><i class="fa-solid fa-eye"></i></a>
                                <a href='#'><i class="fa-solid fa-share"></i></a>
                            </div>
                        </div>
                        <div className='booksContent'>
                            <form action="">
                                <div class="booksInputBox">
                                    <h3>where to</h3>
                                    <input type="text" placeholder="place name" />
                                </div>
                                <div class="booksInputBox">
                                    <h3>how many</h3>
                                    <input type="number" placeholder="number of guests" />
                                </div>
                                <div class="booksInputBox">
                                    <h3>arrivals</h3>
                                    <input type="date" />
                                </div>
                                <div class="booksInputBox">
                                    <h3>leaving</h3>
                                    <input type="date" />
                                </div>
                                <button>Book Now</button>
                            </form>
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

export default Books;