# Template: Luminary (Inspiration / Creative Agency)

## Purpose

Recreation of ColorLib "Inspire" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source slug:** `inspire`
- **Preview URL:** https://preview.colorlib.com/theme/inspire/
- **Source screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/inspire-free-template.jpg
- **New name:** `luminary` (app folder: `apps/luminary`, package: `@free-react-templates/luminary`)
- **Surge target:** `luminary.free.componentdock.com`

## Design Tokens (from live preview CSS)

| Token | Value | Notes |
|---|---|---|
| Font family | `"Rubik", sans-serif` | Google Fonts; weights 300, 400, 700 |
| Brand primary | `#1daff3` | Used for `.text-primary`, buttons, icons, links |
| Brand hover | `#30b6f4` | Lighter blue for button hover |
| Background | `#ffffff` | Page background |
| Text color | `#000000` | Body text |
| Button radius | `30px` | Pill-shaped buttons |
| Service icon radius | `40%` | Rounded-square icon wraps |
| Play button radius | `50%` | Circular play button in hero |
| Social icon radius | `50%` | Circular social links |
| Section bg-light | `#f8f9fa` (Bootstrap default) | Services and feature sections |
| Highlight color | Inherited from text | `<span class="highlight">` used in copy |

## Section Structure (in order)

1. **Navbar** — Sticky top nav. Logo "Luminary" with colored dot accent. Menu: Home, Services, FAQ, About, Contact. Mobile hamburger.
2. **Hero** — Full-width background image (`picsum.photos/seed/luminary-hero/1920/1080`), centered headline "We Inspire You To Create Great Things", subtext, circular play button (links to placeholder video), social icons (Instagram, Twitter, Facebook) on left side.
3. **Services** — `bg-light` background. 4-column card grid: Inspire, Create, Innovate, Publish. Each card has a circular icon-wrap, heading, short description. "See All Services" link below.
4. **About / Features** — "Why Are We Awesome?" heading. Left: excerpt text with highlighted phrases. Right: image (`picsum.photos/seed/luminary-about/600/400`). Below text: 2x2 grid of service-v2 items (Photography, Find It Here, Photography, Fly Your Dreams) with icon + text.
5. **Concept (Parallax)** — Full-width parallax background image. "Our Concept" heading with highlighted text, description, "Get started" primary button.
6. **Testimonials** — Carousel/slider (static grid on mobile). 4-8 testimonial cards: person image (`picsum.photos/seed/luminary-person-N/150/150`), quote text, author name "Carl Anderson". Prev/next navigation arrows.
7. **Feature / CTA** — `bg-light` background. "Help Us by Sharing Our Works" heading, description, author attribution ("Carl Anderson, Co-Founder & CEO"). Right: image (`picsum.photos/seed/luminary-feature/600/400`).
8. **Footer** — Dark background. Top: "Help Us Spread Our Works" heading with "Share them to social media!" button. 3-column layout: Contact (phone, email), Sources (links), Links (links). Social icons row (Instagram, Twitter, Facebook, LinkedIn, Pinterest, Dribbble). Copyright line with "Made with Component Dock" link.

## Gherkin Scenarios

```gherkin
Feature: Luminary template sections

  Scenario: Navbar renders with logo and navigation links
    Given the user opens the Luminary page
    Then the navbar displays the logo "Luminary"
    And navigation links include Home, Services, FAQ, About, Contact
    And the navbar is sticky on scroll

  Scenario: Hero section displays headline and play button
    Given the user views the hero section
    Then a full-width background image is displayed
    And the headline reads "We Inspire You To Create Great Things"
    And a circular play button is centered below the text
    And social icons appear on the left side

  Scenario: Services section shows four service cards
    Given the user scrolls to the services section
    Then four cards are displayed in a row: Inspire, Create, Innovate, Publish
    And each card has an icon, heading, and description
    And a "See All Services" link is below the cards
    And the section has a light background

  Scenario: About section displays features and image
    Given the user scrolls to the about section
    Then "Why Are We Awesome?" heading is displayed
    And descriptive text with highlighted phrases appears
    And a 2x2 grid of service-v2 items is shown
    And an image appears alongside the text

  Scenario: Concept section shows parallax background
    Given the user scrolls to the concept section
    Then a parallax background image fills the section
    And "Our Concept" heading with highlighted text is centered
    And a "Get started" primary button is present

  Scenario: Testimonials carousel displays reviews
    Given the user scrolls to the testimonials section
    Then testimonial cards display person images, quotes, and names
    And prev/next navigation arrows are available
    And the carousel auto-scrolls or responds to navigation

  Scenario: Feature CTA section shows sharing prompt
    Given the user scrolls to the feature section
    Then "Help Us by Sharing Our Works" heading is displayed
    And an author attribution is shown
    And an image appears on the right
    And the section has a light background

  Scenario: Footer contains contact info and links
    Given the user scrolls to the footer
    Then a dark background footer is displayed
    And "Help Us Spread Our Works" heading appears
    And three columns show Contact, Sources, and Links
    And social icons are displayed
    And copyright with "Made with Component Dock" is shown
```

## Verification Checklist

- [ ] Navbar is sticky with logo and all navigation links
- [ ] Hero has full-width background image, headline, play button, social icons
- [ ] Services section: 4 cards in a row, light background, "See All Services" link
- [ ] About section: heading, text with highlights, 2x2 service grid, image
- [ ] Concept section: parallax background, heading, text, CTA button
- [ ] Testimonials: carousel with images, quotes, names, navigation arrows
- [ ] Feature/CTA: heading, text, author, image, light background
- [ ] Footer: dark bg, 3-column layout, social icons, copyright with Component Dock link
- [ ] All placeholder images use `picsum.photos/seed/luminary-*`
- [ ] No ColorLib references in app code
- [ ] Brand color `#1daff3` used consistently
- [ ] Font family Rubik loaded via Google Fonts
- [ ] Buttons use pill shape (30px radius)
- [ ] Responsive layout works on mobile
- [ ] 100% test coverage achieved
