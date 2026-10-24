# Template: Foray (Creative Agency / Portfolio)
<!-- prep-status: shipped-as=foliox -->
> **SHIPPED-UNDER** — the ColorLib `fplus` design this prep describes already
> ships as `apps/foliox` (<https://foliox.free.componentdock.com>).
> Do not scaffold `apps/foray`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-foliox/spec.md`.

## Purpose

Recreation of ColorLib "F-plus Portfolio Template" as a modern React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/fplus/
- **Preview:** https://preview.colorlib.com/theme/fplus/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/fplus-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript · packages/ui

## Design Tokens

| Token              | Value                          | Notes                                      |
| ------------------ | ------------------------------ | ------------------------------------------ |
| Font family        | Montserrat (Google Fonts)      | Weights: 300, 400, 500, 600, 700          |
| Brand / accent     | `#ff6c00` (orange)             | Buttons, links, scroll-up, dropdown active |
| Heading color      | `#000000` (black)              | All h1-h6                                  |
| Body text          | `#606060` (dark gray)          | Paragraphs, 18px, line-height 2            |
| Section bg         | `#f9f9f9` (light gray)         | `.bg-gray` on most sections                |
| Button radius      | 2px (scroll-to-top), 9px (dropdown) | Mostly sharp / minimal rounding      |
| Section heading    | Uppercase, letter-spacing 4px  | Centered with 50px × 2px black line below  |
| Hero background    | Full-width image               | Dark overlay, white text                   |
| Navbar             | White bg rgba(255,255,255,0.95)| Slide-in overlay on mobile, social icons   |

## Section Structure (order from source)

1. **Navbar** — Logo left, hamburger menu icon. On open: full-screen overlay with vertical nav links + social icons (Facebook, Twitter, Instagram, Vimeo, Pinterest). Links: Home, About Us, Pages (dropdown), Projects, Our Clients, Recent News, Contact.
2. **Hero** — Full-viewport background image. Right-aligned text: heading "For More Agency", CTA button "View Portfolio" (links to #projects, plus icon).
3. **About Us** — Section heading "About Us" with underline. Two-column layout: left = large image, right = "Who We Are" heading + paragraph. Below: 3-column feature cards — (wallet icon) "Reasonable pricing", (credit-card icon) "eCommerce support", (switching-user icon) "User-friendly admin", each with description text.
4. **Projects / Portfolio** — Section heading "Projects" with underline. Filter bar: "All Fields", "branding", "editorial design", "graphic design" (active filter highlighted with orange bg). 3-column masonry grid (6 items). Each item: image + hover overlay showing category link + title "One Branding Identity". "Load More" button at bottom.
5. **Methods / How We Work** — Section heading "Methods" with underline. White inner container: "How We Work" heading + description paragraph. Below: large video thumbnail with centered play button overlay.
6. **Our Clients** — Section heading "Our clients" with underline. Horizontal scrolling logo strip (12 client logo placeholders).
7. **Recent News / Blog** — Section heading "Recent News" with underline. 3-column blog card grid. Each: thumbnail image, article title, author avatar + name + date ("Lora Palmer, Sep 29, 2017").
8. **Contact** — Section heading "Contact" with underline. 2-column form: Name, Email, Subject, Telephone inputs + Message textarea. "Send Message" button (orange bg). Below: Google Maps embed placeholder.
9. **Footer** — Dark background. 3-column: About text + quick links, Navigation links, Subscribe form + social icons. Copyright line at bottom.

## Requirements

### Feature: Navbar

#### Scenario: Logo and menu toggle

- **GIVEN** the user views the page
- **WHEN** the page loads
- **THEN** a logo appears in the top-left area
- **AND** a hamburger menu icon appears in the top-right area

#### Scenario: Menu opens as overlay

- **GIVEN** the hamburger menu is closed
- **WHEN** the user clicks the hamburger icon
- **THEN** a full-screen overlay menu appears
- **AND** the overlay contains navigation links: Home, About Us, Projects, Our Clients, Recent News, Contact
- **AND** the overlay shows social media icons (Facebook, Twitter, Instagram, Vimeo, Pinterest)

#### Scenario: Menu closes

- **GIVEN** the overlay menu is open
- **WHEN** the user clicks the close button (hamburger icon again)
- **THEN** the overlay menu closes

#### Scenario: Navigation links scroll to sections

- **GIVEN** the overlay menu is open
- **WHEN** the user clicks a navigation link (e.g. "About Us")
- **THEN** the page scrolls to the corresponding section
- **AND** the overlay menu closes

### Feature: Hero

#### Scenario: Hero displays background image and CTA

- **GIVEN** the user views the page
- **THEN** a full-viewport hero section displays a background image
- **AND** the heading "For More Agency" is displayed right-aligned
- **AND** a CTA button "View Portfolio" is visible with a plus icon

#### Scenario: CTA scrolls to projects

- **GIVEN** the hero section is visible
- **WHEN** the user clicks "View Portfolio"
- **THEN** the page scrolls to the Projects section

### Feature: About Us

#### Scenario: About section displays heading and content

- **GIVEN** the user scrolls to the About section
- **THEN** the heading "About Us" is displayed centered with an underline
- **AND** a two-column layout shows an image on the left and text on the right
- **AND** the text contains "Who We Are" heading and a paragraph

#### Scenario: Feature cards are displayed

- **GIVEN** the About section is visible
- **THEN** three feature cards appear in a row below the about text
- **AND** the first card shows "Reasonable pricing" with a wallet icon
- **AND** the second card shows "eCommerce support" with a credit-card icon
- **AND** the third card shows "User-friendly admin" with a user icon

### Feature: Projects / Portfolio

#### Scenario: Portfolio grid displays

- **GIVEN** the user scrolls to the Projects section
- **THEN** the heading "Projects" is displayed centered with an underline
- **AND** filter buttons are visible: "All Fields", "branding", "editorial design", "graphic design"
- **AND** a 3-column grid of 6 portfolio items is displayed

#### Scenario: Portfolio filter works

- **GIVEN** the Projects section is visible
- **WHEN** the user clicks the "branding" filter button
- **THEN** only portfolio items tagged "branding" remain visible
- **AND** the "branding" button is highlighted with the accent color

#### Scenario: Portfolio item hover overlay

- **GIVEN** a portfolio item is displayed
- **WHEN** the user hovers over a portfolio item
- **THEN** an overlay appears showing the category and a title
- **AND** a plus-icon link is visible for viewing details

#### Scenario: Load More button

- **GIVEN** the portfolio grid is displayed
- **THEN** a "Load More" button appears below the grid

### Feature: Methods / How We Work

#### Scenario: Methods section displays

- **GIVEN** the user scrolls to the Methods section
- **THEN** the heading "Methods" is displayed centered with an underline
- **AND** a white container shows "How We Work" heading with description text
- **AND** a video thumbnail with a centered play button is displayed

### Feature: Our Clients

#### Scenario: Client logos display

- **GIVEN** the user scrolls to the Clients section
- **THEN** the heading "Our clients" is displayed centered with an underline
- **AND** a horizontal row of client logo placeholders is displayed

### Feature: Recent News / Blog

#### Scenario: Blog cards display

- **GIVEN** the user scrolls to the News section
- **THEN** the heading "Recent News" is displayed centered with an underline
- **AND** 3 blog post cards are displayed in a row
- **AND** each card shows a thumbnail, article title, author avatar, author name, and date

### Feature: Contact

#### Scenario: Contact form displays

- **GIVEN** the user scrolls to the Contact section
- **THEN** the heading "Contact" is displayed centered with an underline
- **AND** a form with fields: Name, Email, Subject, Telephone, Message is displayed
- **AND** a "Send Message" button is displayed with accent color background

#### Scenario: Form validation

- **GIVEN** the contact form is displayed
- **WHEN** the user clicks "Send Message" without filling required fields
- **THEN** browser validation messages appear on required fields

#### Scenario: Google Maps placeholder

- **GIVEN** the Contact section is visible
- **THEN** a map area placeholder is displayed below the form

### Feature: Footer

#### Scenario: Footer displays

- **GIVEN** the user scrolls to the footer
- **THEN** a dark-background footer with 3 columns is displayed
- **AND** the first column shows About text and quick links
- **AND** the second column shows navigation links
- **AND** the third column shows a Subscribe email form and social media icons
- **AND** a copyright line appears at the bottom

#### Scenario: Subscribe form

- **GIVEN** the footer is visible
- **WHEN** the user enters an email in the Subscribe input
- **AND** clicks the submit button (arrow icon)
- **THEN** the form attempts to submit (no backend — handled gracefully)

## Verification checklist

- [ ] Navbar renders with logo and hamburger; overlay opens/closes
- [ ] Navigation links scroll to correct sections
- [ ] Hero displays background image, heading, and CTA
- [ ] CTA button scrolls to Projects
- [ ] About Us: heading, two-column image/text layout, three feature cards
- [ ] Projects: filter buttons, 6-item grid, hover overlays, Load More
- [ ] Methods: heading, white container with video thumbnail
- [ ] Clients: logo strip renders
- [ ] Blog: 3 cards with images, titles, author info
- [ ] Contact: form with 5 fields + submit button + map placeholder
- [ ] Footer: 3 columns, subscribe form, social icons, copyright
- [ ] All design tokens applied (Montserrat, #ff6c00 accent, #f9f9f9 bg, black headings)
- [ ] Responsive layout works (mobile overlay nav, stacked columns)
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
