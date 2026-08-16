# Template: Psalm (Church)

## Purpose

Psalm is a church-website template in the free-react-templates monorepo. It
is an original React recreation of the ColorLib free "Byfaith" design
(source: https://colorlib.com/wp/template/byfaith/), built under a
DIFFERENT name (**Psalm** — a sacred song or hymn, matching the worship /
church theme of the source; a single lowercase word, kebab-case, no collision
with `apps/`, `openspec/specs/` or `docs/templates/` — verified 2026-08-16),
per the monorepo naming mandate, with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript. Full landing page for a church: fixed-behind-
content navbar over a full-viewport photographic hero → about section →
recent-sermons card grid → dark-teal "Why Us" band with a 2×2 feature grid →
testimonial slider → white services section → dark-teal CTA band → warm-cream
footer. Brand palette: golden orange `#f79918` (buttons, subheadings, icons,
slider accents) on white, with deep teal `#10495c` bands and a cream
`#ede1d0` footer.

## Design reference (replication findings)

- **Original:** ColorLib "Byfaith" — a free Bootstrap 5 church website
  template (one-page home demo: `index.html`). Source page:
  https://colorlib.com/wp/template/byfaith/. **TEMPLATES.md has TWO copies**
  (line 554 and line 1289, both `- [ ]` unchecked) — when the implementer
  finishes, BOTH rows get bookkept `[x]` + surge URL. This prep: Byfaith →
  **Psalm**.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/byfaith/` (HTTP 200, 23,513 bytes
  HTML, `<title>ByFaith — Free Bootstrap 5 Website Template by
Colorlib</title>`). Stylesheets: `fonts/icomoon/style.css` (icon font),
  `fonts/flaticon/font/flaticon.css` (service glyphs `flaticon-wheat` /
  `flaticon-church` / `flaticon-bible`), `css/tiny-slider.css` (carousel),
  `css/glightbox.min.css` (video lightbox), `css/aos.css` (scroll
  animations), `css/style.css` (56,913 bytes — the theme's own sheet,
  custom rules; Bootstrap 5 bundle is inlined via jsdelivr? NO — Bootstrap
  v5.x classes come from the CDN link in the head (`bootstrap.min.css` is
  NOT a local file; the theme loads Bootstrap 5.0.x from cdnjs). Verified
  CSS vars: `--bs-primary: #f79918`, `--bs-font-sans-serif: "Poppins",
sans-serif`.
- **JS behavior (assess, then simplify):** the preview loads
  `bootstrap.bundle.min.js` (navbar/offcanvas), `tiny-slider.js`
  (testimonial slider), `glightbox.min.js` (YouTube video lightbox on the
  two play buttons), `aos.js` (fade-up / fade-left scroll animations),
  `navbar.js`, `counter.js`, `custom.js`, plus a Google-tag. The recreation
  MUST reproduce the _visible behavior_ (working testimonial slider with
  dots + prev/next pills, play-button that opens the YouTube video, mobile
  burger menu) WITHOUT the jQuery-era stack — plain React state. AOS
  scroll animations are decorative: optional, a light CSS-only fade is
  acceptable (documented deviation).
- **Visual design (live browser render + TEMPLATES.md screenshot
  `byfaith-free-template.jpg`, viewed in browser):** LIGHT, warm, earthy
  church aesthetic on white. Screenshot matches the live DOM. Hero = full-
  viewport photo (rocky mountain landscape, sunrise tones, a man in a
  mustard-yellow jacket with raised hand — the source image doubles as the
  video thumbnail with a circular play button) under a `rgba(0,0,0,.3)`
  overlay; small white uppercase subheading "Welcome to Byfaith church",
  big white Poppins-700 headline "Oh Safe To the Rock That Is Higher Than
  I", white body copy, ORANGE PILL button "Go to sermons". Below: white
  about section (left text + right rounded photo of an open Bible); white
  "Recent Sermons" 3-card grid (rounded photos, gray date line "15 Jan
  2020 • By Pastor Campbell", black h3 link, small orange pill "Read
  more"); DARK-TEAL `#10495c` "Why Us" band (white heading + white copy, a
  second video-thumb image, 2×2 white-on-teal feature grid, orange pill
  "Send us your prayer request"); white testimonials slider (white cards,
  italic quotes, 40px round avatar, orange dots + Prev/Next pills); white
  services section (3 centered cards with 60px orange glyphs: wheat /
  church / bible → "Praise and Worship", "Marriage", "Exhortation", "+ Read
  more"); dark-teal CTA band ("Join with us as we worship the Lord" +
  orange "Join Us" pill); CREAM `#ede1d0` footer (3 widget columns, white
  rounded-square social icons, copyright line). NO variance between
  screenshot and live DOM.
