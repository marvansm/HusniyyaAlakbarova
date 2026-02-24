import React from "react";
import ServiceHeading from "../sections/services/serviceHeading";
import PortfolioSection from "../sections/services/tabSection";

const ServiceTemp = () => {
  return (
    <div className="z-999 absolute flex items-center justify-center flex-col ">
      <ServiceHeading />
      <PortfolioSection />
    </div>
  );
};

export default ServiceTemp;
