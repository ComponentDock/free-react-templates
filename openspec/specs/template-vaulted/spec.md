# Template: Vaulted (Church / Religious Landing Page)

## Purpose

Vaulted is a single-page church / ministry landing page in the
free-react-templates monorepo. It is a React recreation of the ColorLib
"Crose" free HTML template (source:
https://colorlib.com/wp/template/crose/), live preview at
https://preview.colorlib.com/theme/crose/, built under a DIFFERENT name
(**Vaulted** — a church vault/arch, fits the religious theme), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design tokens (extracted from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Brand color (primary) | `#c92f2f` (crimson red) | Buttons, preloader, top-header icons, scroll-up bg, accents |
| Heading color | `#1f1f2c` (near-black dark blue) | All headings, nav links, button hover bg |
| Body text | `#636363` (gray) | Paragraph text |
| Muted text | `#959595` (light gray) | Top header meta text |
| Page background | `#ffffff` (white) | Main content sections |
| Gray background | `#f3f3f3` (light gray) | Top header bar, preloader bg |
| Overlay | `rgba(15, 6, 6, 0.7)` (dark) | Hero slides, parallax sections |
| Footer text | `#c2c2c2` (light gray) | Footer paragraph text |
| Heading font | `"Raleway", sans-serif` (weights 700, 800) | Section headings, hero headlines |
| Body font | `"Open Sans", sans-serif` (weights 300, 400, 600, 700, 800) | Body text, nav, buttons |
| Button style | `.crose-btn`: bg `#c92f2f`, white text, border-radius 3px, height 46px, uppercase, bold 700, min-width 150px, padding 0 30px | Primary CTA buttons |
| Button hover | bg `#1f1f2c`, white text | All primary button hover/focus |
| Button variant `.btn-2` | White bg, `#c92f2f` text; hover: bg `#c92f2f`, white text | Secondary CTA buttons (inverted) |
| Scroll-up button | bg `#c92f2f`, border-radius 0, white icon, 40×40px, hover bg `#1f1f2c` | Back-to-top button |

## Section order (from live preview DOM)

1. **Top Header Bar** — gray `#f3f3f3` bg, opening hours (clock icon), social icons (Facebook, Twitter, Google+), email address, phone number
2. **Navbar** — white bg, logo left, nav links right (Home, Pages dropdown with mega menu, Events, Sermons, Blog, Contact), search icon, "Donate Us" red button
3. **Hero Slider** — Owl Carousel, 2 slides with dark overlay (`rgba(15,6,6,0.7)`), centered white headline + paragraph + CTA button per slide ("Building The Hope" / "Making Jesus Known")
4. **About Section** — white bg, centered "Welcome To Church" heading + description, 3-column cards (Our Church, Our History, Our Sermons) each with image + title + paragraph + "Read More" link
5. **Call To Action** — parallax bg image with dark overlay, centered "A Place For You" heading + description + white "Become A Member" button (btn-2 variant)
6. **Latest Sermons** — white bg, centered heading, 3-column sermon cards with thumbnail + date badge + media icons (video/audio/docs/download) + title + speaker/categories/time metadata
7. **Upcoming Events** — parallax bg heading area with dark overlay (white heading), event cards in carousel with thumbnail + title + meta (date, time, location) + description + "Find Out More" button
8. **Gallery** — 10-image grid (flexbox wrap), hover overlay with zoom icon for lightbox
9. **Blog/News** — white bg, centered heading, 3-column blog cards with image + title + meta (author, date) + excerpt
10. **Subscribe/Newsletter** — dark bg, "Subscribe To Our Newsletter" heading + description left, email form + subscribe button right
11. **Footer** — dark bg, 4-column layout (logo + desc, Quick Links, News Latest, Contact Us), copyright bar with social icons

## Gherkin requirements

### Background
  Given the app is loaded at the root URL
  Then the page renders without errors
  And all sections are present in the correct order

### Scenario: Top header bar renders with contact info
  Given the user views the page
  Then a gray top header bar is visible at the top
  And it shows opening hours with a clock icon
  And it shows social media icons (Facebook, Twitter, Google+)
  And it shows an email address and phone number

### Scenario: Navbar renders with navigation and donate button
  Given the user views the page
  Then a white navbar is visible below the top header
  And it displays a logo on the left
  And it shows navigation links: Home, Pages, Events, Sermons, Blog, Contact
  And a search icon is present
  And a red "Donate Us" button is visible

### Scenario: Navbar Pages dropdown opens on click
  Given the user clicks the "Pages" nav link
  Then a dropdown menu appears with links: Home, About, Sermons, Sermons Details, Events, Blog, Blog Details, Contact

### Scenario: Hero slider displays slides with headlines
  Given the user views the page
  Then a full-width hero slider is visible
  And each slide has a dark overlay background image
  And each slide shows a white headline, paragraph text, and a CTA button
  And the slider has at least 2 slides

### Scenario: About section displays three feature cards
  Given the user scrolls to the About section
  Then a "Welcome To Church" heading is displayed
  And 3 cards are shown in a row (Our Church, Our History, Our Sermons)
  And each card has an image, title, description paragraph, and "Read More" link

### Scenario: Call to action section renders with parallax background
  Given the user scrolls to the CTA section
  Then a parallax background image with dark overlay is visible
  And a centered heading "A Place For You" is displayed
  And a white "Become A Member" button (btn-2 variant) is shown

### Scenario: Latest sermons section shows sermon cards
  Given the user scrolls to the Latest Sermons section
  Then a centered "Latest Sermons" heading is displayed
  And 3 sermon cards are shown in a row
  And each card has a thumbnail image with a date badge
  And each card has media type icons (video, audio, docs, download)
  And each card shows a title, speaker name, categories, and time

### Scenario: Upcoming events section displays event cards
  Given the user scrolls to the Upcoming Events section
  Then a parallax heading area with dark overlay shows "Upcoming Events"
  And event cards are displayed with thumbnails and content
  And each event card shows title, date, time, location, description, and "Find Out More" button

### Scenario: Gallery section shows image grid
  Given the user scrolls to the Gallery section
  Then a grid of images is displayed (10 images in flexbox wrap layout)
  And each image has a hover overlay effect

### Scenario: Blog section displays news cards
  Given the user scrolls to the Blog section
  Then a centered "Latest News" heading is displayed
  And 3 blog post cards are shown in a row
  And each card has an image, title, author, date, and excerpt

### Scenario: Subscribe section renders newsletter form
  Given the user scrolls to the Subscribe section
  Then a dark background section is visible
  And "Subscribe To Our Newsletter" heading is displayed on the left
  And an email input field and subscribe button are on the right

### Scenario: Footer renders with four columns
  Given the user views the footer
  Then a dark background footer is displayed
  And it contains 4 columns: Logo + description, Quick Links, News Latest, Contact Us
  And a copyright bar with social media icons is at the bottom
  And the footer links to https://www.componentdock.com/ as "Component Dock"

## Verification checklist

- [ ] All 11 sections render in correct order
- [ ] Top header: gray bg, clock icon + hours, social icons, email, phone
- [ ] Navbar: logo, nav links with dropdown, search icon, Donate Us button
- [ ] Hero: 2-slide carousel, dark overlay, white headlines, CTA buttons
- [ ] About: 3 cards with images, titles, descriptions, Read More links
- [ ] CTA: parallax bg, dark overlay, heading, btn-2 variant button
- [ ] Sermons: 3 cards with thumbnails, date badges, media icons, metadata
- [ ] Events: parallax heading, event cards with thumbnails, metadata, Find Out More
- [ ] Gallery: 10-image grid with hover overlays
- [ ] Blog: 3 cards with images, titles, authors, dates, excerpts
- [ ] Subscribe: dark bg, heading, email form, subscribe button
- [ ] Footer: 4-column layout, copyright, social icons, Component Dock link
- [ ] Design tokens match: brand `#c92f2f`, headings `#1f1f2c`, fonts Open Sans + Raleway
- [ ] Buttons: primary red 3px radius, btn-2 white variant, hover to dark
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Placeholder images via `picsum.photos/seed/vaulted-N/w/h`
