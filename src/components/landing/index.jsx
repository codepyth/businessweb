import { OurTeam } from "../ourTeam";
import { Services } from "../services";
import banner from "../../assets/pngs/main_banner.png";
import { Reviews } from "../reviews";

export const Landing = () => {
  return (
    <>
      <div>
        <img src={banner} alt="banner" className="w-full h-full" />
      </div>

      <Services />
      <OurTeam />
      <Reviews />
    </>
  );
};
