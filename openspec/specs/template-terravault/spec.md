# Template: Terravault (Real Estate)

## Purpose

Recreation of ColorLib **Azenta** — a real estate website template with a
hero property showcase, search form, featured listings, agents, and blog.

- **Source:** https://colorlib.com/wp/template/azenta/
- **Preview:** https://preview.colorlib.com/theme/azenta/
- **New name:** `terravault` (apps/terravault, @free-react-templates/terravault)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Replication note:** Preview was reachable. DOM, CSS tokens, and screenshot
  analyzed from the live preview and ColorLib template page.

---

## Design Tokens

### Colors

| Token      | Hex     | Usage                                  |
| ---------- | ------- | -------------------------------------- |
| brand-teal | #2cbdb8 | Primary accent, buttons, active states |
| dark-bg    | #19191a | Navbar, hero overlay, section headings |
| gray-text  | #707079 | Body text, secondary text              |
| light-gray | #aaaab3 | Subtle text, borders                   |
| white      | #ffffff | Page background, card backgrounds      |
| off-white  | #F2F4F5 | Alternate section backgrounds          |
| red-accent | #E1481F | Price highlight (sparingly used)       |

### Typography

| Property       | Value               |
| -------------- | ------------------- |
| Font (all)     | Poppins, sans-serif |
| Heading weight | 600-700 (bold)      |
| Body weight    | 400 (normal)        |

### Buttons / Interactive

| Element    | Style                                                |
| ---------- | ---------------------------------------------------- |
| CTA button | Teal (#2cbdb8) bg, white text, rounded (50px radius) |
| Submit btn | Teal bg, white text, rounded pill shape              |
| Search btn | Teal bg, white text, rounded (50px radius)           |
| Tab active | Teal bg on "Find Your Home" tab                      |

### Layout

| Section        | Layout                                                                                                           |
| -------------- | ---------------------------------------------------------------------------------------------------------------- |
| Navbar         | Dark bg, white links, language dropdown, teal "Submit Property" button                                           |
| Info bar       | White bar below nav: logo left, phone/address/email right with teal icons                                        |
| Hero           | Full-width property photo with centered overlay card (address, name, price, stats) + thumbnail gallery below     |
| Search         | Teal tab bar ("Find Your Home" / "House For Sell") + form with dropdowns, price/size sliders, teal Search button |
| How It Work    | 3-step process with icons: Search & Find, Find Your Room, Talk To Agent                                          |
| Featured       | 4-column property cards (image, name, price)                                                                     |
| Top Properties | 3-column property cards with larger images and price                                                             |
| Agents         | 4-column agent cards (photo, name, role)                                                                         |
| Blog           | 3-column blog cards (image, title, date)                                                                         |
| Newsletter     | Subscribe section with email input                                                                               |
| Footer         | Dark bg, city links, social icons, Component Dock link                                                           |

---

## Requirements

### Requirement: Navbar renders with navigation and language selector

The template SHALL display a dark navbar with navigation links, a language dropdown, and a teal "Submit Property" button.

#### Scenario: Navbar renders with navigation and language selector

- **WHEN** the page loads
- **THEN** a dark navbar is visible
- **AND** it contains links: Home, Property, Agents, News, Pages, Contact
- **AND** a language dropdown (English) is visible
- **AND** a teal "Submit Property" button is present

### Requirement: Info bar shows contact details

The template SHALL display an info bar below the navbar with logo and contact details.

#### Scenario: Info bar shows contact details

- **WHEN** the page loads
- **THEN** an info bar is visible below the navbar
- **AND** it shows the logo on the left
- **AND** phone, address, and email are displayed on the right with teal icons

### Requirement: Hero section with property showcase

The template SHALL display a hero section with a full-width property photo, overlay card, price, and stats.

#### Scenario: Hero section with property showcase

- **WHEN** the page loads
- **THEN** the hero section is visible with a full-width property photo
- **AND** a centered overlay card shows the address and property name
- **AND** the price "$3,000,000" is displayed
- **AND** property stats are shown: sqft, bedrooms, bathrooms, garage

### Requirement: Search form with tabs

The template SHALL display a search form with tabbed interface and filter controls.

#### Scenario: Search form with tabs

- **WHEN** the page loads
- **THEN** a search form is visible
- **AND** it has two tabs: "Find Your Home" (teal active) and "House For Sell"
- **AND** form fields include: property type, title, city, bedrooms
- **AND** price and size sliders are present
- **AND** a teal "Search" button is present

### Requirement: How It Work section

The template SHALL display a 3-step process section with icons and descriptions.

#### Scenario: How It Work section

- **WHEN** the page loads
- **THEN** the "How It Work" section is visible
- **AND** 3 steps are shown with icons: Search & Find Apartment, Find Your Room, Talk To Agent
- **AND** a teal underline accent is below the heading

### Requirement: Featured Properties grid

The template SHALL display a 4-column grid of featured property cards.

#### Scenario: Featured Properties grid

- **WHEN** the page loads
- **THEN** a "Featured Properties" section is visible
- **AND** 4 property cards are shown in a row
- **AND** each card shows an image, property name, and price

### Requirement: Top Properties section

The template SHALL display a 3-column grid of larger property cards.

#### Scenario: Top Properties section

- **WHEN** the page loads
- **THEN** a "Top Properties" section is visible
- **AND** 3 larger property cards are displayed with images and prices

### Requirement: Our Agents section

The template SHALL display a 4-column grid of agent cards.

#### Scenario: Our Agents section

- **WHEN** the page loads
- **THEN** an "Our Agents" section is visible
- **AND** 4 agent cards are shown
- **AND** each card has a photo, name, and role

### Requirement: Blog/News section

The template SHALL display a 3-column grid of blog cards.

#### Scenario: Blog/News section

- **WHEN** the page loads
- **THEN** a "News Latest" blog section is visible
- **AND** 3 blog cards are shown with images and titles

### Requirement: Newsletter subscribe

The template SHALL display a newsletter subscribe section with email input.

#### Scenario: Newsletter subscribe

- **WHEN** the page loads
- **THEN** a newsletter subscribe section is visible
- **AND** an email input and subscribe button are present

### Requirement: Footer

The template SHALL display a dark footer with city links, social icons, and a Component Dock link.

#### Scenario: Footer

- **WHEN** the page loads
- **THEN** a dark footer is visible
- **AND** it shows city links (Florida, New York, Washington, etc.)
- **AND** social media icons are present
- **AND** it links to https://www.componentdock.com/
