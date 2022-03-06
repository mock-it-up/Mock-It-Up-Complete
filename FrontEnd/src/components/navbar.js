import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import { useState } from "react";
function Navbar() {
  const [burgerToggled, setburgerToggled] = useState(false);
  const ToggleSwitch = () => {
    burgerToggled ? setburgerToggled(false) : setburgerToggled(true);
  };
  return (
    <header>
      <div class="container">
        <h1 class="logo">
          Mock<span>ItUp</span>
        </h1>

        <nav class={burgerToggled ? "site-nav site-nav--open" : "site-nav"}>
          <ul>
            <li>
              <a href="#mainpage-id">
                <i class="fa fa-home site-nav--icon"></i>Home
              </a>
            </li>
            <li>
              <a href="#about-tag">
                <i class="fa fa-info site-nav--icon"></i>About
              </a>
            </li>
            <li>
              <a href="#test">
                <i class="fa fa-pencil site-nav--icon"></i>Register Now
              </a>
            </li>
            <li>
              <a href="#contact-id">
                <i class="fa fa-usd site-nav--icon"></i>Contact Us
              </a>
            </li>
          </ul>
        </nav>

        <div
          class={burgerToggled ? "menu-toggle open" : "menu-toggle"}
          onClick={ToggleSwitch}
        >
          <div class="hamburger"></div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
