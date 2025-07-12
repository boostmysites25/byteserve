import React, { lazy, useContext } from "react";
import banner from "../assets/images/contactus-banner.webp";
import { Mail, MapPin, PhoneCall, Clock, MessageSquare } from "lucide-react";
import { companyDetails } from "../data/constant";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { SpinnerContext } from "../components/SpinnerContext";

const MapComponent = lazy(() => import("../components/website/MapComponent"));

const ContactUs = () => {
  const { setSpinner } = useContext(SpinnerContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // handle form submit click
  const handleFormSubmit = async (values) => {
    setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone: " + values.phone + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: values.subject,
      body: emailBody,
    };

    await fetch("https://smtp-api-tawny.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Email sent successfully");
          reset();
          navigate("/thank-you");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };
  
  return (
    <div className="">
      <img
        src={banner}
        className="w-full aspect-[5/3] md:aspect-[6/2] object-cover object-bottom"
        alt="Contact Us Banner"
      />
      
      <section className="bg-secondary/5">
        <div className="wrapper py-[4rem]">
          <div
            data-aos="fade-up"
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-7"
          >
            <div className="flex items-start gap-3">
              <div className="w-[3.5rem] min-w-[3.5rem] flex items-center justify-center bg-gradient-to-r from-[#e5497c] to-[#495df3] rounded-full aspect-square">
                <MapPin className="text-white" size={25} />
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Location</p>
                <p className="max-w-xs">{companyDetails.address}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-[3.5rem] min-w-[3.5rem] flex items-center justify-center bg-gradient-to-r from-[#e5497c] to-[#495df3] rounded-full aspect-square">
                <PhoneCall className="text-white" size={25} />
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Phone Number</p>
                <Link to={`tel:${companyDetails.phone}`} className="hover:text-primary transition-colors">
                  {companyDetails.phone}
                </Link>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-[3.5rem] min-w-[3.5rem] flex items-center justify-center bg-gradient-to-r from-[#e5497c] to-[#495df3] rounded-full aspect-square">
                <Mail className="text-white" size={25} />
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Email Us</p>
                <Link to={`mailto:${companyDetails.email}`} className="hover:text-primary transition-colors">
                  {companyDetails.email}
                </Link>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-[3.5rem] min-w-[3.5rem] flex items-center justify-center bg-gradient-to-r from-[#e5497c] to-[#495df3] rounded-full aspect-square">
                <Clock className="text-white" size={25} />
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Business Hours</p>
                <p>Mon - Fri: 9AM - 6PM (IST)</p>
              </div>
            </div>
          </div>
          
          <div className="mt-[4rem] grid md:grid-cols-5 gap-10">
            <div className="md:col-span-2">
              <h2 data-aos="fade-up" className="section-heading">
                Let's Start a Conversation
              </h2>
              <p data-aos="fade-up" className="mt-3">
                Ready to transform your business with technology? We're here to help you navigate 
                the digital landscape and build solutions that drive real results.
              </p>
              
              <div data-aos="fade-up" className="mt-8 space-y-6">
                <div className="bg-primary/10 p-5 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <MessageSquare size={20} /> Initial Consultation
                  </h3>
                  <p className="">
                    Schedule a free 30-minute consultation to discuss your project needs and explore how we can help.
                  </p>
                </div>
                
                <div className="bg-primary/10 p-5 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
                  <p className="">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
                
                <div className="bg-primary/10 p-5 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Project Estimate</h3>
                  <p className="">
                    After understanding your requirements, we'll provide a detailed proposal and timeline.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 bg-gradient-to-b from-primary/10 to-secondary/10 rounded-xl shadow-lg">
              <form
                onSubmit={handleSubmit(handleFormSubmit)}
                data-aos="fade-up"
                className="p-6 sm:p-8 flex flex-col"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
                
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="text"
                      className="placeholder:text-black/60 text-black p-3 bg-white outline-none w-full rounded-md border border-transparent focus:border-primary transition-all"
                      placeholder="Full Name"
                      {...register("name", {
                        required: "Full name is required",
                        validate: (val) => {
                          if (val.trim() !== "") {
                            return true;
                          } else {
                            return "Full name is required";
                          }
                        },
                      })}
                    />
                    <small className="text-red-600 font-medium">{errors.name?.message}</small>
                  </div>
                  <div>
                    <input
                      type="email"
                      className="placeholder:text-black/60 text-black p-3 bg-white outline-none w-full rounded-md border border-transparent focus:border-primary transition-all"
                      placeholder="Email Address"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                          message: "Entered email is invalid",
                        },
                      })}
                    />
                    <small className="text-red-600 font-medium">
                      {errors.email?.message}
                    </small>
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="placeholder:text-black/60 text-black p-3 bg-white outline-none w-full rounded-md border border-transparent focus:border-primary transition-all"
                      placeholder="Phone Number"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^\+?[0-9]{10,15}$/,
                          message: "Entered phone number is invalid",
                        },
                      })}
                    />
                    <small className="text-red-600 font-medium">
                      {errors.phone?.message}
                    </small>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="placeholder:text-black/60 text-black p-3 bg-white outline-none w-full rounded-md border border-transparent focus:border-primary transition-all"
                      placeholder="Subject"
                      {...register("subject", {
                        required: "Subject is required",
                        validate: (val) => {
                          if (val.trim() !== "") {
                            return true;
                          } else {
                            return "Subject is required";
                          }
                        },
                      })}
                    />
                    <small className="text-red-600 font-medium">
                      {errors.subject?.message}
                    </small>
                  </div>
                  <div className="md:col-span-2">
                    <textarea
                      className="placeholder:text-black/60 text-black p-3 bg-white outline-none w-full rounded-md border border-transparent focus:border-primary transition-all"
                      placeholder="Tell us about your project or inquiry"
                      rows="5"
                      {...register("message", {
                        required: "Message is required",
                        validate: (val) => {
                          if (val.trim() !== "") {
                            return true;
                          } else {
                            return "Message is required";
                          }
                        },
                      })}
                    />
                    <small className="text-red-600 font-medium">
                      {errors.message?.message}
                    </small>
                  </div>
                </div>
                <button
                  disabled={isSubmitting}
                  className="btn rounded-full bg-gradient-to-r from-[#e5497c] to-[#495df3] text-white hover:shadow-lg hover:shadow-primary/30 w-full sm:w-fit self-end mt-6 transition-all"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="wrapper text-center">
          <h2 className="section-heading mb-6">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            <div className="bg-[#F7F7F9] p-5 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">What types of projects do you work on?</h3>
              <p className="text-gray-700">
                We specialize in web development, mobile apps, custom software, AI solutions, 
                cloud computing, and digital marketing for businesses of all sizes.
              </p>
            </div>
            
            <div className="bg-[#F7F7F9] p-5 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">How much does a typical project cost?</h3>
              <p className="text-gray-700">
                Project costs vary based on complexity, timeline, and specific requirements. 
                Contact us for a custom quote tailored to your needs.
              </p>
            </div>
            
            <div className="bg-[#F7F7F9] p-5 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">How long does a project typically take?</h3>
              <p className="text-gray-700">
                Timeline depends on project scope. Simple websites might take 2-4 weeks, 
                while complex applications can take several months to develop properly.
              </p>
            </div>
            
            <div className="bg-[#F7F7F9] p-5 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Do you offer ongoing support?</h3>
              <p className="text-gray-700">
                Yes, we provide maintenance and support packages to ensure your 
                solution continues to perform optimally after launch.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <MapComponent />
    </div>
  );
};

export default ContactUs;