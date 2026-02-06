"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Office() {
  return (
    <section 
    id = "contact"
    className="w-full bg-[#F7F4EF] py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Arrival Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-s tracking-[0.3em] uppercase text-[#8A7F73] mb-4"
        >
          Arriving at the Space
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold text-[#2E2A27] mb-5"
        >
          A quiet place to slow down
        </motion.h2>

        {/* Short Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-[#4A4642] leading-relaxed mb-14"
        >
          From the moment you step inside, the office is designed to help your
          body and mind settle. The space is private, uncluttered, and softly lit—
          supporting a sense of safety, ease, and presence before the session
          begins.
        </motion.p>

        {/* Images as windows */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-8 justify-center mb-16"
        >
          <div className="overflow-hidden rounded-[28px] border border-[#E2DBD1] bg-white">
            <img
              src="/introsplit.jpg"
              alt="Therapy office interior"
              className="w-full h-[420px] object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-[28px] border border-[#E2DBD1] bg-white md:mt-12">
            <img
              src="/office2.jpeg"
              alt="Calm therapy space"
              className="w-full h-[372px] object-cover"
            />
          </div>
        </motion.div>

        {/* Grounding points */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-sm text-[#5A554F]"
        >
          <p>Quiet, private setting designed for emotional safety</p>
          <p>Natural light and warm, neutral tones throughout</p>
          <p>A calm environment that supports nervous system regulation</p>
        </motion.div>

        {/* Location */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2 text-[#6B625A] text-sm">
            <MapPin className="w-4 h-4" />
            <span>123th Street 45 W, Santa Monica, CA 90401</span>
          </div>
        </div>
      </div>
      {/* Contact Details */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mt-12 text-center text-sm text-[#4A4642] space-y-3"
>
  <p>
    Phone:{" "}
    <a
      href="tel:+13105550123"
      className="underline underline-offset-4 hover:text-[#2E2A27]"
    >
      (310) 555-0123
    </a>
  </p>

  <p>
    Email:{" "}
    <a
      href="mailto:contact@mayareynoldspsychology.com"
      className="underline underline-offset-4 hover:text-[#2E2A27]"
    >
      contact@mayareynoldspsychology.com
    </a>
  </p>

  <p className="pt-4 text-xs text-[#7A746E] max-w-md mx-auto leading-relaxed">
    In-person sessions are offered at the Santa Monica office. Secure telehealth
    sessions are available for clients located in California.
  </p>
</motion.div>

    </section>
    
  );
}
