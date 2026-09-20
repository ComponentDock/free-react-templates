# Template: Smokeshade (Fashion)

## Purpose

Recreation of ColorLib "Hazze" — a dark-themed fashion agency/creative portfolio template with bold magenta accents.

- **Source slug:** `hazze`
- **Preview URL:** https://preview.colorlib.com/theme/hazze/
- **Source page:** https://colorlib.com/wp/template/hazze/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/haze-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

| Token             | Value                          | Notes                                          |
| ----------------- | ------------------------------ | ---------------------------------------------- |
| Font (body)       | `'Libre Franklin', sans-serif` | Weights 400, 500, 600, 700, 800, 900          |
| Brand color       | `#e32879`                      | Hot pink/magenta — buttons, accents, hovers     |
| Text primary      | `#ffffff`                      | Headings, nav links on dark bg                  |
| Text secondary    | `#b3b3b3`                     | Body text on dark bg                            |
| Body background   | `#191919`                     | Dark charcoal — main page bg                    |
| Card/item bg      | `#222222`                     | Slightly lighter dark for cards                 |
| Darker shade      | `#111111`                     | Footer widget backgrounds                      |
| Lighter shade     | `#2a2a2a`                     | Alternate section bg                            |
| Mid gray          | `#303030`                     | Input fields, borders                           |
| Button radius     | `50px`                         | Pill-shaped primary buttons                     |
| Icon circle radius| `50%`                          | Circular social/icon containers                 |
| Border/divider    | `#393939`                     | Subtle dividers                                |
| Text dark         | `#0d0a27`                     | Text on light/overlaid sections                 |
| Body text color   | `#5c5c5c`                     | Paragraph text in light contexts                |

## Page Structure (section order)

1. **Header** — Sticky top bar: logo (left, 2/12 cols), nav menu (right, 10/12 cols): Home, About Us, Blog, Gallery (with dropdown: Naoh, Padis, Jacob, Gomez), Contact. Hamburger menu on mobile with SlickNav.
2. **Hero** — Full-width background image (`img/hero-bg.jpg`), overlay text: subtitle "Office Fashion", heading "New Fashion", description paragraph, CTA button "Read More" (pill, magenta).
3. **About Us** — Two-column layout: left = image (`img/about-us.jpg`), right = section title "About us" / heading "About Story", two paragraphs (`.f-para`, `.s-para`), CTA "Read More". Light background.
4. **Services** — Section title "Best Services Save The World", 3-column grid of service items: each has icon (chain icon), heading (Modern Design, Content, Make Up), description paragraph. Light background.
5. **Portfolio** — Section title "Turn Your Dream Into Reality", 4 portfolio items in a grid: 3 small items + 1 large item (3:1 layout). Each has background image with hover overlay (`.pi-hover` with heart icon). Images: portfolio-1 through portfolio-4.
6. **Counter** — Two-column: left = section title "We have a lot of experience" + CTA "Read More", right = 2 counter items with chain icons and animated count numbers: "Successful projects" and "Events", each with description text.
7. **Testimonials** — Owl Carousel slider, testimonial items: left = circular author photo, right = name + role + quote paragraph. Authors: Travis Crawford (Designer), Noah Padilla (Designer). 4 slides total.
8. **Call to Action** — Full-width background image (`img/ctc-bg.jpg`), centered text: heading "We Create Trends For The World", description, CTA button "Work With Us" (pill, magenta).
9. **Members/Team** — Section title "Top Designers", 3-column grid of member cards: each has circular photo, social links row (Facebook, Twitter, Instagram, Pinterest), name, role/quote. Members: Jacob Gomez (x3 in reference).
10. **Blog** — Section title "From Our Blog", 2-column grid of blog items: each has featured image, title link, excerpt paragraph, author name. Articles: "Every Single Way You Can Wear Pastel Makeup This Spring" (Jeff Rodriguez), "Everything Coming to Netflix Canada in May 2019" (Aaron Russell).
11. **Footer** — Dark bg, 4 widget columns: logo + description, "Useful Links" (nav links), "Join The Newsletter" (email signup form), "Instagram" (photo grid). Bottom: copyright text, social icons (Facebook, Twitter, Instagram, Pinterest).

