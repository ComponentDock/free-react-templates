# Template: MedCore (Health & Medical)

## Purpose

Recreation of the ColorLib **Medica** template as a React 19 + Vite + Tailwind 4 + TypeScript application.

- **Source slug:** `medica`
- **ColorLib page:** https://colorlib.com/wp/template/medica/
- **Live preview:** https://preview.colorlib.com/theme/medica/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/medica-free-template.jpg
- **New name:** `medcore` (apps/medcore, @free-react-templates/medcore)
- **Stack:** Vite (latest), React 19, Tailwind CSS 4, TypeScript (strict)
- **Deploy target:** https://medcore.free.componentdock.com

## Design Tokens

Extracted from the ColorLib Medica preview's `css/core-style.css` and inline styles.

| Token | Value | Usage |
|-------|-------|-------|
| brand-primary | `#2f88fd` | Buttons, links, accents, hover states |
| gradient-start | `#3de6fa` | Gradient cyan start (top header, services overlay, CTA bar) |
| gradient-end | `#243eff` | Gradient blue end (top header, services overlay, CTA bar) |
| dark-navy | `#172538` | Top header bar background |
| card-light-blue | `#e0f3f9` | About Us card backgrounds |
| section-bg-gray | `#f2f4f8` | Light section backgrounds (contact info, doctors, partners, footer) |
| text-dark | `#262626` | Primary text |
| text-secondary | `#7f7e7e` | Secondary/muted text |
| text-tertiary | `#5f5f5f` | Tertiary text |
| font-family | `Montserrat, sans-serif` | All text |
| button-radius | `50%` (pill) | CTA buttons |
| card-radius | `0` | Cards have sharp corners |
| gradient-overlay-opacity | `0.8` | Background image overlays on services and testimonials |

### Gradient Background

The signature gradient is applied to the top header bar, services section overlay, testimonials overlay, and CTA counter bar:

```css
background: linear-gradient(to right, #3de6fa, #243eff);
```

### Button Variants

- **Primary (`.medica-btn`):** solid `#2f88fd` background, white text, pill shape, `border-radius: 50%`, `border: 2px solid #2f88fd`
- **Outline (`.btn-2`):** transparent background, `#2f88fd` text, same pill shape
- **Hover:** swaps fill/text colors (solid becomes outline, outline becomes solid)

## Section Order (1:1 with source)

1. **Header** — Top bar (gradient background, social icons, utility nav) + sticky main nav (logo, menu items with dropdown, "Make an Appointment" CTA button)
2. **Hero** — Full-width background image with carousel, large heading "We provide top medical services", subtitle "More than 30 professionals", two CTA buttons ("Make an Appointment" solid, "Read More" outline)
3. **Contact Info** — 3-column row: hours (clock icon), phone/email (envelope icon), address (map pin icon). Light gray background.
4. **About Us** — Two parts: (a) 3-card row: Emergency card (dark bg, phone number), Doctors card (light bg, description), Appointment card (blue gradient, form with name/phone/email + submit). (b) Welcome text section with image: heading "Welcome to Medica Health Center", description, specialty list (8 items), "Read More" button, doctor illustration on right.
5. **Services** — 6 services in 3-column grid (Ambulatory Care, Laboratory, Ambulance Service, Radiology, Emergency Care, Pharmacy). Each has icon + title + description. Background image with gradient overlay. White heading "Our Services". "See All Services" CTA button at bottom.
6. **Doctors** — 4 doctor cards in a row. Each: photo, name, specialty, social links (Twitter, Facebook, LinkedIn). White background. Heading "Our Doctors" with subtitle.
7. **Testimonials** — Carousel of quotes with background image + dark overlay. Each slide: quote text, author photo, author name, "Pacient" label. White heading "Clients Testimonials".
8. **CTA / Counters** — 4 stats on gradient background: "8723 Pacients since opening", "120 Specialist Doctors", "12 Years of Experience", "83 Pro Bono Works". Counter animation.
9. **Appointment** — Split layout: left side has detailed appointment form (Name, Speciality dropdown, Phone, Doctor dropdown, Email, Date picker, Submit button) on blue gradient card; right side has medical illustration.
10. **Partners** — 5 partner logos in a flex row, light gray background.
11. **Footer** — 4-column layout: (a) Logo + description + social icons, (b) Latest News (3 blog post widgets with thumbnail), (c) Useful Links list, (d) Contact info (hours, address, phone/email). Bottom bar: copyright + nav links.

## Gherkin Requirements

### Feature: Header

