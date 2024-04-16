import React from 'react'
import './heroStyle.css'
import BackgroundImage from '../../assets/images/hero_background.png'
import PlayStoreImage from '../../assets/images/PlayStoreImage.png'
import AppStoreImage from '../../assets/images/AppStoreImage.png'
import MobileBody from '../../assets/images/phone_body.png'
import MobileScreen from '../../assets/images/phone_screen.gif'
import MobileScreenNotch from '../../assets/images/mobile_screen_noch.png'
import LogoWithWhiteText from '../../assets/images/logoWithTextWhite.png'
function Hero() {
  return (
    <div id='home' className='main_hero_container'>
        <div className='main_hero_image_container'>
            <img src={BackgroundImage} className='main_hero_image'/>
        </div>
        <div className='main_hero_content_main_container'>
        <div className='main_hero_content_container'>
            <div className='hero_grid_child_1'>
                <h1 className='hero_main_text'>Connect, Bet, Win <br/> Your Ultimate Social  <br/> Betting Experience</h1>
                <p className='hero_main_Sub_text'>COMING SOON</p>
                <div className='hero_main_store_container'>
                    <img src={PlayStoreImage}/>
                    <img src={AppStoreImage}/>
                </div>
            </div>
            <div>
                <div style={{'position':'relative'}}> 
                    <div className='hero_mobile_screen_container'>
                    <img src={MobileBody} className='hero_mobile_screen'/>
                    </div>
                    <div  className='hero_mobile_screen_gif_container'>
                      <img src={MobileScreen} className='hero_mobile_screen_gif'/>
                    </div>
                    <div className='hero_mobile_screen_notch_container'>
                    <img src={MobileScreenNotch} className='hero_mobile_screen_notch' />
                    </div>
                    <div className='hero_mobile_screen_logo_container'>
                    <img src={LogoWithWhiteText} className='hero_mobile_screen_logo' />
                    </div>
                </div>
            </div>
          
        </div>
        </div>
       
    </div>
  )
}

export default Hero