'use client'
import React from "react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import MaxWidthWrapper from "./sharedUi/MaxWidthWrapper";
import { cn } from "@/lib/utils";
import { Link as ScrollLink } from "react-scroll";
const Hero = () => {
  return (
    <>
      <MaxWidthWrapper>
        <section
          id="home"
          className={`  pt-40 flex flex-col lg:flex-row  pb-10 w-full justify-between items-center gap-12 md:gap-16 `}
        >
          <div
            className={`w-full flex flex-col justify-center items-center text-center lg:justify-start lg:items-start lg:text-start `}
          >
            <p className={` text-4xl   font-bold tracking-tight font-sans `}>
              Empowering Businesses{" "}
              <span className="text-primary">Through Technology</span>
            </p>
            <p
              className={` text-lg   pt-4 max-w-prose text-muted-foreground  `}
            >
              Delivering innovative software solutions for your success
            </p>
            <div className="mt-5">
              <Link href={"/contact"} className={cn(buttonVariants(), "")}>
                Get Started &rarr;
              </Link>
              <ScrollLink
                to="services"
                smooth="true"
                duration={500}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "cursor-pointer"
                )}
              >
                Our Services
              </ScrollLink>
            </div>
          </div>
          <img src="./hero3.svg" alt="" className={`  w-full lg:w-1/2 `} />
        </section>
      </MaxWidthWrapper>
    </>
  );
};

export default Hero;
