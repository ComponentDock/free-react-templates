# Template: Cura (Healthcare Template)

## Purpose

Cura is a single-page medical / healthcare clinic landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Vitality" website template design
(source: https://colorlib.com/wp/template/vitality/), built under a DIFFERENT
name (Cura — Latin for "care", evoking patient-centered medical care, fitting
the clinic's trust-first positioning) per the monorepo naming mandate, with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-09): a stale prep existed at
> `openspec/specs/template-vitality/` (plus `docs/templates/vitality/`)
> using a FORBIDDEN source-derived name ("Vitality" IS the ColorLib name —
> not an original name); both were deleted and replaced by this fresh prep
> (new name Cura), matching the Serenity→Hush / The Hustle Hour→Airwave /
> Solarshift→Helios / Swiftmove→Haulio / The Grand Azure→Sapphire
> precedent.

## Design reference (replication findings)

- **Original:** ColorLib "Vitality" — medical / healthcare clinic landing
  template (categories: Astro, Health & Fitness, Tailwind CSS; released
  March 2026, Author: ColorLib, License: CC BY 3.0, Credits: Images from
  Unsplash; built with Astro 6 + Tailwind CSS 4.x). Demo internal brand:
  "MediCare / HEALTHCARE CENTER"; the recreation brands itself **Cura**.
- **Preview DOM analyzed:** the official preview
  (`https://preview.colorlib.com/theme/vitality/`) returns 404; the
  ColorLib preview portal hub link is `https://preview.colorlib.com/#vitality`
  (JS hub, does not expose a direct demo URL for this slug).
  `https://vitality-colorlib.pages.dev/` → NXDOMAIN (the pages.dev demo does
  not exist for this slug; verified against
  `preview.colorlib.com/assets/js/products.js` which no longer lists it).
  The Wayback Machine has no archived snapshot of the preview. **The preview
  is UNREACHABLE — per docs/replication.md the TEMPLATES.md screenshot is
  the sole reference** (`vitality-template-1770211473540.jpg`, 2400×1892,
  fetched + visually analyzed in three bands) **plus the ColorLib product
  page's official feature list** (paraphrased below), which is authoritative
  for the section inventory.
- **Visual design (screenshot):** clean, trustworthy medical landing in
  white + blues + a pink/red emergency accent + green success accent. Dark
  blue top info bar; white sticky navbar; light hero (near-white with a
  subtle faint-blue dot/dash pattern) with a pill trust badge, a dark
  headline whose second line is blue, a blue primary CTA + pink/red outlined
  emergency CTA, and a doctor-photo column with two floating cards (24/7
  Emergency Care, 25+ Years Experience). Below the hero: a pale-mint strip
  with 8 carousel dots (content slider), then a white Services section
  (pill badge "Our Services" + H2 "Our Medical Services" + description;
  card grid below the screenshot crop). Rounded corners everywhere
  (`rounded-lg`–`rounded-2xl` pills/cards/buttons), flat design with subtle
  shadows, star-rating trust row, doctor-avatar row.
- **Section order (1:1; screenshot-confirmed through Services, remainder
  inferred from nav links + ColorLib feature list):**
  1. Top info bar (dark blue strip): phone "(555) 123-4567" + hours
     "Mon-Fri: 8:00 AM - 6:00 PM" on the left; "Emergency: (555) 911-0000"
     with warning icon on the right.
  2. Sticky navbar (white): logo = medical-cross icon + "Cura" (source
     "MediCare") bold + small uppercase grey tagline "HEALTHCARE CENTER"
     below; links Home (active), Services, Doctors, About, Contact; dark-mode
     toggle (moon icon); "Book Appointment" primary button; mobile menu
     (aria-expanded).
  3. Hero (light bg, faint blue dot pattern): pill badge with clock icon
     "Trusted by 100,000+ Patients"; H1 "Your Health Is Our Top Priority"
     (second line "Top Priority" in blue); subtext "Experience compassionate,
     patient-centered healthcare with our team of expert physicians and
     state-of-the-art facilities."; CTAs "Book Appointment" (solid blue,
     arrow) + "Emergency Line" (outlined pink/red, phone icon); trust row:
     3 doctor avatars + "50+ Doctors Board Certified" + 5 yellow stars +
     "4.9/5 Rating" + "2,500+ Reviews"; right column: doctor-with-patient
     photo + floating card top-right (clock icon in light-blue circle,
     "24/7" bold + "Emergency Care") + floating card bottom-left (green
     checkmark circle, "25+" bold + "Years Experience").
  4. Slider strip (pale mint `#f0fdf4`-ish band): 8 grey carousel dots —
     a content carousel sits between hero and services; the screenshot only
     reveals the dots rail. FIDELITY NOTE: content of the slider is not
     visible in the screenshot; ColorLib's feature list ("Patient
     testimonials and success stories", "Insurance and payment information")
     suggests a testimonial/insurance-style carousel — implement a dot-
     navigated carousel (3–4 slides of short patient-story or
     insurance/partner cards) and note the assumption in the PR.
  5. Services (`#services`, white): pill badge (pale blue bg, dark blue
     text) "Our Services"; H2 "Our Medical Services"; description
     "Comprehensive healthcare services delivered by expert physicians using
     the latest…"; service-card grid (6 cards, icon + title + text; per the
     ColorLib feature list: Online appointment booking with department
     selection · Doctor profiles with credentials and specializations ·
     Medical services with detailed descriptions · Emergency contact section
     with hotline · Patient testimonials and success stories · Insurance and
     payment information).
  6. Doctors (`#doctors`): "Doctor profiles with credentials and
     specializations" — doctor cards (photo, name, specialty, credentials/
     board certification).
  7. Appointment booking: "Online appointment booking with department
     selection" — booking form (name, email, phone, department select,
     preferred date, message) with inline validation + success state.
  8. Emergency contact: "Emergency contact section with hotline" — dark
     blue band with hotline number "(555) 911-0000" + "24/7 Emergency Care"
     messaging + CTA.
  9. Testimonials: "Patient testimonials and success stories" — quote cards
     (patient name, treatment/story, star rating).
  10. Insurance & payments: "Insurance and payment information" — accepted
      insurance/payment strip or cards.
  11. About (`#about`): clinic story + stats row (25+ Years Experience,
      50+ Doctors Board Certified, 100,000+ Patients, 4.9/5 Rating) — the
      hero's trust indicators expand into this section.
  12. Contact (`#contact`): contact form (name, email, phone, message) +
      contact info (phone, hours, address) + emergency line.
  13. Footer: brand blurb, quick links (Services, Doctors, About, Contact),
      hours + phone columns, bottom bar "© 2026 … All rights reserved." +
      Privacy Policy / Terms of Service.
  - Extras: skip-to-content link, back-to-top floating button, dark-mode
    toggle persisted to localStorage, mobile menu, scroll-reveal
    (`data-animate="fade-in-up"`), cookie banner (repo standard).
