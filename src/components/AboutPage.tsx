import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CodeIcon, CpuIcon, HeartIcon, UsersIcon } from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen text-foreground">
      {/* Hero Section */}
      <section className="relative z-10 py-32">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              About <span className="text-primary">PULSEIQ</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are revolutionizing fitness through the power of artificial intelligence,
              making personalized workout and nutrition plans accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">
                Our <span className="text-primary">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At PULSEIQ, we believe that everyone deserves access to personalized fitness guidance.
                Our mission is to democratize fitness coaching by leveraging cutting-edge AI technology
                to create customized workout and nutrition plans that adapt to your unique needs and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors group"
                >
                  <Link href="/generate-program" className="flex items-center">
                    Get Started
                    <ArrowRightIcon className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform rotate-3"></div>
              <div className="relative h-full w-full rounded-2xl overflow-hidden border border-border">
                <img
                  src="/hero-ai3.png"
                  alt="Our Mission"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Why Choose <span className="text-primary">PULSEIQ</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform combines cutting-edge technology with fitness expertise to deliver
              an unmatched experience in personal fitness planning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <CpuIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
              <p className="text-muted-foreground">
                Advanced algorithms that learn and adapt to your progress and preferences.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <UsersIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
              <p className="text-muted-foreground">
                Join a thriving community of fitness enthusiasts and share your journey.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <CodeIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Open Source</h3>
              <p className="text-muted-foreground">
                Built on open-source principles, ensuring transparency and continuous improvement.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <HeartIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">User-Focused</h3>
              <p className="text-muted-foreground">
                Designed with your needs in mind, making fitness accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A diverse group of fitness experts, AI specialists, and passionate developers
              working together to revolutionize personal fitness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="group">
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                <img
                  src="/ai-avatar.png"
                  alt="Team Member"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-muted-foreground">Fitness Expert & AI Trainer</p>
            </div>

            {/* Team Member 2 */}
            <div className="group">
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                <img
                  src="/ai-avatar.png"
                  alt="Team Member"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              <h3 className="text-xl font-semibold">Michael Chen</h3>
              <p className="text-muted-foreground">AI Research Lead</p>
            </div>

            {/* Team Member 3 */}
            <div className="group">
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                <img
                  src="/ai-avatar.png"
                  alt="Team Member"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              <h3 className="text-xl font-semibold">Emma Rodriguez</h3>
              <p className="text-muted-foreground">Head of Product</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 