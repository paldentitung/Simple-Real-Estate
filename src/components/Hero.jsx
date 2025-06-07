import hero from "../assets/images/hero.avif";
const Hero = () => {
    return (
        <>
            <div className="hero-section relative w-full h-[80vh]">
                {/* hero image */}
                <div className="hero-img h-[80vh" data-aos="fade">
                    <img src={hero} alt="" className="brightness-60 w-full h-[80vh] object-cover" />
                </div>
                {/* hero content */}
                <div className="hero-content absolute top-[50%] left-[50%] text-white -translate-x-[50%] -translate-y-[50%] flex flex-col justify-center items-center gap-3" data-aos="fade-down">
                    <div className="hero-title">
                        <h1 className="text-2xl md:text-6xl font-bold">
                            New Properties
                        </h1>
                    </div>
                    <div className="hero-sub-title mb-[40px]">
                        <span className="opacity-50">SXCLUXIVELY BY DWELL</span>
                    </div>
                    <div>
                        <button className="bg-red-500 px-10 py-3  text-[18px] transition-all duration-200 hover:bg-red-400 hover:cursor-pointer">Explore</button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Hero;
