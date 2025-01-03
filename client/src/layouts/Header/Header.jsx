import React, { useContext, useState } from "react";
import { GiFilmProjector as MovieIcon } from "react-icons/gi";
import { PiTelevisionBold as TelevisionIcon } from "react-icons/pi";
import { FaRegBookmark as SavedIcon } from "react-icons/fa";
import { FaUser as AuthIcon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import logo from "../../assets/logo.png";
import { SideNavigationContext } from "../../context/SideNavigationContext";

export const Header = () => {
  const { isOpen, setIsOpen } = useContext(SideNavigationContext);
  const [isProfileSettingsOpen, setIsProfileSettingsOpen] = useState(false);

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
      icon: { Icon: SavedIcon, size: 20 },
      to: "",
    },
  ];

  // Display links
  const linksMap = links.map((l) => {
    return (
      <li
        key={l.text}
        className=" rounded-lg hover:bg-gray-600 duration-100 w-full"
      >
        <Link className=" py-2 px-4 flex items-center justify-center gap-2">
          <p className="text-white font-bold text-lg">{l.text}</p>
          <l.icon.Icon size={l.icon.size} color="white" />
        </Link>
      </li>
    );
  });

  return (
    <header className=" py-8 bg-black flex items-center justify-between lg:py-4 fixed top-0 w-full z-30 bg-opacity-75">
      <div className=" flex items-center justify-between w-[98%] mx-auto relative">
        <Link className=" max-w-[180px] absolute left-0 hidden lg:block">
          <img src={logo} alt="Header logo" className=" w-full" />
        </Link>

        <div className=" absolute left-4 select-none lg:left-auto lg:right-3 xl:right-8">
          <div
            className=" text-white font-medium flex items-center gap-2 cursor-pointer"
            onClick={() => setIsProfileSettingsOpen((prev) => !prev)}
            role="auth-settings"
          >
            <AuthIcon size={20} />
            {"Xavian10"}
          </div>

          {isProfileSettingsOpen && (
            <div
              className=" absolute bottom-[-80px] right-0 border w-[200px] bg-white p-2 rounded-md"
              role="auth-settings-box"
            >
              <button className=" text-center w-full bg-black text-white py-2 font-medium rounded-md">
                Logout
              </button>
            </div>
          )}
        </div>

        <nav className=" w-[90%] max-w-[300px] mx-auto hidden lg:block lg:max-w-[500px]">
          <ul className=" flex items-center justify-center gap-5">
            {linksMap}
          </ul>
        </nav>

        <div className=" absolute right-2 lg:hidden">
          <Hamburger
            color="white"
            size={25}
            toggled={isOpen}
            onToggle={() => {
              setIsOpen((prev) => !prev);
            }}
            label="hamburger-icon"
          />
        </div>
      </div>
    </header>
  );
};
