# Template: Draftwell (Creative Agency)

## Purpose

Recreation of ColorLib **Design** (slug: `design`).
Preview: https://preview.colorlib.com/theme/design/
ColorLib page: https://colorlib.com/wp/template/design/

**Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

**Category:** Creative agency / design studio — a clean, modern template with a split hero featuring an image + floating quote overlay, stats counter row, 3-step "how it works" process with dashed arrow connectors, services section with checklist, testimonial carousel, 5-column blog grid, and a 3-column footer with social icons.

---

## Replication Research

### Source: Live Preview DOM (https://preview.colorlib.com/theme/design/)

Fetched 2026-09-11. Structure extracted from rendered HTML:

1. **Navbar** — White bg, centered nav. Logo text "Design" left. Nav links centered: Home, Dropdown (with sub-menus), Inner Page, Contact us. CTA button "Free Templates" right-aligned. Mobile: hamburger toggle + slide-down mobile menu.
2. **Hero** — Split layout inside container. Left column (col-lg-5): large heading "Create, Code, and Published." (50px, weight 700), description paragraph, "Get Started" primary button, two feature cards below (icon + "High Quality" heading + description). Right column (col-lg-6): hero image with decorative gray bg shape behind it, floating quote block (dark navy bg, white text) overlaid at bottom-left of the image with blockquote text + author name/title.
3. **Achievements** — 4-column stat cards: "99.55% Ratings 4.9 from user", "98,000+ Happy Customers", "99.99% Server Up time", "1M+ Love by our customers". Each: large number, heading, description. Light padding.
4. **How It Works** — Centered section with "How it works" subtitle + heading. 3 columns with numbered steps: "1. Create an account", "2. Create new orders", "3. Ship and track". Each step: icon in blue circle, heading, description. Dashed SVG arrow connectors between steps (hidden on mobile).
5. **Services** — Two-column layout on light gray bg (#f8f9fa). Left: "Services" subtitle, heading, description, checkmark list (3 items), "Get Started" button. Right: image with decorative dotted border element.
6. **Testimonial** — Owl Carousel slider. Each slide: circular author avatar, blockquote text, author name, author title. 3 testimonial slides.
7. **Blog** — 5-column grid of blog post cards on light gray bg. Each card: white bg, rounded corners (20px, bottom-left sharp), date label (uppercase, bold), title link, description. Hover: card lifts up with shadow.
8. **Footer** — White bg. Two main columns: Left = About paragraph + "Connect with us" social icons (Facebook, Twitter, Instagram, Dribbble, LinkedIn) in rounded squares. Right = "Navigations" heading + 3 columns of link lists. Copyright line at bottom with divider.

### Design Tokens Extracted from CSS

| Token                       | Value                                             | Notes                                                                                     |
| --------------------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Font family (body)          | `"Montserrat", sans-serif`                        | Clean geometric sans-serif, weights 300/400/700                                           |
| Primary brand color         | `#1264fa`                                         | Vivid blue — buttons, links, icon bg circles, hover states, nav CTA                       |
| Primary button hover        | `#2671fa`                                         | Slightly lighter blue on hover                                                             |
| Text color (headings)       | `#000839`                                         | Dark navy — h1, h2, h3, hero text, testimonial author name                                |
| Text color (body)           | `#000000`                                         | Footer links, body paragraphs                                                              |
| Text color (muted)          | `rgba(0, 8, 57, 0.5)`                            | Subtitles, feature descriptions, date labels, stat descriptions                           |
| Text color (white)          | `#ffffff`                                         | Hero quote block text                                                                      |
| Background (main)           | `#ffffff`                                         | Page background                                                                            |
| Background (light sections) | `#f8f9fa`                                         | Services section, blog section bg                                                          |
| Background (hero deco)      | `#dae1e7`                                         | Decorative shape behind hero image                                                         |
| Background (hero quote)     | `#000839`                                         | Dark navy floating quote block                                                             |
| Background (icon circles)   | `#1264fa`                                         | 40px blue circles behind feature/step icons                                                |
| Button radius               | `30px`                                            | Pill-shaped buttons                                                                        |
| Social icon bg              | `#f8f9fa`                                         | Light gray rounded squares, 10px border-radius                                             |
| Blog card radius            | `20px 20px 20px 0`                                | Rounded except bottom-left                                                                 |
| Blog card hover shadow      | `0 15px 30px 0 rgba(0,0,0,0.05)`                 | Subtle lift on hover                                                                       |
| Step connector arrows       | SVG dashed, stroke `#979797`                      | Curved dashed arrows between steps                                                         |
| Subtitle label              | `13px, weight 400`                                | Small uppercase-style label above headings                                                 |
| Section heading             | `30px, weight 700`                                | Mid-size section titles                                                                    |
| Hero heading                | `50px, weight 700`                                | Large display heading                                                                      |
| Feature icon                | 60px font-size (icon font)                        | Flaticon icons in blue circles                                                             |

### Screenshot Analysis

The preview was unreachable for browser rendering at time of analysis. Visual notes from the ColorLib screenshot (design-free-template.jpg):

- Clean white background with a professional, minimal aesthetic
- Hero: large heading on the left, image on the right with a dark navy quote overlay at the bottom-left of the image
- Blue (#1264fa) is the dominant accent color for CTAs and interactive elements
- Montserrat font gives a modern, geometric feel
- Sections alternate between white and light gray (#f8f9fa) backgrounds
- Blog cards have a subtle card-hover lift effect
- Footer is clean white with organized link columns and social icons in light rounded squares
- Overall tone: professional creative agency, clean and spacious

---

## Gherkin Requirements

### Feature: Navbar

Scenario: Desktop navigation displays all links and CTA
  Given the user is on a desktop viewport
  When the page loads
  Then the navbar displays the logo "Draftwell" on the left
  And navigation links (Home, Services, About, Blog, Contact) are visible
  And a "Get Started" CTA button is displayed on the right

Scenario: Mobile navigation shows hamburger menu
  Given the user is on a mobile viewport
  When the page loads
  Then the navbar shows the logo and a hamburger toggle
  And the nav links are hidden
  When the user taps the hamburger
  Then a slide-down mobile menu appears with all nav links

Scenario: Navigation links have correct hover state
  Given the desktop navbar is visible
  When the user hovers over a nav link
  Then the link text changes to brand blue (#1264fa)

### Feature: Hero Section

Scenario: Hero displays heading, text, CTA, and image
  Given the user views the hero section
  Then a heading "Create, Code, and Published." is displayed at 50px
  And a description paragraph is shown below the heading
  And a "Get Started" primary button is displayed
  And a hero image is shown on the right with a decorative gray background shape

Scenario: Hero quote overlay appears on image
  Given the hero image is loaded
  Then a floating dark navy (#000839) quote block is overlaid at the bottom-left of the image
  And the quote block contains a blockquote and author name/title in white text

Scenario: Hero displays two feature cards below CTA
  Given the hero section is visible
  Then two feature cards are displayed below the CTA button
  And each card has a blue circle icon, heading, and description text

### Feature: Achievements Section

Scenario: Stats display four metric cards
  Given the achievements section is in view
  Then four stat cards are displayed in a row
  And each card shows a large number, heading, and description
  And the numbers use bold weight at 40px font size

### Feature: How It Works Section

Scenario: Three-step process displays with connectors
  Given the how-it-works section is in view
  Then a "How it works" subtitle and heading are centered at the top
  And three step cards are displayed: "1. Create an account", "2. Create new orders", "3. Ship and track"
  And each step has a blue circle icon, heading, and description
  And dashed SVG arrow connectors link the steps (hidden on mobile)

### Feature: Services Section

Scenario: Services section shows checklist and image
  Given the services section is in view
  Then the background is light gray (#f8f9fa)
  And a "Services" subtitle, heading, and description are on the left
  And a checkmark list with 3 items is displayed
  And a "Get Started" primary button is below the list
  And a service image with a dotted decorative element is on the right

### Feature: Testimonial Section

Scenario: Testimonials carousel displays author quotes
  Given the testimonial section is in view
  Then a carousel displays testimonial cards
  And each card has a circular author avatar, blockquote, author name, and title
  And carousel navigation arrows are available

### Feature: Blog Section

Scenario: Blog grid shows post cards with hover effect
  Given the blog section is in view
  Then the background is light gray (#f8f9fa)
  And 5 blog post cards are displayed in a row
  And each card has white bg, rounded corners (20px, bottom-left sharp), date, title, and description
  When the user hovers over a card
  Then the card lifts up 5px with a subtle shadow

### Feature: Footer

Scenario: Footer displays about, social, and navigation links
  Given the footer is in view
  Then an "About" paragraph and social icons (Facebook, Twitter, Instagram, Dribbble, LinkedIn) are on the left
  And three columns of navigation links are on the right
  And a copyright line is at the bottom with a top divider
  And the footer links to Component Dock in the copyright

---

## Verification Checklist

- [ ] Navbar: logo, nav links, CTA, mobile hamburger, hover states
- [ ] Hero: heading, description, CTA button, image, quote overlay, feature cards
- [ ] Achievements: 4 stat cards with correct layout and typography
- [ ] How It Works: 3 steps with icons, headings, descriptions, arrow connectors
- [ ] Services: two-column layout, checklist, image, dotted decoration
- [ ] Testimonials: carousel with avatar, quote, author info
- [ ] Blog: 5 cards with hover lift effect, correct border-radius
- [ ] Footer: about, social icons, navigation columns, copyright
- [ ] Responsive: all sections adapt to mobile/tablet viewports
- [ ] Design tokens: Montserrat font, #1264fa brand blue, #000839 dark navy, pill buttons (30px radius)
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Placeholder images via picsum.photos
- [ ] Icons from lucide-react (replacing flaticon/icomoon)
