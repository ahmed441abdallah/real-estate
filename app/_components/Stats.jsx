
const Stats = () => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Trusted by RealState Businesses</h2>
                <p className="mt-4 text-gray-500 sm:text-xl">
                    "Real estate is an imperishable asset, ever increasing in value. It is the most solid security that human ingenuity has devised. It is the basis of all security and about the only indestructible security.”
                </p>
            </div>

            <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                    <dt className="order-last text-lg font-medium text-gray-500">Total Sales</dt>
                    <dd className="text-4xl font-extrabold  md:text-5xl">$84.8m</dd>
                </div>
                <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                    <dt className="order-last text-lg font-medium text-gray-500">Official Addons</dt>
                    <dd className="text-4xl font-extrabold  md:text-5xl">24</dd>
                </div>
                <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                    <dt className="order-last text-lg font-medium text-gray-500">Total Addons</dt>
                    <dd className="text-4xl font-extrabold  md:text-5xl">86</dd>
                </div>
                <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                    <dt className="order-last text-lg font-medium text-gray-500">Clients</dt>
                    <dd className="text-4xl font-extrabold  md:text-5xl">86k</dd>
                </div>
            </dl>
        </div>
    )
}

export default Stats
