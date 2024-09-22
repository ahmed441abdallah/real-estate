"use client";
import { MapPin } from "lucide-react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";

const GooglePlacesSearch = ({ setSelectedPlace, setCoordinates }) => {
  return (
    <div className="flex gap-2 items-center">
      <MapPin />
      <GooglePlacesAutocomplete
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}
        selectProps={{
          isClearable: true,
          placeholder: "Search Address",
          className: "w-full ",
          onChange: (place) => {
            setSelectedPlace(place?.label);
            geocodeByAddress(place?.label)
              .then((results) => getLatLng(results[0]))
              .then(({ lat, lng }) => {
                setCoordinates({ lat, lng });
                console.log(
                  "Successfully got latitude and longitude",
                  lat,
                  lng
                );
              });
          },
        }}
      />
    </div>
  );
};

export default GooglePlacesSearch;
