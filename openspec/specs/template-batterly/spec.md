# Template: Batterly (Cake & Bakery Shop)

## Purpose

Batterly is a single-page bakery/cake shop website in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Cake" free template (source:
https://colorlib.com/wp/template/cake/), built under a DIFFERENT name
(**Batterly**), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a Bootstrap-based bakery shop template with a hero slider,
about section with progress bars, product category carousel, product grid,
class registration form with video, team grid, testimonial carousel,
Instagram photo grid, map section, and a three-column footer. The page
uses an orange (`#f08632`) brand with dark headings (`#111111`),
"Playfair Display" serif for headings and "Montserrat" sans-serif for body
text.

## Naming

The ColorLib source name "Cake" is FORBIDDEN as the app name. **Batterly**
is the new, original name — kebab-case, no collision with `apps/`,
`openspec/specs/`, or existing TEMPLATES.md entries (verified: zero hits
for `batterly`). Source slug: `cake`, preview URL:
https://preview.colorlib.com/theme/cake/

## Design reference (replication findings)

- **Original:** ColorLib "Cake" (page title: "Cake | Template").
  Single-page bakery/cake shop e-commerce template.
- **Live preview — REACHABLE (verified by curl fetch):**
  `https://preview.colorlib.com/theme/cake/` returns 200. Stylesheets:
  `css/style.css` (main custom styles) + Bootstrap CSS + several
  plugin CSS (owl carousel, slicknav, flaticon, magnific popup,
  nice-select, elegant-icons, barfiller).
- **Screenshot — referenced from TEMPLATES.md** (vision analysis
  unavailable for external image; design confirmed from DOM + CSS).

### Live DOM structure (from fetched HTML)

**Section order (top to bottom):**

1. **Header/Top Bar** — top bar with currency selector (USD/EUR),
   language selector (ENG/Spanish), Sign in link. Below: centered logo,
   main nav (Home, About, Shop, Pages dropdown, Blog, Contact),
   search icon, heart icon, cart icon with count. Mobile hamburger.
2. **Hero Slider** — full-width slider with background image
   (`img/hero/hero-1.jpg`), centered text: heading "Making your life
   sweeter one bite at a time!" and CTA button "Our cakes" (primary-btn).
   Owl carousel with navigation arrows.
3. **About Section** — two-column layout. Left: section subtitle "About
   Cake shop", heading "Cakes and bakes from the house of Queens!",
   description paragraph about Jordanian brand. Right: three progress
   bars (Cake design 95%, Cake Class 80%, Cake Recipes 90%) using
   barfiller jQuery plugin. Light background.
4. **Categories Section** — horizontal carousel of category cards,
   each with an icon and label: Cupcake, Butter, Red Velvet, Biscuit,
   Donut. Hover effect with brand color fill. Light background.
5. **Product Section** — 4-column grid of 8 product cards. Each card
   has a background image, category label badge, product name link,
   price, and "Add to cart" button. Products: Dozen Cupcakes $32,
   Cookies and Cream $30, Gluten Free Mini Dozen $31, Cookie Dough
   $25, Vanilla Salted Caramel $5, German Chocolate $14, Dulce De
   Leche $32, Mississippi Mud $8.
6. **Class Section** — two-column: left has registration form (Name,
   Phone, class type dropdown, requirements textarea, "registration"
   submit button). Right has a video thumbnail with YouTube play button
   overlay. Background image on video side.
7. **Team Section** — heading "Sweet Baker" with "Join Us" CTA button.
   4-column grid of team member cards with background photo, name
   (all "Randy Butler"), role ("Decorater"), and social icons
   (facebook, twitter, instagram, youtube). Overlay on hover.
8. **Testimonial Section** — centered heading "Our client say" with
   subtitle "Testimonial". Owl carousel of testimonials, each with
   author photo, author name + city, star rating (4.5 stars), and
   quote text. Alternating between two testimonials.
9. **Instagram Section** — two-column: left has heading "Sweet moments
   are saved as memories." with subtitle "Follow us on instagram" and
   @sweetcake handle. Right has 6 instagram photo thumbnails in a
   3x2 grid. Light background.
10. **Map Section** — overlay card with contact info (city, address,
    email, phone) on top of a Google Maps iframe. Dark overlay on
    the map area.
11. **Footer** — background image (`img/footer-bg.jpg`), three columns:
    Working Hours schedule, logo + about text + social icons, Newsletter
    subscription form. Bottom copyright bar with Privacy Policy, Terms,
    Site Map links.

### Design tokens (extracted from style.css)

