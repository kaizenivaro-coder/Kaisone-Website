# Kaisone Website v1 Design

## Objective

Launch a credible, conversion-oriented public website for Kaisone, an AI agency in Tanzania. The site must support the first practical sales motion: an AI readiness conversation with a school or growing organization.

## Positioning

Kaisone provides practical AI training, workflow automation, and focused software. Education is the lead market because it matches the immediate FK International Secondary School opportunity. The site must not claim clients, outcomes, approvals, or compliance that have not been earned.

Primary message: **Practical AI for schools and growing organizations.**

Primary action: **Request an AI readiness session.**

## Information Architecture

1. Header: Kaisone mark, wordmark, Services, Education, Initiatives, Process, About, and the primary action.
2. Hero: offer, concise explanation, primary action, secondary link to initiatives, and an East African education/work image.
3. Services: AI Training, Workflow Automation, and Focused Software as three open editorial rows.
4. Education: AI fundamentals, responsible use, classroom productivity, and school operations.
5. Initiatives: FK School Platform (prototype), MetaPrime (early-stage internal venture), and Kaison (active internal operating system).
6. Process: Assess, Prioritize, Build, Transfer.
7. About: Kaisone is an AI agency in Tanzania working close to the operational problem.
8. Contact: a short readiness brief form. Its external delivery endpoint is configuration, not source code. No personal address is published without Kaizen's approval.

## Visual System

Direction: **Editorial Operations**. The page alternates restrained dark working surfaces with a clear paper-white education/process field.

- Ink 950: `#080A0D`
- Ink 900: `#101419`
- Graphite: `#1A2026`
- Divider: `#39434B`
- Paper: `#F2F1EC`
- Fog: `#C7CDD1`
- Muted: `#929BA2`
- Signal Mint: `#36D6A5`
- Error Coral: `#FF6B5E`, used only for errors
- Typography: Instrument Sans for content and IBM Plex Mono for small operational labels
- Geometry: 4px controls, fine dividers, open sections, no rounded card grid
- Layout: 12-column grid, 1280px content maximum, 80px desktop gutters, 20px mobile gutters
- Motion: restrained reveal and hover movement; disabled under `prefers-reduced-motion`

The supplied monogram remains geometrically unchanged. Production variants are deterministic crops/transparency conversions of the source image, not AI-redrawn approximations.

## Media

Use two separate documentary-style images:

- Hero: a facilitator helping secondary-school students work with laptops in a Tanzanian/East African classroom.
- Education: a distinct collaborative school workshop image.

Images communicate context only. They must not be presented as actual Kaisone clients or staff. Initiative visuals may use real product screenshots when available; otherwise the v1 initiative rows remain typographic rather than using fabricated product screens.

## Interaction

- Navigation scrolls to the relevant section and exposes an accessible mobile menu.
- Service and education rows expand concise detail without navigating away.
- Initiative rows clearly state maturity and do not imply public availability.
- Contact form validates required fields. If no delivery endpoint is configured, it preserves the visitor's draft locally and offers a copy-to-clipboard fallback instead of pretending the message was sent.
- All controls support keyboard focus and clear status feedback.

## Architecture

Create an isolated React + Vite + TypeScript project in `kaisone-website`. Use small components, local content data, CSS custom properties, and no backend dependency. The generated static build can be hosted on any free static platform. A configurable contact endpoint can be added without redesigning the page.

## Testing

- Unit tests cover contact validation, draft preservation, and content integrity.
- Build and lint/type checks must pass.
- Browser verification covers desktop and mobile layouts, navigation, mobile menu, expandable rows, contact fallback, focus order, and reduced motion.
- Visual QA compares browser screenshots with the three approved concept images.

## Non-Goals

- No blog, CMS, account system, dashboard, chatbot, payments, or speculative AI demo in v1.
- No fabricated testimonials, case studies, partner logos, performance metrics, or government endorsements.
- No public personal email address until Kaizen explicitly authorizes it.

