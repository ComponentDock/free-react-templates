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

## Requirements

### Navbar

Feature: Navigation Bar

#### Scenario: Desktop navbar shows all section links

- **GIVEN** the user is on a desktop viewport
- **WHEN** the page loads
- **THEN** the navbar displays the logo "Scaffold" and navigation links for Home, Services, Works, News, About, Contact
- **AND** a "Get A Quote" CTA button is visible on the right

#### Scenario: Services dropdown shows sub-items

- **GIVEN** the user hovers over the "Services" nav link
- **WHEN** the dropdown menu appears
- **THEN** it lists Metal Roofing, General Contracting, House Renovation, Laminate Flooring, Construction Consultant

#### Scenario: Navbar becomes sticky on scroll

- **GIVEN** the user scrolls past the hero section
- **WHEN** the scroll position exceeds the navbar height
- **THEN** the navbar should be fixed at the top of the viewport

#### Scenario: Mobile hamburger toggles menu

- **GIVEN** the user is on a mobile viewport
- **WHEN** they click the hamburger icon
- **THEN** the navigation links appear in a slide-in or dropdown menu
- **AND** clicking a link closes the menu and scrolls to the section

### Hero Slider

Feature: Hero Image Slider

#### Scenario: Hero displays first slide with CTA

- **GIVEN** the page loads
- **WHEN** the hero slider is visible
- **THEN** it shows the heading "Creating A Brighter Future"
- **AND** a descriptive paragraph below the heading
- **AND** a "Download Now!" primary button

#### Scenario: Slider auto-advances to second slide

- **GIVEN** the first slide is displayed
- **WHEN** the carousel interval elapses
- **THEN** the second slide appears with heading "Trusted Construction & Development Since 1889"
- **AND** the pagination dots update to indicate slide 2

#### Scenario: User can navigate slides via dots

- **GIVEN** the slider is showing slide 1
- **WHEN** the user clicks the second dot indicator
- **THEN** the slider transitions to slide 2

### CTA Overlap Bar

Feature: Call-to-Action Overlap Bar

#### Scenario: CTA bar is visible below the hero

- **GIVEN** the hero slider is displayed
- **WHEN** the user views the area below the hero
- **THEN** a yellow bar overlaps the bottom of the hero
- **AND** it contains the heading "Trusted Construction & Development Since 1889"
- **AND** a "Get A Quote" button with white outline

### Services

Feature: Services Section

#### Scenario: Services section displays three services

- **GIVEN** the user scrolls to the Services section
- **THEN** the section heading "Services" is displayed with a yellow underline
- **AND** three service cards are visible: House Renovation, Construction Consultant, General Contracting
- **AND** each card has an icon, title, description, and "Learn More" button

#### Scenario: Browse All Services button is present

- **GIVEN** the user views the Services section
- **WHEN** all service cards are displayed
- **THEN** a "Browse All Services" primary button appears below the cards

### Recent Works

Feature: Recent Works Section

#### Scenario: Recent Works shows three project cards

- **GIVEN** the user scrolls to the Recent Works section
- **THEN** the section heading "Recent Works" is displayed with a yellow underline
- **AND** three project cards are visible: Wood Polishing, General Construction Building, House Renovation
- **AND** each card has a background image with an overlay title

#### Scenario: View All Works button navigates

- **GIVEN** the user views the Recent Works section
- **WHEN** they click "View All Works"
- **THEN** it navigates to the works/portfolio page

### Company News

Feature: Company News Section

#### Scenario: News section displays three blog cards

- **GIVEN** the user scrolls to the Company News section
- **THEN** the section heading "Company News" is displayed with a yellow underline
- **AND** three blog cards are visible, each with a date, title, excerpt, and "Read more" link

#### Scenario: Blog date is prominently styled

- **GIVEN** a blog card is displayed
- **THEN** the date shows a large yellow day number
- **AND** the month/year text appears below

### Testimonial

Feature: Testimonial Section

#### Scenario: Testimonial displays quote with author

- **GIVEN** the user scrolls to the Testimonial section
- **THEN** the section heading "Testimonial" is displayed with a yellow underline
- **AND** a quote is shown with italic text
- **AND** the author name and company are displayed below the quote
- **AND** a circular avatar image is shown next to or above the quote

### Footer

Feature: Footer

#### Scenario: Footer displays contact info and links

- **GIVEN** the user scrolls to the bottom of the page
- **THEN** the footer shows the address, phone number, and email
- **AND** a "Quick Links" column lists About, Services, Works, Contact
- **AND** a "Social" column is present

#### Scenario: Footer copyright mentions Component Dock

- **GIVEN** the user views the footer
- **THEN** the copyright text reads "© <year> All rights reserved | Made with Component Dock"
- **AND** the Component Dock text links to https://www.componentdock.com/

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
