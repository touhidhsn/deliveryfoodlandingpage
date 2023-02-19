//import images

import AboutImg from "../src/assets/img/about.png";
import Feature1Img from "../src/assets/features/feature1.png";
import Feature2Img from "../src/assets/features/feature2.png";
import Feature3Img from "../src/assets/features/feature3.png";
import Feature4Img from "../src/assets/features/feature4.png";
import Avatar1Img from "../src/assets/testimonials/avatar1.png";
import Avatar2Img from "../src/assets/testimonials/avatar2.png";
import Avatar3Img from "../src/assets/testimonials/avatar3.png";
import LogoV2 from "../src/assets/img/logo-v2.png";
import HeroImage from "../src/assets/img/hero-img.png";
import Feature1BgImg from "../src/assets/features/feature1_bg.png";
import Feature2BgImg from "../src/assets/features/feature2_bg.png";
import Feature3BgImg from "../src/assets/features/feature3_bg.png";
import Feature4BgImg from "../src/assets/features/feature4_bg.png";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";

export const heroData = {
  title: "Order Porducts Faster Easier",
  subtitle:
    "Order your favorite foods at any time and we will deliver them right to where you are.",
  btnText: "Get Started",
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: "Find Out A Little More About Us",
  subtitle:
    "We are a company dedicated to the distribution of products by delivery to your home or to the place you are, with the best quality of delivery. ",
};

export const navigationData = [
  {
    name: "Deliver",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Features",
    href: "#",
  },
  {
    name: "Signup",
    href: "#",
  },
];

export const featuresData = {
  title: "Some Services We Offer",
  subtitle:
    "With our app you can view the route of your order, from our local headquarters to the place where you are. Look for the app right now!",
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: "Payment Done",
      description: "Pay with a Visa or PayPal card and without much ado",
      linkText: "Learn more",
      delay: "400",
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: "Find Your Product",
      description: "We offer sale of products through the Internet..",
      linkText: "Learn more",
      delay: "700",
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: "Print Out",
      description:
        "Print out service gives you convenience if someday you need print data, just edit it all and print it.",
      linkText: "Learn more",
      delay: "1000",
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: "Product Received",
      description:
        "In our app you can see the delivery time of your orders... ",
      linkText: "Learn more",
      delay: "1300",
    },
  ],
};

export const testimonialData = [
  {
    image: Avatar1Img,
    name: "W. Bill",
    web: "coffee.org",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    delay: "300",
  },
  {
    image: Avatar2Img,
    name: "Ishrak A.",
    web: "isho.com",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    delay: "600",
  },
  {
    image: Avatar3Img,
    name: "Russo W.",
    web: "imprint.com",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    delay: "900",
  },
];

export const ctaData = {
  title: "Contact Us From Here",
  subtitle: "Get limited 1 week free try our features!",
  btnText1: "Learn more",
  btnText2: "Request Demo",
};

export const footerData = {
  logo: LogoV2,
  address: "Road no 13, Shekhertek, Adabar, Dhaka, Bangladesh",
  email: "touhidhsn@gmail.com",
  phone: "01717787275",
  list1: [
    {
      name: "Profile",
      href: "#",
    },
    {
      name: "Features",
      href: "#",
    },
    {
      name: "Careers",
      href: "#",
    },
    {
      name: "DW News",
      href: "#",
    },
  ],

  list2: [
    {
      name: "Support",
      href: "#",
    },
    {
      name: "Sign up",
      href: "#",
    },
    {
      name: "Guide",
      href: "#",
    },
    {
      name: "Reports",
      href: "#",
    },
    {
      name: "Q & A",
      href: "#",
    },
  ],

  socialist: [
    {
      icon: <FaYoutube />,
      href: "#",
    },
    {
      icon: <FaInstagram />,
      href: "#",
    },
    {
      icon: <FaGithub />,
      href: "#",
    },
  ],
};

export const copyrightData = {
  text: "© Product Texas, 2022. All rights reserved. Company Registration Number: 09921626. ",
  icon: <BsChatDotsFill />,
};
