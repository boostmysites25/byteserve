import React, { lazy } from "react";
import ReactPlayer from "react-player";
import bannerVid from "../assets/vids/banner.mp4";
import {
  Ambulance,
  BrainCircuit,
  BriefcaseBusiness,
  Cloudy,
  CodeXml,
  Cpu,
  Quote,
  StickyNote,
  Store,
  Tv,
  Zap,
  Shield,
  BarChart,
  Users,
  Linkedin,
  Twitter,
} from "lucide-react";
import howWeBuildCover from "../assets/images/how-we-build.webp";
import whyWorkWithUs1 from "../assets/images/whyworkwithus1.png";
import whyWorkWithUs2 from "../assets/images/whyworkwithus2.png";
import whyWorkWithUs3 from "../assets/images/whyworkwithus3.png";
import whyWorkWithUs4 from "../assets/images/whyworkwithus4.png";
import ceoImage from "../assets/images/aboutus-1.png";
import LandingServices from "../components/landingPage/LandingServices";
import { ArrowScrollButton } from "../components/ArrowButtons";
import Portfolio from "../components/Portfolio";
import bannerThump from "../assets/vids/thumbnail.webp";
import { Link } from "react-router-dom";

const ContactForm = lazy(() => import("../components/ContactForm"));
const Testimonials = lazy(() => import("../components/Testimonials"));

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

