import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X, MapPin, Ruler, CalendarDays, Layers } from "lucide-react";
import { projects, categories, type Project, WHATSAPP_NUMBER } from "@/lib/lapa-data";
import { Reveal, SectionLabel } from "./primitives";

export function Portfolio() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<Project | null>(null);
  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="border-t border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>Selected work</SectionLabel>
          <h2 className="mt-5 max-w-3xl text-4xl leading-[0.95] font-extrabold sm:text-6xl">
            Nine sites. <span className="text-brand">Nine different lands.</span>
          </h2>
        </Reveal>

        <div className="mt-8 -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`shrink-0 border px-4 py-2.5 font-mono text-[0.62rem] tracking-[0.2em] uppercase transition-all ${
                filter === c
                  ? "border-brand bg-brand text-brand-foreground"
                  : "border-border text-muted-foreground hover:border-brand/60 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {shown.map((p, i) => (
              <motion.button
                key={p.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActive(p)}
                className="group mb-5 block w-full break-inside-avoid overflow-hidden border border-border bg-card text-left"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-80" />
                  <span className="absolute top-4 left-4 bg-brand px-2.5 py-1 font-mono text-[0.55rem] font-bold tracking-[0.2em] text-brand-foreground uppercase">
                    {p.category}
                  </span>
                  <span className="absolute right-4 bottom-4 flex h-10 w-10 items-center justify-center bg-background/70 text-brand backdrop-blur transition-all group-hover:bg-brand group-hover:text-brand-foreground">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl leading-tight font-bold">{p.title}</h3>
                  <p className="mt-2 font-mono text-[0.62rem] tracking-[0.18em] text-muted-foreground uppercase">
                    {p.location} — {p.year}
                  </p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-end justify-center bg-background/80 backdrop-blur-md sm:items-center sm:p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ y: 60, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[92vh] w-full max-w-4xl overflow-y-auto border border-border bg-card"
            >
              <div className="relative">
                <img
                  src={active.image}
                  alt={active.title}
                  loading="lazy"
                  className="h-64 w-full object-cover sm:h-80"
                />
                <button
                  onClick={() => setActive(null)}
                  aria-label="Close project"
                  className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center bg-background/80 text-foreground backdrop-blur hover:text-brand"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="p-6 sm:p-10">
                <span className="font-mono text-[0.6rem] tracking-[0.3em] text-brand uppercase">
                  {active.category}
                </span>
                <h3 className="mt-3 text-3xl font-extrabold sm:text-4xl">{active.title}</h3>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {active.description}
                </p>
                <dl className="mt-8 grid grid-cols-2 gap-5 border-t border-border pt-8 sm:grid-cols-4">
                  {[
                    { icon: MapPin, k: "Location", v: active.location },
                    { icon: Ruler, k: "Area", v: active.area },
                    { icon: CalendarDays, k: "Year", v: active.year },
                    { icon: Layers, k: "Scope", v: active.scope },
                  ].map((row) => (
                    <div key={row.k}>
                      <dt className="flex items-center gap-2 font-mono text-[0.55rem] tracking-[0.2em] text-muted-foreground uppercase">
                        <row.icon size={13} className="text-brand" />
                        {row.k}
                      </dt>
                      <dd className="mt-2 text-sm font-semibold">{row.v}</dd>
                    </div>
                  ))}
                </dl>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    `Hi LAPA, I'd like to discuss a project similar to ${active.title}.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 bg-brand px-6 py-4 font-mono text-[0.65rem] font-bold tracking-[0.2em] text-brand-foreground uppercase"
                >
                  Enquire about this project <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
