# Template: Rivulet (Photography Blog Template)

## Purpose

Rivulet is a single-page photography-blog template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Droppler" website template (see TEMPLATES.md, Photography
Blog), built under a different name with the monorepo stack: Vite + React
19 + Tailwind CSS 4 + TypeScript.

The reference is a dark, minimalist photography blog: a fixed header with a
droplet logo (left) and a hamburger toggle (right) that opens a full-screen
menu (Home, About, About 2, About 3, Gallery, Contact); a full-height hero on
a deep-navy `#2b3344` background with an animated particles.js dust effect,
the centered uppercase headline "DESIGNER. PHOTOGRAPHER. BLOGGER." (Montserrat
700, 56px), a lighter quote sub-line (26px), and a thin white pill scroll
indicator; then five full-screen blog posts, each with a fixed background
photo under a `#343451` overlay and centered content (20px uppercase date —
"November 19, 2017" —, uppercase category links, a big 56px uppercase
quote-title, a 36px serif excerpt, and icon buttons "READ MORE" and "WATCH
VIDEO"); a testimonials slider with a giant 270px quote mark (`#3b455b`) and
three design-quotes from named authors; and a near-black `#191919` footer with
widget columns, a droplet logo in a white-bordered circle, Twitter/Linkedin/
Dribbble/Instagram social icons, and a copyright bar whose heart pulses in
coral `#e76f7d`. Typography is Montserrat (headings/UI, uppercase) + PT Serif
(quotes/excerpts). Rivulet recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Droppler" — Photography Blog HTML Template
  (source: https://colorlib.com/wp/template/droppler/). Listed in
  TEMPLATES.md under the Photography/Blog area (line 254).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/droppler/`
  (HTTP 200). DOM fetched and analyzed (`/tmp/prep-droppler/preview.html`,
  21 KB); stylesheets
  `https://preview.colorlib.com/theme/droppler/style.css` (34.6 KB) and
  `.../css/common.css` (4 KB) extracted for tokens; screenshot
  (`droppler-photography-blog-website-template.jpg`, 1200×942, TEMPLATES.md)
  reviewed visually in the browser. All references verified live.
- **Section order (1:1 from the preview DOM):**
  1. Header — `div.header-holder`: `a.header-logo > img`
     (`images/default_droppler_logo.png`, droplet mark) + `div.toggle-holder`
     burger (`button#toggle` with three `span` lines) opening the full-screen
     `nav#header-main-menu` (sm-clean): Home, About, About 2, About 3,
     Gallery, Contact.
  2. Hero `div.blog-top-content-holder` (bg `#2b3344`, min-height 100%):
     `div#particles-js` canvas (animated white specks) + centered
     `div.blog-top-content.content-1170.center-relative.center-text`:
     `h1.entry-title` "DESIGNER. PHOTOGRAPHER. BLOGGER." (56px lh 60,
     uppercase, mb 40) + `p.site-description` (26px lh 35, max-width 870px,
     quote) + `div.icon-scroll` (35×60 pill, `box-shadow: inset 0 0 0 1px
#fff`, radius 25, 8px white dot) bottom center.
  3. Blog posts ×5 — `div.blog-item-holder` (full-screen; `background-size:
cover; background-attachment: fixed; background-position: top center`
     on `demo-images/one_drop_home_image01..05`; `.no-background-image` bg
     `#2B3344`; text white). `div.entry-content` has `:before` overlay
     `#343451`; inner `div.content-1170.center-relative.center-text`
     (padding-top 17%, padding-bottom 200px): `span.entry-date.published`
     (20px uppercase, "November 19, 2017") · `span.cat-links` (20px
     uppercase, `/`-separated) · `h2.entry-title` (56px lh 60 uppercase;
     e.g. "Start by doing what's necessary then do what's possible",
     "Positive anything is better than negative nothing", "Trust in dreams
     for in them is hidden the gate to eternity", "If you can design one
     thing you can design everything", "A camel is a horse designed by a
     committee") · `div.excerpt-content` (36px lh 50) ·
     `div.read-more-holder` (margin 120px auto 30px; `img
read_more_icon.svg` "READ MORE") and/or `a.video-popup`
     (`video_icon.svg` + "WATCH VIDEO", `i` 40px).
  4. Testimonials `div.demo1.testimonial_slider_holder.slider_holder`
     (carouFredSel): `div.testimonial-top-quotes` (270px bold `#3b455b`
     quote glyph), `div.testimonial-content` ×3 — 36px lh 50 centered quote
     - `div.testimonial-author` (24px): "Most companies are looking to
       'wow'…" — CHRISTIAN LINDHOLM; "Be fluid. Treat each project
       differently…" — JAY-Z; "I don't start with a design objective…" — MIKE
       DAVISON; `div#demo1_pagination.carousel_pagination.left` dots.
  5. Footer `footer.footer` (bg `#191919`): widget columns
     (`h4.widgettitle` 24px), `div.logo-holder.footer-logo img` (droplet
     logo, `border: 10px solid #fff; border-radius: 90%`), social icons
     (Twitter, Linkedin, Dribbble, Instagram), copyright bar "© <year> All
     rights reserved | This template is made with <pulsing heart> by
     Colorlib" (`i.fa-heart` `#e76f7d`, `pulse` keyframes 1s infinite),
     `img back_to_top.png` (back-to-top).
- **Visual design (screenshot):** full-screen deep-navy hero with a faint
  particle/dust texture, droplet logo in a bright-blue circle at top center
  (per screenshot) / logo left + hamburger right (per DOM), bold white
  uppercase sans headline, thinner light quote line, thin white pill scroll
  indicator bottom-center. Dark, minimalist, artistic — a personal
  photography/designer portfolio blog. Post sections are full-bleed photos
  with dark overlay and centered white uppercase typography.
- **Design tokens (extracted from style.css + common.css):**
  - Brand/dark backgrounds: `#2b3344` (hero + no-image posts), `#343451`
    (post image overlay), `#191919` (footer), `#2a2e41` / `#2d333f` /
    `#0D1529` (dark alt shades), `#3b455b` (testimonial quote mark).
  - Text: `#ffffff` (hero/post titles), muted `#757B88` (9 usages),
    `#8f939e`, `#888888` (borders/dim), `#b5b5b5`, `#e2e2e2`.
  - Accent: `#e76f7d` (coral — pulsing footer heart; only accent color;
    text `#757B88`/`#8f939e` carry the rest of the UI).
  - Fonts: **Montserrat** (400/700) for headings + UI (uppercase
    treatment); **PT Serif** (400/700) for quotes/excerpts (serif
    contrast). Both loaded via `@font-face` in the preview; recreation uses
    Google Fonts `<link>`.
  - Buttons/controls: no filled buttons — icon + uppercase text pairs
    ("READ MORE", "WATCH VIDEO") with SVG icons; scroll indicator = thin
    white pill outline (radius 25) with dot; logo frame = circle
    (`border-radius: 90%`, 10px white border).
  - Post cards: full-bleed fixed-attachment background photos, dark
    `#343451` overlay, centered content, uppercase dates/categories/titles.
- **Recreation name:** Rivulet (NEW name, differs from ColorLib
  "Droppler"). App folder `apps/rivulet`, package
  `@free-react-templates/rivulet`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/rivulet-<n>/<w>/<h>`: hero none needed, post
  backgrounds 1600×900 ×5, logo → inline SVG droplet in a circle);
  lucide-react icons (Menu, X, ArrowDown, Play, ArrowRight, Heart,
  ArrowUp; Twitter/Linkedin/Dribbble/Instagram as inline SVG — lucide has
  no brand icons); Montserrat + PT Serif via Google Fonts `<link>`; hero
  particles → lightweight CSS/canvas dot animation or static speckle
  texture (no heavy particles.js dependency; document the choice); no
  assets copied.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn). Remember:
  `vite.config.ts` MUST register `injectUiSource()`.

## Requirements

### Requirement: Header and navigation

The system SHALL render a fixed header with the site logo and a hamburger
toggle that opens a full-screen navigation menu.

#### Scenario: Header content

- **GIVEN** the Rivulet page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the site logo (droplet mark + wordmark)
- **AND** the header SHALL show a hamburger toggle button on the right

#### Scenario: Menu opens and closes

- **GIVEN** the header is rendered
- **WHEN** the user presses the hamburger toggle
- **THEN** a full-screen menu SHALL open listing Home, About, About 2,
  About 3, Gallery, and Contact links
- **AND** pressing the toggle again SHALL close the menu

### Requirement: Hero section

The system SHALL render a full-height hero with a dark navy background, an
animated particle effect, a level-1 headline, a quote sub-line, and a scroll
indicator.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "DESIGNER. PHOTOGRAPHER.
  BLOGGER." in uppercase
- **AND** it SHALL show a quote sub-line below the heading
- **AND** it SHALL show a scroll indicator at the bottom of the hero

#### Scenario: Hero background

- **GIVEN** the hero is rendered
- **WHEN** the hero background is inspected
- **THEN** it SHALL use the brand navy color `#2b3344`
- **AND** it SHALL render a particle/dot animation overlay

### Requirement: Blog post sections

The system SHALL render at least three full-screen blog post sections, each
with a background image, dark overlay, date, category, title, excerpt, and a
read-more / watch-video action.

#### Scenario: Post content

- **GIVEN** the page is rendered
- **WHEN** a blog post section is displayed
- **THEN** it SHALL show an uppercase date (e.g. "November 19, 2017") and
  uppercase category links
- **AND** it SHALL show a level-2 heading (a quote) in uppercase
- **AND** it SHALL show an excerpt line
- **AND** it SHALL show a "READ MORE" action

#### Scenario: Post background

- **GIVEN** a blog post section is rendered
- **WHEN** the post background is inspected
- **THEN** it SHALL use a cover background image with a dark overlay
  (`#343451`)

#### Scenario: Watch video action

- **GIVEN** a blog post section with a video popup
- **WHEN** the user presses "WATCH VIDEO"
- **THEN** a video lightbox SHALL open (or, if omitted, the "WATCH VIDEO"
  button SHALL be present and focusable)

### Requirement: Testimonials slider

The system SHALL render a testimonial slider with a large quote glyph,
rotating quotes, and author names.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show a large decorative quote glyph
- **AND** it SHALL show a quote with an attributed author (e.g. "Be fluid.
  Treat each project differently…" — JAY-Z)
- **AND** it SHALL provide pagination controls to move between quotes

### Requirement: Footer

The system SHALL render a dark footer with the logo, social links, and a
copyright bar with a pulsing heart.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the logo inside a circular white border
- **AND** it SHALL show social links (Twitter, Linkedin, Dribbble,
  Instagram)
- **AND** it SHALL show a copyright line with a pulsing heart accent
  (`#e76f7d`)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Rivulet app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, all
  sections in the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Rivulet — Photography Blog"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/rivulet`
      (`scripts/verify-app.sh rivulet` in FAST_MODE; full `npm run gate` in
      CI).
- [ ] Visual fidelity: hero (navy + particles + scroll pill), 5 post
      sections (fixed photo + overlay + uppercase date/cat/title + excerpt +
      READ MORE/WATCH VIDEO), testimonials slider (270px quote glyph +
      pagination), footer (circle logo, socials, pulsing heart) match the
      ColorLib Droppler preview 1:1.
- [ ] Design tokens in `@theme`: navy `#2b3344`, overlay `#343451`, footer
      `#191919`, muted `#757B88`, accent `#e76f7d`; Montserrat + PT Serif
      loaded via Google Fonts.
- [ ] Placeholder images use `picsum.photos/seed/rivulet-<n>/<w>/<h>`;
      brand icons are inline SVG (no lucide brand icons); no ColorLib
      assets copied.
- [ ] PR description states source template (ColorLib "Droppler"), preview
      URL, design tokens, and what differs (name, placeholders, logo as
      inline SVG).
