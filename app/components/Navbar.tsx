"use client";

import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

const headerData = ["Home", "Line up", "Tickets", "Support"];

const Navbar = () => {
  const [selected, setSelected] = useState(true);
  const { theme, setTheme } = useTheme();

  const changeSelected = () => setSelected(!selected);

  useEffect(() => {
    setTheme("light");
  }, []);

  return (
    <header className="sticky z-10 top-0 bg-gradient-to-r from-rose-500 to-pink-500 text-zinc-200">
      <div
        className="fixed top-24 right-0 inline-block w-12 cursor-pointer rounded-l-lg bg-zinc-300 dark:bg-zinc-200 p-2 text-3xl"
      >
        {theme === "light" ? (
          <FaSun className="text-zinc-900" onClick={() => setTheme("dark")} />
        ) : (
          <FaMoon className="text-zinc-900" onClick={() => setTheme("light")} />
        )}
      </div>
      <nav className="h-16 flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        <div className="flex items-center text-2xl">
          <Image
            width={50}
            height={50}
            src="/assets/images/logo-inverted.png"
            alt="image-logo"
            className="mr-2"
          />
          <span className="mr-1">tw&#58;</span>
          <span className="text-sky-900">mf</span>
        </div>

        <div className="flex space-x-2 font-semibold">
          {!selected && (
            <ul className="absolute bg-gradient-to-r from-rose-500 to-pink-500 top-16 right-0 h-auto w-screen text-center md:hidden z-30">
              {headerData.map((link) => (
                <li
                  className="h-16 px-3 flex justify-center items-center cursor-pointer font-bold text-pink-200 hover:brightness-110 hover:bg-white/10 transition-colors ease-in-out"
                  key={link}
                >
                  {link}
                </li>
              ))}
            </ul>
          )}
          {selected ? (
            <GiHamburgerMenu
              onClick={changeSelected}
              className="text-3xl cursor-pointer md:hidden"
            />
          ) : (
            <IoMdClose
              onClick={changeSelected}
              className="text-3xl cursor-pointer md:hidden"
            />
          )}
          <ul className="hidden md:flex">
            {headerData.map((link) => (
              <Fragment key={link}>
                {link === "Tickets" ? (
                  <li
                    key={link}
                    className="relative group md:flex hidden h-16 px-3 items-center cursor-pointer font-bold text-pink-200 hover:brightness-110 hover:bg-white/10 transition-colors ease-in-out"
                  >
                    {link}

                    <div className="group-hover:block hidden absolute top-full right-0 bg-pink-500">
                      <ul className="p-2 rounded-b-md whitespace-nowrap">
                        <li className="px-2 py-2 text-right hover:bg-white/5 hover:text-zinc-200 transition-colors ease-in-out text-pink-200 cursor-pointer">
                          Single day ticket
                        </li>
                        <li className="px-2 py-2 text-right hover:bg-white/5 hover:text-zinc-200 transition-colors ease-in-out text-pink-200 cursor-pointer">
                          7 day ticket
                        </li>
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li
                    key={link}
                    className="md:flex hidden h-16 px-3 items-center cursor-pointer font-bold text-pink-200 hover:brightness-110 hover:bg-white/10 transition-colors ease-in-out"
                  >
                    {link}
                  </li>
                )}
              </Fragment>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
