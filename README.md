# Kaisone Website

Public website for Kaisone, a Tanzanian custom-software company building practical internal tools, automation systems, AI-powered workflows, and prototypes.

## Approved launch offers

- Workflow Fix - starting from TZS 900K
- Prototype Sprint - starting from TZS 1.2M
- Operations System - starting from TZS 3M
- System Care - starting from TZS 350K/month

The lower-priced Workflow Pilot is private and must not be published on the website.

## Commands

```powershell
npm install
npm run dev
npm test -- --run
npm run typecheck
npm run build
```

## Environment

`VITE_CONTACT_ENDPOINT` is optional. It must accept the project inquiry as JSON over HTTPS. Without it, the site saves the draft locally and copies the inquiry without claiming it was delivered.

`VITE_WHATSAPP_NUMBER` is optional. Use digits with the country code, for example `255...`. The WhatsApp CTA remains hidden when no number is configured.

No API keys, personal contact details, or client records belong in public source or Vite environment variables.

## Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Production branch: `main`
- SPA redirect: `public/_redirects`

The previous anonymous Netlify Drop expired. There is currently no public production deployment.
