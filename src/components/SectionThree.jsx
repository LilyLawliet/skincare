import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/flowers.png"; // replace with a luxury skincare styled photo

const SectionThree = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-gradient-to-b from-rose-50 via-white to-pink-50 flex items-center py-24"
    >
      {/* Decorative floating element */}
      <motion.div
        className="absolute top-20 left-12 w-36 h-36 rounded-full bg-pink-100 opacity-40 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-16 right-20 w-48 h-48 rounded-full bg-rose-100 opacity-30 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-left"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6 leading-tight">
            Rooted in{" "}
            <span className="italic text-rose-600">Tradition</span>,  
            Perfected by{" "}
            <span className="italic text-rose-500">Science</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed max-w-xl">
            At <span className="font-semibold">Lumiére</span>, we believe skincare is more than 
            routine — it’s ritual. Inspired by centuries of Korean beauty wisdom 
            and enhanced with modern dermatological research, our formulas 
            are designed to nurture, renew, and illuminate.  
          </p>
          <p className="mt-6 text-gray-700 font-light leading-relaxed max-w-xl">
            Every product is crafted with purity at its heart: sustainably sourced 
            botanicals, clean science, and textures that whisper luxury on your skin.  
            With Lumiére, beauty is timeless — and so are you.
          </p>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 px-8 py-3 rounded-full bg-gray-900 text-white font-medium shadow-md hover:bg-black transition"
          >
            Discover Our Story
          </motion.button>
        </motion.div>

        {/* Right Image */}
{/* Right Image */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
  viewport={{ once: true }}
  className="relative flex justify-center"
>
  <motion.img
    src={aboutImg}
    alt="About Lumiére"
    className="
      w-[400px] object-cover rounded-2xl
      md:w-[400px] md:h-[400px]
      sm:w-[280px] sm:h-[280px]
      max-[350px]:w-[200px] max-[350px]:h-[200px]
      max-w-full h-auto
    "
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.6 }}
  />

        </motion.div>
      </div>
    </section>
  );
};

export default SectionThree;
