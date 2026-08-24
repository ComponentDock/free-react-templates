# Template: GustoTable (Restaurant)

## Purpose

GustoTable is a single-page restaurant website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Restauco" free template (source:
https://colorlib.com/wp/template/restauco/), built under a DIFFERENT name
(**GustoTable**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap-based restaurant landing page with: a transparent
header over a pink-tinted hero slider with split layout (text left, food image
right + floating testimonial card), services cards, a tabbed "Most Popular
Dishes" menu section on a dark background image, a table booking form with a
chef image, customer testimonials carousel, an Instagram photo gallery, and a
4-column footer. The design uses warm restaurant colors (coral orange
`#FE5F41` primary, dark brown `#4D312C` headings, pink-white `#FFF4F2`
backgrounds) with the Mitr + Raleway Google Fonts.

**WHAT MAKES GUSTOTABLE DISTINCT (signature behaviors):**

1. **Split hero with floating testimonial card.** The hero section is a
   flex row: left half has headline + subtext + "Our Menu" button + "Watch
   Video" link; right half is a full-height food image with an ABSOLUTELY
   POSITIONED floating testimonial card (user photo + quote + 5-star rating)
   overlaid at the bottom-left corner. The hero background is `#FFF4F2`
   (light pink-white) and the slider area is 950px tall on desktop.

2. **Tabbed menu with price badges.** "Most Popular Dishes" section uses
   Bootstrap-style tab navigation (Breakfast / Lunches / Dinner / Drinks /
   Fastfood). Each tab shows 4 food cards with: food image, an orange
   `#FE5F41` circular price badge overlay (`$20`), dish name, short
   description, and an orange "Order Now" browse-link. The section has a
   dark background image (`section-bg1.jpg` — cover, parallax-like) with
   white heading text.

3. **Table booking form with chef image.** A two-column layout: left side
   has a chef/portrait image inside a styled frame; right side has a "Book
   a table" form with inputs for guest count, date picker, meal type
   dropdown (Dinner / Breakfast), phone number, message textarea, and an
   orange rounded submit button ("Sent Request"). The form inputs use
   rounded corners (`border-radius: 25px` on selects, standard on text
   inputs).

4. **Warm coral-orange palette.** Primary brand color is `#FE5F41` (coral
   orange) used for buttons, price badges, nav hover underlines, social
   icons, and the submit button. Secondary is `#4D312C` (dark warm brown)
   for all headings. Page background alternates between `#FFF4F2` (light
   pink-white) and `#FFF7F3`. The sticky header bar background is
   `#FFF4F2`. Body text is `#94817E` (muted warm grey-brown).

5. **Carousel-based customer testimonials.** Three visible testimonial
   cards per view, each with a circular customer photo, a quote paragraph,
   and 5-star rating with reviewer name. Uses an owl-carousel pattern.

## Naming

The ColorLib source name "Restauco" is FORBIDDEN as the app name. **GustoTable**
is the new, original name — kebab-case, no collision with `apps/`,
`openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name (verified:
zero hits for `gustotable` in all three locations). Source slug + preview URL
are recorded below.

- **Source:** ColorLib "Restauco" — https://colorlib.com/wp/template/restauco/
- **Preview URL:** https://preview.colorlib.com/theme/restauco/ (REACHABLE,
  HTTP 200, 46,507 bytes)

## Design reference (replication findings)

### Screenshot

The TEMPLATES.md screenshot (`restauco-free-template.jpg`) shows a warm
restaurant landing page: coral-orange accent color, a hero section with a
large food plate image, overlaid testimonial card, and warm pinkish-white
background tones. The overall aesthetic is elegant, warm, food-focused.

### Live preview DOM structure (from https://preview.colorlib.com/theme/restauco/)

Section order in the HTML:

1. **Header** — transparent over hero; logo + nav (Home, Menu, About, Blog
   with submenu, Contact) + "Book a Table" text link + phone number button
   in coral orange; mobile hamburger menu.
2. **Hero/Slider** — `slider-area slider-height` (950px), `#FFF4F2` bg;
   flex row: left text ("Meet, Eat & Enjoy the true test" h1, subtitle,
   "Our Menu" button + "Watch Video" link with play icon), right hero
   image with floating testimonial card (avatar + quote + 5 stars).
3. **Our Services** — white bg, section-padding; centered heading "Best
   way to eat healthy food" + subtitle; 3-column card grid (Healthy Meal,
   Fast Food, Delicious Coffee) each with SVG icon + title + description.
