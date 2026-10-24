# Template: Gustable (Food & Restaurant)
<!-- prep-status: shipped-as=tastory -->
> **SHIPPED-UNDER** — the ColorLib `eatwell` design this prep describes already
> ships as `apps/tastory` (<https://tastory.free.componentdock.com>).
> Do not scaffold `apps/gustable`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-tastory/spec.md`.

## Purpose

Recreation of ColorLib's **Eatwell** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page restaurant website.

- **Source:** https://colorlib.com/wp/template/eatwell/
- **Preview:** https://preview.colorlib.com/theme/eatwell/
- **New name:** `gustable` (from "gust" — taste/enjoyment)
- **Package:** `@free-react-templates/gustable`
- **Deploy target:** `gustable.free.componentdock.com`
- **Source design:** ColorLib "Eatwell" — https://colorlib.com/wp/template/eatwell/

## Design tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Usage |
|---|---|---|
| Primary brand color | `#FDA403` (amber/gold) | Prices, primary buttons, active nav links, accent text |
| Dark background | `#000` (black) | Scrolled navbar, hero overlay |
| Body text | `#222` (near-black) | Headings, body copy |
| Muted text | `#999999` | Subtitles, secondary labels |
| Light gray | `#b8b8b8` | Tertiary text |
| Border / secondary | `#ccc` | Secondary button border, dividers |
| Lighter gray | `#d4d4d4` | Subtle borders |
| Background light | `#f8f9fa` (Tailwind `bg-gray-50`) | Alternating section backgrounds |
| White | `#fff` | Card backgrounds, hero text |
| Heading font | `"Playfair Display", serif` | Hero heading, section titles, display-4 |
| Body font | `"Raleway", sans-serif` | Body copy, nav links, buttons |
| Button radius (default) | `4px` | `.btn` base |
| Button radius (primary) | `0px` | `.btn.btn-primary` — squared off |
| Button padding (lg) | `13px 40px` | `.btn.btn-lg` |
| Gallery image radius | `16px` | Gallery grid images |
| Avatar radius | `50%` | Chef profile photos |
| Navbar font | `13px`, uppercase, `letter-spacing: 0.2em` | `.nav-link` |
| Hero | Full viewport height (`100vh`), background image with dark overlay | `.site-cover` |

## Visual design (from screenshot)

The Eatwell screenshot shows:
- **Hero:** Full-screen dark overlay on a restaurant storefront photo, large serif heading "Welcome To EatWell" in white, subtitle in white, white-outlined "Reservation" button
- **About ("Our Story"):** White background, left-aligned serif heading "Welcome" with small caps subtitle "OUR STORY", body text, right side chef photo (circular crop)
- **Offers:** Light gray background, heading "Our Offer This Summer", grid of food items with images, names, prices in gold (`#FDA403`), descriptions
- **Menu:** White background, "Delicious Menu" heading, two-column layout with food items (name + gold price), left column food photos
- **News:** Light gray background, "News" heading, three blog cards with images and titles
- **Gallery:** White background, grid of food images with rounded corners (`16px`)
- **Contact:** Light gray background, two-column: left has contact form (name, email, message + submit), right has address info + map
- **Footer:** Dark background, brand name, copyright, social links

## Requirements

### Hero Section

#### Scenario: Hero displays full-viewport background image with overlay

- **GIVEN** the user visits the page
- **THEN** the hero section spans the full viewport height
- **AND** a background image is displayed with a dark overlay
- **AND** the heading "Welcome To Gustable" is shown in white serif font
- **AND** the subtitle text is displayed in white below the heading
- **AND** a "Reservation" button is displayed with white border and text

#### Scenario: Hero button navigates to reservation/contact section

- **GIVEN** the user sees the hero section
- **WHEN** the user clicks the "Reservation" button
- **THEN** the page scrolls to the contact section

### Navigation Bar

#### Scenario: Navbar is transparent over hero

- **GIVEN** the user is at the top of the page
- **THEN** the navbar background is transparent
- **AND** nav links are displayed in white uppercase text with letter spacing

#### Scenario: Navbar becomes solid on scroll

- **GIVEN** the user scrolls past the hero
- **THEN** the navbar background changes to black
- **AND** nav links remain visible

#### Scenario: Navbar contains all section links

- **GIVEN** the navbar is visible
- **THEN** links for Home, About, Offer, Menu, News, Gallery, Contact are present

### About Section

#### Scenario: About section displays story and chef photo

- **GIVEN** the user scrolls to the About section
- **THEN** a "OUR STORY" subtitle is displayed in small caps
- **AND** a serif heading "Welcome" is shown
- **AND** body text describes the restaurant story
- **AND** a chef profile photo is displayed on the right side
- **AND** the section has a white background

### Offers Section

#### Scenario: Offers section displays food items in a grid

- **GIVEN** the user scrolls to the Offers section
- **THEN** a heading "Our Offer This Summer" is displayed
- **AND** a lead paragraph describes the offers
- **AND** food items are displayed in a responsive grid
- **AND** each item shows an image, title, price in gold, and description
- **AND** the section has a light gray background

#### Scenario: Each offer item shows pricing in brand color

- **GIVEN** the offers grid is displayed
- **THEN** each price is rendered in the primary gold color (#FDA403)

### Menu Section

#### Scenario: Menu section displays food items in two columns

- **GIVEN** the user scrolls to the Menu section
- **THEN** a heading "Delicious Menu" is displayed
- **AND** menu items are displayed in a two-column layout
- **AND** each item shows a food name and price in gold
- **AND** food photos are shown alongside the menu items
- **AND** the section has a white background

### News Section

#### Scenario: News section displays blog cards

- **GIVEN** the user scrolls to the News section
- **THEN** a heading "News" is displayed
- **AND** three news/blog cards are shown in a row
- **AND** each card has an image, title, and brief text
- **AND** the section has a light gray background

### Gallery Section

#### Scenario: Gallery section displays food images in a grid

- **GIVEN** the user scrolls to the Gallery section
- **THEN** a heading "Gallery" is displayed
- **AND** food images are displayed in a grid layout
- **AND** images have rounded corners (16px radius)
- **AND** images are clickable (lightbox or link)
- **AND** the section has a white background

### Contact Section

#### Scenario: Contact section displays form and info

- **GIVEN** the user scrolls to the Contact section
- **THEN** a heading "Get In Touch" is displayed
- **AND** a lead paragraph is shown
- **AND** a contact form with Name, Email, and Message fields is displayed
- **AND** a "Send Message" button is present
- **AND** address/contact info is shown alongside the form
- **AND** the section has a light gray background

#### Scenario: Contact form validates required fields

- **GIVEN** the contact form is displayed
- **WHEN** the user submits without filling Name
- **THEN** an error message is shown for the Name field

### Footer

#### Scenario: Footer displays branding and links

- **GIVEN** the user scrolls to the footer
- **THEN** the template name "Gustable" is displayed
- **AND** a copyright notice is shown
- **AND** social media icon links are present
- **AND** a link to Component Dock is present

## Verification checklist

- [ ] Hero section renders full-viewport with background image and dark overlay
- [ ] Navbar is transparent on hero, solid black on scroll
- [ ] All 7 nav links (Home, About, Offer, Menu, News, Gallery, Contact) present
- [ ] About section has "OUR STORY" subtitle, "Welcome" heading, chef photo
- [ ] Offers section shows food grid with images, titles, gold prices, descriptions
- [ ] Menu section shows two-column food items with names and gold prices
- [ ] News section shows three blog cards with images and titles
- [ ] Gallery section shows food images in a rounded-corner grid
- [ ] Contact section has form (Name, Email, Message) + info + map placeholder
- [ ] Footer has template name, copyright, social icons, Component Dock link
- [ ] Primary color `#FDA403` used for prices, buttons, accents
- [ ] Heading font is Playfair Display (serif), body font is Raleway (sans-serif)
- [ ] Buttons have 4px radius (primary buttons squared)
- [ ] Alternating white/light-gray section backgrounds
- [ ] 100% test coverage on all components
- [ ] No ColorLib references in app code (provenance only in spec)
