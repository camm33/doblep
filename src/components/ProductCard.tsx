import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  size: string;
  condition: string;
  brand?: string;
  isLiked?: boolean;
  onLike?: (id: string) => void;
  onClick?: (id: string) => void;
}

const ProductCard = ({
  id,
  image,
  title,
  price,
  originalPrice,
  size,
  condition,
  brand,
  isLiked = false,
  onLike,
  onClick,
}: ProductCardProps) => {
  return (
    <Card 
      className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 cursor-pointer bg-card hover:bg-[hsl(var(--product-card-hover))]"
      onClick={() => onClick?.(id)}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="aspect-[3/4] w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 h-8 w-8 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card"
          onClick={(e) => {
            e.stopPropagation();
            onLike?.(id);
          }}
        >
          <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : 'hover:text-red-500'}`} />
        </Button>
        {condition !== 'New' && (
          <Badge variant="secondary" className="absolute bottom-2 left-2">
            {condition}
          </Badge>
        )}
      </div>
      
      <div className="p-4 space-y-2">
        {brand && (
          <p className="text-sm text-muted-foreground font-medium">{brand}</p>
        )}
        <h3 className="font-medium leading-tight line-clamp-2">{title}</h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-[hsl(var(--price-highlight))]">
              ${price.toLocaleString('es-CO')} COP
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toLocaleString('es-CO')} COP
              </span>
            )}
          </div>
          <Badge variant="outline" className="text-xs">
            Talla {size}
          </Badge>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;