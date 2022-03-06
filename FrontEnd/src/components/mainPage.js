import React from "react";
import Navbar from "./navbar";
import pic from "../assets/svgs/Welcome.svg";
function mainPage() {
  return (
    <div className="father">
      <Navbar />
      <div className="mainPage exp" id="mainpage-id">
        <div className="titleHeader ">
          <div className="namer">
            <h1>MOCK</h1>
            <h1>IT</h1>
            <h1>UP.</h1>
          </div>
          <h3>The Ideal way to prepare for interviews</h3>
          <h3>Better stumble in front of a friend than a recruiter</h3>
          <div className="registration green">
            <a href="#test" className="button">
              Schedule Now
            </a>
          </div>
        </div>
        <div className="mainIcons">
          <img src={pic} alt="" className="icons__mainpage icons__remove" />
        </div>
      </div>
    </div>
  );
}

export default mainPage;
