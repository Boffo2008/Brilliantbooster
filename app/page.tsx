import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import HowWeWork from "@/components/home/HowWeWork";
import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <HowWeWork />
      <StatsSection />
      <Testimonials />
      <CTASection />
    </>
  );
}
