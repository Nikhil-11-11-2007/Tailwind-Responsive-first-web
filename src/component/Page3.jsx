import Section3 from './Section3'
import Section4 from './Section4'

const Page3 = () => {
    return (
        <div className='min-h-screen w-full bg-white text-black px-[5vw] py-[2vw] '>
            <div className='px-[2] py-[2vw] flex items-center justify-between'>
                <h2 className='sm:text-[2.3vw] text-[4vw] '>Recent Projects</h2>
                <p className='sm:w-[27%] w-[67%] text-[2.3vw] sm:text-[.9vw]'>Step into the world of our most recent projects, a showcase of our unwavering commitment to progressive design.</p>
            </div>
            <Section3 />
            <Section4 />
        </div>
    )
}

export default Page3
