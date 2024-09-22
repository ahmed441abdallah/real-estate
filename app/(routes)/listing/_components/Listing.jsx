"use client";
import {
  Bath,
  BedDouble,
  MapPin,
  ParkingSquareIcon,
  Ruler,
  SearchIcon,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import ListingLoader from "./listing-loader";
import { Button } from "../../../../components/ui/button";
import SelectFiltering from "./SelectFiltering";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import Link from "next/link";

const Listing = ({
  listing,
  loading,
  setSearchAddress,
  handleSearch,
  getLatestListing,
  setBedCount,
  setBathCount,
  setParkingCount,
  setCoordinates,
}) => {
  if (loading) {
    return <ListingLoader />;
  }
  return (
    <div>
      <section className="grid grid-cols-3 gap-4 ">
        <div className=" col-span-2">
          <div className="flex gap-2 items-center">
            <MapPin />
            <GooglePlacesAutocomplete
              apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}
              selectProps={{
                isClearable: true,
                placeholder: "Search Address",
                className: "w-full ",
                onChange: (place) => {
                  setSearchAddress(place);
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
        </div>
        <Button
          className="bg-gray-600 flex gap-2 col-span-1"
          onClick={handleSearch}
        >
          <SearchIcon className="w-5 h-5" />
          Search
        </Button>
      </section>
      <div>
        <SelectFiltering
          setBathCount={setBathCount}
          setBedCount={setBedCount}
          setParkingCount={setParkingCount}
          getLatestListing={getLatestListing}
        ></SelectFiltering>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
        {listing.map((item) => {
          return (
            <Link
              href={`/view-listing/${item.id}`}
              key={item.id}
              className="p-2 cursor-pointer"
            >
              <Image
                src={item.listing_images[0].url}
                className="rounded-lg h-[300px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                width={800}
                height={300}
              ></Image>
              <div className="p-2">
                <h1 className="text-1xl font-bold my-2">${item.price}</h1>
                <h2 className="text-lg text-gray-500 flex items-center gap-2">
                  <MapPin />
                  {item.address}
                </h2>
                <div className="mt-2 flex gap-3">
                  <h2 className="flex gap-2 items-center justify-center p-1 bg-slate-200 rounded-md text-gray-500">
                    <BedDouble />
                    {item.bedroom}
                  </h2>
                  <h2 className="flex gap-2 items-center justify-center p-1 bg-slate-200 rounded-md text-gray-500">
                    <Bath />
                    {item.bathroom}
                  </h2>
                  <h2 className="flex gap-2 items-center justify-center p-1 bg-slate-200 rounded-md text-gray-500">
                    <Ruler />
                    {item.area}
                  </h2>
                  <h2 className="flex gap-2 items-center justify-center p-1 bg-slate-200 rounded-md text-gray-500">
                    <ParkingSquareIcon />
                    {item.parking}
                  </h2>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default Listing;