4. **Most Popular Dishes** — dark bg image (`section-img-bg2` with
   `section-bg1.jpg`); white section title "Most Popular Dishes" + "Full
   Menu" button; tabbed nav (Breakfast/Lunches/Dinner/Drinks/Fastfood);
   4 food cards per tab with image + `$20` price badge + dish name +
   description + "Order Now" link.
5. **Book a Table** — white bg; two-column: left chef image in styled
   frame, right form (guests, date, meal type, phone, message, submit).
6. **Customer Testimonials** — white bg; "What our customer sayes" heading
   - subtitle; 3 testimonial cards (avatar, quote, 5 stars, reviewer name)
     in a carousel.
7. **Instagram Gallery** — row of 5 food images in an owl-carousel; below
   it a `@restauco` Instagram link button.
8. **Footer** — 4-column layout: logo + description + social icons (Twitter,
   Facebook, LinkedIn, Pinterest); Quick Links; Cakes menu links; Contact
   info (address, phone, email). Bottom bar with copyright.

### CSS tokens extracted from `assets/css/style.css`

**Fonts (Google Fonts):**

- Headings: `"Mitr", sans-serif` — weight 500, used for h1–h6, nav links,
  buttons, section titles
- Body: `"Raleway", sans-serif` — weight normal (400), 16px, line-height 1.4
  for paragraphs

**Colors:**

- Primary brand: `#FE5F41` (coral orange) — buttons, price badges, nav hover,
  submit, social icons, footer links, browse-btn, back-to-top
- Heading color: `#4D312C` (dark warm brown) — all h1–h6
- Body text: `#94817E` (muted warm brown-grey) — paragraphs, subtitles
- Page/slider background: `#FFF4F2` (light pink-white)
- Section alternate bg: `#FFF7F3` (near-white pink)
- Sticky header bg: `#FFF4F2`
- Footer bottom text: `#5E5E5E`
- Button hover (submit): `#ec583a` (darker coral) for ::before pseudo
- Button hover (submit, darken): `#4D312C` for submit-btn ::before

**Border radius:**

- Buttons (`.btn`, `.submit-btn`): `35px` (fully rounded pill shape)
- Hero button: `35px` radius + box-shadow `0 15px 25px rgba(254,95,65,0.14)`
- Nice-select dropdown: `25px`
- Regular inputs: default (no custom radius visible)
- Price badges (`.numbering`): circular (50% radius implied by positioning)

**Spacing:**

- Section padding: `120px` top/bottom (`.section-padding`)
- Hero height: `950px` desktop, scaling down to `550px` on mobile

**Button styles:**

- `.btn`: bg `#FE5F41`, font-family Mitr, padding 22px 32px, radius 35px,
  font-size 18px, weight 500, white text, `::before` scale animation on hover
