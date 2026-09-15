# Template: Adnest (Classified Ads Directory)

## Purpose

Adnest is a single-page classified ads directory website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Classy Ads" free template (source:
https://colorlib.com/wp/template/classy-ads/), built under a DIFFERENT name
(**Adnest**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4

- TypeScript.

**Preview URL:** https://preview.colorlib.com/theme/classy-ads/ (unreachable — 404)
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/classyads-free-template.jpg

The original is a classified ads directory template with a dark-overlaid
hero with search bar, category icons row, featured ad listings grid, and
footer. It uses a clean, modern, minimal design aesthetic with a bright
teal accent color and neutral backgrounds.

## Design Tokens

Extracted from the screenshot analysis (preview unreachable, fell back to
screenshot as sole reference):

### Colors

| Token                   | Value                            | Usage                                                               |
| ----------------------- | -------------------------------- | ------------------------------------------------------------------- |
| Primary brand           | `#00C9B7` (bright teal/cyan)     | Search button, "Post an Ad" button, category icons, active nav text |
| Body background         | `#F8F9FA` (light off-white)      | Page background below hero                                          |
| Navigation background   | `#FFFFFF` (white)                | Header bar                                                          |
| Navigation text         | `#212121` (dark gray)            | Default nav links                                                   |
| Active nav text         | `#00C9B7` (teal)                 | Active/current nav link                                             |
| Hero headline           | `#FFFFFF` (white)                | Hero heading                                                        |
| Hero subtext            | `#E0E0E0` (muted white)          | Hero description paragraph                                          |
| Hero overlay            | `rgba(0, 0, 0, 0.5)` (50% black) | Dark overlay over hero background image                             |
| Section titles          | `#212121` (dark gray)            | "Featured Ads" heading                                              |
| Category labels         | `#212121` (dark gray)            | Category names                                                      |
| Category counts         | `#757575` (medium gray)          | Item count text                                                     |
| Category bar background | `#FFFFFF` (white)                | Elevated category icons strip                                       |
| Card background         | `#FFFFFF` (white)                | Ad listing cards                                                    |
| Input border            | `#E0E0E0` (light gray)           | Search input borders                                                |
| Footer background       | `#1a1a2e` (dark navy)            | Footer section                                                      |
| Footer text             | `rgba(255, 255, 255, 0.7)`       | Footer links and paragraphs                                         |

### Typography

| Token                 | Value                                                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Font family           | `"Inter", "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` |
| Hero headline weight  | 700 (bold)                                                                                                         |
| Hero headline size    | ~2.5rem                                                                                                            |
| Nav link weight       | 500 (medium)                                                                                                       |
| Section title weight  | 600 (semibold)                                                                                                     |
| Category label weight | 500 (medium)                                                                                                       |
| Body weight           | 400 (regular)                                                                                                      |

### Spacing & Shapes

| Token                | Value                                     |
| -------------------- | ----------------------------------------- |
| Button border-radius | 4px (slightly rounded rectangle)          |
| Button background    | `#00C9B7` (teal)                          |
| Button text          | `#FFFFFF` (white)                         |
| Button padding       | 10px 24px (search), 8px 16px (Post an Ad) |
| Input border-radius  | 4px                                       |
| Input padding        | 10px 16px                                 |
| Card border-radius   | 4px                                       |
| Card shadow          | `0 2px 4px rgba(0,0,0,0.1)`               |
| Category bar shadow  | `0 2px 4px rgba(0,0,0,0.1)`               |
| Hero height          | ~65vh                                     |
| Nav padding          | 16px vertical, 32px horizontal            |
| Nav container width  | max-width ~1200px centered                |

## Section Order (from screenshot, top to bottom)

1. **Navbar** — White bar with logo "CLASSYADS" (bold dark text), center nav links (Home, Ads, About with dropdown, Blog, Contact), right-aligned auth links (Log In, Register) + teal "Post an Ad" button. Flexbox space-between layout.

2. **Hero** — Full-width section (~65vh), background image with 50% black overlay. Centered content: large headline "Largest Classifieds In The World", subtext "You can buy, sell anything you want.", horizontal search bar with 3 inputs (text search, location with pin icon, category dropdown) + teal Search button.

3. **Category Strip** — Elevated white horizontal bar (card shadow) with 6 category items in a row: each has a teal icon, category label text, and item count in gray. Flexbox equal-width columns.

4. **Featured Ads** — Section heading "Featured Ads", then a 4-column CSS grid of ad listing cards. Each card has: white background, rounded corners, image at top, text content below. Light off-white page background.

5. **Footer** — Dark navy background with site links, copyright, and social icons. "Made with Component Dock" attribution.

## Requirements

### Requirement: Navbar renders correctly

The system SHALL render a sticky white navbar with the "CLASSYADS" logo, desktop nav links (Home, Ads, About with dropdown, Blog, Contact), auth links (Log In, Register), and a teal "Post an Ad" button.

#### Scenario: Navbar layout

- **WHEN** the page loads
- **THEN** the navbar SHALL display the "CLASSYADS" logo
- **AND** nav links "Home", "Ads", "About", "Blog", "Contact" SHALL be visible
- **AND** the "Post an Ad" teal button SHALL be visible
- **AND** "Log In" and "Register" links SHALL be visible

#### Scenario: Mobile hamburger toggle

- **WHEN** the user clicks the mobile menu toggle button
- **THEN** the mobile navigation menu SHALL expand showing all nav links and auth options
- **AND** the toggle button SHALL change to a close icon

### Requirement: Hero section renders search functionality

The system SHALL render a full-width hero section (~65vh) with a dark-overlaid background image, centered headline, subtext, and a horizontal search bar.

#### Scenario: Hero content

- **WHEN** the page loads
- **THEN** the hero SHALL show the headline "Largest Classifieds In The World"
- **AND** the subtext "You can buy, sell anything you want." SHALL be visible
- **AND** a search bar with "What are you looking for?" input SHALL be visible
- **AND** a "Location" input with pin icon SHALL be visible
- **AND** an "All Categories" dropdown SHALL be visible
- **AND** a teal "Search" button SHALL be visible

### Requirement: Category strip displays all categories

The system SHALL render an elevated white horizontal bar below the hero with 6 category items, each showing a teal icon, category name, and item count.

#### Scenario: Category items

- **WHEN** the page loads
- **THEN** 6 category items SHALL be displayed: Real Estate, Books & Magazines, Furniture, Electronics, Cars & Vehicles, Other
- **AND** each category SHALL show a teal icon, name, and item count
- **AND** the strip SHALL have white background with subtle shadow

### Requirement: Featured ads grid renders correctly

The system SHALL render a section heading "Featured Ads" followed by a 4-column grid of ad listing cards with white backgrounds, rounded corners, images, and text content.

#### Scenario: Ad cards

- **WHEN** the page loads
- **THEN** the "Featured Ads" heading SHALL be displayed
- **AND** ad cards SHALL be shown in a 4-column grid (responsive)
- **AND** each card SHALL have a white background with rounded corners
- **AND** each card SHALL show an image and text content (title, price, location)

### Requirement: Footer renders with Component Dock attribution

The system SHALL render a dark navy footer with brand, quick links, categories, social icons, and a "Component Dock" attribution link.

#### Scenario: Footer content

- **WHEN** the page loads
- **THEN** a dark footer section SHALL be visible
- **AND** the footer SHALL link to https://www.componentdock.com/ branded as "Component Dock"
- **AND** social media icon links SHALL be present

### Requirement: Mobile responsive layout

The system SHALL adapt all sections for mobile viewports (≤768px).

#### Scenario: Mobile layout

- **WHEN** the page loads on a mobile viewport
- **THEN** the navbar SHALL collapse to a hamburger menu
- **AND** the hero search bar SHALL stack vertically
- **AND** the category strip SHALL be scrollable
- **AND** the featured ads grid SHALL become single column
