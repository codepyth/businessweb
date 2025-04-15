import { AdsIcon } from "../assets/svgs/components/ads-icon";
import { GraphicIcon } from "../assets/svgs/components/graphic-icon";
import { MarketingIcon } from "../assets/svgs/components/marketing-icon";
import { SeoIcon } from "../assets/svgs/components/seo-icon";
import { SoftwareIcon } from "../assets/svgs/components/software-icon";
import { WebIcon } from "../assets/svgs/components/web-icon";
import profile from "../assets/svgs/profile_dummy.svg";
import dummyReview from "../assets/pngs/dummy-review.jpg";
import { PenIcon } from "../assets/svgs/components/pen-icon";
import { ReviewsIcon } from "../assets/svgs/components/reviews-icon";

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
    icon: <PenIcon />,
    title: "Resume Writing",
    description:
      "Stand out to employers with our professional resume writing services. We create tailored, polished resumes that highlight your strengths and showcase your experience to help you land your ideal job.",
  },
  {
    icon: <ReviewsIcon />,
    title: "Google Reviews",
    description:
      "Boost your online credibility with our Google Reviews service. We help you collect authentic customer feedback to improve your reputation, attract more clients, and build trust with potential customers on Google.",
  },
];

export const teamMembers = [
  {
    image: profile,
    name: "Mateen Nawaz",
    position: "CEO & Senior Software Engineer",
    description:
      "Mateen is the driving force and visionary behind our company, bringing over 3+ years of hands-on experience in software engineering. With a passion for solving complex problems, he oversees strategic direction while leading the development of cutting-edge, scalable solutions. His expertise spans full-stack development, system architecture, and fostering innovation to deliver exceptional results for clients.",
  },
  {
    image: profile,
    name: "Wasim Nawaz",
    position: "CTO & Project Manager",
    description:
      "Wasim spearheads our technology initiatives as CTO, blending his deep knowledge of software development with a sharp focus on project execution. With years of experience in managing cross-functional teams, he ensures every project is delivered on time and exceeds expectations. His leadership in adopting emerging technologies and optimizing workflows keeps our tech stack ahead of the curve.",
  },
  {
    image: profile,
    name: "Aziz Ullah",
    position: "Senior Graphic Designer",
    description:
      "Aziz is our creative powerhouse, crafting visually stunning designs that elevate our brand and captivate audiences. With a keen eye for detail and a mastery of tools like Adobe Creative Suite, he specializes in creating impactful logos, user interfaces, and marketing materials. His innovative approach to design ensures every project reflects both aesthetic excellence and functional brilliance.",
  },
];

export const clientReviews = [
  {
    image: dummyReview,
    name: "Mark Miller",
    rating: 4.5,
    description:
      "Delivered exactly what we needed—on time and with great communication.",
  },
  {
    image: dummyReview,
    name: "Sophia Reynolds",
    rating: 5.0,
    description:
      "Our new site looks amazing and performs even better. Highly recommended!",
  },
  {
    image: dummyReview,
    name: "David Chen",
    rating: 4.8,
    description:
      "Great attention to detail and very easy to work with throughout the project.",
  },
  {
    image: dummyReview,
    name: "Emily Johnson",
    rating: 4.7,
    description:
      "Fast delivery, smooth process, and exactly what we envisioned.",
  },
  {
    image: dummyReview,
    name: "Liam Brooks",
    rating: 5.0,
    description:
      "Custom solution works flawlessly. Will definitely work with him again!",
  },
  {
    image: dummyReview,
    name: "Ava Mitchell",
    rating: 4.9,
    description:
      "Saw instant results after launch. Professional and efficient service.",
  },
];
