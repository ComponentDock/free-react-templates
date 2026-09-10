# Template: Stonework (Construction / Architecture Business)

## Purpose

Recreation of ColorLib "Balay" — a construction/architecture company template with a fixed left sidebar navigation, hero slider, about section with feature boxes, services with image cards, animated counter stats, portfolio grid, blog cards, and contact CTA.

- **Source slug:** `balay`
- **Preview URL:** https://preview.colorlib.com/theme/balay/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/balay-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Category:** Business (Construction / Architecture)

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and DOM analysis.

### Colors

| Token        | Value                      | Usage                                        |
| ------------ | -------------------------- | -------------------------------------------- |
| brand-gold   | `#FFC300`                  | Primary accent, heading underlines, active nav, counter icons, selection color |
| sidebar-bg   | `#2C2C2C`                  | Left sidebar dark background                 |
| text-body    | `rgba(0, 0, 0, 0.7)`      | Body paragraph text                          |
| text-heading | `#000`                     | All heading text                             |
| text-muted   | `#999999`                  | Meta labels, small labels                    |
| text-light   | `rgba(255, 255, 255, 0.5)` | Nav links (inactive), sidebar text           |
| text-faint   | `rgba(255, 255, 255, 0.3)` | Sidebar footer copyright, social icons       |
| white        | `#fff`                     | Counter icon bg, hero button bg              |
| black        | `#000`                     | Hero button text, heading text               |
| bg-content   | `#fafafa`                  | CTA section background                       |
| bg-overlay   | `rgba(0, 0, 0, 0.4)`      | Counter section overlay                      |

### Typography

- **Font family:** `"Quicksand", Arial, sans-serif` (Google Fonts)
- **Weights:** 300 (light), 400 (regular), 500 (medium), 700 (bold)
- **Body:** 15px base, `line-height: 1.8`, weight 400, color `rgba(0, 0, 0, 0.7)`
- **Headings:** Quicksand, weight 400, color `#000`, margin-bottom 30px
- **Section headings (`.colorlib-heading`):** 18px, uppercase, weight 500, letter-spacing 5px, underline accent `#FFC300` (60px × 4px bar below)
- **Meta labels (`.heading-meta`):** 10px, uppercase, `#999`, weight 500, letter-spacing 5px
- **Sidebar logo:** weight 700, 22px, uppercase, letter-spacing 2px, white
- **Sidebar nav:** 12px, uppercase, weight 500, letter-spacing 1px, `rgba(255, 255, 255, 0.5)`
- **Hero h1:** 44px (28px mobile), weight 300, line-height 1.3, black
- **Counter number:** 40px, weight 700, white, Quicksand

### Buttons & Shapes

- **Hero CTA (`.btn-learn`):** White bg, black text, 1px white border, 12px uppercase, letter-spacing 2px; hover → transparent bg, 1px black border
- **Contact CTA (`.btn-learn`):** border-radius 30px, padding 15px 30px, font-size 13px
- **Active nav indicator:** 1px underline `#FFC300` with scaleX animation

### Section Backgrounds

1. **Sidebar (left, fixed):** `#2C2C2C`, 20% width desktop, 30% at 1200px, slide-in at 768px
2. **Hero slider:** Background image + overlay, with gold text panel positioned bottom-right
3. **About section:** White bg — 2-column (image left, text + 3 feature boxes right)
4. **Services section:** White bg — 4 expert items (left) + 5 image cards (right, 2-col grid)
5. **Counter section:** Background image + dark overlay — 4 animated stat counters
6. **Work/portfolio section:** White bg — 6 project cards in mixed grid (2 large + 4 small)
7. **Blog section:** White bg — 3 blog post cards (image + meta + title + excerpt)
8. **Contact CTA section:** `#fafafa` bg — headline + CTA button

## Section Structure (page order)

### 1. Sidebar (fixed left navigation)

- Logo: "Stonework" (white, uppercase, weight 700)
- Nav links: Home, Projects, About, Services, Blog, Contact
- Active state: gold text + gold underline animation
- Footer: copyright text (faint white) + social icons (Facebook, Twitter, Instagram, LinkedIn)
- Mobile: hamburger toggle to slide sidebar in/out from left

