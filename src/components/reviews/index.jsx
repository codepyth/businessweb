import { ReviewCard } from "./review-card";
import { clientReviews } from "../../utils/static";
import { NextArrow, PrevArrow } from "../../base-component/ui/preview-button";
import { useState } from "react";

const CARDS_PER_PAGE = 3;

export const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = Math.ceil(clientReviews.length / CARDS_PER_PAGE) - 1;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const startIndex = currentIndex * CARDS_PER_PAGE;
  const visibleReviews = clientReviews.slice(
    startIndex,
    startIndex + CARDS_PER_PAGE
  );

  return (
    <div className="my-10 w-[95%] lg:max-w-[80%] mx-auto">
      <div className="flex flex-col gap-y-2 items-center justify-center mb-10">
        <h1 className="text-2xl font-semibold">Reviews</h1>
        <p className="text-xl lg:text-[44px] font-medium text-center text-[#DB0000]">
          Rated & Reviewed by our amazing community
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4">
        {visibleReviews?.map((item, index) => {
          return (
            <div key={index} className="px-3">
              <ReviewCard
                key={index}
                image={item?.image}
                name={item?.name}
                rating={item?.rating}
                review={item?.description}
              />
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center mt-5 gap-x-5">
        <PrevArrow onClick={handlePrev} />
        <NextArrow onClick={handleNext} />
      </div>
    </div>
  );
};
