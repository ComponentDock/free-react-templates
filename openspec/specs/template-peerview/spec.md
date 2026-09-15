# Template: Peerview (Photography Gallery)

## Purpose

Recreation of the ColorLib **Thelook** photo gallery template as a React 19 +
Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/thelook/
- **Preview:** https://preview.colorlib.com/theme/thelook/ (REACHABLE —
  verified 2026-09-15 by direct fetch, 14,202 bytes)
- **New name:** `peerview` (apps/peerview, @free-react-templates/peerview)
- **Deploy target:** https://peerview.free.componentdock.com
- **Category:** Photography / Gallery
- **Screenshot reference:** https://colorlib.com/wp/wp-content/uploads/sites/2/thelook-free-template.jpg

## Design Tokens

Extracted from the live preview stylesheet (css/style.css at
preview.colorlib.com/theme/thelook/):

### Colors

| Token                   | Value             | Usage                                      |
| ----------------------- | ----------------- | ------------------------------------------ |
| `--color-primary`       | `#081624`         | Dark navy — brand buttons, hero text, nav  |
| `--color-footer-bg`     | `#222222`         | Footer section background                  |
| `--color-blog-bg`       | `#f6f7f9`         | Blog section light gray background         |
| `--color-text`          | `#333333`         | Body text                                  |
| `--color-text-muted`    | `#828282`         | Secondary text, labels                     |
| `--color-text-copyright`| `#515151`         | Copyright line                             |
| `--color-border`        | `#656565`         | Form input bottom borders                  |
| `--color-white`         | `#ffffff`         | Card backgrounds, hero text, light buttons |

### Fonts

| Font     | Family                  | Usage                               |
| -------- | ----------------------- | ----------------------------------- |
| Primary  | `'Lato', sans-serif`    | All text — headings, body, nav, UI  |

Weights used: 300 (light/italic body), 400 (regular), 700 (bold headings/nav).
Italic variants used for gallery quotes and section headings.

### Button Shape

- **Border-radius:** `0` (sharp corners, no rounding)
- **Default:** transparent background, `#081624` text, 11px bold, min-width 167px
- **sb-big variant:** 14px font, larger arrow icon (41px)
- **sb-line variant:** 2px solid `#081624` border, 19px padding, 57px min-height
- **sb-solid variant:** `#081624` background, white text
- **sb-light variant:** white text on transparent background (footer form button)
- **Arrow icon:** inline arrow-right image (28px default, 41px sb-big)

### Section Backgrounds

- Hero: full-width slider with dark semi-transparent overlay (`sm-overlay`)
- Gallery: white / no background
- Blog: `#f6f7f9` light gray
- Footer: `#222222` dark gray

## Section Structure (DOM order)

1. **Header** — Fixed top navbar with site logo left, horizontal nav menu
   right (Home, Gallery, Artists, Shop, News, Contact). Logo is an image;
   nav items are plain text links.

2. **Hero Section** — Full-viewport-height slider carousel (Owl Carousel
   pattern) with 3 slides. Each slide: background image with dark overlay,
   massive italic headline "The Look Gallery" (160px), subtitle
   "John Doe Showcase / 23 January - 14 February", CTA button "Read More"
   with right-arrow icon. Slides animate in with opacity/translate.

3. **Gallery Section** — Two-column asymmetric layout:
   - Left column: Italic blockquote about photography, description
     paragraph, 3 gallery items stacked (image + title "Red Passion 2017"
     + artist "John Doe" + "view gallery" button with arrow)
   - Right column: 3 more gallery items (image + title + artist + button),
     then "see all galleries" CTA link
   - Total: 6 gallery items in a 3+3 layout

