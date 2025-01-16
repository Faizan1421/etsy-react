import { data } from "../constants";

const PopularCatSection = () => {
  return (
    <div>
      <h1 className="mb-6 ~text-xl/3xl font-semibold  ">Shop Our Most Popular Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:grid-rows-1  justify-items-center items-cente gap-x-2 gap-y-14  md:gap-14  ">
        {data?.slice(0, 6)?.map((item, index) => (
          <div key={index} className="relative h-64  lg:~h-32/56 lg:~w-32/44 rounded-lg cursor-pointer hover:shadow-lg hover:scale-[1.008] transition-all duration-300 ease-in-out">
            <img src={item.url} alt={item.title} className="w-full h-full object-cover rounded-lg" />
            <h1 className="absolute -bottom-6 left-0 font-semibold text-md">
              {item.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCatSection;
