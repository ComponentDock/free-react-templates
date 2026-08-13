# Wanderly (ColorLib Passport) — Tasks & Design Notes

> Recreation of ColorLib "Passport" — travel / tourism website
> template (https://colorlib.com/wp/template/passport/ — "Passport —
> Free Bootstrap 5 Website Template by Colorlib") under the NEW name
> **Wanderly** ("wander" plus the friendly "-ly" family suffix: Wingly,
> Drivly, Nestly, Bookly, Coastly, Restly, Sleeply, Dozely, Soarly,
> Lodgely, Sneakly, Taply, Ascendly, Serverly, Framely, Cargoly,
> Estately; single lowercase word, no collision with `apps/`,
> `openspec/specs/` or `docs/templates/` — verified 2026-08-13), per
> the monorepo naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Passport" — page title "Passport — Free
  Bootstrap 5 Website Template by Colorlib". TEMPLATES.md category:
  **Bootstrap 5 (89)**, first occurrence at line 615 (`- [ ]`, source
  NOT shipped anywhere). DUP-ROW TRAP: the `passport` slug also appears
  at line 2988 (Travel 44) — both `- [ ]` rows of the same template;
  ONE implementation covers both rows (mark all `[x]` with the same
  surge URL at bookkeeping).
- **Live preview DOM analyzed (verified 2026-08-13):**
  `https://preview.colorlib.com/theme/passport/` — HTTP 200, ~29.5 KB
  HTML (REACHABLE, not a 404). Custom CSS in `css/style.css` (~63 KB)
  - Bootstrap 5 + tiny-slider + AOS + glightbox + flatpickr +
    icomoon/flaticon icon fonts. Screenshot
    `passport-free-template.jpg` (viewed in browser) matches the live
    DOM for the full page (twilight Italian-Riviera coastal town hero →
    serif white headline + Watch Video → white content sections →
    orange CTA band → light-grey footer).
- **Visual design:** elegant, editorial travel one-pager. Full-viewport
  hero photo (Cinque Terre-style coastal town at dusk) with a
  `rgba(0,0,0,0.35)` overlay; transparent header over it (Playfair
  serif "Passport" wordmark left, small white sans links right, pill
  "Contact Us" CTA); huge white Playfair headline "It is Better to
  Travel Well Than to Arrive" + circular Watch Video play button; a
  small photo-info chip bottom-left ("Vernazza, Italy — $500.00 /
  night"). White content sections with orange eyebrows (uppercase
  18px w700 `#fc8621`), 46px black Playfair headings; About = text
  left + 2×2 image grid right; Destinations = horizontal carousel of
  4 cards each with a white price badge ($430/$560/$490/$490, orange
  text, bottom-right, soft shadow); Testimonials (light-grey `#f8f9fa`
  band, round avatars, orange names, big quote marks) next to a
  4-item FAQ accordion (open item = solid orange with white bold
  text); Recent Posts = 4 white media cards (date, 16px bold title,
  excerpt, orange Read More arrow). Orange `#fc8621` CTA band
  ("Begin your adventurous journey here." + white-outlined Get
  started) then a light-grey `#efefef` footer (About + Connect
  circles, Links, Company, Contact, centered copyright).
- **Section order (1:1, verified from live DOM):**
  1. Header `div.site-nav` (absolute, top 0, z-9, transparent,
     padding 20px 0) — `a.logo` "Passport" (Playfair 24px white w700)
     left; `ul.site-menu` right: Home (active, #fff) · About us ·
     Dropdown (hover white submenu, shadow `0 2px 10px -2px
rgba(0,0,0,0.1)`, padding 20px 0, 14px black links: Menu One,
     Menu Two > Sub Menu One/Two/Three, Menu Three) · Services ·
     Blog; `li.cta-button` pill **Contact Us** (padding 6px 20px,
     `border: 2px solid rgba(255,255,255,0.2)`, radius 30px, hover
     bg `#fc8621`). Links 14px `rgba(255,255,255,0.7)` hover #fff.
     Mobile: hamburger `a.burger` (d-lg-none, 3 white lines) →
     off-canvas `div.site-mobile-menu` + close button.
  2. Hero `div.hero.overlay` (bg image `images/hero_1.jpg` cover
     center; 100vh / min-height 650px; `:before` overlay
     `rgba(0,0,0,0.35)`):
     - `h1.heading` "It is Better to Travel Well Than to Arrive"
       (Playfair white ~60px w700, mb-5).
     - `a.play-button` (d-flex, glightbox3) — circular play icon +
       caption "Watch Video" (20px white / caption 16px); opens video
       lightbox.
     - `div.photo-info` bottom-left (absolute bottom 20px left 20px,
       white): 40px circular icon (`rgba(0,0,0,0.2)` bg, radius 50%)
       - "Vernazza, Italy — $500.00 / night".
  3. About `div.section.section-2` (white, padding 7rem 0) — left
     `div.col-lg-5`: `span.subheading` "About Us" (18px uppercase
     w700 `#fc8621`) + `h2.heading` "Explore All Corners of The World
     With Us" (Playfair 46px #000 w700) + 2 lorem paragraphs + `a.btn
.btn-primary` "Read more"; right `div.col-lg-6`: 2×2 grid
     (`div.row` of 4 `div.col-6.col-lg-6`, second row `mt-lg-5`)
     images about_1..4.jpg.
  4. Destinations `div.section.section-3` (white, padding 7rem 0) —
     `span.subheading` "What We Serve" + `h2.heading` "We Provide Top
     Destinations" + lorem intro; `div.destination-slider`
     (tiny-slider, `#destination-controls` prev/next SVG arrows, black
     2px strokes): FOUR `div.destination` cards: `div.thumb` image
     (gal_1..4.jpg) + `div.price` absolute bottom-right ($430/$560/
     $490/$490 — 20px `#fc8621`, white bg, padding 30px, shadow
     `0 15px 30px 0 rgba(0,0,0,0.1)`) + `h3` "Enjoy the beauty of
     Maldives" (Playfair w700) + `span.meta` "Maldives, Repbulic
     Maldives" (source typo — fix to "Republic"); card `mt-4`.
  5. Testimonials + FAQ `div.section.bg-light` (bg `#f8f9fa`, padding
     7rem 0) — left `div.col-lg-5.me-auto.testimonial-wrap`:
     `span.subheading` "Happy Customer" + `h2.heading` "Testimonials";
     `div.wide-slider-testimonial` (3 items): `div.author` (80px round
     avatar person_1..3.jpg, radius 50%) + `h3` name 18px `#fc8621`
     (John Doe / James Woodland / Rob Smith) + `p.position` mb-5
     ("CEO, Founder" / "Designer at Facebook" / "Product Designer at
     Twitter") + `div.quote` big `"` glyph + 18px black lorem (line-
     height 2). Right `div.col-lg-6.mt-4.mt-lg-0`: `span.subheading`
     "FAQ" + `h2.heading` "Frequently Asked Questions";
     `div.custom-accordion`: FOUR `div.accordion-item` (radius 0),
     `button.btn-link` full width, padding 15px 0 15px 40px, text-
     left, #000, plus icon left 15px; open item (`aria-expanded=true`)
     → bg `#fc8621` white w700: "How to download and register?" /
     "How to create your paypal account?" / "How to link your paypal
     and bank account?" / "We are better than others?" + lorem
     answers.
  6. Blog `div.section` (white, padding 7rem 0) — `span.subheading`
     "Blog" + `h2.heading` "Recent Posts"; `div.row.align-items-stretch`
     of FOUR `div.media-entry` cards (`col-6 col-sm-6 col-md-6
col-lg-3`): image link (gal_1..4.jpg) + `div.bg-white.m-body`
     (padding 20px 20px 50px): `span.date` "May 14, 2020" (12px) +
     `h3` "Far far away, behind the word mountains" (16px w700 #000
     hover `#fc8621`) + excerpt + `a.more` "Read More" (d-flex, orange
     label + right-arrow icon).
  7. CTA band `div.py-5.bg-primary` (bg `#fc8621`) — left
     `div.col-lg-7`: `h3.text-white` "Begin your adventurous journey
     here." (Playfair); right `div.col-lg-5.text-lg-end`:
     `a.btn.btn-outline-white` "Get started" (white 2px border/text,
     hover white bg + orange text).
  8. Footer `footer.site-footer` (bg `#efefef`, 14px #888, padding
     70px 0; links `#fc8621`) — `div.col-lg-4`: widget About
     Wanderly. (h3 16px #000 w700 + lorem) + widget Connect (6
     circular 30px social icons bg #777 radius 50% white); `div.col-
lg-2.ml-auto`: widget Links (About us · Services · News ·
     Careers · Contact); `div.col-lg-2`: widget Company (same links);
     `div.col-lg-3`: widget Contact (address "43 Raymouth Rd.
     Baltemoer, London 3910" + phones + email info@mydomain.com);
     copyright bar (`div.row.mt-5` centered): source "Copyright © All
     rights reserved | This template is made with ♥ by Colorlib" →
     recreation: neutral + mandatory Component Dock link.
- **Design tokens (from `css/style.css`, verified 2026-08-13):**
  - Brand orange **`#fc8621`** (`--bs-primary`) — subheading text,
    `.btn-primary` bg (black text), accordion open bg (white bold
    text), destination price text, CTA band bg, footer links, Read
    More arrows; btn hover `#fc9842`.
  - Cyan **`#29eafd`** (`--bs-secondary`) — secondary accent
    (sparingly used).
  - Light **`#f8f9fa`** (`--bs-light`) — testimonials/FAQ section bg.
  - Dark **`#212529`** (`--bs-dark`); section headings **#000**.
  - Footer bg **`#efefef`**, text **#888**, social circles **#777**.
  - Hero overlay **`rgba(0,0,0,0.35)`**; play icon circle
    `rgba(0,0,0,0.2)`; price badge shadow `0 15px 30px 0
rgba(0,0,0,0.1)`; nav dropdown shadow `0 2px 10px -2px
rgba(0,0,0,0.1)`.
  - Fonts: **'Playfair Display', serif** (headings + logo) and
    **'Open Sans', sans-serif** (body) — Google Fonts `<link>`s.
  - `.subheading`: 18px uppercase w700 `#fc8621`; `.heading`: 46px
    #000 w700 (hero h1 ~60px white).
  - Buttons: btn-primary solid orange / black text; Contact Us nav
    pill (2px `rgba(255,255,255,0.2)` border, radius 30px); Get
    started white outline; Read more solid orange.
  - Section rhythm: `.section` padding 7rem 0; CTA band `py-5`;
    destination card `mt-4`.

## Implementation tasks (for the implementer)

- [ ] `npm run spec:validate` for `template-wanderly` before starting
- [ ] Scaffold `apps/wanderly` (copy simplest existing app, rename
      package to `@free-react-templates/wanderly`); register workspace
      (`npm install --package-lock-only` if needed)
- [ ] `@theme` tokens: `--color-brand: #fc8621`, `--color-brand-hover:
  #fc9842`, `--color-ink: #000`, `--color-light: #f8f9fa`,
      `--color-footer: #efefef`, `--color-muted: #888`, `--color-social:
    #777`; Playfair Display + Open Sans Google Fonts `<link>`s in
      index.html; document title "Wanderly — Travel"
- [ ] Header component (WANDERLY text logo; Home active / About us /
      Dropdown hover submenu / Services / Blog; pill Contact Us;
      mobile hamburger + off-canvas menu; transparent over hero)
- [ ] Hero (full-viewport travel photo + `rgba(0,0,0,0.35)` overlay;
      Playfair headline "It is Better to Travel Well Than to Arrive";
      Watch Video play button opening a video modal; photo-info chip
      "Vernazza, Italy — $500.00 / night")
- [ ] About section (eyebrow "About Us" + heading "Explore All
      Corners of The World With Us"; 2 paragraphs + Read more button;
      2×2 photo grid, second row offset)
- [ ] Destinations (eyebrow "What We Serve" + "We Provide Top
      Destinations"; 4-card carousel: photo, white price badge
      $430/$560/$490/$490 bottom-right, serif title, meta line;
      prev/next arrow controls)
- [ ] Testimonials + FAQ (bg-light band; left: Happy Customer /
      Testimonials, 3-item carousel with round avatar + orange name +
      position + quote; right: FAQ eyebrow + heading + 4-item
      accordion, open item orange bg white bold)
- [ ] Recent Posts (Blog eyebrow + "Recent Posts"; 4 media cards:
      photo, date "May 14, 2020", 16px bold title, excerpt, orange
      Read More arrow)
- [ ] CTA band (orange `#fc8621`, white Playfair headline left, Get
      started outline button right)
- [ ] Footer (#efefef; About Wanderly. + Connect social circles;
      Links / Company / Contact widgets; copyright bar with mandatory
      `https://www.componentdock.com/` link)
- [ ] TDD: tests first per requirement, 100% coverage via
      `scripts/verify-app.sh wanderly` (typecheck + lint + vitest +
      build)
- [ ] Visual QA against `https://preview.colorlib.com/theme/passport/`
      (transparent header over dusk hero, serif headline, orange
      eyebrows + price badges, bg-light testimonials band, orange CTA
      band, #efefef footer)
- [ ] PR description: source = ColorLib Passport, preview URL, tokens
      (#fc8621, #f8f9fa, #efefef, Playfair + Open Sans, pill CTA,
      30px radius, price badge shadow), what differs (Wanderly brand,
      text logo, picsum placeholders, lucide icons, neutral + Component
      Dock footer credit, dead links/forms)
- [ ] Bookkeeping on merge: mark lines ~615 (Bootstrap 5) and ~2988
      (Travel) `[x]` + surge URL + `npm run readme:status`

## Pitfalls (from the skill + this prep)

- **Dup rows:** TWO TEMPLATES.md rows for passport — ONE implementation,
  both rows to `[x]`.
- **Name check:** "wander" is already an app (Hepta recreation) — the
  prep name is "wanderly"; do not rename to "wander".
- **Meta typo:** source says "Repbulic Maldives" — fix to "Republic
  Maldives" in the recreation (no fidelity value in the typo).
- **Transparent header:** `.site-nav` is absolutely positioned and
  transparent; nav links are `rgba(255,255,255,0.7)` — do NOT give the
  header a solid background (unlike most preps). If a fixed/scroll
  behavior is added, keep it matching the source's transparent-over-
  hero look.
- **Two fonts:** headings/logo Playfair Display AND body Open Sans —
  load both Google Fonts; the serif/sans mix is the design.
- **Carousels:** source uses tiny-slider for BOTH destinations and
  testimonials; implement as accessible carousels with prev/next
  controls (destination) — the testimonials slider can be a simple
  track or autoplay-free pager.
- **Video lightbox:** Watch Video opens a glightbox video — implement
  as a modal with a stock/embed video and a close control (no
  navigation).
- **Accordion:** real button-driven disclosure with aria-expanded and
  keyboard support; open item has orange bg + white bold text (not a
  border highlight).
- **Decorative images:** `<img alt="">` has no `img` role in Testing
  Library — query decorative strips with `container.querySelectorAll`.
- **Duplicate nav on mobile:** desktop + mobile nav duplicate links in
  the DOM — use `getAllByRole` and index the mobile one last.
- **Family palette check (2026-08-13):** orange `#fc8621` + cyan
  `#29eafd` + #efefef footer are unique among preps so far — keep them
  exact; do NOT reuse another prep's brand color.
