const Section1 = () => {
    return (
        <div className='relative w-full h-[85vh] flex flex-col sm:flex-row  justify-between '>
            <div className="left relative h-[40%] w-full sm:w-[28%] sm:h-full py-7 flex sm:flex-col justify-between items-center">
                <div className="top flex sm:flex-col items-center">
                    <img style={{ borderTopLeftRadius: '1vw', borderTopRightRadius: '1vw', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%' }}
                        className='h-[45vw] w-[30vw] sm:h-75 sm:w-65 -rotate-7 hover:scale-106 hover:-translate-x-5 transition-all duration-200 cursor-pointer' src="https://astratto-design-agency.vercel.app/assets/baloon-DWrHAm_c.png" alt="" />
                        <img className='h-[10vw] hover:scale-105' src="https://astratto-design-agency.vercel.app/assets/orange-keeda-Da6aa4De.png" alt="" />
                </div>
                <div className="bottom hover:scale-106 hover:translate-x-5 transition-all duration-200 p-2 flex items-center -rotate-7">
                    <button className='h-fit cursor-pointer border-3 text-[3vw] whitespace-nowrap sm:text-[1.5vw] border-amber-600 py-[1vw] px-[3vw] rounded-[4vw]'>Create Magic</button>
                    <img className='cursor-pointer rounded-full leading-0 h-[8vw]' src="https://astratto-design-agency.vercel.app/assets/icon-pointer-CTef7ZDS.png" alt="" />
                </div>
            </div>
            <div className="center w-full absolute top-1/2 left-[47%] z-10 -translate-1/2 font-semibold flex py-10  flex-col items-center justify-between gap-[2vw] sm:gap-10 ">
                <h4 className='text-[#545252] text-lg'>Ignating the Spark of Inspiration</h4>
                <div className='text-[6.5vw] leading-[7vw] text-center flex flex-col whitespace-nowrap items-center gap-2'>
                    <h2>Unleash Your</h2>
                    <div className='flex items-center sm:gap-5'>
                        Brand
                        <img className=' h-[7vw] sm:h-20 cursor-pointer hover:scale-115 hover:-translate-y-4 transition-all duration-200 rounded-full' 
                        src="https://astratto-design-agency.vercel.app/assets/o-logo-ColrwuPr.png" alt="" />
                        With our
                    </div>
                    <div className='flex items-center gap-3'>
                        <h2 className='rotate-2 pb-1 sm:pb-4 rounded-2xl cursor-pointer hover:scale-105 transition-all duration-200 px-3 text-purple-700 font-semibold bg-[#ffff80]'>Magico</h2>
                        <h2>Design</h2>
                    </div>
                </div>
                <img className='sm:h-[8vw] h-[10vw]' src="https://astratto-design-agency.vercel.app/assets/yellow-keeda-CIzTEDWV.png" alt="" />
            </div>
            <div className="right w-full sm:w-[28%] h-[40%] sm:h-full py-6 flex sm:flex-col gap-[10vw] justify-between ">
                <div className="top flex flex-col text-white w-full gap-1.5 items-start sm:items-end">
                    <button className='rounded-[8vw] text-[3vw] whitespace-nowrap sm:text-[1vw] px-[2.5vw] sm:px-[1.3vw] py-2 bg-purple-700'>Via della Creativita, 23</button>
                    <button className='rounded-[8vw] text-[3vw] whitespace-nowrap sm:text-[1vw] px-[2.5vw] sm:px-[1.3vw] py-2 bg-purple-700'>20121 Milano</button>
                </div>
                <img style={{ borderBottomLeftRadius: '1vw', borderBottomRightRadius: '1vw', borderTopLeftRadius: '49%', borderTopRightRadius: '49%' }}
                    className='hover:scale-109 hover:translate-x-5 transition-all duration-200 cursor-pointer sm:h-75 sm:w-65 rotate-10 object-cover mr-16' 
                    src="https://astratto-design-agency.vercel.app/assets/houses-Dykk-h_i.png" alt="" />
            </div>
        </div>
    )
}

export default Section1
