import React from 'react'
import './Info.css'
import avatarImg from '../assets/avatar-bw.jpeg'
const Info = () => {
    return (
        <div className='info'>
            <img className='info-avatar-img'
                src={avatarImg}
                alt='' />

            <div className='info-text'>

                <div className="info-text-upper">
                    <div className='info-text-name'>
                        Maria Cai
                    </div>

                    <div className='info-text-colorcode'>
                        #0C0C0C
                    </div>
                </div>


                <div className="info-text-bottom">
                    <div className='info-text-title'>
                        Advertisement / Drawing / Books / Alex's Love
                    </div>

                    <div className='info-text-short-intro'>
                        Graduated from the <b>Chinese University of Hong Kong</b>.
                        Worked at <b>Oligvy</b>.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info