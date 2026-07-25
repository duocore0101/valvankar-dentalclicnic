"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  { title: "Root Canal", category: "Endodontics", desc: "Pain-free single sitting treatments." },
  { title: "Dental Implants", category: "Prosthodontics", desc: "Permanent solution for missing teeth." },
  { title: "Braces", category: "Orthodontics", desc: "Traditional and ceramic braces." },
  { title: "Smile Makeover", category: "Cosmetic", desc: "Veneers and complete smile design." },
  { title: "Teeth Whitening", category: "Cosmetic", desc: "Instant brightening in one sitting." },
  { title: "Invisible Aligners", category: "Orthodontics", desc: "Clear, removable aligners." },
  { title: "Dental Crowns", category: "Prosthodontics", desc: "Zirconia and ceramic crowns." },
  { title: "Kids Dentistry", category: "Pedodontics", desc: "Gentle care for little smiles." },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block"
          >
            Premium Treatments
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6"
          >
            Comprehensive Care <br className="hidden md:block"/> for Your Perfect Smile
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl p-8 rounded-3xl border border-white/20 dark:border-white/10 shadow-sm hover:shadow-2xl overflow-hidden cursor-pointer"
            >
              {/* Gradient border effect via pseudo element */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative z-10">
                <span className="text-xs font-semibold text-accent mb-2 block uppercase tracking-wider">{service.category}</span>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:text-accent transition-colors">
                  Learn more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
