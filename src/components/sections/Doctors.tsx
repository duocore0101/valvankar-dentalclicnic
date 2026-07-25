"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Doctors() {
  return (
    <section id="doctors" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block"
          >
            Meet Our Expert
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6"
          >
            World-Class Specialist
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl border border-border flex flex-col md:flex-row group"
          >
            {/* Doctor Image */}
            <div className="md:w-2/5 relative aspect-square md:aspect-auto overflow-hidden bg-muted">
              <Image 
                src="/doctor.png"
                alt="Dr. Valvankar"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Doctor Details */}
            <div className="md:w-3/5 p-10 md:p-16 flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="text-3xl font-heading font-bold text-foreground mb-2">Dr. Valvankar</h3>
                <p className="text-accent font-medium uppercase tracking-wider text-sm">Chief Dental Surgeon & Implantologist</p>
              </div>
              
              <div className="space-y-6 mb-10">
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Qualifications</h4>
                  <p className="text-foreground font-medium">MDS (Prosthodontics), BDS</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Specialization</h4>
                  <p className="text-foreground font-medium">Dental Implants, Full Mouth Rehabilitation, Cosmetic Dentistry</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Clinic Experience</h4>
                  <p className="text-foreground font-medium">15+ Years of Clinical Excellence</p>
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg w-full md:w-max shadow-lg">
                Book Consultation
              </Button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
