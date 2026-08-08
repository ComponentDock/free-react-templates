# Template: Crumb (Food Blog Template)

## Purpose

Crumb is a single-page food-blog template in the free-react-templates monorepo.
It is an original React recreation of the ColorLib free "Foode" website
template design (see TEMPLATES.md), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Foode" — food blog / magazine template
  (source: https://colorlib.com/wp/template/foode/).
- **Preview URL:** https://preview.colorlib.com/theme/foode/ — HTTP 200, full
  rendered DOM analyzed (title: "Foode - Food Blog HTML5 Template");
  stylesheet `style.css` extracted (Google Fonts import:
  Merriweather 300/300i/400/400i + Poppins 300–600; `@import css/bootstrap.min.css`
  - `css/classy-nav.css`). Cross-checked against the TEMPLATES.md screenshot
    (`foode-free-template.jpg`, viewed) — designs match. The demo brands itself
    "foode"; our recreation uses the NEW name **Crumb**.
- **Section order (1:1):** Preloader → Header (top bar: search form + social
  icons; centered wordmark logo; main nav HOME/PAGES/CATEGORIES/TRAVEL/ABOUT/
  CONTACT with dropdowns) → Hero slider (full-width 480px slides, bg photo +
  bottom dark gradient, uppercase date/category + big serif title bottom-left)
  → Featured posts carousel (5 items: bg photo + bottom-left overlay content,
  numbered 01–05 indicator list on warm off-white panel) → Blog content area:
  main column (5 posts: thumbnail 50% + content 44%, wavy divider between,
  pagination NEWER/OLDER) + sidebar (About Me circle photo + signature + bio;
  Subscribe & Follow 7 icons; Latest Posts 5 items; Newsletter email form;
  Popular Tags chips) → Instagram strip ("Follow Us On Instagram", 6 square
  tiles, @foodeblog handle) → Footer (7 labeled social links row + centered
  copyright bar).
- **Design tokens extracted from the live preview CSS:**
  - Brand **terracotta/salmon `#e59f80`** (38 uses) — post dates/categories,
    link hovers, "Continue Reading" hover, search icon, newsletter submit
    button bg, hero title hover.
  - Ink **`#191919`** — dark text, `.foode-btn` background (white 14px text).
  - Body text **`#595959`** (16px, post excerpts); muted meta **`#a6a6a6`**
    (bylines, views/comments, Continue Reading), `#bbbbbb` secondary.
  - Light surfaces: **`#f2f4f5`** (newsletter input bg), **`#ebebeb`** (tag
    chips, borders), warm off-white **`#f8f2ef`** (featured-carousel indicator
    panel); page background white `#ffffff`.
  - Fonts: headings **"Merriweather", serif** (300/400 + italics), body/meta
    **"Poppins", sans-serif** (300–600, uppercase letter-spaced labels e.g.
    13px / letter-spacing 2px).
  - Buttons: `.foode-btn` — 14px white text on `#191919`, min-width 80px,
    height 30px, square corners; newsletter submit — 50×50 square `#e59f80`
    with white paper-plane icon, hover `#191919`.
  - Radii: only the About photo is a **circle (200×200, border-radius 50%)**;
    everything else is square (`border-radius: 0`).
  - Shadows: top bar `0 3px 10px 2px rgba(0,0,0,0.15)`; featured carousel
    `0 0 10px 3px rgba(0,0,0,0.15)`.
  - Spacing: sections `padding: 100px 0` (`section-padding-100`); logo
    `margin-top: 40px`; widgets `margin-top: 50px`; footer `margin-top: 60px`;
    hero slide height 480px (400px mobile); featured area 502px.
  - Hero gradient overlay: `linear-gradient(to top, rgba(0,0,0,0.7) 0%,
rgba(0,0,0,0.01) 90%, transparent)` on the bottom half; slides have a slow
    Ken Burns zoom (`slide 24s linear infinite`).
- **Visual design (from screenshot + live view):** clean white food-blog
  aesthetic; big food photography with dark-gradient overlay + white serif
  titles in the hero/featured sliders; terracotta `#e59f80` accents for dates,
  categories and interactive hovers; **wavy divider lines** between blog posts
  and around widgets (organic food theme); brush-script wordmark logo and a
  script signature under the About photo; serif (Merriweather) titles vs
  uppercase Poppins meta labels.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/crumb-<n>/<w>/<h>`); icons → lucide-react (social brand
  icons as inline SVG per repo rule); Merriweather + Poppins via Google Fonts
  `<link>`; no assets copied. Copy paraphrased but same content kinds
  (post titles, bylines, widget headings, tag words, footer text).

Crumb lives in `apps/crumb` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Top bar and navigation

The system SHALL render a top header with a search form, social icons, a
centered wordmark logo, and a main navigation bar.

#### Scenario: Top bar content

- **GIVEN** the Crumb page is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL show a search input with placeholder text
  ("Search and hit enter...") and a search icon button
- **AND** the top bar SHALL show a row of social icons (Facebook, Twitter,
  Google Plus, LinkedIn, Instagram, Vimeo, YouTube)
- **AND** the top bar SHALL sit on a white background with a soft drop shadow

#### Scenario: Logo and navigation

- **GIVEN** the Crumb page is rendered
- **WHEN** the header is displayed
- **THEN** a centered "Crumb" wordmark logo SHALL appear above the nav
- **AND** the nav SHALL show links Home, Pages, Categories, Travel, About, and
  Contact in uppercase letter-spaced text
- **AND** the nav SHALL collapse into a mobile menu button on narrow viewports

### Requirement: Hero slider

The system SHALL render a full-width hero carousel of blog-post slides.

#### Scenario: Hero slide content

- **GIVEN** the Crumb page is rendered
- **WHEN** the hero section is displayed
- **THEN** each slide SHALL show a full-width photo (480px tall, 400px on
  mobile) with a dark gradient fading up from the bottom
- **AND** each slide SHALL show an uppercase date/category label and a large
  white serif post title anchored bottom-left
- **AND** the hero SHALL cycle through at least 3 slides with slide controls
  (prev/next or dots)

### Requirement: Featured posts carousel

The system SHALL render a "featured posts" carousel with numbered indicators.

#### Scenario: Featured carousel

- **GIVEN** the Crumb page is rendered
- **WHEN** the featured posts section is displayed
- **THEN** the section SHALL show a large carousel image with the post
  date/category and title overlaid bottom-left
- **AND** the section SHALL show a numbered indicator list (01–05) with the
  corresponding post titles on a warm off-white panel
- **AND** selecting an indicator SHALL switch the featured post

### Requirement: Blog post list

The system SHALL render the main blog feed with five posts and pagination.

#### Scenario: Post card layout

- **GIVEN** the Crumb page is rendered
- **WHEN** the blog list is displayed
- **THEN** each post SHALL show a thumbnail (50% width) beside a content block
  (44% width): uppercase terracotta date/category, serif title, "by Author"
  italic byline with view and comment counts, a short excerpt, and a
  "Continue Reading" link
- **AND** consecutive posts SHALL be separated by a wavy divider line

#### Scenario: Pagination

- **GIVEN** the Crumb page is rendered
- **WHEN** the blog list bottom is reached
- **THEN** pagination SHALL show "Newer" and "Older" buttons

### Requirement: Sidebar widgets

The system SHALL render a sidebar with About, Subscribe & Follow, Latest
Posts, Newsletter, and Popular Tags widgets.

#### Scenario: About widget

- **GIVEN** the Crumb page is rendered
- **WHEN** the sidebar is displayed
- **THEN** the About widget SHALL show a 200px circular photo, a script-style
  author signature, and a short bio paragraph

#### Scenario: Subscribe & Follow widget

- **GIVEN** the Crumb page is rendered
- **WHEN** the sidebar is displayed
- **THEN** the Subscribe & Follow widget SHALL show a row of social icons

#### Scenario: Latest Posts widget

- **GIVEN** the Crumb page is rendered
- **WHEN** the sidebar is displayed
- **THEN** the Latest Posts widget SHALL list 5 recent posts, each with a
  small thumbnail, a serif title, and a byline

#### Scenario: Newsletter widget

- **GIVEN** the Crumb page is rendered
- **WHEN** the sidebar is displayed
- **THEN** the Newsletter widget SHALL show an email input (light-gray
  `#f2f4f5` background) and a terracotta square submit button with a
  paper-plane icon
- **AND** submitting the form SHALL NOT navigate away (prevented default) and
  SHALL show a confirmation message

#### Scenario: Popular Tags widget

- **GIVEN** the Crumb page is rendered
- **WHEN** the sidebar is displayed
- **THEN** the Popular Tags widget SHALL show uppercase tag chips (e.g.
  Creative, Unique, Template, Photography, Travel, Lifestyle, Food, Idea) on
  light-gray `#ebebeb` chips

### Requirement: Instagram strip

The system SHALL render an Instagram section with six square photo tiles.

#### Scenario: Instagram section

- **GIVEN** the Crumb page is rendered
- **WHEN** the Instagram section is displayed
- **THEN** the section SHALL show the heading "Follow Us On Instagram" with an
  @crumbblog handle
- **AND** the section SHALL show a row of 6 square photo tiles

### Requirement: Footer

The system SHALL render a footer with labeled social links and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the Crumb page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL show labeled social links (Facebook, Twitter,
  Google Plus, LinkedIn, Instagram, Vimeo, YouTube) in a row
- **AND** the footer SHALL show a centered copyright line (current year, "All
  rights reserved", "made with ♥" credit)

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] `apps/crumb` created from a blog/landing app pattern, package renamed to
      `@free-react-templates/crumb`
- [ ] TDD: tests written first (red), then implementation (green)
- [ ] 100% coverage lines/functions/branches/statements (`npm run
test:coverage -- --project apps/crumb` or `scripts/verify-app.sh crumb`)
- [ ] Brand terracotta `#e59f80` + ink `#191919` + muted `#a6a6a6` in
      `@theme`; Merriweather (headings) + Poppins (body) via Google Fonts link
- [ ] Section order matches the original 1:1 (see Design reference)
- [ ] Wavy divider between blog posts; circular About photo; square buttons
      and chips (radius 0) — only the About photo is rounded
- [ ] Hero + featured carousels implemented with slide switching and
      accessible controls (aria-labels)
- [ ] Placeholder images via `picsum.photos/seed/crumb-<n>/<w>/<h>`; no assets
      copied; social brand icons as inline SVG
- [ ] PR description: source template, preview URL, design tokens, what
      differs
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL
      (`free-react-templates-crumb.surge.sh`) + homepage + `npm run
readme:status`
