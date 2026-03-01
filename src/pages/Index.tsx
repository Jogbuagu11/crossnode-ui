import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryPills from "@/components/CategoryPills";
import VideoGrid from "@/components/VideoGrid";
import Sidebar from "@/components/Sidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-w-0">
          <div className="py-4">
            <CategoryPills />
          </div>
          <VideoGrid />
        </main>
      </div>
    </div>
  );
};

export default Index;
