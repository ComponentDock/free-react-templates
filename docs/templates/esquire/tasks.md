# Esquire (ColorLib Lawyer) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-esquire`.

## Source mapping

- **ColorLib item:** "Lawyer" (TEMPLATES.md — appears 2×: lines 435, 2126;
  both rows point to the same source, one prep covers all; verified with
  `grep -c 'wp/template/lawyer/'` = 2).
- **Source URL:** https://colorlib.com/wp/template/lawyer/
- **Preview URL:** https://preview.colorlib.com/theme/lawyer/ — **HTTP 200,
  live** (confirmed 2026-08-11, ~27.5 KB HTML). Do not redo this lookup.
- **Preview CSS:** https://preview.colorlib.com/theme/lawyer/css/style.css
  (~134 KB) — also imports bootstrap.min.css, owl.carousel.min.css,
  magnific-popup.css, font-awesome.min.css, themify-icons.css,
  nice-select.css, flaticon.css, gijgo.css (datepicker), slicknav.css
  (mobile menu). Site is jQuery + owl-carousel + slicknav + gijgo — NOT
  Tailwind.

## Reference research (done — do not redo)

### Screenshot (`lawyer-free-template.jpg`, 1200×946)

Matches the live template: dark header/hero, serif white headline "High
Quality Law Advice And Support" with the suited-man photo on the right,
gold-bordered transparent "Learn More" button, cream lower sections with the
gold 93% stat. The live preview DOM + parsed stylesheet are the authoritative
reference; the screenshot confirms the same design.

### Live DOM (primary reference — section order verified against fetched HTML + parsed CSS)

1. **Header** `<header>` — `div.header-area` bg `#000`, sticky, z-index 999 >
   `div#sticky-header.main-header-area` padding 0 50px.
   - `div.logo-img` (col-xl-2) > `a > img` (logo.png → recreate as bold text
     brand "ESQUIRE", white/gold).
   - `div.main-menu.d-none.d-lg-block` (col-xl-7) > `nav > ul#navigation`:
     "home" (`a.active`), About, Practice Area, "blog" (`i.ti-angle-down` +
     `ul.submenu`: blog, single-blog), "pages" (submenu). Gold accent on
     active/hover.
   - `div.social_media_links` (col-xl-3, d-none d-lg-block) — `ul > li > a`:
     40×40 circles bg `#171717`, icons `#8B8B8B` (fa-facebook /
     fa-twitter / fa-instagram).
   - `div.mobile_menu.d-block.d-lg-none` — slicknav hamburger (client-side
     state).
2. **Hero** `div.slider_area` (bg `#000`, padding 0 50px) >
   `div.slider_area_inner.slider_bg_1.d-flex.align-items-center` (bg image
   banner.png — dark lawyer photo, right-weighted) > container > col-xl-7 >
   `div.slider_text`:
   - `h3` "High Quality Law Advice and Support" — white, Playfair Display
     serif, 56px/68px, weight 400, capitalize (25px mobile).
   - `p` "Leading Polish Lawyer in your city" — 26px, `#C7C7C7`, mt 16px,
     mb 50px, line-height 32px.
   - `a.boxed-btn4` "Learn More" — transparent, 1px solid `#F2C64D` border,
     gold text, padding 15px 44px, Poppins 16px 600, capitalize; hover: gold
     bg + white text.
3. **About** `div.about_area` (bg `#FFFDF8`, padding 150px/120px, margin
   0 50px) + `div.opacity_icon` (faint flaticon-balance watermark,
   d-none d-lg-block). Two `col-xl-6` `single_about_info.text-center`:
   - Left: `about_thumb` img (about/1.png) + `h3` "Finest And Strongest Law
     Firm Win The World" (36px/48px 400, mt 27px mb 13px) + ipsum `p` +
     `div.signature` img (signature.png).
   - Right: `about_thumb > image_hover > hover_inner`: `h2` "93%" (70px
     Poppins 500 white) + `span` "Success Case"; `h3` "About Lawyer Justice"
     - ipsum `p` + `div.total_cases`: 2 × `div.single_cases` (inline-block,
       margin 0 25px): `h4` 879 / 787 (36px Poppins 500 `#CEA159`) + `p`
       "Total Cases" / "Case Won" (14px `#919191`).
