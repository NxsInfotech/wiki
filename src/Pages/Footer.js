import React from "react";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="h-[250px]  w-full">
      <div className="h-[125px] w-full bg-[#009ad4] ">
        <div className="flex  justify-center items-center h-full gap-20">
          <span className="bg-white hover:bg-[#009ad4] px-10 py-3  h-auto  border text-[#009ad4] hover:text-white ">
            <a
              href="https://icloth.io/pages/contact"
              target="blank"
              className=" text-lg font-bold"
            >
              Contact iCloth
            </a>
          </span>
          <span className="bg-white hover:bg-[#009ad4] px-10 py-3  h-auto  border text-[#009ad4] hover:text-white gap-3">
            <a
              href="https://icloth.io/collections/all"
              target="blank"
              className=" text-lg font-bold"
            >
              Shop All Sizes
            </a>
          </span>
        </div>
      </div>
      <div className="h-[125px] w-full bg-black ">
        <div className=" flex items-center justify-center pt-5   p-5  gap-2">
          <span className="bg-white w-8 h-8 flex items-center justify-center rounded-2xl">
            <a
              href="https://icloth.io/pages/contact"
              target="black"
              rel="noreferrer"
            >
              <BiSolidMessageRounded
                size={20}
                className=" mx-auto text-[#009ad4] rounded-2xl    "
              />
            </a>
          </span>
          <span className="bg-white w-8 h-8 flex items-center justify-center rounded-2xl">
            <a href="tel:15146314111" target="black" rel="noreferrer">
              <FaPhone
                size={20}
                className=" mx-auto text-[#009ad4] rounded-2xl    "
              />
            </a>
          </span>
          <span className="bg-white w-8 h-8 flex items-center justify-center rounded-2xl">
            <a
              href="mailto:support@iclothproducts.com"
              target="black"
              rel="noreferrer"
            >
              <MdEmail
                size={20}
                className=" mx-auto text-[#009ad4] rounded-2xl    "
              />
            </a>
          </span>
          <span className="bg-white w-8 h-8 flex items-center justify-center rounded-2xl">
            <a
              href="https://www.youtube.com/channel/UC8-OqmwUKbJLsADmfZNMv_w"
              target="black"
              rel="noreferrer"
            >
              <FaYoutube
                size={20}
                className=" mx-auto text-[#009ad4] rounded-2xl    "
              />
            </a>
          </span>
        </div>
        <div className="flex justify-center">
          <a
            href="https://icloth.io/"
            target="blank"
            className=" text-[#009ad4] hover:text-white"
          >
            iCloth.io
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
