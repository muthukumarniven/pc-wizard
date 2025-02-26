import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer';
import Images from '../assets/Images';
import Button from "../component/Button";

const ProductDetail = () => {
    return (
        <div className='main-banner-header ' >

            <Header />
            <div className='banner-content-container p-0'>
                <div className='u-photo-section-container'>

                    <div className='row'>
                        <div className='col-md-6 col-12 mt-md-0 mt-sm-4 mt-4'>
                            <div className='main-product-detail-session'>
                                <img src={Images.mainProductDetail} />
                            </div>
                            <ul className='list-unstyled d-flex flex-wrap justify-content-between gap-3 product-detail-list-container mt-4'>
                                <li className='product-list-active'><img src={Images.productDetailOne} /> </li>
                                <li><img src={Images.productDetailTwo} /> </li>
                                <li><img src={Images.productDetailThree} /> </li>
                                <li><img src={Images.productDetailFour} /> </li>
                                <li><img src={Images.productDetailFive} /> </li>
                                <li><img src={Images.productDetailSix} /> </li>
                            </ul>

                        </div>
                        <div className='col-md-6 col-12 mt-md-0 mt-sm-4 mt-4'>
                            <div>
                                <span className='add-wishlist-text d-flex gap-2 align-items-center'>
                                    <img src={Images.heart} />
                                    Add to Wishlist
                                </span>
                                <h4 className='mt-3 product-name-txt '>2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray</h4>
                                <div className='d-flex  gap-5 flex-wrap mt-3 avalilablity-stock-container '>
                                    <div className='d-flex gap-3 flex-column'>
                                        <span><b>Sku:</b> A264671</span>
                                        <span><b>Brand:</b> Apple</span>
                                    </div>
                                    <span><b>Availability:</b> In Stock</span>
                                </div>
                                <div className='product-color-detail mt-4'>
                                    <p>Color</p>
                                    <div className='d-flex'>
                                        <span className='product-color-detail-active'></span>
                                        <span className='product-color-detail-unactive'></span>
                                    </div>
                                </div>
                                <div className='mt-4 d-flex flex-column gap-3'>
                                    <Button text="ENQUIRY" />
                                    <Button border='1px solid #FA8232' backgroundColor='transparent' color='#FA8232' text="ADD TO CARD"/>
                                </div>
                            </div>
                        </div>

                    </div>



                    



                </div>
            </div>


            <Footer />
        </div>
    )
}

export default ProductDetail