import { teamMembers } from "../../utils/static";
import { EmployeeCard } from "./employee-card";

export const OurTeam = () => {
  return (
    <div className="my-20 w-[95%] lg:max-w-[80%] mx-auto">
      <div className="flex flex-col gap-y-2 items-center justify-center mb-10">
        <h1 className="text-2xl font-semibold">Our Team</h1>
        <p className="text-xl lg:text-[44px] font-medium text-center text-[#DB0000]">
          Expert Talent Driving Your Digital Success
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4">
        {teamMembers?.map((item, index) => {
          return (
            <EmployeeCard
              key={index}
              image={item?.image}
              name={item?.name}
              position={item?.position}
              description={item?.description}
            />
          );
        })}
      </div>
    </div>
  );
};
