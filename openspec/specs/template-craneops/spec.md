# Template: CraneOps (Construction Company Landing)

## Purpose

Recreation of ColorLib "Construct" — a construction company landing page template.
- **Source slug:** `construct`
- **Preview URL:** https://preview.colorlib.com/theme/construct/
- **Source page:** https://colorlib.com/wp/template/construct/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name:** `craneops` (apps/craneops, @free-react-templates/craneops)

## Design tokens

Extracted from the live preview CSS (style.css + bootstrap.css override):

| Token | Value | Usage |
|-------|-------|-------|
| Brand / Primary | `#f4b214` (amber gold) | CTA bar bg, button bg, active nav-link, service card hover border, icon color, dropdown active, carousel active dot, loader stroke, footer social hover |
| Primary hover | `#f6c245` / `#d89b0a` | Button hover state |
| Body text | `#868e96` (warm gray) | Body font color, meta text |
| Headings | `#000` (black) | h1, h2, h3, h5 |
| Light section bg | `#f8f9fa` | News section background (`bg-light`) |
| White bg | `#fff` | Page bg, nav bg, feature cards, media-custom |
| Border top | `#f8f9fa` | `.border-t` on works section |
| Link color | `#f4b214` | Anchor default color from bootstrap override |
| Font family | `"Open Sans", Arial, sans-serif` | Body and headings |
| Font weights | 300 (light), 400 (regular), 700 (bold), 800 (extra bold) | Slider h1 = 800, body = 400, lead = 300 |
| Button border-radius | `4px` | All buttons (Bootstrap default) |
| Button border-width | `2px` | Primary and outline buttons |
| Card border-radius | `4px` | Feature cards |
| Card hover shadow | `0 2px 20px -3px rgba(0,0,0,0.1)` | Service feature cards |
| Card hover scale | `scale(1.05)` | Service feature cards |
| Feature card bottom-border hover | `10px solid #f4b214` | Amber bottom border on hover |
| CTA overlap bar | bg `#f4b214`, negative margin `-4em` top, z-index 100, white text, uppercase outline button |
| Slider height | `calc(100vh - 117px)`, min-height `700px` | Full-viewport hero |
| Slider h1 | `40px`, uppercase, weight 800, line-height 1.2, white | Hero headline |
| Dropdown menu | border-radius 0, box-shadow `0 2px 30px -2px rgba(0,0,0,0.2)` | Services dropdown |
| News carousel card shadow on hover | `0 2px 10px 0 rgba(0,0,0,0.2)` | News cards |
| News meta-post | color `#ced4da`, 13px, uppercase | Date labels |
| Testimonial blockquote | Standard blockquote style | Client testimonials |
| Footer | 4-column layout: copyright, address/contact, quick links, social | Dark footer with light text |

## Sections (in DOM order)