- **Design tokens extracted from the screenshot (approximations — preview
  unreachable; implementer should re-verify against the live demo if it
  becomes reachable):**
  - Brand **primary = blue** (Tailwind blue scale): 50 `#eff6ff`, 100
    `#dbeafe`, 200 `#bfdbfe`, 300 `#93c5fd`, 400 `#60a5fa`, 500 `#3b82f6`
    (headline accent "Top Priority"), 600 `#2563eb` (buttons, logo, active
    link), 700 `#1d4ed8`, 800 `#1e40af` (top info bar, dark bands), 900
    `#1e3a8a`.
  - **Emergency accent = pink/red** (rose scale): 500 `#f43f5e` (outlined
    "Emergency Line" button border + text), 600 `#e11d48`.
  - **Success accent = green**: 500 `#10b981` (25+ badge checkmark circle,
    emergency hotline accents).
  - **Rating = amber**: 400 `#fbbf24` / 500 `#f59e0b` (5 stars).
  - Neutrals: white; near-black headings `#111827` (gray-900); body grey
    `#6b7280` (gray-500); light grey `#9ca3af` (gray-400); pale hero bg
    near-white `#f9fafb` (gray-50) with faint blue dot pattern; pale mint
    slider band `#f0fdf4` (green-50); pill-badge bg `#dbeafe` (blue-100).
  - Font: **"Inter"** (400/500/600/700, Google Fonts) — clean modern
    sans-serif matching the screenshot; fall back to "Plus Jakarta Sans" if
    the live demo later shows a different family.
  - Buttons: rounded (`rounded-lg`–`rounded-xl`); primary `bg-primary-600
text-white px-6 py-3 font-medium` with hover darkening; outline "Emergency
    Line" = white bg, `border border-accent-500 text-accent-500`, phone
    icon; pills (`rounded-full`) for badges.
  - Cards: `rounded-2xl` with subtle shadow; floating hero cards white
    `rounded-2xl shadow-lg` with circular icon badges (`rounded-full`);
    section rhythm `py-16 lg:py-24`; content max-w-7xl mx-auto px-4/6.
