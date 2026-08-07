# Template: Marlowe (Blog Template)

## Purpose

Marlowe is a single-page blog/magazine template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Callie" entry
in TEMPLATES.md (Blog category), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The reference is a classic white magazine blog: a top nav row with social
icons and a centered logo, a "hot posts" hero (one large featured post + two
stacked), a two-column layout (post rows with excerpts on the left, a
sidebar with social/categories/newsletter/popular-posts widgets on the
right), a full-width Instagram tile strip, and a dark near-black footer with
four widgets. The brand accent is a hot pink/red (`#ee4266`). Marlowe
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Callie" — Blog / Magazine HTML Template
  (source: https://colorlib.com/wp/template/callie/). Listed in
  TEMPLATES.md under **Blog (60)**.
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/callie/`
  (HTTP 200). DOM fetched and analyzed (`/tmp/callie-prep/callie.html`,
  46 KB); stylesheet `https://preview.colorlib.com/theme/callie/css/style.css`
  (27 KB) extracted for tokens; screenshot
  (`callie-free-template.jpg`, TEMPLATES.md) + live render reviewed visually
  (browser). All references verified live.
- **Section order (1:1 from the preview DOM):**
  1. Nav (banner): top row — social icon links LEFT (Facebook, Twitter,
     Google+, Instagram), centered logo image (recreate as text wordmark
     "Marlowe"), buttons RIGHT (aside-menu toggle + search). Below: nav menu
     — HOME, LIFESTYLE ▾, FASHION ▾, TECHNOLOGY, HEALTH, TRAVEL (dropdown
     arrows on some). Full-screen search overlay (`#nav-search`, bg `#1b1c1e`)
     slides down when the search button is clicked; fixed right aside panel
     (`#nav-aside`, max-width 360px, bg `#1b1c1e`) slides in from the
     hamburger toggle with the same links + social icons.
  2. Hot posts (`row hot-post`): LEFT col-md-8 `hot-post-left` — one large
     `post post-thumb` (full-width image + dark gradient overlay
     `linear-gradient(180deg, rgba(27,28,30,0) 0%, rgba(27,28,30,.8) 90%)`
     - pink category tag + white title + meta overlaid on the image);
       RIGHT col-md-4 `hot-post-right` — two stacked smaller posts (image +
       pink tag + title + meta).
  3. Main row (container → col-md-8 main + col-md-4 sidebar):
     - Main column: section "RECENT POSTS" with **5** `post post-row` posts
       (image 40% width left, body right: pink uppercase category links,
       title, meta "JOHN DOE • 20 APRIL 2018", lorem excerpt) → section
       "LIFESTYLE" (**3** post-row posts) → section "FASHION & TRAVEL"
       (**3** posts) → section "TECHNOLOGY & HEALTH" (**3** posts) → LOAD
       MORE button (`primary-button`, centered).
     - Sidebar (`aside`, col-md-4): SAMPLE AD 728x90 placeholder
       (`aside-widget text-center`, bordered box) → SOCIAL MEDIA
       (`social-widget`: 3 brand-color tiles — Facebook 21.2K Followers,
       Twitter 10.2K Followers, Google+ 5K Followers) → CATEGORIES
       (`category-widget`: Lifestyle 451, Fashion 230, Technology 40,
       Travel 38, Health 24) → NEWSLETTER (`newsletter-widget`: email
       input + SUBSCRIBE primary-button, 2px dashed `#e8eaed` side borders,
       rotated envelope watermark) → POPULAR POSTS (4 `post post-widget`
       rows: small thumb + pink tag + title).
  4. Instagram section: section-title "INSTAGRAM" + `galery-widget` grid of
     6 square image tiles (3 per row; hover zoom scale 1.2, 1.6s).
  5. Footer (`#footer`, bg `#1b1c1e`, padding 80px top): 4 `footer-widget`
     columns — (a) logo image (→ text wordmark "Marlowe") + about blurb
     ("Nec feugiat nisl pretium fusce...") + social icons; (b) CATEGORIES
     (same 5 links with counts); (c) TAGS (11 tag links: Social, Lifestyle,
     Blog, Travel, Technology, Fashion, Life, News, Magazine, Food,
     Health); (d) NEWSLETTER (email input + SUBSCRIBE). Footer bottom bar
     (`footer-bottom`, border-top 1px `#323335`): footer nav links right
     (Home, About Us, Contacts, Advertise, Privacy) + copyright line left
     ("Copyright © <year> All rights reserved | This template is made with
     <heart> by ...").
- **Design tokens (extracted from style.css):**
  - Brand color: **`#ee4266`** hot pink/red — 22 usages: primary buttons,
    category tags, link hovers, active dropdown tab, load-more button,
    footer link hover. Primary button bg.
  - Text: body/headings `#323335` (dark grey); near-black `#1b1c1e`
    (search overlay, nav aside, footer bg, page-header bg, gradient
    overlay); meta grey `#97989b` (12px uppercase meta, footer text);
    secondary button `#353535`; light line/border grey `#e8eaed`
    (section-title rule, dashed newsletter borders, watermark).
  - Fonts: **Montserrat** 400/700 (headings) + **Muli** 400/700 (body) —
    Google Fonts `<link>` in the preview HTML head.
  - Buttons: `.primary-button` — bg `#ee4266`, white text, inset
    `box-shadow: 0 0 0 2px #ee4266` (flat, no radius), hover → transparent
    bg + pink text. `.secondary-button` — bg `#353535` with the same inset
    pattern, hover → transparent + `#353535` text. Inputs `.input` — 100%
    width, height 40px.
  - `.section-title`: inline-block uppercase title (16px) sitting on a 2px
    `#e8eaed` horizontal rule (title z-index above the line).
  - `.post-category a`: 12px, weight 700, UPPERCASE, `#ee4266`, comma
    separators. `.post-meta li`: 12px, UPPERCASE, `#97989b`, "•" bullet
    separators, hover `#ee4266`.
  - Post cards: white `.post-body` overlaps the image by -50px top margin,
    5% padding, z-index 10 (signature overlap effect); images zoom
    scale(1.2) over 1.6s on hover (overflow hidden).
  - `.post.post-thumb .post-body`: absolutely positioned over the image with
    the dark gradient; white title + meta.
  - Social tile brand colors: `#225b99` (Facebook), `#00adf2` (Twitter),
    `#dc4d2d` (Google+), `#d341b2` (Instagram), `#cc2127` (Pinterest).
  - Newsletter widget: dashed 2px `#e8eaed` left/right borders, large
    rotated FontAwesome envelope glyph (`#e8eaed`, 160px, rotate 13deg) as
    watermark; footer variant borderless with `#323335` watermark.
  - Footer: bg `#1b1c1e`, text `#97989b`, link hover `#ee4266`,
    `.footer-title` 14px UPPERCASE white, footer-bottom border-top
    1px `#323335`.
- **Visual design (screenshot + live render):** clean white magazine blog;
  centered black serif-ish text logo; pink uppercase category tags; big
  featured image with dark gradient + white title; two-column layout with
  sidebar ads (SAMPLE AD 300x250 / 728x90 with pink borders); pink
  SUBSCRIBE / LOAD MORE square buttons; dark near-black footer with
  newsletter + categories + tags. Accent hot pink `#ee4266` throughout.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/marlowe-<n>/<w>/<h>`: hot-post feature 800×500,
  stacked 400×250, post-row 400×300, sidebar thumbs 100×100, insta tiles
  300×300); icons → lucide-react (Search, Menu, X, Mail; Facebook/Twitter/
  Instagram/Google+ as inline SVG brand icons); Montserrat + Muli via
  Google Fonts `<link>`; logo image → text wordmark; ad placeholders →
  bordered grey boxes labeled "Sample Ad 728x90 / 300x250"; no assets
  copied.

Marlowe lives in `apps/marlowe` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with social icons, a centered
logo, a category menu, a search toggle and an aside-menu toggle.

#### Scenario: Navbar content

- **GIVEN** the Marlowe page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show social icon links on the left (each with an
  aria-label)
- **AND** it SHALL show the centered wordmark "Marlowe" as the logo
- **AND** it SHALL show the menu links HOME, LIFESTYLE, FASHION,
  TECHNOLOGY, HEALTH and TRAVEL
- **AND** it SHALL show a search toggle button and an aside-menu toggle
  button on the right

#### Scenario: Search overlay

- **GIVEN** the navbar is rendered
- **WHEN** the user clicks the search toggle
- **THEN** a dark search overlay SHALL slide down with a search input
- **AND** clicking the close button SHALL hide it again

#### Scenario: Aside panel

- **GIVEN** the navbar is rendered
- **WHEN** the user clicks the aside-menu toggle
- **THEN** a fixed right-side panel SHALL slide in with the menu links and
  social icons
- **AND** clicking its close button SHALL slide it back out

### Requirement: Hot posts hero

The system SHALL render a hot-posts hero with one large featured post on the
left and two stacked posts on the right.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hot posts area is displayed
- **THEN** it SHALL show a large featured post on the left with a full-width
  image, a dark gradient overlay, an uppercase pink category tag, a title
  and meta overlaid on the image
- **AND** it SHALL show two smaller stacked posts on the right, each with an
  image, a pink category tag, a title and meta

### Requirement: Recent posts sections

The system SHALL render the main column with four titled post sections
(RECENT POSTS, LIFESTYLE, FASHION & TRAVEL, TECHNOLOGY & HEALTH) of post
rows and a LOAD MORE button.

#### Scenario: Post row content

- **GIVEN** the main column is displayed
- **WHEN** a post row is shown
- **THEN** it SHALL show a post image on the left (about 40% width) and
  content on the right: uppercase pink category links, a title, a meta row
  (author • date) and a short excerpt

#### Scenario: Section titles

- **GIVEN** the main column is displayed
- **WHEN** the sections are shown
- **THEN** the section titles SHALL read "Recent Posts", "Lifestyle",
  "Fashion & Travel" and "Technology & Health"
- **AND** each title SHALL be uppercase on a thin grey rule line

#### Scenario: Load more

- **GIVEN** the main column is displayed
- **WHEN** the last section is shown
- **THEN** a centered "Load More" button SHALL appear below the posts

### Requirement: Sidebar

The system SHALL render a right sidebar with an ad placeholder, a social
media widget, a categories widget, a newsletter form and a popular posts
widget.

#### Scenario: Social media widget

- **GIVEN** the sidebar is displayed
- **WHEN** the social widget is shown
- **THEN** it SHALL show three brand-colored tiles with follower counts
  (e.g. Facebook 21.2K Followers, Twitter 10.2K Followers, Google+ 5K
  Followers)

#### Scenario: Categories widget

- **GIVEN** the sidebar is displayed
- **WHEN** the categories widget is shown
- **THEN** it SHALL list Lifestyle, Fashion, Technology, Travel and Health
  with post counts (e.g. 451, 230, 40, 38, 24)

#### Scenario: Newsletter widget

- **GIVEN** the sidebar is displayed
- **WHEN** the newsletter widget is shown
- **THEN** it SHALL show an email input and a "Subscribe" button
- **AND** the widget SHALL have dashed side borders and a watermark icon

#### Scenario: Popular posts widget

- **GIVEN** the sidebar is displayed
- **WHEN** the popular posts widget is shown
- **THEN** it SHALL list post rows with a small thumbnail, an uppercase pink
  category tag and a title

#### Scenario: Ad placeholder

- **GIVEN** the sidebar is displayed
- **WHEN** the top of the sidebar is shown
- **THEN** a bordered placeholder box labeled as a sample ad SHALL appear

### Requirement: Instagram section

The system SHALL render a full-width Instagram strip with a title and a grid
of square image tiles.

#### Scenario: Instagram content

- **GIVEN** the page is rendered
- **WHEN** the Instagram section is displayed
- **THEN** it SHALL show the title "Instagram"
- **AND** it SHALL show a grid of square image tiles (6), each a link with
  an accessible name

### Requirement: Footer

The system SHALL render a dark footer with four widgets and a bottom bar.

#### Scenario: Footer widgets

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show four widget columns: brand/about with social icons,
  Categories, Tags and Newsletter
- **AND** the footer SHALL use a near-black background with grey text and
  pink link hovers

#### Scenario: Footer bottom bar

- **GIVEN** the footer is rendered
- **WHEN** the bottom bar is displayed
- **THEN** it SHALL show the footer nav links Home, About Us, Contacts,
  Advertise and Privacy
- **AND** it SHALL show the copyright line "© <year> All rights reserved |
  This template is made with <heart> by ..."

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Marlowe app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the navbar in the banner landmark, all
  sections in the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Marlowe — Blog Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-marlowe`.
- [ ] App renders all sections 1:1 in the order above (nav → hot posts →
      post sections + sidebar → Instagram → footer).
- [ ] Design tokens match the reference: brand hot pink `#ee4266`, text
      `#323335`, meta `#97989b`, lines `#e8eaed`, secondary `#353535`,
      dark `#1b1c1e` (footer/search/aside), social tile brand colors;
      Montserrat (headings) + Muli (body); flat square buttons with the
      inset-shadow hover pattern; uppercase 12px pink category tags;
      uppercase 12px grey meta with bullet separators.
- [ ] Signature overlap effect reproduced: white post body overlapping the
      image top by ~50px on post rows; image hover zoom (scale 1.2, 1.6s).
- [ ] Dark gradient overlay on the featured hot post (transparent →
      rgba(27,28,30,0.8)).
- [ ] Fonts (Montserrat + Muli) loaded via Google Fonts `<link>`; no font
      or image assets copied from the original.
- [ ] All images are seeded picsum placeholders
      (`picsum.photos/seed/marlowe-<n>/<w>/<h>`); logo recreated as text
      wordmark; ads as bordered placeholder boxes.
- [ ] `vite.config.ts` registers `injectUiSource()` (see conventions).
- [ ] 100% Vitest coverage on `apps/marlowe` (lines/functions/branches/
      statements).
- [ ] PR description includes: source template (ColorLib "Callie"), preview
      URL (https://preview.colorlib.com/theme/callie/ — reachable), design
      tokens used, what differs (name, placeholder images, text logo,
      placeholder ads).
