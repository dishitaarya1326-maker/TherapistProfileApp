"use client";
import { motion } from "framer-motion";

const specialties = [
  {
    title: "Anxiety & Panic",
    description:
      "Support for constant worry, panic attacks, and persistent anxiety that interferes with daily life and emotional balance.",
    image: "/image.png",
  },
  {
    title: "Trauma & EMDR",
    description:
      "Carefully paced trauma therapy using evidence-based approaches, including EMDR, to support safety and long-term healing.",
    image: "/emdr.png",
  },
  {
    title: "Burnout & Perfectionism",
    description:
      "Helping high-achieving adults move beyond exhaustion, self-criticism, and chronic pressure.",
    image: "/burnout.png",
  },
  {
    title: "Relationship Stress",
    description:
      "Support for navigating communication challenges, emotional patterns, and building healthier connections.",
    image: "/rlpstress.png",
  },
  {
    title: "Self-Esteem & Confidence",
    description:
      "Developing a stronger sense of self-worth while easing self-doubt and internal criticism.",
    image: "/selfconfidence.png",
  },
  {
    title: "Mindfulness & Regulation",
    description:
      "Body-oriented and mindfulness-based tools to manage stress, improve sleep, and feel more grounded.",
    image: "/regulation.png",
  },
];

export default function Specialties() {
  return (
    <section
    id = "services"
    className="bg-[#dde4ef] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

<div className="flex justify-center mb-6">
  <div className="inline-flex items-center gap-3">
    <div className="w-8 h-0.5 bg-[#5A7FA6]"></div>
    <span className="text-sm font-medium text-[#5A7FA6] uppercase tracking-wider">
      Specialties
    </span>
    <div className="w-8 h-0.5 bg-[#5A7FA6]"></div>
  </div>
</div>


        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d3854] mb-4">
            My Specialties
          </h2>
          <p className="text-[#0f1215] max-w-3xl mx-auto text-base sm:text-lg">
            Areas of focus in my work with adults navigating anxiety, trauma, burnout,
            and relationship challenges.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {specialties.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="border-2 border-[#293645] bg-[#FBFCFD] p-8 flex flex-col items-center text-center"
            >
              {/* Image */}
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-[#283a4c] shadow-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <h3 className="text-xl font-medium text-[#243B53] mb-3">
                {item.title}
              </h3>
              <p className="text-[#5E7387] text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
