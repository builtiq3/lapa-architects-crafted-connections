import { Quote } from "lucide-react";
import { testimonials } from "@/lib/lapa-data";
import { Reveal, SectionLabel } from "./primitives";

export function Testimonials() {
  const row = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="overflow-hidden border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>Client voices</SectionLabel>
          <h2 className="mt-5 max-w-2xl text-4xl leading-[0.95] font-extrabold sm:text-6xl">
            Trusted across <span className="text-brand">two coastlines.</span>
          </h2>
        </Reveal>
      </div>

      <div className="marquee-mask mt-12 flex select-none">
        <div className="marquee-slow flex w-max gap-5 pr-5 hover:[animation-play-state:paused]">
          {row.concat(row).map((t, i) => (
            <figure
              key={i}
              className="flex w-[78vw] shrink-0 flex-col justify-between border border-border bg-card p-7 sm:w-[26rem]"
            >
              <Quote size={26} className="text-brand" />
              <blockquote className="mt-5 text-lg leading-snug font-medium">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-7 border-t border-border pt-5">
                <span className="block font-display text-sm font-bold tracking-wide">{t.name}</span>
                <span className="mt-1 block font-mono text-[0.58rem] tracking-[0.2em] text-muted-foreground uppercase">
                  {t.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
