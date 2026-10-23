# Template: SnapFocus (Photography Portfolio)
<!-- prep-status: shipped-as=bokeh -->
> **SHIPPED-UNDER** — the ColorLib `pentax` design this prep describes already
> ships as `apps/bokeh` (<https://bokeh.free.componentdock.com>).
> Do not scaffold `apps/snapfocus`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-bokeh/spec.md`.

## Purpose

Recreation of the ColorLib "Pentax" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `pentax`
- **Source URL:** https://colorlib.com/wp/template/pentax/
- **Preview URL:** https://preview.colorlib.com/theme/pentax/
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/snapfocus`
- **Surge target:** `snapfocus.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) at https://preview.colorlib.com/theme/pentax/

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#f81c1c` | Buttons, accents, active nav links, hover states |
| Dark bg | `#1a1d24` | Headings, navbar text, dark elements |
| Body text | `#797979` | Paragraphs, body copy |
| Muted bg | `#f7f7f7` | Alternating section backgrounds (`.bg-1`) |
| White bg | `#FFFFFF` | Default content backgrounds, cards |
| Border light | `#eeeeee` | Dropdown borders, subtle dividers |
| White text | `#FFFFFF` | On dark/parallax backgrounds, buttons |
| Font headings | `Playfair Display`, serif | All headings (h1–h6) |
| Font body | `Roboto`, sans-serif | Body copy, navigation, buttons |
| Button shape | Rounded rectangle (border-radius: 4px) | CTA `.main_btn` |
| Button bg | `#f81c1c` | Default CTA button background |
| Button hover | `#f81c1c` bg + `#fff` text | Card pricing button hover |
| Nav separator | `/` character between nav items | Decorative slash separator |
| Parallax overlay | dark semi-transparent | Banner and about section overlays |

## Section Structure (in page order)

### 1. Navbar
- Logo image (left-aligned)
- Navigation links: Home, About, Services, Projects, Blog (dropdown), Contact
- Blog dropdown: Blog, Blog Details, Project Details, Pricing
- Search icon button (opens overlay search bar)
- Sticky/fixed on scroll with white background + box-shadow
- Nav items separated by `/` character

### 2. Hero Banner
- Full-width parallax background with dark overlay
- Headline: "i am Professional Photographer" (with brand color span on "Professional")
- Subtitle text
- "view portfolio" CTA button (`.main_btn`, brand red)
- Social links bar at bottom: Instagram, Twitter, Facebook (with dot separators)

### 3. Portfolio (Filterable Gallery)
- Section heading: "Check Recent Work" (with brand color span on "Recent")
- Subtitle text
- Filter tabs: All, Wedding, Motion, Portrait, Fashion
- Masonry-style grid (4-col desktop, 2-col tablet):
  - Mixed 1/3 and 2/3 column widths per row
  - Each item: image + overlay with category tag + title link
- Uses Isotope-style filtering

### 4. Services
- Section heading: "what we offer" (with brand color span on "we")
- 4-column grid:
  - Nature Photography (leaf icon)
  - Property Tours (send icon)
  - Event Coverage (camera icon)
  - Wedding Photography (balloon icon)
- Each: icon + heading + description paragraph

### 5. Pricing Table
- Section heading: "perfect price plan" (with brand color span on "price")
- Light gray background (`.bg-1`)
- 3-column card layout:
  - Wedding ($76), Studio ($86), Fashion ($96)
- Each card: plan name, description, price (large), feature list (checkmarks + crosses), "Book Now" button
- Card hover: red border + button highlight

### 6. About
- Two-column layout:
  - Left: two overlapping images (one with decorative border)
  - Right: heading "Let's Introduce About Myself", description paragraphs, "learn more" CTA button
- White background

### 7. Testimonials
- Section heading: "happy clients says" (with brand color span on "clients")
- Gray background (`.bg-1` + `.bg-gray`)
- OwlCarousel-style slider with 3 testimonial items:
  - Each: photo (left 1/3), name + title + quote text (right 2/3)
  - Quote icon (Themify quote-right)

### 8. Blog
- Section heading: "Our Recent News" (with line decoration)
- 3-column grid of blog cards:
  - Each: thumbnail image, category tag + date meta, heading, excerpt, "read more" link
- White background

### 9. Footer
- 3-column layout:
  - About Us: description text + copyright
  - Newsletter: email input + arrow submit button
  - Follow Us: social icons (Facebook, Twitter, Dribbble, Behance)
- Dark background
- Copyright with Component Dock link (replacing ColorLib attribution)

## Requirements

### Feature: SnapFocus template behaviour

Feature: SnapFocus — Photography Portfolio Template

Background:
- **GIVEN** the template is loaded at the root URL
- **THEN** the page title contains "SnapFocus"
- **AND** the Component Dock footer link is visible

#### Scenario: Navbar renders correctly

- **GIVEN** the user is on any viewport
- **THEN** the logo is visible in the top-left
- **AND** navigation links "Home", "About", "Services", "Projects", "Blog", "Contact" are visible
- **AND** on mobile viewports a hamburger menu button is visible

#### Scenario: Navbar has sticky scroll behavior

- **GIVEN** the user scrolls down past the hero
- **THEN** the navbar becomes fixed with a white background and box-shadow

#### Scenario: Hero banner displays with parallax

- **GIVEN** the hero section is in the viewport
- **THEN** a full-width parallax background image is visible
- **AND** the headline "i am Professional Photographer" is displayed
- **AND** "Professional" is highlighted in brand red
- **AND** a "view portfolio" button with brand red background is visible
- **AND** social links (Instagram, Twitter, Facebook) are visible at the bottom

#### Scenario: Portfolio filter works

- **GIVEN** the portfolio section is scrolled into view
- **THEN** 6 portfolio items are visible in a masonry grid
- **AND** filter tabs "All", "Wedding", "Motion", "Portrait", "Fashion" are visible
- **WHEN** the user clicks the "Wedding" filter
- **THEN** only wedding-tagged portfolio items are shown
- **WHEN** the user clicks "All"
- **THEN** all portfolio items are shown again

#### Scenario: Services section shows 4 items

- **GIVEN** the services section is scrolled into view
- **THEN** 4 service cards are visible in a row
- **AND** each card has an icon, heading, and description

#### Scenario: Pricing section shows 3 tiers

- **GIVEN** the pricing section is scrolled into view
- **THEN** 3 pricing cards are visible: "Wedding" ($76), "Studio" ($86), "Fashion" ($96)
- **AND** each card has a feature list with checkmarks and crosses
- **AND** each card has a "Book Now" button

#### Scenario: About section renders

- **GIVEN** the about section is scrolled into view
- **THEN** the heading "Let's Introduce About Myself" is visible
- **AND** description paragraphs are shown
- **AND** a "learn more" CTA button is visible

#### Scenario: Testimonials carousel works

- **GIVEN** the testimonials section is scrolled into view
- **THEN** the heading "happy clients says" is visible
- **AND** at least one testimonial with photo, name, title, and quote is shown
- **AND** carousel navigation is present

#### Scenario: Blog section shows 3 posts

- **GIVEN** the blog section is scrolled into view
- **THEN** 3 blog cards are visible in a row
- **AND** each card has a thumbnail, category, date, heading, excerpt, and "read more" link

#### Scenario: Footer renders correctly

- **GIVEN** the footer is in the viewport
- **THEN** "About Us", "Newsletter", and "Follow Us" sections are visible
- **AND** a newsletter email input and submit button are present
- **AND** social media icon links are visible
- **AND** a link to "https://www.componentdock.com/" is present

#### Scenario: Responsive layout adapts

- **GIVEN** the user is on a mobile viewport (width < 768px)
- **THEN** the navbar collapses to a hamburger menu
- **AND** service/pricing/blog columns stack vertically
- **AND** the portfolio grid becomes single-column
- **AND** the footer columns stack vertically

#### Scenario: Parallax effect on banner

- **GIVEN** the hero banner section exists
- **THEN** it has a parallax background image effect
- **AND** text overlays are readable with sufficient contrast

## Verification checklist

- [ ] All 9 sections render in correct page order
- [ ] Brand color `#f81c1c` used for buttons and accents
- [ ] Playfair Display font loaded for headings
- [ ] Roboto font loaded for body text
- [ ] Parallax background on hero banner with dark overlay
- [ ] Portfolio section with 6 masonry-style items and filter tabs
- [ ] Portfolio filtering works for all 5 categories
- [ ] Services section shows 4 items in a row
- [ ] Pricing table shows 3 tiers with checkmarks/crosses
- [ ] About section with overlapping image layout
- [ ] Testimonials carousel with photo + quote layout
- [ ] Blog section with 3 cards (image, meta, title, excerpt)
- [ ] Footer with About/Newsletter/Social columns
- [ ] Newsletter form has email input + submit
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Responsive: hamburger menu on mobile, stacked columns
- [ ] Placeholder images via `picsum.photos/seed/snapfocus-<n>/...`
- [ ] Nav items separated by `/` decorative character
- [ ] Social links in hero banner (Instagram, Twitter, Facebook)
