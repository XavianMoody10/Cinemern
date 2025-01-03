import React, { useContext } from "react";
import { GiFilmProjector as MovieIcon } from "react-icons/gi";
import { PiTelevisionBold as TelevisionIcon } from "react-icons/pi";
import { FaRegBookmark as SavedIcon } from "react-icons/fa";
import { FaUser as AuthIcon } from "react-icons/fa";
import { IoClose as CloseIcon } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { motion } from "motion/react";
import { SideNavigationContext } from "../../context/SideNavigationContext";

export const SideNavigation = () => {
  const { isOpen, setIsOpen } = useContext(SideNavigationContext);

  // Object contains information for links
  const links = [
    {
      text: "Movies",
      icon: { Icon: MovieIcon, size: 30 },
      to: "",
    },
    {
      text: "Shows",
      icon: { Icon: TelevisionIcon, size: 25 },
      to: "",
    },
    {
      text: "Watchlist",
      icon: { Icon: SavedIcon, size: 22 },
      to: "",
    },
    {
      text: "Login",
      icon: { Icon: AuthIcon, size: 22 },
      to: "",
    },
  ];

  // Display links
  const linksMap = links.map((l) => {
    return (
      <li
        key={l.text}
        className=" rounded-lg bg-black hover:bg-gray-600 duration-100"
      >
        <Link className=" py-2 flex items-center justify-center gap-2">
          <p className="text-white font-bold text-lg">{l.text}</p>
          <l.icon.Icon size={l.icon.size} color="white" />
        </Link>
      </li>
    );
  });

  return (
    <motion.aside
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? 0 : "-100%" }}
      className=" h-screen w-full min-[375px]:max-w-[300px] fixed top-0 left-0 bg-black p-3 space-y-10 z-40 lg:hidden"
      transition={{ stiffness: 0 }}
      role="side-navigation"
    >
      <div
        className=" absolute right-3 cursor-pointer min-[375px]:hidden"
        role="sidenavigation-close-icon"
        onClick={() => setIsOpen(false)}
      >
        <CloseIcon color="white" size={30} />
      </div>

      <div>
        <img src={logo} alt="" />
      </div>

      <nav>
        <ul className=" flex flex-col justify-center gap-5">{linksMap}</ul>
      </nav>
    </motion.aside>
  );
};
