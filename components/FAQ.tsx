"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    q: "Do you offer in-person and virtual sessions?",
    a: "Yes. I offer in-person therapy from my Santa Monica office as well as secure telehealth sessions for clients located anywhere in California."
  },
  {
    q: "Do you accept insurance?",
    a: "I work as a private-pay provider and do not accept insurance directly. I’m happy to provide a superbill if you’d like to seek out-of-network reimbursement."
  },
  {
    q: "What are your session rates?",
    a: "Standard individual therapy sessions are 50 minutes. Please reach out directly for current rates and availability."
  },
  {
    q: "What issues do you specialize in?",
    a: "I specialize in working with anxiety, panic, trauma, burnout, and perfectionism—particularly for high-achieving adults who feel overwhelmed or emotionally exhausted."
  },
  {
    q: "How do I know if therapy with you is a good fit?",
    a: "Finding the right therapist is important. I offer an initial consultation so we can talk about what you’re looking for and see if my approach feels supportive and aligned for you."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
    id = "faq"
     className="bg-[#c7bfc8] py-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start"
        >
          <div className="w-[260px] sm:w-[300px] md:w-[360px] h-[420px] sm:h-[550px] overflow-hidden rounded-t-[999px]">
            <img
              src="/therapy.png"
              alt="Quiet, calming detail"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* FAQ Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-[#1F2937]">
            FAQs
          </h2>

          <div className="border-t border-[#181619]">
            {items.map((item, i) => (
              <div key={i} className="border-b border-[#181619] py-6">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex justify-between items-center text-left text-lg sm:text-xl text-[#1F2937]"
                >
                  <span>{item.q}</span>

                  <motion.span
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="text-2xl font-light text-[#1F2937]"
                  >
                    {open === i ? "–" : "+"}
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-[#4B5563] text-base sm:text-lg leading-relaxed max-w-xl">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
