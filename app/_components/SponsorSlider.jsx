import React from 'react'
import { InfiniteSlider } from './InfiniteSlider'
const SponsorSlider = () => {
  return (
    <section>
      <h1 className='text-2xl font-bold p-4 text-center'>Our Sponsor</h1>
      <InfiniteSlider durationOnHover={75} gap={24}>
        <img
          src='https://tfvzfntvjbazdmyogxpk.supabase.co/storage/v1/object/public/listing-images/unnamed.png'
          alt='Dean blunt - Black Metal 2'
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='https://tfvzfntvjbazdmyogxpk.supabase.co/storage/v1/object/public/listing-images/download.png'
          alt='Jungle Jack - JUNGLE DES ILLUSIONS VOL 2'
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='https://tfvzfntvjbazdmyogxpk.supabase.co/storage/v1/object/public/listing-images/VISA.png'
          alt='Yung Lean - Stardust'
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='https://tfvzfntvjbazdmyogxpk.supabase.co/storage/v1/object/public/listing-images/8_big15-768x591.png'
          alt='Lana Del Rey - Ultraviolence'
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='https://tfvzfntvjbazdmyogxpk.supabase.co/storage/v1/object/public/listing-images/1528-768x591.png'
          alt='A$AP Rocky - Tailor Swif'
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='https://tfvzfntvjbazdmyogxpk.supabase.co/storage/v1/object/public/listing-images/qnb.ai-converted.png'
          alt='Midnight Miami (feat Konvy) - Nino Paid, Konvy'
          className='aspect-square w-[120px] rounded-[4px]'
        />
      </InfiniteSlider>
    </section>

  )
}

export default SponsorSlider
