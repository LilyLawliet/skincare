import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/heroImage.png";

// Review data with real faces (randomuser API placeholders)
const reviews = [
  {
    id: 1,
    name: "Isabella Kim",
    role: "Beauty Editor",
    text: "The Lumiére Essence feels like silk gliding on my skin. My complexion has never looked this luminous. It’s a ritual I look forward to every morning.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Sophia Park",
    role: "Skincare Enthusiast",
    text: "Celestial Cream is pure magic. It hydrates deeply without ever feeling heavy. My skin feels plump and alive, like I just stepped out of a spa.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 3,
    name: "Amélie Laurent",
    role: "Model",
    text: "I’ve tried endless products, but Lumiére is different. It’s not skincare, it’s confidence bottled. Subtle, timeless, and absolutely transformative.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 4,
    name: "Hana Suzuki",
    role: "Makeup Artist",
    text: "Pure Bloom Cleanser feels like a reset button for my skin. Gentle, refreshing, and so soothing after long days under makeup lights.",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
  },
  {
    id: 5,
    name: "Elena Rossi",
    role: "Fashion Stylist",
    text: "With Lumiére, I no longer hide behind makeup. My skin feels radiant enough to be the centerpiece itself — effortless beauty.",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
  },
];

const SectionFour = () => {
  return (
    <section
      id="reviews"
      className="relative w-full min-h-screen bg-cover bg-center flex items-center py-24 overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 z-10 w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-gray-900">
            Voices of <span className="font-serif italic">Radiance</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-700 font-light max-w-2xl mx-auto">
            Loved by editors, creators, and everyday muses — Lumiére is more
            than skincare. It’s a story told by glowing skin and whispered
            through timeless reviews.
          </p>
        </motion.div>

        {/* Infinite Carousel */}
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
        >
          {[...reviews, ...reviews].map((item, index) => (
            <div
              key={index}
              className="min-w-[300px] md:min-w-[360px] flex flex-col justify-between p-8 rounded-3xl bg-white/40 backdrop-blur-lg border border-white/30 shadow-xl hover:shadow-2xl transition group"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-md group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text */}
              <p className="text-gray-700 font-light text-center leading-relaxed mb-6">
                “{item.text}”
              </p>

              {/* Name + Role */}
              <div className="text-center">
                <h3 className="text-xl font-serif text-gray-900">
                  {item.name}
                </h3>
                <span className="text-sm text-gray-600 italic">{item.role}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionFour;