- `.submit-btn`: same coral, padding 25px 43px, radius 35px, `::before`
  dark brown (#4D312C) sweep animation
- `.browse-btn`: text link style, orange color, underline on hover
- `.full-menu`: same as .btn but larger padding 35px 55px

**Header:**

- Transparent initially (`.header-transparent` absolute positioned)
- Sticky state: `.sticky-bar` with bg `#FFF4F2` + box-shadow
- Nav links: Mitr font, color `#4D312C`, hover turns `#FE5F41` with
  underline animation
- Dropdown submenu: bg `#FE5F41`, white text, padding 17px 0

**Other:**

- Back-to-top: circular `#FE5F41` button, 50px diameter, radius 50%
- Social icons: `#FE5F41`, 22px, hover darker `#F04506` + lift 5px
- Section-img-bg2: background-size cover, no-repeat (parallax-like on
  the menu section)
- Instagram images: owl-carousel, single-instagram cards with food photos

## Requirements

### Requirement: Page shell and header

The system SHALL render a transparent header over the hero with navigation links and action buttons, and the header SHALL become sticky with a pink-white background on scroll.

#### Scenario: Transparent header over hero

- **GIVEN** the page loads
- **WHEN** the header renders
- **THEN** the header SHALL be transparent (absolute positioned) over the hero section
- **AND** it SHALL contain the logo, navigation links (Home, Menu, About, Blog, Contact), and action buttons ("Book a Table" + phone number)

#### Scenario: Sticky header on scroll

- **GIVEN** the user scrolls past the hero
- **WHEN** the header becomes sticky
- **THEN** the background SHALL change to `#FFF4F2` (pink-white)
- **AND** a subtle box-shadow SHALL appear
- **AND** the mobile "Book a Table" and phone buttons SHALL be hidden

#### Scenario: Navigation dropdown

- **GIVEN** the user hovers over "Blog" in the nav
- **WHEN** the submenu appears
- **THEN** it SHALL show Blog, Blog Details, and Element links
- **AND** the submenu SHALL have a coral orange `#FE5F41` background with white text

### Requirement: Hero section

The system SHALL render a split hero section with text on the left, a food image on the right, and a floating testimonial card overlaying the image.

#### Scenario: Split hero layout

- **GIVEN** the hero section renders on desktop (>=992px)
- **WHEN** the page loads
- **THEN** the hero SHALL display a flex row with text on the left and a food image on the right
- **AND** the section background SHALL be `#FFF4F2`
- **AND** the section height SHALL be approximately 950px

#### Scenario: Hero text content

- **GIVEN** the hero text area renders
- **WHEN** the page loads
- **THEN** the heading SHALL read "Meet, Eat & Enjoy the true test"
- **AND** a subtitle about making a reservation SHALL be present
- **AND** an "Our Menu" button (coral orange, rounded pill, with shadow) SHALL be rendered
- **AND** a "Watch Video" link with a play icon SHALL be rendered

#### Scenario: Floating testimonial card

- **GIVEN** the hero image area renders on desktop
- **WHEN** the page loads
- **THEN** a testimonial card SHALL overlay the bottom-left of the hero image
- **AND** it SHALL show a user avatar, a quote, 5 orange stars, and a reviewer name

#### Scenario: Mobile hero

- **GIVEN** the page renders on mobile (<768px)
- **WHEN** the hero section loads
- **THEN** the hero image SHALL be hidden (display: none)
- **AND** only the text content SHALL be visible

### Requirement: Services section

The system SHALL render a three-column grid of service cards with icons, titles, and descriptions below a centered heading.

#### Scenario: Three-column services grid

- **GIVEN** the services section renders on desktop
- **WHEN** the page loads
- **THEN** a centered heading "Best way to eat healthy food" with subtitle SHALL be shown
- **AND** three service cards SHALL be displayed in a row: Healthy Meal, Fast Food, Delicious Coffee
- **AND** each card SHALL have an SVG icon, a title, and a description paragraph

### Requirement: Menu / Most Popular Dishes

The system SHALL render a tabbed menu section with five category tabs and food cards showing price badges on a dark background.

#### Scenario: Dark background section

- **GIVEN** the menu section renders
- **WHEN** the page loads
- **THEN** the section SHALL have a dark background image (cover, parallax-like)
- **AND** the heading "Most Popular Dishes" SHALL be white
- **AND** a "Full Menu" button (coral orange) SHALL be right-aligned

#### Scenario: Tabbed navigation

- **GIVEN** the menu section renders
- **WHEN** the page loads
- **THEN** five tab buttons SHALL appear: Breakfast, Lunches, Dinner, Drinks, Fastfood
- **AND** Breakfast SHALL be the active tab by default

#### Scenario: Food card grid

- **GIVEN** a tab is selected
- **WHEN** the tab content renders
- **THEN** four food cards SHALL be shown in a 3-column grid
- **AND** each card SHALL have a food image with a circular orange `$20` price badge
- **AND** a dish name, short description, and "Order Now" browse-link SHALL be present

### Requirement: Table booking form

The system SHALL render a two-column booking layout with a chef image on the left and a reservation form on the right.

#### Scenario: Two-column booking layout

- **GIVEN** the booking section renders on desktop
- **WHEN** the page loads
- **THEN** a chef/portrait image SHALL appear on the left
- **AND** a "Book a table" form SHALL appear on the right

#### Scenario: Form fields

- **GIVEN** the booking form renders
- **WHEN** the page loads
- **THEN** inputs SHALL be present for: Number of guests (text), Date (date picker), Meal type (select: Dinner, Breakfast), Phone no. (text), Message (textarea)
- **AND** a "Sent Request" submit button (coral orange, rounded, full-width) SHALL be rendered

### Requirement: Customer testimonials

The system SHALL render a carousel of customer testimonial cards with photos, quotes, and star ratings.

#### Scenario: Testimonial carousel

- **GIVEN** the customer section renders
- **WHEN** the page loads
- **THEN** a heading "What our customer sayes" with subtitle SHALL be shown
- **AND** three testimonial cards SHALL be visible in a carousel row
- **AND** each card SHALL show a circular customer photo, a quote paragraph, 5 orange stars, and a reviewer name

### Requirement: Instagram gallery

The system SHALL render a carousel of food images with an Instagram follow link.

#### Scenario: Photo carousel

- **GIVEN** the Instagram section renders
- **WHEN** the page loads
- **THEN** a row of food images SHALL appear in a carousel
- **AND** below the images an Instagram link button SHALL show "@gustotable"

### Requirement: Footer

The system SHALL render a four-column footer with logo, quick links, menu links, and contact information, and MUST link to componentdock.com.

#### Scenario: Four-column footer

- **GIVEN** the footer renders
- **WHEN** the page loads
- **THEN** four columns SHALL be shown:
  1. Logo + description paragraph + social icons (Twitter, Facebook, LinkedIn, Pinterest)
  2. "Quick Links" (Home, About, Services, Blog, Contact)
  3. "Cakes" menu links
  4. "Contact Us" with address, phone, email
- **AND** a bottom bar with copyright text SHALL be present
- **AND** the footer MUST link `https://www.componentdock.com/` (branded "Component Dock")

#### Scenario: Social icon hover

- **GIVEN** the footer social icons render
- **WHEN** the user hovers over one
- **THEN** the icon color SHALL change to `#F04506` and lift up 5px

### Requirement: Accessibility and semantics

The system SHALL use semantic HTML elements throughout and MUST provide alt text and form labels for accessibility.

#### Scenario: Semantic HTML

- **GIVEN** the page renders
- **WHEN** the DOM is inspected
- **THEN** semantic elements (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`) SHALL be used
- **AND** navigation SHALL use `<nav>` with `<ul>` / `<li>` / `<a>` pattern
- **AND** images SHALL have meaningful `alt` text
- **AND** forms SHALL use `<label>` or `placeholder` for input identification

#### Scenario: Responsive behavior

- **GIVEN** the page renders on mobile (<576px)
- **WHEN** the layout adjusts
- **THEN** the hero image SHALL be hidden
- **AND** sections SHALL stack vertically
- **AND** the mobile hamburger menu SHALL replace the desktop nav
- **AND** section padding SHALL reduce to 70px

## Verification checklist

- [ ] Header renders transparent over hero with correct nav links
- [ ] Sticky header shows `#FFF4F2` bg + shadow on scroll
- [ ] Hero shows split layout with text left, image right, testimonial card overlay
- [ ] Hero image hidden on mobile
- [ ] Services section shows 3 cards with icons
- [ ] Menu section has dark background image + white heading
- [ ] Tabbed navigation works (5 tabs, Breakfast active by default)
- [ ] Food cards show price badge, name, description, "Order Now"
- [ ] Booking form has all 5 fields + submit button
- [ ] Testimonials carousel shows 3 cards with photos, quotes, stars
- [ ] Instagram gallery shows food images + @gustotable link
- [ ] Footer has 4 columns + bottom bar + Component Dock link
- [ ] All colors match tokens (coral `#FE5F41`, brown `#4D312C`, pink `#FFF4F2`)
- [ ] Fonts: Mitr for headings, Raleway for body
- [ ] Buttons are pill-shaped (radius 35px)
- [ ] Responsive breakpoints work (hero image hidden, sections stack)
- [ ] Accessibility: semantic HTML, alt text, form labels
- [ ] No ColorLib references in app code
- [ ] Footer links to `https://www.componentdock.com/`
