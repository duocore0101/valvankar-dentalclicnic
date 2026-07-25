"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ShieldCheck, Stethoscope, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background with Gradient Blobs */}
      <div className="absolute inset-0 z-0 bg-background overflow-hidden">
        <motion.div
          animate={{ x: [-100, 100, -100], y: [-50, 50, -50] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [100, -100, 100], y: [50, -50, 50] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-10 pb-20">
        
        {/* Text Content */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6 border border-accent/20 shadow-sm"
          >
            <Sparkles size={16} />
            <span>Premium Dental Experience</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-[1.1] text-foreground mb-6"
          >
            Premium Dental Care <br />
            <span className="text-primary italic">Designed Around</span> <br />
            Your Smile
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed"
          >
            Advanced dentistry with modern technology, comfortable treatment, and compassionate care for every patient. Experience dentistry redefined.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-7 text-lg shadow-[0_4px_14px_0_rgb(15,23,42,39%)] hover:shadow-[0_6px_20px_rgba(15,23,42,23%)] hover:-translate-y-0.5 transition-all duration-200">
              Book Appointment
            </Button>
            <Button variant="outline" className="border-border hover:bg-secondary/50 rounded-full px-8 py-7 text-lg hover:-translate-y-0.5 transition-all duration-200 bg-white/50 backdrop-blur-sm">
              WhatsApp Consultation
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center gap-6 gap-y-4"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-foreground/80 bg-white/60 dark:bg-slate-800/60 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md shadow-sm">
              <span className="text-yellow-500">⭐</span> 5 Star Care
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-foreground/80 bg-white/60 dark:bg-slate-800/60 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md shadow-sm">
              <ShieldCheck size={16} className="text-accent" /> Modern Technology
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-foreground/80 bg-white/60 dark:bg-slate-800/60 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md shadow-sm">
              <Stethoscope size={16} className="text-accent" /> Experienced Dentist
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-foreground/80 bg-white/60 dark:bg-slate-800/60 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md shadow-sm">
              <CheckCircle2 size={16} className="text-accent" /> Pain-Free Treatments
            </div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:h-[700px] flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[500px] lg:max-w-none aspect-[4/5] lg:aspect-auto lg:h-full lg:w-[90%] rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 group">
            <Image
              src="/hero.png"
              alt="Luxury Dental Clinic"
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Glass overlay effect on bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
