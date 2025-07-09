import React, { lazy } from "react";
import ReactPlayer from "react-player";
import bannerVid from "../assets/vids/banner.mp4";
import {
  Ambulance,
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Cloudy,
  CodeXml,
  Cpu,
  Quote,
  StickyNote,
  Store,
  Tv,
  Linkedin,
  Twitter,
} from "lucide-react";
import { ReactComponent as icon1 } from "../assets/svg/services/Web Development.svg";
import { ReactComponent as icon2 } from "../assets/svg/services/App Development.svg";
import { Link } from "react-router-dom";
import howWeBuildCover from "../assets/images/how-we-build.webp";
import whyWorkWithUs1 from "../assets/images/whyworkwithus1.png";
import whyWorkWithUs2 from "../assets/images/whyworkwithus2.png";
import whyWorkWithUs3 from "../assets/images/whyworkwithus3.png";
import whyWorkWithUs4 from "../assets/images/whyworkwithus4.png";
import ceoImage from "../assets/images/aboutus-1.png";
import { ArrowLinkButton } from "../components/ArrowButtons";

const ContactForm = lazy(() => import("../components/ContactForm"));
const BlogsSection = lazy(() => import("../components/website/BlogsSection"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const ServicesWeProvide = lazy(() =>
  import("../components/website/ServicesWeProvide")
);

const bannerServices = [
  {
    id: 1,
    title: "Full Stack Web Development",
    icon: icon1,
    desc: "From the Front End to the Back End — We've Got It Covered. We design and develop web applications that look great and perform even better.",
    landingPageLink: "/web-development",
  },
  {
    id: 2,
    title: "Mobile App Development",
    icon: icon2,
    desc: "Built for your users, wherever they are. Whether it's iOS, Android, or cross-platform, we design mobile experiences that are intuitive, fast, and functional.",
    landingPageLink: "/app-development",
  },
  // {
  //   id: 3,
  //   title: "Blockchain",
  //   icon: icon3,
  //   desc: "Blockchain development focuses on building secure, decentralized applications and systems using blockchain technology for transparency and efficiency.",
  // },
];

const industries = [
  {
    icon: Ambulance,
    title: "Healthcare",
  },
  {
    icon: BriefcaseBusiness,
    title: "Finance",
  },
  {
    icon: Cpu,
    title: "Technology",
  },
  {
    icon: Store,
    title: "Retail &\n E-commerce",
  },
  {
    icon: Cloudy,
    title: "SaaS",
  },
  {
    icon: StickyNote,
    title: "Business Services",
  },
  {
    icon: Tv,
    title: "Media & Entertainment",
  },
  {
    icon: BrainCircuit,
    title: "AI",
  },
];

const Home = () => {
  return (
    <>
      <section className="relative min-h-screen bg-black/50">
        <div className="pt-[12rem] pb-[5rem]">
          <div className="wrapper flex flex-col gap-7 justify-center h-full">
            <div
              data-aos="fade-up"
              className="flex items-center text-start self-start text-white px-3 py-2 rounded-full border border-white"
            >
              <CodeXml className="inline mr-2" /> <span>IT & AI Services</span>
            </div>
            <h1 data-aos="fade-up" className="heading text-white">
              Welcome to <span className="gradient-text">Byteserve – </span>
              <br />
              <span className="text-[#FFC200]">
                Smart Technology. Real Results.
              </span>
            </h1>
            <div
              data-aos="fade-up"
              className="grid sm:grid-cols-2 gap-5 md:gap-14 mt-5"
            >
              {bannerServices.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-xl bg-secondary/60 backdrop-blur-md lg:hover:bg-primary/60 text-white space-y-4 transition-all duration-300"
                >
                  <p className="text-xl font-medium">{item.title}</p>
                  <p className="min-h-[6rem]">{item.desc}</p>
                  <div className="flex justify-between items-center gap-5">
                    <item.icon className="w-14 h-14 fill-white" />
                    <Link
                      to={item.landingPageLink}
                      className="bg-white/20 p-3 rounded-full"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <ReactPlayer
            url={bannerVid}
            playing
            muted
            loop
            playsinline
            width="100%"
            height="100%"
            className="react-player"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
            config={{
              file: {
                attributes: {
                  style: {
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  },
                },
              },
            }}
          />
        </div>
      </section>

      <section className="bg-[#F7F7F9]">
        <Testimonials />
      </section>
      <ServicesWeProvide length={4} />
      <section className="py-[4rem] bg-[#D8D8D8A3]">
        <div className="wrapper space-y-3">
          <h2 data-aos="fade-up" className="section-heading text-center">
            Industries We Serve
          </h2>
          <p data-aos="fade-up" className="text-center">
            We deliver tailored technology solutions across diverse industries,
            helping businesses solve unique challenges and achieve measurable
            results.
          </p>
          <div className="pt-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {industries.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  data-aos="fade-up"
                  key={item.title}
                  className="text-center p-5 bg-white rounded-xl space-y-3"
                >
                  <IconComponent className="w-8 h-8 mx-auto text-secondary" />
                  <p className="font-medium text-[.9rem] whitespace-pre-line">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="pt-[4rem]">
        <h2 data-aos="fade-up" className="wrapper section-heading text-center">
          Why Work with Byteserve?
        </h2>
        <div
          data-aos="fade-up"
          className="wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-[3rem] mt-10"
        >
          {[
            {
              title: "Multi-Disciplinary Team",
              desc: "Designers, developers, strategists, and engineers — all working together to deliver comprehensive solutions for your business.",
              styles: "bg-[#7C42DA] lg:rotate-[-18deg] lg:translate-y-[8rem]",
            },
            {
              title: "Built Around You",
              desc: "Everything we do starts with your goals and ends with your success. We tailor our approach to your specific business needs.",
              styles: "bg-[#F8B000] lg:rotate-[-10deg] lg:translate-y-[3rem]",
            },
            {
              title: "Clear Communication",
              desc: "No tech jargon, no hidden costs. Just honest updates and real collaboration throughout the entire development process.",
              styles: "bg-[#B94391]",
            },
            {
              title: "Future-Ready Tech",
              desc: "We don't chase trends — we build what lasts. Our solutions are designed to grow with your business and adapt to changing needs.",
              styles: "bg-[#D1B9F7] lg:rotate-[10deg] lg:translate-y-[3rem]",
            },
            {
              title: "Long-Term Partners",
              desc: "More than a project — we're here for the journey. We build lasting relationships focused on your continued success and growth.",
              styles:
                "bg-[#E85535] col-span-2 md:col-span-1 w-1/2 mx-auto md:w-full lg:rotate-[18deg] lg:translate-y-[8rem]",
            },
          ].map((item) => (
            <div
              className={`p-5 ${item.styles} h-full w-full flex items-center hover:rotate-[180deg] group text-center rounded-xl transition-all duration-300`}
              key={item.title}
            >
              <div className="space-y-3 group-hover:scale-y-[-1] group-hover:scale-x-[-1] transition-all duration-300">
                <p className="md:text-lg font-bold leading-tight">
                  {item.title}
                </p>
                <p className="text-[.9rem]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="pt-[5rem] lg:pt-[12rem] pb-[5rem] bg-gradient-to-b from-white to-gray-50">
        <div className="wrapper">
          <h2 data-aos="fade-up" className="section-heading text-center mb-8">
            Our CEO
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div data-aos="fade-right" className="md:w-1/3">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-full transform translate-x-4 translate-y-4"></div>
                <img 
                  src={ceoImage} 
                  alt="CEO of Byteserve" 
                  className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto relative z-10 shadow-xl"
                />
              </div>
              <div className="flex justify-center gap-4 mt-6">
                <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-all">
                  <Linkedin className="w-5 h-5 text-primary" />
                </a>
                <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-all">
                  <Twitter className="w-5 h-5 text-primary" />
                </a>
              </div>
            </div>
            <div data-aos="fade-left" className="md:w-2/3 space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">John Doe</h3>
              <p className="text-primary font-medium">Founder & Chief Executive Officer</p>
              <div className="space-y-4 text-gray-700">
                <p>
                  With over 15 years of experience in technology leadership, John brings a wealth of expertise in digital transformation, software development, and business strategy to Byteserve.
                </p>
                <p>
                  Prior to founding Byteserve, John held senior positions at leading tech companies where he led the development of innovative solutions across multiple industries. His vision for Byteserve is to create technology that not only solves complex business challenges but also drives meaningful growth and impact.
                </p>
                <p>
                  John holds a Master's degree in Computer Science and is passionate about leveraging emerging technologies to create sustainable business value. Under his leadership, Byteserve has grown into a trusted technology partner for businesses of all sizes.
                </p>
              </div>
              <Quote className="w-10 h-10 text-primary/20 mt-4" strokeWidth={0} />
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper pt-[4rem] lg:mt-[2rem]">
        <div
          data-aos="fade-up"
          className="relative min-h-[40vh] rounded-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black/40 md:bg-black/20 z-[-1]"></div>
          <img
            loading="lazy"
            src={howWeBuildCover}
            alt="hero banner"
            className="w-full h-full object-cover absolute inset-0 z-[-2]"
          />
          <div className="p-10 text-white text-start space-y-3">
            <h3 className="text-2xl font-semibold">Let's Build What's Next</h3>
            <p className="max-w-xs">
              Whether you're starting something new or ready to take your
              business to the next level, we're here to help you navigate the
              ever-evolving digital landscape.
            </p>
            <div className="pt-7">
              <ArrowLinkButton to="/contact">Let's Talk</ArrowLinkButton>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[4rem] wrapper space-y-3">
        <h2
          data-aos="fade-up"
          className="section-heading text-center md:mb-[2rem]"
        >
          Why Work With Us?
        </h2>
        <div className="flex flex-col gap-5">
          <div
            data-aos="fade-up"
            className="bg-[#6B308C] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <p className="md:text-lg text-white font-semibold">
                  We're not just a tech company — we're your digital partner. At
                  Byteserve, we help businesses of all sizes turn ideas into
                  digital solutions that are smart, scalable, and built to last.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs1}
              alt=""
              className="md:absolute right-0 top-1/2 md:-translate-y-1/2 max-h-[16rem] md:max-h-[25rem] object-contain"
            />
          </div>

          <div
            data-aos="fade-up"
            className="bg-[#FE7624] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <p className="md:text-lg text-white font-semibold">
                  From custom software and cloud computing to AI solutions and
                  mobile apps, we offer a comprehensive suite of services
                  designed to help your business stay connected, responsive, and
                  efficient — day or night.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs2}
              alt=""
              className="md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[24rem] object-contain"
            />
          </div>

          <div
            data-aos="fade-up"
            className="bg-[#F45C7B] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <p className="md:text-lg text-white font-semibold">
                  Our solutions combine beautiful, functional design with
                  powerful technology. We create clean, user-friendly interfaces
                  that feel natural and intuitive, while building robust systems
                  that deliver real value to your business.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs3}
              alt=""
              className="md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[22rem] object-contain"
            />
          </div>

          <div
            data-aos="fade-up"
            className="bg-[#507FD7] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <p className="md:text-lg text-white font-semibold">
                  Whether you need automation that handles repetitive tasks, IoT
                  solutions that connect physical and digital worlds, or game
                  development that creates engaging experiences — we have the
                  expertise to bring your vision to life.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs4}
              alt=""
              className="md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[22rem] object-contain"
            />
          </div>
        </div>
      </section>
      <BlogsSection />
      <ContactForm />
    </>
  );
};

export default Home;
