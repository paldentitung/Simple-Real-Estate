import image1 from '../assets/images/17081.avif';
import image2 from '../assets/images/52591.avif';
import image3 from '../assets/images/33234.avif';
import image4 from '../assets/images/15066.avif';

const Properties = () => {
    return (
        <div className="h-auto ">
            <div className="sub-container py-[5%] px-4 sm:px-[10%] flex flex-col gap-7">
                {/* Title */}
                <div className="title flex flex-col justify-center items-center gap-7 text-center">
                    <span className="text-2xl md:text-4xl opacity-50" data-aos="fade-up">NEW PROPERTIES</span>
                    <h1 className="md:text-3xl" data-aos="fade-down" data-aos-duration="500">For Sale</h1>
                </div>

                {/* Cards */}
                <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-7 lg:gap-[15px]">
                    {/* Card 1 */}
                    <div className="card flex flex-col w-full sm:w-[350px] min-h-[400px] gap-4 shadow-[rgba(225,225,225)] shadow-2xl transform transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 cursor-pointer" data-aos="fade-up" data-aos-duration="500">
                        <div className="card-img w-full h-1/2 relative">
                            <img src={image1} alt="17081 Perry Street" className="w-full h-full object-cover" />
                            <span className="absolute bottom-0 bg-red-600 py-1 px-3 text-white">Buy</span>
                        </div>
                        <div className="card-info flex flex-col p-5 gap-1 h-1/2">
                            <div className="text-2xl font-bold transition-colors duration-200 hover:text-red-500">
                                17081 Perry Street
                            </div>
                            <div className="text-[12px]">San Francisco, CA, USA</div>
                            <div className="text-[16px] flex-1">$850,000</div>
                            <div>
                                <button className="bg-red-500 py-2 px-7 text-white text-[16px] rounded-[5px] hover:shadow-lg cursor-pointer">
                                    Buy
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="card flex flex-col w-full sm:w-[350px] min-h-[400px] gap-4 shadow-[rgba(225,225,225)] shadow-2xl transform transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 cursor-pointer" data-aos="fade-up" data-aos-duration="1000">
                        <div className="card-img w-full h-1/2 relative">
                            <img src={image2} alt="52591 Union Boulevard" className="w-full h-full object-cover" />
                            <span className="absolute bottom-0 bg-red-600 py-1 px-3 text-white">Buy</span>
                        </div>
                        <div className="card-info flex flex-col p-5 gap-1 h-1/2">
                            <div className="text-2xl font-bold transition-colors duration-200 hover:text-red-500">
                                52591 Union Boulevard
                            </div>
                            <div className="text-[12px]">San Francisco, CA, USA</div>
                            <div className="text-[16px] flex-1">$550,000</div>
                            <div>
                                <button className="bg-red-500 py-2 px-7 text-white text-[16px] rounded-[5px] hover:shadow-lg cursor-pointer">
                                    Buy
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="card flex flex-col w-full sm:w-[350px] min-h-[400px] gap-4 shadow-[rgba(225,225,225)] shadow-2xl transform transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 cursor-pointer" data-aos="fade-up" data-aos-duration="1500">
                        <div className="card-img w-full h-1/2 relative">
                            <img src={image3} alt="33234 Washington Avenue" className="w-full h-full object-cover" />
                            <span className="absolute bottom-0 bg-red-600 py-1 px-3 text-white">Buy</span>
                        </div>
                        <div className="card-info flex flex-col p-5 gap-1 h-1/2">
                            <div className="text-2xl font-bold transition-colors duration-200 hover:text-red-500">
                                33234 Washington Avenue
                            </div>
                            <div className="text-[12px]">San Francisco, CA, USA</div>
                            <div className="text-[16px] flex-1">$770,000</div>
                            <div>
                                <button className="bg-red-500 py-2 px-7 text-white text-[16px] rounded-[5px] hover:shadow-lg cursor-pointer">
                                    Buy
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="card flex flex-col w-full sm:w-[350px] min-h-[400px] gap-4 shadow-[rgba(225,225,225)] shadow-2xl transform transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 cursor-pointer" data-aos="fade-up" data-aos-duration="2000">
                        <div className="card-img w-full h-1/2 relative">
                            <img src={image4} alt="15066 Banks Street" className="w-full h-full object-cover" />
                            <span className="absolute bottom-0 bg-red-600 py-1 px-3 text-white">Buy</span>
                        </div>
                        <div className="card-info flex flex-col p-5 gap-1 h-1/2">
                            <div className="text-2xl font-bold transition-colors duration-200 hover:text-red-500">
                                15066 Banks Street
                            </div>
                            <div className="text-[12px]">San Francisco, CA, USA</div>
                            <div className="text-[16px] flex-1">$700,000</div>
                            <div>
                                <button className="bg-red-500 py-2 px-7 text-white text-[16px] rounded-[5px] hover:shadow-lg cursor-pointer">
                                    Buy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* View More Button */}
                <div className="flex justify-center items-center">
                    <button className="bg-red-500 text-white px-7 py-2 transition-all duration-150 hover:opacity-45">
                        View More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Properties;
