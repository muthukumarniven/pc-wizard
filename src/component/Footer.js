import React from 'react'
import Images from '../assets/Images';
import { Link } from 'react-router-dom';
// import './Footer.css'
// import { assets } from '../../assets/assets'; 


const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={Images.pw} alt="" />
                    <p className='footer-txt-content'>Established in 2019, PC Wizard offers cutting-edge system integration services, including hardware, software, and innovative 95% uptime maintenance technology to optimize and support business operations.</p>
                     <div className="footer-social-icons">
                        {/* <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" /> */}
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul className='p-0 text-decoration-none'>
                       <Link className='text-decoration-none' to="/"> <li>Home</li> </Link>
                       <Link className='text-decoration-none' to="/about_us"> <li>Company</li></Link>
                       <Link className='text-decoration-none' to="/products"> <li>Products</li></Link>
                       <Link className='text-decoration-none' to="/contact"> <li>Contact Us</li></Link>

                    </ul>
                </div>
                <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                    <ul className='p-0'>
                        <li>+91 8668059492</li>
                        <li>25j, SR Complex, Pattunulkara Street, Ariyalur 621 704</li>

                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 © PC- Wizard - All Right Reserved.
            </p>
        </div>
        );
}

export default Footer;