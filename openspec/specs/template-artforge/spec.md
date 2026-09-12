# Template: ArtForge (Creative Agency)

## Purpose

Recreation of ColorLib "Grunt" — a creative agency / design studio template
featuring a fullscreen hero slider, services grid, about section with skill
progress bars, team profiles, portfolio gallery, testimonials, studio gallery,
contact form, and a dark footer with newsletter signup.

- **Source:** https://colorlib.com/wp/template/grunt/
- **Preview:** https://preview.colorlib.com/theme/grunt/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/grunt-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **App folder:** `apps/artforge`
- **Package:** `@free-react-templates/artforge`

## Design Tokens

Extracted from `preview.colorlib.com/theme/grunt/css/style.css` and preview DOM.

| Token | Value | Usage |
|---|---|---|
| Brand color (primary) | `#bd1220` (dark crimson red) | Hero slider active dot, CTA button accent |
| Body text | `gray` (`#808080`) | Body copy, descriptions |
| Heading color | `#000` (black) | h1, h2 |
| Body font | `"Roboto"` (Google Fonts) | All body text, weight 300–900 |
| h1 font-size | `8rem`, weight `900`, line-height `1` | Hero headline ("Grunt.") |
| Background (main) | `#fff` (white) | Body, navbar, sections |
| Navbar bg (scrolled) | `#ebeef0` (light gray) | Sticky header on scroll |
| Footer bg | `#333333` (dark gray) | Site footer |
| Form input bg | `#f6f6f6` | Contact form inputs |
| Button border-radius | `30px` (pill) | All `.btn` elements |
| Button border | `2px` | CTA buttons |
| Body line-height | `1.7` | Paragraph text |
| Body font-weight | `300` | Light body text |
| Body font-size | `1rem` | Base size |

### Social icon colors (from CSS)
- LinkedIn: `#0077b5`
- Twitter: `#1da1f2`
- Facebook: `#3b5998`
- Instagram: `#c13584`
- Dribbble: `#ea4c89`
- GitHub: `#28a745`

## Section Structure (in order)

1. **Navbar** — Sticky top nav, logo "ArtForge" (left), links: Home, What We Do, About Us, Portfolio, Gallery, Contact (right). Mobile hamburger menu. Background shifts to `#ebeef0` on scroll.
2. **Hero Slider** — Full-viewport image carousel (3 slides), each with background cover image. Overlay text: "ArtForge" heading (8rem/900 weight), subtitle "Far far away, behind the word mountains...", CTA button "Start a project". Owl Carousel with dots.
3. **What We Do (Services)** — Section title "What We Do" with subtitle. 6 service cards in a 3-column grid: Design, Development, eCommerce, Mobile Apps, CopyWriting, Search Engine Optimization. Each card has an icon, title, description, and "Learn more" link.
4. **About** — "Acquaint Us" label + "About us" heading. Left: descriptive text + "Watch the video" CTA. Right: skill progress bars (Design, Development, eCommerce, Mobile Apps, Copywriting, SEO) with percentage indicators. Full-width background image (`glint_about_1.jpg`).
5. **Team** — "Meet The Team" heading + "We are talented people." subtitle. 2 team member cards: Jacob Spencer (CEO, Co-Founder) and Chris Peters (CTO, Co-Founder). Each with photo, name, role, bio paragraph, and social follow links.
6. **Portfolio** — "We love what we do, check out some of our latest works" heading. 3-column gallery grid with hover overlay. Items: "Project title one/two/three" with "Visit website" links. Masonry-style layout.
7. **Testimonials** — "Our Client Sayings" heading. Carousel/slider with client quotes. Client photos and attribution.
8. **Studio Gallery** — "Studio Gallery" heading + "Photos" label. Full-width image grid (masonry/no-gutter). 6+ images in a mixed-size layout.
9. **Contact** — "Get In Touch" label + "Contact Us" heading. Contact form with fields: name, email, subject, message + "Send Message" submit button. Form inputs have `#f6f6f6` background.
10. **Footer** — Dark (`#333333`) background. 3 columns: About text, Navigation links (Home, What We Do, About Us, Team), Newsletter signup (email input + Subscribe button). Bottom: copyright line "All rights reserved".

## Gherkin Requirements

