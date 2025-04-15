import logo from "../../assets/pngs/logo.svg";

export const Navbar = ({ onNavClick }) => {
  return (
    <div className="flex justify-between items-center px-20 h-[80px] bg-white shadow-md">
      <img src={logo} alt="logo" />

      <ul className="flex items-center gap-x-6">
        {["Home", "Services", "Our Team", "Reviews"]?.map((item) => (
          <li
            key={item}
            className="cursor-pointer px-3 py-2 text-dark text-lg font-medium rounded-md hover:text-white bg-transparent hover:bg-primary"
            onClick={() => onNavClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
