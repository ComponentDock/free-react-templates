# Template: PipeFix (Plumbing / Services)

## Purpose

Recreation of ColorLib's **Plumber** template as a modern React 19 + Vite + Tailwind 4 + TypeScript single-page plumbing/services business site.

- **Source:** https://colorlib.com/wp/template/plumber/
- **Preview:** https://preview.colorlib.com/theme/plumber/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/plumber-free-template.jpg
- **New name:** `pipefix` (apps/pipefix, @free-react-templates/pipefix)
- **Category:** Plumbing / Services

## Design Tokens

Extracted from the live preview CSS (`css/main.css`):

| Token | Value | Usage |
|---|---|---|
| Primary / Accent | `#f53f51` (red) | CTA buttons, active states, logo border, counters, hover accents |
| Dark navy | `#04091e` | Banner overlay, call-to-action bg, footer bg |
| Light bg | `#f9f9ff` | Feature area bg, form inputs, testimonial bg, alternate sections |
| White | `#ffffff` | Main bg, card bg, feature cards |
| Text dark | `#222` | Headings, body text |
| Text muted | `#777` | Body text, placeholders |
| Footer text | `#cccccc` | Social icons, footer text |
| Font family | `Poppins, sans-serif` | All text |
| Font icons | FontAwesome | Icon glyphs (use lucide-react instead) |
| Button shape | `border-radius: 50px` (pill) | Primary CTA button |
| Button hover | transparent bg + white border | On primary-btn hover |
| Counter accent | `#f53f51` | Counter numbers, red accent |
| Card radius | `border-radius: 10px` | Feature cards, testimonial cards, counters |
| Input style | transparent bg, `border: 1px solid rgba(111,117,152,0.3)` | Contact form inputs |

### Color Mapping (Tailwind @theme)

```
--color-primary: #f53f51;
--color-navy: #04091e;
--color-surface: #f9f9ff;
--color-muted: #777777;
--color-heading: #222222;
```

## Section Structure (from live preview DOM, in order)

1. **Navbar** — fixed top, transparent on scroll, logo "PipeFix" with red left border, nav links (Home, Services, Features, Testimonials, Contact) + hamburger on mobile.
2. **Banner/Hero** — full-width dark background image with navy overlay (rgba(4,9,30,0.9)), "We're your plumber" heading (72px, bold, uppercase), description text, "Get a Quote" pill button.
3. **Quote Section** — two-column: left side has description text, right side has styled quote "Plumbing for those Area Nowhere." with accent spans.
4. **Service Categories** — 3 service cards in a row: Maintenance, Residential Service, Commercial Service. Each with a hexagon icon and description.
5. **Features Section** — left: image of person working, right: "Features That make us Unique" heading + 4 feature cards (Multiple Layouts, Clean Coding, Endless Features, Fully Customizable). Cards have white bg, hover shadow.
6. **Counter Section** — 4 stat counters in a row: Happy Clients (2536), Total Projects (6784), Cups Coffee (1059), Tickets Submitted (12239). Red accent numbers, white cards with red shadow.
7. **Video Section** — dark background image with overlay, "Explore ourself in a new way" heading, play button.
8. **Call-to-Action** — dark navy section, "Got Impressed to our features" heading, description, "Get a free Quote" white pill button.
9. **Testimonials** — carousel of testimonial cards: star rating, quote text, client name + role. Light bg. Cards have rounded corners.
10. **Contact Section** — dark navy bg, "Get in Touch" heading (white), description. Below: form (Name, Email, Message) with transparent inputs + "Send Message" button.
11. **Footer** — dark navy bg, 3 widget columns (About with newsletter input, Support links, Social icons), copyright bar with Component Dock link.

## Gherkin Requirements

### Feature: PipeFix — Plumbing Services Template

#### Scenario: Navbar renders with logo and navigation links
- Given the user loads the page
- Then the navbar displays the "PipeFix" logo with a red left border
- And the navbar shows links: Home, Services, Features, Testimonials, Contact
- And a hamburger menu is available on mobile viewports

