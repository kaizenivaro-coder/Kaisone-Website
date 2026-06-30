export type SectionId =
  | "services"
  | "initiatives"
  | "process"
  | "about"
  | "contact";

export interface NavigationItem {
  readonly label: string;
  readonly href: `#${SectionId}`;
}

export interface HeroContent {
  readonly headline: string;
  readonly subheading: string;
  readonly primaryAction: {
    readonly label: string;
    readonly href: `#${SectionId}`;
  };
}

export interface Service {
  readonly id: string;
  readonly title: string;
  readonly price: string;
  readonly summary: string;
  readonly details: readonly string[];
}

export type InitiativeStatus = "Prototype" | "Early stage" | "Active system";

export interface Initiative {
  readonly id: string;
  readonly name: string;
  readonly status: InitiativeStatus;
  readonly description: string;
}

export interface ProcessStep {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

export const navigation = [
  { label: "Services", href: "#services" },
  { label: "Selected work", href: "#initiatives" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
] as const satisfies readonly NavigationItem[];

export const hero = {
  headline: "Custom software built around how your business actually works.",
  subheading:
    "Kaisone builds practical internal tools, automation systems, AI-powered workflows, and prototypes that replace inefficient manual processes.",
  primaryAction: {
    label: "Discuss your project",
    href: "#contact",
  },
} as const satisfies HeroContent;

export const services = [
  {
    id: "workflow-fix",
    title: "Workflow Fix",
    price: "TZS 900K",
    summary: "Improve one inefficient process with a focused automation.",
    details: ["Process mapping", "One focused automation", "Handover notes"],
  },
  {
    id: "prototype-sprint",
    title: "Prototype Sprint",
    price: "TZS 1.2M",
    summary: "Turn a defined idea into a working prototype for review.",
    details: ["Scope and user flow", "Working prototype", "Review and next-step brief"],
  },
  {
    id: "operations-system",
    title: "Operations System",
    price: "TZS 3M",
    summary: "Build an internal system around a core operational workflow.",
    details: ["Workflow design", "Internal tool or automation", "Team handover"],
  },
  {
    id: "system-care",
    title: "System Care",
    price: "TZS 350K/month",
    summary: "Maintain and improve a system already built by Kaisone.",
    details: ["Routine maintenance", "Small improvements", "Priority support"],
  },
] as const satisfies readonly Service[];

export const initiatives = [
  { id: "fk-school-platform", name: "FK School Platform", status: "Prototype", description: "A focused platform concept for communication, learning resources, and school operations." },
  { id: "metaprime", name: "MetaPrime", status: "Early stage", description: "An internal esports venture developing operations, content, and team systems." },
  { id: "kaison", name: "Kaison", status: "Active system", description: "Kaisone's internal agentic operating system for coordinated research, design, coding, and operations." },
] as const satisfies readonly Initiative[];

export const processSteps = [
  { id: "understand", title: "Understand", description: "Map the current process, its constraints, and where work is getting stuck." },
  { id: "define", title: "Define", description: "Agree on the useful outcome and the smallest system worth building." },
  { id: "build", title: "Build", description: "Create and test the internal tool, automation, AI workflow, or prototype." },
  { id: "handover", title: "Handover", description: "Launch with clear documentation so the people doing the work can use it." },
] as const satisfies readonly ProcessStep[];
