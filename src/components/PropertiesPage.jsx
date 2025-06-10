import image1 from "../assets/images/17081.avif";
import image2 from "../assets/images/52591.avif";
import image3 from "../assets/images/33234.avif";
import image4 from "../assets/images/15066.avif";
import image5 from "../assets/images/11251.avif";
import image6 from "../assets/images/15458.avif";
import image7 from "../assets/images/15878.avif";
import image8 from "../assets/images/16698.avif";
import image9 from "../assets/images/20207.avif";
import image10 from "../assets/images/22043.avif";
import image11 from "../assets/images/25557.avif";

const properties = [
  {
    image: image1,
    title: "17081 Perry Street",
    location: "San Francisco, CA, USA",
    price: "$850,000",
    action: "Buy",
    duration: 500,
  },
  {
    image: image2,
    title: "52591 Union Boulevard",
    location: "San Francisco, CA, USA",
    price: "$550,000",
    action: "Buy",
    duration: 1000,
  },
  {
    image: image3,
    title: "33234 Washington Avenue",
    location: "San Francisco, CA, USA",
    price: "$770,000",
    action: "Buy",
    duration: 1500,
  },
  {
    image: image4,
    title: "15066 Banks Street",
    location: "San Francisco, CA, USA",
    price: "$700,000",
    action: "Buy",
    duration: 2000,
  },
  {
    image: image5,
    title: "11251 Terry Street",
    location: "San Francisco, CA, USA",
    price: "$1500",
    action: "Rent",
    duration: 2500,
  },
  {
    image: image6,
    title: "15458 Lori Boulevard",
    location: "San Francisco, CA, USA",
    price: "$680,000",
    action: "Buy",
    duration: 3000,
  },
  {
    image: image7,
    title: "115878 Mulberry Street",
    location: "San Francisco, CA, USA",
    price: "$1800",
    action: "Rent",
    duration: 3500,
  },
  {
    image: image8,
    title: "16698 Spring Street",
    location: "San Francisco, CA, USA",
    price: "$1800",
    action: "Rent",
    duration: 4000,
  },
  {
    image: image9,
    title: "20207 Hillview Drive",
    location: "San Francisco, CA, USA",
    price: "$1600",
    action: "Rent",
    duration: 4500,
  },
  {
    image: image10,
    title: "22043 Grove Street",
    location: "San Francisco, CA, USA",
    price: "$820,000",
    action: "Buy",
    duration: 5000,
  },
  {
    image: image11,
    title: "25557 Ocean Boulevard",
    location: "San Francisco, CA, USA",
    price: "$1900",
    action: "Rent",
    duration: 5500,
  },
];

const PropertiesPage = () => {
  return (
    <div className="h-auto">
      <div className="sub-container py-[5%] px-4 sm:px-[10%] flex flex-col gap-7">
        {/* Title */}
        <div
          className="title flex flex-col justify-center items-center gap-7 text-center"
          data-aos="fade-up"
        >
          <span className="text-2xl md:text-4xl opacity-50">NEW PROPERTIES</span>
          <h1 className="md:text-3xl" data-aos="fade-down" data-aos-duration="500">
            For Sale
          </h1>
        </div>

        {/* Cards */}
        <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-hidden">
          {properties.map((property, index) => (
            <div
              key={index}
              className="card flex flex-col min-h-[400px] gap-4 shadow-lg hover:shadow-xl cursor-pointer transition-shadow duration-300 ease-in-out rounded-md"
              data-aos="fade-up"
              data-aos-duration={property.duration}
            >
              <div className="card-img w-full h-56 relative rounded-t-md overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-red-600 py-1 px-3 text-white rounded-md text-sm font-semibold">
                  {property.action}
                </span>
              </div>
              <div className="card-info flex flex-col p-4 gap-1 flex-grow">
                <h2 className="text-xl font-bold transition-colors duration-200 hover:text-red-500">
                  {property.title}
                </h2>
                <p className="text-xs text-gray-600">{property.location}</p>
                <p className="text-lg font-semibold mt-auto">{property.price}</p>
                <div className="overflow-hidden inline-block mt-3">
                  <button className="relative bg-gradient-to-r from-cyan-400 to-blue-500 py-2 px-6 text-black text-base rounded-md hover:shadow-lg cursor-pointer border border-gray-300 group overflow-hidden transition-all duration-300">
                    <span className="z-20 relative group-hover:text-white transition-colors duration-300">
                      {property.action}
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-600 z-10 -left-full h-full w-full transition-all duration-300 group-hover:left-0 rounded-md"></span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;
