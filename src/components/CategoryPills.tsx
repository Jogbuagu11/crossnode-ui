import { useState } from "react";

const categories = [
  "All", "Gaming", "Music", "Tech", "Film", "Sports",
  "Education", "Art", "Science", "Travel", "Comedy", "News",
];

const CategoryPills = () => {
  const [active, setActive] = useState("All");

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide px-4 md:px-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
            active === cat
              ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
              : "bg-secondary text-secondary-foreground hover:bg-surface-hover"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryPills;
