# Showcase — implementation plan (ColorLib Ronaldo)

Recreates https://colorlib.com/wp/template/ronaldo/ as `apps/showcase`
(package `@free-react-templates/showcase`). Full fidelity reference in
`openspec/specs/template-showcase/spec.md`.

## Source reference

- Preview: https://preview.colorlib.com/theme/ronaldo/ (HTTP 200; fetched
  2026-08-12, ~42.5KB HTML + css/style.css ~272KB)
- Screenshot: TEMPLATES.md line 490
  (`ronaldo-free-template.jpg`, 1200×946) — pale lavender hero, indigo
  accents, black nav, white about with headshot.
- Template page: https://colorlib.com/wp/template/ronaldo/
- TEMPLATES.md dup rows (all `- [ ]`, same source): lines 2355, 2422, 2557,
  2723 — bookkeeping should mark all of them `[x]` with the surge URL when
  Showcase ships.

## Task order (TDD, one commit per green slice is fine)

1. Scaffold `apps/showcase` from the simplest existing app (e.g. `apps/aura`
   or whichever is smallest), rename package to `@free-react-templates/showcase`,
   register the workspace (`npm install` at root → package-lock.json), and
   get a passing 100%-coverage scaffold (App smoke test).
2. `src/index.css` — `@theme` tokens: `--color-brand: #4f46e5`,
   `--color-brand-dark: #433cc3`, `--color-ink: #111827`, `--color-muted:
#6b7280`, `--color-line: #e5e7eb`; Poppins Google Fonts `<link>` in
   `index.html` (300..700). Set body font-family.
3. Data module `src/data.ts`: nav links, person name, rotating roles, about
   detail rows, resume entries (education 4 / experience 6 / skills 3
   circular + 6 linear / awards 4), services (6), projects (6 tiles),
   counters (100/1200/1200/500), blog posts (3), contact info, footer
   columns. All copy paraphrased from the preview.
4. `Navbar.tsx` — transparent over hero; indigo circle "S" logo (inline
   SVG/letter) + wordmark; desktop links with indigo underline hover + active
   section state; scroll listener for fixed white-blurred bar; mobile
   hamburger (aria-expanded, aria-label).
5. `Hero.tsx` — full-height, left-half indigo 10% overlay, centered kicker /
   headline / rotating typed word (useEffect interval + typing effect,
   cleanup!) / scroll mouse. Test the rotation with fake timers inside
   `act()`.
6. `About.tsx` — photo frame (picsum portrait, seed `showcase-about`), 120
   count-up (IntersectionObserver or scroll handler; test with mocked
   observer), Download CV button, detail list.
7. `PartnerStrip.tsx` — 5 muted logotype placeholders (text-based, greyscale).
8. `Resume.tsx` — pill tabs (Education/Experience/Skills/Awards) with panel
   switching (aria-selected, role=tab/tabpanel); card layout; circular
   meters (SVG stroke-dasharray) + linear progress bars with widths from
   data; `role="progressbar"` + `aria-valuenow` for a11y.
9. `Services.tsx` — 6 cards, lucide icons, hover lift (group-hover).
10. `Projects.tsx` — 6 tiles, indigo overlay on hover/focus-visible, title +
    label.
11. `CounterBand.tsx` — 4 white cards, count-up numbers.
12. `Blog.tsx` — 3 cards: image, meta (date · Admin · 3 comments), title
    link, excerpt.
13. `HireMe.tsx` — bg image band + indigo gradient overlay, heading, Hire me
    → #contact-section.
14. `Contact.tsx` — 4 icon cards + form (zod schema: name/email/subject/
    message; per-field errors; success state replaces form).
15. `Footer.tsx` — black 4-column footer + copyright bar with repo-standard
    credit.
16. `App.tsx` — compose in order: Navbar, Hero, About, PartnerStrip, Resume,
    Services, Projects, CounterBand, Blog, HireMe, Contact, Footer.
17. Full local gate: `npm run verify:app -- showcase` (typecheck + lint +
    vitest 100% + build). Then PR → immediate squash merge → bookkeeping:
    mark TEMPLATES.md lines 490 + 2355 + 2422 + 2557 + 2723 `[x]` with
    `https://free-react-templates-showcase.surge.sh`, `npm run readme:status`.

## Design notes (fidelity)

- **Palette:** indigo #4f46e5 is the single accent — used everywhere
  (logo, kicker, underlines, buttons, dates, counters, progress, overlays).
  Hover #433cc3. Headings #111827, nav/hero headline black, borders
  #e5e7eb, footer pure black #000.
- **Hero background:** white page bg + absolute `div.overlay` covering the
  LEFT HALF only (50% width) with #4f46e5 at opacity 0.1 — that's the pale
  lavender wash. Recreate exactly (not a full-width tint).
- **Typography:** Poppins; hero h1 60px/800 (40px mobile); section headings
  42px/600 #111827 with a 12px uppercase indigo subheading (letter-spacing
  2px) where present; card titles 20px/600.
- **Cards:** white, 1px #e5e7eb, radius 12px. Services hover: translateY(-4px)
  - `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)`.
- **Navbar scroll state:** fixed, `rgba(255,255,255,0.95)` + backdrop-blur,
  subtle shadow.
- **Rotating word:** "Web Designer." → "Developer." → "Photographer." →
  "Marketer." → "Blogger", ~2s period, typing animation, indigo + underline.
  Keep it a real component test (fake timers in act()).
- **Count-ups:** About "120 Project complete"; counter band 100/1200/1200/500
  (Awards/Projects/Clients/Coffees). Trigger on scroll into view; test the
  mounted end-state and the animation separately.
- **Projects overlay:** #4f46e5, opacity 0→0.9, text "Branding & Illustration
  Design" / "WEB DESIGN" (12px uppercase ls-2, white 80%).
- **Hire-me band:** gradient overlay `linear-gradient(135deg,
rgba(79,70,229,0.85), rgba(37,27,195,0.9))` over the bg photo.
- **Icons:** lucide-react for feature icons; social/footer brand icons must
  be inline SVGs (lucide removed brand icons).
- **Images (picsum seeds):** `showcase-about` (portrait headshot),
  `showcase-project-1..6`, `showcase-blog-1..3`, `showcase-hireme`
  (dark/abstract for the CTA band). Verify the portrait seed actually looks
  like a person before finalizing (seed-screening method in the replication
  skill).
- **Copy:** keep the same kinds of content (kicker/headline/rotating roles,
  Duden paragraph, detail rows, tab entries, card titles). The person name
  "Ronaldo Fredrickson" becomes a placeholder (e.g. "Alex Rivera") — note
  the deviation in the PR.
- **Accessibility:** tabs (role=tab/tabpanel, aria-selected), progressbars
  (role=progressbar + aria-valuenow), mobile nav aria-expanded, scroll mouse
  aria-label, form labels + per-field errors.
