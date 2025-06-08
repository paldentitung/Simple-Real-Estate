import { Link } from "react-router-dom";
import facebook from "../assets/images/facebook.avif";
import x from "../assets/images/x.avif";
import linkedin from "../assets/images/linkedin.avif";
import youtude from "../assets/images/youtude.avif";
const Footer = () => {
    return (
        <>
            {/* main container */}
            <div className="bg-cyan-900 h-auto text-white w-full ">
                {/* sub-container */}
                <div className="flex  justify-between items-center px-5 py-[5%]" data-aos="fade-down" data-aos-duration="1200">
                    <div className="flex justify-around flex-col gap-6 md:flex-row w-full ">
                        {/* content 1 */}
                        <div className="flex flex-col h-full" data-aos="fade-right" data-aos-duration="1000">
                            <div className="flex gap-3 mb-7">
                                <h1>DWELL </h1>
                                <span>Properties</span>
                            </div>
                            <div className="flex-1">
                                &copy; 2035 by DWell powered and secured by Wix
                            </div>
                        </div>
                        {/* content 2 */}
                        <div  data-aos="fade-up" data-aos-duration="1500">
                            <ul className="flex flex-col">
                                <li>
                                    <Link>Home </Link>
                                </li>
                                <li>
                                    <Link>Properties</Link>
                                </li>
                                <li>
                                    <Link>News</Link>
                                </li>
                                <li>
                                    <Link>Team</Link>
                                </li>
                                <li>
                                    <Link>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        {/* content 3 */}
                        <div className="flex gap-7"  data-aos="fade-left" data-aos-duration="2000">
                            {/* content */}

                            <div className="flex flex-col  gap-7">
                                <div className="flex flex-col">
                                    <span>500 Terry Francine Street</span>
                                    <span>San Francisco, CA 94158</span>
                                    <span>info@mysite.com</span>
                                </div>
                                <div className="flex gap-4">
                                    <img src={facebook} alt="" />
                                    <img src={x} alt="" />
                                    <img src={linkedin} alt="" />
                                    <img src={youtude} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Footer;
