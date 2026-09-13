# Template: Domicile (Business / Finance Agency)

## Purpose

Recreation of ColorLib "Occupy" — a business/finance agency website template with
a bold lime-green accent and image-heavy hero slider.

- **Source slug:** `occupy`
- **ColorLib page:** https://colorlib.com/wp/template/occupy/
- **Preview URL:** https://preview.colorlib.com/theme/occupy/
- **New name:** domicile
- **App folder:** `apps/domicile`
- **Package:** `@free-react-templates/domicile`
- **Deploy URL:** `https://domicile.free.componentdock.com`
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens (extracted from preview)

### Colors
| Token               | Value                | Usage                                        |
| ------------------- | -------------------- | -------------------------------------------- |
| brand-primary       | `#a7cb00`            | Buttons, accent text, hover states           |
| brand-primary-80    | `rgba(167,203,0,0.8)`| CTA banner background (green overlay)        |
| brand-primary-85    | `rgba(167,203,0,0.85)`| Alternate green overlay                     |
| hero-overlay        | `rgba(34,34,34,0.8)` | Dark overlay on hero/banner images           |
| body-text           | `#666666`            | Default body paragraph text                  |
| heading-text        | `#000000`            | Headings                                     |
| footer-bg           | `#f9f9ff`            | Light gray-blue footer background            |
| footer-text         | `#777777`            | Footer paragraph text                        |
| body-bg             | `#ffffff`            | Main content background                      |
| border-light        | `#eeeeee`            | Subtle borders and dividers                  |

### Fonts
| Token            | Value                                      |
| ---------------- | ------------------------------------------ |
| font-body        | `"Raleway", sans-serif`                    |
| font-heading     | `"Oswald", sans-serif`                     |

### Buttons
| Style            | Details                                                          |
| ---------------- | ---------------------------------------------------------------- |
| banner_btn       | bg `#a7cb00`, color white, padding 0 38px, line-height 48px, border-radius 0 |
| banner_btn:hover | color `#a7cb00`, bg transparent                                  |
| banner_btn2      | Outline style (transparent bg)                                   |
| white_btn        | White bg button for CTA banners                                  |
| sub-btn (newsletter) | Green background for newsletter submit                      |

### Layout / Section backgrounds
| Section          | Background           | Notes                                   |
| ---------------- | -------------------- | --------------------------------------- |
| Hero/Banner      | Full-width swiper    | 3 slides, dark overlay, left-aligned text |
| Mission          | white                | 2-col: image left, owl-carousel text right |
| Success          | white                | Stats/achievements section              |
| Project          | white                | Project showcase                        |
| Team             | white                | Owl-carousel slider of team members     |
| Project CTA      | Dark overlay banner  | "Get to Know Project Estimate?" + button|
| Blog             | white                | 4-column blog cards                     |
| Footer           | #f9f9ff              | 4-col: About, Nav Links, Newsletter, InstaFeed |

## Gherkin requirements

### Feature: Navbar
  Scenario: Sticky navigation bar with social links
    Given the user views the page
    Then a sticky header should be visible with a logo image
    And navigation links: Home, About, Services, Pages (dropdown: Portfolio, Portfolio Details, Elements), Blog (dropdown: Blog, Blog Details), Contact
    And social icons on the right: Facebook, Twitter, Dribbble, Behance, Search
    And a mobile hamburger toggler on small screens

### Feature: Hero Slider
  Scenario: Full-width image slider with CTA
    Given the user lands on the page
    Then a full-width Swiper slider with 3 slides should be visible
    And each slide has a background image with dark overlay
    And text overlay: "We Combine Business with Finance" (Oswald heading)
    And two buttons: "Explore Us" (green #a7cb00) + "Get Free Quote" (outline)
    And the slider auto-advances

### Feature: Mission
  Scenario: Mission section with image and text carousel
    Given the user scrolls to the mission section
    Then a 2-column layout should appear
    And left column: mission image (mission-1.jpg)
    And right column: owl-carousel text slider with items like "Road to Success" and "About Our Mission"
    And bullet navigation below the text carousel

### Feature: Success Stats
  Scenario: Achievement/stats section
    Given the user scrolls to the success section
    Then a section with key statistics should be visible
    And stats should be displayed prominently

### Feature: Project Showcase
  Scenario: Project portfolio section
    Given the user scrolls to the project section
    Then project items should be displayed in a grid
    And each project should have an image and title

### Feature: Team
  Scenario: Team carousel
    Given the user scrolls to the team section
    Then an owl-carousel slider of team members should be visible
    And each team member card should show: photo, name, position
    And 4 team members visible in the carousel

### Feature: Project CTA Banner
  Scenario: Call-to-action banner
    Given the user scrolls past the team section
    Then a dark overlay banner should appear
    And heading: "Get to Know Project Estimate?"
    And a white CTA button: "Get Free Estimate"
    And the background should use a dark semi-transparent overlay

### Feature: Blog
  Scenario: Blog post cards
    Given the user scrolls to the blog section
    Then 4 blog post cards should be displayed in a grid
    And each card should have: image, date/author meta, title, excerpt
    And hover effects on the images

### Feature: Footer
  Scenario: Site footer
    Given the user views the footer
    Then it should have a light gray-blue background (#f9f9ff)
    And 4 columns: About Biznance (text), Navigation Links (2 lists), Newsletter (email form), InstaFeed (image grid)
    And a bottom copyright line
    And footer links must include "Component Dock" (https://www.componentdock.com/)

### Feature: Responsive
  Scenario: Mobile responsiveness
    Given the user views on mobile
    Then the navbar should collapse to a hamburger menu
    And grids should stack to single column
    And the hero slider should be readable on mobile

### Feature: Accessibility
  Scenario: Keyboard and screen reader support
    Given the user navigates with keyboard
    Then all interactive elements should be focusable
    And form inputs should have associated labels
    And images should have alt text

## Verification checklist

- [ ] Spec matches preview DOM section order exactly
- [ ] Brand color `#a7cb00` used for primary accents (buttons, highlights)
- [ ] Font families: "Raleway" (body) and "Oswald" (headings) loaded via Google Fonts
- [ ] Hero is full-width Swiper slider with dark overlay
- [ ] Mission section uses owl-carousel for text slides
- [ ] Team section uses owl-carousel for member cards
- [ ] CTA banner has dark overlay background
- [ ] Footer background is #f9f9ff with proper column layout
- [ ] All 8 sections present in correct order
- [ ] Blog section has 4 cards
- [ ] Contact form has newsletter subscription
- [ ] No ColorLib references in app code
- [ ] Placeholder images use picsum.photos with deterministic seeds
- [ ] Responsive breakpoints work (mobile, tablet, desktop)
