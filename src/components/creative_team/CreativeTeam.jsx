import React from "react";
import SimpleCardV2 from "../helper_component/simple_card_v2/SimpleCardV2";
import Sajin_profile from "../../assets/images/Sajin_profile.png";
import Sreejith_profile from '../../assets/images/sreejith_profile.png';
import Aravind_profile from '../../assets/images/araving_profile.png'
import './creativeTeamStyle.css'
function CreativeTeam() {
  return (
    <div id="team">
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
            "Our developer is a seasoned professional with a strong background in software development. He has a deep understanding of various programming languages and frameworks, ensuring robust and efficient solutions for any project."
          }
          socialMedia={[
            {
              platform:"linkedIn",
              url:"https://www.linkedin.com/in/sajin-s-kumar-90b26720a"
            },
            {
              platform:"portfolio",
              url:"https://sajinskumar-portfolio.web.app/"
            },
            {
              platform:"gitHub",
              url:"https://github.com/sajinskumar132"
            }
          ]}
        />
          <SimpleCardV2
          image={Aravind_profile}
          name={"Aravind"}
          designation={"UI/UX Designer"}
          about={
            "Our UI designer is responsible for the visual aspects of the app. They have a keen eye for aesthetics and are skilled at creating attractive and functional designs. He ensure the balance between functionality and aesthetics."
          }
          socialMedia={[
            {
              platform:"linkedIn",
              url:'https://in.linkedin.com/in/aravindrvz'
            },
            {
              platform:"portfolio",
              url:"https://linktr.ee.com/aravindrvz"
            },
            {
              platform:"dribble",
              url:"https://dribbble.com/aravindrvz"
            },
          ]}
        />
        <SimpleCardV2
          image={Sreejith_profile}
          name={"Sreejith"}
          designation={"UI/UX Designer"}
          about={
            "The UX designer plays a crucial role in creating an intuitive and user-friendly experience for our app users. He conduct user research, create wireframes and prototypes, and ensure that the app meets the needs of the users."
          }
          socialMedia={[
            {
              platform:"linkedIn",
              url:'https://linkedin.com/in/iamsreeji'
            },
            {
              platform:"portfolio",
              url:"https://linktr.ee.com/iamsreeji"
            },
            {
              platform:"behance",
              url:"https://behance.com/iamsreeji"
            },
          ]}
        />
      </div>
    </div>
  );
}

export default CreativeTeam;
