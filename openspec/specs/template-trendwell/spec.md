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

## Gherkin requirements

### Feature: Trendwell Fashion Landing Page

#### Scenario: Page renders with all sections in order
  Given a user visits Trendwell
  When the page loads
  Then the user sees sections in this order:
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
  Given the hero section renders
  Then it has a background image with a dark overlay (0.42 opacity)
  And the heading reads "New season essentials"
  And the subtext reads "Considered pieces, made to be worn every day."
  And a "Shop now" CTA button is visible
  And the button has terracotta (#C8553D) or dark styling

#### Scenario: Marquee ticker scrolls trust signals
  Given the marquee is visible below the hero
  Then it displays repeating trust signals: "Free shipping over $100", "30 day returns", "Carbon neutral delivery", "Natural fibres only"
  And the text scrolls continuously in a loop
  And the background is dark (#141414) with light text

#### Scenario: Shop by Category shows category cards
  Given the category section renders
  Then it has a heading "Shop by category"
  And it shows at least 3 category cards (Clothing, Jewellery, Bags)
  And each card has an image and a label
  And clicking a card navigates to the shop (or is a placeholder link)

#### Scenario: New Arrivals shows product grid
  Given the product section renders
  Then it has an eyebrow "Just landed" and heading "New arrivals"
  And a "View all" link is visible
  And at least 4 product cards are shown
  And each card shows: product image, title, price
  And product cards with a sale price show a "Sale" badge
  And a "Quick add" button appears on hover/focus

#### Scenario: Brand Statement section renders
  Given the brand section renders
  Then it has heading "Made to last"
  And descriptive text about natural fibres and considered construction
  And the background is warm off-white (#F4F2EE)

#### Scenario: Why Shop With Us shows features
  Given the features section renders
  Then it has heading "Why shop with us"
  And it shows 3 feature items:
    - "Free shipping" with description "On all orders over $100, worldwide."
    - "30 day returns" with description "Not right? Send it back, no questions."
    - "Made responsibly" with description "Traceable materials and fair factories."
  And each feature has an icon (lucide-react)

#### Scenario: Journal section shows blog posts
  Given the journal section renders
  Then it has heading "Journal"
  And an "All posts" link is visible
  And at least 2 blog post cards are shown
  And each card shows: date, category tag, title, excerpt
  And cards are clickable (link to placeholder)

#### Scenario: Footer renders with brand info
  Given the footer renders
  Then it shows the brand name "Trendwell"
  And tagline "Modern wardrobe essentials, made to last."
  And navigation links: Clothing, Bags, Accessories, Jewellery, Shoes
  And social media icon links (placeholder)
  And a "Component Dock" link (mandatory: https://www.componentdock.com/)

#### Scenario: Responsive layout
  Given a user on mobile (< 640px)
  Then the navbar collapses to a hamburger menu
  And the hero text scales down
  And category cards stack vertically
  And product grid becomes 1-2 columns
  And feature columns stack vertically

#### Scenario: Accessibility
  Given any page section
  Then all images have descriptive alt text
  And interactive elements are keyboard-focusable
  And buttons have accessible labels
  And heading hierarchy is logical (h1 → h2 → h3)
  And color contrast meets WCAG AA (4.5:1 for text)

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