- **Structure (DOM order, 1:1):**
  1. `div.site-mobile-menu` (hidden off-canvas clone of the nav — the
     recreation implements an accessible burger menu instead)
  2. `nav.site-nav` (absolute, top 0, z-index 9, over the hero) →
     `div.site-navigation`: `a.logo` "ByFaith" (white, 20px, 700) left;
     `ul.site-menu` right: Home (active) · Sermons (`has-children`
     dropdown: Sermons / Sermons Single / Dropdown → Sub Menu One/Two/
     Three) · Ministries · Events · Contact; `a.burger` (mobile toggle,
     hidden on lg+)
  3. `div.hero.overlay` (bg image `images/hero_1.jpg`, 100vh / min-640px,
     overlay `rgba(0,0,0,.3)`) → container → `div.row.align-items-center`:
     - `div.col-lg-4.me-auto`: `span.subheading` "Welcome to Byfaith
       church" (white, uppercase 12px) → `h1` "Oh Safe To the Rock That Is
       Higher Than I" (white, 40px/700) → `p` (white copy) → `a.btn.btn-
primary` "Go to sermons"
     - `div.col-lg-5`: `a.video-bg.glightbox` (href = YouTube watch link)
       → `span.icon` (80px circle, 2px white-20% border, white 30px play
       glyph, centered) + `img.rounded` (hero-side video thumbnail)
  4. `div.section` (About, white): container → `div.row.justify-content-
between`: `div.col-lg-4` — `span.subheading` "About us" (orange) →
     `h2.heading` "Living and Sharing <br> The Gospel" → 2 `p` (lorem
     copy) → `p.mt-5 > a.btn.btn-primary` "Know more about us"; `div.col-
lg-6` — `img.rounded` (open-Bible photo)
  5. `div.section.pt-0` (Sermons, white): container → `div.row.mb-4.text-
center` — `span.subheading.d-block` "Sermons" (orange) + `h2.heading`
     "Recent Sermons"; `div.row.g-5` → THREE `div.col-12.col-sm-6.col-md-
6.col-lg-4` sermon cards (`data-aos fade-up`, delays 0/100/100):
     - `div.sermon-entry`: `a > img.img-fluid.mb-3.rounded` (sermon
       photo) → `div.sermon-body` (padding 20px): `span.date` "15 Jan 2020
       • By Pastor Campbell" (`#999`) → `h3.mb-2 > a` "Living and Sharing
       The Gospel" (`#000`, 20px) → `p.mb-5` (lorem) → `p > a.btn.btn-
