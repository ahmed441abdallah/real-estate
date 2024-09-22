import React from 'react'
import { MapPin } from 'lucide-react';

const ListingItem = ({list}) => {
  return (
    <div key={list.id} className='bg-gray-50 p-4 rounded-md'>
              <img src={list?.listing_images[0].url} alt='listing' className='w-full h-48 object-cover rounded-md' />
              <p className='mt-2 text-blue-700'> {list?.property_type}</p>
              <h1 className='text-lg font-bold mt-2'>${list?.price}</h1>
              <p className='text-gray-500 flex gap-2 items-center mt-2'><MapPin/>{list?.address}</p>
            </div>
  )
}

export default ListingItem;
