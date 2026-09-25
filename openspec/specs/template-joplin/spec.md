# Template: Joplin (Personal / Portfolio)

## Purpose

Joplin is a personal portfolio/resume website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Jonson" free template (source:
https://colorlib.com/wp/template/jonson/), built under a DIFFERENT name
(**Joplin**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 single-page portfolio with a warm cream/maroon
color scheme, Poppins font, transparent sticky header, full-width hero with
animated rotating text, about section with stats, experience/education
timeline, expertise cards on cream background, portfolio gallery with hover
overlay, CTA banner, contact form, and footer with social icons.

- **Source:** [ColorLib Jonson](https://colorlib.com/wp/template/jonson/)
- **Preview:** https://preview.colorlib.com/theme/jonson/
- **New name:** joplin (apps/joplin)
- **Package:** @free-react-templates/joplin
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from the live preview's `assets/css/style.css` stylesheet:

| Token              | Value                                      | Use                                                              |
| ------------------ | ------------------------------------------ | ---------------------------------------------------------------- |
| Font family        | `'Poppins', sans-serif`                    | Google Fonts link (weights 200-800; use 400/500/600/700)         |
| Primary/accent     | `#670000` (dark red/maroon)                | Headings, text, button bg, nav active, links                     |
| Primary hover      | `#880707` (darker red)                     | Button hover gradient end                                        |
| Section bg         | `#FFEFAE` (warm cream/yellow)              | Hero bg, expertise/services section bg                           |
| Body text          | `#000000`                                  | Primary body text                                                |
| Secondary text     | `#635c5c`                                  | Paragraphs, subtitle text                                        |
| White              | `#fff`                                     | Button text, card bg, page content sections                      |
| Button gradient    | `linear-gradient(to left, #670000, #880707, #670000)` | Primary CTA buttons                                    |
| Button radius      | `0px` (square corners)                     | All buttons (boxed-btn, header-btn, submit-btn2)                 |
| Button style       | uppercase, letter-spacing 3px, 14px        | `.boxed-btn` and `.btn`                                          |
| Shadow (subtle)    | via Bootstrap defaults                     | Cards, gallery items                                             |

**Dark mode:** The original has no dark mode implementation (no `[data-bs-theme="dark"]` or `.dark` class). The recreation should NOT implement dark mode unless explicitly added as a new feature.

## Visual notes from screenshot

- **Layout:** Full-width page, no sidebar. Transparent sticky header at top.
- **Hero:** Warm cream/yellow (`#FFEFAE`) full-width background, giant bold
  name "JONSON." in dark red (`#670000`), "Digital Product Designer"
  subtitle, animated rotating company names ("Head of design at ...").
  No background image — solid color.
- **Header:** Logo text "Jonson." on left, centered nav links (Home, About,
  Portfolio, Blog, Contact), "Let's Talk →" button on right (dark red
  background, white text, square corners).
- **About:** White background, "About" heading, two-column layout (text left,
  photo right), 3 stat cards below (years of experience, investment amount,
  awards).
- **Experience/Education:** Listed entries with title, date range, company
  link. Clean vertical list layout.
- **Expertise (Services):** Cream background (`#FFEFAE`), centered heading,
  3-column grid of service cards (Experience Design, Interaction Design,
  Front-end Design).
- **Gallery:** Portfolio grid with hover overlay (plus icon on dark overlay).
- **CTA:** Full-width banner "Do you want to know more about me?" with
  "Download CV" button.
- **Contact Form:** 3-column row (name, email, subject) + full-width
  textarea + "Send Message" button.
- **Footer:** Social icons (Twitter, Facebook, Pinterest, Globe, Instagram)
  + copyright text.
- **Aesthetic:** Warm, minimal, professional. Cream + maroon palette gives
  a distinctive warm tone. Poppins font is clean and modern. Square button
  corners add a sharp, editorial feel.

## Sections (order)

### 1. Header (sticky, transparent)
- Logo text: "Joplin." (replacing "Jonson.")
- Navigation: Home, About, Portfolio, Blog, Contact
- CTA button: "Let's Talk →" (dark red bg, white text, square corners)
- Transparent background that becomes solid on scroll
- Mobile: hamburger menu

### 2. Hero
- Full-width, warm cream/yellow (`#FFEFAE`) background
- Giant bold name: "Joplin." (dark red, very large font ~80px+)
- Subtitle: "Digital Product Designer"
- Animated rotating text: "Head of design at [company]" with typewriter/word rotation effect
- No background image — solid cream color

### 3. About
- White background
- Section heading: "About" (dark red)
- Two-column layout: bio text left, portrait photo right (picsum placeholder)
- Bio text: professional designer background story
- 3 stat cards below: "06 years" of experience, "$40M+" invested, "Multiple" awards
- Each stat: large number + description text

### 4. Experience
- White background
- Section heading: "Experience" (dark red)
- List of job entries, each with:
  - Job title (e.g. "User Experience Designer")
  - Date range (e.g. "Jan 18 - Feb 20")
  - Company name with external link icon

### 5. Education
- White background (continues from Experience)
- Section heading: "Education" (dark red)
- List of education entries, same format as Experience

### 6. My Expertise (Services)
- Cream background (`#FFEFAE`)
- Centered heading: "My Expertise" (dark red)
- 3-column grid of service cards:
  - Experience Design
  - Interaction Design
  - Front-end Design
- Each card: title + short description
- Cards have white background

### 7. Gallery (Portfolio)
- White background
- Section heading: "Selected Portfolios" (dark red)
- 2-column masonry-style grid of portfolio images (picsum placeholders)
- Hover overlay with plus icon (dark overlay, centered icon)
- Images: gallery1.png through gallery6.png → use picsum placeholders

### 8. Want To Work (CTA Banner)
- White background
- Full-width row: "Do you want to know more about me?" heading (left)
  + "Download CV" button (right, white outlined button)

### 9. Contact Form
- White background
- Heading: "Contact Me" (dark red)
- 3-column row: Name input, Email input, Subject input
- Full-width: Message textarea
- Submit button: "Send Message" (dark red gradient, square corners)
- Form is decorative (no real submission)

### 10. Footer
- Dark/neutral background
- Social icons row: Twitter, Facebook, Pinterest, Globe, Instagram
  (use lucide-react equivalents: Twitter, Facebook, Globe, Instagram;
  Pinterest → no direct lucide match, use a custom icon or skip)
- Copyright: "© [year] All rights reserved | Made with ❤ by Component Dock"
  (replaces Colorlib attribution)

## Gherkin requirements

```gherkin
Feature: Joplin personal portfolio template

  Background:
    Given the user visits the Joplin homepage

  Scenario: Page loads with correct structure
    Then the page title contains "Joplin"
    And a sticky header is visible
    And a hero section is visible
    And 9 content sections exist in order

  Scenario: Header navigation
    Given the header is visible
    When the user clicks "About" in the nav
    Then the page scrolls to the About section
    When the user clicks "Portfolio" in the nav
    Then the page scrolls to the Gallery section
    When the user clicks "Contact" in the nav
    Then the page scrolls to the Contact section

  Scenario: Header CTA button
    Given the header is visible
    Then a "Let's Talk" button is visible in the header

  Scenario: Hero section content
    Given the hero section is visible
    Then the hero displays the name "Joplin."
    And the hero displays "Digital Product Designer"
    And the hero displays an animated rotating text element

  Scenario: About section content
    Given the About section is visible
    Then the heading reads "About"
    And a bio paragraph is displayed
    And a portrait image is displayed
    And 3 stat cards are displayed

  Scenario: Experience section content
    Given the Experience section is visible
    Then the heading reads "Experience"
    And at least 2 experience entries are listed
    And each entry shows a title, date range, and company

  Scenario: Education section content
    Given the Education section is visible
    Then the heading reads "Education"
    And at least 2 education entries are listed

  Scenario: Expertise section content
    Given the Expertise section is visible
    Then the heading reads "My Expertise"
    And 3 service cards are displayed
    And the section has a cream background

  Scenario: Gallery section content
    Given the Gallery section is visible
    Then the heading reads "Selected Portfolios"
    And at least 4 portfolio images are displayed
    And hovering an image shows an overlay with a plus icon

  Scenario: CTA banner content
    Given the CTA section is visible
    Then the text reads "Do you want to know more about me?"
    And a "Download CV" button is displayed

  Scenario: Contact form
    Given the Contact section is visible
    Then a "Contact Me" heading is displayed
    And a name input field is present
    And an email input field is present
    And a subject input field is present
    And a message textarea is present
    And a "Send Message" button is present

  Scenario: Footer content
    Given the footer is visible
    Then social media icons are displayed
    And a copyright notice is displayed
    And a link to componentdock.com is present
```

## Verification checklist

- [ ] Spec validated with `npm run spec:validate`
- [ ] All design tokens match the original (Poppins font, #670000 maroon, #FFEFAE cream)
- [ ] Section order matches original: Header → Hero → About → Experience → Education → Expertise → Gallery → CTA → Contact → Footer
- [ ] Hero uses solid cream background (no image), large bold name, animated rotating text
- [ ] Buttons have square corners (border-radius: 0), dark red gradient
- [ ] About section has 2-column layout with stats
- [ ] Gallery has hover overlay with plus icon
- [ ] Contact form has 3-column input layout + full-width textarea
- [ ] Footer links to componentdock.com (not Colorlib)
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Tests pass with 100% coverage
- [ ] Build succeeds
- [ ] App renders without errors in browser
