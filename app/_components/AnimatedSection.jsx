import { AnimatedGroup } from './AnimatedGroup'

const AnimatedSection = () => {
    const images = ['https://images.pexels.com/photos/4075400/pexels-photo-4075400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1796505/pexels-photo-1796505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/18879416/pexels-photo-18879416/free-photo-of-boston-university-center-for-computing-data-sciences.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']
    return (
        <section>
            <h1 className="px-6 mt-4 text-2xl text-gray-900 font-bold">Explore Feature</h1>
            <AnimatedGroup
                className='grid  grid-cols-2 gap-4 p-8 md:grid-cols-3 lg:grid-cols-4'
                preset='scale'
            >
                {
                    images?.map(image => <img key={image} src={image} loading='lazy' alt='image' className='h-auto w-full rounded-[4px]'
                    ></img>)
                }
            </AnimatedGroup>
        </section>
    )
}

export default AnimatedSection;
