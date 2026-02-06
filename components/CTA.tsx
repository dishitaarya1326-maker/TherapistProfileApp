"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <motion.section
      className="bg-[#ddcbe0] text-black text-center py-24 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-5xl mb-6 font-semibold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        Get started today.
      </motion.h2>

      <motion.p
        className="max-w-2xl mx-auto mb-12 text-lg leading-relaxed opacity-90"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Ready to take the first step towards a happier, healthier you?
        <br />
        Contact me to book your first session. I look forward to starting
        this therapeutic journey with you.
      </motion.p>

      <a href="#contact">
  <motion.button
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="group border border-black px-12 py-4 tracking-wide flex items-center gap-3 mx-auto hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black"
  >
    GET IN TOUCH
    <motion.span
      initial={{ x: 0 }}
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      →
    </motion.span>
  </motion.button>
</a>

    </motion.section>
  );
}
