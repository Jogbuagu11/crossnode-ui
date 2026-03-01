import VideoCard from "./VideoCard";
import { videos } from "@/data/videos";

const VideoGrid = () => {
  return (
    <section className="px-4 md:px-6 py-6 max-w-7xl mx-auto">
      <h2 className="text-xl font-display font-bold text-foreground mb-5">Recommended for You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {videos.map((video, i) => (
          <VideoCard key={video.id} {...video} index={i} />
        ))}
      </div>
    </section>
  );
};

export default VideoGrid;
