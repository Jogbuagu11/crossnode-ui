import { Link } from "react-router-dom";
import { Settings, Share2, MapPin, Calendar, Users, Eye, Video, Edit, Upload } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import VideoCard from "@/components/VideoCard";
import { videos } from "@/data/videos";

import thumb1 from "@/assets/thumb-1.jpg";

const tabs = ["Videos", "Playlists", "Community", "About"];

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Videos");
  const userVideos = videos.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Banner */}
      <div className="relative h-48 md:h-64 overflow-hidden group">
        <img src={thumb1} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <button className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-background/60 backdrop-blur-sm text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
          <Edit className="w-3.5 h-3.5" /> Change Banner
        </button>
      </div>

      {/* Profile info */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 -mt-16 relative z-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 mb-6">
          <div className="relative group">
            <div className="w-28 h-28 rounded-full bg-primary/30 border-4 border-background flex items-center justify-center shadow-[var(--shadow-glow)]">
              <span className="text-3xl font-display font-bold text-foreground">JD</span>
            </div>
            <button className="absolute inset-0 rounded-full bg-background/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Edit className="w-5 h-5 text-foreground" />
            </button>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">John Doe</h1>
            <p className="text-sm text-muted-foreground mt-1">@johndoe • 1.2M subscribers • 86 videos</p>
            <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> San Francisco, CA
            </p>
          </div>
          <div className="flex gap-2">
            <button className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5">
              <Upload className="w-4 h-4" /> Upload Video
            </button>
            <button className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-surface-hover transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
            <Link to="/settings" className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-surface-hover transition-colors">
              <Settings className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-6 mb-6">
          {[
            { icon: Users, label: "Subscribers", value: "1.2M" },
            { icon: Eye, label: "Total Views", value: "48.3M" },
            { icon: Video, label: "Videos", value: "86" },
            { icon: Calendar, label: "Joined", value: "Mar 2022" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="text-center">
              <div className="flex items-center gap-1.5 text-foreground">
                <Icon className="w-4 h-4 text-primary" />
                <span className="text-lg font-display font-bold">{value}</span>
              </div>
              <p className="text-xs text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-border mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm font-medium transition-colors relative ${
                activeTab === tab
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === "Videos" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-12">
            {userVideos.map((video, i) => (
              <VideoCard key={video.id} {...video} index={i} />
            ))}
          </div>
        )}

        {activeTab === "Playlists" && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">No playlists yet</p>
          </div>
        )}

        {activeTab === "Community" && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">No community posts yet</p>
          </div>
        )}

        {activeTab === "About" && (
          <div className="max-w-2xl pb-12">
            <h3 className="text-lg font-display font-bold text-foreground mb-3">About</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Hey! I'm John — a creator passionate about tech, gaming, and cinematic storytelling. 
              I upload weekly videos covering the latest in gaming setups, coding challenges, and creative workflows. 
              Join the community and let's build something amazing together.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📧 john@voidstream.com</p>
              <p>🔗 voidstream.com/johndoe</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
