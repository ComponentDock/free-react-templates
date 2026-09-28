# Template: Forkbite (Restaurant / Food)

## Purpose

Recreation of the ColorLib "Meal2" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `meal2`
- **Source URL:** https://colorlib.com/wp/template/meal2/
- **Preview URL:** https://preview.colorlib.com/theme/meal2/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/meal2-free-template.jpg
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/forkbite`
- **Surge target:** `forkbite.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) at https://preview.colorlib.com/theme/meal2/

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#ff5200` | Buttons, links, accents, text highlights |
| Brand hover | `#ff6014` | Button hover state |
| Body bg | `#fee2b3` | Warm peach/tan page background |
| Dark overlay | `rgba(0,0,0,0.4)` | Hero section overlay |
| Warm overlay | `rgba(245,201,126,0.9)` | Testimonials/Gallery parallax overlay |
| Footer bg | `#645f56` | Dark olive/gray footer background |
| Heading text | `#000000` | Headings (h1–h4) |
| Body text | `#333` | Paragraph body copy |
| White text | `#FFFFFF` | On dark backgrounds, footer |
| Muted link | `rgba(255,255,255,0.5)` | Footer link default state |
| Form border | `#43434d` | Input borders |
| Form focus | `#ff5200` | Input focus border color |
| Selection bg | `#000000` | Text selection background |
| Selection text | `#FFFFFF` | Text selection color |
| Font primary | `Nunito`, sans-serif | Body text, paragraphs, UI elements |
| Font secondary | `Playfair Display`, serif | Headings, hero text |
| Button shape | Pill (border-radius: 30px) | All CTA buttons |
| Button primary bg | `#ff5200` | Primary CTA buttons |
| Button text | `#FFFFFF` | White on brand orange |
| Button style | Uppercase, letter-spacing 0.05rem, font-weight 700 | All buttons |
| Social icon | White circle bg, black icon, 30×30px | Footer social links |
| Dessert card | border 1px solid rgba(0,0,0,0.1), border-radius 4px | Dessert item cards |
| Gallery image | border-radius 7px | Gallery thumbnails |

## Section Structure (in page order)

### 1. Navbar
- Logo "Forkbite." with orange dot accent
- Desktop nav: Home, Menu (with dropdown: Elements, Menu Two with sub-dropdown, Menu Three), Events, Gallery, About, Contact
- "Book a table" CTA button (small, primary orange, pill shape) — right-aligned
- Hamburger menu for mobile (off-canvas slide)
- Sticky on scroll with white background transition

### 2. Hero Section
- Full-width background image with dark overlay (rgba(0,0,0,0.4))
- Centered content: caption "Enjoy Your Healthy Delicious Meal", heading "Treat Yourself", description paragraph, "Explore now" CTA button (pill, orange)
- Scroll-down indicator at bottom center
- Social media icons on left side (WhatsApp, Instagram, Facebook, Twitter) — vertical stack, slide-in animation

### 3. Popular Foods (Tab + Carousel)
- Two-column layout: left has category selector, right has carousel
- Left: "Select your Meal" subtitle, "Popular Foods" heading (Foods in orange), 4 category tabs with small icons (Breakfast, Lunch, Dinner, Drinks)
- Right: OwlCarousel with 4 slides (one per category), each slide shows 4 dishes in 2×2 grid
- Each dish: thumbnail image + dish name + price ($19.00)
- Slide counter "1/4" in top right
- AOS fade-up animations

### 4. Desserts Section
- "Choose Desserts" subtitle, "Popular Desserts" heading (Desserts in orange)
- 4-column grid of dessert cards
- Each card: small dessert image (left) + name + price in bordered card
- Items: Cherry Muffin, Rose Muffin, Sweet Donut, Choco Cake ($20 each)
- AOS fade-up staggered animation

### 5. Testimonials + Gallery (Split Section)
- Full-width parallax background with warm overlay (rgba(245,201,126,0.9))
- Two-column layout:
  - Left: "Testimonials" subtitle, "Satisfied Customers" heading, OwlCarousel with 3 testimonials
  - Each testimonial: circular author photo, name, position/title, blockquote with quote marks
  - Right: "Galleries" subtitle, "Photo Galleries" heading, 2×2 image grid, "More Galleries" CTA button
- Images use Fancybox for lightbox viewing

### 6. Events Section
- "Events" subtitle, "Enjoy Our Events" heading
- OwlCarousel with event cards, each card:
  - Two-column: image (left or alternating right) + details (price, title, description, checklist)
  - Event examples: "Birthday Party" ($200.99), "Guest Chef Night Party" ($200.99)
  - Checklist items with checkmarks
- Alternating image/text layout per slide

