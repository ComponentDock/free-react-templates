# Template: Wellpoint (Health & Medical)

## Purpose

Wellpoint is a full-page HEALTH & MEDICAL website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Medica" free template (source:
https://colorlib.com/wp/template/medica/), built under a DIFFERENT name
(**Wellpoint**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

**Live preview analyzed:** https://preview.colorlib.com/theme/medica/

The original is a Bootstrap 4 medical template with:
- A gradient-background top header bar with social icons and utility nav links
- A sticky white navbar with logo and dropdown Pages menu
- A full-width hero carousel (3 identical slides) with background image,
  heading "We provide top medical services", and two CTA buttons
- A 3-column contact info strip (Hours, Phone/Emergency, Location)
- An About Us section with 3 feature cards (Emergency, Doctors, Appointment
  form) and a welcome text block with specialties list + doctor illustration
- A Services section with 6 service cards on a gradient-overlay background image
- A Doctors team section with profile cards
- A Testimonials carousel on a background image with dark overlay
- A Stats/CTA bar with 4 animated counters on gradient background
- A Book Appointment form section with contact info
- A 4-column footer with social links, latest news, quick links, and contact

## Design Tokens

Extracted from `css/core-style.css` and `style.css` at
https://preview.colorlib.com/theme/medica/

| Token              | Value                                                  |
| ------------------ | ------------------------------------------------------ |
| Font family        | `'Montserrat', sans-serif` (Google Fonts)              |
| Primary blue       | `#2f88fd` (buttons, accents, borders)                  |
| Gradient start     | `#3de6fa` (cyan)                                       |
| Gradient end       | `#243eff` (bright blue)                                |
| Gradient combined  | `linear-gradient(to right, #3de6fa, #243eff)`          |
| Dark navy          | `#172538` (top header bar, card backgrounds)           |
| Light blue tint    | `#e0f3f9` (subtle section backgrounds)                 |
| Page background    | `#f2f4f8` (light gray-blue)                            |
| Text dark          | `#262626` (headings, body)                             |
| Text medium        | `#5f5f5f` (secondary text)                             |
| Text light         | `#7f7e7e` (muted text)                                 |
| Button radius      | `0` (sharp/square corners, no border-radius)           |
| Button primary bg  | `#2f88fd`                                              |
| Button primary text| `#ffffff`                                              |
| Button hover       | darker shade with `box-shadow: 0 2px 6px rgba(0,0,0,0.3)` |
| Section padding    | `100px 0` (standard), `50px 0 0` (CTA bar)            |
| Section icons      | Small PNG hospital/medical icons above headings         |

## Visual Design Notes (from preview + CSS analysis)

- **Aesthetic:** Clean, professional medical/healthcare feel. White and light
  gray backgrounds dominate; the blue gradient provides accent color on the
  services section overlay and CTA/stats bar.
- **Layout:** Single-column sections with 12-column Bootstrap grid. Services
  use 3-col (col-lg-4). Cards are white with subtle shadows.
- **Hero:** Full-viewport background image with dark overlay; white text and
  white/blue CTA buttons. Carousel indicators at bottom.
- **Buttons:** Square corners (no radius), solid blue fill, white text.
  Variants: outline (#2f88fd border on white bg), and inverted (dark bg with
  blue text).
- **Services section:** Background image with blue-cyan gradient overlay
  (`.gradient-background-overlay:after`), white text and icons.
- **Testimonials:** Background image with dark overlay (`.background-overlay`),
  white centered text, author avatars.
- **Stats bar:** Gradient background (cyan→blue), white text, 4-column layout.
- **Footer:** Light background (`#f2f4f8`), 4-column layout, social icons,
  latest news thumbnails, quick links, contact info.

## Gherkin Requirements

### Feature: Wellpoint — Health & Medical Website Template

#### Scenario: Navbar renders with correct structure
- GIVEN the user visits the Wellpoint page
- WHEN the navbar loads
- THEN it displays the logo on the left
- AND it shows navigation links: Home, About Us, Services, News, Contact
- AND the Home link has a Pages dropdown with additional items
- AND a search toggle icon is visible on the right
- AND the navbar becomes sticky on scroll

#### Scenario: Hero section displays welcome content
- GIVEN the user is on the Wellpoint page
- WHEN the hero section is visible
- THEN it shows a background image with a dark gradient overlay
- AND it displays the heading "We provide top medical services"
- AND it shows the subheading "More than 30 professionals"
- AND it shows two CTA buttons: "Make an Appointment" and "Read More"
- AND the "Make an Appointment" button is solid blue (#2f88fd)
- AND the "Read More" button has an outline/secondary style

#### Scenario: Contact info strip shows three items
- GIVEN the user scrolls past the hero
- WHEN the contact info strip is visible
- THEN it shows three columns: Hours, Emergency Phone, and Location
- AND each column has an icon, title, and descriptive text
- AND the strip has a light background (#f2f4f8)

#### Scenario: About Us section shows feature cards and welcome text
- GIVEN the user scrolls to the About Us section
- WHEN the section loads
- THEN three cards appear in a row: Emergency, Doctors, Book Appointment
- AND each card has an icon, heading, description, and "Read More" link
- AND the Book Appointment card contains a form (Name, Phone, Email + submit)
- AND below the cards, a two-column layout shows welcome text on the left
  with a list of medical specialties
- AND a doctor illustration appears on the right
- AND a "Read More" button (solid blue) is below the specialties list

#### Scenario: Services section displays six service cards
- GIVEN the user scrolls to the Services section
- WHEN the section is visible
- THEN it shows a heading "Our Services" with a medical icon
- AND six service cards are displayed in a 3-column grid
- AND each card shows: icon, service name, and short description
- AND the services are: Ambulatory Care, Laboratory, Ambulance Service,
  Radiology, Emergency Care, Pharmacy
- AND the section has a background image with a blue-cyan gradient overlay
- AND text and icons are white on the overlay
- AND a "See All Services" button appears below the grid

#### Scenario: Doctors team section shows team members
- GIVEN the user scrolls to the Doctors section
- WHEN the section loads
- THEN it shows a heading "Our Doctors" with a medical icon
- AND a brief subtitle below the heading
- AND team member cards are displayed
- AND each card shows a photo, name, and specialty

#### Scenario: Testimonials carousel displays patient quotes
- GIVEN the user scrolls to the Testimonials section
- WHEN the section loads
- THEN it shows a heading "Clients Testimonials" with an icon
- AND a carousel of testimonial slides appears
- AND each slide shows a quoted text and author info (avatar, name, role)
- AND the section has a background image with a dark overlay
- AND all text is white

#### Scenario: Stats/CTA bar shows four counters
- GIVEN the user scrolls past the testimonials
- WHEN the stats bar is visible
- THEN it shows four counters in a row: Patients, Specialist Doctors,
  Years of Experience, Pro Bono Works
- AND each counter shows a number and a label
- AND the section has a gradient background (cyan to blue)
- AND text is white

#### Scenario: Book Appointment form collects patient information
- GIVEN the user scrolls to the Appointment section
- WHEN the form section is visible
- THEN it shows a "Book an appointment" heading
- AND a form with fields: Name, Speciality (dropdown), Phone, Doctor
  (dropdown), Email, Date
- AND a "Make an Appointment" submit button (solid blue)
- AND contact info is displayed alongside the form

#### Scenario: Footer contains four columns and copyright
- GIVEN the user scrolls to the footer
- WHEN the footer loads
- THEN it shows four columns: Logo + description + social icons, Latest
  News (thumbnail list), Quick Links, and Contact Info
- AND social icons include Pinterest, Facebook, Twitter, Dribbble, Behance,
  LinkedIn
- AND a bottom bar shows copyright text
- AND the footer links to Component Dock (`https://www.componentdock.com/`)

#### Scenario: Top header bar shows social icons and utility links
- GIVEN the user views the top of the page
- WHEN the top header is visible
- THEN it shows social media icons (Pinterest, Facebook, Twitter, Dribbble,
  Behance, LinkedIn)
- AND it shows utility links: FAQ, Book, Appointment, Contacts, email
- AND the bar has a gradient background (cyan to blue)

## Verification Checklist

- [ ] All sections from the original are present in the correct order
- [ ] Design tokens match: Montserrat font, #2f88fd primary blue, gradient
      colors, #172538 dark navy, #f2f4f8 background
- [ ] Buttons have square corners (border-radius: 0)
- [ ] Services section has gradient overlay on background image
- [ ] Testimonials section has dark overlay on background image
- [ ] Stats/CTA bar has gradient background
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Template name is "Wellpoint" (not "Medica")
- [ ] App package is `@free-react-templates/wellpoint`
- [ ] Images use `https://picsum.photos/seed/wellpoint-<n>/<w>/<h>` placeholders
- [ ] Google Fonts loaded via `<link>` in `index.html`
- [ ] Icons from `lucide-react`
- [ ] Tests pass with 100% coverage
- [ ] `public/CNAME` contains `wellpoint.free.componentdock.com`
- [ ] `package.json` homepage is `https://wellpoint.free.componentdock.com`
