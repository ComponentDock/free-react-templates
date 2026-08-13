# Dossier (ColorLib Jackco) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-dossier`.

## Source mapping

- **ColorLib item:** "Jackco" (TEMPLATES.md line 593).
- **Source URL:** https://colorlib.com/wp/template/jackco/
- **Preview URL:** https://preview.colorlib.com/theme/jackco/ — **HTTP 200,
  live** (confirmed 2026-08-13, ~32 KB HTML, `<title>Resume |
Template</title>`). The TEMPLATES.md slug works on the preview portal —
  no slug lookup needed.
- **Preview CSS:** https://preview.colorlib.com/theme/jackco/assets/css/style.css
  (~61 KB) — also imports bootstrap.min, fontawesome-all, animate,
  magnific-popup, nice-select, owl.carousel, slick, slicknav, themify-icons.
  Site is jQuery + Bootstrap 4 + owl-carousel + slick + slicknav — NOT
  Tailwind. All section backgrounds are plain CSS (no data-setbg pattern).

## Reference research (done — do not redo)

### Screenshot (`jackco-colorlib-template.jpg`)

Matches the live template: green hero with a portrait right and big serif
"Visual Design & Art Director" + outlined "Hire Me" left; floating white
About card over a desk photo (green "ABOUT MYSELF" label, serif bio, solid
green "Download Resume", green progress bars User Research/UI/Web/
Illustration); green "My Expertise" block; list rows for Experience and
Education; green split quote band; green footer with "Drop a Line" form,
"Contact Me" details, social circles. The live preview DOM + parsed
stylesheet are the authoritative reference.

### Live DOM (primary reference — section order verified against fetched HTML + parsed CSS)

1. **Header** `header-area.header-transparent` / `main-header.header-sticky`
   (border-bottom 1px rgba(21,3,3,0.2), padding 0 88px): text brand
   "DOSSIER"; nav Home (active) / About / Portfolio / Blog (submenu: Blog,
   Blog Details, Elements) / Contact; `a.header-btn` "Fire me an Email" —
   Shippori Mincho 20px `#150303` underline (text-link CTA, not a pill).
   Mobile: slicknav → client-side hamburger.
2. **Hero** `section.slider-area.gray-bg` > `single-slider.slider-height`
   (height 900px, bg `#5AFF80`): h1 "Visual Design & Art Director" (serif) +
   p "Hi, I am Jack, focusing on creating emotional experiences." +
   `a.border-btn.hero-btn` "Hire Me" (padding 20px 70px, outlined); portrait
   right (picsum seed). Single slide — no carousel needed.
3. **About** `section.about-area.section-padding.section-img-bg2` (cover bg
   photo) > `div.about-wrappper` (bg #fff, padding 100px): label "ABOUT
   MYSELF" (small, green, uppercase); h2 serif 40px bio ("I'm a Creative
   director based on New York, who loves clean, simple & unique design. I
   also enjoy crafting.."); `a.btn_02.mb-10` "Download Resume" (solid
   `#01FF56`, ink text, uppercase, padding 16px 44px); 4 × `single-skill`
   progress bars (mb 25px) — USER REACHERS (→ "USER RESEARCH", source typo),
   UI DESIGN, WEB DESIGN, ILLUSTRATION + percentages; filler paragraph.
4. **My Expertise** `section.experience-top.section-padding` > section-tittle
   "My Expertise" (h2 serif 40px/400, centered, mb-45) + `div.experience`
   (bg `#01FF56`, padding 60px 65px 20px): 3 columns — "User Experience
   Design", "User Interface Design", "Web Design" + descriptive paragraphs.
5. **Experience** `section.may-about.bottom-padding` > section-tittle
   section-tittle2 mb-40 "Experience" + 4 × `div.single-about` (border-top
   1px solid `#E2E2E2`): `tittle-experience` h4 (User Experience Designer /
   UI Designer / Illustration Artiest → "Illustration Artist" / Graphic
   Designer); `experience-link` p (`#928888` 20px) "March 2020 - Present" +
   "at Colorlib" + external-link icon (→ lucide ExternalLink; invent studio
   names); filler paragraph.
6. **Quote band** `div.visit-tailor-area.fix` (flex, bg `#01FF56`): left
   `visit-team` cover photo (visit.jpg → picsum working person); right serif
   quote "I help creative entrepreneurs build better businesses, maximize
   productivity, and cultivate an engaged community."
7. **Education** `section.may-about.section-padding` > "Education" + 2 ×
   single-about: "User Experience Designer" (at Dalian University), "UI
   Designer" (at School of California).
8. **Instagram** `div.instagram-area.fix` > `instagram-active.owl-carousel`
   > 5-6 `single-instagram` squares (hover: `#150303` overlay + icon →
   > lucide Instagram; plain responsive row is fine).
