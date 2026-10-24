# Template: Burwood (Restaurant / Food Service)
<!-- prep-status: shipped-as=ravida -->
> **SHIPPED-UNDER** — the ColorLib `buri` design this prep describes already
> ships as `apps/ravida` (<https://ravida.free.componentdock.com>).
> Do not scaffold `apps/burwood`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-ravida/spec.md`.

## Purpose

Recreation of ColorLib's **Buri** template as a modern restaurant website.

- **Source:** https://colorlib.com/wp/template/buri/
- **Preview:** https://preview.colorlib.com/theme/buri/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/buri-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens

| Token          | Value                   | Notes                                    |
| -------------- | ----------------------- | ---------------------------------------- |
| Brand / accent | `#d6ad86`               | Warm tan/golden — video icon bg, accents |
| Dark           | `#1c1a18`               | Footer background                        |
| Button bg      | `#000000`               | CTA buttons                              |
| Button hover   | `#ffffff`               | White text on black hover                |
| Body font      | Montserrat, sans-serif  | —                                        |
| Heading font   | Playfair Display, serif | —                                        |
| Border         | `#f3e6da`               | Light tan, used on video section border  |
| Card shadow    | `rgba(221,221,211,0.3)` | About card box-shadow                    |

## Section structure (order)

1. **Navbar** — logo left, nav links right (Home, About, Menu, Contact), hamburger on mobile.
2. **Banner / Hero** — full-width background image, centered text overlay: tagline "Expensive but the best" (small caps), heading "Modern restaurant in center of the city", CTA button.
3. **About** — two-column layout: left image, right text (subtitle "about us", heading "Delicious food provider since 1990", paragraph, CTA button). Card with white bg + box-shadow.
4. **Food Menu** — section heading "Delicious Food Menu" with subtitle "Popular Menu". Grid of 6 menu items, each: image, dish name, short description, price.
5. **Intro Video** — full-width dark background section with centered text and a circular play-button icon (tan, pulsing animation).
6. **Testimonials** — section heading "What they said" with subtitle "Testimonials". Carousel/slider of review cards with avatar, name, star rating, and quote.
7. **Contact** — left side: contact info (address, hours, phone, email). Right side: (empty or form in original). Section padding.
8. **Footer** — dark bg (#1c1a18), 4-column layout: logo + phone + email + social icons, Quick links, Newsletter signup, About text. Copyright bar at bottom with Component Dock link.

## Requirements

### Navbar

#### Scenario: Logo and nav links render

- **GIVEN** the page loads
- **THEN** the navbar displays the site logo
- **AND** nav links "Home", "About", "Menu", "Contact" are visible

#### Scenario: Mobile hamburger toggle

- **GIVEN** the viewport width is less than 992px
- **THEN** the hamburger icon is visible
- **AND** clicking it toggles the nav menu open/closed

### Banner / Hero

#### Scenario: Hero section renders

- **GIVEN** the page loads
- **THEN** the banner section displays a background image
- **AND** a small tagline text is visible above the heading
- **AND** the main heading text is centered
- **AND** a CTA button is visible below the heading

#### Scenario: Banner is responsive

- **GIVEN** the viewport width changes
- **THEN** the banner text remains centered and readable
- **AND** the background image scales to fit

### About

#### Scenario: About section renders

- **GIVEN** the page scrolls to the about section
- **THEN** an image appears on the left
- **AND** the right side shows a subtitle, heading, paragraph, and CTA button
- **AND** the card has a white background with box-shadow

#### Scenario: About section is responsive

- **GIVEN** the viewport is mobile
- **THEN** the image stacks above the text content

### Food Menu

#### Scenario: Menu grid renders all items

- **GIVEN** the page scrolls to the food menu section
- **THEN** 6 menu items are displayed in a grid
- **AND** each item shows an image, dish name, description, and price

#### Scenario: Menu section header

- **GIVEN** the page scrolls to the food menu section
- **THEN** the subtitle "Popular Menu" is visible
- **AND** the heading "Delicious Food Menu" is visible

### Intro Video

#### Scenario: Video section renders

- **GIVEN** the page scrolls to the intro video section
- **THEN** a centered text block is visible
- **AND** a circular play-button icon is displayed
- **AND** the play button has a tan (#d6ad86) background with pulsing animation

### Testimonials

#### Scenario: Testimonials carousel renders

- **GIVEN** the page scrolls to the testimonials section
- **THEN** the subtitle "Testimonials" and heading "What they said" are visible
- **AND** at least one review card shows a name, star rating, and quote

### Contact

#### Scenario: Contact info renders

- **GIVEN** the page scrolls to the contact section
- **THEN** "Contact Us" heading is visible
- **AND** address, hours, phone number, and email are displayed

#### Scenario: Contact section is responsive

- **GIVEN** the viewport is mobile
- **THEN** the contact info stacks vertically

### Footer

#### Scenario: Footer renders with all columns

- **GIVEN** the page scrolls to the footer
- **THEN** the dark background (#1c1a18) is applied
- **AND** the logo, phone, and email are displayed
- **AND** social icons (Facebook, Instagram) are visible
- **AND** a "Quick links" column is present
- **AND** a newsletter signup is present

#### Scenario: Footer has Component Dock link

- **GIVEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/

## Verification checklist

- [ ] Navbar with logo + 4 nav links renders on desktop and mobile
- [ ] Hero section with background image, tagline, heading, CTA
- [ ] About section with image + text card + box-shadow
- [ ] Food menu grid with 6 items (image, name, desc, price)
- [ ] Intro video section with dark bg + tan circular play icon + pulse animation
- [ ] Testimonials carousel with review cards
- [ | ] Contact section with address, hours, phone, email
- [ ] Footer with 4 columns, social icons, Component Dock link
- [ ] Fonts: Montserrat (body), Playfair Display (headings)
- [ ] Brand color #d6ad86 applied as accent
- [ ] Dark footer bg #1c1a18
- [ ] Responsive breakpoints match original (992px for nav, stacking columns)
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] CNAME set to burwood.free.componentdock.com
- [ ] Coverage 100% lines/functions/branches/statements
