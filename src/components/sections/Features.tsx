"use client";

import { motion, Variants } from "framer-motion";
import { Laptop, HeartPulse, Sparkles, UserCheck } from "lucide-react";

const features = [
  {
    icon: Laptop,
    title: "Digital Dentistry",
    description: "State-of-the-art digital scanning and 3D printing for precise, faster, and more comfortable treatments.",
  },
  {
    icon: HeartPulse,
    title: "Pain-Free Treatment",
    description: "Advanced techniques and premium anesthesia ensure a relaxing and completely pain-free experience.",
  },
  {
    icon: Sparkles,
    title: "Sterilized Environment",
    description: "Class B autoclaves and strict international sterilization protocols for your ultimate safety.",
  },
  {
    icon: UserCheck,
    title: "Personalized Care",
    description: "Tailored treatment plans designed specifically for your unique dental needs and smile goals.",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Features() {
  return (
    <section className="py-24 bg-background relative z-10 -mt-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group bg-white dark:bg-slate-800/50 p-8 rounded-3xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out relative overflow-hidden"
            >
              {/* Decorative gradient blob on hover */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors duration-500"></div>
              
              <div className="w-14 h-14 bg-secondary dark:bg-slate-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300 text-primary">
                <feature.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
