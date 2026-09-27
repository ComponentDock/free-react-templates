# Template: PropNest (Real Estate)

## Purpose

Recreation of ColorLib's **Rolast** real estate template.

- **Source:** https://colorlib.com/wp/template/rolast/
- **Preview:** https://preview.colorlib.com/theme/rolast/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/rolast-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Name mapping:** ColorLib `rolast` → `propnest` (new original name, no ColorLib reference in app code)

## Design tokens

Extracted from the live preview CSS (`style.css`):

| Token            | Value                             | Notes                                      |
| ---------------- | --------------------------------- | ------------------------------------------ |
| Font family      | `"Prompt", sans-serif`            | Google Fonts, weights 300–800              |
| Brand green      | `#0FB45F`                         | Primary CTA, search button, header phone btn |
| Dark navy        | `#140C40`                         | Text headings, footer background           |
| Secondary text   | `#646D77`                         | Body paragraphs, descriptions              |
| Muted text       | `#635c5c`                         | Subtle labels                              |
| Light background | `#f7f7f7`                         | Services section, alternating sections     |
| Footer text      | `#C2C5DB`                         | Footer paragraph text on dark bg           |
| Footer heading   | `#fff`                            | Footer column headings                     |
| Button radius    | `25px`                            | Rounded pill buttons                       |
| Button border    | `1px solid #0FB45F`               | Green border, white bg, green text         |
| Button hover     | `background: #0FB45F; color: #fff`| Green fill on hover                        |
| Header phone btn | `#0FB45F` background, no radius   | Flat green pill with phone icon            |
| Pricing highlight| `#dca73a`                         | Gold accent on price elements              |
| Accents          | `#FF6162`                         | Red accent (some hover states)             |

## Gherkin requirements

### Feature: PropNest — Real Estate Template

#### Scenario: Navbar
- **Given** the user loads the page
- **Then** a sticky navbar is visible with logo on the left
- **And** navigation links: Home, Property, About, Blog (with submenu), Contact
- **And** a phone number button (`+10 (65) 672 2674`) styled in brand green
- **And** the navbar becomes sticky on scroll with white background

#### Scenario: Hero section with search tabs
- **Given** the user is on the home page
- **Then** a full-width hero slider area is displayed with a background image
- **And** overlay text: "Find Your Dream Home" + "We Have Over Million Properties For You"
- **And** two tabs: "Buy Property" (active) and "Rent Property"
- **And** each tab contains a search form with Location input, Property type select, Bedroom select, and Search button
- **And** the Search button uses brand green styling

#### Scenario: Property listings grid
- **Given** the hero section is complete
- **Then** a "Searching for the Best Places?" heading section follows
- **And** 6 property cards in a 3-column grid
- **And** each card has: image, title, location pin icon + city, bed/bath count, and price
- **And** cards use white background with subtle shadow/border

#### Scenario: Completed cases / Featured section
- **Given** the property grid is complete
- **Then** a split section appears: left text panel + right image carousel
- **And** the left panel has heading "Just browse away. It's all here." + two paragraphs + "Browse Property" button
- **And** the right side is an owl-carousel of property images

#### Scenario: How it works / Steps
- **Given** the featured section is complete
- **Then** 4 numbered step cards appear in a row
- **And** steps: 1. Choose a category, 2. Find real estate, 3. Take the keys, 4. Live happy
- **And** each step has an icon/image, number badge, title, and description

#### Scenario: Meet Our Agents
- **Given** the steps section is complete
- **Then** a "Meet Our Agents" heading is centered
- **And** a horizontal carousel of agent cards
- **And** each agent card: photo, name, role ("Dual Agent"), social icons overlay on hover (Facebook, Twitter, Globe)

#### Scenario: Location carousel
- **Given** the agents section is complete
- **Then** a full-width image carousel shows city locations
- **And** each slide: background image + location label button (e.g. "London (20)", "Texas (20)")
- **And** images are edge-to-edge with no padding

#### Scenario: Footer
- **Given** the location carousel is complete
- **Then** a dark navy footer (`#140C40`) appears
- **And** 4 columns: Logo + description + social icons | About links | Services links | Newsletter form
- **And** the newsletter form has email input + "Subscribe" button
- **And** bottom bar: copyright text with heart icon and "Component Dock" link
- **And** NO ColorLib attribution — replaced with Component Dock branding

#### Scenario: Back to top button
- **Given** the user scrolls down
- **Then** a "back to top" floating button appears
- **And** clicking it scrolls smoothly to the top

## Verification checklist

- [ ] Navbar is sticky with logo + nav links + phone button
- [ ] Hero slider has background image, overlay text, tabbed search form
- [ ] Search form: Location input, Property type, Bedroom, Search button
- [ ] Buy/Rent tab switching works
- [ ] Property grid: 6 cards, 3 columns, image + title + location + beds + price
- [ ] Featured section: left text + right carousel
- [ ] How it works: 4 numbered steps
- [ ] Agents carousel with hover social overlay
- [ ] Location carousel with city labels
- [ ] Footer: 4 columns, newsletter form, Component Dock link
- [ ] Back-to-top button visible on scroll
- [ ] Responsive: mobile menu, stacked columns on small screens
- [ ] Color tokens: #0FB45F green, #140C40 navy, Prompt font
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
