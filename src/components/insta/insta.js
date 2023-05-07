import React from "react";
import "./insta.css";
import AA from "../../assets/1.mp4";
import bb from "../../assets/222.mp4";
import cc from "../../assets/33.mp4";

function insta() {
  return (
    <div className="insta">
      <div className="card1">
        <video src={AA} controls></video>
        <h2>City</h2>
        <p>
         ChafoChamchale is a beauftigl city in North of Iran with a unique nature. Its going to be a port town and a paradise for investors.
        </p>
      </div>
      <div className="card2">
        <video src={bb} controls></video>
        <h2>Seyedpour Family</h2>
        <p>
          We are glad to have these great people in our company . All of Our staff members are educated and ready to consult you with your investment.
        </p>
      </div>
      <div className="card3">
        <video src={cc} controls ></video>
        <h2>Maze Islands</h2>
        <p>
          The most beautiful Project of Iran. You can be part of it too. Contact us for a full explanation and details of our projects.
        </p>
      </div>
    </div>
  );
}

export default insta;
