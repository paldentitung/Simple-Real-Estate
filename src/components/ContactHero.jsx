import hero_img from "../assets/images/contact-hero-img.avif"

const ContactHero = ()=>{
     return(
        <>
         {/* main container */}
                   <div className="w-full h-[600px] md:h-[30vh] relative overflow-hideen" >
                       {/* sub container */}
                       <div className="w-full  h-full">
                           {/* hero section */}
                           <div className="hero w-full h-full">
                               {/* hero img */}
                               <div className=" w-full h-full">
                                   <img src={hero_img} alt="" className="w-full h-full  brightness-30 object-cover" />
                               </div>
                               {/* hero content */} 
                             <div className=" absolute   top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white" >
                                 <div  className="flex items-center flex-col md:flex-col-reverse">
                                   {/* title */}
                                   <div className="text-[18px] md:text-4xl">CONTACT</div>
                                   {/* sub title */}
                                   <div className="text-[15px] md:text-[20px]"> BE IN TOUCH </div>
                               </div>
                             </div>
                           </div>
                       </div>
                   </div>
        </>
     )
}
export default ContactHero;