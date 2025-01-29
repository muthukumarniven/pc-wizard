import React, { useState, useRef, useEffect } from 'react';
import Images from '../assets/Images'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navi = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [showMobilePopup, setShowMobilePopup] = useState(false);
    const [showDesktopPopup, setShowDesktopPopup] = useState(false);
    const [showSignOutPopup, setShowSignOutPopup] = useState(false);

    const menuRef = useRef(null);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const mobilePopupRef = useRef(null);
    const desktopPopupRef = useRef(null);

    const toggleMobilePopup = () => setShowMobilePopup(!showMobilePopup);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobilePopupRef.current && !mobilePopupRef.current.contains(event.target)) {
                setShowMobilePopup(false);
            }
            if (desktopPopupRef.current && !desktopPopupRef.current.contains(event.target)) {
                setShowDesktopPopup(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/");
    };

    return (
        <>
            <nav className="navbar navbar-expand-xl bg-body-tertiary shadow-sm">
                <div className="container-fluid px-xl-5 px-3">
                    <Link to="/home" className="navbar-brand loai-web-logo d-sm-block d-none" href="#"><img src={Images.logo} /></Link>
                    <Link to="/home" className="navbar-brand loai-web-logo d-sm-none d-block" href="#"><img style={{ width: "100%", height: "100%", maxWidth: "50px", maxHeight: "50px" }} src={Images.logoSm} /></Link>
                    <div className="d-flex align-items-center gap-md-2 gap-1">
                        <div className="nav-item d-xl-none d-block" ref={mobilePopupRef}>
                            <Link className="nav-link position-relative d-flex align-items-center gap-2 view-card-text" to="#" onClick={toggleMobilePopup}>
                                <span className='view-content-no'>1</span>
                                <img src={Images.card} alt="Notifications" />
                                View Cart
                            </Link>
                        </div>
                        <button className="navbar-toggler border-0 header-navbar-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon navbar-s-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse align-items-start justify-content-end" id="navbarSupportedContent">
                        <div className="d-flex" role="search">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 header-nav-items gap-xl-2 gap-3 align-items-xl-center align-items-start flex-wrap">
                                <li>
                                    <Link
                                        className="nav-link text-black d-flex gap-2 text-decoration-none"
                                        to="/home"
                                        style={{ fontFamily: navi.pathname === "/" ? "Inter-Bold" : "Inter-Regular" }} >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Company
                                    </a>
                                    <ul className="dropdown-menu p-3 ">
                                        <li>  <Link className="text-decoration-none" to="/help" >About Us </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link
                                        className="nav-link text-black d-flex gap-2 text-decoration-none"
                                        to="/create-video"
                                        style={{ fontFamily: navi.pathname === "/create-video" ? "Inter-Bold" : "Inter-Regular" }}
                                    >
                                        Products
                                    </Link></li>
                                <li>
                                    <Link className="nav-link text-black d-flex gap-2 text-decoration-none" to="/sample-videos" style={{ fontFamily: navi.pathname === "/sample-videos" ? "Inter-Bold" : "Inter-Regular" }}>Service Support</Link>
                                </li>
                                <li>
                                    <Link className="nav-link text-black d-flex gap-2 text-decoration-none" to="/sample-videos" style={{ fontFamily: navi.pathname === "/sample-videos" ? "Inter-Bold" : "Inter-Regular" }}>Contact Us</Link>
                                </li>
                                <li className="nav-item popup-avatar-content d-xl-block d-none">
                                    <Link className="nav-link position-relative d-flex align-items-center gap-2" to="#" onClick={toggleMobilePopup}>
                                        <span className='view-content-no'>1</span>
                                        <img src={Images.card} alt="Notifications" />
                                        View Cart
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header