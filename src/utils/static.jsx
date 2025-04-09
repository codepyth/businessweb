import { AdsIcon } from "../assets/svgs/components/ads-icon";
import { GraphicIcon } from "../assets/svgs/components/graphic-icon";
import { MarketingIcon } from "../assets/svgs/components/marketing-icon";
import { SeoIcon } from "../assets/svgs/components/seo-icon";
import { SoftwareIcon } from "../assets/svgs/components/software-icon";
import { WebIcon } from "../assets/svgs/components/web-icon";
import profile from "../assets/svgs/profile_dummy.svg";

export const Field = {
  input: "input",
  password: "password",
  select: "select",
  phone: "phone",
  date: "date",
  checkbox: "checkbox",
  radio: "radio",
  span: "span",
  div: "div",
  button: "button",
  profileUploadField: "profileUploadField",
  otpField: "otpField",
};

export const services = [
  {
    icon: <WebIcon />,
    title: "Website Development",
    description:
      "Elevate your digital presence with our expert web development solutions. We craft visually stunning websites designed to attract, engage, and inspire your audience.",
  },
  {
    icon: <SoftwareIcon />,
    title: "Application Development",
    description:
      "Harness the strength of our advanced technology through tailored application development services. We build reliable and innovative software solutions that bring your vision to life.",
  },
  {
    icon: <GraphicIcon />,
    title: "Graphic Designing",
    description:
      "Make a memorable impact with our captivating graphic design services. We deliver eye-catching visuals that draw in and resonate with your audience.",
  },
  {
    icon: <SeoIcon />,
    title: "Search Engine Optimization",
    description:
      "Boost your online presence and stay ahead of the competition with our SEO services. We fine-tune your website to drive organic traffic and secure top positions in search engine results.",
  },
  {
    icon: <MarketingIcon />,
    title: "Social Media Marketing",
    description:
      "Enhance your brand’s visibility with our targeted social media marketing strategies. Through impactful content and strategic campaigns, we help you grow your audience and build lasting engagement.",
  },
  {
    icon: <AdsIcon />,
    title: "Google Ads",
    description:
      "We craft and manage high-performing campaigns to fuel your business growth. Our Google Ads services boost your online visibility and drive quality leads to your site.",
  },
  {
    icon: <AdsIcon />,
    title: "Resume Writing",
    description:
      "Stand out to employers with our professional resume writing services. We create tailored, polished resumes that highlight your strengths and showcase your experience to help you land your ideal job.",
  },
];

export const teamMembers = [
  {
    image: profile,
    name: "Mateen Nawaz",
    position: "CEO & Senior Software Engineer",
    description:
      "Mateen is the visionary behind our company, with over 10 years of experience in the industry.",
  },
  {
    image: profile,
    name: "Wasim Nawaz",
    position: "CTO & Project Manager",
    description:
      "Jane leads our tech team with her expertise in software development and innovation.",
  },
  {
    image: profile,
    name: "Aziz ullah",
    position: "Senior Graphic Designer",
    description:
      "Aziz is our creative genius, responsible for all things design and branding.",
  },
];
