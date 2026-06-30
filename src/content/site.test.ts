import { describe, expect, it } from "vitest";

import {
  hero,
  initiatives,
  navigation,
  processSteps,
  services,
} from "./site";

const collectStrings = (value: unknown): string[] => {
  if (typeof value === "string") {
    return [value];
  }

  if (Array.isArray(value)) {
    return value.flatMap(collectStrings);
  }

  if (value && typeof value === "object") {
    return Object.values(value).flatMap(collectStrings);
  }

  return [];
};

describe("site content", () => {
  it("contains the approved launch positioning", () => {
    expect(navigation.map(({ label }) => label)).toEqual([
      "Services",
      "Selected work",
      "Process",
      "About",
    ]);
    expect(hero).toMatchObject({
      headline: "Custom software built around how your business actually works.",
      subheading:
        "Kaisone builds practical internal tools, automation systems, AI-powered workflows, and prototypes that replace inefficient manual processes.",
      primaryAction: {
        label: "Discuss your project",
      },
    });
  });

  it("lists the four approved services and prices", () => {
    expect(services.map(({ title, price }) => `${title} — ${price}`)).toEqual([
      "Workflow Fix — TZS 900K",
      "Prototype Sprint — TZS 1.2M",
      "Operations System — TZS 3M",
      "System Care — TZS 350K/month",
    ]);
    for (const service of services) {
      expect(service.summary.trim()).not.toBe("");
      expect(service.details.length).toBeGreaterThan(0);
      service.details.forEach((detail) => expect(detail.trim()).not.toBe(""));
    }
  });

  it("keeps selected work honestly labeled", () => {
    expect(initiatives.map(({ name, status }) => `${name} (${status})`)).toEqual([
      "FK School Platform (Prototype)",
      "MetaPrime (Early stage)",
      "Kaison (Active system)",
    ]);
    expect(processSteps.map(({ title }) => title)).toEqual([
      "Understand",
      "Define",
      "Build",
      "Handover",
    ]);
  });

  it("keeps every required record and string non-empty", () => {
    const requiredCollections = {
      navigation,
      services,
      initiatives,
      processSteps,
    };

    for (const [name, records] of Object.entries(requiredCollections)) {
      expect(records, `${name} must not be empty`).not.toHaveLength(0);
    }

    const strings = collectStrings({ hero, ...requiredCollections });
    expect(strings.length).toBeGreaterThan(0);
    for (const value of strings) {
      expect(value.trim()).not.toBe("");
    }
  });

  it("rejects invented metrics, testimonials, and proof claims", () => {
    const content = collectStrings({
      hero,
      navigation,
      services,
      initiatives,
      processSteps,
    }).join(" ");
    const unapprovedClaims = [
      /\btrusted by\b/i,
      /\bnumber one\b/i,
      /\bguaranteed\b/i,
      /\bgovernment approved\b/i,
      /\bproven outcomes\b/i,
      /\btestimonial(?:s)?\b/i,
      /\bwhat (?:our )?clients say\b/i,
      /\b\d+(?:[.,]\d+)?\s*%/i,
      /\b\d+(?:[.,]\d+)?\s*(?:x\b|times\b|\+?\s+(?:clients?|schools?|organizations?|students?|users?|projects?|hours?|outcomes?|results?))/i,
    ];

    for (const claim of unapprovedClaims) {
      expect(content).not.toMatch(claim);
    }
  });
});
