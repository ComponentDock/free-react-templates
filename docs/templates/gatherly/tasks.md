# Gatherly — implementation tasks

Source: ColorLib **MeetUp** (`colorlib.com/wp/template/meetup/`) ·
preview `https://preview.colorlib.com/theme/meetup/` · app `apps/gatherly`.

Status: the app already exists (this spec was written to close the missing-spec gap), so
these tasks are the **acceptance checklist for the shipped code and for any re-implementation**
— work them top to bottom and tick them against `apps/gatherly`.

## 0. Preconditions

- [ ] `openspec/specs/template-gatherly/spec.md` passes
      `openspec validate template-gatherly --type spec`.
- [ ] `apps/gatherly/package.json` name is `@free-react-templates/gatherly`, `homepage` is
      `https://gatherly.free.componentdock.com`, `public/CNAME` holds the same host.
- [ ] No app file references ColorLib (provenance is spec/TEMPLATES.md/PR only).

## 1. Tokens first (see the spec's Design tokens)

- [ ] Put `#033fff` (brand blue) in the app's `@theme` block and use it through Tailwind
      classes; accent `#fbb901`; surfaces `#f8f9fa`; borders `#dee2e6`.
- [ ] `Lato` via a `<link>` in `index.html` (never copy the reference font files).
- [ ] Pill CTAs at `rounded-full`/30 px; cards and inputs at `5px`.
- [ ] Background images: `https://picsum.photos/seed/gatherly-<n>/<w>/<h>` — no ColorLib assets.

## 2. Band-by-band (DOM order — build in this order, test each band)

- [ ] 1 · Preloader overlay (`#ftco-loader` in the reference; last DOM node, first paint).
- [ ] 2 · Navbar: brand + seven anchors (`#home-section` … `#contact-section`) + ticket CTA + mobile toggle.
- [ ] 3 · Hero: two-slide carousel, headline + date line per slide, "Get Ticket" + video trigger, white overlay.
- [ ] 4 · Countdown: days / hours / minutes / seconds.
- [ ] 5 · About: eyebrow, "About Me" heading, prose, animated counter, image, "Join Our Event" band.
- [ ] 6 · Gallery: four images, one unguttered row.
- [ ] 7 · Subscribe: full-width image band + overlay + email form (`Enter email address`).
- [ ] 8 · Speakers: four named cards with roles and hover social overlay.
- [ ] 9 · Schedule: four day pills over one pane per day, rows of time + title + speaker.
- [ ] 10 · Pricing: four tiers (29 / 59 / 79 / 89.50) with pill "Buy Ticket" buttons.
- [ ] 11 · Blog: three cards (image, title, meta, read-more).
- [ ] 12 · Contact: info list (address / phone / email / website) + four-field form.
- [ ] 13 · Map band (placeholder iframe is fine — never the reference's API key).
- [ ] 14 · Footer: brand blurb, Links + Privacy + questions columns, four social icons,
      **Component Dock link** (`https://www.componentdock.com/`).

## 3. Fidelity rules that actually bite

- [ ] Section **order** matches the list above 1:1 (the reference's own order, not a redesign).
- [ ] Every navbar anchor resolves to a real section id; grep for `href="#` and prove each target exists.
- [ ] The reference's "Watch Video" opens a lightbox — implement as an accessible dialog, not a dead link.
- [ ] The schedule's last day pane is empty in the reference; keep the tab, render an empty state.
- [ ] Paraphrase copy; keep the same kind of content (headline + subtext + CTA, card title + blurb).
- [ ] Icons from `lucide-react` (the reference's flaticon/icomoon/ionicons glyphs must not be copied).

## 4. Verification

- [ ] `scripts/verify-app.sh gatherly` → typecheck + lint + 100 % coverage tests + build.
- [ ] `node scripts/update-readme-status.mjs` and confirm the README row for `Gatherly` now
      carries the spec's Purpose description instead of the boilerplate.
- [ ] `python3 ~/.hermes/skills/automation/componentdock-prep-stream/scripts/verify-row-grammar.py`
      → 0 hard flags.
