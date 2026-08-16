# Jolt (ColorLib Action) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-jolt`.

## Design notes (replication findings)

- **Original:** ColorLib "Action" — a free Bootstrap 5 one-page event /
  startup landing (source: https://colorlib.com/wp/template/action/).
  TEMPLATES.md has TWO copies (lines 549 and 881 — same slug/URL; bookkeep
  BOTH `[x]` with the same surge URL when done). This prep: Action →
  **Jolt** (a sudden burst of energy — fits the event-countdown + startup
  theme; no collision with `apps/`, `openspec/specs/`, `docs/templates/` —
  verified 2026-08-16).
- **Preview DOM analyzed (LIVE, fetched via curl AND browser-verified):**
  `https://preview.colorlib.com/theme/action/` (HTTP 200, 23,478 bytes,
  `<title>Action &mdash; Free Bootstrap 5 Website Template by
Colorlib</title>`). Stylesheets: `fonts/icomoon/style.css` (icon font),
  `css/tiny-slider.css`, `css/aos.css`, `css/style.css` (Bootstrap
  5.0.0-beta1 + custom rules, ~59 KB). Libs: aos.js, bootstrap.bundle.min.js,
  custom.js, navbar.js, tiny-slider.js. Google Fonts via inline cf-fonts
  `@font-face`: **Jost (400/600/700)** — the ONLY font used.
- **CURL QUIRK (documented for future preps):** fetching `css/style.css`
  with a plain curl UA returns the icomoon icon sheet (79,820 bytes —
  byte-identical to `fonts/icomoon/style.css`; a server/edge mis-serve).
  Fetching with a browser UA + `Accept: text/css` returns the real
  59,342-byte Bootstrap+custom stylesheet. Always send a browser UA when
  token-hunting and verify the file starts with the expected content
  (here: `/*! Bootstrap v5.0.0-beta1 ... */`).
- **HEADING TYPO (documented — reproduce faithfully):** the hero `<h1>` is
  **"New template Boostrap Five"** (misspelled "Boostrap" — live DOM AND the
  TEMPLATES.md screenshot `action-free-template.jpg` both show it). Spec
  mandates the reference text — do NOT silently "fix" the spelling; mention
  the typo in the PR description.
- **Screenshot:** `action-free-template.jpg` (viewed in browser) — dark
  autumn-leaves hero, white "New template Boostrap Five" over it,
  "A FREE TEMPLATE BY COLORLIB" sub-line, pill "READ MORE" button; below:
  black countdown strip (39 days / 27 hours / 51 minutes / 51 seconds);
  light-gray services with 4 purple line icons; black pricing with 3 solid
  purple cards; dark desert-image "More Features" with 3 dark cards; white
  testimonial box overlapping; dark team; light-gray newsletter form; dark
  footer with social icons. NO variance between screenshot and live DOM.
- **Design rhythm:** high-contrast dark/light alternation — BLACK sections
  (hero image, countdown, pricing, features-over-image, testimonials/team,
  footer) alternate with LIGHT-GRAY `#efefef` sections (services/about,
  newsletter). Signature accent: purple→pink gradient `#743ad5` → `#d53a9d`
  on pill buttons (black 2px inset fades on hover) and as the solid
  `#743ad5` pricing-card background. All buttons pill-shaped; headings huge
  (90px hero, 80px sections).
- **Buttons (3 variants):**
  - `.btn-primary-gradient` (Read More / Get Started / Read bio): pill
    `border-radius: 100px`, `padding: 17px 28px`, `font-size: 12px`,
    uppercase, `letter-spacing: .2rem`, bold, white, no border; gradient bg
    `#743ad5`→`#d53a9d` with a black 2px inset (`:after`) that fades to
    `opacity: 0` on hover revealing the full gradient.
  - `.btn-primary-outline.white` (pricing Buy): `padding: 7px 30px`,
    `border-radius: 30px`, `border: 1px solid rgba(255,255,255,.2)`, white
    text; hover → white bg + `#743ad5` text.
  - `.btn-black` (newsletter Subscribe): `background: #222`, `border: 2px
solid transparent`, `border-radius: 30px`, white, `padding: 14px 30px`;
    hover → transparent bg, black border/text.
- **Headings:** `.heading-2` (hero h1) 90px/700/`line-height: 1` (60px
  <992px); section `h2.heading` 80px/700 (live computed); `.subheading`
  11px uppercase `letter-spacing: .1rem` 700. Body `#212529` on light;
  white headings on dark; `rgba(255,255,255,.5)` muted body on dark;
  `rgba(255,255,255,.3)` counter labels + team positions.
- **Counters:** `.counter .number` 90px white (40px <768px); labels 12px
  uppercase `letter-spacing: .2rem` `rgba(255,255,255,.3)`; values in the
  source DOM: 39 Days / 27 Hours / 51 Minutes / 51 Seconds; `.custom-alert`
  ("We are sorry, Event ended!") is `display: none` by default.
- **Services icons:** inline Bootstrap Icons SVGs (`bi-camera`, `bi-gear`,
  `bi-image`, `bi-layers`, `fill="currentColor"`, 1em) — map to lucide
  `Camera`, `Settings`, `Image`, `Layers`, purple-colored.
- **Overlaps:** section-3 `.box-white` `margin-bottom: -50px` (about box
  overlaps into the black pricing section); `.img-overlap` `margin-top:
-100px` (collapses <992px); section-6 `.box-white` `margin-top: -200px`
  (testimonial box overlaps up into the features section), `padding: 50px`;
  `.features-wrap` `margin-bottom: 12rem`.
- **Pricing cards:** solid `#743ad5` bg, `border-radius: 7px`, `padding:
40px`, centered; h3 30px white; p `rgba(255,255,255,.5)`; `.line` divider
  `margin-top: 40px`; price rendered as `.currency` `$` + `.price` int +
  `.cents` `.99` ($49.99 / $199.99 / $975.99); Buy =
  `.btn.btn-primary-outline.white.px-5`.
- **Features dark cards:** `.feature.dark` — `#222` box, h3 white
  `font-weight: 400`, p `rgba(255,255,255,.5)`; section bg image
  `bg_hero_2.jpg` (desert) + `rgba(0,0,0,.4)` overlay.
- **Testimonials:** tiny-slider carousel, 3 slides (Jessica Smith / Craig
  Norton / Jessica Smith — all "Product Marketer @Google"), `.bio-pic img`
  80px `border-radius: 50%`, pagination dots. Recreate with a simple
  accessible carousel (or tabbed slides) — tiny-slider itself is a lib
  dependency to avoid.
- **Team:** 2 cards — Jessica Green (CEO, Co-Founder), Jon Gold (CTO,
  Co-Founder); photo, h3 30px white, `.position` `rgba(255,255,255,.3)`,
  bio `rgba(255,255,255,.5)`, "Read bio" pill gradient button.
- **Newsletter form:** `.form-contact .form-control` transparent bg, NO
  border, `border-bottom: 1px solid #ccc`, `border-radius: 0`; focus →
  `border-color: #ba9dea` + `rgba(116,58,213,.25)` ring; `.form-group`
  `margin-bottom: 30px`; 3 columns on md+ (name / email / Subscribe
  `btn-black btn-block`).
- **Footer:** `.section.footer` dark; centered social list
  (`icon-facebook` / `icon-twitter` / `icon-linkedin` / `icon-dribbble` →
  lucide Facebook / Twitter / Linkedin / Dribbble); copyright
  "Copyright © <year> All rights reserved | This template is made with ❤ by
  Colorlib" → recreation replaces the Colorlib credit with the mandatory
  Component Dock link (NO ColorLib reference in app code).
- **Preloader (optional):** `#overlayer` (white fixed overlay) + `.loader`
  spinner-border "Loading..." — a brief page-load spinner; the recreation
  may include a simple equivalent or omit it (note in PR if omitted).
- **Images (all replaced with picsum placeholders):** `bg_hero.jpg` (dark
  autumn leaves — hero), `bg_hero_2.jpg` (desert — section-5),
  `person_1.jpg` / `person_2.jpg` (team + testimonial bio pics).
- **Mobile behavior:** Bootstrap responsive grid (`col-lg-*`,
  `col-md-6 col-lg-4 col-xl-3` services, `col-sm-4` newsletter); heading-2
  60px <992px; counters 40px <768px; `.img-overlap` margin auto <992px;
  navbar collapses to a slide-in mobile menu.

## Structure order (1:1)

1. Navbar (`site-navigation`): brand **Jolt**; links Home / Services /
   About / Contact Us (source also has a "Dropdown" item with Menu One /
   Two / Three + submenus — may simplify to the four top-level links);
   collapses to mobile menu below lg.
2. Hero `.hero v-h-full overlay`: bg image + `rgba(0,0,0,.4)` overlay; h1
   `heading-2` **"New template Boostrap Five"** (typo, as-is); sub-line "A
   free template by Colorlib"; pill "Read More".
3. Section-2 (BLACK): subheading "Don't wait"; h2 "Event Countdown"; 4
   counters (39 Days / 27 Hours / 51 Minutes / 51 Seconds); hidden alert
   "We are sorry, Event ended!"; pill "Get Started".
4. Section-3 (`#efefef`): subheading "Services"; h2 "Our Services"; 4
   feature cards (Photography / Settings / Images / Layered); then
   `.box-white` overlap: image + "Who we are" / "About us" / 2 paragraphs /
   "Get Started".
5. Section-4 pricing (BLACK): "Prices for everyone" / "Pricing"; 3 purple
   cards (Starter $49.99 / Basic $199.99 / Premium $975.99) with "Buy".
6. Section-5 `bg-image overlay` (desert + overlay): "Features" /
   "More Features" + paragraph; 3 dark cards (Creative / Design /
   Development).
7. Section-6 (BLACK, `half-overlay`): `.box-white` testimonial carousel —
   "Testimonials" / "People Says..." + 3 slides + dots; then "Team" /
   "Meet our team" + 2 team cards.
8. Section-contact (`#efefef`): "Subscribe to Newsletter" + paragraph;
   underline form (Your name / Your email / Subscribe `btn-black`).
9. Footer (dark): 4 social icons; copyright; Component Dock link.
10. (Optional) preloader spinner.

## Implementation tasks

- [ ] Scaffold `apps/jolt` (copy simplest existing app; package
      `@free-react-templates/jolt`; `public/CNAME` =
      `jolt.free.componentdock.com`; homepage =
      `https://jolt.free.componentdock.com`); register the workspace in
      `package-lock.json`
- [ ] `index.html`: title "Jolt — Event Countdown / Startup Landing", Jost
      400/600/700 Google Fonts `<link>`
- [ ] `src/index.css` tokens: gradient `#743ad5`→`#d53a9d`; black `#000`
      section bgs; `#222` (feature.dark, btn-black); `#efefef` light bgs;
      `#fff` box-white; `#212529` body text; `rgba(255,255,255,.5)` muted;
      `rgba(255,255,255,.3)` labels; overlay `rgba(0,0,0,.4)`; form focus
      `#ba9dea`; 3 button variants per Design notes
- [ ] Components: `Navbar` (brand + links + mobile menu), `Hero`,
      `Countdown` (static counters per spec), `Services` (4 feature cards),
      `About` (overlap box), `Pricing` (3 cards), `MoreFeatures` (3 dark
      cards), `Testimonials` (accessible carousel, 3 slides + dots),
      `Team` (2 cards), `Newsletter` (underline form + btn-black),
      `Footer` (socials + Component Dock link)
- [ ] Overlaps: about `.box-white` `-50px` margin-bottom; image overlap
      `-100px` (desktop only); testimonial `.box-white` `-200px` margin-top;
      features-wrap `12rem` bottom margin
- [ ] Hero h1 EXACTLY "New template Boostrap Five" (SOURCE TYPO — as-is);
      sub-line "A free template by Colorlib"
- [ ] Buttons: 3 variants per spec (gradient pill w/ black inset + hover,
      outline white w/ hover → white bg + `#743ad5`, btn-black)
- [ ] Counters 39/27/51/51 with 90px white numbers + uppercase tracked
      labels; hidden ended-alert
- [ ] Pricing cards `#743ad5` radius 7px padding 40px, `.line` divider,
      price $/int/.cents split, Buy outline
- [ ] Testimonial carousel: accessible (keyboard, aria), 3 slides, 80px
      round bio pics, pagination dots
- [ ] Newsletter form: labeled inputs (aria-label/label — source uses bare
      placeholders), underline styling, focus `#ba9dea`, btn-black block
      submit
- [ ] Footer: lucide Facebook / Twitter / Linkedin / Dribbble; copyright;
      Component Dock link; NO ColorLib references in app code
- [ ] Placeholder images deterministic
      (`https://picsum.photos/seed/jolt-<n>/<w>/<h>`)
- [ ] Tests: 100% coverage (navbar links + mobile menu, hero h1 typo text,
      countdown values, 4 services, pricing cards + prices, 3 feature
      cards, carousel navigation + dots, team names/roles, newsletter form
      fields, footer socials + Component Dock link)
- [ ] `npm run verify:app jolt` passes; commit `feat: add jolt …`; PR +
      immediate squash merge; then TEMPLATES.md bookkeeping — BOTH Action
      rows (lines 549 AND 881) → `[x]` + surge URL (same URL twice) +
      `npm run readme:status`

## Verification checklist (from spec)

- [ ] Navbar: brand "Jolt", links Home / Services / About / Contact Us;
      mobile menu below lg
- [ ] Hero: h1 "New template Boostrap Five" (SOURCE TYPO as-is), 90px/700
      white, dark image + `rgba(0,0,0,.4)` overlay, sub-line, "Read More"
      pill
- [ ] Countdown: black bg, "Don't wait" / "Event Countdown", 39/27/51/51,
      hidden alert, "Get Started" pill
- [ ] Services: `#efefef`, "Our Services", 4 purple-icon cards (Camera /
      Settings / Image / Layers)
- [ ] About: white overlap box (`-50px`), image overlap, "About us", 2
      paragraphs, "Get Started"
- [ ] Pricing: black bg, 3 `#743ad5` cards with .line divider + prices +
      "Buy" outline (hover → white bg + `#743ad5`)
- [ ] More Features: image + overlay, 3 `#222` cards (Creative / Design /
      Development)
- [ ] Testimonials: white box overlap `-200px`, 3 slides + dots, 80px round
      pics
- [ ] Team: Jessica Green / Jon Gold with roles + bios + "Read bio" pills
- [ ] Newsletter: `#efefef`, underline inputs (focus `#ba9dea`), "Subscribe"
      btn-black
- [ ] Footer: dark, 4 lucide socials, Component Dock link
      (`https://www.componentdock.com/`); no ColorLib anywhere in
      `apps/jolt`
- [ ] `npm run verify:app jolt` green; both TEMPLATES.md Action rows
      bookkept `[x]`