9. **Footer** `div.footer-wrappr.footer-padding` (bg `#01FF56`) >
   `footer-top`: left serif bio ("I'm a designer, based in San Francisco.
   Currently a freelancer…" — paraphrase); section-tittle h4 "DROP A LINE"
   - form (Your name / Email / Subject / Message + "Send Message" dark
     button; inputs bg `#f9f9ff` height ~50px); `footer-tittle` h4 "CONTACT
     ME" (Chivo 20px `#150303` uppercase) + address "4657 Franklin Avenue,
     ARCH CAPE" / phone "+361-883-3218" / email "hello@jac-co.com"
     (paraphrase); `a.border-btn` "Download Resume" (2nd copy); `footer-social
pt-30` circular FB/IG/LinkedIn (lucide); `footer-bottom-area` copyright →
     "© 2026 Dossier · All rights reserved" + **"Made with Component Dock" →
     https://www.componentdock.com/** (mandatory, replaces ColorLib
     attribution); `a#back-top` "Go to Top" (optional).

### Design tokens (extracted from `assets/css/style.css`)

- brand-green `#01FF56` (experience block, quote band, footer bg, solid
  button), hero-green `#5AFF80` (hero bg), ink `#150303` (text/borders),
  light `#f9f9ff` (input bg), muted `#656565` (section subtitle p),
  date-grey `#928888` (experience-link p), divider `#E2E2E2` (single-about
  border-top), link-blue `#2845ba` + purple-ink `#415094` (hover accents).
- Fonts: headings "Shippori Mincho" serif (section-tittle h2 40px/400/1.3,
  hero h1, header-btn), body "Chivo" sans (nav, copy, footer-tittle h4 20px
  uppercase). Google Fonts `<link>` in index.html.
- Buttons square (no radius): solid green btn_02 (padding 16px 44px,
  uppercase) / outlined border-btn (1px solid ink, padding 15px 34px,
  uppercase) / hero-btn (padding 20px 70px). Form submit = dark ink button,
  white text.
- Spacing: header padding 0 88px; hero 900px; about-wrappper padding 100px;
  experience padding 60px 65px 20px; single-skill mb 25px; single-about
  border-top dividers; container ~1200px.

## Source quirks (fix during implementation)

- "User Reachers" → "User Research" (typo).
- "Illustration Artiest" → "Illustration Artist" (typo).
- All "Proin laoreet elementum…" paragraphs are Latin filler → paraphrase
  to real copy of the same kind/length.
- "at Colorlib" company links → invent placeholder studio names.
- Single-slide owl-carousel hero and instagram carousel → plain responsive
  layouts (no carousel dependency).
- Footer attribution "made with ❤ by ColorLib" → replaced by the mandatory
  Component Dock link.

## Implementation task order (TDD)

1. Scaffold: copy the simplest existing app, rename to
   `@free-react-templates/dossier`, CNAME `dossier.free.componentdock.com`,
   `npm install` at root (lockfile), Google Fonts links (Chivo + Shippori
   Mincho), `injectUiSource()` in vite.config.ts (copy from an existing
   app — never use relative `@source`).
2. `src/index.css` `@theme` tokens per spec table; base styles (ink text,
   Chivo body).
3. Components (one file per section, colocated tests, 100% coverage):
   - `Navbar.tsx` — brand, 5 links + active state, Fire me an Email CTA,
     mobile hamburger (aria-expanded, close control).
   - `Hero.tsx` — #5AFF80 bg, serif h1, sub-line, Hire Me outline button,
     portrait (picsum seed dossier-1).
   - `About.tsx` — cover bg photo, white card, label, serif bio, Download
     Resume solid button, 4 progress bars with % values.
   - `Expertise.tsx` — centered title + #01FF56 block, 3 disciplines +
     copy.
   - `Experience.tsx` — 4 rows (title, date/company + ExternalLink, blurb),
     #E2E2E2 top-border dividers.
   - `QuoteBand.tsx` — green band, photo left, serif quote right.
   - `Education.tsx` — 2 rows, same pattern as Experience.
   - `InstagramStrip.tsx` — 6 square tiles, dark hover overlay + icon.
   - `Footer.tsx` — serif bio, Drop a Line form (zod validation, per-field
     errors, success state), Contact Me list, 2nd Download Resume, social
     icons, copyright + Component Dock link (footer MUST link
     https://www.componentdock.com/).
   - `BackToTop.tsx` (optional) — Go to Top link.
4. `App.tsx` — compose sections in source order (header → hero → about →
   expertise → experience → quote band → education → instagram → footer).
5. Gate: `scripts/verify-app.sh dossier` (typecheck + lint + knip + fallow +
   100% coverage vitest + build). PR + immediate squash merge per
   CRONJOB.md.
