# Maison (Colorlib Loaft) — Tasks & Design Notes

> Prep artifacts prepared for the implementer. Implementation ships on
> `feat/template-maison`.

## Design notes (replication findings)

- **Original:** ColorLib "Loaft" — architecture template
  (source: https://colorlib.com/wp/template/loaft/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/loaft/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
- **Visual design (from DOM + CSS tokens + screenshot):** architecture
  landing with a **gold** brand (`#f5ca56`), Roboto + Rajdhani fonts, a
  split "Precise Concept design for Posh living" hero, a solid gold divider
  band, and split "Latest Works" gallery.
- **Structure (1:1, section order):**
  1. Navbar: logo + Home, About, Works, Project, Service, Blog, Contact.
  2. Hero: "Precise Concept design for Posh living" (image left, text right,
     gold CTA "Learn More About Precise Design").
  3. Gold divider band.
  4. Projects: "We are Maison — Here are some of Our Latest Works" + project
     cards (image, title, "View Details").
  5. Services: "Top Services That We Offers" + 3 service cards (icon, title,
     blurb, "View Details").
  6. Testimonials: "What Our Priority Client's Say" + testimonial card.
  7. Counters: 1990 Projects done · 50+ Expert Members · 25+ Achievements.
  8. Blog: "A Glimpse from Our Latest Blog" + blog post cards (author/date,
     likes/comments meta, title, blurb).
  9. CTA band: "Join us today without any hesitation" + gold "Learn More".
  10. Footer: About Me (logo + blurb + socials), Newsletter, Follow Me +
      copyright.
- **Design tokens extracted from `css/style.css`:**
  - Primary **gold `#f5ca56`** (buttons, accents); dark `#222222`; light
    backgrounds `#f9f9ff`; muted `#777777`.
  - Fonts: **"Roboto"** (Google Fonts `<link>`) + **"Rajdhani"** (display).
  - Buttons: square (`border-radius: 0`), gold fill, dark text.
- **Recreation name:** Maison (NEW original name — the ColorLib source name
  "Loaft" is never reused). App folder `apps/maison`, package
  `@free-react-templates/maison`, homepage
  `https://free-react-templates-maison.surge.sh`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/maison-<n>/<w>/<h>`); lucide-react icons; Roboto +
  Rajdhani via Google Fonts; gold primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-maison/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [x] Create `apps/maison` (copy the section-rich landing app pattern —
      Villa; rename package to `@free-react-templates/maison`).
- [x] TDD: tests first for each section component; run red.
- [x] Implement components (green) at 100% coverage.
- [x] Per-app gate: `bash scripts/verify-app.sh maison` (typecheck → lint →
      test:coverage → build) + `npm run spec:validate`.
- [x] Push `feat/template-maison`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
