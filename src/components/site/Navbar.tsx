import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-4">
        <nav className="glass-strong rounded-2xl px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-neon-purple to-neon-pink shadow-[0_0_20px_oklch(0.7_0.28_300/0.6)] group-hover:scale-110 transition-transform">
              <Flame className="h-4 w-4 text-white" />
            </span>
            <span className="font-display font-semibold tracking-tight">
              RoastMySite <span className="text-gradient">AI</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="/#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="/#how" className="hover:text-foreground transition-colors">How it works</a>
            <a href="/#demo" className="hover:text-foreground transition-colors">Demo</a>
            <Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/login" className="text-sm text-muted-foreground hover:text-foreground hidden sm:inline">
              Log in
            </Link>
            <Link to="/signup">
              <Button variant="hero" size="sm">Get started</Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
