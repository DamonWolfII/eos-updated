"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link as ScrollLink } from "react-scroll";

import Link from "next/link";
import {
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";

export function Swopnil() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Email sent successfully");
        // Clear form data after successful submission if needed
        setFormData({ name: "", email: "", message: "" });
        // Display custom toast message
        toast.success("Message sent successfully!");
      } else {
        console.error("Failed to send email");
        // Display custom error toast message if needed
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      // Display custom error toast message if needed
      toast.error("Failed to send message. Please try again later.");
    }
  };
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-gray-950 text-gray-50 px-4 lg:px-6 py-4 flex items-center justify-between fixed w-full z-50">
        <ScrollLink
          className="flex items-center gap-2"
          to="home"
          smooth={true}
          duration={500}
        >
          <MountainIcon className="h-6 w-6 cursor-pointer" />
          <span className="text-lg font-semibold cursor-pointer">
            Swopnil Sapkota
          </span>
        </ScrollLink>
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4 sm:gap-6">
            <NavigationMenuLink asChild>
              <ScrollLink
                className="hover:underline underline-offset-4 cursor-pointer"
                to="about"
                smooth={true}
                duration={500}
              >
                About
              </ScrollLink>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <ScrollLink
                className="hover:underline underline-offset-4  cursor-pointer"
                to="projects"
                smooth={true}
                duration={500}
              >
                Projects
              </ScrollLink>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <ScrollLink
                className="hover:underline underline-offset-4  cursor-pointer"
                to="contact"
                smooth={true}
                duration={500}
              >
                Contact
              </ScrollLink>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      <main className="flex-1">
        <section
          id="home"
          className="bg-gray-950 text-gray-50 py-24 md:py-24 lg:py-32 flex justify-center "
        >
          <div className="container grid md:flex md:justify-around gap-8 px-4 md:px-6 md:items-center">
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
              <img
                alt="Swopnil Sapkota"
                className=" rounded-full w-40 h-40 md:w-60 md:h-60 bg-white"
                height={128}
                src="/assets/members/SwopnilPNG.png"
                style={{
                  aspectRatio: "128/128",
                  objectFit: "cover",
                }}
                width={128}
              />
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Swopnil Sapkota
                </h1>
                <p className="text-gray-400 max-w-[500px]">
                  I'm a Computer Engineer with a passion for building innovative
                  and user-friendly applications. I specialize in full-stack
                  development, leveraging the latest technologies to create
                  impactful solutions.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end text-center md:text-right gap-4 ">
              <Button className="w-full md:w-auto" size="lg">
                <Link
                  href={
                    "https://drive.google.com/file/d/1gF9zqHHTDsYxJnAaJRQ-ZogVfJ0n8yDI/view?usp=sharing"
                  }
                  target="_blank"
                >
                  View CV
                </Link>
              </Button>
              <div className="flex gap-4 ">
                <Link
                  className="text-gray-400 hover:text-gray-50"
                  href="https://github.com/Swopnil-Sapkota"
                >
                  <GithubIcon className="h-6 w-6" />
                </Link>
                <Link
                  className="text-gray-400 hover:text-gray-50"
                  href="https://www.linkedin.com/in/swopnil-sapkota-aurash-b21315222/"
                >
                  <LinkedinIcon className="h-6 w-6" />
                </Link>
                <Link
                  className="text-gray-400 hover:text-gray-50"
                  href="https://www.instagram.com/aurash.sapkota/"
                >
                  <InstagramIcon className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-12 md:py-24 lg:py-32 flex justify-center"
          id="about"
        >
          <div className="container px-4 md:px-6 md:flex md:justify-center md:w-full">
            <div className="grid md:flex md:justify-center gap-8 md:w-full ">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">
                  About Me
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  I am a Computer Engineer with a strong background in
                  full-stack development. I have experience working with a
                  variety of technologies, including React, Node.js, and
                  MongoDB. I am passionate about creating innovative and
                  user-friendly applications that solve real-world problems.
                </p>
                <p className="text-gray-500 dark:text-gray-400 mt-4">
                  In my free time, I enjoy exploring new technologies, reading
                  about the latest industry trends, and contributing to
                  open-source projects. I am always eager to learn and grow, and
                  I am committed to delivering high-quality work to my clients
                  and collaborators.
                </p>
              </div>
              <div className="md:w-1/2 md:flex md:justify-end">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-4 ">
                    My Skills
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-950 text-gray-50 px-4 py-2 rounded-lg  hover:text-[#61DAFB]">
                      <RedoDotIcon className="h-6 w-6 mb-2" />
                      <div>React</div>
                    </div>
                    <div className="bg-gray-950 text-gray-50 px-4 py-2 rounded-lg  hover:text-[#75AC63]">
                      <LeafIcon className="h-6 w-6 mb-2" />
                      <div>Node.js</div>
                    </div>
                    <div className="bg-gray-950 text-gray-50 px-4 py-2 rounded-lg  hover:text-[#12924F]">
                      <DatabaseIcon className="h-6 w-6 mb-2" />
                      <div>MongoDB</div>
                    </div>
                    <div className="bg-gray-950 text-gray-50 px-4 py-2 rounded-lg  hover:text-[#38BDF8]">
                      <WindIcon className="h-6 w-6 mb-2" />
                      <div>Tailwind CSS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="bg-gray-950 text-gray-50 py-12 md:py-24 lg:py-32 flex justify-center"
          id="projects"
        >
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                My Projects
              </h2>
              <p className="text-gray-400 max-w-[700px] mx-auto">
                Here are some of my notable projects that showcase my skills and
                experience in full-stack development.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <Card>
                <img
                  alt="Project 1"
                  className="rounded-t-lg object-cover aspect-[3/2]"
                  height={400}
                  src="/assets/projects/gumba.png"
                  width={600}
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2">
                    Nunnery Donation Web App
                  </h3>
                  <p className="text-gray-400 mb-4">
                    This project is designed to faciliate donations and is
                    developed using{" "}
                    <span className="text-blue-600">Next.js</span>.
                  </p>
                  <div className="flex gap-2">
                    <Link
                      className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="https://gumba.vercel.app/"
                    >
                      Live Demo
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <img
                  alt="Project 2"
                  className="rounded-t-lg object-cover aspect-[3/2]"
                  height={400}
                  src="/assets/projects/bus.svg"
                  width={600}
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2">
                    Efficient-Transportation-System-with-location-tracking
                  </h3>
                  <p className="text-gray-400 mb-4">
                    This project is about booking bus tickets developed using{" "}
                    <span className="text-blue-600">Python</span>.
                  </p>
                  <div className="flex gap-2">
                    <Link
                      className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 "
                      href="https://github.com/Swopnil-Sapkota/Efficient-Transportation-System-with-location-tracking"
                    >
                      GitHub
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="">
                <video
                  src="/assets/projects/video.mp4"
                  // alt="Self-driving collision detection"
                  className="w-full  h-auto rounded-lg shadow-md mt-4 hover:scale-[1.01]"
                  controls
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2">
                    {" "}
                    Self-driving collision detection using Python
                  </h3>
                  <p className="text-gray-400 mb-4">
                    This project involves self-driving collision detection
                    developed using{" "}
                    <span className="text-blue-600">Python</span>.
                  </p>
                  <div className="flex gap-2"></div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* <section
          className="py-12 md:py-24 lg:py-32 flex justify-center"
          id="contact"
        >
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get in Touch
              </h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-[700px] mx-auto">
                If you have any questions or would like to discuss a project,
                feel free to reach out using the form below.
              </p>
            </div>
            <form className="max-w-lg mx-auto mt-8 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required type="text" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" required type="email" />
                </div>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" required rows={5} />
              </div>
              <Button className="w-full" type="submit">
                Send Message
              </Button>
            </form>
          </div>
        </section> */}
        <div id="contact">
          <ToastContainer position="top-center" autoClose={3000} />
          <section
            className={` bg-gray-100 py-20 flex px-10 items-center justify-center `}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">
                  Get in Touch
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  If you have any questions or would like to discuss a project,
                  feel free to reach out using the form below.
                </p>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                  <div className="mb-6">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-800 placeholder-gray-400"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-800 placeholder-gray-400"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="mb-6">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-800 resize-none placeholder-gray-400"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-900 transition duration-300 border-[3px] border-gray-800"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-gray-950 text-gray-50 px-4 lg:px-6 py-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm">© 2024 Swopnil Sapkota. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-sm hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function DatabaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37a4 4 0 1 1-7.94 1.37 4 4 0 0 1 7.94-1.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LeafIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function RedoDotIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="17" r="1" />
      <path d="M21 7v6h-6" />
      <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
    </svg>
  );
}

function WindIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  );
}
