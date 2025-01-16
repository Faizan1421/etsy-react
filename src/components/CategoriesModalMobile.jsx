import { Plus } from "lucide-react";
import { motion } from "framer-motion";

const CategoriesModalMobile = (data) => {
  const { isOpen } = data;
  return (
    <motion.div
      initial={{ y: "100%" }} // Start from below the screen
      animate={{ y: isOpen ? 0 : "100%" }} // Slide in/out
      exit={{ y: "100%" }} // Slide out when closed
      transition={{ type: 'spring', stiffness: 300, damping: 30 }} // Smooth transition
      id="menuModal"
      className={`fixed bottom-0 left-0 w-full z-50  bg-white overflow-hidden  shadow-lg h-[77vh]
      }`}
    >
      <div className="flex justify-center items-center p-4 bg-white relative ">
        <h1 className=" font-semibold text-xl">Browse Categories</h1>
        <button
          id="closeModal"
          className="absolute top-5 right-4 text-gray-500 hover:text-black"
        >
          <Plus className="w-6 h-6 rotate-45 text-black" />
        </button>
      </div>
      <div className="py-4 px-6">
        <ul className="space-y-4 text-lg font-semibold">
          <li>Valentines Day gifts</li>
          <li>Home Decor</li>
          <li>Party</li>
          <li>Prints</li>
          <li>Digital</li>
          <li>Rings</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default CategoriesModalMobile;
