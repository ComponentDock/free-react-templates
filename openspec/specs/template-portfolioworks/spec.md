# Template: Portfolioworks (Portfolio)

## Purpose

Recreation of the ColorLib "Portfolio" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `portfolio`
- **Source URL:** https://colorlib.com/wp/template/portfolio/
- **Preview URL:** https://preview.colorlib.com/theme/portfolio/
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/portfolioworks`
- **Surge target:** `portfolioworks.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/main.css`) at https://preview.colorlib.com/theme/portfolio/

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#8ab92d` | Buttons, active filter text, subtitle text |
| Dark bg | `#04091e` | Footer background, overlay base |
| Overlay bg | `rgba(4, 9, 30, 0.5)` | Hero banner overlay |
| Service overlay | `rgba(4, 9, 30, 0.8)` | Services parallax overlay |
| Body bg | `#ffffff` | Main content backgrounds |
| Light bg | `#f9f9ff` | Alternate section backgrounds |
| Heading text | `#222222` | Primary headings |
| Body text | `#222222` | Body copy |
| Muted text | `#777777` | Secondary/subtitle text |
| White text | `#ffffff` | On dark backgrounds |
| Font primary | `Poppins`, sans-serif | All text (headings, body, nav) |
| Button shape | Rounded pill (`border-radius: 25px`) | Primary CTA buttons |
| Button bg | `#8ab92d` | Primary buttons |
| Button text | `#ffffff` | White on brand |
| Button padding | `30px left / 60px right` | Asymmetric padding |
| Button line-height | `36px` | Button vertical sizing |
| Button font-weight | `500` | Medium weight |
| Button text-transform | `uppercase` | All button text |
| Banner heading | 72px, weight 700, white | Hero title |
| Banner subtitle | 12px, weight 300, letter-spacing 3px, `#8ab92d` | Hero subtitle |
| Filter active | `#8ab92d` | Active portfolio filter tab text |
| Portfolio card radius | `3px` | Image overlay corners |
| Banner area radius | `10px` | Rounded corners on hero section |
| Service area radius | `10px` | Rounded corners on service parallax |
| Footer bg | `#04091e` | Dark navy footer |
| Star color (checked) | `#f4e700` (yellow) | Testimonial star ratings |

## Section Structure (in page order)

### 1. Navbar
- Logo (left-aligned, brand name "PortfolioWorks" with icon)
- Navigation links: Home, Portfolio, Services, Testimonial, Pages (right-aligned)
- "Pages" is a dropdown with Generic + Elements sub-items
- Transparent navbar on hero, sticky on scroll
- Hamburger toggle on mobile (white text)

### 2. Hero Banner
- Full-screen height (`fullscreen` class)
- Background image with dark overlay (`rgba(4,9,30,0.5)`)
- Rounded corners (`border-radius: 10px`)
- Subtitle: "NOW YOU CAN WATCH THE TALENT" (uppercase, `#8ab92d`, 12px, letter-spacing 3px)
- Headline: "Let's Explore Idea!" (72px, bold, white)
- CTA button: "EXPLORE NOW" (pill shape, `#8ab92d` bg, uppercase)
- Vertically and horizontally centered content

### 3. Portfolio Grid
- Section heading: "This is what we can do for you"
- Subtitle: "Who are in extremely love with eco friendly system.."
- Filter tabs: ALL, VECTOR, RASTER, UI/UX, PRINTING
- Active filter tab text: `#8ab92d`
- 3-column grid of portfolio items (12 items total)
- Each item: image + overlay with title + category label
- Hover effect: image zoom, overlay slide-up with info
- Items filtered by category classes (corporate, personal, agency, portal)

### 4. Services Parallax
- Background image with dark overlay (`rgba(4,9,30,0.8)`)
- Rounded corners (`border-radius: 10px`)
- Section heading: "This is what we can do for you" (white text)
- Subtitle: "Who are in extremely love with eco friendly system.." (white text)
- Minimal section — just the heading + subtitle on parallax bg

### 5. Services Grid
- 3-column layout, white background
- Each service: icon/image + title + description paragraph
- Services: "Vector Artworks", "Corporate Identity", "Art Direction Design"
- Centered layout with generous padding