### 7. Book a Table CTA
- Full-width parallax background with warm overlay
- Centered content: "Book a table" subtitle, "Book A Table Now" heading, description, "Book a table" CTA button (pill, orange)

### 8. Footer
- Dark olive background (#645f56)
- 4-column layout:
  - Column 1: "About Forkbite." heading + description + "Connect" social icons (Instagram, Twitter, Facebook, LinkedIn, Pinterest, Dribbble — white circles)
  - Column 2: "Projects" links (Web Design, HTML5, CSS3, jQuery, Bootstrap)
  - Column 3: "Services" links (Design, Front-end, Code, Developer)
  - Column 4: "Contact" — address, phone numbers, email
- Copyright bar at bottom with "Made with Component Dock" link

## Gherkin Requirements

```gherkin
Feature: Forkbite — Restaurant Template

  Background:
    Given the template is loaded at the root URL
    Then the page title contains "Forkbite"
    And the Component Dock footer link is visible

  Scenario: Navbar renders correctly
    Given the user is on any viewport
    Then the logo "Forkbite." with orange dot is visible
    And navigation links "Home", "Menu", "Events", "Gallery", "About", "Contact" are available
    And a "Book a table" CTA button is visible in the navbar
    And on mobile viewports a hamburger menu button is visible

  Scenario: Hero section displays with overlay
    Given the hero section is in the viewport
    Then a full-width background image with dark overlay is visible
    And the heading "Treat Yourself" is displayed
    And the caption "Enjoy Your Healthy Delicious Meal" is shown
    And an "Explore now" CTA button with orange pill shape is visible
    And a scroll-down indicator is present
    And social media icons (WhatsApp, Instagram, Facebook, Twitter) are on the left

  Scenario: Popular Foods section shows tabbed carousel
    Given the foods section is scrolled into view
    Then 4 category tabs (Breakfast, Lunch, Dinner, Drinks) are visible
    And the Breakfast tab is active by default
    And a carousel shows 4 dish cards in a 2×2 grid
    And each dish has an image, name, and price

  Scenario: Food category switching works
    Given the foods section is visible with Breakfast active
    When the user clicks the "Lunch" tab
    Then the carousel advances to the Lunch slide
    And the slide counter shows "2/4"

  Scenario: Desserts section shows 4 items
    Given the desserts section is scrolled into view
    Then the heading "Popular Desserts" is visible
    And 4 dessert cards are displayed in a row
    And each card has an image, name (e.g. "Cherry Muffin"), and price

  Scenario: Testimonials and Gallery section renders
    Given the testimonials section is scrolled into view
    Then the heading "Satisfied Customers" is visible
    And at least one testimonial with author photo, name, title, and quote is shown
    And a photo gallery grid with 4 images is displayed on the right
    And a "More Galleries" button is visible

  Scenario: Events section renders
    Given the events section is scrolled into view
    Then the heading "Enjoy Our Events" is visible
    And at least one event card with image, price, title, description, and checklist is shown

  Scenario: Book a Table CTA section renders
    Given the book-a-table section is scrolled into view
    Then the heading "Book A Table Now" is visible
    And a "Book a table" CTA button is displayed

  Scenario: Footer renders correctly
    Given the footer is in the viewport
    Then the heading "About Forkbite." is shown
    And social media icon links (Instagram, Twitter, Facebook, LinkedIn, Pinterest, Dribbble) are visible
    And "Projects" and "Services" link lists are displayed
    And contact information (address, phone, email) is shown
    And a link to "https://www.componentdock.com/" is present

  Scenario: Responsive layout adapts
    Given the user is on a mobile viewport (width < 768px)
    Then the navbar collapses to an off-canvas hamburger menu
    And multi-column grids stack vertically
    And the food carousel adapts to single-column
    And the footer columns stack vertically

  Scenario: Parallax effects on background sections
    Given the testimonials/gallery and book-a-table sections exist
    Then each has a fixed parallax background image
    And a warm-toned overlay ensures text readability
```

## Verification Checklist

- [ ] All 8 sections render in correct page order
- [ ] Brand color `#ff5200` used for buttons, links, and accents
- [ ] Nunito font loaded for body text
- [ ] Playfair Display font loaded for headings
- [ ] Warm peach (#fee2b3) page background
- [ ] Hero slider/section with dark overlay and social icons
- [ ] Popular Foods tabbed carousel with 4 categories
- [ ] Desserts grid shows 4 items in bordered cards
- [ ] Testimonials + Gallery split section with warm overlay
- [ ] Events carousel with alternating layout
- [ ] Book a Table CTA with parallax background
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Responsive: off-canvas menu on mobile, stacked columns
- [ ] Pill-shaped CTA buttons (border-radius: 30px) with brand orange
- [ ] Placeholder images via `picsum.photos/seed/forkbite-<n>/...`
