import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { WorkProcessSection } from "@/components/work-process-section";
import { ProjectsSection } from "@/components/projects-section";
import { AchievementsSection } from "@/components/achievements-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="relative">
      <ThemeToggle />
      <HeroSection />
      <AboutSection />
      <WorkProcessSection />
      <ProjectsSection />
      <AchievementsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

