import thumb1 from "@/assets/thumb-1.jpg";
import thumb2 from "@/assets/thumb-2.jpg";
import thumb3 from "@/assets/thumb-3.jpg";
import thumb4 from "@/assets/thumb-4.jpg";
import thumb5 from "@/assets/thumb-5.jpg";
import thumb6 from "@/assets/thumb-6.jpg";
import thumb7 from "@/assets/thumb-7.jpg";
import thumb8 from "@/assets/thumb-8.jpg";

export interface VideoData {
  id: string;
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  time: string;
  duration: string;
  description?: string;
}

export const videos: VideoData[] = [
  { id: "1", thumbnail: thumb1, title: "The Ultimate Gaming Setup Tour 2026 — RGB Paradise", channel: "TechVault", views: "1.2M", time: "3 days ago", duration: "14:32", description: "Welcome to the ultimate RGB gaming setup tour! In this video, I'll walk you through my completely redesigned gaming station featuring custom water cooling, triple monitor setup, and the most insane RGB lighting you've ever seen." },
  { id: "2", thumbnail: thumb2, title: "Building a Full-Stack App in 24 Hours Challenge", channel: "CodeNova", views: "845K", time: "1 week ago", duration: "42:15", description: "Can I build a complete full-stack application in just 24 hours? Watch as I design, code, and deploy a real-world app from scratch using React, Node.js, and PostgreSQL." },
  { id: "3", thumbnail: thumb3, title: "Neon Cities: A Cyberpunk Drone Adventure", channel: "SkyLens", views: "2.1M", time: "5 days ago", duration: "18:47", description: "Flying through the neon-lit streets of Asia's most futuristic cities at night. Captured in stunning 4K with the latest DJI drone technology." },
  { id: "4", thumbnail: thumb4, title: "Making a Beat from Scratch — Lo-Fi Studio Session", channel: "BeatLab", views: "567K", time: "2 days ago", duration: "26:03", description: "Join me in the studio as I create a chill lo-fi hip hop beat entirely from scratch. From sampling vinyl to mixing and mastering — the full creative process." },
  { id: "5", thumbnail: thumb5, title: "The Future of 3D Design: Tools & Techniques", channel: "PixelForge", views: "390K", time: "4 days ago", duration: "31:22", description: "Exploring the cutting-edge tools and techniques shaping the future of 3D design. From AI-assisted modeling to real-time rendering breakthroughs." },
  { id: "6", thumbnail: thumb6, title: "Golden Hour: Mountain Photography Masterclass", channel: "WildFrame", views: "1.8M", time: "1 day ago", duration: "22:10", description: "Learn how to capture breathtaking mountain landscapes during the magical golden hour. Tips on composition, exposure, and post-processing." },
  { id: "7", thumbnail: thumb7, title: "Camera Lens Breakdown — What the Pros Actually Use", channel: "LensGeek", views: "720K", time: "6 days ago", duration: "19:55", description: "A deep dive into the lenses professional photographers and filmmakers actually use on set. Spoiler: it's not always the most expensive option." },
  { id: "8", thumbnail: thumb8, title: "Inside the World's Largest Esports Arena", channel: "GamePulse", views: "3.4M", time: "2 weeks ago", duration: "35:18", description: "An exclusive behind-the-scenes tour of the world's largest esports arena. From the massive LED screens to the player facilities — this place is insane." },
];
