import { useParams, Link } from "react-router-dom";
import { ThumbsUp, ThumbsDown, Share2, Bookmark, MoreHorizontal, Eye, Calendar, ChevronDown } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import VideoCard from "@/components/VideoCard";
import { videos } from "@/data/videos";

const VideoPlayer = () => {
  const { id } = useParams();
  const video = videos.find((v) => v.id === id) || videos[0];
  const relatedVideos = videos.filter((v) => v.id !== video.id).slice(0, 4);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showFullDesc, setShowFullDesc] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-6 px-4 md:px-6 py-6">
        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Player */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-muted mb-4">
            <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-[var(--shadow-glow)]">
                <svg className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
              <div className="h-full w-1/3 bg-primary rounded-r-full" />
            </div>
          </div>

          {/* Title & actions */}
          <h1 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3">{video.title}</h1>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <Link to="/profile" className="w-10 h-10 rounded-full bg-primary/30 border-2 border-primary flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-foreground">{video.channel.charAt(0)}</span>
              </Link>
              <div>
                <Link to="/profile" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">{video.channel}</Link>
                <p className="text-xs text-muted-foreground">1.2M subscribers</p>
              </div>
              <button className="ml-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center rounded-full bg-secondary overflow-hidden">
                <button
                  onClick={() => setLiked(!liked)}
                  className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors ${liked ? "text-primary" : "text-secondary-foreground hover:bg-surface-hover"}`}
                >
                  <ThumbsUp className="w-4 h-4" fill={liked ? "currentColor" : "none"} /> 24K
                </button>
                <div className="w-px h-6 bg-border" />
                <button className="px-3 py-2 text-secondary-foreground hover:bg-surface-hover transition-colors">
                  <ThumbsDown className="w-4 h-4" />
                </button>
              </div>
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-surface-hover transition-colors">
                <Share2 className="w-4 h-4" /> Share
              </button>
              <button
                onClick={() => setSaved(!saved)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full bg-secondary text-sm font-medium transition-colors ${saved ? "text-primary" : "text-secondary-foreground hover:bg-surface-hover"}`}
              >
                <Bookmark className="w-4 h-4" fill={saved ? "currentColor" : "none"} /> Save
              </button>
              <button className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-surface-hover transition-colors hidden sm:block">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="rounded-xl bg-secondary p-4 mb-6">
            <div className="flex items-center gap-3 text-sm text-foreground font-semibold mb-2">
              <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {video.views} views</span>
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {video.time}</span>
            </div>
            <p className={`text-sm text-muted-foreground leading-relaxed ${!showFullDesc ? "line-clamp-2" : ""}`}>
              {video.description}
            </p>
            <button
              onClick={() => setShowFullDesc(!showFullDesc)}
              className="text-sm text-foreground font-semibold mt-2 hover:text-primary transition-colors flex items-center gap-1"
            >
              {showFullDesc ? "Show less" : "Show more"}
              <ChevronDown className={`w-4 h-4 transition-transform ${showFullDesc ? "rotate-180" : ""}`} />
            </button>
          </div>

          {/* Comments */}
          <div className="mb-6">
            <h3 className="text-lg font-display font-bold text-foreground mb-4">128 Comments</h3>
            <div className="flex gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-primary/30 border-2 border-primary flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-foreground">JD</span>
              </div>
              <input
                type="text"
                placeholder="Add a comment..."
                className="flex-1 bg-transparent border-b border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary pb-2 transition-colors"
              />
            </div>
            {[
              { user: "AX", name: "Alex Chen", text: "This is absolutely insane! The production quality just keeps getting better.", time: "2 hours ago", likes: "342" },
              { user: "MK", name: "Maya Kim", text: "Been waiting for this one. Did not disappoint 🔥", time: "5 hours ago", likes: "128" },
              { user: "RJ", name: "Ryan James", text: "Can you do a follow-up tutorial on this? Would love to learn the process.", time: "1 day ago", likes: "89" },
            ].map((comment, i) => (
              <div key={i} className="flex gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 border border-border">
                  <span className="text-xs font-bold text-foreground">{comment.user}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-foreground">{comment.name}</span>
                    <span className="text-xs text-muted-foreground">{comment.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{comment.text}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
                      <ThumbsUp className="w-3.5 h-3.5" /> {comment.likes}
                    </button>
                    <button className="text-xs text-muted-foreground hover:text-foreground transition-colors">Reply</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related videos */}
        <aside className="lg:w-96 flex-shrink-0">
          <h3 className="text-base font-display font-bold text-foreground mb-4">Up Next</h3>
          <div className="space-y-3">
            {relatedVideos.map((v, i) => (
              <Link to={`/watch/${v.id}`} key={v.id} className="flex gap-3 group cursor-pointer">
                <div className="relative w-40 flex-shrink-0 aspect-video rounded-lg overflow-hidden bg-muted">
                  <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-background/80 text-[10px] font-medium text-foreground">{v.duration}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">{v.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{v.channel}</p>
                  <p className="text-xs text-muted-foreground">{v.views} • {v.time}</p>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default VideoPlayer;
