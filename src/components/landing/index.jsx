import banner from "../../assets/pngs/main_banner.png";
import { Services } from "../services";

export const Landing = () => {
  return (
    <>
      <div>
        <img src={banner} alt="banner" className="w-full h-full" />
      </div>

      <Services />
    </>
  );
};
