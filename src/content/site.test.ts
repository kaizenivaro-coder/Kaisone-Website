import { describe, expect, it } from "vitest";

import {
  education,
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
  it("contains the approved navigation, message, and records", () => {
    expect(navigation.map(({ label }) => label)).toEqual([
      "Services",
      "Education",
      "Initiatives",
      "Process",
      "About",
    ]);
    expect(hero).toMatchObject({
      headline: "Practical AI for schools and growing organizations.",
      primaryAction: {
        label: "Request an AI readiness session",
      },
    });
    expect(services.map(({ title }) => title)).toEqual([
      "AI Training",
      "Workflow Automation",
      "Focused Software",
    ]);
    expect(education.map(({ title }) => title)).toEqual([
      "AI fundamentals",
      "Responsible use",
      "Classroom productivity",
      "School operations",
    ]);
    expect(initiatives.map(({ name, status }) => `${name} (${status})`)).toEqual([
      "FK School Platform (Prototype)",
      "MetaPrime (Early stage)",
      "Kaison (Active system)",
    ]);
    expect(processSteps.map(({ title }) => title)).toEqual([
      "Assess",
      "Prioritize",
      "Build",
      "Transfer",
    ]);
  });

  it("keeps every required record and string non-empty", () => {
    const requiredCollections = {
      navigation,
      services,
      education,
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

  it("rejects unapproved proof claims", () => {
    const content = collectStrings({
      hero,
      navigation,
      services,
      education,
      initiatives,
      processSteps,
    }).join(" ");
    const unapprovedClaims = [
      /\btrusted by\b/i,
      /\bnumber one\b/i,
      /\bguaranteed\b/i,
      /\bgovernment approved\b/i,
      /\bproven outcomes\b/i,
      /\b\d+(?:[.,]\d+)?\s*%/i,
      /\b\d+(?:[.,]\d+)?\s*(?:x\b|times\b|\+?\s+(?:clients?|schools?|organizations?|students?|users?|projects?|hours?|outcomes?|results?))/i,
    ];

    for (const claim of unapprovedClaims) {
      expect(content).not.toMatch(claim);
    }
  });
});
