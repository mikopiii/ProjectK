import { Link } from "wouter";
import { Star, MapPin } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/lib/mockData";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <Card className="h-full border-none shadow-none hover:shadow-lg transition-shadow group cursor-pointer overflow-hidden rounded-lg bg-card flex flex-col">
        <div className="relative aspect-square overflow-hidden bg-input">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.badge && (
            <Badge className="absolute top-2 left-0 rounded-l-none rounded-r-md bg-primary hover:bg-primary text-primary-foreground font-bold shadow-sm">
              {product.badge}
            </Badge>
          )}
        </div>
        
        <CardContent className="p-3 flex-1 flex flex-col gap-1.5">
          <h3 className="text-sm font-medium text-foreground line-clamp-2 leading-tight min-h-[2.5em] group-hover:text-primary transition-colors">
            {product.title}
          </h3>
          
          <div className="mt-auto">
            <div className="flex items-baseline gap-1">
              <span className="text-xs font-medium text-primary">₱</span>
              <span className="text-lg font-bold text-primary">{product.price.toLocaleString()}</span>
            </div>
            
            <div className="flex items-center gap-1 mt-1">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-muted fill-muted'}`} 
                  />
                ))}
              </div>
              <span className="text-[10px] text-muted-foreground">({product.reviews})</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-3 pt-0 flex justify-between items-center text-[10px] text-muted-foreground border-t border-dashed border-border mt-2">
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span className="truncate max-w-[80px]">{product.location}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
