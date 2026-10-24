# Template: SliceHaus (Restaurant / Food & Dining)
<!-- prep-status: shipped-as=pepperoni -->
> **SHIPPED-UNDER** — the ColorLib `pizza` design this prep describes already
> ships as `apps/pepperoni` (<https://pepperoni.free.componentdock.com>).
> Do not scaffold `apps/slicehaus`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-pepperoni/spec.md`.

## Purpose

Recreation of ColorLib **Pizza** — a free pizza restaurant website template with hero slider, about, services, gallery, counters, tabbed menu, blog, and contact form.

- **Source:** [colorlib.com/wp/template/pizza/](https://colorlib.com/wp/template/pizza/)
- **Preview:** [preview.colorlib.com/theme/pizza/](https://preview.colorlib.com/theme/pizza/)
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/pizza-free-template.jpg`
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript · Vitest + Testing Library
- **Category:** Restaurant / Food & Dining

## Design Tokens

Extracted from live preview CSS (`css/style.css`) and DOM structure.

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| Brand gold | `#f8b500` | Primary buttons, accent highlights, CTA backgrounds |
| Dark bg | `#121618` | Navbar, services section bg, footer bg, counter section bg |
| Near-black | `#101315` | Body default background |
| White | `#ffffff` | Card backgrounds, light sections, text on dark |
| Light gray | `#f7f7f7` | Section alternating bg |
| Medium gray | `#bfbfbf` / `#b3b3b3` | Muted text, borders |
| Dark text | `#212529` | Body text, button text on primary |
| Accent blue | `#3fc3e8` / `#56caeb` | Border accents, focus rings |
| Gold variant | `#fac564` | Secondary gold (lighter) |

### Fonts
| Font | Usage |
|------|-------|
| Poppins | Primary body/heading font |
| Josefin Sans | Alternate heading font |
| Work Sans | Alternate body font |
| Nothing You Could Do | Decorative/script accent |
| Surface (measured) | `#78d5ef` | paints it ×10 — `background-color` on `.btn-primary`; style.css (74,235 B, sha256 d50b5898308c) · <https://preview.colorlib.com/theme/pizza/> |

### Buttons
- Primary: gold bg (`#f8b500`), dark text (`#212529`), rounded padding (`p-3 px-xl-4 py-xl-3`), no border-radius (sharp corners in original)
- White outline: white border, white text, transparent bg (used for secondary CTAs)

### Section Backgrounds
- Hero slider: full-width background images with dark overlay
- Services: dark bg (`#121618`) with overlay
- Counter: dark bg with background image (`bg_2.jpg`) + parallax + overlay
- Footer: dark bg (`#121618`) with overlay
- Appointment/Contact: background image with overlay + map on left

## Requirements

### Hero Slider

#### Scenario: Hero displays a rotating carousel of full-width pizza images

- **GIVEN** the user visits the homepage
- **THEN** a full-width image carousel is displayed
- **AND** the carousel auto-rotates between slides
- **AND** each slide shows a heading ("Italian Cuisine" / "Italian Pizza" / "We cooked your desired Pizza Recipe")
- **AND** each slide has two CTAs: "Order Now" (primary) and "View Menu" (white outline)

### Navbar

#### Scenario: Navbar is fixed at top with logo and navigation links

- **GIVEN** the user scrolls down the page
- **THEN** the navbar remains fixed at the top
- **AND** it contains links: Home, Menu, Services, Blog, About, Contact
- **AND** a "Order Now" CTA button is displayed on the right

### Intro Bar

#### Scenario: Contact info bar displays below hero

- **GIVEN** the hero section is visible
- **THEN** a horizontal bar shows three items: phone number, address, and hours
- **AND** each item has an icon and text
- **AND** social media icons (Twitter, Facebook, Instagram) are displayed on the right

### About Section

#### Scenario: About section shows split layout with image and text

- **GIVEN** the user scrolls to the about section
- **THEN** a two-column layout is displayed
- **AND** the left half shows a food/restaurant image
- **AND** the right half shows a heading "Welcome to Pizza A Restaurant" and descriptive paragraph

### Services Section

#### Scenario: Services section displays three service cards

- **GIVEN** the user scrolls to the services section
- **THEN** a dark background section with "Our Services" heading is displayed
- **AND** three service cards are shown: "Healthy Foods", "Fastest Delivery", "Original Recipes"
- **AND** each card has an icon, heading, and description

### Gallery Section

#### Scenario: Gallery shows a 4-column image grid

- **GIVEN** the user scrolls to the gallery section
- **THEN** a full-width 4-column image grid is displayed
- **AND** each image has a hover overlay with a search icon
- **AND** there are 4 gallery images total

### Counter Section

#### Scenario: Counter section displays key statistics with animation

- **GIVEN** the user scrolls to the counter section
- **THEN** a dark section with parallax background image is displayed
- **AND** four statistics are shown: "100 Pizza Branches", "85 Number of Awards", "10567 Happy Customers", "900 Staff"
- **AND** each statistic has a pizza/food icon
- **AND** numbers animate (count up) when scrolled into view

### Menu Section

#### Scenario: Menu section displays tabbed food categories

- **GIVEN** the user scrolls to the menu section
- **THEN** a split layout is shown: image on left, menu on right
- **AND** four tabs are available: Pizza, Drinks, Burgers, Pasta
- **AND** each tab shows 3 menu items with image, name, description, and price
- **AND** clicking a tab switches the visible menu items

### Blog Section

#### Scenario: Blog section shows recent posts

- **GIVEN** the user scrolls to the blog section
- **THEN** "Recent from blog" heading is displayed
- **AND** three blog cards are shown in a row
- **AND** each card has a cover image, date, author, comment count, title, and excerpt

### Contact/Appointment Section

#### Scenario: Contact form with map

- **GIVEN** the user scrolls to the contact section
- **THEN** a split layout is displayed: map on the left, form on the right
- **AND** the form has fields: First Name, Last Name, Message
- **AND** a "Send" primary button submits the form

### Footer

#### Scenario: Footer with multi-column layout

- **GIVEN** the user scrolls to the bottom
- **THEN** a dark footer section with overlay is displayed
- **AND** it contains: About Us column with social icons, Recent Blog column, Newsletter signup column, and Contact info column
- **AND** a bottom bar shows copyright and attribution

## Verification checklist

- [ ] All 10 sections match original order: Hero → Intro Bar → About → Services → Gallery → Counter → Menu → Blog → Contact → Footer
- [ ] Brand gold (#f8b500) used for primary buttons and accents
- [ ] Dark sections use #121618 background with overlay treatment
- [ ] Hero carousel auto-rotates with 3 slides
- [ ] Menu tabs switch between Pizza/Drinks/Burgers/Pasta categories
- [ ] Counter numbers animate on scroll
- [ ] Gallery images have hover overlay with search icon
- [ ] Contact form has First Name, Last Name, Message fields
- [ ] Footer has 4 columns: About, Blog, Newsletter, Contact
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] Google Fonts loaded via index.html link
- [ ] Icons from lucide-react
