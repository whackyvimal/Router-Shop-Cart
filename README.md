# ShopCart - E-commerce Application

A modern, responsive e-commerce application built with React, TypeScript, and Tailwind CSS. This application allows users to browse products from the Fake Store API, add items to their cart, and manage their shopping experience.

## Features

### 🛍️ Product Management
- **Product Listing**: Browse products fetched from the Fake Store API
- **Product Details**: View product images, titles, prices, descriptions, and ratings
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Categories & Ratings**: Products display category badges and star ratings

### 🛒 Shopping Cart Functionality
- **Add to Cart**: Add products to your shopping cart with a single click
- **Remove from Cart**: Remove items completely from the cart
- **Quantity Management**: Increase/decrease item quantities in the cart
- **Dynamic Button States**: Smart button that shows "Add to Cart" or "Remove from Cart" based on cart status
- **Cart Badge**: Navigation shows total items in cart with a visual badge

### 💰 Pricing & Discounts
- **Individual Item Totals**: Each cart item shows price × quantity
- **Total Calculation**: Dynamic total price calculation
- **10% Discount**: Automatic 10% discount applied to final total
- **Real-time Updates**: All prices update immediately when quantities change

### 🚀 Technical Features
- **React Router**: Seamless navigation between pages
- **Context API**: Global cart state management
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Mobile-first design approach
- **Loading States**: Skeleton loading for better UX
- **Error Handling**: Graceful error handling for API failures

## Technology Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Modern UI components
- **Lucide React** - Beautiful icons
- **Fake Store API** - Product data source

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn UI components
│   ├── Navigation.tsx  # Main navigation component
│   └── ProductCard.tsx # Product display component
├── contexts/           # React contexts
│   └── CartContext.tsx # Shopping cart state management
├── pages/              # Page components
│   ├── Products.tsx    # Product listing page
│   ├── Cart.tsx        # Shopping cart page
│   └── NotFound.tsx    # 404 error page
├── lib/                # Utility functions
└── hooks/              # Custom React hooks
```

## Key Components

### CartContext
- Manages global cart state using React's useReducer
- Provides cart actions: add, remove, increase/decrease quantity
- Calculates totals and applies discount automatically
- Persists cart state across page navigation

### ProductCard
- Displays individual product information
- Smart cart button (Add/Remove based on cart status)
- Responsive design with hover effects
- Truncated text for consistent layout

### Navigation
- Responsive navigation bar
- Cart badge showing total items
- Active page highlighting
- Mobile-friendly design

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shop-cart-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## API Integration

The application integrates with the [Fake Store API](https://fakestoreapi.com/) to fetch product data:

- **Endpoint**: `https://fakestoreapi.com/products`
- **Method**: GET
- **Response**: Array of product objects with id, title, price, description, category, image, and rating

## Design System

The application uses a custom design system built on Tailwind CSS:

- **Primary Color**: Modern blue (#1E90FF)
- **Accent Color**: Success green (#22C55E)
- **Warning Color**: Amber (#F59E0B)
- **Typography**: Clean, readable font hierarchy
- **Animations**: Subtle hover effects and transitions
- **Responsive**: Mobile-first breakpoints

## State Management

Cart state is managed using React's Context API with useReducer:

```typescript
interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  discountedPrice: number;
}
```

## Future Enhancements

- User authentication
- Product search and filtering
- Wishlist functionality
- Order history
- Payment integration
- Product reviews and ratings
- Inventory management

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for providing the product data
- [Shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide](https://lucide.dev/) for the icon set
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework