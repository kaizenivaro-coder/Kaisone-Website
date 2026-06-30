# Kaisone Launch Positioning Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition the existing Kaisone website as a broad custom-software company, add approved service offers and privacy/contact foundations, and prepare owned Cloudflare deployment and launch assets.

**Architecture:** Preserve the React + Vite + TypeScript static-site architecture. Keep approved commercial copy in the typed `src/content/site.ts` module, keep section components focused on rendering, use a pathname switch for the standalone privacy page, and retain configurable external lead delivery through `VITE_CONTACT_ENDPOINT`.

**Tech Stack:** React 19, TypeScript, Vite, Vitest, Testing Library, static Cloudflare Pages deployment.

---

### Task 1: Lock the Approved Positioning in Tests

**Files:**
- Modify: `src/content/site.test.ts`
- Modify: `src/App.test.tsx`

- [ ] **Step 1: Replace school-first content expectations with approved launch copy**

```ts
expect(hero.headline).toBe("Custom software built around how your business actually works.");
expect(hero.subheading).toBe(
  "Kaisone builds practical internal tools, automation systems, AI-powered workflows, and prototypes that replace inefficient manual processes.",
);
expect(services.map(({ title, startingPrice }) => `${title}: ${startingPrice}`)).toEqual([
  "Workflow Fix: TZS 900K",
  "Prototype Sprint: TZS 1.2M",
  "Operations System: TZS 3M",
  "System Care: TZS 350K/month",
]);
```

- [ ] **Step 2: Add an application test for the CTA and privacy page**

```ts
expect(screen.getAllByRole("link", { name: "Discuss your project" }).length).toBeGreaterThan(0);
window.history.pushState({}, "", "/privacy");
render(<App />);
expect(screen.getByRole("heading", { name: "Privacy" })).toBeInTheDocument();
```

- [ ] **Step 3: Run the focused tests and verify they fail for the old positioning**

Run: `npm test -- --run src/content/site.test.ts src/App.test.tsx`

Expected: FAIL because the current hero, services, CTA, and privacy page still use the v1 school-first implementation.

### Task 2: Replace the Typed Content Model

**Files:**
- Modify: `src/content/site.ts`
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/Services.tsx`
- Modify: `src/components/SiteHeader.tsx`
- Modify: `src/components/SiteFooter.tsx`

- [ ] **Step 1: Replace the education-oriented section and service types**

```ts
export interface Service {
  readonly id: string;
  readonly title: string;
  readonly startingPrice: string;
  readonly summary: string;
  readonly details: readonly string[];
}

