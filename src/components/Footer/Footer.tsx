import Link from "next/link";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="mt-16">
      {/* Container */}
      <div className="container mx-auto px-4">
        {/* Title-page */}
        <Link href="/" className="font-black text-tertiary-dark">
          Hotelzz
        </Link>
        {/* Contact-title */}
        <h4 className="font-semibold text-[40px] py-6">Contact</h4>
        
        <div className="flex flex-wrap gap-16 items-center justify-between">
          {/* First-Column in Footer */}
          <div className="flex-1">
            <p> 123 Road</p>
            <div className="flex items-center py-4">
              <BsFillSendFill />
              <p className="ml-2">codewithlari_YT</p>
            </div>
            <div className="flex items-center">
              <BsTelephoneOutbound />
              <p className="ml-2">000-0000-0000</p>
            </div>
            <div className="flex items-center pt-4">
              <BiMessageDetail />
              <p className="ml-2">codewithlari</p>
            </div>
          </div>

          {/* Second-Column in Footer */}
          <div className="flex-1 md:text-right">
            <p className="pb-4">Our Story</p>
            <p className="pb-4">Get in Touch</p>
            <p className="pb-4">Our Privacy Commitment</p>
            <p className="pb-4">Terms of services</p>
            <p>Customer Assistance</p>
          </div>

          {/* Thirt-Column in Footer */}
          <div className="flex-1 md:text-right">
            <p className="pb-4">Dining Experience</p>
            <p className="pb-4">Wellness</p>
            <p className="pb-4">Fitness</p>
            <p className="pb-4">Sports</p>
            <p>Events</p>
          </div>
        </div>
      </div>

      <div className="bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0 "></div>
    </footer>
  );
};

export default Footer;
