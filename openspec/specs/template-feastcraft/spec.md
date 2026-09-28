# Template: Feastcraft (Restaurant)

## Purpose

Recreation of ColorLib "Meal2" — a free restaurant website template with food menus, desserts, events, galleries, and testimonials.

- **Source:** [ColorLib Meal2](https://colorlib.com/wp/template/meal2/)
- **Preview:** https://preview.colorlib.com/theme/meal2/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Restaurant / Food & Dining

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Notes |
|-------|-------|-------|
| Brand color (accent) | `#ff5200` | Bright orange — buttons, active states, links, text-primary |
| Brand color hover | `#ff6014` | Slightly lighter orange on hover |
| Heading font | `"Playfair Display", serif` | All headings (h1, h2, h3) |
| Body font | `"Nunito", sans-serif` | Body text, paragraphs, UI elements |
| Body background | `#fee2b3` | Warm peach/cream — page-level background |
| Text color (body) | `#333` | Dark gray body text |
| Text color (headings) | `#black` (CSS) → effectively `#000` | Headings |
| Button style | `border-radius: 30px` | Pill-shaped / rounded buttons |
| Button primary | bg: `#ff5200`, border: `#ff5200`, text: white | Solid orange CTA |
| Button primary hover | bg: `#ff6014`, border: `#ff6014` | Hover state |
| Button book (small) | bg: transparent, border: 1px solid `#43434d`, border-radius: 0, color: `#000` | Sharp-cornered secondary button in navbar |
| Section subtitle | `.subtitle` class — small caps label above headings | e.g. "Select your Meal", "Choose Desserts" |
| Primary text class | `.text-primary` → `#ff5200` | Used in headings for accent words |
| Social icons | icomoon font — WhatsApp, Instagram, Facebook, Twitter, LinkedIn, Pinterest, Dribbble | |
| Footer background | White `#ffffff` | Clean white footer |
| Footer heading | `color: #000` with `.text-primary` orange dot accent | "About Meal." pattern |
| Links hover | `#ff5200` | Orange accent on link hover |
| Overlay sections | `background: rgba(0, 0, 0, 0.2)` | Dark overlay on parallax images |
| Product card price | Bold price below food item name | |
| Event price | `.event-price` — prominent price display | |
| Testimonial quote | Large decorative opening quote mark | |

### Visual Design Notes (from preview analysis)

- Warm, inviting restaurant aesthetic with peach/cream background
- Hero: full-width parallax background with centered text (subtitle + heading + description + CTA)
- Social media icons vertically aligned on the left side of hero
- Food menu: left sidebar with category icons (noodles, chicken, hotdog, drinks), right side carousel of food items in a 2x2 grid
- Desserts: 4 horizontal cards in a row with small image + name + price
- Testimonials + Gallery: parallax background section, left half = testimonial carousel, right half = photo gallery grid
- Events: image-text alternating slides with price, title, description, and checklist
- Book a table CTA: centered text on parallax background with pill-shaped button
- Footer: 4-column layout (About + Social, Projects, Services, Contact)
- Overall: warm tones, orange accent pops, pill-shaped buttons, clean sans-serif body with serif headings

## Requirements (Gherkin)

### Navigation

Scenario: Navbar displays with logo and links
  Given the visitor is on the homepage
  When the page loads
  Then a "Feastcraft." logo is visible (text with orange dot accent)
  And navigation links are: Home, Menu (with dropdown), Events, Gallery, About, Contact
  And a "Book a table" button is visible

Scenario: Navbar menu dropdown works
  Given the visitor hovers/clicks on "Menu"
  When the dropdown appears
  Then submenu items are visible: Elements, Menu Two (with sub-submenu), Menu Three

Scenario: Mobile hamburger menu
  Given the visitor is on a mobile viewport
  When they click the hamburger icon
  Then a mobile menu slides in from the side

### Hero Section

Scenario: Hero displays with heading and CTA
  Given the visitor is on the homepage
  When the hero section loads
  Then a background image is visible with a dark overlay
  And the subtitle "Enjoy Your Healthy Delicious Meal" is displayed
  And the heading "Treat Yourself" is displayed
  And a description paragraph is shown
  And an "Explore now" pill-shaped orange button is visible
  And social media icons (WhatsApp, Instagram, Facebook, Twitter) are aligned on the left

Scenario: Hero scroll-down indicator
  Given the hero section is displayed
  Then a "scroll down" indicator is visible at the bottom

### Popular Foods Section

Scenario: Food menu tabs display correctly
  Given the visitor scrolls to the Popular Foods section
  Then the subtitle "Select your Meal" and heading "Popular Foods" are displayed
  And 4 category tabs are visible: Breakfast, Lunch, Dinner, Drinks
  And each tab has an icon image

Scenario: Food menu carousel shows items
  Given a food category tab is active
  Then 4 food items are displayed in a 2x2 grid
  And each item shows an image, name, and price
  And a page indicator (e.g. "1/4") is shown

Scenario: Food category switching
  Given the visitor clicks the "Lunch" tab
  Then the Lunch food items are displayed
  And the page indicator updates to "2/4"

### Popular Desserts

Scenario: Desserts section displays 4 items
  Given the visitor scrolls to the Desserts section
  Then the subtitle "Choose Desserts" and heading "Popular Desserts" are displayed
  And 4 dessert items are visible in a row
  And each item has a small image, name, and price

### Testimonials + Gallery

Scenario: Testimonials carousel displays
  Given the visitor scrolls to the testimonials section (on parallax background)
  Then the subtitle "Testimonials" and heading "Satisfied Customers" are visible
  And a carousel of testimonials is shown
  And each testimonial has a photo, name, title, and quoted text

Scenario: Photo gallery grid displays
  Given the testimonials section is displayed
  Then the subtitle "Galleries" and heading "Photo Galleries" are visible
  And 4 gallery images are shown in a 2x2 grid
  And a "More Galleries" button is present

Scenario: Gallery lightbox
  Given the gallery images are displayed
  When the visitor clicks a gallery image
  Then a lightbox/modal opens showing the full image

### Events Section

Scenario: Events carousel displays
  Given the visitor scrolls to the Events section
  Then the subtitle "Events" and heading "Enjoy Our Events" are displayed
  And event slides are shown with an image, price, title, description, and checklist

Scenario: Events carousel navigation
  Given events are displayed
  When the visitor navigates to the next event
  Then a different event with a new image and details is shown

### Book a Table CTA

Scenario: Book a table section displays
  Given the visitor scrolls to the Book a Table section
  Then a parallax background is visible
  And the subtitle "Book a table" and heading "Book A Table Now" are displayed
  And a description text is shown
  And a "Book a table" pill-shaped orange button is visible

### Footer

Scenario: Footer displays 4 columns
  Given the visitor scrolls to the footer
  Then 4 columns are visible: About, Projects, Services, Contact

Scenario: Footer About column
  Given the footer is displayed
  Then the About column shows "About Feastcraft." heading (with orange dot)
  And a description paragraph is present
  And a "Connect" section with social icons (Instagram, Twitter, Facebook, LinkedIn, Pinterest, Dribbble)

Scenario: Footer Projects column
  Given the footer is displayed
  Then the Projects column lists: Web Design, HTML5, CSS3, jQuery, Bootstrap

Scenario: Footer Services column
  Given the footer is displayed
  Then the Services column lists: Design, Front-end, Code, Developer

Scenario: Footer Contact column
  Given the footer is displayed
  Then the Contact column shows an address and phone/email links

Scenario: Footer copyright and Component Dock link
  Given the footer is displayed
  Then a copyright notice is shown
  And a "Component Dock" link points to https://www.componentdock.com/

## Verification Checklist

- [ ] Navbar: logo with orange dot, 6 nav links, "Book a table" button, mobile hamburger
- [ ] Hero: parallax bg, subtitle + heading + description, "Explore now" pill button, social icons
- [ ] Popular Foods: subtitle + heading, 4 category tabs with icons, 2x2 food grid per category
- [ ] Popular Desserts: 4 dessert cards with image + name + price
- [ ] Testimonials: parallax bg, carousel with photo + name + title + quote
- [ ] Photo Galleries: 2x2 image grid, "More Galleries" button, lightbox on click
- [ ] Events: carousel with image + price + title + description + checklist
- [ ] Book a Table CTA: parallax bg, subtitle + heading + button
- [ ] Footer: 4 columns (About + Social, Projects, Services, Contact), copyright, Component Dock link
- [ ] Design tokens: orange #ff5200 accent, Playfair Display headings, Nunito body, #fee2b3 peach bg
- [ ] Buttons: pill-shaped (border-radius 30px), solid orange primary
- [ ] No ColorLib references in app code — provenance in spec only
