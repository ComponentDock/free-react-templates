# Template: Trekcraft (Travel Agency)

## Purpose

Recreation of the ColorLib "Travelix" template as a modern React 19 + Vite + Tailwind 4 + TypeScript single-page travel agency site.

- **Source template:** [ColorLib Travelix](https://colorlib.com/wp/template/travelix/)
- **Live preview:** https://preview.colorlib.com/theme/travelix/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/travelix-free-template.jpg
- **New name:** `trekcraft` (app: `apps/trekcraft`, package: `@free-react-templates/trekcraft`)
- **Surge URL:** `https://trekcraft.free.componentdock.com`

## Design Tokens

| Token                    | Value                                         | Notes                                                                    |
| ------------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| Font family (body)       | `Open Sans` (300–800)                         | Google Fonts `<link>`                                                    |
| Font family (display)    | `Playfair Display` or `Georgia`               | Fallback for decorative "Beyond" font (custom font not freely available) |
| Brand primary (orange)   | `#fa9e1b`                                     | CTA buttons, prices, accents, active states                              |
| Brand secondary (purple) | `#8d4fff`                                     | Gradient partner, nav arrows gradient end                                |
| Brand dark (deep purple) | `#31124b` / `#350a4e`                         | Hero slider overlay, dark backgrounds                                    |
| Gradient                 | `linear-gradient(to right, #fa9e1b, #8d4fff)` | Buttons, nav arrows, accent borders                                      |
| Text dark                | `#2d2c2c`                                     | Headings, body text                                                      |
| Text muted               | `#929191`                                     | Paragraph text                                                           |
| Text light               | `#a5a5a5`                                     | Body default color                                                       |
| Body background          | `#FFFFFF`                                     | Page background                                                          |
| Button radius            | `27px` (pill)                                 | Rounded search/CTA buttons                                               |
| Card radius              | `18px`                                        | Offer cards, rounded containers                                          |
| Nav arrow                | SVG with gradient fill                        | Orange-to-purple arrow navigation                                        |
| Star rating              | `#fa9e1c`                                     | Star icons for reviews                                                   |

## Sections (order preserved 1:1)

### 1. Top Bar

- Thin bar with phone number, social icons (Pinterest, Facebook, Twitter, Dribbble, Behance, LinkedIn), Login/Register links.

### 2. Main Navigation

- Logo (image + "travelix" text) on left.
- Nav links: home, about us, offers, news, contact.
- Search icon + expandable search input on right.
- Hamburger menu for mobile.

### 3. Hero Slider

- Full-width image carousel (3 slides) with centered text overlay.
- Each slide: background image, "discover" + "the world" headline, "explore now" gradient button.
- Custom SVG arrow navigation (orange-to-purple gradient fill).
- Dark purple overlay `rgba(54, 19, 84, 0.6)` on slides.

### 4. Search Panel

- Below hero, overlapping/sitting on the hero bottom.
- 6 tabbed search categories: hotels (active), car rentals, flights, trips, cruises, activities.
- Each tab shows a form: destination, check-in, check-out, adults (dropdown), children (dropdown), search button.
- Active tab: white background with gradient bottom border.
- Search button: pill-shaped gradient button.

### 5. Intro / Best Tours

- White background.
- Title: "We have the best tours" + subtitle text.
- 3-column grid of tour cards. Each card:
  - Full-background image with dark overlay.
  - Date range at top.
  - "see more" gradient button.
  - Destination name, price ("From $1450"), star rating at bottom.

### 6. CTA Slider

- Full-width section with background image + dark overlay.
- Centered testimonial/package slider: title, star rating, description text, "book now" gradient button.
- Custom SVG arrow navigation.

### 7. Best Offers

- White background.
- Title: "the best offers with rooms".
- 2-column grid (4 cards total, 2 rows). Each card:
  - Left: image with name overlay.
  - Right: price ("$70 per night"), star rating, description, amenity icons, "read more" link.

### 8. Testimonials

- White background with gradient top border line.
- Title: "what our clients say about us".
- Testimonial slider: circular author photo, backpack icon, author name + date, quote title + text.

### 9. Trending Destinations

- White background.
- 4-column grid of trending items (8 total, 2 rows). Each item:
  - Thumbnail image on left, title + price + location on right.

### 10. Contact

- Full-width section with background image.
- 2-column: left = empty space/image area, right = contact form.
- Form: Name, E-mail, Subject, Message textarea, "send message" gradient button.

### 11. Footer

- White background, 4-column layout:
  1. Logo + about text + social icons.
  2. Blog posts (3 items with thumbnail, title, date).
  3. Tags cloud (design, fashion, music, etc.).
  4. Contact info (phone, address, email).

### 12. Copyright Bar

- Bottom bar with copyright text + nav links.
- MUST link to `https://www.componentdock.com/` (branded "Component Dock").

## Requirements

### Requirement: Top bar SHALL display contact and social info

The system SHALL ensure that top bar display contact and social info.

#### Scenario: Top bar renders on page load

- **WHEN** the user loads the page
- **THEN** a thin top bar SHALL show the phone number
- **AND** 6 social media icons SHALL be visible
- **AND** Login/Register links SHALL be present

### Requirement: Navigation SHALL provide site access

The system SHALL ensure that navigation provide site access.

#### Scenario: Navigation renders on page load

- **WHEN** the user loads the page
- **THEN** the logo and "trekcraft" text SHALL be visible
- **AND** nav links (home, about us, offers, news, contact) SHALL be present
- **AND** a search icon SHALL be visible
- **AND** a hamburger menu SHALL appear on mobile viewports

### Requirement: Hero slider SHALL display travel imagery

The system SHALL ensure that hero slider display travel imagery.

#### Scenario: Hero renders on page load

- **WHEN** the user loads the page
- **THEN** a full-width hero carousel SHALL render with a background image
- **AND** "discover the world" headline SHALL be centered
- **AND** "explore now" gradient button SHALL be present
- **AND** arrow navigation SHALL be available

#### Scenario: Slide navigation

- **WHEN** the user clicks next/previous arrows or dot indicators
- **THEN** the slider SHALL transition to the corresponding slide

### Requirement: Search panel SHALL allow booking search

The system SHALL ensure that search panel allow booking search.

#### Scenario: Search panel renders below hero

- **WHEN** the user scrolls to the search panel
- **THEN** 6 category tabs SHALL be visible (hotels, car rentals, flights, trips, cruises, activities)

#### Scenario: Tab switching

- **WHEN** the user clicks a tab
- **THEN** that tab SHALL become active and show its search form
- **AND** the hotels tab SHALL be active by default with destination, dates, guests fields

### Requirement: Best tours section SHALL show destinations

The system SHALL ensure that best tours section show destinations.

#### Scenario: Tour cards render

- **WHEN** the user scrolls to the intro section
- **THEN** "We have the best tours" heading SHALL be displayed
- **AND** 3 tour destination cards SHALL be shown with images, dates, prices, and ratings

### Requirement: CTA slider SHALL showcase packages

The system SHALL ensure that cta slider showcase packages.

#### Scenario: CTA section renders

- **WHEN** the user scrolls to the CTA section
- **THEN** a background image section with package slider SHALL be visible
- **AND** each slide SHALL show title, rating, description, and "book now" button

### Requirement: Best offers SHALL display room deals

The system SHALL ensure that best offers display room deals.

#### Scenario: Offer cards render

- **WHEN** the user scrolls to the offers section
- **THEN** 4 offer cards SHALL be displayed in a 2-column grid
- **AND** each card SHALL show image, name, price, rating, description, and amenity icons

### Requirement: Testimonials section SHALL show reviews

The system SHALL ensure that testimonials section show reviews.

#### Scenario: Testimonial cards render

- **WHEN** the user scrolls to testimonials
- **THEN** testimonial cards SHALL be visible with author photo, name, date, quote, and text

### Requirement: Trending section SHALL show popular destinations

The system SHALL ensure that trending section show popular destinations.

#### Scenario: Trending items render

- **WHEN** the user scrolls to trending
- **THEN** 8 trending destination items SHALL be displayed in a 4-column grid
- **AND** each item SHALL show thumbnail, name, price, and location

### Requirement: Contact section SHALL provide inquiry form

The system SHALL ensure that contact section provide inquiry form.

#### Scenario: Contact form renders

- **WHEN** the user scrolls to contact
- **THEN** a contact form SHALL be visible with Name, Email, Subject, Message fields
- **AND** a "send message" button SHALL be present

### Requirement: Footer SHALL provide site information

The system SHALL ensure that footer provide site information.

#### Scenario: Footer renders

- **WHEN** the user scrolls to the footer
- **THEN** 4 columns SHALL be visible (about, blog, tags, contact)
- **AND** the copyright bar SHALL show nav links
- **AND** a link to Component Dock SHALL be present

## Verification Checklist

- [ ] Top bar: phone, 6 social icons, login/register
- [ ] Main nav: logo, 5 nav links, search icon, hamburger
- [ ] Hero slider: background images, "discover the world" headline, gradient button, arrows
- [ ] Search panel: 6 tabs, hotel form active by default, gradient search button
- [ ] Intro/Best Tours: title, 3 tour cards with images, dates, prices, ratings
- [ ] CTA slider: background image, package slides with title/rating/text/button
- [ ] Best Offers: 4 cards in 2x2 grid, image + details per card
- [ ] Testimonials: slider with author photo, quote, name, date
- [ ] Trending: 8 items in 4-column grid with thumbnails
- [ ] Contact: form with 4 fields + send button, background image
- [ ] Footer: 4-column layout (about, blog, tags, contact)
- [ ] Copyright bar: nav links + Component Dock link
- [ ] Responsive design (mobile hamburger, stacked columns)
- [ ] No ColorLib references in app code
- [ ] Placeholder images via `picsum.photos/seed/trekcraft-<n>/`
- [ ] Open Sans + display font loaded via Google Fonts
- [ ] Brand tokens in `@theme` / `index.css`
- [ ] `public/CNAME` set to `trekcraft.free.componentdock.com`
- [ ] `homepage` set to `https://trekcraft.free.componentdock.com`
