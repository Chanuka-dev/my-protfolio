import React from "react";
import sprite from "../../assets/sprite.svg";
import "./_about.scss";

function About() {
  return (
    <div className="part1">
      <div className="part1_about">
        <div className="part1_about-skill">
          <div className="part1_about-skill-container">
            <div className="part1_about-skill-container-head">
              <div className="part1_about-skill-container-head-lng">Html</div>
              <div className="part1_about-skill-container-head-svg">
                <svg className="part1_about-skill-container-head-svg-icon">
                  <use xlinkHref={sprite + "#icon-html5"}></use>
                </svg>
              </div>
            </div>
            <div className="part1_about-skill-container-bar">
              <span className="part1_about-skill-container-bar-precentage-html"></span>
            </div>
          </div>

          <div className="part1_about-skill-container">
            <div className="part1_about-skill-container-head">
              <div className="part1_about-skill-container-head-lng">css3</div>
              <div className="part1_about-skill-container-head-svg">
                <svg className="part1_about-skill-container-head-svg-icon">
                  <use xlinkHref={sprite + "#icon-css3"}></use>
                </svg>
              </div>
            </div>
            <div className="part1_about-skill-container-bar">
              <span className="part1_about-skill-container-bar-precentage part1_about-skill-container-bar-precentage-css"></span>
            </div>
          </div>

          <div className="part1_about-skill-container">
            <div className="part1_about-skill-container-head">
              <div className="part1_about-skill-container-head-lng">
                JavaScript
              </div>
              <div className="part1_about-skill-container-head-svg">
                <svg className="part1_about-skill-container-head-svg-icon">
                  <use xlinkHref={sprite + "#icon-javascript"}></use>
                </svg>
              </div>
            </div>
            <div className="part1_about-skill-container-bar">
              <span className="part1_about-skill-container-bar-precentage-javascript"></span>
            </div>
          </div>

          <div className="part1_about-skill-container">
            <div className="part1_about-skill-container-head">
              <div className="part1_about-skill-container-head-lng">
                React.js
              </div>
              <div className="part1_about-skill-container-head-svg">
                <svg className="part1_about-skill-container-head-svg-icon">
                  <use xlinkHref={sprite + "#icon-react"}></use>
                </svg>
              </div>
            </div>
            <div className="part1_about-skill-container-bar">
              <span className="part1_about-skill-container-bar-precentage-react"></span>
            </div>
          </div>

          <div className="part1_about-skill-container">
            <div className="part1_about-skill-container-head">
              <div className="part1_about-skill-container-head-lng">Redux</div>
              <div className="part1_about-skill-container-head-svg">
                <svg className="part1_about-skill-container-head-svg-icon">
                  <use xlinkHref={sprite + "#icon-redux"}></use>
                </svg>
              </div>
            </div>
            <div className="part1_about-skill-container-bar">
              <span className="part1_about-skill-container-bar-precentage-redux"></span>
            </div>
          </div>

          <div className="part1_about-skill-container">
            <div className="part1_about-skill-container-head">
              <div className="part1_about-skill-container-head-lng">
                Node.js
              </div>
              <div className="part1_about-skill-container-head-svg">
                <svg className="part1_about-skill-container-head-svg-icon">
                  <use xlinkHref={sprite + "#icon-node-dot-js"}></use>
                </svg>
              </div>
            </div>
            <div className="part1_about-skill-container-bar">
              <span className="part1_about-skill-container-bar-precentage-node"></span>
            </div>
          </div>
        </div>
        <div className="part1_about-me">
          <div className="part1_about-me-indt">Introduce</div>
          <div className="part1_about-me-name">
            Hello! I'm Chanuka Samarasinghe
          </div>
          <div className="part1_about-me-short">
            Every greate desing beging with an even better story
          </div>
          <div className="part1_about-me-deatails">
            since beging as a my freelance nearly 2 yars ago. I have done remort
            work for agencise. consulted from startups, and colabarated with
            talented people to create digital product
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
