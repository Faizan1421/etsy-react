import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { data } from "../constants";
import { motion } from "framer-motion";
const Searchbar = () => {
  const [inputTriggered, setInputTriggered] = useState(false);

  const buttonRef = useRef(null);
  // Function to handle button click
  const handleButtonClick = () => {
    setInputTriggered(true);
  };
  const handleOutsideClick = (event) => {
    // Check if the click was outside the button
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setInputTriggered(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside
    document.addEventListener("click", handleOutsideClick);

    // Cleanup event listener
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <div className="relative group  rounded-full bg-red-500">
      <input
        ref={buttonRef}
        onClick={handleButtonClick}
        type="text"
        name=""
        id="search-input"
        placeholder="Search for anything"
        className="w-full h-12 px-4 py-2 border-2 border-black rounded-full text-black bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
      />
      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-orange-600 rounded-full p-2 group-hover:rounded-r-full group-hover:right-[2px] group-hover:h-[93%] cursor-pointer transition-all duration-100 ease-in-out  group-hover:rounded-none !overflow-hidden">
        <Search className="w-6 h-6 text-white" />
      </div>
      {/* Modal Search */}

      {inputTriggered && (
        <motion.div
          initial={{ height: 0 }} // Start from height 0
          animate={{ height: inputTriggered ? "auto" : 0 }} // Animate height dynamically based on content
          exit={{ height: 0 }} // Slide out to height 0
          transition={{ type: "spring", stiffness: 300, damping: 30 }} // Smooth transition
          id="searchModal"
          className=" absolute top-16 left-0 right-0 bg-white z-40 rounded-lg shadow-md overflow-hidden"
        >
          <h1 className="text-gray-900 mb-4 font-semibold text-md p-4">
            Top Searches This Week
          </h1>
          <ul className=" text-gray-600 text-md font-semibold space-y-4 ">
            {data?.slice(0, 4)?.map((item, index) => (
              <li
                className=" hover:bg-gray-100   flex gap-3 items-center cursor-pointer p-4"
                key={index}
              >
                <span>
                  <img
                    src={item?.url}
                    alt={item?.title}
                    className="w-10 h-10 rounded-md"
                  />
                </span>
                {item?.title}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Searchbar;
