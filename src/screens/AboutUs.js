import React from 'react'
import Header from '../component/Header'
import Images from '../assets/Images'
import Footer from '../component/Footer'

const AboutUs = () => {
    return (
        <div className='main-banner-header ' >
            <Header />

            <div className="banner-container">
                <div className="banner-img-container">
                    <img src={Images.aboutBanner} alt="Banner" />
                </div>
                <div className="banner-content-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="banner-text-content d-flex flex-column gap-4">
                                <h1>
                                    <a href="#!">Your Trusted Partner for Computer, IT, and CCTV
                                        <span className="highlight">Solutions</span>
                                    </a>
                                </h1>
                                <p className='banner-discription-text mb-0'>Delivering personalized Computer, IT, and CCTV solutions with a focus on efficiency, reliability, and long-term partnerships. Connect with us for prompt and professional service.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='banner-content-container p-0'>
                <div className='u-photo-section-container'>
                    <div className='row align-items-center justify-content-center'>
                        <div className='col-md-6 col-12 mt-md-0 mt-sm-4 mt-4'>
                            <img
                                className='w-100'
                                src={Images.aboutOne}
                                alt="Gender Icon" />
                        </div>
                        <div className='col-md-6 col-12 mt-md-0 mt-4'>
                            <div className='lets-go-container'>
                                <h1 style={{ fontSize: "36px", letterSpacing: "-.02em" }} >Reliable Partner for Computer, IT, and CCTV Solutions.</h1>
                                <p style={{ fontSize: "16px", color: "#4E5566" }} className='audio-video-text-content mt-md-4 mt-3'>We offer comprehensive Computer, IT, and CCTV services with personalized, long-term support tailored to your needs. Contact us today, and our representative will promptly assist you with customized solutions.</p>
                            </div>
                            <div className='mt-md-4 mt-3'>

                                <div className='d-flex align-items-start gap-3 bg-white mt-4'>
                                    <img
                                        src={Images.tick}
                                        alt="Gender Icon" />
                                    <div className='lets-go-container'>
                                        <h1 className='mb-0' style={{ fontSize: "18px", }} >Tailored IT and CCTV Solutions for Every Business Need"</h1>
                                        <p className='service-text-content mt-3 mb-0' style={{ fontSize: "14px", }}>Our team understands your unique requirements and delivers tailored IT and CCTV solutions with prompt and reliable service to ensure seamless operations.</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-start gap-3 bg-white mt-4'>
                                    <img
                                        src={Images.tick}
                                        alt="Gender Icon" />
                                    <div className='lets-go-container'>
                                        <h1 className='mb-0' style={{ fontSize: "18px", }} >Reliable Support for Long-Term Business Success</h1>
                                        <p className='service-text-content mt-3 mb-0' style={{ fontSize: "14px", }}>Partner with us for consistent, long-term support in managing your Computer, IT, and CCTV infrastructure. Our dedicated team ensures quick responses and effective solutions.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='banner-content-container p-0'>
                <div className='u-photo-section-container'>
                    <div className='row flex-md-row flex-column-reverse  align-items-center justify-content-center'>

                        <div className='col-md-6 col-12 mt-md-0 mt-4'>
                            <div className='lets-go-container'>
                                <h1 style={{ fontSize: "36px", letterSpacing: "-.02em" }} >Comprehensive Solutions for Your Computer, IT, and CCTV Needs</h1>
                                <p style={{ fontSize: "16px", color: "#4E5566" }} className='audio-video-text-content mt-md-4 mt-3'>We provide expert Computer, IT, and CCTV services with a focus on personalized solutions and long-term partnerships. Get in touch with us today for reliable support tailored to your requirements.</p>
                            </div>
                            <div className='mt-md-4 mt-3'>

                                <div className='d-flex align-items-start gap-3 bg-white mt-4'>
                                    <img
                                        src={Images.tick}
                                        alt="Gender Icon" />
                                    <div className='lets-go-container'>
                                        <h1 className='mb-0' style={{ fontSize: "18px", }} >Customized IT and CCTV Services for Optimal Performance</h1>
                                        <p className='service-text-content mt-3 mb-0' style={{ fontSize: "14px", }}>Our skilled team offers bespoke IT and CCTV solutions designed to meet your unique business needs, ensuring efficiency and seamless integration.</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-start gap-3 bg-white mt-4'>
                                    <img
                                        src={Images.tick}
                                        alt="Gender Icon" />
                                    <div className='lets-go-container'>
                                        <h1 className='mb-0' style={{ fontSize: "18px", }} >Long-Term Commitment to Your Business Growth and Security</h1>
                                        <p className='service-text-content mt-3 mb-0' style={{ fontSize: "14px", }}>Count on us for dependable, long-term support in managing your IT and CCTV systems, with prompt assistance and strategic solutions to drive success.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-md-6 col-12 mt-md-0 mt-sm-4'>
                            <img
                                className='w-100'
                                src={Images.aboutTwo}
                                alt="Gender Icon" />
                        </div>
                    </div>
                </div>
            </div>




            <div style={{ backgroundColor: "#DCE3FD" }}>
                <div className='banner-content-container p-0'>
                    <div className='u-photo-section-container bg-transparent'>
                        <div className='lets-go-container text-center'>
                            <h1 style={{ fontSize: "36px", letterSpacing: "-.02em", color:"#001E6C" }}>Here is what our Clients are saying About us</h1>
                        </div>
                        <ul className='d-flex align-items-center justify-content-center flex-wrap mt-5 st-s-list'>
                            <li className="px-sm-2 px-0 list-unstyled">
                                <div className="st-s-box w-100 h-100 d-flex flex-column align-items-start justify-content-start text-start">
                                <p className="service-content-txt mt-3 mb-3">6 months ago </p>

                                    <div className="st-s-icon undefined icon-1 d-flex align-items-center gap-3 justify-content-center">
                                        {/* <img src="./images/img-9.svg" alt="statements-section-img-1"> */}
                                        <img className='about-two' src={Images.aboutTwo} alt="Banner" />
                                        <div className='d-flex gap-2'>
                                        <i style={{color:"#FD8E1F"}} class="fa-solid fa-star"></i>
                                        <i style={{color:"#FD8E1F"}} class="fa-solid fa-star"></i>
                                        <i style={{color:"#FD8E1F"}} class="fa-solid fa-star"></i>
                                        <i style={{color:"#FD8E1F"}} class="fa-solid fa-star"></i>
                                        <i style={{color:"#FD8E1F"}} class="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                    <h3 className=" product-items">Suriya k</h3>
                                    <p className="service-content-txt mt-3 mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                                </div>
                            </li>
                            <li className="px-sm-2 px-0 list-unstyled">
                                <div className="st-s-box w-100 h-100 d-flex flex-column align-items-start justify-content-start text-start">
                                <p className="service-content-txt mt-3 mb-3">6 months ago </p>

                                    <div className="st-s-icon undefined icon-1 d-flex align-items-center gap-3 justify-content-center">
                                        {/* <img src="./images/img-9.svg" alt="statements-section-img-1"> */}
                                        <img className='about-two' src={Images.aboutTwo} alt="Banner" />
                                        <div className='d-flex gap-2'>
                                        <i style={{color:"#FD8E1F"}} class="fa-solid fa-star"></i>
                                        <i style={{color:"#FD8E1F"}} class="fa-solid fa-star"></i>
                                        <i style={{color:"#FD8E1F"}} class="fa-solid fa-star"></i>
                                        <i style={{color:"#FD8E1F"}} class="fa-solid fa-star"></i>
                                        <i style={{color:"#FD8E1F"}} class="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                    <h3 className=" product-items">Alex Kiyo</h3>
                                    <p className="service-content-txt mt-3 mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                                </div>
                            </li>
                            <li className="px-sm-2 px-0 list-unstyled">
                                <div className="st-s-box w-100 h-100 d-flex flex-column align-items-start justify-content-start text-start">
                                <p className="service-content-txt mt-3 mb-3">6 months ago </p>

                                    <div className="st-s-icon undefined icon-1 d-flex align-items-center gap-3 justify-content-center">
                                        {/* <img src="./images/img-9.svg" alt="statements-section-img-1"> */}
                                        <img className='about-two' src={Images.aboutTwo} alt="Banner" />
                                        <div className='d-flex gap-2'>
                                        <i style={{color:"#FD8E1F"}} class="fa-solid fa-star"></i>
                                        <i style={{color:"#FD8E1F"}} class="fa-solid fa-star"></i>
                                        <i style={{color:"#FD8E1F"}} class="fa-solid fa-star"></i>
                                        <i style={{color:"#FD8E1F"}} class="fa-solid fa-star"></i>
                                        <i style={{color:"#FD8E1F"}} class="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                    <h3 className=" product-items">Kathir Veera</h3>
                                    <p className="service-content-txt mt-3 mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>


            <Footer/>
        </div>
    )
}

export default AboutUs