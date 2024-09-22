'use client';
import React, { useEffect, useState } from 'react'
import { supabase } from '../../../utils/supabase/client';
import ListingSkelton from './ListingSkelton';
import ListingItem from './ListingItem';
const SellListing = () => {
    const [listing, setListing] = useState([]);
    const [loading, setLoading] = useState(false);
    const getListingSell= async () => {
        setLoading(true);
    const { data, error } = await supabase
      .from("listing")
      .select(`*,listing_images(url,listing_id)`) // select all columns and images related to listing
      .eq("active", true)
      .eq("type","Sell")
      .order("created_at", { ascending: false });
      if (data) {
        setListing(data);
        setLoading(false);
      }
    }
    useEffect(() => {
        getListingSell();
    }, []);
    console.log("listing", listing);
    
    
if (loading) {
    return <ListingSkelton />;
  }
  return (
    <div className='p-4 sm:px-32 sm:py-16'>
      <h1 className='text-xl font-bold'>Listing For<span className='text-gray-600'>Sell</span> </h1>
      <section className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
        {listing.length>0? (
          listing.map((list) => (
           <ListingItem list={list}></ListingItem>
          ))
        ):<h1 className='text-center text-lg font-bold text-gray-500 mt-10'>There is No Listing for Sell Now </h1> }
      </section>
    </div>
  )
}

export default SellListing;
