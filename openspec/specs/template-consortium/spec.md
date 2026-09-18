# Template: Consortium (Business Consulting)

## Purpose

Recreation of ColorLib **Consula** as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Source:** https://colorlib.com/wp/template/consula/
- **Preview:** https://preview.colorlib.com/theme/consula/
- **New name:** `consortium` (app: `apps/consortium`, package: `@free-react-templates/consortium`)
- **Deploy URL:** https://consortium.free.componentdock.com/

## Design Tokens (extracted from live preview CSS)

| Token | Value | Notes |
|---|---|---|
| Brand primary | `#46ddb0` | Teal-green; used on buttons, accents |
| Dark text | `#25262a` | Main body / heading color |
| Secondary dark | `#333333` | Footer background, some headings |
| Body text | `#666666` / `#737373` | Paragraphs, footer text |
| Light gray bg | `#f4f5f9` | Section alternating background |
| Off-white bg | `#f8f9fa` | Top bar, light sections |
| White | `#fff` | Card backgrounds, button hover text |
| Border / divider | `#dee2e6` | Subtle separators |
| Footer link color | `#999999` | Hover → white |
| Font family | `Roboto` (300, 400, 900) | Google Fonts, sans-serif fallback |
| Button radius | `30px` | Pill-shaped buttons |
| Button padding | `10px 30px` | Comfortable pill |
| Section padding | `2.5em 0` mobile, `5em 0` desktop | Consistent vertical rhythm |

## Visual Design Notes

