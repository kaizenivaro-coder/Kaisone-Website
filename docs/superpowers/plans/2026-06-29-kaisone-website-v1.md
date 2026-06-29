# Kaisone Website v1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build, verify, and publish a conversion-oriented v1 website for the Kaisone AI agency.

**Architecture:** An isolated React + Vite + TypeScript static site uses local typed content and small section components. CSS variables implement the approved Editorial Operations system. Contact delivery is optional configuration; the unconfigured path stores and copies the visitor's brief without claiming a successful send.

**Tech Stack:** React 19, Vite 7, TypeScript, Vitest, Testing Library, CSS, static hosting.

---

### Task 1: Scaffold and content contract

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `index.html`
- Create: `src/content/site.ts`
- Test: `src/content/site.test.ts`

- [ ] Define typed navigation, service, education, initiative, and process records using the approved copy.
- [ ] Add a content-integrity test that rejects empty labels and unapproved proof claims such as "trusted by", "number one", or invented numeric outcomes.
- [ ] Run `npm test -- --run` and confirm the content test passes.

### Task 2: Produce exact brand and photographic assets

**Files:**
- Create: `scripts/build-brand-assets.mjs`
- Create: `public/brand/kaisone-mark-white.png`
- Create: `public/brand/kaisone-mark-ink.png`
- Create: `public/brand/favicon-32.png`
- Create: `public/media/kaisone-hero.webp`
- Create: `public/media/kaisone-education.webp`

- [ ] Convert the supplied `1000100639.jpg` into tightly cropped transparent variants while preserving its pixel geometry.
- [ ] Generate separate hero and education documentary images with no text, logos, or fabricated client claims.
- [ ] Run the brand script and inspect every output with `view_image`.

### Task 3: Build semantic page components

**Files:**
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/components/SiteHeader.tsx`
- Create: `src/components/Hero.tsx`
- Create: `src/components/Services.tsx`
- Create: `src/components/Education.tsx`
- Create: `src/components/Initiatives.tsx`
- Create: `src/components/Process.tsx`
- Create: `src/components/About.tsx`
- Create: `src/components/Contact.tsx`
- Create: `src/components/SiteFooter.tsx`

- [ ] Implement the approved section order and visible copy with semantic headings, buttons, links, lists, and form labels.
- [ ] Implement the accessible mobile menu, expandable detail rows, and scroll navigation.
- [ ] Implement contact validation, local draft preservation, optional endpoint delivery, and copy fallback.
- [ ] Add focused tests for navigation state and contact behavior.

### Task 4: Implement the Editorial Operations design system

**Files:**
- Create: `src/styles/tokens.css`
- Create: `src/styles/global.css`
- Create: `src/styles/components.css`
- Create: `src/styles/responsive.css`

- [ ] Encode the approved palette, typography, spacing, layout, dividers, control geometry, and focus states as shared tokens.
- [ ] Match the hero, services, education, initiatives, process, about, and contact concepts without card-grid substitution.
- [ ] Add restrained motion and a complete `prefers-reduced-motion` override.
- [ ] Verify there is no horizontal overflow from 360px through 1600px.

### Task 5: Functional and visual verification

**Files:**
- Create: `src/App.test.tsx`
- Create: `docs/qa/fidelity-ledger.md`

- [ ] Run `npm test -- --run`, `npm run build`, and `npm run typecheck`; all must pass.
- [ ] Start the Vite server and verify the full flow in the in-app browser.
- [ ] Capture desktop and mobile screenshots.
- [ ] Compare the accepted concepts and final screenshots with `view_image`, documenting at least five concrete checks and fixing all material mismatches.

### Task 6: Publish and record the launch

**Files:**
- Create: `.github/workflows/deploy.yml` only if GitHub Pages is selected
- Modify: `README.md`
- Modify: `C:/Users/kaize/Desktop/Kaizen AI Vault - KAIOS/Efforts/Projects/Kaisone/Launches/Website v1 Launch.md`

- [ ] Use the first authenticated free static host confirmed by the deployment audit.
- [ ] Publish the production build without exposing private credentials or an unapproved personal email address.
- [ ] Open the public URL in the browser, verify the primary flow, and record the exact URL and verification time in KAIOS.
- [ ] If authentication is the only blocker, leave the production-ready build and exact one-step authorization action rather than claiming publication succeeded.

