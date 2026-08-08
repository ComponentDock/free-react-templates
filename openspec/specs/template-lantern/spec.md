# Template: Lantern (Blog Template)

## Purpose

Lantern is a single-page news/blog website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Quitelight" starter blog template (see TEMPLATES.md), built under
a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Quitelight" — clean light news/blog template with
  a full-height hero slider, a hot-news carousel, a trending/videos article
  grid, and a sidebar with top stories + newest videos
  (source: https://colorlib.com/wp/template/quitelight/).
  TEMPLATES.md has **THREE copies** of this item (lines 281, 481, 2210 —
  mark ALL of them `[x]` when done).
- **Preview URL:** https://preview.colorlib.com/theme/quitelight/
  (HTTP 200, 35 KB DOM, fetched 2026-08-08; the live DOM is the primary
  reference and matches the screenshot).
- **Screenshot:** `quitelight-free-template.jpg` (1200×946, verified via
  browser vision). Matches the live DOM: white header overlaid on a dark
  architectural hero image, split hero (featured article left, HOT NEWS
  right), white article-card grid below, sidebar with TOP STORIES, yellow
  `#F9B500` accent, bold sans-serif headlines.
- **Section order (1:1):** Overlay header (logo + search + hamburger + nav:
  Home, Sport ▾ [PAGE 1, PAGE 2], Travel, Beauty, Music, Art, Fashion,
  Contact) → Hero slider (left: category tag + headline + "Continue
  Reading" outline button; right: HOT NEWS swiper carousel of white
  mini-cards) → Main content on light grey `#F8F8F8` (left col: article
  card grid → "Whats trending" featured split card + small cards →
  "Most Popular Videos" featured split card + video cards with play
  buttons → LOAD MORE outline button; right col sidebar: TOP STORIES list,
  ad banner, NEWEST VIDEO list, ad banner) → Dark footer `#191919` (logo,
  newsletter subscribe form, copyright + ColorLib credit).

### Hero slider (from live DOM)

- `.slider-main h-800x` full-height block; background photo with dark
  overlay (`bg-layer-4`); content vertically centered.
- Left column (max-width ~400px): `<h5><b>ART</b></h5>` category tag, then
  `<h1><b>The Shoddy Science Behind most Pregnancy Advice</b></h1>`, then a
  "Continue Reading" outline button (`btn-brdr-grey color-white plr-20`).
- Right column: "HOT NEWS" heading (white, bold) + Swiper carousel
  (2 slides per view, loop, scrollbar) of white cards: image
  (`hot_news_*_300x150.jpg`), category (`h5.color-ash`), title
  (`h4 a b`), meta row with heart + comment icons and counts.

### Main content (from live DOM)

- Section `bg-1-white ptb-0` (background `#F8F8F8`), container-fluid with a
  `col-lg-1` spacer.
- Left column `col-lg-8 ptb-50 pr-30`: 3-up article cards
  (`col-xl-4 mb-30 > .card.h-100.bg-white`) — image, padded body with
  category (`h5.color-ash`), title (`h4 a b`), meta row
  (`ion-android-favorite-outline` + count, `ion-ios-chatbubble-outline` +
  count). Then `h4 Whats trending` heading, then a featured split card
  `sided-half` (left half background image `bg-2`, right half padded text:
  category, `h2` title "As an Alchoholic, Your Company \"Parks\" are
  Killing me", meta row) + more small cards; then `h4 Most Popular Videos`
  - another `sided-half` featured card (`bg-9`) + video cards with a round
    play button (`abs-center circle-50 bg-tp-5` + `ion-play`); then a
    centered `h6` "LOAD MORE" link (`btn-brdr-grey color-ash plr-30`).
- Right column (sidebar) `col-lg-4 ptb-50 pl-30`: "TOP STORIES" (`h5 mb-30`)
  list of rows (`sided-80x` 120×120 thumb + title, "NEWEST VIDEO" block),
  an ad banner image (`sidebar_2_400X600.jpg`), a "NEWEST VIDEO" list with
  play icons (`v-icn`), and a second ad banner (`sidebar_1_400X300.jpg`).

### Footer (from live DOM)

- `<footer class="bg-191 color-ash pt-50 pb-20 text-left center-sm-text">`
  (background `#191919`): white logo image, short footer text, a
  newsletter form (`form-block form-brdr-b mx-w-400x m-auto`): email input
  (`color-white ptb-15`, placeholder " Your Email") + full-width outline
  "SUBSCRIBE" button (`btn-brdr-grey`). Bottom bar: "Copyright © All
  rights reserved | This template is made with ♥ by Colorlib" (paraphrased
  to credit ColorLib).

## Design tokens (from preview common/styles.css)

| Token        | Value                                                                                                                                                                                                     | Where                                                                                                     |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Brand yellow | `#F9B500`                                                                                                                                                                                                 | `btn-fill-primary` bg/border + hover, `btn-brdr-grey:hover` bg, section accents (8 bg uses, 5 color uses) |
| Ink black    | `#111` / `#000`                                                                                                                                                                                           | headings/links text, `btn-fill-primary:hover` text, dark overlays                                         |
| Dark footer  | `#191919` (`bg-191`)                                                                                                                                                                                      | footer bg                                                                                                 |
| White        | `#ffffff`                                                                                                                                                                                                 | card bg (`bg-white`), text on dark hero/header/footer                                                     |
| Light grey   | `#F8F8F8` (`bg-1-white` section bg), `#F2F2F2`, `#EBEBEB`, `#ddd`                                                                                                                                         | main content section bg; subtle alt backgrounds/borders                                                   |
| Meta greys   | `#aaa` (`color-ash`), `#ccc` (`color-grey`), `#888` (`color-lt-black`)                                                                                                                                    | category tags, meta rows, footer text                                                                     |
| Tag accents  | `#E14A3D` (red), `#58ADEE` (blue), `#36D98A` (green), `#365B99` (indigo)                                                                                                                                  | category tag colors (decorative; use one per card)                                                        |
| Overlay      | `rgba(0,0,0,.5)` (`bg-tp-5`), dark hero layer (`bg-layer-4`)                                                                                                                                              | play-button circles, hero image overlay                                                                   |
| Font family  | `'Poppins', sans-serif`                                                                                                                                                                                   | whole template (bold headings, 600-weight nav/header)                                                     |
| Buttons      | height 45px, line-height 43px, border 1px solid, radius ~2px; `btn-fill-primary` = `#F9B500` bg/`#000` text on hover → transparent; `btn-brdr-grey` = 1px grey border, hover → `#F9B500` bg + `#000` text | CTA + LOAD MORE + SUBSCRIBE buttons                                                                       |
| Cards        | `bg-white`, radius ~2px, image top, padded body (25px), meta row of heart/comment icons + counts                                                                                                          | article cards, hot-news cards                                                                             |
| Play buttons | circle (`circle-50` … `circle-90`), `rgba(0,0,0,.5)` bg, `ion-play` icon                                                                                                                                  | video cards                                                                                               |
| Header       | absolute overlay, white text, font-weight 600, logo left (height 70px), search right, centered nav; 1px `#aaa` bottom hairline                                                                            | top of page, over hero                                                                                    |
| Icons        | ionicons (search, navicon, play, heart/comment, arrow-down) — use lucide-react equivalents                                                                                                                | header search/menu, card meta, video play                                                                 |

## Recreation decisions

- Deliverable: single-page news/blog — overlay header with dropdown nav,
  full-height hero slider (featured post + HOT NEWS carousel), light-grey
  article grid with trending/videos feature cards + LOAD MORE, sidebar with
  top stories + newest videos + ad banners, dark footer with newsletter.
- Brand name "Lantern" replaces "Quitelight"; never use "Quitelight" as the
  brand.
- The hero swiper + hot-news carousel can be rendered as a simple
  horizontally scrollable row or a lightweight auto-advancing carousel
  (implementer's choice — no new dependency required; match 2-per-view
  desktop, 1-per-view mobile).
- Photos → seeded picsum placeholders (`picsum.photos/seed/lantern-<n>/<w>/<h>`);
  hero ~1600×900, hot news 300×150, cards 400×250, sidebar 120×120 + ad
  banners 400×600 / 400×300; no assets copied.
- Icons → lucide-react (Search, Menu, Heart, MessageCircle, Play, ChevronDown).
- Fonts: Google Fonts `<link>` — "Poppins" (weights 400/500/600/700).
- Nav dropdown (Sport ▾ → PAGE 1, PAGE 2) opens on hover/focus; collapses
  into the mobile menu with the hamburger.
- Newsletter + search forms: client-side validation + success state (no
  backend); LOAD MORE and all article links are decorative anchors.
- Ad banners: grey placeholder blocks (dashed border + "Ad" label) or
  picsum images — implementer's choice.
- Skip link "Skip to main content" (existing convention).

## Requirements

### Requirement: Page header

The system SHALL render an overlay page header with the brand, a search
control, a hamburger menu, and a navigation bar with one dropdown sub-menu.

#### Scenario: Header content

- **GIVEN** the Lantern page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the wordmark "Lantern" on the left,
  white text over the hero
- **AND** it SHALL show a search input with a search icon on the right
- **AND** it SHALL show a nav bar with links Home, Sport, Travel, Beauty,
  Music, Art, Fashion, and Contact

#### Scenario: Dropdown menu

- **GIVEN** the nav bar is rendered
- **WHEN** the user activates "Sport"
- **THEN** a sub-menu SHALL open with PAGE 1 and PAGE 2

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a small screen
- **WHEN** the user opens the hamburger menu
- **THEN** every nav link and the sub-menu link SHALL be reachable
- **AND** the user SHALL be able to close the menu

### Requirement: Hero slider

The system SHALL render a full-height hero with a featured article on the
left and a HOT NEWS carousel on the right.

#### Scenario: Featured article

- **GIVEN** the hero is displayed
- **WHEN** the page loads
- **THEN** the hero SHALL show a full-bleed background photo with a dark
  overlay
- **AND** the left side SHALL show a category tag (e.g. "ART"), a large
  bold headline, and a "Continue Reading" outline button

#### Scenario: HOT NEWS carousel

- **GIVEN** the hero is displayed
- **WHEN** the right side renders
- **THEN** it SHALL carry the heading "HOT NEWS"
- **AND** it SHALL show at least four white mini-cards, each with an image,
  a category tag, a title, and a heart/comment meta row
- **AND** the cards SHALL be horizontally scrollable (2 per view desktop,
  1 per view mobile)

### Requirement: Article grid

The system SHALL render a light-grey section with a grid of article cards,
trending and video feature blocks, and a LOAD MORE control.

#### Scenario: Article cards

- **GIVEN** the main content section is displayed
- **WHEN** the grid is rendered
- **THEN** it SHALL appear on a `#F8F8F8` background
- **AND** cards SHALL show an image, category tag, title, and a
  heart/comment meta row with counts

#### Scenario: Trending and videos

- **GIVEN** the article grid is displayed
- **WHEN** scrolling through the left column
- **THEN** a "Whats trending" heading SHALL precede a featured split card
  (image left, category + `h2` title + meta right) plus small cards
- **AND** a "Most Popular Videos" heading SHALL precede a featured split
  card and video cards with round play buttons

#### Scenario: LOAD MORE

- **GIVEN** the left column is displayed
- **WHEN** the bottom of the column is reached
- **THEN** a centered "LOAD MORE" outline button SHALL be shown (decorative
  anchor)

### Requirement: Sidebar

The system SHALL render a sidebar with a top-stories list, a newest-videos
list, and two ad placeholders.

#### Scenario: Sidebar content

- **GIVEN** the page is rendered on a desktop viewport
- **WHEN** the sidebar column is displayed
- **THEN** it SHALL carry the heading "TOP STORIES" with at least four rows,
  each a small thumbnail + title
- **AND** it SHALL carry a "NEWEST VIDEO" list with play icons
- **AND** it SHALL show two ad placeholder blocks

### Requirement: Footer

The system SHALL render a dark footer with a newsletter subscribe form and
a bottom bar.

#### Scenario: Newsletter form

- **GIVEN** the footer is displayed
- **WHEN** the newsletter form is shown
- **THEN** it SHALL show a brand logo, an email input, and a full-width
  "SUBSCRIBE" outline button on a `#191919` background
- **AND** submitting an invalid or empty email SHALL show a validation
  error and block submission
- **AND** submitting a valid email SHALL show a success state

#### Scenario: Bottom bar

- **GIVEN** the footer is displayed
- **WHEN** the bottom bar is rendered
- **THEN** it SHALL show a copyright line and a paraphrased ColorLib credit
  link

### Requirement: Page composition

The system SHALL compose all sections in a single page with a skip link, a
main landmark, and a document title.

#### Scenario: Full page render

- **GIVEN** the Lantern app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL start with a "Skip to main content" link
- **AND** the header SHALL be in the banner landmark, the sections in the
  main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Lantern — Blog Template"

## Verification checklist

- [ ] `bash scripts/verify-app.sh lantern` passes (typecheck + lint + 100%
      coverage tests + build, ~2–3 min)
- [ ] `npm run spec:validate` passes
- [ ] Header: white overlay text, wordmark "Lantern", search input, nav
      Home/Sport▾/Travel/Beauty/Music/Art/Fashion/Contact; Sport dropdown
      opens; mobile hamburger works
- [ ] Hero: full-height bg photo + dark overlay, category tag + bold
      headline + "Continue Reading" outline button; HOT NEWS carousel with
      4+ white mini-cards (2-per-view desktop)
- [ ] Article grid on `#F8F8F8`: 3-up white cards (image, category, title,
      meta), "Whats trending" + "Most Popular Videos" feature blocks with
      split cards, video play buttons, LOAD MORE outline button
- [ ] Sidebar: TOP STORIES rows (thumb + title), NEWEST VIDEO list, 2 ad
      placeholders
- [ ] Footer `#191919`: newsletter form with validation + success state,
      SUBSCRIBE button, bottom bar with copyright + ColorLib credit
- [ ] Fidelity: section order 1:1, `#F9B500` brand yellow, Poppins,
      `#F8F8F8` section bg, `#191919` footer, picsum placeholders seeded
      `lantern-<n>`, no copied assets
- [ ] TEMPLATES.md: mark ALL THREE copies (lines 281, 481, 2210 —
      Quitelight) `[x]` and append the live surge URL to each
- [ ] `npm install` at root before committing (lockfile registers
      `apps/lantern`); `grep -c "free-react-templates/lantern"`
      package-lock.json >= 1
- [ ] `"homepage": "https://free-react-templates-lantern.surge.sh"`
      in `apps/lantern/package.json`
- [ ] PR title: `feat: Lantern — blog website template (ColorLib
Quitelight)`; body includes the source URL, preview URL, tokens, and the
      three-copy TEMPLATES.md note
