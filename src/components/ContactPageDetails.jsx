const ContactPageDetails = () => {
  return (
    <>
      {/* main container */}
      <div className="flex flex-col h-auto py-10 px-6 w-full overflow-x-hidden">
        {/* Contact info section */}
        <div className="flex flex-col md:flex-row justify-around items-center gap-6 md:gap-0 flex-wrap max-w-[1200px] mx-auto w-full">
          <div className="min-w-[150px] text-center md:text-left">Our Office</div>
          <div className="min-w-[150px] text-center md:text-left">
            <span>500 Terry Francine Street</span><br />
            <span>San Francisco, CA 94158</span>
          </div>
          <div className="min-w-[150px] text-center md:text-left">
            <span>Tel: 123-456-7890</span><br />
            <span>Fax: 123-456-7890</span>
          </div>
          <div className="min-w-[150px] text-center md:text-left">info@mysite.com</div>
        </div>

        {/* map placeholder */}
        <div className="h-[400px] w-full max-w-[1200px] mx-auto bg-gray-200 mt-10 overflow-hidden rounded-lg">
          {/* Add your iframe or map here */}
        </div>

        {/* footer text */}
        <div className="flex flex-col justify-center items-center gap-8 max-w-[800px] mx-auto mt-10 px-4 text-center">
          <h1 className="text-2xl font-semibold">BE IN TOUCH</h1>
          <span>
            I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
          </span>
        </div>
      </div>
    </>
  );
};

export default ContactPageDetails;
