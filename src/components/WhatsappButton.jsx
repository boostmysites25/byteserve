import { Link } from "react-router-dom";
import { companyDetails } from "../data/constant";
import { IoLogoWhatsapp } from "react-icons/io";

const WhatsappButton = () => {
  return (
    <Link to={`https://wa.me/${companyDetails.phone.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed w-fit h-fit bottom-6 right-6 z-10 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out bg-white hover:scale-105">
      <IoLogoWhatsapp className="fill-green-500 text-5xl" />
    </Link>
  );
};

export default WhatsappButton;
