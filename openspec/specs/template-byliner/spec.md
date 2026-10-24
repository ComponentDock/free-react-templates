# Template: Byliner (Personal / Author Portfolio)
<!-- prep-status: shipped-as=pageturn -->
> **SHIPPED-UNDER** — the ColorLib `author` design this prep describes already
> ships as `apps/pageturn` (<https://pageturn.free.componentdock.com>).
> Do not scaffold `apps/byliner`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-pageturn/spec.md`.

## Purpose

Recreation of ColorLib "Author" template.
- Source slug: `author`
- Source URL: https://colorlib.com/wp/template/author/
- Preview URL: https://preview.colorlib.com/theme/author/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/author-free-template.jpg
- Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript

A personal author portfolio / book promotion template with a hero split layout,
partner logos, about section, stats counters, chapter navigator, services,
testimonials carousel, book gallery, author bio, and contact form.

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`):

| Token                | Value                                    | Notes                                              |
| -------------------- | ---------------------------------------- | -------------------------------------------------- |
| Font (body)          | `"Open Sans", sans-serif`                | Loaded via Google Fonts; weights 400/600/700       |
| Font (headings)      | `"Raleway", sans-serif`                  | Loaded via Google Fonts; weights 400–900           |
| Brand accent         | `#17b978`                                | Green — CTA buttons, navbar dot, quote icons, btn-custom background |
| Primary button       | `#007bff` (Bootstrap default)            | Used on hero CTA and contact form submit           |
| Body text            | `#6a7695`                                | Gray-blue paragraph color                          |
| Footer background    | `#000000`                                | Solid black footer                                 |
| Footer text          | `#ffffff`                                | White text on black footer                         |
| Footer muted text    | `rgba(255,255,255,0.6)`                  | Links and secondary text in footer                 |
| Counter section bg   | `#000000`                                | Dark background behind counters                    |
| Testimonial section  | `#17b978` overlay on bg image            | Green semi-transparent overlay on parallax image   |
| Light section bg     | `#f8f9fa` / `#f5f4fb`                   | `bg-light` utility; used for about-right, chapters, counters, services |
| Nav dot accent       | `#17b978`                                | The `span` dot in the brand name                   |
| Border radius        | `0` (default), `0.25rem` (buttons/inputs) | Buttons: slightly rounded; most elements sharp   |
| Subheading text      | Small uppercase, green `#17b978`          | Used for "Best Seller Book Of The Week", section labels |
| Heading color        | `#000000`                                | Dark/black for h2/h3 headings                      |

## Section Order (from DOM)

1. **Navbar** — Fixed/absolute, transparent bg, logo "Author." with green dot, 7 nav links (Home, About, Chapter, Reviews, My Books, Author, Contact). Collapses to hamburger on mobile.
2. **Hero** — Split layout: left 40% text (subheading, h1, description, CTA button), right 60% illustration (SVG book lover). Dark overlay. Fixed height ~750px.
3. **Partners** — Row of 5 partner/publisher logos (grayscale). `ftco-partner` section.
4. **About** — Split: left 50% image with overlay, right 50% light bg with heading "About The Book", description, and 3 feature items (Award achievements, Read On Any Devices, Very High Resolution).
5. **Counter** — Dark background (`#000000`). 4 stat cards: Copies Sold (1100), Copies Released (1200), Cup Of Coffee (340), Happy Readers (12000). Numbers animate on scroll.
6. **Chapters** — Heading "What's Inside The Book". Left sidebar nav (8 items: Title page, Copyright, Table of contents, Dedication, Foreword, Prologue, Epilogue, Epigraph). Right content area showing the selected chapter in a light-bg card.
7. **Services** — Heading "Services" with subheading. 3-column card grid: Experience, Marketing Goals, Targeting Vision. Each card has icon + title + description.
8. **Testimonials** — Parallax background with green overlay. Heading "Kinds Words From Customers". Owl Carousel of testimonial cards: quote icon, text, person image, name, position.
9. **My Books** — Heading "My Other Books" with subheading "Projects". 4-column grid of book covers. Each card shows cover image + title + genre tag on hover overlay.
10. **Author** — Split: left 50% author portrait, right 50% light bg with name "Franklin Henderson", bio, info list (name, DOB, address, zip, email, phone), and "View All Books" counter button.
11. **Contact** — Heading "Contact Me". 4 info cards (Address, Phone, Email, Website) in a row. Contact form (name, email, subject, message textarea, submit button). Map placeholder beside form.
12. **Footer** — Black bg. 3 columns: About text + social icons, Links list, Newsletter signup. Bottom bar with copyright and Component Dock link.

## Requirements

### Feature: Navbar

#### Scenario: Navbar renders all navigation links

- **GIVEN** the page loads
- **THEN** the navbar displays links: Home, About, Chapter, Reviews, My Books, Author, Contact
- **AND** the logo reads "Author." with a green accent dot

#### Scenario: Navbar is responsive

- **GIVEN** the viewport is mobile (< 768px)
- **THEN** the navbar collapses to a hamburger toggle
- **WHEN** the hamburger is clicked
- **THEN** the navigation menu expands with all links visible

