import React from 'react'
import Header from '../component/Header'
import SubHeader from '../component/SubHeader'
import Images from '../assets/Images'
import Footer from '../component/Footer';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div className='main-banner-header ' >

            <Header />
            <SubHeader
                title="About"
                breadcrumbLinks={{
                    home: "Home",
                    current: "Products",
                }}
            />

            <div className='banner-content-container p-0'>
                <div className='u-photo-section-container bg-transparent'>

                    <section class="products-section">
                        <h2 class="section-title">Products</h2>
                        <ul class="product-grid list-unstyled">
                            <li class="product-card">
                                <img src={Images.productImgOne} alt="Boat Airdopes" class="product-image" />
                                <div class="product-info">
                                    <h3 class="product-name">Boat Airdopes</h3>
                                    <p class="product-description">Lorem Ipsum has been the industry's</p>
                                    <span class="product-price">$16.00</span>
                                </div>
                            </li>
                            <li class="product-card">
                                <Link style={{ textDecoration: "none" }} to="/product-detail" >
                                    <img src={Images.hp} alt="Boat Airdopes" class="product-image" />
                                    <div class="product-info">
                                        <h3 class="product-name">HP LAPTOP</h3>
                                        <p class="product-description">Lorem Ipsum has been the industry's</p>
                                        <span class="product-price">$16.00</span>
                                    </div>
                                </Link>
                            </li>
                            <li class="product-card">
                                <img src={Images.lg} alt="Boat Airdopes" class="product-image" />
                                <div class="product-info">
                                    <h3 class="product-name">lg tv</h3>
                                    <p class="product-description">Lorem Ipsum has been the industry's</p>
                                    <span class="product-price">$16.00</span>
                                </div>
                            </li>
                            <li class="product-card">
                                <img src={Images.productImgOne} alt="Boat Airdopes" class="product-image" />
                                <div class="product-info">
                                    <h3 class="product-name">Boat Airdopes</h3>
                                    <p class="product-description">Lorem Ipsum has been the industry's</p>
                                    <span class="product-price">$16.00</span>
                                </div>
                            </li>
                            <li class="product-card">
                                <img src={Images.productImgOne} alt="Boat Airdopes" class="product-image" />
                                <div class="product-info">
                                    <h3 class="product-name">Boat Airdopes</h3>
                                    <p class="product-description">Lorem Ipsum has been the industry's</p>
                                    <span class="product-price">$16.00</span>
                                </div>
                            </li>
                            <li class="product-card">
                                <img src={Images.hp} alt="Boat Airdopes" class="product-image" />
                                <div class="product-info">
                                    <h3 class="product-name">HP LAPTOP</h3>
                                    <p class="product-description">Lorem Ipsum has been the industry's</p>
                                    <span class="product-price">$16.00</span>
                                </div>
                            </li>
                            <li class="product-card">
                                <img src={Images.lg} alt="Boat Airdopes" class="product-image" />
                                <div class="product-info">
                                    <h3 class="product-name">lg tv</h3>
                                    <p class="product-description">Lorem Ipsum has been the industry's</p>
                                    <span class="product-price">$16.00</span>
                                </div>
                            </li>
                            <li class="product-card">
                                <img src={Images.productImgOne} alt="Boat Airdopes" class="product-image" />
                                <div class="product-info">
                                    <h3 class="product-name">Boat Airdopes</h3>
                                    <p class="product-description">Lorem Ipsum has been the industry's</p>
                                    <span class="product-price">$16.00</span>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Products