"use client";
import React from "react";
import { useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import MaxWidthWrapper from "../sharedUi/MaxWidthWrapper";

interface detail {
  img: string;
  name: string;
  title: string;
  link: string;
}

const Member: React.FC<detail> = ({ img, name, title, link }) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <>
      <div
        className={` ${styles.card} w-2/12 h-auto relative overflow-hidden hover:scale-105 duration-300 `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link href={link} target="_blank">
          <img src={img} alt="" className="w-full h-full" />
          <div
            className="w-full h-full  z-10 absolute top-0 duration-300"
            style={{
              background: hover ? "rgba(0, 0, 0, 0.2)" : "none",
            }}
          ></div>
          <div
            className={` ${styles.personDetail} absolute bottom-0 z-10 duration-300  text-white bg-gray-800 w-full p-[5%] `}
            style={{
              transform: hover ? "translateY(0%)" : "translateY(100%)",
            }}
          >
            <p className={`${styles.name} text-lg`}>{name}</p>
            <p className={`${styles.title} text-xs`}>{title}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

const Team = () => {
  return (
    <>
      <MaxWidthWrapper>
        <section className={`${styles.section} py-10`}>
          <p className="flex justify-center text-4xl tracking-tight font-bold text-primary py-5">
            Our Team
          </p>
          <div
            className={`${styles.container} flex gap-5 w-full flex-wrap justify-center py-10`}
          >
            <Member
              img="/assets/members/Swopnil.jpg"
              name="Swopnil Sapkota"
              title="Computer Engineer"
              link="/members/swopnil"
            />
            <Member
              img="/assets/members/Ashim.jpeg"
              name="Ashim Rai"
              title="Computer Engineer"
              link="https://www.ashimrai1.com.np"
            />
            <Member
              img="/assets/members/Sarwesh.jpeg"
              name="Sarwesh Kattel"
              title="Computer Engineer"
              link="./"
            />
            <Member
              img="/assets/members/utsav.jpg"
              name="Nishant Adhikari "
              title="Computer Engineer"
              link="https://profile-delta-smoky.vercel.app/"
            />
          </div>
        </section>
      </MaxWidthWrapper>
    </>
  );
};

export default Team;
