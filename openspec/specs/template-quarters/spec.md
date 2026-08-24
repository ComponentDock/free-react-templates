# Template: Quarters (Apartment & Real Estate)

## Purpose

Recreation of ColorLib **Props** — a real estate landing page with a transparent navbar over a full-viewport hero, property information split panel, apartment browse grid, featured apartments collage, customer testimonials carousel, news cards, social strip, and a three-column footer.

- **Source slug:** `props`
- **Preview URL:** https://preview.colorlib.com/theme/props/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/props-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens

### Fonts

- **Headings:** `'Oswald', sans-serif` — uppercase, bold, wide letter-spacing
- **Body:** `'Nunito Sans', sans-serif` — light/regular weight

### Colors

| Token         | Hex       | Usage                                                              |
| ------------- | --------- | ------------------------------------------------------------------ |
| `brand`       | `#e3c4a8` | Buttons, underlines, card-title highlights, logo dot, social strip |
| `brand-dark`  | `#ddb795` | Social hover background                                            |
| `brand-hover` | `#eec60a` | Social icon hover color                                            |
| `ink`         | `#333333` | Body text                                                          |
| `soft`        | `#edf0f5` | News section background                                            |
| `muted`       | `#777777` | Property list details                                              |
| `faint`       | `#737373` | Footer blurb text                                                  |
| `secondary`   | `#6c757d` | Uppercase date labels                                              |

### Spacing / Layout

- **Hero:** full-viewport (min-height 600px, h-screen), `rgba(0,0,0,0.4)` overlay
- **Property info:** split panel (photo left, spec list right), overlaps hero by 100px
- **Browse grid:** 4-up on desktop, 2-up tablet, stacked mobile
- **Featured collage:** 1 tall left + 2 stacked right
- **News:** 3-up on light #EDF0F5 background
- **Footer:** 3-column white, `pt-[7em]`

### Button style

- Square (no border-radius), tan `#e3c4a8` background, white text, uppercase
- Hover: darker tan `#ddb795`

## Requirements

### Requirement: Quarters SHALL provide a complete real estate landing page with navbar, hero, property details, apartments, testimonials, news, social strip, and footer

Quarters SHALL provide a transparent navbar with the brand name "Quarters." and a trailing tan dot, desktop links (Home, About, Apartments with dropdown, News, Contact), and a mobile hamburger that opens a 300px slide-in panel from the right.

#### Scenario: Navbar displays with brand and navigation links

Given a user visits the Quarters homepage
Then they see a transparent navbar floating over the hero
And the brand name "Quarters." is displayed with a trailing tan dot
And desktop navigation links are visible: Home, About, Apartments, News, Contact
And the Apartments link has a dropdown with sub-items

#### Scenario: Mobile hamburger opens slide-in menu

Given a user on a mobile viewport
Then the hamburger button is visible
And clicking it opens a 300px white slide-in panel from the right
And the panel contains all navigation links
And clicking a link or the close button dismisses the panel

#### Scenario: Hero section displays full-viewport cover

Given the page loads
Then the hero occupies the full viewport with a cover photo
And a dark overlay (rgba(0,0,0,0.4)) covers the image
And the heading "Excellent Space For Your Next Home" is centered in white uppercase text
And the address line is displayed below the heading
And a square tan "Take a Tour" button is centered below

#### Scenario: Property information shows split panel

Given the user scrolls past the hero
Then a split panel appears overlapping the hero by 100px
And the left side shows a property photo
And the right side shows property details: name, room, area, category, date
And a "Get Details" CTA button is at the bottom

#### Scenario: Browse Apartments shows 4 cards in responsive grid

Given the user scrolls to the Browse Apartments section
Then 4 apartment cards are displayed in a 4-column grid on desktop
And each card shows a cover photo with city name on a tan highlight
And the price is shown on a black highlight below the city name
And a "Browse All Apartments" CTA is centered below

#### Scenario: Featured Apartments shows collage layout

Given the user scrolls to the Featured Apartments section
Then one tall card is displayed on the left (50% width)
And two stacked cards are displayed on the right (50% width)
And each card shows title and price overlays

#### Scenario: Testimonials carousel navigates between slides

Given the user scrolls to the testimonials section
Then the first testimonial is visible with avatar, name, and quote
And dot indicators show the current position
And prev/next arrows allow navigation
And navigation wraps at both ends

#### Scenario: News & Events shows 3 cards on light background

Given the user scrolls to the News section
Then 3 news cards are displayed on a light #EDF0F5 background
And each card shows an image, uppercase date, and headline link

#### Scenario: Social strip displays 6 icons in tan band

Given the user scrolls to the social strip
Then a full-width tan band is displayed
And 6 white social icons are evenly spaced
And hovering an icon turns it yellow on a darker tan background

#### Scenario: Footer includes all required sections

Given the user scrolls to the footer
Then a white 3-column footer is displayed
And column 1 has "About Quarters" heading and a subscribe form
And column 2 has Navigations links and Follow Us social icons
And column 3 has "Watch Live Streaming" with a video card and play button
And the bottom bar shows copyright text
And the footer links to Component Dock at https://www.componentdock.com/

## Verification checklist

- [ ] Fonts: Oswald + Nunito Sans loaded via Google Fonts
- [ ] Navbar: transparent, white brand with tan dot, desktop links, mobile hamburger
- [ ] Hero: full-viewport, dark overlay, heading, address, CTA button
- [ ] Property info: split panel overlapping hero
- [ ] Browse Apartments: 4 cards with tan/black highlights
- [ ] Featured Apartments: collage layout
- [ ] Testimonials: carousel with dots and arrows
- [ ] News: 3 cards on light background
- [ ] Social strip: 6 icons in tan band
- [ ] Footer: 3 columns, subscribe form, Component Dock link
- [ ] Mobile: hamburger menu, stacked grids
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
