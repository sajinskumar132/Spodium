import React from 'react'
import './simpleCardV1Style.css'
function SimpleCardV1({image,text,description,align}) {
  return (
    <div className='simple_card_v1_container'>
        <img src={image} className='simple_card_v1_image'/>
        <p className='simple_card_v1_text'>{text}</p>
        <p className='simple_card_v1_description'>{description}</p>
    </div>
  )
}

export default SimpleCardV1