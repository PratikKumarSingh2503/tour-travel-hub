import React from "react";
import './topbar.css';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Topbar = () => {
    return (
        <nav class="topbar">

            <div className="desktopMenu">
                <li>
                    <ScrollLink activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</ScrollLink>
                </li>
                <li>
                    <ScrollLink activeClass='active' to='product' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Products</ScrollLink>
                </li>
                <li>
                    <ScrollLink activeClass='active' to='package' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Packages</ScrollLink>
                </li>
                <li>
                    <ScrollLink activeClass='active' to='service' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Services</ScrollLink>
                </li>
                <li>
                    <ScrollLink activeClass='active' to='review' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Reviews</ScrollLink>
                </li>
                <li>
                    <ScrollLink activeClass='active' to='post' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Posts</ScrollLink>
                </li>
                <li>
                    <RouterLink to="/book&now" className="desktopMenuListItem">
                        <span>Book Now </span>
                        <i class="fa-solid fa-caret-right" style={{ fontSize: '20px' }}></i>
                    </RouterLink>
                </li>
            </div>
        </nav>

    );
}

export default Topbar;