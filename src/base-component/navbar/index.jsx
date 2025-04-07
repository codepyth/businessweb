import logo from "../../assets/pngs/logo.svg";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-20 h-[80px] bg-white shadow-md">
      <img src={logo} alt="logo" />

      <ul className="flex items-center gap-x-6">
        <li className="cursor-pointer px-3 py-2 text-dark text-lg font-medium rounded-md hover:text-white bg-transparent hover:bg-primary">
          Home
        </li>
        <li className="cursor-pointer px-3 py-2 text-dark text-lg font-medium rounded-md hover:text-white bg-transparent hover:bg-primary">
          Services
        </li>
        <li className="cursor-pointer px-3 py-2 text-dark text-lg font-medium rounded-md hover:text-white bg-transparent hover:bg-primary">
          About Us
        </li>
        <li className="cursor-pointer px-3 py-2 text-dark text-lg font-medium rounded-md hover:text-white bg-transparent hover:bg-primary">
          Reviews
        </li>
        <li className="cursor-pointer px-3 py-2 text-dark text-lg font-medium rounded-md hover:text-white bg-transparent hover:bg-primary">
          Our Team
        </li>
      </ul>
    </div>
  );
};
