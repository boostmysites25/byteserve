import React, { lazy } from "react";
import bannerImg from "../assets/images/services-banner.webp";
import { ArrowLinkButton } from "../components/ArrowButtons";

const ContactForm = lazy(() => import("../components/ContactForm"));
const ServicesWeProvide = lazy(() => import("../components/website/ServicesWeProvide"));

const Services = () => {
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
              Technology Solutions That Solve Real Business Problems
            </h1>
            <p className="max-w-5xl text-center text-[1.1rem]">
              We build custom software that helps businesses work smarter, not harder. 
              From full-stack web applications and mobile apps to AI solutions and cloud 
              infrastructure, our services are designed to give you a competitive edge 
              in today's digital landscape.
            </p>
            <p className="max-w-5xl text-center text-[1.1rem] mt-2">
              Our team brings deep technical expertise across multiple domains, allowing 
              us to tackle complex challenges with confidence. Whether you need to automate 
              processes, create better user experiences, or harness the power of emerging 
              technologies, we have the skills and experience to deliver results that matter.
            </p>
            <ArrowLinkButton to="/contact">Contact Us</ArrowLinkButton>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="wrapper">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-4">Our Approach to Service Delivery</h2>
            <p className="max-w-3xl mx-auto text-gray-700">
              We don't just build what you ask for — we help you figure out what you actually need. 
              Our collaborative process ensures we understand your business goals before writing a 
              single line of code.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F7F7F9] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Discovery & Strategy</h3>
              <p className="text-gray-700">
                We start by understanding your business, users, and goals. This helps us 
                create a roadmap that aligns technology with your objectives.
              </p>
            </div>
            
            <div className="bg-[#F7F7F9] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Design & Development</h3>
              <p className="text-gray-700">
                Our team creates intuitive designs and builds robust, scalable solutions 
                using the right technologies for your specific needs.
              </p>
            </div>
            
            <div className="bg-[#F7F7F9] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Testing & Deployment</h3>
              <p className="text-gray-700">
                We rigorously test everything we build and ensure smooth deployment, 
                followed by ongoing support and optimization.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <ServicesWeProvide />
      
      <section className="py-16 bg-[#F7F7F9]">
        <div className="wrapper">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-4">Why Choose Our Services</h2>
            <p className="max-w-3xl mx-auto text-gray-700">
              We combine technical excellence with business understanding to deliver solutions 
              that create real value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Technical Excellence</h3>
              <p className="text-gray-700">
                Our developers stay at the cutting edge of technology to deliver 
                high-quality, future-proof solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Business Focus</h3>
              <p className="text-gray-700">
                We understand that technology is a means to an end — helping your 
                business grow and succeed.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Transparent Process</h3>
              <p className="text-gray-700">
                We keep you informed at every step, with clear communication and 
                no surprises along the way.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Long-term Partnership</h3>
              <p className="text-gray-700">
                We build relationships that last beyond project completion, providing 
                ongoing support and strategic guidance.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <ContactForm />
    </>
  );
};

export default Services;