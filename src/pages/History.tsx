import { Clock, Trash2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import VideoCard from "@/components/VideoCard";
import { videos } from "@/data/videos";

const historyGroups = [
  { label: "Today", items: videos.slice(0, 3) },
  { label: "Yesterday", items: videos.slice(3, 6) },
  { label: "Last Week", items: videos.slice(6, 8) },
];

const History = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 px-4 md:px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground flex items-center gap-2">
              <Clock className="w-7 h-7 text-primary" />
              Watch History
            </h1>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-surface-hover transition-colors">
              <Trash2 className="w-4 h-4" />
              <span className="hidden sm:inline">Clear History</span>
            </button>
          </div>

          <div className="space-y-8">
            {historyGroups.map((group) => (
              <section key={group.label}>
                <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  {group.label}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {group.items.map((video, i) => (
                    <VideoCard key={video.id} {...video} index={i} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default History;
