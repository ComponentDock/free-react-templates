# Template: FlavorHub (Food / Recipe Blog)

## Purpose

Recreation of the ColorLib "Tasty Recipes" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `tastyrecipes`
- **Source URL:** https://colorlib.com/wp/template/tasty-recipes/
- **Preview URL:** https://preview.colorlib.com/theme/tastyrecipes/
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/flavorhub`
- **Surge target:** `flavorhub.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) at https://preview.colorlib.com/theme/tastyrecipes/

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#FFC000` | Buttons, accents, hover states, links |
| Accent pink | `#FF008C` | Secondary accent (dish area) |
| Dark bg | `#000000` | Slider overlay, footer, dark sections |
| Dark alt | `#262626` | Customer feedback section bg |
| Dark mid | `#333333` | Footer inner bg |
| Body bg | `#FFFFFF` | Main content background |
| Heading text | `#1F1F1F` | Primary headings |
| Body text | `#000000` / `#1F1F1F` | Body copy |
| Muted text | `#777777` / `#7E7E7E` / `#919191` | Secondary text |
| White text | `#FFFFFF` | On dark backgrounds |
| Footer accent | `#C3B2F0` | Footer widget accent color |
| Font primary | `Roboto`, sans-serif | Body, nav, all UI text |
| Font display | `Satisfy`, cursive | Hero slider headline |
| Button shape (primary) | `border-radius: 50px` (pill) | CTA buttons (`.boxed-btn3`) |
| Button shape (outline) | `border-radius: 50px` (pill) | Outline buttons (`.line_btn`) |
| Button bg (primary) | `#FFC000` | Solid fill CTA buttons |
| Button text (primary) | `#FFFFFF` | White on brand |
| Button hover (primary) | `background: #fff; color: #FFC000; border: 1px solid #fff` | Inverted on hover |

## Section Structure (in page order)

### 1. Navbar
- Logo (left-aligned)
- Navigation links: Home, About, Recipes, Blog (dropdown), Pages (dropdown), Contact
- Search icon (right)
- Sticky on scroll with background transition
- Hamburger menu (mobile) with slide-down nav

### 2. Hero Slider
- Full-width background image (`banner.png`) with dark overlay
- Centered headline in Satisfy cursive font: "Chicken dish with per boiled egg"
- Full viewport height (100vh on desktop, 500px on mobile)
- Dark background image covers entire section

### 3. Recipes Section
- 3-column grid of recipe cards
- Each card: circular/rounded food image, recipe name (h3), category tag ("Appetizer"), time ("Time Needs: 30 Mins"), "View Full Recipe" outline button
- White background
- Recipe images are large and prominent
- 3 recipes: Egg Manchurian, Pure Vegetable Bowl, Egg Masala Ramen

### 4. Recipe Videos Section
- Two-column layout: text left, image grid right
- Left: heading "Recipe videos that never misses any portion" + description paragraph + play button with "Watch Video" label
- Right: large image + 2 smaller thumbnail images in a stacked layout
- Play button is circular with brand yellow accent
- Links to YouTube video (popup-video)

### 5. Dish/Catering Section
- 3-column flex layout of dish cards
- Each card: food image, heading "Birthday Catering", description paragraph
- Centered layout
- Light background

### 6. Latest Trending Section
- Full-width parallax background image (same banner as hero)
- Dark overlay with white text
- Heading: "Discover latest trending recipes"
- Subtext: "Thousands of recipes are waiting to be watched"
- "View all Recipes" CTA button (pill shape, brand yellow)
- Generous padding (150px top/bottom)

### 7. Customer Feedback Section
- Dark background (`#262626`)
- Section heading: "Feedback From Customers" + description paragraph
- OwlCarousel-style testimonial slider
- Each testimonial: circular user photo, name, title ("Chief Customer"), paragraph quote
- Multiple testimonial items in carousel

### 8. Download App Section
- Two-column layout: images left, text right
- Left: large phone/app mockup images (stacked layout)
- Right: heading "Download app to get recipes from Everywhere" + App Store / Play Store download buttons
- Download buttons: icon + "Available/Download" + "on App Store/from Play Store"
- White background

