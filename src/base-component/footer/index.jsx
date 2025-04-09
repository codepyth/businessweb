import { FacebookIcon } from "../../assets/svgs/components/facebook-icon";
import { InstagramIcon } from "../../assets/svgs/components/instagram-icon";
import { TikTokIcon } from "../../assets/svgs/components/tiktok-icon";
import { WhatsappIcon } from "../../assets/svgs/components/whats-icon";

export const Footer = () => {
  const sociallinks = [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com",
    },
    {
      icon: <WhatsappIcon />,
      link: "https://www.whatsapp.com",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com",
    },
    {
      icon: <TikTokIcon />,
      link: "https://www.tiktok.com",
    },
  ];
  return (
    <section className="flex justify-between items-center py-4 border-t border-t-dark">
      <div className="flex items-center gap-x-5 pl-10">
        {sociallinks?.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex justify-center items-center rounded-full bg-[#F5F5F5] hover:bg-[#E0E0E0] transition duration-300"
          >
            {item.icon}
          </a>
        ))}
      </div>
      <p className="text-[#757575] text-center text-xs md:text-sm pr-10">
        Copyright &copy; 2025{" "}
        <strong className="font-medium text-primary">Business Web</strong>. All
        rights reserved. Privacy Policy
      </p>
    </section>
  );
};
