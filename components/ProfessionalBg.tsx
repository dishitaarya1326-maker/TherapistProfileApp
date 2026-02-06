"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    title: "Education",
    content:
      "PsyD in Clinical Psychology from an APA-accredited program, with focused training in anxiety, trauma, and adult psychotherapy.",
  },
  {
    title: "Licensure",
    content:
      "Licensed Clinical Psychologist in the state of California (Fictional).",
  },
  {
    title: "Certifications",
    content:
      "EMDR Therapy, Cognitive Behavioral Therapy (CBT), and mindfulness-based stress reduction.",
  },
];

export default function ProfessionalBackground() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#c8d9e8] py-20 px-6">

      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl text-center text-[var(--sage-dark)] font-semibold mb-10">
          My Professional Background
        </h2>

        {items.map((item, index) => (
          <div
            key={index}
            className="border-t border-[var(--sage-light)] last:border-b"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center py-4 text-left text-xl text-[var(--sage-dark)]"
            >
              {item.title}

              <motion.span
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-2xl text-[var(--olive)]"
              >
                +
              </motion.span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-4 pr-6 text-base text-gray-600 leading-relaxed">
                    {item.content}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