- **Recreation decisions:** photos/avatars → seeded picsum placeholders
  (`picsum.photos/seed/cura-<n>/<w>/<h>`); icons → lucide-react (Phone,
  Clock, Stethoscope, HeartPulse, Calendar, User, Star, ShieldCheck,
  Ambulance, Users, Check, ChevronDown, ChevronLeft, ChevronRight, Menu, X,
  Sun, Moon, ArrowRight, MapPin, Mail, Send, BadgeCheck — verify exports);
  fonts via Google Fonts `<link>` (Inter); repo-standard Navbar (dark-mode
  toggle) + Footer chrome; booking/contact forms = client-side validation
  with inline success messages (no backend); slider = index state + dot
  navigation; FAQ-like accordion only if a Q&A block is added (not in the
  source inventory — do NOT add one); dark mode class-based on
  `document.documentElement`, persisted to localStorage.

Cura lives in `apps/cura` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Top info bar

The system SHALL render a dark blue utility bar above the navbar with phone,
hours, and an emergency hotline.

#### Scenario: Info bar content

- **GIVEN** the Cura page is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL show the phone number "(555) 123-4567" with a
  phone icon and the hours "Mon-Fri: 8:00 AM - 6:00 PM" with a clock icon on
  the left
- **AND** the top bar SHALL show "Emergency: (555) 911-0000" with a warning
  icon on the right
- **AND** the top bar SHALL have a dark blue background

### Requirement: Navigation bar

The system SHALL render a sticky white navigation bar with the site name
"Cura", anchor links to the page's sections, a "Book Appointment" CTA, a
dark-mode toggle, and a mobile menu.

#### Scenario: Navbar content

- **GIVEN** the Cura page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Cura" with a medical-cross
  icon and the tagline "HEALTHCARE CENTER"
- **AND** the navbar SHALL show links to Home, Services, Doctors, About, and
  Contact
- **AND** the navbar SHALL show a blue "Book Appointment" button and a
  dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode
- **AND** the choice SHALL persist across reloads

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a narrow viewport
- **WHEN** the user presses the mobile menu button
- **THEN** the mobile navigation menu SHALL expand and the button SHALL
  reflect the expanded state via `aria-expanded`

### Requirement: Hero section

The system SHALL render a light hero with a trust badge, a blue-accented
headline, a blurb, two CTA buttons, a trust row, and a doctor photo with two
floating cards.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a pill badge with a clock icon reading "Trusted
  by 100,000+ Patients"
- **AND** a level-1 heading "Your Health Is Our Top Priority" whose second
  line ("Top Priority") uses the blue accent treatment
