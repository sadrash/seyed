import React from "react";
import "./AboutStyles.css";
import image from "../../assets/img1.jpg";
import image1 from "../../assets/img2.jpg";
import image2 from "../../assets/img3.jpg";


function About() {
  return (
    <div className="about" id="about">
      <h1 className="about-title"> About Us </h1>
      <div className="about-content">
        <h2>The first water town in Iran</h2>
        <div className="img1">
          <p>
          By studing most beautiful water towns of the world and by using the wonderful nature of our country, we create the most beautiful town, let's correct this , we made a Dream, a magical dream that now is available for you to join it's family 💕 
          </p>
          <img src={image} alt="img1" />
        </div>
        <h2>Company</h2>
        <div className="img1">
          <img src={image2} alt="img2" />

          <p>
            Seyedour Enterprise is one of the most creative and powerful mass-instruction companies in the country and it is based in Guilan. We have made a lot of projects all over the country and now we are glad to present the most beautiful water town in Iran.
          </p>
        </div>
        <h2>The Best Investment</h2>
        <div className="img1">
          <p>
           By joining the family of this project, not only you have a wonderful home with a unique nature , but also you gain a great amont of profit on your investment. 
          </p>
          <img src={image1} alt="img3" />
        </div>
      
      </div>
      
    </div>
  );
}

export default About;
