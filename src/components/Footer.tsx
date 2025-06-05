import { ZapIcon, GithubIcon, TwitterIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-sm relative">
      {/* Top border glow */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-1.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <ZapIcon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold font-mono tracking-tight">
                pulse<span className="text-primary">IQ</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} PULSEIQ - All rights reserved
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <Link href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors">
                <GithubIcon className="w-5 h-5" />
              </Link>
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </Link>
              <Link href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-3 text-sm">
            <Link
              href="/about"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Blog
            </Link>
            <Link
              href="/help"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Help
            </Link>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 px-4 py-2.5 border border-border rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs font-mono tracking-wider">SYSTEM OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;