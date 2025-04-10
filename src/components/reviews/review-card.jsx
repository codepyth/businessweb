import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export const ReviewCard = ({ image, name, rating, review }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-500" />);
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg px-6 py-4 hover:shadow-xl transition duration-200 ease-in-out flex items-start  gap-x-4">
      <img
        src={image}
        alt="profile"
        className="w-[100px] h-[100px] object-cover rounded-lg shadow-md"
      />
      <div className="flex flex-col gap-y-1">
        <span className="text-base font-semibold">{name}</span>
        <div className="flex items-center gap-x-1">{renderStars()}</div>
        <p className="text-xs font-normal text-dark">{review}</p>
      </div>
    </div>
  );
};
