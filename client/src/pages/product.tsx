import { useRoute, Link } from "wouter";
import { PRODUCTS } from "@/lib/mockData";
import { Star, MapPin, Heart, Share2, Truck, ShieldCheck, MessageCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function ProductPage() {
  const [match, params] = useRoute("/product/:id");
  const id = params?.id;
  
  // Find product (strip "dup-" prefix if coming from duplicate list)
  const cleanId = id?.replace('dup-', '');
  const product = PRODUCTS.find(p => p.id === cleanId);

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  return (
    <div className="bg-background pb-12">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-8">
        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" size="icon" className="mb-4 hover:bg-primary/10 hover:text-primary" data-testid="button-back">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8">
            
            {/* Image Gallery */}
            <div className="md:col-span-5 p-4">
              <div className="aspect-square bg-input rounded-lg overflow-hidden border border-border mb-4">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className={`aspect-square rounded-md overflow-hidden border cursor-pointer ${i === 1 ? 'border-primary ring-1 ring-primary' : 'border-border hover:border-primary/50'}`}>
                    <img src={product.image} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="md:col-span-7 p-4 md:p-8 md:pl-0">
              <h1 className="font-heading font-medium text-xl md:text-2xl text-foreground mb-3 leading-snug">
                {product.title}
              </h1>

              <div className="flex items-center gap-4 text-sm mb-6">
                <div className="flex items-center gap-1 text-primary border-b border-primary/20 pb-0.5">
                  <span className="font-bold underline text-base">{product.rating}</span>
                  <div className="flex text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 fill-current`} />
                    ))}
                  </div>
                </div>
                <div className="w-px h-4 bg-border"></div>
                <div className="text-muted-foreground">
                  <span className="font-bold text-foreground border-b border-border pb-0.5 text-base">{product.reviews}</span> Ratings
                </div>
                <div className="w-px h-4 bg-border"></div>
                <div className="text-muted-foreground">
                  <span className="font-bold text-foreground border-b border-border pb-0.5 text-base">2.5k</span> Sold
                </div>
              </div>

              <div className="bg-input p-4 rounded-lg mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-muted-foreground line-through text-sm">₱{Math.round(product.price * 1.2).toLocaleString()}</span>
                  <span className="text-3xl font-bold text-primary">₱{product.price.toLocaleString()}</span>
                  <Badge className="bg-primary text-primary-foreground">20% OFF</Badge>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 md:gap-4 mb-8 flex-wrap">
                <div className="flex border border-border rounded-md">
                   <button className="px-2 md:px-3 hover:bg-input border-r border-border text-muted-foreground text-sm md:text-base">-</button>
                   <input className="w-10 md:w-12 text-center text-sm focus:outline-none py-1 md:py-2 bg-background text-foreground" defaultValue="1" />
                   <button className="px-2 md:px-3 hover:bg-input border-l border-border text-muted-foreground text-sm md:text-base">+</button>
                </div>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 h-auto px-4 md:px-8 py-2 md:py-3 text-sm md:text-base flex-1 md:flex-none">
                  Add To Cart
                </Button>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-auto px-4 md:px-10 py-2 md:py-3 text-sm md:text-base shadow-lg shadow-primary/20 flex-1 md:flex-none">
                  Buy Now
                </Button>
              </div>
              
              <Separator className="my-6" />

              {/* Seller Info */}
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-input flex items-center justify-center text-muted-foreground font-bold text-xl overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${product.seller}`} alt="Seller" />
                 </div>
                 <div className="flex-1">
                    <div className="font-bold text-foreground">{product.seller}</div>
                    <div className="text-xs text-muted-foreground">Active 5 minutes ago</div>
                    <div className="flex gap-2 mt-1">
                       <Button variant="outline" size="sm" className="h-7 text-xs gap-1 border-primary text-primary hover:bg-primary/5">
                          <MessageCircle className="w-3 h-3" /> Chat Now
                       </Button>
                       <Button variant="secondary" size="sm" className="h-7 text-xs bg-input text-muted-foreground hover:bg-input/80">
                          View Shop
                       </Button>
                    </div>
                 </div>
              </div>

            </div>
          </div>
        </div>
        
        {/* Product Information */}
        <div className="bg-card rounded-xl shadow-sm border border-border p-6 mt-4">
           <h3 className="bg-input p-3 font-bold text-lg text-foreground mb-4 rounded">Product Information</h3>
           <div className="space-y-3 text-sm max-w-2xl">
              <div className="grid grid-cols-3 gap-4">
                 <span className="text-muted-foreground">Category</span>
                 <span className="col-span-2 text-foreground capitalize">{product.category}</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                 <span className="text-muted-foreground">Stock</span>
                 <span className="col-span-2 text-foreground">1453</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                 <span className="text-muted-foreground">Ships From</span>
                 <span className="col-span-2 text-foreground">{product.location}</span>
              </div>
              <div className="border-t border-border pt-3">
                 <div className="grid grid-cols-3 gap-4 mb-3">
                    <span className="text-muted-foreground">Shipping</span>
                    <div className="col-span-2 flex flex-col gap-1">
                       <div className="flex items-center gap-2 text-foreground font-medium text-sm">
                          <Truck className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                          <span>Free Shipping</span>
                       </div>
                       <div className="text-muted-foreground text-xs">Free shipping for orders over ₱500</div>
                    </div>
                 </div>
                 <div className="grid grid-cols-3 gap-4">
                    <span className="text-muted-foreground">Location</span>
                    <div className="col-span-2 flex items-center gap-2 text-foreground">
                        <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        {product.location}
                    </div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
