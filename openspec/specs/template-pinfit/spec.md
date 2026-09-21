# Template: Pinfit (Men's Tailoring)

## Purpose

Recreation of ColorLib "Menztailor" — a men's tailoring service template with
dark hero, gold accents, service cards, video history section, testimonials, and
a "Visit Our Tailor" CTA section.

- **Source slug:** `menztailor`
- **Preview URL:** https://preview.colorlib.com/theme/menztailor/
- **Source page:** https://colorlib.com/wp/template/menztailor/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/menztailor-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

| Token             | Value                          | Notes                                              |
| ----------------- | ------------------------------ | -------------------------------------------------- |
| Font (body)       | `'Montserrat', sans-serif`    | Weights 400, 500, 600, 700                        |
| Font (headings)   | `'Josefin Sans', sans-serif`  | Weights 300–700, buttons, nav links                |
| Font (decorative) | `'Great Vibes', cursive`      | Section script labels (e.g. "What we offer")       |
| Brand color       | `#c6a16e`                     | Warm gold/bronze — buttons, accents, section titles |
| Button hover      | `#b99562`                     | Darker gold on hover with scaleX transition         |
| Body background   | `#0b1416`                     | Very dark navy/charcoal — hero, footer, body bg    |
| Light section bg  | `#f9f9ff`                     | Very light lavender-white for offer cards           |
| Heading text      | `#0b1c39`                     | Dark navy for h1–h6 on light backgrounds           |
| Body text         | `#96989a`                     | Gray for paragraphs                                |
| Secondary text    | `#999999`                     | Muted gray for secondary content                   |
| Button radius     | `0px` (sharp corners)         | Primary `.btn` has sharp rect; `.boxed-btn` uses   |
|                   |                                | 1px border `#c6a16e`, transparent fill, 3px radius |
| Dropdown border   | `5px solid #c6a16e`           | Gold top-border on submenu dropdowns               |
| Script accent     | `#c6a16e`                     | "Great Vibes" decorative subtitle before headings  |
| Outline text      | `-webkit-text-stroke: 1px #28241d` | Large outlined section title (e.g. "Testimonial") |
| White fill text   | `#ffffff`                     | Hero heading, button text                          |

## Page Structure (section order)

1. **Header** — Sticky top bar (`header-area header-sticky`): logo (left), nav menu (right): Home, Services, History, Gallery, Blog (dropdown: Blog, Blog Details, Pages, Element), Contact. Mobile hamburger menu. White background, left-aligned with 100px padding.

2. **Hero Slider** — Full-width dark background image (`slider-area`, `slider-height`), slide content: decorative subtitle in "Great Vibes" script ("Made to Measure Dress Shirts" with gold line accent before it), main heading "Discover true personalization." in white 100px font, description paragraph, CTA button (`.btn` gold filled). Slick carousel with prev/next arrows.

3. **Services / "What we offer"** — Light bg (`clients-area section-padding30`), section title with "Great Vibes" script label + "What we offer of Clients" heading. 3-column grid: each card has gold number (01/02/03), heading (Perfect Body Measurements / Premioum Style Cutting-out / Restoration with Sincerity), description paragraph. Cards have image above with hover zoom.

4. **History / Video** — Two-column split (`history-video-area`): left = background image with play button icon overlay; right = large outlined text "History" (Montserrat, 165px, text-stroke), "Our History" heading, description paragraph, "About Us" button (`.boxed-btn` gold border). Dark overlay treatment.

5. **Work Showcase / Clients Speech** — Carousel section (`clients-testimonial`), section title "Our Work For Clients" in "Great Vibes" + h2. Owl Carousel of testimonial slides with author photos and quotes.

6. **Visit Our Tailor** — Two-column split (`visit-tailor-area`): left = image with "Visit Our Tailor" heading + social links; right = services list with "10% Off" badge, service items with icons, CTA "Get Appointment" button.

7. **Testimonial** — Centered section (`testimonial-area`), large outlined "Testimonial" text (section-tittle02, text-stroke), testimonial carousel with author photos, quotes, names/roles.

8. **Footer** — Dark bg (`footer-area`), 4-column layout: logo + tagline ("The joy of dressing is an art"), Contact (address, phone, email), Links (Home, About Us, Our History, Contact), Social (icons). Copyright bar at bottom.

## Requirements

### Gherkin Scenarios

```gherkin
Feature: Pinfit — Men's Tailoring Template

  Background:
    Given the user navigates to the Pinfit app

  Scenario: Header renders with logo and navigation
    Then the logo is visible in the header
    And navigation links "Home", "Services", "History", "Gallery", "Blog", "Contact" are present
    And "Blog" has a dropdown submenu

  Scenario: Hero slider displays with correct content
    Then a hero slider is visible
    And the hero heading reads "Discover true personalization."
    And a decorative script subtitle "Made to Measure Dress Shirts" is visible above the heading
    And a CTA button is present in the hero

  Scenario: Services section displays three cards
    Then the section heading "What we offer of Clients" is visible
    And three service cards are displayed
    And each card has a gold number, heading, and description

  Scenario: History section displays video area and content
    Then a video/image area is visible on the left
    And "Our History" heading is visible on the right
    And an "About Us" button is present

  Scenario: Clients speech/testimonial carousel renders
    Then the "Our Work For Clients" section is visible
    And testimonial slides are displayed in a carousel

  Scenario: Visit Our Tailor section displays correctly
    Then "Visit Our Tailor" heading is visible
    And a "10% Off" badge is displayed
    And a "Get Appointment" CTA button is present

  Scenario: Testimonial section displays with outlined title
    Then the outlined "Testimonial" title is visible
    And testimonial cards with author photos and quotes are displayed

  Scenario: Footer renders with correct columns
    Then the footer is visible
    And "Contact", "Links", and "Social" column headings are present
    And the footer contains copyright text
    And a link to "https://www.componentdock.com/" is present
```

## Verification Checklist

- [ ] All 8 sections render in correct DOM order
- [ ] Hero slider shows correct heading, script subtitle, and CTA
- [ ] Three service cards display with gold numbers and descriptions
- [ ] History section shows split layout with video/image + content
- [ ] Testimonial carousels function correctly
- [ ] "Visit Our Tailor" section renders with 10% Off badge
- [ ] Footer has 4 columns: logo, Contact, Links, Social
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No references to ColorLib in app code
- [ ] All images use picsum.photos seeds
- [ ] Google Fonts loaded via `<link>` in index.html
- [ ] Brand token `#c6a16e` used via Tailwind `@theme`
- [ ] 100% test coverage on all component files
