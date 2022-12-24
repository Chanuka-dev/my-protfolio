import React from "react";
import "./_header.scss";
import profile from "../../assets/profile.png";
import Button from "../../components/button/Button";
import sprite from "../../assets/sprite.svg";

function Header() {
  return (
    <div className="section">
      <div className="section_header">
        <div className="section_header-des">
          <div className="section_header-des-main">
            <h1 className="section_header-des-main-head1">
              Front-End Developer
            </h1>
            <h2 className="section_header-des-main-head2">
              Talk is cheap show me the code
            </h2>
            <p className="section_header-des-main-para">
              I desing and code beautifully simple things, and I love wthat I do
            </p>
            <Button />
            {/* <button className="section_header-des-des-main-button">
              Lest's chat
            </button> */}
          </div>
          <div className="section_header-profile">
            <div className="section_header-profile-work">
              <div className="section_header-profile-work-year">02</div>
              <div className="section_header-profile-work-exp">
                Years expriance
              </div>
            </div>

            <div className="section_header-profile-work">
              <div className="section_header-profile-work-year">10</div>
              <div className="section_header-profile-work-exp">
                project completed on many country
              </div>
            </div>
          </div>
        </div>
        <div className="section_header-pict">
          <div className="section_header-sercal">
            <div className="section_header-sercal-icon section_header-sercal-icon-html">
              <svg className="section_header-sercal-icon-html-svg">
                <use xlinkHref={sprite + "#icon-html5"}></use>
              </svg>
            </div>
            <div className="section_header-sercal-icon section_header-sercal-icon-css">
              <svg className="section_header-sercal-icon-css-svg">
                <use xlinkHref={sprite + "#icon-css3"}></use>
              </svg>
            </div>
            <div className="section_header-sercal-icon section_header-sercal-icon-sass">
              <svg className="section_header-sercal-icon-sass-svg">
                <use xlinkHref={sprite + "#icon-sass"}></use>
              </svg>
            </div>
            <div className="section_header-sercal-icon section_header-sercal-icon-javascript">
              <svg className="section_header-sercal-icon-javascript-svg">
                <use xlinkHref={sprite + "#icon-javascript"}></use>
              </svg>
            </div>
            <div className="section_header-sercal-icon section_header-sercal-icon-react">
              <svg className="section_header-sercal-icon-react-svg">
                <use xlinkHref={sprite + "#icon-react"}></use>
              </svg>
            </div>
            <div className="section_header-sercal-icon section_header-sercal-icon-redux">
              <svg className="section_header-sercal-icon-redux-svg">
                <use xlinkHref={sprite + "#icon-redux"}></use>
              </svg>
            </div>
            <div className="section_header-sercal-icon section_header-sercal-icon-node">
              <svg className="section_header-sercal-icon-node-svg">
                <use xlinkHref={sprite + "#icon-node-dot-js"}></use>
              </svg>
            </div>
          </div>
          <img
            src={profile}
            className="section_header-pict-img"
            alt="profile on in header section"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
