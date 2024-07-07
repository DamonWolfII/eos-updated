"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import MaxWidthWrapper from "../sharedUi/MaxWidthWrapper";


interface serviceProp {
  img: string;
  title: string;
  details: string;
}

const Service: React.FC<serviceProp> = ({ img, title, details }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`${styles.card} flex flex-col items-center justify-center p-10 border-2 w-full h-[16rem] shadow-xl hover:scale-105 duration-200 relative`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={img}
        alt=""
        className={`${styles.img} h-[55%]  object-contain`}
      />
      <p className={`${styles.title} text-center duration-200 `}>{title}</p>
      <div
        className={`${styles.details} h-[70%] w-[85%] absolute flex justify-center  items-center text-black  bg-gray-50 visib p-[5%] duration-200 rounded-sm`}
        style={{ transform: hover ? "scale(100%)" : "scale(0%)" }}
      >
        {details}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <>
      <MaxWidthWrapper>
        <section className="py-10" id="services">
          <p className="flex justify-center text-4xl text-primary tracking-tight font-bold">
            Our Services
          </p>
          <div
            className={`${styles.container} py-16  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 gap-y-16 `}
          >
            <Service
              img="/assets/services/web.jpg"
              title="Web Development"
              details="We build websites tailored to your business needs, making them user-friendly and search engine optimized."
            />
            <Service
              img="/assets/services/graphic.jpg"
              title="Graphic Design"
              details="Our designs capture your brand's essence, from logos to marketing materials and UI/UX design."
            />
            <Service
              img="/assets/services/product.jpg"
              title="Product Development"
              details="We create innovative digital products that solve real-world problems and drive business growth."
            />
            <Service
              img="/assets/services/seo.jpg"
              title="SEO"
              details="Boost your online visibility and drive traffic with our SEO services, covering keyword research, on-page optimization, and content strategy."
            />
            <Service
              img="/assets/services/app.jpg"
              title="App Development"
              details="We develop mobile apps for iOS, Android, and cross-platform, ensuring seamless performance and user experience."
            />
            <Service
              img="/assets/services/it.jpg"
              title="IT Consulting"
              details="Get strategic guidance on technology solutions like infrastructure management, cybersecurity, and digital transformation."
            />
          </div>
        </section>
      </MaxWidthWrapper>
    </>
  );
};

export default Services;
