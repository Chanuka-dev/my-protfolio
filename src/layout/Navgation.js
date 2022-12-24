import React from "react";
import "./_navigation.scss";
import sprite from "../assets/sprite.svg";

function Navgation() {
  return (
    <div>
      <nav className="nav">
        <div className="nav__logo">
          <span className="nav__logo-chanu">Chanu</span>
          <span className="nav__logo-code">_code</span>
        </div>
        <div className="nav__menu-1">
          <div className="nav__menu">
            <ul className="nav__menu-list">
              <li className="nav__menu-item">
                <svg class="nav__menu-item-icon">
                  <use xlinkHref={sprite + "#icon-chevron-small-left"}></use>
                </svg>
                Services
                <svg class="nav__menu-item-icon">
                  <use xlinkHref={sprite + "#icon-keyboard_arrow_right"}></use>
                </svg>
              </li>

              <li className="nav__menu-item">
                <svg class="nav__menu-item-icon">
                  <use xlinkHref={sprite + "#icon-chevron-small-left"}></use>
                </svg>
                Works
                <svg class="nav__menu-item-icon">
                  <use xlinkHref={sprite + "#icon-keyboard_arrow_right"}></use>
                </svg>
              </li>

              <li className="nav__menu-item">
                <svg class="nav__menu-item-icon">
                  <use xlinkHref={sprite + "#icon-chevron-small-left"}></use>
                </svg>
                Notes
                <svg class="nav__menu-item-icon">
                  <use xlinkHref={sprite + "#icon-keyboard_arrow_right"}></use>
                </svg>
              </li>

              <li className="nav__menu-item">
                <svg class="nav__menu-item-icon">
                  <use xlinkHref={sprite + "#icon-chevron-small-left"}></use>
                </svg>
                Contacts
                <svg class="nav__menu-item-icon">
                  <use xlinkHref={sprite + "#icon-keyboard_arrow_right"}></use>
                </svg>
              </li>
            </ul>
          </div>

          <div className="nav__social-media">
            <ul className="nav__menu-list">
              <li className="nav__social-media-item">
                <svg class="nav__social-media-item-icon-social">
                  <use xlinkHref={sprite + "#icon-social-twitter"}></use>
                </svg>
                Twitter
              </li>

              <li className="nav__social-media-item">
                <svg class="nav__social-media-item-icon-social">
                  <use xlinkHref={sprite + "#icon-github"}></use>
                </svg>
                Github
              </li>
              <li className="nav__social-media-item">
                <svg class="nav__social-media-item-icon-social">
                  <use xlinkHref={sprite + "#icon-mail-envelope-closed"}></use>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navgation;