- Clean, professional consulting theme. White backgrounds dominate with `#f4f5f9` alternating sections.
- Hero has a background image with white overlay text ("We Are The Best Consulting Agency") and a green pill CTA button.
- Team section uses 3-column card grid with circular/square photos, name, role, and bio.
- Services/How It Works section uses numbered step icons with descriptions.
- Testimonials section with carousel/sliding cards.
- Contact section: form on left, address/phone/email info on right.
- Dark footer (#333333) with 4 columns: About, Quick Links, Follow Us, Subscribe Newsletter.
- Top bar has social icons (left) and phone/email (right) on light gray (#f8f9fa).

## Section Order (from preview DOM)

1. **TopBar** — social icons (left) + phone/email (right), light gray bg
2. **Navbar** — sticky, white bg, logo ("Consula" text), nav links (About, Services, Testimonials, Contact)
3. **Hero** — background image, centered headline "We Are The Best Consulting Agency", subtitle, "Get Started" pill button, "50 years of experience" counter overlay
4. **About** — "Welcome To Consula" heading + body text + "Learn More" pill button, image on side
5. **Team** — "Our Team" heading, 3-column cards (photo, name, role, bio) for 3 members
6. **Services** — "How It Works" / "Our Services" heading, numbered step icons + descriptions (3 steps)
7. **Testimonials** — heading + testimonial carousel with quote, name, role
8. **Blog** — 3-column blog cards (image, category, title, excerpt, "Continue Reading" link)
9. **Contact** — 2-column: contact form (First Name, Last Name, Email, Subject, Message) + contact info (Address, Phone, Email)
10. **Footer** — dark bg, 4 columns (About, Quick Links, Follow Us, Subscribe Newsletter) + copyright

## Gherkin Requirements

```gherkin
Feature: Consortium — Business Consulting Template

  Background:
    Given the user visits "consortium.free.componentdock.com"
    Then the page loads within 3 seconds

  # ── TopBar ──────────────────────────────────────────────────

  Scenario: TopBar renders social links and contact info
    Given the TopBar is visible at the top of the page
    Then there are social media icons (Facebook, Twitter, Instagram, LinkedIn)
    And a phone number is displayed
    And an email address is displayed
    And the TopBar has a light gray background (#f8f9fa)

  # ── Navbar ──────────────────────────────────────────────────

  Scenario: Navbar displays logo and navigation
    Given the Navbar is visible below the TopBar
    Then the logo text "Consortium" is displayed
    And navigation links include "About", "Services", "Testimonials", "Contact"
    And the Navbar has a white background
    And the Navbar becomes sticky on scroll

  Scenario: Navbar links scroll to sections
    When the user clicks "About" in the navbar
    Then the page scrolls to the About section
    When the user clicks "Services" in the navbar
    Then the page scrolls to the Services section

  # ── Hero ────────────────────────────────────────────────────

  Scenario: Hero section displays headline and CTA
    Given the Hero section is visible
    Then a headline "We Are The Best Consulting Agency" is displayed
    And a subtitle paragraph is displayed below the headline
    And a "Get Started" button is visible with pill shape (border-radius: 30px)
    And the button has teal-green background (#46ddb0)
    And a "50 years of experience" counter element is visible
    And the section has a background image

  Scenario: Hero CTA button hover changes colors
    Given the "Get Started" button is visible
    When the user hovers over the button
    Then the button background becomes white
    And the button text becomes teal-green (#46ddb0)

  # ── About ───────────────────────────────────────────────────

  Scenario: About section displays company info
    Given the About section is visible
    Then the section title reads "About Us"
    And a "Welcome To Consula" heading is displayed
    And body text describes the consulting agency
    And a "Learn More" pill button is visible

  # ── Team ────────────────────────────────────────────────────

  Scenario: Team section displays member cards
    Given the Team section is visible
    Then the section title reads "Our Team"
    And there are exactly 3 team member cards
    And each card displays a photo, name, role, and bio text
    And team members include "John Rooster" (Co-Founder, President),
      "Tom Sharp" (Co-Founder, COO), and "Winston Hodson"

  # ── Services ────────────────────────────────────────────────

  Scenario: Services section displays steps
    Given the Services section is visible
    Then the section title reads "How It Works"
    And there are 3 numbered service steps
    And each step has an icon, title, and description text

  # ── Testimonials ────────────────────────────────────────────

  Scenario: Testimonials section displays quotes
    Given the Testimonials section is visible
    Then the section title reads "Testimonials"
    And testimonial cards display a quote, person name, and role
    And multiple testimonials are available for carousel navigation

  # ── Blog ────────────────────────────────────────────────────

  Scenario: Blog section displays post cards
    Given the Blog section is visible
    Then there are blog post cards in a grid
    And each card has a featured image, category tag, title, and excerpt
    And each card has a "Continue Reading" link

  # ── Contact ─────────────────────────────────────────────────

  Scenario: Contact form renders all fields
    Given the Contact section is visible
    Then a "Contact Form" heading is displayed
    And the form contains fields: First Name, Last Name, Email, Subject, Message
    And a submit button labeled "Let's Get Started" is visible

  Scenario: Contact form validates required fields
    Given the Contact form is visible
    When the user submits the form without filling any fields
    Then validation errors appear for required fields

  Scenario: Contact info displays correctly
    Given the Contact section is visible
    Then an Address is displayed ("203 Fake St. Mountain View, San Francisco, California, USA")
    And a Phone number is displayed
    And an Email address is displayed

  # ── Footer ──────────────────────────────────────────────────

  Scenario: Footer renders with correct columns
    Given the Footer is visible
    Then it has a dark background (#333333)
    And it contains columns: "About Us", "Quick Links", "Follow Us", "Subscribe Newsletter"
    And "Quick Links" includes links to About, Services, Testimonials, Contact
    And a copyright line is displayed
    And the footer links to "https://www.componentdock.com/" branded as "Component Dock"

  # ── Responsive ──────────────────────────────────────────────

  Scenario: Mobile responsive layout
    Given the user views the page on a 375px wide viewport
    Then the navbar collapses into a hamburger menu
    And team cards stack vertically
    And blog cards stack vertically
    And the contact form and info stack vertically
    And the footer columns stack vertically

  # ── Accessibility ───────────────────────────────────────────

  Scenario: Page meets accessibility standards
    Given the page is loaded
    Then all images have descriptive alt text
    And all form inputs have associated labels
    And the page has a logical heading hierarchy (h1 → h2 → h3)
    And interactive elements are keyboard-focusable
    And color contrast meets WCAG AA standards for text on backgrounds
```

## Verification Checklist

- [ ] All 10 sections rendered in correct order
- [ ] Brand color `#46ddb0` used on primary buttons and accents
- [ ] Roboto font loaded via Google Fonts link in `index.html`
- [ ] Pill-shaped buttons (border-radius: 30px) on all CTAs
- [ ] Navbar sticky on scroll with white background
- [ ] Hero section has background image (use picsum placeholder)
- [ ] Team section: 3 cards with photos, names, roles, bios
- [ ] Services section: 3 numbered steps with icons
- [ ] Testimonials carousel functional
- [ ] Blog section: card grid with images, categories, titles, excerpts
- [ ] Contact form: all 5 fields + submit button
- [ ] Contact info: address, phone, email displayed
- [ ] Footer: 4 columns, dark bg, Component Dock link
- [ ] TopBar: social icons + phone/email
- [ ] Responsive: mobile hamburger menu, stacked cards
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to componentdock.com
- [ ] `public/CNAME` contains `consortium.free.componentdock.com`
- [ ] Package name is `@free-react-templates/consortium`
- [ ] Tests pass at 100% coverage
