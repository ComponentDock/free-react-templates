# Template: Molaris (Dental & Healthcare)

## Purpose

Recreation of ColorLib **Toothcare** (`https://colorlib.com/wp/template/toothcare/`), preview URL: `https://preview.colorlib.com/theme/toothcare/`.
Built as a responsive React 19 + Tailwind CSS 4 + TypeScript template with 100% test coverage.

## Design Tokens

- **Brand Colors**: Teal primary (`#00bcd4`), Dark charcoal (`#111111`), Light gray background (`#f8f9fa`), White cards (`#ffffff`).
- **Font Family**: "Roboto", Arial, sans-serif.
- **Button Radius**: 4px (`rounded`) / rounded-md.
- **Section Styling**: Alternating white and light gray (`bg-light`) backgrounds with teal accent highlights.

## Requirements & Gherkin Scenarios

### 1. Navigation & Header

- **Requirement**: The app must display a top contact info bar (phone, email, schedule) and a sticky/fixed navbar with logo, menu links ("Home", "About", "Services", "Doctors", "Blog", "Contact"), and a "Make an Appointment" CTA button.
- **Scenario**: User views the header
  - Given the user loads the Molaris application
  - Then they see the contact phone and email at the top
  - And they see the brand logo and navigation menu
  - And they see the prominent appointment booking button

### 2. Hero Slider

- **Requirement**: The hero section must feature a full-width image slider with dark overlay, bold typography ("Dentist Services that You Can Trust"), descriptive subtitle, and action buttons.
- **Scenario**: User interacts with the hero section
  - Given the user views the hero banner
  - Then they see the primary headline and professional dental background image
  - And they can click "Make An Appointment" or "View Services"

### 3. Appointment Booking / Quick Info Bar

- **Requirement**: An interactive appointment scheduling form / quick info bar allowing users to select service type, department, date, time, and submit contact details.
- **Scenario**: User submits an appointment request
  - Given the user fills out the appointment form with name, phone, date, and service
  - When they click "Appointment" or submit
  - Then a success confirmation message is displayed

### 4. Services Grid

- **Requirement**: A services section showcasing dental procedures (Tooth Protection, Dental Implants, Teeth Whitening, Tooth Removal, etc.) with icons, descriptions, and hover effects.
- **Scenario**: User browses dental services
  - Given the user scrolls to the services section
  - Then they see distinct service cards with icons and descriptive text

### 5. About & Statistics Section

- **Requirement**: An informative section detailing the clinic's innovative approach to treatment with animated stat counters (e.g., 3000+ Happy Patients, 2200+ Successful Surgeries).
- **Scenario**: User views clinic stats
  - Given the user views the about section
  - Then they see key metrics highlighting clinic experience and patient satisfaction

### 6. Meet Our Team (Qualified Dentists)

- **Requirement**: Profiles of professional dentists (Dr. Lloyd Wilson, Dr. Rachel Parker, etc.) with photos, specialties, and social links.
- **Scenario**: User checks the medical team
  - Given the user views the doctors section
  - Then they see dentist cards with photos, names, and roles

### 7. Call-to-Action (CTA) Banner

- **Requirement**: A vibrant teal banner prompting immediate action ("Do not wait make an appointment today!").
- **Scenario**: User sees the CTA banner
  - Given the user scrolls past the team section
  - Then they see a full-width teal banner with a booking call to action

### 8. Testimonials (Happy Customers)

- **Requirement**: Customer review cards sharing patient feedback and experiences.
- **Scenario**: User reads testimonials
  - Given the user views the customer reviews section
  - Then they see patient quotes, star ratings, and names

### 9. Treatment Results / Gallery

- **Requirement**: Visual before/after showcase of dental treatments and clinical work.
- **Scenario**: User views treatment results
  - Given the user explores the results gallery
  - Then they see high-quality clinical outcome photos

### 10. Recent Blog Posts

- **Requirement**: Latest dental care tips and articles ("How to keep your teeth always in the best condition") with publish dates and read links.
- **Scenario**: User reads blog updates
  - Given the user views the blog section
  - Then they see article cards with titles and snippets

### 11. Pricing & Packages

- **Requirement**: Transparent pricing tiers for dental packages and treatments.
- **Scenario**: User checks pricing
  - Given the user scrolls to the pricing section
  - Then they see structured price lists for routine checkups, whitening, and implants

### 12. Footer

- **Requirement**: Comprehensive footer with quick links, newsletter signup, contact info, and mandatory Component Dock attribution link (`https://www.componentdock.com/`).
- **Scenario**: User reaches the footer
  - Given the user scrolls to the bottom of the page
  - Then they see site navigation, contact details, newsletter form, and the Component Dock link

## Verification Checklist

- [ ] `npm run spec:validate` passes
- [ ] `scripts/verify-app.sh molaris` passes (typecheck, lint, test:coverage 100%, build)
- [ ] Footer links `https://www.componentdock.com/` as Component Dock
- [ ] No reference to ColorLib in any app source file
