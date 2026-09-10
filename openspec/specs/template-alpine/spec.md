# Template: Alpine (Creative Agency)

## Purpose

Recreation of ColorLib **Bobsled** — a creative agency / digital studio single-page template.

- **Source:** https://colorlib.com/wp/template/bobsled/
- **Preview:** https://preview.colorlib.com/theme/bobsled/
- **New name:** `alpine` (apps/alpine, @free-react-templates/alpine)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design Tokens

Extracted from the live preview CSS (`css/main.css`) and DOM.

| Token             | Value                                 | Usage                                          |
| ----------------- | ------------------------------------- | ---------------------------------------------- |
| Brand gradient    | `#3e69fe` (blue) → `#4cd4e3` (teal) | Banner bg, featured bg, story bg, social icons |
| Body gradient     | `#4cd4e3` (teal) → `#3e69fe` (blue) | Body background (visible on contact, footer)   |
| Light background  | `#f9f9ff`                             | Subscription section                           |
| White background  | `#ffffff`                             | Working-process, remarkable sections           |
| Heading text      | `#222222`                             | h2, h4 headings                                |
| Body text         | `#777777`                             | Paragraphs, labels                             |
| Font family       | `"Poppins", sans-serif`              | All text                                       |
| Button shape      | `border-radius: 20px` (pill)         | Primary buttons                                |
| Button style      | Transparent bg, 1px border           | Default state                                  |
| Button hover      | Gradient text fill                    | Span text gets gradient clip                   |
| Accent colors     | `#f44a40` red, `#f4e700` yellow, `#38a4ff` blue, `#73fbaf` green, `#a367e7` purple | Feature icon highlights |

## Sections (in order)

1. **Navbar** — Logo (left) + nav links (Home, Generic, Elements) + hamburger icon
2. **Hero / Banner** — Full-width gradient banner (#3e69fe → #4cd4e3), white uppercase heading "Don't look anywhere, This is the best place on web", subtitle paragraph, "Get Started" pill CTA button, hero background illustration (right side)
3. **Working Process** — White background, centered heading "Our Working Process", 4 numbered steps in a row: Researching, Wireframing, Prototyping, Final Design (each with icon + caption)
4. **Exclusive Features** — Gradient background (#3e69fe → #4cd4e3), centered heading "Our Exclusive Features" (white), 3 feature cards in a row: Creative Design, Appropriate UX, Super Clean Code (each with icon + description, white text)
5. **Remarkable Works** — White background, centered heading "Remarkable Works", 3 portfolio items alternating layout: image (7/12 cols) + description (5/12 cols) with title + paragraph + "View Project" pill button
6. **Story / Quote** — Gradient background, quote section with heading "From the part of beginning" + paragraph + "Get Started" pill button
7. **Subscription** — Light background (#f9f9ff), heading "Subscribe for our Newsletter" (left) + email input + "Get Started" pill button (right)
8. **Contact Form** — Gradient background (body teal→blue), centered heading "Keep in Touch" (white), form with name input + email input + textarea + "Send Message" pill button (right-aligned)
9. **Footer Widget** — Transparent (inherits body gradient), 3-column layout: Address, Email Address, Phone Number (each with title + content)
10. **Footer** — Logo (left) + copyright text (center) + social icons (right): Facebook, Twitter, Dribbble, Behance

## Gherkin Requirements

### Feature: Alpine — Creative Agency Template

```gherkin
Feature: Alpine template rendering

  Background:
    Given the Alpine app is loaded at the root URL

  # --- Navbar ---
  Scenario: Navbar displays logo and navigation links
    Then the navbar is visible at the top of the page
    And a logo image is displayed on the left
    And navigation links "Home", "Generic", and "Elements" are present
    And a hamburger menu button is visible for mobile viewports

  # --- Hero / Banner ---
  Scenario: Hero banner displays heading and CTA
    Then a full-width gradient banner is displayed
    And the heading "Don't look anywhere, This is the best place on web" is visible in white uppercase
    And a subtitle paragraph about metropolitan world is displayed below
    And a "Get Started" pill button is visible with an arrow icon

  Scenario: Hero banner has gradient background
    Then the banner background uses the brand gradient from blue to teal

  # --- Working Process ---
  Scenario: Working process section shows four steps
    Then the heading "Our Working Process" is displayed
    And four numbered steps are shown: Researching, Wireframing, Prototyping, Final Design
    And each step has an icon and caption

  # --- Exclusive Features ---
  Scenario: Features section displays three feature cards
    Then the heading "Our Exclusive Features" is displayed in white
    And three feature cards are shown: Creative Design, Appropriate UX, Super Clean Code
    And each card has an icon, title, and description text in white

  Scenario: Features section has gradient background
    Then the features section background uses the brand gradient

  # --- Remarkable Works ---
  Scenario: Works section displays portfolio items
    Then the heading "Remarkable Works" is displayed
    And three portfolio items are shown in alternating layout
    And each item has a title, description, and "View Project" pill button

  # --- Story / Quote ---
  Scenario: Story section displays quote content
    Then a quote heading "From the part of beginning" is displayed
    And a paragraph about design is shown
    And a "Get Started" pill button is visible

  Scenario: Story section has gradient background
    Then the story section background uses the brand gradient

  # --- Subscription ---
  Scenario: Subscription section displays newsletter form
    Then the heading "Subscribe for our Newsletter" is displayed
    And an email input field is present
    And a "Get Started" pill button is visible for submission

  Scenario: Subscription section has light background
    Then the subscription section background is light (#f9f9ff)

  # --- Contact Form ---
  Scenario: Contact form displays form fields
    Then the heading "Keep in Touch" is displayed in white
    And a name input field is present
    And an email input field is present
    And a message textarea is present
    And a "Send Message" pill button is displayed right-aligned

  Scenario: Contact form has gradient background
    Then the contact form section background uses the body gradient (teal to blue)

  # --- Footer Widget ---
  Scenario: Footer widget displays contact information
    Then three columns are shown: Address, Email Address, Phone Number
    And each column has a title and content

  # --- Footer ---
  Scenario: Footer displays logo, copyright, and social links
    Then the footer shows the logo
    And copyright text is displayed
    And social icon links are shown for Facebook, Twitter, Dribbble, and Behance
    And a "Component Dock" link is present in the footer

  # --- Responsive ---
  Scenario: Mobile viewport shows hamburger menu
    When the viewport width is less than 992px
    Then the hamburger menu icon is visible
    And the navigation links are hidden

  # --- Accessibility ---
  Scenario: Page has accessible landmarks
    Then the page has a navigation landmark for the navbar
    And the main content area is wrapped in a semantic element
    And the footer has a footer landmark
    And all form inputs have associated labels or placeholders
```

## Verification Checklist

- [ ] All 10 sections render in correct order
- [ ] Brand gradient (#3e69fe → #4cd4e3) applied to banner, features, story sections
- [ ] Body gradient (#4cd4e3 → #3e69fe) visible on contact and footer areas
- [ ] Subscription section has #f9f9ff light background
- [ ] White background on working-process and remarkable sections
- [ ] Poppins font family applied globally
- [ ] Pill-shaped buttons (border-radius: 20px) throughout
- [ ] Button hover shows gradient text effect
- [ ] Responsive: hamburger menu at <992px
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Spec validated with `npm run spec:validate`
