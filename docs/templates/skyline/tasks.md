# Skyline (ColorLib Dreamrs) — Tasks & Design Notes

> Prep artifacts written by the prep stream under the SOURCE name (dreamrs);
> renamed to the new name (skyline) by the implementer. Implementation ships
> on `feat/template-skyline`.

## Design notes (replication findings)

- **Original:** ColorLib "Dreamrs" — real estate / architecture template
  (source: https://colorlib.com/wp/template/dreamrs/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/dreamrs/
  (HTTP 200, full rendered DOM + `css/style.css` extracted). Screenshot:
  `dreamrs-free-template.jpg` — white DREAMRS logo, red gradient overlay over
  an aerial residential photo, big white "Proparties Now In City" headline.
- **Visual design (from DOM + CSS tokens):** real-estate landing with a **red**
  brand (`#ff3334`) on light lavender-gray backgrounds (`#f9f9ff`, `#f0e9ff`),
  Poppins font, red pill buttons (`border-radius: 50px`), secondary
  `#415094`.
- **Structure (1:1, section order):**
  1. Navbar: logo + Home, About, Services, Blog, Pages, Contact Us (repo
     standard: + dark-mode toggle, mobile menu).
  2. Hero: "Dream" eyebrow + "Proparties Now In City" + blurb + **learn More**
     red pill button, bg image + red gradient overlay.
  3. About: "About Us" + "Hello City We are leader in proparties." + blurb +
     learn More + counters (100 project / 300 clients / 150 member).
  4. Our Project: "our project" title + 8 property cards (category + title).
  5. Services: "our services" + "Hello City We are leader in Services." + 4
     cards (house Planning / house Build / Design& Build ×2).
  6. Gallery: "Luxuries Apartment" + 4 listings (title + "04 03 2400 sqft"
     beds/baths/sqft meta + like icon).
  7. Blog: "our blog" + 3 article cards.
  8. Footer: About Us / Contact Info / Important Link / Newsletter columns +
     social + copyright.
- **Recreation name:** Skyline (NEW name — never reuse "Dreamrs"). App
  folder `apps/skyline`, package `@free-react-templates/skyline`, homepage
  `https://free-react-templates-skyline.surge.sh`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/skyline-<n>/<w>/<h>`); lucide-react icons + inline SVG
  brand icons; Poppins via Google Fonts `<link>`; newsletter form prevents
  default (no backend); `#ff3334` primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome. Original copy typos paraphrased to the
  same kind of content.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Rename prep to `openspec/specs/template-skyline/spec.md` +
      `docs/templates/skyline/` (git mv from the source name).
- [x] Rewrite spec with the REAL section list (About/Projects/Services/
      Gallery/Blog — no testimonials in the source DOM).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/skyline` (copy the section-rich landing app pattern —
      girder; rename package to `@free-react-templates/skyline`; run
      `npm install` at root so the lockfile registers the workspace).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh skyline` (typecheck + lint +
      100% coverage tests + build) + `npm run spec:validate`.
- [ ] Push `feat/template-skyline`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage +
      `npm run readme:status` (bookkeeping on main).
