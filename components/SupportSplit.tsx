"use client";
import { motion } from "framer-motion";

export default function SupportSplit() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh] md:min-h-[80vh] overflow-hidden">

      {/* Image Side */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full h-lvh"
      >
        <img
          src="/image copy.png"
          alt="Calm reflective moment"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content Side */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
        className="bg-[#E6E3EC] flex items-center h-full px-8 sm:px-12 lg:px-20 py-16"
      >
        <div className="max-w-xl">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E3329] mb-6 leading-tight">
            Support that meets you{" "}
            <em className="italic font-normal">where you are.</em>
          </h2>

          <p className="text-[#4A4F45] mb-6 text-base sm:text-lg">
            You may be considering therapy if you’re experiencing:
          </p>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.08 }
              }
            }}
            className="list-disc pl-5 space-y-4 text-[#4A4F45] text-base sm:text-lg"
          >
            {[
              "Ongoing stress, anxiety, or emotional overwhelm",
              "Difficulty managing relationships or boundaries",
              "Low mood, burnout, or loss of motivation",
              "Challenges with self-esteem or confidence",
              "Feeling stuck, disconnected, or unsure of next steps"
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <p className="text-[#4A4F45] mt-8 text-base sm:text-lg">
            Dr. Maya offers a compassionate, evidence-based approach to help you
            gain clarity, resilience, and a deeper understanding of yourself.
          </p>

          <div className="mt-14 border-t border-[#C9C5D3] pt-6">
            <a
  href="#about"
  className="text-sm tracking-wide uppercase text-[#2E3329] hover:opacity-80 transition inline-block"
>
  Learn about Dr. Maya →
</a>

          </div>

        </div>
      </motion.div>
    </section>
  );
}
