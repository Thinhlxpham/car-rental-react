import React from "react";
import ChooseCar from "../assets/choose-car.png";
import Choose1 from "../assets/choose-1.png";
import Choose2 from "../assets/choose-2.png";
import Choose3 from "../assets/choose-3.png";
import Option from "./ui/Option";
import { Link } from "react-router-dom";

const Choose = () => {
  return (
    <section id="choose">
      <div className="container">
        <div className="row choose__row">
          <figure class="choose__img__wrapper">
            <img src={ChooseCar} alt="" class="choose__img" />
          </figure>
          <div className="choose__content">
            <div className="choose__text">
              <h3 class="choose__text__subtitle">Why Choose Us</h3>
              <h1 class="choose__text__title">
                Best valued deals you will ever find
              </h1>
              <p class="choose__text__para">
                Discover the best deals you'll ever find with our unbeatable
                offers. We're dedicated to providing you with the best value for
                your money, so you can enjoy top-quality services and products
                without breaking the bank. Our deals are designed to give you
                the ultimate renting experience, so don't miss out on your
                chance to save big.
              </p>
              <Link to="/models">
                <button class="choose__text__btn">Find details</button>
              </Link>
            </div>
            <div class="choose__features">
              <Option
                image={Choose1}
                title="Cross Country Drive"
                paragraph="Take your driving experience to the next level with our top-notch vehicles for your cross-country
                    adventures."
              />
              <Option
                image={Choose2}
                title="All Inclusive Pricing"
                paragraph="Get everything you need in one convenient, transparent price with our all-inclusive pricing policy."
              />
              <Option
                image={Choose3}
                title="No Hidden Charges"
                paragraph="Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
