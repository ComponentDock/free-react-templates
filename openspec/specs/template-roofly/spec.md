# Template: Roofly (Real Estate Listing)

## Purpose

Recreation of the ColorLib "Myhome" template as a modern React 19 + Vite + Tailwind 4 + TypeScript single-page real estate listing site.

- **Source template:** [ColorLib Myhome](https://colorlib.com/wp/template/myhome/)
- **Live preview:** https://preview.colorlib.com/theme/myhome/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/myhome-free-template.jpg
- **New name:** `roofly` (app: `apps/roofly`, package: `@free-react-templates/roofly`)
- **Surge URL:** `https://roofly.free.componentdock.com`

## Design Tokens

| Token | Value | Notes |
|---|---|---|
| Font family | `Montserrat` (300–900) | Google Fonts `<link>` |
| Brand primary (purple) | `#55407d` | Header bar, map section overlay, accent |
| Brand dark (deep purple) | `#1e1332` | Footer content background, dark sections |
| Accent green | `#adc867` | Buttons, tags, selection, active states |
| Accent salmon | `#ffa07f` | Link hover underline |
| Text dark | `#2b2e35` | Headings, body text |
| Text muted | `#a2b0bf` | Paragraph text |
| Body background | `#FFFFFF` | Page background |
| Testimonials background | `#f1f6fc` | Light blue-grey tint |
| Footer bar background | `#110a1f` | Darkest purple-black |
| Button radius | `0` (sharp/flat) | Green submit buttons, no rounding |
| Tag badge radius | `0` (sharp) | Property type/status badges |

## Sections (order preserved 1:1)

### 1. Top Header Bar
- Full-width bar, `#55407d` purple background.
- Left: contact info (phone, address, email) with icon + text.
- Right: social icons (Pinterest, Facebook, Twitter, Dribbble, Behance) + Login/Register links.

### 2. Main Header
- White background.
- Left: logo text "roofly" (bold "ROOF" in dark, "LY" in accent green).
- Center: nav links — Home, About us, Listings, News, Contact.
- Right: "submit listing" green button.
- Hamburger menu icon for mobile.

### 3. Hero Slider
- Full-width image carousel (3 slides) with property headline and price tag overlay.
- Each slide: background image with dark overlay, headline (e.g. "1243 Main Avenue Left Town"), green price tag (e.g. "$ 482,900").
- Right arrow navigation.

### 4. Search Form
- Below slider, centered on white background.
- Title: "Find your home".
- Inline form: 3 text inputs (Property type, No rooms, Location) + green "submit listing" button.

### 5. Featured Properties
- White background, centered section title ("the best deals" subtitle + "Featured Properties" heading).
- 3-column grid of property listing cards. Each card:
  - Image with overlay tags (e.g. "house", "for sale") and price badge.
  - Below image: location with pin icon, property stats (sqft, beds, baths, garages).

### 6. Map Section
- Split layout: left = map placeholder, right = purple overlay sidebar.
- Purple sidebar (`#55407d`) with curved SVG overlay shape.
- Title: "Choose a location" with radio-button city list (Downtown Miami, Chicago, Manhattan, etc.).

### 7. Today's Hot Deal
- White background, section title ("the best deals" + "Today's Hot Deal").
- 2-column: left = large property image with tags; right = deal details (price, title, location, description, agent info + large stat icons).

### 8. Testimonials
- `#f1f6fc` light blue-grey background.
- 2-column: left = full-height background image with overlay; right = section title + testimonial slider.
- Each testimonial: quote headline, paragraph text, author name + "Client" label.

### 9. Footer
- Dark purple `#1e1332` background.
- 4-column layout:
  1. Logo + about text + social icons + "submit listing" button.
  2. Information (phone, address, email) + Useful Links.
  3. Property Types list.
  4. Featured Property mini-card.

### 10. Footer Bar
- Darkest `#110a1f` background.
- Copyright text (left) + footer nav links (right): Home, About us, Listings, News, Contact.
- MUST link to `https://www.componentdock.com/` (branded "Component Dock").

## Gherkin Requirements

### Feature: Roofly — Real Estate Listing Template

#### Scenario: Header displays contact information and navigation
- GIVEN the user loads the page
- THEN the top bar shows phone, address, email with icons
- AND social media icons are visible
- AND Login/Register links are present
- AND the main header shows logo, nav links, and "submit listing" button

#### Scenario: Hero slider displays property highlights
- GIVEN the user loads the page
- THEN a full-width hero section is visible with a property headline
- AND a price tag is displayed on the slide
- AND navigation arrows are available to cycle through slides

#### Scenario: Search form allows property filtering
- GIVEN the user views the search section
- THEN three input fields are visible (Property type, Rooms, Location)
- AND a "submit listing" button is present
- WHEN the user clicks submit
- THEN the form does not navigate away (SPA behavior)

#### Scenario: Featured properties grid shows listings
- GIVEN the user scrolls to featured properties
- THEN 3 property cards are displayed in a grid
- AND each card shows an image, tags, price, location, and stats

#### Scenario: Map section shows location selector
- GIVEN the user scrolls to the map section
- THEN a map placeholder is visible
- AND a purple sidebar shows city radio buttons
- WHEN the user selects a city
- THEN the radio button becomes active

#### Scenario: Hot deal section highlights a featured listing
- GIVEN the user scrolls to the hot deal section
- THEN a large property image is shown on the left
- AND deal details (price, title, description, agent) are shown on the right

#### Scenario: Testimonials section displays client reviews
- GIVEN the user scrolls to testimonials
- THEN a testimonial slider is visible with quote, text, and author
- AND navigation allows cycling through testimonials

#### Scenario: Footer provides site information and links
- GIVEN the user scrolls to the footer
- THEN four columns are visible (about, info, types, featured property)
- AND the footer bar shows copyright and nav links
- AND a link to Component Dock is present

## Verification Checklist

- [ ] Top header bar: purple background, contact info, social icons, login/register
- [ ] Main header: logo, nav, "submit listing" button, hamburger for mobile
- [ ] Hero slider: background images, headlines, price tags, navigation arrows
- [ ] Search form: 3 inputs + submit button, centered layout
- [ ] Featured Properties: 3-column card grid with tags, price, location, stats
- [ ] Map Section: map placeholder + purple sidebar with city radio buttons
- [ ] Hot Deal: 2-column layout with image and deal details + agent info
- [ ] Testimonials: image + slider with quotes and author attribution
- [ ] Footer: 4-column dark layout with about, info, types, featured property
- [ ] Footer bar: copyright + nav links + Component Dock link
- [ ] Responsive design (mobile hamburger menu, stacked columns)
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Placeholder images via `picsum.photos/seed/roofly-<n>/`
- [ ] Montserrat font loaded via Google Fonts
- [ ] Brand tokens in `@theme` / `index.css`
- [ ] `public/CNAME` set to `roofly.free.componentdock.com`
- [ ] `homepage` set to `https://roofly.free.componentdock.com`
