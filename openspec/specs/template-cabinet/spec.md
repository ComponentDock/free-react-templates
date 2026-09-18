# Template: Cabinet (Directory Listing)

## Purpose

Cabinet is a single-page directory/listing homepage in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Listio" free
template (source: https://colorlib.com/wp/template/listio/, preview:
https://preview.colorlib.com/theme/listio/), built under a DIFFERENT name
(**Cabinet**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 directory listing template with a parallax hero
search form, category icon carousel, featured listings grid, numbered process
steps, testimonial slider, newsletter section, and blog cards. The primary
accent is hot pink (`#FF377B`) on a white body with navy-blue headings
(`#072366` / `#140C40`). Font: Google Fonts "Josefin Sans" (300–700).
Buttons have 4–6px radius. Sections alternate between white, image-backed
parallax (`section_bg01.png`, `section_bg02.png`), and solid-light backgrounds.

**WHAT MAKES CABINET DISTINCT (signature behaviors):**

1. **Transparent header with left search bar + centered logo + right nav.**
   The header is fully transparent over the hero image. Left side has a search
   input with pink (`#FF377B`) square search-icon button. Center is logo.
   Right side has nav links (Home, Explore, Pages dropdown, "Add Listing" CTA
   button, My Account link). On scroll the header becomes sticky with a dark
   semi-transparent background (`rgba(94,3,34,0.8)`).

2. **Hero with background image + search form overlay.** Full-width hero
   image with a dark gradient overlay (top-down `rgba(0,0,0,0.6)` to
   transparent). Left-aligned 5-column search form containing: text input
   "What are you finding?", category select, city select, and a full-width
   pink submit button "Search Destination" (`#FF377B`, 60px height, 4px
   radius).

3. **Category icons carousel.** Horizontal scrollable row of circular icon
   thumbnails (Hotel, Restaurant, Cafe, Shopping Mall) each with listing
   count below ("20 Listing"). Section title: "We help you to find" with
   subtitle "Explore Categories".

4. **Split "Best Café & Bars" parallax section.** Two-column layout: left
   side is a background image, right side has heading, description paragraph,
   and a pink "Explore Now" CTA button (6px radius, 25px vertical padding).

5. **Featured Listings 3-column grid.** 6 property cards in a 3-column grid.
   Each card: image with overlay (category icon badge top-right, price badge
   `$$$` top-left, "Closed" / "Open Now" status tag), caption with title +
   description, footer row with restaurant-category icon + heart/favorite
   icon. Below grid: "Explore More" outline border button.

6. **Numbered process steps on image background.** Section with parallax
   background image. Three columns, each with a large number badge (01, 02,
   03) in a circular pink-accented container, heading, and description text.
   Steps: "Find Businesses", "Review Listings", "Make a Reservation".

7. **Testimonial slider.** Centered section with quote text, avatar image,
   name, and role. Carousel auto-plays between testimonials.

8. **Newsletter with background image.** Full-width image-backed section with
   email input + pink "Subscribe" button. Heading: "Let's Stay In Touch".

9. **Latest News blog cards.** Two-column layout with blog post cards: image,
   category badge ("Tips"), date + author, and post title link.

10. **Three-column footer.** Logo + description paragraph on the left, Quick
    Links column center-left, Company column center-right. Social media icon
    row (Twitter, Facebook, Pinterest, LinkedIn). Bottom bar with copyright
    text (replaced with Component Dock attribution).

The "Add Listing" modal (multi-tab form with Basic/Amenities/Location/Media/
SEO/Schedule/Contact/Type/Finish tabs) is a complex interactive form that
implementers may SKIP — focus on the main page sections above.

## Design tokens

| Token              | Value                                | Source CSS class                  |
| ------------------ | ------------------------------------ | --------------------------------- |
| Font family        | "Josefin Sans", sans-serif           | `@import url(...fonts.googleapis...)` |
| Brand / accent     | `#FF377B` (hot pink)                 | `.btn`, `.submit-btn`, `.border-btn`, `.section-tittle span` |
| Heading color      | `#140C40`, `#072366`                 | `h1-h6`, `.section-tittle h2`     |
| Body text color    | `#10285d`                            | `p`                               |
| Paragraph text     | `#5E5E5E` (section subtitles)        | `.section-tittle p`               |
| Link color         | `#635c5c` (default), `#fff` (on dark) | `a`                              |
| Button radius      | `4px` (submit), `6px` (primary btn)  | `.submit-btn`, `.btn`             |
| Button height      | `60px`                               | `.submit-btn`, `.submit-btn2`     |
| Header transparent | yes → sticky dark `rgba(94,3,34,0.8)` | `.header-area`, `.header-sticky` |
| Hero overlay       | gradient `rgba(0,0,0,0.6)` → `transparent` | `.hero-overly::before`      |
| Section bg (dark)  | `section_bg01.png` (parallax)        | `.section-bg2`                    |
| Section bg (light) | `section-bg1`                        | `.testimonial-area`               |
| Card shadow        | `0px 10px 20px 0px rgba(221,221,221,0.3)` | `.blog_details`               |
| Border color       | `#f0e9ff` (light purple)             | Various borders, blog sidebar     |

## Gherkin requirements

### Scenario: Header renders with transparent background
- GIVEN the user loads the page
- WHEN the header is visible at the top
- THEN the header has a transparent background over the hero image
- AND the logo is centered
- AND a search input is visible on the left side
- AND navigation links are visible on the right (Home, Explore, Pages, Add Listing, My Account)

### Scenario: Header becomes sticky on scroll
- GIVEN the user scrolls down past the hero
- WHEN the header enters the sticky zone
- THEN the header background changes to a dark semi-transparent color
- AND the header remains fixed at the top of the viewport

### Scenario: Hero search form is functional
- GIVEN the hero section is visible
- WHEN the user views the search form
- THEN a text input with placeholder "What are you finding?" is shown
- AND a category select dropdown is shown
- AND a city select dropdown is shown
- AND a full-width pink "Search Destination" button is shown

### Scenario: Category carousel displays items
- GIVEN the services section loads
- WHEN the category icons are rendered
- THEN at least 4 category items are displayed (Hotel, Restaurant, Cafe, Shopping Mall)
- AND each shows an icon image and listing count

### Scenario: Featured listings grid shows 6 cards
- GIVEN the featured listing section loads
- WHEN the property cards are rendered
- THEN 6 cards are displayed in a 3-column grid
- AND each card has an image, price badge, status badge, title, description, and category footer
- AND an "Explore More" button is shown below the grid

### Scenario: Process steps section shows 3 steps
- GIVEN the "How It Works" section loads
- WHEN the process steps are rendered
- THEN 3 numbered steps are displayed (01, 02, 03)
- AND each has a heading and description text

### Scenario: Testimonial section displays quote
- GIVEN the testimonial section loads
- WHEN the testimonial content is rendered
- THEN a quote paragraph is shown
- AND an avatar image is shown
- AND a name and role are shown below the avatar

### Scenario: Newsletter section accepts email
- GIVEN the newsletter section loads
- WHEN the user views the subscribe area
- THEN an email input is shown
- AND a pink "Subscribe" button is shown
- AND the section has a background image

### Scenario: Blog cards display in two columns
- GIVEN the latest news section loads
- WHEN the blog post cards are rendered
- THEN 2 blog cards are displayed
- AND each card has an image, category badge, date, and post title

### Scenario: Footer has three columns
- GIVEN the footer loads
- WHEN the footer content is rendered
- THEN a logo and description paragraph appear on the left
- AND a "Quick Links" list is shown in the center
- AND a "Company" list is shown on the right
- AND social media icons are shown
- AND the copyright bar includes Component Dock attribution

## Verification checklist

- [ ] Header: transparent over hero, sticky dark on scroll, search input, nav links, "Add Listing" CTA
- [ ] Hero: background image with gradient overlay, search form with 2 selects + submit button
- [ ] Categories: icon carousel with 4+ items, listing counts
- [ ] Best Café & Bars: split layout, parallax image left, text + CTA right
- [ ] Featured Listings: 6 cards in 3-col grid, image overlays, price/status badges, category footer, heart icon, "Explore More" button
- [ ] Process Steps: 3 numbered steps on image background, pink number badges
- [ ] Testimonials: quote text, avatar, name, role
- [ ] Newsletter: background image, email input, subscribe button
- [ ] Blog: 2 cards in 2-col, image, category tag, date, title
- [ ] Footer: 3 columns, logo, links, social icons, copyright with Component Dock
- [ ] Fonts: "Josefin Sans" loaded from Google Fonts
- [ ] Colors: `#FF377B` accent, `#072366` headings, `#10285d` body
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
