import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Navbar } from "@/components/site/Navbar";
import { Flame } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Sign up — RoastMySite AI" }] }),
  component: Signup,
});

function Signup() {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success("Account created!");
      nav({ to: "/dashboard" });
    }, 800);
  }
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen px-6 py-24">
        <Card className="glass-strong relative w-full max-w-md p-8">
          <div className="glow-ring rounded-xl" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-neon-purple to-neon-pink">
                <Flame className="h-4 w-4 text-white" />
              </span>
              <span className="font-display font-semibold">Get started free</span>
            </div>
            <h1 className="font-display text-2xl font-bold">Create your account</h1>
            <p className="text-sm text-muted-foreground mt-1">1 free audit per day. No credit card.</p>
            <form onSubmit={submit} className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" required placeholder="Jane Founder" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required placeholder="you@startup.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pw">Password</Label>
                <Input id="pw" type="password" required placeholder="At least 8 characters" minLength={8} />
              </div>
              <Button type="submit" variant="hero" className="w-full h-11" disabled={loading}>
                {loading ? "Creating account…" : "Create account"}
              </Button>
            </form>
            <p className="mt-6 text-sm text-center text-muted-foreground">
              Already have an account? <Link to="/login" className="text-foreground">Log in</Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
