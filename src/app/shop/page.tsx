"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Heart, Star } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  isNew?: boolean;
  isSale?: boolean;
  salePrice?: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Yoga Mat",
    description: "Eco-friendly, non-slip yoga mat with alignment lines",
    price: 49.99,
    category: "Fitness Gear",
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYSUyMG1hdHxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    isNew: true
  },
  {
    id: 2,
    name: "Resistance Band Set",
    description: "Set of 5 resistance bands for full-body workouts",
    price: 29.99,
    category: "Fitness Gear",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzaXN0YW5jZSUyMGJhbmRzfGVufDB8fDB8fHww",
    rating: 4.6,
    reviews: 89,
    inStock: true
  },
  {
    id: 3,
    name: "PULSEIQ Performance Hoodie",
    description: "Premium quality hoodie with moisture-wicking technology",
    price: 59.99,
    category: "Merchandise",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9vZGllfGVufDB8fDB8fHww",
    rating: 4.9,
    reviews: 56,
    inStock: true,
    isNew: true
  },
  {
    id: 4,
    name: "Premium Workout Plans",
    description: "12-week personalized workout program",
    price: 79.99,
    category: "Digital Products",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya291dCUyMHBsYW58ZW58MHx8MHx8fDA%3D",
    rating: 4.7,
    reviews: 203,
    inStock: true
  },
  {
    id: 5,
    name: "Smart Water Bottle",
    description: "Track your water intake with smart reminders",
    price: 34.99,
    category: "Fitness Gear",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXIlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D",
    rating: 4.5,
    reviews: 78,
    inStock: true,
    isSale: true,
    salePrice: 29.99
  },
  {
    id: 6,
    name: "Nutrition Guide eBook",
    description: "Complete guide to sports nutrition and meal planning",
    price: 24.99,
    category: "Digital Products",
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bnV0cml0aW9ufGVufDB8fDB8fHww",
    rating: 4.8,
    reviews: 156,
    inStock: true
  }
];

const categories = [
  "All",
  "Fitness Gear",
  "Merchandise",
  "Digital Products"
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart } = useCart();

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">PULSEIQ Shop</h1>
        <p className="text-muted-foreground text-lg">
          Premium fitness gear and digital products to support your journey
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 space-y-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="mb-6">
            <Input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-md"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link href={`/shop/${product.id}`} key={product.id}>
                <Card className="overflow-hidden group cursor-pointer">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="bg-background/80 hover:bg-background"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                      >
                        <Heart className="h-5 w-5" />
                      </Button>
                    </div>
                    {product.isNew && (
                      <Badge className="absolute top-2 left-2">New</Badge>
                    )}
                    {product.isSale && (
                      <Badge variant="destructive" className="absolute top-2 left-2">
                        Sale
                      </Badge>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{product.rating}</span>
                        <span className="text-sm text-muted-foreground">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        {product.isSale ? (
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-semibold">
                              ${product.salePrice}
                            </span>
                            <span className="text-sm text-muted-foreground line-through">
                              ${product.price}
                            </span>
                          </div>
                        ) : (
                          <span className="text-lg font-semibold">
                            ${product.price}
                          </span>
                        )}
                      </div>
                      <Button
                        onClick={(e) => handleAddToCart(e, product)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 