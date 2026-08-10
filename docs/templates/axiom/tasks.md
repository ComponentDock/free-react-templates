# Axiom (ColorLib "Creative Agency 2 2") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-axiom` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Creative Agency 2 2" — Free Creative & Marketing
  Agency Website Template (source:
  https://colorlib.com/wp/template/creative-agency-2-2/). Listed in
  TEMPLATES.md (line 369, Bootstrap category; dup rows at 962 and 1458 —
  do not re-claim). Distinct from "Creative Agency 2" (line 368, prepped
  as Maestro).
- **Preview REACHABLE (HTTP 200) — BUT at a different slug:**
  `https://preview.colorlib.com/theme/creative-agency-2-2/` 404s; the
  portal serves the theme at
  `https://preview.colorlib.com/theme/creativeagency2/` (discovered via
  the portal iframe — the "Live Preview" button on the ColorLib template
  page points to `https://preview.colorlib.com/#creative-agency-2-2`).
  DOM fetched (`/tmp/creative-agency-2-2-ref/ca2.html`, 21.8 KB) +
  stylesheet (`/tmp/creative-agency-2-2-ref/style.css`, 55.4 KB — NOTE:
  shared multi-theme sheet; cross-check tokens against live computed
  styles) + screenshot (`creativeagency2-free-template.jpg`, 1200×946,
  viewed in browser + live page inspected). All references verified live.
- **Visual design:** minimalist, corporate, design-forward agency landing.
  White header bar with a bright-blue square logo (white "C"), centered
  nav (Home active = blue underline), "Say Hi" with a yellow underline.
  Hero: white, left-aligned large dark headline with "Design and
  Development" underlined, yellow-underlined CTA "Brows Our Products",
  two floating geometric shapes (lavender circle + mint triangle). Below:
  wide photo band (office scene, sticky-note wall) with a large blue
  circular play button. Palette: blue (`#00A7FF`-family) + yellow
  (`#FFCB00`) on white/black; Poppins; airy spacing.
- **Structure (1:1 from the preview DOM):**
  1. Header `.header-area > .main-header-area` (transparent) — logo-img
     (blue square "C" → wordmark + square icon) + main-menu (Home, About,
     Work, Services, Pages dropdown, Blog, Contact; 16px `#1F1F1F`,
     capitalized, 34px vertical padding; hover/active `#00A7FF` 4px
     underline) + log_chat_area "Say Hi" (3px `#FFCB00` underline) +
     mobile_menu.
  2. Hero `.agency_heading` (white; pt 255 / pb 160) — `h3` 50px/500/lh62
     `#1F1F1F` "We are Design and Development Agency based on California"
     (span "Design and Development" underlined) + "Brows Our Products"
     CTA (keep typo 1:1; `#FFCB00` underline) + animated_shape anim_1
     (purple circle top 35% left 10%) + anim_2 (mint triangle bottom 30%
     right 18%).
  3. Video `.video_area` (desktop `margin-left: 20%`) — `.video_banner.video_bg_1`
     cover photo (office), padding 340px 0, 120px `#0181F5` circular play
     `a` with play icon.
  4. Works `.works_area` — section_title h1 "Projects" + h3 "Our Works";
     2×2 `single_work` (`col-xl-5`, second row `offset-xl-2` +
     `spacec-top` 80px): Social App, iOS Design System, Product
     Packaging, Uber App Design. work_thumb img + work_hover
     `rgba(0,167,255,0.2)` + plus link (hover bg `#00A7FF`); work_heading
     h3 26px/400 `#1F1F1F` padding 29px 0 20px 68px + `::before` 2px×125px
     `#FFCB00` bar (left 36px). Below: `.more_products.text-center`
     "More Products".
  5. Services `.service_area.black_bg` (`#000`; pt 200 / pb 170) —
     section_title white "Services" + h3 "We're a full-service UX design
     agency, We build digital products and brands"; 3 × `single_service.text-center`
     (border 1px `#333` → hover `#808080`; padding 45px 40px 65px): icon
     - h3 26px white + p 16px/28 white — UX Research, UI Design,
       Development.
  6. Brands `.brand_area` (pt 170) — `brand_active` owl carousel, 6
     grayscale `single_brand` logos.
  7. Build `.build_product` (pt 200) — row align-items-center: build_img
     left (w-100) + product_right right (`col-xl-5 offset-xl-1`): h3 "We
     Help you to Build your Product and Brand For Big or Small" + p 16px
     `#727272` + "Visit Our Profile" (`#FFCB00` underline).
  8. Counters `.counter_area` (pt 200 / pb 170) — section_title "Quick
     Fact"; 3 × `single_counter.text-center`: h3 50px/600 `#615CFD`
     220 / 7930 / 67 + span 16px `#1F1F1F` "Amazing Products" / "Happy
     Clients" / "Support Daily Support".
  9. Instagram `.instragram_area` — 5 × `single_instagram` (width 20%,
     float left): img + ovrelay `rgba(0,167,255,0.2)` + centered white
     link; `.Visit_Work.text-center` band (`#00A7FF`, padding 40px 0): a
     26px/500 white "Visit Our Work".
  10. Footer `footer.footer` (`#000`) — footer_top 3 × footer_widget
      ("Follow Us" 5 socials: Facebook, Twitter, Instagram, Youtube,
      Pinterest — 16px `#fff`, lh 42, hover `#00A7FF`; "Links": Services,
      Work, About; "Address": 300, A-block, Green lane, USA /
      support@creative.com / +10 672 367 3789) + copy-right_text with
      `footer_border` (top 1px `rgba(255,255,255,0.2)`) → p.copy_right
      16px `#919191` "© <year> All rights reserved | This template is
      made with ♥ by Colorlib".
- **Design tokens (style.css + live):** font Poppins (body 16px/400, lh
  28; section titles 46px/600 lh 58); accent `#00A7FF` (overlays
  rgba(0,167,255,0.2), Visit Work band, nav underline, footer hover);
  play `#0181F5` 120px circle; yellow `#FFCB00` (Say Hi underline 3px,
  hero CTA underline, work bar 2×125); counter `#615CFD`; blacks `#000`
  (services, footer), `#1F1F1F` (headings/nav), borders `#333`→`#808080`;
  greys `#727272` (body), `#919191` (copyright), `#C7C7C7` (footer p).
- **Recreation name:** Axiom (NEW name, differs from ColorLib "Creative
  Agency 2 2"). App folder `apps/axiom`, package
  `@free-react-templates/axiom`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/axiom-<n>/<w>/<h>`: work cards 600×520 ×4, video
  band 1600×900, build 800×600, instagram 400×400 ×5, brand marks ×6);
  lucide-react icons (Play, Plus, Instagram; brand icons Facebook/Twitter/
  Youtube/Pinterest as inline SVG); Poppins via Google Fonts; owl brand
  carousel → simple grid or auto-scrolling row (document the choice);
  video play → decorative link or click-to-open modal (no video asset —
  document); keep "Brows Our Products" typo 1:1; no assets copied.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn). Remember:
  `vite.config.ts` MUST register `injectUiSource()`.

## Tasks

- [x] Write `openspec/specs/template-axiom/spec.md` (Gherkin requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/axiom` (copy a section-rich landing app pattern, e.g.
      Maestro/Forge/Chronicle; rename package to
      `@free-react-templates/axiom`; run `npm install` at root so
      `package-lock.json` registers it).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage: Header (transparent,
      wordmark + square icon, 7 nav links + Pages dropdown, yellow-
      underlined "Say Hi"), Hero (white, 50px headline with underlined
      "Design and Development", "Brows Our Products" CTA typo 1:1, purple
      circle + mint triangle shapes), Video band (20% left offset, cover
      photo, 120px `#0181F5` play circle), Works (2×2 staggered grid,
      blue hover overlays + plus links, yellow 2×125px bars, "More
      Products"), Services (`#000`, 3 `#333`-bordered icon cards),
      Brands (6 grayscale logos), Build (split image + "Visit Our
      Profile"), Counters ("Quick Fact", `#615CFD` numbers), Instagram (5
      tiles + `#00A7FF` "Visit Our Work" band), Footer (`#000`, Follow Us
      / Links / Address + copyright bar).
- [ ] Full gate: typecheck → lint → test:coverage → build → knip →
      fallow → spec:validate (or `scripts/verify-app.sh axiom` in
      FAST_MODE).
- [ ] Push `feat/template-axiom`, open PR (source template ColorLib
      "Creative Agency 2 2", preview URL
      `https://preview.colorlib.com/theme/creativeagency2/` — note the
      slug difference — design tokens, what differs: name, placeholder
      images, brand carousel simplification, video play decoration,
      no assets copied), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL
      (https://free-react-templates-axiom.surge.sh) + homepage; run
      `npm run readme:status`; push.
