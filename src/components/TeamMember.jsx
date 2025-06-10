import team_member_1 from "../assets/images/team-member-1.avif";
import team_member_2 from "../assets/images/team-member-2.avif";
import team_member_3 from "../assets/images/team-member-3.avif";
import team_member_4 from "../assets/images/team-member-4.avif";
import team_member_5 from "../assets/images/team-member-5.avif";
import team_member_6 from "../assets/images/team-member-6.avif";

const TeamMembers = () => {
    return (
        <>
            <div className="w-full h-auto">
                <div className="flex justify-center items-center mt-[5%] mb-[5%]">
                    <div className="grid grid-cols-1 gap-9 px-6 py-6 md:grid-cols-3">
                        {/* card 1 */}
                        <div className="flex flex-col space-x-1 space-y-6 px-4 py-6 shadow-[rgb(230,230,230)] shadow-sm transition-all duration-200 hover:shadow-lg hover:cursor-pointer hover:transform hover:scale-105" data-aos="fade-up" data-aos-duration="500">
                            <div>
                                <h1 className="font-bold text-2xl">Gregory Jems</h1>
                                <span className="text-[12px]">Realtor #123.456.78</span>
                            </div>
                            <div className="overflow-hidden">
                                <img src={team_member_1} alt="" className="transition-all duration-300 hover:scale-110" />
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div>
                                    <h1 className="font-bold">Email</h1>
                                    <span>gregory@mysite.com</span>
                                </div>
                                <div>
                                    <h1 className="font-bold">Phone</h1>
                                    <div className="flex justify-between">
                                        <div>555-321-9870</div>
                                        <div className="text-red-500 font-bold">Linkedin</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* card 2 */}
                        <div className="flex flex-col space-x-1 space-y-6 px-4 py-6 shadow-[rgb(230,230,230)] shadow-sm transition-all duration-200 hover:shadow-lg hover:cursor-pointer hover:transform hover:scale-105" data-aos="fade-up" data-aos-duration="1000">
                            <div>
                                <h1 className="font-bold text-2xl">Britney Bails</h1>
                                <span className="text-[12px]">Realtor #234.567.89</span>
                            </div>
                            <div className="overflow-hidden">
                                <img src={team_member_2} alt="" className="transition-all duration-300 hover:scale-110" />
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div>
                                    <h1 className="font-bold">Email</h1>
                                    <span>britney@mysite.com</span>
                                </div>
                                <div>
                                    <h1 className="font-bold">Phone</h1>
                                    <div className="flex justify-between">
                                        <div>555-654-1234</div>
                                        <div className="text-red-500 font-bold">Linkedin</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* card 3 */}
                        <div className="flex flex-col space-x-1 space-y-6 px-4 py-6 shadow-[rgb(230,230,230)] shadow-sm transition-all duration-200 hover:shadow-lg hover:cursor-pointer hover:transform hover:scale-105" data-aos="fade-up" data-aos-duration="1500">
                            <div>
                                <h1 className="font-bold text-2xl">Gerry Grossman</h1>
                                <span className="text-[12px]">Realtor #345.678.90</span>
                            </div>
                            <div className="overflow-hidden">
                                <img src={team_member_3} alt="" className="transition-all duration-300 hover:scale-110" />
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div>
                                    <h1 className="font-bold">Email</h1>
                                    <span>gerry@mysite.com</span>
                                </div>
                                <div>
                                    <h1 className="font-bold">Phone</h1>
                                    <div className="flex justify-between">
                                        <div>555-789-4561</div>
                                        <div className="text-red-500 font-bold">Linkedin</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* card 4 */}
                        <div className="flex flex-col space-x-1 space-y-6 px-4 py-6 shadow-[rgb(230,230,230)] shadow-sm transition-all duration-200 hover:shadow-lg hover:cursor-pointer hover:transform hover:scale-105" data-aos="fade-up" data-aos-duration="2000">
                            <div>
                                <h1 className="font-bold text-2xl">Don White</h1>
                                <span className="text-[12px]">Realtor #456.789.01</span>
                            </div>
                            <div className="overflow-hidden">
                                <img src={team_member_4} alt="" className="transition-all duration-300 hover:scale-110" />
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div>
                                    <h1 className="font-bold">Email</h1>
                                    <span>don@mysite.com</span>
                                </div>
                                <div>
                                    <h1 className="font-bold">Phone</h1>
                                    <div className="flex justify-between">
                                        <div>555-908-7654</div>
                                        <div className="text-red-500 font-bold">Linkedin</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* card 5 */}
                        <div className="flex flex-col space-x-1 space-y-6 px-4 py-6 shadow-[rgb(230,230,230)] shadow-sm transition-all duration-200 hover:shadow-lg hover:cursor-pointer hover:transform hover:scale-105" data-aos="fade-up" data-aos-duration="2500">
                            <div>
                                <h1 className="font-bold text-2xl">Brenda Rogers</h1>
                                <span className="text-[12px]">Realtor #567.890.12</span>
                            </div>
                            <div className="overflow-hidden">
                                <img src={team_member_5} alt="" className="transition-all duration-300 hover:scale-110" />
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div>
                                    <h1 className="font-bold">Email</h1>
                                    <span>brenda@mysite.com</span>
                                </div>
                                <div>
                                    <h1 className="font-bold">Phone</h1>
                                    <div className="flex justify-between">
                                        <div>555-213-4578</div>
                                        <div className="text-red-500 font-bold">Linkedin</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* card 6 */}
                        <div className="flex flex-col space-x-1 space-y-6 px-4 py-6 shadow-[rgb(230,230,230)] shadow-sm transition-all duration-200 hover:shadow-lg hover:cursor-pointer hover:transform hover:scale-105" data-aos="fade-up" data-aos-duration="3000">
                            <div>
                                <h1 className="font-bold text-2xl">Mike Helman</h1>
                                <span className="text-[12px]">Realtor #678.901.23</span>
                            </div>
                            <div className="overflow-hidden">
                                <img src={team_member_6} alt="" className="transition-all duration-300 hover:scale-110" />
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div>
                                    <h1 className="font-bold">Email</h1>
                                    <span>mike@mysite.com</span>
                                </div>
                                <div>
                                    <h1 className="font-bold">Phone</h1>
                                    <div className="flex justify-between">
                                        <div>555-342-1987</div>
                                        <div className="text-red-500 font-bold">Linkedin</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamMembers;
