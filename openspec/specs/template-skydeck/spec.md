# Template: Skydeck (Restaurant — Fine Dining)
<!-- prep-status: shipped-as=skyline -->
> **SHIPPED-UNDER** — the ColorLib `rooftop` design this prep describes already
> ships as `apps/skyline` (<https://skyline.free.componentdock.com>).
> Do not scaffold `apps/skydeck`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-skyline/spec.md`.

## Purpose

Recreation of ColorLib's **Rooftop** restaurant template as a single-page React
19 + Vite + Tailwind CSS 4 + TypeScript app.

| Field | Value |
|-------|-------|
| Source template | Rooftop (ColorLib) |
| Source URL | https://colorlib.com/wp/template/rooftop/ |
| Preview URL | https://preview.colorlib.com/theme/rooftop/ |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/rooftop-free-template-1.jpg |
| App name (new) | skydeck |
| Workspace | `@free-react-templates/skydeck` |
| Deploy target | `https://skydeck.free.componentdock.com` |

## Design tokens (from preview CSS)

| Token | Value | Notes |
|-------|-------|-------|
| Brand color | `#ad9966` | Gold / tan — used on buttons, accents, selection highlight |
| Body font | `"Roboto", sans-serif` | Google Fonts — 400, 500 weights |
| Heading font | `"Playfair Display", serif` | Google Fonts — 400 normal + italic |
| Text body | `#777777` | Paragraphs, descriptions |
| Text headings | `#000` / `#fff` | Dark headings on light bg; white headings on dark bg |
| Accent | `#ad9966` | Links, hover states, borders |
| Page bg (light sections) | `#f9f9ff` | Slight blue-gray tint |
| Page bg (white) | `#fff` | Menu area, gallery, chef quotes |
| Dark bg (banner, reservation, footer) | `#04091e` | Deep navy / near-black |
| Overlay | `rgba(0,0,0,0.85)` | Gallery hover overlay |
| Banner overlay | `rgba(173,153,102,0.85)` | Gold-tinted overlay on hero |
| Button primary | `bg: #ad9966`, `color: #fff`, `border-radius: 0px`, `border: 1px solid #ad9966` | Sharp corners, uppercase text |
| Button primary hover | `bg: transparent`, `color: #ad9966` | Ghost outline effect |
| Button dark | `bg: #000`, `color: #fff`, `border: 1px solid #fff` | Used in reservation form submit |
| Button dark hover | `bg: transparent`, `border: 1px solid #ad9966`, `color: #ad9966` | |
| Form input border | `1px solid #ad9966` | On focus |
| Footer bg | `#04091e` | Deep navy |
| Footer text | `#fff` | Widget headings uppercase |

## Requirements

### Feature: Skydeck — Restaurant Landing Page

#### Scenario: Header / Navbar renders correctly

- **GIVEN** the user visits the Skydeck page
- **THEN** the header displays a centered logo image
- **AND** the left nav contains links: Home, Menu, About
- **AND** the right nav contains: Pages (dropdown with Contact, Elements), Blog (dropdown with Blog, Blog Detail), Gallery
- **AND** the navbar collapses into a hamburger menu on mobile

#### Scenario: Hero / Banner section

- **GIVEN** the user sees the hero banner
- **THEN** it displays a full-width dark background image
- **AND** the heading "Skydeck" is centered in Playfair Display, white, 72px
- **AND** a horizontal rule separates the heading from the subtitle
- **AND** the subtitle reads "A Fine Dining Restaurant" in Roboto, white
- **AND** a scroll-down arrow icon links to the menu section
- **AND** fixed side links show "View Menu" and "Book a Table" on desktop

#### Scenario: Menu section

- **GIVEN** the user scrolls to the menu section
- **THEN** a left column shows the title "Daily Food Courses with Drinks" in Playfair Display
- **AND** a paragraph of description text appears below the title
- **AND** a "See Full Menu" primary button (gold, uppercase, sharp corners) is rendered
- **AND** the right column displays menu categories: Appetizer, Main Courses, Drinks & Juices
- **AND** each category contains at least 2 menu items with name, dotted price, and description

#### Scenario: Gallery section

- **GIVEN** the user views the gallery section
- **THEN** 4 food/restaurant images are displayed in a staggered 2-column grid
- **AND** the first image has a top margin offset (-480px visual push)
- **AND** the third image has a top margin offset (-280px visual push)
- **AND** each image shows an overlay on hover with a cross/zoom icon
- **AND** clicking the icon opens a lightbox/popup view

#### Scenario: Reservation form section

- **GIVEN** the user reaches the reservation section
- **THEN** the left side shows a booking form with fields: Event Name, Event Date (with calendar icon), Meal Preferences (select), Number of Guests (select), Budget, Contact Name, Email Address, Phone Number, Message (textarea)
- **AND** a "Send Request" dark button (black bg, white text, sharp corners) is at the bottom-right
- **AND** the right side displays the title "Book a Table or Rooms for private dining" in Playfair Display
- **AND** a description paragraph appears below the title

#### Scenario: Chef's Quotes section

- **GIVEN** the user scrolls to the chef's quotes section
- **THEN** the left column shows the heading "Chef's Quotes" in Playfair Display
- **AND** a quote paragraph is displayed below the heading
- **AND** a signature image appears below the quote
- **AND** the right column shows a chef portrait image

#### Scenario: Call to Action carousel

- **GIVEN** the user reaches the CTA carousel
- **THEN** it displays food images with overlay text boxes
- **AND** each item shows a category title (e.g. "Main Course") and description
- **AND** carousel navigation arrows allow swiping between items

#### Scenario: Contact section

- **GIVEN** the user views the contact section
- **THEN** the left column shows a map placeholder
- **AND** the right column shows the restaurant name "Skydeck Fine Dining Restaurant" in Playfair Display
- **AND** address lines are displayed (placeholder text)
- **AND** phone numbers are listed
- **AND** email addresses are shown

#### Scenario: Footer

- **GIVEN** the user reaches the footer
- **THEN** the footer has a dark navy background (#04091e)
- **AND** it contains 4 widget columns: Top Products, Quick Links, Features, Resources
- **AND** each column has a heading (uppercase, white, Roboto 500) and a list of links
- **AND** the bottom includes a copyright line
- **AND** the footer includes a link to https://www.componentdock.com/ branded as "Component Dock"

#### Scenario: Responsive behavior

- **GIVEN** the user views on mobile
- **THEN** the navbar collapses into a hamburger toggle
- **THEN** the gallery switches to a single-column layout
- **THEN** the reservation form stacks vertically
- **THEN** the footer columns stack into 2-column grid
- **AND** all section paddings reduce appropriately

## Verification checklist

- [ ] Fonts loaded: Playfair Display (headings) + Roboto (body) via Google Fonts
- [ ] Brand color `#ad9966` used on primary buttons, accents, selection highlight
- [ ] Banner has dark bg image with white centered text and scroll-down arrow
- [ ] Fixed side links ("View Menu" / "Book a Table") on desktop
- [ ] Menu section: 3 categories, items with name + dotted price + description
- [ ] Gallery: 4 images, staggered grid with offset margins, hover overlay + lightbox
- [ ] Reservation form: all fields present, dark submit button
- [ ] Chef's Quotes: heading + quote + signature + chef photo
- [ ] CTA carousel with food images + text overlays + nav arrows
- [ ] Contact section: map placeholder + address/phone/email
- [ ] Footer: dark navy bg, 4 widget columns, Component Dock link
- [ ] Sharp button corners (border-radius: 0px) throughout
- [ ] All section backgrounds match tokens (#f9f9ff, #fff, #04091e)
- [ ] Responsive: hamburger nav, stacked gallery/form/footer on mobile
- [ ] No ColorLib references in app code — provenance only in spec + TEMPLATES.md
- [ ] Footer links to https://www.componentdock.com/ as "Component Dock"
- [ ] Placeholder images use `https://picsum.photos/seed/skydeck-<n>/<w>/<h>`
