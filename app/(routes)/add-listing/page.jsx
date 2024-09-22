"use client";
import { Button } from "../../../components/ui/button";
import { supabase } from "../../../utils/supabase/client";
import { useUser } from "@clerk/nextjs";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import GooglePlacesSearch from "../../_components/GooglePlacesSearch";
import toast, { Toaster } from "react-hot-toast";

const AddListingPage = () => {
  const [selectedPlace, setSelectedPlace] = useState();
  const [coordinates, setCoordinates] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();
  const router = useRouter();
  const handelNext = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("listing")
      .insert([
        {
          address: selectedPlace,
          coordinates: coordinates,
          created_by: user?.primaryEmailAddress?.emailAddress,
        },
      ])
      .select();
    if (data) {
      setIsLoading(false);
      toast.success("Successfully Added!");
      router.replace(`/edit-listing/${data[0].id}`);
    }
    if (error) {
      toast.error("Failed To Add!");
      console.log(error);
    }
  };

  return (
    <section className="p-10 flex items-center justify-center flex-col">
      <h1 className="text-2xl font-bold my-2">Add New Listing</h1>
      <div className="flex  flex-col gap-4 shadow-md rounded-md py-4 border px-6 sm:px-24">
        <p className="text-gray-500 my-2">
          Enter Address Whish You Want To List
        </p>
        <GooglePlacesSearch
          setCoordinates={setCoordinates}
          setSelectedPlace={setSelectedPlace}
        />
        <Button
          disabled={!selectedPlace || !coordinates || isLoading}
          onClick={handelNext}
          className=" w-full cursor-pointer sm:w-1/2 m-auto disabled:opacity-50 disabled:cursor-not-allowed "
        >
          {isLoading ? <LoaderCircle className=" animate-spin" /> : "Next"}
        </Button>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
};

export default AddListingPage;
