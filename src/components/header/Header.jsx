import React from 'react'
import './headerStyle.css'
import LogoWithText from '../../assets/images/logoWithText.png'
function Header() {
  return (
    <div className='hero_main_header'>
        <div>
         <img src={LogoWithText} />
        </div>
        <div className='hero_sub_menu_main_container'>
            <p>HOME</p>
            <p>ABOUT</p>
            <p>FEATURES</p>
            <p>TEAM</p>
        </div>
        <div>
            <p className='download_button'>DOWNLOAD</p>
        </div>
    </div>
  )
}

export default Header