import React from 'react';
import Banner from '../utils/Banner'
import Footer from '../utils/Footer'
import HeaderOne from '../utils/HeaderOne'
import PaymentUtil from '../utils/PaymentUtil';


const Payment = () => {
    return (
        <div>
            <HeaderOne/>
            <Banner/>
            <PaymentUtil/>
            <Footer/>
        </div>
    )
}

export default Payment
