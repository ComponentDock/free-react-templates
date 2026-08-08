# Template: Umami (Food & Drinks / Blog)

## Purpose

Umami is a single-page food magazine / recipe-blog landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Yummy 2" website template design
(source: https://colorlib.com/wp/template/yummy-2/, slug `yummy-2`), built
under a DIFFERENT name (Umami — the Japanese loanword for the savory fifth
taste, evoking a food magazine brand) per the monorepo naming mandate, with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Yummy 2" — free food magazine website template
  (categories: Blog, Business, Food & Drinks; released April 2026; License
  CC BY 3.0; credits: images from Unsplash; Bootstrap Framework template).
  Official description: "Yummy is a delicious treat that serves as a free
  food magazine website template design… a spotless and minimalistic look,
  making sure your compelling articles and recipes get all the shine…
  reading experience will always be distraction-free… Bootstrap Framework…
  hover effects, drop-down menu, social media buttons, a functional contact
  form and Google Maps." The template is multipage (index.html,
  about-me.html, categories.html, recipe.html, blog.html, contact.html);
  this recreation covers the **home page (index.html)** as a single-page
  landing per repo convention.
- **Preview DOM analyzed:** the official preview
  (`https://preview.colorlib.com/theme/yummy-2/`) returns "Not Found" (404);
  the ColorLib preview portal hub link is
  `https://preview.colorlib.com/#yummy-2` (JS hub, no direct demo URL);
  `https://yummy-2-colorlib.pages.dev/` → NXDOMAIN (no pages.dev demo for
  this slug); the Wayback Machine has no snapshot of the preview or its
  assets. **However, a REACHABLE mirror of the exact same template exists:
  `https://themewagon.github.io/yummy2/`** (ThemeWagon's GitHub Pages demo of
  the Bootstrap 4 "Yummy" template by Colorlib — same content as the
  TEMPLATES.md screenshot: identical post titles such as "Cannellini Aglio e
  Olio with Salmon", "Raw Vegan Carrot Cake Bites with Avocado", "Beef
  Burger with French Fries and Salad"). The DOM section order, copy, and
  design tokens below are extracted from that live demo + its `css/style.css`
  (real values, not approximations), cross-checked against the TEMPLATES.md
  screenshot (`yummy-free-template.jpg`, AVIF 1200×946, converted and
  visually analyzed). If the official preview becomes reachable, re-verify
  quickly but expect no surprises — the screenshot and mirror match 1:1.
- **Visual design (screenshot + demo):** clean, minimal, white food magazine
  aesthetic. Centered serif-italic wordmark logo ("Yummy" + small "FOOD
  BLOG"-style subtitle, cooking-pot icon — screenshot; the demo uses
  `img/logo.png`, which we recreate as text, never copying the asset);
  centered nav with the active link underlined in hot pink; hero = a 3-column
  masonry-ish grid whose center column is a large featured recipe (photo +
  overlapping white caption box with grey date + bold title) flanked by four
  smaller posts (photo + centered title caption below); then a light-grey
  section ("Top Recipes this Week") with a distinctive **right-aligned white
  bold heading on a hot-pink rectangle** overlapping the section top; then a
  second pink-boxed section ("Featured Recipes") with a large featured card +
  smaller cards; footer on a pale grey-blue band with logo + blurb, a
  "Subscribe to our newsletter" email form, social icons, and a copyright
  bar. Hover on any post image = translucent hot-pink overlay + white icon.
- **Section order (1:1 from the live demo index DOM):**
  1. Header (`header-section`): centered logo (recreated as serif-italic
     wordmark "Umami" + small uppercase tagline "FOOD BLOG"); centered nav —
     Home (active, pink underline), Pages (dropdown: About Me, Categories,
     Recipe, Blog, Contact), Recipes, Best Of, Contact; search icon on the
     right (opens a search input "Search here…"); mobile menu (slicknav in
     the source → hamburger menu).
  2. Hero "Page Top Recipe" (`page-top-recipe`): 3-column grid, center
     column wider with the LARGE featured item — photo (≈745px tall), white
     caption box overlapping the photo bottom (margin-top -56px) with grey
     date "March 10, 2019" (14px, 700) + H3 title "Cannellini Aglio e Olio
     with Salmon" (#353535, 700); side columns each hold two smaller posts
     (photo ≈311px + centered H4 title below): "Raw Vegan Carrot Cake Bites
     with Avocado", "One Pot Weeknight Lasagna Soup Recipe" (left);
     "Beef Burger with French Fries and Salad", "Raspberry Pancakes with
     Honey and Butter" (right). Hover: pink overlay + white icon.
  3. "Top Recipes this Week" (`top-recipe`, bg `#F8F9FB`, `.spad` 100px
     padding): pink section-title box (white bold right-aligned H5,
     absolutely positioned, overlapping the section top); left = one LARGE
     item (photo ≈514px + text below: pink category tag, H4 title, excerpt);
     right = list of 4 SMALL items (photo ≈145px + pink category tag +
     H4 title + excerpt). Items: One Pot Weeknight Lasagna Soup Recipe
     (tag Desert), One Pot Weeknight Lasagna Soup Recipe (tag Vegan),
     Veggie soup with Mushrooms (tag Meat lover), Caramel Ice Cream with
     Berries (tag Desert), Fresh Octopus with lime juice (tag Desert).
     Category tag = inline pink box, white 12px 700 uppercase, padding
     4px 25px.
  4. "Featured Recipes" (`feature-recipe`): same pink section-title box;
     large featured card "Sunday Brunch: Spaghetti and Eggs Recipe" (photo
     - H4 + excerpt) + smaller recipe cards (same title reused in source —
       use distinct recipe titles for the small cards).
  5. Footer (`footer-section`, bg `#EAEDF2`, padding-top 70px): left =
     logo + about blurb (grey `#7a818d`); right = "Subscribe to our
     newsletter" + email input ("Your e-mail") + pink pill submit button;
     social icons (Instagram, Pinterest, Facebook, Twitter, Youtube);
     bottom bar "© 2026 … All rights reserved | Made with ♥ by Umami"
     (source credit "by Colorlib" is dropped/replaced per naming mandate).
  - Extras (repo standard, per other templates): skip-to-content link,
    back-to-top floating button, cookie banner (Decline / Accept All),
    scroll-reveal (`data-animate="fade-in-up"`), mobile menu
    (aria-expanded). The source has NO dark mode and NO navbar sticky
    behavior on the home page — do NOT add dark mode for this template.
- **Design tokens (extracted from the live demo's `css/style.css` — real
  values):**
  - Brand **primary = hot pink `#FC0254`** (active nav link + underline,
    section-title boxes, category tags, submit button bg, hover overlays).
  - Brand **secondary = light pink `#FF5581`** (`.primary-btn` background).
  - Text: headings/body **`#353535`** (700 weight for titles), darker `#222`
    / `#333`; date/labels grey `#878787`; footer blurb grey `#7a818d`.
  - Backgrounds: white `#fff` (page, hero caption boxes); light section
    `#F8F9FB` (Top Recipes); footer band `#EAEDF2`; also used in the CSS:
    `#F5F6FA`, `#F8F9FB`.
  - Font: **"PT Sans", sans-serif** (400/700, Google Fonts) for body/nav/
    headings per the real CSS; the LOGO wordmark is a **serif italic**
    (Playfair Display italic, 600/700, Google Fonts) per the screenshot.
  - Buttons: pill shape `border-radius: 50px`; submit button = `#FC0254` bg,
    white 600 uppercase 14px, letter-spacing 1.5px, padding 25px 70px;
    primary button = `#FF5581` bg, white 20px 400, padding 11px 44px 15px.
  - Section rhythm: `.spad` = 100px top/bottom padding; section-title box =
    `#FC0254` bg, width ≈430–470px, right-aligned white bold H5, padding
    18px 0 + 40px right, absolutely positioned overlapping the section top
    (top: -57px).
  - Nav: centered inline links, ≈60px gap, active = `#FC0254` + underline.
  - Cards/lists: image + white text block; hover = pink overlay (opacity
    ≈0.5) + white icon; content `max-w-*` container, centered.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/umami-<n>/<w>/<h>`; hero ≈800×745, side posts
  ≈380×311, top-recipe large ≈570×514, small ≈230×145, featured ≈570×514);
  icons → lucide-react (Search, Menu, X, ChefHat or CookingPot for the logo
  mark, Instagram, Facebook, Twitter, Youtube, ArrowUpRight/Plus for hover
  overlays, Mail — VERIFY exports; Pinterest is NOT reliably in lucide →
  use a text label or drop it, do NOT add a dependency); fonts via Google
  Fonts `<link>` (PT Sans 400/700 + Playfair Display italic); no dark mode;
  newsletter form = client-side validation with inline success state (no
  backend); nav "Pages" dropdown = interactive disclosure (button +
  aria-expanded), items may anchor to in-page sections (Recipes →
  #top-recipes, Best Of → #featured) or be inert placeholders mirroring the
  source's multipage links; contact form + Google Maps exist only on the
  source's contact.html → OUT of scope for this single-page home recreation
  (note in PR).
- **Multi-page fidelity note:** the source is 7 HTML pages; this recreation
  ships the home page only (per repo convention — see Airwave/Cura preps).
  Nav items pointing to other pages stay as nav labels; do not build
  separate routes.

Umami lives in `apps/umami` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Header with logo, nav, and search

The system SHALL render a header with a centered serif-italic wordmark logo,
a centered navigation bar with a dropdown and a search toggle, and a mobile
menu.

#### Scenario: Header content

- **GIVEN** the Umami page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the site name "Umami" in a serif italic
  style with a small uppercase tagline (e.g. "FOOD BLOG") and a
  food-themed icon (e.g. chef hat / cooking pot)
- **AND** the header SHALL show nav links Home (active), Pages, Recipes,
  Best Of, and Contact
- **AND** the active (Home) link SHALL use the pink accent color with an
  underline

#### Scenario: Pages dropdown

- **GIVEN** the header is rendered
- **WHEN** the user activates the "Pages" nav item
- **THEN** a dropdown SHALL expand listing About Me, Categories, Recipe,
  Blog, and Contact
- **AND** the dropdown SHALL collapse when the user activates it again or
  presses Escape

#### Scenario: Search toggle

- **GIVEN** the header is rendered
- **WHEN** the user presses the search icon
- **THEN** a search input (placeholder "Search here…") SHALL appear
- **AND** the search input SHALL be dismissible (Escape or a close action)

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a narrow viewport
- **WHEN** the user presses the mobile menu button
- **THEN** the mobile navigation SHALL expand and the button SHALL reflect
  the expanded state via `aria-expanded`

### Requirement: Hero page-top-recipe grid

The system SHALL render a 3-column recipe grid whose center column holds a
large featured recipe with an overlapping caption box, flanked by four
smaller posts.

#### Scenario: Featured recipe

- **GIVEN** the page is rendered
- **WHEN** the hero grid is displayed
- **THEN** the center column SHALL show a large recipe photo
- **AND** a white caption box SHALL overlap the photo's bottom edge
  containing a grey date (e.g. "March 10, 2019") and a bold title
  (e.g. "Cannellini Aglio e Olio with Salmon")

#### Scenario: Side posts

- **GIVEN** the hero grid is displayed
- **WHEN** the user inspects the side columns
- **THEN** the left column SHALL show two smaller posts, each with a photo
  and a centered title below (e.g. "Raw Vegan Carrot Cake Bites with
  Avocado", "One Pot Weeknight Lasagna Soup Recipe")
- **AND** the right column SHALL show two smaller posts (e.g. "Beef Burger
  with French Fries and Salad", "Raspberry Pancakes with Honey and Butter")

#### Scenario: Hover effect

- **GIVEN** a recipe post is displayed
- **WHEN** the user hovers over its photo
- **THEN** a translucent pink overlay SHALL appear with a white icon

### Requirement: Top Recipes this Week

The system SHALL render a light-grey section with a pink section-title box
and a two-column layout of a large recipe card and a list of small recipe
cards.

#### Scenario: Section title box

- **GIVEN** the page is rendered
- **WHEN** the Top Recipes section is displayed
- **THEN** it SHALL show a right-aligned white bold heading "Top Recipes
  this Week" on a pink rectangle overlapping the section's top edge

#### Scenario: Large recipe card

- **GIVEN** the Top Recipes section is displayed
- **WHEN** the user inspects the left column
- **THEN** it SHALL show one large card with a photo, a pink uppercase
  category tag (e.g. "Desert"), a bold recipe title, and a short excerpt

#### Scenario: Small recipe list

- **GIVEN** the Top Recipes section is displayed
- **WHEN** the user inspects the right column
- **THEN** it SHALL list at least four small items, each with a thumbnail
  photo, a pink uppercase category tag, a recipe title, and a short excerpt

### Requirement: Featured Recipes

The system SHALL render a section with a pink section-title box and a large
featured recipe card plus smaller recipe cards.

#### Scenario: Featured section content

- **GIVEN** the page is rendered
- **WHEN** the Featured Recipes section is displayed
- **THEN** it SHALL show the heading "Featured Recipes" in the pink
  section-title box
- **AND** it SHALL show a large featured card (photo + title + excerpt,
  e.g. "Sunday Brunch: Spaghetti and Eggs Recipe")
- **AND** it SHALL show additional smaller recipe cards with distinct
  titles and excerpts

### Requirement: Footer with newsletter

The system SHALL render a footer with brand info, a newsletter subscribe
form, social links, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Umami" and a short about blurb on
  the left
- **AND** it SHALL show a "Subscribe to our newsletter" heading with an
  email input (placeholder "Your e-mail") and a pink pill submit button on
  the right
- **AND** it SHALL show social icons (Instagram, Facebook, Twitter, Youtube)
- **AND** the bottom bar SHALL show the copyright line "© 2026 … All rights
  reserved | Made with ♥ by Umami"

#### Scenario: Newsletter validation

- **GIVEN** the newsletter form is displayed
- **WHEN** the user submits an invalid email
- **THEN** an inline error SHALL be shown and no success state appears
- **WHEN** the user submits a valid email
- **THEN** an inline success message SHALL replace the form

### Requirement: Accessibility and extras

The system SHALL include a skip-to-content link, a back-to-top button, and a
cookie banner.

#### Scenario: Skip link

- **GIVEN** the page is rendered
- **WHEN** the page loads
- **THEN** a "Skip to content" link SHALL be the first focusable element

#### Scenario: Back to top

- **GIVEN** the page is scrolled down
- **WHEN** the user presses the back-to-top button
- **THEN** the page SHALL scroll to the top

#### Scenario: Cookie banner

- **GIVEN** the page is rendered without a stored consent choice
- **WHEN** the user presses "Accept All" or "Decline"
- **THEN** the banner SHALL dismiss and the choice SHALL persist for the
  session

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-umami`
- [ ] TDD: tests written before components, one `describe` per component,
      scenario `it` blocks mirroring the spec scenarios
- [ ] `scripts/verify-app.sh umami` passes (typecheck + lint + 100% coverage
      tests + build)
- [ ] Fidelity: section order 1:1 with the reference above (header → hero
      page-top-recipe → Top Recipes this Week → Featured Recipes → footer);
      brand tokens from this spec (`#FC0254` primary pink, `#FF5581`
      secondary, `#353535` text, PT Sans + Playfair Display italic logo,
      pill buttons, pink section-title boxes) in `@theme`
- [ ] Official preview unreachable (404 + NXDOMAIN + no archive); reference
      used = live ThemeWagon mirror `https://themewagon.github.io/yummy2/`
      (same template, content matches TEMPLATES.md screenshot 1:1) — PR
      description must state this per docs/replication.md
- [ ] No dark mode (source has none); multi-page nav items (About Me,
      Categories, Recipe, Blog, Contact) are dropdown/anchors, no separate
      routes; contact form + Google Maps (source contact.html only) are out
      of scope — noted in PR
- [ ] Images are picsum placeholders (never copied assets); logo recreated
      as text (never `img/logo.png`); icons from lucide-react (Pinterest
      dropped or text-labeled if not exported; no new dependencies)
- [ ] PR description states: source template (ColorLib "Yummy 2", slug
      `yummy-2`), preview URL, design tokens used, renames (Umami,
      placeholder images), and the mirror-reference note
- [ ] After merge: `[~]` → `[x]` + surge URL + homepage in TEMPLATES.md,
      `npm run readme:status`
