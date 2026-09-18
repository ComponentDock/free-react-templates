# GivingHeart (ColorLib Charity 2) — Tasks & Design Notes

> Prep artifacts prepared on `main` under the source name (charity-2);
> renamed to the NEW name **GivingHeart** in the implementation PR.

## Design notes (replication findings)

- **Original:** ColorLib "Charity 2" — charity/nonprofit template
  (source: https://colorlib.com/wp/template/charity-2/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/charity-2/
  (HTTP 200, full rendered DOM + `css/main.css` (10KB) extracted).
- **Visual design (from DOM + CSS tokens):** charity landing with a
  **hot pink** brand (`#f41665`) and a **pink→orange→yellow gradient**
  (`#f40f68` → `#f86e3d` → `#fbcd11`) used on CTA buttons, card hover
  overlays, and the call-to-action strip. Light lavender backgrounds
  (`#f9f9ff`) on projects and volunteers; dark `#222` on about and donate.
  Poppins font. Rounded buttons (`border-radius: 20-25px`).
- **Structure (1:1, section order):**
  1. Navbar: logo "givingheart" + Home, Projects, About, Donate + "Donate Now" CTA.
  2. Hero/Banner: full-screen dark overlay background, "Waiting for Help" +
     "Donate Now" gradient button.
  3. Call-to-Action strip: pink→orange→yellow gradient, "Please Help them and
     Donate now" + "Donate Now" button.
  4. Projects: "Projects" heading + 3 cards (image overlay, hover gradient,
     "Donate Now" + "read more").
  5. About: split layout (left image, right text), dark `#222` background,
     "A very Lovely Welcome to our Company" + paragraph + "learn more" gradient button.
  6. Volunteers: "Our Volunteers" heading + 4 cards (image overlay, hover gradient,
     name reveal).
  7. Donate/Contact: dark parallax background, "Donate Now" heading, left info
     column (Divided Evenly, Transparency All the Way, Trustworthy), right form
     (project select, name, email, amount, message, donate button, payment icons).
  8. Footer: nav links, social icons (Facebook, Twitter, Dribbble, Behance),
     copyright with heart + Component Dock link.
- **Design tokens extracted from `css/main.css`:**
  - Primary hot pink `#f41665` (accents, text accents).
  - Gradient accent: `linear-gradient(0deg, #f40f68 0%, #f86e3d 55%, #fbcd11 100%)`
    (buttons, card overlays, CTA strip).
  - Light background `#f9f9ff` (projects, volunteers).
  - Dark backgrounds `#222` (about, form inputs), `#000` (overlays at 0.5/0.9).
  - Text: `#222` body, `#777` muted, `#fff` on dark.
  - Font: "Poppins" (Google Fonts).
  - Buttons: `border-radius: 20px` (outline), `25px` (solid primary).
  - Form inputs: no border-radius, transparent bg, `border: 1px solid #656463`.
- **Recreation name:** GivingHeart (NEW — the ColorLib source is "Charity 2").
  App folder `apps/givingheart`, package `@free-react-templates/givingheart`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/givingheart-<n>/<w>/<h>`); lucide-react icons;
  Poppins via Google Fonts; forms prevent default (no backend); gradient primary
  in `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Card, cn).

## Tasks

- [ ] Write `openspec/specs/template-givingheart/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/givingheart` (copy the simplest existing app pattern;
      rename package to `@free-react-templates/givingheart`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh givingheart` + `npm run spec:validate`.
- [ ] Push `feat/template-givingheart`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
