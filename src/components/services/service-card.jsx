export const ServiceCard = ({ icon, heading, description }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-5 bg-white rounded-lg shadow-lg border border-dark-200 hover:shadow-xl transition duration-200 ease-in-out">
      {icon && icon}
      <h3 className="text-xl font-semibold text-gray-800 text-center">
        {heading}
      </h3>
      <p className="mt-2 text-dark text-center">{description}</p>
    </div>
  );
};
