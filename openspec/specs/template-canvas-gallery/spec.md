# Template: CanvasGallery (Modeling Agency)

## Purpose

Recreation of ColorLib's **Mona** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page template. Mona is a modeling/talent agency website with a pink brand palette, hero slider, about section with service cards, tabbed portfolio gallery, testimonials carousel, CTA banner, blog grid, and footer.

- **Source template:** https://colorlib.com/wp/template/mona/
- **Live preview:** https://preview.colorlib.com/theme/mona/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/mona-free-template.jpg
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package name:** `@free-react-templates/canvas-gallery`

## Design Tokens (extracted from preview CSS)

| Token | Value | Notes |
|---|---|---|
| Brand primary | `#ed489d` | Hot pink — used on buttons, active tabs, accents |
| Brand secondary | `#f6a4ce` | Lighter pink — hover/alternate state |
| Text dark | `#232323` | Primary body text |
| Text muted | `#666666` | Secondary text, descriptions |
| Background | `#ffffff` | White page background |
| Font family | `"HK Grotesk"` | Via Google Fonts; weights 400, 500, 600 |
| Button radius | `40px` | Fully rounded pill buttons (`.mona-btn`) |
| Button primary bg | `#ed489d` | Solid pink fill |
| Button primary hover | `#000000` | Turns black on hover |
| Button secondary | White bg, `#ed489d` text, `#ed489d` border | `.mona-btn.btn-2` outline style |
| Section padding | `80px` top/bottom | `.section-padding-80` / `.section-padding-80-0` |
| Card border-radius | `0` | Sharp corners on cards |
| Testimonial icon | Pink quote icon | `icon_quotations` in brand color |

## Sections (in order)

1. **Header/Navbar** — Fixed top nav with logo, links: Home, Pages (dropdown), Project, Models, Casting, Blog, Contact. Search icon triggers modal overlay. Mobile hamburger toggle with slide-in menu. Brand curve decorative background image below nav.
2. **Hero Welcome Area** — Full-width carousel slider (Owl Carousel). Each slide: large background image, centered model name (h2: "Jesse Edwards" / "Naznin Niloy" / "Shaila Ritu"), subtitle ("Star Model 2019"), social icons (Instagram, Facebook, Pinterest, Twitter, YouTube), and "Model details" CTA button. Decorative curve overlay at bottom.
3. **About Us Area** — Two-column layout. Left: two stacked thumbnail images (model photos) with staggered animation. Right: heading "We Have 20+ Years Practical Experience in Agency", lorem paragraph, then 4 service cards in a row:
   - Fashion Shows (icon_film)
   - Special Events (icon_calendar)
   - Commercial Photo (icon_camera_alt)
   - Model School (icon_house_alt)
   Each card: icon circle (pink bg, white icon), title, description.
4. **Model Portfolio Gallery** — Tabbed filter gallery. Tabs: All, Model, Actor, Singer. Grid of `single-model-item` cards (6+ columns on desktop). Each card: model photo, hover overlay with Instagram icon link. Tab active state: pink bg.
5. **Client Feedback / Testimonials** — Carousel slider with testimonial cards. Each: quote icon, testimonial text (h4), star ratings (5 filled stars), client name (h3), client role (h6), circular client thumbnail photo. Navigation arrows.
6. **CTA Banner** — Full-width pink background section. Centered: "Do You Want To Be A Model?" heading (h2), "Contact Us" pill button (white text on pink, or pink outline).
7. **Blog Area** — Section heading "Latest News". Grid of 4 blog posts. Each post card: thumbnail image, post title (linked), post date. One featured post (larger/taller). Staggered fade-in animation.
8. **Footer** — Dark background. Three columns:
   - Column 1: Brand logo/text + copyright text (with heart icon)
   - Column 2: "Our Link" widget with nav links
   - Column 3: "Contact" widget with phone number, address, social icons (Facebook, Instagram, Pinterest, Twitter, YouTube)
   Footer links to Component Dock.

## Gherkin Requirements

