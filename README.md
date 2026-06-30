# Kaisone Website

Public website for Kaisone, an AI agency in Tanzania focused on practical AI training, workflow automation, and focused software.

## Live deployment

- Site: https://sweet-pie-4a3722.netlify.app
- Temporary access password: `My-Drop-Site`
- Release: Website v1

This is an anonymous Netlify Drop deployment. It must be claimed through the open Netlify claim page before the temporary claim window expires to preserve the site and take ownership of future deployments.

## Commands

```powershell
npm install
npm run dev
npm test -- --run
npm run typecheck
npm run build
```

## Contact delivery

The site works without a backend. When `VITE_CONTACT_ENDPOINT` is not configured, the contact brief is saved to the visitor's browser and copied to their clipboard without claiming it was delivered.

To connect a form service later, set `VITE_CONTACT_ENDPOINT` to an HTTPS endpoint that accepts JSON:

```json
{
  "name": "",
  "organization": "",
  "email": "",
  "goal": ""
}
```

No personal email address is included in the public source.
