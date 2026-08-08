# Template: Newsprint (Magazine / Blog Template)

## Purpose

Newsprint is a single-page magazine-blog landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Magdesign" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Magdesign" — magazine/blog template
  (source: https://colorlib.com/wp/template/magdesign/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/magdesign/
  (HTTP 200, 40.7 KB rendered DOM, title "MagDesign Magazine"). Stylesheet:
  `css/style.min.css` (Bootstrap 5-based, 244 KB, extracted). Sliders are
  **tiny-slider (tns)** carousels with dot navs and prev/next controls.
- **Screenshot:** `magdesign-free-template.jpg` (1200×946, viewed in browser)
  — clean minimalist magazine layout: bold **"MAGDESIGN"** wordmark centered
  at the very top with a pill search bar left and small social icons
  (twitter/facebook/instagram) + hamburger right; "Trending" heading centered
  above a large horizontal feature card (photo left, content right: category
  "Business Travel · July 2, 2020", bold headline "Your most unhappy
  customers are your greatest source of learning.", excerpt, author byline
  with circular avatar); below it a row of three standard article cards
  (photo top, meta, title, author); further cards continue below. Neutral
  white/gray/black palette — the photos carry all the color. The demo brands
  itself "MagDesign"; recreation uses the NEW name **Newsprint**.
- **Visual design (from DOM + CSS tokens + screenshot):** modern magazine
  aesthetic — white page background, dark text on white, generous whitespace,
  centered serif-free logo, pill-shaped search + CTA buttons, rounded post
  thumbnails (7px radius), circular author avatars, orange `#f79918` accent
  for interactive states (hover, active nav link, slider dots, button),
  sticky navbar that turns solid black on scroll.

- **Structure (1:1, section order):**
  1. Navbar `nav.site-nav` — `.site-navigation` with centered brand
     "MagDesign", left pill **search input** (`input#site-search`,
     `form-control`, placeholder "Search..."), right social icons
     (icon-facebook, icon-twitter, icon-linkedin, icon-youtube-play) +
     hamburger toggle; menu links **Home / Categories** (dropdown:
     Travel, Food, Technology, Business) **/ About / Contact**; CTA pill
     (`cta-button`, border-radius 30px, hover → orange bg). Sticky:
     `.sticky-wrapper.is-sticky .site-navbar` background `#000` with
     shadow; active link `#f79918`. Mobile off-canvas menu
     (`site-mobile-menu`, hamburger-driven).
  2. Trending `div.section.pt-5.pb-0` — heading `h2.heading` **"Trending"**;
     `.posts-slide-wrap` > `.posts-slide` (tns slider) of large horizontal
     feature cards `.post-entry.d-lg-flex` (thumbnail `col-lg-7` left,
     `.content align-self-center` right): category tags (Business, Travel) +
     date "July 2, 2032" in `.post-meta`, `h3` headline "Your most unhappy
     customers are your greatest source of learning.", excerpt paragraph,
     `.post-author` (circular `.author-pic` avatar + "CEO and Founder").
     tns dot nav: 7px circles `rgba(0,0,0,.2)`, active `#f79918`.
  3. Featured posts grid `div.section` — row of **3** `col-lg-4`
     `.post-entry.d-block.small-post-entry-v` vertical cards (thumbnail top,
     `.content`: `.post-meta.mb-1` category + date, `h3` title, author).
  4. Most Popular `div.section` — heading h2 **"Most Popular Posts"**;
     `.most-popular-slider-wrap.px-3.px-md-0` > `.most-popular-slider` (tns)
     of horizontal rows `.post-entry.d-md-flex.xsmall-horizontal.mb-5`
     (thumb `me-md-3` left, content right), prev/next controls
     (`#most-popular-nav`).
  5. Sports + Business `div.section` — two category blocks in one row: each
     `h2.h4.fw-bold` heading (**Sports**, **Business**) over a small post
     list (thumb + title + meta rows, `post-entry.xsmall-horizontal`).
  6. Subscribe `div.py-5.bg-light.mx-md-3.sec-subscribe` — heading
     **"Subscribe to newsletter"**, email input `input#newsletter-email`
     (`form-control`, placeholder "Enter your email", border-radius 7px) +
     `input.btn.btn-primary` **Subscribe** (orange bg, white text, 2px
     transparent border; hover: white bg + orange text + shadow).
  7. Footer `footer.site-footer` (padding 70px 0, color #888) —
     `.footer-cta` h2 in orange `#f79918`; `.widget` columns with `h3`
     headings 12px 700 uppercase `#10495c`; `.social li a` 40×40 circles
     `#ccc` (hover `#f79918`, white icon); copyright bar
     `.row.justify-content-center.copyright` — "Copyright © <year> All
     rights reserved" + "Terms & Conditions / Privacy Policy".

- **Design tokens extracted from `css/style.min.css`:**
  - Accent orange **`#f79918`** — `.btn-primary` bg, link hover, active nav
    link, `.section .subheading` (12px uppercase, letter-spacing .1rem),
    tns active dot, `.site-footer .footer-cta h2`, social icon hover, mobile
    menu link hover.
  - Dark teal **`#10495c`** — `.site-footer .widget h3` heading color,
    `.btn-outline-secondary` border/text.
  - Body text **`#888`** (Poppins 400, 14px); headings dark (`#000`/`#212529`).
  - Navbar: transparent → sticky `background: #000`, shadow
    `4px 0 20px -5px rgba(0,0,0,.1)`.
  - Buttons `.btn.btn-primary`: `#f79918` bg, white text, 2px transparent
    border; hover white bg + orange text + `0 15px 30px 0 rgba(0,0,0,.2)`
    shadow. CTA pill (`cta-button`) border-radius **30px**; `form-control`
    border-radius **7px**.
  - Post thumbnails border-radius **7px**; author avatars border-radius
    **50%**; slider dots 7px circles.
  - Font: **Poppins** (Google Fonts, body 400/14px) + **Georgia, serif** for
    blockquotes (`.post-section blockquote`).
  - Footer: `padding: 70px 0`, text `#888` 14px; widget h3 12px 700
    uppercase `#10495c`; social icons 40×40 `#ccc` circles.
  - Dark mode: `[data-bs-theme=dark]` overrides (Bootstrap class-based).

- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/newsprint-<n>/<w>/<h>`); icons → lucide-react
  (search, menu, chevrons, socials as inline SVG since lucide-react removed
  brand glyphs); Poppins via Google Fonts `<link>`; no assets copied.
  Sliders (Trending, Most Popular) become scrollable/carousel rows — a
  lightweight index-based carousel or CSS scroll-snap; dot nav with active
  orange state.

Newsprint lives in `apps/newsprint` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky top navigation bar with a centered site
name, a search input, social icons, a hamburger toggle, and section links.

#### Scenario: Navbar content

- **GIVEN** the Newsprint page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Newsprint" centered
- **AND** a search input with placeholder "Search..." SHALL be visible
- **AND** social icons SHALL be visible
- **AND** the navbar SHALL show links Home, Categories, About, and Contact

#### Scenario: Categories dropdown

- **GIVEN** the navbar is rendered
- **WHEN** the user opens the Categories menu
- **THEN** it SHALL show entries Travel, Food, Technology, and Business

#### Scenario: Mobile menu

- **GIVEN** the navbar is rendered on a narrow viewport
- **WHEN** the user presses the hamburger toggle
- **THEN** a mobile menu SHALL open with the same section links
- **AND** pressing the toggle again SHALL close it

### Requirement: Trending slider

The system SHALL render a "Trending" section with a slider of large
horizontal feature post cards, each with a thumbnail, category tags, date,
headline, excerpt, and author byline.

#### Scenario: Trending content

- **GIVEN** the Trending section is displayed
- **WHEN** the page loads
- **THEN** a heading "Trending" SHALL be shown
- **AND** at least one large horizontal post card SHALL appear with a
  thumbnail on the left and content on the right
- **AND** each card SHALL show category tags, a date, a headline, an excerpt,
  and an author byline with a circular avatar

#### Scenario: Slider navigation

- **GIVEN** the Trending slider has multiple slides
- **WHEN** the user clicks a dot or a next/prev control
- **THEN** the displayed slide SHALL change
- **AND** the active dot SHALL be highlighted in the accent color

### Requirement: Featured posts grid

The system SHALL render a three-column grid of vertical post cards below the
Trending slider.

#### Scenario: Featured grid content

- **GIVEN** the featured posts grid is displayed
- **WHEN** the page loads
- **THEN** exactly three vertical post cards SHALL appear side by side on
  desktop
- **AND** each card SHALL show a thumbnail, category + date meta, a headline,
  and an author byline

### Requirement: Most popular slider

The system SHALL render a "Most Popular Posts" section with a slider of
horizontal post rows and prev/next controls.

#### Scenario: Most popular content

- **GIVEN** the Most Popular section is displayed
- **WHEN** the page loads
- **THEN** a heading "Most Popular Posts" SHALL be shown
- **AND** at least one horizontal post row SHALL appear with a thumbnail on
  the left and title/meta content on the right
- **AND** prev/next controls SHALL be present

### Requirement: Category sections

The system SHALL render two category blocks (Sports and Business), each with
a heading and a small list of post rows.

#### Scenario: Category content

- **GIVEN** the category section is displayed
- **WHEN** the page loads
- **THEN** a "Sports" heading and a "Business" heading SHALL be shown
- **AND** each category SHALL show a list of small post rows with a
  thumbnail, title, and meta

### Requirement: Newsletter subscribe

The system SHALL render a light-background subscribe section with an email
input and a Subscribe button.

#### Scenario: Subscribe form

- **GIVEN** the subscribe section is displayed
- **WHEN** the user enters an email and presses Subscribe
- **THEN** the section SHALL indicate the subscription was received (success
  message)

#### Scenario: Invalid email

- **GIVEN** the subscribe form is displayed
- **WHEN** the user submits without a valid email
- **THEN** a validation error SHALL be shown and no success message SHALL
  appear

### Requirement: Footer

The system SHALL render a footer with a CTA heading, widget columns, social
icons, and a copyright bar with Terms & Conditions / Privacy Policy links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a footer CTA heading in the accent color
- **AND** at least two widget columns with uppercase headings
- **AND** circular social icon buttons
- **AND** a copyright line with Terms & Conditions and Privacy Policy links

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Newsprint app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the navbar in the banner landmark, the
  Trending, featured grid, most popular, category, and subscribe sections in
  the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Newsprint — Magazine Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/newsprint`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/newsprint`)
- [ ] Section order matches the reference 1:1 (navbar → Trending slider → featured grid → Most Popular slider → Sports/Business categories → subscribe → footer)
- [ ] Design tokens from the reference used in `@theme` (accent orange #f79918, dark teal #10495c, body #888, headings #000/#212529, Poppins)
- [ ] Pill CTAs (radius 30px), form controls radius 7px, thumbnails radius 7px, circular avatars; orange accent on hover/active/dots
- [ ] Sticky navbar turns solid black with shadow on scroll
- [ ] Placeholder images are seeded picsum (no copied assets); icons from lucide-react / inline SVG for brands
- [ ] README Templates status + ALL THREE TEMPLATES.md Magdesign lines (271, 603, 2199) marked `[x]` after merge
