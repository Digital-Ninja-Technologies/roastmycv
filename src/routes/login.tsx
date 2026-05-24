import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Navbar } from "@/components/site/Navbar";
import { Flame } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Log in — RoastMyCV AI" }] }),
  component: Login,
});

function Login() {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success("Welcome back!");
      nav({ to: "/dashboard" });
    }, 700);
  }
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen px-6 py-24">
        <Card className="glass-strong relative w-full max-w-md p-8">
          <div className="glow-ring rounded-xl" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Flame className="h-4 w-4 text-white" />
              </span>
              <span className="font-display font-semibold">Welcome back</span>
            </div>
            <h1 className="font-display text-2xl font-bold">Log in to your account</h1>
            <p className="text-sm text-muted-foreground mt-1">Continue roasting websites.</p>
            <form onSubmit={submit} className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required placeholder="you@startup.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pw">Password</Label>
                <Input id="pw" type="password" required placeholder="••••••••" />
              </div>
              <Button type="submit" variant="hero" className="w-full h-11" disabled={loading}>
                {loading ? "Signing in…" : "Log in"}
              </Button>
            </form>
            <p className="mt-6 text-sm text-center text-muted-foreground">
              No account? <Link to="/signup" className="text-foreground hover:text-primary">Sign up</Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
