# Template: Prismark (Personal Portfolio)

## Purpose

Recreation of ColorLib's **Jonson** personal portfolio template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source template:** ColorLib Jonson
- **ColorLib URL:** https://colorlib.com/wp/template/jonson/
- **Preview URL:** https://preview.colorlib.com/theme/jonson/
- **New name:** Prismark (`apps/prismark`, package `@free-react-templates/prismark`)
- **Design category:** Personal Portfolio
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from the live preview's `assets/css/style.css` stylesheet.

| Token | Value | Usage |
|-------|-------|-------|
| Primary brand | `#670000` (dark maroon) | Navbar active, buttons, headings, footer-top bg |
| Accent warm | `#FFEFAE` (cream/light yellow) | Hero bg, section-bg1 (expertise), submit button bg |
| Dark navy | `#1f2b7b` | Secondary text color, CTA accents |
| Light lavender bg | `#f9f9ff` | Page background |
| Soft purple bg | `#f0e9ff` | Alternate section background |
| Medium blue | `#415094` | Link accent |
| Teal accent | `#4cd3e3` | Highlight accent |
| Orange accent | `#f09359` | Highlight accent |
| Text dark | `#140C40` | Body text |
| Text muted | `#7a8290` | Subtitle/secondary text |
| Text light | `#fdfdfd` | On dark backgrounds |
| White | `#fff` / `#ffffff` | Card backgrounds |
| **Font family** | `"Poppins", sans-serif` | Global body/headings |
| **Button radius** | `0px` (sharp) | All buttons |
| **Gallery overlay radius** | `50%` (circular) | Image overlay circle |
| Button hover | `linear-gradient(to left, #670000, #880707, #670000)` | Button hover gradient |

### Hero area
- Background: `#FFEFAE` (cream)
- Transparent header over hero
- Large bold name ("Jonson.") in maroon, subtitle "Digital Product Designer"
- Animated headline cycling company names

### Section backgrounds
- Hero: cream `#FFEFAE`
- About: light lavender `#f9f9ff` (page default)
- Experience: light lavender `#f9f9ff`
- Expertise: cream `#FFEFAE` (`.section-bg1`)
- Gallery: light lavender `#f9f9ff`
- Footer top (CTA): cream `#FFEFAE`
- Footer bottom: dark `#1f2b7b` area

## Gherkin requirements

### Hero Section

```gherkin
Scenario: Hero displays name and role
  Given the user loads the page
  Then a large heading shows "Prismark"
  And a subtitle shows "Digital Product Designer"
  And an animated headline cycles through company names

Scenario: Hero has CTA button
  Given the user views the hero section
  Then a "Let's Talk" button is visible in the header
  And clicking it scrolls to the contact section

Scenario: Header navigation is visible
  Given the user views the page
  Then the header shows links for Home, About, Portfolio, Blog, Contact
  And Blog has a dropdown with sub-items
  And the header is transparent over the hero
```

### About Section

```gherkin
Scenario: About section shows bio text
  Given the user scrolls to the About section
  Then a heading "About" is displayed
  And two paragraphs of bio text are shown
  And an about image is displayed alongside

Scenario: About section shows experience stats
  Given the user views the About section
  Then three stat cards are displayed
  And they show "06 years" of experience, "$40M+" invested, "Multiple" awards
```

### Experience Section

```gherkin
Scenario: Experience section shows work history
  Given the user scrolls to the Experience section
  Then a heading "Experience" is displayed
  And three work experience entries are shown with role, date, and company

Scenario: Experience section shows education
  Given the user views the Experience section
  Then a heading "Education" is displayed
  And two education entries are shown with degree, date, and institution
```

### Expertise Section

```gherkin
Scenario: Expertise section shows service cards
  Given the user scrolls to the Expertise section
  Then a heading "My Expertise" is displayed on cream background
  And three service cards are shown: Experience Design, Interaction Design, Front-end Design
  And each card has a title and description
```

### Gallery Section

```gherkin
Scenario: Gallery shows portfolio items
  Given the user scrolls to the Gallery section
  Then a heading "Selected Portfolios" is displayed
  And four portfolio images are shown in a 2x2 grid
  And hovering shows an overlay with a plus icon

Scenario: Gallery items have hover overlay
  Given the user hovers over a gallery item
  Then an overlay appears with a circular icon
  And the overlay has a plus icon for viewing
```

### Footer Section

```gherkin
Scenario: Footer has CTA and contact form
  Given the user scrolls to the footer
  Then a CTA section shows "Do you want to know more about me?"
  And a "Download CV" button is displayed
  And a contact form with name, email, subject, message fields is shown
  And a "Send Message" submit button is visible

Scenario: Footer has social links
  Given the user views the footer bottom
  Then social media icons for Twitter, Facebook, Pinterest, Globe, Instagram are shown
  And a copyright notice is displayed
  And a link to Component Dock is included
```

## Verification checklist

- [ ] Hero section renders with name, role, and animated headline
- [ ] Transparent header with navigation links and "Let's Talk" CTA
- [ ] About section with bio text, image, and 3 stat cards
- [ ] Experience section with work history (3 entries) and education (2 entries)
- [ ] Expertise section on cream background with 3 service cards
- [ ] Gallery section with 4 portfolio images in 2x2 grid with hover overlays
- [ ] Footer CTA with "Download CV" button
- [ ] Contact form with name, email, subject, message fields and submit button
- [ ] Footer social links and copyright
- [ ] Footer includes Component Dock link
- [ ] Color tokens match: maroon #670000, cream #FFEFAE, navy #1f2b7b
- [ ] Font: Poppins throughout
- [ ] Buttons: sharp corners (radius 0)
- [ ] All placeholder images use picsum.photos/seed/prismark-<n>
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
