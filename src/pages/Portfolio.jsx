import React, { useState, useEffect } from "react";
import { appPortfolio, webPortfolio } from "../data/constant";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [displayedPortfolio, setDisplayedPortfolio] = useState([]);
  
  // Process portfolio data once
  const webItems = webPortfolio.map(item => ({ ...item, type: "web" }));
  const appItems = appPortfolio.map(item => ({ ...item, type: "app" }));
  const allItems = [...webItems, ...appItems];
  
  // Filter portfolio based on active category
  useEffect(() => {
    if (activeCategory === "all") {
      setDisplayedPortfolio(allItems);
    } else if (activeCategory === "web") {
      setDisplayedPortfolio(webItems);
    } else if (activeCategory === "app") {
      setDisplayedPortfolio(appItems);
    }
  }, [activeCategory]);

  return (
    <div className="pt-[9rem] pb-[4rem]">
      <div className="wrapper flex flex-col items-start sm:items-center gap-5">
        <h1 
          data-aos="fade-up"
          className="section-heading max-w-[60rem] mx-auto text-start sm:text-center"
        >
          Our Portfolio
        </h1>
        <p 
          data-aos="fade-up" 
          data-aos-delay="100"
          className="text-lg text-start sm:text-center max-w-[50rem] mx-auto"
        >
          Explore our diverse range of successful projects across web and mobile platforms.
        </p>
        
        {/* Category Filter Buttons */}
        <div 
          data-aos="fade-up" 
          data-aos-delay="200"
          className="flex flex-wrap justify-center gap-4 mt-6 mb-8"
        >
          <button 
            onClick={() => setActiveCategory("all")}
            className={`px-6 py-2 rounded-full transition-all ${
              activeCategory === "all" 
                ? "bg-primary text-white" 
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            All Projects
          </button>
          <button 
            onClick={() => setActiveCategory("web")}
            className={`px-6 py-2 rounded-full transition-all ${
              activeCategory === "web" 
                ? "bg-primary text-white" 
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            Web Development
          </button>
          <button 
            onClick={() => setActiveCategory("app")}
            className={`px-6 py-2 rounded-full transition-all ${
              activeCategory === "app" 
                ? "bg-primary text-white" 
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            App Development
          </button>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto mt-5 w-full">
          {displayedPortfolio.map(({ img, id, title, link, type }) => (
            <div
              data-aos="fade-up"
              key={`${type}-${id}`}
              className="p-3 border-2 border-secondary group rounded-xl aspect-square shadow-inner_shadow shadow-secondary/20"
            >
              <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
                <div className="overflow-hidden relative h-full rounded-xl">
                  <div className="absolute z-[5] top-0 w-full h-full bg-gradient-to-b from-transparent to-secondary/5"></div>
                  <img
                    loading="lazy"
                    src={img}
                    width="200"
                    height="200"
                    className={`-z-10 h-full w-full object-cover group-hover:scale-110 transition-all duration-200 rounded-xl`}
                    alt={title}
                  />
                  <h3 className="text-xl z-20 absolute p-3 bottom-0 left-0 w-full bg-secondary text-center text-white">
                    {title}
                  </h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;