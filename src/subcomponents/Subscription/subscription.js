import React from 'react';
import './subscription.css';

const Subscription = () => {
    return (
        <div className='subscription'>
            <div className="subscriptionSec">
                <div className='subscriptionTitle'>
                    <span>S</span>
                    <span>U</span>
                    <span>B</span>
                    <span>S</span>
                    <span>C</span>
                    <span>R</span>
                    <span>I</span>
                    <span>B</span>
                    <span>E</span>
                    <span> </span>
                    <span>N</span>
                    <span>O</span>
                    <span>W</span>
                </div>

                <div className='subscriptionContainer'>
                    <p>
                        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." <br/>
                        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                    </p>
                    <form className='subscriptionForm'>
                        <label htmlFor="name"></label>
                        <input type="text" id="name" name="Name" placeholder="pratikkumarsingh819@gmail.com" required />
                        <button>
                            Subscribe
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Subscription;