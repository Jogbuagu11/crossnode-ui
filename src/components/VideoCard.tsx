import { Clock, Eye } from "lucide-react";
import { Link } from "react-router-dom";

interface VideoCardProps {
  id?: string;
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  time: string;
  duration: string;
  index: number;
}

const VideoCard = ({ id, thumbnail, title, channel, views, time, duration, index }: VideoCardProps) => {
  const content = (
    <div
      className="group cursor-pointer opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video rounded-xl overflow-hidden mb-3 bg-muted">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground">
          {duration}
        </span>
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center shadow-lg">
            <svg className="w-5 h-5 text-primary-foreground ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex gap-3">
        <div className="w-9 h-9 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center border border-border">
          <span className="text-xs font-bold text-foreground">{channel.charAt(0)}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-xs text-muted-foreground mt-1">{channel}</p>
          <div className="flex items-center gap-2 mt-0.5 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {views}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {time}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  if (id) {
    return <Link to={`/watch/${id}`}>{content}</Link>;
  }

  return content;
};

export default VideoCard;
