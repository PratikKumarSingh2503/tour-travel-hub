import React from 'react';
import './blog.css';
import post1 from '../../assests/post1.jpg';
import post2 from '../../assests/post2.webp';
import post3 from '../../assests/post3.webp';
import post4 from '../../assests/post4.webp';
import post5 from '../../assests/post5.webp';
import post6 from '../../assests/post6.webp';
import { Link as RouterLink } from 'react-router-dom';

const Blog = () => {

    return (
        <section className="blog">
            <div className="blogSec">
                <div className='blogTitle'>
                    <span>E</span>
                    <span>X</span>
                    <span>C</span>
                    <span>L</span>
                    <span>U</span>
                    <span>S</span>
                    <span>I</span>
                    <span>V</span>
                    <span>E</span>
                    <span style={{ backgroundColor: 'white' }}></span>
                    <span>B</span>
                    <span>L</span>
                    <span>O</span>
                    <span>G</span>
                </div>

                <div className="blogContainer">

                    <div className='blogSlide'>
                        <img src={post1} alt='' />
                        <div className='blogSlideIcon'>
                            <a href='#'><i class="fa-solid fa-calendar"></i> 26th February, 2024 <span>pp</span></a>
                            <a href='#'><i class="fa-solid fa-user"></i> By Admin</a>
                        </div>
                        <h3>Blog Title Goes Here.</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <button>Read More</button>
                    </div>
                    <div className='blogSlide'>
                        <img src={post2} alt='' />
                        <div className='blogSlideIcon'>
                            <a href='#'><i class="fa-solid fa-calendar"></i> 26th February, 2024 <span>pp</span></a>
                            <a href='#'><i class="fa-solid fa-user"></i> By Admin</a>
                        </div>
                        <h3>Blog Title Goes Here.</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <button>Read More</button>
                    </div>
                    <div className='blogSlide'>
                        <img src={post3} alt='' />
                        <div className='blogSlideIcon'>
                            <a href='#'><i class="fa-solid fa-calendar"></i> 26th February, 2024 <span>pp</span></a>
                            <a href='#'><i class="fa-solid fa-user"></i> By Admin</a>
                        </div>
                        <h3>Blog Title Goes Here.</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <button>Read More</button>
                    </div>
                    <div className='blogSlide'>
                        <img src={post4} alt='' />
                        <div className='blogSlideIcon'>
                            <a href='#'><i class="fa-solid fa-calendar"></i> 26th February, 2024 <span>pp</span></a>
                            <a href='#'><i class="fa-solid fa-user"></i> By Admin</a>
                        </div>
                        <h3>Blog Title Goes Here.</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <button>Read More</button>
                    </div>
                    <div className='blogSlide'>
                        <img src={post5} alt='' />
                        <div className='blogSlideIcon'>
                            <a href='#'><i class="fa-solid fa-calendar"></i> 26th February, 2024 <span>pp</span></a>
                            <a href='#'><i class="fa-solid fa-user"></i> By Admin</a>
                        </div>
                        <h3>Blog Title Goes Here.</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <button>Read More</button>
                    </div>
                    <div className='blogSlide'>
                        <img src={post6} alt='' />
                        <div className='blogSlideIcon'>
                            <a href='#'><i class="fa-solid fa-calendar"></i> 26th February, 2024 <span>pp</span></a>
                            <a href='#'><i class="fa-solid fa-user"></i> By Admin</a>
                        </div>
                        <h3>Blog Title Goes Here.</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
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

export default Blog;