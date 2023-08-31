import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="gpt3__navbar container">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="" />
        </div>
        <ul className="gpt3__navba-links_container">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">What is GPT3</a>
          </li>
          <li>
            <a href="">Open AI</a>
          </li>
          <li>
            <a href="">Case Studies</a>
          </li>
          <li>
            <a href="">Libary</a>
          </li>
        </ul>
      </div>
      <div className="gpt3__sign-in hide">
        <a href="#signin" className="gpt3__signin-btn">
          Sign in
        </a>
        <button className="gpt3__signup-btn">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggle ? (
          <RiCloseLine
            onClick={() => setToggle(false)}
            className="gpt3__navbar-menu-close"
            color="#fff"
            size={27}
          />
        ) : (
          <RiMenu3Line
            onClick={() => setToggle(true)}
            className="gpt3__navbar-menu-open"
            color="#fff"
            size={27}
          />
        )}

        {toggle && (
          <div className="gpt3__navbar-menu_container">
            <ul className="gpt3__navbar-menu-links scale-up-center">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">What is GPT3</a>
              </li>
              <li>
                <a href="">Open AI</a>
              </li>
              <li>
                <a href="">Case Studies</a>
              </li>
              <li>
                <a href="">Libary</a>
              </li>
              <div className="gpt3__sign-in col">
                <a href="#signin" className="gpt3__signin-btn">
                  Sign in
                </a>
                <button className="gpt3__signup-btn">Sign up</button>
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
