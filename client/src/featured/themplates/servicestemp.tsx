import React from "react";
import ServiceHeading from "../sections/services/serviceHeading";
import PortfolioSection from "../sections/services/tabSection";
import ContactSection from "../sections/services/contactSection";

const ServiceTemp = () => {
  return (
    <div className="z-999  flex items-center justify-center flex-col ">
      <ServiceHeading />
      <PortfolioSection />
      <ContactSection/>
    </div>
  );
};

export default ServiceTemp;
