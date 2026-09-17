# Scholarly (ColorLib Education Wordpress Themes) — Tasks & Design Notes

> Prep artifacts originally prepared on `main` under the working name
> "Education Wordpress Themes"; renamed to **Scholarly** (the ColorLib source
> slug may not be reused as the new template name). Implementation ships on
> `feat/template-scholarly`.

## Design notes (replication findings)

- **Original:** ColorLib "Education Wordpress Themes" — Free education
  WordPress theme collection page
  (source: https://colorlib.com/wp/template/education-wordpress-themes/).
- **Demo DOM:** https://preview.colorlib.com/theme/education-wordpress-themes/
  returned HTTP 404. **Screenshot-only analysis** from
  `education-website-designs.jpg` (1200x930 JPEG).
- **Visual design (from screenshot):** education/university site with a
  **dark navy** top bar + admission panel, **bright green** accent color
  for CTAs and subtext, white navbar and feature bar, a full-width hero
  with student study image, serif display typography for the university name,
  and a split-layout admission section.
- **Structure (1:1, section order):**
  1. Top Bar: dark navy background, email + phone on left, Alumni/Calendar/
     Portal links + green "Support" CTA button on right.
  2. Navbar: white background, university crest/logo + "Scholarly" name,
     nav links — Home (green underline active), About, Academics, Admissions,
     Courses, Athletics, Campus Life + search icon.
  3. Hero: full-width cover image (student studying), "The Best University
     Of The State" green subtext, "Scholarly University" large white
     headline, "Take A Tour" white-bordered transparent CTA button.
  4. Feature Bar: white background, 4 icon+label items in a row — Campus
     Life, Graduation, Athletics, Community (line-style icons).
  5. Admission Section: split layout — left: educator/professor image,
     right: dark navy panel with "Apply for Admission" heading, green
     accent text "Applications are now open", description paragraph.
  6. Footer: university contact info, quick links, copyright, Component Dock.
- **Design tokens (from screenshot visual analysis):**
  - Dark navy: ~`#1a1a2e` / `#222222` (top bar, admission panel).
  - Green accent: ~`#4CAF50` / `#28a745` (CTA button, active nav underline,
    subtext).
  - White `#fff` (navbar, feature bar, hero text).
  - Serif display font for university name (Playfair Display or similar).
  - Sans-serif for body text (Roboto / Open Sans).
  - Buttons: transparent + white border (hero), green filled (top bar CTA).
  - Feature icons: line-style, 4-column row.
  - Hero: full-width cover image, no solid background.
  - Alternating section backgrounds: white → dark navy.
- **Recreation name:** Scholarly (NEW name — different from ColorLib
  "Education Wordpress Themes"). App folder `apps/scholarly`, package
  `@free-react-templates/scholarly`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/scholarly-<n>/<w>/<h>`); lucide-react icons;
  university crest → styled text logo; no assets copied.

## Tasks

- [x] Replication: screenshot analysis (preview 404, screenshot-only fallback).
- [x] Spec: `openspec/specs/template-scholarly/spec.md` (Gherkin scenarios).
- [ ] Scaffold `apps/scholarly` (copy of simplest existing app, renamed).
- [ ] Components: TopBar, Navbar, Hero, FeatureBar, AdmissionSection, Footer.
- [ ] Tests for every component + App composition (100% coverage).
- [ ] `npm install` at root (lockfile registers `@free-react-templates/scholarly`).
- [ ] Full gate: typecheck, lint, test:coverage, build, knip, fallow,
      spec:validate.
- [ ] Push branch, open PR ("feat: Scholarly — ... (ColorLib Education WP Themes)"), merge.
- [ ] Bookkeeping: TEMPLATES.md `[x]` + surge URL, homepage, README status.
