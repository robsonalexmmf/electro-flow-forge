import { Star, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  discount?: number;
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  originalPrice, 
  rating, 
  reviews, 
  image, 
  badge,
  discount 
}: ProductCardProps) => {
  const formatPrice = (value: number) => 
    new Intl.NumberFormat('pt-BR', { 
      style: 'currency', 
      currency: 'BRL' 
    }).format(value);

  return (
    <Card className="group relative overflow-hidden bg-card hover:shadow-strong transition-all duration-300 border-card-border">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {badge && (
          <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-md">
            {badge}
          </span>
        )}
        {discount && (
          <span className="bg-success text-success-foreground text-xs font-semibold px-2 py-1 rounded-md">
            -{discount}%
          </span>
        )}
      </div>

      {/* Favorite Button */}
      <button className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-background">
        <Heart className="h-4 w-4 text-muted-foreground hover:text-destructive" />
      </button>

      {/* Product Image */}
      <div className="aspect-square overflow-hidden bg-muted/20 p-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(rating)
                    ? 'text-warning fill-warning'
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviews})</span>
        </div>

        {/* Product Name */}
        <h3 className="font-medium text-sm leading-tight line-clamp-2 text-card-foreground">
          {name}
        </h3>

        {/* Price */}
        <div className="space-y-1">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-success">
              {formatPrice(price)}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>
          <p className="text-xs text-muted-foreground">
            ou 12x de {formatPrice(price / 12)}
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button size="sm" className="flex-1" variant="gradient">
            <ShoppingCart className="h-3 w-3 mr-2" />
            Comprar
          </Button>
          <Button size="sm" variant="outline" className="px-3">
            Ver mais
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;