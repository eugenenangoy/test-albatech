import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbars = () => {
  const navbar = [
    {
      name: "Service",
      url: "service",
    },
    {
      name: "About",
      url: "about",
    },
    {
      name: "Portfolio",
      url: "porto",
    },
    {
      name: "Blog",
      url: "testimonials",
    },
    {
      name: "Career",
      url: "career",
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen)
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`w-full py-6 bg-white ${
          isScrolled ? "bg-white bg-opacity-80" : ""
        } fixed top-0 z-10`}
      >
        <div className="lg:container flex w-full justify-between mx-auto px-32">
          <div className="">
            <Link
              to="hero"
              className="logo cursor-pointer"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <img
                src="/assets/alba-logo.svg"
                alt="images"
                style={{ height: "45px" }}
              />
            </Link>
          </div>
          <div className='hidden lg:flex md:flex w-2/4 lg:justify-between py-4 border-0 items-center'>
            {navbar.map((item, index) => (
              <Link
                key={index}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                to={item.url}
                className="text-black text-lg font-bold hover:text-[#FFCE07] cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex md:flex">
            <button
              type="button"
              className="w-48 h-[57px] px-4 py-2.5 text-black bg-[#FFCE07] hover:bg-yellow-500 transition duration-500 ease-in-out rounded-[30px] font-bold"
            >
              Contact Us
            </button>
          </div>
          <div className="flex items-center lg:hidden md:hidden">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className="block absolute lg:hidden focus:outline-none"
              onClick={toggleMenu}
            >
              <span className="w-[30px] h-[2px] my-2 block transition duration-300 ease-in-out origin-top-left bg-yellow-500"></span>
              <span className="w-[30px] h-[2px] my-2 block transition duration-300 ease-in-out bg-yellow-500"></span>
              <span className="w-[30px] h-[2px] my-2 block transition duration-300 ease-in-out origin-bottom-left bg-yellow-500"></span>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-0 right-0 h-screen w-full bg-white">
          <div className="container flex flex-col items-end mx-auto py-8 px-4">
            {navbar.map((item,index)=>(
              <Link
              key={index}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                to={item.url}
                className="text-black text-lg font-bold mb-6 hover:text-[#FFCE07] cursor-pointer"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbars;