### 2. Hero Slider (full-width)

- FlexSlider-style carousel with 3 slides
- Each slide: full-viewport background image (picsum.photos)
- Dark overlay on each slide
- Gold (#FFC300) text panel positioned bottom-right:
  - Heading: "An Inspiring Built Space" / "Interior Design Studio" / "The National Gallery"
  - Subtitle text
  - CTA button: "View Project →" (white bg, black text)

### 3. About Section ("Who We Are")

- White background, narrow-content container
- 2-column layout:
  - Left (col-6): Background image
  - Right (col-6):
    - Meta label: "Welcome"
    - Heading: "Who We Are" (with gold underline)
    - 2 paragraphs of body text
    - 3 feature boxes in a row:
      - "We Are Passionate" (checkmark icon, active state)
      - "Honest & Dependable" (checkmark icon)
      - "Always Improving" (checkmark icon)

### 4. Services Section ("Here Are Some of My Expertise")

- White background, narrow-content container
- Header: meta "What I do?" + heading "Here Are Some of My Expertise"
- 2-column layout:
  - Left (col-6): 4 feature items, each with:
    - Icon (flaticon-style → lucide-react: HardHat, Pencil, Ruler, Crane)
    - Title: "General Contracting", "Pre-Construction Design", "Building & Modeling", "Construction Management"
    - Description paragraph
  - Right (col-6): 2-column image card grid (5 cards):
    - "Design & Build" (image card with hover overlay)
    - "House Remodeling"
    - "Construction Management"
    - "Painting & Tiling"
    - "Kitchen Remodeling"

### 5. Counter Stats Section (parallax)

- Background image + dark overlay (`rgba(0, 0, 0, 0.4)`)
- 4-column grid with animated counters:
  - Projects: 1,539 (skyline icon)
  - Employees: 3,653 (engineer icon)
  - Constructors: 5,987 (architect icon)
  - Partners: 3,999 (worker icon)
- Each stat: white circle bg with gold icon → number (40px, white) → label text

### 6. Work/Portfolio Section ("Recent Work")

- White background, narrow-content container
- Header: meta "My Work" + heading "Recent Work"
- Mixed grid layout:
  - Large card (col-6): "Work 01" — Building
  - Small card (col-3): "Work 02" — House, Apartment
  - Small card (col-3): "Work 03" — Dining Room
  - Small card (col-3): "Work 04" — House, Building
  - Small card (col-3): "Work 05" — Condo, Pad
  - Large card (col-6): "Work 06" — Table, Chairs
- Each card: background image + dark overlay + hover to reveal:
  - Title link
  - Category tag
  - Social stats (share, views count, likes count)

### 7. Blog Section ("Recent Blog")

- White background, narrow-content container
- Header: meta "Read" + heading "Recent Blog"
- 3-column grid of blog cards:
  - Each card: image thumbnail + meta (date | category | comments) + title link + excerpt
  - Blog 1: "Renovating National Gallery"
  - Blog 2: "Wordpress for a Beginner"
  - Blog 3: "Make Website From Scratch"

### 8. Contact CTA Section ("Get In Touch")

- Light background (`#fafafa`)
- Narrow-content container
- Heading: "Get in Touch!" (white text if on dark bg)
- Description paragraph (white lead text)
- CTA button: "Contact me!" (border-radius 30px, padding 15px 30px)

### 9. Footer

- Included within the sidebar (fixed left)
- Copyright text with "Component Dock" link
- Social icons row (Facebook, Twitter, Instagram, LinkedIn)

## Gherkin Requirements

### Sidebar

```gherkin
Scenario: Sidebar displays on desktop
  Given the viewport is wider than 1200px
  When the page loads
  Then a fixed left sidebar is visible
  And the sidebar occupies 20% of the viewport width
  And the sidebar background is dark charcoal (#2C2C2C)

Scenario: Sidebar navigation links
  Given the sidebar is visible
  When I look at the navigation
  Then I see links: Home, Projects, About, Services, Blog, Contact
  And the active link has gold (#FFC300) text and underline

Scenario: Sidebar mobile toggle
  Given the viewport is narrower than 768px
  When I tap the hamburger icon
  Then the sidebar slides in from the left
  And the main content shifts to full width
```

### Hero Slider

```gherkin
Scenario: Hero slider displays with background images
  Given the page loads
  When the hero section renders
  Then a full-width slider shows with background images
  And each slide has a dark overlay
  And a gold text panel appears in the bottom-right corner

Scenario: Hero text panel content
  Given the hero slider is visible
  When I read the text panel
  Then I see a heading like "An Inspiring Built Space"
  And a CTA button labeled "View Project"

Scenario: Hero CTA button style
  Given the hero text panel is visible
  When I look at the CTA button
  Then it has a white background with black text
  And on hover it becomes transparent with a black border
```

### About Section

```gherkin
Scenario: About section layout
  Given the page loads
  When I scroll to the About section
  Then I see a 2-column layout
  And the left column has a background image
  And the right column has "Who We Are" heading with gold underline

Scenario: About feature boxes
  Given the About section is visible
  When I look at the feature boxes
  Then I see 3 boxes: "We Are Passionate", "Honest & Dependable", "Always Improving"
  And each box has a checkmark icon
```

### Services Section

```gherkin
Scenario: Services section expert items
  Given the page loads
  When I scroll to the Services section
  Then I see 4 expert items on the left with icons and descriptions
  And items are: General Contracting, Pre-Construction Design, Building & Modeling, Construction Management

Scenario: Services image cards
  Given the Services section is visible
  When I look at the right column
  Then I see 5 image service cards in a 2-column grid
  And cards are: Design & Build, House Remodeling, Construction Management, Painting & Tiling, Kitchen Remodeling
```

### Counter Stats

```gherkin
Scenario: Counter section displays stats
  Given the page loads
  When I scroll to the counter section
  Then I see 4 stats: Projects (1539), Employees (3653), Constructors (5987), Partners (3999)
  And each stat has a white circle icon with gold (#FFC300) icon inside
  And the section has a background image with dark overlay

Scenario: Counter animation
  Given the counter section is visible
  When the counters come into view
  Then each number animates from 0 to its target value
```

### Work/Portfolio

```gherkin
Scenario: Portfolio grid layout
  Given the page loads
  When I scroll to the Work section
  Then I see 6 project cards in a mixed grid
  And 2 cards span col-6 (large) and 4 cards span col-3 (small)

Scenario: Portfolio card hover
  Given a portfolio card is visible
  When I hover over a card
  Then I see the project title, category tag, and social stats (share, views, likes)
```

### Blog Section

```gherkin
Scenario: Blog cards layout
  Given the page loads
  When I scroll to the Blog section
  Then I see 3 blog cards in a 3-column grid
  And each card has an image, date/category/comments meta, title, and excerpt

Scenario: Blog card content
  Given the blog section is visible
  When I read the cards
  Then I see: "Renovating National Gallery", "Wordpress for a Beginner", "Make Website From Scratch"
```

### Contact CTA

```gherkin
Scenario: Contact CTA section
  Given the page loads
  When I scroll to the bottom
  Then I see "Get in Touch!" heading
  And a description paragraph
  And a "Contact me!" button with border-radius 30px
```

## Verification Checklist

- [ ] Sidebar is fixed left, 20% width on desktop, slides in on mobile
- [ ] Hero slider renders 3 slides with background images and gold text panels
- [ ] About section has 2-column layout with image and feature boxes
- [ ] Services section has 4 expert items + 5 image service cards
- [ ] Counter section has parallax bg + 4 animated counters with gold icons in white circles
- [ ] Work/portfolio has 6 cards in mixed grid (2 large + 4 small)
- [ ] Blog section has 3 cards with image, meta, title, excerpt
- [ ] Contact CTA has rounded button on light background
- [ ] All text uses Quicksand font (Google Fonts)
- [ ] Gold accent (#FFC300) is used for: active nav, heading underlines, counter icons, selection color
- [ ] Sidebar background is #2C2C2C
- [ ] Section headings are uppercase with 60px gold underline bar
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Placeholder images use picsum.photos with deterministic seeds
- [ ] Icons from lucide-react replace flaticon/icomoon icons
