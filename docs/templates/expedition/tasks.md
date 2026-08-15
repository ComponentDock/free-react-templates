# Expedition (ColorLib Trips) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-expedition`.

## Design notes (replication findings)

- **Original:** ColorLib "Trips" (source:
  https://colorlib.com/wp/template/trips/). TEMPLATES.md has **THREE
  duplicate rows**: line 520 (## Bootstrap (216)), line 1209 (## Business
  (365)), and line 3012 (## Travel (44)) — mark ALL THREE `[x]` with the
  SAME surge URL when done.
- **Preview URL:** `https://preview.colorlib.com/theme/trips/` — HTTP 200,
  ~25 KB HTML; verified 2026-08-15. Theme folder = `trips` (no hyphen
  caveat). Master stylesheet `css/style.css` (~24 KB) relative to the
  `trips/` path. libs: bootstrap 4 (custom build), owl.carousel
  (testimonials), jquery.fancybox (video), aos (scroll anim),
  bootstrap-datepicker (not used on this page), icomoon + flaticon icon
  fonts. Google Font **Work Sans** (body 300 / headings 900).
  Cross-checked with the TEMPLATES.md screenshot
  (`trips-free-template.jpg`, 1200×946, browser-viewed) — consistent:
  white navbar w/ orange-triangle logo, hikers-on-a-rock hero + dark
  overlay, white "Let's Enjoy The Wonders of Nature", play button + "Watch
  the video", white Our Story split w/ "STORY" watermark + orange "DISCOVER
  STORY" eyebrow.
- **Visual design (DOM + CSS tokens + screenshot):** minimal nature-travel
  landing. White navbar (logo image left, links right, active link gold).
  Full-screen hero photo + rgba(0,0,0,0.3) overlay, white 900 h1, lorem,
  60px circular play button. White sections with the recurring heading
  block: 5rem 900 uppercase watermark (`#efefef`, z-index -1) + gold
  uppercase eyebrow (`.subtitle-39191`, #efba6c, 14px bold) + black 900 h2.
  Trip cards: photo + bottom dark gradient + gold category pill + white
  title/price. Team: 3 person cards + circular social icons. Testimonials:
  owl carousel, 4 slides × 2 quotes. Blog: 3 cards w/ "July 17, 2019 by
  Admin" meta. CTA band: fixed photo + rgba(239,186,108,0.4) gold overlay,
  white heading + gold "Get In Touch". Footer: SOLID GOLD #efba6c w/
  Instagram thumbnails, Quick Links, Newsletter form.
- **Structure (1:1, section order):**
  1. **Navbar** — white; logo `images/logo.png` (73px) left; links Home
     (active, gold), About, Trips, Blog, Contact; mobile hamburger.
  2. **Hero** — `hero_1.jpg` + rgba(0,0,0,0.3) overlay; h1 (white 900 3rem)
     "Let's Enjoy The Wonders of Nature", lorem, `.play-btn-39282` (60px
     circle, white border, hover → white bg/black icon) + "Watch the
     video" (vimeo 191947042).
  3. **Our Story** — watermark "Story" + eyebrow "Discover Story" + h2 "Our
     Story" + 2 paragraphs; `traveler.jpg` image right.
  4. **Journey** — watermark "Journey" + h2 "Your Journey Starts Here"; 6
     `.listing-item` cards (`img_1..6.jpg`): gold category pill (12px,
     uppercase, ls .2em, radius 30px, padding 5px 30px), white h2 18px
     title, white price — prices $200.00/$390.00/$180.00/$600.00/
     $330.00/$450.00; titles Dignissimos debitis, Consectetur adipisicing,
     Temporibus aperiam, Expedita fugiat, Consectetur adipisicing,
     Consectetur Amet; bottom gradient transparent →
     rgba(0,0,0,0.65); img scale 1.05→1 hover.
  5. **Team** — watermark "Our Team" + eyebrow "Amazing Staff" + h2 "Meet
     Our Team"; 3 `.person-29191` cards: John Doe / Jean Doe / Claire
     Dormey, "Staff", lorem, 3 social icons (facebook/twitter/instagram).
  6. **Testimonials** — watermark "Testimonials" + eyebrow "Testimony" +
     h2 "Happy Customers"; owl carousel 4 slides × 2 `.testimonial-39191`
     items: quote + "— John Doe".
  7. **Blog** — watermark "Blog" + eyebrow "Updates" + h2 "Our Blog"; 3
     `.post-entry-1` cards: title "Lorem ipsum dolor sit amet", meta "July
     17, 2019 by Admin", excerpt.
  8. **CTA band** — `site-section bg-image overlay`: fixed photo +
     rgba(239,186,108,0.4) gold overlay; h2 white bold "Join and Trip With
     Us", lorem, `.btn-primary` "Get In Touch".
  9. **Footer** — solid #efba6c; columns: Instagram (6 thumbnails
     `insta_1..6.jpg`, 2×3 grid), Quick Links (About Us, Testimonials,
     Terms of Service, Privacy, Contact Us), Newsletter (lorem + email
     `.form-control` 55px white + gold "Send" submit). Copyright bar
     border-top rgba(255,255,255,0.1) — source credits Colorlib → replace
     with Component Dock link.
- **Design tokens (from `css/style.css` + `bootstrap.min.css`):**
  - Font: **"Work Sans", sans-serif** (300–900 via Google Fonts).
  - Brand gold **#efba6c**: navbar active link, eyebrows, category pills,
    `.btn-primary` bg/border, form focus border, owl active dot, footer bg
    (solid), CTA overlay tint.
  - Text: body **#364d59** (300), headings **#000** (900); watermark
    **#efefef** (5rem, 900, uppercase).
  - Overlays: hero rgba(0,0,0,0.3); CTA rgba(239,186,108,0.4); card
    gradient transparent → rgba(0,0,0,0.65).
  - `.btn`: .8rem, uppercase, letter-spacing .2rem, padding 10px 20px.
  - `.form-control`: height 55px, white, focus border #efba6c.
  - `.site-section`: padding 7rem 0 desktop / 3rem mobile.
  - Footer: padding 4em 0 (8em md), bg #efba6c, `.footer-heading` 16px.
- **Recreation decisions:** picsum placeholders for ALL photos (seed
  `expedition-N`, nature/travel subjects, verify before pinning); icomoon /
  flaticon → lucide-react (Play; Facebook/Twitter/Instagram as inline SVG —
  lucide removed brand glyphs; probe every export); Work Sans via Google
  Fonts; testimonial carousel can be a static grid; video → modal or plain
  link to vimeo URL; newsletter validated with zod (email, success state);
  footer MUST link https://www.componentdock.com/ ("Component Dock")
  replacing the Colorlib credit.

## Implementation task outline

1. Copy the simplest existing app → `apps/expedition`; rename package to
   `@free-react-templates/expedition`; run `npm install` at repo root
   (lockfile registers the workspace); register `injectUiSource()` in
   `vite.config.ts`; `public/CNAME` = `expedition.free.componentdock.com`,
   `"homepage"` = `https://expedition.free.componentdock.com`.
2. `@theme` tokens in `src/index.css`: brand `#efba6c`, body `#364d59`,
   headings `#000`, watermark `#efefef`, overlay rgba(0,0,0,0.3) /
   rgba(239,186,108,0.4); Work Sans (300–900) via Google Fonts in
   `index.html`.
3. Components (src/components/): `Navbar` (white, active-link gold, mobile
   hamburger), `Hero` (full-screen photo, overlay, headline, `PlayButton`),
   `Story`, `Journey` (6 trip cards w/ gold pill + price), `Team` (3 cards
   - social), `Testimonials` (4×2 quotes), `Blog` (3 cards), `CallToAction`
     (gold overlay band), `Footer` (Instagram grid + quick links + newsletter
   - Component Dock link).
4. `src/App.tsx` composes sections in the exact source order; document
   title "Expedition — Travel & Tourism Template".
5. Tests FIRST (red) per spec scenarios: navbar links + mobile menu + active
   state; hero content + play button; story band; six journey cards
   (title/pill/price); three team cards + social icons; testimonial quotes +
   attributions; three blog cards + meta; CTA band; footer columns +
   newsletter validation + success + Component Dock link; page composition +
   title. Then implementation; 100% coverage.
6. Verify: `scripts/verify-app.sh expedition`; `npm run spec:validate`.
7. PR: `feat/template-expedition` → squash-merge to main; PR description
   includes source template (Trips), preview URL
   (https://preview.colorlib.com/theme/trips/), design tokens (#efba6c gold,
   Work Sans, overlays), what differs (picsum placeholders, lucide icons,
   static carousel, Component Dock footer), and the TRIPLE-dup-row note
   (mark TEMPLATES.md lines 520, 1209 AND 3012 `[x]` with the same surge
   URL).
