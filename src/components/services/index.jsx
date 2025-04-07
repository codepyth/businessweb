import { services } from "../../utils/static";
import { ServiceCard } from "./service-card";

export const Services = () => {
  return (
    <div className="my-10 max-w-[80%] mx-auto">
      <div className="flex flex-col gap-y-2 items-center justify-center mb-10">
        <h1 className="text-2xl font-semibold">Our Services</h1>
        <p className="text-[44px] font-medium text-[#DB0000]">
          Innovative Solutions for Your Digital Needs
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4">
        {services?.map((item, index) => {
          return (
            <ServiceCard
              key={index}
              icon={item?.icon}
              heading={item?.heading}
              description={item?.description}
            />
          );
        })}
      </div>
    </div>
  );
};
