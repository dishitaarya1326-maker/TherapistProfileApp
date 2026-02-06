"use client";
import { motion } from "framer-motion";

export default function Background() {
  return (
    <section 
    id = "therapeautic approach"
    className="bg-[#EEF1EC] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[70vh]">

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="px-8 py-16 sm:px-16 lg:px-24"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#2F3A2E]">
            Meet your therapist.
          </h2>

          <p className="text-base sm:text-lg mb-4 text-[#4F5C4A]">
            I’m a licensed therapist who supports adults in navigating life’s
            transitions with care, clarity, and presence.
          </p>

          <p className="text-base sm:text-lg mb-10 text-[#4F5C4A]">
            My approach blends evidence-based techniques with a warm,
            collaborative space where you can feel understood and supported.
          </p>

          <div className="border-t border-[#BFC8BA] pt-6">
           
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="h-[50vh] md:h-full bg-[#DDE3DA]"
        >
          <img
            src="/meettherapist.png"
            alt="Calm, grounding atmosphere"
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </motion.div>

      </div>
    </section>
  );
}
