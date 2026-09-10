# Template: Buildex (Construction Company Landing)

## Purpose

Buildex is a construction company landing page that recreates the ColorLib
"Consto" template in React 19 + Vite + Tailwind CSS 4 + TypeScript.

- **Source**: [ColorLib Consto](https://colorlib.com/wp/template/consto/)
- **Preview**: https://preview.colorlib.com/theme/consto/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/consto-free-template.jpg
- **Stack**: React 19, Vite, Tailwind CSS 4, TypeScript, packages/ui components

## Design Tokens

Extracted from the live preview CSS (`style.css`) and screenshot analysis.

| Token               | Value                        | Notes                                       |
| ------------------- | ---------------------------- | ------------------------------------------- |
| **Primary**         | `#FF5E14`                    | Bright orange — CTA buttons, links, accents |
| **Dark BG**         | `#2D0A31`                    | Deep purple — hero slider, section overlays |
| **Navy**            | `#1f2b7b`                    | Secondary dark — used sparingly             |
| **Heading text**    | `#1A1A1A`                    | Near-black for h2/h3/h4                     |
| **Body text**       | `#5E5E5E`                    | Medium gray for paragraphs                  |
| **Footer bg**       | `#F5F6F7`                    | Light gray footer area                      |
| **White**           | `#FFFFFF`                    | Card backgrounds, hero text                 |
| **Font**            | `Raleway`, sans-serif        | Google Font                                 |
| **Button radius**   | `0px`                        | Sharp corners on all buttons                |
| **Button padding**  | `14px 34px`                  | Primary CTA buttons                         |
| **Border button**   | `1px solid #FF5E14`, no fill | Outline variant for secondary CTAs          |
| **Section padding** | `120px top / 110px bottom`   | Standard section rhythm                     |

## Section Structure (in order)

### 1. Navbar

- Logo text "Buildex" (left)
- Navigation links: Home, About, Services, Projects, Testimonials, Contact
- Phone number or CTA button (right)
- Sticky header with white/dark background on scroll
- Mobile hamburger menu

### 2. Hero Slider

- Full-width slider with dark purple (#2D0A31) background
- Hero image (construction worker/site) with overlay
- Heading: "Experienced Construction Solution"
- Subtext: descriptive paragraph about the company
- CTA button: "Our Services" (orange #FF5E14 bg, white text, sharp corners)
- Slider arrows or dots for navigation (can be simplified to static)

### 3. About / Support Company

- Two-column layout: image left (7 cols), text right (4-5 cols)
- Heading: "Complete solution of large projects"
- Description paragraph about construction expertise
- "Explore Now" link (orange text with arrow)
- Image shows a construction project photo

### 4. Services

- Dark background section (#2D0A31 with texture overlay)
- Two-column layout: heading/text left, service cards right (grid)
- Section heading: "Services"
- Service cards in a 2-column grid with:
  - Icon (circle with background)
  - Service title
  - Short description paragraph
- 4 service items total (2 rows x 2 cols)

### 5. Projects / Portfolio

- White background section
- Section heading: "Projects we have Done" (centered)
- Description paragraph
- 3 project cards in a row, each with:
  - Project image
  - Title: "Project Planning"
  - Short description
  - "View Project" button (orange outline or solid)
- "All Project" link/button at bottom

### 6. Testimonials

- White background section
- Carousel/slider of testimonial cards
- Each card:
  - Quote text in quotation marks
  - Author name (bold)
  - Role/title text
- Author avatar image (circle)

### 7. Contact / Get Free Quote

- Dark background section (#2D0A31 with texture overlay)
- Heading: "Get Free Quote"
- Description paragraph
- Contact form with fields:
  - Name (text input)
  - Email (text input)
  - Message (textarea)
  - Submit button: "Send Message" (orange #FF5E14 bg)

### 8. CTA Banner

- Dark background section (#2D0A31 with texture overlay)
- Heading: "Any help needed?"
- Description text
- "Contact Us" button (orange outline border-btn style)

### 9. Footer

- Light gray background (#F5F6F7)
- 4-column layout:
  - Column 1: Logo + company description + social media icons
  - Column 2: Navigation links (Home, About, Services, Projects, Contact)
  - Column 3: Services links list
  - Column 4: Newsletter subscribe (email input + button)
- Footer bottom bar: copyright text, centered

## Gherkin Requirements

```gherkin
Feature: Buildex Construction Landing Page

  Background:
    Given the Buildex template is loaded in the browser

  Scenario: Navbar renders with all navigation links
    Then the navbar displays the "Buildex" logo
    And navigation links include "Home", "About", "Services", "Projects", "Testimonials", "Contact"

  Scenario: Navbar is sticky on scroll
    When the user scrolls past the hero section
    Then the navbar remains fixed at the top of the viewport

  Scenario: Hero section displays heading and CTA
    Then the hero section shows "Experienced Construction Solution" heading
    And an "Our Services" button is visible
    And the hero background is dark purple

  Scenario: Hero CTA button navigates to services
    When the user clicks "Our Services"
    Then the page scrolls to the services section

  Scenario: About section shows split layout
    Then the about section displays an image on the left
    And the heading "Complete solution of large projects" on the right
    And an "Explore Now" link is visible

  Scenario: Services section renders service cards
    Then the services section has a dark background
    And a "Services" heading is visible
    And 4 service cards are displayed in a grid
    And each service card has an icon, title, and description

  Scenario: Projects section renders project cards
    Then the projects section heading reads "Projects we have Done"
    And 3 project cards are displayed
    And each project card shows an image, title, and "View Project" button
    And an "All Project" link is visible

  Scenario: Testimonials section shows carousel
    Then the testimonials section displays testimonial cards
    And each card contains a quote, author name, and role

  Scenario: Contact form accepts input
    Then a "Get Free Quote" heading is visible
    And a form with name, email, and message fields is displayed
    And a "Send Message" submit button is visible

  Scenario: Contact form submission shows success
    When the user fills in name, email, and message
    And clicks "Send Message"
    Then a success confirmation is displayed

  Scenario: CTA banner displays call to action
    Then the CTA section shows "Any help needed?"
    And a "Contact Us" button is visible

  Scenario: Footer renders all columns
    Then the footer displays 4 columns
    And column 1 has the logo and description
    And column 2 has navigation links
    And column 3 has services links
    And column 4 has a newsletter subscribe form
    And the footer bottom shows copyright text
    And the footer links to "https://www.componentdock.com/"

  Scenario: Mobile responsive layout
    When the viewport is below 768px width
    Then the navbar collapses to a hamburger menu
    And service cards stack vertically
    And project cards stack vertically
    And footer columns stack vertically
```

## Verification Checklist

- [ ] Navbar renders with all nav links (desktop + mobile hamburger)
- [ ] Hero section matches dark purple (#2D0A31) background with overlay
- [ ] Hero text is white, heading is large and bold
- [ ] "Our Services" button is orange (#FF5E14) with sharp corners (radius: 0)
- [ ] About section is two-column: image left, text right
- [ ] "Explore Now" link is orange text
- [ ] Services section has dark bg (#2D0A31) with texture overlay
- [ ] 4 service cards in 2x2 grid with icons
- [ ] Projects section shows 3 project cards
- [ ] "View Project" and "All Project" buttons work
- [ ] Testimonials carousel shows quotes with author info
- [ ] Contact form has name, email, message fields + submit button
- [ ] CTA banner shows "Any help needed?" with "Contact Us" button
- [ ] Footer has 4 columns: logo/desc, nav links, services, newsletter
- [ ] Footer links to componentdock.com
- [ ] All text uses Raleway font via Google Fonts
- [ ] Color palette matches: #FF5E14 primary, #2D0A31 dark, #1A1A1A headings, #5E5E5E body
- [ ] All buttons have 0px border-radius
- [ ] Placeholder images via picsum.photos with deterministic seeds
- [ ] 100% test coverage (Vitest + Testing Library)
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