### 9. Footer
- Dark background (`#000` / `#333`)
- 4-column widget layout:
  - Top Products (links)
  - Quick Links (links)
  - Features (links)
  - Resources (links)
  - Subscribe (newsletter form: email input + submit)
- Copyright bar at bottom with social icons (Facebook, Twitter, Dribbble, Behance)
- Footer MUST link `https://www.componentdock.com/` (replaces Colorlib attribution)

## Gherkin Requirements

```gherkin
Feature: FlavorHub — Food Recipe Blog Template

  Background:
    Given the template is loaded at the root URL
    Then the page title contains "FlavorHub"
    And the Component Dock footer link is visible

  Scenario: Navbar renders correctly
    Given the user is on any viewport
    Then the logo is visible in the top-left
    And navigation links "Home", "About", "Recipes", "Blog", "Pages", "Contact" are visible
    And a search icon is visible in the top-right
    And on mobile viewports a hamburger menu button is visible

  Scenario: Hero section displays with background image
    Given the hero section is in the viewport
    Then a full-width background image is visible
    And the headline text is displayed in cursive font
    And the section covers the full viewport height on desktop

  Scenario: Recipes section shows 3 recipe cards
    Given the recipes section is scrolled into view
    Then 3 recipe cards are visible in a row
    And each card has a food image, recipe name, category, time, and "View Full Recipe" button
    And the buttons have pill shape (border-radius: 50px)

  Scenario: Recipe videos section renders
    Given the recipe videos section is scrolled into view
    Then the heading "Recipe videos that never misses any portion" is visible
    And a play button with "Watch Video" label is visible
    And a grid of thumbnail images is displayed on the right

  Scenario: Dish/catering section shows 3 items
    Given the dish section is scrolled into view
    Then 3 dish cards are visible in a row
    And each card has an image, heading, and description

  Scenario: Latest trending section renders
    Given the latest trending section is scrolled into view
    Then a parallax background image is visible
    And the heading "Discover latest trending recipes" is displayed
    And a "View all Recipes" button with brand yellow background is visible

  Scenario: Customer feedback carousel works
    Given the customer feedback section is scrolled into view
    Then the heading "Feedback From Customers" is visible
    And at least one testimonial with photo, name, title, and quote is shown
    And carousel navigation is present

  Scenario: Download app section renders
    Given the download app section is scrolled into view
    Then the heading "Download app to get recipes from Everywhere" is visible
    And App Store and Play Store download buttons are visible

  Scenario: Footer renders correctly
    Given the footer is in the viewport
    Then 4 widget columns are visible (Top Products, Quick Links, Features, Resources)
    And a newsletter subscription form is present
    And a copyright notice is displayed
    And social media icon links are visible (Facebook, Twitter, Dribbble, Behance)
    And a link to "https://www.componentdock.com/" is present

  Scenario: Responsive layout adapts
    Given the user is on a mobile viewport (width < 768px)
    Then the navbar collapses to a hamburger menu
    And recipe/dish columns stack vertically
    And the hero text size reduces
    And the footer widget columns stack

  Scenario: Parallax effect on trending section
    Given the latest trending section exists
    Then it has a parallax background image effect
    And white text overlays are readable with sufficient contrast
```

## Verification Checklist

- [ ] All 9 sections render in correct page order
- [ ] Brand color `#FFC000` used for buttons and accents
- [ ] Roboto font loaded for body/nav text
- [ ] Satisfy cursive font loaded for hero headline
- [ ] Pill-shaped buttons (border-radius: 50px) on CTAs
- [ ] Recipe cards show 3 items with images, names, categories, times
- [ ] Recipe videos section with play button and thumbnail grid
- [ ] Latest trending section with parallax background
- [ ] Customer feedback carousel with testimonials
- [ ] Download app section with store buttons
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Responsive: hamburger menu on mobile, stacked columns
- [ ] Placeholder images via `picsum.photos/seed/flavorhub-<n>/...`