- **AND** the blurb "Experience compassionate, patient-centered healthcare
  with our team of expert physicians and state-of-the-art facilities."

#### Scenario: Hero CTAs

- **GIVEN** the hero is displayed
- **WHEN** the user inspects the hero actions
- **THEN** it SHALL show a solid blue "Book Appointment" button and an
  outlined pink/red "Emergency Line" button with a phone icon

#### Scenario: Trust row

- **GIVEN** the hero is displayed
- **WHEN** the user inspects the trust indicators
- **THEN** it SHALL show three doctor avatars with "50+ Doctors Board
  Certified"
- **AND** five yellow stars with "4.9/5 Rating" and "2,500+ Reviews"

#### Scenario: Floating cards

- **GIVEN** the hero is displayed
- **WHEN** the user inspects the photo column
- **THEN** a floating card SHALL show a clock icon with "24/7" and
  "Emergency Care"
- **AND** a second floating card SHALL show a green checkmark circle with
  "25+" and "Years Experience"

### Requirement: Slider strip

The system SHALL render a pale-mint carousel strip with dot navigation
between the hero and the Services section.

#### Scenario: Carousel navigation

- **GIVEN** the slider strip is displayed
- **WHEN** the page loads
- **THEN** the strip SHALL show one slide (patient-story or insurance-style
  card content) with a row of dot indicators beneath it
- **WHEN** the user activates a dot indicator
- **THEN** the visible slide SHALL change to match the selected dot

### Requirement: Services section

The system SHALL render a Services section with a badge, heading,
description, and six service cards.

#### Scenario: Section header

- **GIVEN** the page is rendered
- **WHEN** the Services section is displayed
- **THEN** it SHALL contain a pale-blue pill badge "Our Services"
- **AND** a heading "Our Medical Services"
- **AND** a description "Comprehensive healthcare services delivered by
  expert physicians using the latest…"

#### Scenario: Service cards

- **GIVEN** the Services section is displayed
- **WHEN** the user inspects the card grid
- **THEN** it SHALL show six service cards, each with an icon, a title, and
  a short description
- **AND** the cards SHALL cover online appointment booking with department
  selection, doctor profiles with credentials, medical services with
  detailed descriptions, emergency contact with hotline, patient
  testimonials and success stories, and insurance and payment information

### Requirement: Doctors section

The system SHALL render a Doctors section with doctor profile cards.

#### Scenario: Doctor cards

