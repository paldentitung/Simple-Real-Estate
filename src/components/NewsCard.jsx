import card1 from "../assets/images/newsCard1.avif";
import card2 from "../assets/images/newsCard2.avif";

import card3 from "../assets/images/newsCard3.avif";

import card4 from "../assets/images/newsCard4.avif";

import card5 from "../assets/images/newsCard5.avif";
import card6 from "../assets/images/newsCard6.avif";

const NewsCard = () => {
    return (
        <>
            {/* container */}
            <div className="h-auto w-full">
                {/* sub container */}
                <div className="flex justify-center items-center h-auto w-full">
                    {/* card container */}
                    <div className="card-container px-[15%] py-[5%] grid  gap-8 grid-cols-1 lg:grid-cols-2 lg:space-x-7 lg:space-y-7">
                        {/* card 1 */}
                        <div className=" h-[550px] w-full md:w-[500px] shadow-md shadow-[rgb(225,225,225)] border-[1px] border-[rgb(225,225,225)] px-4 py-7 rounded-2xl flex flex-col  gap-3 transition-all hover:scale-105 hover:cursor-pointer">
                            {/* card heading */}
                            <div className="flex flex-col gap-1">
                                <span className="text-[18px] text-cyan-950">
                                    Nov 1,2035
                                </span>
                                <span className="text-2xl font-bold">
                                    Choosing YOur Next Apartment
                                </span>
                                <span className="text-[16px] ">
                                    By Mike Helman
                                </span>
                            </div>
                            {/* card image */}
                            <div className="flex-1">
                                <img src={card1} alt="" />
                            </div>
                            {/* card content */}
                            <div className="text-[16px] md:text-[20px]">
                                Looking for the perfect apartment? Mike Helman
                                shares expert tips on what to consider when
                                choosing your next home, from location to
                                amenities and budget.
                            </div>
                            <div>
                                <button className="text-red-500 font-bold text-[16px] hover:cursor-pointer">Read More</button>
                            </div>
                        </div>
                        {/* card 2 */}
                        <div className=" h-[550px] w-full md:w-[500px] shadow-md shadow-[rgb(225,225,225)] border-[1px] border-[rgb(225,225,225)] px-4 py-7 rounded-2xl flex flex-col  gap-3 transition-all hover:scale-105 hover:cursor-pointer">
                            {/* card heading */}
                            <div className="flex flex-col gap-1">
                                <span className="text-[18px] text-cyan-950">
                                    Oct 1, 2035
                                </span>
                                <span className="text-2xl font-bold">
                                    10 Tips for Students to Pay Rent
                                </span>
                                <span className="text-[16px] ">
                                    By Gregory Jems
                                </span>
                            </div>
                            {/* card image */}
                            <div className="flex-1">
                                <img src={card2} alt="" />
                            </div>
                            {/* card content */}
                            <div className="text-[16px] md:text-[20px]">
                                Struggling to manage rent expenses as a student?
                                Here are 10 practical tips to help you budget,
                                save, and find affordable housing options.
                            </div>
                                <div>
                                <button className="text-red-500 font-bold text-[16px] hover:cursor-pointer">Read More</button>
                            </div>
                        </div>
                        {/* card 3 */}
                        <div className=" h-[550px] w-full md:w-[500px] shadow-md shadow-[rgb(225,225,225)] border-[1px] border-[rgb(225,225,225)] px-4 py-7 rounded-2xl flex flex-col  gap-3 transition-all hover:scale-105 hover:cursor-pointer">
                            {/* card heading */}
                            <div className="flex flex-col gap-1">
                                <span className="text-[18px] text-cyan-950">
                                    Sep 1, 2035
                                </span>
                                <span className="text-2xl font-bold">
                                    Find Your Next Vacation House
                                </span>
                                <span className="text-[16px] ">
                                    By Gerry Grossman
                                </span>
                            </div>
                            {/* card image */}
                            <div className="flex-1">
                                <img src={card3} alt="" />
                            </div>
                            {/* card content */}
                            <div className="text-[16px] md:text-[20px]">
                                Discover top tips and locations to find the
                                perfect vacation home that fits your lifestyle
                                and budget.
                            </div>
                                <div>
                                <button className="text-red-500 font-bold text-[16px] hover:cursor-pointer">Read More</button>
                            </div>
                        </div>
                        {/* card 4 */}
                        <div className=" h-[550px] w-full md:w-[500px] shadow-md shadow-[rgb(225,225,225)] border-[1px] border-[rgb(225,225,225)] px-4 py-7 rounded-2xl flex flex-col  gap-3 transition-all hover:scale-105 hover:cursor-pointer">
                            {/* card heading */}
                            <div className="flex flex-col gap-1">
                                <span className="text-[18px] text-cyan-950">
                                    Aug 1, 2035
                                </span>
                                <span className="text-2xl font-bold">
                                    5 Things to Keep in Mind When Buying a New
                                    Home
                                </span>
                                <span className="text-[16px] ">
                                    By Don White
                                </span>
                            </div>
                            {/* card image */}
                            <div className="flex-1">
                                <img src={card4} alt="" />
                            </div>
                            {/* card content */}
                            <div className="text-[16px] md:text-[20px]">
                                Buying a new home is exciting! Here are five
                                essential tips to ensure you make a smart and
                                confident purchase.
                            </div>
                                <div>
                                <button className="text-red-500 font-bold text-[16px] hover:cursor-pointer">Read More</button>
                            </div>
                        </div>
                        {/* card 5 */}
                        <div className=" h-[550px] w-full md:w-[500px] shadow-md shadow-[rgb(225,225,225)] border-[1px] border-[rgb(225,225,225)] px-4 py-7 rounded-2xl flex flex-col  gap-3 transition-all hover:scale-105 hover:cursor-pointer">
                            {/* card heading */}
                            <div className="flex flex-col gap-1">
                                <span className="text-[18px] text-cyan-950">
                                    Jul 1, 2035
                                </span>
                                <span className="text-2xl font-bold">
                                    Baily’s Project Raises $40M
                                </span>
                                <span className="text-[16px] ">
                                    By Britney Bails
                                </span>
                            </div>
                            {/* card image */}
                            <div className="flex-1">
                                <img src={card5} alt="" />
                            </div>
                            {/* card content */}
                            <div className="text-[16px] md:text-[20px]">
                                Baily’s Project secures $40M to build
                                affordable, eco-friendly housing in downtown.{" "}
                            </div>
                                <div>
                                <button className="text-red-500 font-bold text-[16px] hover:cursor-pointer">Read More</button>
                            </div>
                        </div>
                               {/* card 6 */}
                        <div className=" h-[550px] w-full md:w-[500px] shadow-md shadow-[rgb(225,225,225)] border-[1px] border-[rgb(225,225,225)] px-4 py-7 rounded-2xl flex flex-col  gap-3 transition-all hover:scale-105 hover:cursor-pointer">
                            {/* card heading */}
                            <div className="flex flex-col gap-1">
                                <span className="text-[18px] text-cyan-950">
                             Jun 1, 2035
                                </span>
                                <span className="text-2xl font-bold">
                                   USA’s New Construction Law
                                </span>
                                <span className="text-[16px] ">
                             By
Brenda Rogers
                                </span>
                            </div>
                            {/* card image */}
                            <div className="flex-1">
                                <img src={card6} alt="" />
                            </div>
                            {/* card content */}
                            <div className="text-[16px] md:text-[20px]">
                          A new federal law sets stricter safety and eco standards for all new constructions across the U.S.
                            </div>
                                <div>
                                <button className="text-red-500 font-bold text-[16px] hover:cursor-pointer">Read More</button>
                            </div>
                        </div>
                        {/* card close */}
                    </div>
                    {/* sub close */}
                </div>
                {/* main close */}
            </div>
        </>
    );
};
export default NewsCard;
