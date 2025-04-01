import ModelHero from "../component/ModelHero";
import VehicleModels from "../component/VehicleModels";
import Booking from "../component/Booking";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SuccessPopUp from "../component/ui/SuccessPopUp";
const Models = () => {
  const [carModels, setCarModels] = useState([]);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");

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
    <>
      <SuccessPopUp successOpen={successOpen} />
      <Booking
        carModels={carModels}
        bookingOpen={bookingOpen}
        setBookingOpen={setBookingOpen}
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
        setSuccessOpen={setSuccessOpen}
      />
      <ModelHero />
      <VehicleModels
        carModels={carModels}
        setCarModels={setCarModels}
        setBookingOpen={setBookingOpen}
        setSelectedModel={setSelectedModel}
      />
    </>
  );
};

export default Models;
