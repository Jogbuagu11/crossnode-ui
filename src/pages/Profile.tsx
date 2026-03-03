import { Link } from "react-router-dom";
import { Settings, Share2, MapPin, Calendar, Users, Eye, Video, Edit, Upload, BarChart3, TrendingUp, Clock, Heart, MessageSquare, Bell } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import VideoCard from "@/components/VideoCard";
import { videos } from "@/data/videos";

import thumb1 from "@/assets/thumb-1.jpg";

const tabs = ["Dashboard", "Videos", "Analytics", "Edit Profile"];

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
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

        {/* Tabs */}
        <div className="flex gap-1 border-b border-border mb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm font-medium transition-colors relative whitespace-nowrap ${
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

        {/* Dashboard Tab */}
        {activeTab === "Dashboard" && (
          <div className="pb-12 space-y-6">
            {/* Stats cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                { icon: Users, label: "Subscribers", value: "1.2M", change: "+2.4%" },
                { icon: Eye, label: "Total Views", value: "48.3M", change: "+5.1%" },
                { icon: Video, label: "Videos", value: "86", change: "+3" },
                { icon: TrendingUp, label: "Watch Time", value: "1.8M hrs", change: "+8.2%" },
              ].map(({ icon: Icon, label, value, change }) => (
                <div key={label} className="rounded-xl bg-secondary/50 border border-border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-primary/15">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground">{label}</span>
                  </div>
                  <p className="text-xl md:text-2xl font-display font-bold text-foreground">{value}</p>
                  <p className="text-xs text-primary mt-1">{change} this month</p>
                </div>
              ))}
            </div>

            {/* Recent activity */}
            <div className="rounded-xl bg-secondary/50 border border-border p-5">
              <h3 className="text-base font-display font-bold text-foreground mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {[
                  { icon: Heart, text: "Your video received 1.2K new likes", time: "2 hours ago" },
                  { icon: MessageSquare, text: "45 new comments on 'Ultimate Gaming Setup'", time: "5 hours ago" },
                  { icon: Users, text: "You gained 340 new subscribers today", time: "8 hours ago" },
                  { icon: Bell, text: "Video 'Coding Challenge #12' hit 100K views", time: "1 day ago" },
                  { icon: TrendingUp, text: "Your channel is trending in Gaming", time: "2 days ago" },
                ].map(({ icon: Icon, text, time }, i) => (
                  <div key={i} className="flex items-start gap-3 py-2 border-b border-border last:border-0">
                    <div className="p-1.5 rounded-lg bg-primary/10 mt-0.5">
                      <Icon className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground">{text}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent videos */}
            <div>
              <h3 className="text-base font-display font-bold text-foreground mb-4">Your Latest Videos</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {userVideos.slice(0, 3).map((video, i) => (
                  <VideoCard key={video.id} {...video} index={i} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === "Videos" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-12">
            {userVideos.map((video, i) => (
              <VideoCard key={video.id} {...video} index={i} />
            ))}
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === "Analytics" && (
          <div className="pb-12 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl bg-secondary/50 border border-border p-5">
                <h3 className="text-sm font-semibold text-foreground mb-1">Views (Last 28 days)</h3>
                <p className="text-3xl font-display font-bold text-foreground">2.4M</p>
                <p className="text-xs text-primary mt-1">+12.3% vs previous period</p>
                <div className="mt-4 h-24 flex items-end gap-1">
                  {[40, 55, 35, 70, 60, 80, 65, 90, 75, 85, 95, 70, 60, 88].map((h, i) => (
                    <div key={i} className="flex-1 bg-primary/30 rounded-t" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div className="rounded-xl bg-secondary/50 border border-border p-5">
                <h3 className="text-sm font-semibold text-foreground mb-1">Watch Time (Last 28 days)</h3>
                <p className="text-3xl font-display font-bold text-foreground">148K hrs</p>
                <p className="text-xs text-primary mt-1">+8.7% vs previous period</p>
                <div className="mt-4 h-24 flex items-end gap-1">
                  {[50, 45, 65, 55, 75, 60, 70, 85, 80, 90, 75, 65, 70, 82].map((h, i) => (
                    <div key={i} className="flex-1 bg-primary/30 rounded-t" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-secondary/50 border border-border p-5">
              <h3 className="text-base font-display font-bold text-foreground mb-4">Top Performing Videos</h3>
              <div className="space-y-3">
                {userVideos.slice(0, 4).map((video, i) => (
                  <div key={video.id} className="flex items-center gap-4 py-2 border-b border-border last:border-0">
                    <span className="text-sm font-bold text-muted-foreground w-6">{i + 1}</span>
                    <img src={video.thumbnail} alt="" className="w-20 h-12 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{video.title}</p>
                      <p className="text-xs text-muted-foreground">{video.views} views</p>
                    </div>
                    <div className="text-right hidden sm:block">
                      <p className="text-sm font-semibold text-foreground">{video.views}</p>
                      <p className="text-xs text-muted-foreground">views</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Edit Profile Tab */}
        {activeTab === "Edit Profile" && (
          <div className="max-w-2xl pb-12 space-y-6">
            <div className="rounded-xl bg-secondary/50 border border-border p-5 space-y-5">
              <h3 className="text-base font-display font-bold text-foreground">Profile Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Display Name</label>
                  <input
                    type="text"
                    defaultValue="John Doe"
                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Username</label>
                  <input
                    type="text"
                    defaultValue="@johndoe"
                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Location</label>
                  <input
                    type="text"
                    defaultValue="San Francisco, CA"
                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Bio</label>
                  <textarea
                    rows={4}
                    defaultValue="Hey! I'm John — a creator passionate about tech, gaming, and cinematic storytelling."
                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                  <input
                    type="email"
                    defaultValue="john@voidstream.com"
                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Website</label>
                  <input
                    type="url"
                    defaultValue="voidstream.com/johndoe"
                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <button className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
                  Save Changes
                </button>
                <button className="px-6 py-2.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-surface-hover transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
