import React, { useEffect, useState } from 'react'
import './Gallery.css'
// import img1 from '../assets/site-drawing/014.png'
// import img2 from '../assets/site-drawing/039.png'
// import img3 from '../assets/site-drawing/020.png'

const Gallery = () => {
    const imgNameArr = ['014', '039', '020']
    const imgs = imgNameArr.map(item => require('../assets/site-drawing/' + item + '.png'))
    console.log(imgs)
    return (
        <div className='gallery'>
            <div className='gallery-text'>
                Gallery
            </div>
            {/* TODO: Need to develop a new interactive image gallery here */}
            {/* Use 3 images as example */}
            {/* Only show square part of the image */}
            {/* <img src="../assets/site-drawing/014.png" alt="" /> */}
            <div className='gallery-images'>
                <img className='gallery-images-item'
                    src={imgs[0]} alt="" />
                <img className='gallery-images-item'
                    src={imgs[1]} alt="" />
                <img className='gallery-images-item'
                    src={imgs[2]} alt="" />
            </div>


        </div>
    )
}

export default Gallery