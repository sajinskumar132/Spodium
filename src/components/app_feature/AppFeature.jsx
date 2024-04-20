import React from "react";
import "./appFeatureStyle.css";
import App_feature_backgroundImage from "../../assets/images/app_feature_background.png";
import SimpleCardV1 from "../helper_component/simple_card_v1/SimpleCardV1";
import MessageIcon from "../../assets/images/message_icon.png";
import LogowithBackgroundRemoved from "../../assets/images/logo_large_size.png";
import Browser_icon from "../../assets/images/browser.png";
import UiDesignIcon from "../../assets/images/ui_design_icon.png";
import Eye_scanner_Icon from "../../assets/images/eye-scanner.png";
import cell_phone from "../../assets/images/cell-phone.png";
import male_telemarketer from "../../assets/images/male-telemarketer.png";
function AppFeature() {
  return (
    <div id="feature" className="app_featur_main_container">
      <div className="app_featur_main_image_container">
        <img
          src={App_feature_backgroundImage}
          className="app_featur_main_image"
        />
      </div>
      <div className="app_featur_sub_container">
        <p className="app_featur_main_text">App Feature</p>
        <div className="center_flex_item">
          <p className="app_featur_main_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
        </div>
      </div>
      <div className="app_featur_sub_container1">
        <div>
          <div className="center_flex_item_0">
            <SimpleCardV1
              image={MessageIcon}
              text={"Full free chat"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              }
            />
          </div>
          <div className="flex_item_helper">
            <div className="flex_item">
              <SimpleCardV1
                image={Browser_icon}
                text={"unlimited features"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
              />
              <SimpleCardV1
                image={cell_phone}
                text={"Ios & android version"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
              />
            </div>
          </div>

          <div className="center_flex_item">
            <img src={LogowithBackgroundRemoved} />
          </div>
          <div className="flex_item_helper">
            <div className="flex_item">
              <SimpleCardV1
                image={UiDesignIcon}
                text={"awesome ui design"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
              />
              <SimpleCardV1
                image={Eye_scanner_Icon}
                text={"retina ready graphics"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
              />
            </div>
          </div>

          <div className="center_flex_item_0">
            <SimpleCardV1
              image={male_telemarketer}
              text={"24/7 support by real pepole"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppFeature;