## Requirements

### Gherkin Scenarios

```gherkin
Feature: Smokeshade — Fashion Agency Template

  Background:
    Given the user navigates to the Smokeshade app

  Scenario: Header renders with logo and navigation
    Then the logo is visible in the header
    And navigation links "Home", "About Us", "Blog", "Gallery", "Contact" are present
    And "Gallery" has a dropdown submenu

  Scenario: Header is responsive with hamburger menu
    When the viewport is 768px or narrower
    Then the hamburger menu icon is visible
    And the desktop nav menu is hidden
    When the user clicks the hamburger icon
    Then the mobile navigation menu opens

  Scenario: Hero section displays correctly
    Then a full-width hero background image is visible
    And the subtitle "Office Fashion" is displayed
    And the heading "New Fashion" is displayed
    And a description paragraph is visible
    And a "Read More" CTA button is visible with pill shape

  Scenario: About Us section has two-column layout
    Then a left-side image is displayed
    And a right-side text block with heading "About Story" is visible
    And two paragraphs of text are displayed
    And a "Read More" button is present

  Scenario: Services section shows three service cards
    Then the heading "Best Services Save The World" is displayed
    And 3 service items are rendered in a grid
    And each service item has an icon, heading, and description

  Scenario: Portfolio section displays grid with hover effects
    Then the heading "Turn Your Dream Into Reality" is displayed
    And 4 portfolio items are rendered (3 small + 1 large)
    And hovering a portfolio item reveals an overlay with a heart icon

  Scenario: Counter section shows animated stats
    Then the heading "We have a lot of experience" is displayed
    And 2 counter items are displayed with animated count numbers
    And counter items show "Successful projects" and "Events" labels

  Scenario: Testimonial carousel is functional
    Then testimonial slides are displayed in a carousel
    And each slide shows an author photo, name, role, and quote
    And navigation dots/arrows allow moving between slides

  Scenario: Call to action section has background and CTA
    Then a full-width background image is visible
    And the heading "We Create Trends For The World" is displayed
    And a "Work With Us" CTA button is visible

  Scenario: Members section displays team cards
    Then the heading "Top Designers" is displayed
    And 3 team member cards are rendered
    And each card has a circular photo, social icons, and name

  Scenario: Blog section shows article previews
    Then the heading "From Our Blog" is displayed
    And 2 blog article cards are rendered
    And each card has a featured image, title, excerpt, and author name

  Scenario: Footer contains widgets and copyright
    Then a newsletter signup form is present
    And useful navigation links are listed
    And an Instagram photo grid is shown
    And copyright text is displayed at the bottom
    And social media icon links are present
```

## Verification Checklist

- [ ] All 11 sections render in correct order
- [ ] Dark theme applied: `#191919` body bg, `#ffffff` headings, `#b3b3b3` body text
- [ ] Brand magenta `#e32879` on all CTA buttons and accent elements
- [ ] Libre Franklin font loaded and applied
- [ ] Pill-shaped buttons (border-radius: 50px) with magenta bg
- [ ] Header responsive: hamburger on mobile, full nav on desktop
- [ ] Hero section with background image and overlay text
- [ ] Portfolio grid: 3 small + 1 large layout with hover overlays
- [ ] Counter section with animated number counts
- [ ] Testimonial carousel functional with multiple slides
- [ ] CTA section with background image
- [ ] Team member cards with circular photos
- [ ] Blog grid with article previews
- [ ] Footer with 4 widget columns and copyright
- [ ] Placeholder images via picsum.photos (deterministic seeds)
- [ ] Footer links to componentdock.com
