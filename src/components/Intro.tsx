"use client";

import React from "react";
import { motion } from "framer-motion";
import MaxWidthWrapper from "./sharedUi/MaxWidthWrapper";


const Intro: React.FC = () => {
  return (
    <MaxWidthWrapper className="  bg-gray-100 mx-0 w-full max-w-full">
      <motion.section
        className="py-16 bg-gray-100 w-full max-w-screen-xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container px-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-4 text-primary tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Welcome to Our Software Company
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            We are dedicated to providing top-notch software solutions that meet
            the needs of our clients. With a focus on innovation and
            cutting-edge technology, we strive to deliver excellence in every
            project. Explore our website to learn more about our services and
            how we can help you achieve your goals.
          </motion.p>
        </div>
      </motion.section>
    </MaxWidthWrapper>
  );
};

export default Intro;
