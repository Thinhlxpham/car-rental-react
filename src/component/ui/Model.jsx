import React from "react";
import CarModel from "../../assets/model-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faCircleCheck,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const Model = () => {
  return (
    <div className="model">
      <img src={CarModel} alt="" className="model__img" />
      <div className="model__details model__details-1">
        <h3 className="model__details__name">Toyota Camry</h3>
        <h4 className="model__details__price">
          $50
          <span className="model__details__price__span">per day</span>
        </h4>
      </div>
      <div className="model__details model__details-2">
        <div className="model__detail">
          <FontAwesomeIcon icon={faStar} className="model__details__icon" />
          <span className="model__details__text">4.2 / 5</span>
        </div>
        <div className="model__detail model__detail-right">
          <FontAwesomeIcon icon={faCar} className="model__details__icon" />
          <span className="model__details__text">Petro</span>
        </div>
        <div className="model__detail">
          <FontAwesomeIcon icon={faCar} className="model__details__icon" />
          <span className="model__details__text">Toyota</span>
        </div>
        <div className="model__detail model__detail-right">
          <FontAwesomeIcon icon={faCar} className="model__details__icon" />
          <span className="model__details__text">Automatic</span>
        </div>
      </div>
      <button className="model__btn">
        <span className="model__btn__span">Book Ride</span>
        <FontAwesomeIcon icon={faCircleCheck} />
      </button>
    </div>
  );
};

export default Model;
