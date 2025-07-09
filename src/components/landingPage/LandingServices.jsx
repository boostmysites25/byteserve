import React from "react";
import {
  appDevelopmentServices,
  webDevelopmentServices,
} from "../../data/constant";
import { ArrowScrollButton } from "../ArrowButtons";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const LandingServices = ({ isWeb }) => {
  const services = isWeb ? webDevelopmentServices : appDevelopmentServices;
  return (
    <div id="services" className="py-[5rem] bg-[#F7F7F9]">
      <div className="wrapper">
        <h2 data-aos="fade-up" className="section-heading text-center">
          {isWeb
            ? "Web Development Solutions"
            : "Mobile App Development Solutions"}
        </h2>
        <p
          data-aos="fade-up"
          className="text-center max-w-3xl mx-auto mt-4 mb-10 text-gray-700"
        >
          {isWeb
            ? "We build modern, scalable web applications that solve real business problems and deliver measurable results."
            : "We create powerful, user-friendly mobile applications that connect with your audience and streamline operations."}
        </p>

        <div data-aos="fade-up" className="grid md:grid-cols-2 gap-8">
          {services.map((item, i) => (
            <div
              key={item.title}
              className="group relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10"></div>
              <img
                src={item.image}
                className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-105"
                alt={item.title}
              />
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-white">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white/90 mb-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <ArrowScrollButton to="contact">Request a quote</ArrowScrollButton>
        </div>

        <div className="mt-16 p-8 bg-white rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Our Technical Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <h4 className="font-medium mb-3">Frontend</h4>
              <div className="text-gray-700 space-y-1 text-sm">
                <p>React.js</p>
                <p>Next.js</p>
                <p>Vue.js</p>
                <p>Angular</p>
                <p>Tailwind CSS</p>
              </div>
            </div>

            <div className="text-center">
              <h4 className="font-medium mb-3">Backend</h4>
              <div className="text-gray-700 space-y-1 text-sm">
                <p>Node.js</p>
                <p>Express</p>
                <p>Python/Django</p>
                <p>PHP/Laravel</p>
                <p>.NET Core</p>
              </div>
            </div>

            <div className="text-center">
              <h4 className="font-medium mb-3">Mobile</h4>
              <div className="text-gray-700 space-y-1 text-sm">
                <p>React Native</p>
                <p>Flutter</p>
                <p>Swift</p>
                <p>Kotlin</p>
                <p>Ionic</p>
              </div>
            </div>

            <div className="text-center">
              <h4 className="font-medium mb-3">Infrastructure</h4>
              <div className="text-gray-700 space-y-1 text-sm">
                <p>AWS</p>
                <p>Azure</p>
                <p>Google Cloud</p>
                <p>Docker</p>
                <p>Kubernetes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingServices;
