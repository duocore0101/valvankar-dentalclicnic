import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Doctors } from "@/components/sections/Doctors";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { Statistics } from "@/components/sections/Statistics";
import { BookingFAQ } from "@/components/sections/BookingFAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <WhyChooseUs />
      <Statistics />
      <Doctors />
      <BeforeAfter />
      <Testimonials />
      <Gallery />
      <BookingFAQ />
      <Contact />
    </>
  );
}
