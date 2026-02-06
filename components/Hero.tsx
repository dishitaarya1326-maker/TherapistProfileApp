"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-[#E6F0FA] w-full pt-16"> {/* pt-16 for fixed header */}
      <div className="mx-auto w-full px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="py-12 md:py-16 lg:py-20 xl:py-24"> {/* Increased padding */}
          <div className="flex flex-col lg:flex-row items-center">
            
            {/* Image - Left - Larger size */}
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center"
              >
                <div className="w-72 sm:w-80 md:w-96 lg:w-[420px] xl:w-[480px]"> {/* Larger image */}
                  <div className="aspect-[3/4] rounded-t-[180px] md:rounded-t-[200px] lg:rounded-t-[220px] xl:rounded-t-[240px] overflow-hidden">
                    <img
                      src="/maya.jpg"
                      alt="Dr. Maya Reynolds, PsyD"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Content - Right */}
            <div className="w-full lg:w-1/2 lg:pl-10 xl:pl-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center lg:text-left"
              >
                <p className="uppercase tracking-widest text-xs sm:text-sm md:text-base text-[#7B95AE] mb-4 md:mb-6">
                  Licensed Clinical Psychologist · Santa Monica, CA
                </p>

                <h1 className="text-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-semibold text-[#2E2A28] mb-6 md:mb-8">
                Thoughtful therapy for anxiety, trauma, and burnout.
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-[#5F6F82] mb-8 md:mb-10">
                  I work with adults who appear high-functioning on the outside, yet
                  feel internally overwhelmed, emotionally tense, or stuck
                  in patterns shaped by anxiety, trauma, or chronic stress.
                </p>

               <a href="#contact">
  <button className="border border-[#2E2A28] px-8 sm:px-10 md:px-12 py-3 md:py-4 text-sm sm:text-base md:text-lg hover:bg-black hover:text-white transition-colors">
    Schedule a Consultation
  </button>
</a>

              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}