| Token                | Value                            | Notes                                                         |
| -------------------- | -------------------------------- | ------------------------------------------------------------- |
| `--color-brand`      | `#f08632`                        | Primary orange — section-title spans, hover states, primary   |
|                      |                                  | button bg, category hover fill, testimonial dots active        |
| `--color-heading`    | `#111111`                        | Dark near-black for h2 headings, hero text, nav links         |
| `--color-body`       | `#111111` with opacity           | Body text, muted with `#11111194` for lighter text            |
| `--color-muted`      | `#888888` / `#999` / `#a4a4a4`  | Secondary text, footer widget text, cart price                 |
| `--color-border`     | `#b7b7b7` / `#e1e1e1` / `#bababa` | Borders, dividers, progress bar track                       |
| `--color-white`      | `#ffffff`                        | Page background, card backgrounds, button text                |
| `--color-black`      | `#000000`                        | Footer overlay, site-btn background                           |
| `--color-light-bg`   | `#fdf3ea`                        | Warm cream/peach background for class section                  |
| `--font-heading`     | `"Playfair Display", serif`      | Serif font for headings — italic style, 400-700 weight        |
| `--font-body`        | `"Montserrat", sans-serif`       | Sans-serif for body text, nav, buttons — 300-600 weight       |
| `--btn-radius`       | `60px`                           | site-btn (form submit) — pill-shaped / fully rounded          |
| `--btn-primary-bg`   | `#f08632`                        | primary-btn default bg (orange)                               |
| `--btn-primary-text` | `#ffffff`                        | primary-btn text color                                        |
| `--btn-dark-bg`      | `#111111`                        | site-btn bg (dark), hero overlay                              |
| `--btn-outline`      | `border: 2px solid #b7b7b7`      | team "Join Us" button — outlined style                        |
| `--hero-overlay`     | `rgba(17,17,17,0.5)`             | Hero slider dark semi-transparent overlay                     |
| `--section-radius`   | `50%`                            | Category item icon circles, owl carousel nav buttons          |

## Requirements

### Requirement: Header / Navigation Bar

The system SHALL render a sticky navigation bar with a top utility bar
and a main navigation row.

#### Scenario: Top bar

- **GIVEN** the Batterly app is rendered
- **THEN** a top bar SHALL display currency selector (USD default),
  language selector (ENG default), and a Sign in link
- **AND** search icon, heart (wishlist) icon, and cart icon with
  count badge SHALL appear on the right

#### Scenario: Main nav

- **GIVEN** the Batterly app is rendered
- **THEN** the logo SHALL be centered between the nav links
- **AND** nav links SHALL be: Home, About, Shop, Pages (dropdown with
  Shop Details, Shopping Cart, Checkout, Wishlist, Class, Blog Details),
  Blog, Contact
- **AND** the navbar SHALL become sticky on scroll
- **AND** a hamburger menu SHALL appear on mobile viewports

### Requirement: Hero Slider

The system SHALL render a full-width hero slider with background images,
heading text, and a CTA button.

#### Scenario: Hero content

- **GIVEN** the Batterly app is rendered
- **THEN** the hero slider SHALL display with a background image and
  a dark semi-transparent overlay (`rgba(17,17,17,0.5)`)
- **AND** the heading "Making your life sweeter one bite at a time!"
  SHALL be rendered in Playfair Display italic, 46px, dark color
- **AND** a primary CTA button "Our cakes" SHALL link to the product area
- **AND** slider navigation arrows SHALL be circular (50% border-radius)

### Requirement: About Section

The system SHALL render an about section with descriptive text and
animated progress bars.

#### Scenario: About content

- **GIVEN** the Batterly app is rendered
- **THEN** the section SHALL have subtitle "About Cake shop" in
  brand orange (`#f08632`), uppercase, letter-spacing 4px
- **AND** heading "Cakes and bakes from the house of Queens!" in
  Playfair Display serif
- **AND** a description paragraph about the bakery brand

#### Scenario: Progress bars

- **GIVEN** the Batterly app is rendered
- **THEN** three progress bars SHALL display: Cake design (95%),
  Cake Class (80%), Cake Recipes (90%)
- **AND** each bar SHALL animate fill on scroll/viewport entry

### Requirement: Categories Section

The system SHALL render a horizontal carousel of cake category cards.

#### Scenario: Category cards

- **GIVEN** the Batterly app is rendered
- **THEN** a carousel SHALL display category cards: Cupcake, Butter,
  Red Velvet, Biscuit, Donut (minimum 5)
- **AND** each card SHALL have an icon and label text
- **AND** on hover, the card background SHALL fill with brand orange
  (`#f08632`) and the icon/text SHALL turn white
- **AND** category icon containers SHALL be circular (50% radius)

### Requirement: Product Grid

The system SHALL render a product grid with 8 cake product cards.

#### Scenario: Product cards

- **GIVEN** the Batterly app is rendered
- **THEN** a 4-column grid SHALL display 8 product cards
- **AND** each card SHALL have a background image with category label
  badge, product name link, price, and "Add to cart" button
