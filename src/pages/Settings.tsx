import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(false);
  const [commentNotifs, setCommentNotifs] = useState(true);
  const [subNotifs, setSubNotifs] = useState(true);
  const [privateProfile, setPrivateProfile] = useState(false);
  const [watchHistory, setWatchHistory] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 md:px-6 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Link to="/profile" className="p-2 rounded-lg hover:bg-surface-hover transition-colors">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </Link>
          <h1 className="text-2xl font-display font-bold text-foreground">Settings</h1>
        </div>

        {/* Account */}
        <section className="mb-8">
          <h2 className="text-lg font-display font-semibold text-foreground mb-4">Account</h2>
          <div className="space-y-4 bg-card rounded-xl border border-border p-5">
            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">Display Name</label>
              <input
                type="text"
                defaultValue="John Doe"
                className="w-full bg-secondary rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">Email</label>
              <input
                type="email"
                defaultValue="john@voidstream.com"
                className="w-full bg-secondary rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section className="mb-8">
          <h2 className="text-lg font-display font-semibold text-foreground mb-4">Notifications</h2>
          <div className="space-y-0 bg-card rounded-xl border border-border divide-y divide-border">
            {[
              { label: "Email notifications", desc: "Receive updates via email", value: emailNotifs, set: setEmailNotifs },
              { label: "Push notifications", desc: "Browser push alerts", value: pushNotifs, set: setPushNotifs },
              { label: "Comment replies", desc: "When someone replies to your comment", value: commentNotifs, set: setCommentNotifs },
              { label: "New subscribers", desc: "When someone subscribes to you", value: subNotifs, set: setSubNotifs },
            ].map(({ label, desc, value, set }) => (
              <div key={label} className="flex items-center justify-between px-5 py-4">
                <div>
                  <p className="text-sm font-medium text-foreground">{label}</p>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </div>
                <Switch checked={value} onCheckedChange={set} />
              </div>
            ))}
          </div>
        </section>

        {/* Privacy */}
        <section className="mb-8">
          <h2 className="text-lg font-display font-semibold text-foreground mb-4">Privacy</h2>
          <div className="space-y-0 bg-card rounded-xl border border-border divide-y divide-border">
            {[
              { label: "Private profile", desc: "Only you can see your profile details", value: privateProfile, set: setPrivateProfile },
              { label: "Watch history", desc: "Save your watch history", value: watchHistory, set: setWatchHistory },
            ].map(({ label, desc, value, set }) => (
              <div key={label} className="flex items-center justify-between px-5 py-4">
                <div>
                  <p className="text-sm font-medium text-foreground">{label}</p>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </div>
                <Switch checked={value} onCheckedChange={set} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Settings;
