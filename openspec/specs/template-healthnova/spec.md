# Template: HealthNova (Medical / Healthcare)

## Purpose

Recreation of ColorLib **Medi** (also called "Medi Plus"), a medical/healthcare
landing page template.

- **Source slug**: `medi`
- **ColorLib URL**: https://colorlib.com/wp/template/medi/
- **Preview URL**: https://preview.colorlib.com/theme/medi/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/medi-plus-free-medical-website-template.jpg
- **Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from the live preview CSS (`https://preview.colorlib.com/theme/medi/css/style.css`)
and DOM analysis.

### Typography
- **Headings / UI**: `"Work Sans", sans-serif` (Google Fonts)
- **Body text**: `"Roboto", sans-serif` (Google Fonts)
- **Heading color**: `#191d34`
- **Body text color**: `#5c5c5c`
- **Label color**: `#7e7e7e`

### Brand colors
| Token | Hex | Usage |
|-------|-----|-------|
| brand-primary | `#009DFF` | Links, hover states, footer link accents, copyright link |
| brand-secondary | `#002278` | Header navbar background, dark navy tone |
| brand-cyan | `rgba(0, 171, 231, 0.8)` | Emergency contact section background |
| brand-dark | `#152538` | Footer background |
| accent-light-blue | `#e0fbff` | Welcome section thumbnail decorative bg |
| white | `#ffffff` | Section backgrounds, card backgrounds |

### Button styles
| Class | Background | Radius | Notes |
|-------|-----------|--------|-------|
| boxed-btn | white bg, text `#296ea4` | 3px | Departments "Learn more", "Make An Appointment" — hover: `#009DFF` bg + white text |
| boxed-btn3 | gradient `#0181f5 → #5db2ff` | 4px | Primary CTA (appointment form submit) — hover: white bg + `#009DFF` text |
| boxed-btn5 | transparent / white text | 4px | Hero "Discover More" — hover: white bg + black text |
| boxed-btn6 | gradient `#24c0f1 → #4c9afe` | 4px | Welcome section "About us" CTA |
| boxed-btn3-white | white bg / white text | 5px | Emergency section "Book Appointment" |

### Section backgrounds
| Section | Background |
|---------|-----------|
| Hero slider | Background image with overlay gradient: `rgba(0,28,100,0.8)` → `rgba(0,53,187,0.3)` |
| Welcome | White (`#ffffff`), decorative `#e0fbff` shape behind thumbnail |
| Departments | Background image (`img/banner/department.jpg`), use `bg-gray-50` fallback |
| Doctors | White |
| Book Appointment | Background image (`img/banner/form_bg.jpg`), use gradient `#002278 → #152538` fallback |
| Quality Health | White |
| Emergency Contact | Split: `rgba(0,171,231,0.8)` cyan-blue (left half), white (right half) |
| Footer | Dark `#152538` |
| Copyright | Dark `#152538`, text `#b8bdc3` |

### Spacing
- Section padding: ~120–200px top/bottom (desktop)
- Container max-width: ~1140px (Bootstrap default)

## Requirements

### Feature: HealthNova Medical Landing Page

Feature: HealthNova — medical/healthcare landing page
As a healthcare provider
I want a professional landing page
So that patients can learn about services and book appointments

Background:
- **GIVEN** the HealthNova landing page is loaded

**── Navbar ──**

#### Scenario: Navbar displays with logo and navigation

- **THEN** the navbar shows a logo on the left
- **AND** the navbar shows navigation links: Home, About, Blog, Pages, Contact
- **AND** the navbar shows a "Book Appointment" button on the right
- **AND** the navbar is sticky on scroll

**── Hero ──**

#### Scenario: Hero section displays with headline and CTA

- **THEN** the hero shows a subtitle "the best medical center"
- **AND** the hero shows the heading "Bringing health to life for the whole family"
- **AND** the hero shows a "Discover More" CTA button
- **AND** the hero has a dark overlay gradient on a background image

**── Welcome ──**

#### Scenario: Welcome section shows clinic intro

- **THEN** the welcome section shows an image on the left
- **AND** the welcome section shows heading "Welcome To Modern Clinic"
- **AND** the welcome section shows three bullet points with check icons
- **AND** the welcome section shows an "About us" CTA button

**── Departments ──**

#### Scenario: Departments section shows tabbed categories

- **THEN** the departments section shows heading "Departments"
- **AND** the departments section shows a "Learn more" link
- **AND** the departments section shows 6 tab buttons: Dentistry, Cardiology, ENT Specialists, Astrology, Neuroanatomy, Blood Screening
- **AND** clicking a tab shows a department image, description, and "Make An Appointment" CTA

**── Doctors ──**

#### Scenario: Doctors section shows team cards

- **THEN** the doctors section shows heading "Our Doctors"
- **AND** the doctors section shows 3 doctor cards
- **AND** each doctor card has a photo, name, specialty, and social media links

**── Book Appointment Form ──**

#### Scenario: Appointment form collects patient info

- **THEN** the appointment section shows heading "Book an Appointment"
- **AND** the form has a doctor select dropdown
- **AND** the form has inputs for name, age, phone, email, date, time
- **AND** the form has a "Make an Appointment" submit button

**── Quality Health ──**

#### Scenario: Quality section shows features

- **THEN** the quality section shows heading "Quality Health"
- **AND** the quality section shows 3 feature cards: Health Consultation, Find Health, Search Doctor
- **AND** each card has an icon, title, and description

**── Emergency Contact ──**

#### Scenario: Emergency section shows contact CTA

- **THEN** the emergency section shows "We are here for you" subtitle
- **AND** the emergency section shows "Book Appointment" heading with CTA button
- **AND** the emergency section shows a phone number "+1-465 4545"
- **AND** the emergency section has a cyan-blue background

**── Footer ──**

#### Scenario: Footer shows links and hours

- **THEN** the footer shows a logo and description
- **AND** the footer shows "Our Departments" link list
- **AND** the footer shows "We're Available" with business hours
- **AND** the footer shows social media icons
- **AND** the footer has a dark background

**── Copyright ──**

#### Scenario: Copyright bar displays

- **THEN** the copyright bar shows the current year
- **AND** the copyright bar shows "Component Dock" link

## Verification checklist

- [ ] All sections from the ColorLib source are present in order
- [ ] Brand colors match extracted tokens (`#009DFF`, `#002278`, `#152538`)
- [ ] Fonts are loaded: Work Sans (headings/UI) + Roboto (body)
- [ ] Button styles match: boxed-btn variants with correct radii (3–5px)
- [ ] Hero has overlay gradient effect
- [ ] Departments has working tab navigation (6 tabs)
- [ ] Appointment form has all fields (doctor select, name, age, phone, email, date, time)
- [ ] Emergency section has split cyan-blue / white background
- [ ] Footer has dark background with 3-column layout
- [ ] Footer links to `https://www.componentdock.com/` ("Component Dock")
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Placeholder images use `https://picsum.photos/seed/healthnova-<n>/<w>/<h>`
- [ ] `public/CNAME` contains `healthnova.free.componentdock.com`
- [ ] `package.json` `"homepage"` is `https://healthnova.free.componentdock.com`
- [ ] Package name is `@free-react-templates/healthnova`
