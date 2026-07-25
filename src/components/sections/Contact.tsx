"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="bg-secondary/30 dark:bg-slate-900/30">
      
      {/* Map Placeholder */}
      <div className="h-[400px] md:h-[500px] w-full bg-muted relative group overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Mumbai,India&zoom=14&size=1920x500&maptype=roadmap&style=feature:all|element:labels.text.fill|color:0x333333&style=feature:all|element:labels.text.stroke|color:0xffffff&style=feature:landscape|element:geometry|color:0xf5f5f5&style=feature:poi|element:geometry|color:0xeeeeee&style=feature:water|element:geometry|color:0xc9c9c9')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000"></div>
        <div className="absolute inset-0 bg-primary/5"></div>
        
        {/* Map Marker Pin */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center relative z-10 animate-bounce">
            <MapPin className="text-accent w-8 h-8" />
          </div>
          <div className="w-12 h-3 bg-black/20 rounded-[100%] blur-sm mt-2"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative -mt-32 pb-24 z-20">
        <div className="grid md:grid-cols-3 gap-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-border text-center flex flex-col items-center"
          >
            <div className="w-14 h-14 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-6">
              <MapPin size={24} />
            </div>
            <h4 className="font-heading font-semibold text-lg text-foreground mb-3">Clinic Location</h4>
            <p className="text-muted-foreground text-sm">
              123 Premium Care Avenue, <br />
              Health District, City 400001
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-border text-center flex flex-col items-center"
          >
            <div className="w-14 h-14 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-6">
              <Phone size={24} />
            </div>
            <h4 className="font-heading font-semibold text-lg text-foreground mb-3">Contact Us</h4>
            <p className="text-muted-foreground text-sm mb-1">+91 98765 43210</p>
            <p className="text-muted-foreground text-sm mb-1">+91 98765 43211</p>
            <a href="mailto:care@valvankardental.com" className="text-accent text-sm hover:underline mt-2 inline-block">care@valvankardental.com</a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-border text-center flex flex-col items-center"
          >
            <div className="w-14 h-14 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-6">
              <Clock size={24} />
            </div>
            <h4 className="font-heading font-semibold text-lg text-foreground mb-3">Working Hours</h4>
            <div className="w-full space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between border-b border-border pb-2">
                <span>Mon - Sat</span>
                <span className="font-medium text-foreground">10:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between pt-1">
                <span>Sunday</span>
                <span className="font-medium text-accent">By Appointment Only</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
