# Template: Mediflow (Health & Medical Clinic)

## Purpose

Recreation of ColorLib's **Medi 2** template as a React 19 + Vite + Tailwind 4 + TypeScript application.

- **Source**: https://colorlib.com/wp/template/medi-2/
- **Preview**: https://preview.colorlib.com/theme/medi/ (medi-2 preview unavailable; base medi used as reference)
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/nedi-free-template.jpg
- **Stack**: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Package**: `@free-react-templates/mediflow`
- **Deploy**: `https://mediflow.free.componentdock.com`

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Primary Blue | `#175DFE` | Navbar background (85% opacity), hero overlay, CTA accents |
| Gradient Start | `#24c0f1` | Button gradient start |
| Gradient End | `#4c9afe` | Button gradient end |
| Button Border | `#27bcf2` | Secondary button border |
| Accent Orange | `#ff5e13` | Highlight color, accent elements |
| Light Background | `#f9f9ff` | Alternate section backgrounds |
| Surface White | `#ffffff` | Card backgrounds, main content areas |
| Text Primary | `#222222` | Headings |
| Text Body | `#777777` | Body text |
| Text Secondary | `#999999` | Captions, labels |
| Primary Font | `"Work Sans", sans-serif` | Body text, buttons |
| Heading Font | `"Roboto", sans-serif` | Headings (or Work Sans bold) |
| Button Radius | ~4px (Bootstrap default) | Rounded rectangle buttons |
| Button Padding | `18px 30px` | CTA buttons |
| Button Font | 16px, weight 400 | Button text |

## Section Structure

1. **Emergency Contact Bar** — Top bar with phone number and address
2. **Navbar** — Blue semi-transparent background, logo "Mediflow" with shield icon, nav links (Home, About, Blog, Pages, Contact), "Book Appointment" CTA button (white bg, rounded)
3. **Hero/Slider** — Full-width background image (medical/surgery scene) with blue tint overlay, white text: subtitle "THE BEST MEDICAL CENTER", heading "Bringing health to life for the whole family.", "Discover More" button (white border/outline)
4. **Welcome Section** — Two-column: left has doctor photo with decorative element, right has "Welcome To Modern Clinic." heading + description text + features list
5. **Quality Section** — Features/qualities grid (3-4 cards) highlighting clinic benefits
6. **Department Section** — Tabbed department display (Astrology, Blood, Neuroanatomy, Contact tabs) with department info and thumbnails
7. **Expert Doctors Section** — Doctor team cards with photos, names, specialties
8. **Book Appointment Section** — Appointment booking form with date picker
9. **Footer** — Multi-column footer with logo, links, contact info, copyright

## Gherkin Requirements

### Feature: Emergency Contact Bar
  Scenario: Display emergency contact information
    Given the user loads the page
    Then an emergency contact bar is visible at the top
    And it shows a phone number and address

### Feature: Navbar
  Scenario: Display navigation with CTA
    Given the user loads the page
    Then a navbar with blue semi-transparent background is visible
    And it contains the logo "Mediflow" with a shield icon
    And navigation links are present: Home, About, Blog, Pages, Contact
    And a "Book Appointment" button is displayed (white background, rounded)

  Scenario: Navigate to sections
    Given the user clicks a navigation link
    Then the page scrolls to the corresponding section

### Feature: Hero Section
  Scenario: Display hero with overlay
    Given the user loads the page
    Then a full-width hero section is displayed
    And it has a medical/surgery background image with blue tint overlay
    And the subtitle reads "THE BEST MEDICAL CENTER"
    And the heading reads "Bringing health to life for the whole family."
    And a "Discover More" button with white border is visible

  Scenario: Click hero CTA
    Given the user clicks "Discover More"
    Then the page scrolls to the welcome section

### Feature: Welcome Section
  Scenario: Display welcome content
    Given the user scrolls to the welcome section
    Then a two-column layout is displayed
    And the left column shows a doctor photo with decorative element
    And the right column shows "Welcome To Modern Clinic." heading
    And descriptive text is present below the heading

### Feature: Quality Section
  Scenario: Display quality features
    Given the user scrolls to the quality section
    Then 3-4 feature cards are displayed in a grid
    And each card has an icon, title, and description

### Feature: Department Section
  Scenario: Display department tabs
    Given the user scrolls to the department section
    Then department tabs are visible (e.g., Cardiology, Neurology, etc.)
    And clicking a tab shows the corresponding department info

### Feature: Expert Doctors Section
  Scenario: Display doctor team
    Given the user scrolls to the doctors section
    Then doctor cards are displayed in a grid
    And each card shows a photo, name, and specialty

### Feature: Book Appointment Section
  Scenario: Display appointment form
    Given the user scrolls to the appointment section
    Then a booking form is visible
    And it contains fields for name, email, phone, date, department, and message
    And a submit button is present

### Feature: Footer
  Scenario: Display footer content
    Given the user scrolls to the footer
    Then the footer shows the logo and navigation links
    And contact information is displayed
    And a copyright notice is present
    And a "Component Dock" link is included

## Verification Checklist

- [ ] All sections match the original template structure and order
- [ ] Brand blue (#175DFE) is used consistently for navbar and accents
- [ ] Button gradient (#24c0f1 → #4c9afe) is applied to primary CTAs
- [ ] Work Sans font is applied to body text
- [ ] Hero section has blue-tinted overlay on background image
- [ ] Emergency contact bar is present at top
- [ ] Navbar has semi-transparent blue background
- [ ] Department tabs are functional
- [ ] Appointment form has all required fields
- [ ] Footer includes "Component Dock" link
- [ ] No ColorLib references in app code (only in spec and TEMPLATES.md)
- [ ] Placeholder images use picsum.photos with deterministic seeds
- [ ] Responsive design works on mobile/tablet/desktop
