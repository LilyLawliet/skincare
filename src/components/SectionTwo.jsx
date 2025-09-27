import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/heroImage.png";
import product1 from "../assets/essence.png";
import product2 from "../assets/cream.png";
import product3 from "../assets/cleanser.png";

const products = [
  {
    id: 1,
    name: "Lumiére Essence",
    desc: "A featherlight serum infused with pearl dew and botanicals that awaken your natural glow.",
    price: "$68",
    image: product1,
  },
  {
    id: 2,
    name: "Celestial Cream",
    desc: "Deep hydration in a cloud-like texture — your skin, renewed with a timeless softness.",
    price: "$92",
    image: product2,
  },
  {
    id: 3,
    name: "Pure Bloom Cleanser",
    desc: "A gentle foaming cleanse inspired by Korean rituals, leaving only clarity behind.",
    price: "$48",
    image: product3,
  },
];

const SectionTwo = () => {
  return (
    <section
      id="products"
      className="relative w-full min-h-screen bg-cover bg-center flex items-center py-24"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]" />

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
            Our <span className="font-serif italic">Signature Collection</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-700 font-light max-w-2xl mx-auto">
            Crafted with rare botanicals and modern Korean science, every drop
            of Lumiére is a ritual. Indulge in products designed not just to
            care for your skin — but to redefine beauty itself.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {products.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -8 }}
              whileTap={{ scale: 0.98 }}
              className="w-full h-[480px] flex flex-col justify-between p-6 rounded-3xl bg-white/50 backdrop-blur-lg border border-white/30 shadow-xl hover:shadow-2xl transition cursor-pointer group"
            >
              {/* Product Image */}
              <div className="flex justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-60 w-auto rounded-2xl object-cover drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-grow justify-between text-center mt-4">
                <h3 className="text-2xl font-serif text-gray-900 mb-2 group-hover:scale-105 transition-transform">
                  {item.name}
                </h3>
                <p className="text-gray-700 font-light mb-6 px-2">{item.desc}</p>
              </div>

              {/* Price + CTA */}
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-gray-900">
                  {item.price}
                </span>
                <button className="px-5 py-2 rounded-full bg-black text-white font-medium hover:bg-gray-900 transition shadow-sm">
                  Add to Bag
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