4. **Practice** `div.practice_area` (bg `#FFFDF8`, padding 150px/120px,
   padding-left 45.5px, right 40.5px):
   - `div.section_title.text-center.mb-60`: `h3` "Practice Area" (42px/48px
     700 `#1F1F1F`; 22px mobile) + `p` (16px `#727272`).
   - `div.row.no-gutters`: 4 × `col-xl-3.col-md-6` `div.single_practice`:
     `practice_image` img (practice/1–4.png) + `practice_hover.text-center`
     (absolute inset 0, bg `rgba(31,31,31,0.9)`, shown on hover) >
     `hover_inner`: flaticon icon (case/courthouse/judge/jury) + `h3`
     Business Law / Finance Law / Family Law / Education Law (24px Poppins
     white, mt 10px mb 20px) + ipsum `p` + `a.lern_more` "Learn More" (gold
     `#F2C64D`, opacity 0 → 1 on hover).
5. **Our Lawyers** `div.our_loyers` — `section_title.text-center.mb-60`:
   `h3` "Our Lawyers" + `p`; `div.row`: 3 × `col-xl-4` `div.single_loyers.text-center`:
   `thumb` img (lawyers/1–3.png) + `h3` Henry Miller / Jon Anderson / Jaky
   Nadan (24px 700 `#1F1F1F`, mt 26px mb 6px) + `span` Family Lawyer /
   Consumer Lawyer / Criminal Lawyer (16px `#727272`, block, mb 18px) +
   `div.social_links` `ul`: 3 × `li > a` (35×35, gold `#F2C64D` icon, bg
   `#FEF7E7`, border-radius 10px).
6. **Testimonial** `div.testmonial_area.testmonial_bg_1.overlay2` (bg image
   testmonial_bg.png, padding 135px 0, cover) > `div.testmonial_active.owl-carousel`:
   3 × `div.single_testmonial.text-center`: `i.flaticon-straight-quotes`
   (white 47px) + `p` (white 22px/34px, mt 33px mb 44px; ipsum — vary per
   slide) + `div.author_info.d-flex.justify-content-center.align-items-center`:
   `thumb` img (smaill_thumb.png) + `span` "- Millan Mirza".
7. **Appointment** `div.appointment_area` (padding-top 150px) >
   `div.row.align-items-center`:
   - `col-xl-5` `div.appiontment_thumb.d-none.d-lg-block` img
     (appointment/1.png).
   - `col-xl-6.offset-xl-1` `div.appointment_info`: `opacity_icon`
     flaticon-balance + `h3` "Make an Appointment" + ipsum `p` + `form`:
     `col-xl-6` × 2: input "Your Name", input[type=email] "Your Email",
     input "Phone no.", `input#datepicker` "Appointment date" (gijgo →
     native date input); `col-xl-12`: textarea "Message"; `col-xl-12` >
     `div.appoinment_button` > `button.boxed-btn5[type=submit]` "Submit"
     (bg `#F2C64D`, white, padding 15px 44px, Poppins 16px 600, border 0,
     width 100%).
   - Inputs: width 100%, height 40px, border none, border-bottom 1px solid
     `#C7C7C7`, mb 26px, pb 7px; placeholder 16px `#919191`.
