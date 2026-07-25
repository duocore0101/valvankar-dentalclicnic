"use client";

import { motion } from "framer-motion";
import { CalendarHeart, MessageCircle } from "lucide-react";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 left-6 right-6 z-50 flex justify-between items-end pointer-events-none">
      
      {/* Book Appointment (Bottom Left) */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        className="pointer-events-auto group relative flex items-center gap-3 bg-primary/90 hover:bg-primary backdrop-blur-md text-white px-5 py-3 rounded-full shadow-2xl border border-white/10 overflow-hidden"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
        <div className="bg-accent text-white p-2 rounded-full relative z-10 group-hover:scale-110 transition-transform duration-300">
          <CalendarHeart size={20} />
        </div>
        <span className="font-semibold text-sm hidden md:block relative z-10">Book Now</span>
      </motion.button>

      {/* WhatsApp (Bottom Right) */}
      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 20 }}
        className="pointer-events-auto group relative w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-colors duration-300"
      >
        <span className="absolute w-full h-full bg-[#25D366] rounded-full animate-ping opacity-75"></span>
        <MessageCircle size={28} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-white dark:bg-slate-800 text-slate-800 dark:text-white text-xs font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
          Chat with us
          <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white dark:bg-slate-800 rotate-45"></div>
        </div>
      </motion.a>

    </div>
  );
}
