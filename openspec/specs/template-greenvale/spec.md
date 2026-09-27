# Template: GreenVale (Real Estate)

## Purpose

Recreation of ColorLib's **Ecoverde** real estate template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app.

- **Source**: [colorlib.com/wp/template/ecoverde/](https://colorlib.com/wp/template/ecoverde/)
- **Preview**: [preview.colorlib.com/theme/ecoverde/](https://preview.colorlib.com/theme/ecoverde/)
- **Stack**: React 19 · Vite · Tailwind CSS 4 · TypeScript strict
- **New name**: `greenvale` (apps/greenvale)
- **Package**: `@free-react-templates/greenvale`

## Design tokens (extracted from preview stylesheet)

| Token | Value | Notes |
|-------|-------|-------|
| Font family | Nunito Sans (200–900) | Google Fonts via @font-face; weights 200–900 |
| Brand green | `#24A148` | Links, active states, buttons, bg-primary, search-bg |
| Dark overlay | `#21243d` | Hero overlay (0.5 opacity), search form bg |
| Dark section bg | `#0f101c` | bg-darken (How it works, dark sections) |
| Body text | `#666666` | Line-height: 1.8, weight 400 |
| Headings | `rgba(0,0,0,0.8)` | Weight 400 |
| White text | `#fff` | Hero title, nav links |
| White text dim | `rgba(255,255,255,0.8)` | Hero subtitle, search labels |
| White text muted | `rgba(255,255,255,0.4)` | Search placeholders, icons |
| Button shape | Border-radius: 3px | Pill-free; clean rectangular |
| Button primary | `#24A148` bg, white text | Hover: transparent bg, green border, green text |
| Search card | `#21243d` bg, border-radius 5px | Large box-shadow, negative margin-top to overlap hero |
| Property card shadow | `0px 5px 21px -14px rgba(0,0,0,0.14)` | |
| Container max-width | 1250px | |
| Hero height | 850px | Background image, overlay, centered text |
| Navbar | Transparent default | White text; black bg on mobile; white bg + shadow on scroll |
| Active nav | `#24A148` | Green highlight for current page |

## Sections (order from preview)

1. **Navbar** — Transparent overlay on hero; logo left, 7 nav links (Home, About, Agent, Services, Properties, Blog, Contact) right. Toggles to fixed white bg on scroll. Mobile: black bg, hamburger.
2. **Hero** — Full-viewport background image with dark overlay (#21243d, 50% opacity). Title "Find Perfect House From Your Area.", subtitle text, green CTA button "View all properties".
3. **Search Form** — Dark card (#21243d) overlapping hero bottom. 5 fields: Keyword (text input), Property Type (select: Residence/Offices/Commercial), Location (text input), Price Limit (select: $5K–$2M), Search button (green). Rounded 5px, large shadow.
4. **Services Strip** — Green bg (#24A148), 4 columns: icon + title + description. "Trusted by Thousands", "Wide Range of Properties", "Financing Made Easy", "Locked in Pricing". Darker/lighter green variants on alternating columns.
5. **Featured Properties** — Carousel of property cards. Each: image with Sale/Rent badge, price overlay, bed/bath/sqft icons, title link, location, agent avatar + name, timestamp.
6. **Cities** — "Properties for this Cities" heading. 3-column image cards: Miami (24 Properties), Chicago (20 Properties), Illinois (15 Properties). Image bg with overlay text.
7. **How It Works** — Dark bg (#0f101c). "Work flow" subheading. 4 numbered steps (01–04) with icons and descriptions in a row.
8. **Agents** — 4-column grid of agent cards: photo, name, listing count, location.
9. **Blog** — "Recent Blog" heading. 4-column blog cards: image, date, author, comment count, title.
10. **Footer** — 5-column layout: brand + social icons, Community links, About Us links, Company links, Contact info (address, phone, email). Copyright bar below.

## Gherkin scenarios

```gherkin
Feature: GreenVale Real Estate Template

  Background:
    Given the GreenVale app is loaded at "/"

  # Navbar
  Scenario: Transparent navbar with logo and navigation
    Then I should see a navbar with logo text "GreenVale"
    And I should see navigation links: "Home", "About", "Agent", "Services", "Properties", "Blog", "Contact"
    And the navbar should be transparent over the hero

  Scenario: Navbar becomes fixed on scroll
    When I scroll down past the hero
    Then the navbar should become fixed with white background and shadow

  # Hero
  Scenario: Hero displays headline, description, and CTA
    Then I should see the heading "Find Perfect House From Your Area."
    And I should see a description paragraph
    And I should see a "View all properties" button with green styling

  Scenario: Hero has dark overlay on background image
    Then the hero section should have a background image with dark overlay

  # Search Form
  Scenario: Search form shows 5 filter fields
    Then I should see a "Keyword" text input
    And I should see a "Property Type" select dropdown
    And I should see a "Location" text input
    And I should see a "Price Limit" select dropdown
    And I should see a green "Search" submit button

  Scenario: Search form card overlaps hero
    Then the search form card should have a dark background and rounded corners

  # Services Strip
  Scenario: Services strip shows 4 service cards on green background
    Given I scroll to the services section
    Then I should see 4 service items with icons, titles, and descriptions
    And the section background should be green (#24A148)

  # Featured Properties
  Scenario: Featured Properties carousel shows property cards
    Given I scroll to the "Featured Properties" section
    Then I should see property cards with image, Sale/Rent badge, price, bed/bath/sqft icons, title, location, and agent info

  # Cities
  Scenario: Cities section shows 3 city cards
    Given I scroll to the "Properties for this Cities" section
    Then I should see 3 city cards: Miami (24 Properties), Chicago (20 Properties), Illinois (15 Properties)

  # How It Works
  Scenario: How It Works shows 4 numbered steps
    Given I scroll to the "How it works" section
    Then I should see 4 steps numbered 01 through 04 with titles and descriptions

  # Agents
  Scenario: Agents section shows 4 agent profiles
    Given I scroll to the agents section
    Then I should see 4 agent cards with photo, name, and listing count

  # Blog
  Scenario: Blog section shows 4 recent posts
    Given I scroll to the "Recent Blog" section
    Then I should see 4 blog cards with image, date, author, comment count, and title

  # Footer
  Scenario: Footer shows brand, navigation columns, and contact info
    Then I should see a footer with brand name, Community links, About Us links, Company links, and contact details
    And the footer should link to "https://www.componentdock.com/" labeled "Component Dock"

  # Responsive
  Scenario: Mobile hamburger menu
    Given I resize the viewport to 375px width
    Then I should see a hamburger menu button
    And the navbar background should be black

  Scenario: Search form stacks on mobile
    Given I resize the viewport to 375px width
    Then the search form fields should stack vertically
```

## Verification checklist

- [ ] Navbar: transparent default, 7 nav links, logo, fixed on scroll, mobile hamburger
- [ ] Hero: full-height bg image, dark overlay, heading, subtitle, green CTA button
- [ ] Search form: dark card, 5 fields (keyword, type, location, price, search btn), rounded, shadow
- [ ] Services strip: green bg, 4 columns with icons, titles, descriptions
- [ ] Featured Properties: carousel, property cards with badge, price, icons, title, location, agent
- [ ] Cities: 3 image cards with overlay text (city name + property count)
- [ ] How It Works: dark bg, 4 numbered steps
- [ ] Agents: 4-column agent cards with photo, name, listing count
- [ ] Blog: 4 blog cards with image, meta info, title
- [ ] Footer: 5 columns (brand, Community, About, Company, Contact), copyright, Component Dock link
- [ ] Font: Nunito Sans from Google Fonts
- [ ] Colors: brand green #24A148, dark overlay #21243d, dark bg #0f101c
- [ ] Buttons: border-radius 3px, green bg, transparent on hover
- [ ] Responsive: hamburger menu, stacked layouts on mobile
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
