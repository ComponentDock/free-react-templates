# Template: Signalwave (Internet Service Provider)

## Purpose

Recreation of ColorLib **Fastnet** (`https://colorlib.com/wp/template/fastnet/`).
Preview URL: `https://preview.colorlib.com/theme/fastnet/` (reachable — live DOM + CSS analyzed).
Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript.

An internet service provider (ISP) website template for broadband/TV/phone companies.
Dark navy and red accent palette, slider hero, pricing cards, testimonials, and blog.

## Source references

- **ColorLib slug:** `fastnet`
- **ColorLib page:** `https://colorlib.com/wp/template/fastnet/`
- **Preview (reachable):** `https://preview.colorlib.com/theme/fastnet/`
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/fastnet-free-template.jpg`
- **Description (from ColorLib):** "Fastnet — Free Internet Service Website Template" (ISP / broadband provider theme).
- **Research note:** Preview fetched successfully. HTML structure + CSS (`style.css`, 176 KB) extracted. Design tokens extracted from stylesheet. Muli font loaded from Google Fonts.

## Design tokens

### Colors

| Token             | Hex       | Usage                                          |
| ----------------- | --------- | ---------------------------------------------- |
| `--color-primary` | `#ff3e3f` | CTA buttons, accent highlights, links, hover   |
| `--color-navy`    | `#072366` | Dark navy for headings, pricing features       |
| `--color-navy-dk` | `#002d5b` | Deeper navy for hero text                      |
| `--color-text`    | `#464d65` | Body text, secondary headings                  |
| `--color-muted`   | `#635c5c` | Muted/secondary text                           |
| `--color-subtle`  | `#838a9b` | Lighter muted text, feature lists              |
| `--color-bg`      | `#ffffff` | Page background                                |
| `--color-bg-alt`  | `#fafafa` | Alternate section / pricing card background    |
| `--color-footer`  | `#11141b` | Dark footer background                         |
| `--color-footer-lt` | `#101720` | Footer bottom bar                            |
| `--color-white`   | `#ffffff` | Text on dark backgrounds                       |
| `--color-light`   | `#bdbdbd` | Light text on dark footer                      |

### Typography

