import { useState } from "react";
import { Github, Linkedin, Mail, Copy, Check } from "lucide-react";
import FadeInWhenVisibile from "./FadeInWhenVisibile";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("sundesh.batheja.75@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-20">
      <div className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.15em] text-muted-foreground">
        <span className="h-px w-8 bg-border" />
        Contact
      </div>
      <h2 className="mt-3 text-2xl font-black tracking-tight">Get in touch</h2>

      <FadeInWhenVisibile>
        <div className="mt-8 glass-card p-6">
          <div className="grid gap-6 sm:grid-cols-3">
            <a
              href="mailto:sundesh.batheja.75@gmail.com"
              className="flex items-center gap-3 group"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-muted-foreground">
                  Email
                </div>
                <div className="text-sm font-bold group-hover:text-primary transition-colors">
                  sundesh.batheja.75@gmail.com
                </div>
              </div>
            </a>
            <a
              href="https://github.com/SundeshBatheja"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-3 group"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/5 text-foreground">
                <Github className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-muted-foreground">
                  GitHub
                </div>
                <div className="text-sm font-bold group-hover:text-primary transition-colors">
                  SundeshBatheja
                </div>
              </div>
            </a>
            <a
              href="https://linkedin.com/in/sundeshbatheja"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-3 group"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Linkedin className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-muted-foreground">
                  LinkedIn
                </div>
                <div className="text-sm font-bold group-hover:text-primary transition-colors">
                  sundeshbatheja
                </div>
              </div>
            </a>
          </div>
          <button
            onClick={copyEmail}
            className="mt-5 inline-flex items-center gap-2 rounded-xl border border-border bg-secondary px-4 py-2 text-xs font-extrabold transition-all hover:bg-secondary/80"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
            {copied ? "Copied!" : "Copy email"}
          </button>
        </div>
      </FadeInWhenVisibile>
    </section>
  );
};

export default Contact;
