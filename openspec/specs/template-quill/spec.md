# Template: Quill (Blog / Magazine)

## Purpose

A light, editorial blog-and-magazine landing template: sticky white navbar, full-bleed
photographic hero with a story meta bar, a three-card "latest" carousel, a travel
media-list band, a four-column fashion grid with "Load More", a team band with a
brand-tinted hover overlay, and a dark three-column footer carrying the newsletter form.
Recreation of the ColorLib **Blogger** template
(https://colorlib.com/wp/template/blogger/) as a React 19 + Vite + Tailwind CSS 4 +
TypeScript single-page application.

- **Source slug:** `blogger`
- **ColorLib page:** https://colorlib.com/wp/template/blogger/
- **Live preview:** https://preview.colorlib.com/theme/blogger/
- **Diagnostic page title:** `Travel, style & everyday curiosity | Blogger`
- **New name:** `quill` (apps/quill, `@free-react-templates/quill`) — differs from the
  ColorLib source name, single lowercase word, no collision in `apps/`
- **Deploy target:** https://quill.free.componentdock.com (`apps/quill/public/CNAME`,
  `homepage` in `apps/quill/package.json`)
- **Category:** Blog / Magazine (TEMPLATES.md `## Blog (60)`, row 247 — one listing)
- **Screenshot reference:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/blogger-free-blogging-website-template.jpg
- **Reference readings (2026-10-22, `curl -4`):** preview page **200, 32,728 B**;
  `css/main.min.css` **42,109 B** (token authority); `css/modern.min.css` **13,735 B**;
  `css/fonts.min.css` **3,460 B**; `kit/sliders.min.css` **2,576 B**; screenshot
  **210,969 B**. `preview.colorlib.com` and `colorlib.com` are answered only over IPv4
  from this host — plain `curl` (IPv6 first) hangs, so always pass `-4`.

