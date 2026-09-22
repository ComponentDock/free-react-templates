# Template: Regale (Hotel)

## Purpose

Recreation of ColorLib "Deluxe" hotel/resort template.
- **Source**: https://colorlib.com/wp/template/deluxe/
- **Preview**: https://preview.colorlib.com/theme/deluxe/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/deluxe-free-template.jpg
- **Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name**: `regale` (package: `@free-react-templates/regale`, folder: `apps/regale`)

## Design tokens

| Token             | Value                                       | Notes                                    |
| ----------------- | ------------------------------------------- | ---------------------------------------- |
| Primary brand     | `#8d703b` (dark gold)                       | Booking form CTA, accents               |
| Secondary brand   | `#c9af7e` (warm gold)                       | Highlights, hover states                 |
| Light brand       | `#f6f2ea` (cream)                           | Alternate section backgrounds            |
| Dark bg           | `#3c312e` (deep brown)                      | Footer, overlays                        |
| Body bg           | `#fff` (white)                              | Main content areas                      |
| Light gray bg     | `#f8f9fa` (Bootstrap bg-light)              | Alternate sections (rooms, testimonials) |
| Text primary      | `#000000`                                   | Headings, body text                      |
| Text muted        | `#b3b3b3`                                   | Secondary text, prices                   |
| Font - headings   | `"Playfair Display", serif`                 | Hero titles, section headings            |
| Font - body       | `"Poppins", sans-serif`                     | Body text, navigation, buttons           |
| Border radius     | 0 (sharp corners)                           | Bootstrap-style, no rounding             |
| Button (primary)  | bg `#8d703b`, white text, no radius         | py-3 px-4, full stretch                  |
| Button (custom)   | black text, no bg, arrow icon               | "View Room Details →" link-style button  |
| Overlay on hero   | semi-transparent dark                       | On slider images                         |

## Gherkin requirements

### Navbar
Feature: Navbar
  Scenario: Renders navigation links
    Given the page loads
    Then a dark navbar is displayed with brand "Regale"
    And nav links: Home, Rooms, Restaurant, About, Blog, Contact
    And the navbar is responsive with a hamburger toggle on mobile

### Hero Slider
Feature: Hero Slider
  Scenario: Displays rotating hero slides
    Given the page loads
    Then a full-width image slider is shown with overlay
    And each slide shows a heading (e.g. "Welcome To Regale") and subheading
    And the slider auto-rotates between slides

### Booking Form
Feature: Booking Form
  Scenario: Shows booking form over hero
    Given the page loads
    Then a booking form is displayed with fields:
      | Field         | Type     | Options/Placeholder         |
      | Check-in Date | text     | "Check-in date"             |
      | Check-out Date| text     | "Check-out date"            |
      | Room          | select   | Suite, Family, Deluxe, etc. |
      | Customer      | select   | 1 Adult .. 6 Adult          |
    And a "Check Availability" button is shown

### About Section
Feature: About Section
  Scenario: Displays welcome content
    Given the page loads
    Then a split layout shows a background image on the left
    And welcome text on the right with subheading "Welcome to Regale Hotel"
    And heading "Welcome To Our Hotel"
    And two paragraphs of descriptive text
    And social media icon links (Twitter, Facebook, Google, Instagram)

### Services Section
Feature: Services Section
  Scenario: Shows service cards
    Given the page loads
    Then 4 service cards are displayed in a row:
      | Service            | Icon              |
      | 24/7 Front Desk    | reception-bell    |
      | Restaurant Bar     | serving-dish      |
      | Transfer Services  | car               |
      | Spa Suites         | spa               |
    And each card has an icon, heading, and description

### Rooms Section
Feature: Rooms Section
  Scenario: Shows room cards
    Given the page loads
    Then 6 room cards are displayed in a 3-column grid
    And each card shows a room image, name, price, and "View Room Details" link
    And rooms: Suite ($120), Family ($20), Deluxe ($150), Classic ($130), Superior ($300), Luxury ($500)

### Counter Section
Feature: Counter Section
  Scenario: Shows statistics with parallax background
    Given the page loads
    Then a parallax background image is shown
    And 4 counter stats are displayed:
      | Stat          | Value  |
      | Happy Guests  | 50,000 |
      | Rooms         | 3,000  |
      | Staff         | 1,000  |
      | Destinations  | 100    |

### Testimonials Section
Feature: Testimonials Section
  Scenario: Shows testimonial carousel
    Given the page loads
    Then a carousel of testimonials is displayed
    And each testimonial shows a user image, quote, name, and role
    And at least 3 testimonials are available

### Blog Section
Feature: Blog Section
  Scenario: Shows recent blog posts
    Given the page loads
    Then 4 blog post cards are displayed in a row
    And each card shows an image, title, date, author, and comment count

### Instagram Section
Feature: Instagram Section
  Scenario: Shows Instagram gallery
    Given the page loads
    Then 5 Instagram images are shown in a full-width row
    And each image has an Instagram icon overlay on hover

### Footer
Feature: Footer
  Scenario: Renders dark footer
    Given the page loads
    Then a dark footer (#3c312e) is displayed
    And it contains 4 columns: brand + description, Useful Links, Privacy, Contact
    And social media icons are shown
    And a copyright line with "Made with Component Dock" link

## Verification checklist

- [ ] Navbar renders with correct links and responsive toggle
- [ ] Hero slider auto-rotates with overlay text
- [ ] Booking form has all 4 fields + submit button
- [ ] About section: split layout, image left, text right
- [ ] Services section: 4 cards with icons
- [ ] Rooms section: 6 room cards with prices
- [ ] Counter section: parallax bg + 4 stats
- [ ] Testimonials: carousel with user images
- [ ] Blog: 4 post cards
- [ ] Instagram: 5 image gallery
- [ ] Footer: dark, 4 columns, Component Dock link
- [ ] Fonts: Playfair Display headings, Poppins body
- [ ] Colors: gold (#8d703b) brand, cream (#f6f2ea) alt bg
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
