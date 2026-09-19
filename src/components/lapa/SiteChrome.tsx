import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/lapa-logo.jpeg.asset.json";
import { WHATSAPP_NUMBER } from "@/lib/lapa-data";

const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const tickerItems = [
  "Architecture begins with the land",
  "Kerala · India",
  "Dubai · UAE",
  "Turnkey construction",
  "Four layers · four founders",
  "Shaping spaces, elevating lives",
];

export function Ticker() {
  return (
    <div className="relative z-50 overflow-hidden border-b border-brand/30 bg-brand text-brand-foreground">
      <div className="marquee-mask flex">
        <div className="marquee-fast flex w-max shrink-0 items-center gap-10 py-2 pr-10">
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((t, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-10 font-mono text-[0.6rem] font-semibold tracking-[0.3em] uppercase"
            >
              {t}
              <span className="h-1 w-1 rotate-45 bg-brand-foreground/60" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-border bg-background/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:px-8 lg:py-4">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <img
              src="/favicon.jpeg"
              alt="LAPA Architects logo"
              width={44}
              height={44}
              className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-brand/40"
            />
            <span className="min-w-0">
              <span className="block truncate font-display text-base font-extrabold tracking-[0.22em] uppercase">
                LAPA
              </span>
              <span className="block truncate font-mono text-[0.55rem] tracking-[0.28em] text-muted-foreground uppercase">
                Architects & Builders
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="font-mono text-[0.68rem] tracking-[0.22em] text-muted-foreground uppercase transition-colors hover:text-brand"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              className="border border-brand bg-brand px-5 py-2.5 font-mono text-[0.68rem] font-bold tracking-[0.2em] text-brand-foreground uppercase transition-all hover:bg-transparent hover:text-brand"
            >
              Start a project
            </a>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 shrink-0 items-center justify-center border border-border text-foreground lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col px-5 py-4">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/60 py-4 font-display text-2xl font-bold tracking-tight"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-5 bg-brand px-5 py-4 text-center font-mono text-xs font-bold tracking-[0.2em] text-brand-foreground uppercase"
              >
                Start a project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function WhatsAppFloat() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hi LAPA, I'd like to discuss a project.",
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with LAPA on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 220, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed right-4 bottom-4 z-50 flex items-center gap-3 rounded-full bg-brand px-4 py-4 text-brand-foreground shadow-[0_18px_40px_-12px_rgba(255,196,0,0.6)] sm:right-6 sm:bottom-6"
    >
      <MessageCircle size={22} strokeWidth={2.4} />
      <span className="hidden font-mono text-[0.65rem] font-bold tracking-[0.2em] uppercase sm:inline">
        WhatsApp
      </span>
    </motion.a>
  );
}
