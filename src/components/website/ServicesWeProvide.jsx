import React from "react";
import { services } from "../../data/services";
import { Link } from "react-router-dom";
import { ArrowLinkButton } from "../ArrowButtons";
import { createUrlParam } from "../../utils/helper";

const ServicesWeProvide = ({ length }) => {
  return (
    <div id="services" className="py-[4rem] wrapper">
      <h2 data-aos="fade-up" className="section-heading text-center">
        Services We Provide
      </h2>
      <div data-aos="fade-up" className="mt-10 pb-5 grid md:grid-cols-2 gap-5">
        {services.slice(0, length).map((item, i) => (
          <Link
            key={item.title}
            to={`/services/${createUrlParam(item.title)}`}
            className={`group mx-auto h-fit md:aspect-video overflow-hidden space-y-6 p-5 rounded-xl transition-all duration-300
              ${item.bgColors} ${
              length % 2 !== 0 && "last:md:col-span-2 last:md:w-1/2 "
            }
            `}
          >
            <div className="grid sm:grid-cols-[70%_auto] h-full items-center gap-4">
              <div className="h-full flex flex-col gap-3 justify-between">
                <div className="space-y-3">
                  <p className="text-xl font-medium">{item.title}</p>
                  <div className="block sm:hidden relative w-20 h-20 mx-auto">
                    {/* Outer glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-full opacity-80 animate-pulse"></div>
                    {/* Inner circle with icon */}
                    <div className="absolute inset-[3px] bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                      <item.icon
                        size={32}
                        strokeWidth={1.5}
                        className="text-white"
                      />
                    </div>
                  </div>
                  <p>{item.shortDesc}</p>
                </div>
                <div className="mt-2 flex gap-2 flex-wrap">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white text-sm py-2 px-3 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden sm:block relative w-28 h-28">
                {/* Outer glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-full opacity-80 animate-pulse"></div>
                {/* Inner circle with icon */}
                <div className="absolute inset-[4px] bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  <item.icon
                    size={48}
                    strokeWidth={1.5}
                    className="text-white"
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {length ? (
        <ArrowLinkButton to="/services">View All</ArrowLinkButton>
      ) : (
        <ArrowLinkButton to="/contact">Request a quote</ArrowLinkButton>
      )}
    </div>
  );
};

export default ServicesWeProvide;
