import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const Instagram = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Facebook = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link href="#home" className="flex flex-col group">
              <span className="font-heading font-bold text-2xl tracking-tight text-white leading-none">
                VALVANKAR
              </span>
              <span className="text-[0.7rem] uppercase tracking-[0.2em] text-white/70 font-semibold mt-1">
                Dental Clinic
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Advanced dentistry with modern technology, comfortable treatment, and compassionate care for every patient.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors duration-300">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Our Doctors", "Patient Testimonials", "Clinic Gallery", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-white/70 hover:text-accent transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4">
              {["Root Canal Treatment", "Dental Implants", "Smile Makeover", "Teeth Whitening", "Invisible Aligners", "Kids Dentistry"].map((item) => (
                <li key={item}>
                  <Link href="#services" className="text-white/70 hover:text-accent transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <span>
                  123 Premium Care Avenue, <br />
                  Health District, City 400001
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Phone size={18} className="text-accent shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Mail size={18} className="text-accent shrink-0" />
                <span>care@valvankardental.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Valvankar Dental Clinic. All Rights Reserved.</p>
          <p>
            Designed & Developed by{" "}
            <a href="https://www.duocoresoftware.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent font-medium transition-colors">
              DUOCORE SOFTWARE
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