```gherkin
Scenario: Top header displays gradient background
  Given the user visits the page
  Then the top header bar has a cyan-to-blue gradient background

Scenario: Top header shows social icons
  Given the user visits the page
  Then the top header displays 6 social media icons (Pinterest, Facebook, Twitter, Dribbble, Behance, LinkedIn)

Scenario: Top header shows utility navigation
  Given the user visits the page
  Then the top header displays links for FAQ, Book, Appointment, Contacts, and an email

Scenario: Main navigation is sticky
  Given the user scrolls down the page
  Then the main navigation bar sticks to the top of the viewport

Scenario: Main navigation shows logo and menu items
  Given the user visits the page
  Then the main nav displays a logo, Home, Pages (dropdown), About Us, Services, News, Contact links
  And a "Make an Appointment" CTA button
```

### Feature: Hero

```gherkin
Scenario: Hero displays background image with content
  Given the user visits the page
  Then the hero section shows a full-width background image
  And a heading "We provide top medical services"
  And a subtitle "More than 30 professionals"

Scenario: Hero shows two CTA buttons
  Given the user visits the page
  Then the hero displays a solid "Make an Appointment" button
  And an outline "Read More" button
```

### Feature: Contact Info

```gherkin
Scenario: Contact info shows 3 items in a row
  Given the user visits the page
  Then the contact info section displays 3 items: hours, phone/email, address
  And each item has an icon and text
```

### Feature: About Us

```gherkin
Scenario: About Us displays 3 cards
  Given the user visits the page
  Then the About Us section shows an Emergency card with phone number
  And a Doctors card with description
  And an Appointment card with a mini form (name, phone, email)

Scenario: About Us shows welcome text and image
  Given the user visits the page
  Then the About Us section displays "Welcome to Medica Health Center" heading
  And a description paragraph
  And a list of 8 medical specialties
  And a "Read More" outline button
  And a doctor illustration on the right
```

### Feature: Services

```gherkin
Scenario: Services displays 6 service cards
  Given the user visits the page
  Then the services section shows 6 services in a 3-column grid
  And each service has an icon, title, and description
  And the section has a background image with gradient overlay

Scenario: Services shows heading and CTA
  Given the user visits the page
  Then the services section displays "Our Services" heading in white
  And a "See All Services" button at the bottom
```

### Feature: Doctors

```gherkin
Scenario: Doctors displays 4 doctor cards
  Given the user visits the page
  Then the doctors section shows 4 cards in a row
  And each card has a photo, name, specialty, and social links

Scenario: Doctors section has heading
  Given the user visits the page
  Then the doctors section displays "Our Doctors" heading with subtitle
```

### Feature: Testimonials

```gherkin
Scenario: Testimonials carousel with background
  Given the user visits the page
  Then the testimonials section has a background image with dark overlay
  And displays "Clients Testimonials" heading in white

Scenario: Testimonial slides show quote and author
  Given the user views a testimonial slide
  Then it shows a quoted text, author photo, author name, and "Pacient" label
```

### Feature: CTA / Counters

```gherkin
Scenario: Counter bar shows 4 statistics
  Given the user visits the page
  Then the CTA section displays on a gradient background
  And shows 4 counters: patients, doctors, years of experience, pro bono works
```

### Feature: Appointment

```gherkin
Scenario: Appointment form on left with illustration on right
  Given the user visits the page
  Then the appointment section shows a form on the left side
  And the form has fields: Name, Speciality (dropdown), Phone, Doctor (dropdown), Email, Date
  And a "Make an Appointment" submit button
  And a medical illustration on the right side
```

### Feature: Partners

```gherkin
Scenario: Partners shows 5 logos
  Given the user visits the page
  Then the partners section displays 5 partner logos in a horizontal row
```

### Feature: Footer

```gherkin
Scenario: Footer has 4-column layout
  Given the user visits the page
  Then the footer shows: logo + social icons, Latest News (3 posts), Useful Links, Contact info

Scenario: Footer bottom bar
  Given the user visits the page
  Then the footer bottom bar shows copyright text and navigation links
  And includes a link to Component Dock
```

## Verification Checklist

- [ ] All 11 sections present in correct order
- [ ] Brand gradient (#3de6fa → #243eff) applied to top header, services overlay, testimonials overlay, CTA bar
- [ ] Primary button color #2f88fd with pill shape (border-radius: 50%)
- [ ] Font family Montserrat loaded via Google Fonts
- [ ] Sharp card corners (border-radius: 0)
- [ ] Light gray #f2f4f8 backgrounds on contact info, doctors, partners, footer sections
- [ ] Dark navy #172538 top header bar
- [ ] 6 services in 3-column grid with gradient overlay on background image
- [ ] 4 doctor cards with photos and social links
- [ ] Testimonials carousel with dark overlay on background image
- [ ] 4 counter stats on gradient background
- [ ] Appointment form with all fields (name, speciality, phone, doctor, email, date)
- [ ] Partners row with 5 logos
- [ ] Footer with 4 columns + bottom bar
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
- [ ] CNAME set to medcore.free.componentdock.com
- [ ] Homepage set to https://medcore.free.componentdock.com
