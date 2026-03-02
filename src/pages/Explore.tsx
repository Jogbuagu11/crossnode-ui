import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const categories = ["All", "Gaming", "Music", "Tech", "Movies", "Science", "Sports", "Cooking"];

const channels = [
  { id: 1, name: "NeonByte Gaming", handle: "@neonbyte", subs: "2.4M", category: "Gaming", color: "hsl(270 80% 60%)" },
  { id: 2, name: "SynthWave Audio", handle: "@synthwave", subs: "890K", category: "Music", color: "hsl(290 70% 50%)" },
  { id: 3, name: "CodeVault", handle: "@codevault", subs: "1.1M", category: "Tech", color: "hsl(200 80% 55%)" },
  { id: 4, name: "CineSphere", handle: "@cinesphere", subs: "3.2M", category: "Movies", color: "hsl(340 70% 55%)" },
  { id: 5, name: "QuantumLab", handle: "@quantumlab", subs: "670K", category: "Science", color: "hsl(160 60% 45%)" },
  { id: 6, name: "PixelForge", handle: "@pixelforge", subs: "1.8M", category: "Gaming", color: "hsl(30 80% 55%)" },
  { id: 7, name: "BeatDrop", handle: "@beatdrop", subs: "540K", category: "Music", color: "hsl(320 70% 50%)" },
  { id: 8, name: "DevStream", handle: "@devstream", subs: "980K", category: "Tech", color: "hsl(210 70% 50%)" },
  { id: 9, name: "FilmCraft", handle: "@filmcraft", subs: "1.5M", category: "Movies", color: "hsl(0 70% 55%)" },
  { id: 10, name: "AstroVerse", handle: "@astroverse", subs: "430K", category: "Science", color: "hsl(240 60% 55%)" },
  { id: 11, name: "ProPlay", handle: "@proplay", subs: "2.1M", category: "Sports", color: "hsl(120 50% 45%)" },
  { id: 12, name: "ChefMode", handle: "@chefmode", subs: "760K", category: "Cooking", color: "hsl(40 80% 50%)" },
];

const Explore = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [subscribed, setSubscribed] = useState<Set<number>>(new Set());

  const filtered = activeCategory === "All" ? channels : channels.filter((c) => c.category === activeCategory);

  const toggleSubscribe = (id: number) => {
    setSubscribed((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 px-4 md:px-8 py-6">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">Explore Channels</h1>

          {/* Category pills */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-surface-hover"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Channel grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((channel) => (
              <div
                key={channel.id}
                className="bg-card rounded-xl border border-border p-5 flex flex-col items-center text-center hover:border-primary/30 transition-colors"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-display font-bold text-primary-foreground mb-3"
                  style={{ backgroundColor: channel.color }}
                >
                  {channel.name.charAt(0)}
                </div>
                <h3 className="font-display font-semibold text-foreground text-sm">{channel.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{channel.handle}</p>
                <p className="text-xs text-muted-foreground mt-1">{channel.subs} subscribers</p>
                <button
                  onClick={() => toggleSubscribe(channel.id)}
                  className={`mt-4 px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                    subscribed.has(channel.id)
                      ? "bg-secondary text-secondary-foreground hover:bg-surface-hover"
                      : "bg-primary text-primary-foreground hover:opacity-90"
                  }`}
                >
                  {subscribed.has(channel.id) ? "Subscribed" : "Subscribe"}
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Explore;
