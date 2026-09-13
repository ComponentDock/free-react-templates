# Template: TechVane (IT Solutions / Technology Company)

## Purpose

Recreation of ColorLib's **It Solution** template
(preview: https://preview.colorlib.com/theme/itsolution/).

TechVane is an IT consultancy / technology services single-page website with
a dark hero, service highlights, portfolio gallery, stats counter, FAQ
accordion, testimonials carousel, blog cards, and a contact form. Built with
React 19, Vite, Tailwind CSS 4, and TypeScript.

Source slug: `it-solution`
Preview URL: https://preview.colorlib.com/theme/itsolution/

## Design tokens

Extracted from the ColorLib preview stylesheet (`css/style.css`):

| Token | Value | Notes |
|-------|-------|-------|
| Brand primary | `#007bff` | Bootstrap-style blue, used on `.btn-primary`, `.bg-primary` |
| Navbar accent | `#323edd` | Deeper indigo-blue for scrolled navbar background |
| Hero overlay | `#060a24` | Very dark navy, opacity 0.6 over background image |
| Text primary | `#212529` | Near-black body text |
| Body background | `#fff` | White |
| Light section bg | `#f7f7f7` / `#f8f9fa` | Off-white for alternating sections |
| Testimonial accent | `#ffa41b` | Orange-amber, used on `.line` decorative accent |
| Font family | `Montserrat`, Arial, sans-serif | Google Font — geometric sans-serif |
| Icons | Font Awesome 4.7 (`fa`) + Flaticon (`flaticon-*`) | lucide-react in React version |
| Button radius | `3px` | Subtle rounded corners |
| Button padding | `0.75rem 1.5rem` (`.px-4.py-3`) | Generous click target |
| Hero height | Full viewport (`100vh`) | `js-fullheight` class |
| Section padding | `4rem 0` (`.ftco-section`) | Consistent vertical rhythm |
| Counter section bg | `#007bff` (`.bg-primary`) | Blue background behind stats |

## Section structure (top to bottom)

1. **Navbar** — Dark, transparent initially, white bg on scroll. Logo text
   "TechVane" left, nav links right (Home, About, Services, Projects, Blog,
   Contact). Hamburger on mobile.
2. **Hero** — Full-height background image with dark navy overlay (#060a24 @
   60% opacity). Left-aligned: tagline paragraph + heading "Experienced for
   Every Kind of IT Solution" + "Read more" primary button.
3. **Intro services** — 3 service cards in a row, each with icon, heading
   (Information Technology Consultancy / Product Design Strategy / Cyber
   Security & Web Development). Right-aligned in container.
4. **Services section** — Centered heading "Our Exclusive IT Solution
   Services". 4-column grid of icon+heading+description cards: Web
   Development, Database Analysis, Server Security, UX/UI Strategy.
5. **Counter / About** — Split layout: left half = background image, right
   half = blue (#007bff) background with heading, paragraph, and 4 stat
   counters (750 Projects, 568 Happy Clients, etc.).
6. **Portfolio / Projects** — Heading "Our Strategic Work". 4-column grid of
   project cards with background image, category label, title, and
   lightbox-expand icon overlay.
7. **FAQ** — Split: left = 3 images, right = "Frequently Asked Questions"
   with accordion of 4 collapsible items.
8. **Testimonials** — Full-width background image with dark overlay. Carousel
   of testimonial cards: quote, name, position.
9. **Blog** — Light background (#f7f7f7). Heading "Read our latest blog".
   3-column card grid: image with date badge, title, meta info.
10. **Contact / Appointment** — Full-width background image with overlay.
    Split: left = heading "Don't hesitate to contact us" + form (name, email,
    service select, message, submit); right = map or additional content.
11. **Footer** — Dark background. 4-column layout: brand + social icons,
    Explore links, Legal links, Contact info (address, phone, email).
    Copyright line at bottom.

## Gherkin requirements

### Navbar

```gherkin
Feature: Navigation bar

  Scenario: Navbar renders with brand and links
    Given the page loads
    Then the navbar displays "TechVane" as brand text
    And navigation links include "Home", "About", "Services", "Projects", "Blog", "Contact"

  Scenario: Navbar becomes opaque on scroll
    Given the page is scrolled past the hero
    Then the navbar background changes from transparent to white
    And the brand text remains visible

  Scenario: Mobile hamburger toggle
    Given the viewport is mobile width
    Then the hamburger menu button is visible
    And clicking it toggles the mobile nav open/closed
```

### Hero

```gherkin
Feature: Hero section

  Scenario: Hero renders with background image and overlay
    Given the hero section is visible
    Then a background image is displayed with a dark overlay
    And the heading reads "Experienced for Every Kind of IT Solution"

  Scenario: Hero has CTA button
    Given the hero section is visible
    Then a "Read more" button is displayed
    And clicking it navigates to the services section
```

### Intro services

```gherkin
Feature: Intro service highlights

  Scenario: Three services render
    Given the intro section is visible
    Then 3 service cards are displayed
    And each card shows an icon and a heading
    And headings are "Information Technology Consultancy", "Product Design Strategy", "Cyber Security & Web Development"
```

### Services section

```gherkin
Feature: Services grid

  Scenario: Four services render in a grid
    Given the services section is visible
    Then the heading reads "Our Exclusive IT Solution Services"
    And 4 service cards are displayed in a row
    And each card has an icon, heading, and description paragraph

  Scenario: Service cards are responsive
    Given the viewport is tablet width
    Then the service cards stack into 2 columns
    And given the viewport is mobile
    Then the service cards stack into 1 column
```

### Counter / About

```gherkin
Feature: Stats counter section

  Scenario: Counter section displays stats
    Given the counter section is visible
    Then 4 stat counters are displayed
    And each counter shows a number and a label

  Scenario: Counter section has background image and blue panel
    Given the counter section is visible
    Then the left half shows a background image
    And the right half has a blue (#007bff) background
```

### Portfolio / Projects

```gherkin
Feature: Projects gallery

  Scenario: Four project cards render
    Given the projects section is visible
    Then the heading reads "Our Strategic Work"
    And 4 project cards are displayed in a grid
    And each card shows a background image, category label, and title
```

### FAQ

```gherkin
Feature: FAQ accordion

  Scenario: FAQ items render as accordion
    Given the FAQ section is visible
    Then the heading reads "Frequently Asked Questions"
    And 4 accordion items are displayed
    And clicking an item header expands/collapses its content

  Scenario: FAQ section shows images
    Given the FAQ section is visible
    Then 3 images are displayed alongside the accordion
```

### Testimonials

```gherkin
Feature: Testimonials carousel

  Scenario: Testimonial cards render in carousel
    Given the testimonials section is visible
    Then the heading reads "Our insights & creative ideas"
    And testimonial cards show a quote, name, and position
    And the section has a full-width background image with dark overlay

  Scenario: Testimonials carousel auto-plays or allows manual navigation
    Given the testimonials section is visible
    Then the carousel advances through testimonial cards
```

### Blog

```gherkin
Feature: Blog section

  Scenario: Blog cards render
    Given the blog section is visible
    Then the heading reads "Read our latest blog"
    And 3 blog cards are displayed in a grid
    And each card shows a background image, date badge, and title

  Scenario: Blog cards are responsive
    Given the viewport is mobile
    Then the blog cards stack vertically
```

### Contact / Appointment

```gherkin
Feature: Contact form

  Scenario: Contact form renders
    Given the contact section is visible
    Then the heading reads "Don't hesitate to contact us"
    And a form displays fields for Name, Email, Service (select), and Message

  Scenario: Contact form submission
    Given the form is filled with valid data
    When the user clicks "Send Message"
    Then the form submits (or shows a success state)
```

### Footer

```gherkin
Feature: Footer

  Scenario: Footer renders with columns
    Given the footer is visible
    Then it displays 4 columns: brand + social, Explore links, Legal links, contact info
    And social icons include Twitter, Facebook, Instagram
    And contact info shows address, phone, and email

  Scenario: Footer links to Component Dock
    Given the footer is visible
    Then a link to "https://www.componentdock.com/" is present
    And the link text mentions "Component Dock"
```

## Verification checklist

- [ ] Navbar: transparent → opaque scroll transition
- [ ] Hero: full-height, dark overlay, CTA button
- [ ] Intro: 3 service highlight cards
- [ ] Services: 4-column icon grid with heading
- [ ] Counter: split image + blue stats panel with animated counters
- [ ] Portfolio: 4-column image grid with category labels
- [ ] FAQ: accordion with 4 items + 3 side images
- [ ] Testimonials: full-width bg image + carousel
- [ ] Blog: 3-column card grid on light background
- [ ] Contact: form with name, email, service select, message
- [ ] Footer: 4-column layout, social icons, Component Dock link
- [ ] Responsive: all sections stack properly on mobile
- [ ] Design tokens: Montserrat font, #007bff primary, #323edd navbar, #060a24 overlay
- [ ] Accessibility: semantic HTML, aria-labels, focus-visible rings
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
