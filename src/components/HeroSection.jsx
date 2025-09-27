import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/heroImage.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay for soft fade effect */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative space-y-6 max-w-3xl p-12 rounded-3xl"
      >
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-gray-900 leading-tight">
          Redefine <br />{" "}
          <span className="font-serif italic">Timeless Beauty</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed">
          Inspired by modern Korean aesthetics, Lumiére elevates your daily
          skincare into a ritual — minimal, pure, and designed to let your
          natural glow shine through.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center pt-4"
        >
          <button className="px-12 py-3 bg-black text-white font-medium transition-all duration-500 shadow-md hover:bg-white hover:text-black border border-black">
            Shop Collection
          </button>
          <button className="px-12 py-3 bg-white text-black font-medium transition-all duration-500 shadow-md hover:bg-black hover:text-white border border-black">
            Discover More
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
