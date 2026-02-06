"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function IntroSplit() {
  return (
<section
  id="about"
  className="bg-gradient-to-br from-[#F8FBFF] to-[#EFF5FF] relative overflow-hidden"
>
      {/* Decorative blue elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#E6F0FA]/50 rounded-full -translate-x-1/2 -translate-y-1/2 hidden lg:block"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#D6E2EC]/30 rounded-full translate-x-1/4 translate-y-1/4 hidden lg:block"></div>
      
      {/* Mobile Layout */}
      <div className="lg:hidden relative z-10">
        <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px]">
          <Image
            src="/introsplit.jpg"
            alt="Therapy office interior"
            fill
            className="object-cover filter brightness-95"
            priority
          />
          {/* Blue tint overlay */}
          <div className="absolute inset-0 bg-[#5A7FA6]/20 mix-blend-overlay" />
        </div>

        <div className="w-full px-4 sm:px-6 py-10 sm:py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-0.5 bg-[#5A7FA6]"></div>
              <span className="text-sm font-medium text-[#5A7FA6] uppercase tracking-wider">
                About
              </span>
              <div className="w-6 h-0.5 bg-[#5A7FA6]"></div>
            </div>

            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-medium text-[#2E2A28] mb-6 sm:mb-8">
              About My Practice
            </h2>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-[#4A5D7C] leading-relaxed"> {/* Blue-gray text */}
                My practice is designed to be more than just a therapy session—it's a space where
                clients can pause, reflect, and explore challenges in a safe, supportive environment.
                Every detail, from the lighting to the seating, is intended to help you feel grounded
                and at ease.
              </p>
              
              <p className="text-base sm:text-lg text-[#4A5D7C] leading-relaxed">
                I focus on creating a collaborative experience, helping clients uncover patterns,
                build coping strategies, and develop resilience. The goal is to leave therapy feeling
                understood, empowered, and ready to engage with life more fully.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block relative min-h-[600px] xl:min-h-[700px]">
        {/* Text container */}
        <div className="relative z-10 h-full">
          <div className="mx-auto max-w-7xl h-full">
            <div className="flex items-center h-full">
              <div className="w-1/2 py-16 lg:py-20 xl:py-24 pl-6 lg:pl-8 xl:pl-10 pr-10">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="max-w-xl"
                >
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-8 h-0.5 bg-[#5A7FA6]"></div>
                    <span className="text-sm font-medium text-[#5A7FA6] uppercase tracking-wider">
                      About
                    </span>
                    <div className="w-8 h-0.5 bg-[#5A7FA6]"></div>
                  </div>

                  <h2 className="text-[36px] lg:text-[40px] xl:text-[44px] font-bold text-[#2E2A28] mb-8 xl:mb-10">
                    About My Practice
                  </h2>

                  <div className="space-y-6 xl:space-y-8">
                    <p className="text-lg xl:text-xl text-[#4A5D7C] leading-relaxed">
                      My practice is designed to be more than just a therapy session — it's a space where
                      clients can pause, reflect, and explore challenges in a safe, supportive environment.
                      Every detail, from the lighting to the seating, is intended to help you feel grounded
                      and at ease.
                    </p>
                    
                    <p className="text-lg xl:text-xl text-[#4A5D7C] leading-relaxed">
                      I focus on creating a collaborative experience, helping clients uncover patterns,
                      build coping strategies, and develop resilience. The goal is to leave therapy feeling
                      understood, empowered, and ready to engage with life more fully.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-0 right-0 bottom-0 w-[55%] lg:w-[60%] xl:w-[50%]"
        >
          <Image
            src="/office2.jpeg"
            alt="Therapy office interior"
            fill
            className="object-cover object-left"
            priority
          />
          {/* Blue gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#D5CCF2]/50 via-[#F5F1FD]/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}