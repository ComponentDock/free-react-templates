# Template: Simmer (Minimal Food Blog)

## Purpose

Simmer is a single-page minimal food blog template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Yummy" website template design
(source: https://colorlib.com/wp/template/yummy/), built under a DIFFERENT
name (Simmer — a cooking verb evoking slow, careful food preparation) per the
monorepo naming mandate, with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Yummy" — minimal food blog website template
  (source: https://colorlib.com/wp/template/yummy/, category "Food / Blog").
- **Preview DOM analyzed:** the official preview
  (`https://preview.colorlib.com/theme/yummy/`) is REACHABLE (HTTP 200,
  ~21.7 KB HTML + `css/style.css` ~42.7 KB parsed for tokens). Structure
  below comes from the live preview DOM, which is authoritative.
- **Screenshot note:** the TEMPLATES.md screenshot
  (`yummy-minimal-food-blog-website-template.jpg`) shows an OLDER "Yummy
  Blog" variant (top social bar + Sign in/Sign up, handwritten-style script
  logo, category cards Food/Cooking/Life Style). The live preview is the
  current design and is used as the reference; the implementer should follow
  the live preview, not the screenshot.
- **Section order (1:1, from live preview DOM):**
  1. Header: centered logo image, centered nav (Home, Pages dropdown →
     About Me / Categories / Recipe / Blog / Contact, Recipes, Best Of,
     Contact), search icon on the right. Header padding-top 65px /
     padding-bottom 30px; logo margin-bottom 92px.
  2. "Page Top Recipes" hero: 3-column grid — a large recipe card in the
     center column (col-lg-6) and two stacked recipe cards in each side
     column (col-lg-3). Each card: image (`pt-recipe-img`, slight opacity),
     white text block overlapping the image bottom (margin-top -56px,
     centered, z-index), date line ("March 10, 2019"), recipe title (h4,
     #353535, bold), category tag. Featured large card titles e.g.
     "Cannellini Aglio e Olio with Salmon", "Raw Vegan Carrot Cake Bites
     with Avocado"; side cards "One Pot Weeknight Lasagna Soup Recipe",
     "Beef Burger with French Fries and Salad", "Raspberry Pancakes with
     Honey and Butter".
  3. "Top Recipes this Week" (`top-recipe`, bg #F8F9FB, spad spacing):
     section-title pink bar (absolute, top -57px, left 0) + two large
     recipe items side by side (image height 514px, opacity 0.5; text with
     cat-name tag e.g. "Desert" / "Vegan" + h3 title + lorem ipsum blurb).
  4. "Featured Recipes" (`feature-recipe`, bg #F8F9FB): section-title pink
     bar (width 430px) + two items (cat-name tag + title e.g. "Sunday
     Brunch: Spaghetti and Eggs Recipe" + lorem blurb), plus-icon (+ in a
     pink 80x57 box, absolute right, top -157px).
  5. Footer (`footer-section`, bg #EAEDF2): left column (col-lg-5) — logo +
     about blurb + "Subscribe to our newsletter" form (italic email input,
     white border, 64px height + pink Subscribe button 18px bold); right
     column (col-lg-6 offset-lg-1) — social icons (Instagram, Pinterest,
     Facebook, Twitter, Youtube), copyright line (#b8c1d0, 14px).
- **Design tokens extracted from `css/style.css` + DOM:**
  - Brand color: **#FC0254** (hot pink/red; 31 background usages) —
    section-title bars, cat-name tags, active/hover nav links, Subscribe
    button, plus-icon.
  - Font: **"PT Sans", sans-serif** (body and headings; h1 70px, h2
    48px/36px, h3 30px, h4 24px; headings #353535, weight 700). No Google
    Fonts link in the preview HTML — the implementer should load PT Sans
    from Google Fonts in `index.html`.
  - Neutrals: #353535 (heading/text color), #F8F9FB (top-recipe +
    feature-recipe section bg), #EAEDF2 (footer bg), #F5F6FA (light bg),
    #b8c1d0 (copyright text), #fff (card text blocks, nav bg).
  - Buttons: Subscribe button — border 1px #FC0254, bg #FC0254, white
    text, font-size 18px, weight 700, padding 17px 40px, min-width 205px,
    no radius (sharp corners); input 64px height, italic 16px, border 1px
    #fff, padding-left 34px.
  - Section title bar: bg #FC0254, width 430–470px, right-aligned text,
    padding 18px 0 / padding-right 40px, absolute top -57px, left 0; h2
    white bold 48px line-height 48px inside.
  - Category tag (`cat-name`): bg #FC0254, white, 12px, weight 700,
    uppercase, padding 4px 25px.
  - Recipe card text block: white bg, centered, margin-top -56px overlap,
    padding 19px 35px 30px, z-index 999, relative; date line + h4 title
    (#353535, 24px, bold, line-height 30px).
  - Nav links: #353535, 20px, weight 700, padding 5px; active/hover →
    #FC0254; dropdown sub-menu visible on hover.
  - Hero/top-recipe images: slight opacity (0.34–0.5) over the section bg.
- **Recreation decisions:** food photos → seeded picsum placeholders
  (`picsum.photos/seed/simmer-<n>/<w>/<h>`); icons → lucide-react (search,
  plus, socials); PT Sans via Google Fonts; no copied assets.

Simmer lives in `apps/simmer` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Header / navigation

The system SHALL render a centered header with the site logo, a centered
nav menu with a Pages dropdown and a search icon.

#### Scenario: Header content

- **GIVEN** the Simmer page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the site name "Simmer" (logo)
- **AND** the header SHALL show nav links Home, Pages, Recipes, Best Of,
  and Contact
- **AND** the header SHALL show a search icon on the right

#### Scenario: Pages dropdown

- **GIVEN** the header is rendered
- **WHEN** the user hovers or focuses the Pages link
- **THEN** a dropdown SHALL appear with links About Me, Categories, Recipe,
  Blog, and Contact

### Requirement: Page-top recipes hero

The system SHALL render a hero grid of recipe cards with one large featured
card and four stacked side cards.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL contain a large featured recipe card with an image, a
  date, a title, and a category tag
- **AND** it SHALL contain at least four additional recipe cards arranged
  in two side columns
- **AND** each card SHALL show an image, a date line, a title, and a
  category tag

### Requirement: Top Recipes section

The system SHALL render a "Top Recipes this Week" section with a pink
section-title bar and two large recipe items.

#### Scenario: Top recipes content

- **GIVEN** the page is rendered
- **WHEN** the top recipes section is displayed
- **THEN** it SHALL contain a section title bar with the heading "Top
  Recipes this Week"
- **AND** it SHALL show two large recipe items, each with an image, a
  category tag, a title, and a blurb

### Requirement: Featured Recipes section

The system SHALL render a "Featured Recipes" section with two recipe items
and a plus icon.

#### Scenario: Featured recipes content

- **GIVEN** the page is rendered
- **WHEN** the featured recipes section is displayed
- **THEN** it SHALL contain a section title bar with the heading "Featured
  Recipes"
- **AND** it SHALL show two recipe items, each with a category tag, a
  title, and a blurb
- **AND** it SHALL show a plus icon in a pink box positioned at the top
  right of the section

### Requirement: Footer

The system SHALL render a footer with an about blurb, a newsletter
subscribe form, social links, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the logo, an about blurb, and a "Subscribe to our
  newsletter" form with an email input and a Subscribe button
- **AND** it SHALL show social icons including Instagram, Pinterest,
  Facebook, Twitter, and Youtube
- **AND** it SHALL show a copyright line

#### Scenario: Subscribe form

- **GIVEN** the footer is displayed
- **WHEN** the user types an email into the subscribe input
- **THEN** the input SHALL accept the text, and the Subscribe button SHALL
  be a submit control

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Simmer app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, the
  hero and recipe sections in the main landmark, and the footer in the
  contentinfo landmark
- **AND** the document title SHALL be "Simmer — Minimal Food Blog"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh simmer` passes: typecheck + lint + vitest
      with 100% coverage + build
- [ ] Section order matches the demo 1:1 (header, page-top hero grid, top
      recipes, featured recipes, footer)
- [ ] Design tokens in `@theme`: brand pink `#FC0254`, neutrals #353535,
      #F8F9FB, #EAEDF2, #F5F6FA, #b8c1d0
- [ ] Font: PT Sans via Google Fonts; headings #353535 weight 700
- [ ] Section title bars: pink bg, white bold 48px heading, absolute
      top -57px left 0, right-aligned
- [ ] Category tags: pink bg, white uppercase 12px bold, padding 4px 25px
- [ ] Recipe cards: image + white overlapping text block (margin-top
      negative), date + h4 title + category tag
- [ ] Subscribe button: pink bg, white 18px bold, padding 17px 40px, sharp
      corners; email input italic with white border
- [ ] Placeholder images seeded (`picsum.photos/seed/simmer-<n>/<w>/<h>`);
      no copied assets
- [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` + surge URL) —
      NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
