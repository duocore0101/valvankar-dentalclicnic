"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Aisha Sharma",
    treatment: "Smile Makeover",
    text: "The level of care at Valvankar Dental Clinic is unmatched. The clinic feels like a premium spa, and Dr. Valvankar transformed my smile completely pain-free.",
    rating: 5,
  },
  {
    name: "Rahul Desai",
    treatment: "Dental Implants",
    text: "I was extremely anxious about getting implants. The technology they use is mind-blowing. I was watching my favorite show while they worked, and I felt nothing. Truly world-class.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    treatment: "Root Canal Treatment",
    text: "Never thought a root canal could be this comfortable. The attention to detail, the sterilized environment, and the warm staff make this the best clinic in the city.",
    rating: 5,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
           <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block"
          >
            Patient Stories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6"
          >
            Smiles We've Transformed
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          
          <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-20">
            <button onClick={prev} className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg border border-border hover:text-accent hover:scale-110 transition-all">
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-20">
            <button onClick={next} className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg border border-border hover:text-accent hover:scale-110 transition-all">
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="overflow-hidden px-4 py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl p-10 md:p-14 rounded-[2rem] border border-white/20 dark:border-white/10 shadow-2xl relative"
              >
                <Quote className="absolute top-10 left-10 text-accent/20 w-20 h-20 -z-10 rotate-180" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-10">
                  "{testimonials[current].text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-tr from-accent to-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-foreground">{testimonials[current].name}</h4>
                    <p className="text-accent text-sm font-medium">{testimonials[current].treatment}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>

      </div>
    </section>
  );
}
