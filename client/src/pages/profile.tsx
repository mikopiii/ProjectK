import { User, Settings, HelpCircle, Wallet, LogOut, ChevronRight } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Profile() {
  const [, navigate] = useLocation();

  const profileMenuItems = [
    {
      icon: User,
      label: "Account Info",
      description: "Manage your personal information",
      action: "account-info",
      onClick: () => {}
    },
    {
      icon: Settings,
      label: "Settings",
      description: "Customize your preferences",
      action: "settings",
      onClick: () => navigate("/settings")
    },
    {
      icon: HelpCircle,
      label: "Help Center",
      description: "Get support and find answers",
      action: "help-center",
      onClick: () => {}
    },
    {
      icon: Wallet,
      label: "Account Balance",
      description: "View your credits and transactions",
      action: "account-balance",
      onClick: () => {}
    }
  ];

  return (
    <div className="bg-background min-h-screen pb-12">
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Profile Header */}
        <Card className="border-border bg-card mb-8 overflow-hidden">
          <div className="p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
              <User className="h-10 w-10 text-primary" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="font-heading font-bold text-3xl text-foreground mb-1">
                Welcome Back!
              </h1>
              <p className="text-muted-foreground text-sm">guest@kjmshop.ph</p>
            </div>
          </div>
        </Card>

        {/* Menu Items */}
        <div className="space-y-4 mb-8">
          {profileMenuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.action} className="border-border bg-card transition-all cursor-pointer group overflow-hidden">
                <button onClick={item.onClick} className="w-full p-6 flex items-center justify-between text-left hover:bg-primary/10 transition-colors" data-testid={`button-${item.action}`}>
                  <div className="flex items-center gap-4 flex-1">
                    <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                        {item.label}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </button>
              </Card>
            );
          })}
        </div>

        <Separator className="bg-border my-8" />

        {/* Logout Button */}
        <div className="flex justify-center">
          <Link href="/">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 gap-2 font-semibold">
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
