import hero_img from "../assets/images/team-hero.avif";
const TeamHero = () => {
    return (
        <>
            {/* main container */}
            <div className="w-full h-auto relative" >
                {/* sub container */}
                <div className="w-full ">
                    {/* hero section */}
                    <div className="hero w-full">
                        {/* hero img */}
                        <div className=" w-full">
                            <img src={hero_img} alt="" className="w-full  brightness-30" />
                        </div>
                        {/* hero content */} 
                      <div className=" absolute   top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white" >
                          <div  className="flex items-center flex-col">
                            {/* title */}
                            <div className="text-[18px] md:text-4xl">OUR TEAM</div>
                            {/* sub title */}
                            <div className="text-[15px] md:text-2xl">Agents</div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default TeamHero;
