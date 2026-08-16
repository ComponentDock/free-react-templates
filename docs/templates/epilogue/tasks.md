# Epilogue (ColorLib Bootstrap Footer 02) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-epilogue` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Bootstrap Footer 02" — footer-only component demo
  from the "Bootstrap Footer" series (source:
  https://colorlib.com/wp/template/bootstrap-footer-02/). TEMPLATES.md line
  778, ONE row only (`- [ ]` unchecked; slug grep-checked — no duplicates).
  Category "Bootstrap Footer (components)".
- **PREVIEW PATH QUIRK (verified, same as Footer 01):** the standard
  `https://preview.colorlib.com/theme/bootstrap-footer-02/` 404s. The
  "Bootstrap *" series lives under `/theme/bft/`:
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-02/`. (The
  `/theme/bootstrap/` prefix serves the Calendar/Carousel series instead.)
  When a preview 404s, grep the ColorLib template page for its "Live Preview"
  href before falling back to the screenshot.
- **Demo DOM analyzed:** `https://preview.colorlib.com/theme/bft/bootstrap-footer-02/`
  (HTTP 200, 19,444 bytes; title "Footer 02"). Custom stylesheet
  `css/style.css` (3,882 bytes / 122 lines) fully extracted; Bootstrap v4.5.3
  grid; icomoon icon font (icon-phone, icon-envelope, icon-twitter); no
  Google Fonts link, no template JS (jQuery/popper/bootstrap.bundle are
  present but the footer needs none).
- **Screenshot:** `bootstrap-footer-02.jpg` (1200×972, viewed in browser) —
  light-gray filler with "Footer #2"; charcoal `#202126` footer, three
  columns (About Us with orange icons + pill subscribe, Latest Tweet, 2×2
  Instagram grid), hairline-divided bottom bar (menu left, "Colorlib" logo
  right). Matches the live DOM. ONE variance: screenshot shows the tweet
  glyphs in orange, current CSS colors them white `#fff` — follow the live
  DOM/CSS (white). Demo brands itself "Colorlib"; recreation uses the NEW
  name **Epilogue**.
- **Visual design (from DOM + CSS tokens + screenshot):** dark charcoal
  footer on `#202126` (padding 7rem 0, muted `#888` 16px body text) with a
  vibrant orange `#f88020` accent. Footer + footer h3 in **Poppins**, body
  Roboto, paragraphs/tweets in **Source Serif Pro** (serif). About Us column:
  h3 20px white (mb 30px) + serif blurb; quick-info: white 16px lines with
  20px orange icons (phone "+1 291 3912 329", envelope "info@gmail.com");
  subscribe form: 55px pill input `#292b31` (radius 30px, padding-left 30px,
  padding-right 130px, placeholder #ccc 14px) with a 47px orange pill "Send"
  button absolutely fused inside its right edge (top 4px / right 4px, shadow
  0 2px 2px rgba(0,0,0,.2)). Latest Tweet: 3 italic serif items (15px, mb
  20px) with icon glyphs (CSS colors them white). Instagram: 2×2 grid of
  square photos, 5px gutters, hover opacity .5. Bottom bar: border-top
  1px rgba(255,255,255,.1), margin-top 7rem, padding-top 2rem; menu links
  Home/About/Our works/Services/Blog/Contacts white (10px padding, first
  child padding-left 0; ≤767px stack as block rows, padding-left 0) +
  site-logo "Epilogue" 20px white right.
- **Structure (1:1, DOM order):** `div.content` (70vh, bg-light, centered
  "Footer #2") → `footer.footer-32892` (`#202126`, 7rem 0) → container →
  row: 1) `col-md pr-md-5` About Us (h3 + blurb + quick-info ×2 + subscribe
  form); 2) `col-md` Latest Tweet (3× li: icon + italic text); 3) `col-md-3`
  Instagram (2× col-6 with 2 images each); 4) `col-12` bottom bar
  (d-md-flex: menu mr-auto + site-logo-wrap ml-auto).
- **Recreation decisions:** images → 4 seeded picsum squares
  (`picsum.photos/seed/epilogue-1..4/400/400`); icons → lucide-react
  (Phone, Mail, Twitter — lucide still exports brand-ish `Twitter`; probe
  with `typeof` and fall back to inline SVG if undefined); fonts → Roboto +
  Poppins + Source Serif Pro via Google Fonts `<link>`; form → zod-validated
  email with error + success states, visually-hidden label; footer logo
  "Epilogue" (no uppercase treatment — this footer's logo is plain 20px
  white); Component Dock link `https://www.componentdock.com/` in the bottom
  bar area (e.g. next to the logo or as a small line under the menu), since
  the source footer has no copyright line; alt text on gallery images;
  focus-visible rings; aria-hidden on decorative icon glyphs.

## Tasks (implementation order, TDD — tests first)

- [ ] Scaffold `apps/epilogue` (copy the simplest existing app, rename
      package to `@free-react-templates/epilogue`; register `injectUiSource()`
      in `vite.config.ts`; `npm install` at root so the lockfile registers
      the workspace; CNAME `epilogue.free.componentdock.com`; homepage
      `https://epilogue.free.componentdock.com`)
- [ ] `src/index.css` — Tailwind theme tokens: footer bg `#202126`, accent
      `#f88020`, input bg `#292b31`, muted `#888`, light `#f8f9fa`, white
- [ ] `index.html` — Google Fonts `<link>` (Roboto 400/500, Poppins 400/700,
      Source Serif Pro 400 italic) + title "Epilogue — Footer"
- [ ] `Filler.tsx` (+ test) — `#f8f9fa` ~70vh area with centered demo label
- [ ] `AboutColumn.tsx` (+ test) — h3 + blurb + quick-info (Phone/Mail icons,
      orange) + `SubscribeForm`: pill input + fused orange Send button, zod
      validation, error + success states, labeled input
- [ ] `LatestTweet.tsx` (+ test) — 3 italic serif items with icon glyphs
- [ ] `InstagramGallery.tsx` (+ test) — 2×2 picsum grid, alt text, hover
      opacity
- [ ] `BottomBar.tsx` (+ test) — menu links (Home/About/Our works/Services/
      Blog/Contacts) + site logo "Epilogue" + Component Dock link
      (https://www.componentdock.com/), mobile stacking
- [ ] `App.tsx` (+ test) — compose filler + footer in order, document title
- [ ] `scripts/verify-app.sh epilogue` → green; TEMPLATES.md line 778
      "Bootstrap Footer 02" `[~]`→`[x]` + surge URL; `npm run readme:status`;
      PR + immediate squash merge
