# Template: Scaffold (Construction Company)

## Purpose

Recreation of ColorLib **Construct** — a construction company website template with hero slider, services showcase, project gallery, blog, and testimonials.

- **Source slug:** `construct`
- **Preview URL:** https://preview.colorlib.com/theme/construct/
- **Original:** https://colorlib.com/wp/template/construct/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/construct-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens (from preview DOM + CSS)

| Token             | Value                              | Notes                                          |
| ----------------- | ---------------------------------- | ---------------------------------------------- |
| Font family       | `'Open Sans', Arial, sans-serif`   | Google Font, weights 300–800                   |
| Primary accent    | `#f4b214` (golden yellow)          | CTAs, nav CTA button, links, headings underline|
| Hover accent      | `#f6c245` (lighter gold)           | Button hover states                            |
| Teal accent       | `#5AC8D8`                          | Secondary highlight (minimal use)              |
| Body text         | `#495057` (dark gray)             | Paragraph copy                                 |
| Muted text        | `#868e96` (medium gray)           | Secondary/supporting text                      |
| Heading text      | `#000` (black)                     | Section headings                               |
| Section BG        | `#fff` (white)                     | Default section background                     |
| Section BG alt    | `#f8f9fa` (off-white)             | Light alternating sections                     |
| Footer BG         | `#f2f2f2` (light gray)            | Footer background                              |
| Border color      | `#dee2e6`                          | Section dividers                               |
| Button radius     | `0` (sharp corners)                | All buttons are square/rectangular              |
| Button border     | `2px`                              | Solid border on primary + outline buttons      |
| CTA overlap bar   | `#f4b214` bg + box-shadow         | Overlapping bar between hero and services      |

### Heading underline
Section headings use a centered `::before` pseudo-element: `width: 50px; height: 2px; background: #f4b214` positioned below the text.

### Button styles
- `.btn-primary`: white text, 2px border, `#f4b214` hover background
- `.btn-outline-primary`: `#f4b214` border + text, white hover bg
- `.btn-outline-white`: white border + text, white hover bg → black text
- Nav CTA: `#f4b214` background, black text, uppercase, large padding, box-shadow glow on hover

## Section Order (from preview DOM)

1. **Navbar** — Fixed top, logo "CONSTRUCT" (text, uppercase), nav links: Home, Services (dropdown: Metal Roofing, General Contracting, House Renovation, Laminate Flooring, Construction Consultant), Works, News, About, Contact. Right-aligned CTA: "GET A QUOTE" (yellow bg, uppercase, two-line). Hamburger on mobile.
2. **Hero Slider** — Owl Carousel, 2 slides. Full-width background images with dark overlay. Slide 1: "Creating A Brighter Future" + lorem subtext + "Download Now!" primary button. Slide 2: "Trusted Construction & Development Since 1889" + lorem subtext. Centered text. Dot pagination.
3. **CTA Overlap** — Yellow bar (`#f4b214`) overlapping bottom of hero. Flex layout: left = "Trusted Construction & Development Since 1889" heading, right = "Get A Quote" outline-white button. Box-shadow.
4. **Services** — White bg. Section heading "SERVICES" with yellow underline. 3-column grid: House Renovation, Construction Consultant, General Contracting. Each: Flaticon icon (circular 50% radius, teal accent), title (black), description, "Learn More" outline-primary button. "Browse All Services" primary button below.
5. **Recent Works** — White bg, top border. Section heading "RECENT WORKS" with yellow underline. 3-column grid: Wood Polishing, General Construction Building, House Renovation. Each with bg image + overlay + title. "View All Works" primary button.
6. **Company News** — Light bg (`#f8f9fa`). Section heading "COMPANY NEWS" with yellow underline. 3 blog cards: date (yellow), title, excerpt, "Read more →" link. Date display with large yellow day number.
7. **Testimonial** — White bg. Section heading "TESTIMONIAL" with yellow underline. Carousel/slider: circular author avatar, italic quote text, author name + company. Quote marks styling.
8. **Footer** — Light gray bg (`#f2f2f2`). Two main columns: Quick Links (About, Services, Works, Contact) + Social links. Address block: street, phone, email. Copyright bar: "© All rights reserved | Made with Component Dock".

## Gherkin Requirements

### Navbar

```gherkin
Feature: Navigation Bar

  Scenario: Desktop navbar shows all section links
    Given the user is on a desktop viewport
    When the page loads
    Then the navbar displays the logo "Scaffold" and navigation links for Home, Services, Works, News, About, Contact
    And a "Get A Quote" CTA button is visible on the right

  Scenario: Services dropdown shows sub-items
    Given the user hovers over the "Services" nav link
    When the dropdown menu appears
    Then it lists Metal Roofing, General Contracting, House Renovation, Laminate Flooring, Construction Consultant

  Scenario: Navbar becomes sticky on scroll
    Given the user scrolls past the hero section
    When the scroll position exceeds the navbar height
    Then the navbar should be fixed at the top of the viewport

  Scenario: Mobile hamburger toggles menu
    Given the user is on a mobile viewport
    When they click the hamburger icon
    Then the navigation links appear in a slide-in or dropdown menu
    And clicking a link closes the menu and scrolls to the section
```

