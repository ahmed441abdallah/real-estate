import {
  AreaChart,
  Bath,
  BedDouble,
  CarFront,
  HomeIcon,
  LandPlot,
  Mail,
  MapPin,
  ParkingMeter,
  RollerCoasterIcon,
  Share,
  ShieldQuestion,
  Space,
} from "lucide-react";
import React from "react";
import GoogleMapSection from "../../../_components/GoogleMapSection";

const Details = ({ listingDetail }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `Check out this listing for $${listingDetail.price}`,
          text: `${listingDetail.description}`,
          url: window.location.href,
        })
        .then(() => console.log("Listing shared successfully"))
        .catch((error) => console.error("Error sharing", error));
    } else {
      alert("Share feature is not supported in your browser.");
    }
  };
  const sendEmail = () => {
    const recipientEmail = `${listingDetail?.created_by}`;
    const subject = "Interested in your listing";
    const body = `Hello,\n\nI am interested in the listing you posted. Please send me more details.`;

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="my-2">
      <section className="shadow-md flex justify-between items-center p-4">
        <div>
          <h2 className="text-2xl font-bold">${listingDetail.price}</h2>
          <h3 className="flex gap-2 text-gray-500 mt-2">
            <MapPin />
            {listingDetail.address}
          </h3>
        </div>
        <div>
          <button
            className="bg-gray-500 px-10 py-2 flex gap-2 rounded-lg text-white"
            onClick={handleShare}
          >
            <Share />
            Share
          </button>
        </div>
      </section>
      <section className="p-4">
        <h1 className="text-1xl font-bold">Key Feature</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
          <div className="bg-gray-200 p-2 rounded-md flex gap-2 justify-center items-center text-lg">
            <HomeIcon />
            <p>{listingDetail.property_type}</p>
          </div>
          <div className="bg-gray-200 p-2 rounded-md flex gap-2 justify-center items-center text-lg">
            <ShieldQuestion />
            <p>For {listingDetail.type}</p>
          </div>
          <div className="bg-gray-200 p-2 rounded-md flex gap-2 justify-center items-center text-lg">
            <LandPlot />
            <p>{listingDetail.area}M²</p>
          </div>
          <div className="bg-gray-200 p-2 rounded-md flex gap-2 justify-center items-center text-lg">
            <BedDouble />
            <p>{listingDetail.bedroom} BedRoom</p>
          </div>
          <div className="bg-gray-200 p-2 rounded-md flex gap-2 justify-center items-center text-lg">
            <Bath />
            <p>{listingDetail.bathroom} Bath</p>
          </div>
          <div className="bg-gray-200 p-2 rounded-md flex gap-2 justify-center items-center text-lg">
            <CarFront />
            <p>{listingDetail.parking} Parking</p>
          </div>
        </div>
      </section>
      <section className="p-4">
        <h1 className="text-1xl font-bold">What is Special</h1>
        <p className="text-gray-500 leading-7">{listingDetail.description}</p>
      </section>
      <section className="p-4">
        <h1 className="text-1xl font-bold mb-2">Find On Map</h1>
        <GoogleMapSection
          coordinates={listingDetail.coordinates}
          listing={[listingDetail]}
        ></GoogleMapSection>
      </section>
      <section className="p-4 ">
        <h1 className="text-1xl font-bold mb-2">Contact Agent</h1>
        <div className="bg-gray-200 shadow-md p-4 rounded-md flex justify-between items-center ">
          <div className="flex gap-2 sm:gap-4 items-center">
            <img
              src={listingDetail.profile_image}
              className="w-10 h-10 rounded-full"
              alt="Rounded avatar"
            />
            <div>
              <h2 className="text-xl font-medium">{listingDetail.full_name}</h2>
              <p className=" leading-6 text-slate-800">
                {listingDetail.created_by}
              </p>
            </div>
          </div>
          <div>
            <button
              onClick={sendEmail}
              className="bg-gray-500 text-white text-sm sm:text-base  px-2 sm:px-4 py-2 rounded-md flex gap-2 items-center"
            >
              <Mail></Mail>
              Send
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
