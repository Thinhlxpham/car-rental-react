import React from "react";
import HeaderBg from "../assets/header-bg.png";
import HeaderCar from "../assets/header-car.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <header>
      <div className="container">
        <img src={HeaderBg} alt="" className="header-bg" />
        <div className="row header__row">
          <div className="header__text">
            <h2 className="header__subtitle">Plan your trip now</h2>
            <h1 class="header__text__title">
              Save <span class="color-primary">big</span> with our car rental
            </h1>
            <p class="header__text__para">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className="header__text__btns">
              <Link to="/models">
                <button className="header__text__btn header__text__book">
                  <span class="header__text__btn__span">Book Now</span>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="header__text__btn__icon"
                  />
                </button>
              </Link>
              <Link to="/models">
                <button className="header__text__btn header__text__learn">
                  <span class="header__text__btn__span">Learn More</span>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="header__text__btn__icon"
                  />
                </button>
              </Link>
            </div>
          </div>
          <figure class="header__img__wrapper">
            <img src={HeaderCar} alt="" class="header__img" />
          </figure>
        </div>
      </div>
    </header>
  );
};

export default Landing;
