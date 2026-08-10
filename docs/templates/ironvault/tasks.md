# Ironvault (ColorLib Fitnesstrainer) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-ironvault`.

## Design notes (replication findings)

- **Original:** ColorLib "Fitnesstrainer" — personal fitness trainer /
  gym coach one-page website template (source:
  https://colorlib.com/wp/template/fitnesstrainer/). TEMPLATES.md has TWO
  copies of this item (lines 398 and 1845 — mark EVERY copy `[x]` when done).
- **Demo DOM analyzed:** `https://preview.colorlib.com/theme/fitnesstrainer/`
  (HTTP 200, 25.7 KB; page title "PHILL HUE" = demo persona). Master
  stylesheet `css/style.css` (~139 KB, fully extracted). Libs: bootstrap,
  owl.carousel (testimonials), themify-icons/flaticon (icons), slick,
  gijgo, nice-select, magnific-popup (gallery lightbox). Cross-checked with
  the TEMPLATES.md screenshot (`fitnesstrainer-free-template.jpg` 1200×946,
  browser-viewed) — all match. Demo brands itself "PHILL HUE"; recreation
  uses the NEW name **Ironvault** (brand purple #4438b7 = iron-forged
  indigo).
- **Visual design (DOM + CSS tokens + screenshot):** modern minimalist
  light theme — very light grey/off-white bg with a giant faint vertical
  "trainer" watermark behind the hero text; header = dumbbell-icon logo
  left + hamburger right → FULL-SCREEN off-canvas overlay menu (light
  `#f0f0f0` bg, uppercase 30px links); split hero: "Hey" purple eyebrow +
  massive Anton uppercase headline "I AM PHILL HUE" + lorem + purple-gradient
  "Hire me" btn, right = warm trainer portrait (blue shirt, whistle,
  tablet); then client-logo strip (5), about (photo + "about me" + 2
  paragraphs + signature image + outline btn), 3 "Latest instoment" feature
  cards, skills (5 progress bars on `#f9f9ff` panel + photo), CTA stat card
  ("08 Years Expesience" giant `#cecece` number + "Want to start your next
  workout with me?" + btn), masonry gallery ("Latest Player Showcase", 7
  images, purple overlay + "Lead Trainer / Multi Plus Gym, USA" caption on
  hover), testimonial carousel (Daniel E Gilcritst / Richard Kellerman),
  slim copyright footer. Demo copy = lorem — paraphrase into trainer
  coaching copy.
- **Structure (1:1, section order):**
  1. Header (`header.main_menu.home_menu`, absolute, z-999, padding 25px 0):
     `div.main_menu_iner` flex space-between — `div.logo` (img logo.png)
     left; `span.menu-trigger` (3 bars, 30px) right → `div.off-canven-menu`
     (fixed, full-screen, `#f0f0f0`, padding 0 60px, transition 0.5s;
     `span.close-icon` ti-close ×; `ul` links: Home, about, skill,
     portfolio, blog, single blog, elements, contact — uppercase 30px,
     line-height 1.8, `#1f1b1b`).
  2. Hero (`section.banner_part`, height 1000px, `banner_bg_1.png` cover,
     position left bottom; `:before` white SVG wave divider at bottom):
     `div.banner_text` (col-lg-6): h5 "Hey" (`#8782ce`, Poppins 25px), h1
     "I AM PHILL HUE" (100px desktop / 40px mobile, line-height 1.273,
     `#1f1b1b`, uppercase, Anton), lorem p, `a.btn_1` "Hire me".
  3. Clients (`section.client_part section_padding`): title "Some Latest Gym
     With me" + 5 client logo images (Logo_1..5.png).
  4. About (`section.about_part padding_bottom`): left about_img_1.png;
     right h2 "about me" + 2 lorem paragraphs + Sign.png signature + btn_1
     "more about me".
  5. Features (`section.feature_part section_padding`): title + 3×
     `div.single_feature_part` (padding 60px 30px 55px) — h3 "Latest
     instoment" + lorem.
  6. Skills (`section.skil_part padding_bottom`): title "Some Latest Gym With
     me" + `div.progress-table` (bg `#f9f9ff`, padding 15px 0 30px, width
     800px): Free Hand Workout 90%, Gym Trainer 85%, Hard Workout 70%, Soft
     Workout 80%, Foot Ball 90%; right col skil_img_1.png.
  7. CTA (`section.cta_area section_padding`): `div.our_expesience` (bg
     `#fafafa` + single_feature_bg.png top, center): h2 "08" (100px,
     `#cecece`), p "Years Expesience" (Anton 15px), "Hire me to get the
     best"; right "Want to start your next workout with me?" + btn_1
     "hire me".
  8. Gallery (`section.gallery_part section_padding`): "Latest Player
     Showcase" + masonry (grid-item 25%) 7× `div.single_gallery_item`:
     image + `div.gallery_item_text` ("Lead Trainer" + "Multi Plus Gym,
     USA", white) hidden → slides to bottom 50px on hover; `:after` overlay
     opacity 0.5 scale 1 on hover; popup links (magnific lightbox).
  9. Testimonials (`section.review_part padding_bottom`): "Testimonial" +
     owl.carousel slides: client_1.png avatar, "Daniel E Gilcritst" +
     "Richard Kellerman" tag, lorem quote.
  10. Footer (`footer.footer_part`): padding 30px 0, top border 1px
      `#eeeeee`; centered copyright "All rights reserved | made with ♥ by
      Colorlib".
- **Design tokens (from `css/style.css`):**
  - Brand: **#4438b7** (46 uses — primary purple). Buttons:
    `linear-gradient(to right, #5338b7 0%, #4138b7 50%, #5338b7 100%)`,
    `background-size: 200% auto`, hover `background-position: right center`
    (gradient slide). Secondary `.btn_2`: 1px solid #eeeeee, uppercase,
    letter-spacing 1.5px, hover fill #4438b7. Square buttons (no radius).
  - Accents: #7a73cc (section-title underline 8px bar), #8782ce (hero
    eyebrow), #1f1b1b (headings/dark), #cecece (giant stat number),
    #fafafa (CTA card bg), #f9f9ff (skills panel), #f0e9ff/#f0f0f0 (light
    purple / off-canvas menu bg), #eeeeee (borders).
  - Fonts: **Anton** (display) + **Poppins 300–700** (body) via Google
    Fonts.
  - Rhythm: `.section_padding` 130px top/bottom (80px mobile); section
    titles 36px #1f1b1b + 8px #7a73cc underline (h2:after).
  - Hero: 1000px tall, cover bg, left-aligned text, white SVG wave divider
    at bottom edge.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/ironvault-<n>/<w>/<h>`); icons → lucide-react
  (dumbbell logomark, menu/close, social); Anton + Poppins via Google Fonts;
  testimonial carousel + masonry gallery with no extra deps; off-canvas
  overlay menu with Escape-to-close + aria (repo conventions).

## Implementation task outline

1. Copy the simplest existing app (e.g. `apps/forgefit` or another recent
   one) → `apps/ironvault`; rename package to `@free-react-templates/ironvault`;
   run `npm install` at repo root; register `injectUiSource()` in
   `vite.config.ts`.
2. `@theme` tokens in `src/index.css`: brand purple #4438b7 + gradient pair
   (#5338b7/#4138b7), supporting palette above; fonts Anton + Poppins in
   `index.html`.
3. Components (src/components/): `Header` (logo + hamburger + off-canvas
   overlay menu), `Hero`, `ClientLogos`, `About`, `Features`, `Skills`
   (progress bars), `Cta`, `Gallery` (masonry + hover captions),
   `Testimonials` (carousel), `Footer`.
4. `src/App.tsx` composes sections in demo order; document title
   "Ironvault — Fitness Trainer Template".
5. Tests FIRST (red) per section spec scenarios; then implementation;
   100% coverage (lines/functions/branches/statements).
6. Verify: `scripts/verify-app.sh ironvault`; `npm run spec:validate`.
7. PR: `feat/template-ironvault` → squash-merge to main; PR description
   includes source template, preview URL, design tokens, what differs
   (renames, placeholder images, persona copy).
8. After merge: `[~]` → `[x]` on BOTH TEMPLATES.md lines (398 + 1845),
   add surge URL, `npm run readme:status`, push.
