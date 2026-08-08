# Template: Feast (Food Blog Template)

## Purpose

Feast is a single-page food-blog landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Foodblog"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Foodblog" — food / recipes blog template
  (source: https://colorlib.com/wp/template/foodblog/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/foodblog/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
  The TEMPLATES.md screenshot (`foodblog-free-template.jpg`) is the visual
  reference: hot-pink top bar, white header, hero photo with sticker-style
  headline boxes (pink/yellow/lime), recipe card grid.
- **Section order (1:1):** Header (top pink bar: social icons + Register/Login;
  bottom: logo + nav Home/Features/Receipies/Reviews/Contact + pink search
  button) → Hero (694px photo slider, 2 slides, centered sticker headline
  "Healthy Recipes / from the best chefs / for all the foodies") → Ad banner
  ("Amazing deserts" overlay on 3-image carousel) → Latest recipes (6 recipe
  cards, 3-col grid) → Bottom widgets (3 cols: Top rated recipes list, Most
  liked recipes list, blog post card) → Reviews (yellow section, 2 review
  cards) → Gallery (image carousel strip) → Footer (bg photo, logo + 6 social
  icons, nav menu, copyright).
- **Design tokens extracted from `style.css`:**
  - Brand **pink `#ff2a6b`** — header top bar, recipe info bars, hero sticker
    #1, date badges, readmore button, search button, author/dates accents.
  - Secondary **yellow `#fdc856`** — hero sticker #2, reviews section
    background.
  - Accent **lime `#bdde64`** — hero sticker #3.
  - Star rating **`#fbb710`**, faded star **`#e0e3e4`**.
  - Text **`#474747`** (headings/nav, weight 500), footer social **`#b8b8b8`**.
  - Font: **"Poppins"** (Google Fonts), sans-serif.
  - Stickers: border-radius 5px, shadow `-1px -5px 20px rgba(0,0,0,.3)`;
    title-1 rotate(4deg), title-2/3 straight.
  - Buttons: search 34×37px radius 4px pink; readmore 41×41px pink square;
    hero arrows 40px circle, 2px solid pink border.
  - Thumbs: recipe bar padding 17px 25px; review-thumb 166×160px; list thumb
    77×77px; gallery items 320px tall; blog card white with
    `0 17px 29px rgba(0,0,0,.15)` shadow.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/feast-<n>/<w>/<h>`); icons → lucide-react (brand/social
  icons as inline SVG per repo rule — lucide-react has no brand icons);
  Poppins via Google Fonts `<link>`; no assets copied. Copy text paraphrased
  but same content kinds (recipe names, dates, authors, ratings).

Feast lives in `apps/feast` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with a hot-pink utility bar
(social icons + Register/Login), the site name "Feast", anchor links to the
page sections, a search button, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Feast page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show a pink top bar with social icons on the left
  and "Register / Login" links on the right
- **AND** the navbar SHALL show the site name "Feast" with a tagline
  "RECIPES & MORE"
- **AND** the navbar SHALL show links Home, Features, Recipes, Reviews, and
  Contact
- **AND** the navbar SHALL show a search button and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero photo slider with a centered
sticker-style headline.

#### Scenario: Hero slides

- **GIVEN** the Feast page is rendered
- **WHEN** the hero section loads
- **THEN** the hero SHALL show a background photo (seeded picsum placeholder)
  with the headline "Healthy Recipes" on a pink sticker, "from the best
  chefs" on a yellow sticker, and "for all the foodies" on a lime sticker
- **AND** the hero SHALL show previous/next circular arrow buttons with a
  pink border
- **AND** the user SHALL be able to advance between 2 slides

### Requirement: Ad banner

The system SHALL render a promotional banner with a photo carousel and an
overlay text panel.

#### Scenario: Ad banner content

- **GIVEN** the Feast page is rendered
- **WHEN** the banner section is displayed
- **THEN** the banner SHALL show "Amazing deserts" as the heading
- **AND** the banner SHALL list "Easy to make", "Step by Step Video
  Tutorial", "Gluten Free", and "Healthy Ingredients" with check icons
- **AND** the banner background SHALL cycle through placeholder photos

### Requirement: Latest recipes

The system SHALL render a "Latest recipes" section with a 3-column grid of
recipe cards.

#### Scenario: Recipe cards

- **GIVEN** the Feast page is rendered
- **WHEN** the recipes section is displayed
- **THEN** the section SHALL have the heading "Latest recipes"
- **AND** the section SHALL show 6 recipe cards in a 3-column grid
- **AND** each card SHALL show a photo with a pink info bar containing the
  recipe name (e.g. "Traditional Pizza") and a 5-star rating with the last
  star faded

### Requirement: Bottom widgets

The system SHALL render three side-by-side widget columns: "Top rated
recipes", "Most liked recipes", and a blog post card.

#### Scenario: Recipe lists

- **GIVEN** the Feast page is rendered
- **WHEN** the widgets section is displayed
- **THEN** the first column SHALL have the heading "Top rated recipes" with a
  list of 5 entries
- **AND** the second column SHALL have the heading "Most liked recipes" with
  a list of 5 entries
- **AND** each list entry SHALL show a thumbnail, a pink date
  (e.g. "March 14, 2018"), the recipe name, and a star rating

#### Scenario: Blog post card

- **GIVEN** the Feast page is rendered
- **WHEN** the widgets section is displayed
- **THEN** the third column SHALL show a blog card with a photo and a pink
  date badge (e.g. "May 04, 2018")
- **AND** the card SHALL show the title "Italian restaurant Review", an
  author line "By Maria Williams", an excerpt, a "2 Comments" link, and a
  pink readmore arrow button

### Requirement: Reviews

The system SHALL render a yellow section with two review cards.

#### Scenario: Review cards

- **GIVEN** the Feast page is rendered
- **WHEN** the reviews section is displayed
- **THEN** the section SHALL have a yellow background and show 2 review cards
  side by side
- **AND** each card SHALL show a photo with a pink date badge, a pink date
  line, a recipe name (e.g. "Feta Cheese Burgers"), a star rating, and an
  author meta line with avatar and "By Janice Smith"

### Requirement: Gallery

The system SHALL render a photo gallery carousel strip.

#### Scenario: Gallery strip

- **GIVEN** the Feast page is rendered
- **WHEN** the gallery section is displayed
- **THEN** the gallery SHALL show a horizontal strip of at least 6 photos of
  equal height (320px equivalent)
- **AND** the strip SHALL be scrollable/advanceable via arrows or drag

### Requirement: Footer

The system SHALL render a footer over a background photo with the site name,
social icons, a nav menu, and copyright.

#### Scenario: Footer content

- **GIVEN** the Feast page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL show the site name "Feast" and 6 social icons
  (Pinterest, Facebook, Twitter, Dribbble, Behance, LinkedIn)
- **AND** the footer SHALL show nav links Home, Features, Recipes, Reviews,
  and Contact
- **AND** the footer SHALL show a copyright line

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] `apps/feast` created from the section-rich landing app pattern (Aurora),
      package renamed to `@free-react-templates/feast`
- [ ] TDD: tests written first (red), then implementation (green)
- [ ] 100% coverage lines/functions/branches/statements (`npm run
    test:coverage -- --project apps/feast` or `scripts/verify-app.sh feast`)
- [ ] Brand pink `#ff2a6b` in `@theme`; yellow `#fdc856` + lime `#bdde64`
      accents; Poppins via Google Fonts link
- [ ] Section order matches the original 1:1 (see Design reference)
- [ ] Placeholder images via `picsum.photos/seed/feast-<n>/<w>/<h>`; no assets
      copied; brand icons as inline SVG
- [ ] PR description: source template, preview URL, design tokens, what
      differs
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL
      (`free-react-templates-feast.surge.sh`) + homepage + `npm run
    readme:status`