4. **Blog Section** — Gray background (#f6f7f9). Left sidebar column with
   italic heading "Latest from the blog". Right content column with blog
   posts: each has a thumbnail image (264px wide, floated left), category
   tag (uppercase bold), title, date, excerpt paragraph, "Read More"
   button with arrow.

5. **Footer** — Dark background (#222222). Two-column layout:
   - Left: "Get in touch" heading (white, italic) + description paragraph
   - Right: Contact form with 3 text inputs (Name, Email, Subject) in a
     row, full-width textarea (Message), "send message" button (sb-light
     variant with white arrow). Inputs have bottom-border style
     (#656565), transparent background, white text.
   - Copyright line at bottom (italic, #515151)

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with a logo image on the left
and horizontal navigation links (Home, Gallery, Artists, Shop, News,
Contact) on the right.

#### Scenario: Navbar links

- **GIVEN** the page is loaded
- **WHEN** the navbar is displayed
- **THEN** it SHALL show 6 navigation links
- **AND** each link SHALL point to its respective section or page
- **AND** the navbar SHALL be positioned at the top of the page

### Requirement: Hero section

The system SHALL render a full-width hero section with a slider/carousel
containing 3 slides, each with a background image, dark overlay, headline,
subtitle, and CTA button.

#### Scenario: Hero content

- **GIVEN** the page is loaded
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the headline "The Look Gallery" in large italic text
- **AND** it SHALL show the subtitle "John Doe Showcase / 23 January - 14 February"
- **AND** it SHALL show a "Read More" CTA button with a right-arrow icon
- **AND** it SHALL have a dark overlay over a background image

#### Scenario: Hero slider

- **GIVEN** the hero section is displayed
- **WHEN** the slider advances
- **THEN** it SHALL cycle through 3 slides with fade/translate animation
- **AND** each slide SHALL have the same headline and CTA with a different background image

### Requirement: Gallery section

The system SHALL render a two-column gallery section with a quote, 6 gallery
items (image + title + artist + CTA), and a "see all galleries" link.

#### Scenario: Gallery layout

- **GIVEN** the page is loaded
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show a left column with a blockquote and 3 gallery items
- **AND** it SHALL show a right column with 3 gallery items and a "see all galleries" CTA
- **AND** each gallery item SHALL have an image, title, artist name, and "view gallery" button

#### Scenario: Gallery quote

- **GIVEN** the gallery section is displayed
- **WHEN** the left column is visible
- **THEN** it SHALL show an italic blockquote about photography
- **AND** it SHALL show a description paragraph below the quote

### Requirement: Blog section

The system SHALL render a blog section on a light gray background with a
section heading and blog post cards containing thumbnail, category, title,
date, excerpt, and "Read More" link.

#### Scenario: Blog posts

- **GIVEN** the page is loaded
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Latest from the blog" in italic
- **AND** it SHALL show at least 2 blog posts
- **AND** each post SHALL have a thumbnail image, category tag, title, date, excerpt, and "Read More" button

### Requirement: Footer with contact form

The system SHALL render a dark footer with a "Get in touch" section and a
contact form (Name, Email, Subject, Message, Send button), plus a
Component Dock credit link.

#### Scenario: Footer contact form

- **GIVEN** the page is loaded
- **WHEN** the footer is displayed
- **THEN** it SHALL show a "Get in touch" heading
- **AND** it SHALL show a contact form with Name, Email, Subject inputs and a Message textarea
- **AND** it SHALL show a "send message" submit button
- **AND** the inputs SHALL have transparent background with bottom-border style

#### Scenario: Footer credit

- **GIVEN** the footer is displayed
- **WHEN** the copyright area is rendered
- **THEN** it SHALL link to https://www.componentdock.com/ ("Component Dock")
- **AND** it SHALL NOT reference ColorLib

### Requirement: Responsive design

The system SHALL be responsive and adapt the layout for mobile viewports.

#### Scenario: Mobile layout

- **GIVEN** the page is viewed on a viewport width ≤ 768px
- **WHEN** the layout adapts
- **THEN** the gallery columns SHALL stack vertically
- **AND** the blog sidebar SHALL stack above the blog posts
- **AND** the footer columns SHALL stack vertically
- **AND** the hero headline SHALL scale down proportionally

## Verification Checklist

- [ ] All 5 sections render in correct DOM order (header → hero → gallery → blog → footer)
- [ ] Hero slider cycles through 3 slides with animation
- [ ] Gallery shows 6 items in 3+3 two-column layout
- [ ] Gallery quote and description render correctly
- [ ] Blog section shows posts with thumbnail, category, title, date, excerpt
- [ ] Footer contact form has all 4 fields + submit button
- [ ] Footer links to Component Dock (NOT ColorLib)
- [ ] No ColorLib references anywhere in app code
- [ ] Lato font loaded via Google Fonts
- [ ] Brand color #081624 used for buttons and key UI elements
- [ ] Blog section has #f6f7f9 background
- [ ] Footer has #222222 background
- [ ] Buttons have sharp corners (no border-radius)
- [ ] Responsive layout works at mobile breakpoints
- [ ] Accessibility: semantic HTML, ARIA labels on interactive elements
- [ ] TypeScript strict mode passes
- [ ] 100% test coverage (lines, functions, branches, statements)
