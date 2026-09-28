# Template: Cookwell (Restaurant / Food)

## Purpose

Recreation of the ColorLib "Luto" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `luto`
- **Source URL:** https://colorlib.com/wp/template/luto/
- **Preview URL:** https://preview.colorlib.com/theme/luto/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/luto-free-template.jpg
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/cookwell`
- **Surge target:** `cookwell.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) at https://preview.colorlib.com/theme/luto/

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#FF6107` | Buttons, links, accents, social icons, selection highlight |
| Dark purple | `#302939` | Info bar background, intro section |
| Dark gray | `#303030` | Footer background, slider overlays |
| Body bg | `#FBFBFB` | Main page background |
| Muted bg | `#f7f7f7` | Alternate section backgrounds |
| Heading text | `#404044` | All headings (h1–h6) |
| Body text | `#7d7d7d` | Paragraph body copy |
| Muted text | `#969696` | Footer copyright, secondary text |
| Muted input | `#636363` | Input placeholder text |
| White text | `#FFFFFF` / `rgba(255,255,255,0.7)` | On dark backgrounds, slider overlays |
| Font primary | `Poppins`, Arial, sans-serif | Body text, paragraphs, spans |
| Font secondary | `Lora`, Georgia, serif | Headings, nav brand, buttons, menu |
| Button shape | Pill (border-radius: 30px) | All CTA buttons |
| Button primary bg | `#FF6107` | Primary CTA buttons |
| Button text | `#FFFFFF` | White on brand orange |
| Button font | `Lora`, serif, uppercase, letter-spacing: 2px | Button labels |
| Button outline | 2px solid #fff, transparent bg, radius 0 | "Watch Video" style buttons |
| Subscribe button | border 2px solid #FF6107, radius 0 | Newsletter subscribe |
| Overlay | `rgba(0,0,0,0.4)` / `#303030` | Hero slider and parallax overlays |

## Section Structure (in page order)

### 1. Navbar
- Logo with cutlery icon + brand name "Cookwell" (split coloring: dark + light)
- Sticky/fixed on scroll with transparent → dark transition
- Hamburger menu → full-screen dark overlay (`rgba(0,0,0,0.8)`) with centered nav links
- Nav links: Home, Menus, Specialties, Reservation, Blog, About Us, Contact
- Search input in mobile overlay

### 2. Hero Slider (FlexSlider)
- Full-width slider with 4 slides, each with parallax background image + dark overlay (`#303030`)
- Centered text content: cutlery icon, headline (e.g. "Special & Fresh Food"), description, "Book a table" CTA button
- CTA button: transparent bg, white border, white text, pill shape (30px radius)
- Mouse scroll indicator at bottom (animated wheel icon)
- Slides cycle automatically

### 3. Info Bar
- 4-column layout: Address, Opening Time, Phone, Email
- Dark purple background (`#302939`)
- Each column: white icon, white heading, white/light description text
- Responsive: stacks on mobile

### 4. About Section
- Two-column layout: left text, right images
- Left: "Welcome to Cookwell" subtitle, heading "Taste a delicious food here...", description paragraph
- Right: 2 stacked/offset food images
- White/light background

### 5. Specialties Grid
- Centered heading with cutlery icon: "Our Delicious Specialties"
- 3-column grid of dish cards
- Each card: background-image dish photo, heading below
- Dish names: e.g. "Strawberry Dish", "Pizza with Strawberries", "Grilled Beef"
- Hover effects on dish images

### 6. Introduction/Video Section
- Full-width parallax background image with dark overlay (`#303030`)
- "Foods you love to taste" heading
- Description paragraph
- "Watch Video" button: outlined style (white border, transparent bg, play icon)

### 7. Specialties Grid (repeated)
- Same structure as section 5, additional 3 dish cards

### 8. Testimonials
- Full-width parallax background with dark overlay
- "Our Customer Says" heading (centered)
- Carousel/slider with 3 testimonial items
- Each: centered blockquote with quote text + author name ("— Name")
- Navigation dots/arrows

### 9. Menu (Tabbed)
- Centered heading with cutlery icon: "Menu"
- Tabbed navigation: Main, Desserts, Drinks
- 2-column grid per tab with menu items
- Each item: dish image thumbnail + price badge + dish name + ingredient tags
- 6 items per tab (12 per view in 2 columns)
- Tab switching with content swap

### 10. Reservation Form
- Light background section
- "Make a Reservation" or similar heading
- Form fields: Name, Phone, Date (with calendar icon), Time (dropdown), Person count (dropdown)
- Time options: 6:30am through 10:30pm in 30-min increments
- Person options: 1, 2, 3, 4, 5+
- "Book a table" submit button (primary orange, pill shape)

### 11. Footer
- Dark gray background (`#303030`)
- 4-column layout:
  - Column 1: Brand name "Cookwell", description, social icon links (Facebook, Twitter, Google+, Dribbble)
  - Column 2: "Latest Blog" — 3 blog entry previews (thumbnail + date + title)
  - Column 3: "Instagram" — 4 grid images
  - Column 4: "Newsletter" — email input + "Subscribe" button (outlined, orange border, square corners)
