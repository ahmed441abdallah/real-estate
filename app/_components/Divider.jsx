
const Divider = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="bg-gray-600 p-8 md:p-12 lg:px-16 lg:py-24">
                        <div className="mx-auto max-w-xl text-center">
                            <h2 className="text-2xl font-bold text-white md:text-3xl">
                                Exclusive and Reliable Source{" "}
                            </h2>

                            <p className="hidden text-white/90 sm:mt-4 sm:block">
                                Our property listings in Egypt cover various sectors to meet
                                everyone’s specific requirements. We cater to various real
                                estate needs; from residential and commercial to industrial
                                properties in Egypt. Whether looking to buy, rent, or sell a
                                property, our platform ensures successful transactions.
                            </p>

                            <div className="mt-4 md:mt-8">
                                <a
                                    href="#"
                                    className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-black transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                                >
                                    Get Started Today
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                        <img
                            alt=""
                            src="https://images.pexels.com/photos/2556003/pexels-photo-2556003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            className="h-40 w-full object-cover sm:h-56 md:h-full"
                        />

                        <img
                            alt=""
                            src="https://images.pexels.com/photos/1029172/pexels-photo-1029172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            className="h-40 w-full object-cover sm:h-56 md:h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Divider;
