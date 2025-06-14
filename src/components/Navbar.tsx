"use client";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import React from "react";
import { DumbbellIcon, HomeIcon, UserIcon, ZapIcon, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useCart } from "@/context/CartContext";
import { Badge } from "./ui/badge";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const { totalItems } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40 py-4 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/*LOGO*/}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="p-1.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
            <ZapIcon className="w-5 h-5 text-primary"></ZapIcon>
          </div>
          <span className="text-xl font-bold font-mono tracking-tight">
            pulse<span className="text-primary">IQ</span>
          </span>
        </Link>

        {/*Navigation*/}
        <nav className="flex items-center gap-6">
          <Link href="/"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <HomeIcon size={18} />
            <span>Home</span>
          </Link>

          {isSignedIn ? (
            <>
              <Link
                href="/generate-program"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <DumbbellIcon size={18} />
                <span>Generate</span>
              </Link>

              <Link
                href="/shop"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <ShoppingCart size={18} />
                <span>Shop</span>
              </Link>

              <Link
                href="/cart"
                className="relative flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <ShoppingCart size={18} />
                <span>Cart</span>
                {totalItems > 0 && (
                  <Badge variant="secondary" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0">
                    {totalItems}
                  </Badge>
                )}
              </Link>

              <Link
                href="/profile"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <UserIcon size={18} />
                <span>Profile</span>
              </Link>

              <div className="flex items-center gap-3 ml-2">
                <Button
                  asChild
                  variant="outline"
                  className="border-primary/50 text-primary hover:text-white hover:bg-primary hover:border-primary transition-all duration-200"
                >
                  <Link href="/generate-program">Get Started</Link>
                </Button>
                <div className="hover:opacity-80 transition-opacity">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </div>
            </>
          ) : (
            <>
              <SignInButton>
                <Button variant="ghost"
                  className="text-muted-foreground hover:text-primary hover:bg-primary/10"
                  >
                    Sign In
                  </Button>
              </SignInButton>

              <SignUpButton>
                <Button variant="default"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Sign Up
                  </Button>
              </SignUpButton>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
