import { Gift, Menu } from "lucide-react";
import Searchbar from "./Searchbar";
import { useEffect, useRef, useState } from "react";
import CategoriesModalDesktop from "./CategoriesModalDesktop";
import { categoriesItems, navLists } from "../constants";
import CategoriesModalMobile from "./CategoriesModalMobile";

const Navbar = () => {
  const [isCategoriesDesktopOpen, setIsCategoriesDesktopOpen] = useState(false);
  const [isCategoriesMobileOpen, setIsCategoriesMobileOpen] = useState(false);

  // Refs for desktop and mobile category modals
  const categoriesDesktopOpenRef = useRef(null);
  const categoriesMobileOpenRef = useRef(null);

  // Function to handle click outside to close modals
  const handleOutsideClick = (event) => {
    if (
      categoriesDesktopOpenRef.current &&
      !categoriesDesktopOpenRef.current.contains(event.target) &&
      categoriesMobileOpenRef.current &&
      !categoriesMobileOpenRef.current.contains(event.target)
    ) {
      setIsCategoriesDesktopOpen(false);
      setIsCategoriesMobileOpen(false);
    }
  };

  // Function to handle button click for toggling modals
  const handleDesktopButtonClick = () => {
    setIsCategoriesDesktopOpen((prevState) => !prevState);
  };

  const handleMobileButtonClick = () => {
    setIsCategoriesMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    // Add event listener for clicks outside the modals
    document.addEventListener("click", handleOutsideClick);

    // Cleanup event listener
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="mb-4 h-[132px] md:h-[112px] w-full  border-gray-200 my-4  ">
      {/* Nav Upper Section */}
      <div className="flex justify-between items-center gap-2 ~mx-2/20  ">
        <h1 className="text-3xl font-serif text-orange-600">Etsy</h1>
        <span
          ref={categoriesDesktopOpenRef}
          onClick={handleDesktopButtonClick}
          className="hidden md:flex relative justify-center items-center gap-2 hover:bg-gray-200 transition-all duration-500 ease-out rounded-full px-4 py-1 cursor-pointer h-10"
        >
          <Menu className="w-4 h-4" />
          <h2 className="text-sm font-semibold">Categories</h2>
          {/* Modal for desktop screen size */}
          {isCategoriesDesktopOpen && (
            <CategoriesModalDesktop isOpen={isCategoriesDesktopOpen} />
          )}
        </span>

        <div className="hidden md:block flex-1">
          <Searchbar />
        </div>

        {/* Nav Items */}
        <div className="flex justify-between items-center gap-4">
        <div className="relative group">
          <a href="#"
            className="text-sm font-semibold flex justify-center items-center hover:bg-gray-200 transition-all duration-500 ease-out rounded-full px-4 py-1 cursor-pointer h-10">
            Sign In
          </a>

        </div>
          {navLists.map(({ Icon, label }, index) => (
            <span
              key={index}
              className="relative group flex justify-center items-center hover:bg-blue-200 transition-all duration-500 ease-out rounded-full cursor-pointer h-12 w-12"
            >
              <Icon />
              <div className="hidden group-hover:block label absolute left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out -bottom-12 bg-blue-900 text-white text-xs px-2 py-3 rounded-md font-semibold">
                {label}
              </div>
            </span>
          ))}
        </div>
      </div>

      {/* Nav Below Section*/}
      <div className="bottom-nav hidden md:flex justify-center items-center sm:gap-2 md:gap-4 lg:gap-2 mt-1 ">
        {categoriesItems?.slice(0, 5)?.map((item, index) => (
          <div key={index} className="flex items-center justify-center">
            <div className="flex items-center justify-center   gap-2 font-semibold hover:bg-gray-200  transition-all duration-500 ease-out  rounded-full px-4 py-1 cursor-pointer h-10">
              {item.title === "Gifts" && <Gift className="w-4 h-4 " />}
              <a href="#" className="text-md font-semibold">
                {item.title}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 md:hidden ~mx-2/20">
        <div
          onClick={handleMobileButtonClick}
          ref={categoriesMobileOpenRef}
          className="relative"
        >
          <Menu className="w-6 h-6" />
          {isCategoriesMobileOpen && (
            <CategoriesModalMobile isOpen={isCategoriesMobileOpen} />
          )}
        </div>

        <div className="flex-1">
          <Searchbar />
        </div>
      </div>
      <div className="border-t  md:border-[1px] border-gray-300 mt-2 md:mt-1"></div>
    </div>
  );
};

export default Navbar;
