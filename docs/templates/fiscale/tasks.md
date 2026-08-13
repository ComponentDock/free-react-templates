# Fiscale (ColorLib Framework) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-fiscale`.

## Source mapping

- **ColorLib item:** "Framework" (TEMPLATES.md — appears 2×: lines 584 and
  1382; both rows point to the same source, one prep covers all; verified
  with `grep -c 'wp/template/framework/'` = 2).
- **Source URL:** https://colorlib.com/wp/template/framework/
- **Preview URL:** https://preview.colorlib.com/theme/framework/ — **HTTP 200,
  live** (confirmed 2026-08-13, ~30 KB HTML). Do not redo this lookup.
- **Preview CSS:** https://preview.colorlib.com/theme/framework/css/style.css
  (~58 KB) — also imports bootstrap.css, aos.css, glightbox.min.css,
  tiny-slider.css (internal css/ subfolder) + fonts/flaticon + fonts/icomoon
  icon fonts. Site is Bootstrap 5 + jQuery + tiny-slider + glightbox + AOS —
  NOT Tailwind.

## Reference research (done — do not redo)

### Screenshot (`framework-free-template.jpg`, 1200×946)

**Matches the live template** — solid blue hero with white "We are a group
of financial specialists" headline, transparent nav, pill "SEE OUR SERVICES"
button, person-with-phone photo (green play circle overlay) on hero right,
tops of the 4 white step cards on light gray, start of the Features section
(dashboard illustration + green circle with check). The live preview DOM +
parsed stylesheet are the authoritative reference; the screenshot confirms
the same design.

### Live DOM (primary reference — section order verified against fetched HTML + parsed CSS + browser)

1. **Nav** `nav.site-nav` — transparent, `position: absolute; top: 0;
width: 100%; z-index: 99`, padding 20px 0 (sits over the blue hero).
   Container > row.align-items-center: brand `h1.h1` "Framework" (24px) +
   `nav.site-navigation` > `ul.site-menu` (inline-block li): Home /
   Dropdown (`li.has-children` — caret via icomoon `\e313`, dropdown
   submenu exists in CSS) / Services / About / Contact Us. Links 14px
   `rgba(255,255,255,0.7)`, hover `#fff`; `.active` `#fff`. Mobile:
   hamburger → `div.site-mobile-menu` offcanvas panel (header with
   `span.icon-close2` + body with the same links).
2. **Hero** `div.hero.overlay` — solid `#4877fb` (via `.hero.overlay:before`
   overlay), padding 10rem 0. Container > row.align-items-center.justify-content-between:
   - `col-lg-6` (AOS fade-up): `h1.heading.text-white` "We are a group of
     financial specialists" (50px, weight 700) + `p.text-white-50.mb-5`
     lorem subtext + `p > a.btn.custom-white-2` "See our services".
   - `col-lg-5` (AOS delay 100): `a.video-play-wrap.glightbox`
     (youtube.com/watch?v=mwtbEGNABWU) > `span#play-video.icon-play`
     (50×50 circle bg `#24b800`, white icon, centered) + `img.img-fluid`
     `images/video_1.jpg` (person holding phone, rounded, shadow).
3. **Steps** `div.section.pb-0.bg-light` (`#f8f9fa`) — `row.g-1.justify-content-center`
   > 4 × `col-12 col-sm-6 col-md-6 col-lg-3` (AOS delays 0/100/200/300) >
   > `div.step.h-100`:
   - White card: `padding: 30px 30px 120px 30px; margin-bottom: -42px`
     (cards overlap the next section), `position: relative`.
   - `:before` top border 2px `#4877fb`, opacity 0 → 1 on hover.
   - Icon `span.flaticon-*` (45px, mb 10px) + `h3 > a` title (16px `#000`)
     - p (gray lorem) + `a.more` (circular arrow; `span.icon-keyboard_backspace`).
   - Icons: flaticon-job-search (Easy to search), flaticon-statistics
     (Improve business insight), flaticon-rocket (Fast as lightning),
     flaticon-growth (Grow business) → lucide equivalents: Search,
     BarChart3 (or TrendingUp), Rocket (or Zap), TrendingUp (or Users).
   - Hover: `top: -4px` translate + shadow + blue top border.
