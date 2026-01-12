const Box = ({elem,index}) => {
    return (
        <div className="box w-full lg:w-[47.5%] sm:w-[45%] ">
            <div style={{backgroundImage:`url(${elem.Image})`, marginTop: (index === 1 || index == 3) ? '5vw': ''}} 
            className="hover:scale-103 transition-all duration-400 cursor-pointer relative py-[1vw] image rounded-[2vw] h-[60vh] bg-cover">
                <div className='hover:scale-118 transition-all duration-400 cursor-pointer absolute right-[1vw] h-[12vw] w-[12vw] sm:h-[4vw] sm:w-[4vw] bg-[#f5f4f4] text-black rounded-full flex items-center justify-center'>
                    <i className='ri-arrow-right-up-long-line text-[9vw] sm:text-[3vw] font-extralight'></i>
                </div>
                <button className='absolute bottom-[1vw] left-[1vw] bg-[#f5f4f4] text-black px-[1vw] py-[.4vw] font-medium rounded-[2vw]'>2D Animation</button>
            </div>
            <h2 className='hover:scale-104 transition-all duration-400 cursor-pointer text-[6vw] sm:text-[2vw] text-purple-600'>{elem.name}</h2>
            <p className='w-[90%] text-[4vw] sm:text-[1.1vw]'>{elem.description}</p>
        </div>
    )
}

export default Box
