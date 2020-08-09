import React from 'react'
import './Info.scss'

function Info()  {
  return (
    <div className='info'>
        <div className='header'>
            {/* <div className='header-img'> */}
              <img className='header-img'
                   src={require('../assets/header-logo.png')} 
                   alt=""/>
            <div className='header-text'>
                Maria Cai
            </div>
        </div>

        <div className='intro'>
          <img className='intro-img' 
               src={require('../assets/avatar-bw.jpeg')}
               alt=""
            />
          <div className='descs'>
            <div className='name'>Maria Cai</div>
            <div className='name'>Artist</div>
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

