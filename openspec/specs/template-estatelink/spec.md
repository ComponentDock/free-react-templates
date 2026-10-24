# Template: EstateLink (Real Estate)
<!-- prep-status: shipped-as=homefront -->
> **SHIPPED-UNDER** — the ColorLib `royalestate` design this prep describes already
> ships as `apps/homefront` (<https://homefront.free.componentdock.com>).
> Do not scaffold `apps/estatelink`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-homefront/spec.md`.

## Purpose

Recreation of ColorLib **Royalestate** — a real estate property listing template.
- Source: https://colorlib.com/wp/template/royalestate/
- Preview: https://preview.colorlib.com/theme/royalestate/
- Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from the ColorLib preview stylesheet (`css/style.css`):

| Token             | Value                     | Notes                                  |
| ----------------- | ------------------------- | -------------------------------------- |
| Primary           | `#78d5ef`                 | Light cyan-blue, used on buttons, nav  |
| Secondary         | `#6c757d`                 | Gray, body text secondary              |
| Dark background   | `#212529`                 | Navbar, footer, dark sections          |
| Light background  | `#f8f9fa`                 | `bg-light` alternating sections        |
| Overlay           | `rgba(0,0,0,0.2)`        | Hero image overlay                     |
| Button radius     | `30px`                    | Pill-shaped buttons on hero CTA        |
| Font family       | `"Work Sans"`             | sans-serif; headings + body            |
| Counter text      | `#fff` on hero bg image   | White numbers + labels                 |
| Blog card header  | `#78d5ef`                 | Same primary accent on blog cards      |
| Surface (measured) | `#26baee` | paints it ×27 — `background` on `.bg-primary`; style.css (76,655 B, sha256 79b9bd0b7809) · <https://preview.colorlib.com/theme/royalestate/> |

## Section structure (from live preview DOM)

| #   | Section                       | Background                       | Key elements                                                   |
| --- | ----------------------------- | -------------------------------- | -------------------------------------------------------------- |
| 1   | Hero slider (owl-carousel)    | Full-width image + dark overlay  | Property address, price, "View Details" CTA pill button        |
| 2   | Search property bar           | White bar below hero             | Keyword, city, type, beds, bath, price, area, Search button    |
| 3   | Feature cards (bg-light)      | Light gray                       | 4 cards with icons: Find Places, Agents, Buy & Rent, Money    |
| 4   | Recent properties             | White                            | 4 property cards in grid (image, price, address, beds/bath)    |
| 5   | Most recommended (bg-light)   | Light gray                       | 4 property cards (same layout as Recent)                       |
| 6   | Counter / fun facts           | Full-width bg image              | 4 counters: Happy Customers, Properties, Agents, Awards        |
| 7   | Testimonials (bg-light)       | Light gray                       | Owl-carousel with testimonial cards                            |
| 8   | Recent blog                   | White                            | 4 blog entry cards (image, date, title, excerpt)               |
| 9   | Newsletter / parallax         | Parallax bg image                | Subscribe form with email + CTA button                         |
| 10  | Footer (dark)                 | `#212529` dark                   | Company info, Buy/Sell/Have sections, social links, contact    |

## Requirements

### Hero slider

Feature: Hero slider with property showcase

#### Scenario: Displays property address and price

- **GIVEN** the hero slider is loaded
- **THEN** the property address is visible (e.g. "Florida 5, Pinecrest, FL")
- **AND** the price is displayed (e.g. "$28,000")
- **AND** a location pin icon is shown with suburb

#### Scenario: View Details CTA button

- **GIVEN** the hero slider is loaded
- **THEN** a "View Details" button is visible
- **AND** it is pill-shaped (border-radius 30px)
- **AND** it uses the primary cyan color (#78d5ef)

#### Scenario: Background image with overlay

- **GIVEN** the hero slider is loaded
- **THEN** a full-width background image is shown
- **AND** a dark overlay (20% opacity) is applied

### Search bar

Feature: Property search form

#### Scenario: Search fields are displayed

- **GIVEN** the search bar section is loaded
- **THEN** fields are visible: Keyword, City/Locality, Type, Beds, Bath, Price, Area

#### Scenario: Search button triggers filter

- **GIVEN** the user has entered search criteria
- **WHEN** they click the Search button
- **THEN** the properties section filters accordingly

### Feature cards

Feature: Feature highlights section

#### Scenario: Four feature cards are shown

- **GIVEN** the features section is loaded on a light background
- **THEN** 4 cards are visible with icons
- **AND** the card titles are: Find Places, Agents Experience, Buy & Rent, Making Money
- **AND** each card has descriptive text beneath the title

### Recent properties

Feature: Recent property listings

#### Scenario: Property grid is displayed

- **GIVEN** the Recent Properties section loads
- **THEN** 4 property cards are shown in a responsive grid
- **AND** each card shows: image, price, address, beds count, bath count

#### Scenario: Property cards have hover interaction

- **GIVEN** a property card is visible
- **WHEN** the user hovers over it
- **THEN** the card shows a subtle elevation or overlay effect

### Most recommended

Feature: Most recommended properties

#### Scenario: Recommended section matches Recent layout

- **GIVEN** the Most Recommended section loads on a light background
- **THEN** 4 property cards are shown in the same grid layout
- **AND** the section heading reads "Most Recommended Properties"

### Counter / fun facts

Feature: Statistics counters

#### Scenario: Four counters are displayed

- **GIVEN** the counter section loads with a background image
- **THEN** 4 stat blocks are visible: Happy Customers, Properties, Agents, Awards
- **AND** all numbers and labels are white text
- **AND** numbers animate (count up) on scroll into view

### Testimonials

Feature: Testimonial carousel

#### Scenario: Testimonials carousel is functional

- **GIVEN** the testimonials section loads on a light background
- **THEN** a carousel of testimonial cards is visible
- **AND** each card has an avatar, name, and quote text
- **AND** the carousel auto-plays or allows manual navigation

### Recent blog

Feature: Blog entries

#### Scenario: Blog cards are displayed

- **GIVEN** the Recent Blog section loads
- **THEN** 4 blog entry cards are shown
- **AND** each card shows: image, date, title, and excerpt

### Newsletter / parallax

Feature: Newsletter subscription

#### Scenario: Parallax newsletter section

- **GIVEN** the newsletter section loads
- **THEN** a parallax background image is shown
- **AND** a heading "Subscribe to our Newsletter" is visible
- **AND** an email input field + subscribe button are present

### Footer

Feature: Site footer

#### Scenario: Footer layout

- **GIVEN** the footer renders
- **THEN** it has a dark background (#212529)
- **AND** columns show: company info, Buy, Sell, Have a Question sections
- **AND** social media icon links are present
- **AND** a Component Dock link is in the footer

#### Scenario: Component Dock branding

- **GIVEN** the footer is rendered
- **THEN** a link to https://www.componentdock.com/ is present
- **AND** it is labeled "Component Dock"

## Verification checklist

- [ ] Hero slider renders with background image, overlay, address, price, pill CTA
- [ ] Search bar has all field inputs (keyword, city, type, beds, bath, price, area)
- [ ] Feature cards section (4 cards, icons, titles, descriptions) on light bg
- [ ] Recent properties grid (4 cards, image, price, address, stats) on white bg
- [ ] Most recommended section matches recent layout on light bg
- [ ] Counter section with background image, 4 animated stats, white text
- [ ] Testimonials carousel with avatar + quote cards on light bg
- [ ] Blog entries section with 4 cards (image, date, title, excerpt)
- [ ] Newsletter parallax section with email input + subscribe CTA
- [ ] Footer with dark bg, 4 columns, social icons, Component Dock link
- [ ] Primary color #78d5ef used consistently (buttons, accents)
- [ ] Font "Work Sans" applied to headings and body
- [ ] Pill-shaped buttons (border-radius 30px) on CTAs
- [ ] Responsive layout works at mobile breakpoints
- [ ] 100% test coverage (lines, functions, branches, statements)
