"use client";
import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCall } from "react-icons/io";
import { RiCloseFill } from "react-icons/ri";
import { Link as ScrollLink, scroller } from "react-scroll";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import styles from "./styles.module.css";
import { usePathname } from "next/navigation";
import MaxWidthWrapper from "../sharedUi/MaxWidthWrapper";
import { Sidebar } from "lucide-react";


const Header = ({ children }: { children?: ReactNode }) => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();

  const THRESHOLD = 100;

  const handleScroll = () => {
    if (scrolling) return; // Ignore scroll events when scrolling is programmatically triggered

    const currentScrollY = window.scrollY;
    if (Math.abs(currentScrollY - lastScrollY) >= THRESHOLD) {
      setHidden(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, scrolling]);

  const handleLinkClick = (to: string) => {
    setScrolling(true);
    scroller.scrollTo(to, {
      duration: 500,
      smooth: true,
      offset: -70, // Offset to adjust the scroll position (optional)
      onComplete: () => setScrolling(false),
    });
  };

  return (
    <>
      <nav
        className={`${styles.nav} fixed   bg-white items-center z-10  w-full duration-500 `}
        style={{
          transform: hidden ? "translateY(-100%)" : "translateY(0)",
        }}
      >
        <div className="relative">
          <MaxWidthWrapper className="">
            <div className=" border-b w-full border-gray-200 ">
              <div className=" border-b-black/10 flex justify-between items-center px-2 w-full ">
                <Link href={"./"} className="flex items-center tracking-tight ">
                  <img
                    src="/logoEos.png"
                    alt=""
                    className={`${styles.logo} h-[5.3rem] p-1 rounded-2xl w-auto `}
                  />
                  <p
                    className="font-bold font-serif"
                    style={{ lineHeight: "1" }}
                  >
                    EOS WEB <br />{" "}
                    <span className="font-bold text-red-600 font-serif">
                      SOLUTIONS
                    </span>
                  </p>
                </Link>

                <ul
                  className={` ${styles.list} hidden md:flex text-black justify-end w-[25rem] font-bold items-center gap-8`}
                >
                  <li
                    key={"Home"}
                    className="hover:text-red-700 cursor-pointer"
                  >
                    <Link href={"/"}>Home </Link>
                  </li>
                  <li
                    key={"About"}
                    className="hover:text-red-700 cursor-pointer"
                    style={{ display: pathname === "/" ? "flex" : "none" }}
                  >
                    <ScrollLink
                      to="about"
                      smooth={true}
                      duration={500}
                      offset={-70}
                      onClick={() => handleLinkClick("about")}
                    >
                      About{" "}
                    </ScrollLink>
                  </li>
                  <li
                    key={"Services"}
                    className="hover:text-red-700 cursor-pointer"
                    style={{ display: pathname === "/" ? "flex" : "none" }}
                  >
                    <ScrollLink
                      to="services"
                      smooth={true}
                      duration={500}
                      offset={-70}
                      onClick={() => handleLinkClick("services")}
                    >
                      Services{" "}
                    </ScrollLink>
                  </li>
                  <li key={"Contact"}>
                    <Link
                      href={"/contact"}
                      className={cn(buttonVariants(), " ")}
                    >
                      {/* <IoMdCall className="size-6" /> */}
                      Contact Us
                    </Link>
                  </li>
                </ul>
                {/* <GiHamburgerMenu
                  className="hamburger z-10 md:hidden hover:cursor-pointer size-6 text-red-800"
                  onClick={() => {
                    setHamburger(true);
                    setHidden(true);
                  }}
                /> */}
                <div className="flex md:hidden">
                  <Sidebar children={children} />
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </nav>
      {/* <div
          className="sidebar fixed z-10 h-full bg-white px-6 py-24 w-64 duration-500"
          style={{
            transform: hamburger ? "translateX(0)" : "translateX(-100%)",
          }}
        >
          <RiCloseFill
            className="absolute right-4 size-10 top-7"
            onClick={() => {
              setHamburger(false);
              setHidden(false);
            }}
          />
          <ul className="flex text-black flex-col gap-5 ">
            <li key={"Home"} className="hover:text-red-700 cursor-pointer">
              <Link href={"/"}>Home </Link>
            </li>
            {children}
            <li key={"Contact"}>
              <Link
                href={"/contact"}
                className="bg-red-700 text-white px-5 py-3 rounded-md hover:bg-red-800 flex items-center gap-1 cursor-pointer justify-center my-3"
              >
                <IoMdCall className="size-6" />
                <p>Contact Us</p>
              </Link>
            </li>
          </ul>
        </div> */}
    </>
  );
};

export default Header;
