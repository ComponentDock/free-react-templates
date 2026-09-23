# Template: Biblos (Book / Author Landing Page)

## Purpose

Recreation of the ColorLib "Booke" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page landing site for promoting a book or author brand.

- **Source slug:** `booke`
- **ColorLib page:** https://colorlib.com/wp/template/booke/
- **Live preview URL:** https://preview.colorlib.com/theme/booke/
- **Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the live preview DOM + `css/style.css` (2026-09-23):

| Token | Value | Notes |
|---|---|---|
| Brand / primary | `#1C63FB` | Bootstrap `.btn-primary`, borders, newsletter bg, carousel arrows |
| Heading font | `"Oswald"` (Google Fonts) | Used for headings, uppercase labels |
| Body font | `"Roboto"` (Google Fonts) | Body text, form inputs |
| Button radius | `30px` (pill) | All `.btn` elements |
| Button-primary style | `#1C63FB` bg → hover: transparent + `#1C63FB` border/text | Ghost effect on hover |
| Button-white style | `#fff` bg → hover: transparent + white text | Hero CTA, newsletter button |
| Light background | `#f6f6f6` | `.bg-light` on features and testimonial sections |
| Newsletter / CTA section bg | `#1C63FB` (primary) | Full-width blue band |
| Footer background | `#333333` | Dark charcoal |
| Text muted | `#8c8c8c` / `#b3b3b3` | Subtitles, secondary text |
| Body text | `#212529` / `#000` | Standard body |
| Testimonial card bg | `#fff` | White cards on light bg |
| Feature card icon bg | `#fff` | White square behind icomoon icons, 4px radius |

## Section structure and Gherkin scenarios

### Navbar

- Sticky top navigation bar with site logo on the left and nav links on the right.
- Nav links (desktop): Home, Features, About Author, Testimonial, Contact.
- Mobile: hamburger menu toggling a slide-out menu.

**Scenario: Navbar renders all navigation links**
Given the page is loaded
When I look at the top navigation bar
Then I see a logo reading "Biblos"
And I see links: Home, Features, About Author, Testimonial, Contact
And all links are anchored to their corresponding section IDs

**Scenario: Navbar is sticky on scroll**
Given I scroll the page past the hero section
When I check the top of the viewport
Then the navbar is visible and fixed to the top

**Scenario: Mobile menu toggle**
Given the viewport width is less than 992px
When I tap the hamburger menu icon
Then the mobile navigation drawer opens
And I see the same nav links

---

### Hero

- Dark background (image or solid), full-width.
- Left-aligned: heading "Meet Your Next Book" (white, uppercase, Oswald font).
- Subtext paragraph (white).
- CTA button "Buy This Book On Amazon" (`.btn-white`, pill-shaped).
- Below text: large book cover image centered in the container.

**Scenario: Hero section displays heading and CTA**
Given I am on the page
When I view the hero section
Then I see a heading "Meet Your Next Book" in white uppercase text
And I see a paragraph of descriptive text
And I see a pill-shaped button labeled "Buy This Book On Amazon"

**Scenario: Hero shows book cover image**
Given I am on the page
When I view the hero section
Then I see a large book cover image centered below the text

---

### Features

- Light background (`#f6f6f6`).
- Heading "Features Of This Book" (left-aligned, Oswald).
- Subtext paragraph.
- 6 feature cards in a 3-column grid (2 rows).
- Each card: white square icon container with an icon (book, bookmark, files, font, photo, text-height), title, and description paragraph.

**Scenario: Features section shows 6 feature cards**
Given I scroll to the Features section
When I look at the feature cards
Then I see 6 cards arranged in a 3-column grid
And each card has an icon, a title, and a short description

**Scenario: Feature card visual consistency**
Given I view a feature card
When I look at the icon area
Then the icon sits inside a white rounded-square container
And the title is in Oswald font
And the description is in Roboto font

---

### Book Screenshots (Carousel)

- White background section.
- Heading "Book Screenshot".
- Subtext paragraph.
- Prev/Next text navigation links.
- Image carousel (owl-carousel style) showing book interior screenshots.
- Multiple images, one visible at a time.

