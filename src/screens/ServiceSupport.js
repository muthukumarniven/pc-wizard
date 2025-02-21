import React from 'react'
import Footer from '../component/Footer'
import SubHeader from '../component/SubHeader'

import Header from '../component/Header';

const ServiceSupport = () => {
  return (
    <div className='main-banner-header ' >
    <Header />
    <SubHeader
        title="About"
        breadcrumbLinks={{
            home: "Home",
            current: "About",
        }}
    />
    <div className="banner-content-container mt-5">
        <div className='u-photo-section-container mb-5'>
            <div className='lets-go-container'>
                <p className='service-support-text mt-3 mb-5'>1. The company provides comprehensive maintenance support for all products supplied by it or third party. We offer Onsite support for Ariyalur Surrounding areas, with or without spares supply, as per customer needs and requirements.</p>
                <p className='service-support-text mt-3'>2. Our team of fully trained and experienced Engineers & technicians provides prompt and effective services to all our valued clients. A response time of 2 to 3 hours and resolution time of one working day have established us as the most sought-after Maintenance and servicing organization. The technicians are effectively monitored and supervised by supervisors and an experienced Manager as Head of Maintenance and Services.</p>
            </div>
        </div>
    </div>
    <Footer />
</div>
  )
}

export default ServiceSupport