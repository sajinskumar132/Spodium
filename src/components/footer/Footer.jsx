import React from 'react'
import logoWithText from '../../assets/images/logoWithText.png'
import './footerStyle.css'
import { IoSend } from "react-icons/io5";
function Footer() {
  return (
    <div className='footer_super_container'>
       <div className='footer_main_container'>
        <div>
            <img src={logoWithText} className='footer_logo' />
            <p className='footer_main_description1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</p>
        </div>
        <div>
            <p  className='footer_main_header1'>quick link</p>
            <p className='footer_sub_item'>About</p>
            <p className='footer_sub_item'>Feature</p>
            <p className='footer_sub_item'>Team</p>
        </div>
        <div>
            <p  className='footer_main_header2'>News Letter</p>
            <p  className="footer_main_description2">Subscribe our newsletter to get our latest update & news</p>
            <div className="footer_main_input_container" >
                <input placeholder='Your email address' className='footer_input_field'/>
                <div className='footer_main_input_send'>
                  <IoSend className='footer_main_input_send_icon'/>
                </div>
            </div>
        </div>
    </div>
     <div className='footer_main_border_line' />
     <p className='footer_copyright'>Copyright 2024. Spodium. All Right Reserved.</p>
    </div>
   
  )
}

export default Footer