import Link from 'next/link';
import React from 'react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../../../components/ui/alert-dialog';
import { Button } from '../../../components/ui/button';
import toast, { Toaster } from 'react-hot-toast';

const UserListingItem = ({listing}) => {
    const handleDelete = async () => {
        const { data, error } = await supabase
            .from("listing")
            .delete()
            .eq("id", listing.id);
        if (data) {
            toast.success("Listing Deleted Successfully");
        } else if (error) {
            toast.error("Failed To Delete Listing");
        }
    }
 
  return (
    <div className="relative shadow-md rounded-lg overflow-hidden group" key={listing.id}>
    <div className="h-48 w-full">
      <img
       src={listing.listing_images[0].url?listing.listing_images[0].url:"https://sanantoniosports.org/wp-content/uploads/2022/07/placeholder-image.jpeg"}
        alt="image"
        className="h-full w-full object-cover"
      />
    </div>
    <div className="p-6">
      <p className="text-blue-600 text-sm font-medium mb-2">{listing.property_type}</p>
      <h2
        className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-900"
      >
      {listing.address}
      </h2>
      <p className="text-gray-500 font-normal leading-7 mb-6">{listing.description}</p>
    </div>
    <div className="absolute inset-0 cursor-pointer bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-500">
    <div className="space-x-4">
    <Link href={`view-listing/${listing.id}`}> <button className="bg-blue-600 text-white px-4 py-2 rounded">View</button>
    </Link>
    <Link href={`edit-listing/${listing.id}`}>  
          <button className="bg-gray-600 text-white px-4 py-2 rounded">Edit</button>
    </Link>
      <AlertDialog>
      <AlertDialogTrigger asChild>
      <button className="bg-red-600 text-white px-4 py-2 rounded">Delete</button>

      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            listing and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    </div>
  </div>
  <Toaster  position="top-center"
  reverseOrder={false}/>
  </div>
  )
}

export default UserListingItem;
