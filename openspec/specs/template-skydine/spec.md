# Template: Skydine (Restaurant — Rooftop Dining)

## Purpose

Skydine is a single-page restaurant website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Rooftop" free template (source:
https://colorlib.com/wp/template/rooftop/), built under a DIFFERENT name
(**Skydine**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4
+ TypeScript.

The original is a Bootstrap 4 restaurant site with jQuery plugins
(owl-carousel, magnific-popup, nice-select, bootstrap-datepicker) and a
custom `main.js` for sticky header, gallery lightbox, carousel, and
datepicker init. It features a full-bleed hero banner with background
image, a two-column menu section, a masonry gallery with hover overlays,
a reservation booking form, a chef's quote section, a call-to-action
carousel, a contact section with map placeholder, and a dark footer with
newsletter signup.

**WHAT MAKES SKYDINE DISTINCT (signature behaviors):**

1. **Split-header layout.** The header is NOT a simple navbar — it has
   a left menu column (Home, Menu, About), a CENTERED logo image, and a
   right navbar with dropdown menus (Pages → Contact/Elements, Blog →
   Blog/Blog Detail) plus a standalone Gallery link. The header is white
   (`#fff`) and becomes fixed on scroll with a diagonal shadow.

2. **Full-bleed hero banner with go-down arrow and fixed side buttons.**
   The hero section uses a dark background image (`header-bg.png`) with
   centered text: large serif "Rooftop" heading + "A Fine Dinning
   Restaurant" subtitle. Below the hero: a left-side downward arrow
   link, a right-side fixed "view menu" button, and a right-side fixed
   "book a table" button — these stay visible as the user scrolls.

3. **Two-column menu section.** Left column has the section title
   "Daily Food Courses with Drinks" in large serif font plus a "See
   Full Menu" primary button. Right column shows three menu categories
   (Appetizer, Main Courses, Drinks & Juices), each with priced items
   in dotted-leader format (e.g. "Ham & Potato Sandwiches ...........
   $25.00" with description below).

4. **Masonry-style gallery with staggered offsets.** Four gallery images
   in a 2-column grid with vertical offset staggering (first image
   `mt--480`, third image `mt--280`), creating a waterfall effect. Each
   image has a dark overlay on hover (scale 1.2) with a centered cross
   icon for lightbox (magnific-popup style).

5. **Reservation form with warm-cream background.** The booking form
   sits on a `#faf5f0` warm cream background with fields: Event Name,
   Event Date (with calendar icon), Event Time (custom select),
   Number of Guests (custom select), Budget, Contact Name, Email
   Address, Phone Number, Post a Message (textarea), and a "Send
   Request" dark button. The form takes 7/12 columns; the right side
   has the section title "Book a Table or Rooms for private dining".

6. **Chef's Quotes section.** Two-column: left has "Chef's Quotes"
   heading + paragraph text + signature image; right has a large chef
   portrait image with a negative margin (`mt--120`) pulling it up.

7. **Call-to-action carousel.** An owl-carousel of food images with
   centered text overlays ("Main Course" heading + description), with
   prev/next arrow navigation. Each slide has a full-width food image
   with a centered white text box.

8. **Contact section with map placeholder.** Left column has a
   `#contactMap` div (map placeholder); right column has restaurant
   name, address (two lines), phone numbers (three lines), and email
   addresses.

9. **Dark navy footer.** Background `#04091e`, five columns: Top Products,
   Quick Links, Features, Resources, Newsletter (with email input + arrow
   submit button). Footer bottom row has copyright text + social icons
   (Facebook, Twitter, Dribbble, Behance — replace with lucide).

## Design tokens (extracted from live preview CSS, verified 2026-08-18)

| Token        | Value                            | Use                                                                          |
| ------------ | -------------------------------- | ---------------------------------------------------------------------------- |
| Brand gold   | `#ad9966`                        | Primary button bg, button hover text, accent color, link hover color         |
| Dark brand   | `#000000`                        | Dark button bg (`primary-btn.dark`), heading color                           |
| Light bg     | `#f9f9ff`                        | Menu area background, button default-border background                       |
| Cream form   | `#faf5f0`                        | Booking form background (reservation section)                                |
| Footer bg    | `#04091e`                        | Dark navy footer background                                                  |
| Header bg    | `#ffffff`                        | White header background                                                      |
| Body text    | `#777777`                        | Body paragraph text, form placeholders                                       |
| Heading ink  | `#000`                           | Section title h1, menu item text                                             |
| Secondary ink| `#222`                           | Booking form option text                                                     |
| Placeholder  | `#999999`                        | Contact form placeholder color                                               |
| Fonts        | Playfair Display (serif) headings; Roboto (sans-serif) body | Google Fonts `<link>` in index.html; headings 48px line-height 1.5; body 14px |
| Button radius| 0px (square corners)             | `.primary-btn`, form controls                                                 |
| Primary btn  | `#ad9966` bg, `#fff` text       | solid fill; hover: transparent bg + `#ad9966` text + `#ad9966` border        |
| Dark btn     | `#000` bg, `#fff` text          | `primary-btn.dark`; hover: transparent bg + `#ad9966` text + `#ad9966` border|
| Button font  | uppercase, weight 700            | `.primary-btn` text-transform uppercase                                       |
| Gallery hover| scale 1.2 + dark overlay         | `figure img` transform scale; `.overlay` bg rgba(0,0,0,0.5)                  |
| Form inputs  | borderless, white bg             | `.form-control` border-radius 0, bg `#fff`, border 0                         |
| Header fixed | white + box-shadow               | `.header-fixed` box-shadow: -21.213px 21.213px 30px 0 rgba(158,158,158,0.3) |
| Section gap  | default Bootstrap `.section-gap` | Used on contact-area, footer-area                                            |

**Font families via Google Fonts:**
- Playfair Display: 400, 400italic (headings — `.section-title h1`, hero h1)
- Roboto: 400, 500 (body text, nav links, form labels)

## Gherkin requirements

### Feature: Skydine — Restaurant Website Template

  Scenario: Page loads with header, hero banner, and all sections visible
    Given the user visits the Skydine homepage
    Then the header is visible with a centered logo, left menu, and right nav
    And the hero banner displays a large heading and subtitle over a dark background
    And sections are rendered in order: menu, gallery, reservation, chef's quotes, call-to-action, contact, footer

  Scenario: Header becomes fixed on scroll
    Given the user scrolls past the hero banner
    Then the header becomes sticky with a box-shadow
    And all original navigation links remain accessible

  Scenario: Left-side fixed buttons are visible after hero
    Given the user scrolls past the hero section
    Then a "view menu" button is visible on the right side
    And a "book a table" button is visible on the right side

  Scenario: Menu section displays categorized items with prices
    Given the user views the menu section
    Then the section title reads "Daily Food Courses with Drinks"
    And three menu categories are displayed: Appetizer, Main Courses, Drinks & Juices
    And each category shows at least two menu items with name, dotted leader, and price
    And a "See Full Menu" button is visible below the section title

  Scenario: Gallery section shows staggered images with hover effects
    Given the user views the gallery section
    Then four gallery images are displayed in a masonry-like staggered layout
    And hovering an image shows a dark overlay with a cross icon
    And images scale up slightly on hover

  Scenario: Reservation form has all required fields
    Given the user views the reservation section
    Then a booking form is displayed with fields: Event Name, Event Date, Event Time, Number of Guests, Budget, Contact Name, Email Address, Phone Number, Post a Message
    And a "Send Request" button is visible below the form
    And the section title reads "Book a Table or Rooms for private dining"

  Scenario: Chef's Quotes section shows quote and portrait
    Given the user views the chef's quotes section
    Then a "Chef's Quotes" heading is visible
    And a paragraph of quote text is displayed below the heading
    And a signature image is shown below the quote text
    And a chef portrait image is displayed beside the quote

  Scenario: Call-to-action section shows carousel items
    Given the user views the call-to-action section
    Then at least two carousel items are displayed
    And each item has a food image with centered text overlay
    And carousel navigation arrows are present

  Scenario: Contact section displays map and contact info
    Given the user views the contact section
    Then a map placeholder is visible on the left
    And restaurant address, phone numbers, and email addresses are shown on the right

  Scenario: Footer has five columns and newsletter signup
    Given the user views the footer
    Then the footer has a dark navy background
    And five columns are displayed: Top Products, Quick Links, Features, Resources, Newsletter
    And the Newsletter column has an email input with submit button
    And social media icons are displayed in the footer bottom
    And the footer bottom links to https://www.componentdock.com/

  Scenario: Responsive behavior at mobile widths
    Given the user views the page at 767px width
    Then the header navigation collapses to a hamburger toggle
    And the hero banner height reduces
    And gallery images stack in a single column
    And the reservation form stacks vertically
    And the footer columns stack vertically

## Verification checklist

- [ ] Header: centered logo, left nav (Home, Menu, About), right nav with dropdowns
- [ ] Header: sticky on scroll with box-shadow
- [ ] Hero: dark background image, large serif heading, subtitle
- [ ] Fixed side buttons: "view menu" and "book a table" visible after scroll
- [ ] Menu section: section title, "See Full Menu" button, 3 categories, priced items
- [ ] Gallery: 4 images in staggered masonry, hover overlay with scale
- [ ] Reservation: booking form on cream background, all fields present, "Send Request" button
- [ ] Chef's Quotes: heading, paragraph, signature image, chef portrait
- [ ] Call-to-action: carousel with food images and text overlays
- [ ] Contact: map placeholder left, address/phone/email right
- [ ] Footer: dark navy bg, 5 columns, newsletter, social icons, Component Dock link
- [ ] Responsive: hamburger nav, stacking layouts at mobile widths
- [ ] Fonts: Playfair Display (headings), Roboto (body) via Google Fonts
- [ ] Brand color: #ad9966 used consistently for buttons and accents
- [ ] No ColorLib references in app code
- [ ] Package name: @free-react-templates/skydine
- [ ] CNAME: skydine.free.componentdock.com
- [ ] Tests pass at 100% coverage (Vitest + Testing Library)
