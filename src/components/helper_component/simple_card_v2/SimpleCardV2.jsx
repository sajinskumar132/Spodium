import React from 'react'
import circle_border from '../../../assets/images/Circle_border.png'
import './simpleCardV2Style.css'
function SimpleCardV2({image,name,designation,about,socialMedia}) {
  return (
    <div className='simplecard_mainContainer'>
        <div className='simplecard_image_mainContainer'>
          <img src={circle_border}/>
          <img src={image} className='simplecard_profile_image'/>
        </div>
        <p className='simplecard_name'>{name}</p>
        <p className='simplecard_designation'>{designation}</p>
        <p className='simplecard_about'>{about}</p>
    </div>
  )
}

export default SimpleCardV2