import hero_img from '../assets/images/propertieshero-img.avif'

const PropertiesHero = ()=>{
     return (
     <>
        {/* main container */}
                 <div className="w-full h-[40vh] relative">
                     {/* hero section */}
                     <div className="hero w-full h-full relative">
                         {/* hero img */}
                         <div className=" absolute inset-0  w-full h-full">
                             <img
                                 src={hero_img}
                                 alt=""
                                 className="w-full h-full object-cover brightness-50 -z-10 "
                             />
                         </div>
     
                     </div>
                  {/* heor content */}
                  <div className=" absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-gray-200 flex flex-col items-center">
                        <div className="hero-title  ">
                         <h1 className="text-[16px] md:text-5xl">"OUR EXCLUSIVE PROPERTIES "</h1>
                     </div>
                     <div className="sub-title">
                         <span className="text-[16px] md:text-2xl">
                             All Properties
                         </span>
                     </div>
                  </div>
                 </div>
     </>
     )
}
export default PropertiesHero