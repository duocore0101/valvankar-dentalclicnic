"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Send } from "lucide-react";

const faqs = [
  {
    question: "Do you offer pain-free treatments?",
    answer: "Yes, we use the latest technology and premium anesthesia to ensure all our treatments, from cleanings to root canals and implants, are completely pain-free and comfortable."
  },
  {
    question: "How long does a smile makeover take?",
    answer: "Depending on the complexity, a smile makeover can take anywhere from a single session (for whitening and minor bonding) to a few weeks (for veneers or aligners)."
  },
  {
    question: "Are your sterilization protocols safe?",
    answer: "Absolutely. We follow strict international Class B autoclave sterilization protocols. Your safety is our highest priority, and our clinic environment is rigorously maintained."
  },
  {
    question: "Do you offer EMI or payment plans?",
    answer: "Yes, we offer flexible payment options and 0% interest EMI plans for larger treatments like dental implants and full mouth rehabilitation."
  }
];

export function BookingFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Booking Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] shadow-2xl border border-border"
          >
            <div className="mb-8">
              <h3 className="text-3xl font-heading font-bold text-foreground mb-2">Request an Appointment</h3>
              <p className="text-muted-foreground text-sm">Fill out the form below and our team will get back to you shortly.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Full Name</label>
                  <input type="text" className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone Number</label>
                  <input type="tel" className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="+91 98765 43210" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <input type="email" className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Preferred Date</label>
                  <input type="date" className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Treatment of Interest</label>
                <select className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all text-muted-foreground">
                  <option value="">Select Treatment</option>
                  <option value="implants">Dental Implants</option>
                  <option value="root-canal">Root Canal</option>
                  <option value="braces">Braces / Aligners</option>
                  <option value="whitening">Teeth Whitening</option>
                  <option value="other">Other / Consultation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <textarea rows={3} className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none" placeholder="Any specific concerns?"></textarea>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 text-lg group">
                Submit Request <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

          {/* FAQ Section */}
          <div className="flex flex-col justify-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block"
            >
              Got Questions?
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-10"
            >
              Frequently Asked Questions
            </motion.h2>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-slate-900 border border-border rounded-2xl overflow-hidden"
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-heading font-semibold text-lg text-foreground pr-4">{faq.question}</span>
                    <ChevronDown className={`shrink-0 text-accent transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-5 pt-0 text-muted-foreground text-sm leading-relaxed border-t border-border mt-2 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
