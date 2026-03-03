import { Home, Compass, Clock, ThumbsUp, Flame, Gamepad2, Music, Film, Newspaper, Bookmark } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const mainLinks = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Compass, label: "Explore", href: "/explore" },
  { icon: Flame, label: "Trending", href: "/" },
  { icon: Bookmark, label: "Library", href: "/library" },
  { icon: Clock, label: "History", href: "/history" },
  { icon: ThumbsUp, label: "Liked", href: "/" },
];

const browseLinks = [
  { icon: Gamepad2, label: "Gaming" },
  { icon: Music, label: "Music" },
  { icon: Film, label: "Movies" },
  { icon: Newspaper, label: "News" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="hidden lg:flex flex-col w-56 flex-shrink-0 sticky top-[57px] h-[calc(100vh-57px)] bg-background border-r border-border overflow-y-auto py-4 px-3">
      <div className="space-y-1">
        {mainLinks.map(({ icon: Icon, label, href }) => {
          const active = location.pathname === href;
          return (
            <Link
              key={label}
              to={href}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground hover:bg-surface-hover hover:text-foreground"
              }`}
            >
              <Icon className="w-5 h-5" />
              {label}
            </Link>
          );
        })}
      </div>

      <div className="my-4 h-px bg-border" />

      <p className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Browse</p>
      <div className="space-y-1">
        {browseLinks.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-surface-hover hover:text-foreground transition-colors"
          >
            <Icon className="w-5 h-5" />
            {label}
          </button>
        ))}
      </div>

      <div className="mt-auto pt-6 px-3">
        <p className="text-xs text-muted-foreground/60">© 2026 Voidstream</p>
      </div>
    </aside>
  );
};

export default Sidebar;
