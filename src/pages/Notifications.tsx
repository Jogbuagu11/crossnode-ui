import { Bell, Video, ThumbsUp, UserPlus, MessageSquare, Award, Check } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";

import thumb1 from "@/assets/thumb-1.jpg";
import thumb2 from "@/assets/thumb-2.jpg";
import thumb3 from "@/assets/thumb-3.jpg";
import thumb4 from "@/assets/thumb-4.jpg";
import thumb5 from "@/assets/thumb-5.jpg";

interface Notification {
  id: string;
  type: "video" | "like" | "subscribe" | "comment" | "milestone";
  title: string;
  description: string;
  time: string;
  read: boolean;
  thumbnail?: string;
  avatar: string;
}

const notifications: Notification[] = [
  { id: "1", type: "video", title: "TechVault uploaded a new video", description: "The Ultimate Gaming Setup Tour 2026 — RGB Paradise", time: "2 hours ago", read: false, thumbnail: thumb1, avatar: "TV" },
  { id: "2", type: "comment", title: "Maya Kim replied to your comment", description: '"Totally agree! The production quality is next level 🔥"', time: "3 hours ago", read: false, avatar: "MK" },
  { id: "3", type: "subscribe", title: "New subscriber", description: "Alex Chen subscribed to your channel", time: "5 hours ago", read: false, avatar: "AC" },
  { id: "4", type: "like", title: "Your video is trending!", description: '"Building a Full-Stack App" got 1,000 new likes today', time: "8 hours ago", read: true, thumbnail: thumb2, avatar: "VS" },
  { id: "5", type: "video", title: "SkyLens uploaded a new video", description: "Neon Cities: A Cyberpunk Drone Adventure", time: "12 hours ago", read: true, thumbnail: thumb3, avatar: "SL" },
  { id: "6", type: "milestone", title: "Congratulations! 🎉", description: "Your channel reached 1,000,000 subscribers", time: "1 day ago", read: true, avatar: "🏆" },
  { id: "7", type: "comment", title: "Ryan James commented on your video", description: '"Can you do a follow-up tutorial? Would love to learn!"', time: "1 day ago", read: true, avatar: "RJ" },
  { id: "8", type: "video", title: "BeatLab uploaded a new video", description: "Making a Beat from Scratch — Lo-Fi Studio Session", time: "2 days ago", read: true, thumbnail: thumb4, avatar: "BL" },
  { id: "9", type: "subscribe", title: "5 new subscribers today", description: "Your audience is growing!", time: "2 days ago", read: true, avatar: "+5" },
  { id: "10", type: "video", title: "PixelForge uploaded a new video", description: "The Future of 3D Design: Tools & Techniques", time: "3 days ago", read: true, thumbnail: thumb5, avatar: "PF" },
];

const iconMap = {
  video: Video,
  like: ThumbsUp,
  subscribe: UserPlus,
  comment: MessageSquare,
  milestone: Award,
};

const Notifications = () => {
  const [items, setItems] = useState(notifications);
  const [filter, setFilter] = useState<"all" | "unread">("all");

  const filtered = filter === "unread" ? items.filter((n) => !n.read) : items;
  const unreadCount = items.filter((n) => !n.read).length;

  const markAllRead = () => {
    setItems(items.map((n) => ({ ...n, read: true })));
  };

  const toggleRead = (id: string) => {
    setItems(items.map((n) => (n.id === id ? { ...n, read: !n.read } : n)));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Bell className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-display font-bold text-foreground">Notifications</h1>
            {unreadCount > 0 && (
              <span className="px-2.5 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                {unreadCount}
              </span>
            )}
          </div>
          {unreadCount > 0 && (
            <button
              onClick={markAllRead}
              className="flex items-center gap-1.5 text-sm text-primary hover:opacity-80 transition-opacity font-medium"
            >
              <Check className="w-4 h-4" /> Mark all read
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6">
          {(["all", "unread"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors capitalize ${
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-surface-hover"
              }`}
            >
              {f} {f === "unread" && unreadCount > 0 ? `(${unreadCount})` : ""}
            </button>
          ))}
        </div>

        {/* Notification list */}
        <div className="space-y-1">
          {filtered.length === 0 && (
            <div className="py-16 text-center">
              <Bell className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
              <p className="text-muted-foreground">No notifications</p>
            </div>
          )}
          {filtered.map((n) => {
            const Icon = iconMap[n.type];
            return (
              <div
                key={n.id}
                onClick={() => toggleRead(n.id)}
                className={`flex items-start gap-3 p-4 rounded-xl cursor-pointer transition-colors ${
                  n.read
                    ? "hover:bg-secondary/50"
                    : "bg-primary/5 border border-primary/10 hover:bg-primary/10"
                }`}
              >
                {/* Avatar */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  n.type === "milestone" ? "bg-primary/20" : "bg-secondary border border-border"
                }`}>
                  {n.type === "milestone" ? (
                    <span className="text-lg">{n.avatar}</span>
                  ) : (
                    <span className="text-xs font-bold text-foreground">{n.avatar}</span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${n.read ? "text-muted-foreground" : "text-primary"}`} />
                    <p className={`text-sm font-semibold ${n.read ? "text-muted-foreground" : "text-foreground"}`}>{n.title}</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">{n.description}</p>
                  <p className="text-xs text-muted-foreground/60 mt-1">{n.time}</p>
                </div>

                {/* Thumbnail */}
                {n.thumbnail && (
                  <div className="w-20 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0 hidden sm:block">
                    <img src={n.thumbnail} alt="" className="w-full h-full object-cover" />
                  </div>
                )}

                {/* Unread dot */}
                {!n.read && (
                  <div className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
