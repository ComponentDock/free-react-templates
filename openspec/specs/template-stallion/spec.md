# Template: Stallion (Industrial / Construction)

## Purpose

Recreation of ColorLib "Durg" — an industrial/construction company template.

- **Source slug:** `durg`
- **Preview URL:** https://preview.colorlib.com/theme/durg/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/durg-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)
- **New name:** `stallion` (apps/stallion, @free-react-templates/stallion)

## Design tokens (extracted from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Font family | `Rubik` (Google Fonts), sans-serif | All text |
| Brand / accent | `#ff5e13` (vivid orange) | CTAs, section labels, links, hover states |
| Dark background | `#020c26` (near-black navy) | Header top bar, overlays, address section bg, slider overlay |
| Body text | `#5c5c5c` | Paragraphs, descriptions |
| Heading color | `#020c26` | All headings |
| Gray background | `#f5f5f5` | Brand logo strip |
| Light input bg | `#f9f9ff` | Forms, input fields |
| Button shape | No border-radius (square) | `.boxed-btn`, `.boxed-btn2` |
| Button hover | Transparent bg + orange border (`#ff5e13`) | `.boxed-btn:hover` |
| Section padding | 120px top/bottom (60px mobile) | All major sections |
| Overlay opacity | 0.851 (dark `#020c26`) | Hero slider, project bg |

## Page sections (in order)

1. **Header** — Top bar (black bg, phone + email left, nav links right) + sticky main nav (white bg, logo left, menu center, search + "Get a quote" button right)
2. **Hero slider** — Full-width carousel, dark overlay on background image, white content card with tagline, heading, and CTA button
3. **Brand logos** — Gray bg, horizontal carousel of partner/client logos
4. **Services** — 3-column card grid, image thumb + title + short description + "Read More" link
5. **Projects** — Dark overlay background, right-aligned project carousel with category label + title, "More Projects" link
6. **About** — Two-column: left image with video popup play button, right section title + paragraph + "Learn More" button; below: testimonial carousel (quote, stars, author) + review stat (350+)
7. **CTA banner** — Full-width background image with overlay, heading + description + "Discuss now" button
8. **Address/Location** — Black bg, 3-column icons (Location, Opening hours, Contact info)
9. **Footer** — 4-column: logo + description + social links, Company links, Solutions links, Branch offices; copyright bar

## Gherkin requirements

### Feature: Stallion landing page

```gherkin
Feature: Stallion — Industrial company landing page

  Background:
    Given the user opens the Stallion template

  Scenario: Header displays correctly
    Then a black top bar shows phone and email contact info
    And a white sticky navigation bar shows logo, menu links, and "Get a quote" CTA
    And the navigation bar becomes sticky on scroll with a shadow

  Scenario: Hero slider works
    Then a full-width slider displays with a background image and dark overlay
    And a white content card shows a tagline, heading, and CTA button
    And slider navigation dots appear on the right

  Scenario: Brand logos carousel
    Then a gray background section displays a horizontal carousel of partner logos
    And the carousel auto-scrolls through logos

  Scenario: Services section
    Then 3 service cards display in a row
    And each card has an image, title, short description, and "Read More" link
    And hovering "Read More" underlines in orange

  Scenario: Projects section
    Then a dark overlay background section displays project cards in a carousel
    And each project card shows a category label and title
    And a "More Projects" link is visible

  Scenario: About section
    Then an image with a video play button appears on the left
    And a section title with "Learn More" button appears on the right
    And a testimonial carousel shows star ratings, quote text, and author info
    And a review stat (350+) is displayed

  Scenario: CTA banner
    Then a full-width banner with background image and overlay displays
    And a heading, description, and "Discuss now" button appear

  Scenario: Address section
    Then a black background section shows 3 columns: Location, Hours, Contact
    And each column has an icon, heading, description, and optional link

  Scenario: Footer
    Then a 4-column footer shows company info with social links
    And Company, Solutions, and Branch offices columns display link lists
    And a copyright bar appears at the bottom
```

## Verification checklist

- [ ] All 9 sections present in correct order
- [ ] Rubik font loaded via Google Fonts
- [ ] Brand color #ff5e13 used for CTAs, labels, hover states
- [ ] Dark overlay #020c26 on hero and project sections
- [ ] Button shapes are square (no border-radius)
- [ ] Hero slider has white content card on dark background
- [ ] Brand logos section has gray #f5f5f5 background
- [ ] Services: 3-column grid with images
- [ ] Projects: dark overlay with carousel
- [ ] About: image + video popup left, text + CTA right, testimonial carousel below
- [ ] CTA banner: background image with dark overlay
- [ ] Address section: black bg, 3 columns with icons
- [ ] Footer: 4 columns + copyright
- [ ] Sticky header with shadow on scroll
- [ ] Responsive: single column on mobile, proper padding adjustments
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to https://www.componentdock.com/
- [ ] public/CNAME contains stallion.free.componentdock.com
