import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { AboutSection } from '@/components/about-section';
import { PortfolioSection } from '@/components/portfolio-section';
import { Footer } from '@/components/footer';
import { TestimonialsSection } from '@/components/testimonials-section';
import { TechStackSection } from '@/components/tech-stack-section';
import { AiBotButton } from '@/components/ai-bot-button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <TechStackSection />
        <AboutSection />
        <PortfolioSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <AiBotButton />
    </div>
  );
}
