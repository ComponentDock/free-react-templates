# Animal Shelter (Colorlib Animal Shelter) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Flick PR (#8) awaits review.
> Implementation ships later on `feat/template-animal-shelter`.

## Design notes (replication findings)

- **Original:** ColorLib "Animal Shelter" — pet adoption website template
  (source: https://colorlib.com/wp/template/animal-shelter/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/animalshelter/
  (HTTP 200 — working preview slug is `animalshelter`, NOT `animal-shelter`;
  full rendered DOM + `css/main.css` (53KB, pretty-printed) extracted; this
  non-Astro template is served directly by the preview portal — NOT in
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + CSS tokens):** pet-adoption landing — **gold**
  brand color (`#fab700`) on white/`#f9f9ff` sections, image-backed banner
  and CTA with dark `rgba(0,0,0,0.4)` overlays, "Poppins" typography, square
  gold uppercase buttons, a pet-photo strip overlapping the banner, and a
  dark `#1e1c27` footer.
- **Structure (1:1, section order):**
  1. Fixed header (transparent → `rgba(0,0,0,0.7)` on scroll): logo + nav
     (Home, About Us, Cats, Dogs, Volunteer, Blog ▾, Contact).
  2. Banner (image bg + overlay): h1 "Adopt Us. We need your help." (white,
     60px, uppercase) + sub-head + "Find a pet to adopt".
  3. Pet photo strip (`margin-top: -170px`, overlaps banner): 4 pet photos.
  4. Select-pet band (`#f9f9ff`): "Please select your favourite pet" +
     "Fill Adoption Form".
  5. About (2 cols): image + "Globally Connected by Large Network" +
     "We are here to listen from you deliver exellence" + "get details".
  6. Video: image bg (330px) + play button + "Watch this video how they
     live here".
  7. Process (`#f9f9ff`): "Process to adopt a pet" + 4 steps (Pet Selection,
     Meeting Authority, Adoption Form Filling, Bring to new family).
  8. Testimonials: "Testimonials from our guardians" + cards (Mark Alviro
     Wiens, CEO at Google).
  9. Volunteer CTA (image bg + overlay): "Want to help? Become a Volunteer" +
     "View pdf details" / "Register now" (white buttons).
  10. Footer (`#1e1c27`): About Us / Useful Links / Contact Us (Binghamton,
      New York · 00 (953) 9865 562 · support@colorlib.com) + copyright +
      social icons (facebook, twitter, dribbble, behance).
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **gold** #fab700 (primary buttons, ::selection); body text
    #777777; light sections #f9f9ff; footer #1e1c27; overlays rgba(0,0,0,0.4).
  - Fonts: **"Poppins"** (Poppins, sans-serif) via Google Fonts; body 14px /
    weight 300 / line-height 1.625em; h1 36px (banner h1 60px, weight 600,
    white, uppercase), h4 18px, h5 16px.
  - Shapes: `.primary-btn` square gold buttons (no radius), line-height 42px,
    padding 0 30px, uppercase; `.section-gap` = 120px 0.
- **Recreation name:** Animal Shelter (kept — matches ColorLib name). App
  folder `apps/animal-shelter`, package `@free-react-templates/animal-shelter`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/animal-shelter-<n>/<w>/<h>`); lucide-react icons
  (ThumbsUp, User, ClipboardList, Wand2, Home, Phone, Mail, Play, Menu,
  Sun/Moon); brand social icons (facebook/twitter/dribbble/behance — removed
  from lucide-react) → inline SVG; Poppins via Google Fonts; repo-standard
  Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, cn).

## Tasks

- [x] Write `openspec/specs/template-animal-shelter/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/animal-shelter` (copy the simplest existing app — e.g.
      Cloud; rename package to `@free-react-templates/animal-shelter`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-animal-shelter`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
