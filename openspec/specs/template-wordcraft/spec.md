# Template: Wordcraft (Author / Book Portfolio)

## Purpose

Wordcraft is a single-page author/book portfolio landing page in the
free-react-templates monorepo. It is a React recreation of the ColorLib
"Author" free template (source:
https://colorlib.com/wp/template/author/), built under a DIFFERENT name
(**Wordcraft**), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a Bootstrap 4 single-page site for a book author, featuring
a full-height hero with split layout (text left, illustration right), a
partner logos strip, an "About The Book" section, animated counters, a
chapter/contents viewer with sticky sidebar navigation, testimonials with
green overlay background, a book covers grid, an author bio section, a
contact section with info boxes + form + map, and a black footer.

**Preview URL:** https://preview.colorlib.com/theme/author/
**ColorLib Source Name:** Author
**New Name:** Wordcraft

## Design Tokens

Extracted from the live preview's CSS (`css/style.css`):

| Token               | Value                    | Usage                                     |
| ------------------- | ------------------------ | ----------------------------------------- |
| body font           | `"Open Sans", sans-serif`| Body text, paragraphs                     |
| heading font        | `"Raleway", sans-serif`  | h1-h5, `.navbar-brand`, headings          |
| brand/accent color  | `#17b978` (green)        | Links, buttons, subheadings, overlays, icons, active nav, testimonial dots, contact icon bg |
| heading color       | `#263b5e` (dark navy)    | h1-h5, counter numbers, nav sidebar       |
| body text color     | `#6a7695`                | Body paragraphs, general text             |
| nav link color      | `#051441`                | Navbar links (unscrolled)                 |
| navbar brand color  | `#000000`                | Brand text "Author."                      |
| button radius       | `40px` (pill)            | `.btn` border-radius                      |
| button shadow       | `0px 24px 36px -11px rgba(0,0,0,0.09)` | Button box-shadow              |
| button font         | `12px uppercase letter-spacing: 2px font-weight: 600` | Button text styling         |
| button primary bg   | `#17b978`                | Primary button background                 |
| button primary text | `#fff`                   | Primary button text                       |
| counter card bg     | `#f5f4fb` (`.bg-light`)  | Counter cards, chapter pages, author bio, contact boxes |
| testimonial overlay | `#17b978` at `opacity: 0.8` | Green overlay behind testimonials      |
| testimonial wrap bg | `#fff`                   | Testimonial card background               |
| testimonial wrap radius | `4px`                 | Testimonial card corners                  |
| testimonial shadow  | `0px 30px 33px -41px rgba(0,0,0,0.24)` | Card shadow                 |
| testimonial icon bg | `#17b978`                | Quote icon circle                         |
| footer bg           | `#000000`                | Full-width footer background              |
| footer text         | `rgba(255,255,255,0.7)`  | Footer paragraph/link text                |
| footer widget title | `#fff`, `font-weight: 600`, `font-size: 22px` | Footer column headings   |
| page bg             | `#fff`                   | Main page background                      |
| section padding     | `7em 0`                  | Standard section spacing                  |
| subheading          | `14px uppercase font-weight: 700 letter-spacing: 2px color: #17b978` | Section subheadings |
| hero h1             | `60px font-weight: 900`  | Hero heading                              |
| hero subheading     | `14px uppercase font-weight: 700 color: #17b978 letter-spacing: 2px` | Hero subtitle  |
| hero height         | `750px`                  | Hero section min-height                   |

## Section Structure (order from preview)

1. **Navbar** — Transparent, fixed-on-scroll, brand "Author." (→ "Wordcraft."), nav links: Home, About, Chapter, Reviews, My Books, Author, Contact. Green underline animation on hover/active.
2. **Hero** — Full-height split layout. Left: subheading "Best Seller Book Of The Week", h1 "Clue Of The Wooden Cottage", description, CTA button "Buy Now For $22.78". Right: book illustration (SVG). Overlay on mobile.
3. **Partner Logos** — 5 grayscale partner/publisher logos in a row (placeholder images).
4. **About The Book** — 2-column: left = background image, right = "About The Book" heading + 3 sub-sections (Award achievements, Read On Any Devices, Very High Resolution).
5. **Counter** — 4 stat cards (bg-light): Copies Sold (1100), Copies Released (1200), Cup Of Coffee (340), Happy Readers (12000). Background image behind with dark overlay.
6. **Chapter/Contents** — "What's Inside The Book" heading. 3+9 layout: left sidebar with sticky nav links (Title page, Copyright, Table of contents, Dedication, Foreword, Prologue, Epilogue, Epigraph), right = page content cards (bg-light, 5px radius) with heading + paragraph.
7. **Testimonials** — Green overlay (`#17b978` at 0.8) background image section. "Testimonial" subheading, "Kinds Words From Customers" heading (white). Carousel of testimony cards with quote icon, text, user image, name, position.
8. **My Other Books** — "Projects" subheading, "My Other Books" heading. 4x2 grid of book cover images (330px height, hover overlay with title + genre).
9. **About The Author** — 2-column: left = author photo, right = "Know More About The Author" subheading, "Franklin Henderson" heading, bio text, info list (Name, DOB, Address, Zip, Email, Phone), "View All Books" CTA button (bg-light background).
10. **Contact** — "Contact Me" heading + description. 4 info boxes (Address, Contact Number, Email, Website) with green circular icons (bg-light cards). Below: 2-column — form (name, email, subject, message + "Send Message" button) on right + map placeholder on left.
11. **Footer** — Black background, 4 columns: About + social links (Twitter, Facebook, Instagram), Links nav, Services list, "Have a Questions?" with contact info. Copyright line at bottom.

## Requirements

### Feature: Navbar

#### Scenario: Navbar renders all navigation links

- **GIVEN** the page loads
- **WHEN** I look at the navbar
- **THEN** I see the brand "Wordcraft."
- **AND** I see navigation links: Home, About, Chapter, Reviews, My Books, Author, Contact
- **AND** the navbar is transparent initially

#### Scenario: Navbar becomes fixed on scroll

- **GIVEN** the page loads
- **WHEN** I scroll down past the hero
- **THEN** the navbar becomes fixed with a white background and shadow
- **AND** the brand color changes to black

#### Scenario: Active nav link shows green underline

- **GIVEN** the page loads
- **WHEN** I click a nav link
- **THEN** the link shows a green (#17b978) underline animation

### Feature: Hero Section

#### Scenario: Hero renders with split layout

- **GIVEN** the page loads
- **WHEN** I view the hero section
- **THEN** I see a subheading "Best Seller Book Of The Week" in green uppercase
- **AND** I see a large heading with book title
- **AND** I see a description paragraph
- **AND** I see a "Buy Now" CTA button with pill shape
- **AND** I see an illustration on the right side

#### Scenario: Hero button is pill-shaped

- **GIVEN** the page loads
- **WHEN** I look at the hero CTA button
- **THEN** it has a border-radius of 40px
- **AND** it has a green background (#17b978)
- **AND** it has white text
- **AND** it has a box-shadow

### Feature: Partner Logos

#### Scenario: Partner logos strip renders

- **GIVEN** the page loads
- **WHEN** I view the partner section
- **THEN** I see 5 partner logos in a horizontal row
- **AND** each logo is a placeholder image

### Feature: About The Book

#### Scenario: About section renders with 2-column layout

- **GIVEN** the page loads
- **WHEN** I view the About section
- **THEN** I see a background image on the left column
- **AND** I see "About The Book" heading on the right
- **AND** I see 3 sub-sections: Award achievements, Read On Any Devices, Very High Resolution
- **AND** each sub-section has a bold sub-heading and description paragraph

### Feature: Counter Section

#### Scenario: Counter section displays 4 stats

- **GIVEN** the page loads
- **WHEN** I view the counter section
- **THEN** I see 4 stat cards in a row
- **AND** each card shows a number and label
- **AND** the cards have a light background (#f5f4fb)
- **AND** the numbers are large and bold in dark navy (#263b5e)

### Feature: Chapter / Book Contents

#### Scenario: Chapter section renders sidebar + content

- **GIVEN** the page loads
- **WHEN** I view the chapter section
- **THEN** I see "What's Inside The Book" heading centered
- **AND** I see a left sidebar with 8 navigation links
- **AND** I see content cards on the right with headings and paragraphs
- **AND** the sidebar navigation is sticky while scrolling

#### Scenario: Chapter sidebar links highlight on scroll

- **GIVEN** the page loads
- **WHEN** I scroll through chapter content
- **THEN** the current chapter link in the sidebar gets a green underline
- **AND** the sidebar stays fixed in position

### Feature: Testimonials

#### Scenario: Testimonials render with green overlay background

- **GIVEN** the page loads
- **WHEN** I view the testimonials section
- **THEN** I see a green overlay (#17b978 at 0.8 opacity) over a background image
- **AND** I see "Testimonial" subheading in white
- **AND** I see "Kinds Words From Customers" heading in white
- **AND** I see a carousel of testimony cards

#### Scenario: Testimonial cards have correct styling

- **GIVEN** the page loads
- **WHEN** I view a testimony card
- **THEN** it has a white background
- **AND** it has a green quote icon circle at the top
- **AND** it shows a user image, name, and position
- **AND** the card has a box-shadow

### Feature: My Other Books

#### Scenario: Books grid renders 8 book covers

- **GIVEN** the page loads
- **WHEN** I view the projects section
- **THEN** I see "Projects" subheading and "My Other Books" heading
- **AND** I see a 4-column grid of 8 book cover images
- **AND** each cover has a hover overlay with title and genre

### Feature: About The Author

#### Scenario: Author section renders with 2-column layout

- **GIVEN** the page loads
- **WHEN** I view the author section
- **THEN** I see the author photo on the left
- **AND** I see "Know More About The Author" subheading
- **AND** I see the author name as a heading
- **AND** I see a bio paragraph
- **AND** I see an info list with Name, DOB, Address, Zip, Email, Phone
- **AND** I see a "View All Books" CTA button
- **AND** the right column has a light background (#f5f4fb)

### Feature: Contact Section

#### Scenario: Contact info boxes render

- **GIVEN** the page loads
- **WHEN** I view the contact section
- **THEN** I see "Contact Me" heading
- **AND** I see 4 info boxes in a row: Address, Contact Number, Email, Website
- **AND** each box has a green circular icon (100px, #17b978)
- **AND** each box has a light background (#f5f4fb)

#### Scenario: Contact form renders

- **GIVEN** the page loads
- **WHEN** I view the contact form
- **THEN** I see fields: Your Name, Your Email, Subject, Message (textarea)
- **AND** I see a "Send Message" button with pill shape
- **AND** the form has a light background

### Feature: Footer

#### Scenario: Footer renders with 4 columns

- **GIVEN** the page loads
- **WHEN** I view the footer
- **THEN** I see a black background (#000000)
- **AND** I see 4 columns: About, Links, Services, "Have a Questions?"
- **AND** I see social media icons (Twitter, Facebook, Instagram)
- **AND** I see a copyright line at the bottom
- **AND** the copyright line links to "Component Dock" (https://www.componentdock.com/)

#### Scenario: Footer replaces Colorlib attribution

- **GIVEN** the page loads
- **WHEN** I view the footer copyright
- **THEN** it says "Component Dock" instead of "Colorlib"
- **AND** it links to https://www.componentdock.com/

## Verification Checklist

- [ ] Brand color #17b978 used for accents, links, buttons, overlays
- [ ] Font families: Open Sans (body), Raleway (headings)
- [ ] Button border-radius: 40px (pill shape)
- [ ] Hero split layout with illustration on right
- [ ] Partner logos strip with 5 placeholder images
- [ ] About section: image left, text right, 3 sub-headings
- [ ] Counter: 4 stat cards with bg-light
- [ ] Chapter: sticky sidebar nav + scrollable content cards
- [ ] Testimonials: green overlay background, white text, carousel
- [ ] Books grid: 4x2 layout with hover overlays
- [ ] Author: photo left, info list right, bg-light
- [ ] Contact: 4 info boxes + form + map placeholder
- [ ] Footer: black bg, 4 columns, social icons, Component Dock link
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] All placeholder images use picsum.photos with deterministic seeds
- [ ] Navbar scroll behavior (transparent → fixed white)
- [ ] Responsive: single column on mobile
