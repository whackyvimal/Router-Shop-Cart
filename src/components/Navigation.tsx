import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Store } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Badge } from '@/components/ui/badge';

const Navigation = () => {
  const { state } = useCart();
  const location = useLocation();

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-primary">
            <Store className="h-8 w-8" />
            <span>ShopCart</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link 
              to="/" 
              className={`font-medium transition-colors hover:text-primary ${
                location.pathname === '/' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Products
            </Link>
            
            <Link 
              to="/cart" 
              className={`flex items-center space-x-2 font-medium transition-colors hover:text-primary ${
                location.pathname === '/cart' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <div className="relative">
                <ShoppingCart className="h-5 w-5" />
                {state.totalItems > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {state.totalItems}
                  </Badge>
                )}
              </div>
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;