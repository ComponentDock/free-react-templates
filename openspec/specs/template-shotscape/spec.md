# Template: ShotScape (Photography)

## Purpose

Recreation of the ColorLib **Phozogy** photography studio template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source:** https://colorlib.com/wp/template/phozogy/
- **Preview:** https://preview.colorlib.com/theme/phozogy/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/phozogy-free-template.jpg
- **New name:** `shotscape` (apps/shotscape, @free-react-templates/shotscape)
- **Category:** Photography
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from the live preview CSS (https://preview.colorlib.com/theme/phozogy/css/style.css):

| Token | Value | Notes |
|-------|-------|-------|
| Primary / Brand | `#009603` | Green — buttons, nav underline, search box bg |
| Heading color | `#111111` | All h1–h6 default |
| Body text | `#666666` | Paragraphs |
| Body text alt | `#444444` | Secondary text |
| Light text | `#c4c4c4` | Footer paragraphs, copyright |
| Footer bg | `#000606` | Near-black |
| Footer border | `#181d1d` | Copyright separator line |
| Section bg light | `#f5f5f5` | Light gray sections |
| White bg | `#ffffff` | Cards, service items |
| Heading font | `"Quantico", sans-serif` | All headings + nav links + buttons |
| Body font | `"Open Sans", sans-serif` | Paragraphs, body text |
| Button radius | `0` (square/rectangular) | No border-radius on primary-btn |
| Button padding | `14px 30px` | primary-btn |
| Button text | Uppercase, 700 weight, Quantico | primary-btn, site-btn |
| Card shadow | `0px 10px 25px rgba(206,206,206,0.5)` | Service items |
| Nav link underline | `3px #009603` bottom border | On active/hover |
| Search box | 50×50px, #009603 bg, white icon | Top-right header |
| Dropdown bg | `#111111` | Nav dropdown |
| Hero height | `900px` | Full-viewport slider |
| Hero overlay | Dark image overlay | Text centered white on dark bg image |
| Portfolio hover overlay | Semi-transparent dark | Green-ish overlay on hover |

## Section Structure (from live preview DOM)

1. **Header/Navbar** — Logo (left), horizontal nav links (Home, About, Services, Pricing, Portfolio, Blog, Pages dropdown, Contact), search icon (green square, right)
2. **Hero Slider** — Full-width OwlCarousel slider, 900px height, centered text (h2 "Photography Studio" + paragraph + "Contact us" CTA button), dark image backgrounds
3. **Services** — 3-column grid: Shooting, Videos, Editing. Each card has image on top, title, description paragraph. White card with box shadow, overlapping hero by -70px (negative margin)
4. **Categories** — Section title "Categories" + "View all" button on right. Carousel of category cards (Animal, Natural, Portrait, etc.) with image + category name + picture count. Transparent/overlay text on image
5. **Portfolio** — "Our latest works" title. Filter tabs (All, Fashion, Lifestyle, Natural, Wedding, Videos). Masonry-style grid with hover effects (dark overlay, plus icon, title "COLORS SPEAK", category label). Mix of large-width, large-height, and regular items
6. **Footer** — Near-black bg (#000606). 4 columns: About (logo + description + social icons), Instagram (3 thumbnails), Quick Links (2 columns), Subscribe (email form). Copyright bar at bottom

## Gherkin Requirements

### Navbar
```gherkin
Scenario: Navbar renders all navigation links
  Given the user loads the page
  Then the navbar displays links: Home, About, Services, Pricing, Portfolio, Blog, Pages, Contact
  And a logo image is visible on the left
  And a green search icon button is visible on the right

Scenario: Pages dropdown reveals sub-links on hover
  Given the user hovers over the "Pages" nav link
  Then a dropdown appears with Gallery, Portfolio Details, Blog Details links

Scenario: Nav link hover shows green underline
  Given the user hovers over any nav link
  Then a 3px green (#009603) underline appears beneath the link
```

### Hero Slider
```gherkin
Scenario: Hero slider displays with heading and CTA
  Given the page loads
  Then a full-width hero section is visible
  And it displays the heading "Photography Studio"
  And a descriptive paragraph is shown below the heading
  And a "Contact us" green button is visible

Scenario: Hero slider auto-rotates between slides
  Given the hero slider is visible
  When 5 seconds pass
  Then the slider transitions to the next slide
```

### Services Section
```gherkin
Scenario: Services section shows three service cards
  Given the user scrolls to the services section
  Then 3 service cards are displayed: Shooting, Videos, Editing
  And each card has an image, title, and description
  And cards have white background with box shadow

Scenario: Services section overlaps hero
  Given the services section renders
  Then the services container has negative top margin overlapping the hero
```

### Categories Section
```gherkin
Scenario: Categories section displays with title and view all button
  Given the user scrolls to the categories section
  Then "Categories" heading is displayed
  And a "View all" green button is visible on the right

Scenario: Category cards show image and count
  Given the categories slider is visible
  Then each category card shows a background image, category name, and picture count
```

### Portfolio Section
```gherkin
Scenario: Portfolio shows filterable grid
  Given the user scrolls to the portfolio section
  Then "Our latest works" heading is displayed
  And filter tabs are shown: All, Fashion, Lifestyle, Natural, Wedding, Videos
  And a grid of portfolio items is displayed

Scenario: Portfolio items reveal overlay on hover
  Given the user hovers over a portfolio item
  Then a dark semi-transparent overlay appears
  And a plus icon is centered on the item
  And the item title and category label appear

Scenario: Clicking a filter tab filters portfolio items
  Given the user clicks the "Fashion" filter tab
  Then only fashion-category items are visible
  And the "All" tab is no longer highlighted
```

### Footer
```gherkin
Scenario: Footer displays four columns
  Given the user scrolls to the footer
  Then an about column with logo, description, and social icons is visible
  And an Instagram column with 3 thumbnail images is visible
  And a Quick Links column with navigation links is visible
  And a Subscribe column with email input and send button is visible

Scenario: Footer has dark background
  Given the footer renders
  Then the background color is near-black (#000606)
  And text color is light gray (#c4c4c4)

Scenario: Copyright bar at bottom
  Given the footer renders
  Then a copyright line is shown below a separator border
  And it includes "Component Dock" link
```

## Verification Checklist

- [ ] Navbar: logo, all 8 nav links, search icon, Pages dropdown
- [ ] Hero: full-width slider, heading, paragraph, CTA button
- [ ] Services: 3 cards with images, titles, descriptions, box shadows
- [ ] Categories: section title, view-all button, category slider
- [ ] Portfolio: title, filter tabs, masonry grid, hover overlays
- [ ] Footer: 4 columns, dark bg, social icons, subscribe form, copyright
- [ ] Design tokens: Quantico headings, Open Sans body, #009603 brand green, #000606 footer
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] public/CNAME: shotscape.free.componentdock.com
- [ ] Package name: @free-react-templates/shotscape
