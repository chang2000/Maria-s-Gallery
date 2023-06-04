import React from 'react'
import './Header.css'
import headerImg1 from '../assets/header-logo.png'
import headerImg2 from '../assets/header-logo.png'
import headerImg3 from '../assets/header-logo.png'
import headerImg4 from '../assets/header-logo.png'
const Header = () => {
    return (
        <div className='header'>
            <img className='header-img'
                src={headerImg1}
                alt='' />

            <img className='header-img'
                src={headerImg2}
                alt='' />

            <img className='header-img'
                src={headerImg3}
                alt='' />

            <img className='header-img'
                src={headerImg4}
                alt='' />
        </div>
    )
}

export default Header