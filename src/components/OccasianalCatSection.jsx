"use client";

import { motion } from "framer-motion";
import { data } from "../constants";

const OccasionalCatSection = () => {
  return (
    <div className="categories-section w-full mt-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-center">
          Discover gifts for every occasion
        </h1>
        <div className="flex ~gap-2/6 items-center justify-center flex-nowrap overflow-scroll scrollbar-hidden py-6">
          {data
            ?.slice(0, 6)
            ?.reverse()
            ?.map((item, index) => (
              <motion.div
                key={index}
                className="cards-categories bg-white flex px-4 flex-col gap-4 justify-center items-center rounded-lg cursor-pointer "
                transition={{ delay: index * 0.001 }}
                whileHover={{
                  scale: 1,
                  boxShadow: "0px 5px 15px rgba(0.2,0.2,0.2,0.2)",
                  border: "1px solid gray-600",
                }}
              >
                <div className="w-28 h-40 md:w-[160px] md:h-[200px] rounded-lg flex justify-center items-center">
                  <img
                    src={item.url}
                    alt="cat-img"
                    className="text-white rounded-full"
                  />
                </div>
                <h1 className="text-lg font-semibold">{item.title}</h1>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OccasionalCatSection;