- **GIVEN** the page is rendered
- **WHEN** the Doctors section is displayed
- **THEN** it SHALL contain a heading naming the section (e.g. "Meet Our
  Doctors")
- **AND** it SHALL show at least three doctor cards, each with a photo, a
  name, a specialty, and credentials/specializations (e.g. board
  certification line)

### Requirement: Appointment booking

The system SHALL render an appointment booking form with department
selection and inline validation.

#### Scenario: Booking form fields

- **GIVEN** the page is rendered
- **WHEN** the booking section is displayed
- **THEN** the form SHALL include fields for name, email, phone, a
  department select, a preferred date, and a message
- **AND** a "Book Appointment" submit button

#### Scenario: Booking validation

- **GIVEN** the booking form is displayed
- **WHEN** the user submits with an invalid or missing email, name, or
  department
- **THEN** the form SHALL show a per-field error and SHALL NOT submit

#### Scenario: Booking success

- **GIVEN** the booking form is displayed
- **WHEN** the user submits a valid booking
- **THEN** the form SHALL show a success confirmation

### Requirement: Emergency contact section

The system SHALL render an emergency contact band with a hotline.

#### Scenario: Emergency band content

- **GIVEN** the page is rendered
- **WHEN** the emergency section is displayed
- **THEN** it SHALL show "24/7 Emergency Care" messaging and the hotline
  number "(555) 911-0000"
- **AND** it SHALL include a call CTA button

### Requirement: Testimonials section

The system SHALL render a patient testimonials section with quote cards.

#### Scenario: Testimonial cards

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading (e.g. "What Our Patients Say")
- **AND** it SHALL show at least three testimonial cards, each with a quote,
  a patient name, and a star rating
- **AND** all quotes SHALL reference the Cura brand consistently

### Requirement: Insurance and payment section

The system SHALL render an insurance and payment information section.

#### Scenario: Insurance content

- **GIVEN** the page is rendered
- **WHEN** the insurance section is displayed
- **THEN** it SHALL show accepted insurance / payment information (e.g.
  insurance plan names or payment methods as a strip or cards)
- **AND** it SHALL include a short explanatory line about billing and
  insurance support

### Requirement: About section

The system SHALL render an About section with a clinic story and a stats
row.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the About section is displayed
- **THEN** it SHALL contain a heading (e.g. "About Cura")
- **AND** a short clinic-story paragraph
- **AND** a stats row with at least the metrics 25+ Years Experience, 50+
  Doctors Board Certified, 100,000+ Patients, and 4.9/5 Rating

### Requirement: Contact section

The system SHALL render a contact section with a message form and contact
details.

#### Scenario: Contact form

- **GIVEN** the page is rendered
- **WHEN** the Contact section is displayed
- **THEN** it SHALL show Name, Email, Phone, and Message fields with a
  "Send Message" button
- **AND** it SHALL show contact details including phone, hours, and address

#### Scenario: Form validation

- **GIVEN** the contact form is displayed
- **WHEN** the user submits with an invalid or missing email
- **THEN** the form SHALL show a per-field error and SHALL NOT submit

### Requirement: Footer

The system SHALL render a footer with brand info, quick links, contact
columns, and a bottom bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Cura", a short blurb, and quick
  links to Services, Doctors, About, and Contact
- **AND** it SHALL show hours and phone contact columns
- **AND** the bottom bar SHALL show the copyright line plus Privacy Policy
  and Terms of Service links

### Requirement: Accessibility and extras

The system SHALL include a skip-to-content link, a back-to-top button, and
a cookie banner.

#### Scenario: Skip link

- **GIVEN** the page is rendered
- **WHEN** the page loads
- **THEN** a "Skip to content" link SHALL be the first focusable element

#### Scenario: Back to top

- **GIVEN** the page is scrolled down
- **WHEN** the user presses the back-to-top button
- **THEN** the page SHALL scroll to the top

#### Scenario: Cookie banner

- **GIVEN** the page is rendered without a stored consent choice
- **WHEN** the user presses "Accept All" or "Decline"
- **THEN** the banner SHALL dismiss and the choice SHALL persist for the
  session

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-cura`
- [ ] TDD: tests written before components, one `describe` per component,
      scenario `it` blocks mirroring the spec scenarios
- [ ] `scripts/verify-app.sh cura` passes (typecheck + lint + 100% coverage
      tests + build)
- [ ] Fidelity: section order 1:1 with the screenshot/reference above; brand
      tokens from this spec (`primary` blue scale, `accent` pink/red scale,
      `success` green, Inter font, `rounded-lg`–`rounded-2xl` shapes) in
      `@theme`
- [ ] Preview was UNREACHABLE (404 + NXDOMAIN + no archive) — screenshot +
      ColorLib feature list are the sole references; PR description must
      state this per docs/replication.md
- [ ] Slider content is an inferred carousel (3–4 patient-story or
      insurance-style slides with dots) — assumption noted in PR
- [ ] Images are picsum placeholders (never copied assets); icons from
      lucide-react (brand icons removed)
- [ ] PR description states: source template (ColorLib "Vitality"), preview
      URL, design tokens used, renames (Cura, phone/address placeholders,
      placeholder images), and the unreachable-preview note
- [ ] After merge: `[~]` → `[x]` + surge URL + homepage in TEMPLATES.md,
      `npm run readme:status`
