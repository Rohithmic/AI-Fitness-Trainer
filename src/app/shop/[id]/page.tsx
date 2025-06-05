"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const products = [
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
    isNew: true,
    features: [
      "Eco-friendly TPE material",
      "Non-slip surface on both sides",
      "Alignment lines for proper positioning",
      "Perfect thickness for comfort and stability",
      "Includes carrying strap"
    ],
    specifications: {
      dimensions: "183 x 61 x 0.6 cm",
      weight: "1.8 kg",
      material: "TPE",
      color: "Purple"
    }
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
    inStock: true,
    features: [
      "5 different resistance levels",
      "Latex-free material",
      "Includes exercise guide",
      "Perfect for home workouts",
      "Portable and lightweight"
    ],
    specifications: {
      levels: "5 resistance levels",
      material: "Natural latex",
      included: "Carrying bag, exercise guide",
      weight: "0.5 kg"
    }
  },
  // ... Add other products with their details
];

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/shop" className="text-primary hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/shop"
        className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Shop
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-lg"
          />
          {product.isNew && (
            <Badge className="absolute top-4 left-4">New</Badge>
          )}
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-1">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">
                ({product.reviews} reviews)
              </span>
            </div>
            <p className="text-muted-foreground text-lg mb-4">
              {product.description}
            </p>
            <div className="text-2xl font-bold mb-6">
              ${product.price}
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Specifications */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Specifications</h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key}>
                  <span className="font-medium">{key}:</span>{" "}
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-4 pt-6">
            <Button
              size="lg"
              className="flex-1"
              onClick={() => addToCart(product)}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex-1"
            >
              <Heart className="h-5 w-5 mr-2" />
              Add to Wishlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 