"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./styles.module.css";

const ContactUs: React.FC = () => {
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
    <div id="contact">
      <ToastContainer position="top-center" autoClose={3000} />
      <section
        className={` ${styles.container} bg-gray-100 pt-28 pb-10 flex px-10 items-center justify-center `}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-red-800 mb-8">Contact Us</h1>
            <p className="text-lg text-gray-700 mb-8">
              Have a question, feedback, or want to discuss a project? Feel free
              to reach out to us! You can contact us via the form below.
            </p>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="mb-6">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-800 placeholder-gray-400"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-800 placeholder-gray-400"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-800 resize-none placeholder-gray-400"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-800 text-white py-3 rounded-md hover:bg-red-900 transition duration-300 border-[3px] border-red-800"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <img src="/contactUs.svg" alt="" className={` ${styles.img}  w-6/12`} />
      </section>
    </div>
  );
};

export default ContactUs;
