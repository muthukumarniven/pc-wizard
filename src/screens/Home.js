import React, { useState } from "react";

import Images from '../assets/Images'
import Header from '../component/Header'
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import Input from '../component/Input';
import Button from "../component/Button";

const Home = () => {
    const [fullName, setFullName] = useState('');
    const [mailValue, setMailValue] = useState('')
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');




    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    };
    const emailHandleChange = (e) => {
        setMailValue(e.target.value);
    }
    const subjectHandleChane = (e) => {
        setSubject(e.target.value);
    }

    return (
        <div className='main-banner-header ' >
            <Header />


            <div className="banner-container">
                <div className="banner-img-container">
                    <img src={Images.banner} alt="Banner" />
                </div>
                <div className="banner-content-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="banner-text-content d-flex flex-column gap-4">
                                <h1>
                                    <a href="#!">Pc Wizard Professional Quality <span className="highlight">Service</span>
                                    </a>
                                </h1>
                                <p className='banner-discription-text mb-0'>PC Wizard delivers professional, high-quality services in computer sales, repairs, networking, and maintenance. Trusted for excellence, we provide tailored solutions to meet personal and business IT needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            <div style={{ backgroundColor: "#F5F7FA" }}>
                <div className='banner-content-container p-0'>
                    <div className='u-photo-section-container bg-transparent'>
                        <div className='lets-go-container text-center'>
                            <h1 style={{ fontSize: "36px", letterSpacing: "-.02em" }}>What kind of like</h1>
                        </div>
                        <ul className='d-flex flex-wrap mt-5 st-s-list'>
                            <li className="px-sm-2 px-0 list-unstyled">
                                <div className="st-s-box w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center">
                                    <div className="st-s-icon undefined icon-1 d-flex align-items-center justify-content-center">
                                        {/* <img src="./images/img-9.svg" alt="statements-section-img-1"> */}
                                        <img className="card-img-top " src={Images.laptop} alt="Banner" />
                                    </div>
                                    <h3 style={{ fontSize: "18px" }} className=" product-items">Laptop</h3>
                                    <p className="service-content-txt mb-0">Service</p>
                                </div>
                            </li>
                            <li className="px-sm-2 px-0 list-unstyled">
                                <div className="st-s-box w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center">
                                    <div className="st-s-icon undefined icon-1 d-flex align-items-center justify-content-center">
                                        {/* <img src="./images/img-9.svg" alt="statements-section-img-1"> */}
                                        <img className="card-img-top" src={Images.printers} alt="Banner" />
                                    </div>
                                    <h3 style={{ fontSize: "18px" }} className=" product-items">Printers</h3>
                                    <p className="service-content-txt mb-0">Service</p>
                                </div>
                            </li>
                            <li className="px-sm-2 px-0 list-unstyled">
                                <div className="st-s-box w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center">
                                    <div className="st-s-icon undefined icon-1 d-flex align-items-center justify-content-center">
                                        {/* <img src="./images/img-9.svg" alt="statements-section-img-1"> */}
                                        <img className="card-img-top" src={Images.computer} alt="Banner" />
                                    </div>
                                    <h3 style={{ fontSize: "18px" }} className="product-items">Computer</h3>
                                    <p className="service-content-txt mb-0">Service</p>
                                </div>
                            </li>
                            <li className="px-sm-2 px-0 list-unstyled">
                                <div style={{ padding: "0" }} className="st-s-box w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center">
                                    <div className="st-s-icon undefined icon-1 d-flex align-items-center justify-content-center">
                                        {/* <img src="./images/img-9.svg" alt="statements-section-img-1"> */}
                                        <img className="card-img-top" src={Images.cctv} alt="Banner" />
                                    </div>
                                    <h3 style={{ fontSize: "18px" }} className=" product-items">CCTV</h3>
                                    <p className="service-content-txt mb-0">Service</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className='banner-content-container p-0'>
                <div className='u-photo-section-container'>
                    <div className='row flex-md-row flex-column-reverse'>
                        <div className='col-md-6 col-12 mt-md-0 mt-sm-4 mt-4'>
                            <img
                                className='w-100'
                                src={Images.bannerTwo}
                                alt="Gender Icon" />
                        </div>
                        <div className='col-md-6 col-12 mt-md-0 mt-4'>
                            <div className='lets-go-container'>
                                <h1 style={{ fontSize: "36px", letterSpacing: "-.02em" }} >Your One-Stop Solution for Computer Sales, Service, and Maintenance</h1>
                                <p style={{ fontSize: "16px", color: "#4E5566" }} className='audio-video-text-content mt-md-4 mt-3'>PC Wizard offers expert computer sales, service, networking solutions, and annual maintenance. Trusted by leading companies, we ensure seamless operations with reliable, tailored IT support and comprehensive services.</p>
                            </div>
                            <div className='mt-md-4 mt-3'>
                                <div className='d-flex align-items-start gap-3 bg-white'>
                                    <img
                                        src={Images.tick}
                                        alt="Gender Icon" />
                                    <div className='lets-go-container'>
                                        <h1 className='mb-0' style={{ fontSize: "18px", }} >Upload a Photo for a Personalized Video</h1>
                                        <p className='service-text-content mt-3 mb-0' style={{ fontSize: "14px", }}>Upload a high-quality front-facing photo from shoulders up with visible lips for the best video results.</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-start gap-3 bg-white mt-4'>
                                    <img
                                        src={Images.tick}
                                        alt="Gender Icon" />
                                    <div className='lets-go-container'>
                                        <h1 className='mb-0' style={{ fontSize: "18px", }} >Upload a Photo for a Personalized Video</h1>
                                        <p className='service-text-content mt-3 mb-0' style={{ fontSize: "14px", }}>Upload a high-quality front-facing photo from shoulders up with visible lips for the best video results.</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-start gap-3 bg-white mt-4'>
                                    <img
                                        src={Images.tick}
                                        alt="Gender Icon" />
                                    <div className='lets-go-container'>
                                        <h1 className='mb-0' style={{ fontSize: "18px", }} >CCTV sales & service</h1>
                                        <p className='service-text-content mt-3 mb-0' style={{ fontSize: "14px", }}>PC Wizard offers CCTV sales and service, providing high-quality security solutions, installation, and maintenance. Ensure safety with our reliable, tailored surveillance systems for homes and businesses.</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-start gap-3 bg-white mt-4'>
                                    <img
                                        src={Images.tick}
                                        alt="Gender Icon" />
                                    <div className='lets-go-container'>
                                        <h1 className='mb-0' style={{ fontSize: "18px", }} >Printer sales & service</h1>
                                        <p className='service-text-content mt-3 mb-0' style={{ fontSize: "14px", }}>PC Wizard specializes in printer sales and service, offering expert repairs, maintenance, and reliable solutions for personal and business printing needs. Quality support you can trust.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div style={{ backgroundColor: "#F5F7FA" }}>
                <div className='banner-content-container p-0'>
                    <div className='u-photo-section-container bg-transparent'>
                        <div className='lets-go-container text-center'>
                            <h1 style={{ fontSize: "36px", letterSpacing: "-.02em" }}>What kind of like</h1>
                        </div>
                        <ul className='d-flex flex-wrap mt-5 st-s-list'>
                            <li className="px-sm-2 px-0 list-unstyled">
                                <div className="st-s-box w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center">
                                    <div className="st-s-icon undefined icon-1 d-flex align-items-center justify-content-center">
                                        {/* <img src="./images/img-9.svg" alt="statements-section-img-1"> */}
                                        <img src={Images.assemble} alt="Banner" />
                                    </div>
                                    <h3 className=" product-items">Assembled</h3>
                                    <p className="service-content-txt mt-3 mb-0">Assembled computers offering customized configurations for performance, reliability, and efficiency, tailored to individual needs.</p>
                                    <Button backgroundColor="#FFEEE8" marginTop="20px" color="#FA8232" text="ENQUIRY" />

                                </div>

                            </li>
                            <li className="px-sm-2 px-0 list-unstyled">
                                <div className="st-s-box w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center">
                                    <div className="st-s-icon undefined icon-1 d-flex align-items-center justify-content-center">
                                        {/* <img src="./images/img-9.svg" alt="statements-section-img-1"> */}
                                        <img src={Images.maintenance} alt="Banner" />
                                    </div>
                                    <h3 className=" product-items">Maintenance & Servicing</h3>
                                    <p className="service-content-txt mt-3 mb-0">Offering annual maintenance contracts for computers and peripherals, along with on-call service visits for reliable support.</p>
                                    <Button backgroundColor="#FFEEE8" marginTop="20px" color="#FA8232" text="ENQUIRY" />

                                </div>
                            </li>
                            <li className="px-sm-2 px-0 list-unstyled">
                                <div className="st-s-box w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center">
                                    <div className="st-s-icon undefined icon-1 d-flex align-items-center justify-content-center">
                                        {/* <img src="./images/img-9.svg" alt="statements-section-img-1"> */}
                                        <img src={Images.arrival} alt="Banner" />
                                    </div>
                                    <h3 className="product-items">New arrival</h3>
                                    <p className="service-content-txt mt-3 mb-0">desktop computers, laptops, peripherals, and networking solutions, offering top performance and reliability.</p>
                                    <Button backgroundColor="#FFEEE8" marginTop="20px" color="#FA8232" text="ENQUIRY" />

                                </div>
                            </li>
                            <li className="px-sm-2 px-0 list-unstyled">
                                <div className="st-s-box w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center">
                                    <div className="st-s-icon undefined icon-1 d-flex align-items-center justify-content-center">
                                        {/* <img src="./images/img-9.svg" alt="statements-section-img-1"> */}
                                        <img src={Images.rental} alt="Banner" />
                                    </div>
                                    <h3 className=" product-items">Computer Rental</h3>
                                    <p className="service-content-txt mt-3 mb-0">Providing desktop computers, laptops, printers, and UPS solutions for flexible, reliable, and efficient rentals.</p>
                                    <Button backgroundColor="#FFEEE8" marginTop="20px" color="#FA8232" text="ENQUIRY" />

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>



            <div className='banner-content-container p-0'>
                <div className='u-photo-section-container'>
                    <div className='row flex-md-row flex-column-reverse align-items-center justify-content-center' >
                        <div className='col-md-6 col-12 mt-md-0 mt-sm-4 mt-4 d-flex align-items-center justify-content-center'>
                            <img
                                className='w-100'
                                src={Images.startUp}
                                alt="Gender Icon" />
                        </div>
                        <div className='col-md-6 col-12 mt-md-0 mt-4'>
                            <div className='lets-go-container'>
                                <h1 style={{ fontSize: "36px", letterSpacing: "-.02em" }} >Comprehensive IT Solutions Since 2019</h1>
                                <p style={{ fontSize: "16px", color: "#4E5566" }} className='audio-video-text-content mt-md-4 mt-3'>Established in 2019, PC Wizard offers cutting-edge system integration services, including hardware, software, and innovative 95% uptime maintenance technology to optimize and support business operations.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div style={{ backgroundColor: "#F5F7FA" }}>
                <div className='banner-content-container p-0'>
                    <div className='u-photo-section-container bg-transparent'>
                        <div className='row flex-md-row flex-column-reverse d-flex align-items-center justify-content-center'>
                            <div className='col-md-6 col-12 mt-md-0 mt-4'>
                                <div className='lets-go-container'>
                                    <h1 style={{ fontSize: "36px", letterSpacing: "-.02em" }} >Hardware</h1>
                                    <p style={{ fontSize: "16px", color: "#4E5566" }} className='audio-video-text-content mt-md-4 mt-3'>PC Wizard offers a wide range of products, from home computers to enterprise servers and networking solutions, catering to diverse personal and business needs with reliability and quality.</p>
                                </div>
                                <div className='mt-md-4 mt-3'>
                                    <div className='d-flex align-items-start justify-content-start gap-4'>
                                        <div className='d-flex align-items-start gap-3 '>
                                            <img
                                                src={Images.hardwareOne}
                                                alt="Gender Icon" />
                                            <div className='lets-go-container'>
                                                <h1 className='mb-0' style={{ fontSize: "18px", }} >Desktop Computers</h1>
                                                <p className='service-text-content mt-3 mb-0' style={{ fontSize: "14px", }}>Desktop computers for home PCs, enterprise servers, and networking, meeting diverse needs.</p>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-start gap-3'>
                                            <img
                                                src={Images.hardwareTwo}
                                                alt="Gender Icon" />
                                            <div className='lets-go-container'>
                                                <h1 className='mb-0' style={{ fontSize: "18px", }} >Laptop Computers</h1>
                                                <p className='service-text-content mt-3 mb-0' style={{ fontSize: "14px", }}>Laptop computers for personal, business, and enterprise needs, with advanced networking solutions.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-start gap-3  mt-4'>
                                        <img
                                            src={Images.hardwareThree}
                                            alt="Gender Icon" />
                                        <div className='lets-go-container'>
                                            <h1 className='mb-0' style={{ fontSize: "18px", }} >Computer Peripherals</h1>
                                            <p className='service-text-content mt-3 mb-0' style={{ fontSize: "14px", }}>High-quality computer peripherals for personal, business, and enterprise use, enhancing productivity seamlessly.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='col-md-6 col-12 mt-md-0 mt-sm-4 mt-4 d-flex align-items-center justify-content-center'>
                                <img
                                    className='w-100'
                                    src={Images.hardware}
                                    alt="Gender Icon" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className='banner-content-container p-0'>
                <div className='u-photo-section-container'>
                    <div className='row flex-md-row flex-column-reverse d-flex align-items-center justify-content-center'>
                        <div className='col-md-6 col-12 mt-md-0 mt-sm-4 mt-4 d-flex align-items-center justify-content-center'>
                            <img
                                className='w-100'
                                src={Images.expert}
                                alt="Gender Icon" />
                        </div>
                        <div className='col-md-6 col-12 mt-md-0 mt-4'>
                            <div className='lets-go-container'>
                                <h1 style={{ fontSize: "36px", letterSpacing: "-.02em" }} >Expert CCTV Solutions for Diverse Industries.</h1>
                                <p style={{ fontSize: "16px", color: "#4E5566" }} className='audio-video-text-content mt-md-4 mt-3'>Government hospitals, Service center, Agency, Major international retail outlets,</p>
                            </div>
                            <div className='mt-md-4 mt-3'>
                                <div className='d-flex align-items-start gap-3 bg-white'>
                                    <img
                                        src={Images.tick}
                                        alt="Gender Icon" />
                                    <div className='lets-go-container'>
                                        <h1 className='mb-0' style={{ fontSize: "18px", }} >Comprehensive Evidence Disc Printing Solutions</h1>
                                        <p className='service-text-content mt-3 mb-0' style={{ fontSize: "14px", }}>Offering CCTV, CD, DVD, and Blu-ray disc printing with serial numbering, bar-coding, indents, and corporate logos.</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-start gap-3 bg-white mt-4'>
                                    <img
                                        src={Images.tick}
                                        alt="Gender Icon" />
                                    <div className='lets-go-container'>
                                        <h1 className='mb-0' style={{ fontSize: "18px", }} >Supporting Documentation and Accessories</h1>
                                        <p className='service-text-content mt-3 mb-0' style={{ fontSize: "14px", }}>Providing CCTV management documentation, logbooks, log sheets with removal forms, CPS-approved evidence bags, and digital media for secure evidence capture and storage.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div style={{ backgroundColor: "#F5F7FA" }}>
                <div className='banner-content-container p-0'>
                    <div className='u-photo-section-container bg-transparent'>
                        <div className='lets-go-container text-center'>
                            <h1 style={{ fontSize: "36px", letterSpacing: "-.02em" }}>Data Recovery</h1>
                        </div>
                        <ul className='d-flex align-items-center justify-content-center flex-wrap mt-5 st-s-list'>
                            <li className="px-sm-2 px-0 list-unstyled">
                                <div className="st-s-box w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center">
                                    <div className="st-s-icon undefined icon-1 d-flex align-items-center justify-content-center">
                                        {/* <img src="./images/img-9.svg" alt="statements-section-img-1"> */}
                                        <img src={Images.recoveryOne} alt="Banner" />
                                    </div>
                                    <h3 className=" product-items">Partition recovery</h3>
                                    <p className="service-content-txt mt-3 mb-0">Expert partition recovery services to restore lost, deleted, or corrupted partitions.</p>
                                    <Button backgroundColor="#FFEEE8" marginTop="20px" color="#FA8232" text="ENQUIRY" />

                                </div>
                            </li>
                            <li className="px-sm-2 px-0 list-unstyled">
                                <div className="st-s-box w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center">
                                    <div className="st-s-icon undefined icon-1 d-flex align-items-center justify-content-center">
                                        {/* <img src="./images/img-9.svg" alt="statements-section-img-1"> */}
                                        <img src={Images.recoveryOTwo} alt="Banner" />
                                    </div>
                                    <h3 className=" product-items">Email recovery</h3>
                                    <p className="service-content-txt mt-3 mb-0">Reliable email recovery services to restore lost, deleted, or corrupted emails efficiently..</p>
                                    <Button backgroundColor="#FFEEE8" marginTop="20px" color="#FA8232" text="ENQUIRY" />

                                </div>
                            </li>
                            <li className="px-sm-2 px-0 list-unstyled">
                                <div className="st-s-box w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center">
                                    <div className="st-s-icon undefined icon-1 d-flex align-items-center justify-content-center">
                                        {/* <img src="./images/img-9.svg" alt="statements-section-img-1"> */}
                                        <img src={Images.recoveryThree} alt="Banner" />
                                    </div>
                                    <h3 className="product-items">Database recovery</h3>
                                    <p className="service-content-txt mt-3 mb-0">Expert database recovery services to restore lost, corrupted, or inaccessible data.</p>
                                    <Button backgroundColor="#FFEEE8" marginTop="20px" color="#FA8232" text="ENQUIRY" />

                                </div>
                            </li>
                            <li className="px-sm-2 px-0 list-unstyled">
                                <div className="st-s-box w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center">
                                    <div className="st-s-icon undefined icon-1 d-flex align-items-center justify-content-center">
                                        {/* <img src="./images/img-9.svg" alt="statements-section-img-1"> */}
                                        <img src={Images.recoveryFour} alt="Banner" />
                                    </div>
                                    <h3 className=" product-items">Hard drive recovery</h3>
                                    <p className="service-content-txt mt-3 mb-0">Expert hard drive data recovery services to retrieve lost, deleted, or corrupted files.</p>
                                    <Button backgroundColor="#FFEEE8" marginTop="20px" color="#FA8232" text="ENQUIRY" />

                                </div>
                            </li>
                            <li className="px-sm-2 px-0 list-unstyled">
                                <div className="st-s-box w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center">
                                    <div className="st-s-icon undefined icon-1 d-flex align-items-center justify-content-center">
                                        {/* <img src="./images/img-9.svg" alt="statements-section-img-1"> */}
                                        <img src={Images.recoveryFive} alt="Banner" />
                                    </div>
                                    <h3 className=" product-items">File recovery</h3>
                                    <p className="service-content-txt mt-3 mb-0">Professional file recovery services to restore lost, deleted, or corrupted data efficiently.</p>
                                    <Button backgroundColor="#FFEEE8" marginTop="20px" color="#FA8232" text="ENQUIRY" />

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>



            <div className='banner-content-container p-0'>
                <div className='u-photo-section-container'>
                    <div className='lets-go-container text-center'>
                        <h1 style={{ fontSize: "36px", letterSpacing: "-.02em" }}>Contact Us</h1>
                    </div>
                    <div className='row flex-md-row flex-column-reverse d-flex align-items-center justify-content-center mt-5'>

                        <div className='col-md-6 col-12 mt-md-0 mt-sm-4 mt-4 d-flex align-items-center justify-content-center map-container'>
                            <img
                                // className='w-100'
                                src={Images.map}
                                alt="Gender Icon" />
                        </div>
                        <div className='col-md-6 col-12 mt-md-0 mt-4'>
                            <p className="get-in-content">Get In touch</p>
                            <div className='d-flex gap-2 flex-column mt-4'>
                                <label className='label-text' htmlFor="fullName">Full Name<span style={{ color: "red" }}>*</span></label>
                                <Input onChange={handleFullNameChange} value={fullName} id="fullName" marginTop='0' placeholder="Full Name" />
                            </div>
                            <div className='d-flex gap-2 flex-column mt-4'>
                                <label className='label-text' htmlFor="email">Email Address<span style={{ color: "red" }}>*</span></label>
                                <Input onChange={emailHandleChange} value={mailValue} type="email" id="email" marginTop='0' placeholder='Email Address' />
                            </div>
                            <div className='d-flex gap-2 flex-column mt-4'>
                                <label className='label-text' htmlFor="Subject">Subject<span style={{ color: "red" }}>*</span></label>
                                <Input onChange={subjectHandleChane} value={subject} id="Subject" marginTop='0' placeholder="Message Subject" />
                            </div>
                            <div className="messageContainer d-flex gap-2 flex-column mt-4">
                                <label className='label-text' htmlFor="message">Message<span style={{ color: "red" }}>*</span></label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Enter Message"
                                    className="messageInput"
                                />
                            </div>
                            <Button marginTop={"20px"} text="Send Message" />
                        </div>
                    </div>
                </div>
            </div>








            <Footer />
        </div>
    )
}

export default Home