primary.btn-sm` "Read more"
  6. `div.section.bg-secondary` (Why Us, `#10495c`): container →
     `div.row.mb-5.justify-content-between.align-items-center` —
     `div.col-lg-5`: `span.subheading.d-block` "Why Us" (orange) +
     `h2.heading.text-white` "You matter to God, you matter to us.";
     `div.col-lg-5.align-self-end.text-white`: white `p` (lorem);
     `div.row.align-items-center.g-5` — `div.col-lg-6`: `a.video-bg` (2nd
     play button + rounded img) ; `div.col-lg-5.ms-auto`:
     `div.row.g-4` with FOUR `div.col-lg-6.feature-1` — `h3.text-white`
     ("Peace with God" / "Relationship for the Soul" / "Identifying
     Limitations" / "His Kingdom") + `p.opac-white-5` (lorem);
     `div.row.mt-5 > div.col-lg-12 > a.btn.btn-primary` "Send us your
     prayer request"
  7. `div.section` (Testimonials, white): container → `div.row.mb-5` —
     `div.col-lg-7.mx-auto.text-center` — `span.subheading` "Testimonials"
     - `h2.heading` "Living Testimonies"; `div.testimonial-slide-center-
wrap` → `div.testimonial-slide-center` with NINE `div.item >
div.testimonial-item > div.testimonial-item-inner` (white card,
       padding 50px 30px): `h3.testimonial-heading` "Far far away, behind
       the word mountains" (18px/700, mb 30px) → `blockquote` (lorem, 18px
       italic `#000`) → `div.testimonial-author`: `img` (40px circle,
       `person_1.jpg`) + `strong` "James Campbell" + `span` "Person";
       `div.controls.testimonial-nav` — `span.prev` "Prev" + `span.next`
       "Next" (orange pills); tns-nav dots (7px circles, active `#f79918`)
  8. `div.section.bg-white.mx-2.mx-md-5.sec-services-wrap` (Services,
     white, inset margins, `margin-bottom: -50px` overlapping the CTA):
     container → `div.row.mb-5` — `div.col-lg-7.mx-auto.text-center` —
     `span.subheading` "Our Services" + `h2.heading` "Church Services";
     `div.row.g-5` → THREE `div.col-lg-4` service cards: `span.flaticon-
wheat/church/bible.mb-4.d-block` (60px `#f79918` glyph) →
     `h3.heading` "Praise and Worship" / "Marriage" / "Exhortation"
     (18px) → `p` (lorem) → `p > a.more` "+ Read more"
  9. `div.section.sec-cta.bg-secondary` (CTA, `#10495c`, `padding-top:
10rem` — tall because the services wrap pulls up −50px): container →
     `div.row.align-items-center` — `div.col-lg-7.text-center.text-md-
start` `h2.heading.text-white` "Join with us as we worship the Lord"
     - `div.col-lg-5.text-center.text-md-end` `a.btn.btn-primary.py-3.px-
5` "Join Us"
  10. `footer.site-footer` (`#ede1d0`, padding 70px 0, 14px, `#888`):
      container → `div.row` with THREE `div.col-lg-4 > div.widget`:
      - Contact: `h3` "Contact" + `address` "43 Raymouth Rd. Baltemoer,
        London 3910" + `ul.links`: `tel:` ×2 "+1(123)-456-7890",
        `mailto:` "info@mydomain.com"
      - Sources: `h3` "Sources" + TWO `ul.list-unstyled.float-start.links`
        (width 150px): col A "About us, Services, Vision, Mission, Terms,
        Privacy" · col B "Partners, Business, Careers, Blog, FAQ, Creative"
      - Links: `h3` "Links" + `ul.links`: "Our Vision, About us, Contact
        us" + `ul.social`: SIX 40×40 white rounded-square icon links
        (Instagram, Twitter, Facebook, LinkedIn, Pinterest, Dribbble)
        `div.row.mt-5 > div.col-12.text-center` — `p.mb-0` copyright:
        "© <year> All rights reserved | made with ♥ by Colorlib" → recreation
        **"© <current year> Psalm — made with ♥ by Component Dock"** (the
        mandatory Component Dock link replaces the Colorlib credit; NO
        ColorLib reference in app code)
  11. Preloader: `#overlayer` (white fixed overlay) + `.loader >
.spinner-border.text-primary` (Bootstrap spinner, `--bs-primary` =
      `#f79918` orange). OPTIONAL — the recreation may skip the preloader
      or keep a lightweight one; if kept, use the brand orange.
- **Grid behavior (Bootstrap 5, reproduce responsively):** hero row =
  `col-lg-4` + `col-lg-5` side by side on lg+, stacked below; about = 4/6;
  sermons = `col-12 col-sm-6 col-md-6 col-lg-4` (1 col mobile, 2 cols
  sm/md, 3 cols lg+); why-us = 5/5 header row + 6 / (5 ms-auto) content
  row, features 2×2 on lg+ (col-lg-6), single column below; services =
  3× `col-lg-4`; footer = 3× `col-lg-4`. `.section` padding 7rem 0. Nav is
  absolute over the hero. No horizontal overflow anywhere.
