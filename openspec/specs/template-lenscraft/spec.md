# Template: Lenscraft (Photography)

## Purpose

Recreation of the ColorLib "Proshoot" photography template as a single-page React 19 + Vite + Tailwind CSS 4 + TypeScript application.

- **Source:** ColorLib Proshoot — https://colorlib.com/wp/template/proshoot/
- **Preview:** https://preview.colorlib.com/theme/proshoot/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/proshoot-free-template.jpg
- **New name:** `lenscraft` (apps/lenscraft, package `@free-react-templates/lenscraft`)
- **Category:** Photography portfolio / agency

## Design tokens (extracted from preview CSS)

| Token | Value | Notes |
|-------|-------|-------|
| Brand primary | `#f81c1c` | Red — used for accent text, hover fills, borders, preloader, close icons |
| Heading color | `#242429` | Dark charcoal — h1–h6, nav links, primary-btn default text |
| Body text | `#777777` | Medium gray — paragraphs, general text |
| Heading font | `"Oswald", sans-serif` | Weights: 300, 500, 600 — used for h1–h6, nav, buttons, section titles |
| Body font | `"Roboto", sans-serif` | Weights: 400, 700 — used for body text, pricing price |
| Banner background | `#f7f7f7` | Light gray — home-banner-area, pricing list bg |
| Footer background | `#04091e` | Very dark navy/black |
| Header background | `#ffffff` | White, with box-shadow on scroll |
| Button style | Transparent bg, `1px solid #f81c1c` border, `border-radius: 0px`, Oswald 12px 600 uppercase, hover fills red with white text |
| Card border-radius | `5px` | Work/portfolio item cards |
| Card overlay | `rgba(255,255,255,0.8)` | Semi-transparent white on portfolio hover |
| Section spacing | `padding: 140px 0` (section-gap) | Reduced to 70px on mobile (<991px) |
| Section gap top | `padding-top: 140px` | For stacked sections |
| Banner h1 size | `120px` line-height `120px` | Oswald 600 uppercase, responsive down to 35px |
| Pricing price font | Roboto 700, `60px` | Responsive down to 40px |

## Section structure (from live preview DOM)

1. **Header (Navbar)** — Logo left, nav links right: Home, About, Projects, Pages (dropdown: Elements, Contact, Pricing, Project Details), Blog (dropdown: Blog Home, Blog Single). White background, fixed on scroll with shadow.
2. **Home Banner Area** — Fullscreen hero, light gray `#f7f7f7` background. Left column (col-lg-4): large uppercase heading "Images matter" with red accent letters, description paragraph, "Explore More" primary-btn CTA. Right column (col-lg-7): banner image. Left-edge social icons strip (facebook, twitter, instagram).
3. **About Area** — Two columns: left image (col-lg-5), right content (col-lg-5 offset-lg-1): heading "Lets Introduce About Myself", two paragraphs, "Read More" primary-btn CTA. Section gap padding.
4. **Service Area** — Section title "Our Services" / "What We Offer". Three service cards (col-lg-4): Fashion Photography, Nature Photography, Event Coverage. Each has icon + h4 + description paragraph.
5. **Work/Portfolio Area** — Section title "Our Portfolio" / "Check Our Work". Filterable masonry grid of work items. Large item (col-lg-8) + smaller items (col-lg-4). Each card: image, hover overlay with title + category label. Rounded corners `5px`.
6. **Pricing Area** — Section title "Pricing Plan" / "Choose Your Package". Three pricing cards (col-lg-4): Wedding $46, Studio $76, Fashion $96. Each: plan title, criteria text, large price, feature list with check/close icons, "Book Now" primary-btn CTA. Feature list bg `#f7f7f7`.
7. **Blog Area** — Section title "Our Blog" / "Latest Good Story". One large featured post (col-lg-6, full-width image) + two smaller posts (col-lg-6, side-by-side image + text). Each: image, title, meta (author + date), excerpt.
8. **Footer** — Dark navy `#04091e` background. Three columns: About Us (text), Newsletter (email input + submit button), Follow Us (social icons: facebook, twitter, dribbble, linkedin). Copyright bar at bottom. Replace Colorlib attribution with "Component Dock" link.

