// import React from "react";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   return (
//     <motion.nav
//       initial={{ y: -60, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-100"
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <div className="text-2xl font-serif tracking-tight text-gray-900">
//           Lumiére
//         </div>

//         {/* Nav Links */}
//         <div className="hidden md:flex gap-10 text-gray-700 font-light uppercase tracking-wide">
//           <a href="#products" className="hover:text-black transition-colors">
//             Products
//           </a>
//           <a href="#about" className="hover:text-black transition-colors">
//             About
//           </a>
//           <a href="#reviews" className="hover:text-black transition-colors">
//             Reviews
//           </a>
//           <a href="#contact" className="hover:text-black transition-colors">
//             Contact
//           </a>
//         </div>

//         {/* CTA */}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.98 }}
//           className="px-6 py-2 rounded-full bg-black text-white font-medium shadow-sm hover:bg-gray-900 transition"
//         >
//           Shop Now
//         </motion.button>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // smooth scroll

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-serif tracking-tight text-gray-900">
            <Link
            to="home"
            smooth={true}
            duration={800}
            offset={-80}
            className="cursor-pointer hover:text-black transition-colors"
          >
          Lumiére
          </Link>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-10 text-gray-700 font-light uppercase tracking-wide">
          <Link
            to="products"
            smooth={true}
            duration={800}
            offset={-80}
            className="cursor-pointer hover:text-black transition-colors"
          >
            Products
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={800}
            offset={-80}
            className="cursor-pointer hover:text-black transition-colors"
          >
            About
          </Link>
          <Link
            to="reviews"
            smooth={true}
            duration={800}
            offset={-80}
            className="cursor-pointer hover:text-black transition-colors"
          >
            Reviews
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={800}
            offset={-80}
            className="cursor-pointer hover:text-black transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-2 rounded-full bg-black text-white font-medium shadow-sm hover:bg-gray-900 transition"
        >
          Shop Now
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