- **A11y gaps in the source (recreation adds per monorepo conventions):**
  nav is a `nav` without aria-label; burger is a `div` link with spans;
  the video links have no accessible name ("Image" alt only); the slider
  controls are `span`s (not buttons); social icons are bare icon spans
  with no labels; the email/phone links are fine. Recreation SHALL use
  real `<button>`s, aria-labels, aria-expanded on the burger, and named
  links.

## Design tokens (from the reference — `css/style.css` + Bootstrap vars)

| Token                 | Value                                                                                                                                                                                                                                      | Source                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------- |
| Font family           | **Poppins** — `--bs-font-sans-serif: "Poppins", sans-serif` (400 + 700 loaded; the theme does NOT use a serif despite the screenshot's apparent serif — Poppins 700 headlines)                                                             | `:root` var + cf-fonts @font-face                   |
| Brand color (primary) | **`#f79918`** (golden orange) — `--bs-primary`; `.btn-primary` bg/border; `.subheading` color on light sections; `.service [class^=flaticon-]` icon color; tns-nav active dot; slider nav pills; spinner                                   | `:root`, `.btn-primary`, `.subheading`, etc.        |
| Primary hover         | **`#f8a83b`** (`.btn-primary:hover` bg/border); slider pill hover **`#f8a431`**                                                                                                                                                            | `.btn-primary:hover`, `.testimonial-nav span:hover` |
| Button text           | `.btn-primary` **color `#000`** (black text on orange)                                                                                                                                                                                     | `.btn-primary`                                      |
| Secondary (dark teal) | **`#10495c`** — `.bg-secondary` override; used by "Why Us" band, CTA band, and footer widget h3 color                                                                                                                                      | `.bg-secondary`, `.site-footer .widget h3`          |
| Footer background     | **`#ede1d0`** (warm cream) — `.site-footer`, `padding: 70px 0`, `font-size: 14px`, `color: #888`; links `#777`                                                                                                                             | `.site-footer`                                      |
| Buttons (shape)       | `.btn`: **border-radius 30px (PILL)**, `padding: 12px 20px`, `font-size: 10px`, `font-weight: 700`, `letter-spacing: .1rem`, `text-transform: uppercase`; `.btn-sm`: `padding: .25rem .5rem`, `font-size: .875rem`, `border-radius: .2rem` | `.btn`, `.btn-sm` (theme overrides)                 |
| Subheading            | `text-transform: uppercase`, `font-size: 12px`, `letter-spacing: .1rem`, `font-weight: bold`, `margin-bottom: 30px` — **`#fff` in hero, `#f79918` on light sections**                                                                      | `.subheading` (two rules)                           |
| Heading               | `font-size: 40px`, `font-weight: 700` (`.heading`); hero `h1` white 40px/700; media-query override to 30px on small screens                                                                                                                | `.heading`, `.hero h1`                              |
| Section padding       | `padding-top: 7rem; padding-bottom: 7rem` (`.section`); sermons section adds `pt-0` (no top padding, abuts the about section)                                                                                                              | `.section`                                          |
| Hero                  | `height: 100vh; min-height: 640px`, `background-size: cover`, center; overlay `:before` **`rgba(0, 0, 0, 0.3)`**; hero `p` white                                                                                                           | `.hero`, `.overlay:before`                          |
| Nav                   | `.site-nav`: absolute, top 0, z-index 9, width 100%, `padding: 20px 0`; `.logo`: white 20px 700; `.site-menu > li > a`: 14px, `padding: 10px 15px`, `color: rgba(255,255,255,.7)`, hover `#fff`                                            | `.site-nav`, `.logo`, `.site-menu > li > a`         |
| Video play circle     | 80×80px, `border-radius: 50%`, `border: 2px solid rgba(255,255,255,.2)`, absolute-centered; play glyph white 30px, `translate(-40%,-50%)`                                                                                                  | `.video-bg .icon`, `.icon > span`                   |
| Sermon card           | `.sermon-body` padding 20px; `.date` `#999`, block, `margin-bottom: 10px`; `h3` 20px; `h3 a` `#000`; images `img-fluid mb-3 rounded` (Bootstrap radius .375rem)                                                                            | `.sermon-entry *`                                   |
| Why-Us feature copy   | `.opac-white-5` = `color: rgba(255, 255, 255, 0.5)`; feature `h3` white                                                                                                                                                                    | `.opac-white-5`                                     |
| Testimonial card      | `.testimonial-item-inner`: bg `#fff`, `padding: 50px 30px`, `border-radius: 0`; heading 18px/700, `margin-bottom: 30px`; blockquote 18px italic `#000`; author img 40px circle; `strong` 16px/700 `#000`; role `span` 14px                 | `.testimonial-item *`                               |
| Slider dots (tns-nav) | 7×7px circles, `rgba(0,0,0,.2)`, active → **`#f79918`**, margin 2px, no border/bg                                                                                                                                                          | `.testimonial-slide-center-wrap .tns-nav button`    |
| Slider nav pills      | `span.prev/next`: `padding: 5px 20px`, bg `#f79918`, color `#fff`, `border-radius: 30px`, uppercase 12px, `letter-spacing: .1rem`, hover `#f8a431`, disabled `opacity: .4`                                                                 | `.testimonial-nav span`                             |
| Service icon          | `[class^="flaticon-"]`: `font-size: 60px`, `color: #f79918`; service `h3.heading` 18px                                                                                                                                                     | `.service *`                                        |
| Services wrap         | `.sec-services-wrap`: bg white, `mx-2 mx-md-5` (inset), `position: relative; margin-bottom: -50px` (overlaps the CTA); `.sec-cta`: `padding-top: 10rem`                                                                                    | `.sec-services-wrap`, `.sec-cta`                    |
| Footer widgets        | `.widget h3`: 12px/700 uppercase, `margin-bottom: 15px`, color `#10495c`; `.links` `width: 150px`; footer social: 40×40px, bg `#fff`, `border-radius: 40%` (rounded square), glyph absolute-centered                                       | `.site-footer .widget *`, `.social li a`            |
| Preloader             | `#overlayer` white fixed full-screen; `.spinner-border.text-primary` — primary = `#f79918` (theme override)                                                                                                                                | `#overlayer`, Bootstrap spinner                     |
| AOS animations        | `fade-up` / `fade-left` scroll reveals with stagger delays (0/100/200) — decorative; CSS-only equivalent or skip (documented deviation)                                                                                                    | `data-aos` attributes                               |

## Requirements

### Requirement: Page composition

The system SHALL render the church landing page with a main landmark, a
document title, and the mandatory footer landmark.

#### Scenario: Full page render

- **GIVEN** the Psalm app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render navbar, hero, about, sermons, why-us,
  testimonials, services, CTA, and footer sections in that order inside
  the main landmark
- **AND** the document title SHALL be "Psalm — Church"

### Requirement: Navbar

The system SHALL render the fixed-behind-content navbar (absolute over the
hero) with the renamed brand logo, the source's nav links, and an
accessible mobile burger menu.

#### Scenario: Desktop navbar renders

- **GIVEN** the page is rendered
- **WHEN** the user inspects the top of the page
- **THEN** a `nav` SHALL render with the brand link **"Psalm"** on the left
  (white, 20px, weight 700; the source brand "ByFaith")
- **AND** the following links SHALL render on the right: **Home, Sermons,
  Ministries, Events, Contact** (14px, `rgba(255,255,255,.7)`, padding
  10px 15px, hover → `#fff`; "Home" marked active)
- **AND** the Sermons item SHALL expose the source's dropdown children
  (Sermons, Sermons Single, Dropdown → Sub Menu One/Two/Three) — an
  accessible disclosure is acceptable (documented deviation from the
  hover dropdown)
- **AND** the navbar SHALL sit over the hero (absolute, z-index above it,
  transparent background)

#### Scenario: Mobile burger menu

- **GIVEN** the viewport is below the lg breakpoint
- **WHEN** the user activates the burger toggle
- **THEN** a mobile menu SHALL open with the same links (Home, Sermons,
  Ministries, Events, Contact)
- **AND** the toggle SHALL have `aria-expanded` state and an accessible
  name, and close on link activation

### Requirement: Hero section

The system SHALL render the full-viewport hero with a photographic
background, dark overlay, white headline, orange pill CTA, and the video
thumbnail with a circular play button.

#### Scenario: Hero renders

- **GIVEN** the navbar is rendered
- **WHEN** the user inspects the top of the page
- **THEN** a hero section SHALL render at `min-height: 640px` filling the
  viewport, with a cover-positioned background image (picsum placeholder
  `https://picsum.photos/seed/psalm-1/1920/1080`) and a `rgba(0,0,0,.3)`
  dark overlay
- **AND** a small white uppercase subheading SHALL read "Welcome to Psalm
  church" (the source: "Welcome to Byfaith church" — same kind of
  content, renamed brand)
