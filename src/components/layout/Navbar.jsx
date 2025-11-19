import { useState } from "react";
import Button from "../ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Product", href: "#product" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-2xl bg-gradient-to-tr from-hero-start via-brand to-accent-blue flex items-center justify-center text-xs font-bold text-text-headline">
            DF
          </div>
          <span className="font-semibold tracking-tight text-sm md:text-base">
            DevFlow
          </span>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-text-sub hover:text-text-headline transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          <a
            href="/login"
            className="text-text-sub hover:text-text-headline transition-colors"
          >
            Log in
          </a>
          <Button size="sm" className="shadow-soft">
            Get started
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg border border-white/20 text-text-headline"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </div>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/95">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3 text-sm">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-text-headline/90"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <hr className="border-white/10 my-2" />

            <a
              href="/login"
              className="text-text-sub hover:text-text-headline"
              onClick={() => setOpen(false)}
            >
              Log in
            </a>

            <Button
              size="md"
              className="mt-1 w-full"
              onClick={() => setOpen(false)}
            >
              Get started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
