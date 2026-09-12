# Focuspoint (ColorLib Halo) — Tasks & Design Notes

> Prep artifacts prepared on `main` under the source name (template-halo);
> renamed to the NEW name **Focuspoint** in the implementation PR.

## Design notes (replication findings)

- **Original:** ColorLib "Halo" — photography portfolio template
  (source: https://colorlib.com/wp/template/halo/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/halo/
  (HTTP 200, full rendered DOM + `css/style.css` (27KB) extracted).
- **Visual design (from DOM + CSS tokens):** dark, moody photography
  portfolio with full-bleed hero slider, clean white intro section,
  masonry-style image grid portfolio, dark milestone counters, services
  with icon boxes on white, dark contact section with form, and near-
  black footer. Minimal color palette: dark charcoal + white + red accent.
- **Structure (1:1, section order):**
  1. Header/Navbar: "FOCUSPOINT" logo + search icon + nav links (Home,
     About Us, Services, Portfolio, Blog, Contact) + dark-mode toggle.
  2. Hero slider: full-width background image, "Focuspoint" title,
     "We Create Awesome Photographies and more" subtitle.
  3. Intro: "Amazing Studio" / "We Are So Creative" + body text +
     "Read More" button + large image on the right.
  4. Portfolio: 7-item masonry grid with overlay hover showing title
     + "Landscape Photography" category.
  5. Milestones: dark `#222121` bg, 4 stat counters with flaticon
     icons (Video Games, Awards Won, Pictures Taken, Video Tutorials).
  6. Services: "Amazing Studio" / "See What We Offer" + 4 icon boxes
     (Video Footages, Photo Shootings, Photo Albums, Original Ideas) +
     arrow navigation link.
  7. Contact: dark bg with overlay, "Amazing Studio" / "Stay in Touch" +
     contact info (phone, email, address) + contact form (name, email,
     subject, message, Send button).
  8. Footer: near-black `#0d0d0d` bg, "Let's Work Together!" + email +
     social icons (Pinterest, Facebook, Twitter, Dribbble) + copyright.
- **Design tokens extracted from `css/style.css`:**
  - **Font:** `"Open Sans"` (Google Fonts, weights 300/400/600/700).
  - **Primary text:** `#222121` (near-black).
  - **Secondary text:** `#868686` (medium gray).
  - **Light text / icon:** `#d3d3d3`.
  - **Brand accent:** `#cc1847` (red — active dot indicator).
  - **Dark section bg:** `#222121` (milestones), `#0d0d0d` (footer),
    black with overlay (contact).
  - **Button style:** uppercase, 12px, min-width 135px, font-weight 600,
    border-top/bottom 2px solid `#222121`, transparent bg. `.light`
    variant: white border/text for dark backgrounds.
  - **Section padding:** `.spad` / `.sp-pad` (consistent padding).
  - **Icon color:** `#d3d3d3` (services), `#7a7a7a` (arrow button).
- **Recreation name:** Focuspoint (NEW — the ColorLib source is "Halo").
  App folder `apps/focuspoint`, package `@free-react-templates/focuspoint`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/focuspoint-<n>/<w>/<h>`); lucide-react icons;
  Open Sans via Google Fonts `<link>`; forms prevent default (no backend);
  dark `#222121` primary in `@theme`; red accent `#cc1847` in `@theme`;
  repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, cn).

## Tasks

- [x] Write `openspec/specs/template-focuspoint/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/focuspoint` (copy the simplest existing app pattern;
      rename package to `@free-react-templates/focuspoint`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh focuspoint` +
      `npm run spec:validate`.
- [ ] Push `feat/template-focuspoint`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
