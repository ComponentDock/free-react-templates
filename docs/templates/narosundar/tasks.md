# Narosundar (Colorlib Narosundar) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cove PR awaits review.
> Implementation ships later on `feat/template-narosundar`.

## Design notes

- **Original:** ColorLib "Narosundar" — free barber shop website template
  (source: https://colorlib.com/wp/template/narosundar/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/narosundar/`
  (HTTP 200, 34.2KB) + stylesheet `assets/css/style.css` (72.7KB). Full
  rendered DOM extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** header (logo + Home/About/Service/Gallery/
  Blog/Blog Details/Elements/Contact + Free Quote btn) → hero slider
  ("WE'RE THE LAST OF BREED." + CTA) → about ("ABOUT Our STORY" + copy) →
  visit tailor ("OUR TOP PRICES": Special Beard Treatment, Color your Beard,
  Wax your Beard) → categories (section-img-bg2, "All We Do for You": For
  Hair / For Beard panels — Trim your Hair, Special Beard Treatment, Color
  your Beard, Wax your Beard) → services (Stylish hair cut, Cut & hair
  style, Color & hair wash) → instagram tile strip → customers ("Customers
  Say About Us" quotes) → footer (Contact Info + links + copyright).
- **Design tokens:** brand red **#FB0000** + CTA blue **#2845BA**; light bgs
  **#f9f9ff** / lavender **#f0e9ff**; dark bands **#150303**; footer dark;
  fonts **Chivo** + **Open Sans** via Google Fonts; red filled / blue filled
  uppercase buttons.
- **Recreation name:** Narosundar. App folder `apps/narosundar`, package
  `@free-react-templates/narosundar`.
- **Design approach:** light theme with red accents and blue CTA; hero =
  seeded picsum photo + headline; about split; price rows in a dark band;
  For Hair / For Beard category panels; services with lucide icons;
  testimonial band; footer with contact info + social links; all images
  picsum-seeded (`picsum.photos/seed/narosundar-N/w/h`); Google Fonts via
  `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [x] Write `openspec/specs/template-narosundar/spec.md` (Gherkin
      requirements + scenarios + replication findings) — DONE on main (this
      prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/narosundar` (copy `apps/aurora`; rename package to
      `@free-react-templates/narosundar`).
- [ ] TDD: tests first for Navbar, Hero, About, Prices, Categories,
      Services, Testimonials, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
