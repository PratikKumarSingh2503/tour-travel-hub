import React from 'react';
import './contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className="contact">
            <div className="contactSec">
                <div className="contact-left">
                    <h1>Contact Me</h1>
                    <p><i class="fa-solid fa-paper-plane"></i> pratikkumarsingh819@gmail.com</p>
                    <p><i class="fa-solid fa-phone"></i> +916291387175</p>

                    <div class="icons">
                        <a href="https://github.com/PratikKumarSingh2503"><i class="fa-brands fa-github"></i></a>
                        <a href="https://twitter.com/PratikSingh819"><i class="fa-brands fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/in/pratik-kumar-singh-aa6746221/"><i class="fa-brands fa-linkedin"></i></a>
                    </div>

                    <a href='my-resume.pdf'
                        download='Pratik`s CV.pdf'>
                        <button className='btn-box1'>Download CV</button>
                    </a>
                </div>
                <div className="contact-right">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Your Name:</label>
                            <input type="text" id="name" name="Name" placeholder="Your Name" required />
                        </div>
                        <div>
                            <label htmlFor="email">Your Email:</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" required />
                        </div>
                        <div>
                            <label htmlFor="message">Your Message:</label>
                            <textarea id="message" name="Message" rows="6" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className="btn-box2">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;