import type React from "react";

import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section>
      <header className="relative h-[60vh] bg-[url('/rooms/rooms-bg.jpg')] bg-cover bg-center">
        <div className="container mx-auto max-w-7xl min-h-[60vh] relative z-10 px-4 flex items-center">
          <div className="flex flex-col md:flex-row justify-between items-center w-full">
            <div className="flex flex-col justify-start w-full md:w-2/3 text-[var(--background)]">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-light uppercase leading-tight">
                Contact Us
              </h1>
              <h4 className="text-base md:text-lg font-light uppercase leading-tight">
                CONTACT US FOR ASSISTANCE THROUGH EMAIL, PHONE, OR WEBSITE.
              </h4>
            </div>
          </div>
        </div>
      </header>
      <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left Column - Get in Touch */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Have a question about our whimsical accommodations or exciting
              activities? Want to book your dream vacation? Reach out to us
              today. You can email us or call us.
            </p>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 rounded-full p-3 text-white flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Address</h3>
                  <p className="text-gray-700">
                    Purok 1 Barangay Tambo Babak, Island Garden City of Samal,
                    Davao del Norte
                  </p>
                </div>
              </div>

              {/* Contact Number */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 rounded-full p-3 text-white flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Contact Number</h3>
                  <p className="text-gray-700">+63 920 6397 251</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 rounded-full p-3 text-white flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-700">
                    kawaiibeachresortcorp@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-8"></div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Follow Us:</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex-1">
            <div className="border border-gray-200 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-4">
                    By submitting, you agree to the processing of your personal
                    data by Kawaii as prescribed in the privacy statement.
                  </p>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 border border-gray-200 rounded-3xl overflow-hidden h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1961.2009894737287!2d125.6906496!3d7.160556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96943309496df%3A0x42fe4a61206df610!2sKawaii%20Beach%20Resort!5e0!3m2!1sen!2sph!4v1699261234567!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kawaii Beach Resort Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
