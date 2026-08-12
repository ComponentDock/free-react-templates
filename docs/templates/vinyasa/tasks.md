# Vinyasa (ColorLib Yogaflex) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-vinyasa`.

## Design notes (replication findings)

- **Original:** ColorLib "Yogaflex" — classic Colorlib Bootstrap 4
  fitness/yoga template (source: https://colorlib.com/wp/template/yogaflex/).
  TEMPLATES.md has TWO copies (lines 542 in `## Bootstrap (216)`, 1891 in
  `## Health Fitness (72)` — duplicate rows; one recreation covers both;
  implementer marks BOTH `[x]`). WARNING: the other yoga-family templates
  (Yoga → prepped as Lotus, Yoga Studio, Yogabest, Yogafun, etc.) are
  DIFFERENT templates — don't conflate.
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/yogaflex/ (HTTP
  200, 47,792 bytes). The `<title>` is a stale copy-paste artifact; the BODY
  is the Yogaflex template (hero "YogaFlex to Shape your body", about,
  featured classes, schedule table, footer contact). Master stylesheet
  `css/main.css` (~70 KB) fully extracted; libs: bootstrap 4, owl.carousel,
  magnific-popup, nice-select, animate.css, jquery-ui, font-awesome,
  linearicons. No Google Fonts link in the preview — the theme assumed
  Roboto; recreation MUST load Roboto via Google Fonts `<link>`.
- **Screenshot:** `yogaflex-free-template.jpg` (1200×946, viewed in browser)
  — dark top info bar (socials left, search + phone + blue "Book Now"
  right); white header, "YOGAFLEX" uppercase logo + right nav (HOME ABOUT
  TRAINERS BLOG PAGES CONTACT); hero: woman in lotus pose on white mat, soft
  light studio bg, headline "YogaFlex to Shape your body" (YOGAFLEX blue,
  rest dark) + blue "Become a Member" button; white about section below with
  centered title + gray paragraph. Minimalist, airy, professional; flat
  square blue buttons. Demo copy is placeholder lorem — paraphrase into
  yoga/fitness copy.
- **Visual design (from DOM + CSS tokens + screenshot):** brand accent blue
  `#0093df` (buttons, hero span, footer phone, testimonial active dot);
  secondary `#38a4ff`/`#4cd3e3`; utility palette `#f4e700`/`#f44a40` (not in
  home sections); headings `#222222`, body `#777777`; light bands `#f9f9ff`
  (schedule + testimonial cards) alternating with white; footer black
  `#000000`. Roboto body font. `.primary-btn`: `#0093df` bg, square (no
  radius), line-height 42px, padding 0 30px, 14px/500 white text, shadow
  `-10px 10px 20px rgba(0,0,0,0.1)`, hover slides inner arrow right; `.white`
  variant = transparent + white border, hover inverts. `.section-gap` 120px
  vertical rhythm. Section titles: h1 weight 100, p max-width 492px centered.
- **Structure (1:1, section order):**
  1. `.header-top` — dark strip: phone "+880 1234 654 953" + "Book Now"
     (hidden @992).
  2. `#header` fixed + `.main-menu` — logo (→ Vinyasa uppercase wordmark) +
     nav Home, About, Trainers, Blog (dropdown Blog Home/Blog Single), Pages
     (dropdown Schedule/Courses/Elements), Contact.
  3. `section.banner-area.relative` — photo hero: small uppercase label +
     h1 "to Shape your body" (span in `#0093df`) + "Become a Member" button;
     right `.banner-img` pose photo (hidden @767).
  4. `section.about-area.section-gap` — title "How Vinyasa can change your
     life" + centered p; two columns: `.about-right` 2×2 `.single-about`
     cards (Why Choose Us, Our Properties, Legal Notice — source repeats
     "Legal Notice" 4th; use "Our Programs" instead) + image column
     (about-img.png).
  5. `section.feature-area.section-gap` — "Our Featured Classes": FOUR
     `.single-feature` 2-col cards (photo + overlay, h4 "Get into shape
     now", link "Book an appointment").
  6. `section.schedule-area.section-gap` (bg `#f9f9ff`) — "Schedule your
     Fitness Process": centered table Course name + Mon–Fri; rows Fitness
     Aero 02.00 10.00 02.00 02.00 10.00 / Senior Fitness same (source
     repeats both 3× — use ~4-6 distinct rows); th.head uppercase 700
     `#222222`; row hover → white + shadow `0px 20px 50px
rgba(153,153,153,0.2)`; overflow-x scroll @768.
  7. `section.testomial-area.section-gap` — "Client's Feedback": owl carousel
     `.single-testimonial` (rounded avatar, quote, h4 name, role) on
     `#f9f9ff` cards; 10px dots `rgba(127,127,127,0.5)`, active `#0093df`.
  8. `section.cta-one-area.relative.section-gap` — photo CTA band
     (cta-bg.jpg cover, text-center): "Become a Member" headline + p +
     button.
  9. `section.blog-area.section-gap` — "Our Recent Blogs": THREE
     `.single-blog` 3-col cards (thumb, h4 title link, excerpt, meta row:
     calendar date / heart count / bubble comments count).
  10. `footer.footer-area.section-gap` (bg `#000000`) — About Us blurb,
      Contact Us (address + 2 phones, `.number` `#0093df`), Newsletter blurb
      - email form, copyright → "© 2026 Vinyasa. All rights reserved." +
        "More templates at Component Dock" (https://www.componentdock.com/).

## Implementation tasks

1. Scaffold `apps/vinyasa` from the simplest existing app; rename package to
   `@free-react-templates/vinyasa`; `npm install` at root for the lockfile;
   `public/CNAME` = `vinyasa.free.componentdock.com`; homepage in package.json.
2. `src/index.css` — `@theme` tokens: `--color-brand: #0093df`, `--color-ink:
#222222`, `--color-muted: #777777`, light band `--color-mist: #f9f9ff`,
   footer black `#000000`; Roboto Google Fonts `<link>` in index.html.
3. Components (one per section, matching conventions): `TopBar` (phone +
   Book Now), `Navbar` (fixed header, brand + dropdowns, mobile menu with
   aria-expanded), `Hero` (photo bg, label, blue-span headline, CTA, pose
   image), `About` (2×2 cards + image), `FeaturedClasses` (4 cards),
   `ScheduleTable` (Mon–Fri rows + hover), `Testimonials` (carousel, dots,
   round avatars), `CtaBand`, `Blog` (3 cards), `Footer` (About / Contact /
   Newsletter + Component Dock link).
4. TDD: spec scenarios → tests → implementation; 100% coverage.
5. Placeholder images: `https://picsum.photos/seed/vinyasa-<n>/<w>/<h>` (hero
   bg + pose, about, class ×4, avatars ×2-3, blog ×3, CTA band). Verify
   hero/CTA seed subjects visually (yoga/fitness/wellness vibe) before
   pinning — see seed-screening notes in the replication skill.
6. Gate: `scripts/verify-app.sh vinyasa` (typecheck + lint + 100% coverage
   tests + build).
7. PR + immediate squash merge; then bookkeeping: BOTH "Yogaflex" rows
   (lines 542, 1891) `[x]` + surge URL, `npm run readme:status`.
