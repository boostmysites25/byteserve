import React, { lazy } from "react";
import bannerImg from "../assets/images/aboutus-banner.webp";
import ourValuesBg from "../assets/images/our-values-bg.jpeg";
import { ArrowRight, MessagesSquare, Lightbulb, Code, BookOpen } from "lucide-react";
import img1 from "../assets/images/aboutus-1.png";
import img2 from "../assets/images/aboutus-2.png";
import { Link } from "react-router-dom";
import { ArrowLinkButton } from "../components/ArrowButtons";

const ContactForm = lazy(() => import("../components/ContactForm"));
const WorkProcess = lazy(() => import("../components/WorkProcess"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const ServicesWeProvide = lazy(() =>
  import("../components/website/ServicesWeProvide")
);

const AboutUs = () => {
  return (
    <>
      <section
        className="min-h-screen relative flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 h-full w-full">
          <div
            data-aos="fade-up"
            className="pt-[10rem] pb-[3rem] h-full wrapper text-white z-10 flex flex-col gap-3 justify-center items-center"
          >
            <h1 className="heading-2 max-w-5xl text-center">
              Built on Ideas. Driven by Innovation.
            </h1>
            <p className="max-w-5xl text-center text-[1.1rem]">
              At Byteserve, we're a group of creative technologists, engineers, and digital 
              problem-solvers who believe that smart technology can change the way businesses 
              work for the better. We're not here to sell buzzwords or chase trends — we're 
              here to build real, reliable solutions that move the needle.
            </p>
            <ArrowLinkButton to="/contact">Contact Us</ArrowLinkButton>
          </div>
        </div>
      </section>
      
      <section className="py-[5rem] bg-white">
        <div className="wrapper">
          <div className="grid md:grid-cols-2 gap-10">
            <div data-aos="fade-up">
              <h2 className="section-heading mb-6">Our Story</h2>
              <p className="mb-4 text-gray-700">
                Every company has a beginning. Ours started with a few late nights, a shared 
                love of clean code, and a genuine desire to build better digital experiences. 
                We didn't want to be another agency that churns out templated software. We 
                wanted to craft things that actually made life easier — for businesses and 
                their customers.
              </p>
              <p className="text-gray-700">
                Over the years, our team has grown, our services have expanded, and our toolbox 
                has evolved. But our mission has stayed the same: Build thoughtfully. Solve real 
                problems. Never settle for average.
              </p>
            </div>
            <div data-aos="fade-up" className="flex items-center">
              <p className="text-gray-700 text-lg">
                What started as a small team of passionate developers has grown into a full-service 
                digital agency trusted by startups, mid-sized companies, and global brands. From 
                building sleek mobile apps to powering complex backend systems, we help businesses 
                use technology as a serious advantage — not just a nice-to-have.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <ServicesWeProvide />
      
      <section className="bg-[#F7F7F9]">
        <Testimonials />
      </section>
      
      <section
        className="py-[7rem]"
        style={{ backgroundImage: `url(${ourValuesBg})` }}
      >
        <div className="wrapper">
          <h2
            data-aos="fade-up"
            className="section-heading text-center text-white mb-8"
          >
            What We Stand For
          </h2>
          <p data-aos="fade-up" className="text-white text-center max-w-3xl mx-auto mb-10">
            We're not big on corporate speak or cookie-cutter approaches. 
            Here's what actually matters to us:
          </p>
          <div className="grid md:grid-cols-4 gap-7 mt-7">
            {[
              {
                title: "Real Collaboration",
                desc: "We don't just work for you — we work with you. We believe the best results come from conversations, not assumptions.",
                Icon: MessagesSquare,
              },
              {
                title: "Simplicity & Clarity",
                desc: "Technology can be complicated. We keep it clear, streamlined, and focused on what really matters to your business.",
                Icon: Lightbulb,
              },
              {
                title: "Design with Purpose",
                desc: "We love beautiful interfaces — but only if they serve the user. Good design is functional first, pretty second.",
                Icon: Code,
              },
              {
                title: "Always Learning",
                desc: "Tech never stands still, and neither do we. We're always exploring new tools, trends, and ideas to keep our clients ahead of the game.",
                Icon: BookOpen,
              },
            ].map(({ title, desc, Icon }) => {
              return (
                <div
                  data-aos="fade-up"
                  key={title}
                  className="p-5 bg-white/5 backdrop-blur-sm text-white space-y-3 rounded-xl"
                >
                  <GradientIcon>
                    <Icon stroke="url(#myGradient)" strokeWidth={1} size={45} />
                  </GradientIcon>
                  <h6 className="text-xl font-semibold">{title}</h6>
                  <p>{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      <section className="py-[5rem] bg-white">
        <div className="wrapper">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="section-heading mb-6">Who We Are</h2>
            <p className="max-w-3xl mx-auto text-gray-700">
              We're a close-knit team made up of developers, designers, strategists, and 
              marketers — all passionate about their craft. Each of us brings something unique 
              to the table, but we all share the same mindset: Curious, collaborative, and 
              committed to doing great work.
            </p>
            <p className="max-w-3xl mx-auto text-gray-700 mt-4">
              Whether we're debugging a complex system, sketching out a user journey, or 
              brainstorming a digital campaign — we show up fully, give a damn, and take 
              pride in everything we build.
            </p>
          </div>
          
          <div data-aos="fade-up" className="bg-[#F7F7F9] p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6">Why Clients Stick With Us</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="text-green-500 font-bold text-xl">✓</div>
                <p>We listen first — no assumptions, no egos.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-green-500 font-bold text-xl">✓</div>
                <p>We explain things in plain language — not tech jargon.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-green-500 font-bold text-xl">✓</div>
                <p>We care just as much about the user experience as the backend code.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-green-500 font-bold text-xl">✓</div>
                <p>We deliver on time — and we don't disappear when the project is done.</p>
              </div>
              <div className="flex items-start gap-3 md:col-span-2">
                <div className="text-green-500 font-bold text-xl">✓</div>
                <p>We treat every project like it actually matters — because to us, it does.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="pt-[4rem] wrapper">
        <div
          data-aos="fade-up"
          className="max-w-5xl mx-auto rounded-2xl overflow-hidden grid md:grid-cols-2"
        >
          <div className="overflow-hidden relative">
            <img
              src={img1}
              className="h-full w-full object-cover"
              alt="About Us"
            />
            <div className="aspect-square w-[14rem] sm:w-[16rem] flex flex-col justify-between bg-gradient-to-tr p-7 from-[#CD21E9] via-[#E03D3D] to-[#FFBD12] absolute right-0 bottom-0">
              <h4 className="text-xl font-semibold text-white">
                Hire Developers for Your Next Project
              </h4>
              <Link
                to="/contact"
                className="font-medium text-[.9rem] flex items-center gap-2 mt-5 w-fit text-white hover:text-primary transition-colors duration-200"
              >
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="">
            <div className="grid sm:grid-cols-2 h-fit relative">
              <img
                src={img2}
                className="hidden sm:block h-full w-full object-cover"
                alt="About Us"
              />
              <div className="py-[3rem] px-7 sm:aspect-square flex flex-col justify-between bg-gradient-to-tr sm:p-7 from-[#992FED] to-[#2F80ED]">
                <h4 className="text-xl font-semibold text-white">
                  Looking Ahead
                </h4>
                <p className="text-white text-sm mt-3">
                  Technology is moving fast — and that's exactly where we like to be.
                </p>
                <Link
                  to="/contact"
                  className="font-medium text-[.9rem] flex items-center gap-2 mt-5 w-fit text-white hover:text-primary transition-colors duration-200"
                >
                  Contact Us <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="p-7 h-full text-white bg-[#131426] flex flex-col gap-3">
              <p className="border-b border-dotted border-white/20 pb-3">
                From AI and automation to cloud-native platforms and IoT, we're excited about what's next.
              </p>
              <p className="border-b border-dotted border-white/20 pb-3">
                We're always ready to help our clients tap into what's possible.
              </p>
              <p className="border-b border-dotted border-white/20 pb-3">
                We don't claim to have all the answers, but we ask the right questions.
              </p>
              <div className="mt-7 self-end">
                <Link
                  to="/blogs"
                  className="font-medium capitalize text-[.9rem] flex items-center gap-2 w-fit text-white hover:text-primary transition-colors duration-200"
                >
                  Read more in our blogs <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="pt-[4rem]">
        <WorkProcess />
      </section>
      
      <ContactForm />
    </>
  );
};

export default AboutUs;

const GradientIcon = ({ children }) => (
  <svg width="48" height="48">
    <defs>
      <linearGradient id="myGradient" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="#9935E8" />
        <stop offset="100%" stopColor="#F8B000" />
      </linearGradient>
    </defs>
    {children}
  </svg>
);