import VideoCard from "./VideoCard";

import thumb1 from "@/assets/thumb-1.jpg";
import thumb2 from "@/assets/thumb-2.jpg";
import thumb3 from "@/assets/thumb-3.jpg";
import thumb4 from "@/assets/thumb-4.jpg";
import thumb5 from "@/assets/thumb-5.jpg";
import thumb6 from "@/assets/thumb-6.jpg";
import thumb7 from "@/assets/thumb-7.jpg";
import thumb8 from "@/assets/thumb-8.jpg";

const videos = [
  { thumbnail: thumb1, title: "The Ultimate Gaming Setup Tour 2026 — RGB Paradise", channel: "TechVault", views: "1.2M", time: "3 days ago", duration: "14:32" },
  { thumbnail: thumb2, title: "Building a Full-Stack App in 24 Hours Challenge", channel: "CodeNova", views: "845K", time: "1 week ago", duration: "42:15" },
  { thumbnail: thumb3, title: "Neon Cities: A Cyberpunk Drone Adventure", channel: "SkyLens", views: "2.1M", time: "5 days ago", duration: "18:47" },
  { thumbnail: thumb4, title: "Making a Beat from Scratch — Lo-Fi Studio Session", channel: "BeatLab", views: "567K", time: "2 days ago", duration: "26:03" },
  { thumbnail: thumb5, title: "The Future of 3D Design: Tools & Techniques", channel: "PixelForge", views: "390K", time: "4 days ago", duration: "31:22" },
  { thumbnail: thumb6, title: "Golden Hour: Mountain Photography Masterclass", channel: "WildFrame", views: "1.8M", time: "1 day ago", duration: "22:10" },
  { thumbnail: thumb7, title: "Camera Lens Breakdown — What the Pros Actually Use", channel: "LensGeek", views: "720K", time: "6 days ago", duration: "19:55" },
  { thumbnail: thumb8, title: "Inside the World's Largest Esports Arena", channel: "GamePulse", views: "3.4M", time: "2 weeks ago", duration: "35:18" },
];

const VideoGrid = () => {
  return (
    <section className="px-4 md:px-6 py-6 max-w-7xl mx-auto">
      <h2 className="text-xl font-display font-bold text-foreground mb-5">Recommended for You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {videos.map((video, i) => (
          <VideoCard key={i} {...video} index={i} />
        ))}
      </div>
    </section>
  );
};

export default VideoGrid;
