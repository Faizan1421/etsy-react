import { hero1,hero2 } from "/public/images/index";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  w-full ">
         <div className="relative overflow-hidden h-[60vh] md:h-[40vh] lg:h-[60vh] col-span-1 md:col-span-2 bg-yellow-100  rounded-lg hover:border-[0.8px]  flex flex-col justify-center items-center gap-6 md:flex-row hover:shadow-lg cursor-pointer hover:scale-[1.0002] transition-all duration-300 ease-in-out">
         <div className="h-[30%] md:h-full w-full md:w-[50%] flex flex-col justify-center items-center  px-4">
            <h1 className="~text-2xl/5xl font-serif text-center ">Renew your rooms!</h1>
            <p className="~text-sm/lg font-semibold">Shop original home pieces</p>
            <div
          className="hidden md:block hover:scale-105 hover:shadow-lg cursor-pointer transform  bg-black rounded-full px-4 py-2 mt-4 gap-2 items-center text-white">
          <button>Shop Now</button>
        </div>
         </div>
         <div className="h-[70%] md:h-full w-full md:w-[50%] flex justify-center items-center ">
            <img src={hero1} alt="Decorative pillows" className="w-full h-full xl:h-[150%] object-cover rounded-t-full md:rounded-t-none  md:rounded-tl-full md:rounded-bl-full md:rounded" />
         </div>
         <div
          className="md:hidden  absolute bottom-5 md:bottom-10 lg:bottom-20 left-1/2 md:left-1/3 cursor-pointer transform -translate-x-1/2  bg-black rounded-full px-4 py-2 mt-4 gap-2 items-center text-white">
          <button>Shop Now</button>
        </div>
         </div>
         <div className="hidden relative overflow-hidden lg:block h-[40vh] lg:h-[60vh] lg:col-span-1  bg-black rounded-lg shadow-md hover:shadow-lg cursor-pointer hover:scale-[1.0002] hover:border-[0.8px] transition-all duration-300 ease-in-out">
           <img src={hero2} alt="hero2" className="w-full h-full object-cover opacity-70 " />
           <div className="absolute bottom-5 left-5 text-white">
            <h1 className="~text-2xl/3xl font-semibold">Vintage Stools</h1>
            <h2 className="~text-md/lg font-semibold">Shop Now</h2>
           </div>
         </div>
    </div>
  )
}

export default HeroSection