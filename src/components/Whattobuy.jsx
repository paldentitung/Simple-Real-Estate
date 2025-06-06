import Buy from "../assets/images/Buy.avif";
import Rent from "../assets/images/Rent.avif";
import { Link } from "react-router-dom";
const Whattobuy = () => {
    return (
        <>
            <div className="w-full h-auto">
                <div className="sub-container px-[5%] py-[10%] flex flex-col lg:gap-[60px] ">
                    <div className="flex justify-center items-center">
                        <span className="text-4xl">
                            WHAT ARE YOU LOOKING FOR ?
                        </span>
                    </div>
                    <div className="flex flex-col md:flex-row w-full">
                        <div className="buy-card  lg:w-1/2 relative">
                            <div className="img-container ">
                                <img
                                    src={Buy}
                                    alt=""
                                    className="w-full lg:h-[400px] object-cover"
                                />
                            </div>
                            {/* OVERLLAY */}
                            <div className=" absolute w-full h-full bg-blue-800/50 inset-0 o flex justify-center items-center">
                                <Link>
                                    <span className="text-2xl md:text-4xl text-white font-bold transition-all duration-200 hover:text-red-500">
                                        Buy
                                    </span>
                                </Link>
                            </div>
                        </div>

                        <div className="rent-card lg:w-1/2 relative">
                            <div className="img-container ">
                                <img
                                    src={Rent}
                                    alt=""
                                    className="w-full lg:h-[400px] object-cover"
                                />
                            </div>
                            {/* OVERLAY */}
                            <div className=" absolute w-full h-full bg-red-400/20 inset-0  flex justify-center items-center">
                                <Link>
                                    <span className="text-2xl md:text-4xl text-white font-bold transition-all duration-200 hover:text-red-500">
                                        Rent
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Whattobuy;
