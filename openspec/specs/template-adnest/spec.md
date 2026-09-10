# Template: Adnest (Classified Ads Directory)

## Purpose

Adnest is a single-page classified ads directory website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Classy Ads" free template (source:
https://colorlib.com/wp/template/classy-ads/), built under a DIFFERENT name
(**Adnest**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4
+ TypeScript.

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

| Token | Value | Usage |
|-------|-------|-------|
| Primary brand | `#00C9B7` (bright teal/cyan) | Search button, "Post an Ad" button, category icons, active nav text |
| Body background | `#F8F9FA` (light off-white) | Page background below hero |
| Navigation background | `#FFFFFF` (white) | Header bar |
| Navigation text | `#212121` (dark gray) | Default nav links |
| Active nav text | `#00C9B7` (teal) | Active/current nav link |
| Hero headline | `#FFFFFF` (white) | Hero heading |
| Hero subtext | `#E0E0E0` (muted white) | Hero description paragraph |
| Hero overlay | `rgba(0, 0, 0, 0.5)` (50% black) | Dark overlay over hero background image |
| Section titles | `#212121` (dark gray) | "Featured Ads" heading |
| Category labels | `#212121` (dark gray) | Category names |
| Category counts | `#757575` (medium gray) | Item count text |
| Category bar background | `#FFFFFF` (white) | Elevated category icons strip |
| Card background | `#FFFFFF` (white) | Ad listing cards |
| Input border | `#E0E0E0` (light gray) | Search input borders |
| Footer background | `#1a1a2e` (dark navy) | Footer section |
| Footer text | `rgba(255, 255, 255, 0.7)` | Footer links and paragraphs |

### Typography

| Token | Value |
|-------|-------|
| Font family | `"Inter", "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` |
| Hero headline weight | 700 (bold) |
| Hero headline size | ~2.5rem |
| Nav link weight | 500 (medium) |
| Section title weight | 600 (semibold) |
| Category label weight | 500 (medium) |
| Body weight | 400 (regular) |

### Spacing & Shapes

| Token | Value |
|-------|-------|
| Button border-radius | 4px (slightly rounded rectangle) |
| Button background | `#00C9B7` (teal) |
| Button text | `#FFFFFF` (white) |
| Button padding | 10px 24px (search), 8px 16px (Post an Ad) |
| Input border-radius | 4px |
| Input padding | 10px 16px |
| Card border-radius | 4px |
| Card shadow | `0 2px 4px rgba(0,0,0,0.1)` |
| Category bar shadow | `0 2px 4px rgba(0,0,0,0.1)` |
| Hero height | ~65vh |
| Nav padding | 16px vertical, 32px horizontal |
| Nav container width | max-width ~1200px centered |

## Section Order (from screenshot, top to bottom)

1. **Navbar** — White bar with logo "CLASSYADS" (bold dark text), center nav links (Home, Ads, About with dropdown, Blog, Contact), right-aligned auth links (Log In, Register) + teal "Post an Ad" button. Flexbox space-between layout.

2. **Hero** — Full-width section (~65vh), background image with 50% black overlay. Centered content: large headline "Largest Classifieds In The World", subtext "You can buy, sell anything you want.", horizontal search bar with 3 inputs (text search, location with pin icon, category dropdown) + teal Search button.

3. **Category Strip** — Elevated white horizontal bar (card shadow) with 6 category items in a row: each has a teal icon, category label text, and item count in gray. Flexbox equal-width columns.

4. **Featured Ads** — Section heading "Featured Ads", then a 4-column CSS grid of ad listing cards. Each card has: white background, rounded corners, image at top, text content below. Light off-white page background.

5. **Footer** — Dark navy background with site links, copyright, and social icons. "Made with Component Dock" attribution.

## Gherkin Requirements

### Feature: Adnest - Classified Ads Directory Template

  Scenario: Navbar renders correctly
    Given the page loads
    Then the navbar displays the "CLASSYADS" logo
    And nav links "Home", "Ads", "About", "Blog", "Contact" are visible
    And the "Post an Ad" teal button is visible
    And "Log In" and "Register" links are visible

  Scenario: Hero section renders search functionality
    Given the page loads
    Then the hero shows the headline "Largest Classifieds In The World"
    And the subtext "You can buy, sell anything you want." is visible
    And a search bar with "What are you looking for?" input is visible
    And a "Location" input with pin icon is visible
    And an "All Categories" dropdown is visible
    And a teal "Search" button is visible

  Scenario: Category strip displays all categories
    Given the page loads
    Then 6 category items are displayed in a horizontal strip
    And each category shows a teal icon, name, and item count
    And the strip has white background with subtle shadow

  Scenario: Featured ads grid renders correctly
    Given the page loads
    Then the "Featured Ads" heading is displayed
    And ad cards are shown in a 4-column grid
    And each card has a white background with rounded corners
    And each card shows an image and text content

  Scenario: Footer renders with attribution
    Given the page loads
    Then a dark footer section is visible
    And the footer links "Component Dock" are present

  Scenario: Mobile responsive layout
    Given the page loads on a mobile viewport
    Then the navbar collapses to a hamburger menu
    And the hero search bar stacks vertically
    And the category strip scrolls horizontally
    And the featured ads grid becomes single column

## Verification Checklist

- [ ] Spec covers all visible sections from the screenshot
- [ ] Design tokens extracted from screenshot analysis
- [ ] New name "Adnest" differs from ColorLib source "classy-ads"
- [ ] No `apps/adnest` folder exists yet
- [ ] No `openspec/specs/template-adnest/` existed before this prep
- [ ] Preview URL status documented (404, fell back to screenshot)
- [ ] Screenshot reference URL recorded
- [ ] All Gherkin scenarios cover section-by-section fidelity
- [ ] Footer links "Component Dock" as required
