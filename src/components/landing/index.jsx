import { OurTeam } from "../ourTeam";
import { Services } from "../services";
import banner from "../../assets/pngs/main_banner.png";

export const Landing = () => {
  return (
    <>
      <div>
        <img src={banner} alt="banner" className="w-full h-full" />
      </div>

      <Services />
      <OurTeam />
    </>
  );
};
