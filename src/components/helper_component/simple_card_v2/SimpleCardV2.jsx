import React from "react";
import circle_border from "../../../assets/images/Circle_border.png";
import "./simpleCardV2Style.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsFileEarmarkPersonFill } from "react-icons/bs";
import { TbMinusVertical } from "react-icons/tb";
function SimpleCardV2({ image, name, designation, about, socialMedia }) {
  return (
    <div className="simplecard_mainContainer">
      <div className="simplecard_image_mainContainer">
        <img src={circle_border} />
        <img src={image} className="simplecard_profile_image" />
      </div>
      <p className="simplecard_name">{name}</p>
      <p className="simplecard_designation">{designation}</p>
      <p className="simplecard_about">{about}</p>
      <div className="Socimedia_list">
        {socialMedia &&
          socialMedia.map((item,index) => {
            return (
              <div className="Socimedia_sublist_item" onClick={()=>{
                 if(item.url){
                  window.open(item.url, '_blank');
                 }
{}              }}>
                {index%2!==0 ?<TbMinusVertical className="divideline_style"/>:<></>}
                {item.platform === "linkedIn" ? (
                  <FaLinkedin className="linkedin_style" />
                ) : item.platform === "gitHub" ? (
                  <FaGithub className="github_style" />
                ) : item.platform === "portfolio" ? (
                  <BsFileEarmarkPersonFill  className="portfolio_style"/>
                ) : (
                  <></>
                )}
                {index%2!==0 && index !== socialMedia.length-1?<TbMinusVertical className="divideline_style" />:<></>}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default SimpleCardV2;
