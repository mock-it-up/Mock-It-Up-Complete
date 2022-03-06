import React from "react";
import Contact from "../assets/svgs/contact.svg";

function contact() {
  return (
    <div className="contact-container" id="contact-id">
      <div className="contact__page">
        <div className="contact__form">
          <div className="title__holder">
            <h1 className="contact__title section__title">
              Still Have Questions?
            </h1>
            <div className="h2__holder">
              <p className="contact__subtitle">
                Leave us your email and we will get in touch with you in 1 to 2
                business days.
              </p>
            </div>
            <div className="contact__address">
            <input
              type="email"
              className="query__email"
              placeholder="Your Email"
            />
            <a href="#" className="email__submit button">
              Submit
            </a>
          </div>
          </div>
          <div className="contact__pic icon__holder">
            <img src={Contact} alt="" className="contact__icon icons" />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default contact;
