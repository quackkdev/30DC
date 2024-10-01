import React from "react";
import { IoMdHelp } from "react-icons/io";

const Footer = () => {
  return (
    <div className="flex flex-col gap-12 md:flex-row">
      <ul className="flex gap-6 font-lato text-gray-400">
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
      </ul>
      <div className="flex gap-2">
        <IoMdHelp />
        <div>
          <p className="font-playfair font-thin">Have any questions?</p>
          <a href="#" className="font-lato font-medium">
            Talk to a specialist
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
