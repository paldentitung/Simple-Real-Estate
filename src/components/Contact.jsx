const Contact = () => {
    return (
        <>
            {/* main container */}
            <div className="w-full h-auto mt-[50px] md:h-[80vh]  lg:h-[100vh] bg-blue-950 text-white">
                {/* sub container */}
                <div className="flex justify-center items-center p-[10%] " data-aos="fade-down">
                    <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                        {/* content 1 */}
                        <div className="flex flex-col lg:w-1/2" data-aos="fade-right" data-aos-duration="1000">
                            <div className="flex flex-col md:mb-[60px]">
                                <span>FIND YOUR</span>
                                <span> NEXT HOME</span>
                            </div>

                            <div>
                                I'm a paragraph. Click here to add your own text
                                and edit me. It’s easy. Just click “Edit Text”
                                or double click me to add your own content and
                                make changes to the font
                            </div>
                        </div>
                        {/* content 2 */}

                        <div datt-aos="fade-right" data-aos-duration="2000">
                            <div>CONTACT US</div>
                            <form action="" className="flex flex-col gap-8">
                                <div className="flex flex-col gap-3 md:flex-row">
                                    <div>
                                        <label htmlFor="">First Name *</label>
                                        <input
                                            type="text"
                                            className="border-b-[1px]"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="">Last Name*</label>
                                        <input
                                            type="text"
                                            className="border-b-[1px]"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="">Email *</label>
                                    <input
                                        type="email"
                                        className="border-b-[1px]"
                                    />
                                </div>
                                <div>
                                    <div className="flex flex-col">
                                        <label htmlFor="">Intrested in</label>
                                    </div>
                                    <div className="flex gap-9">
                                        <div>
                                            <input type="radio" name="one" /> Buy
                                        </div>
                                        <div>
                                            <input type="radio" name="one" /> Rent
                                        </div>
                                        <div>
                                            <input type="radio" name="one" /> Other
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="">Message *</label>
                                    <input
                                        type="text"
                                        className="border-b-[1px] h-[100px] "
                                    />
                                </div>
                                <div>
                                    <input type="submit" className="bg-red-700 py-3 px-6 text-[18px] border-0 rounded-[5px] transition-all duration-200 hover:shadow-sm  hover:shadow-white hover:cursor-pointer"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Contact;
