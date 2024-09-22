import Link from 'next/link';
import { Button } from '../../components/ui//button';

const Gallery = () => {
    return (
        <>
            <section>
                <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                        <div className="relative z-10 lg:py-16">
                            <div className="relative h-64 sm:h-80 lg:h-full">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="relative flex items-center bg-gray-100">
                            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                            <div className="p-8 sm:p-16 lg:p-24">
                                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                                    Featured Listings
                                </h2>

                                <p className="mt-4 text-gray-600">
                                    Modern Urban Apartment: Perfect for city lovers, this
                                    apartment offers stunning views, modern amenities, and easy
                                    access to the heart of downtown.<br></br> Family-Friendly
                                    Suburban Home: A spacious home in a peaceful neighborhood,
                                    ideal for families looking for room to grow.<br></br>
                                    Luxury Seaside Villa: Experience the ultimate in luxury living
                                    with this breathtaking villa, complete with private beach
                                    access and panoramic ocean views.
                                </p>
                                <Link href='/listing'>
                                    <Button className=" bg-gray-600 mt-4 py-4 px-12">
                                        Get in Touch
                                    </Button></Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <header className="text-center">
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Latest property news</h2>

                        <p className="mx-auto mt-4 max-w-md text-gray-500">
                            It’s tangible, it’s solid, it’s beautiful. It’s artistic, from my standpoint, and I just love real estate.
                        </p>
                    </header>

                    <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
                        <li>
                            <a href="#" className="group relative block">
                                <img
                                    loading="lazy"
                                    src="https://tfvzfntvjbazdmyogxpk.supabase.co/storage/v1/object/public/listing-images/istockphoto-1516933385-612x612.jpg"
                                    alt="image"
                                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="group relative block">
                                <img
                                    loading="lazy"
                                    src="https://tfvzfntvjbazdmyogxpk.supabase.co/storage/v1/object/public/listing-images/istockphoto-1516938158-612x612.jpg"
                                    alt="image"
                                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                                />
                            </a>
                        </li>

                        <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                            <a href="#" className="group relative block">
                                <img
                                    loading="lazy"
                                    src="https://images.pexels.com/photos/1488267/pexels-photo-1488267.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="image4"
                                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <img
                                lang="lazy"
                                alt="image"
                                src="https://images.pexels.com/photos/36362/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                        <div className="lg:py-24">
                            <h2 className="text-3xl text-gray-900 font-bold sm:text-4xl">
                                Efficient Transaction Management
                            </h2>

                            <p className="mt-4 text-gray-600">
                                Users can access the Real Estate Platform from
                                anywhere, at any time. It ensures that anyone can search for
                                properties, connect with agents, and manage real estate
                                transactions efficiently and effectively via mobile responsive
                                platform
                            </p>
                            <Link href='/listing' className="mt-8 inline-block rounded bg-gray-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-gray-700 focus:outline-none focus:ring focus:ring-yellow-400">
                                Get Started Today
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery;
