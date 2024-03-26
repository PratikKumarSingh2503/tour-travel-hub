import React from 'react';
import './about.css';
import Header from '../../subcomponents/Header/header';
import Category from '../../subcomponents/Category/category';

const About = () => {
    return (
        <section className="about">
            <div className="aboutSec">
                <Header />
                <Category />
            </div>
        </section>
    );
}

export default About;