> **Reference generation note (2026-10-22).** `preview.colorlib.com/theme/blogger/`
> currently serves ColorLib's refreshed 2026 build of the same design: Bootstrap 5.3.8,
> `css/modern.min.css` overrides and rewritten copy ("A slower morning beside the
> Danube.", eyebrow chips, "Join the list" form). The **skeleton is unchanged** — the
> live DOM still exposes `section#home.banner-area`, `section#news.category-area`,
> `section#travel.travel-area`, `section#fashion.fashion-area`,
> `section#team.team-area` and one `footer.footer-area`, i.e. the exact six bands below.
> The **tokens, card anatomy and section order are identical** to `css/main.min.css` and
> to the published screenshot, so this spec pins the classic copy from the screenshot
> (the copy `apps/quill` ships) and records the 2026 copy as the live variant. Nothing
> here requires new app code.

> This spec was written **after** the app shipped — `apps/quill` is one of the 10 README
> rows that had no `template-<name>/spec.md` in history. It documents the live reference
> as verified on 2026-10-22 and matches the implementation already in `apps/quill`.

## Design tokens

Extracted from the preview stylesheet
(`https://preview.colorlib.com/theme/blogger/css/main.min.css`, 42,109 B) — values plus
their declaration counts in the reference sheet:

### Colors

| Token                 | Value                  | Usage (reference sheet)                                                              |
| --------------------- | ---------------------- | ------------------------------------------------------------------------------------ |
| `--color-brand`       | `#69b4fd`              | Light-blue brand — 35 declarations: nav hover, link hover, `.load-more` hover border/text, team overlay (`#69b4fdb3`), footer link hover, copyright links |
| `--color-brand-deep`  | `#8490ff`              | Gradient end — 6 declarations, always paired with `#62bdfc`                          |
| `--color-gradient-start` | `#62bdfc`           | Gradient start — 6 declarations; `.primary-btn`, `.overlay`, `.footer-social a:hover`, `.bb-btn`, `.top-section-area` |
| `--color-ink`         | `#222`                 | 40 declarations: headings, nav links, footer background, travel date block, body text |
| `--color-body`        | `#777`                 | 27 declarations: body copy, meta lines, placeholder text                              |
| `--color-soft`        | `#f9f9ff`              | 35 declarations: alternate section background (travel band, team band)                |
| `--color-line`        | `#eee`                 | 15 declarations: carousel arrow borders, list rules                                   |
| `--color-chip`        | `#111`                 | Footer social chips                                                                   |
| `--color-white`       | `#fff`                 | 73 declarations: page canvas, navbar, cards, hero headline                            |

Secondary palette present in the sheet but only used by demo/utility widgets (not part of
this layout): `#5266bd` (6), `#4cd3e3` (5), `#38a4ff` (4), `#f4e700` (4), `#f44a40` (4),
`#6382e6` (2). Do not promote them to theme tokens.

### Fonts

| Role        | Family                     | Notes                                                                  |
| ----------- | -------------------------- | ---------------------------------------------------------------------- |
| Body / UI   | `Poppins, sans-serif`      | `body`: `font-size: 14px`, `font-weight: 300`, `line-height: 1.625em`, `color: #777` |
| Headings    | `Poppins, sans-serif`      | `font-weight: 600`, `color: #222`; hero `h1`: `48px / 1.15em`, weight `700`, white |
| Icons       | `flaticon` / `FontAwesome` | Icon faces only — re-implement with `lucide-react`                     |

Load Poppins via a Google Fonts `<link>` in `index.html`; never copy the bundled font
files (`css/fonts.min.css` is a `@font-face` block for Poppins only).

### Button shape

- **Primary CTA** (`.primary-btn`): `border-radius: 25px` pill, `line-height: 42px`,
  `padding-left: 30px`, `padding-right: 60px`, `text-transform: uppercase`,
  `font-weight: 500`, white text, brand gradient fill; the trailing arrow
  (`span`, `right: 30px`, vertically centred) slides right on hover.
- **Secondary / reveal** (`.load-more`): transparent with `1px solid transparent`;
  hover swaps in `1px solid #69B4FD` + `#69b4fd` text (no fill change).
- **Newsletter input** (`.single-footer-widget input`): `border-radius: 20px`, white
  fill, `line-height: 38px`, `padding-left: 20px`, `#777` text weight `300`.
- **Carousel triggers** (`.category-area .carousel-trigger .prev-trigger/.next-trigger`):
  `40px` squares, white fill, `1px solid #eee`, stacked (next above prev) and offset to
  the right of the card row.
- **Radii present:** `0` (10), `3px` (7), `8px` (6), `50%` (4 — avatars/social discs),
  `20px` (newsletter), `25px` (primary pill).

### Section backgrounds

- Navbar: white `#fff`, sticky, `box-shadow: -21.213px 21.213px 30px #9e9e9e4d`
- Hero: full-bleed photograph behind `.overlay` (`background: #222`, `opacity: .4`);
  `.fullscreen` = `100vh` with `min-height: 700px` (clamped to `700px !important` under
  the preview's own media query)
- Category band: white `#fff`, `.section-gap` = `padding: 120px 0`
- Travel band: `#f9f9ff`
- Fashion band: white `#fff`
- Team band: `#f9f9ff`; card hover overlay `#69b4fdb3` (brand at 70 %), opacity 0 → 1
  over `.5s`
- Footer: `#222` with `padding-top: 100px`; social chips `#111`, gradient on hover;
  newsletter submit uses the brand gradient

## Section structure (DOM order)

Verified against the live DOM on 2026-10-22 (`id` attributes, `<section>` classes and
`<footer>`), cross-checked with the published screenshot; copy follows the classic build
that `apps/quill` ships, with the 2026 live variant noted where it differs.

1. **Navbar** (`header.default-header`) — white sticky bar, brand mark + wordmark
   ("Quill" in the recreation; the reference wordmark is "Blogger"), uppercase links
   **HOME · NEWS · TRAVEL · FASHION · TEAM** plus a **PAGES** dropdown
   (Single, Category, Search, Archive, Generic, Elements) and, per repo convention, a
   dark-mode toggle and a mobile menu toggle.
2. **Hero** (`section#home.banner-area`, `.fullscreen`) — river-cruise photograph
   (Budapest) under the `#222 / 40 %` overlay; `h1` "A Discount Toner Cartridge Is Better
   Than Ever." in white 48 px; a meta bar along the bottom — left `15 Likes` /
   `02 Comments`, right an avatar + "Mark wiens" + "12 Dec, 2017 11:21 am".
   *(2026 live variant: eyebrow "The travel notebook", `h1` "A slower morning beside the
   Danube.", CTA "Read the story", meta "Budapest, Hungary · 2 min read".)*
3. **Category band** (`section#news.category-area.section-gap`) — centred `h2` "Latest
   News from all categories" + lorem subtext; three article cards (4:3 image, black
   `#000` date chip "Jan 2018", title, comment count) and a stacked up/down carousel
   trigger at the right.
   *(2026 live variant: `h2` "Latest from the journal" over five dated story cards.)*
4. **Travel band** (`section#travel.travel-area.section-gap`, `#f9f9ff`) — `h2` "Hot
   topics from Travel Section"; 2 × 2 media list; each row = dark date block
   (`#222`, `padding: 18px 24px`, big day number + month) beside a thumbnail, then `h3`
   title and a comment meta line.
5. **Fashion band** (`section#fashion.fashion-area.section-gap`, white) — `h2` "Fashion
   News This Week"; four-column card grid (3:2 image, black date chip, title, comments)
   followed by a centred "Load More" outline button.
6. **Team band** (`section#team.team-area.section-gap`, `#f9f9ff`) — `h2` "About Blogger
   Team" + blurb; four portrait cards; hovering a portrait fades in a `#69b4fd` overlay
   carrying the member name and role, and the name/role also sit below the image.
7. **Footer** (`footer.footer-area`, `#222`) — three widget columns: **Top Products**
   link list, **Newsletter** (headline, blurb, rounded email input, gradient "Subscribe"
   pill, Zod-validated), **Instagram Feed** (2 × 2 image grid); then a copyright bar with
   the repo-required Component Dock attribution and four social chips (`#111`, brand
   gradient on hover).

## Requirements

### Feature: Navbar and section anchors

The template SHALL render a sticky white navbar with the five primary anchors and a Pages
dropdown, and SHALL keep a dark-mode toggle and mobile menu.

#### Scenario: Primary navigation

- **GIVEN** the page is loaded
- **WHEN** the navbar is displayed
- **THEN** it SHALL link to `#home`, `#news`, `#travel`, `#fashion` and `#team`
- **AND** it SHALL show the uppercase labels Home, News, Travel, Fashion, Team

#### Scenario: Pages dropdown

- **GIVEN** the navbar is displayed
- **WHEN** the user activates the "Pages" button
- **THEN** it SHALL reveal Single, Category, Search, Archive, Generic and Elements
- **AND** `aria-expanded` SHALL be `true` while the list is open

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrower than the desktop breakpoint
- **WHEN** the user activates the menu button
- **THEN** a stacked mobile menu SHALL show the primary links plus the Pages entries
- **AND** selecting a link SHALL close the menu

### Feature: Hero banner

The template SHALL render a full-height photographic hero with a dark overlay, the story
headline and a bottom meta bar.

#### Scenario: Hero content

- **GIVEN** the hero section is displayed
- **WHEN** it renders
- **THEN** it SHALL show the headline "A Discount Toner Cartridge Is Better Than Ever."
- **AND** it SHALL show `15 Likes` and `02 Comments` on the left of the meta bar
- **AND** it SHALL show the author "Mark wiens", the timestamp "12 Dec, 2017 11:21 am"
  and the author avatar on the right

#### Scenario: Overlay legibility

- **GIVEN** the hero background image is loaded
- **WHEN** the headline is painted
- **THEN** a `#222` overlay at 40 % opacity SHALL sit between the image and the copy
- **AND** the headline SHALL be white at the 48 px display size (36 px on small screens)

### Feature: Category carousel

The template SHALL render three latest-story cards with a stacked up/down carousel
control that rotates the card set without a page reload.

#### Scenario: Card anatomy

- **GIVEN** the category band is displayed
- **WHEN** the cards render
- **THEN** each card SHALL show its image, a black date chip, its title and a comment count
- **AND** the band SHALL show the heading "Latest News from all categories" with a subtext

#### Scenario: Rotating the cards

- **GIVEN** three category cards are visible
- **WHEN** the user activates the "Next category" control
- **THEN** the visible cards SHALL rotate by one position
- **AND** activating "Previous category" SHALL rotate them back
- **AND** the card count SHALL stay at three

### Feature: Travel band

The template SHALL render the travel section as a two-column media list on the soft
`#f9f9ff` background.

#### Scenario: Travel rows

- **GIVEN** the travel band is displayed
- **WHEN** the posts render
- **THEN** it SHALL show the heading "Hot topics from Travel Section"
- **AND** each row SHALL show a dark date block with the day number and month, a thumbnail
  image, a title and a comment count
- **AND** the band background SHALL be `#f9f9ff`

### Feature: Fashion grid and Load More

The template SHALL render a four-column fashion grid that reveals four further cards
through a "Load More" control.

#### Scenario: Initial grid

- **GIVEN** the fashion band is displayed
- **WHEN** it first renders
- **THEN** it SHALL show the heading "Fashion News This Week"
- **AND** it SHALL show four cards with image, date chip, title and comment count
- **AND** a "Load More" button SHALL be visible

#### Scenario: Loading more cards

- **GIVEN** the four initial fashion cards are visible
- **WHEN** the user activates "Load More"
- **THEN** four additional cards SHALL be appended
- **AND** the "Load More" button SHALL be removed once every card is shown

### Feature: Team band

The template SHALL render four team portraits on `#f9f9ff` with a brand-coloured hover
overlay.

#### Scenario: Team cards

- **GIVEN** the team band is displayed
- **WHEN** the cards render
- **THEN** it SHALL show the heading "About Blogger Team" with a supporting blurb
- **AND** it SHALL show four members with a name and role below each portrait

#### Scenario: Hover overlay

- **GIVEN** a team portrait is displayed
- **WHEN** the pointer hovers the portrait
- **THEN** a `#69b4fd`-at-70 % overlay SHALL fade in over the image
- **AND** it SHALL reveal the member's name and role

### Feature: Newsletter form

The template SHALL render a footer newsletter form that validates the address before
confirming the subscription.

#### Scenario: Invalid address

- **GIVEN** the newsletter form is displayed
- **WHEN** the user submits an empty or malformed email address
- **THEN** the form SHALL show an inline validation message
- **AND** it SHALL mark the input `aria-invalid` and wire it to the error text
- **AND** no confirmation SHALL be shown

#### Scenario: Valid address

- **GIVEN** the newsletter form is displayed
- **WHEN** the user submits a valid email address
- **THEN** the form SHALL be replaced by a confirmation status message

### Feature: Footer attribution and chrome

The template SHALL render the dark footer with its widget columns, social chips and the
Component Dock attribution link.

#### Scenario: Footer content

- **GIVEN** the page is scrolled to the footer
- **WHEN** the footer is displayed
- **THEN** it SHALL show the Top Products links, the newsletter column and the 2 × 2
  Instagram grid
- **AND** it SHALL show the copyright line and four social chips
- **AND** it SHALL link to https://www.componentdock.com/

## Verification checklist

- [ ] `apps/quill` renders the seven bands in the DOM order above (navbar, hero,
      category, travel, fashion, team, footer).
- [ ] Navbar anchors resolve to real section ids (`#home`, `#news`, `#travel`,
      `#fashion`, `#team`) — no dead anchors; the Pages dropdown and mobile menu both
      toggle and close.
- [ ] Hero uses a seeded placeholder photo (`picsum.photos/seed/quill-hero/1920/1080`)
      under a `#222`/40 % overlay; headline, likes/comments and author block all present.
- [ ] Category carousel rotates three cards with the up/down controls and keeps the count
      at three.
- [ ] Travel band sits on `#f9f9ff` and shows two columns of media rows with the dark date
      block (`day` + `month`).
- [ ] Fashion grid starts at four cards and "Load More" appends the remaining four, then
      disappears.
- [ ] Team overlay is `bg-brand/70` on hover and both overlay and caption expose name +
      role.
- [ ] Newsletter rejects invalid input (inline error, `aria-invalid`) and swaps to a
      `role="status"` confirmation for a valid address.
- [ ] Footer background is `#222`, social chips `#111` with the brand gradient on hover,
      and the Component Dock link is present.
- [ ] Tokens live in `@theme` (`#69b4fd`, `#8490ff` / `#62bdfc` gradient, `#222`, `#777`,
      `#f9f9ff`, `#111`, Poppins) and are consumed through Tailwind classes.
- [ ] No app file mentions ColorLib (provenance lives in this spec, TEMPLATES.md and the
      PR); placeholders only — no copied assets.
- [ ] `apps/quill/public/CNAME` is `quill.free.componentdock.com` and `homepage` in
      `apps/quill/package.json` matches it.
- [ ] `npm run spec:validate` passes and `scripts/verify-app.sh quill` is green
      (typecheck + lint + 100 % coverage + build).
