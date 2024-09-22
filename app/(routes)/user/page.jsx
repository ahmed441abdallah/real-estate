"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabase/client";
import { useUser } from "@clerk/nextjs";
import { Button } from "../../../components/ui/button";
import UserListingItem from "./Listing";

const UserListing = () => {
    const { user } = useUser();  
    const [listings, setListings] = useState([]);
  

    useEffect(() => {
        if (user) {
            getUserListing();
        }
    }, [user]);

    const getUserListing = async () => {
        const { data, error } = await supabase
            .from("listing")
            .select(`*,listing_images(url,listing_id)`)
            .eq("full_name",user?.fullName);  

        if (data) {
            setListings(data);
            console.log("data", data);
        } else if (error) {
            console.error("Error fetching listings:", error);
        }
    };

    return (
        <div className="mt-4 p-4 sm:px-32 sm:py-12">
            <h1 className="text-xl font-bold">Manage Your Listing</h1>
            <div className="container my-auto grid grid-cols-1 gap-x-8 gap-y-6 mt-4 items-start lg:grid-cols-3">
               {listings.length > 0 ? (
                   listings.map((listing) => (
                    <UserListingItem listing={listing}></UserListingItem>
                    ))
               ) : (
                <div>    
                <h1>loading</h1>
                </div>
               )}
            </div>
        </div>
    );
};

export default UserListing;
