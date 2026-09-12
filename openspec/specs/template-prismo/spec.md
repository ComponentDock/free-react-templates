# Template: Prismo (Business / Digital Agency)

## Purpose

Recreation of ColorLib **Dizzi** — a professional business / digital agency
website template. Single-page React app; all sections on one page.

- **Source slug:** `dizzi`
- **ColorLib page:** https://colorlib.com/wp/template/dizzi/
- **Live preview:** https://preview.colorlib.com/theme/dizzi/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/dizzi-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens (extracted from preview CSS)

| Token              | Value                              | Notes                                      |
| ------------------ | ---------------------------------- | ------------------------------------------ |
| Font family        | `"Open Sans", sans-serif`          | Google Fonts 300/400/600/700               |
| Brand / accent     | `#00d089` (green)                  | Buttons, section subtitle text, link hover |
| Button hover       | `#0042ff` (blue)                   | `.btn_1:hover`                             |
| Heading color      | `#000`                             | h1–h6, font-weight 700                     |
| Body text          | `#848484`                          | paragraphs, font-weight 300                |
| Button radius      | `50px` (pill)                      | `.btn_1` border-radius                     |
| Button padding     | `27px 70px` desktop / `10px 30px` mobile | Pill CTA buttons                      |
| Section padding    | `140px 0` desktop / `70px 0` mobile | `.section_padding`                       |
| Section title p    | `#00d089`, uppercase, 16px        | Subtitle under section heading             |
| CTA section bg     | Dark / image-based (banner area)   | Hero uses background image                 |
| About img area     | Light / white background           | Left image, right text layout              |
| Services bg        | Light gray                         | 3-column numbered service cards            |
| Projects bg        | White                              | Filterable grid with hover overlay         |
| Creative section   | Left image, right text + video CTA | Full-width fluid container                 |
| Testimonials bg    | White                              | Owl carousel, client avatars               |
| CTA banner         | Green bg (`#00d089`) or image      | "Let's create something awesome"           |
| Footer bg          | Dark (dark surface)                | 4-column footer                            |

## Gherkin Requirements

### Navbar

```gherkin
Feature: Navbar

  Scenario: Logo and navigation links
    Given the user visits the page
    Then a navbar is visible at the top
    And it contains links: Home, About, Services, Blog, Pages (dropdown), Contact
    And social icons (Facebook, Twitter, Dribbble, Instagram) appear on desktop
    And a hamburger menu toggle appears on mobile

  Scenario: Sticky navbar on scroll
    Given the user scrolls down
    Then the navbar becomes sticky with a subtle shadow
```

### Hero / Banner

```gherkin
Feature: Hero Banner

  Scenario: Hero displays headline and CTA
    Given the user visits the page
    Then a hero banner is visible
    And it contains subtitle "We are digital agency"
    And headline "Digital and innovative idea"
    And a CTA button "Explore Work"
    And the background is a dark overlay image
```

### Client Logos

```gherkin
Feature: Client Logo Carousel

  Scenario: Logo carousel displays partner logos
    Given the user scrolls to the client logos section
    Then a horizontal carousel of 6+ partner logos is visible
    And the logos auto-scroll in an infinite loop
```

### About Us

```gherkin
Feature: About Section

  Scenario: About section shows company info
    Given the user scrolls to the About section
    Then subtitle "About Us" is shown in brand green
    And heading "Digital design and development company"
    And a paragraph of body text
    And a CTA button "explore us"
    And an illustration image on the right
```

### Services

```gherkin
Feature: Services Section

  Scenario: Three service cards are displayed
    Given the user scrolls to the services section
    Then 3 numbered service cards are shown (01, 02, 03)
    And each card has a heading, description paragraph, and bullet list
    And card 01 is "User experience design"
    And card 02 is "Web and App development"
    And card 03 is "Digital and innovative marketing"
```

### Projects / Portfolio

```gherkin
Feature: Projects Section

  Scenario: Portfolio grid with filters
    Given the user scrolls to the projects section
    Then subtitle "our project" and heading "Our Projects" are shown
    And filter tabs "All", "Web Design", "Mobile App" are visible
    And 2 project cards are shown with images
    And hovering a card shows an overlay with category + title
    And a "more projects" link is visible on desktop
```

### Creative / Video Section

```gherkin
Feature: Creative Section

  Scenario: Full-width creative section with video CTA
    Given the user scrolls to the creative section
    Then heading "We work hard and think creatively"
    And a paragraph + quote
    And a "See how we work" link with play icon (YouTube popup)
    And an illustration image on the left
```

### Testimonials

```gherkin
Feature: Testimonials Section

  Scenario: Client testimonials carousel
    Given the user scrolls to the testimonials section
    Then subtitle "Testimonials" and heading "What our Client say"
    And a carousel of at least 2 testimonials
    And each testimonial has an avatar, name, role, and quote
```

### CTA Banner

```gherkin
Feature: CTA Banner

  Scenario: Call-to-action banner
    Given the user scrolls to the CTA section
    Then heading "Let's create something awesome together"
    And a CTA button "Discuss project"
    And the background is brand green or a dark overlay image
```

### Footer

```gherkin
Feature: Footer

  Scenario: 4-column footer
    Given the user scrolls to the footer
    Then 4 columns are shown: brand info + nav, Company links, Resources links, Contact info
    And social icons are visible
    And contact info shows 2 office locations (London, New York)
    And the footer links to https://www.componentdock.com/
    And a "More templates at Component Dock" or equivalent line is present
```

## Verification Checklist

- [ ] All sections render in correct order matching the original
- [ ] Design tokens match: Open Sans, #00d089 brand green, pill buttons, #000 headings, #848484 body
- [ ] Responsive: hamburger nav on mobile, stacked columns, adjusted padding
- [ ] No references to ColorLib in app code (only in spec + TEMPLATES.md)
- [ ] Footer links to componentdock.com
- [ ] Placeholder images use picsum.photos/seed/prismo-*
- [ ] Google Fonts loaded via index.html link
- [ ] Icons from lucide-react (replacing ti- icons)
- [ ] Works with packages/ui components where possible
