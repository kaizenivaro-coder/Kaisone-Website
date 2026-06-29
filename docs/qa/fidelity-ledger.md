# Kaisone Website v1 Fidelity Ledger

## Verification

- Browser/IAB desktop viewport: 1280 x 720
- Playwright mobile viewport: 390 x 844
- Tests: six passing
- TypeScript: passing
- Production build: passing

## Comparison

| Check | Concept evidence | Render evidence | Result |
| --- | --- | --- | --- |
| Hero structure | Dark documentary image, left offer, mint CTA, large mark at right | `site-desktop-viewport.png` | Matched; hero shortened so Services remains visible |
| Header | Mark and wordmark, five links, one CTA | `site-desktop-viewport.png` | Matched |
| Education | Paper field, image left, curriculum rows right | `site-education.png` | Matched with a separate production photograph |
| Initiatives | Dark editorial rows with maturity labels | `site-initiatives.png` | Matched; fabricated product screenshots intentionally omitted |
| Process | Four numbered steps on a light field | `site-process.png` | Matched |
| Contact | Dark two-column assessment form | `site-contact.png` | Matched; truthful local-copy fallback when endpoint is absent |
| Mobile | Condensed header, full-width actions, no clipped text | `site-mobile.png` | Passed at 390 x 844 |

## Above-The-Fold Copy Diff

Approved and rendered:

- Kaisone
- Practical AI for schools and growing organizations.
- Training, useful automation, and focused software built around real operational needs.
- Request an AI readiness session
- See our work

No invented metrics, clients, testimonials, partners, or endorsements were added.

## Intentional Deviations

1. The exact supplied monogram is used instead of the approximate mark in generated concepts.
2. Initiative rows are typographic until verified product screenshots exist.
3. The hero is shorter than the concept so every tested viewport reveals the next section.
