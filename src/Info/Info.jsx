import React from 'react'
import './Info.scss'

function Info()  {
  return (
    <div className='info'>
        <div className='header'>
            {/* <div className='header-img'> */}
              <img className = 'header-img'
                   src={require('../assets/header-logo.png')} 
                   alt=""/>
            {/* </div> */}
            <div className='header-text'>
                Maria Cai
            </div>
        </div>
    </div>
  )
}

export default Info

