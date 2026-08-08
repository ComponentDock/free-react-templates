# Terracotta (ColorLib Heaven) — Tasks & Design Notes

> Recreation of ColorLib "Heaven" (https://colorlib.com/wp/template/heaven/).
> Built as **Terracotta** (new original name — evokes the warm orange brand).
> Branch: `feat/template-terracotta`.

## Design notes (replication findings)

- **Original:** ColorLib "Heaven" — architecture + interior design template.
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/heaven/
  (HTTP 200, full rendered DOM + `css/style.css` extracted; screenshot viewed
  in the browser).
- **Visual design:** hero = full-bleed modern building photo with a dark
  gradient overlay on the left; white uppercase headline "HEAVEN X LEATEST
  PROJECT" with an orange "ARCHITECTURE + DESIGN" eyebrow tag; solid orange
  "learn more" buttons (white text + white arrow box). Navbar transparent over
  the hero. Below: three white icon cards ("Inovative"), About Us, "Our
  Service" with a huge faint watermark and 12 "Home Decor" cards in a
  carousel, "Our Project" with 12 project cards (author + learn more),
  "Blog Post" with 6 cards + NEXT pagination, an ORANGE contact block
  (Melbourne, email, phone, brand office, working hours), then a dark footer
  (About Us + socials, Projects links, Contact us, Newsletter form).
- **Structure (1:1, section order):**
  1. Navbar: logo "Terracotta" + Home / About / Service / Project / Blog /
     Contact (original had Blog dropdown; simplify to flat links).
  2. Hero: tag + headline + learn more + image background.
  3. Innovative strip: 3 cards (icon + title + blurb).
  4. About Us: heading + blurb + learn more.
  5. Our Service: watermark + 12 service cards (Home Decor etc.), grid.
  6. Our Project: 12 project cards (image + author + learn more), grid.
  7. Blog Post: 6 blog cards (image + author + date + excerpt), grid.
  8. Contact: orange block with email/phone/brand office/working hours.
  9. Footer: dark, 4 columns + newsletter + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **orange `#ff7e00`** (buttons, accents, contact block); `#415094`
    secondary.
  - Light backgrounds `#f9f9ff`, `#f0e9ff`.
  - Font: **"Poppins"** (Google Fonts).
  - Orange buttons with white text; dark charcoal footer.
- **Recreation name:** Terracotta. App folder `apps/terracotta`, package
  `@free-react-templates/terracotta`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/terracotta-<n>/<w>/<h>`); lucide-react icons; Poppins
  via Google Fonts; forms prevent default (no backend); orange primary in
  `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Replication research: preview DOM + `css/style.css` tokens + screenshot.
- [x] Write `openspec/specs/template-terracotta/spec.md` (Gherkin requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/terracotta` (copy girder; rename package to
      `@free-react-templates/terracotta`; Poppins font; orange `#ff7e00`
      primary).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh terracotta` + spec:validate.
- [ ] Push `feat/template-terracotta`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main).
