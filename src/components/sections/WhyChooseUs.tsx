"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const reasons = [
  { title: "Latest Technology", desc: "Equipped with advanced 3D scanners, lasers, and digital X-rays." },
  { title: "Experienced Doctors", desc: "Specialists with 15+ years of clinical excellence." },
  { title: "Modern Equipment", desc: "Premium dental chairs and sterilized tools for safety." },
  { title: "Affordable Treatment", desc: "Transparent pricing with flexible payment options." },
  { title: "Easy Appointment", desc: "Zero waiting time with our streamlined booking system." },
  { title: "Patient Satisfaction", desc: "98% success rate and thousands of happy smiles." },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block"
            >
              Why Choose Us
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6"
            >
              Excellence in <br />
              <span className="text-primary italic">Dental Care</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-md"
            >
              We combine artistic vision with clinical expertise to deliver exceptional results in a luxurious, spa-like environment.
            </motion.p>

            <div className="space-y-6">
              {reasons.map((reason, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="mt-1 bg-accent/10 p-1.5 rounded-full text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-foreground">{reason.title}</h4>
                    <p className="text-muted-foreground text-sm">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-[3rem] blur-3xl transform rotate-3 scale-105"></div>
            <div className="relative bg-white dark:bg-slate-800 p-8 rounded-[3rem] shadow-2xl border border-white/50 backdrop-blur-sm">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative bg-muted">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
                   <div className="text-6xl font-heading font-bold text-accent mb-2">15+</div>
                   <div className="text-lg font-medium text-foreground uppercase tracking-widest">Years Experience</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
