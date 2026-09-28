# Template: Gustoso (Restaurant / Fine Dining)

## Purpose

Recreation of the ColorLib "Luto" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `luto`
- **Source URL:** https://colorlib.com/wp/template/luto/
- **Preview URL:** https://preview.colorlib.com/theme/luto/
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/gustoso`
- **Surge target:** `gustoso.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) at https://preview.colorlib.com/theme/luto/

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#FF6107` | CTA buttons, accents, highlights |
| Brand alt | `#F7AF1D` / `#ff7121` | Hover states, secondary accents |
| Dark purple | `#302939` | Info bar, footer backgrounds |
| Dark alt | `#404044` | Footer text, headings |
| Body text | `#404044` / `#636363` | Primary and secondary body copy |
| Muted text | `#7d7d7d` / `#969696` | Tertiary text, captions |
| Light bg | `#FBFBFB` / `#F7F7F7` | Section backgrounds |
| White bg | `#FFFFFF` | Content areas |
| Border gray | `#e3e3e3` / `#b0b0b0` | Dividers, borders |
| Font display | `Lora`, Georgia, serif | Headings, hero text (serif, elegant) |
| Font body | `Poppins`, Arial, sans-serif | Body copy, nav, buttons, labels |
| Button primary | `#FF6107` bg, white text, rounded (border-radius) | "Book a table", "Subscribe" |
| Button outline | Transparent bg, `#FF6107` border + text | "Book a table" in info bar, "Watch Video" |
| Info bar bg | `#302939` (dark purple) | 4-column info strip below hero |
| Footer bg | `#302939` (dark purple) | Full footer area |
| Reservation bg | `#302939` (dark purple) | Reservation form section |

## Section Structure (in page order)

### 1. Navbar
- Logo (left): cutlery icon + "Gustoso" text (serif font)
- Hamburger menu icon (right) — toggles full-screen overlay
- Full-screen nav overlay with: search input + button, nav links (Home, Menus, Specialties, Reservation, Blog, About us, Contact)
- Transparent over hero, fixed on scroll

### 2. Hero Slider
- Full-width FlexSlider with 4 slides
- Each slide: dark food photography background image
- Centered content: cutlery icon, heading (serif), description text, "Book a table" orange CTA button
- Dot pagination indicators
- Mouse scroll icon at bottom
- Slide headings: "Special & Fresh Food", "Exquisite Dishes From Chef", "We are Delicious Restaurant", "Book a table here in our site"

### 3. Info Bar
- Dark purple background (`#302939`)
- 4 equal columns with icons:
  - Address: map icon + "198 West 21th Street, Suite 721 New York NY 10016"
  - Opening Time: clock icon + "Monday - Sunday" / "8am - 9pm"
  - Phone: mobile icon + two phone numbers
  - Email: envelope icon + two email addresses

### 4. About Section
- White background
- Left side: "Welcome to Gustoso" subtitle + heading + description paragraph
- Right side: image with play button overlay (video popup)
- Below: 3-column specialty cards (image + title): "Strawberry Dish", "Pizza with strawberries", "Grilled Beef"

### 5. Video CTA
- Full-width background image with dark overlay
- Centered: cutlery icon + heading "Foods you love to taste" + description + "Watch Video" outline button (orange border)

### 6. Specialties Showcase
- White background
- Heading: cutlery icon + "Our Delicious Specialties" + description
- 3-column grid of specialty cards (same structure as about section cards)

### 7. Testimonials
- Light background
- "Our Customer Says" heading
- OwlCarousel with testimonial cards: blockquote text + author name

### 8. Menu Section
- White background
- Heading: cutlery icon + "Lutong Bahay Menu" + description
- Tabbed navigation: Main, Desserts, Drinks (Bootstrap tabs)
- 2-column dish list per tab:
  - Each item: food image (left) + price (right-aligned, orange) + dish name + category tags
  - 6 items per tab = 18 total items across 3 tabs

### 9. Reservation Section
- Dark purple background with background image
- Heading: "Make A Reservation" + description
- Form with fields: Fullname, Email, Phone, Date (datepicker), Time (dropdown), Person (dropdown)
- "Book a table" submit button (orange, full-width)

### 10. Footer
- Dark purple background (`#302939`)
- 4 columns:
  - Brand: "Gustoso" heading + description + social icons (Facebook, Twitter, Google+, Dribbble)
  - Latest Blog: 3 posts with thumbnail + date + title
  - Instagram: 4 square image thumbnails
  - Newsletter: description + email input + "Subscribe" button

