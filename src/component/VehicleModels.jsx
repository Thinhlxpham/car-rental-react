import React, { useEffect, useState } from "react";
import axios from "axios";
import Model from "./ui/Model";

const VehicleModels = () => {
  const { carModels, setCarModels } = useState([]);
  async function fetchModels() {
    const { data } = await axios.get(
      "https://car-rental-api.up.railway.app/car"
    );

    const models = data.data;

    setCarModels(models);
  }
  useEffect(() => {
    fetchModels();
  }, []);
  return (
    <section id="models">
      <div className="container">
        <div className="row models__row">
          <div className="models__header">
            <h2 className="models__header__title">Vehicle Models</h2>
            <select defaultValue="" className="models__header__sort">
              <option
                value=""
                disabled
                className="models__header__sort__option"
              >
                Sort
              </option>
              <option
                value="HIGH_TO_LOW"
                className="models__header__sort__option"
              >
                Price (high to low)
              </option>
              <option
                value="LOW_TO_HIGH"
                className="models__header__sort__option"
              >
                Price (low to high)
              </option>
              <option value="RATING" className="models__header__sort__option">
                Rating
              </option>
            </select>
          </div>
          <div className="models__list">
            {carModels.map((model) => (
              <Model model={model} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleModels;
