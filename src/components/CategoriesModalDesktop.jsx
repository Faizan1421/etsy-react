import { motion } from "framer-motion";
import { categoriesItems } from "../constants";

const CategoriesModalDesktop = (data) => {
  const { isOpen } = data;
  return (
    <motion.div
      initial={{ height: 0 }} // Start from height 0
      animate={{ height: isOpen ? "80vh" : 0 }} // Animate height to full size (80% of the viewport height)
      exit={{ height: 0 }} // Slide out to height 0
      transition={{ type: "spring", stiffness: 300, damping: 30 }} // Smooth transition
      id="categoriesModal"
      className="absolute top-[60px] left-0 flex-col bg-white  w-[300px] shadow-xl rounded-xl z-50 overflow-y-auto"
    >
      <div>
        {
          categoriesItems?.map((item, index) => (
            <li
              key={index}
              className="hover:bg-gray-100 p-4 hover:underline list-none"
            >
              {item.title}
            </li>
          ))
        }
        
      </div>
    </motion.div>
  );
};

export default CategoriesModalDesktop;
