import React from "react";
import sprite from "../../assets/sprite.svg";
import "./_work.scss";

function Work() {
  return (
    <div className="work">
      <div className="work_freelancer">
        <div className="work_freelancer-set">
          <div className="work_freelancer-set-icon work_freelancer-set-icon-fiver">
            <svg className="work_freelancer-set-icon-fiver-svg">
              <use xlinkHref={sprite + "#icon-fiverr"}></use>
            </svg>
          </div>
          <div className="work_freelancer-set-icon work_freelancer-set-icon-upwork">
            <svg className="work_freelancer-set-icon-upwork-svg">
              <use xlinkHref={sprite + "#icon-upwork"}></use>
            </svg>
          </div>
          <div className="work_freelancer-set-icon work_freelancer-set-icon-facebook">
            <svg className="work_freelancer-set-icon-facebook-svg">
              <use xlinkHref={sprite + "#icon-facebook2"}></use>
            </svg>
          </div>
          <div className="work_freelancer-set-icon work_freelancer-set-icon-instagram">
            <svg className="work_freelancer-set-icon-instergram-svg">
              <use xlinkHref={sprite + "#icon-instagram1"}></use>
            </svg>
          </div>
          <div className="work_freelancer-set-icon work_freelancer-set-icon-linkedin">
            <svg className="work_freelancer-set-icon-linkedin-svg">
              <use xlinkHref={sprite + "#icon-linkedin1"}></use>
            </svg>
          </div>
        </div>
      </div>

      <div className="work_project"></div>
    </div>
  );
}

export default Work;
