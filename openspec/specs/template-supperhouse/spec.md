# Template: Supperhouse (Restaurant Landing)

## Purpose

Recreation of the ColorLib **Restaurant** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page restaurant landing site.

- **Source template:** ColorLib Restaurant
- **Source slug:** `restaurant`
- **Preview URL:** https://preview.colorlib.com/theme/restaurant/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/restaurant-free-restaurant-website-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **No ColorLib references in app code.** Provenance lives only in this spec and TEMPLATES.md.

## Design Tokens (extracted from preview CSS + DOM)

| Token                    | Value                                                                                            | Notes                                                               |
| ------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| Brand color              | `#f42f2c`                                                                                        | Red — primary button, active nav links, accents, footer number text |
| Font family              | `"Poppins", sans-serif`                                                                          | Google Fonts, weights 300/400/500/600/700                           |
| Body text color          | `#777`                                                                                           | Light grey for paragraphs                                           |
| Heading color            | `#222`                                                                                           | Dark charcoal for h1–h6                                             |
| Body font weight         | 300                                                                                              | Light weight for body text                                          |
| Heading font weight      | 600                                                                                              | Semi-bold for headings                                              |
| Primary button           | bg `#f42f2c`, color `#fff`, `border-radius: 25px`, `text-transform: uppercase`, padding `0 30px` | Pill-shaped red CTA                                                 |
| Header button hover      | `background: transparent`, `border: 1px solid #fff`, `color: #fff`                               | Ghost inversion on hero                                             |
| Nav active color         | `#f42f2c`                                                                                        | Active/hover link color                                             |
| Nav link                 | `font-size: 12px`, `text-transform: uppercase`, `font-weight: 400`                               | Small caps nav                                                      |
| Section gap              | `120px` vertical padding                                                                         | `section-gap` class                                                 |
| Banner background        | Dark wood texture image                                                                          | Full-width hero, left-aligned text                                  |
| Video section background | Dark food prep image                                                                             | Centered video play button + text overlay                           |
| Team area background     | `#f9f9ff`                                                                                        | Very light blue-grey                                                |
| Footer background        | `#222`                                                                                           | Dark charcoal                                                       |
| Footer link color        | `#f42f2c`                                                                                        | Red accent                                                          |
| Footer social icons      | bg `#111`, hover bg `#f42f2c`                                                                    | Dark squares, red on hover                                          |
| Blog date badge          | bg `#000`, color `#fff`                                                                          | Black pill date label                                               |
| Contact area             | White background, left map + right form                                                          | Split layout                                                        |
| Banner headline size     | `60px`                                                                                           | Large white headline                                                |
| Banner subtitle          | `text-white text-uppercase`, `letter-spacing: 3px`                                               | Spaced uppercase                                                    |
| Logo                     | Red "M." style mark                                                                              | Will replace with template name text                                |
| Header scroll effect     | `rgba(34,34,34,0.9)` dark translucent bg with box-shadow                                         | Sticky header on scroll                                             |
| Dish card hover          | Image scale+rotate `rotate(5deg) scale(1.2)`, heading color change to `#f42f2c`                  | Zoom effect                                                         |
| Blog card hover          | Image `scale(1.2)`, heading color to `#f42f2c`                                                   | Same zoom pattern                                                   |
| Team hover overlay       | `rgba(244,47,44,0.8)` red tint with icons + name                                                 | Full red overlay                                                    |

## Section Order (from preview DOM — 1:1 match required)

1. **Header / Navbar** — logo left, nav links right (Home, Dish, Chefs, Blog, Contact). Sticky scroll effect. Mobile hamburger menu.
2. **Banner / Hero** — full-width background image (dark wood + plate), left-aligned white text: subtitle "Wide Options of Choice", heading "Delicious Recipes", body paragraph, "Check Our Menu" CTA button (red pill). Scallop/wave SVG divider at bottom.
3. **Top Rated Dishes** — centered title + subtitle, 3-column card grid (image + heading + description per card). White background.
4. **Video / Promo** — full-width background image, centered play button (YouTube lightbox), white heading + subtitle overlay.
5. **Features** — 4-column icon grid (Breakfast, Lunch, Dinner, Buffet), each with icon image + heading + text. White bg with bottom border.
6. **Featured Food Menus** — centered title, carousel/slider showing dish descriptions with CTA button. White bg.
7. **Our Chefs / Team** — light blue-grey bg (`#f9f9ff`), 3-column team cards with red hover overlay showing name + role + social icons.
8. **Blog** — centered title, 4-column blog cards (image + date badge + title + excerpt + likes/comments meta).
9. **Contact** — split layout: left side = map placeholder, right side = form (name, email, message, send button).
10. **Footer** — dark bg (`#222`), 3-column: About Us, Contact Us (phone numbers in red), Newsletter (email input + arrow button). Bottom bar: copyright text + social icon squares.