#### Scenario: Hero banner displays with heading and CTA
- Given the user loads the page
- Then the banner section shows a full-width dark background image
- And the heading "We're your plumber" is displayed in large white text
- And a description paragraph is visible
- And a "Get a Quote" pill button is displayed

#### Scenario: Quote section shows plumbing tagline
- Given the user scrolls to the quote section
- Then a two-column layout is displayed
- And the right column shows a styled quote with accent text
- And the left column shows descriptive text

#### Scenario: Service categories display 3 service types
- Given the user scrolls to the services section
- Then 3 service cards are displayed in a row
- And each card shows: Maintenance, Residential Service, or Commercial Service
- And each card has a hexagon icon and description text

#### Scenario: Features section shows 4 unique features
- Given the user scrolls to the features section
- Then a left-side image and right-side content layout is displayed
- And the heading "Features That make us Unique" is visible
- And 4 feature cards are shown: Multiple Layouts, Clean Coding, Endless Features, Fully Customizable
- When the user hovers a feature card
- Then a shadow effect appears

#### Scenario: Counter section displays statistics
- Given the user scrolls to the counter section
- Then 4 counters are displayed: Happy Clients, Total Projects, Cups Coffee, Tickets Submitted
- And each counter shows a large red number
- And each counter animates on scroll into view

#### Scenario: Video section displays with play button
- Given the user scrolls to the video section
- Then a dark background image is shown with overlay
- And the heading "Explore ourself in a new way" is displayed
- And a play button is visible

#### Scenario: Call-to-action section encourages quote
- Given the user scrolls to the call-to-action section
- Then a dark navy background is displayed
- And the heading "Got Impressed to our features" is visible
- And a "Get a free Quote" white pill button is displayed

#### Scenario: Testimonials carousel shows client reviews
- Given the user scrolls to the testimonials section
- Then a carousel of testimonial cards is displayed
- And each card shows a star rating, quote text, and client name
- And navigation dots are visible at the bottom

#### Scenario: Contact form renders with all fields
- Given the user scrolls to the contact section
- Then the heading "Get in Touch" is displayed on dark background
- And a Name input field is present
- And an Email input field is present
- And a Message textarea is present
- And a "Send Message" button is present

#### Scenario: Contact form validates required fields
- Given the contact form is visible
- When the user clicks "Send Message" without filling fields
- Then validation errors appear for Name, Email, and Message

#### Scenario: Footer displays widgets and copyright
- Given the user scrolls to the footer
- Then an About widget is visible with newsletter input
- Then a Support widget is visible with navigation links
- Then a Social widget is visible with social media icons
- And a copyright line with "Component Dock" link is present

#### Scenario: Mobile responsive layout
- Given the user views the page on a 375px viewport
- Then the navbar collapses to a hamburger menu
- And the hero banner text is readable
- And service cards stack vertically
- And the contact form is full-width

## Verification Checklist

- [ ] Navbar with logo (red left border), nav links, mobile hamburger
- [ ] Hero banner with dark background image, heading, description, CTA pill button
- [ ] Quote section with two-column layout and styled quote
- [ ] 3 service category cards (Maintenance, Residential, Commercial)
- [ ] Features section with image + 4 feature cards with hover shadow
- [ ] Counter section with 4 animated stat counters (red accent)
- [ ] Video section with dark background, heading, play button
- [ ] Call-to-action section with dark navy bg, heading, white pill button
- [ ] Testimonials carousel with star ratings, quotes, client names
- [ ] Contact form with Name, Email, Message fields + Send Message button
- [ ] Contact form validation (required field errors)
- [ ] Footer with About/Support/Social widgets + copyright with Component Dock link
- [ ] Mobile responsive (hamburger nav, stacked layout)
- [ ] Design tokens: red primary (#f53f51), navy (#04091e), Poppins font, pill buttons
- [ ] Placeholder images via picsum.photos
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] 100% test coverage
