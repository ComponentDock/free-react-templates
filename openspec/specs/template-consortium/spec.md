# Template: Consortium (Business Consulting)
<!-- prep-status: shipped-as=dictum -->
> **SHIPPED-UNDER** — the ColorLib `consula` design this prep describes already
> ships as `apps/dictum` (<https://dictum.free.componentdock.com>).
> Do not scaffold `apps/consortium`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-dictum/spec.md`.

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

## Requirements

### Feature: Consortium template behaviour

Feature: Consortium — Business Consulting Template

Background:
- **GIVEN** the user visits "consortium.free.componentdock.com"
- **THEN** the page loads within 3 seconds

**── TopBar ──────────────────────────────────────────────────**

#### Scenario: TopBar renders social links and contact info

- **GIVEN** the TopBar is visible at the top of the page
- **THEN** there are social media icons (Facebook, Twitter, Instagram, LinkedIn)
- **AND** a phone number is displayed
- **AND** an email address is displayed
- **AND** the TopBar has a light gray background (#f8f9fa)

**── Navbar ──────────────────────────────────────────────────**

#### Scenario: Navbar displays logo and navigation

- **GIVEN** the Navbar is visible below the TopBar
- **THEN** the logo text "Consortium" is displayed
- **AND** navigation links include "About", "Services", "Testimonials", "Contact"
- **AND** the Navbar has a white background
- **AND** the Navbar becomes sticky on scroll

#### Scenario: Navbar links scroll to sections

- **WHEN** the user clicks "About" in the navbar
- **THEN** the page scrolls to the About section
- **WHEN** the user clicks "Services" in the navbar
- **THEN** the page scrolls to the Services section

**── Hero ────────────────────────────────────────────────────**

#### Scenario: Hero section displays headline and CTA

- **GIVEN** the Hero section is visible
- **THEN** a headline "We Are The Best Consulting Agency" is displayed
- **AND** a subtitle paragraph is displayed below the headline
- **AND** a "Get Started" button is visible with pill shape (border-radius: 30px)
- **AND** the button has teal-green background (#46ddb0)
- **AND** a "50 years of experience" counter element is visible
- **AND** the section has a background image

#### Scenario: Hero CTA button hover changes colors

- **GIVEN** the "Get Started" button is visible
- **WHEN** the user hovers over the button
- **THEN** the button background becomes white
- **AND** the button text becomes teal-green (#46ddb0)

**── About ───────────────────────────────────────────────────**

#### Scenario: About section displays company info

- **GIVEN** the About section is visible
- **THEN** the section title reads "About Us"
- **AND** a "Welcome To Consula" heading is displayed
- **AND** body text describes the consulting agency
- **AND** a "Learn More" pill button is visible

**── Team ────────────────────────────────────────────────────**

#### Scenario: Team section displays member cards

- **GIVEN** the Team section is visible
- **THEN** the section title reads "Our Team"
- **AND** there are exactly 3 team member cards
- **AND** each card displays a photo, name, role, and bio text
- **AND** team members include "John Rooster" (Co-Founder, President),
"Tom Sharp" (Co-Founder, COO), and "Winston Hodson"

**── Services ────────────────────────────────────────────────**

#### Scenario: Services section displays steps

- **GIVEN** the Services section is visible
- **THEN** the section title reads "How It Works"
- **AND** there are 3 numbered service steps
- **AND** each step has an icon, title, and description text

**── Testimonials ────────────────────────────────────────────**

#### Scenario: Testimonials section displays quotes

- **GIVEN** the Testimonials section is visible
- **THEN** the section title reads "Testimonials"
- **AND** testimonial cards display a quote, person name, and role
- **AND** multiple testimonials are available for carousel navigation

**── Blog ────────────────────────────────────────────────────**

#### Scenario: Blog section displays post cards

- **GIVEN** the Blog section is visible
- **THEN** there are blog post cards in a grid
- **AND** each card has a featured image, category tag, title, and excerpt
- **AND** each card has a "Continue Reading" link

**── Contact ─────────────────────────────────────────────────**

#### Scenario: Contact form renders all fields

- **GIVEN** the Contact section is visible
- **THEN** a "Contact Form" heading is displayed
- **AND** the form contains fields: First Name, Last Name, Email, Subject, Message
- **AND** a submit button labeled "Let's Get Started" is visible

#### Scenario: Contact form validates required fields

- **GIVEN** the Contact form is visible
- **WHEN** the user submits the form without filling any fields
- **THEN** validation errors appear for required fields

#### Scenario: Contact info displays correctly

- **GIVEN** the Contact section is visible
- **THEN** an Address is displayed ("203 Fake St. Mountain View, San Francisco, California, USA")
- **AND** a Phone number is displayed
- **AND** an Email address is displayed

**── Footer ──────────────────────────────────────────────────**

#### Scenario: Footer renders with correct columns

- **GIVEN** the Footer is visible
- **THEN** it has a dark background (#333333)
- **AND** it contains columns: "About Us", "Quick Links", "Follow Us", "Subscribe Newsletter"
- **AND** "Quick Links" includes links to About, Services, Testimonials, Contact
- **AND** a copyright line is displayed
- **AND** the footer links to "https://www.componentdock.com/" branded as "Component Dock"

**── Responsive ──────────────────────────────────────────────**

#### Scenario: Mobile responsive layout

- **GIVEN** the user views the page on a 375px wide viewport
- **THEN** the navbar collapses into a hamburger menu
- **AND** team cards stack vertically
- **AND** blog cards stack vertically
- **AND** the contact form and info stack vertically
- **AND** the footer columns stack vertically

**── Accessibility ───────────────────────────────────────────**

#### Scenario: Page meets accessibility standards

- **GIVEN** the page is loaded
- **THEN** all images have descriptive alt text
- **AND** all form inputs have associated labels
- **AND** the page has a logical heading hierarchy (h1 → h2 → h3)
- **AND** interactive elements are keyboard-focusable
- **AND** color contrast meets WCAG AA standards for text on backgrounds

## Verification checklist

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
