import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import heroImage from "../assets/heroImage.png";

const SectionFive = () => {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-cover bg-center flex flex-col justify-between py-24"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 z-10 w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-gray-900">
            Let’s <span className="font-serif italic">Connect</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-700 font-light max-w-2xl mx-auto">
            Whether it’s about skincare, collaborations, or radiant stories —
            Lumiére is always here to listen. Reach out, and let’s create beauty
            together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-gray-800" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="text-gray-700 font-light">
                  hello@lumiereskincare.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-gray-800" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                <p className="text-gray-700 font-light">+82 123 456 789</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-gray-800" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Location</h3>
                <p className="text-gray-700 font-light">
                  Seoul, South Korea · Paris, France
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/40 backdrop-blur-md border border-white/30 rounded-3xl shadow-xl p-8 space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-800">
                Name
              </label>
              <input
                type="text"
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 bg-white/70"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800">
                Email
              </label>
              <input
                type="email"
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 bg-white/70"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 bg-white/70"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 rounded-xl bg-black text-white font-medium shadow-md hover:bg-gray-900 transition"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 mt-24 text-center text-gray-600 text-sm font-light"
      >
        <p>© {new Date().getFullYear()} Lumiére Skincare. All rights reserved.</p>
        <p className="mt-2 italic">Made with love & radiance ✨</p>
      </motion.footer>
    </section>
  );
};

export default SectionFive;