| Element   | Font Family          | Style                         |
| --------- | -------------------- | ----------------------------- |
| Headings  | "Muli", sans-serif   | Bold/semibold, navy (#072366) |
| Body      | "Muli", sans-serif   | Regular, #464d65              |
| Nav links | "Muli", sans-serif   | Regular, dark text            |

### Border radii

| Token    | Value   | Usage                         |
| -------- | ------- | ----------------------------- |
| `--radius-sm`  | `4px`   | Subtle rounding on cards      |
| `--radius-md`  | `8px`   | Pricing cards, inputs         |
| `--radius-lg`  | `20px`  | Hero slider elements          |
| `--radius-pill`| `50px`  | Pill-shaped CTA buttons       |

### Buttons

- Primary: background `#ff3e3f`, color `#fff`, border-radius `50px` (pill), hover darkens slightly
- Secondary/outline: transparent bg, border, dark text, hover fills red
- Font: "Muli", weight 600

### Overall aesthetic

- Clean, professional ISP/broadband provider look
- Red (#ff3e3f) accent against white and dark navy backgrounds
- Full-width hero slider with dark overlay
- Light section backgrounds (#fafafa) alternate with white
- Dark footer (#11141b) with light text
- Muli font gives modern, rounded feel

## Gherkin requirements

### Feature: Signalwave — Internet Service Provider Template

```gherkin
Feature: Signalwave ISP Template
  As a visitor to an internet service provider website
  I want to learn about plans, read about the company, and get in touch
  So that I can choose an internet plan and contact support

  Background:
    Given the user is on the Signalwave homepage
    And the page has loaded completely

  # --- Header / Navbar ---
  Scenario: Header displays top bar and navigation
    Then the header should have a top bar with contact info (phone, email)
    And the header should display the brand name "Signalwave"
    And the header should contain navigation links (Home, About, Packages, Features, Blog, Contact)
    And the navbar should have a mobile hamburger menu on small screens
    And the header should be sticky on scroll

  Scenario: Header top bar shows social icons
    Then the top bar should display social media icon links

  # --- Hero Slider ---
  Scenario: Hero section displays a full-width image slider
    Then the hero section should show a slider with multiple slides
    And each slide should have a headline (e.g. "Don't suffer the buffer, get super internet")
    And each slide should have a description paragraph
    And each slide should have a "View Packages" CTA button
    And the slider should auto-advance on a timer

  Scenario: Hero slider navigation works
    Then the slider should have navigation arrows or dots
    When the user clicks next/prev
    Then the slider should advance/go back accordingly

  # --- About Section ---
  Scenario: About section presents the company
    Then there should be an "About" section with a split layout (image + text)
    And it should have a heading like "We listen and work together for Great experience"
    And it should include descriptive paragraphs about the company
    And it should have a "View Packages" or "About Us" CTA button
    And the layout should be image on one side, text on the other

  # --- Services Section ---
  Scenario: Services section shows 4 service cards
    Then there should be a "Services" section
    And there should be 4 service cards displayed in a row
    And each card should have an icon, title, and brief description
    And the service titles should include "Perfect in Coverage", "Live Call Support", "Secured Payment", "1 Gbps Data Rate"
    And the cards should be centered with icon on top

  # --- Pricing Section ---
  Scenario: Pricing section displays 3 plan tiers
    Then there should be a "Pricing" section heading
    And there should be 3 pricing cards side by side
    And the cards should be labeled "Single Package", "Half Package", "Full Package"
    And each card should show: plan name, description, price, and feature list
    And prices should be "$20.00/mo", "$25.00/mo", "$29.00/mo" respectively
    And each card should have a "View Packages" CTA button
    And features should include: Line Rental Included, 12 Month Contract, No Activation Charges, Up to 12Mbps average Speed

  Scenario: Pricing cards have consistent feature lists
    Then all pricing cards should show the same set of features
    And only the plan name, description, and price should differ

  # --- Testimonial Section ---
  Scenario: Testimonials section displays customer feedback
    Then there should be a "Testimonials" section
    And it should have a heading like "What our clients think about us"
    And there should be at least 2 testimonial entries
    And each testimonial should have a quote, customer name, and role
    And testimonials should be displayed in a slider/carousel
    And there should be a sidebar image or content alongside the testimonials

  # --- Blog Section ---
  Scenario: Blog section shows recent posts
    Then there should be a "Blog" section
    And there should be 3 blog post cards
    And each card should show an image, title, and date
    And the cards should be in a 3-column grid
    And each card should have a "Read More" or link element

  # --- Footer ---
  Scenario: Footer displays brand info and navigation
    Then the footer should have a dark background (#11141b)
    And the footer should contain: brand description, phone number, email
    And the footer should have "Our Support" link column
    And the footer should have "Quick Link" column
    And the footer should have a newsletter signup with email input
    And the footer should have social media icon links
    And the footer should link to componentdock.com ("Made with Component Dock")
    And the footer should have a copyright line

  # --- Responsive ---
  Scenario: Template is responsive
    When the viewport is resized to mobile width (375px)
    Then all sections should stack vertically
    And the navbar should collapse to a hamburger menu
    And pricing cards should stack vertically
    And images should scale to fit their containers
    And text should remain readable

  # --- Accessibility ---
  Scenario: Template meets basic accessibility
    Then all images should have alt text
    And interactive elements should be keyboard-focusable
    And color contrast should meet WCAG AA standards
    And semantic HTML elements should be used (nav, main, section, footer)
```

## Verification checklist

- [ ] Header: top bar with contact info, sticky nav, brand name, mobile hamburger
- [ ] Hero: full-width slider, 2+ slides, headline + description + CTA, auto-advance
- [ ] About: split layout (image + text), heading, paragraphs, CTA button
- [ ] Services: 4 service cards with icons, titles, descriptions
- [ ] Pricing: 3 pricing cards (Single/Half/Full), prices, feature lists, CTA
- [ ] Testimonials: 2+ quotes with names/roles, slider, sidebar image
- [ ] Blog: 3 post cards with images, titles, dates
- [ ] Footer: dark bg, columns (Support, Quick Links), newsletter, social, copyright
- [ ] Responsive: mobile hamburger, stacked pricing, readable text
- [ ] Accessibility: alt text, keyboard nav, WCAG AA contrast, semantic HTML
- [ ] Design tokens: Muli font, #ff3e3f accent, #072366 navy, pill buttons
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to componentdock.com
