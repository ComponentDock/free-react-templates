# Template: Dentavibe (Medical & Dental Clinic)

## Purpose

Recreation of ColorLib **Toothcare** (`https://colorlib.com/wp/template/toothcare/`), live preview at `https://preview.colorlib.com/theme/toothcare/`.
Stack: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide React icons.

## Design tokens

- **Primary Brand Color**: Cyan / Teal `#00bcd4` (buttons, icons, accents)
- **Secondary / Hover Color**: `#0a58ca` / `#00cae3`
- **Text Color**: `#212529` (body), `#6c757d` (muted)
- **Backgrounds**: `#ffffff` (pure white), `#f8f9fa` (light gray section backgrounds), `#ebebeb` (top navbar)
- **Font Family**: `'Roboto', sans-serif`
- **Border Radius**: Rounded UI elements (0.25rem to 0.5rem)

## Sections (1:1 with ColorLib Toothcare)

1. **Top Bar & Navbar**: Clinic branding, contact hours, phone, location, navigation links (Home, Dentist, About, Services, Pricing, Blog, Contact), and "Make An Appointment" button.
2. **Hero Slider**: Large banner with dental care headings, tagline, and call-to-action buttons.
3. **Appointment Booking Bar / Form**: Quick appointment booking form with fields for Full Name, Email, Phone, Appointment Date, Time, Doctor selection, and message.
4. **Features Grid**: 4 key highlights (Easy Booking, Team Dentist, Best Price Guarantee, Tooth Protection).
5. **Services Section**: Grid of dental services (Tooth Protection, Dental Implants, Dental Care, Teeth Whitening, Dental Calculus, Tooth Removal, Removal of Tartar, Tooth Inspection).
6. **About / Statistics Counter**: Clinic introduction with animated statistic counters (3000 Patients, 2200 Successful Operations, 24 Hours Care).
7. **Qualified Dentists Section**: Team cards with doctor photos, titles, and social links.
8. **Call to Action Banner**: "Do not wait make an appointment today!" with CTA button.
9. **Testimonials / Happy Customers**: Carousel/slider of patient reviews and feedback.
10. **Treatment Results Gallery**: Portfolio / showcase of dental work and results.
11. **Recent Blog Posts**: Health and dental care tips with comments count and dates.
12. **Pricing & Packages**: 3 pricing tiers with features and "Get Started" buttons.
13. **Footer**: Clinic overview, quick links, recent posts, contact info, and copyright footer with mandatory link to `https://www.componentdock.com/` ("Component Dock").

## Gherkin Requirements & Scenarios

### Feature: Dentavibe Landing Page

As a visitor seeking dental care services
I want to view clinic services, doctors, pricing, and book appointments
So that I can choose the right dental treatment and contact the clinic

Scenario: View Navbar and Hero section
Given the user opens the Dentavibe home page
When the user views the header and hero banner
Then they should see the clinic brand, navigation links, and hero call to action

Scenario: Book an appointment
Given the user fills out the appointment booking form with valid details
When the user submits the appointment form
Then a success message should confirm the appointment request

Scenario: Explore services
Given the user scrolls to the services section
When they view the list of dental services
Then each service card should display an icon, title, and description

Scenario: View qualified dentists
Given the user views the doctors section
When the team cards load
Then each dentist should display their name, role, and social links

Scenario: View pricing packages
Given the user navigates to the pricing section
When the pricing tiers are displayed
Then the user should see package features and call-to-action buttons

Scenario: Footer attribution
Given the user scrolls to the bottom of the page
When viewing the footer
Then they must see the link to Component Dock (`https://www.componentdock.com/`)

## Verification Checklist

- [ ] App folder created at `apps/dentavibe/`
- [ ] Workspace registered in root `package.json` and `package-lock.json`
- [ ] Vite config includes `injectUiSource()`
- [ ] `public/CNAME` has `dentavibe.free.componentdock.com`
- [ ] `package.json` homepage is `https://dentavibe.free.componentdock.com`
- [ ] All sections implemented with matching layout and design tokens
- [ ] 100% test coverage (`npm run test:coverage` passing)
- [ ] Per-app verification passes (`scripts/verify-app.sh dentavibe`)
- [ ] Footer links Component Dock
