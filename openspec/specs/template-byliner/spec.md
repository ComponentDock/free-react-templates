# Template: Byliner (Personal / Author Portfolio)

## Purpose

Recreation of ColorLib **Author** template.
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

## Gherkin Requirements

### Feature: Navbar

```gherkin
Scenario: Navbar renders all navigation links
  Given the page loads
  Then the navbar displays links: Home, About, Chapter, Reviews, My Books, Author, Contact
  And the logo reads "Author." with a green accent dot

Scenario: Navbar is responsive
  Given the viewport is mobile (< 768px)
  Then the navbar collapses to a hamburger toggle
  When the hamburger is clicked
  Then the navigation menu expands with all links visible
```

### Feature: Hero Section

```gherkin
Scenario: Hero displays book promotion content
  Given the page loads
  Then the hero shows subheading "Best Seller Book Of The Week"
  And the heading reads "Clue Of The Wooden Cottage"
  And a CTA button "Buy Now For $22.78" is visible

Scenario: Hero has split layout
  Given the page loads on desktop
  Then the left side contains text content
  And the right side contains an illustration
  And a dark overlay covers the hero background
```

### Feature: Partners

```gherkin
Scenario: Partner logos display in a row
  Given the page loads
  Then 5 partner logo placeholders are rendered in a horizontal row
```

### Feature: About Section

```gherkin
Scenario: About section shows book details
  Given the page loads
  Then "About The Book" heading is visible
  And 3 feature items are listed: Award achievements, Read On Any Devices, Very High Resolution
  And a background image appears on the left half

Scenario: About section has split layout
  Given the page loads on desktop
  Then the left column shows an image
  And the right column shows text content on a light background
```

### Feature: Counter Section

```gherkin
Scenario: Counter displays stats
  Given the page loads
  Then 4 stat cards are visible: Copies Sold (1100), Copies Released (1200), Cup Of Coffee (340), Happy Readers (12000)

Scenario: Counter numbers animate on scroll
  Given the counter section scrolls into view
  Then the numbers count up from 0 to their target values
```

### Feature: Chapter Navigator

```gherkin
Scenario: Chapter navigator shows table of contents
  Given the page loads
  Then 8 chapter links are listed in the sidebar: Title page, Copyright, Table of contents, Dedication, Foreword, Prologue, Epilogue, Epigraph

Scenario: Clicking a chapter shows its content
  Given the page loads
  When I click "Title page" in the sidebar
  Then the content area displays the Title page heading and paragraph
  And the content area scrolls to the selected chapter
```

### Feature: Services Section

```gherkin
Scenario: Services displays 3 service cards
  Given the page loads
  Then 3 service cards are visible: Experience, Marketing Goals, Targeting Vision
  And each card has an icon, title, and description
```

### Feature: Testimonials

```gherkin
Scenario: Testimonials carousel shows review cards
  Given the page loads
  Then a carousel of testimonial cards is visible
  And each card has a quote, person image, name, and position

Scenario: Testimonials section has parallax background
  Given the page loads
  Then the testimonials section shows a background image with a green overlay
```

### Feature: Book Gallery

```gherkin
Scenario: Book gallery displays book covers
  Given the page loads
  Then 8 book cover cards are shown in a grid
  And each card shows a cover image, title, and genre tag on hover

Scenario: Book gallery has hover overlay
  Given the page loads
  When I hover over a book card
  Then the card reveals an overlay with the book title and genre
```

### Feature: Author Bio

```gherkin
Scenario: Author bio shows personal info
  Given the page loads
  Then the author name "Franklin Henderson" is displayed
  And a bio paragraph is shown
  And an info list shows: name, date of birth, address, zip code, email, phone

Scenario: Author section has split layout
  Given the page loads on desktop
  Then the left column shows an author portrait
  And the right column shows bio details on a light background
```

### Feature: Contact Section

```gherkin
Scenario: Contact info cards display
  Given the page loads
  Then 4 contact info cards are visible: Address, Phone, Email, Website
  And each card has an icon, title, and details

Scenario: Contact form is functional
  Given the page loads
  Then a contact form is visible with fields: Name, Email, Subject, Message
  And a "Send Message" submit button is present
```

### Feature: Footer

```gherkin
Scenario: Footer renders with links and social
  Given the page loads
  Then a black footer is visible
  And it contains About text with social icons (Twitter, Facebook, Instagram)
  And it contains a Links column with nav items
  And it links to Component Dock
```

## Verification Checklist

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