const LandingPage = ({ page }) => {
  const isWeb = page === "web";
  const [isBannerLoading, setIsBannerLoading] = React.useState(true);
  return (
    <>
      <section id="banner" className="relative min-h-screen bg-black/50">
        <div className="pt-[13rem] pb-[5rem]">
          <div className="wrapper flex flex-col gap-7 justify-center h-full">
            <div
              data-aos="fade-up"
              className="flex items-center text-start self-start text-white px-4 py-2 rounded-full border border-white/50 backdrop-blur-sm bg-black/20"
            >
              <CodeXml className="inline mr-2" />
              <span>{isWeb ? "Web Development" : "App Development"}</span>
            </div>
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="heading text-white"
            >
              Technology Solutions That
              <span className="gradient-text font-bold">
                {" "}
                {isWeb ? "Drive Business Growth" : "Transform User Experience"}
              </span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-white text-lg max-w-3xl backdrop-blur-sm bg-black/10 p-4 rounded-lg"
            >
              {isWeb
                ? `We build modern, high-performance websites and web applications that 
                solve real business problems. Our solutions combine clean code, intuitive 
                design, and strategic thinking to deliver measurable results.`
                : `We create powerful, user-centered mobile applications that connect with 
                your audience and streamline operations. From native iOS and Android apps 
                to cross-platform solutions, we build technology that works for you.`}
            </p>
            <div
              className="mt-4 flex flex-col sm:flex-row gap-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <ArrowScrollButton to="services">
                Explore Our Services
              </ArrowScrollButton>
              <ArrowScrollButton to="contact" variant="secondary">
                Get a Free Quote
              </ArrowScrollButton>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-[-1]"></div>
        {isBannerLoading && (
          <img
            src={bannerThump}
            className="absolute inset-0 object-cover h-full w-full z-[-1] brightness-75"
            alt=""
          />
        )}
        <div className={isBannerLoading ? "opacity-0" : "opacity-100"}>
          <ReactPlayer
            url={bannerVid}
            playing
            muted
            loop
            playsinline
            width="100%"
            height="100%"
            className="react-player"
            onReady={() => setIsBannerLoading(false)}
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

      <section className="py-12 bg-white">
        <div className="wrapper">
          <h2 data-aos="fade-up" className="section-heading text-center mb-8">
            Why Choose Byteserve?
          </h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div
              data-aos="fade-up"
              className="p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-primary/30"
            >
              <Zap className="w-10 h-10 mx-auto text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Efficient development processes that get your solution to market
                quickly
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-primary/30"
            >
              <Shield className="w-10 h-10 mx-auto text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">
                Built with security best practices and rigorous testing
                standards
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-primary/30"
            >
              <BarChart className="w-10 h-10 mx-auto text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Data-Driven</h3>
              <p className="text-gray-600">
                Solutions that provide actionable insights to improve your
                business
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-primary/30"
            >
              <Users className="w-10 h-10 mx-auto text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">User-Focused</h3>
              <p className="text-gray-600">
                Designed with your users in mind for maximum engagement and
                satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm headline="Book A Free Strategy Session" />

      <section className="bg-[#F7F7F9]">
        <Testimonials />
      </section>

      <LandingServices isWeb={isWeb} />

      <Portfolio page={page} />

      <section className="py-[5rem] bg-gradient-to-b from-white to-gray-100">
        <div className="wrapper space-y-5">
          <h2 data-aos="fade-up" className="section-heading text-center">
            Industries We Serve
          </h2>
          <p
            data-aos="fade-up"
            className="text-center max-w-3xl mx-auto text-gray-700"
          >
            We've helped businesses across multiple sectors leverage technology
            to solve complex challenges and create new opportunities. Our
            industry-specific expertise allows us to build solutions that
            address your unique requirements.
          </p>
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {industries.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                  key={item.title}
                  className="text-center p-6 bg-white rounded-xl space-y-4 hover:shadow-lg transition-all hover:bg-gradient-to-b hover:from-white hover:to-gray-50 border border-gray-100"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <p className="font-medium text-[.9rem] whitespace-pre-line">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="text-center pt-8">
            <p className="text-gray-700 mb-4">
              Don't see your industry? We work with businesses of all types.
            </p>
            <ArrowScrollButton to="contact">
              Let's Discuss Your Needs
            </ArrowScrollButton>
          </div>
        </div>
      </section>

      <section className="pt-[4rem] pb-[2rem] bg-gradient-to-b from-white to-gray-50">
        <h2 data-aos="fade-up" className="wrapper section-heading text-center">
          Our Core Values
        </h2>
        <p
          data-aos="fade-up"
          className="text-center max-w-3xl mx-auto wrapper mb-10 text-gray-700"
        >
          These principles guide everything we do, from how we build technology
          to how we work with our clients
        </p>
        <div
          data-aos="fade-up"
          className="wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-[3rem] mt-10"
        >
          {[
            {
              title: "Collaborative Partnerships",
              desc: "We work with you, not just for you. Your success is our success, and we're committed to building relationships based on trust and mutual growth.",
              styles:
                "bg-[#7C42DA] lg:rotate-[-18deg] lg:translate-y-[8rem] text-white",
            },
            {
              title: "Agility and Adaptability",
              desc: "Technology changes fast, and so do we. We stay flexible, embrace new challenges, and pivot quickly to deliver solutions that keep you ahead.",
              styles:
                "bg-[#F8B000] lg:rotate-[-10deg] lg:translate-y-[3rem] text-white",
            },
            {
              title: "Technical Excellence",
              desc: "We're passionate about quality code, elegant architecture, and solutions that stand the test of time. We never cut corners on craftsmanship.",
              styles: "bg-[#B94391] text-white",
            },
            {
              title: "User-Centered Design",
              desc: "We believe great technology should serve people, not the other way around. Every solution we build puts the user experience first.",
              styles:
                "bg-[#D1B9F7] lg:rotate-[10deg] lg:translate-y-[3rem] text-white",
            },
            {
              title: "Transparency and Accountability",
              desc: "No surprises, no excuses. We communicate clearly, take ownership of our work, and deliver on our promises every step of the way.",
              styles:
                "bg-[#E85535] col-span-2 md:col-span-1 w-1/2 mx-auto md:w-full lg:rotate-[18deg] lg:translate-y-[8rem] text-white",
            },
          ].map((item) => (
            <div
              className={`p-5 ${item.styles} h-full w-full flex items-center hover:rotate-[180deg] group text-center rounded-xl transition-all duration-300 shadow-lg`}
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

      <section className="py-[5rem] bg-gradient-to-b from-white to-gray-50">
        <div className="wrapper">
          <h2 data-aos="fade-up" className="section-heading text-center mb-10">
            Our CEO & Founders
          </h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {/* Sumit Bramhane Patil */}
            <div
              data-aos="fade-up"
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
            >
              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 rounded-full transform translate-x-2 translate-y-2"></div>
                  <img
                    src={'/images/founder1.webp'}
                    alt="Mr. Sumit Bramhane Patil"
                    className="rounded-full w-48 h-48 object-cover relative z-10 border-4 border-white shadow-xl"
                  />
                </div>
              </div>
              <div className="p-6 text-center flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Mr. Sumit Bramhane Patil
                </h3>
                <p className="text-primary font-medium mb-4">
                  Co-Founder & CEO
                </p>
                <p className="text-gray-700 mb-6">
                  Leading Byteserve with a vision to transform how businesses
                  leverage technology. Sumit brings strategic insight and
                  business acumen to every client partnership.
                </p>
                <div className="flex justify-center gap-4 mt-auto">
                  {/* <a
                    href="#"
                    className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-all"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href="#"
                    className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-all"
                  >
                    <Twitter className="w-5 h-5 text-primary" />
                  </a> */}
                </div>
              </div>
            </div>

            {/* Amit Bramhane Patil */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
            >
              <div className="bg-gradient-to-r from-secondary/20 to-primary/20 p-8 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-20 rounded-full transform translate-x-2 translate-y-2"></div>
                  <img
                    src={'/images/founder2.webp'}
                    alt="Mr. Amit Bramhane Patil"
                    className="rounded-full w-48 h-48 object-cover relative z-10 border-4 border-white shadow-xl"
                  />
                </div>
              </div>
              <div className="p-6 text-center flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Mr. Amit Bramhane Patil
                </h3>
                <p className="text-primary font-medium mb-4">
                  Co-Founder & CTO
                </p>
                <p className="text-gray-700 mb-6">
                  The technical mastermind behind Byteserve's innovative
                  solutions. Amit's expertise in software architecture and
                  emerging technologies drives our technical excellence.
                </p>
                {/* <div className="flex justify-center gap-4 mt-auto">
                  <Link
                    to=""
                    className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-all"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                  </Link>
                  <Link
                    to=""
                    className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-all"
                  >
                    <Twitter className="w-5 h-5 text-primary" />
                  </Link>
                </div> */}
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="mt-12 max-w-3xl mx-auto text-center"
          >
            <Quote
              className="w-12 h-12 text-primary/30 mx-auto mb-4"
              strokeWidth={0}
            />
            <p className="text-lg italic text-gray-700">
              "At Byteserve, we believe in the power of technology to transform
              businesses. Our commitment is to deliver solutions that not only
              meet today's needs but anticipate tomorrow's challenges."
            </p>
          </div>
        </div>
      </section>

      <section className="wrapper pt-[4rem] lg:mt-[4rem]">
        <div
          data-aos="fade-up"
          className="relative min-h-[50vh] rounded-xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-[-1]"></div>
          <img
            loading="lazy"
            src={howWeBuildCover}
            alt="Development process"
            className="w-full h-full object-cover absolute inset-0 z-[-2]"
          />
          <div className="p-10 md:p-16 text-white text-start space-y-5 max-w-2xl">
            <h3 className="text-3xl font-bold">Our Development Process</h3>
            <p className="text-lg max-w-md">
              We follow a structured yet flexible approach that ensures clear
              communication, quality deliverables, and solutions that truly meet
              your business needs.
            </p>
            <ul className="space-y-3 max-w-md">
              <li className="flex items-start">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  1
                </span>
                <span>
                  <strong>Discovery & Planning</strong> - We understand your
                  goals and define the roadmap
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  2
                </span>
                <span>
                  <strong>Design & Prototyping</strong> - We create the
                  blueprint for your solution
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  3
                </span>
                <span>
                  <strong>Development & Testing</strong> - We build and validate
                  with rigorous quality standards
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  4
                </span>
                <span>
                  <strong>Deployment & Support</strong> - We launch and provide
                  ongoing assistance
                </span>
              </li>
            </ul>
            <div className="pt-7">
              <ArrowScrollButton to="contact">
                Start Your Project
              </ArrowScrollButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[5rem] bg-gradient-to-b from-white to-gray-50">
        <div className="wrapper">
          <h2 data-aos="fade-up" className="section-heading text-center mb-8">
            Meet Our Leadership
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
                <a
                  href="#"
                  className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-all"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="#"
                  className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-all"
                >
                  <Twitter className="w-5 h-5 text-primary" />
                </a>
              </div>
            </div>
            <div data-aos="fade-left" className="md:w-2/3 space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">John Doe</h3>
              <p className="text-primary font-medium">
                Founder & Chief Executive Officer
              </p>
              <div className="space-y-4 text-gray-700">
                <p>
                  With over 15 years of experience in technology leadership,
                  John brings a wealth of expertise in digital transformation,
                  software development, and business strategy to Byteserve.
                </p>
                <p>
                  Prior to founding Byteserve, John held senior positions at
                  leading tech companies where he led the development of
                  innovative solutions across multiple industries. His vision
                  for Byteserve is to create technology that not only solves
                  complex business challenges but also drives meaningful growth
                  and impact.
                </p>
                <p>
                  John holds a Master's degree in Computer Science and is
                  passionate about leveraging emerging technologies to create
                  sustainable business value. Under his leadership, Byteserve
                  has grown into a trusted technology partner for businesses of
                  all sizes.
                </p>
                <div className="pt-4">
                  <ArrowScrollButton to="contact">
                    Connect With Our Team
                  </ArrowScrollButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[6rem] pb-[4rem] wrapper space-y-3">
        <h2 data-aos="fade-up" className="section-heading text-center">
          Why Work With Us?
        </h2>
        <p
          data-aos="fade-up"
          className="text-center max-w-3xl mx-auto mb-10 text-gray-700"
        >
          We combine technical expertise with business understanding to deliver
          solutions that drive real results
        </p>
        <div className="flex flex-col gap-8">
          <div
            data-aos="fade-up"
            className="bg-[#6B308C] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden shadow-xl"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Problem Solvers, Not Just Coders
                </h3>
                <p className="md:text-lg text-white">
                  We don't just write code – we solve problems. Our team brings
                  together technical expertise and business understanding to
                  create solutions that make a real difference. We take the time
                  to understand your goals and challenges before proposing the
                  right technology approach.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs1}
              alt="Problem solving team"
              className="md:absolute right-0 top-1/2 md:-translate-y-1/2 max-h-[16rem] md:max-h-[25rem] object-contain"
            />
          </div>

          <div
            data-aos="fade-up"
            className="bg-[#FE7624] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden shadow-xl"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <h3 className="text-2xl font-bold text-white mb-4">
                  End-to-End Expertise
                </h3>
                <p className="md:text-lg text-white">
                  Our full-stack capabilities mean we can handle every aspect of
                  your project – from front-end design to back-end architecture,
                  database optimization, and cloud infrastructure. This
                  integrated approach ensures a seamless experience and
                  consistent quality throughout.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs2}
              alt="Full-stack development"
              className="md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[24rem] object-contain"
            />
          </div>

          <div
            data-aos="fade-up"
            className="bg-[#F45C7B] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden shadow-xl"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Future-Proof Solutions
                </h3>
                <p className="md:text-lg text-white">
                  We build with the future in mind. Our solutions are designed
                  to scale as your business grows, adapt to changing
                  requirements, and integrate with new technologies. We use
                  modern frameworks and best practices to ensure your investment
                  continues to deliver value for years to come.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs3}
              alt="Scalable solutions"
              className="md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[22rem] object-contain"
            />
          </div>

          <div
            data-aos="fade-up"
            className="bg-[#507FD7] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden shadow-xl"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Cross-Industry Experience
                </h3>
                <p className="md:text-lg text-white">
                  Our experience spans multiple industries and technologies,
                  giving us a unique perspective on what works. We've helped
                  startups launch their first products, supported growing
                  businesses with digital transformation, and partnered with
                  established companies to modernize their systems.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs4}
              alt="Industry expertise"
              className="md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[22rem] object-contain"
            />
          </div>
        </div>
      </section>
      <ContactForm id="contact" />
    </>
  );
};

export default LandingPage;
