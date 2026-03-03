import { useState } from "react";
import { Bookmark, Clock, ThumbsUp, ListVideo, Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import VideoCard from "@/components/VideoCard";
import { videos } from "@/data/videos";

const playlists = [
  { id: 1, name: "Watch Later", count: 12, icon: Clock },
  { id: 2, name: "Liked Videos", count: 34, icon: ThumbsUp },
  { id: 3, name: "Gaming Highlights", count: 8, icon: ListVideo },
  { id: 4, name: "Music Mix", count: 15, icon: ListVideo },
];

const Library = () => {
  const savedVideos = videos.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 px-4 md:px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground flex items-center gap-2">
              <Bookmark className="w-7 h-7 text-primary" />
              Library
            </h1>
          </div>

          {/* Playlists */}
          <section className="mb-8">
            <h2 className="text-lg font-display font-semibold text-foreground mb-4">Playlists</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {playlists.map(({ id, name, count, icon: Icon }) => (
                <button
                  key={id}
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">{name}</p>
                    <p className="text-xs text-muted-foreground">{count} videos</p>
                  </div>
                </button>
              ))}
              <button className="flex items-center gap-3 p-4 rounded-xl border border-dashed border-border hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <Plus className="w-5 h-5 text-muted-foreground" />
                </div>
                <p className="text-sm font-medium text-muted-foreground">New Playlist</p>
              </button>
            </div>
          </section>

          {/* Saved videos */}
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground mb-4">Saved Videos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {savedVideos.map((video, i) => (
                <VideoCard key={video.id} {...video} index={i} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Library;
