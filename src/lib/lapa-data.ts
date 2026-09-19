import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";

export const WHATSAPP_NUMBER = "971500000000"; // TODO: replace with LAPA's real WhatsApp number

export type Project = {
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Interiors" | "Turnkey";
  location: string;
  year: string;
  area: string;
  scope: string;
  image: string;
  description: string;
};

export const projects: Project[] = [
  {
    id: "veli-house",
    title: "Veli Courtyard House",
    category: "Residential",
    location: "Thiruvananthapuram, Kerala",
    year: "2025",
    area: "4,200 sq.ft",
    scope: "Architecture + Build",
    image: p1,
    description:
      "A laterite-walled courtyard home that folds around an existing mango tree. The plan follows the natural slope of the plot, so no contour was cut — only read.",
  },
  {
    id: "marina-offices",
    title: "Marina Edge Offices",
    category: "Commercial",
    location: "Dubai Marina, UAE",
    year: "2025",
    area: "38,000 sq.ft",
    scope: "Design + Project Management",
    image: p2,
    description:
      "A six-floor workplace with a fritted glass skin tuned to the western sun. Structural steel bays give tenants column-free plates from core to facade.",
  },
  {
    id: "linen-residence",
    title: "Linen Residence Interiors",
    category: "Interiors",
    location: "Kochi, Kerala",
    year: "2024",
    area: "3,100 sq.ft",
    scope: "Interior Design + Execution",
    image: p3,
    description:
      "Travertine, brushed brass and Kerala teak in a restrained palette. Every joinery line was set out on site with our own carpentry team.",
  },
  {
    id: "aster-tower",
    title: "Aster Residences",
    category: "Turnkey",
    location: "Kozhikode, Kerala",
    year: "In progress",
    area: "112,000 sq.ft",
    scope: "Turnkey Construction",
    image: p4,
    description:
      "A 14-floor residential tower delivered turnkey — piling to handover. Post-tension slabs cut structural depth and gave every apartment a 3.1m ceiling.",
  },
  {
    id: "backwater-retreat",
    title: "Backwater Retreat",
    category: "Residential",
    location: "Alappuzha, Kerala",
    year: "2024",
    area: "6,800 sq.ft",
    scope: "Architecture + Landscape",
    image: p5,
    description:
      "Nine cantilevered pavilions on screw piles over the backwaters. The land was never levelled; the buildings hover above it and let the water move through.",
  },
  {
    id: "atelier-store",
    title: "Atelier Flagship Store",
    category: "Commercial",
    location: "Al Quoz, Dubai",
    year: "2025",
    area: "2,400 sq.ft",
    scope: "Interiors + Fit-out",
    image: p6,
    description:
      "Micro-cement walls and blackened steel frames form a gallery for product. Lighting was mocked up full-scale before a single track was fixed.",
  },
  {
    id: "hill-villa",
    title: "Contour Hill Villa",
    category: "Residential",
    location: "Wayanad, Kerala",
    year: "2023",
    area: "5,400 sq.ft",
    scope: "Architecture + Build",
    image: p1,
    description:
      "Split-level living stepped across a 9m fall. Rammed-earth retaining walls were built from soil excavated on the site itself.",
  },
  {
    id: "steel-warehouse",
    title: "Northline Logistics Hub",
    category: "Turnkey",
    location: "Jebel Ali, UAE",
    year: "2024",
    area: "84,000 sq.ft",
    scope: "Design & Build",
    image: p4,
    description:
      "A pre-engineered steel envelope with a 32m clear span, delivered in 11 months against a 14-month programme.",
  },
  {
    id: "clinic-interiors",
    title: "Kalm Clinic Interiors",
    category: "Interiors",
    location: "Thrissur, Kerala",
    year: "2025",
    area: "5,900 sq.ft",
    scope: "Interior Architecture",
    image: p3,
    description:
      "A healthcare interior built on soft daylight and acoustic calm — curved plaster reveals, warm oak, and zero visible service runs.",
  },
];

export const categories = ["All", "Residential", "Commercial", "Interiors", "Turnkey"] as const;

export const services = [
  {
    title: "Architectural Design",
    body: "Concept to construction drawings. We start with your land's contours, light and climate — never with a template.",
    tag: "01",
  },
  {
    title: "Turnkey Construction",
    body: "One contract, one accountable team. Piling, structure, MEP, finishes and handover under a single programme.",
    tag: "02",
  },
  {
    title: "Interior Design & Fit-out",
    body: "Material palettes, joinery detailing and on-site execution by our own carpentry and finishing crews.",
    tag: "03",
  },
  {
    title: "3D Visualisation & Walkthroughs",
    body: "Photoreal renders and walkthroughs so you approve the building, not a drawing you have to imagine.",
    tag: "04",
  },
  {
    title: "Project Management & MEP",
    body: "Programme control, cost tracking and coordinated mechanical, electrical and plumbing design across both regions.",
    tag: "05",
  },
  {
    title: "Renovation & Restoration",
    body: "Retrofits, extensions and the careful repair of older Kerala homes — structure strengthened, character kept.",
    tag: "06",
  },
];

export const stats = [
  { value: 142, suffix: "+", label: "Projects delivered" },
  { value: 2, suffix: "", label: "Countries: India & UAE" },
  { value: 1.4, suffix: "M sq.ft", label: "Built area completed" },
  { value: 11, suffix: "yrs", label: "Combined site experience" },
];

export const testimonials = [
  {
    quote:
      "They walked our plot for three hours before drawing anything. The house sits on the land instead of fighting it.",
    name: "Rahul Menon",
    role: "Homeowner, Kochi",
  },
  {
    quote:
      "Handover was two weeks early and the snag list was nine items on a 38,000 sq.ft office. That is unheard of here.",
    name: "Aisha Al Marzooqi",
    role: "Developer, Dubai",
  },
  {
    quote:
      "Four partners, four disciplines — you feel it. Design, structure, MEP and site never contradicted each other once.",
    name: "Deepak Nair",
    role: "Managing Director, Aster Group",
  },
  {
    quote:
      "The renders were honest. What we approved on screen is exactly what we walked into.",
    name: "Fathima Rasheed",
    role: "Clinic Founder, Thrissur",
  },
  {
    quote:
      "They rebuilt my grandfather's tharavad without erasing it. Rare restraint.",
    name: "Suresh Varma",
    role: "Private client, Palakkad",
  },
];
