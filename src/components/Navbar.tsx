import { Search, Bell, Upload, Menu, Home, Compass, Clock, ThumbsUp, Flame, Gamepad2, Music, Film, Newspaper, Bookmark } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const mainLinks = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Compass, label: "Explore", href: "/explore" },
  { icon: Flame, label: "Trending", href: "/" },
  { icon: Bookmark, label: "Library", href: "/library" },
  { icon: Clock, label: "History", href: "/history" },
  { icon: ThumbsUp, label: "Liked", href: "/" },
];

const browseLinks = [
  { icon: Gamepad2, label: "Gaming", href: "/" },
  { icon: Music, label: "Music", href: "/" },
  { icon: Film, label: "Movies", href: "/" },
  { icon: Newspaper, label: "News", href: "/" },
];

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-6 py-3 bg-background/80 backdrop-blur-xl border-b border-border">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden p-2 rounded-lg hover:bg-surface-hover transition-colors">
              <Menu className="w-5 h-5 text-foreground" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 bg-background border-border p-0 flex flex-col">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            {/* Logo */}
            <div className="flex items-center gap-2 px-5 py-4 border-b border-border">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">V</span>
              </div>
              <span className="font-display font-bold text-lg text-foreground">Voidstream</span>
            </div>

            {/* Nav links */}
            <div className="flex-1 overflow-y-auto py-4 px-3">
              <div className="space-y-1">
                {mainLinks.map(({ icon: Icon, label, href }) => (
                  <Link
                    key={label}
                    to={href}
                    onClick={() => setSheetOpen(false)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-surface-hover hover:text-foreground transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                    {label}
                  </Link>
                ))}
              </div>

              <div className="my-4 h-px bg-border" />

              <p className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Browse</p>
              <div className="space-y-1">
                {browseLinks.map(({ icon: Icon, label, href }) => (
                  <Link
                    key={label}
                    to={href}
                    onClick={() => setSheetOpen(false)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-surface-hover hover:text-foreground transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="px-5 py-4 border-t border-border">
              <p className="text-xs text-muted-foreground/60">© 2026 Voidstream</p>
            </div>
          </SheetContent>
        </Sheet>
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-sm">V</span>
          </div>
          <span className="font-display font-bold text-lg text-foreground hidden sm:block">Voidstream</span>
        </Link>
      </div>

      {/* Search */}
      <div className="flex-1 max-w-xl mx-4 hidden md:block">
        <div className="relative">
          <input
            type="text"
            placeholder="Search videos, creators, topics..."
            className="w-full bg-secondary rounded-full px-5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setSearchOpen(!searchOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-surface-hover transition-colors"
        >
          <Search className="w-5 h-5 text-foreground" />
        </button>
        <button className="p-2 rounded-lg hover:bg-surface-hover transition-colors hidden sm:block">
          <Upload className="w-5 h-5 text-foreground" />
        </button>
        <Link to="/notifications" className="p-2 rounded-lg hover:bg-surface-hover transition-colors relative">
          <Bell className="w-5 h-5 text-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
        </Link>
        <Link to="/profile" className="w-8 h-8 rounded-full bg-primary/30 border-2 border-primary flex items-center justify-center ml-1">
          <span className="text-xs font-semibold text-foreground">JD</span>
        </Link>
      </div>

      {/* Mobile search */}
      {searchOpen && (
        <div className="absolute top-full left-0 right-0 p-3 bg-background border-b border-border md:hidden">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-secondary rounded-full px-5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            autoFocus
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
