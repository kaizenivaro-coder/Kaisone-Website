# Cloudflare Pages Deployment Runbook

## Preconditions

- Kaizen approves the final public branch and proof visuals.
- An owned GitHub repository exists for `kaisone-website`.
- An owned Cloudflare account is available.
- `npm test -- --run`, `npm run typecheck`, and `npm run build` pass.
- The approved WhatsApp number and lead-delivery endpoint are configured or their controls remain hidden/truthful.

## GitHub

Repository: `https://github.com/kaizenivaro-coder/Kaisone-Website`

1. Use the owned `kaizenivaro-coder/Kaisone-Website` repository.
2. Add the GitHub remote to this local repository.
3. Push the approved launch commit to `main`.
4. Protect ownership credentials and never commit `.env` files.

## Cloudflare Pages

1. Open Workers & Pages and create a Pages project.
2. Connect the owned GitHub repository.
3. Select `main` as the production branch.
4. Set build command to `npm run build`.
5. Set output directory to `dist`.
6. Add `VITE_CONTACT_ENDPOINT` only after the receiver is tested.
7. Add `VITE_WHATSAPP_NUMBER` only after Kaizen approves the business number.
8. Deploy and retain the generated `pages.dev` address for verification.

## Smoke Test

Verify the homepage and `/privacy`, desktop and mobile layouts, service expansion, CTA behavior, form validation, a real form delivery, WhatsApp prefilled text, image loading, HTTPS, console logs, and 404 behavior. Do not announce the site while form delivery or published contact details are unverified.

## Domain

The intended first choice is `kaisone.co.tz`; the backup is `kaisone.africa`. Neither may be purchased until registrar checkout confirms availability and Kaizen approves the price. A missing DNS record is not proof of availability.

After purchase, connect the domain in Cloudflare Pages, apply the DNS records Cloudflare provides, wait for HTTPS activation, choose one canonical hostname, and verify redirects from the alternate hostname.

## Rollback

If production fails, restore the previous successful Cloudflare deployment or detach the custom domain until the corrected build passes the complete smoke test.
