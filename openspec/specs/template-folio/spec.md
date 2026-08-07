# Template: Folio (Blog)

## Purpose

Folio is a single-page blog listing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Article"
blog website template design (see TEMPLATES.md, Blog category, line 241),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Article" — editorial lifestyle blog template: full
  hero slider on top, then a two-column layout (blog listing + widgets
  sidebar), an Instagram strip, and a 3-column footer
  (source: https://colorlib.com/wp/template/article/).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/article/`
  (HTTP 200, ~58KB HTML). DOM + `css/style.css` (38KB) extracted and
  analyzed; tokens below come from that stylesheet.
- **Visual design (from screenshot `article-free-template.jpg` + DOM):**
  minimalist, modern, editorial "magazine" aesthetic. Stark white background,
  near-black text, vibrant orange-red `#F6490D` accents (script logo hover,
  category labels, hero number squares, buttons, share icons, active
  pagination). Serif headlines (Lora, italic) for an editorial feel, script
  logo ("Article.") in Grand Hotel cursive, uppercase letter-spaced sans
  nav. Hero is a full-width photo slideshow with the post title + date in a
  light box pinned to the bottom-left. Blog cards show a centered italic
  serif title, an image carousel with a vertical share-icon rail on the left,
  a meta row (date · by author · comments), a drop-cap excerpt, and an orange
  pill "Continue Reading" button.
- **Section order (1:1) from the DOM:**
  1. Top nav (`nav.colorlib-nav > div.top-menu`, white): script logo
     "Article." (Grand Hotel, left, orange on hover) + right menu (uppercase
     sans, 12px letter-spacing): Home (active) / Blog (dropdown: Commercial,
     Apartment, House, Building) / Lifestyle / Travels / Gallery / About Me.
     Mobile hamburger toggle (`#colorlib-nav-toggle`, 25×2px bars).
  2. Hero slider (`aside#colorlib-hero > div.flexslider`): 4 slides, each a
     full-width background photo (`min-height: 650px`, cover) + `.overlay`
     `rgba(0,0,0,.1)`; centered column (`col-md-6 col-md-offset-3`) with
     `.desc` pinned `bottom: 0` inside: h1 (Lora serif, 28px, black,
     `padding-left: 80px`) with an orange 60×60 square number badge
     (`background: #F6490D`, white 24px number, `position: absolute; left:
0`) followed by the headline, then h2 date ("January 20, 2017"). Slider
     auto-advances (FlexSlider).
  3. Main container (`div#colorlib-container`, `padding: 7em 0`): two-column
     row — left `col-md-8` blog listing, right `col-md-4` sidebar (`aside
.side`).
     - Blog listing: 4 `article.blog-entry` entries (each separated by a
       1px `#e6e6e6` border-bottom, `padding-bottom: 3em; margin-bottom:
4em`):
       a. `.blog-wrap` (`background: #fafafa`, `padding: 2em 0`, `margin-bottom:
   40px`): category line (uppercase Lora 13px, `letter-spacing: 4px`,
       orange `#F6490D`, e.g. "Health | Workout") → centered h2 title
       (Lora 28px italic, `color: #4d4d4d`, link) → `.blog-image` carousel
       (2+ images, owl-carousel) with `ul.share` vertical icon rail
       absolutely positioned `left: -2.5em` (orange `icon-share3` + 24px
       facebook/twitter/google+ icons).
       b. Meta row (below image): `icon-calendar3` date · `icon-user2` "by
       Stephy" · comment count ("5 Comments"), each a link.
       c. `.desc`: excerpt paragraph with drop cap
       (`.first-letra:first-letter` — Georgia 110px, floated left, black)
       → centered "Continue Reading" button (`btn btn-primary btn-custom`:
       orange pill, Lora italic, `padding: 10px 30px`).
     - Pagination (`ul.pagination`, 6 items): « (disabled) · 1 (active) · 2 ·
       3 · 4 · »; square buttons (`border-radius: 0`), transparent bg, 1px
       `#b3b3b3` border, black text; active/hover filled `#F6490D` white text
       with soft shadow.
  4. Sidebar (`aside.side`, `col-md-4`; widgets stacked in `div.side-wrap`,
     each with a centered italic Lora `h2.sidebar-heading` (20px) topped by a
     short centered 50×2px divider line via `:after`):
     a. Search: input (`id="search"`, placeholder "Enter any key to
     search...") + orange `btn btn-primary` submit with search icon.
     b. About Me: `div.author-img` (portrait, bg image) + bio ("Hi! My Name
     is Steph Bookmarksgrove, the headline of Alphabet Village…") +
     social icons.
     c. Recent Post: entries with small thumbnail + date + title.
     d. Categories: list — Blog, Lifestyle, Travel, Fashion, Video Post.
     e. Video Post: `div.video.colorlib-video` (photo bg + centered
     popup-vimeo play button + `.overlay`).
     f. Tags: `p.tags` of `span` pills (Modeling, Fashion, Life, Blog,
     Workout, Vacation, Travel, Exercise, Health, News, Model, Women,
     Animals, Nature, Art, Sea, Ocean, Office, Home — each with
     `icon-tag`).
     g. Gallery: 8 square `a.gallery` image-popup links (2px gap, search icon
     on hover).
     h. Blockquote: styled Lora italic blockquote (gray `#999`, 20px).
     i. Paragraph: blurb ("On her way she met a copy… Little Blind Text").
     j. Newsletter: centered heading "Subscribe to our newsletter" + email
     input (placeholder "Enter your email") + full-width orange
     "Subscribe" button + `ul.colorlib-social-icons` (twitter, facebook,
     linkedin, dribbble).
  5. Instagram strip (`div#colorlib-instagram`, `padding: 7em 0`): centered
     heading "Instagram" + `.instagram-entry` row of 8 square photo links
     (`gallery-1.jpg`…`gallery-8.jpg`).
  6. Footer (`footer#colorlib-footer`, `padding: 7em 0`): 3 columns — (1)
     "Navigational" links with `icon-check` (Home, About Me, Blog, Travel,
     Lifestyle, Fashion, Health); (2) "Recent Post" (4 entries: date + title,
     e.g. "22 Jan, 2017 — The Most Popular Leg Workout for Women"); (3)
     "Tags". Bottom bar: copyright ("Copyright © All rights reserved. This
     template is made with ♥ by Colorlib") + social icons.
- **Recreation decisions:** new name **Folio** (an editorial "sheet of
  writing" — fits a lifestyle/magazine blog brand; no collision with `apps/`
  or existing spec folders). Logo renders "Folio." in the Grand Hotel script
  font. Slider: 4 slides with picsum placeholders, numbered orange squares
  1–4, auto-advance with prev/next arrows. Blog listing: 4 entries, keeping
  the original's kind of content (lifestyle/travel/fitness headlines,
  paraphrased). Sidebar keeps all 10 widgets in the same order. Newsletter
  form validates email (zod) with a success state. Instagram strip + footer
  as in the original.

Folio lives in `apps/folio` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Design tokens (extracted from `css/style.css`)

- Fonts (Google Fonts `<link>`): **Lora** (serif — all headings h1–h6,
  `font-weight: 400`, `color: #4d4d4d`; blog entry titles italic 28px;
  category labels uppercase 13px `letter-spacing: 4px`; sidebar headings
  italic 20px; blockquote italic gray), **Open Sans** (body — 16px,
  `line-height: 2`, `color: #333333`), **Grand Hotel** (cursive — logo,
  ~30px), **Georgia** (drop-cap first letter, 110px).
- Primary brand: **`#F6490D`** (orange-red) — category labels, hero number
  squares, share icons, primary buttons, active/hover pagination, logo hover,
  divider accents.
- Brand hover: `#f75b26` (`btn-primary:hover` background + border).
- Gold accent: `#F7AF1D` (icon above the hero slider title).
- Text: body `#333333`; headings `#4d4d4d`; hero h1/h2 black `#000`; muted
  `#999999`; borders `#e6e6e6` (entry divider) / `#b3b3b3` (pagination,
  tags).
- Backgrounds: page `#fff`; blog card `.blog-wrap` `#fafafa`; hero overlay
  `rgba(0,0,0,.1)`; video widget overlay dark.
- Shapes: buttons **pill** (`border-radius: 30px`, 2px brand border, hero
  variant `padding: 14px 30px`); hero number squares 60×60 sharp; pagination
  square (`border-radius: 0`); gallery/instagram tiles square; tag pills
  bordered.
- Section rhythm: main/instagram/footer `padding: 7em 0`; blog entry
  `margin-bottom: 4em` + `border-bottom: 1px solid #e6e6e6`; sidebar widgets
  separated by `side-wrap` blocks.

## Requirements

### Requirement: Top navigation bar

The system SHALL render a sticky white top bar with a script logo on the
left and a menu on the right.

#### Scenario: Navbar content

- **GIVEN** the Folio page is rendered
- **WHEN** the top bar is displayed
- **THEN** it SHALL show the logo "Folio." in a cursive script font on the
  left
- **AND** it SHALL show menu links Home, Blog, Lifestyle, Travels, Gallery,
  and About Me in uppercase letter-spaced text
- **AND** the Home link SHALL be marked active

#### Scenario: Blog dropdown

- **GIVEN** the top bar is displayed
- **WHEN** the user hovers or focuses the Blog link
- **THEN** a dropdown SHALL open with links Commercial, Apartment, House,
  and Building

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a narrow viewport
- **WHEN** the hamburger toggle is pressed
- **THEN** the menu SHALL open with `aria-expanded` set and the toggle SHALL
  be announced to screen readers

### Requirement: Hero slider

The system SHALL render a full-width photo slider with 4 slides, each
showing a numbered post teaser.

#### Scenario: Slide content

- **GIVEN** the hero slider is displayed
- **WHEN** a slide is active
- **THEN** it SHALL show a full-width background image with a dark overlay
- **AND** it SHALL show a 60px orange square badge with the slide number
- **AND** it SHALL show the post headline in a serif font and the date below
  it in the bottom area of the slide

#### Scenario: Slide navigation

- **GIVEN** the hero slider has 4 slides
- **WHEN** the user activates the next arrow
- **THEN** the slider SHALL advance to the next slide
- **AND** the numbered badge SHALL reflect the active slide
- **WHEN** the slider is left idle
- **THEN** it SHALL auto-advance after a few seconds

### Requirement: Blog listing

The system SHALL render a vertical feed of 4 blog entries, each with a
category line, an italic serif title, an image carousel with a share rail, a
meta row, a drop-cap excerpt, and a "Continue Reading" button.

#### Scenario: Entry card content

- **GIVEN** the blog listing is displayed
- **WHEN** an entry is rendered
- **THEN** it SHALL show an uppercase orange category line (e.g. "Health |
  Workout") above the title
- **AND** it SHALL show the post title as a centered italic serif heading
- **AND** it SHALL show a carousel of post images with a vertical share icon
  rail (share, facebook, twitter, google+) on the left edge
- **AND** it SHALL show a meta row with a date, an author ("by …"), and a
  comment count, each with an icon
- **AND** it SHALL show an excerpt paragraph with a large drop cap on the
  first letter
- **AND** it SHALL show a centered orange pill "Continue Reading" button

#### Scenario: Listing count and order

- **GIVEN** the Folio page is rendered
- **WHEN** the blog listing is displayed
- **THEN** it SHALL render exactly 4 entries stacked vertically in one
  column
- **AND** each entry SHALL be separated by a light horizontal rule

### Requirement: Pagination

The system SHALL render square pagination buttons under the blog listing.

#### Scenario: Pager states

- **GIVEN** the pagination row is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show «, 1, 2, 3, 4, and » buttons
- **AND** the first page SHALL be marked active with the brand orange
  fill
- **AND** the « button SHALL be disabled
- **WHEN** the user activates page 2
- **THEN** the active state SHALL move to page 2

### Requirement: Sidebar widgets

The system SHALL render a right sidebar with 10 stacked widgets in this
order: search, About Me, Recent Post, Categories, Video Post, Tags, Gallery,
Blockquote, Paragraph, Newsletter.

#### Scenario: Search widget

- **GIVEN** the sidebar is displayed
- **WHEN** the search widget is rendered
- **THEN** it SHALL show an input with placeholder "Enter any key to
  search..." and an orange search button

#### Scenario: About Me widget

- **GIVEN** the sidebar is displayed
- **WHEN** the About Me widget is rendered
- **THEN** it SHALL show a portrait image, a bio paragraph mentioning the
  author's name, and social icons

#### Scenario: Recent Post widget

- **GIVEN** the sidebar is displayed
- **WHEN** the Recent Post widget is rendered
- **THEN** it SHALL list at least 3 recent posts, each with a thumbnail, a
  date, and a title

#### Scenario: Categories widget

- **GIVEN** the sidebar is displayed
- **WHEN** the Categories widget is rendered
- **THEN** it SHALL list Blog, Lifestyle, Travel, Fashion, and Video Post as
  links

#### Scenario: Video Post widget

- **GIVEN** the sidebar is displayed
- **WHEN** the Video Post widget is rendered
- **THEN** it SHALL show a photo with a centered play button and an overlay

#### Scenario: Tags widget

- **GIVEN** the sidebar is displayed
- **WHEN** the Tags widget is rendered
- **THEN** it SHALL show at least 8 bordered tag pills (e.g. Modeling,
  Fashion, Life, Blog, Workout, Vacation, Travel, Exercise)

#### Scenario: Gallery widget

- **GIVEN** the sidebar is displayed
- **WHEN** the Gallery widget is rendered
- **THEN** it SHALL show a grid of 8 square image tiles that reveal a search
  icon on hover

#### Scenario: Blockquote and Paragraph widgets

- **GIVEN** the sidebar is displayed
- **WHEN** the Blockquote widget is rendered
- **THEN** it SHALL show an italic serif quotation in gray
- **AND** the Paragraph widget below it SHALL show a plain text blurb

#### Scenario: Newsletter widget

- **GIVEN** the sidebar is displayed
- **WHEN** the Newsletter widget is rendered
- **THEN** it SHALL show the heading "Subscribe to our newsletter"
- **AND** it SHALL show an email input and a full-width orange "Subscribe"
  button
- **AND** it SHALL show social icons (twitter, facebook, linkedin, dribbble)

#### Scenario: Newsletter validation

- **GIVEN** the newsletter form is displayed
- **WHEN** the user enters an invalid email and submits
- **THEN** the form SHALL show a validation error and SHALL NOT submit
- **WHEN** the user enters a valid email and submits
- **THEN** the form SHALL show a success confirmation

### Requirement: Instagram strip

The system SHALL render a full-width strip of 8 square photo tiles with an
"Instagram" heading.

#### Scenario: Strip content

- **GIVEN** the Instagram strip is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show a centered "Instagram" heading
- **AND** it SHALL show exactly 8 square image tiles in one row (wrapping on
  narrow screens)

### Requirement: Footer

The system SHALL render a 3-column footer with a copyright bar.

#### Scenario: Footer columns

- **GIVEN** the footer is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show a "Navigational" column with check-icon links (Home,
  About Me, Blog, Travel, Lifestyle, Fashion, Health)
- **AND** it SHALL show a "Recent Post" column with 4 dated post entries
- **AND** it SHALL show a "Tags" column with tag pills

#### Scenario: Copyright bar

- **GIVEN** the footer is displayed
- **WHEN** the user scrolls to the bottom of the page
- **THEN** the footer SHALL show a copyright line with the current year and a
  "made with ♥" credit

## Verification checklist

- [ ] `npm run verify:app folio` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Section order matches the original 1:1 (nav → hero slider → blog
      listing + pagination → sidebar widgets → Instagram strip → footer)
- [ ] Brand color `#F6490D` wired through `@theme` and used via Tailwind
      classes (buttons, badges, category labels, pagination, share icons)
- [ ] Fonts Lora + Open Sans + Grand Hotel loaded via Google Fonts `<link>`
      in `index.html`
- [ ] Placeholder images use `https://picsum.photos/seed/folio-<n>/<w>/<h>`;
      no assets copied from the original
- [ ] Newsletter form validates email and shows success; a11y (labels,
      aria-expanded on mobile toggle, focus rings)
- [ ] Dark-mode toggle present per repo conventions (dark: variants)
- [ ] README status table regenerated after merge (`npm run readme:status`)