```gherkin
Feature: ArtForge Creative Agency Template
  As a visitor to the ArtForge website
  I want to browse a professional creative agency site
  So that I can learn about the agency's services, team, and portfolio

  Background:
    Given the user is on the ArtForge homepage

  # --- Navbar ---
  Scenario: Navbar displays on load
    Then the navbar is visible at the top of the page
    And the logo text "ArtForge" is displayed
    And navigation links "Home", "What We Do", "About Us", "Portfolio", "Gallery", "Contact" are present

  Scenario: Navbar becomes sticky on scroll
    When the user scrolls down past the hero section
    Then the navbar remains fixed at the top
    And the navbar background changes to a light gray

  Scenario: Mobile hamburger menu opens
    Given the viewport width is less than 768px
    When the user taps the hamburger menu icon
    Then a mobile navigation drawer slides open
    And all navigation links are listed vertically

  # --- Hero Slider ---
  Scenario: Hero slider displays with background images
    Then a fullscreen hero section is visible
    And the heading "ArtForge" is displayed in large bold text
    And a subtitle paragraph is displayed below the heading
    And a "Start a project" CTA button is visible

  Scenario: Hero slider auto-advances
    Then the hero slider cycles through 3 slides automatically
    And carousel navigation dots are visible

  Scenario: CTA button navigates to contact
    When the user clicks "Start a project"
    Then the page scrolls to the contact section

  # --- Services ---
  Scenario: Services section displays 6 service cards
    When the user scrolls to the "What We Do" section
    Then 6 service cards are displayed in a 3-column grid
    And each card has an icon, title, description, and "Learn more" link
    And the service titles are "Design", "Development", "eCommerce", "Mobile Apps", "CopyWriting", "Search Engine Optimization"

  # --- About ---
  Scenario: About section shows description and skills
    When the user scrolls to the "About us" section
    Then a heading "About us" is displayed
    And descriptive text about the agency is shown
    And a "Watch the video" button is visible
    And skill progress bars are displayed for Design, Development, eCommerce, Mobile Apps, Copywriting, and SEO

  # --- Team ---
  Scenario: Team section displays member profiles
    When the user scrolls to the "Meet The Team" section
    Then 2 team member cards are displayed
    And each card shows a photo, name, role, and bio
    And social follow links are present for each team member

  # --- Portfolio ---
  Scenario: Portfolio gallery displays project items
    When the user scrolls to the portfolio section
    Then at least 3 project items are displayed in a grid
    And each item has a title and "Visit website" link
    And hover effects reveal overlay information

  # --- Testimonials ---
  Scenario: Testimonials slider displays client quotes
    When the user scrolls to the "Our Client Sayings" section
    Then client testimonials are displayed in a carousel
    And each testimonial shows a quote and client attribution

  # --- Studio Gallery ---
  Scenario: Studio gallery displays photo grid
    When the user scrolls to the "Studio Gallery" section
    Then a masonry-style photo grid is displayed
    And at least 6 images are shown

  # --- Contact ---
  Scenario: Contact form renders all fields
    When the user scrolls to the "Contact Us" section
    Then a form with name, email, subject, and message fields is displayed
    And a "Send Message" submit button is present

  Scenario: Contact form validates required fields
    When the user clicks "Send Message" without filling any fields
    Then validation errors appear for required fields

  # --- Footer ---
  Scenario: Footer displays with navigation and newsletter
    Then a dark footer section is visible
    And the footer contains about text, navigation links, and a newsletter signup
    And a copyright notice is displayed
    And the footer links to https://www.componentdock.com/

  # --- Responsive ---
  Scenario: Layout adapts to mobile viewport
    Given the viewport width is 375px
    Then the service grid stacks to a single column
    And the team cards stack vertically
    And the contact form is full-width
```

## Verification Checklist

- [ ] Navbar: sticky, logo text, all 6 nav links, mobile hamburger
- [ ] Hero: 3-slide carousel, large heading, subtitle, CTA button, dots
- [ ] Services: 6 cards in 3-col grid, icons, descriptions, "Learn more" links
- [ ] About: heading, description, "Watch the video" CTA, 6 skill progress bars
- [ ] Team: 2 member cards, photos (placeholder), names, roles, bios, social links
- [ ] Portfolio: 3+ project items, grid layout, hover overlay, "Visit website" links
- [ ] Testimonials: carousel with client quotes and attribution
- [ ] Studio Gallery: masonry photo grid, 6+ images
- [ ] Contact: form with name/email/subject/message, "Send Message" button, validation
- [ ] Footer: dark bg (#333), about text, nav links, newsletter signup, copyright, Component Dock link
- [ ] Responsive: mobile hamburger, stacked grids, full-width form
- [ ] Design tokens: brand red #bd1220, Roboto font, pill buttons (border-radius 30px), gray body text
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images via picsum.photos
