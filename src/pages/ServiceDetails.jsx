import React, { lazy, useEffect } from "react";
import { Navigate, useParams, Link } from "react-router-dom";
import { services } from "../data/services";
import { ArrowRight, ChevronRight } from "lucide-react";
import { createUrlParam } from "../utils/helper";

const BlogsSection = lazy(() => import("../components/website/BlogsSection"));
const ContactForm = lazy(() => import("../components/ContactForm"));

const ServiceDetails = () => {
  const { name } = useParams();
  const data = services.find(
    (service) => createUrlParam(service.title) === name
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) return <Navigate to="/" />;

  return (
    <>
      {/* Hero Section with Glassmorphism */}
      <div className="pt-[10rem] pb-[2rem] bg-gradient-to-br from-[#f0f4ff] via-[#ffffff] to-[#f5f9ff] relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl -z-0 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-100/20 to-blue-100/20 rounded-full blur-3xl -z-0 transform -translate-x-1/4 translate-y-1/4"></div>

        <div className="wrapper relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center text-sm text-gray-500 mb-6 animate-fade-in">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-1" />
            <Link
              to="/services"
              className="hover:text-blue-600 transition-colors"
            >
              Services
            </Link>
            <ChevronRight className="w-4 h-4 mx-1" />
            <span className="text-blue-600 font-medium">{data.title}</span>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Title with Animated Underline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 relative inline-block">
              {data.title}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            </h1>

            {/* Hero Image with Floating Card Effect */}
            <div className="relative mt-4 mb-16 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl transform rotate-1 scale-[1.01] transition-transform duration-300 group-hover:scale-[1.02] group-hover:rotate-2"></div>
              <img
                src={data.detailsPageImages.first}
                className="w-full aspect-video object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-[1.01] z-10 relative"
                alt={data.title}
              />
            </div>

            {/* First Content Section with Animation */}
            <div
              className="prose prose-lg max-w-none mb-16 bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-sm"
              dangerouslySetInnerHTML={{ __html: data.html.firstSection }}
            ></div>
          </div>
        </div>
      </div>

      {/* Second Section with Alternating Layout */}
      <div className="py-16 bg-white relative">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMGYwZjAiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTZWMGg2djMwem0tNiAwaC02VjBoNnYzMHptLTYgMGgtNlYwaDZ2MzB6bS02IDBoLTZWMGg2djMweiIvPjwvZz48L2c+PC9zdmc+')] opacity-5"></div>

        <div className="wrapper relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Image with Hover Effect */}
              <div className="w-full h-full md:w-1/2 group perspective">
                <div className="relative transform transition-all duration-500 group-hover:rotate-y-6">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur"></div>
                  <img
                    src={data.detailsPageImages.second}
                    className="relative w-full h-full aspect-square object-cover rounded-xl shadow-md"
                    alt={data.title}
                  />
                </div>
              </div>

              {/* Content with Animated Border */}
              <div className="w-full md:w-1/2 p-6 border border-transparent hover:border-blue-100 rounded-xl transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-white to-blue-50/50">
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: data.html.secondSection }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section with Modern Layout */}
      <div className="py-16 bg-gradient-to-b from-white to-blue-50/30">
        <div className="wrapper">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col-reverse md:flex-row items-center gap-12">
              {/* Content with Card Effect */}
              <div className="w-full md:w-1/2 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: data.html.thirdSection }}
                ></div>

                {/* CTA Button */}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Image with Floating Effect */}
              <div className="w-full h-full md:w-1/2 relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-md animate-pulse"></div>
                <img
                  src={data.detailsPageImages.third}
                  className="w-full h-full aspect-square object-cover rounded-xl relative z-10 hover:scale-[1.02] transition-transform duration-300"
                  alt={data.title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Content Section */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="wrapper">
          <h2 className="text-3xl font-bold text-center mb-12 relative">
            <span className="relative z-10">Related Insights</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
          </h2>
          <BlogsSection />
        </div>
      </div>

      {/* Contact Section */}
      <ContactForm />
    </>
  );
};

export default ServiceDetails;