4. **Features** `div.section.bg-light` — header row
   `row.justify-content-center.align-items-center.mb-5` > `col-lg-7.text-center`:
   `h2.heading.mb-2.text-secondary` "Features" (34px, 700, `#4877fb`) +
   centered gray lorem. 3 × `div.row.justify-content-between` (`my-5` rows;
   AOS fade-up):
   - **Row 1** `row.justify-content-between` (image left): `col-lg-6` >
     `img.img-fluid` (`images/svg/undraw_blogging_vpvv.svg` — flat
     illustration) + `col-lg-5`: `div.number > span` "1" (40×40 circle bg
     `#24b800`, white number, radius 50%, mb 30px) + `h3.heading-2.text-primary.mb-3`
     "How is your site performing?" (24px, bold, `#24b800`) + `p.mb-5`
     (gray lorem, longer) + `a.btn.custom-primary` "Read more" +
     `span.icon-keyboard_arrow_right`.
   - **Row 2** `row.justify-content-between.my-5.align-items-center`
     (REVERSED — image right): `col-lg-6.order-lg-2` > img
     `undraw_digital_nomad_9kgl.svg` + `col-lg-5`: number "2" + "Smart
     Site Conversion".
   - **Row 3** `row.justify-content-between.mt-5.align-items-center`
     (image left): `col-lg-6` > img `undraw_podcast_q6p7.svg` + `col-lg-5`:
     number "3" + "Speed Site Increase Ranks".
5. **Testimonials** `section.sec-testimonial` — header row (same pattern):
   `h2.heading.mb-2.text-secondary` "Testimonials" + subtext. Wrapper
   `div.testimonial-slide-wrap` (position relative) + `div#testimonial-slide-nav`:
   `span.prev` (left 5%) / `span.next` (right 5%) — 50×50 circles, bg `#fff`,
   shadow `0 15px 30px 0 rgba(0,0,0,0.1)`, icon 20px; hover bg `#24b800`,
   color `#fff`. `div#testimonial-slide.testimonial-slide` (tiny-slider)
   with repeated `div.item > div.testimonial` (white card, padding 30px):
   `blockquote > p` (same lorem in source — paraphrase into 4 distinct
   quotes) + `div.author.d-flex.align-items-center`: `div.pic.me-2 > img.img-fluid`
   (80px flex-basis, radius 50%) + `div.text`: `strong` "Alice Campbell" /
   "Ben Smith" / "James Anderson" + `span` "Advertising Agency".
6. **Pricing** `section.sec-pricing` — header: `col-lg-7.mx-auto.text-center`
   > `h2.heading.text-secondary` "Pricing plans" (NO subtext). `div.row` >
   > 3 × `col-12 col-sm-12 col-md-6 col-lg-4.mb-4.mb-lg-0` (AOS delays
   > 100/200/300) > `div.pricing-item.border-0.bg-white.text-center`:
   - `h3` plan (18px, mb 30px, pb 30px, border-bottom 2px `#e6e6e6`):
     Basic / Standard / Advanced.
   - `div.price` (40px, `#4877fb`; Standard adds `text-primary` →
     `#24b800`): "$19.99 / month", "$299.99 / month", "$799.99 / month"
     (`span` "/ month").
   - `p.mb-5` lorem.
   - `ul.list-check.primary.list-unstyled.mb-5.text-start` — 3 li,
     `padding-left: 30px`, green `#24b800` check `:before` (icomoon \e5ca):
     "Vokalia and Consonantia", "Bookmarksgrove right at the coast",
     "Semantics a large language ocean".
   - `p > a.btn` "Get started" — Basic `custom-secondary`, Standard
     `custom-primary`, Advanced `custom-secondary`.
