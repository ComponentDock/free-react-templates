# Template: Manuscript (Author / Book Writer Onepage)

## Purpose

Manuscript is a single-page author/book-writer website in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Author" free template (source:
https://colorlib.com/wp/template/author/), built under a DIFFERENT name
(**Manuscript**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 one-page template for an author promoting
a book, using Open Sans + Raleway fonts, green accent (#17b978), and a
black footer. It features a hero with book illustration and CTA button,
partner logos, book overview, animated counters, chapter accordion,
services, testimonials carousel, book gallery, author bio, contact form
with map, and a 4-column footer.

## Source mapping

- **ColorLib item:** "Author" (TEMPLATES.md line 2291).
- **Source URL:** https://colorlib.com/wp/template/author/
- **Preview URL — REACHABLE (verified 2026-09-25):**
  `https://preview.colorlib.com/theme/author/`
  (HTTP 200, full HTML, Open Sans + Raleway fonts via Cloudflare
  @font-face, Bootstrap 4, owl carousel, font-awesome icons, animate.css).
- **Preview CSS:** `css/style.css` (2,562 lines — Bootstrap 4 bundled +
  custom styles). Font-awesome via CDN
  (`stackpath.bootstrapcdn.com/font-awesome/4.7.0`).
- **Fonts:** Open Sans (400, 600, 700) + Raleway (400–900) loaded via
  Cloudflare @font-face. **Implementation: use Google Fonts `<link>`.**
- **Icons:** Font Awesome 4.7 (CDN) → **replace with lucide-react.**

## Design tokens

| Token               | Value                          | Notes                                    |
| ------------------- | ------------------------------ | ---------------------------------------- |
| Brand / accent      | `#17b978` (green)              | Primary buttons, highlights, links       |
| Heading dark        | `#263b5e` (dark blue)          | Section headings                         |
| Body text           | `#212529` (near-black)         | Primary text color                       |
| Secondary text      | `#4d4d4d` (dark grey)          | Secondary/paragraph text                 |
| Font family (body)  | `"Open Sans", sans-serif`      | Weights: 400, 600, 700                   |
| Font family (brand) | `"Raleway", sans-serif`        | Weight 900 for logo, headings            |
| Navbar              | Dark (navbar-dark)              | Transparent over hero, solid on scroll   |
| Navbar brand dot    | `#17b978` (green)              | "Author" + green dot (span)              |
| Button style        | `btn-primary py-3 px-4`        | Rounded (Bootstrap default)              |
| Button color        | `#17b978` (green, overrides Bootstrap blue) |                              |
| Footer background   | `#000000` (black)              | Dark footer                              |
| Footer headings     | `#ffffff` (white)              |                                          |
| Footer text         | White / rgba(255,255,255,0.8)  |                                          |
| Counter bg          | `bg-light` (#f8f9fa)           | Counter stat cards                       |
| Contact info bg     | `bg-light`                     | Contact info boxes                       |
| Contact form bg     | `bg-light`                     | Form wrapper                             |
| Hero background     | `#ffffff` (white)              | White bg, SVG illustration on right      |
| Hero overlay        | White, opacity 0 (desktop), 0.5 (mobile) | Transparent on desktop          |
| Subheading color    | `#17b978` (green)              | Section subheading labels                |

## Section structure (in page order)

1. **Navbar** — "Author" + green dot logo; nav links: Home, About, Chapter,
   Reviews, My Books, Author, Contact. Dark navbar, toggler on mobile.
2. **Hero** (hero-wrap js-fullheight) — split: text left (subheading
   "Best Seller Book Of The Week", h1 "Clue Of The Wooden Cottage",
   description paragraph, "Buy Now For $22.78" button), SVG illustration
   right (book lover illustration, 60% width).
3. **Partners** (ftco-partner) — 5 partner/publisher logos in a row,
   greyscale, centered.
4. **About The Book** (#about-section) — split: image left (background
   image with overlay), text right: "About The Book" h2, 3 feature items
   (Award achievements, Read On Any Devices, Very High Resolution).
5. **Counter** (#section-counter) — 4 animated stat cards on bg-light:
   1100 Copies Sold, 1200 Copies Released, 340 Cup Of Coffee,
   12000 Happy Readers.
6. **Chapter** (#chapter-section) — "What's Inside The Book" h2, accordion
   with 8 items: Title Page, Copyright, Table of Contents, Dedication,
   Foreword, Prologue, Epilogue, Epigraph.
7. **Services** — "Services" subtitle + h2, 3 service cards in columns:
   Experience, Marketing Goals, Targeting Vision (each with bg-light,
   icon, description).
8. **Testimonials** (#testimonial-section) — "Testimonial" subtitle,
   "Kinds Words From Customers" h2, owl carousel with review cards
   (quote, author name, role, star rating).
9. **Projects** (#projects-section) — "Projects" subtitle, "My Other Books"
   h2, 6 book cover cards (background images with title overlays,
   "You Are Your Only Limit").
10. **Author** (#author-section) — split: image left (author photo with
    overlay), text right (bg-light): "Know More About The Author"
    subtitle, "Franklin Henderson" h2, description, info list (Name,
    DOB, Address, Zip, Email, Phone), "View All Books" button.
11. **Contact** (#contact-section) — "Contact Me" h2, description paragraph.
    4 contact info boxes (bg-light): Address, Phone, Email, Website (each
    with icon). Contact form: Your Name, Your Email, Subject, Message
    textarea, "Send Message" button. Map placeholder on left.
12. **Footer** (ftco-footer) — black background, 4 columns: About (text +
    social icons: Twitter, Facebook, Instagram), Links (Home, About,
    Chapter, Reviews, Contact), Services (Experience, Marketing Goals,
    Targeting Vision), Have a Questions? (address, phone, email).
    Copyright line centered at bottom.

## Gherkin requirements

### Feature: Manuscript — Author / Book Writer Onepage Template

  Scenario: Navbar displays with brand and navigation links
    Given the page loads
    Then a dark navbar shows "Author" logo with a green dot
    And navigation links: Home, About, Chapter, Reviews, My Books, Author, Contact

  Scenario: Hero section shows book promotion with CTA
    Given the page loads
    Then the hero displays a subheading "Best Seller Book Of The Week"
    And the heading "Clue Of The Wooden Cottage" is shown
    And a description paragraph is visible
    And a "Buy Now For $22.78" button is displayed
    And a book illustration appears on the right side

  Scenario: Partner logos section displays
    Given the page loads
    Then 5 partner/publisher logos are displayed in a row

  Scenario: About The Book section shows features
    Given the page loads
    Then "About The Book" heading is displayed
    And 3 feature items are shown: Award achievements, Read On Any Devices, Very High Resolution

  Scenario: Counter section shows animated statistics
    Given the page loads
    Then 4 stat cards are displayed
    And the stats show: 1100 Copies Sold, 1200 Copies Released, 340 Cup Of Coffee, 12000 Happy Readers
    And the numbers animate on scroll

  Scenario: Chapter section shows book contents accordion
    Given the page loads
    Then "What's Inside The Book" heading is displayed
    And an accordion shows 8 chapter items
    And clicking a chapter header toggles its content

  Scenario: Services section shows three service cards
    Given the page loads
    Then 3 service cards are displayed: Experience, Marketing Goals, Targeting Vision

  Scenario: Testimonials carousel shows customer reviews
    Given the page loads
    Then a testimonial carousel is visible with customer quotes
    And testimonials auto-rotate or can be navigated

  Scenario: Projects section shows book covers
    Given the page loads
    Then "My Other Books" heading is displayed
    And 6 book cover cards are shown with title overlays

  Scenario: Author section shows bio and info
    Given the page loads
    Then "Know More About The Author" subtitle is displayed
    And "Franklin Henderson" heading is shown
    And an info list with Name, DOB, Address, Zip, Email, Phone is visible
    And a "View All Books" button is displayed

  Scenario: Contact section shows form and info boxes
    Given the page loads
    Then "Contact Me" heading is displayed
    And 4 contact info boxes are shown: Address, Phone, Email, Website
    And a contact form with Name, Email, Subject, Message fields is visible
    And a "Send Message" button is displayed

  Scenario: Footer displays four columns
    Given the page loads
    Then the footer shows an About column with social icons
    And a Links column with navigation links
    And a Services column with service links
    And a "Have a Questions?" column with contact info
    And a copyright line at the bottom linking to Component Dock

  Scenario: Page uses Open Sans and Raleway fonts
    Given the page loads
    Then the body font is "Open Sans" and the brand/heading font is "Raleway"

  Scenario: Primary buttons are green
    Given the page loads
    Then primary buttons have green (#17b978) background
    And buttons have white text

## Verification checklist

- [ ] All 12 sections render in correct page order
- [ ] Navbar shows "Author" logo with green dot + 7 nav links
- [ ] Hero has book illustration, heading, description, CTA button
- [ ] Partner section shows 5 logos
- [ ] About The Book section: image + 3 feature items
- [ ] Counter section: 4 animated stat cards
- [ ] Chapter accordion: 8 items toggle correctly
- [ ] Services: 3 service cards with icons
- [ ] Testimonials carousel: rotates reviews
- [ ] Projects: 6 book cover cards with overlays
- [ ] Author bio: image, name, info list, CTA button
- [ ] Contact: 4 info boxes + form + map placeholder
- [ ] Footer: 4 columns (About, Links, Services, Questions)
- [ ] Footer copyright links to Component Dock
- [ ] Open Sans + Raleway fonts loaded from Google Fonts
- [ ] Green (#17b978) accent on buttons and highlights
- [ ] Black (#000) footer background
- [ ] Animated counters on scroll
- [ ] Responsive: mobile hamburger menu, stacked columns
- [ ] No ColorLib references in app code
- [ ] Placeholder images use picsum.photos with deterministic seeds
- [ ] Icons use lucide-react (not font-awesome)
