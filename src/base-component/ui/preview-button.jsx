import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className=" text-white bg-[#DB0000] border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-700 z-10"
  >
    <FaChevronLeft className="text-xl" />
  </button>
);

export const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className=" text-white bg-[#DB0000] border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-700 z-10"
  >
    <FaChevronRight className="text-xl" />
  </button>
);
