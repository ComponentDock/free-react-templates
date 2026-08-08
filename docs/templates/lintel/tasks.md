# Lintel (ColorLib Marga) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream (under the source name
> "Marga"); renamed to **Lintel** by the implementer (new-original-name rule).
> Implementation ships on `feat/template-lintel`.

## Design notes (replication findings)

- **Original:** ColorLib "Marga" — architecture template
  (source: https://colorlib.com/wp/template/marga/). TEMPLATES.md has THREE
  copies of this item (lines 115, 445, 1089 — mark ALL `[x]` when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/marga/ (HTTP 200,
  21 KB, title "Marga — Website Template by Colorlib"). Main stylesheet
  `css/style.css` (23.9 KB). Font: **DM Sans** via Google Fonts. Icons:
  icomoon + flaticon SVGs — replace with lucide-react + inline SVG brand
  icons.
- **Screenshot:** `marga-free-template.jpg` (1200×946, viewed in browser) —
  white navbar with centered logo ("marga" in teal, links split left/right),
  full-width interior photo hero with a white card ("DESIGN THAT MAKES YOU
  FEEL AT HOME" + lorem + teal "Contact Us" button), carousel dots below,
  light-gray Welcome section with white text box (left) + interior image
  (right).
- **Visual design (from DOM + CSS tokens + screenshot):** clean modern
  architecture aesthetic — white navbar, teal `#43ab92` accents (logo, links,
  buttons), light gray `#f8f9fa` section band, gray `#c9ccd4` footer, DM Sans
  sans-serif, uppercase bold headings (`heading-39291`), square corners
  (`rounded-0`) on buttons, white hero card over cover photo, uppercase 12px
  bold "more" links with arrow.

## Structure (1:1, section order)

1. Navbar: centered logo + Home, Projects, Services (left) / About, Blog,
   Contact (right) + dark-mode toggle (repo-standard chrome).
2. Hero: 3-slide carousel over cover photos — "We Are Specialist In The Field
   of Architect", "Design That Makes You Feel At Home", "Ready To Start Your
   Home" (each: white card, uppercase h1, lorem subtext, teal "Contact Us").
3. About: "Welcome To Our Company" — white text box (2 paragraphs + founder
   block "Bruce Smith — Founder, CEO") + 3-image carousel.
4. Services: "What We Do" + 6 icon cards (Creative Stairs, Kitchen Design,
   Lamp Decoration, Interior Blueprint, Dinning Table, Modern Design).
5. Projects: "Our Projects" + "View All Projects" + 4 media cards ("Downside
   Up House" / "Melbourne, Australia"), 2x2 grid.
6. Testimonials: centered quote carousel (Mike Dorney — CEO and Co-Founder).
7. Blog: "Blog and Updates" + 4 post cards (date meta, title, "Read More").
8. Footer: About Us blurb, Features links, Subscribe to Newsletter form,
   Follow Us socials (Facebook, X, LinkedIn, Instagram), copyright.

## Design tokens (from css/style.css)

- Primary **teal `#43ab92`** (21 references — buttons, accents, logo).
- Dark `#364d59`, light bg `#f8f9fa`, footer bg `#c9ccd4`.
- Font: **"DM Sans"** (Google Fonts `<link>` in index.html).
- Buttons: teal + white text, square corners; `.heading-39291` = uppercase
  20px bold black; `.more-39291` = uppercase 12px bold black + arrow.

## Recreation approach

- Seeded picsum placeholders (`picsum.photos/seed/lintel-<n>/<w>/<h>`);
  lucide-react icons; DM Sans via Google Fonts; forms prevent default (no
  backend); teal primary in `@theme`; repo-standard Navbar (dark-mode toggle)
  - Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn) + `BrandIcon`
  inline-SVG socials (typed `BrandName`).
- **Recreation name:** Lintel (NEW name — ColorLib source name "Marga" must
  never be reused). App folder `apps/lintel`, package
  `@free-react-templates/lintel`.

## Tasks

- [x] Write `openspec/specs/template-lintel/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/lintel` (copy the section-rich landing app pattern —
      Maison; rename package to `@free-react-templates/lintel`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `scripts/verify-app.sh lintel` + spec:validate.
- [ ] Push `feat/template-lintel`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` (ALL 3 copies) + Surge URL +
      homepage + readme:status.
