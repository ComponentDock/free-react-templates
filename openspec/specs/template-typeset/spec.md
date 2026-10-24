# Template: Typeset (Author / Book Promotion)
<!-- prep-status: shipped-as=pageturn -->
> **SHIPPED-UNDER** — the ColorLib `author` design this prep describes already
> ships as `apps/pageturn` (<https://pageturn.free.componentdock.com>).
> Do not scaffold `apps/typeset`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-pageturn/spec.md`.

## Purpose

Recreation of ColorLib **Author** — a personal author/book promotion one-page template with book showcase, chapters, testimonials, and contact form.
- **Source:** https://colorlib.com/wp/template/author/
- **Preview:** https://preview.colorlib.com/theme/author/
- **New name:** `typeset` (apps/typeset, @free-react-templates/typeset)
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript

## Design tokens (extracted from live preview CSS)

| Token | Value | Usage |
|---|---|---|
| Brand primary | `#17b978` | Accent color throughout: subheadings, nav active, testimonial overlay, service icons, button bg, CTA button, chapter active indicator |
| Dark text | `#000000` | Body text, form inputs, author info labels |
| Dark navy | `#263b5e` | Chapter nav links |
| Muted text | `#4d4d4d` | Testimonial position/title text |
| Light background | `#f5f4fb` | `.bg-light` — counter cards, service cards, author bio card, contact form bg, chapter pages |
| White | `#fff` | Page background, testimony card bg, button text |
| Black | `#000000` | Footer background, project card overlay |
| Fonts (headings) | `'Raleway', sans-serif` | Navbar brand, all headings, nav links (Google Fonts, weights 400–900) |
| Fonts (body) | `'Open Sans', sans-serif` | Body text, paragraphs (Google Fonts, weights 400, 600, 700) |
| Button | border-radius `40px` (pill), bg `#17b978`, color `#fff`, text-transform `uppercase`, letter-spacing `2px`, font-size `12px`, font-weight `600`, padding `10px 15px` | Primary CTA buttons |
| Testimonial overlay | `#17b978` at `opacity: 0.8` | Green overlay on testimonial section background image |
| Testimony card | `bg: white`, `border-radius: 4px`, `box-shadow: 0px 30px 33px -41px rgba(0,0,0,0.24)` | Individual testimonial cards |
| Testimony icon | `bg: #17b978`, `border-radius: 50%`, `width/height: 40px`, positioned `-20px` top | Quote icon circle on testimony cards |
| User avatar | `width/height: 80px`, `border-radius: 50%` | Testimonial user images |
| Chapter page | `border-radius: 5px`, `padding: 30px`, `bg: #f5f4fb` | Chapter content pages |
| Chapter nav active | `color: #17b978`, `margin-left: 20px`, with `::after` green bar | Active chapter indicator |
| Project card | `height: 330px`, overlay fades on hover (`opacity: 0 → 0.5`), text fades in (`opacity: 0 → 1`) | Book cover cards |
| Contact info card | `bg: #f5f4fb`, `text-align: center`, `padding: 1rem`, icon + heading + text | Contact info boxes |
| Contact form input | `height: 52px`, `bg: white`, `border-radius: 5px`, `font-size: 18px` | Form fields |
| Section padding | `7em 0` (desktop), `6em 0` (mobile) | Standard section spacing |
| Hero height | `750px` | Full-height hero section |
| Hero subheading | `text-transform: uppercase`, `font-size: 14px`, `font-weight: 700`, `color: #17b978`, `letter-spacing: 2px` | Hero + section subheadings |
| Hero h1 | `font-size: 60px`, `font-weight: 900`, `line-height: 1.3` | Hero headline |

## Section structure (from live DOM)

1. **Navbar** — Dark transparent navbar, brand "Typeset" with green dot accent, nav links: Home, About, Chapter, Reviews, My Books, Author, Contact. Mobile hamburger toggle.
2. **Hero** — Full-height (750px) split layout: left 40% with subheading ("Best Seller Book Of The Week"), h1 headline, description paragraph, and pill CTA button; right 60% with illustration image (use picsum/placeholder). White overlay on mobile.
3. **Partners** — Row of 5 grayscale partner/publisher logos (placeholder SVGs or text).
4. **About Book** — Split layout: left half = background image with overlay; right half = "About The Book" heading + description + feature list (Award achievements, Read On Any Devices, Very High Resolution) with h4 sub-headings.
5. **Counter** — Full-width dark background image with 4 stat cards on `#f5f4fb` bg: Copies Sold (1,100), Copies Released (1,200), Cup Of Coffee (340), Happy Readers (12,000). Animated number counters.
6. **Chapter** — "What's Inside The Book" heading + two-column layout: left sticky nav (8 chapter links), right content area with 8 chapter pages (Title Page, Copyright, Table of Contents, Dedication, Foreword, Prologue, Epilogue, Epigraph) on light bg cards.
7. **Services** — Section heading + 3 service cards in a row: Experience, Marketing Goals, Targeting Vision. Each card: icon (flaticon → lucide-react), h3 title with green underline, description. Hover turns card green.
8. **Testimonials** — Green overlay bg (`#17b978` at 0.8) on background image. "Kind Words From Customers" heading. Carousel of testimony cards: quote icon circle (green), quote text, user avatar (circle), name, position. 3 testimonial items.
9. **Projects/Books** — "My Other Books" heading. Grid of 8 book cover cards (2 rows × 4 columns), each with background image, overlay on hover, book title + genre tag. Heights ~330px.
10. **Author Bio** — Split layout: left = author portrait image; right = light bg card with subheading ("Know More About The Author"), author name (h2), bio paragraph, info list (Name, DOB, Address, Zip, Email, Phone), "View All Books" pill button.
11. **Contact** — "Contact Me" heading + description. Row of 4 contact info cards (Address, Phone, Email, Website) on light bg. Below: two-column — left = contact form (Name, Email, Subject, Message, Send button), right = map placeholder.
12. **Footer** — Black bg, 4 columns: About text + social icons (Twitter, Facebook, Instagram), Links list, Services list, Contact info. Copyright line with Component Dock link.

## Requirements

### Navbar

#### Scenario: Navbar displays all section links

- **GIVEN** the page loads
- **WHEN** I view the navigation bar
- **THEN** I see links for Home, About, Chapter, Reviews, My Books, Author, and Contact

#### Scenario: Navbar brand shows with green accent dot

- **GIVEN** the page loads
- **WHEN** I view the navbar brand
- **THEN** I see "Typeset" with a green dot accent

#### Scenario: Navbar scrolls to section on click

- **GIVEN** the page is loaded
- **WHEN** I click "About" in the navbar
- **THEN** the page scrolls to the About section

### Hero

#### Scenario: Hero displays headline and CTA

- **GIVEN** the page loads
- **WHEN** I view the hero section
- **THEN** I see a subheading "Best Seller Book Of The Week"
- **AND** I see a headline about a book title
- **AND** I see a description paragraph
- **AND** I see a "Buy Now" CTA button with pill shape

#### Scenario: Hero has split layout

- **GIVEN** the page loads
- **WHEN** I view the hero section
- **THEN** the left side shows text content
- **AND** the right side shows an illustration

### Partners

#### Scenario: Partners section shows logos

- **GIVEN** the page loads
- **WHEN** I scroll to the partners section
- **THEN** I see 5 partner/publisher logos in a row

### About Book

#### Scenario: About section shows book info

- **GIVEN** the page loads
- **WHEN** I scroll to the About section
- **THEN** I see "About The Book" heading
- **AND** I see a description paragraph
- **AND** I see feature list with Award achievements, Read On Any Devices, and Very High Resolution

#### Scenario: About section has split layout

- **GIVEN** the page loads
- **WHEN** I view the About section
- **THEN** the left side shows a background image
- **AND** the right side shows text content

### Counter

#### Scenario: Counter displays 4 stats

- **GIVEN** the page loads
- **WHEN** I scroll to the counter section
- **THEN** I see 4 stat cards
- **AND** the stats show Copies Sold, Copies Released, Cup Of Coffee, and Happy Readers

#### Scenario: Counter numbers animate on scroll

- **GIVEN** the counter section is visible
- **WHEN** I view the counter numbers
- **THEN** the numbers animate from 0 to their target values

### Chapter

#### Scenario: Chapter section shows table of contents

- **GIVEN** the page loads
- **WHEN** I scroll to the Chapter section
- **THEN** I see "What's Inside The Book" heading
- **AND** I see 8 chapter links in a sticky nav
- **AND** I see 8 chapter content pages

#### Scenario: Chapter nav highlights active page

- **GIVEN** the Chapter section is visible
- **WHEN** I click a chapter link
- **THEN** the corresponding chapter page is displayed
- **AND** the nav link shows green active indicator

### Services

#### Scenario: Services shows 3 cards

- **GIVEN** the page loads
- **WHEN** I scroll to the Services section
- **THEN** I see 3 service cards
- **AND** the cards show Experience, Marketing Goals, and Targeting Vision

#### Scenario: Service card highlights on hover

- **GIVEN** the Services section is visible
- **WHEN** I hover over a service card
- **THEN** the card background turns green (#17b978)

### Testimonials

#### Scenario: Testimonials shows carousel

- **GIVEN** the page loads
- **WHEN** I scroll to the Testimonials section
- **THEN** I see a green overlay background
- **AND** I see "Kind Words From Customers" heading
- **AND** I see testimonial cards with quotes

#### Scenario: Testimonial cards show user info

- **GIVEN** the Testimonials section is visible
- **WHEN** I view a testimonial card
- **THEN** I see a quote icon, quote text, user avatar, name, and position

### Projects/Books

#### Scenario: Projects shows 8 book cards

- **GIVEN** the page loads
- **WHEN** I scroll to the Projects section
- **THEN** I see "My Other Books" heading
- **AND** I see 8 book cover cards in a grid

#### Scenario: Book card reveals info on hover

- **GIVEN** the Projects section is visible
- **WHEN** I hover over a book card
- **THEN** the overlay appears with book title and genre tag

### Author Bio

#### Scenario: Author bio shows author info

- **GIVEN** the page loads
- **WHEN** I scroll to the Author section
- **THEN** I see author portrait image
- **AND** I see "Know More About The Author" subheading
- **AND** I see author name, bio, and contact details list

#### Scenario: Author bio has View All Books button

- **GIVEN** the Author section is visible
- **WHEN** I view the author info
- **THEN** I see a "View All Books" pill button

### Contact

#### Scenario: Contact shows info cards and form

- **GIVEN** the page loads
- **WHEN** I scroll to the Contact section
- **THEN** I see "Contact Me" heading
- **AND** I see 4 contact info cards (Address, Phone, Email, Website)
- **AND** I see a contact form with Name, Email, Subject, Message fields

#### Scenario: Contact form has Send button

- **GIVEN** the Contact section is visible
- **WHEN** I view the contact form
- **THEN** I see a "Send Message" button with pill shape

### Footer

#### Scenario: Footer shows 4 columns

- **GIVEN** the page loads
- **WHEN** I scroll to the footer
- **THEN** I see About, Links, Services, and Contact columns
- **AND** I see social icons (Twitter, Facebook, Instagram)
- **AND** I see a Component Dock attribution link

#### Scenario: Footer has black background

- **GIVEN** the page loads
- **WHEN** I view the footer
- **THEN** the background is black (#000000)

## Verification checklist

- [ ] All 12 sections present in correct order
- [ ] Navbar with 7 section links + brand
- [ ] Hero with split layout, subheading, h1, description, CTA button
- [ ] Partners row with 5 placeholder logos
- [ ] About Book split layout with image + feature list
- [ ] Counter with 4 animated stats
- [ ] Chapter section with sticky nav + 8 pages
- [ ] Services with 3 cards + hover effect
- [ ] Testimonials carousel on green overlay bg
- [ ] Projects grid with 8 book cards + hover overlay
- [ ] Author Bio split layout with info list
- [ ] Contact with 4 info cards + form + map placeholder
- [ ] Footer with 4 columns + Component Dock link
- [ ] Brand color #17b978 used consistently
- [ ] Raleway + Open Sans fonts loaded
- [ ] Pill-shaped buttons (border-radius 40px)
- [ ] No ColorLib references in app code
- [ ] CNAME: typeset.free.componentdock.com
- [ ] 100% test coverage
- [ ] Typecheck + lint pass
