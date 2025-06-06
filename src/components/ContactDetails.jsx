import phone from "../assets/images/phone.jpg";
import location from "../assets/images/location.jpg";
import email from "../assets/images/email.jpg";

const ContactDetails = () => {
    return (
        <>
            {/* main container */}
            <div className="h-auto  md:h-[60vh] lg:h-[80vh]">
                {/* sub container */}
                <div className="p-[10%]">
                    <div className="flex justify-center items-center text-2xl opacity-35">YOUR DREAM HOUSE IS ONE STEP AWAY!</div>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {/* contact 1 */}
                        <div className="flex flex-col p-2">
                            <div className="flex justify-center items-center flex-col">
                                <img src={phone} alt="" className="h-1/2" />
                                <div>Call Us</div>
                                <div className="flex flex-col items-center">
                                    <span>Free calls</span>
                                    <span>1-800-000-000</span>
                                </div>
                            </div>
                        </div>
                        {/* contact 2 */}
                            <div className="flex flex-col p-2">
                            <div className="flex justify-center items-center flex-col">
                                <img src={location} alt="" className="h-1/2" />
                                <div>Finde Us</div>
                                <div className="flex flex-col items-center">
                                    <span> 500 Terry Francine St.</span>
                                    <span>San Francisco, CA 94158</span>
                                </div>
                            </div>
                        </div>
                        {/* contact 1 */}
                           <div className="flex flex-col p-2">
                            <div className="flex justify-center items-center flex-col">
                                <img src={email} alt="" className="h-1/2" />
                                <div>Email Us</div>
                                <div className="flex flex-col items-center">
                                    <span>Direct Email</span>
                                    <span>Direct Email</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ContactDetails;
