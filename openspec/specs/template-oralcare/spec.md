# Template: Oralcare (Dental Clinic)
<!-- prep-status: shipped-as=odonto -->
> **SHIPPED-UNDER** — the ColorLib `toothcare` design this prep describes already
> ships as `apps/odonto` (<https://odonto.free.componentdock.com>).
> Do not scaffold `apps/oralcare`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-odonto/spec.md`.

- **Design Category**: Medical / Dental Clinic / Healthcare
- **ColorLib Source**: [Toothcare](https://colorlib.com/wp/template/toothcare/)
- **Live Preview URL**: https://preview.colorlib.com/theme/toothcare/
- **Preview Screenshot**: ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/toothcare-free-template.jpg)
- **New App Name**: `oralcare`
- **Package Name**: `@free-react-templates/oralcare`

## Purpose

Oralcare is a professional React 19 + Tailwind CSS 4 dental clinic template recreating ColorLib's Toothcare design. It features a top bar with contact details, a sticky navbar with navigation links, a hero slider banner with dental care highlights and appointment CTAs, a quick appointment booking form section, an informational stats/features counter banner, comprehensive dental services grid, featured qualified dentists list, testimonials carousel, patient success stories, and a footer with navigation and branded Component Dock attribution.

## Design Tokens

Derived from ColorLib Toothcare stylesheet (`/css/style.css`):

- **Primary Brand Color**: Cyan / Teal `#00bcd4` (hover `#0b5ed7`, gradient `#00bcd4` to `#65c4cf`)
- **Secondary / Dark Color**: `#111111` / `#212529` (Dark text and neutral blocks)
- **Background Colors**: Pure white `#ffffff`, Light grey `#f8f8f8` / `#f0f0f0` / `#ebebeb`
- **Typography**: `"Roboto", Arial, sans-serif`
- **Button Radius**: `0.25rem` (rounded buttons)
- **Shadows**: Subtle box-shadows on cards and form elements (`0 0.5rem 1rem rgba(0, 0, 0, 0.075)`)

## Requirements

### Feature 1: Top Bar & Navbar

As a visitor, I want to see clinic contact hours, phone number, location, and navigation links so I can easily reach out or navigate the site.

#### Scenario: Display contact info and navbar

- **GIVEN** the user loads the Oralcare template home page
- **THEN** the top bar should display working hours ("Monday - Friday 8:00AM-8:00PM"), phone ("+2 392 3929 210"), and location ("San Francisco, CA")
- **AND** the main navigation bar should display links: Home, Dentist, About, Services, Pricing, Blog, Contact, and "Make An Appointment" CTA button

### Feature 2: Hero Slider Section

As a visitor, I want to see engaging banner slides highlighting dental care services and clear call-to-action buttons.

#### Scenario: Hero banner display and CTA

- **GIVEN** the user views the hero banner section
- **THEN** it should display the headline "Dentist Services that You Can Trust"
- **AND** provide buttons for "See Our Services" and "Make An Appointment"

### Feature 3: Appointment Booking Form Section

As a patient, I want to book an appointment directly by submitting my details, preferred date, time, and doctor.

#### Scenario: Fill and submit appointment form

- **GIVEN** the user navigates to the appointment booking section
- **THEN** fields for Full Name, Email Address, Phone Number, Appointment Date, Appointment Time, Doctor selection (e.g., Dr. Lloyd Wilson), and Message should be present
- **WHEN** the user fills valid details and submits the form
- **THEN** a success confirmation message should be displayed

### Feature 4: Statistics Counter Banner

As a visitor, I want to see clinic milestones like happy patients and years of experience.

#### Scenario: Display stats

- **GIVEN** the user views the statistics section
- **THEN** it should display counters for Happy Patients (3000+), Performed Treatments (2200+), and Years of Experience (24+)

### Feature 5: Services Grid

As a patient, I want to browse available dental treatments and procedures.

#### Scenario: Display dental services

- **GIVEN** the user views the services section
- **THEN** cards for Tooth Protection, Dental Implants, Dental Care, Teeth Whitening, Tooth Removal, and Tooth Inspection should be shown with icons and descriptions

### Feature 6: Qualified Doctors

As a patient, I want to meet the professional dental team.

#### Scenario: Display dentist list

- **GIVEN** the user scrolls to the Our Doctors section
- **THEN** cards for Dr. Lloyd Wilson, Dr. Rachel Parker, Dr. Ian Smith, and Dr. Alicia Henderson should be displayed with photos, titles, and short bios

### Feature 7: Testimonials & Patient Success Stories

As a visitor, I want to read feedback and reviews from happy patients.

#### Scenario: Display testimonials and stories

- **GIVEN** the user views the testimonial and stories section
- **THEN** patient reviews and treatment result highlights should be visible

### Feature 8: Footer

As a visitor, I want to see footer links and the required Component Dock attribution.

#### Scenario: Footer attribution

- **GIVEN** the user scrolls to the footer
- **THEN** it should display copyright, quick links, and a prominent link to `https://www.componentdock.com/` ("Component Dock")

## Verification checklist

- [ ] App workspace `@free-react-templates/oralcare` created at `apps/oralcare/`
- [ ] TypeScript strict typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest tests pass with **100% coverage** (`npm run test:coverage`)
- [ ] Build succeeds (`npm run build`)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `public/CNAME` contains `oralcare.free.componentdock.com`
- [ ] Workspace registered in root `package.json` and package-lock.json
- [ ] Top Bar & Navbar — the top bar should display working hours ("Monday - Friday 8:00AM-8:00PM"), phone ("+2 392 3929 210"), and location ("San Francisco, CA")
- [ ] Hero Slider Section — it should display the headline "Dentist Services that You Can Trust"
- [ ] Appointment Booking Form Section — fields for Full Name, Email Address, Phone Number, Appointment Date, Appointment Time, Doctor selection (e.g., Dr. Lloyd Wilson), and Message should be present
- [ ] Statistics Counter Banner — it should display counters for Happy Patients (3000+), Performed Treatments (2200+), and Years of Experience (24+)
- [ ] Services Grid — cards for Tooth Protection, Dental Implants, Dental Care, Teeth Whitening, Tooth Removal, and Tooth Inspection should be shown with icons and descriptions
- [ ] Qualified Doctors — cards for Dr. Lloyd Wilson, Dr. Rachel Parker, Dr. Ian Smith, and Dr. Alicia Henderson should be displayed with photos, titles, and short bios
- [ ] Testimonials & Patient Success Stories — patient reviews and treatment result highlights should be visible