1. **Header / Navbar** — White navbar, brand "CraneOps" (uppercase, letter-spacing 0.2em). Nav links: Home, Services (dropdown: Metal Roofing, General Contracting, House Renovation, Laminate Flooring, Construction Consultant), Works, News, About, Contact. Right CTA: "Get A Quote" (amber bg, multi-line).
2. **Hero Slider** — Full-viewport image carousel (owl-carousel replaced with React carousel). Slide 1: "Creating A Brighter Future" + lorem + "Download Now!" button. Slide 2: "Trusted Construction & Development Since 1889" + lorem. Background images via picsum.photos.
3. **CTA Overlap Bar** — Amber bar overlapping the slider bottom. "Trusted Construction & Development Since 1889" headline + "Get A Quote" outline-white button.
4. **Services** — Section heading "Services" with underline accent. 3-column card grid: House Renovation (blueprint icon), Construction Consultant (building icon), General Contracting (crane icon). Each card: icon (amber) + title + blurb + "Learn More" outline-primary button. "View All Services" full-width primary button below.
5. **Recent Works** — Section heading "Recent Works" with underline accent. 3-column no-gutter image grid: Wood Polishing, General Construction Building, House Renovation. Each: hover overlay with title + plus icon + image scale animation.
6. **Company News** — Light bg (#f8f9fa). Section heading "Company News" with underline accent. Carousel of news cards: image + date + title + excerpt + "Read more" link + chat comment count icon.
7. **Testimonial** — Section heading "Testimonial" with underline accent. 2-column layout: person image + name + company link + blockquote text.
8. **Footer** — 4-column: copyright, address + phone + email, quick links (About, Services, Works, Contact), social icons (Twitter, Facebook, LinkedIn, Instagram). Footer links to Component Dock.

## Gherkin scenarios

```gherkin
Feature: CraneOps landing page

  Background:
    Given the user opens the CraneOps landing page

  # --- Header ---
  Scenario: Navbar displays brand and navigation
    Then the brand "CraneOps" is visible
    And navigation links "Home", "Services", "Works", "News", "About", "Contact" are present
    And a "Get A Quote" CTA button is visible in the navbar

  Scenario: Services dropdown opens on click/hover
    When the user clicks the "Services" dropdown
    Then 5 service items are listed: "Metal Roofing", "General Contracting", "House Renovation", "Laminate Flooring", "Construction Consultant"

  # --- Hero Slider ---
  Scenario: Hero slider shows slides with headlines
    Then the hero section occupies most of the viewport
    And a headline "Creating A Brighter Future" is displayed
    And a "Download Now!" primary button is visible

  Scenario: Hero slider can navigate between slides
    When the user navigates to the second slide
    Then the headline changes to "Trusted Construction & Development Since 1889"

  # --- CTA Overlap ---
  Scenario: CTA overlap bar is visible below the slider
    Then a gold bar displays "Trusted Construction & Development Since 1889"
    And a "Get A Quote" white-outline button is present

  # --- Services ---
  Scenario: Services section shows 3 service cards
    Then the "Services" heading is visible with an underline accent
    And 3 service cards are displayed
    And each card has an icon, title, description, and "Learn More" button

  Scenario: Service card has hover effect
    When the user hovers over a service card
    Then the card scales up slightly
    And a gold bottom border appears

  Scenario: View All Services button links correctly
    Then a "View All Services" full-width button is visible

  # --- Recent Works ---
  Scenario: Works section shows portfolio grid
    Then the "Recent Works" heading is visible
    And 3 project images are displayed in a grid
    And each project has a title overlay on hover

  # --- Company News ---
  Scenario: News section shows blog cards on light background
    Then the "Company News" heading is visible
    And the section has a light gray background
    And news cards display an image, date, title, excerpt, "Read more" link, and comment count

  # --- Testimonials ---
  Scenario: Testimonials section shows 2 testimonials
    Then the "Testimonial" heading is visible
    And 2 testimonial cards are displayed
    And each card has a person image, name, company, and quoted text

  # --- Footer ---
  Scenario: Footer shows 4-column layout
    Then a copyright notice is visible
    And an address block with phone and email is present
    And quick links (About, Services, Works, Contact) are listed
    And social media icons (Twitter, Facebook, LinkedIn, Instagram) are present

  Scenario: Footer links to Component Dock
    Then the footer contains a link to "https://www.componentdock.com/"

  # --- Design fidelity ---
  Scenario: Brand color is amber gold
    Then the primary brand color is "#f4b214"
    And buttons use the amber gold background
    And active navigation links are amber gold

  Scenario: Typography matches reference
    Then the font family is "Open Sans"
    And headings are black (#000)
    And body text is gray (#868e96)
```

## Verification checklist

- [ ] Section order matches reference: Header → Hero Slider → CTA Overlap → Services → Recent Works → Company News → Testimonials → Footer
- [ ] Brand color #f4b214 used consistently for CTA, buttons, icons, active states
- [ ] Open Sans font loaded via Google Fonts link
- [ ] Hero slider covers most of viewport (min-height 700px equivalent)
- [ ] CTA overlap bar with negative top margin overlaps slider
- [ ] 3-column service cards with icon, title, description, Learn More button
- [ ] Service cards have hover: scale(1.05) + amber bottom border
- [ ] Recent Works: 3-column no-gutter image grid with hover overlay
- [ ] Company News: light bg, carousel of cards with image/date/title/excerpt
- [ ] Testimonials: 2-column with person photo + blockquote
- [ ] Footer: 4-column layout, copyright, address, quick links, social icons
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] All images use picsum.photos placeholders
- [ ] Accessibility: semantic HTML, aria-labels, keyboard nav
- [ ] 100% test coverage enforced
