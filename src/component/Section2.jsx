import Card from "./Card"

const Section2 = () => {

    const cardData = [
        {
            name: "Motion Graphics",
            description: "Frontend Developer who loves building clean UI using React and Tailwind CSS.",
            image: "https://inspgr.id/app/uploads/2024/05/typography-axel-vincent-04-1536x1536.jpg"
        },
        {
            name: "2D/3D Animation",
            description: "UI/UX Designer passionate about user-centric design and creative visuals.",
            image: "https://inspgr.id/app/uploads/2024/05/typography-axel-vincent-01-1536x1536.jpg"
        },
        {
            name: "Visual Identity",
            description: "Full Stack Developer working with MERN stack and modern web technologies.",
            image: "https://inspgr.id/app/uploads/2024/05/typography-axel-vincent-feature.jpg"
        }
    ];

    return (
        <div className="min-h-screen  border-2 border-[#cccbcb94] rounded-4xl px-[4vw] sm:px-[2.8vw] py-[4vw] sm:py-[2vw]">
            <div className="top">
                <div className="flex items-center justify-between pb-5 sm:pb-9">
                    <h4 className="text-[4vw] sm:text-[2vw]">Our Services</h4>
                    <p className="sm:w-[26%] w-[66%] text-[2.5vw] sm:text-[1vw]">Lorem ipsum dolor sit, elit amet consectetur adipisicing. Vel mollitia vitae architecto tenetur?</p>
                </div>
                <div className="cards flex items-center flex-wrap gap-10 justify-center">
                    {cardData.map((elem,idx) => {
                        return <Card key={idx} id={idx} elem={elem}/>
                    })}
                </div>
                <div className="change p-3 flex items-center justify-between">
                    <div className="flex sm:text-[3vw] gap-1">
                        <i className="opacity-40 ri-arrow-left-long-line"></i>
                        <i className="ri-arrow-right-long-line"></i>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="sm:h-1 h-0.5 w-[6vw] sm:w-[3vw] bg-black"></div>
                        <div className="sm:h-1 h-0.5 w-[3vw] sm:w-[1.5vw] bg-[#dadada8f]"></div>
                        <div className="sm:h-1 h-0.5 w-[3vw] sm:w-[1.5vw] bg-[#dadada8f]"></div>
                        <div className="sm:h-1 h-0.5 w-[3vw] sm:w-[1.5vw] bg-[#dadada8f]"></div>
                        <div className="sm:h-1 h-0.5 w-[3vw] sm:w-[1.5vw] bg-[#dadada8f]"></div>
                        <div className="sm:h-1 h-0.5 w-[3vw] sm:w-[1.5vw] bg-[#dadada8f]"></div>
                    </div>
                </div>
            </div>
            <div className="bottom flex items-center justify-center flex-col">
                <h2 className="sm:text-[1vw] text-[3vw] opacity-50 uppercase">— About Astratto</h2>
                <div className="texts leading-[3.6vw]">
                    <h2 className="text-[4vw] sm:text-[3vw] hover:scale-118 transition-all duration-400 cursor-pointer  flex items-center gap-[1vw] ">
                        <img className="h-[4.6vw] hover:scale-118 transition-all duration-400 cursor-pointer " src="https://astratto-design-agency.vercel.app/assets/jalebi-DiZCp3iL.png" alt="" />
                        Our <span className="opacity-50">visionary</span><span className="text-amber-700"> artisans </span>collaborate
                    </h2>
                    <h2 className="hover:scale-118 transition-all duration-400 cursor-pointer text-[4vw] sm:text-[3vw] flex items-center gap-[1vw] ">
                        seamlessly to craft <img className="hover:scale-118 transition-all duration-400 cursor-pointer h-[2.6vw] " src="https://astratto-design-agency.vercel.app/assets/p-logo-Bx5DqdtJ.png" alt="" />  inspiring <span className="opacity-50">experiences,</span> 
                    </h2>
                    <h2 className="hover:scale-118 transition-all duration-400 cursor-pointer text-[4vw] sm:text-[3vw] text-center "><span className="text-amber-700">leaving</span> lasting <span className="opacity-50">imprints</span> on <span className="text-purple-500">brands</span> <br /> and spaces.</h2>
                </div>
                <div className="flex w-[70%] justify-between">
                    <img className="hover:scale-118 transition-all duration-400 cursor-pointer h-[6vw] rotate-15 mt-[-2vw]" src="https://astratto-design-agency.vercel.app/assets/purple-keeda-BIPxhll7.png" alt="" />
                    <img className="hover:scale-118 transition-all duration-400 cursor-pointer h-[5vw] mr-[15vw] mt-[-1vw]" src="https://astratto-design-agency.vercel.app/assets/star-DE_MA-u-.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Section2

// https://astratto-design-agency.vercel.app/
