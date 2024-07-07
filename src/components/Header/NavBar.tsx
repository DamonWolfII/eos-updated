'use client'
import React from 'react'
import Header from "@/components/Header/Header";
import { Link as ScrollLink, scroller } from "react-scroll";
const NavBar = () => {
  return (
    <div>
        <Header>
        {" "}
        <>
          <ul className="flex text-black flex-col gap-5">
            <li key={"About"} className="hover:text-red-700 cursor-pointer">
              <ScrollLink to="about" duration={500} smooth={true} offset={-70}>
                About{" "}
              </ScrollLink>
            </li>
            <li key={"Services"} className="hover:text-red-700 cursor-pointer">
              <ScrollLink
                to="services"
                duration={500}
                smooth={true}
                offset={-70}
              >
                Services{" "}
              </ScrollLink>
            </li>
          </ul>
        </>
      </Header>
    </div>
  )
}

export default NavBar