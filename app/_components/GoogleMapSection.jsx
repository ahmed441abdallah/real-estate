import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  MarkerF,
  OverlayView,
  useJsApiLoader,
} from "@react-google-maps/api";
import Image from "next/image";
const containerStyle = {
  width: "100%",
  height: "80vh",
  borderRadius: "10px",
};

const GoogleMapSection = ({ coordinates, listing }) => {
  const [center, setCenter] = useState({
    lat: -3.745,
    lng: -38.523,
  });
  console.log("listing fromm map", listing);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  const [map, setMap] = React.useState(null);
  useEffect(() => {
    coordinates && setCenter(coordinates);
  }, [coordinates]);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  const [selectedListing, setSelectedListing] = useState();
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      onLoad={() => console.log("Map loaded")}
      onUnmount={onUnmount}
      gestureHeading="greedy"
    >
      {listing &&
        listing.map((list) => {
          return (
            <MarkerF
              position={list.coordinates}
              onClick={() => setSelectedListing(list)}
            >
              {selectedListing && (
                <div>
                  <OverlayView
                    position={list.coordinates}
                    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                  >
                    <div className="bg-white w-[140px] shadow-lg  rounded-lg  flex justify-center flex-col items-center pt-1">
                      <button
                        className=" self-end text-lg me-2"
                        onClick={() => setSelectedListing(null)}
                      >
                        X
                      </button>
                      <Image
                        src={list.listing_images[0].url}
                        width={120}
                        height={100}
                        className="rounded-lg object-cover"
                      ></Image>
                      <div className="w-[110px] p-1 ">
                        {" "}
                        <h1 className="text-xl font-bold mt-2">
                          ${list.price}
                        </h1>
                        <p className="text-gray-700">{list.address}</p>
                      </div>
                    </div>
                  </OverlayView>
                </div>
              )}
            </MarkerF>
          );
        })}
    </GoogleMap>
  );
};

export default GoogleMapSection;
