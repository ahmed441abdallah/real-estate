"use client";
import React, { useEffect, useState } from "react";
import Listing from "./_components/Listing";
import Map from "./_components/Map";
import { supabase } from "../../../utils/supabase/client";
import toast, { Toaster } from "react-hot-toast";
const ListingPage = () => {
  const [listing, setListing] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchAddress, setSearchAddress] = useState();
  const [coordinates, setCoordinates] = useState();
  const [bedCount, setBedCount] = useState(0);
  const [bathCount, setBathCount] = useState(0);
  const [parkingCount, setParkingCount] = useState(0);
  const [noAddressFound, setNoAddressFound] = useState(false);
  const getLatestListing = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("listing")
      .select(`*,listing_images(url,listing_id)`) // select all columns and images related to listing
      .eq("active", true)
      .order("created_at", { ascending: false });
    if (data) {
      setListing(data);
      setLoading(false);
    }
    if (error) {
      toast.error("Failed To Fetch Listings");
    }
  };
  const handleSearch = async () => {
    const { data, error } = await supabase
      .from("listing")
      .select(`*,listing_images(url,listing_id)`) // select all columns and images related to listing
      .eq("active", true)
      .order("created_at", { ascending: false })
      .gte("bedroom", bedCount)
      .gte("bathroom", bathCount)
      .gte("parking", parkingCount)
      .like(
        "address",
        `%${searchAddress?.value?.structured_formatting?.main_text}%`
      );

    if (data) {
      setListing(data);
      if (data.length === 0) {
        setNoAddressFound(true);
      }
      else {
        setNoAddressFound(false);
      }
    }
  };

  useEffect(() => {
    getLatestListing();
  }, []);
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <Listing
          listing={listing}
          loading={loading}
          setSearchAddress={setSearchAddress}
          searchAddress={searchAddress}
          handleSearch={handleSearch}
          getLatestListing={getLatestListing}
          setBedCount={setBedCount}
          setBathCount={setBathCount}
          setParkingCount={setParkingCount}
          setCoordinates={setCoordinates}
        ></Listing>
        <Map coordinates={coordinates} listing={listing}></Map>
      </div>
      {noAddressFound && (
        <div className="mt-4 font-medium  text-red-500">
          No address found matching your search.
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ListingPage;
