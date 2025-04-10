export const EmployeeCard = ({ image, name, position, description }) => {
  return (
    <div className="flex flex-col items-center justify-center  p-5 rounded-lg shadow-lg border border-dark">
      <div className="border-2 border-primary rounded-full w-[65px] h-[65px] mb-3">
        <img src={image} alt={name} className=" rounded-full mb-4" />
      </div>
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm font-normal text-dark mb-2">{position}</p>
      <p className="text-sm font-normal text-dark text-center">{description}</p>
    </div>
  );
};
