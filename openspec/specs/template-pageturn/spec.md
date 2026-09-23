# Template: PageTurn (Book / Author Landing Page)

## Purpose

Recreation of the ColorLib **Author** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page author/book landing site.

- **Source:** [ColorLib Author](https://colorlib.com/wp/template/author/)
- **Preview:** https://preview.colorlib.com/theme/author/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/author-free-template.jpg
- **Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **App folder:** `apps/pageturn`
- **Package:** `@free-react-templates/pageturn`

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`) at https://preview.colorlib.com/theme/author/css/style.css.

| Token | Value | Usage |
|---|---|---|
| Brand accent (green) | `#17b978` | Subheading text, contact info icons, contact card icon backgrounds |
| Primary button | `#007bff` | CTA buttons (hero "Buy Now", contact form submit) |
| Primary button hover | `#0069d9` | Button hover state |
| Footer background | `#000000` | Full-width black footer |
| Counter number color | `#263b5e` | Stats section number text (dark navy) |
| Section light bg | `#f8f9fa` (`bg-light`) | Partner logos, counter cards, about book cards, chapter pages |
| Body text | `#212529` | Default text color |
| Subtext | `#6c757d` | Muted text, testimonial names/positions |
| Testimonial overlay bg | Image with dark overlay | Testimonials section background |
| Hero overlay | Semi-transparent dark | Hero section overlay over background |

### Typography

- **Font family:** System fonts (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`)
- **Subheading (hero):** `text-transform: uppercase; font-size: 14px; font-weight: 700`
- **Subheading (sections):** `font-size: 16px; font-weight: 700; color: #17b978`
- **Headings:** `font-weight: 700; font-size: 50px` (38px mobile)
- **Body:** `font-size: 1rem; font-weight: 400; line-height: 1.5`

### Spacing & Layout

- **Contact card icon:** `100px × 100px`, `background: #17b978`, `border-radius: 50%` (circle)
- **Contact card box:** `border-radius: 4px`
- **Social links:** `height: 40px; width: 40px; border-radius: 50%; background: rgba(255,255,255,0.1)`
- **Footer:** `padding: 7em 0`, black background
- **Hero:** full-height (`js-fullheight`), split layout — illustration right, text left

## Section Structure (in order)

1. **Navbar** — Dark-themed sticky nav with brand "Pageturn." + links: Home, About, Chapter, Reviews, My Books, Author, Contact
2. **Hero** — Full-height split layout: left side has subheading ("Best Seller Book Of The Week"), h1 title, paragraph, CTA button; right side has book-lover illustration. Dark overlay.
3. **Partners** — Row of 5 publisher/partner logos on white background
4. **About The Book** — Two-column: left has background image with overlay; right has heading, paragraph, and 3 sub-features (Award achievements, Read On Any Devices, Very High Resolution) each with heading + description
5. **Stats Counters** — Full-width background image with overlay, 4 counter cards (bg-light): Copies Sold (1100), Copies Released (1200), Cup Of Coffee (340), Happy Readers (12000)
6. **Chapter** — Heading "What's Inside The Book", then 2-column layout: left sidebar with 8-item table of contents (Title page, Copyright, Table of contents, Dedication, Foreword, Prologue, Epilogue, Epigraph), right side with page content cards (bg-light)
7. **Services** — Heading "Services", 3-column grid with icon cards (bg-light): Experience (flaticon-user-experience), Marketing Goals (flaticon-network), Targeting Vision (flaticon-innovation)
8. **Testimonials** — Full-width dark image background with overlay, heading "Kinds Words From Customers" (white text), owl-carousel with 4 testimonial cards: quote icon, paragraph text, avatar, name, position
9. **My Books** — Heading "My Other Books", 2×4 grid of book cover images with overlay, title, and genre tag
10. **Author Bio** — Two-column: left has author portrait background image; right has heading "Franklin Henderson", description, info list (Name, DOB, Address, Zip, Email, Phone), "View All Books" CTA
11. **Contact** — Heading "Contact Me", 4-column info cards (Address, Phone, Email, Website) with circular green icon, then 2-column: contact form (name, email, subject, textarea, submit) + map placeholder
12. **Footer** — 4-column: About text + social icons, Links, Services, Have a Questions? with contact details. Copyright line at bottom.

## Gherkin Requirements

### Navbar

```gherkin
Scenario: Navbar renders with brand and links
  Given the page is loaded
  Then the navbar displays brand "Pageturn."
  And the navbar contains links: Home, About, Chapter, Reviews, My Books, Author, Contact
  And the navbar is sticky on scroll

Scenario: Navbar scrolls to section on click
  Given the page is loaded
  When the user clicks the "About" link
  Then the page scrolls smoothly to the About section
```

### Hero

```gherkin
Scenario: Hero section displays with CTA
  Given the page is loaded
  Then the hero section shows subheading "Best Seller Book Of The Week"
  And the hero shows the title heading
  And the hero shows a descriptive paragraph
  And the hero shows a "Buy Now" CTA button
  And the hero displays a book illustration on the right side
```

### Partners

```gherkin
Scenario: Partner logos render in a row
  Given the page is loaded
  Then 5 partner/publisher logos are displayed in a horizontal row
```

### About The Book

```gherkin
Scenario: About section displays features
  Given the page is loaded
  Then the About section shows heading "About The Book"
  And the section displays a left-side background image
  And the section lists 3 sub-features: Award achievements, Read On Any Devices, Very High Resolution
```

### Stats Counters

```gherkin
Scenario: Stats display 4 counter cards
  Given the page is loaded
  Then 4 stat cards are displayed: Copies Sold, Copies Released, Cup Of Coffee, Happy Readers
  And each stat shows a number and label
  And stat cards have a light background
```

### Chapter

```gherkin
Scenario: Chapter section shows TOC and page content
  Given the page is loaded
  Then the Chapter section shows heading "What's Inside The Book"
  And a sidebar lists 8 chapter links
  And selecting a chapter link shows the corresponding page content
```

### Services

```gherkin
Scenario: Services section displays 3 service cards
  Given the page is loaded
  Then 3 service cards are displayed: Experience, Marketing Goals, Targeting Vision
  And each card has an icon, heading, and description
  And cards have a light background
```

### Testimonials

```gherkin
Scenario: Testimonials carousel renders cards
  Given the page is loaded
  Then the testimonials section has a dark background image with overlay
  And heading "Kinds Words From Customers" is displayed in white
  And the carousel contains testimonial cards with quote, text, avatar, name, and position
```

### My Books

```gherkin
Scenario: Books grid displays 8 book cards
  Given the page is loaded
  Then the My Books section shows heading "My Other Books"
  And 8 book cards are displayed in a grid
  And each card has a cover image, title, and genre tag
```

### Author Bio

```gherkin
Scenario: Author bio section shows author info
  Given the page is loaded
  Then the Author section displays author portrait on the left
  And the right side shows the author name heading
  And the section lists author details: Name, DOB, Address, Zip, Email, Phone
  And a "View All Books" CTA is displayed
```

### Contact

```gherkin
Scenario: Contact section renders info cards and form
  Given the page is loaded
  Then 4 contact info cards are displayed with circular green icons
  And the contact form has fields: Name, Email, Subject, Message
  And the form has a "Send Message" submit button
  And a map placeholder is displayed beside the form
```

### Footer

```gherkin
Scenario: Footer renders with columns
  Given the page is loaded
  Then the footer has a black background
  And the footer contains 4 columns: About + social icons, Links, Services, Have a Questions?
  And the footer shows a copyright line at the bottom
  And the footer links to Component Dock
```

## Verification Checklist

- [ ] All 12 sections render in correct order (Navbar → Hero → Partners → About → Stats → Chapter → Services → Testimonials → Books → Author → Contact → Footer)
- [ ] Design tokens match: accent #17b978, primary #007bff, footer #000000, counter text #263b5e
- [ ] Subheading style: uppercase in hero, green (#17b978) in section headings
- [ ] Contact icons are 100px green circles
- [ ] Footer has 4 columns + copyright + Component Dock link
- [ ] Hero is full-height split layout with illustration
- [ ] Stats section has background image with overlay
- [ ] Testimonials section has dark background with white text
- [ ] Books grid shows 8 cards in a 2×4 layout
- [ ] Chapter section has sidebar TOC + page content
- [ ] No ColorLib references in any app code (provenance in spec only)
- [ ] CTA buttons styled as primary (#007bff) with hover state
- [ ] Responsive: stacks to single column on mobile
