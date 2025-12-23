import { Moon, Sun, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = (newTheme: string) => {
    setTheme(newTheme);
  };

  if (!mounted) return null;

  return (
    <div className="bg-background min-h-screen pb-12">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header with Back Button */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="font-heading font-bold text-3xl text-foreground">Settings</h1>
        </div>

        {/* Settings Container */}
        <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
          {/* Appearance Section */}
          <div className="p-6 md:p-8 border-b border-border">
            <h2 className="font-heading font-bold text-xl text-foreground mb-6">Appearance</h2>
            
            {/* Theme Toggle */}
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground mb-4">Choose your preferred theme</div>
              
              <div className="grid grid-cols-2 gap-4">
                {/* Light Mode */}
                <button
                  onClick={() => handleThemeToggle("light")}
                  className={`p-4 rounded-lg border-2 transition-all cursor-pointer flex flex-col items-center gap-2 ${
                    theme === "light"
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50 bg-card"
                  }`}
                  data-testid="button-light-mode"
                >
                  <Sun className={`h-8 w-8 ${theme === "light" ? "text-primary" : "text-muted-foreground"}`} />
                  <span className={`font-semibold text-sm ${theme === "light" ? "text-primary" : "text-foreground"}`}>
                    Light
                  </span>
                </button>

                {/* Dark Mode */}
                <button
                  onClick={() => handleThemeToggle("dark")}
                  className={`p-4 rounded-lg border-2 transition-all cursor-pointer flex flex-col items-center gap-2 ${
                    theme === "dark"
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50 bg-card"
                  }`}
                  data-testid="button-dark-mode"
                >
                  <Moon className={`h-8 w-8 ${theme === "dark" ? "text-primary" : "text-muted-foreground"}`} />
                  <span className={`font-semibold text-sm ${theme === "dark" ? "text-primary" : "text-foreground"}`}>
                    Dark
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Other Settings - Placeholder */}
          <div className="p-6 md:p-8 space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Account</h3>
              <p className="text-sm text-muted-foreground mb-3">Manage your account settings</p>
              <Button variant="outline" className="border-border hover:bg-primary/10 hover:border-primary text-foreground">
                Account Settings
              </Button>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="font-semibold text-foreground mb-2">Privacy & Security</h3>
              <p className="text-sm text-muted-foreground mb-3">Control your privacy settings</p>
              <Button variant="outline" className="border-border hover:bg-primary/10 hover:border-primary text-foreground">
                Privacy Settings
              </Button>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="font-semibold text-foreground mb-2">Notifications</h3>
              <p className="text-sm text-muted-foreground mb-3">Manage notification preferences</p>
              <Button variant="outline" className="border-border hover:bg-primary/10 hover:border-primary text-foreground">
                Notification Settings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