8. **Footer** `<footer class="footer">` bg `#202020` > `div.footer_top`
   (padding 120px 0):
   - Widget 1 (col-xl-4 col-lg-3): `footer_logo` (mb 43px) + `p.footer_text`:
     "200, A-block, Green road, USA" / "+10 367 267 2678" / `a.domain`
     "lawyer@contact.com" + `socail_links` (fb/tw/ig).
   - Widget 2 (col-xl-2): `h3.footer_title` "Practice Area" (18px 500 white
     Poppins, mb 40px) + `ul > li > a` (14px `#C7C7C7`, line-height 42px,
     hover gold): Business law, Finance law, Education law, Family law.
   - Widget 3 (col-xl-2): `h3.footer_title` "Useful Links" + ul: About,
     Blog, Contact.
   - Widget 4 (col-xl-4 col-lg-4): `h3.footer_title` "Subscribe" +
     `form.newsletter_form` (position relative, mb 20px): input "Enter your
     mail" (width 100%, height 45px, bg #fff, pl 20px, font-size 14px,
     placeholder `#C7C7C7`) + `button[type=submit]` "Sign Up" (absolute top
     0 right 0, height 100%, white 14px, bg `#F2C64D`) + `p.newsletter_text`
     "Subscribe newsletter to get updates".
   - `copy-right_text` > `footer_border` (pb 30px) + `p.copy_right.text-center`
     (14px `#C7C7C7`): "Copyright © <year> All rights reserved | This
     template is made with <heart> by Colorlib".

## Design tokens (from style.css — computed)

| Token        | Value                 | Usage                                                                                     |
| ------------ | --------------------- | ----------------------------------------------------------------------------------------- |
| brand-gold   | `#F2C64D`             | button borders/fills, lern_more links, lawyer social icons, footer link hover, active nav |
| gold-deep    | `#CEA159`             | about stat counters (879 / 787)                                                           |
| ink          | `#1F1F1F`             | section titles, headings, lawyer names                                                    |
| hero-black   | `#000`                | header-area bg, slider_area bg                                                            |
| footer-bg    | `#202020`             | footer background                                                                         |
| warm-bg      | `#FFFDF8`             | about + practice section backgrounds                                                      |
| social-chip  | `#171717` / `#8B8B8B` | header social circle bg / icon color                                                      |
| cream-chip   | `#FEF7E7`             | lawyer social chip bg                                                                     |
| overlay-dark | `rgba(31,31,31,0.9)`  | practice card hover overlay                                                               |
| hero-sub     | `#C7C7C7`             | hero tagline, form bottom borders, footer links, copyright                                |
| section-sub  | `#727272`             | section_title p, lawyer role spans                                                        |
| placeholder  | `#919191`             | form placeholders, case-count labels                                                      |
| paper        | `#ffffff`             | white text on dark sections, newsletter input bg                                          |
| font-heading | "Playfair Display"    | hero h3 (56px/68px 400 serif)                                                             |
| font-body    | "Poppins"             | everything else                                                                           |

Radii: 10px ONLY on lawyer social chips (35×35); everything else square.
Spacing: header/slider padding 0 50px; about 150/120 + margin 0 50px; practice
150/120 + lr 40–45px; section title 42px/48px mb 60; buttons 15px 44px 600;
testimonial p 22px/34px; form inputs 40px border-bottom only; footer_top 120px,
links 14px/42px line-height; newsletter input 45px.

## Implementation task outline

1. Scaffold `apps/esquire` (copy the simplest existing app, rename package to
   `@free-react-templates/esquire`), `npm install` at root (lockfile!),
   `injectUiSource()` in vite.config.ts, Playfair Display (400) + Poppins
   (400/500/600/700) Google Fonts `<link>` in index.html.
2. `src/index.css` — `@theme` tokens: `--color-brand: #F2C64D`,
   `--color-gold-deep: #CEA159`, `--color-ink: #1F1F1F`, `--color-hero:
#000`, `--color-footer: #202020`, `--color-warm: #FFFDF8`,
   `--color-cream-chip: #FEF7E7`, `--color-hero-sub: #C7C7C7`,
   `--color-section-sub: #727272`, `--color-placeholder: #919191`,
   `--font-heading: "Playfair Display", serif`, `--font-body: "Poppins",
sans-serif`.
3. Components: `Navbar` (brand text, 5 links + 2 dropdowns, circular social
   chips, mobile hamburger), `Hero` (dark banner bg, serif headline, tagline,
   outlined gold CTA that inverts on hover), `About` (2 centered columns,
   signature image, 93% hover stat, bronze counters), `PracticeArea` (4-across
   grid, dark overlay on hover with icon + title + copy + gold Learn More),
   `Lawyers` (3 cards, gold/cream 10px social chips), `Testimonials` (bg-image
   section, client-side carousel: 3 quotes, arrows, dots), `Appointment`
   (photo + form: 4 fields + textarea, border-bottom inputs, full-width gold
   Submit), `Footer` (contact block, 2 link columns, subscribe form,
   copyright).
