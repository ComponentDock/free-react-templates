# Template: Penfolio (Author Portfolio / Book Landing)

## Purpose

Penfolio is a single-page author portfolio and book landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Author" free template (source:
https://colorlib.com/wp/template/author/), built under a DIFFERENT name
(**Penfolio**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 single-page template for authors/writers to
showcase their books, with a hero banner, partner logos, about section,
chapter preview (book table of contents), testimonials carousel, book grid,
author bio with stats, contact form, and footer. It uses Open Sans + Raleway
fonts, green `#17b978` as the primary brand color, and a clean white-on-black
footer.

**Preview:** https://preview.colorlib.com/theme/author/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/author-free-template.jpg

## Design tokens

| Token | Value | Source |
|---|---|---|
| Brand primary | `#17b978` (green) | `.heading-section .subheading` color, `.btn-primary` override, counter bg, testimonial bg |
| Brand dark | `#000000` | Footer background, hero overlay |
| Text primary | `#212529` | Body text |
| Text secondary | `#6c757d` | Muted text, `.position` spans |
| Background light | `#f8f9fa` / `#f5f4fb` | Contact form bg, alternate sections |
| Background white | `#ffffff` | Main content areas, cards |
| Font heading | `Raleway`, sans-serif | Heading sections, nav, hero subheading |
| Font body | `Open Sans`, sans-serif | Body text, paragraphs, form inputs |
| Button radius | `0` (square/rectangle) | Bootstrap `.btn` default |
| Button primary bg | `#17b978` (overrides Bootstrap `#007bff`) | `.btn-primary` in custom CSS |
| Hero overlay | Semi-transparent dark overlay over hero image | `.hero-wrap .overlay` opacity 0.5 |
| Counter section bg | `#17b978` solid green | `.ftco-counter` section |
| Testimonial section bg | `#17b978` solid green | `.testimony-section` |
| Footer bg | `#000000` solid black | `.ftco-footer` |

## Section order (from live preview DOM)

1. **Navbar** — dark navbar, brand "Penfolio." with green dot, nav links: Home, About, Chapter, Reviews, My Books, Author, Contact
2. **Hero** — full-height split: left side text (subheading "Best Seller Book Of The Week", h1 title, description, "Buy Now" CTA button in green), right side book illustration (SVG/image)
3. **Partners** — horizontal row of 5 partner/publisher logos (grayscale)
4. **About** — split: left = large background image (book/writing themed), right = heading + multi-paragraph bio text with a list of stats/details
5. **Counter** — green `#17b978` background with 4 animated stat counters: Copies Sold (1100), Copies Released (1200), Cup Of Coffee (340), Happy Readers (12000)
6. **Chapter** — "What's Inside The Book" section with tabbed/pill navigation (Title Page, Copyright, Table of Contents, Dedication, Foreword, Prologue, Epilogue, Epigraph) each showing a description
7. **Testimonials** — green background, carousel of testimonial quotes with avatar images, names, positions ("Marketing Manager")
8. **Projects/Books** — grid of 8 book cover images with hover overlay titles ("You Are Your Only Limit")
9. **Author Bio** — split: left = author photo with overlay, right = "Know More About The Author" heading with key-value details (Name, DOB, Address, Zip, Email, Phone) + "View All Books" CTA with count
10. **Contact** — heading + description + contact info row (address, phone, email) + contact form (name, email, subject, message, send button)
11. **Footer** — black background, 3 widget columns: brand blurb + social links, navigation links, newsletter/email subscription. Attribution: "Made with Component Dock" (replaces original Colorlib link)

## Gherkin requirements

### Navbar
```
Feature: Navbar
  Scenario: Renders navigation bar
    Given the page loads
    Then a dark navigation bar is visible at the top
    And the brand name "Penfolio" is displayed with a green dot
    And 7 navigation links are present: Home, About, Chapter, Reviews, My Books, Author, Contact

  Scenario: Mobile hamburger menu
    Given the viewport is mobile width
    Then a hamburger toggle button is visible
    And clicking it expands/collapses the navigation links
```

### Hero Section
```
Feature: Hero Section
  Scenario: Renders hero banner
    Given the page loads
    Then a full-height hero section is displayed
    And a subheading "Best Seller Book Of The Week" is shown
    And a large heading with the book title is visible
    And a paragraph description is present
    And a "Buy Now" call-to-action button is displayed in green

  Scenario: Hero layout
    Given the page loads on desktop
    Then the hero shows a split layout with text on the left and an illustration on the right
    And a semi-transparent dark overlay covers the hero background
```

### Partners Section
```
Feature: Partners Section
  Scenario: Renders partner logos
    Given the page loads
    Then a row of 5 partner/publisher logos is displayed
    And each logo is presented in grayscale
```

### About Section
```
Feature: About Section
  Scenario: Renders about content
    Given the page loads
    Then the About section is displayed with id "about-section"
    And a large background image is shown on the left half
    And multi-paragraph biography text is shown on the right half
```

### Counter Section
```
Feature: Counter Section
  Scenario: Renders animated counters
    Given the page loads
    Then a green (#17b978) background counter section is displayed
    And 4 stat counters are shown: Copies Sold (1100), Copies Released (1200), Cup Of Coffee (340), Happy Readers (12000)
    And counters animate from 0 to their target values on scroll
```

### Chapter Section
```
Feature: Chapter Section
  Scenario: Renders book chapter preview
    Given the page loads
    Then a "What's Inside The Book" heading is displayed
    And 8 chapter tabs are shown: Title Page, Copyright, Table of Contents, Dedication, Foreword, Prologue, Epilogue, Epigraph
    And clicking a tab displays the corresponding chapter description
```

### Testimonials Section
```
Feature: Testimonials Section
  Scenario: Renders testimonial carousel
    Given the page loads
    Then a green background testimonial section is displayed
    And testimonial quotes with avatar, name, and position are shown
    And navigation dots or arrows allow cycling through testimonials
```

### Projects/Books Section
```
Feature: Books Grid
  Scenario: Renders book covers
    Given the page loads
    Then a grid of 8 book cover images is displayed
    And hovering over a book shows its title in an overlay
    And each book links to a detail page or anchor
```

### Author Bio Section
```
Feature: Author Bio
  Scenario: Renders author details
    Given the page loads
    Then an author photo is displayed on the left
    And a "Know More About The Author" heading is shown
    And key-value details are listed: Name, Date of birth, Address, Zip code, Email, Phone
    And a "View All Books" CTA with book count is displayed
```

### Contact Section
```
Feature: Contact Section
  Scenario: Renders contact form
    Given the page loads
    Then a contact section with heading and description is displayed
    And contact information is shown: address, phone, email
    And a form with fields: Name, Email, Subject, Message is present
    And a "Send Message" submit button is displayed

  Scenario: Form validation
    Given the contact form is displayed
    When the user submits with empty required fields
    Then validation errors are shown for required fields
```

### Footer
```
Feature: Footer
  Scenario: Renders footer
    Given the page loads
    Then a black (#000000) background footer is displayed
    And a brand description paragraph is shown
    And navigation links are present
    And social media icon links are available
    And a "Made with Component Dock" attribution is shown
```

## Verification checklist

- [ ] Navbar with 7 links, mobile hamburger toggle
- [ ] Hero: split layout, subheading, h1, description, green CTA button, dark overlay
- [ ] Partners: 5 grayscale logos row
- [ ] About: split image + text, correct section id
- [ ] Counter: green bg, 4 animated counters with correct target numbers
- [ ] Chapter: 8 tabbed sections, tab switching works
- [ ] Testimonials: green bg, carousel with avatar/name/position
- [ ] Books: 8-item grid, hover overlay with title
- [ ] Author: photo + key-value details + CTA
- [ ] Contact: form with 4 fields + contact info + submit
- [ ] Footer: black bg, 3 columns, social icons, Component Dock attribution
- [ ] All fonts: Raleway (headings), Open Sans (body)
- [ ] Brand color #17b978 used consistently for accents, buttons, counter bg, testimonial bg
- [ ] Footer uses https://www.componentdock.com/ link
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Builds and passes lint/typecheck
