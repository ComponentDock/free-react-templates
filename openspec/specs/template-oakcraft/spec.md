# Template: OakCraft (Furniture Ecommerce)

## Purpose

OakCraft is a single-page furniture ecommerce website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Amado" website template design (source:
https://colorlib.com/wp/template/amado/), built under a DIFFERENT name
(OakCraft) per the monorepo naming mandate, with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Amado" — furniture ecommerce website template
  (source: https://colorlib.com/wp/template/amado/, category "Ecommerce").
- **Preview DOM analyzed:** the official preview
  (`https://preview.colorlib.com/theme/amado/`) is REACHABLE (HTTP 200,
  ~15 KB HTML + css/core-style.css ~44 KB). Structure below comes from the
  live preview DOM.
- **Screenshot note:** the TEMPLATES.md screenshot (`amado-free-template.jpg`)
  shows a clean, minimal furniture ecommerce layout with a left sidebar
  navigation, a grid of furniture product category images with hover
  overlays showing prices and names, a dark newsletter section, and a
  simple white footer.
- **Design tokens extracted from css/core-style.css:**
  - Brand primary color: #fbb710 (golden yellow — buttons, accent lines,
    hover states, newsletter highlight text)
  - Dark primary: #131212 (near-black — headings, nav links, active states,
    button hover bg)
  - Secondary text: #6d6d6d (gray — body text, price text)
  - Newsletter bg: #3c3c3c (dark gray)
  - Newsletter text: #b3b1b1 (light gray for paragraph)
  - Button style: border-radius: 0 (square), solid #fbb710 bg, white text,
    18px font, min-width 160px, height 55px. Hover = #131212 bg.
  - Font family: "helveticaneuebold" / "helveticaneuemedium" (custom
    Helvetica Neue — replace with Inter or similar via Google Fonts)
  - Product cards: full-width images with dark overlay on hover, yellow
    accent line (80px x 3px #fbb710), price text (#6d6d6d), title text
    (white on hover)
  - Newsletter form: white bg email input (#afafaf placeholder, italic),
    yellow submit button positioned absolute right
  - Footer: white bg, logo + copyright left, nav links right
  - Border radius: 0 throughout (square buttons, square inputs)
  - Nav hover: yellow accent line slides in from left, text color #fbb710
## Section order (1:1, from live preview DOM)

1. **Search Overlay** (fixed, z-index 5000, section-padding-100): fullscreen
   search overlay with close button (FontAwesome X), centered search input
   with submit button. Hidden by default, toggled by search icon.

2. **Sidebar Header** (header-area, left side, fixed on desktop): logo image
   top, nav links (Home, Shop, Product, Cart, Checkout) vertical list with
   uppercase 14px text, yellow accent line on hover (slides from left),
   "%Discount%" and "New this week" yellow/dark buttons, cart/favourite/search
   icon links, social icons (Pinterest, Instagram, Facebook, Twitter) at
   bottom. Mobile: hamburger toggle reveals full sidebar.

3. **Product Categories Grid** (products-catagories-area, main content right
   of sidebar): 3-column grid of 9 furniture product category cards. Each
   card: full-width background image, dark overlay on hover, yellow accent
   line (80px x 3px), price "From $X" text, product name heading. Products:
   Modern Chair ($180), Minimalistic Plant Pot ($180), Modern Chair ($180),
   Night Stand ($180), Plant Pot ($18), Small Table ($320), Metallic Chair
   ($318), Modern Rocking Chair ($318), Home Deco ($318).

4. **Newsletter Area** (dark bg #3c3c3c, section-padding-100-0): two-column
   layout — left = heading "Subscribe for a 25% Discount" (white, 36px,
   "25% Discount" in yellow) + description paragraph (light gray); right =
   email input (white bg, italic placeholder) + yellow "Subscribe" submit
   button (absolute positioned right).

5. **Footer** (footer_area, white bg): two-column layout — left = logo image
   + copyright text with heart icon and Colorlib attribution (REPLACE with
   Component Dock link); right = horizontal nav links (Home, Shop, Product,
   Cart, Checkout) via Bootstrap navbar. Mobile: hamburger toggle for footer
   nav.

## Implementation notes

- The sidebar + main content layout is a flex layout: sidebar fixed width
  left, main content fills remaining space right
- Product category grid uses CSS grid or flexbox with 3 columns
- Each product card is an anchor link to shop.html with background image
- The hover overlay effect: darken image, show yellow line + price + title
- Newsletter submit button is positioned absolute inside the form
- Search overlay is a fixed fullscreen div with z-index above everything
- Mobile responsive: sidebar collapses to hamburger toggle
- FontAwesome used for icons — replace with lucide-react
- Replace Colorlib logo/images with placeholder or ComponentDock branding
- Replace "Amado" brand name with "OakCraft" throughout
## Gherkin requirements

```gherkin
Feature: OakCraft - Furniture Ecommerce Website Template

  Scenario: Sidebar header renders with brand and navigation
    Given the page loads
    Then the sidebar displays the brand logo "OakCraft"
    And navigation links are visible: Home, Shop, Product, Cart, Checkout
    And discount and "New this week" buttons are displayed
    And cart, favourite, and search icon links are present
    And social icons (Pinterest, Instagram, Facebook, Twitter) are at the bottom

  Scenario: Product categories grid displays nine furniture items
    Given the page loads
    Then a 3-column grid of 9 product category cards is displayed
    And each card has a full-width background image
    And hovering a card shows a dark overlay with yellow accent line
    And each card displays a price and product name on hover
    And products include "Modern Chair" ($180), "Small Table" ($320), "Metallic Chair" ($318)

  Scenario: Newsletter section displays subscription form
    Given the product grid is visible
    Then a dark gray (#3c3c3c) newsletter section is displayed
    And the heading "Subscribe for a 25% Discount" is shown with yellow accent
    And an email input with white background is present
    And a yellow "Subscribe" button is positioned to the right

  Scenario: Footer displays logo, copyright, and navigation
    Given the newsletter section is visible
    Then the footer has a white background
    And the logo and copyright text are on the left
    And navigation links (Home, Shop, Product, Cart, Checkout) are on the right
    And the copyright links to Component Dock (https://www.componentdock.com/)

  Scenario: Search overlay opens and closes
    Given the page loads
    And the user clicks the search icon
    Then a fullscreen search overlay appears with an input field
    And clicking the close button hides the overlay

  Scenario: All sections match the original ColorLib Amado design
    Given the page loads with all sections
    Then the section order matches: Sidebar Header, Product Categories Grid,
      Newsletter Area, Footer
    And the brand color #fbb710 is used for buttons and accents
    And the dark color #131212 is used for headings and active states
    And buttons have square corners (border-radius: 0)
    And the layout uses a left sidebar + right content flex arrangement
```

## Verification checklist

- [ ] Sidebar with brand "OakCraft" and nav links renders correctly
- [ ] Product categories grid (9 cards) with hover overlay effect
- [ ] Newsletter section with dark bg and subscription form
- [ ] Footer with logo, copyright, and nav links
- [ ] Search overlay opens/closes correctly
- [ ] Brand color #fbb710 used for buttons and accents
- [ ] Dark color #131212 used for headings and active states
- [ ] Square buttons (border-radius: 0) throughout
- [ ] Flex layout: sidebar left, content right
- [ ] Component Dock link in footer (replaces Colorlib attribution)
- [ ] No ColorLib references in app code
- [ ] Responsive layout works on mobile (sidebar collapses)
- [ ] 100% test coverage (Vitest + Testing Library)
- [ ] TypeCheck passes (TypeScript strict)
- [ ] Build succeeds (Vite production build)
