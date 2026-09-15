# Template: RoomHaus (Interior Design Studio)

## Purpose

Recreation of the ColorLib "Theinterior" template as a React 19 + Vite +
Tailwind CSS 4 + TypeScript single-page interior design studio landing page.

- Source slug: `theinterior`
- Source URL: https://colorlib.com/wp/template/theinterior/
- Preview URL: https://preview.colorlib.com/theme/theinterior/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/theinterior-free-template.jpg
- Package: `@free-react-templates/roomhaus`
- Deploy target: `roomhaus.free.componentdock.com`

## Design tokens (from reference CSS analysis)

### Brand colors

| Token | Hex | Usage |
|-------|-----|-------|
| Brand gold | `#c6a16e` | Primary accent, CTA buttons, WantToWork banner bg |
| Dark navy | `#16161a` | Body default text, dark overlays |
| Footer dark | `#010b1d` | Footer background |
| Card alt | `#0b1c39` | Secondary dark tone |
| Red accent | `#e6373d` | Notification badges, urgency accent |
| Gold alt | `#dca73a` | Secondary gold variant |
| Orange accent | `#ff8b23` | Hover states, supplementary accent |
| Light gray bg | `#f7f7f7` / `#fafafa` | Section alternating backgrounds |
| Gray text | `#506172` / `#868c98` | Body text secondary, muted captions |

### Typography

| Role | Font | Fallback |
|------|------|----------|
| Headings | Josefin Sans | sans-serif |
| Script accent | Great Vibes | cursive |
| Body | Barlow | sans-serif |

### Shape / spacing

- Standard border-radius: `5px` (cards, buttons, inputs)
- Circular rounding: `50%` (avatar images, blog date badges)
- Button primary: gold `#c6a16e` bg, white text, 5px radius
- Button dark: `#16161a` bg, white text

### Section backgrounds (order)

1. Header: transparent, sticky on scroll
2. Slider/Hero: full-width image with dark overlay `rgba(1,10,28,0.3)`, white headline + gold CTA
3. Our Info: `section-bg` (light/white), 4 stat columns
4. Professional Services: `section-bg`, intro text + heading
5. Services: `section-padding3`, 3 service cards with image + title + text
6. Gallery: image grid, no background
7. Team: team member cards with image + name + social links
8. Testimonials: dot-style slider, centered quote
9. Brand/Partner: partner logos row
10. WantToWork CTA: `#c6a16e` gold banner, "Are you Searching For a First-Class Consultant?"
11. Blog: 2 recent blog cards
12. Footer: `#010b1d` dark, 3 columns (logo+text, useful links, Instagram feed + contact)

## Gherkin requirements

```gherkin
Feature: RoomHaus landing page
  As a visitor to the interior design studio website
  I want to see a polished, professional landing page
  So that I can learn about the studio and get in touch

  Background:
    Given the page is loaded at roomhaus.free.componentdock.com

  Scenario: Transparent sticky header
    Given the user scrolls down the page
    Then the header should become sticky with a solid background
    And the nav should contain links: Home, About, Services, Gallery, Blog, Contact

  Scenario: Hero slider section
    Then the hero section should display the heading "Modern Interior & Design"
    And the hero should have a dark overlay over the background image
    And there should be a "Discover More" CTA button
    And navigation dots should be visible below the hero

  Scenario: Info statistics section
    Then 4 stat columns should be visible with icons and labels
    And each column should show a number/stat with description text

  Scenario: Professional services intro
    Then a heading "Best Interior Services" should be visible
    And introductory paragraph text should appear below the heading

  Scenario: Services grid
    Then 3 service cards should be visible in a row
    And each service card should have an image, title, and description
    And the service titles should be: "Lighting", "Interior Design", "Office Decoration"

  Scenario: Gallery section
    Then a gallery grid of images should be visible
    And images should have hover overlay effects

  Scenario: Team section
    Then team member cards should be visible
    And each card should show a photo, name, and social links

  Scenario: Testimonial slider
    Then a testimonial section should display with dot navigation
    And each testimonial should have a quote, founder name, and designation

  Scenario: Brand/partner logos
    Then a row of partner brand logos should be visible
    And logos should be displayed horizontally

  Scenario: WantToWork CTA banner
    Then a gold (#c6a16e) banner should be visible
    And the banner should display "Are you Searching For a First-Class Consultant?"
    And a dark "Contact Us" button should be present

  Scenario: Blog section
    Then 2 recent blog post cards should be visible
    And each card should have an image, date badge, title, and excerpt
    And a "Read more" link should appear on each card

  Scenario: Footer
    Then the footer should have a dark (#010b1d) background
    And it should contain: logo + description, useful links, Instagram feed, contact info
    And the footer should link to https://www.componentdock.com/

  Scenario: Mobile responsive
    Given the viewport is 375px wide
    Then a hamburger menu icon should be visible
    And the hero section should stack vertically
    And service cards should stack vertically
    And the footer columns should stack vertically
```

## Verification checklist

- [ ] Header becomes sticky on scroll with solid background
- [ ] Hero has dark overlay, heading, CTA, and dot navigation
- [ ] 4-column info/stat section renders correctly
- [ ] Professional services intro section with heading and paragraph
- [ ] 3 service cards with images, titles, descriptions in a row
- [ ] Gallery grid with hover effects
- [ ] Team member cards with photos and social links
- [ ] Testimonial slider with dot navigation
- [ ] Partner logo row
- [ ] Gold WantToWork CTA banner
- [ ] 2 blog post cards with date badges
- [ ] Dark footer with 3-column layout, Component Dock link
- [ ] Mobile responsive: hamburger menu, stacked layouts
- [ ] All colors match design tokens
- [ ] Fonts: Josefin Sans (headings), Barlow (body), Great Vibes (accent script)
- [ ] 100% test coverage (lines, functions, branches, statements)
