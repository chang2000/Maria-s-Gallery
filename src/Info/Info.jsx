/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import './Info.css'
import headerImg from '../assets/header-logo.png'
import avatarBW from '../assets/avatar-bw.jpeg'
function Info()  {
  return (
    <div className='info'>
        <div className='header'>
            {/* <div className='header-img'> */}
              <img className='header-img'
                   src={headerImg} 
                   alt=""/>
            <div className='header-text'>
                Maria Cai
            </div>
        </div>

        <div className='intro'>
          <img className='intro-img' 
               src={avatarBW}
               alt=""
            />
          <div className='descs'>
            <div className='name'>Maria Cai</div>
            <div className='title'>Artist</div>
            <div className='contact'>
            ⬛	E-mail: maria55712786@gmail.com</div>
            <div className='contact'>
             ⬛	 WeChat: c632407211</div>
            <div className='contact'>
            ⬛	WeChat Official Account: MariaCaiFX</div>
          </div>
        </div>
        <div className='gallery-header'>
          <img className='gallery-logo'
               src={require('../assets/logo.png')} 
               alt=''/>
          <div className='gallery-desc'>Gallery</div>
        </div>
    </div>
  )
}

export default Info

