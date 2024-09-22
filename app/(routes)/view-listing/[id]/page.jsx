"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "../../../../utils/supabase/client";
import Slider from "../_components/Slider";
import Details from "../_components/Details";

const ListingDetails = ({ params }) => {
  const [listingDetail, setListingDetail] = useState({});
  const getListDetails = async () => {
    const { data, error } = await supabase
      .from("listing")
      .select(`*,listing_images(url,listing_id)`) // select all columns and images related to listing
      .eq("id", params.id)
      .eq("active", true);

    if (data) {
      setListingDetail(data[0]);
    }
    if (error) {
      console.log("Failed To Fetch Listings");
    }
  };
  useEffect(() => {
    getListDetails();
  }, []);

  return (
    <div className="px-2 sm:px-36 py-4">
      <div className="px-4 md:px-36  lg:px-56 my-3">
        <Slider images={listingDetail?.listing_images}></Slider>
        <Details listingDetail={listingDetail}></Details>
      </div>
    </div>
  );
};

export default ListingDetails;
