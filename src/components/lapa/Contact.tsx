import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/lapa-data";
import { Reveal, SectionLabel } from "./primitives";

const serviceOptions = [
  "Architectural Design",
  "Turnkey Construction",
  "Interior Design & Fit-out",
  "3D Visualisation",
  "Project Management & MEP",
  "Renovation & Restoration",
];

const inputClass =
  "w-full border border-border bg-background px-4 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "Kerala, India",
    service: serviceOptions[0],
    budget: "",
    message: "",
  });

  const set = (k: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New enquiry — LAPA Architects*
Name: ${form.name}
Phone: ${form.phone}
Location: ${form.location}
Service: ${form.service}
Budget: ${form.budget || "Not specified"}
Details: ${form.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contact" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <Reveal>
            <SectionLabel>Start a project</SectionLabel>
            <h2 className="mt-5 text-4xl leading-[0.95] font-extrabold sm:text-6xl">
              Tell us about <span className="text-brand">your land.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Send us the plot, the brief and the budget. One of the four founders replies on
              WhatsApp — usually within a working day.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 space-y-5">
            {[
              { icon: Phone, k: "Call", v: "+91 90000 00000 · +971 50 000 0000" },
              { icon: Mail, k: "Email", v: "aplusrtarchitecture@gmail.com" },
              { icon: MapPin, k: "Studios", v: "Kasaragod, Kerala · Business Bay, Dubai" },
            ].map((c) => (
              <div key={c.k} className="flex items-start gap-4 border-b border-border pb-5">
                <c.icon size={18} className="mt-1 shrink-0 text-brand" />
                <div className="min-w-0">
                  <span className="block font-mono text-[0.55rem] tracking-[0.25em] text-muted-foreground uppercase">
                    {c.k}
                  </span>
                  <span className="mt-1 block text-sm font-semibold">{c.v}</span>
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form
            onSubmit={submit}
            className="border border-border bg-card p-6 sm:p-9"
            style={{ boxShadow: "0 40px 90px -50px rgba(255,196,0,0.35)" }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                className={inputClass}
                placeholder="Full name"
                value={form.name}
                onChange={(e) => set("name")(e.target.value)}
              />
              <input
                required
                className={inputClass}
                placeholder="Phone / WhatsApp"
                value={form.phone}
                onChange={(e) => set("phone")(e.target.value)}
              />
              <select
                className={inputClass}
                value={form.location}
                onChange={(e) => set("location")(e.target.value)}
              >
                <option>Kerala, India</option>
                <option>Elsewhere in India</option>
                <option>UAE</option>
                <option>Other</option>
              </select>
              <select
                className={inputClass}
                value={form.service}
                onChange={(e) => set("service")(e.target.value)}
              >
                {serviceOptions.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <input
                className={`${inputClass} sm:col-span-2`}
                placeholder="Approximate budget (optional)"
                value={form.budget}
                onChange={(e) => set("budget")(e.target.value)}
              />
              <textarea
                required
                rows={5}
                className={`${inputClass} sm:col-span-2`}
                placeholder="Plot size, location and what you want to build"
                value={form.message}
                onChange={(e) => set("message")(e.target.value)}
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 flex w-full items-center justify-center gap-2 bg-brand px-6 py-5 font-mono text-[0.68rem] font-bold tracking-[0.22em] text-brand-foreground uppercase"
            >
              Send on WhatsApp <ArrowUpRight size={16} />
            </motion.button>
            <p className="mt-4 text-center font-mono text-[0.55rem] tracking-[0.2em] text-muted-foreground uppercase">
              Opens WhatsApp with your details filled in
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