export const hero = {
  headline: "Custom software built around how your business actually works.",
  subheading:
    "Kaisone builds practical internal tools, automation systems, AI-powered workflows, and prototypes that replace inefficient manual processes.",
  primaryAction: { label: "Discuss your project", href: "#contact" },
} as const;
```

- [ ] **Step 2: Define exactly four approved offers**

```ts
export const services = [
  { id: "workflow-fix", title: "Workflow Fix", startingPrice: "TZS 900K", summary: "Remove one costly point of operational friction.", details: ["Workflow assessment", "Focused automation", "Handover documentation"] },
  { id: "prototype-sprint", title: "Prototype Sprint", startingPrice: "TZS 1.2M", summary: "Turn a defined idea into a working, testable product direction.", details: ["Requirements definition", "Working prototype", "Development roadmap"] },
  { id: "operations-system", title: "Operations System", startingPrice: "TZS 3M", summary: "Build a focused internal system around the way your team operates.", details: ["Role-based workflows", "Operational dashboard", "Deployment and training"] },
  { id: "system-care", title: "System Care", startingPrice: "TZS 350K/month", summary: "Keep an approved system reliable after launch.", details: ["Maintenance", "Monitoring", "Planned improvements"] },
] as const satisfies readonly Service[];
```

- [ ] **Step 3: Render price and approved CTA without changing the existing interaction pattern**

Render `startingPrice` inside each expandable service row and use `hero.subheading` in `Hero.tsx`. Replace all header/footer readiness-session wording with “Discuss your project”.

- [ ] **Step 4: Run focused tests**

Run: `npm test -- --run src/content/site.test.ts src/App.test.tsx`

Expected: hero, offers, CTA, and integrity tests pass; privacy test remains pending until Task 4.

### Task 3: Replace Education with Selected Work and Generalize the Company Copy

**Files:**
- Delete: `src/components/Education.tsx`
- Modify: `src/components/Initiatives.tsx`
- Modify: `src/components/About.tsx`
- Modify: `src/components/Process.tsx`
- Modify: `src/App.tsx`
- Modify: `src/styles.css`

- [ ] **Step 1: Remove the education component from the application composition**

```tsx
return <><SiteHeader /><main><Hero /><Services /><Initiatives /><Process /><About /><Contact /></main><SiteFooter /></>;
```

- [ ] **Step 2: Rename initiatives as selected work while preserving honest maturity labels**

Use the section label “Selected work”, heading “Systems built to solve real operating problems.”, and retain `Prototype`, `Early stage`, and `Active system` statuses. Do not describe any internal project as a client engagement.

- [ ] **Step 3: Replace About and Process copy**

```tsx
<p className="lead">Kaisone is a custom-software company in Tanzania building practical systems for businesses, organizations, schools, and founders.</p>
<p>We begin with the real process, isolate the costly friction, and build the smallest system that can produce a useful operational result.</p>
```

The process remains Assess, Prioritize, Build, Transfer, but “Build” must refer to software, automation, AI workflows, or prototypes rather than training.

- [ ] **Step 4: Remove education-only CSS and re-balance the selected-work section**

Delete `.education*` rules. Keep the existing editorial dark/light system and ensure the selected-work rows remain responsive without introducing new decorative cards.

### Task 4: Add Lead Capture Fields and a Standalone Privacy Page

**Files:**
- Create: `src/components/Privacy.tsx`
- Modify: `src/components/Contact.tsx`
- Modify: `src/App.tsx`
- Modify: `src/components/SiteFooter.tsx`
- Create: `public/_redirects`

- [ ] **Step 1: Expand the contact payload**

The launch form must collect `name`, `organization`, `contact`, `problem`, `currentProcess`, `outcome`, `budget`, `timeframe`, and explicit consent. Continue storing a local draft before delivery.

- [ ] **Step 2: Keep unconfigured delivery truthful**

When `VITE_CONTACT_ENDPOINT` is absent, copy the structured brief and display: “Inquiry copied. Direct delivery is not connected yet.” Never show “Request sent.” unless the endpoint returns a successful response.

- [ ] **Step 3: Add the approved WhatsApp message as a configurable link**

Use `VITE_WHATSAPP_NUMBER` and `encodeURIComponent` to generate the click-to-chat URL. Hide the WhatsApp button when no number is configured rather than publishing a fake destination.

- [ ] **Step 4: Implement `/privacy`**

```tsx
export function Privacy() {
  return <main className="privacy-page"><h1>Privacy</h1><p>Kaisone collects the information you submit to assess and respond to your project inquiry.</p>{/* purpose, storage, access, processors, retention, deletion contact */}</main>;
}
```

Use `window.location.pathname === "/privacy"` in `App.tsx`, link it from the footer, and add `/privacy /index.html 200` to `public/_redirects` for static-host routing.

### Task 5: Prepare Safe Launch Visuals and Documentation

**Files:**
- Modify: `public/media/kaisone-hero.webp`
- Delete: `public/media/kaisone-education.webp`
- Modify: `README.md`
- Modify: `docs/superpowers/specs/2026-06-29-kaisone-website-design.md`
- Create: `docs/launch/cloudflare-deployment.md`
- Create: `docs/launch/marketing-launch-pack.md`

- [ ] **Step 1: Replace the classroom hero with a general business-operations visual**

The final image must not imply a real client, display confidential data, or position schools as the primary market. Update alt text to describe only visible content.

- [ ] **Step 2: Update README and design specification**

Remove expired Netlify instructions and school-first positioning. Document approved offers, optional `VITE_CONTACT_ENDPOINT`, optional `VITE_WHATSAPP_NUMBER`, and Cloudflare build settings.

- [ ] **Step 3: Create Opal's deployment runbook**

Document GitHub connection, `npm run build`, `dist`, environment variables, `pages.dev` smoke test, custom-domain connection, DNS/HTTPS verification, and rollback. State that `kaisone.co.tz` and `kaisone.africa` require registrar checkout and Kaizen approval before purchase.

- [ ] **Step 4: Create Mark's launch pack**

Include one launch announcement, seven daily posts, and three outreach templates. Do not claim clients, performance outcomes, or completed external engagements.

### Task 6: Full Verification and Commit

**Files:**
- Modify: `docs/qa/fidelity-ledger.md`
- Create: `docs/qa/kaisone-launch-desktop.png`
- Create: `docs/qa/kaisone-launch-mobile.png`

- [ ] **Step 1: Run all automated checks**

Run: `npm test -- --run`

Expected: 2 test files pass with zero failures.

Run: `npm run typecheck`

Expected: exit code 0.

Run: `npm run build`

Expected: Vite production build completes and produces `dist/index.html` plus `dist/_redirects`.

- [ ] **Step 2: Verify in-browser behavior**

Check desktop and mobile layouts, service expansion, Contact validation, clipboard fallback, conditional WhatsApp CTA, `/privacy`, image loading, console logs, horizontal overflow, focus order, and reduced motion.

- [ ] **Step 3: Record remaining external blockers**

The launch ledger must explicitly list the official WhatsApp number, domain email, form delivery endpoint, registrar purchase, Cloudflare ownership, and final Kaizen public-release approval as unresolved until supplied.

- [ ] **Step 4: Commit the implementation**

```powershell
git add src public README.md docs
git commit -m "feat: reposition Kaisone for custom software launch"
```
