# Template: MedCraft (Medical)

## Purpose

Recreation of ColorLib **MedArt** (`https://colorlib.com/wp/template/medart/`).

- **Preview URL:** `https://preview.colorlib.com/theme/medart/`
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/medart-free-template.jpg`
- **New name:** `medcraft` (apps/medcraft, `@free-react-templates/medcraft`)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Medical / Healthcare

## Design tokens

Extracted from the live preview CSS (`style.css`) and screenshot analysis:

| Token | Value | Notes |
|-------|-------|-------|
| Primary brand color | `#18a3eb` | Light blue, used for links, active states, gradients |
| Secondary accent | `#587de4` | Medium blue-purple, used in gradient endpoints |
| Gradient button | `linear-gradient(270deg, #32c8fa 0%, #587de4 100%)` | Vertical gradient on CTA buttons |
| Heading text | `#262626` | Near-black |
| Body text | `#404040` | Dark gray |
| Secondary text | `#757686` | Medium gray |
| Muted text | `#828282` | Light gray |
| Light text / on-brand | `#fff` | White on buttons and dark sections |
| Info boxes bg | `#f0f4f8` | Very light blue-gray |
| Card bg | `#fff` | White cards with border-radius 20px |
| Button radius | `20px` | Pill-shaped buttons |
| Nav bar radius | `10px` | Rounded nav container |
| Font family | `Raleway` (200–700) | Google Fonts, sans-serif |
| Section padding | `80px–110px` vertical | Generous whitespace |

## Sections (in order)

1. **Navbar** — Sticky top bar with logo left, nav links center-right (Home, About us, Services, News, Contact), emergency phone button with gradient bg right. Rounded container. Mobile: hamburger menu.

2. **Hero Slider** — Full-width image carousel (Swiper-style, 3 slides). Each slide: left-aligned text ("The Best Medical Services"), paragraph, "Read More" gradient button. Pagination dots numbered 01/02/03 on the left side. Background image with overlay.

3. **Homepage Info Boxes** — Three-column row below hero:
   - Opening Hours (weekday schedule list, left-aligned)
   - Emergency (gradient phone button + description text)
   - Make an Appointment (form: department dropdown, doctor dropdown, name, phone, submit button)

4. **Our Departments** — Section heading "Our Departments" with 9 department cards in a 3-column grid: Cardioology, Gastroenterology, Medical Lab, Dental Care, Surgery, Neurology, Orthopaedy, Pediatry, Ophthalmology. Each card: icon, title, description, footer link. Cards have rounded borders (20px radius).

5. **Testimonials** — "Pacient's Testimonials" heading. Slider with patient quotes, author name + affiliation, avatar image. Right-side decorative background image.

6. **The News** — "The News" heading. Three blog post cards in a row: thumbnail image, date, author, comments count, title, excerpt. Metadata: posted date, posted by, comment count.

7. **Subscribe Banner** — Full-width background image with "Subscribe to our newsletter" heading, email input, gradient "Subscribe" button. White text on image bg.

8. **Footer** — Three columns:
   - About (logo, paragraph, copyright)
   - Contact (address, phone, email)
   - Useful Links (Home, About us, Departments, Contact, FAQ, Testimonials)
   - Footer links to `https://www.componentdock.com/` ("Component Dock")

## Gherkin scenarios

```gherkin
Feature: MedCraft — Medical Template

  Scenario: Navbar renders with correct links and emergency CTA
    Given the page loads
    Then the navbar displays the MedCraft logo
    And navigation links are visible: Home, About us, Services, News, Contact
    And an emergency phone button is displayed with a gradient background
    And the navbar is sticky on scroll

  Scenario: Hero slider displays with pagination
    Given the page loads
    Then a hero slider shows "The Best Medical Services" heading
    And a descriptive paragraph is visible below the heading
    And a "Read More" gradient button is displayed
    And numbered pagination (01, 02, 03) is visible on the left
    And the hero section has a background image with overlay

  Scenario: Homepage info boxes render correctly
    Given the page loads
    Then three info boxes are displayed in a row
    And the Opening Hours box shows a weekday schedule
    And the Emergency box shows a gradient phone button
    And the Make an Appointment box shows a form with dropdowns and inputs

  Scenario: Departments section shows 9 department cards
    Given the page loads
    Then the "Our Departments" heading is visible
    And 9 department cards are displayed in a 3-column grid
    And each card shows a department name, icon, and description

  Scenario: Testimonials slider renders patient quotes
    Given the page loads
    Then the "Pacient's Testimonials" heading is visible
    And testimonial cards show a quote, author name, and affiliation
    And an avatar image is displayed for each testimonial

  Scenario: News section shows 3 blog post cards
    Given the page loads
    Then the "The News" heading is visible
    And 3 blog post cards are displayed with thumbnails
    And each card shows date, author, comment count, title, and excerpt

  Scenario: Subscribe banner with email form
    Given the page loads
    Then a "Subscribe to our newsletter" heading is visible
    And an email input field is present
    And a "Subscribe" gradient button is displayed

  Scenario: Footer renders three columns
    Given the page loads
    Then the footer shows an About section with logo and copyright
    And a Contact section with address, phone, and email
    And a Useful Links section with navigation links
    And a link to Component Dock is present

  Scenario: Brand gradient buttons are consistently styled
    Given any button with class "gradient-bg"
    Then it has a linear gradient from #32c8fa to #587de4
    And it has white text
    And it has a border-radius of 20px

  Scenario: Color palette matches medical theme
    Given the page loads
    Then the primary color #18a3eb is used for links and active states
    And the font family is Raleway throughout
    And headings use color #262626
    And body text uses color #404040
```

## Verification checklist

- [ ] All sections present in correct order: Navbar → Hero → Info Boxes → Departments → Testimonials → News → Subscribe → Footer
- [ ] Font: Raleway loaded from Google Fonts
- [ ] Gradient buttons: `linear-gradient(270deg, #32c8fa, #587de4)`, radius 20px, white text
- [ ] Nav bar: sticky, rounded container (10px radius), emergency phone CTA
- [ ] Hero: full-width slider, left-aligned text, numbered pagination
- [ ] Info boxes: 3-column layout on desktop (Opening Hours, Emergency, Appointment)
- [ ] Departments: 3×3 grid of 9 cards with icons
- [ ] Testimonials: slider with author info and avatar
- [ ] News: 3 blog post cards with metadata
- [ ] Subscribe: email input + gradient button on background image
- [ ] Footer: 3 columns (About, Contact, Useful Links) + Component Dock link
- [ ] Mobile responsive: hamburger nav, stacked layouts
- [ ] No ColorLib references in app code
- [ ] CNAME: `medcraft.free.componentdock.com`
- [ ] Footer links to `https://www.componentdock.com/`
