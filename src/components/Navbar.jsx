import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import github from "../assets/github.png";
const Navbar = () => {
  const [active, setActive] = useState(""); // make stay nav item color white when click
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0); // scroll to top
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-[110px] h-[110px] object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Pankaj &nbsp;
            <span className="sm:block hidden"> | Web Developer</span>
          </p>
        </Link>
        {/* Desktop View  */}
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li
            className="hover:text-white text-[18px] font-medium cursor-pointer px-2 py-1    rounded-md  border-pink border-4 border-double"
          >
            <a href="https://drive.google.com/file/d/1VJs_1VEq5F6f-BJZ-k5ZByIodxxkhP6n/view?pli=1" target="_blank" rel="noopener noreferrer">ꜜResumeꜜ</a>
            
          </li>
          <li>
            <a
              href="https://github.com/erpankajk4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className=" h-10 object-contain" src={github} alt="github" />
            </a>
          </li>
        </ul>
        {/*  Mobile View */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu} // ham-menu icons
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li>
                <a
                  href="https://github.com/erpankajk4/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className=" h-10 object-contain"
                    src={github}
                    alt="github"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// max-w-7xl - for  large width screen upto 1280px