- **AND** a white level-1 heading SHALL read **"Oh Safe To the Rock That
  Is Higher Than I"** (40px, weight 700, Poppins)
- **AND** a short white paragraph and an orange pill button **"Go to
  sermons"** SHALL render below it (black text, uppercase, letter-spacing
  .1rem)
- **AND** on the right a rounded image SHALL render with a centered
  **80px circular play button** (2px `rgba(255,255,255,.2)` border, white
  play glyph) — the whole block a link to the source's YouTube video
  (`https://www.youtube.com/watch?v=mwtbEGNABWU`) with an accessible name
  (e.g. "Watch sermon video")

### Requirement: About section

The system SHALL render the white about section with subheading, headline,
two paragraphs, pill CTA, and a rounded image.

#### Scenario: About renders

- **GIVEN** the hero is rendered
- **WHEN** the user scrolls to the next section
- **THEN** a white section SHALL render with the orange uppercase
  subheading **"About us"** and the 40px/700 heading **"Living and
  Sharing The Gospel"**
- **AND** two paragraphs of lorem-style church copy SHALL render
- **AND** an orange pill button **"Know more about us"** SHALL render
- **AND** a rounded photo (picsum `psalm-3`) SHALL render on the right on
  lg+, stacked below the text on smaller screens

### Requirement: Recent Sermons grid

