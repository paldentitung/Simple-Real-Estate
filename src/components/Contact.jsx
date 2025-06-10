import React from "react";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload on submit
    console.log("Form submitted!");
  };

  return (
    <>
      {/* main container */}
      <div className="w-full h-auto overflow-x-hidden mt-[50px] md:h-[80vh] lg:h-[100vh] bg-blue-950 text-white">
        {/* sub container */}
        <div className="flex justify-center items-center p-4 md:px-[10%] md:py-10" data-aos="fade-down">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 w-full max-w-6xl">
            {/* content 1 */}
            <div className="flex flex-col" data-aos="fade-right" data-aos-duration="1000">
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
            <div data-aos="fade-right" data-aos-duration="2000">
              <div className="mb-4 text-xl font-semibold">CONTACT US</div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="flex flex-col gap-3 md:flex-row">
                  <div className="flex-1">
                    <label htmlFor="firstName" className="block mb-1">First Name *</label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      className="w-full border-b-[1px] p-3 focus:outline-0 focus:border-red-500 bg-transparent"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="lastName" className="block mb-1">Last Name *</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      className="w-full border-b-[1px] p-3 focus:outline-0 focus:border-red-500 bg-transparent"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="block mb-1">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="border-b-[1px] p-3 focus:outline-0 focus:border-red-500 bg-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1">Interested in</label>
                  <div className="flex gap-9">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="interest" value="buy" />
                      Buy
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="interest" value="rent" />
                      Rent
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="interest" value="other" />
                      Other
                    </label>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="block mb-1">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="border-b-[1px] h-[100px] p-3 focus:outline-0 focus:border-red-500 bg-transparent resize-none"
                    required
                  ></textarea>
                </div>
                <div>
                  <input
                    type="submit"
                    value="Submit"
                    className="bg-red-700 py-3 px-6 text-[18px] border-0 rounded-[5px] transition-all duration-200 hover:shadow-sm hover:shadow-white hover:cursor-pointer w-full md:w-auto"
                  />
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
