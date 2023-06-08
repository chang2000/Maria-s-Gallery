import React from 'react'
import './Footer.css'
import FooterHeadlineImg from '../assets/header-logo.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-headline">
                <div className="footer-text">
                    Contact
                </div>
                <img className='footer-headline-img'
                    src={FooterHeadlineImg}
                    alt='' />
            </div>
            <div className="footer-info-text">
                Email: xxxxx@gmail.com
            </div>
            <div className="footer-info-text">
                Wechat:
            </div>
            <div className="footer-info-text">
                Wechat Official Account:
            </div>

        </div>
    )
}

export default Footer