# Template: Trendwell (Fashion / E-commerce)

## Purpose

Recreation of the ColorLib **Fashe** template as a modern fashion e-commerce
landing page. Source: https://colorlib.com/wp/template/fashe/
Preview: https://preview.colorlib.com/theme/fashe/
Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens (extracted from preview)

| Token | Value | Notes |
| --- | --- | --- |
| Brand primary | `#C8553D` (rgb 200,85,61) | Warm terracotta/rust — CTAs, accents, links |
| Brand accent | `#E2A087` (rgb 226,160,135) | Lighter peach — secondary accent |
| Background default | `#FFFFFF` | White base |
| Background warm | `#F4F2EE` (rgb 244,242,238) | Warm off-white for alternating sections |
| Background dark | `#141414` (rgb 20,20,20) | Dark sections, banner overlay |
| Text primary | `#141414` | Near-black body text |
| Text light | `#FFFFFF` | On dark backgrounds |
| Button bg | `#141414` | Dark buttons |
| Button text | `#FFFFFF` | White on dark buttons |
| Outline button | `#C8553D` | Terracotta outline/ghost buttons |
| Border | `#E4E4E4` | Light dividers |
| Font family | `Assistant, sans-serif` | Google Font — geometric sans-serif |
| Banner height | `80vh` | Full-bleed hero |
| Banner overlay opacity | `0.42` | Dark overlay on hero image |

## Visual design (from screenshot + DOM)

Minimalist fashion e-commerce. Clean white sections alternating with warm
off-white (#F4F2EE). Bold hero with dark overlay and centered text. Product
cards with hover "Quick add" overlay. Editorial blog section at the bottom.
Terracotta/rust accent color throughout. Marquee ticker under the hero
scrolling trust signals. The overall feel is premium, considered, and modern
— think Everlane or COS.

## Requirements

### Feature: Trendwell Fashion Landing Page

#### Scenario: Page renders with all sections in order

- **GIVEN** a user visits Trendwell
- **WHEN** the page loads
- **THEN** the user sees sections in this order:
    1. Navbar (top, sticky or static)
    2. Hero banner (80vh, dark overlay, centered copy)
    3. Marquee ticker (scrolling trust signals)
    4. Shop by Category (grid of category cards)
    5. New Arrivals (product grid with Quick Add)
    6. Brand Statement ("Made to last" editorial)
    7. Why Shop With Us (3-column icon features)
    8. Journal / Blog (post cards with excerpt)
    9. Footer (brand, nav links, social, Component Dock)

#### Scenario: Hero banner displays correctly

- **GIVEN** the hero section renders
- **THEN** it has a background image with a dark overlay (0.42 opacity)
- **AND** the heading reads "New season essentials"
- **AND** the subtext reads "Considered pieces, made to be worn every day."
- **AND** a "Shop now" CTA button is visible
- **AND** the button has terracotta (#C8553D) or dark styling

#### Scenario: Marquee ticker scrolls trust signals

- **GIVEN** the marquee is visible below the hero
- **THEN** it displays repeating trust signals: "Free shipping over $100", "30 day returns", "Carbon neutral delivery", "Natural fibres only"
- **AND** the text scrolls continuously in a loop
- **AND** the background is dark (#141414) with light text

#### Scenario: Shop by Category shows category cards

- **GIVEN** the category section renders
- **THEN** it has a heading "Shop by category"
- **AND** it shows at least 3 category cards (Clothing, Jewellery, Bags)
- **AND** each card has an image and a label
- **AND** clicking a card navigates to the shop (or is a placeholder link)

#### Scenario: New Arrivals shows product grid

- **GIVEN** the product section renders
- **THEN** it has an eyebrow "Just landed" and heading "New arrivals"
- **AND** a "View all" link is visible
- **AND** at least 4 product cards are shown
- **AND** each card shows: product image, title, price
- **AND** product cards with a sale price show a "Sale" badge
- **AND** a "Quick add" button appears on hover/focus

#### Scenario: Brand Statement section renders

- **GIVEN** the brand section renders
- **THEN** it has heading "Made to last"
- **AND** descriptive text about natural fibres and considered construction
- **AND** the background is warm off-white (#F4F2EE)

#### Scenario: Why Shop With Us shows features

- **GIVEN** the features section renders
- **THEN** it has heading "Why shop with us"
- **AND** it shows 3 feature items:
    - "Free shipping" with description "On all orders over $100, worldwide."
    - "30 day returns" with description "Not right? Send it back, no questions."
    - "Made responsibly" with description "Traceable materials and fair factories."
- **AND** each feature has an icon (lucide-react)

#### Scenario: Journal section shows blog posts

- **GIVEN** the journal section renders
- **THEN** it has heading "Journal"
- **AND** an "All posts" link is visible
- **AND** at least 2 blog post cards are shown
- **AND** each card shows: date, category tag, title, excerpt
- **AND** cards are clickable (link to placeholder)

#### Scenario: Footer renders with brand info

- **GIVEN** the footer renders
- **THEN** it shows the brand name "Trendwell"
- **AND** tagline "Modern wardrobe essentials, made to last."
- **AND** navigation links: Clothing, Bags, Accessories, Jewellery, Shoes
- **AND** social media icon links (placeholder)
- **AND** a "Component Dock" link (mandatory: https://www.componentdock.com/)

#### Scenario: Responsive layout

- **GIVEN** a user on mobile (< 640px)
- **THEN** the navbar collapses to a hamburger menu
- **AND** the hero text scales down
- **AND** category cards stack vertically
- **AND** product grid becomes 1-2 columns
- **AND** feature columns stack vertically

#### Scenario: Accessibility

- **GIVEN** any page section
- **THEN** all images have descriptive alt text
- **AND** interactive elements are keyboard-focusable
- **AND** buttons have accessible labels
- **AND** heading hierarchy is logical (h1 → h2 → h3)
- **AND** color contrast meets WCAG AA (4.5:1 for text)

## Verification checklist

- [ ] All 9 sections render in correct order
- [ ] Hero: 80vh, dark overlay, centered content, CTA button
- [ ] Marquee: auto-scrolling trust signals, dark bg
- [ ] Categories: grid with images + labels
- [ ] Products: grid with image, title, price, Quick Add, Sale badge
- [ ] Brand statement: warm bg, editorial copy
- [ ] Features: 3-column with icons
- [ ] Journal: blog cards with date, category, title, excerpt
- [ ] Footer: brand, nav, social, Component Dock link
- [ ] Responsive: mobile hamburger, stacked layouts
- [ ] Accessibility: alt text, keyboard nav, heading hierarchy
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] Uses shared UI components from packages/ui where possible

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/fashe/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#c8553d` — nearest `#d99a2b` (d=73)
- `#e2a087` — nearest `#d99a2b` (d=93)
<!-- live-palette-unverified:end -->
