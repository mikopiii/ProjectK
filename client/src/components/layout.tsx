import { Link, useLocation } from "wouter";
import { Search, ShoppingCart, User, MapPin, Menu, Heart, Bell, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Top Micro Bar */}
      <div className="bg-primary/10 text-xs py-1 px-4 hidden md:block border-b border-primary/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-foreground/70">
          <div className="flex gap-4">
            <span className="hover:text-primary cursor-pointer">Seller Centre</span>
            <span className="hover:text-primary cursor-pointer">Download App</span>
            <span className="hover:text-primary cursor-pointer">Follow us on social</span>
          </div>
          <div className="flex gap-4">
            <span className="hover:text-primary cursor-pointer">Notifications</span>
            <span className="hover:text-primary cursor-pointer">Help</span>
            <span className="hover:text-primary cursor-pointer">English</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-5 gap-4 md:gap-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
            <div className="h-10 w-10 bg-gradient-to-br from-primary to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
              K
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-2xl tracking-tight leading-none text-foreground">
                KJM<span className="text-primary">Shop</span>
              </span>
              <span className="text-[0.6rem] font-medium tracking-wider text-muted-foreground uppercase">
                Philippines
              </span>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl relative">
            <div className="relative w-full flex shadow-sm rounded-lg overflow-hidden ring-1 ring-gray-200 focus-within:ring-2 focus-within:ring-primary transition-shadow">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="bg-gray-50 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 border-r border-gray-200 flex items-center gap-1 transition-colors">
                    All <ChevronDown className="h-3 w-3" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Electronics</DropdownMenuItem>
                  <DropdownMenuItem>Fashion</DropdownMenuItem>
                  <DropdownMenuItem>Home</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Input 
                placeholder="Search for local products in the Philippines..." 
                className="flex-1 border-0 rounded-none focus-visible:ring-0 shadow-none bg-white h-11" 
              />
              <Button size="icon" className="h-11 w-12 rounded-none bg-primary hover:bg-primary/90 text-primary-foreground shadow-none">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2 md:gap-4 text-gray-600">
            <Button variant="ghost" size="icon" className="hidden md:flex relative hover:text-primary hover:bg-primary/10">
              <Heart className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative hover:text-primary hover:bg-primary/10">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-primary text-white border-white text-[10px]">2</Badge>
            </Button>

            <div className="w-px h-6 bg-gray-200 mx-1 hidden md:block"></div>

            <Link href="/profile">
              <Button variant="ghost" className="gap-2 hover:bg-primary/10 hover:text-primary px-2 cursor-pointer">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <User className="h-4 w-4 text-primary" />
                </div>
                <div className="hidden md:flex flex-col items-start text-xs">
                  <span className="text-muted-foreground font-normal">Welcome,</span>
                  <span className="font-semibold text-foreground">Profile</span>
                </div>
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Search - Visible only on mobile */}
        <div className="md:hidden px-4 pb-3">
          <div className="relative w-full flex shadow-sm rounded-lg overflow-hidden ring-1 ring-gray-200 focus-within:ring-2 focus-within:ring-primary transition-shadow">
            <Input 
              placeholder="Search products..." 
              className="flex-1 border-0 rounded-none focus-visible:ring-0 shadow-none bg-white h-10" 
            />
            <Button size="icon" className="h-10 w-10 rounded-none bg-primary text-primary-foreground shadow-none">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Category & Location Bar */}
        <div className="bg-white border-b border-gray-100 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1 text-gray-500 hover:text-primary cursor-pointer transition-colors font-medium">
                <Menu className="h-4 w-4" />
                <span>All Categories</span>
              </div>
              <nav className="flex gap-5 text-gray-600 font-medium">
                <a href="#" className="hover:text-primary transition-colors">Daily Discover</a>
                <a href="#" className="hover:text-primary transition-colors">Barangay Deals</a>
                <a href="#" className="hover:text-primary transition-colors">Local Crafts</a>
                <a href="#" className="hover:text-primary transition-colors">Pasalubong</a>
              </nav>
            </div>
            
            <div className="flex items-center gap-1 text-gray-500 hover:text-primary cursor-pointer transition-colors">
              <MapPin className="h-3.5 w-3.5" />
              <span>Deliver to: <span className="font-semibold text-foreground">Metro Manila</span></span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 pt-12 pb-6 mt-12 text-sm">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Customer Service</h4>
            <ul className="space-y-2 text-gray-500">
              <li className="hover:text-primary cursor-pointer hover:underline">Help Centre</li>
              <li className="hover:text-primary cursor-pointer hover:underline">Payment Methods</li>
              <li className="hover:text-primary cursor-pointer hover:underline">KJM Coins</li>
              <li className="hover:text-primary cursor-pointer hover:underline">Order Tracking</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">About KJM Shop</h4>
            <ul className="space-y-2 text-gray-500">
              <li><Link href="/about" className="hover:text-primary hover:underline">About Us</Link></li>
              <li className="hover:text-primary cursor-pointer hover:underline">KJM Blog</li>
              <li className="hover:text-primary cursor-pointer hover:underline">KJM Careers</li>
              <li className="hover:text-primary cursor-pointer hover:underline">Policies</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Payment</h4>
            <div className="flex gap-2 flex-wrap">
              <div className="h-6 w-10 bg-gray-100 rounded border border-gray-200 flex items-center justify-center text-[8px] font-bold text-gray-400">GCASH</div>
              <div className="h-6 w-10 bg-gray-100 rounded border border-gray-200 flex items-center justify-center text-[8px] font-bold text-gray-400">MAYA</div>
              <div className="h-6 w-10 bg-gray-100 rounded border border-gray-200 flex items-center justify-center text-[8px] font-bold text-gray-400">COD</div>
              <div className="h-6 w-10 bg-gray-100 rounded border border-gray-200 flex items-center justify-center text-[8px] font-bold text-gray-400">VISA</div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Follow Us</h4>
            <div className="flex gap-2 text-gray-400">
              <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">f</div>
              <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors cursor-pointer">t</div>
              <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors cursor-pointer">i</div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2025 KJM Shop Philippines. All Rights Reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
             <span>Country & Region: Philippines</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
