import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from '../_components/Accordion';
import React from 'react'
import { ChevronRight } from 'lucide-react';
const FAq = () => {
    return (
        <section className=' p-4 sm:p-20'>
            <h1 className='text-2xl sm:text-3xl mb-4 font-bold text-gray-900 dark:text-zinc-50'>
                Frequently Asked Questions 🙋‍♂️
            </h1>
            <Accordion
                className='flex w-full flex-col'
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                variants={{
                    expanded: {
                        opacity: 1,
                        scale: 1,
                    },
                    collapsed: {
                        opacity: 0,
                        scale: 0.7,
                    },
                }}
            >
                <AccordionItem value='getting-started' className='py-2'>
                    <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
                        <div className='flex items-center'>
                            <ChevronRight className='h-8 w-8 text-[#1A1A1A] transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50' />
                            <div className='ml-2 text-xl font-semibold text-[#1A1A1A] '>
                                How do I contact a seller or landlord?                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className='origin-left'>
                        <p className='pl-6 pr-2 w-full sm:w-3/4 mt-4 leading-9 capitalize text-zinc-500 dark:text-zinc-400'>
                            Kick off your experience by setting  This
                            section covers the basics of Each property listing in the platform includes contact information for the seller or landlord. Also, you can use the messaging system provided by the platform to contact them to get you started on the right foot.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value='getting-started2' className='py-2'>
                    <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
                        <div className='flex items-center'>
                            <ChevronRight className='h-8 w-8 text-[#1A1A1A] transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50' />
                            <div className='ml-2 text-xl font-semibold text-[#1A1A1A] '>
                                How does The Real Estate Platform work?                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className='origin-left'>
                        <p className='pl-6 pr-2 w-full sm:w-3/4 mt-4 leading-9 capitalize text-zinc-500 dark:text-zinc-400'>
                            The Real Estate Platform aggregates property listings from different real estate agents and brokers into one centralized database. Users can search for any property, view details, and contact agents through the platform. Agents can also post new listings and access detailed property information.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value='getting-started3' className='py-2'>
                    <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
                        <div className='flex items-center'>
                            <ChevronRight className='h-8 w-8 text-[#1A1A1A] transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50' />
                            <div className='ml-2 text-xl font-semibold text-[#1A1A1A] '>
                                How is my personal information protected?                           </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className='origin-left'>
                        <p className='pl-6 pr-2 w-full sm:w-3/4 mt-4 leading-9 capitalize text-zinc-500 dark:text-zinc-400'>
                            The platform employs security measures to protect your personal information. This includes encryption, secure servers, and strict privacy policies.

                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value='getting-started4' className='py-2'>
                    <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
                        <div className='flex items-center'>
                            <ChevronRight className='h-8 w-8 text-[#1A1A1A] transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50' />
                            <div className='ml-2 text-xl font-semibold text-[#1A1A1A] '>
                                How do I search for properties on the Real Estate Platform?                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className='origin-left'>
                        <p className='pl-6 pr-2 w-full sm:w-3/4 mt-4 leading-9 capitalize text-zinc-500 dark:text-zinc-400'>
                            Users on the platform can use the search bar and filters on the homepage to find the desired properties of interest, in just a few seconds. Filters include location, price range, property type, number of bedrooms, and more. Search has been made easier on the  Real Estate Platform via the MLS ID Number, which ensures each property is given a unique number, guaranteeing no duplications are present on the platform.
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    )
}

export default FAq;
