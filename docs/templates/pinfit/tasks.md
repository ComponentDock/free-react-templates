# Pinfit (ColorLib Menztailor) — Tasks & Design Notes

> Recreation of ColorLib "Menztailor" (https://colorlib.com/wp/template/menztailor/)
> under the NEW original name **Pinfit** (prep naming convention: spec/docs
> folders are named by the new name directly).

## Design notes

- **Original:** ColorLib "Menztailor" — men's tailoring service website template.
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/menztailor/`
  (HTTP 200, 21.6KB HTML + 64.8KB style.css). Full rendered DOM extracted (curl).
  Screenshot `menztailor-free-template.jpg` in TEMPLATES.md confirms
  the visuals (dark hero, gold accents, service cards, video history, testimonials).
- **Structure observed (1:1):** sticky header (logo + nav HOME/SERVICES/HISTORY/GALLERY/BLOG(drop)/CONTACT) →
  hero slider (dark bg, "Made to Measure Dress Shirts" in script font, "Discover true personalization." heading, CTA button) →
  services (3 cards: Perfect Body Measurements, Premioum Style Cutting-out, Restoration with Sincerity) →
  history/video (split: bg image left + play button, "History" outlined text + "Our History" + description + About Us button right) →
  clients speech (carousel: "Our Work For Clients") →
  visit tailor (split: image + "Visit Our Tailor" left, "10% Off" + service list + Get Appointment right) →
  testimonial (large outlined "Testimonial" title + carousel with author photos) →
  footer (logo/tagline + Contact + Links + Social + copyright).
- **Design tokens:** brand gold **#c6a16e** (buttons, accents, script labels,
  dropdown borders, hover → #b99562); dark body **#0b1416** (hero, footer);
  light bg **#f9f9ff** (offer cards); heading text **#0b1c39**; body text
  **#96989a**; fonts: **Montserrat** (body), **Josefin Sans** (headings/buttons),
  **Great Vibes** (decorative script labels); button: sharp 0px radius gold
  filled, uppercase letter-spacing 1px; `.boxed-btn`: gold border, transparent
  fill, 3px radius; outline text: text-stroke 1px #28241d.
- **Recreation name:** Pinfit. App folder `apps/pinfit`, package
  `@free-react-templates/pinfit`, homepage `https://pinfit.free.componentdock.com`.
- **Design approach:** dark theme (hero/footer) with gold accents; hero = full-width
  slider with dark bg image, Great Vibes script subtitle + large white heading +
  CTA; services = 3-card grid with gold numbers; history = split layout with
  bg image left + large outlined text right; testimonials = carousel with author
  photos; visit tailor = split CTA; footer = 4-column dark; all images
  picsum-seeded (`picsum.photos/seed/pinfit-N/w/h`); Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation: consider `apps/atelier` (fashion template with similar
  structure — header, hero, services, testimonials, footer patterns) or
  `apps/haute` (fashion with dark theme elements).

## Tasks

- [ ] Write `openspec/specs/template-pinfit/spec.md` (Gherkin requirements + scenarios + replication findings) — DONE on main (prep).
- [ ] Create `apps/pinfit` (copy simplest fashion app; rename package to
      `@free-react-templates/pinfit`).
- [ ] TDD: tests first for Navbar, HeroSlider, Services, HistoryVideo,
      ClientsSpeech, VisitTailor, Testimonials, Footer, App composition.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `scripts/verify-app.sh pinfit` + `npm run spec:validate`.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list (via
      `npm run readme:status`).
