import React from "react";
import SimpleCardV2 from "../helper_component/simple_card_v2/SimpleCardV2";
import Sajin_profile from "../../assets/images/Sajin_profile.png";
import './creativeTeamStyle.css'
function CreativeTeam() {
  return (
    <div>
      <p className="creative_team_main_text">Our Creative Team</p>
      <div className="creative_team_main_description_container">
      <p className="creative_team_main_description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet
        etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac
        nunc libero urna, feugiat.
      </p>
      </div>
     

      <div className="creative_team_profile_container">
        <SimpleCardV2
          image={Sajin_profile}
          name={"Sajin S Kumar"}
          designation={"Software Enginner"}
          about={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae."
          }
          socialMedia={[
            {
              platform:"portfolio",
              url:"https://sajinskumar-portfolio.web.app/"
            },
            {
              platform:"linkedIn",
              url:"https://www.linkedin.com/in/sajin-s-kumar-90b26720a"
            },
            {
              platform:"gitHub",
              url:"https://github.com/sajinskumar132"
            }
          ]}
        />
          <SimpleCardV2
          image={Sajin_profile}
          name={"Aravind"}
          designation={"UI/UX Designer"}
          about={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae."
          }
          socialMedia={[
            {
              platform:"linkedIn",
              url:null
            }
          ]}
        />
        <SimpleCardV2
          image={Sajin_profile}
          name={"Sreejith"}
          designation={"UI/UX Designer"}
          about={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae."
          }
          socialMedia={[
            {
              platform:"linkedIn",
              url:null
            }
          ]}
        />
      </div>
    </div>
  );
}

export default CreativeTeam;