- **AND** products SHALL include: Dozen Cupcakes ($32), Cookies and
  Cream ($30), Gluten Free Mini Dozen ($31), Cookie Dough ($25),
  Vanilla Salted Caramel ($5), German Chocolate ($14), Dulce De
  Leche ($32), Mississippi Mud ($8)
- **AND** placeholder images SHALL use `https://picsum.photos/seed/batterly-<n>/400/400`

### Requirement: Class Registration Section

The system SHALL render a class registration form with a video thumbnail.

#### Scenario: Registration form

- **GIVEN** the Batterly app is rendered
- **THEN** the section SHALL have subtitle "Class cakes" and heading
  "Made from your own hands"
- **AND** the form SHALL contain: Name input, Phone input, class type
  dropdown (Studying/Writing/Reading Class), requirements textarea,
  and a "registration" submit button (pill-shaped, `border-radius: 60px`)
- **AND** a video thumbnail SHALL display on the right with a play button
  overlay linking to a YouTube video
- **AND** the section background SHALL use warm cream (`#fdf3ea`)

### Requirement: Team Section

The system SHALL render a team grid with member cards.

#### Scenario: Team grid

- **GIVEN** the Batterly app is rendered
- **THEN** the heading "Sweet Baker" SHALL be displayed with a "Join Us"
  outlined button (border: 2px solid `#b7b7b7`, transparent bg)
- **AND** 4 team cards SHALL display in a row, each with a background
  photo, name, role ("Decorater"), and social icons (facebook, twitter,
  instagram, youtube)
- **AND** on hover, a dark overlay SHALL reveal the social icons

### Requirement: Testimonial Section

The system SHALL render a testimonial carousel with star ratings.

#### Scenario: Testimonials

- **GIVEN** the Batterly app is rendered
- **THEN** the section SHALL have subtitle "Testimonial" and heading
  "Our client say"
- **AND** each testimonial SHALL show author photo, author name + city,
  4.5-star rating, and quote text
- **AND** carousel dots SHALL allow navigation between testimonials
- **AND** at least 2 distinct testimonials SHALL alternate

### Requirement: Instagram Section

The system SHALL render an Instagram photo grid with a call-to-action.

#### Scenario: Instagram grid

- **GIVEN** the Batterly app is rendered
- **THEN** the left column SHALL show heading "Sweet moments are saved
  as memories." with subtitle "Follow us on instagram" and handle
  "@sweetcake"
- **AND** the right column SHALL display a 3x2 grid of 6 instagram
  photo thumbnails
- **AND** placeholder images SHALL use `https://picsum.photos/seed/batterly-ig-<n>/400/400`

### Requirement: Map / Contact Section

The system SHALL render a contact info card overlaid on a map.

#### Scenario: Map contact card

- **GIVEN** the Batterly app is rendered
- **THEN** a card SHALL overlay the map with city name, address,
  email, and phone number
- **AND** a Google Maps embed (or static map placeholder) SHALL
  display behind the card

### Requirement: Footer

The system SHALL render a three-column footer with a bottom bar.

#### Scenario: Footer content

- **GIVEN** the Batterly app is rendered
- **THEN** the footer SHALL have a background image with dark overlay
- **AND** three columns SHALL display: Working Hours schedule, logo +
  about text + social icons (facebook, twitter, instagram, youtube),
  Newsletter subscription form
- **AND** a bottom copyright bar SHALL include Privacy Policy, Terms &
  Conditions, and Site Map links
- **AND** the Colorlib attribution SHALL be replaced with a link to
  https://www.componentdock.com/ branded as "Component Dock"

### Requirement: Accessibility and Semantics

The system SHALL expose accessible semantics throughout.

#### Scenario: Semantics

- **GIVEN** the Batterly app is rendered
- **THEN** the navbar SHALL use `<nav>` with semantic `<ul>`/`<li>` links
- **AND** all sections SHALL use semantic heading hierarchy (h2 for
  section headings)
- **AND** form inputs SHALL have associated labels
- **AND** interactive elements SHALL have focus-visible rings
- **AND** images SHALL have alt text
- **AND** the slider SHALL have appropriate ARIA attributes for
  carousel semantics

## Verification checklist

- [ ] `npm run verify:app -- batterly` green: typecheck -> lint -> vitest
      (100% coverage) -> build (per-app gate).
- [ ] Visual match vs the live preview at
      https://preview.colorlib.com/theme/cake/: hero slider, about
      with progress bars, category carousel, product grid, class form,
      team grid, testimonial carousel, instagram grid, map, footer.
- [ ] Design tokens: brand orange `#f08632`, dark heading `#111111`,
      heading font Playfair Display serif, body font Montserrat
      sans-serif, pill buttons `border-radius: 60px`.
- [ ] Responsive check at 768px (single-column layout, no overflow).
- [ ] No ColorLib references in any app file; footer links
      https://www.componentdock.com/.
