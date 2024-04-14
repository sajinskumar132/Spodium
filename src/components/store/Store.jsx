import React from 'react'
import PlayStoreImage from '../../assets/images/PlayStoreImage.png'
import AppStoreImage from '../../assets/images/AppStoreImage.png'
import spodium_store_image from '../../assets/images/spodium_store_image.png'
import './storeStyle.css'
function Store() {
  return (
    <div className='Store_main_container'>
        <div>
            <p className='Store_main_text'>COMMING SOON ON</p>
            <p className='Store_main_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. 
                Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. 
                Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
                <div className='Store_main_store_container'>
                    <img src={PlayStoreImage}/>
                    <img src={AppStoreImage}/>
                </div>
        </div>
        <div>
            <img src={spodium_store_image}/>
        </div>
    </div>
  )
}

export default Store