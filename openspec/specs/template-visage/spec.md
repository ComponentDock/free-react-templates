# Template: Visage (Photography Gallery)

## Purpose

Recreation of ColorLib "The Look" — a photography gallery / lookbook template
with a dark, editorial aesthetic centered on visual content.

- **Source:** https://colorlib.com/wp/template/thelook/
- **Preview:** https://preview.colorlib.com/theme/thelook/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category:** Photography Gallery

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`) and preview DOM.

| Token                | Value                          | Notes                                      |
| -------------------- | ------------------------------ | ------------------------------------------ |
| Font family          | `"Lato", sans-serif`           | Weights: 300, 400, 700                     |
| Primary brand color  | `#081624`                      | Very dark navy / near-black                |
| Text body gray       | `#5c5c5c`                      | Paragraph text                             |
| Text muted gray      | `#828282`                      | Secondary text, captions                   |
| Text light gray      | `#c1c1c1`                      | Tertiary, muted labels                     |
| Footer background    | `#222222`                      | Dark charcoal                              |
| Blog section bg      | `#f6f7f9`                      | Very light gray                            |
| Button (default)     | transparent bg, `#081624` text | Pill-ish, no explicit border-radius        |
| Button sb-big        | 14px font, arrow icon 41px     | Hero CTA variant                           |
| Button sb-line       | 2px solid `#081624` border     | Outlined variant                           |
| Button sb-solid      | bg `#081624`, white text       | Filled variant                             |
| Button sb-light      | white text, transparent bg     | Footer form submit variant                 |
| Hero height          | 950px                          | Full-viewport slider                       |
| Section padding      | ~120px top/bottom              | Generous vertical whitespace               |
| Preloader spinner    | border-radius 60px             | Circular loader animation                  |

## Visual Design (from TEMPLATES.md screenshot)

The Look screenshot shows a dark, moody photography gallery layout:
- Full-width hero slider with dark overlay on large photo backgrounds
- Centered white text hero headline + CTA button
- Two-column gallery section: left has a large quote + stacked images; right has
  a grid of gallery items with thumbnails, titles, artist names, and CTA links
- Blog section on light gray (`#f6f7f9`) with thumbnail + text card layout
- Dark footer (`#222222`) with contact form (3-column inputs + textarea + send button)
- Clean, editorial feel — generous whitespace, Lato typography, minimal color palette

## Section Order (1:1 from preview DOM)

1. **Header** — logo left, horizontal nav links (Home, Gallery, Artists, Shop, News, Contact)
2. **Hero** — full-width image slider (owl-carousel in original), dark overlay, centered headline "The Look Gallery", subtitle + date range, large CTA button
3. **Gallery** — two-column layout:
   - Left: blockquote about photography, paragraph text, 3 stacked gallery items (image + title + artist + CTA)
   - Right: 3 gallery items (image + title + artist + CTA), "see all galleries" CTA
4. **Blog** — section title "Latest from the blog", 2 blog cards (thumbnail left, content right: category badge, title, date, excerpt, CTA)
5. **Footer** — dark background, left column: "Get in touch" heading + description text; right column: contact form (3 name/email/subject inputs + textarea + send message button); copyright bar

## Gherkin Requirements

### Header

```gherkin
Scenario: Header displays logo and navigation
  Given the page loads
  Then the header shows a logo image on the left
  And a navigation menu with 6 links: Home, Gallery, Artists, Shop, News, Contact
  And the header is fixed/sticky at the top of the viewport

Scenario: Navigation links are accessible
  Given the header is visible
  When I tab through the navigation
  Then each link receives visible focus
  And links have descriptive text (no icon-only links)
```

### Hero

```gherkin
Scenario: Hero displays fullscreen image slider
  Given the page loads
  Then a hero section fills the viewport height (~950px)
  And a background image is displayed with a dark semi-transparent overlay
  And a headline "Visage Gallery" is centered in white text
  And a subtitle with artist name and date range is shown below the headline
  And a CTA button "Read More" with an arrow icon is visible

Scenario: Hero CTA button is interactive
  Given the hero section is displayed
  When I hover over the "Read More" button
  Then the button text color inverts (white bg, dark text)
  And the button maintains its pill/rounded appearance

Scenario: Hero is accessible
  Given the hero section is displayed
  Then the background image has a descriptive alt attribute or aria-label
  And the CTA button is a semantic <a> or <button> element
```

### Gallery

```gherkin
Scenario: Gallery displays two-column layout
  Given the page scrolls to the gallery section
  Then the gallery is split into two equal columns
  And the left column contains a blockquote about photography
  And the left column shows a paragraph of descriptive text
  And the left column displays 3 gallery items stacked vertically
  And the right column displays 3 gallery items stacked vertically

Scenario: Gallery items show image, title, artist, and CTA
  Given a gallery item is displayed
  Then it shows a thumbnail image
  And a title (e.g. "Red Passion 2017")
  And an artist name (e.g. "Artist: John Doe")
  And a "view gallery" CTA link with arrow icon

Scenario: Gallery section has "see all galleries" CTA
  Given the right column of the gallery
  Then a "see all galleries" button is displayed at the bottom
  And it is a large button variant (sb-big)
```

### Blog

```gherkin
Scenario: Blog section displays on light background
  Given the page scrolls to the blog section
  Then the section background is light gray (#f6f7f9)
  And a section title "Latest from the blog" is displayed

Scenario: Blog cards show thumbnail and content
  Given a blog card is displayed
  Then it shows a thumbnail image on the left
  And content on the right: category badge, title, date, excerpt, and CTA
  And the CTA is a "Read More" link with arrow icon

Scenario: Blog section is responsive
  Given the viewport is mobile width
  Then blog cards stack vertically (thumbnail above content)
```

### Footer

```gherkin
Scenario: Footer displays contact form on dark background
  Given the page scrolls to the footer
  Then the footer background is dark (#222222)
  And a "Get in touch" heading is shown in the left column
  And a contact form is shown in the right column
  And the form has 3 text inputs: Name, Email, Subject
  And a textarea for Message
  And a "send message" submit button (white text, arrow icon)

Scenario: Footer form is accessible
  Given the footer contact form is displayed
  Then each input has a placeholder label
  And the form inputs are focusable via keyboard
  And the submit button has a semantic type

Scenario: Footer includes copyright
  Given the footer is displayed
  Then a copyright line is shown at the bottom
  And the copyright includes a link to Component Dock (https://www.componentdock.com/)
```

## Verification Checklist

- [ ] Header: logo + 6 nav links, accessible focus states
- [ ] Hero: full-height slider section, dark overlay, centered headline, CTA with arrow icon
- [ ] Gallery: two-column layout, blockquote + description left, 6 gallery items total
- [ ] Gallery items: image + title + artist + CTA link with arrow
- [ ] Gallery: "see all galleries" CTA in right column
- [ ] Blog: light gray bg (#f6f7f9), section title, 2 blog cards with thumbnail + content
- [ ] Blog cards: category badge, title, date, excerpt, "Read More" CTA
- [ ] Footer: dark bg (#222222), "Get in touch" heading, contact form
- [ ] Footer form: 3 inputs (Name, Email, Subject) + textarea + "send message" button
- [ ] Footer copyright: links to Component Dock
- [ ] Design tokens: Lato font, #081624 brand, #222222 footer, #f6f7f9 blog bg
- [ ] Button variants: outline (sb-line), solid (sb-solid), light (sb-light), big (sb-big)
- [ ] Responsive: mobile stacks columns, hamburger nav for mobile
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links Component Dock