The system SHALL render the three-card sermon grid with the exact card
structure: rounded photo, gray date byline, black title link, blurb, and
small "Read more" pill.

#### Scenario: Sermon cards render

- **GIVEN** the about section is rendered
- **WHEN** the user scrolls to the sermons section
- **THEN** the section SHALL render the centered orange subheading
  **"Sermons"** and heading **"Recent Sermons"**
- **AND** THREE sermon cards SHALL render in a responsive grid
  (1 column mobile, 2 columns sm/md, 3 columns lg+), each with:
  1. a rounded photo (picsum seeds `psalm-4/5/6`)
  2. a `#999` date line **"15 Jan 2020 • By Pastor Campbell"**
  3. a 20px black title link **"Living and Sharing The Gospel"**
  4. a short blurb paragraph
  5. a small orange pill button **"Read more"** (`.btn-sm` sizing)

### Requirement: Why Us band

The system SHALL render the dark-teal (`#10495c`) band with the white
headline, white copy, second video thumbnail, 2×2 white feature grid, and
the prayer-request CTA.

#### Scenario: Why Us renders

- **GIVEN** the sermons grid is rendered
- **WHEN** the user scrolls to the dark-teal band
- **THEN** the band SHALL render with `background: #10495c` and the orange
  subheading **"Why Us"** plus the white 40px/700 heading **"You matter
  to God, you matter to us."**
- **AND** white body copy SHALL render on the right (aligned to the band's
  bottom on lg+)
- **AND** a second rounded video thumbnail with the same circular play
  button SHALL render on the left (links to the same YouTube video)
- **AND** a 2×2 feature grid SHALL render on the right with white 18px
  headings **"Peace with God"**, **"Relationship for the Soul"**,
  **"Identifying Limitations"**, **"His Kingdom"** and `rgba(255,255,255,.5)`
  blurbs
- **AND** an orange pill button **"Send us your prayer request"** SHALL
  render below the features

### Requirement: Testimonials slider

The system SHALL render the testimonial slider with white cards, dots, and
Prev/Next pills, reproducing the source's content and styling.

#### Scenario: Slider renders with controls

- **GIVEN** the Why Us band is rendered
- **WHEN** the user scrolls to the testimonials section
- **THEN** the section SHALL render the centered orange subheading
  **"Testimonials"** and heading **"Living Testimonies"**
