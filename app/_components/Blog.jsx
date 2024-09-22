
const Blog = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="max-w-3xl">
                    <h2 className="text-3xl text-gray-900 font-bold sm:text-4xl">
                        Why You Should Work With Us
                    </h2>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                        <img
                            alt="hero"
                            loading='lazy'
                            src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div className="lg:py-16">
                        <article className="space-y-4 text-gray-600">
                            <p>
                                Expertise and Experience With years of experience in the real
                                estate market, our team understands the nuances of buying and
                                selling properties. We leverage our deep knowledge to provide
                                you with personalized advice and strategies that align with
                                your goals.
                            </p>

                            <p>
                                Tailored Services We recognize that every client has unique
                                needs. Our tailored services include everything from property
                                search and valuation to legal assistance and mortgage advice,
                                ensuring a seamless and stress-free experience, From cozy
                                apartments to luxury estates, we offer a diverse portfolio of
                                properties that cater to various tastes and budgets. Each
                                listing is carefully selected to ensure it meets our high
                                standards of quality and value.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog;
