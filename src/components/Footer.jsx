import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-8 bg-gray-900 text-gray-100 flex flex-col lg:flex-row justify-between items-center">
      <p className="text-sm lg:text-base text-center lg:text-left">
        Where artistry meets soul, and creativity finds its home.
      </p>
      <p className="text-sm lg:text-base text-center lg:text-right mt-4 lg:mt-0">
        Follow the journey on <a href="#" className="text-blue-400 hover:underline">Instagram</a> | <a href="#" className="text-blue-400 hover:underline">Facebook</a> | <a href="#" className="text-blue-400 hover:underline">Twitter</a>
      </p>
    </footer>
  );
};

export default Footer;
