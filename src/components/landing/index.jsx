import { useRef } from "react";
import { OurTeam } from "../ourTeam";
import { Services } from "../services";
import banner from "../../assets/pngs/main_banner.png";
import { Reviews } from "../reviews";

export const Landing = ({ sectionRefs }) => {
  return (
    <>
      <div className="relative w-full h-full" ref={sectionRefs["Home"]}>
        <img src={banner} alt="banner" className="w-full h-full object-cover" />
        <p className="absolute inset-0 flex items-center justify-center text-white text-center px-4 md:px-10 text-sm md:text-2xl font-medium bg-black/40">
          We’re a results-driven tech company offering fullstack web and mobile
          app development, SEO, digital marketing, Google Ads, professional
          resume writing, Google review strategies, and creative graphic design.
          Whether you're building a brand or boosting your online presence, we
          deliver smart, scalable solutions tailored for success.
        </p>
      </div>

      <div ref={sectionRefs["Services"]}>
        <Services />
      </div>
      <div ref={sectionRefs["Our Team"]}>
        <OurTeam />
      </div>
      <div ref={sectionRefs["Reviews"]}>
        <Reviews />
      </div>
    </>
  );
};
