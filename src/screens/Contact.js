import React, { useState } from "react";
import Footer from '../component/Footer'
import SubHeader from '../component/SubHeader'
import Images from '../assets/Images'
import Button from "../component/Button";
import Header from '../component/Header';
import Input from '../component/Input';

const Contact = () => {
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
            <SubHeader
                title="About"
                breadcrumbLinks={{
                    home: "Home",
                    current: "Contact Us",
                }}
            />

            <div className='banner-content-container p-0'>
                <div className='u-photo-section-container bg-transparent'>
                <div className='banner-content-container p-0'>
                <div className='u-photo-section-container'>
                
                    <div className='row  d-flex align-items-center justify-content-center'>

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
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact