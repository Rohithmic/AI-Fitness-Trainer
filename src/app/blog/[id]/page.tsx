"use client";

import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, User, Heart, Share2, Bookmark, ArrowLeft } from "lucide-react";
import Link from "next/link";

// Blog data (same as in the main blog page)
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
    content: `
      <h2>Understanding Muscle Hypertrophy</h2>
      <p>Muscle hypertrophy is the process of increasing muscle size through exercise. This complex biological process involves several key mechanisms that work together to build stronger, larger muscles.</p>

      <h3>Types of Hypertrophy</h3>
      <p>There are two main types of muscle hypertrophy:</p>
      <ul>
        <li><strong>Sarcoplasmic Hypertrophy:</strong> Increase in muscle glycogen storage and fluid volume</li>
        <li><strong>Myofibrillar Hypertrophy:</strong> Increase in muscle fiber size and contractile proteins</li>
      </ul>

      <h3>Key Factors in Muscle Growth</h3>
      <p>Several factors influence muscle hypertrophy:</p>
      <ul>
        <li>Mechanical tension</li>
        <li>Muscle damage</li>
        <li>Metabolic stress</li>
        <li>Hormonal response</li>
        <li>Nutrition and recovery</li>
      </ul>

      <h3>Training Recommendations</h3>
      <p>To maximize muscle growth, consider these training principles:</p>
      <ul>
        <li>Progressive overload</li>
        <li>Volume and intensity management</li>
        <li>Exercise selection and variation</li>
        <li>Rest and recovery periods</li>
      </ul>

      <h3>Nutrition for Hypertrophy</h3>
      <p>Proper nutrition is crucial for muscle growth:</p>
      <ul>
        <li>Adequate protein intake (1.6-2.2g per kg of body weight)</li>
        <li>Sufficient caloric surplus</li>
        <li>Timing of nutrient intake</li>
        <li>Hydration</li>
      </ul>
    `,
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
    content: `
      <h2>Plant-Based Nutrition for Athletes</h2>
      <p>Athletes following a plant-based diet can achieve optimal performance through careful planning and understanding of nutritional needs.</p>

      <h3>Essential Nutrients</h3>
      <p>Key nutrients to focus on in a plant-based diet:</p>
      <ul>
        <li>Protein from multiple plant sources</li>
        <li>Iron and B12</li>
        <li>Omega-3 fatty acids</li>
        <li>Calcium and Vitamin D</li>
      </ul>

      <h3>Meal Planning Strategies</h3>
      <p>Effective meal planning for plant-based athletes:</p>
      <ul>
        <li>Pre-workout nutrition</li>
        <li>Post-workout recovery meals</li>
        <li>Daily meal structure</li>
        <li>Snack options</li>
      </ul>

      <h3>Supplementation</h3>
      <p>Recommended supplements for plant-based athletes:</p>
      <ul>
        <li>Protein powders</li>
        <li>B12 supplements</li>
        <li>Creatine</li>
        <li>Omega-3 supplements</li>
      </ul>
    `,
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
    content: `
      <h2>The Psychology of Habit Formation</h2>
      <p>Understanding the psychology behind habit formation can help you create lasting fitness routines.</p>

      <h3>The Habit Loop</h3>
      <p>Key components of habit formation:</p>
      <ul>
        <li>Cue</li>
        <li>Craving</li>
        <li>Response</li>
        <li>Reward</li>
      </ul>

      <h3>Building Fitness Habits</h3>
      <p>Strategies for developing lasting fitness habits:</p>
      <ul>
        <li>Start small</li>
        <li>Create clear cues</li>
        <li>Make it enjoyable</li>
        <li>Track progress</li>
      </ul>

      <h3>Overcoming Obstacles</h3>
      <p>Common challenges and solutions:</p>
      <ul>
        <li>Time management</li>
        <li>Motivation maintenance</li>
        <li>Dealing with setbacks</li>
        <li>Social support</li>
      </ul>
    `,
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
    content: `
      <h2>Advanced Recovery Techniques</h2>
      <p>Professional athletes use various advanced recovery techniques to optimize performance and prevent injury.</p>

      <h3>Modern Recovery Methods</h3>
      <p>Advanced recovery techniques include:</p>
      <ul>
        <li>Cryotherapy</li>
        <li>Compression therapy</li>
        <li>Infrared sauna</li>
        <li>Floatation therapy</li>
      </ul>

      <h3>Recovery Protocols</h3>
      <p>Effective recovery protocols for different scenarios:</p>
      <ul>
        <li>Post-competition recovery</li>
        <li>Injury prevention</li>
        <li>Overtraining prevention</li>
        <li>Long-term recovery planning</li>
      </ul>

      <h3>Recovery Tools</h3>
      <p>Essential recovery tools and equipment:</p>
      <ul>
        <li>Foam rollers</li>
        <li>Massage guns</li>
        <li>Compression garments</li>
        <li>Recovery boots</li>
      </ul>
    `,
    likes: 203,
    tags: ["Recovery", "Performance", "Techniques"]
  }
];

export default function BlogPost() {
  const params = useParams();
  const postId = Number(params.id);
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        <article className="space-y-8">
          <div className="space-y-4">
            <Badge>{post.category}</Badge>
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <span>•</span>
              <span>{post.date}</span>
            </div>
          </div>

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />

          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <div className="flex items-center justify-between pt-8 border-t">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Heart className="w-5 h-5" />
              </Button>
              <span className="text-muted-foreground">{post.likes} likes</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Share2 className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bookmark className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
} 