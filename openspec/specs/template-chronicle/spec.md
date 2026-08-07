# Template: Chronicle (Blog Template)

## Purpose

Chronicle is a single-page blog/magazine template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Content" entry in TEMPLATES.md (Blog category), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The reference is a minimalist editorial blog: a top utility bar (Sign In
left, centered text logo, search toggle right) with a centered category
menu below, a full-viewport-height hero slider whose slides carry a white
overlaid post card (share icons, category, serif title, excerpt, meta),
a "Today's Highlight" section with vertical and horizontal post entries
plus a sticky "Subscribe to Newsletter" sidebar card, two half-width
category sections (Lifestyle, Travel), a four-card "Food and Drink"
section, and a centered footer with social icons and legal links. The
brand accent is a tan/beige gold (`#c1a57b`); headings are Playfair
Display serif, body is Jost sans. Chronicle recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Content" — Blog / Magazine HTML Template
  (source: https://colorlib.com/wp/template/content/). Listed in
  TEMPLATES.md under **Blog (60)**.
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/content/`
  (HTTP 200). DOM fetched and analyzed (`/tmp/content-preview.html`,
  27 KB); stylesheet `https://preview.colorlib.com/theme/content/css/style.css`
  (28 KB, Sass-compiled) extracted for tokens; screenshot
  (`content-free-template.jpg`, TEMPLATES.md) reviewed visually in the
  browser. All references verified live.
- **Section order (1:1 from the preview DOM):**
  1. Top bar (`nav.site-nav`, padding 20px top/bottom): row
     justify-content-between — "Sign In" link LEFT (desktop only,
     `d-none d-lg-block`, with lock icon), centered text logo
     (`div.logo`, font-size 2rem, black, "Content." with trailing dot)
     RIGHT-center, "Search" link + expanding search form RIGHT
     (`div.search-wrap`: form absolute right 10px, width 0 → expands on
     toggle, input placeholder "Enter keyword and hit enter..."), burger
     menu button (mobile only). Below (desktop): centered nav menu
     (`site-navigation text-center`) — Food and Drinks (active),
     Categories ▾ (dropdown with Menu One / Menu Two ▾ (Sub Menu One/Two/
     Three) / Menu Three), Travel, Elements ▾, Inner Page, Contact us.
  2. Mobile off-canvas menu (`div.site-mobile-menu`, hidden on desktop)
     with close button, menu links and search.
  3. Featured post hero (`div.featured-post` → `div.main-slider
owl-carousel`): 3 slides (`div.post-slide`, background-image cover,
     height 100vh, min-height 560px, background-position center). Each
     slide: white card (`div.text-wrap`, position absolute bottom 20px
     centered, max-width 500px, padding 40px, box-shadow
     `0 15px 30px rgba(0,0,0,.05)`) containing: share icon row
     (`div.share`: Facebook, Twitter, Pinterest — 30×30, border-radius
     4px, bg `#f8f9fa`, black glyph), category (`div.meta-cat` → "Food
     and Drink"), serif h2 title ("Far far away behind the Word Mountains
     far from Away"), excerpt link (text-black), meta (`div.meta`, grey:
     "May 10, 2020 • 5 mins read"). Carousel nav arrows vertically
     centered + dots at bottom -50px.
  4. Section latest (`div.section-latest`, margin-bottom 100px):
     `div.row.gutter-v1 align-items-stretch` →
     - `col-12`: section-title "TODAY'S HIGHLIGHT" (uppercase Jost 18px,
       letter-spacing .1rem, w700, with `#c1a57b` highlight bar behind
       the bottom 40% of the text, z-index -1).
     - `col-md-9 pr-md-5`: `row mb-5` with TWO vertical `col-md-6
div.post-entry` (image `div.media` + `div.text`: meta-cat link,
       serif h2 20px title link, grey meta); then THREE horizontal
       `col-12 div.post-entry.horizontal d-flex` (media flex 0 0 160px +
       margin-right 30px; last one `mb-0`).
     - `col-md-3`: `div.floating-block.sticky-top.text-center` (white,
       box-shadow `0 15px 30px rgba(0,0,0,.05)`, padding 20px, top 20px):
       rounded image (`img-fluid mb-4 rounded`), h2 "Subscribe to
       Newsletter" (16px w700), copy paragraph, form: email input
       (`form-control`, height 45px, border 2px `#f8f9fa`, focus
       `#e9ecef`) + submit "Subscribe" (`btn btn-primary btn-block`, bg
       `#c1a57b`).
  5. Section more posts 1 (`div.section-more-posts`): `row` → two
     `col-md-6`: section-title "LIFESTYLE" (text-center) + THREE
     horizontal post entries; section-title "TRAVEL" + THREE horizontal
     post entries.
  6. Section more posts 2 (`div.section-more-posts.mb-0`): `row
gutter-v1` → `col-12 text-center` section-title "FOOD AND DRINK" +
     FOUR `col-md-6 col-lg-3 div.post-entry` vertical cards (media image
     - text: meta-cat, h2, meta).
  7. Footer (`div.site-footer`, padding-top 70px / bottom 30px, font-size
     15px, centered): social icons (Facebook, Twitter, Linkedin,
     YouTube), copyright line ("Copyright © <year> All rights reserved |
     This template is made with <heart> by Colorlib"), and links
     "Terms & Conditions / Privacy Policy".
  8. Overlayer + page loader (`#overlayer`, `.loader` spinner).
- **Design tokens (extracted from style.css):**
  - Brand color: **`#c1a57b`** tan/beige gold — 25 usages: links,
    `a:hover`, `.text-primary`, `.btn-primary` bg + border, section-title
    highlight bar, footer link hover. Lighter variant `#c9b18c`.
  - Text: `#000000` headings, logo, nav links, post titles (black on
    light); meta grey `rgba(152,152,152,0.7)` (dates, read time, footer
    copyright text); `#303030` / `#7b7b7b` minor greys.
  - Backgrounds: page body `#f0f0f0` (warm light grey); content cards
    white `#ffffff` (hero text-wrap, floating block, post text);
    `#f8f9fa` (share icon tiles, form-control border); `#e6e6e6`,
    `#e9ecef` (focus border), `#ccc`.
  - Fonts: **Jost** (body, nav, section titles, buttons) + **Playfair
    Display** (h1–h4 headings, logo, post titles) — Google Fonts `<link>`
    in the preview HTML head (Jost seen in the inline print @font-face).
  - `.section-title`: Jost 18px, UPPERCASE, letter-spacing .1rem, weight
    700, black, display inline-block; `::before` highlight bar —
    position absolute, height 40%, bottom 0, left 0, right -10px,
    z-index -1, background `#c1a57b` (the gold bar sits behind the
    bottom 40% of the text — signature look).
  - Buttons `.btn`: padding 8px 20px (radius = Bootstrap default,
    ~4px). `.btn-primary`: background `#c1a57b`, border-color
    `#c1a57b`, white text. `.btn-block`: width 100%.
  - Form controls `.form-control`: height 45px, border 2px solid
    `#f8f9fa`, font-size 16px; focus/active border 2px `#e9ecef`.
  - Post entries: `.post-entry` margin-bottom 40px; `.media`
    margin-bottom 10px; `.text h2` font-size 20px, margin-bottom 10px,
    black link; `.text .meta-cat` margin-bottom 5px; `.text .meta`
    `rgba(152,152,152,0.7)`, margin-bottom 20px. Horizontal variant:
    `.media` flex 0 0 160px, margin-right 30px.
  - Hero `.post-slide`: background-size cover, center center, height
    100vh, min-height 560px. `.text-wrap`: white, absolute bottom 20px,
    left 50% translateX(-50%), max-width 500px, padding 40px, box-shadow
    `0 15px 30px rgba(0,0,0,.05)`. Share links: 30×30, border-radius
    4px, bg `#f8f9fa`, color `#000000`, glyph centered.
  - `.floating-block`: white, box-shadow `0 15px 30px rgba(0,0,0,.05)`,
    width 100%, padding 20px, sticky top 20px; h2 16px w700.
  - Logo: font-size 2rem, black. Nav `a`: black; `.site-footer a`:
    black, hover `#c1a57b`. Top-menu links black.
  - Search: `.search-wrap form` absolute right 10px, width 0 (expands on
    toggle), input z-index 2.
  - Carousel (owl): dots positioned bottom -50px; nav arrows absolute,
    vertically centered, width 100%.
- **Visual design (screenshot + live render):** minimalist white editorial
  blog; top utility row (Sign In · logo "Content." · Search), centered
  menu; huge full-width hero image slider with a white card floating at
  the bottom (share icons, "FOOD AND DRINK" category, big serif title,
  excerpt, "May 10, 2020 • 5 mins read"); tan/beige `#c1a57b` accent on
  links, buttons and under section titles; Playfair serif headlines vs
  Jost sans UI; warm grey `#f0f0f0` page background; flat-lay
  photography-style hero imagery; single centered footer with socials.
- **Recreation decisions:** hero/post photos → seeded picsum placeholders
  (`picsum.photos/seed/chronicle-<n>/<w>/<h>`: hero slides 1600×900,
  vertical posts 800×500, horizontal thumbs 160×160, newsletter rounded
  image 400×300, food-and-drink cards 600×400); icons → lucide-react
  (Search, Menu, X, Mail, Lock, ChevronDown, Heart; Facebook/Twitter/
  Pinterest/Linkedin/YouTube as inline SVG brand icons); Jost + Playfair
  Display via Google Fonts `<link>`; logo → text wordmark "Chronicle.";
  hero slider → React carousel (auto-advance + arrows + dots); no assets
  copied.

Chronicle lives in `apps/chronicle` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Top bar

The system SHALL render a top utility bar with a Sign In link, a centered
text logo, a search toggle and a mobile menu toggle.

#### Scenario: Top bar content

- **GIVEN** the Chronicle page is rendered
- **WHEN** the top bar is displayed
- **THEN** it SHALL show a "Sign In" link on the left (desktop only, with
  a lock icon)
- **AND** it SHALL show the centered wordmark "Chronicle." as the logo
- **AND** it SHALL show a search toggle button on the right
- **AND** it SHALL show a burger menu toggle (mobile only)

#### Scenario: Search expansion

- **GIVEN** the top bar is rendered
- **WHEN** the user clicks the search toggle
- **THEN** an inline search input SHALL expand with the placeholder
  "Enter keyword and hit enter..."
- **AND** submitting it SHALL not navigate away (prevent default)

### Requirement: Navigation menu

The system SHALL render a centered category menu below the top bar with
the links Food and Drinks, Categories, Travel, Elements, Inner Page and
Contact us.

#### Scenario: Menu content

- **GIVEN** the desktop viewport is active
- **WHEN** the navigation menu is displayed
- **THEN** it SHALL show the links Food and Drinks (active), Categories,
  Travel, Elements, Inner Page and Contact us

#### Scenario: Dropdown menus

- **GIVEN** the navigation menu is displayed
- **WHEN** a menu item with children (Categories, Elements) is
  hovered/focused
- **THEN** its dropdown with submenu links SHALL become visible

#### Scenario: Mobile menu

- **GIVEN** the mobile viewport is active
- **WHEN** the user clicks the burger toggle
- **THEN** an off-canvas menu SHALL open with the menu links and a close
  button
- **AND** clicking the close button SHALL hide it again

### Requirement: Hero slider

The system SHALL render a full-height hero slider with slides that each
carry a white post card (share icons, category, title, excerpt, meta) and
slider navigation.

#### Scenario: Hero slide content

- **GIVEN** the page is rendered
- **WHEN** a hero slide is displayed
- **THEN** it SHALL show a full-height background image
- **AND** it SHALL show a centered white card with three share icon links
  (each with an aria-label), an uppercase category label, a serif
  headline, an excerpt link and meta ("<date> • <n> mins read")

#### Scenario: Slider navigation

- **GIVEN** the hero slider is rendered
- **WHEN** the user clicks a prev/next arrow or a dot
- **THEN** the slider SHALL move to the previous/next slide (cycling)

### Requirement: Today's Highlight section

The system SHALL render a "Today's Highlight" section with two vertical
post entries and three horizontal post entries, plus a sticky newsletter
card in the right column.

#### Scenario: Section title

- **GIVEN** the section-latest area is displayed
- **WHEN** the section title is shown
- **THEN** it SHALL read "Today's Highlight" in uppercase with a gold
  highlight bar behind the bottom of the text

#### Scenario: Vertical post entries

- **GIVEN** the section-latest area is displayed
- **WHEN** the first row is shown
- **THEN** it SHALL show two vertical post cards (image on top, then
  category link, serif title link and grey meta)

#### Scenario: Horizontal post entries

- **GIVEN** the section-latest area is displayed
- **WHEN** the second row is shown
- **THEN** it SHALL show three horizontal post rows (fixed-width image
  left ~160px, text right: category link, title, meta)

#### Scenario: Newsletter card

- **GIVEN** the section-latest area is displayed
- **WHEN** the right column is shown
- **THEN** it SHALL show a white sticky card with a rounded image, the
  heading "Subscribe to Newsletter", a short paragraph, an email input
  and a full-width "Subscribe" button

### Requirement: Category sections

The system SHALL render two half-width category sections (Lifestyle and
Travel) and a four-card Food and Drink section.

#### Scenario: Lifestyle and Travel

- **GIVEN** the more-posts area is displayed
- **WHEN** the two half-width columns are shown
- **THEN** the left column SHALL have the centered title "Lifestyle" with
  three horizontal post rows
- **AND** the right column SHALL have the centered title "Travel" with
  three horizontal post rows

#### Scenario: Food and Drink cards

- **GIVEN** the final more-posts area is displayed
- **WHEN** the section is shown
- **THEN** it SHALL show the centered title "Food and Drink"
- **AND** it SHALL show four vertical post cards in a row (image on top,
  category link, title, meta)

### Requirement: Footer

The system SHALL render a centered footer with social icon links, a
copyright line and legal links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show four social icon links (each with an
  aria-label)
- **AND** it SHALL show the copyright line "© <year> All rights
  reserved | This template is made with <heart> by ..."
- **AND** it SHALL show the links "Terms & Conditions" and "Privacy
  Policy"

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Chronicle app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the top bar and nav in the banner
  landmark, all sections in the main landmark, and the footer in the
  contentinfo landmark
- **AND** the document title SHALL be "Chronicle — Blog Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-chronicle`.
- [ ] App renders all sections 1:1 in the order above (top bar → nav →
      hero slider → Today's Highlight + newsletter card → Lifestyle/
      Travel → Food and Drink cards → footer).
- [ ] Design tokens match the reference: brand tan `#c1a57b`, text
      `#000000`, meta `rgba(152,152,152,0.7)`, page bg `#f0f0f0`, card
      white `#ffffff`, tile/line `#f8f9fa`; Jost (body/section titles) +
      Playfair Display (headings); buttons bg `#c1a57b` white text,
      padding 8px 20px; inputs height 45px with 2px `#f8f9fa` border.
- [ ] Section titles: uppercase Jost 18px letter-spacing .1rem w700 with
      the `#c1a57b` highlight bar behind the bottom 40% (z-index behind
      text).
- [ ] Hero: full-height (100vh/min 560px) background-image slides with
      centered white card (max-width 500px, padding 40px, soft shadow),
      share tiles 30×30 radius 4px bg `#f8f9fa`, "May 10, 2020 • 5 mins
      read" meta; carousel arrows + dots.
- [ ] Horizontal post entries use a fixed ~160px image column with
      margin-right 30px; vertical entries use image-top layout; post
      title 20px serif black link; meta grey.
- [ ] Sticky newsletter card: white, soft shadow, padding 20px, rounded
      image, email input + full-width Subscribe button.
- [ ] Footer: centered socials (4 icons), copyright line with heart,
      Terms & Conditions / Privacy Policy links.
- [ ] Fonts (Jost + Playfair Display) loaded via Google Fonts `<link>`;
      no font or image assets copied from the original.
- [ ] All images are seeded picsum placeholders
      (`picsum.photos/seed/chronicle-<n>/<w>/<h>`); logo recreated as
      text wordmark "Chronicle.".
- [ ] `vite.config.ts` registers `injectUiSource()` (see conventions).
- [ ] 100% Vitest coverage on `apps/chronicle` (lines/functions/
      branches/statements).
- [ ] PR description includes: source template (ColorLib "Content"),
      preview URL (https://preview.colorlib.com/theme/content/ —
      reachable), design tokens used, what differs (name, placeholder
      images, text logo).