### 11. Copyright Bar
- Dark background
- Copyright text + "Made with ❤ by Component Dock" (replace Colorlib)

## Gherkin Requirements

```gherkin
Feature: Gustoso — Restaurant / Fine Dining Template

  Background:
    Given the template is loaded at the root URL
    Then the page title contains "Gustoso"
    And the Component Dock footer link is visible

  Scenario: Navbar renders correctly
    Given the user is on any viewport
    Then the logo with cutlery icon and "Gustoso" text is visible
    And on desktop a hamburger menu icon is visible
    And on mobile viewports the hamburger menu toggles a full-screen overlay
    And the overlay contains a search input and navigation links

  Scenario: Hero slider displays with food imagery
    Given the hero section is in the viewport
    Then a full-width slider with background food images is visible
    And the heading "Special & Fresh Food" is displayed in serif font
    And a cutlery icon is shown above the heading
    And a "Book a table" orange button is visible
    And dot pagination indicators are present
    And a mouse scroll icon is at the bottom

  Scenario: Hero slider advances slides
    Given the hero slider is showing slide 1
    When the user clicks the next dot indicator
    Then slide 2 is displayed with heading "Exquisite Dishes From Chef"

  Scenario: Info bar shows contact details
    Given the info bar is scrolled into view
    Then 4 columns are visible: Address, Opening Time, Phone, Email
    And each column has an icon above the label
    And the background is dark purple

  Scenario: About section displays correctly
    Given the about section is scrolled into view
    Then the heading "Welcome to Gustoso" is visible
    And a description paragraph is shown
    And an image with a play button overlay is present
    And 3 specialty cards are displayed below

  Scenario: Video CTA section renders
    Given the video CTA section is scrolled into view
    Then a background image with dark overlay is visible
    And the heading "Foods you love to taste" is displayed
    And a "Watch Video" outline button is visible

  Scenario: Specialties section shows 3 items
    Given the specialties section is scrolled into view
    Then the heading "Our Delicious Specialties" is visible
    And 3 specialty cards with images and titles are displayed

  Scenario: Testimonials carousel works
    Given the testimonials section is scrolled into view
    Then the heading "Our Customer Says" is visible
    And at least one blockquote with text and author name is shown
    And carousel navigation is present

  Scenario: Menu section filters by category
    Given the menu section is scrolled into view
    Then the heading "Lutong Bahay Menu" is visible
    And tab buttons "Main", "Desserts", "Drinks" are visible
    When the user clicks the "Desserts" tab
    Then dessert menu items are displayed
    And each item shows a food image, name, price, and category tags

  Scenario: Reservation form renders correctly
    Given the reservation section is scrolled into view
    Then the heading "Make A Reservation" is visible
    And form fields Fullname, Email, Phone, Date, Time, Person are present
    And a "Book a table" submit button is visible

  Scenario: Footer renders correctly
    Given the footer is in the viewport
    Then the "Gustoso" brand heading is visible
    And social media icon links are present (Facebook, Twitter, Google+, Dribbble)
    And 3 latest blog posts with thumbnails are shown
    And 4 Instagram image thumbnails are shown
    And a newsletter signup with email input and "Subscribe" button is present
    And a link to "https://www.componentdock.com/" is present

  Scenario: Responsive layout adapts
    Given the user is on a mobile viewport (width < 768px)
    Then the navbar collapses to a hamburger menu
    And info bar columns stack vertically
    And specialty/menu columns stack vertically
    And the reservation form remains usable
```

## Verification Checklist

- [ ] All 11 sections render in correct page order
- [ ] Brand color `#FF6107` (orange) used for buttons and accents
- [ ] Lora (serif) font loaded for headings and hero text
- [ ] Poppins (sans-serif) font loaded for body text
- [ ] Hero FlexSlider cycles through 4 slides with dot indicators
- [ ] Info bar shows 4 contact columns on dark purple background
- [ ] About section has video overlay image + 3 specialty cards
- [ ] Video CTA section has background image with overlay
- [ ] Testimonials carousel shows blockquotes with author names
- [ ] Menu tab filter works (Main/Desserts/Drinks)
- [ ] Reservation form has all 6 fields + submit button
- [ ] Footer has 4 columns: brand, blog, Instagram, newsletter
- [ ] Newsletter has email input + "Subscribe" button
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Responsive: hamburger menu, stacked columns on mobile
- [ ] Orange rounded CTA buttons match original design
- [ ] Placeholder images via `picsum.photos/seed/gustoso-<n>/...`
