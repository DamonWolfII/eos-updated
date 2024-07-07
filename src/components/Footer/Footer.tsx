import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./styles.module.css";
import Link from "next/link";
import MaxWidthWrapper from "../sharedUi/MaxWidthWrapper";

const Footer = () => {
  return (
    <>
      <MaxWidthWrapper className="px-0 md:px-0 max-w-full">
        <footer className="bg-gray-50">
          <div
            className={`${styles.top} px-2.5 md:px-14 max-w-screen-xl mx-auto pt-28 pb-10 flex justify-between items-center`}
          >
            <div className={`${styles.logo} w-1/4`}>
              <p
                className={` ${styles.head} text-3xl flex justify-center text-red-800 font-semibold`}
              >
                EOS Web Solutions
              </p>
              <div
                className={`${styles.socials} flex items-start gap-8 justify-center py-5`}
              >
                <a
                  href="https://www.facebook.com/profile.php?id=61561332238635"
                  target="blank"
                  className="text-black  transition duration-300 flex items-center mb-2 "
                >
                  <FaFacebook
                    className={`${styles.social} size-6 text-gray-700 hover:text-red-900 duration-400`}
                  />
                </a>

                <a
                  href="https://www.linkedin.com/company/eos-web-solutions/"
                  target="blank"
                  className="text-black  transition duration-300 flex items-center mb-2 "
                >
                  <FaLinkedin
                    className={`${styles.social} size-6 text-gray-700 hover:text-red-900 duration-400`}
                  />
                </a>

                <a
                  href="https://www.instagram.com/eoswebsolutions/"
                  target="blank"
                  className="text-black hover:text-gray-900 transition duration-300 flex items-center"
                >
                  <FaInstagram
                    className={`${styles.social} size-6 text-gray-700 hover:text-red-900 duration-400`}
                  />
                </a>
              </div>
            </div>
            <div className={` ${styles.lists} flex justify-between w-6/12`}>
              <ul className={`${styles.list} flex flex-col gap-5`}>
                <li className={`${styles.title} font-bold text-xl`}>
                  Resources
                </li>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">About</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
              </ul>
              <ul className={`${styles.list} flex flex-col gap-5 w-auto`}>
                <li className={`${styles.title} font-bold text-xl`}>
                  Services
                </li>
                <li>
                  <Link href="/">Web Development</Link>
                </li>
                <li>
                  <Link href="/">App Development</Link>
                </li>
                <li>
                  <Link href="/">Product Development</Link>
                </li>
                <li>
                  <Link href="/">SEO</Link>
                </li>
              </ul>
              <ul className={`${styles.list} flex flex-col gap-5 w-auto`}>
                <li className={`${styles.title} font-bold text-xl`}>Legal</li>
                <li>
                  <Link href="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/">Terms and Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={`${styles.copyright} bg-red-800`}>
            <p
              className={`${styles.copy} text-center py-8 text-white px-2.5 md:px-14 mx-auto max-w-screen-xl`}
            >
              &copy; {new Date().getFullYear()} EOS Web Solutions. All rights
              reserved.
            </p>
          </div>
        </footer>
      </MaxWidthWrapper>
    </>
  );
};

export default Footer;
