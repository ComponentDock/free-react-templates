# Template: Pexfolio (Creative Agency)

## Purpose

Recreation of ColorLib "Pexman" as a React 19 + Vite + Tailwind 4 + TypeScript template. The original is a dark-themed creative agency portfolio site with a gold/champagne accent, slider hero, split about sections, counters, services, portfolio grid, testimonials carousel, and blog section.

- **Source:** [ColorLib Pexman](https://colorlib.com/wp/template/pexman/)
- **Preview URL:** https://preview.colorlib.com/theme/pexman/
- **Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **New name:** `pexfolio` (apps/pexfolio, @free-react-templates/pexfolio)
- **Deploy target:** https://pexfolio.free.componentdock.com

## Design Tokens

Extracted from live preview CSS (style.css) and HTML:

| Token | Value | Source |
|-------|-------|--------|
| Brand / accent color | `#d9bf77` (gold/champagne) | `.btn-primary`, `.subheading`, `.work-category li.active`, `.services .icon:after`, `.testimony-wrap .star`, `.ftco-footer a` |
| Primary text | `#000000` (black) | `.heading-section h2`, body text, `.services .media-body h3` |
| Body background | `#ffffff` (white) | Bootstrap default |
| Light section background | `#f7f7f7` | `.bg-light` |
| Dark / overlay color | `#000000` (black) | `.bg-black`, `.overlay`, `#section-counter .overlay` at 0.8 opacity, slider `:after` at 0.5 opacity |
| Footer background | `#000000` | `.ftco-footer` |
| Footer muted text | `rgba(255,255,255,0.5)` | `.ftco-footer` base color |
| Footer link color | `#d9bf77` | `.ftco-footer a` |
| Counter K+/K suffix | `#d9bf77` | `.ftco-counter .text p span` |
| Star color | `#d9bf77` | `.star`, `.testimony-wrap .text .star` |
| Service number bg | `#000000` (black circle) | `.services-2 .icon` |
| Social icon hover | `#fff` bg, `#000` icon | `.ftco-footer-social li a:hover` |
| Font family | `Montserrat` (Google Fonts, weights 300-700) | Cloudflare font-face in preview |
| Button border-radius | `0` (sharp square) | `.btn { border-radius: 0 }` |
| Button text | uppercase, letter-spacing: 1px, font-size: 11px | `.btn` |
| Button padding | `9px 12px` (base); `px-5 py-3` (hero CTA) | `.btn`, hero `.btn.btn-primary` |
| Button hover | transparent bg, brand color text/border | `.btn.btn-primary:hover` |
| Section padding | `7em 0` | `.ftco-section` |
| Heading subheading | uppercase, `#d9bf77`, 15px, bold | `.heading-section .subheading` |
| Hero heading | 58px (40px mobile), bold, white, line-height 1.1 | `.slider-hero .work .text h2` |
| About image height | 750px (500px mobile) | `.ftco-about .full-wrap .img` |
| Counter overlay | black at 0.8 opacity, fixed bg attachment | `#section-counter` |
| Portfolio card height | 300px | `.project-wrap` |
| Blog card height | 190px | `.block-20` |
| Social footer icons | 50px square, border-radius: 5px | `.ftco-footer-social li a` |
| Form focus border | `#d9bf77` | `.form-control:focus` |

## Visual Design Notes (from screenshot reference)

The Pexman preview screenshot shows:
- Dark, moody aesthetic with heavy use of black overlays on background images
- Gold/champagne accent (`#d9bf77`) used sparingly on buttons, subheadings, active states
- Full-width hero slider with large background images and overlaid white text
- Split 50/50 about sections with large background images on one side
- Parallax counter section with black overlay
- Clean white services grid with gold circle icon backgrounds
- 4-column portfolio grid with dark hover overlay revealing text
- Testimonials carousel with star ratings and client avatars
- Blog grid with image cards
- Dark footer with gold accent links

## Section Structure (in order)

1. **Navbar** — Dark fixed navbar, brand "Pexfolio Creative Agency", links: Home, About, Works, Blog, Contact
2. **Hero Slider** — Full-width image slider (3 slides), background image with 50% black overlay on left half, large white heading, paragraph, gold CTA button ("View Portfolio"), numbered slide indicators on left side
3. **About Section 1** — Split 50/50: background image left, text right with "Welcome Pexfolio" gold subheading, heading, two paragraphs, gold "Start A Project" button
4. **Counter Section** — Full-width parallax background with black overlay (0.8), 4 stat columns: 10K+ Achievements, 21K+ Projects, 27 Years, 30K+ Happy Customers; numbers white, K+ suffix gold
5. **What We Offer** — Split 50/50: text left, background image right; gold subheading, heading, paragraph, 4 numbered services (Research, Design, Development, Testing) with black circle number icons, gold "Start A Project" button
6. **Services Grid** — Light gray background (#f7f7f7), 4 columns: Web Design, Photography, Marketing, Graphic Design; each with gold circle icon, title, description
7. **Portfolio** — Section heading "Our Stunning Works" + filter tabs (All, Branding, Web Design, Illustration, Application) + 4-column grid of 8 project cards (300px height, background image, hover overlay with project name and tags)
8. **Testimonials** — Section heading "What Are Clients Says" + centered carousel of client testimonials with circular avatar, 5 gold stars, quote text, name, position
9. **Blog** — Section heading "Our Latest Blog" + 4-column grid of blog cards (190px image + text card with date, title, excerpt)
10. **Footer** — Black background, 3-column: brand + social icons, navigation links (2 columns), contact info (address, phone, email); bottom bar with copyright (replaced with Component Dock link)

## Gherkin Requirements

### Navbar

```gherkin
Feature: Navbar
  Scenario: Renders brand and navigation links
    Given the page loads
    Then a dark navbar is visible with brand "Pexfolio Creative Agency"
    And navigation links "Home", "About", "Works", "Blog", "Contact" are displayed
    And the navbar is fixed at the top of the page

  Scenario: Mobile hamburger menu
    Given the viewport is 768px wide or less
    When the user clicks the hamburger menu button
    Then the navigation links expand/collapse
```

### Hero Slider

```gherkin
Feature: Hero Slider
  Scenario: Displays slide content
    Given the hero slider is visible
    Then a large heading is displayed (e.g. "Build Stunning Websites Design")
    And a paragraph of descriptive text is shown
    And a gold "View Portfolio" CTA button is present

  Scenario: Slide navigation via thumbnails
    Given there are 3 slides
    When the user clicks slide indicator "02."
    Then the second slide content is displayed

  Scenario: Dark overlay on left half
    Given a slide is displayed
    Then a semi-transparent black overlay covers the left 50% of the image
```

### About Section 1

```gherkin
Feature: About Section 1
  Scenario: Renders split layout
    Given the about section is visible
    Then a 50/50 split layout is displayed
    And a background image is on the left side
    And the right side contains a gold subheading "Welcome Pexfolio"
    And a heading "We Are Creative Agency That Create Beautiful Websites" is shown
    And two paragraphs of text are present
    And a gold "Start A Project" button is displayed
```

### Counter Section

```gherkin
Feature: Counter Section
  Scenario: Displays four stats
    Given the counter section is visible
    Then 4 statistics are displayed: "10K+ Achievements", "21K+ Project Completed", "27 Years of Experienced", "30K+ Happy Customers"
    And the section has a parallax background image with black overlay
    And the number values are white
    And the K+ suffixes are gold (#d9bf77)
```

### What We Offer

```gherkin
Feature: What We Offer
  Scenario: Displays services with numbered icons
    Given the "What We Offer" section is visible
    Then a gold subheading "What we offer" is shown
    And a heading "What We Offer" is displayed
    And 4 numbered services are listed: Research (1), Design (2), Development (3), Testing (4)
    And each service has a black circle with white number
    And a gold "Start A Project" button is present

  Scenario: Split layout with image
    Given the section is displayed on desktop
    Then a 50/50 split layout shows text on left, image on right
```

### Services Grid

```gherkin
Feature: Services Grid
  Scenario: Displays four service cards
    Given the services section is visible
    Then 4 service cards are displayed in a row: Web Design, Photography, Marketing, Graphic Design
    And each card has a gold circle icon background
    And the section background is light gray (#f7f7f7)
    And each card shows a title and description
```

### Portfolio Grid

```gherkin
Feature: Portfolio Grid
  Scenario: Displays filter tabs and project cards
    Given the portfolio section is visible
    Then filter tabs "All", "Branding", "Web Design", "Illustration", "Application" are shown
    And 8 project cards are displayed in a 4-column grid
    And each card has a background image at 300px height

  Scenario: Hover reveals project details
    Given a project card is hovered
    Then a dark overlay appears at 0.7 opacity
    And the project name and category tags are revealed in white text
```

### Testimonials

```gherkin
Feature: Testimonials
  Scenario: Displays testimonial carousel
    Given the testimonial section is visible
    Then a gold subheading "Testimonial" is shown
    And a heading "What Are Clients Says" is displayed
    And a carousel shows client testimonials
    And each testimonial has a circular avatar, 5 gold stars, quote text, name, and position

  Scenario: Carousel navigation
    Given multiple testimonials exist
    When the user navigates the carousel
    Then different testimonials are displayed
```

### Blog Section

```gherkin
Feature: Blog Section
  Scenario: Displays blog cards
    Given the blog section is visible
    Then a heading "Our Latest Blog" is shown
    And 4 blog cards are displayed in a 4-column grid
    And each card has a 190px background image, date, title, and excerpt
```

### Footer

```gherkin
Feature: Footer
  Scenario: Renders footer with navigation and contact
    Given the footer is visible
    Then a black background footer is displayed
    And the brand name "Pexfolio" is shown
    And social media icons (Twitter, Facebook, Instagram) are displayed
    And navigation links are organized in two columns
    And contact information shows address, phone, and email
    And all footer links are gold (#d9bf77) colored

  Scenario: Copyright bar with Component Dock link
    Given the footer bottom bar is visible
    Then a copyright notice is shown
    And a link to "https://www.componentdock.com/" is present (branded "Component Dock")
```

## Verification Checklist

- [ ] Navbar renders with correct brand name and all 5 nav links
- [ ] Hero slider shows 3 slides with background images and overlay
- [ ] Slide thumbnail navigation works (clicking indicators switches slides)
- [ ] About Section 1 has 50/50 split with image and text
- [ ] Counter section displays 4 stats with parallax background
- [ ] What We Offer section has 4 numbered services with icons
- [ ] Services Grid shows 4 cards on light gray background
- [ ] Portfolio grid shows 8 project cards with hover overlay
- [ ] Portfolio filter tabs are present
- [ ] Testimonials carousel renders with avatars, stars, and text
- [ ] Blog section shows 4 cards with images and text
- [ ] Footer has 3-column layout with social icons and contact
- [ ] Footer bottom links to Component Dock
- [ ] Brand color #d9bf77 used consistently across buttons, subheadings, active states
- [ ] Montserrat font loaded from Google Fonts
- [ ] Buttons are square (border-radius: 0) with uppercase text
- [ ] All placeholder images use picsum.photos with deterministic seeds
- [ ] No ColorLib references in any app code (only in spec and TEMPLATES.md)
- [ ] public/CNAME contains pexfolio.free.componentdock.com
- [ ] homepage in package.json is https://pexfolio.free.componentdock.com
- [ ] 100% test coverage enforced
