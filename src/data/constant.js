import { CodeXml, NotebookPen, Rocket } from "lucide-react";
import logo from "../assets/logo/logo.png";

export { logo };

// company
export const companyDetails = {
  name: "Byteserve",
  address:
    "Hiranandani Business Park, Powai, Maharashtra - India",
  phone: "+918668753480",
  email: "abc@example.com",
};

// working process
export const workingProcess = [
  {
    step: 1,
    title: "Requirement Gathering & Analysis",
    description:
      "In this phase, we work closely with clients to thoroughly understand their needs and objectives. Our team engages in detailed discussions to define the project's goals and scope, ensuring that all technical and business requirements are clearly documented and analyzed for feasibility.",
    icon: NotebookPen,
  },
  {
    step: 2,
    title: "Design & Development",
    description:
      "Our expert designers create intuitive, user-friendly interfaces while ensuring that the overall user experience remains seamless. The development team then builds robust, scalable, and efficient solutions, adhering to industry best practices and using cutting-edge technologies to meet client expectations.",
    icon: CodeXml,
  },
  {
    step: 3,
    title: "Testing & Deployment",
    description:
      "This phase involves rigorous testing of the software to identify and fix any bugs or performance issues. We conduct various quality assurance checks to ensure the product meets the highest standards. Once finalized, we deploy the solution and provide continuous support to ensure smooth operations.",
    icon: Rocket,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    image: require("../assets/images/landingpage/ecommerce.webp"),
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    image: require("../assets/images/landingpage/socialmedia.webp"),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    image: require("../assets/images/landingpage/landing.webp"),
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand's message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    image: require("../assets/images/landingpage/customweb.webp"),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    image: require("../assets/images/landingpage/ios.webp"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    image: require("../assets/images/landingpage/android.webp"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    image: require("../assets/images/landingpage/flutter.webp"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    image: require("../assets/images/landingpage/hybrid.webp"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// testimonials
export const testimonials = [
  {
    name: "Priya Sharma",
    position: "Operations Manager, NovaEdge Logistics",
    desc: `We approached Byteserve for a custom logistics system — what we got was so much more. 
They didn't just build what we asked for; they asked smart questions, offered better solutions, 
and built a platform that made our operations smoother than ever. Solid team, great communication, and no fluff.`,
    img: require("../assets/images/testimonials/1.jpg"),
  },
  {
    name: "Liam Turner",
    position: "CTO, HealthSync Medical",
    desc: `We knew we had to modernize our infrastructure, but we were worried about disruption. 
The Byteserve team mapped out a clear path, handled everything from setup to security, 
and migrated us to AWS without a hitch. It's rare to find a tech partner this reliable.`,
    img: require("../assets/images/testimonials/2.jpg"),
  },
  {
    name: "Natalie Gomez",
    position: "Customer Experience Lead, BrightBox",
    desc: `Byteserve helped us build a chatbot that actually works — it doesn't feel robotic, 
and it's already handling a huge chunk of our customer inquiries. The best part? 
It's saving us time and improving our customer satisfaction scores. That's a win-win in our book.`,
    img: require("../assets/images/testimonials/3.jpg"),
  },
  {
    name: "Thomas P",
    position: "Managing Director, TechFlow Solutions",
    desc: `From the very beginning, we knew we found the right team at Byteserve.
They worked closely with us to develop a mobile app that was user-friendly 
and fully aligned with our business objectives. Their expertise also 
helped streamline our operations, and the results speak for themselves.`,
    img: require("../assets/images/testimonials/4.jpg"),
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("../assets/images/portfolio/web-development/5ghomes.webp"),
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: require("../assets/images/portfolio/web-development/cold-creekcap.webp"),
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 3,
    img: require("../assets/images/portfolio/web-development/think-reality.webp"),
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 4,
    img: require("../assets/images/portfolio/web-development/akash-mega-mart.webp"),
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 5,
    img: require("../assets/images/portfolio/web-development/midwam.webp"),
    title: "Midwam – Immersive Experience Design Company",
    link: "https://www.midwam.com/en/about",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("../assets/images/portfolio/app-development/akash_mega_mart-app.webp"),
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: require("../assets/images/portfolio/app-development/feelit_app.webp"),
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: require("../assets/images/portfolio/app-development/klikomics.webp"),
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: require("../assets/images/portfolio/app-development/autosnap-app.webp"),
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 5,
    img: require("../assets/images/portfolio/app-development/rentop.webp"),
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
