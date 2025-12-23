import { PRODUCTS, CATEGORIES } from "@/lib/mockData";
import { ProductCard } from "@/components/product-card";
import { ChevronRight, Shirt, Sparkles } from "lucide-react";
import generatedImage from '@assets/generated_images/modern_filipino_digital_marketplace_hero_banner.png';
import { Button } from "@/components/ui/button";

const ICON_MAP: Record<string, any> = {
  Shirt, Sparkles
};

export default function Home() {
  return (
    <div className="bg-background flex flex-col gap-8 pb-12">
      {/* Hero Section */}
      <div className="w-full md:pt-4">
        <div className="max-w-7xl mx-auto px-0 md:px-4">
          <div className="relative aspect-[21/9] md:aspect-[24/8] md:rounded-xl overflow-hidden shadow-sm group">
            <img 
              src={generatedImage} 
              alt="KJM Shop Banner" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex flex-col justify-center px-8 md:px-16 text-white">
              <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl mb-4 drop-shadow-md">
                Shop Local. <br/>
                <span className="text-primary">Love Local.</span>
              </h1>
              <p className="max-w-md text-sm md:text-lg mb-6 text-gray-100 drop-shadow">
                Discover the best products from barangays across the Philippines, delivered to your doorstep.
              </p>
              <Button size="lg" className="w-fit font-bold text-base px-8 shadow-lg hover:scale-105 transition-transform">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg text-foreground">Categories</h3>
            <div className="flex items-center text-xs font-bold text-primary cursor-pointer hover:underline">
              See All <ChevronRight className="h-3 w-3" />
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {CATEGORIES.map((cat) => {
              const Icon = ICON_MAP[cat.icon];
              return (
                <div key={cat.id} className="flex flex-col items-center gap-3 cursor-pointer group">
                  <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary group-hover:border-primary/40 transition-all duration-300 shadow-sm group-hover:shadow-md">
                    {Icon && <Icon className="h-7 w-7" strokeWidth={1.5} />}
                  </div>
                  <span className="text-xs font-medium text-muted-foreground text-center group-hover:text-primary transition-colors">
                    {cat.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* New Products For Sale Grid */}
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex items-center gap-2 mb-6 sticky top-[72px] z-40 bg-background/95 backdrop-blur py-4 border-b border-border">
          <h2 className="font-heading font-bold text-xl text-primary uppercase tracking-wide border-b-2 border-primary pb-1">New Products For Sale!</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {/* Duplicate for visual fullness */}
          {PRODUCTS.slice(0, 4).map((product) => (
             <ProductCard key={`dup-${product.id}`} product={{...product, id: `dup-${product.id}`}} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="outline" className="bg-card border-border text-muted-foreground hover:text-primary hover:border-primary hover:bg-card/80">
            See More
          </Button>
        </div>
      </div>
    </div>
  );
}