4. Testimonials carousel: state-based slides, prev/next + dot indicators, no
   owl-carousel dependency.
5. Appointment form: zod validation (name, email, phone, date, message),
   block submit until valid, success message swaps the form (inputs unmount →
   assert `queryByLabelText`/`queryByRole` absence after submit).
6. Subscribe form: email validation + success swap (same pattern).
7. Mobile menu: state-based open/close, Escape/close control, focus handling.
8. Practice card hover overlay: reveal via group-hover (opacity/visibility
   transition); gold Learn More link appears.
9. Tests per section (scenario-style `it` blocks mirroring the spec Gherkin),
   100% coverage; `npm run verify:app -- esquire`.
10. PR: `feat: implement Esquire (ColorLib Lawyer)`, description must list
    source template, preview URL, tokens, and renames/placeholder decisions.

## Fidelity notes

- Gold `#F2C64D` is the single brand accent — outlined hero CTA (inverts to
  solid on hover), full-width gold Submit/Sign Up buttons, practice "Learn
  More" links, lawyer social chips, footer link hovers. Do NOT soften it.
- SECOND gold tone: `#CEA159` (bronze) is used ONLY for the 879/787 stat
  counters — keep the two golds distinct.
- ALL corners square except the lawyer social chips (35×35, radius 10px).
  Buttons get their shape from 44px horizontal padding, not radius.
- Header + hero are `#000`; about + practice are `#FFFDF8` (warm cream);
  footer is `#202020`. Testimonial is a full-bleed background image with
  white text and an `overlay2` darkening — do not render it on a flat color.
- Form inputs are borderless with ONLY a 1px `#C7C7C7` bottom border
  (40px height, 26px bottom margin) — recreate exactly; do not add boxed
  inputs.
- Appointment section uses a large faint `opacity_icon` balance-scale
  watermark (d-none d-lg-block) — include as a decorative element if easy,
  else the flaticon can be paraphrased with a lucide Scale icon at low
  opacity. Same watermark sits at the top of the about area.
- The hero has ONE slide in the source (despite the slider_area wrapper) —
  do not invent a carousel there; the owl-carousel is the TESTIMONIAL section.
- "Leading Polish Lawyer in your city" — keep the "Polish" reference or
  localize to "Leading Lawyer in your city" (paraphrase is fine, same kind
  of content).
- Header social chips are `#171717` circles (40px) with `#8B8B8B` icons —
  visually different from the lawyer-section chips (`#FEF7E7` bg, gold icon,
  10px radius). Keep both variants.
- lucide-react removed brand icons → inline SVG brand icons (simple-icons
  paths) for Facebook/Twitter/Instagram. Flaticons → lucide: balance →
  Scale, case → Briefcase, courthouse → Landmark, judge → Gavel (or Users),
  jury → Users, straight-quotes → Quote.
- "Esquire" brand replaces "Lawyer" everywhere (logo, footer). Footer "made
  with <heart> by Colorlib" credit → original attribution.
- All images: `https://picsum.photos/seed/esquire-<n>/<w>/<h>` — suggested
  seed map: about left esquire-1 (520×520), about right esquire-2 (520×520),
  practice esquire-3..6 (420×420), lawyers esquire-7..9 (400×460),
  testimonial thumb esquire-10 (80×80), appointment esquire-11 (520×460),
  hero banner esquire-12 (1600×900 — dark-filtered via overlay).
