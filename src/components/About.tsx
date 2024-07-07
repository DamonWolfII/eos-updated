"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MaxWidthWrapper from "./sharedUi/MaxWidthWrapper";


const About: React.FC = () => {
  // Create animation controls for each section
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const imageControls = useAnimation();

  // UseInView hook to detect when sections are in view
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [imageRef, inViewImage] = useInView();

  // Animate sections when they come into view
  useEffect(() => {
    if (inView1) {
      controls1.start({ opacity: 1, y: 0 });
    }
    if (inView2) {
      controls2.start({ opacity: 1, y: 0 });
    }
    if (inView3) {
      controls3.start({ opacity: 1, y: 0 });
    }
    if (inViewImage) {
      imageControls.start({ opacity: 1, scale: 1 });
    }
  }, [controls1, controls2, controls3, inView1, inView2, inView3, inViewImage]);

  return (
    <MaxWidthWrapper className="max-w-full mx-0 px-0 md:px-0 bg-gray-100 ">
      <div
        id="about"
        className="w-full px-2.5 md:px-14 max-w-screen-xl mx-auto"
      >
        <motion.section
          className="bg-gray-100 py-16 w-full"
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={controls1}
          transition={{ duration: 0.2 }}
        >
          <div className=" mx-auto ">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h1 className="text-4xl font-bold mb-4 text-primary tracking-tight">
                  About Our Company
                </h1>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  We're a newly established software company striving to make a
                  mark in the industry. With a passion for innovation and a
                  dedication to quality, we're committed to delivering tailored
                  software solutions that meet the unique needs of our clients.
                </p>
              </div>
              <motion.div
                ref={imageRef}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={imageControls}
                transition={{ duration: 0.9 }}
                className="lg:w-1/2"
              >
                <img
                  src="about3.jpg"
                  alt="Team"
                  className="w-full rounded-lg shadow-md"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>
        {/* <motion.section
        className="bg-red-900 py-16 "
        ref={ref2}
        initial={{ opacity: 0, y: 50 }}
        animate={controls2}
        transition={{ duration: 0.8 }}
        >
        <div className="container mx-auto px-4 text-white">
        <h2 className="text-3xl font-bold mb-8 ">Our Vision</h2>
        <p className="text-lg leading-relaxed">
            Our vision is to become a trusted partner for businesses seeking
            innovative software solutions. We aim to build long-lasting
            relationships with our clients by consistently exceeding their
            expectations and delivering value-driven products and services.
            </p>
            </div>
      </motion.section>
      <motion.section
      className="bg-gray-100 py-16"
      ref={ref3}
      initial={{ opacity: 0, y: 50 }}
      animate={controls3}
      transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-red-800">
            Why Choose Us?
          </h2>
          <ul className="list-disc list-inside text-lg">
            <li>Passionate and dedicated team committed to your success</li>
            <li>Customized solutions crafted with attention to detail</li>
            <li>
            Flexible approach to adapt to your evolving needs and challenges
            </li>
            <li>Transparent communication and collaborative partnership</li>
            <li>
            Fresh perspective and innovative ideas tailored to your business
            </li>
            </ul>
            </div>
            </motion.section> */}
      </div>
    </MaxWidthWrapper>
  );
};

export default About;