- Copyright bar at bottom with attribution + "Made with Component Dock" link

## Gherkin Requirements

```gherkin
Feature: Cookwell — Restaurant Template

  Background:
    Given the template is loaded at the root URL
    Then the page title contains "Cookwell"
    And the Component Dock footer link is visible

  Scenario: Navbar renders correctly
    Given the user is on any viewport
    Then the logo with cutlery icon and "Cookwell" text is visible
    And navigation links "Home", "Menus", "Specialties", "Reservation", "Blog", "About Us", "Contact" are available
    And on mobile viewports a hamburger menu button is visible

  Scenario: Navbar becomes fixed on scroll
    Given the page is scrolled past the hero
    Then the navbar sticks to the top of the viewport
    And the background transitions from transparent to dark

  Scenario: Hero slider displays with parallax
    Given the hero section is in the viewport
    Then a full-width slider with parallax background images is visible
    And the headline text and "Book a table" CTA button are displayed
    And a mouse scroll indicator is shown at the bottom

  Scenario: Hero slider cycles through slides
    Given the hero slider is showing slide 1
    When the slider auto-advances
    Then slide 2 is displayed with its unique heading
    And the dark overlay remains consistent across slides

  Scenario: Info bar shows contact details
    Given the info bar section is scrolled into view
    Then 4 columns are visible: Address, Opening Time, Phone, Email
    And each column has a white icon, heading, and detail text
    And the dark purple background (#302939) is applied

  Scenario: About section renders with images
    Given the about section is scrolled into view
    Then the heading "Taste a delicious food here..." is visible
    And the "Welcome to Cookwell" subtitle is displayed
    And 2 food images are shown on the right side

  Scenario: Specialties grid shows 3 dishes
    Given the first specialties section is scrolled into view
    Then the heading "Our Delicious Specialties" is visible
    And 3 dish cards are displayed in a row
    And each card has a background image and dish name

  Scenario: Introduction/video section renders
    Given the video introduction section is scrolled into view
    Then a parallax background image with dark overlay is visible
    And the heading "Foods you love to taste" is displayed
    And a "Watch Video" outlined button is visible

  Scenario: Testimonials carousel works
    Given the testimonials section is scrolled into view
    Then the heading "Our Customer Says" is visible
    And at least one testimonial with quote text and author name is shown
    And carousel navigation controls are present

  Scenario: Tabbed menu displays correctly
    Given the menu section is scrolled into view
    Then tabs for "Main", "Desserts", and "Drinks" are visible
    And the "Main" tab is active by default
    And 12 menu items are displayed in a 2-column grid
    And each item shows a thumbnail image, price, dish name, and ingredient tags

  Scenario: Menu tab switching works
    Given the menu section is visible with the "Main" tab active
    When the user clicks the "Desserts" tab
    Then the dessert menu items replace the main items
    And the tab becomes visually active

  Scenario: Reservation form renders
    Given the reservation section is scrolled into view
    Then a form with fields Name, Phone, Date, Time, and Person is visible
    And the Time dropdown contains options from 6:30am to 10:30pm
    And the Person dropdown shows options 1 through 5+
    And a "Book a table" submit button is visible

  Scenario: Footer renders correctly
    Given the footer is in the viewport
    Then the brand name "Cookwell" and description are shown
    And social media icon links are visible
    And a "Latest Blog" section with 3 entries is displayed
    And an "Instagram" grid with 4 images is shown
    And a "Newsletter" email input and "Subscribe" button are present
    And a link to "https://www.componentdock.com/" is present

  Scenario: Responsive layout adapts
    Given the user is on a mobile viewport (width < 768px)
    Then the navbar collapses to a hamburger menu
    And multi-column grids stack vertically
    And the info bar columns stack vertically
    And the menu tabs remain accessible
    And the footer columns stack vertically

  Scenario: Dark overlays on parallax sections
    Given the hero, video, and testimonials sections exist
    Then each has a dark overlay for text readability
    And white text is used on all dark overlay backgrounds
```

## Verification Checklist

- [ ] All 11 sections render in correct page order
- [ ] Brand color `#FF6107` used for buttons, links, and accents
- [ ] Poppins font loaded for body text
- [ ] Lora font loaded for headings and buttons
- [ ] Hero slider cycles through 4 slides with parallax effect
- [ ] Info bar has dark purple (#302939) background
- [ ] Specialties grid shows 3 dish cards with hover effects
- [ ] Parallax backgrounds on video, testimonials sections
- [ ] Tabbed menu switches between Main/Desserts/Drinks
- [ ] Reservation form with all fields (Name, Phone, Date, Time, Person)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Responsive: hamburger menu on mobile, stacked columns
- [ ] Pill-shaped CTA buttons (border-radius: 30px) with brand orange
- [ ] Placeholder images via `picsum.photos/seed/cookwell-<n>/...`
