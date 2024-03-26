import React from "react";
import './navbar.css';
import profilePic from '../../assests/profilePic.png'
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
    const user = false;

    return (
        <div className='nav'>
            <div className='left'>
                <RouterLink to="/" className=''>
                    <h3>Travel.</h3>
                    <p>Explore<span> More</span></p>
                </RouterLink>
            </div>

            <div className='middle'>

                {/* <form onSubmit={handleSubmit}> */}
                <form>
                    <label htmlFor="name"></label>
                    <input type="text" id="name" name="Name" placeholder="Search for Famous, Tourist areas" required />
                </form>

            </div>

            <div className='right'>

                {user ? (

                    <div className='sub-right1'>
                        <img className='right-img' src={profilePic} alt='' height={50} width={50} />
                        <li>
                            <RouterLink to="/" className='rightlink'>{user && 'LOGOUT'}</RouterLink>
                        </li>
                    </div>
                ) : (
                    <div className='right2'>
                        <li>
                            <RouterLink to="/login" className='rightlink'>LOGIN</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/register" className='rightlink'>REGISTER</RouterLink>
                        </li>
                    </div>
                )
                }
            </div>
        </div>
    );
}

export default Navbar;