```gherkin
Feature: CanvasGallery — Modeling agency template

  Background:
    Given the app is served at the dev server
    And the page loads successfully

  # --- Header ---
  Scenario: Navbar renders logo and navigation links
    Then a navigation bar is visible at the top
    And the nav contains links: Home, Pages, Project, Models, Casting, Blog, Contact
    And a search icon button is present

  Scenario: Search modal opens on search icon click
    Given the search modal is closed
    When I click the search icon
    Then a search modal overlay appears
    And an input field with placeholder "Search and hit enter..." is focused

  Scenario: Search modal closes
    Given the search modal is open
    When I click the close button
    Then the search modal is hidden

  Scenario: Mobile hamburger menu toggles
    Given the viewport is mobile-sized
    Then a hamburger toggle button is visible
    When I click the hamburger toggle
    Then the mobile menu slides into view
    When I click the close icon
    Then the mobile menu is hidden

  # --- Hero ---
  Scenario: Hero slider displays model slides
    Then a hero carousel section is visible
    And at least 3 slides are rendered
    And each slide shows a model name and subtitle

  Scenario: Hero slide shows social icons
    Then each hero slide contains social media icon links

  Scenario: Hero CTA button is present
    Then each hero slide has a "Model details" button

  # --- About Us ---
  Scenario: About section displays heading and content
    Then an about section is visible
    And the heading reads "We Have 20+ Years Practical Experience in Agency"
    And a paragraph of description text is present

  Scenario: About section shows thumbnail images
    Then two thumbnail images are displayed in the about section

  Scenario: About section shows 4 service cards
    Then 4 service cards are rendered in the about section
    And each card has an icon, title, and description

  # --- Portfolio Gallery ---
  Scenario: Gallery shows filter tabs
    Then a tabbed gallery section is visible
    And tabs are rendered: All, Model, Actor, Singer
    And the "All" tab is active by default

  Scenario: Gallery tab switching works
    Given the "All" tab is active
    When I click the "Model" tab
    Then the "Model" tab becomes active
    And the gallery grid updates

  Scenario: Gallery displays model items
    Then at least 6 gallery items are rendered
    And each item shows a model photo

  # --- Testimonials ---
  Scenario: Testimonials section displays client quotes
    Then a testimonials section is visible
    And at least 3 testimonial cards are rendered
    And each card shows a quote, client name, and role

  Scenario: Testimonials show star ratings
    Then each testimonial card shows 5 star rating icons

  Scenario: Testimonials have navigation
    Then previous/next navigation arrows are present

  # --- CTA Banner ---
  Scenario: CTA section renders with heading and button
    Then a call-to-action banner is visible
    And the heading reads "Do You Want To Be A Model?"
    And a "Contact Us" button is present

  # --- Blog ---
  Scenario: Blog section shows latest posts
    Then a blog section is visible with heading "Latest News"
    And at least 4 blog post cards are rendered
    And each card shows a thumbnail, title, and date

  # --- Footer ---
  Scenario: Footer renders three columns
    Then a footer section is visible
    And the footer contains a brand/copyright column
    And the footer contains a links column titled "Our Link"
    And the footer contains a contact column titled "Contact"

  Scenario: Footer shows contact info
    Then the contact column displays a phone number
    And the contact column displays an address

  Scenario: Footer shows social links
    Then the footer contains social media icon links

  Scenario: Footer links to Component Dock
    Then the footer contains a link to "https://www.componentdock.com/"
    And the link text mentions "Component Dock"

  # --- Responsive ---
  Scenario: Layout is responsive
    Given the viewport is mobile-sized
    Then the navbar collapses to a hamburger menu
    And service cards stack vertically
    And gallery items reflow to fewer columns
    And footer columns stack vertically
```

## Verification Checklist

- [ ] All 7 sections render in correct order: Header → Hero → About → Gallery → Testimonials → CTA → Blog → Footer
- [ ] Brand color `#ed489d` used for buttons, active tabs, accents
- [ ] Font "HK Grotesk" loaded via Google Fonts
- [ ] Pill-shaped buttons with 40px border-radius
- [ ] Hero carousel shows 3 model slides with names and social icons
- [ ] About section: 2 images + heading + 4 service cards with icons
- [ ] Portfolio gallery: 4 tabs, tab switching works, grid of model items
- [ ] Testimonials: quote cards with stars, names, roles, navigation
- [ ] CTA banner: pink bg, heading, Contact Us button
- [ ] Blog: 4 post cards with thumbnails, titles, dates
- [ ] Footer: 3 columns, contact info, social icons, Component Dock link
- [ ] Mobile responsive: hamburger nav, stacked layouts
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Tests pass with 100% coverage