### Hero Slider

```gherkin
Feature: Hero Image Slider

  Scenario: Hero displays first slide with CTA
    Given the page loads
    When the hero slider is visible
    Then it shows the heading "Creating A Brighter Future"
    And a descriptive paragraph below the heading
    And a "Download Now!" primary button

  Scenario: Slider auto-advances to second slide
    Given the first slide is displayed
    When the carousel interval elapses
    Then the second slide appears with heading "Trusted Construction & Development Since 1889"
    And the pagination dots update to indicate slide 2

  Scenario: User can navigate slides via dots
    Given the slider is showing slide 1
    When the user clicks the second dot indicator
    Then the slider transitions to slide 2
```

### CTA Overlap Bar

```gherkin
Feature: Call-to-Action Overlap Bar

  Scenario: CTA bar is visible below the hero
    Given the hero slider is displayed
    When the user views the area below the hero
    Then a yellow bar overlaps the bottom of the hero
    And it contains the heading "Trusted Construction & Development Since 1889"
    And a "Get A Quote" button with white outline
```

### Services

```gherkin
Feature: Services Section

  Scenario: Services section displays three services
    Given the user scrolls to the Services section
    Then the section heading "Services" is displayed with a yellow underline
    And three service cards are visible: House Renovation, Construction Consultant, General Contracting
    And each card has an icon, title, description, and "Learn More" button

  Scenario: Browse All Services button is present
    Given the user views the Services section
    When all service cards are displayed
    Then a "Browse All Services" primary button appears below the cards
```

### Recent Works

```gherkin
Feature: Recent Works Section

  Scenario: Recent Works shows three project cards
    Given the user scrolls to the Recent Works section
    Then the section heading "Recent Works" is displayed with a yellow underline
    And three project cards are visible: Wood Polishing, General Construction Building, House Renovation
    And each card has a background image with an overlay title

  Scenario: View All Works button navigates
    Given the user views the Recent Works section
    When they click "View All Works"
    Then it navigates to the works/portfolio page
```

### Company News

```gherkin
Feature: Company News Section

  Scenario: News section displays three blog cards
    Given the user scrolls to the Company News section
    Then the section heading "Company News" is displayed with a yellow underline
    And three blog cards are visible, each with a date, title, excerpt, and "Read more" link

  Scenario: Blog date is prominently styled
    Given a blog card is displayed
    Then the date shows a large yellow day number
    And the month/year text appears below
```

### Testimonial

```gherkin
Feature: Testimonial Section

  Scenario: Testimonial displays quote with author
    Given the user scrolls to the Testimonial section
    Then the section heading "Testimonial" is displayed with a yellow underline
    And a quote is shown with italic text
    And the author name and company are displayed below the quote
    And a circular avatar image is shown next to or above the quote
```

### Footer

```gherkin
Feature: Footer

  Scenario: Footer displays contact info and links
    Given the user scrolls to the bottom of the page
    Then the footer shows the address, phone number, and email
    And a "Quick Links" column lists About, Services, Works, Contact
    And a "Social" column is present

  Scenario: Footer copyright mentions Component Dock
    Given the user views the footer
    Then the copyright text reads "© <year> All rights reserved | Made with Component Dock"
    And the Component Dock text links to https://www.componentdock.com/
```

## Verification Checklist

- [ ] Navbar sticky positioning works on scroll
- [ ] Services dropdown appears on hover (desktop)
- [ ] Hero slider auto-advances and responds to dot navigation
- [ ] CTA overlap bar overlaps hero bottom with correct yellow bg + shadow
- [ ] Services section: 3 cards with icons, correct text, "Learn More" buttons
- [ ] Recent Works: 3 cards with background images + overlays
- [ ] Company News: 3 blog cards with date (yellow day number), title, excerpt
- [ ] Testimonial: quote text, author name, circular avatar
- [ ] Footer: address, Quick Links, Social, copyright with Component Dock link
- [ ] All section headings have yellow underline accent (::before pseudo-element)
- [ ] All buttons use sharp corners (border-radius: 0)
- [ ] Color palette matches: #f4b214 primary, #000 headings, #495057 body
- [ ] Font is Open Sans (loaded via Google Fonts)
- [ ] Responsive layout: single column on mobile, 3-column grid on desktop
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to https://www.componentdock.com/
