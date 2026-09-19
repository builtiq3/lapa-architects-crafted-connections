import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Compass,
  HardHat,
  Sofa,
  Box,
  ClipboardCheck,
  Hammer,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import logo from "@/assets/lapa-logo.jpeg.asset.json";
import { services, stats } from "@/lib/lapa-data";
import { Ticker, Header, WhatsAppFloat } from "@/components/lapa/SiteChrome";
import { Portfolio } from "@/components/lapa/Portfolio";
import { BeforeAfter } from "@/components/lapa/BeforeAfter";
import { Testimonials } from "@/components/lapa/Testimonials";
import { Contact } from "@/components/lapa/Contact";
import { Reveal, SectionLabel, TiltCard, Counter } from "@/components/lapa/primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LAPA Architects — Architecture & Turnkey Builders, Kerala & UAE" },
      {
        name: "description",
        content:
          "LAPA Architects designs and builds premium homes, workplaces and interiors across Kerala and the UAE. Architecture that begins with the land.",
      },
      { property: "og:title", content: "LAPA Architects — Kerala & UAE" },
      {
        property: "og:description",
        content:
          "Shaping spaces, elevating lives. Architecture, turnkey construction and interiors across Kerala and the UAE.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const serviceIcons = [Compass, HardHat, Sofa, Box, ClipboardCheck, Hammer];

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[92vh] overflow-hidden">
      <motion.img
        src={heroImg}
        alt="Concrete and teak villa at dusk designed by LAPA Architects in Kerala"
        width={1920}
        height={1280}
        style={{ y, scale }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,196,0,0.14),transparent_55%)]" />

      <motion.div
        style={{ opacity: fade }}
        className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-6 pt-24 pb-16 sm:px-8 sm:pb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionLabel>Kerala · Dubai · Est. 2015</SectionLabel>
        </motion.div>

       <h1 className="mt-6 w-full max-w-full text-[clamp(2.15rem,7.8vw,3.1rem)] leading-[0.9] font-extrabold tracking-[-0.03em] sm:text-[5rem] lg:text-[6.5rem] break-normal [word-break:keep-all] [overflow-wrap:normal] hyphens-none">
          {["Architecture", "begins with", "the land."].map((line, i) => (
            <motion.span
              key={line}
              className="block"
              initial={{ opacity: 0, y: "70%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              {i === 2? <span className="text-brand">{line}</span> : line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-lg"
        >
          LAPA is a design-and-build studio shaping premium homes, workplaces and interiors across
          Kerala and the UAE. We read the contours before we draw a single line.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#contact"
            className="group flex items-center justify-center gap-2 bg-brand px-7 py-5 font-mono text-[0.68rem] font-bold tracking-[0.22em] text-brand-foreground uppercase transition-transform hover:-translate-y-1"
          >
            Start a project
            <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
          </a>
          <a
            href="#projects"
            className="flex items-center justify-center gap-2 border border-border px-7 py-5 font-mono text-[0.68rem] font-bold tracking-[0.22em] uppercase backdrop-blur transition-colors hover:border-brand hover:text-brand"
          >
            View projects
          </a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="mt-14 flex items-center gap-3 font-mono text-[0.55rem] tracking-[0.3em] text-muted-foreground uppercase"
        >
          <ArrowDown size={14} className="text-brand" /> Scroll
        </motion.div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <Reveal>
            <SectionLabel>The studio</SectionLabel>
            <h2 className="mt-5 text-4xl leading-[0.95] font-extrabold sm:text-6xl">
              Four friends. <span className="text-brand">Four layers.</span> One line of work.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                Land is the foundation of architecture. Its contours, its characteristics and its
                natural elements inform every decision we make — from the orientation of a structure
                to the materials we choose. By understanding the land, we design buildings that
                harmonise with their environment, maximise function and celebrate the beauty of each
                site.
              </p>
              <p>
                That belief is drawn into our mark: a land pattern of contour lines. The four layers
                stand for the four friends who founded LAPA — architecture, structure, interiors and
                site execution. Just as each line closes into a balanced whole, so do four distinct
                talents.
              </p>
              <p className="text-foreground">
                Architecture, for us, is both canvas and collaborator — and the land is where it all
                begins.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
              {["Architecture", "Structure", "Interiors", "Execution"].map((layer, i) => (
                <div key={layer} className="bg-card p-5">
                  <span className="font-mono text-[0.55rem] tracking-[0.25em] text-brand">
                    Layer 0{i + 1}
                  </span>
                  <span className="mt-2 block text-sm font-bold">{layer}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:pt-10">
          <TiltCard className="relative mx-auto max-w-sm">
            <div className="absolute -inset-6 bg-[radial-gradient(circle,rgba(255,196,0,0.18),transparent_65%)] blur-2xl" />
            <div className="relative border border-border bg-card p-8">
              <img
                src="/favicon.jpeg"
                alt="LAPA Architects land-pattern logo"
                loading="lazy"
                width={520}
                height={520}
                className="mx-auto w-full max-w-[16rem] rounded-full"
              />
              <p className="mt-8 text-center font-display text-lg font-bold tracking-[0.2em] uppercase">
                Shaping spaces
              </p>
              <p className="text-center font-display text-lg font-bold tracking-[0.2em] text-brand uppercase">
                Elevating lives
              </p>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="border-t border-border bg-card/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>What we do</SectionLabel>
          <h2 className="mt-5 max-w-3xl text-4xl leading-[0.95] font-extrabold sm:text-6xl">
            Six disciplines, <span className="text-brand">one accountable team.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = serviceIcons[i % serviceIcons.length]!;
            return (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="group relative h-full overflow-hidden bg-card p-8 transition-colors hover:bg-background">
                  <div className="absolute inset-x-0 bottom-0 h-px bg-brand opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="flex items-start justify-between">
                    <Icon
                      size={30}
                      strokeWidth={1.5}
                      className="text-brand transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110"
                    />
                    <span className="font-mono text-[0.6rem] tracking-[0.25em] text-muted-foreground">
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="mt-8 text-2xl leading-tight font-bold">{s.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="relative border-t border-border py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,196,0,0.1),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 sm:px-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div>
              <span className="block font-display text-4xl font-extrabold text-brand sm:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <span className="mt-3 block font-mono text-[0.58rem] tracking-[0.22em] text-muted-foreground uppercase">
                {s.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card/60">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/favicon.jpeg"
                alt="LAPA Architects logo"
                loading="lazy"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover"
              />
              <span>
                <span className="block font-display text-lg font-extrabold tracking-[0.22em] uppercase">
                  LAPA
                </span>
                <span className="block font-mono text-[0.55rem] tracking-[0.25em] text-brand uppercase">
                  Shaping spaces, elevating lives
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A design-and-build studio working across Kerala and the UAE. Architecture, turnkey
              construction, interiors and project management under one roof.
            </p>
            <div className="mt-6 flex gap-3">
  {[
    { Icon: Instagram, label: "Instagram", href: "https://instagram.com/lapa_architects" },
    { Icon: Linkedin, label: "LinkedIn", href: "#top" },
    { Icon: Facebook, label: "Facebook", href: "#top" },
  ].map(({ Icon, label, href }) => (
    <a
      key={label}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={`LAPA on ${label}`}
      className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand"
    >
      <Icon size={16} />
    </a>
  ))}
</div>
          </div>

          <FooterCol
            title="Navigate"
            items={[
              ["About", "#about"],
              ["Services", "#services"],
              ["Projects", "#projects"],
              ["Testimonials", "#testimonials"],
              ["Contact", "#contact"],
            ]}
          />
          <FooterCol
            title="Services"
            items={services.map((s) => [s.title, "#services"] as [string, string])}
          />

          <div>
            <h4 className="font-mono text-[0.58rem] tracking-[0.25em] text-brand uppercase">
              Studios
            </h4>
            <div className="mt-5 space-y-5 text-sm text-muted-foreground">
              <p>
                <span className="block font-semibold text-foreground">Kerala</span>
                Thayalangadi, Fort Road,
                <br />
                Kasaragod, Kerala 671321, India
                <br />
                +91 90000 00000
              </p>
              <p>
                <span className="block font-semibold text-foreground">UAE</span>
                 Business Bay,
                <br />
                Dubai, United Arab Emirates
                <br />
              </p>
              <p>aplusrtarchitecture@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-7 font-mono text-[0.55rem] tracking-[0.2em] text-muted-foreground uppercase sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} LAPA Architects. All rights reserved.</span>
           <span>Website Designed by <a href="https://www.instagram.com/build_.iq/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-white">BuildIQ</a></span>
          <span>Kerala · Dubai — Licensed design & build contractors</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <h4 className="font-mono text-[0.58rem] tracking-[0.25em] text-brand uppercase">{title}</h4>
      <ul className="mt-5 space-y-3">
        {items.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="text-sm text-muted-foreground transition-colors hover:text-brand"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Ticker />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <BeforeAfter />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