## Gherkin requirements

### Feature: Lenscraft Photography Template

```gherkin
Scenario: Navbar renders with logo and navigation links
  Given the user loads the Lenscraft page
  Then the navbar displays a logo on the left
  And navigation links "Home", "About", "Projects" are visible
  And "Pages" dropdown contains "Elements", "Contact", "Pricing", "Project Details"
  And "Blog" dropdown contains "Blog Home", "Blog Single"
  And the navbar becomes fixed with shadow on scroll

Scenario: Hero banner displays with heading and CTA
  Given the user is on the Lenscraft page
  Then a large uppercase heading "Images matter" is visible
  And the heading has red (#f81c1c) accent letters on select characters
  And a description paragraph appears below the heading
  And an "Explore More" primary button is displayed
  And a banner image appears to the right of the text content
  And social icons (Facebook, Twitter, Instagram) appear on the left edge

Scenario: About section displays image and text
  Given the user scrolls to the About section
  Then a section heading "Lets Introduce About Myself" is visible
  And an about image appears on the left
  And two descriptive paragraphs appear on the right
  And a "Read More" primary button is displayed

Scenario: Services section displays three service cards
  Given the user scrolls to the Services section
  Then a section title "Our Services" / "What We Offer" is visible
  And three service cards are displayed in a row
  And each card has an icon, heading, and description
  And the services are: Fashion Photography, Nature Photography, Event Coverage

Scenario: Portfolio section displays filterable work grid
  Given the user scrolls to the Portfolio section
  Then a section title "Our Portfolio" / "Check Our Work" is visible
  And work items are displayed in a masonry-like grid
  And hovering a work item shows a white semi-transparent overlay with title and category

Scenario: Pricing section displays three pricing cards
  Given the user scrolls to the Pricing section
  Then a section title "Pricing Plan" / "Choose Your Package" is visible
  And three pricing cards are displayed: Wedding ($46), Studio ($76), Fashion ($96)
  And each card shows a feature list with check and close icons
  And each card has a "Book Now" primary button

Scenario: Blog section displays posts
  Given the user scrolls to the Blog section
  Then a section title "Our Blog" / "Latest Good Story" is visible
  And one large featured blog post with image, title, meta, and excerpt is shown
  And two smaller blog posts with side-by-side image and text layout are shown

Scenario: Footer displays with three columns
  Given the user scrolls to the footer
  Then the footer has a dark navy (#04091e) background
  And an "About Us" column with text is visible
  And a "Newsletter" column with email input and submit button is visible
  And a "Follow Us" column with social icons (Facebook, Twitter, Dribbble, LinkedIn) is visible
  And a copyright bar links to Component Dock (https://www.componentdock.com/)

Scenario: Primary button hover behavior
  Given a primary button is rendered
  When the user hovers over the button
  Then the background fills with red (#f81c1c)
  And the text color changes to white

Scenario: Responsive layout
  Given the user views the page on a mobile device
  Then the banner h1 scales down to 35px
  And section padding reduces to 70px
  And the grid layouts stack vertically
  And the navbar menu collapses into a mobile toggle
```

## Verification checklist

- [ ] Header renders with logo, nav links, and dropdown menus
- [ ] Hero banner has correct heading, accent color, CTA, image, social icons
- [ ] About section has two-column layout with image + text + CTA
- [ ] Services section shows 3 cards with icons
- [ ] Portfolio grid shows work items with hover overlay
- [ ] Pricing section shows 3 cards with prices and feature lists
- [ ] Blog section shows 1 large + 2 small post cards
- [ ] Footer has 3 columns (About, Newsletter, Follow) + copyright with Component Dock link
- [ ] Primary buttons have transparent bg, red border, hover fill effect
- [ ] Color tokens: #f81c1c (brand), #242429 (headings), #777777 (body), #f7f7f7 (banner bg), #04091e (footer)
- [ ] Fonts: Oswald for headings/buttons, Roboto for body
- [ ] Responsive: stacks on mobile, heading scales, padding reduces
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
