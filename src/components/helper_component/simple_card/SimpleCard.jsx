import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import './simpleCardStyle.css'
function SimpleCard({title,description}) {
  return (
    <div className='simple_card_main_container'>
        <div>
         <FaCheckCircle className='simple_card_icon'/>
        </div>
        <div>
        <h5 className='simple_card_title'>{title}</h5>
        <h5 className='simple_card_description'>{description}</h5>
        </div>
       
    </div>
  )
}

export default SimpleCard