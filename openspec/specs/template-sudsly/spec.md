# Template: Sudsly (Car Wash / Automotive Services)

## Purpose

Recreation of ColorLib "Carwash" template
(preview: https://preview.colorlib.com/theme/carwash/,
source: https://colorlib.com/wp/template/carwash/).

A single-page car wash / auto detailing service website with a bold hero slider,
equipment/about section, pricing cards, testimonials, service categories,
video CTA, map location, and footer.

Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript.

## Design Tokens

Extracted from the live preview stylesheet (`style.css`):

| Token | Value | Notes |
|---|---|---|
| Brand primary | `#007AFF` | Blue — buttons, links, hover, scroll-to-top, social |
| Brand secondary | `#0BC6FF` → `#0d80f3` | Gradient for `.btn` background (light blue to blue) |
| Heading color | `#010A44` | Dark navy, used on h1–h6 |
| Paragraph text | `#10285d` | Navy-blue body copy |
| Nav text | `#072366` | Dark navy for header nav links |
| Accent green | `#70D76A` | Section subheading `.section-tittle span` |
| Office section bg | `#EEF6FF` | Very light blue background |
| Pricing mid color | `#4C1E51` | Purple — price figure |
| Pricing border | `#E7E6EB` | Light gray card borders |
| Testimonial bg | `#1592e6` → `#007AFF` → `#10cafc` | Vertical gradient |
| Footer bg | Dark with image overlay | `section-bg2` class |
| Hero overlay | `rgba(1,10,68,0.8)` → `rgba(0,42,255,0.5)` | Left-to-right gradient |
| Body font | `"Poppins", sans-serif` | Import Google Fonts |
| Heading font | `"Work Sans", sans-serif` | Import Google Fonts |
| Primary btn radius | `30px` | Pill shape |
| Primary btn shadow | `0px 7px 21px 0px rgba(0,0,0,0.12)` | Subtle lift shadow |
| Border btn | `border: 1px solid #007AFF`, no fill, `color: #007AFF` | `.borders-btn` |

## Requirements

### Feature: Sudsly — Car Wash Service Website

#### Scenario: Navbar renders with logo, navigation links, and phone CTA

- **GIVEN** the user loads the page
- **THEN** a sticky navbar is visible with a logo on the left
- **AND** navigation links "Home", "About", "Services", "Blog", "Contact" are present
- **AND** a phone number CTA button ("10 (87) 256-2903") appears on the right

#### Scenario: Hero section displays headline with animated text

- **GIVEN** the user loads the page
- **THEN** a full-width hero section is visible with a background image
- **AND** the heading "Car Wash" is displayed in large white text (Poppins, 124px)
- **AND** the text "& Detailing" appears with a stroke/clip animation effect
- **AND** a subtitle paragraph is shown below
- **AND** an "Our Services" pill button (gradient blue, rounded) is visible

#### Scenario: Equipment/About section shows offset white card on light blue background

- **GIVEN** the user scrolls past the hero
- **THEN** a light blue (`#EEF6FF`) section is visible
- **AND** a white card is offset to the right half of the layout
- **AND** the card contains the heading "We have the latest equipment"
- **AND** a paragraph describing the service is shown
- **AND** an "About Us" border button (blue outline, no fill) is present

#### Scenario: Pricing section shows three service tier cards

- **GIVEN** the user scrolls to the pricing area
- **THEN** the heading "We offer best services to our customer" is centered
- **AND** three pricing cards are displayed in a row (Car Wash $50, Detailing $100, Wash & Detailing $200)
- **AND** each card has an icon, title, "Starting at" label, price in purple, feature list, and "Get Started" border button
- **AND** cards have white background with light gray border and padding

#### Scenario: Testimonial section shows carousel on blue gradient background

- **GIVEN** the user scrolls past pricing
- **THEN** a testimonial section with blue gradient background is visible
- **AND** a quote block with opening quote icon is displayed
- **AND** a founder avatar, name ("Robart Brown"), and role text are shown
- **AND** a decorative image appears on the right side

#### Scenario: Services/Categories section displays four feature cards

- **GIVEN** the user scrolls to the categories area
- **THEN** the heading "Why take our services?" is shown with green accent span
- **AND** four service cards are displayed in a 4-column grid
- **AND** each card has an SVG icon, title (e.g. "Car wash 100% without detergents"), and description paragraph

#### Scenario: Video CTA section with play button

- **GIVEN** the user scrolls past services
- **THEN** a dark background section with a background image is visible
- **AND** a circular green play button with ripple animation is centered
- **AND** the heading "Your car will look as your new one" is displayed
- **AND** a description paragraph is shown below the heading

#### Scenario: Map/Location section

- **GIVEN** the user scrolls past the video area
- **THEN** two map images are displayed side by side filling the width

#### Scenario: Footer with contact info, hours, navigation, and social links

- **GIVEN** the user reaches the bottom of the page
- **THEN** a dark footer is visible with background image overlay
- **AND** column 1 contains logo, description, phone number (styled large in blue), and email
- **AND** column 2 contains opening hours (Mon-Fri, Sat, Sun)
- **AND** column 3 contains navigation links (Home, About, Services, Blog, Contact)
- **AND** column 4 contains social icons (Twitter, Facebook, Pinterest)
- **AND** a footer-bottom bar shows copyright text
- **AND** the footer links to `https://www.componentdock.com/` branded as "Component Dock"

#### Scenario: Scroll-to-top button

- **GIVEN** the user scrolls down the page
- **THEN** a circular blue (`#007AFF`) scroll-to-top button appears in the bottom-right corner
- **AND** clicking it smoothly scrolls to the top of the page

## Verification Checklist

- [ ] Navbar: sticky, logo + 5 nav links + phone CTA
- [ ] Hero: full-width bg image, animated headline, pill CTA button
- [ ] Equipment section: light blue bg, offset white card, heading + text + border button
- [ ] Pricing: centered heading, 3 cards with icon/title/price/features/CTA
- [ ] Testimonial: blue gradient bg, quote, avatar, founder info, right image
- [ ] Services: 4-column grid, icons, titles, descriptions, green accent span
- [ ] Video CTA: dark bg, play button with ripple, heading + text
- [ ] Map: two images side by side
- [ ] Footer: 4 columns (contact, hours, nav, social), copyright bottom bar
- [ ] Footer links to `https://www.componentdock.com/` (Component Dock)
- [ ] Scroll-to-top button works
- [ ] Fonts: Poppins (body), Work Sans (headings) via Google Fonts
- [ ] Brand colors: `#007AFF` primary, `#0BC6FF`→`#0d80f3` gradient, `#70D76A` accent
- [ ] Buttons: pill shape (border-radius 30px), gradient or outline variants
- [ ] Responsive: mobile hamburger menu, stacked layout on small screens
- [ ] No ColorLib references in app code — provenance only in spec/TEMPLATES.md
- [ ] `public/CNAME` contains `sudsly.free.componentdock.com`
- [ ] `package.json` homepage: `https://sudsly.free.componentdock.com`
- [ ] `npm install` run at root to register workspace in package-lock.json
