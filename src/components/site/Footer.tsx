import { Flame } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/50 mt-32">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
              <Flame className="h-4 w-4 text-white" />
            </span>
            <span className="font-display font-semibold">RoastMyCV <span className="text-gradient">AI</span></span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            AI-powered CV roasts that actually land you interviews.
          </p>
        </div>
        <div className="text-sm">
          <div className="font-medium mb-3">Product</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="/#features" className="hover:text-foreground">Features</a></li>
            <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
            <li><Link to="/dashboard" className="hover:text-foreground">Dashboard</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-medium mb-3">Company</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/login" className="hover:text-foreground">Log in</Link></li>
            <li><Link to="/signup" className="hover:text-foreground">Sign up</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} RoastMyCV AI. All rights reserved.
      </div>
    </footer>
  );
}
