# Template: Gateau (Food & Drink — Bakery)

## Purpose

Recreation of ColorLib "Cakes" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page bakery website.

- **ColorLib source:** https://colorlib.com/wp/template/cakes/
- **Live preview:** https://preview.colorlib.com/theme/cakes/
- **Screenshot:** `cakes-colorlib-template.jpg` (from TEMPLATES.md)
- **Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **App folder:** `apps/gateau` · package `@free-react-templates/gateau`
- **Deploy target:** `gateau.free.componentdock.com`

## Design tokens (extracted from preview CSS)

| Token | Value | Notes |
|---|---|---|
| brand | `#F04506` | Vibrant orange-red, used everywhere |
| brand-dark | `#d83e06` | Darker orange for gradient endpoints |
| dark | `#140C40` | Deep indigo/navy, secondary accent |
| text-heading | `#000` | h1–h6 default |
| text-body | `#5E5E5E` | Paragraphs, footer links |
| text-hero | `#1A1A1A` | Hero paragraph |
| bg-card | `#FFF5F2` | Popular items card background (light peach) |
| bg-footer | `#FFF7F3` | Footer wrapper background (warm off-white) |
| bg-video | Dark image overlay | Video section background |
| font-heading | `"Quicksand", sans-serif` | All headings, nav, buttons (wght 500–700) |
| font-body | `"DM Sans", sans-serif` | Body text (wght 400) |
| font-display | `"Lobster", cursive` | Hero watermark "Delicious" text |
| btn-radius | `30px` | Pill-shaped buttons |
| btn-shadow | `0 17px 27px rgba(240,69,6,0.27)` | Brand-colored shadow |
| btn-gradient | `linear-gradient(to left, #F04506, #d83e06, #F04506)` | Primary button bg |
| card-radius | `0 0 60px 0` | Bottom-right only, large |
| section-title-span | `#F04506` | Small label above h2 |
| footer-social | `#F04506` | Social icon color |
| scroll-top-bg | `#F04506` | Back-to-top circle |

## Visual design (from screenshot)

Warm, inviting bakery theme. Full-width hero with a cake background image and large "Delicious" watermark in Lobster script. Orange-red accent color pops against white and light peach backgrounds. Cards have distinctive bottom-right-only 60px radius. Product cards show cake images with price + order buttons. Clean 3-column features section with SVG icons. Instagram photo grid. Soft warm off-white footer.

## Section structure (in page order)

1. **Navbar** — Sticky header: logo left, nav links (Home, Products, About, Blog dropdown, Contact) center, phone number + "Order Online" pill button right
2. **Hero** — Full-width background image, Lobster "Delicious" watermark above, h1 "Delicious Cake For Everyone", subtext paragraph, "Explore Menu" pill button
3. **PopularItems** — "Most Popular" / "Our Exclusive Cakes" heading, horizontal carousel of product cards (image + name + description + "$20 | Order Now" button), peach card bg
4. **About** — Two-column: large image left, "Fresh & Delicious" / "A Simple Way to Eating Delicious" heading right, paragraph, "Our Story" button
5. **Services** — "Our Features" / "Quality is Our First Priority", 3 centered cards with SVG icon + title + description
6. **VideoSection** — Dark background image, centered YouTube play button (magnific popup)
7. **Testimonials** — "Testimonial" / "What Customers Say", carousel of quote cards with avatar + name + title
8. **InstagramFeed** — 6-column image strip with Instagram icon overlay on hover
9. **Footer** — 4-column: logo + description + social icons, Quick Links, product categories, Contact Us; bottom bar with copyright + Component Dock link

## Gherkin requirements

```gherkin
Feature: Gateau — Bakery & Cake Shop Template

  Background:
    Given the user visits "gateau.free.componentdock.com"

  Scenario: Navbar renders with all navigation links
    Then the navbar contains links: Home, Products, About, Blog, Contact
    And the navbar shows a phone number
    And the navbar shows an "Order Online" button
    And the navbar becomes sticky on scroll

  Scenario: Hero section displays correctly
    Then the hero shows a decorative "Delicious" watermark
    And the hero shows heading "Delicious Cake For Everyone"
    And the hero shows a descriptive paragraph
    And the hero shows an "Explore Menu" button
    And the hero has a background image

  Scenario: Popular items section shows cake products
    Then the section heading reads "Our Exclusive Cakes"
    And there are at least 4 product cards displayed
    And each card shows a cake image, name, description, and price
    And each card has an "Order Now" button

  Scenario: About section displays two-column layout
    Then the left column shows a bakery image
    And the right column shows heading "A Simple Way to Eating Delicious"
    And the right column has a paragraph description
    And the right column has an "Our Story" button

  Scenario: Services section shows feature cards
    Then the section heading reads "Quality is Our First Priority"
    And there are 3 feature cards
    And each card shows an icon, title, and description

  Scenario: Video section has a play button
    Then the video section shows a centered play button
    And the section has a dark background image

  Scenario: Testimonials section shows customer quotes
    Then the section heading reads "What Customers Say"
    And there are testimonial cards with avatar, name, and quote
    And the cards are in a carousel/slider

  Scenario: Instagram feed shows image grid
    Then there are at least 6 images in a horizontal strip
    And hovering an image shows an Instagram icon overlay

  Scenario: Footer renders all columns
    Then the footer shows a logo and description
    And the footer shows Quick Links
    And the footer shows product categories
    And the footer shows contact information
    And the footer links to "https://www.componentdock.com/"
    And the footer bottom shows copyright text

  Scenario: All interactive elements are accessible
    Then all buttons have visible focus indicators
    And images have meaningful alt text
    And the page is navigable by keyboard
```

## Verification checklist

- [ ] Section order matches original 1:1
- [ ] Brand color `#F04506` used consistently
- [ ] Fonts loaded: Quicksand (headings), DM Sans (body), Lobster (display)
- [ ] Pill-shaped buttons with 30px radius
- [ ] Card backgrounds use `#FFF5F2` peach
- [ ] Card bottom-right radius 60px
- [ ] Hero watermark uses Lobster font at large size
- [ ] Footer background `#FFF7F3`
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] All placeholder images use picsum.photos
- [ ] 100% test coverage
- [ ] Passes typecheck + lint + build