**Scenario: Carousel displays book screenshots**
Given I scroll to the Book Screenshot section
When I view the carousel
Then I see a large image filling the container width
And I see Prev / Next navigation links above the carousel

**Scenario: Carousel navigates between images**
Given I am viewing the Book Screenshot section
When I click "Next"
Then the next image in the sequence slides into view
And when I click "Prev"
Then the previous image returns to view

---

### About Author

- Side-by-side layout: author background image on the left (half-width), text content on the right.
- Heading "Hello It's Jane".
- Two paragraphs of author bio text.
- Social media icon links.
- Author name, title "Book Author & Publisher", and signature image at the bottom.

**Scenario: About Author shows author info**
Given I scroll to the About Author section
When I view the layout
Then I see a full-height background image on the left
And I see the heading "Hello It's Jane" on the right
And I see two paragraphs of bio text
And I see the author name, title, and a signature image

**Scenario: About Author has social links**
Given I view the About Author section
When I look below the bio text
Then I see social media icon links

---

### Testimonials

- Light background (`#f6f6f6`).
- Heading "Testimonial From Readers".
- 3 testimonial cards in a 3-column grid.
- Each card: white background, blockquote with quote text, person photo (rounded), name, and title/position.

**Scenario: Testimonials section shows 3 cards**
Given I scroll to the Testimonials section
When I look at the testimonial cards
Then I see 3 cards in a row
And each card contains a blockquote with a reader quote
And each card shows a person photo, name, and title

**Scenario: Testimonial card visual style**
Given I view a testimonial card
When I inspect its styling
Then the card has a white background on a light section background
And the person photo is circular
And the quote uses smart quotes (opening and closing)

---

### Newsletter

- Full-width section with primary blue background (`#1C63FB`).
- Heading "Subscribe For The New Updates" (white).
- Horizontal form: email input + "Send Email" button (`.btn-white`, pill-shaped).

**Scenario: Newsletter section displays form**
Given I scroll to the Newsletter section
When I view the section
Then I see a heading "Subscribe For The New Updates" in white
And I see an email input field
And I see a "Send Email" pill button

---

### Footer

- Dark background (`#333333`).
- 3 columns:
  - **About Us:** paragraph text.
  - **Navigation:** two-column list of links (Home, Book Author, About Us, Team).
  - **Quick Contact:** form with Name, Email, Message textarea, and "Send Message" button (`.btn-primary`).
- Social media icon row (Facebook, Twitter, Instagram, LinkedIn).
- Copyright line with Component Dock attribution link (replacing ColorLib credit).

**Scenario: Footer displays three columns**
Given I scroll to the footer
When I view the footer columns
Then I see an "About Us" column with a paragraph
And I see a "Navigation" column with link list
And I see a "Quick Contact" column with a contact form

**Scenario: Footer contact form**
Given I view the Quick Contact form
When I inspect the form fields
Then I see Name, Email, and Message fields
And a "Send Message" button with blue primary style

**Scenario: Footer has social links and copyright**
Given I view the bottom of the footer
When I look at the social row
Then I see icon links for Facebook, Twitter, Instagram, LinkedIn
And I see a copyright line with a Component Dock link

---

## Verification checklist

- [ ] All 8 sections present in correct order: Navbar → Hero → Features → Screenshots → About Author → Testimonials → Newsletter → Footer
- [ ] Brand color `#1C63FB` used consistently for buttons and newsletter section
- [ ] Oswald font applied to all headings
- [ ] Roboto font applied to body text
- [ ] Buttons use `border-radius: 30px` (pill shape)
- [ ] Hero button is white-filled (`.btn-white` style)
- [ ] Feature cards are in a 3-column grid with 6 cards total
- [ ] About Author has side-by-side layout (image left, text right)
- [ ] Testimonials are 3 cards in a 3-column grid on light bg
- [ ] Newsletter section is full-width blue with email input + send button
- [ ] Footer has 3 columns: About Us, Navigation, Quick Contact
- [ ] Footer copyright links to Component Dock (no ColorLib attribution)
- [ ] Navbar is sticky on scroll
- [ ] Mobile hamburger menu toggles navigation drawer
- [ ] Carousel prev/next navigation works
- [ ] All images use picsum.photos placeholder URLs (no ColorLib assets)