### 6. Testimonials
- Section heading: "How Our Customers Treat Us"
- Subtitle: "Who are in extremely love with eco friendly system.."
- 2-column grid (2 items per column, 4 total)
- Each review: circular avatar, reviewer name, star rating (1-5 stars, checked/unchecked), paragraph
- Reviewers: Fannie Rowe, Lillie Summers, Hulda Sutton, Ruth Burns
- Star ratings: 3, 3, 4, 2 stars respectively

### 7. Footer
- Dark navy background (`#04091e`)
- 3-column layout:
  - Column 1 (col-lg-5): "About Us" heading + description paragraph + copyright
  - Column 2 (col-lg-5): "Newsletter" heading + email input + arrow submit button
  - Column 3 (col-lg-2): "Follow Us" heading + social icons (Facebook, Twitter, Dribbble, Behance)
- Footer links to Component Dock (replacing Colorlib attribution)

## Gherkin Requirements

### Feature: Portfolio Template (Portfolioworks)

  Scenario: Navbar displays correctly
    Given the page loads
    Then the navbar shows the "PortfolioWorks" logo
    And navigation links "Home", "Portfolio", "Services", "Testimonial" are visible
    And the navbar is transparent over the hero section

  Scenario: Hero banner renders with full design
    Given the page loads
    Then the hero section fills the viewport height
    And a background image is displayed with a dark overlay
    And the subtitle "NOW YOU CAN WATCH THE TALENT" is shown in green
    And the headline "Let's Explore Idea!" is shown in white
    And the "EXPLORE NOW" button is shown as a green pill

  Scenario: Portfolio filter tabs work
    Given the portfolio section is visible
    And the "ALL" tab is active by default
    When the user clicks "VECTOR"
    Then only Vector-category items are visible
    And the "VECTOR" tab text turns green
    When the user clicks "ALL"
    Then all 12 portfolio items are visible again

  Scenario: Portfolio grid shows 12 items
    Given the portfolio section is visible
    Then 12 portfolio cards are rendered in a 3-column grid
    And each card has an image, title, and category label

  Scenario: Services parallax section renders
    Given the page loads
    Then a parallax background section is visible with a dark overlay
    And the heading "This is what we can do for you" is shown in white

  Scenario: Services grid shows 3 services
    Given the services grid section is visible
    Then 3 service cards are rendered
    And each card has an icon, title, and description
    And the titles are "Vector Artworks", "Corporate Identity", "Art Direction Design"

  Scenario: Testimonials section shows 4 reviews
    Given the testimonial section is visible
    Then 4 review cards are rendered in a 2-column layout
    And each review has an avatar, name, star rating, and paragraph
    And the heading reads "How Our Customers Treat Us"

  Scenario: Footer renders with 3 columns
    Given the page loads
    Then the footer has a dark background
    And an "About Us" section with description is visible
    And a "Newsletter" section with email input is visible
    And a "Follow Us" section with social icons is visible
    And a "Made with Component Dock" link is present

## Verification Checklist

- [ ] Navbar renders with logo + 4 nav links + dropdown
- [ ] Hero is full-screen with background image, overlay, subtitle, headline, CTA button
- [ ] Portfolio section: heading + subtitle + 5 filter tabs + 12 items in 3-col grid
- [ ] Filter tabs toggle active state (green text) and filter items by category
- [ ] Services parallax: dark overlay bg section with heading + subtitle
- [ ] Services grid: 3 cards with icons + titles + descriptions
- [ ] Testimonials: heading + 4 reviews with avatars, names, star ratings, text
- [ ] Footer: 3 columns (about, newsletter, social), dark bg, Component Dock link
- [ ] All design tokens match: `#8ab92d` brand, `#04091e` dark, Poppins font, pill buttons
- [ ] Responsive: mobile hamburger, stacked columns, adjusted spacing
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] `packages/ui` reused where possible (Button, cn, etc.)
- [ ] `vite.config.ts` has `injectUiSource()` helper
- [ ] `public/CNAME` contains `portfolioworks.free.componentdock.com`
- [ ] `package.json` homepage = `https://portfolioworks.free.componentdock.com`
- [ ] Tests pass at 100% coverage (lines, functions, branches, statements)
- [ ] Build succeeds (`npm run build`)