- **AND** at least 5 testimonial cards SHALL exist (the source ships NINE
  — keep them all or a representative subset), each with:
  1. a white card (`padding: 50px 30px`) with an 18px/700 heading
     **"Far far away, behind the word mountains"**
  2. an italic 18px `#000` blockquote (lorem copy)
  3. an author block: 40px circular avatar (picsum `psalm-8`), name
     **"James Campbell"** (16px/700), role **"Person"** (14px)
- **AND** Prev/Next pill controls SHALL render (orange pills, white
  uppercase 12px text — the source's `span.prev`/`span.next` become real
  `<button>`s per a11y conventions)
- **AND** dot indicators SHALL render (7px circles, active dot `#f79918`)
- **AND** the slider SHALL be operable via the pills and the dots without
  JavaScript frameworks (plain React state; the source uses tiny-slider —
  simplified but functional)

### Requirement: Church Services

The system SHALL render the white services section with three centered
cards: orange icon, 18px heading, blurb, and "+ Read more" link.

#### Scenario: Service cards render

- **GIVEN** the testimonials slider is rendered
- **WHEN** the user scrolls to the services section
- **THEN** a white section SHALL render inset from the viewport edges
  (`mx-2 mx-md-5`) with the centered orange subheading **"Our Services"**
  and heading **"Church Services"**
- **AND** THREE centered service cards SHALL render in a `col-lg-4` row,
  each with a **60px `#f79918` icon** (the source uses flaticon glyphs:
  wheat / church / bible → lucide-react **`Wheat`**, **`Church`**,
  **`BookOpen`** — verify the exports exist; fall back to inline SVG if
  any is missing), an 18px heading (**"Praise and Worship"**, **"Marriage"**,
  **"Exhortation"**), a short blurb, and a **"+ Read more"** link
- **AND** the section SHALL overlap the following CTA band slightly
  (`margin-bottom: -50px` on the wrap, `padding-top: 10rem` on the CTA)

### Requirement: CTA band

The system SHALL render the dark-teal CTA band with the white heading and
a large "Join Us" pill button.

#### Scenario: CTA renders

- **GIVEN** the services section is rendered
- **WHEN** the user scrolls to the CTA band
- **THEN** a `#10495c` band SHALL render with the white 40px/700 heading
  **"Join with us as we worship the Lord"** on the left (centered on
  mobile)
- **AND** an orange pill button **"Join Us"** SHALL render on the right
  (centered on mobile) with the source's larger padding (`py-3 px-5`)

### Requirement: Footer

The system SHALL render the warm-cream footer with the three widget
columns, the six social icon links, and the copyright line with the
mandatory Component Dock link.

#### Scenario: Footer renders

- **GIVEN** the CTA band is rendered
- **WHEN** the user inspects the bottom of the page
- **THEN** a semantic `<footer>` SHALL render with `background: #ede1d0`,
  14px `#888` text and `padding: 70px 0`
- **AND** THREE widget columns SHALL render on lg+ (stacked below):
  1. **Contact**: `h3` (12px/700 uppercase `#10495c`) + address "43
     Raymouth Rd. Baltemoer, London 3910" + phone ×2 "+1(123)-456-7890"
     - email "info@mydomain.com"
  2. **Sources**: `h3` + TWO columns of six links each (About us /
     Services / Vision / Mission / Terms / Privacy · Partners / Business
     / Careers / Blog / FAQ / Creative)
  3. **Links**: `h3` + three links (Our Vision / About us / Contact us) +
     SIX 40×40 white rounded-square social links (Instagram, Twitter,
     Facebook, LinkedIn, Pinterest, Dribbble — inline SVG brand glyphs
     per the lucide brand-icon limitation; each with an `aria-label`)
- **AND** the bottom bar SHALL render the copyright **"© <current year>
  Psalm — made with ♥ by Component Dock"** with a link to
  `https://www.componentdock.com/` branded "Component Dock" (the source
  credits Colorlib — replaced per conventions.md; NO ColorLib reference
  in app code)

### Requirement: Responsive layout

The system SHALL reproduce the source's responsive grid behavior without
horizontal overflow.

#### Scenario: Columns adapt across breakpoints

