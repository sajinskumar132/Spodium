import React, { useEffect, useState } from "react";
import "./headerStyle.css";
import LogoWithText from "../../assets/images/logoWithText.png";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";
function Header() {
  const [navbar, setNavbar] = useState(false)
  const [hash,sethash]=useState(null)
const url = window.location.href;
const parsedUrl = new URL(url);
const hashed = parsedUrl.hash;
const cleanHash = hashed.slice(1);
function DrawerToggle() {
  const element = document.getElementById("drawer_menu_item_mobile");
  if (element) {
    if (element.style.display === "none" || element.style.display === "") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
}
const changeBackground = () => {
  sethash(cleanHash)
  if (window.scrollY >= 2) {
    setNavbar(true)
  } else {
    setNavbar(false)
  }
}
window.addEventListener("scroll", changeBackground)
  console.log(hash)
  return (
    <div className="hero_sticky_header" style={{backdropFilter:navbar?'blur(100px)':'none'}}>
    <div className="hero_main_header">
        <div className="mobile_menu" onClick={DrawerToggle}>
          <IoIosMenu className="mobile_menu_icon" />
        </div>
        <div className="hero_logo_with_text_image_container">
          <img src={LogoWithText} className="hero_logo_with_text_image" />
        </div>
        <div className="hero_sub_menu_main_container">
          <a href="#home" className= {hash ==="home"?"selectedMenu_header":"notSelectedMenu_header"}>HOME</a>
          <a href="#about" className= {hash ==="about"?"selectedMenu_header":"notSelectedMenu_header"}>ABOUT</a>
          <a href="#feature" className= {hash ==="feature"?"selectedMenu_header":"notSelectedMenu_header"}>FEATURES</a>
          <a href="#team" className= {hash ==="team"?"selectedMenu_header":"notSelectedMenu_header"}>TEAM</a>
        </div>
        <div className="download_button">
          <p style={{ textAlign: "center" }}>DOWNLOAD</p>
        </div>
        <div className="drawer_menu_item_mobile" id="drawer_menu_item_mobile">
          <div className="drawer_menu_items_container">
            <div className="drawer_menu_items_container_header">
              <img src={LogoWithText} className="hero_logo_with_text_image" />
              <AiOutlineClose
                className="drawer_close_button"
                onClick={DrawerToggle}
              />
            </div>
            <div className="drawer_menu_item_list_container">
            <a href="#home" className= {hash ==="home"?"selectedMenu_drawer":"notSelectedMenu_header"} onClick={DrawerToggle}>HOME</a>
            <a href="#about" className= {hash ==="about"?"selectedMenu_drawer":"notSelectedMenu_header"} onClick={DrawerToggle}>ABOUT</a>
            <a href="#feature" className= {hash ==="feature"?"selectedMenu_drawer":"notSelectedMenu_header"} onClick={DrawerToggle}>FEATURES</a>
            <a href="#team" className= {hash ==="team"?"selectedMenu_drawer":"notSelectedMenu_header"} onClick={DrawerToggle}>TEAM</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default Header;
