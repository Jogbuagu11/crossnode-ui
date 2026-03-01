import { Play, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      <div className="relative px-4 md:px-6 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/30 mb-6">
            <TrendingUp className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">Trending Now</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight mb-4">
            Discover the Next Wave of{" "}
            <span className="text-primary">Content</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
            Stream, create, and share premium content with millions of creators worldwide. Your stage awaits.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--gradient-accent)] bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-[var(--shadow-glow)] animate-pulse-glow">
              <Play className="w-4 h-4" fill="currentColor" />
              Start Watching
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm hover:bg-surface-hover transition-colors border border-border">
              Explore Channels
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
