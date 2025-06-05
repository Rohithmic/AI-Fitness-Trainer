"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, User, Heart, Share2, Bookmark } from "lucide-react";
import Link from "next/link";

// Blog data
const blogPosts = [
  {
    id: 1,
    title: "The Science of Muscle Growth: Understanding Hypertrophy",
    author: "Dr. Sarah Chen",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "Fitness Science",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070",
    excerpt: "Dive deep into the mechanisms of muscle growth and learn how to optimize your training for maximum hypertrophy. This comprehensive guide covers everything from protein synthesis to recovery protocols.",
    likes: 245,
    tags: ["Muscle Growth", "Training", "Science"]
  },
  {
    id: 2,
    title: "Plant-Based Nutrition for Athletes: A Complete Guide",
    author: "Michael Rodriguez",
    date: "2024-03-14",
    readTime: "10 min read",
    category: "Nutrition",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080",
    excerpt: "Discover how to maintain peak athletic performance on a plant-based diet. Learn about essential nutrients, meal planning, and supplement strategies for optimal results.",
    likes: 189,
    tags: ["Nutrition", "Plant-Based", "Athletes"]
  },
  {
    id: 3,
    title: "The Psychology of Habit Formation in Fitness",
    author: "Dr. Emily Watson",
    date: "2024-03-13",
    readTime: "6 min read",
    category: "Mental Health",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070",
    excerpt: "Learn the science behind habit formation and how to create lasting fitness routines. This article explores the psychological principles that can help you stick to your fitness goals.",
    likes: 156,
    tags: ["Psychology", "Habits", "Motivation"]
  },
  {
    id: 4,
    title: "Recovery Techniques: Beyond the Basics",
    author: "James Wilson",
    date: "2024-03-12",
    readTime: "7 min read",
    category: "Recovery",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070",
    excerpt: "Explore advanced recovery techniques used by professional athletes. From cryotherapy to compression therapy, learn how to optimize your recovery for better performance.",
    likes: 203,
    tags: ["Recovery", "Performance", "Techniques"]
  }
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [bookmarkedPosts, setBookmarkedPosts] = useState<number[]>([]);

  const categories = ["All", "Fitness Science", "Nutrition", "Mental Health", "Recovery"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleLike = (e: React.MouseEvent, postId: number) => {
    e.preventDefault();
    e.stopPropagation();
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const handleBookmark = (e: React.MouseEvent, postId: number) => {
    e.preventDefault();
    e.stopPropagation();
    setBookmarkedPosts(prev =>
      prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">PULSEIQ Blog</h1>
          <p className="text-muted-foreground text-lg">
            Expert insights on fitness, nutrition, and wellness
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map(post => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 right-4">{post.category}</Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map(tag => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => handleLike(e, post.id)}
                        className={`flex items-center gap-1 ${
                          likedPosts.includes(post.id) ? "text-red-500" : ""
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${
                          likedPosts.includes(post.id) ? "fill-current" : ""
                        }`} />
                        <span>{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center gap-1"
                      >
                        <Share2 className="w-4 h-4" />
                        <span>Share</span>
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => handleBookmark(e, post.id)}
                      className={`flex items-center gap-1 ${
                        bookmarkedPosts.includes(post.id) ? "text-primary" : ""
                      }`}
                    >
                      <Bookmark className={`w-4 h-4 ${
                        bookmarkedPosts.includes(post.id) ? "fill-current" : ""
                      }`} />
                      <span>Save</span>
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 