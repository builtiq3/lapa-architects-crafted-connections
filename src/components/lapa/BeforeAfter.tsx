import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { Reveal, SectionLabel } from "@/components/lapa/primitives";

const transformations = [
  {
    title: "Old House → Modern Villa",
    place: "Calicut, Kerala",
    before:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1600&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Empty Plot → Luxury Home",
    place: "Dubai, UAE",
    before:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Interior Renovation",
    place: "Kochi, Kerala",
    before:
      "https://images.unsplash.com/photo-1504615755583-2916b52192a3?q=80&w=1600&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
  },
];

function CompareSlider({
  before,
  after,
  title,
}: {
  before: string;
  after: string;
  title: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div
      ref={ref}
      role="slider"
      aria-label={`Before and after comparison: ${title}`}
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as HTMLElement).closest("div")?.setPointerCapture?.(e.pointerId);
        ref.current?.setPointerCapture(e.pointerId);
        update(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) update(e.clientX);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
      onPointerCancel={() => {
        dragging.current = false;
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
        if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
      }}
      className="group relative h-[420px] w-full cursor-ew-resize touch-none overflow-hidden rounded-2xl border border-border select-none sm:h-[500px]"
    >
      {/* AFTER (full, color) */}
      <img
        src={after}
        alt={`${title} — after`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />

      {/* BEFORE (clipped, grayscale) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={before}
          alt={`${title} — before`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover grayscale"
          draggable={false}
        />
        <div className="absolute inset-0 bg-background/20" />
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute top-5 left-5 rounded-full bg-black/60 px-4 py-1.5 font-mono text-[0.6rem] font-bold tracking-[0.25em] text-white uppercase backdrop-blur">
        Before
      </span>
      <span className="pointer-events-none absolute top-5 right-5 rounded-full bg-brand px-4 py-1.5 font-mono text-[0.6rem] font-bold tracking-[0.25em] text-brand-foreground uppercase">
        After
      </span>

      {/* Divider + handle */}
      <div
        className="pointer-events-none absolute inset-y-0 w-[3px] -translate-x-1/2 bg-brand shadow-[0_0_18px_rgba(255,196,0,0.6)]"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brand bg-background/90 text-brand shadow-[0_0_24px_rgba(255,196,0,0.5)] backdrop-blur transition-transform group-active:scale-110">
          <MoveHorizontal size={20} />
        </span>
      </div>

      {/* Bottom gradient for legibility */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
}

export function BeforeAfter() {
  return (
    <section id="transformations" className="border-t border-border bg-card/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>Transformation stories</SectionLabel>
          <h2 className="mt-5 max-w-3xl text-4xl leading-[0.95] font-extrabold sm:text-6xl">
            See the difference <span className="text-brand">we make.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Drag the handle to compare where each site started and where LAPA took it. Real
            transformations, from bare land to finished homes.
          </p>
        </Reveal>

        <div className="mt-12 space-y-14">
          {transformations.map((t, i) => (
            <Reveal key={t.title} delay={0.05}>
              <div className="mb-4 flex items-end justify-between gap-4">
                <h3 className="text-xl font-bold sm:text-2xl">{t.title}</h3>
                <span className="font-mono text-[0.58rem] tracking-[0.25em] text-brand uppercase">
                  0{i + 1} · {t.place}
                </span>
              </div>
              <CompareSlider before={t.before} after={t.after} title={t.title} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
