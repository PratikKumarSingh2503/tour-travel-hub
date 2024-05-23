import React from 'react';
import './category.css';
import bungee from '../../assests/bungee jump.jpeg'
import zip from '../../assests/zip lines.jpeg';
import canoeing from '../../assests/canoeing.png';
import kayaking from '../../assests/kayaking.jpeg'

const Category = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className="category">
            <div className="categorySec">
                <div className='categoryTitle'>
                    <span>A</span>
                    <span>D</span>
                    <span>V</span>
                    <span>E</span>
                    <span>N</span>
                    <span>T</span>
                    <span>U</span>
                    <span>R</span>
                    <span>E</span>
                    <span> </span>
                    <span>I</span>
                    <span>D</span>
                    <span>E</span>
                    <span>A</span>
                    <span>!</span>
                </div>
                <div className="categoryContainer">
                    <div className='categorySlide'>
                        <img src={bungee} alt='' />
                        <h3>Bungee Jump</h3>
                        <p>
                            Lorem ipsum dolar sit amet consectetur, adipiscing elit.Laborum, id.
                        </p>
                        <a href='#'>
                            <button>
                                Read More
                            </button>
                        </a>
                    </div>
                    <div className='categorySlide'>
                        <img src={zip} alt='' />
                        <h3>Zip Lines</h3>
                        <p>
                            Lorem ipsum dolar sit amet consectetur, adipiscing elit.Laborum, id.
                        </p>
                        <a href='#'>
                            <button>
                                Read More
                            </button>
                        </a>
                    </div>
                    <div className='categorySlide'>
                        <img src={zip} alt='' />
                        <h3>Zip Lines</h3>
                        <p>
                            Lorem ipsum dolar sit amet consectetur, adipiscing elit.Laborum, id.
                        </p>
                        <a href='#'>
                            <button>
                                Read More
                            </button>
                        </a>
                    </div>
                    <div className='categorySlide'>
                        <img src={canoeing} alt='' />
                        <h3>Canoeing</h3>
                        <p>
                        Lorem ipsum dolar sit amet consectetur, adipiscing elit.Laborum, id.
                        </p>
                        <a href='#'>
                            <button>
                                Read More
                            </button>
                        </a>
                    </div>
                    <div className='categorySlide'>
                        <img src={kayaking} alt='' />
                        <h3>Kayaking</h3>
                        <p>
                        Lorem ipsum dolar sit amet consectetur, adipiscing elit.Laborum, id.
                        </p>
                        <a href='#'>
                            <button>
                                Read More
                            </button>
                        </a>
                    </div>
                    <div className='categorySlide'>
                        <img src={kayaking} alt='' />
                        <h3>Kayaking</h3>
                        <p>
                        Lorem ipsum dolar sit amet consectetur, adipiscing elit.Laborum, id.
                        </p>
                        <a href='#'>
                            <button>
                                Read More
                            </button>
                        </a>
                    </div>
                    <div className='categorySlide'>
                        <img src={kayaking} alt='' />
                        <h3>Kayaking</h3>
                        <p>
                        Lorem ipsum dolar sit amet consectetur, adipiscing elit.Laborum, id.
                        </p>
                        <a href='#'>
                            <button>
                                Read More
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Category;