### Feature: Hero Section

#### Scenario: Hero displays book promotion content

- **GIVEN** the page loads
- **THEN** the hero shows subheading "Best Seller Book Of The Week"
- **AND** the heading reads "Clue Of The Wooden Cottage"
- **AND** a CTA button "Buy Now For $22.78" is visible

#### Scenario: Hero has split layout

- **GIVEN** the page loads on desktop
- **THEN** the left side contains text content
- **AND** the right side contains an illustration
- **AND** a dark overlay covers the hero background

### Feature: Partners

#### Scenario: Partner logos display in a row

- **GIVEN** the page loads
- **THEN** 5 partner logo placeholders are rendered in a horizontal row

### Feature: About Section

#### Scenario: About section shows book details

- **GIVEN** the page loads
- **THEN** "About The Book" heading is visible
- **AND** 3 feature items are listed: Award achievements, Read On Any Devices, Very High Resolution
- **AND** a background image appears on the left half

#### Scenario: About section has split layout

- **GIVEN** the page loads on desktop
- **THEN** the left column shows an image
- **AND** the right column shows text content on a light background

### Feature: Counter Section

#### Scenario: Counter displays stats

- **GIVEN** the page loads
- **THEN** 4 stat cards are visible: Copies Sold (1100), Copies Released (1200), Cup Of Coffee (340), Happy Readers (12000)

#### Scenario: Counter numbers animate on scroll

- **GIVEN** the counter section scrolls into view
- **THEN** the numbers count up from 0 to their target values

### Feature: Chapter Navigator

#### Scenario: Chapter navigator shows table of contents

- **GIVEN** the page loads
- **THEN** 8 chapter links are listed in the sidebar: Title page, Copyright, Table of contents, Dedication, Foreword, Prologue, Epilogue, Epigraph

#### Scenario: Clicking a chapter shows its content

- **GIVEN** the page loads
- **WHEN** I click "Title page" in the sidebar
- **THEN** the content area displays the Title page heading and paragraph
- **AND** the content area scrolls to the selected chapter

### Feature: Services Section

#### Scenario: Services displays 3 service cards

- **GIVEN** the page loads
- **THEN** 3 service cards are visible: Experience, Marketing Goals, Targeting Vision
- **AND** each card has an icon, title, and description

### Feature: Testimonials

#### Scenario: Testimonials carousel shows review cards

- **GIVEN** the page loads
- **THEN** a carousel of testimonial cards is visible
- **AND** each card has a quote, person image, name, and position

#### Scenario: Testimonials section has parallax background

- **GIVEN** the page loads
- **THEN** the testimonials section shows a background image with a green overlay

### Feature: Book Gallery

#### Scenario: Book gallery displays book covers

- **GIVEN** the page loads
- **THEN** 8 book cover cards are shown in a grid
- **AND** each card shows a cover image, title, and genre tag on hover

#### Scenario: Book gallery has hover overlay

- **GIVEN** the page loads
- **WHEN** I hover over a book card
- **THEN** the card reveals an overlay with the book title and genre

### Feature: Author Bio

#### Scenario: Author bio shows personal info

- **GIVEN** the page loads
- **THEN** the author name "Franklin Henderson" is displayed
- **AND** a bio paragraph is shown
- **AND** an info list shows: name, date of birth, address, zip code, email, phone

#### Scenario: Author section has split layout

- **GIVEN** the page loads on desktop
- **THEN** the left column shows an author portrait
- **AND** the right column shows bio details on a light background

### Feature: Contact Section

#### Scenario: Contact info cards display

- **GIVEN** the page loads
- **THEN** 4 contact info cards are visible: Address, Phone, Email, Website
- **AND** each card has an icon, title, and details

#### Scenario: Contact form is functional

- **GIVEN** the page loads
- **THEN** a contact form is visible with fields: Name, Email, Subject, Message
- **AND** a "Send Message" submit button is present

### Feature: Footer

#### Scenario: Footer renders with links and social

- **GIVEN** the page loads
- **THEN** a black footer is visible
- **AND** it contains About text with social icons (Twitter, Facebook, Instagram)
- **AND** it contains a Links column with nav items
- **AND** it links to Component Dock

## Verification checklist

- [ ] Navbar with logo, 7 links, hamburger on mobile
- [ ] Hero split layout with book promo content
- [ ] Partner logos row (5 placeholders)
- [ ] About section: split image/text, 3 feature items
- [ ] Counter section: dark bg, 4 animated stats
- [ ] Chapter navigator: sidebar + content switcher
- [ ] Services: 3 cards with icons
- [ ] Testimonials: carousel on parallax green bg
- [ ] Book gallery: grid of covers with hover overlay
- [ ] Author bio: split layout, portrait + info list
- [ ] Contact: 4 info cards + form + map placeholder
- [ ] Footer: black bg, social icons, links, Component Dock
- [ ] Tailwind theme tokens applied (Open Sans, Raleway, #17b978 green)
- [ ] Responsive: all sections adapt to mobile
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] Public/CNAME and homepage configured
