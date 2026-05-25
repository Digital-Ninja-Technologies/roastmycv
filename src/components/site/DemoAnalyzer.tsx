import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Sparkles, Upload } from "lucide-react";
import { toast } from "sonner";
import { analyzeCV, saveReport } from "@/lib/analyze";
import { extractPdfText } from "@/lib/pdf";

export function DemoAnalyzer() {
  const [cvText, setCvText] = useState("");
  const [targetRole, setTargetRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [parsing, setParsing] = useState(false);
  const navigate = useNavigate();

  async function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10_000_000) {
      toast.error("File too large. Max 10MB.");
      return;
    }
    setParsing(true);
    try {
      let text = "";
      const isPdf = file.type === "application/pdf" || /\.pdf$/i.test(file.name);
      if (isPdf) {
        text = await extractPdfText(file);
        if (!text || text.length < 40) {
          toast.error("Couldn't read text from this PDF. It may be scanned/image-based — paste the text instead.");
          return;
        }
      } else {
        text = await file.text();
      }
      setCvText(text);
      toast.success(`Loaded ${file.name}`);
    } catch (err) {
      console.error(err);
      toast.error("Failed to read file. Try pasting the text instead.");
    } finally {
      setParsing(false);
      e.target.value = "";
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const clean = cvText.trim();
    if (clean.length < 80) {
      toast.error("Paste your full CV text (at least a few paragraphs).");
      return;
    }
    setLoading(true);
    try {
      const report = await analyzeCV(clean, targetRole.trim() || undefined);
      saveReport(report);
      toast.success("Roast ready 🔥");
      navigate({ to: "/report/$id", params: { id: report.id } });
    } catch {
      toast.error("Something went wrong. Try again.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="glass-strong rounded-2xl p-5 sm:p-6 max-w-2xl mx-auto space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          value={targetRole}
          onChange={(e) => setTargetRole(e.target.value)}
          placeholder="Target role (optional) — e.g. Senior Product Manager"
          disabled={loading}
          className="h-11"
        />
        <label className="inline-flex">
          <input type="file" accept=".pdf,.txt,.md,.text,application/pdf" className="hidden" onChange={onFile} disabled={loading || parsing} />
          <Button type="button" variant="glass" size="lg" className="h-11 px-4 w-full sm:w-auto" asChild disabled={loading || parsing}>
            <span><Upload className="h-4 w-4" /> {parsing ? "Reading PDF…" : "Upload PDF / .txt"}</span>
          </Button>
        </label>
      </div>

      <Textarea
        value={cvText}
        onChange={(e) => setCvText(e.target.value)}
        placeholder="Paste your full CV text here…&#10;&#10;Name, summary, experience bullets, skills — the whole thing."
        disabled={loading}
        className="min-h-[220px] resize-y bg-background/40 border-border/70"
      />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          Tip: for best results, paste plain text (no PDFs). Your CV stays in your browser.
        </p>
        <Button type="submit" variant="hero" size="lg" disabled={loading} className="h-12 px-6 w-full sm:w-auto">
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
          {loading ? "Roasting your CV…" : "Roast My CV"}
        </Button>
      </div>
    </form>
  );
}
