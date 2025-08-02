import { Product } from '@/contexts/CartContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, Trash2 } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, removeFromCart, isInCart } = useCart();
  const inCart = isInCart(product.id);

  const handleCartAction = () => {
    if (inCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-105">
      <CardHeader className="p-4">
        <div className="aspect-square overflow-hidden rounded-lg bg-secondary">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain p-4"
          />
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 px-4 pb-2">
        <div className="flex items-start justify-between mb-2">
          <Badge variant="outline" className="text-xs">
            {product.category}
          </Badge>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-warning text-warning" />
            <span className="text-sm text-muted-foreground">
              {product.rating.rate} ({product.rating.count})
            </span>
          </div>
        </div>
        
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
          {truncateText(product.title, 60)}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
          {truncateText(product.description, 120)}
        </p>
        
        <div className="text-2xl font-bold text-primary">
          ${product.price.toFixed(2)}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleCartAction}
          className="w-full"
          variant={inCart ? "destructive" : "default"}
        >
          {inCart ? (
            <>
              <Trash2 className="h-4 w-4 mr-2" />
              Remove from Cart
            </>
          ) : (
            <>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;