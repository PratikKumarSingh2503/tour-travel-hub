import React from 'react';
import './post.css';
import post1 from '../../assests/post1.jpg';
import post2 from '../../assests/post2.webp';
import post3 from '../../assests/post3.webp';
import { Link as RouterLink } from 'react-router-dom';

const Post = () => {

    return (
        <section className="post">
            <div className="postSec">
                <div className='postTitle'>
                    <span>O</span>
                    <span>U</span>
                    <span>R</span>
                    <span></span>
                    <span>D</span>
                    <span>A</span>
                    <span>I</span>
                    <span>L</span>
                    <span>Y</span>
                    <span></span>
                    <span>P</span>
                    <span>O</span>
                    <span>S</span>
                    <span>T</span>
                    <span>S</span>
                </div>

                <div className="postContainer">

                    <div className='postSlide'>
                        <img src={post1} alt='' />
                        <div className='postSlideIcon'>
                            <a href='#'><i class="fa-solid fa-calendar"></i> 26th February, 2024 <span>pp</span></a>
                            <a href='#'><i class="fa-solid fa-user"></i> By Admin</a>
                        </div>
                        <h3>Blog Title Goes Here.</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <button>Read More</button>
                    </div>
                    <div className='postSlide'>
                        <img src={post2} alt='' />
                        <div className='postSlideIcon'>
                            <a href='#'><i class="fa-solid fa-calendar"></i> 26th February, 2024 <span>pp</span></a>
                            <a href='#'><i class="fa-solid fa-user"></i> By Admin</a>
                        </div>
                        <h3>Blog Title Goes Here.</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <button>Read More</button>
                    </div>
                    <div className='postSlide'>
                        <img src={post3} alt='' />
                        <div className='postSlideIcon'>
                            <a href='#'><i class="fa-solid fa-calendar"></i> 26th February, 2024 <span>pp</span></a>
                            <a href='#'><i class="fa-solid fa-user"></i> By Admin</a>
                        </div>
                        <h3>Blog Title Goes Here.</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <button>Read More</button>
                    </div>
                    <div className='postSlide'>
                        <img src={post3} alt='' />
                        <div className='postSlideIcon'>
                            <a href='#'><i class="fa-solid fa-calendar"></i> 26th February, 2024 <span>pp</span></a>
                            <a href='#'><i class="fa-solid fa-user"></i> By Admin</a>
                        </div>
                        <h3>Blog Title Goes Here.</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <button>Read More</button>
                    </div>
                    <div className='postSlide'>
                        <img src={post3} alt='' />
                        <div className='postSlideIcon'>
                            <a href='#'><i class="fa-solid fa-calendar"></i> 26th February, 2024 <span>pp</span></a>
                            <a href='#'><i class="fa-solid fa-user"></i> By Admin</a>
                        </div>
                        <h3>Blog Title Goes Here.</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <button>Read More</button>
                    </div>
                    <div className='postSlide'>
                        <img src={post3} alt='' />
                        <div className='postSlideIcon'>
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

                <div className='toblog'>
                    <RouterLink to="/blog">
                        <button>Blogs</button>
                    </RouterLink>
                </div>
            </div>
        </section>
    );
}

export default Post;