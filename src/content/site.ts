export type SectionId =
  | "services"
  | "education"
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
  readonly primaryAction: {
    readonly label: string;
    readonly href: `#${SectionId}`;
  };
}

export interface Service {
  readonly id: string;
  readonly title: string;
  readonly summary: string;
  readonly details: readonly string[];
}

export interface EducationTopic {
  readonly id: string;
  readonly title: string;
  readonly description: string;
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
  { label: "Education", href: "#education" },
  { label: "Initiatives", href: "#initiatives" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
] as const satisfies readonly NavigationItem[];

export const hero = {
  headline: "Practical AI for schools and growing organizations.",
  primaryAction: {
    label: "Request an AI readiness session",
    href: "#contact",
  },
} as const satisfies HeroContent;

export const services = [
  {
    id: "ai-training",
    title: "AI Training",
    summary: "Build practical capability before buying more tools.",
    details: ["Staff and leadership workshops", "Responsible use guidelines", "Role-specific workflows"],
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    summary: "Reduce repetitive work around the systems you already use.",
    details: ["Workflow assessment", "Practical automations", "Clear operating documentation"],
  },
  {
    id: "focused-software",
    title: "Focused Software",
    summary: "Build only when a real operational need justifies it.",
    details: ["Internal tools", "Focused web applications", "Local-first systems"],
  },
] as const satisfies readonly Service[];

export const education = [
  { id: "ai-fundamentals", title: "AI fundamentals", description: "Core concepts and real-world applications for educators and students." },
  { id: "responsible-use", title: "Responsible use", description: "Privacy, verification, and clear boundaries for safer adoption." },
  { id: "classroom-productivity", title: "Classroom productivity", description: "Practical workflows for preparation, research, and learning support." },
  { id: "school-operations", title: "School operations", description: "Reduce administrative friction and improve access to information." },
] as const satisfies readonly EducationTopic[];

export const initiatives = [
  { id: "fk-school-platform", name: "FK School Platform", status: "Prototype", description: "A focused platform concept for communication, learning resources, and school operations." },
  { id: "metaprime", name: "MetaPrime", status: "Early stage", description: "An internal esports venture developing operations, content, and team systems." },
  { id: "kaison", name: "Kaison", status: "Active system", description: "Kaisone's internal agentic operating system for coordinated research, design, coding, and operations." },
] as const satisfies readonly Initiative[];

export const processSteps = [
  { id: "assess", title: "Assess", description: "Understand the goals, constraints, people, and current workflow." },
  { id: "prioritize", title: "Prioritize", description: "Choose the smallest high-impact opportunity worth acting on." },
  { id: "build", title: "Build", description: "Deliver the training, automation, or software the situation needs." },
  { id: "transfer", title: "Transfer", description: "Document the system and leave the team able to use it well." },
] as const satisfies readonly ProcessStep[];