- **GIVEN** the full page is rendered
- **WHEN** the viewport is at the lg breakpoint (≥992px)
- **THEN** the hero row SHALL render text (col-lg-4) + video thumbnail
  (col-lg-5) side by side; about 4/6; sermons 3× col-lg-4; why-us 5/5
  header row and 6 + 5 content row with 2×2 features; services 3×
  col-lg-4; footer 3× col-lg-4
- **AND** below the lg breakpoint every multi-column row SHALL stack
  full-width (hero text first, features single-column, footer widgets
  stacked)
- **AND** the page SHALL never overflow horizontally

### Requirement: Accessibility

The system SHALL expose semantic landmarks and accessible interactive
controls (the source uses bare `span` controls and unlabeled icon links —
the recreation fixes this per monorepo conventions).

#### Scenario: Screen reader exposure

- **GIVEN** the page is rendered
- **WHEN** assistive technology inspects the page
- **THEN** the page SHALL have a main landmark and a semantic `<footer>`
  landmark
- **AND** the burger toggle, the two video-play links, the slider
  Prev/Next buttons, and the six social links SHALL have accessible names
- **AND** the nav SHALL have an accessible label and all interactive
  elements SHALL be focusable with a visible focus-visible ring

## Verification checklist

- [ ] `npm run verify:app psalm` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Document title "Psalm — Church"
- [ ] Navbar: "Psalm" white 20px/700 logo; Home / Sermons / Ministries /
      Events / Contact (14px `rgba(255,255,255,.7)`, hover `#fff`); Sermons
      dropdown children present; accessible burger menu below lg with
      `aria-expanded`
- [ ] Hero: ~100vh min-640px, cover bg image + `rgba(0,0,0,.3)` overlay;
      subheading "Welcome to Psalm church"; h1 "Oh Safe To the Rock That
      Is Higher Than I" (white 40px/700); white copy; orange pill "Go to
      sermons"; right video thumbnail + 80px circular play button linking
      the YouTube video
- [ ] About: white; subheading "About us" (orange 12px uppercase);
      "Living and Sharing The Gospel" (40px/700); 2 paragraphs; pill
      "Know more about us"; rounded image right on lg+
- [ ] Sermons: "Sermons" / "Recent Sermons" centered; 3 cards — rounded
      photo, "15 Jan 2020 • By Pastor Campbell" (`#999`), black 20px title
      link, blurb, btn-sm "Read more"; responsive 1/2/3 columns
- [ ] Why Us: `#10495c` band; "Why Us" + white "You matter to God, you
      matter to us."; white copy; 2nd video thumbnail + play circle; 2×2
      white features (Peace with God / Relationship for the Soul /
      Identifying Limitations / His Kingdom) with `rgba(255,255,255,.5)`
      blurbs; pill "Send us your prayer request"
- [ ] Testimonials: "Testimonials" / "Living Testimonies"; ≥5 white cards
      (18px/700 heading, italic 18px quote, 40px avatar, "James Campbell"
      / "Person"); orange pill Prev/Next (`<button>`s); dots with active
      `#f79918`; slider operable without frameworks
- [ ] Services: white inset section; "Our Services" / "Church Services";
      3 centered cards — 60px `#f79918` lucide icon (Wheat / Church /
      BookOpen, probe exports), 18px heading, blurb, "+ Read more";
      −50px overlap onto the CTA; CTA `padding-top: 10rem`
- [ ] CTA: `#10495c`; white "Join with us as we worship the Lord" + large
      pill "Join Us" (`py-3 px-5`)
- [ ] Footer: `#ede1d0`, 70px 0, 14px `#888`; Contact / Sources (2×6
      links) / Links widgets; 6 white rounded-square social links with
      aria-labels (inline SVG brand icons); "© <year> Psalm — made with
      ♥ by Component Dock" linking `https://www.componentdock.com/`
- [ ] Responsive: 4/5 hero, 4/6 about, 3-col sermon + service grids,
      5/5 + 6/5 why-us, 3-col footer on lg+; all stack below lg; no
      horizontal overflow
- [ ] Poppins 400/700 via Google Fonts `<link>` in `index.html`
- [ ] Picsum placeholders only (`/seed/psalm-<n>/…`), no copied assets;
      NO ColorLib reference anywhere in `apps/psalm` (provenance lives
      only here + TEMPLATES.md + PR)