## Gherkin Scenarios

### Scenario 1: Header renders with navigation links

```gherkin
Given the user loads the Supperhouse page
Then the header displays a logo and navigation links
And the navigation links include "Home", "Dish", "Chefs", "Blog", "Contact"
And the active link is styled in brand red (#f42f2c)
```

### Scenario 2: Hero banner displays correctly

```gherkin
Given the user loads the Supperhouse page
Then the hero section shows a background image
And the hero displays a subtitle "Wide Options of Choice"
And the hero displays a heading "Delicious Recipes"
And the hero displays a paragraph of descriptive text
And the hero displays a "Check Our Menu" CTA button
And the CTA button is pill-shaped with brand red background
```

### Scenario 3: Top Rated Dishes section shows 3 dish cards

```gherkin
Given the user loads the Supperhouse page
Then the Top Rated Dishes section shows a centered title and subtitle
And 3 dish cards are displayed in a 3-column grid
And each dish card shows an image, heading, and description
And hovering a dish card scales and rotates the image
```

### Scenario 4: Video section with play button

```gherkin
Given the user loads the Supperhouse page
Then the video section displays a background image
And a play button is centered over the background
And a white heading and subtitle appear below the play button
```

### Scenario 5: Features section shows 4 service icons

```gherkin
Given the user loads the Supperhouse page
Then the features section displays 4 feature cards
And each feature card shows an icon, heading, and description
And the 4 features are "Refreshing Breakfast", "Awesome Lunch", "Soothing Dinner", "Rich Quality Buffet"
```

### Scenario 6: Featured Food Menus carousel

```gherkin
Given the user loads the Supperhouse page
Then the Featured Food Menus section shows a centered title and subtitle
And a carousel displays dish items with descriptions and a CTA button
```

### Scenario 7: Team / Chefs section with hover overlay

```gherkin
Given the user loads the Supperhouse page
Then the Chefs section has a light blue-grey background
And 3 chef cards are displayed in a 3-column grid
And each chef card shows a photo, name, and role
And hovering a chef card reveals a red overlay with name, role, and social icons
```

### Scenario 8: Blog section with 4 posts

```gherkin
Given the user loads the Supperhouse page
Then the Blog section shows a centered title and subtitle
And 4 blog cards are displayed in a 4-column grid
And each blog card shows an image, date badge, title, excerpt, and like/comment counts
```

### Scenario 9: Contact section with form

```gherkin
Given the user loads the Supperhouse page
Then the Contact section displays a split layout
And the left side shows a map placeholder
And the right side shows a contact form with name, email, and message fields
And the form has a "Send Message" submit button
```

### Scenario 10: Footer with newsletter and social links

```gherkin
Given the user loads the Supperhouse page
Then the footer has a dark background
And the footer shows 3 columns: About Us, Contact Us, and Newsletter
And the Contact Us column displays phone numbers in brand red
And the Newsletter column has an email input and subscribe button
And the footer bottom shows copyright text and social icon links
And the copyright text includes a link to Component Dock
```

### Scenario 11: Sticky header on scroll

```gherkin
Given the user loads the Supperhouse page
When the user scrolls down past the hero
Then the header background becomes dark and translucent
And a box-shadow appears on the header
```

## Verification Checklist

- [ ] All 10 sections render in correct order (Header → Hero → Dishes → Video → Features → Menus → Chefs → Blog → Contact → Footer)
- [ ] Brand color `#f42f2c` used for CTA buttons, active nav, accents, and footer phone numbers
- [ ] Font family is Poppins (loaded via Google Fonts link in index.html)
- [ ] CTA button is pill-shaped (border-radius ~25px), uppercase, red
- [ ] Hero has background image, left-aligned white text, correct heading hierarchy
- [ ] Dish cards hover: image scale+rotate, heading color change
- [ ] Team cards hover: red overlay with name + role
- [ ] Blog cards: date badge (black bg, white text), image hover scale
- [ ] Contact: split map + form layout, form fields with proper placeholders
- [ ] Footer: dark bg, 3-column layout, newsletter input, social icons
- [ ] Footer copyright links to `https://www.componentdock.com/` branded "Component Dock"
- [ ] No ColorLib references in any app source file
- [ ] Mobile responsive: nav collapses to hamburger, grid stacks vertically
- [ ] Sticky header scroll effect with dark translucent background
