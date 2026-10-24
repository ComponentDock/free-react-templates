# Template: Brewcraft (Coffee Shop)
<!-- prep-status: shipped-as=perk -->
> **SHIPPED-UNDER** — the ColorLib `coffee` design this prep describes already
> ships as `apps/perk` (<https://perk.free.componentdock.com>).
> Do not scaffold `apps/brewcraft`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-perk/spec.md`.

## Purpose

Brewcraft is a single-page coffee shop website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Coffee" free template design (see TEMPLATES.md), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

- Source template: [Coffee](https://colorlib.com/wp/template/coffee/)
- Preview URL: <https://preview.colorlib.com/theme/coffee/>
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/coffee-free-template.jpg`

## Naming

- **New name:** Brewcraft
- **App folder:** `apps/brewcraft`
- **Package:** `@free-react-templates/brewcraft`
- **ColorLib source:** Coffee (`coffee`)
- **Mapping:** `apps/brewcraft` recreates `https://colorlib.com/wp/template/coffee/`

## Design tokens

Extracted from the live preview CSS (`css/main.css`) and DOM structure:

| Token | Value | Notes |
|---|---|---|
| Brand color | `#b68834` | Gold/amber brown — buttons, accents, review section bg |
| Dark text | `#222222` | Headings, primary text |
| Body text | `#777777` | Paragraphs, secondary text |
| Light bg | `#f9f9ff` | Very light lavender — default button bg, section contrast |
| White | `#fff` | Cards, button hover bg |
| Font family | `"Poppins", sans-serif` | All text; weights 300–700 |
| Heading weight | 600 | h1–h6 |
| Body weight | 300 | Paragraphs, body |
| Button border-radius | `0px` (default) | `.genric-btn` default; `.radius` variant = 5px |
| Card border-radius | `10px` | `.single-menu` box cards, `.single-blog` images |
| Card shadow | `0px 10px 30px 0px rgba(182, 136, 52, 0.2)` | Amber-tinted shadow on menu cards |
| Section gap | Standard Bootstrap spacing (`section-gap` class) | ~80px vertical padding |
| Banner bg | `url(../img/header-bg.jpg) center / cover` | Dark coffee-themed hero image |
| Footer bg | `url(../img/footer-bg.jpg) center / cover` | Dark background image, white text |
| Menu section bg | `url(../img/menu-bg.jpg) center / cover` | Background image behind coffee cards |
| Review section bg | `#b68834` solid | Brand color as full-width section background |
| Star color (checked) | `orange` | Review star ratings |
| Selection color | `#b68834` bg, `#fff` text | Text selection highlight |

## Section structure (in page order)

1. **Header bar** — top info bar (hours + phone) + navbar (logo + nav links + hamburger)
2. **Hero / Banner** — fullscreen background image, headline "Start your day with a black Coffee", subtitle "Now you can feel the Energy", CTA button "Buy Now"
3. **About / Video section** — split layout: left = play button overlay on background, right = heading "We Telecast our Coffee Making Live", subtext, signature image
4. **Menu / Coffee section** — section title + 6 coffee item cards (Cappuccino, Americano, Espresso, Macchiato, Mocha, Coffee) each with name + price ($49) + description, 2-column grid
5. **Gallery** — section title + 5-image masonry grid (1 tall left + 1 wide top-right + 2 small bottom-right)
6. **Review / Testimonials** — brand-color background, 2 reviewer cards (avatar + name + star rating + review text), counter row (4 stats: Happy Client 2536, Total Projects 7562, Cups Coffee 2013, Total Submitted 10536)
7. **Blog** — section title + 2 blog post cards (image + tag pills + title + excerpt + date)
8. **Footer** — dark bg, 3 columns: About Us text + Newsletter form (email input + arrow button) + Follow Us social icons (Facebook, Twitter, Dribbble, Behance) + copyright

## Requirements

### Background

#### Scenario: Background

- **GIVEN** the Brewcraft template is loaded in the browser
- **AND** the page displays the "Brewcraft" brand

### Header

#### Scenario: Top bar displays hours and phone

- **THEN** the top bar shows "Mon-Fri: 8am to 2pm"
- **AND** the top bar shows "Sat-Sun: 11am to 4pm"
- **AND** a phone link "(012) 6985 236 7512" is visible

#### Scenario: Navbar contains navigation links

- **THEN** the navbar contains links: "Home", "About", "Coffee", "Review", "Blog"
- **AND** a hamburger menu is present for mobile

### Hero / Banner

#### Scenario: Hero section displays headline and CTA

- **GIVEN** the hero section is visible
- **THEN** a subtitle "Now you can feel the Energy" is shown
- **AND** the main headline "Start your day with a black Coffee" is displayed
- **AND** a "Buy Now" button links to the menu section

### About / Video section

#### Scenario: About section shows video and text

- **GIVEN** the about section is visible
- **THEN** a play button overlay links to a video
- **AND** the heading "We Telecast our Coffee Making Live" is shown
- **AND** a paragraph about the coffee shop is displayed
- **AND** a signature image is visible

### Menu / Coffee section

#### Scenario: Menu section displays coffee items

- **GIVEN** the coffee menu section is visible
- **THEN** 6 coffee item cards are displayed in a 2-column grid
- **AND** each card shows a coffee name, price, and description
- **AND** the coffee names include "Cappuccino", "Americano", "Espresso", "Macchiato", "Mocha", "Coffee"

#### Scenario: Menu cards have correct styling

- **GIVEN** a coffee menu card is rendered
- **THEN** it has a white background with amber-tinted shadow
- **AND** it has rounded corners (10px border-radius)

### Gallery

#### Scenario: Gallery section displays images

- **GIVEN** the gallery section is visible
- **THEN** a section title "What kind of Coffee we serve for you" is shown
- **AND** 5 gallery images are displayed in a masonry grid layout
- **AND** each image opens in a lightbox on click

### Review / Testimonials

#### Scenario: Review section shows testimonials

- **GIVEN** the review section is visible
- **THEN** the section has a gold/amber (#b68834) background
- **AND** 2 reviewer cards are displayed side by side
- **AND** each card shows an avatar, name, star rating, and review text

#### Scenario: Counter row shows statistics

- **GIVEN** the counter row is visible
- **THEN** 4 statistics are displayed: "Happy Client" (2536), "Total Projects" (7562), "Cups Coffee" (2013), "Total Submitted" (10536)

### Blog

#### Scenario: Blog section displays posts

- **GIVEN** the blog section is visible
- **THEN** 2 blog post cards are displayed side by side
- **AND** each card shows an image, tag pills, title, excerpt, and date

### Footer

#### Scenario: Footer displays content and links

- **GIVEN** the footer is visible
- **THEN** an "About Us" column with description text is shown
- **AND** a "Newsletter" column with email input and submit button is shown
- **AND** a "Follow Us" column with social media icons is shown
- **AND** a copyright notice is displayed at the bottom
- **AND** a "Component Dock" link is present (replacing original Colorlib attribution)

### Responsive

#### Scenario: Mobile layout adjusts layout

- **GIVEN** the viewport is 375px wide
- **THEN** the hamburger menu is visible
- **AND** navigation links collapse into a mobile menu
- **AND** coffee menu cards stack vertically
- **AND** blog post cards stack vertically

## Verification checklist

- [ ] Section order matches: Header → Hero → About → Menu → Gallery → Review → Blog → Footer
- [ ] Brand color `#b68834` used for primary buttons, review section bg, accents
- [ ] Font is Poppins (weights 300–700)
- [ ] Hero has fullscreen dark background image with white text
- [ ] About section has video play button on left, text on right
- [ ] Menu section has 6 coffee cards with name + price + description
- [ ] Gallery has 5 images in masonry grid
- [ ] Review section has brand-color bg, 2 testimonial cards, 4 counter stats
- [ ] Blog section has 2 post cards
- [ ] Footer has 3 columns (About, Newsletter, Social) with dark bg
- [ ] Footer links to Component Dock (not Colorlib)
- [ ] No Colorlib references in app code
- [ ] All images use picsum.photos placeholders
- [ ] Responsive layout works on mobile
