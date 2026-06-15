import { HeroSection } from "@/components/hero-section";
import { LazySections } from "@/components/lazy-sections";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="relative">
      <ThemeToggle />
      {/* Hero is rendered eagerly (above the fold, holds the LCP element). */}
      <HeroSection />
      {/* Everything below the fold is code-split and loaded after first paint. */}
      <LazySections />
    </div>
  );
}