7. **CTA band** `div.py-5.bg-secondary` (solid `#4877fb`): container >
   row.align-items-center: `col-lg-7.text-center.mb-3.mb-lg-0.text-lg-start`
   (AOS): `h3.text-white.m-0` "Let's get to work" + `p.mb-0.text-white-50`
   lorem; `col-lg-5.text-center.text-lg-end` (AOS delay 100): `a.btn`
   "Get started" (custom-white: bg `rgba(255,255,255,0.2)`, white text;
   hover bg `#fff`, text `#4877fb`).
8. **Footer** `div.site-footer` — bg `#efefef`, font 14px, color `#888`,
   padding 70px 0. Container > row:
   - `col-lg-4`: widget "About Foundation" + `span.text-primary` "." (green
     dot; paraphrase "About Fiscale" in recreation) + p lorem; widget
     "Connect" + `ul.list-unstyled.social` — 6 circular icon links
     (Instagram, Twitter, Facebook, Linkedin, Pinterest, Dribbble;
     `a` 40×40 circles, hover bg `#24b800`, white icon).
   - `col-lg-2.ml-auto`: widget "Links" + `ul.list-unstyled.float-left.links`
     (width 150px): About us / Services / News / Careers / Contact (14px,
     `#777`, mb 10px).
   - `col-lg-2`: widget "Company" + same 5 links (source duplicates Links —
     keep the duplication or vary; content-kind latitude).
   - `col-lg-3`: widget "Contact" + `address` "43 Raymouth Rd. Baltemoer,
     London 3910" + ul.links.mb-4: 2 × `a[href=tel://11234567890]`
     "+1(123)-456-7890" + `a[href=mailto:info@mydomain.com]`
     "info@mydomain.com". Footer links `#24b800`.
   - `row.mt-5` > `col-12.text-center` > p: "Copyright © All rights
     reserved | This template is made with <i.icon-heart.text-danger> by
     <a href=colorlib.com>Colorlib</a>" → recreation credits Component Dock
     (https://www.componentdock.com/) per AGENTS.md.

## Implementation checklist (order)

1. Scaffold: copy the simplest existing app, rename package to
   `@free-react-templates/fiscale`; register workspace in package-lock.json
   (`npm install` at root before committing); `injectUiSource()` in
   vite.config.ts; Google Fonts `<link>` for Poppins (400/600/700) + Open
   Sans (400) in index.html.
2. `src/index.css` — `@theme` tokens: `--color-brand: #24b800` (green),
   `--color-accent: #4877fb` (blue), `--color-ink: #000`,
   `--color-body: rgba(0,0,0,0.5)`, `--color-muted: #888`,
   `--color-muted-2: #777`, `--color-fog: #efefef`, `--color-light: #f8f9fa`,
   `--color-border: #ccc`, `--color-border-2: #e6e6e6`, `--color-paper:
#fff`, `--font-heading: "Poppins", sans-serif`, `--font-body: "Open
Sans", sans-serif`. Page bg white, body text `--color-body`, Poppins
   headings.
3. Components: `Navbar` (transparent absolute over hero, brand + 5 links,
   Dropdown submenu, mobile offcanvas + overlay), `Hero` (blue overlay bg,
   headline + white-50 subtext + custom-white-2 pill + video-play image
   with green circle), `Steps` (4 white cards, negative bottom margin,
   hover blue top border, lucide icons + circular arrow links),
   `Features` (3 alternating rows: green number circle + green title +
   text + custom-primary pill; illustrations), `Testimonials` (client-side
   slider: 4 slides, round white prev/next arrows hover green, author
   avatar + name + title), `Pricing` (3 cards, prices, green-check lists,
   custom-secondary/custom-primary pills), `CtaBand` (solid blue, white
   headline + custom-white pill), `Footer` (4 columns + 6 social icons +
   Component Dock credit).
4. Buttons: shared pill style (radius 30px, padding 12px 30px, uppercase,
   12px, weight 700, letter-spacing 0.1rem) with variants:
   `customPrimary` (rgba(36,184,0,0.2) → solid green on hover),
   `customSecondary` (rgba(72,119,251,0.2) → solid blue on hover),
   `customWhite` (rgba(255,255,255,0.2) → solid white + blue text on
   hover). Use `cn()` + typed variant maps (packages/ui Button if it fits,
   else local).
5. Testimonials: state-based index, prev/next arrows wrap or clamp; no
   tiny-slider dependency.
6. Steps hover: `group` + `group-hover` utilities for the 2px blue top
   border (use `before:` pseudo-element or a border div).
7. Mobile menu: state-based open/close, Escape + close control, focus the
   panel on open.
8. Tests per section (scenario-style `it` blocks mirroring the spec
   Gherkin), 100% coverage; `npm run verify:app -- fiscale`.
9. PR: `feat: implement Fiscale (ColorLib Framework)`, description must
   list source template, preview URL, tokens, and renames/placeholder
   decisions.

## Fidelity notes

- Two brand colors, both mandatory: green `#24b800` (icons, number circles,
  primary buttons, checkmarks, links, testimonial arrow hover) and blue
  `#4877fb` (hero overlay, section headings, CTA band, price text,
  secondary buttons, step hover border). Do NOT soften either.
- Buttons: pill radius 30px, padding 12px 30px, font 12px 700 uppercase,
  letter-spacing 0.1rem. Three translucent variants with solid hover fill
  (see above). Hero CTA = custom-white-2; Features "Read more" + Standard
  pricing = custom-primary; Basic/Advanced pricing = custom-secondary; CTA
  band = custom-white.
- Step cards: padding 30px 30px 120px, `margin-bottom: -42px` so they
  overlap the section below — the overlap is a real visual feature
  (cards sit half-over the white Features area). Hover: 2px `#4877fb` top
  border + lift.
- Features rows alternate: row 1 image left, row 2 image RIGHT
  (`order-lg-2`), row 3 image left. Green 40px circle number before each
  title (mb 30px).
- Section h2 headings: 34px bold `#4877fb`, centered, mb-2 + mb-5 subtext;
  Features/Testimonials have a gray subtext paragraph, Pricing plans does
  NOT.
- Pricing: Standard price is `text-primary` (green); Basic/Advanced plain
  (blue). Price format "$X / month" with "/ month" in a `<span>` — split
  so `$X` is its own element for direct-text-node test queries.
- Testimonial arrows: 50×50 white circles with soft shadow, positioned
  left 5% / right 5% of the slide wrap, hover green bg + white icon.
- Footer: `#efefef`, 14px `#888`; widget h3 16px 700 `#000` mb 30px; link
  lists 150px wide, `#777`; social icons 6 circular links; Contact uses
  `<address>` + tel/mailto links. Tel literals: compute at runtime from a
  spaced display string (`href={'tel:' + phone.replace(/[^\d+]/g, '')}`)
  to avoid the secret-scan masker corrupting committed bytes.
- Hero video play: 50×50 green circle white play glyph centered on the
  photo (glightbox YouTube link in source → recreation can be a plain
  link/button or a modal; a non-functional play overlay is acceptable, but
  if interactive keep it accessible with aria-label).
- Source illustrations are undraw SVG files (blogging_vpvv, digital_nomad_9kgl,
  podcast_q6p7) + a person-with-phone photo — replace with picsum seeds
  (subject-light: any office/tech-ish photo works; these are decorative).
- "About Foundation" (footer) is the source's generic placeholder — rename
  to "About Fiscale." with the green dot.
- lucide-react removed brand icons → inline SVG brand icons (Instagram,
  Twitter/X, Facebook, Linkedin, Pinterest, Dribbble) in the footer; other
  icons via lucide-react (Menu, X, ChevronLeft, ChevronRight, Play,
  Search, BarChart3, Rocket, TrendingUp, ArrowRight, Check).
- All images: `https://picsum.photos/seed/fiscale-<n>/<w>/<h>` — suggested
  seed map: hero video photo fiscale-1 (560×400), features rows
  fiscale-2/3/4 (560×420), testimonial avatars fiscale-5..8 (100×100).
