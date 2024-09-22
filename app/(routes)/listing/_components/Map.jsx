import React from "react";
import GoogleMapSection from "../../../_components/GoogleMapSection";

const Map = ({ coordinates, listing }) => {
  return (
    <section className="fixed right-10 h-full md:w-[350px] lg:w-[650px]">
      <GoogleMapSection
        coordinates={coordinates}
        listing={listing}
      ></GoogleMapSection>
    </section>
  );
};

export default Map;
