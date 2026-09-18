# Template: Wellnest (Medical / Dental Care)

## Purpose

Recreation of ColorLib "Drcare" — a medical/dental care website template.

- **Source:** [ColorLib Drcare](https://colorlib.com/wp/template/drcare/)
- **Preview:** https://preview.colorlib.com/theme/drcare/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/drcare-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `wellnest` (apps/wellnest, @free-react-templates/wellnest)
- **Deploy target:** wellnest.free.componentdock.com

## Design tokens (extracted from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Primary blue | #2f89fc | Brand color, links, hover states, borders |
| Dark blue | #167bfc | Secondary brand accent |
| Light blue | #61a6fd | Hover/active state |
| Orange accent | #ff8000 | Highlight color, counter bg |
| Bootstrap primary | #007bff / #0062cc | Button backgrounds |
| Bootstrap secondary | #6c757d / #545b62 | Button backgrounds |
| White | #fff | Card backgrounds, text on dark |
| Light gray bg | #fafafa | Section alternating bg |
| Gray bg | #e6e6e6 | Divider/section bg |
| Dark bg | #000000 | Footer background |
| Font family | "Work Sans", Arial, sans-serif | Body text |
| Border radius (pill) | 40px | Primary buttons |
| Border radius (small) | 4px | Cards, inputs |

## Section structure (from preview DOM)

1. **TopBar** — contact info strip (phone, email, address icons + text)
2. **Navbar** — dark bg, logo left, nav links right (Home, About, Department, Doctor, Blog, Contact)
3. **HeroSlider** — owl-carousel style, 2 slides with dark overlay, large heading + subtext + CTA button
4. **Services** — 4-column cards: Qualified Doctors, Emergency Care, Outdoor Checkup, 24 Hours Service (icon + title + short text)
5. **About** — split layout: text block ("Medical specialty concerned with the care of acutely ill hospitalized patients") with stats on right
6. **Stats** — counter section with parallax bg image (numbers for patients, doctors, staff, awards)
7. **Departments** — horizontal tabbed carousel with 6 departments (Neurological, Surgical, Dental, Ophthalmology, Cardiology, General). Each tab shows 4 sub-items (Primary Care, Lab Test, Symptom Check, Heart Rate)
8. **ConsultationCTA** — "We Provide Free Health Care Consultation" banner
9. **ClinicDepartments** — repeat of department tabs with icon lists
10. **Doctors** — 4 doctor cards (photo, name, specialty, social links)
11. **Testimonials** — bg-light section, patient quotes
12. **ConsultationForm** — "Free Consultation" CTA with form
13. **Facts** — counter section with bg image, 4 metrics
14. **Pricing** — 4-tier cards (Basic, Standard, Premium, Platinum)
15. **Blog** — 3 recent blog post cards
16. **Footer** — dark bg, 6 columns: About/Dr.Care Facts, Links, Services, Recent Blog, Opening Hours, Subscribe

## Gherkin requirements

### TopBar
- **Scenario: contact info display**
  - Given the user visits the page
  - Then a top bar shows phone number, email, and address with icons
  - And the bar has a light/white background

### Navbar
- **Scenario: navigation links**
  - Given the user views the navbar
  - Then links are visible: Home, About, Department, Doctor, Blog, Contact
  - And the navbar has a dark background
  - And the logo appears on the left

- **Scenario: mobile toggle**
  - Given the viewport is narrow (mobile)
  - When the user taps the hamburger icon
  - Then the nav links expand in a dropdown

### HeroSlider
- **Scenario: hero content**
  - Given the hero slider is visible
  - Then a heading is displayed (e.g., "Everyday We Bring Hope and Smile")
  - And a subheading provides context
  - And a CTA button is present

- **Scenario: slider navigation**
  - Given the hero slider is visible
  - When the user navigates slides
  - Then the content transitions between at least 2 slides

### Services
- **Scenario: service cards**
  - Given the user scrolls to services
  - Then 4 service cards are visible
  - And each card has an icon, title, and short description
  - And the services are: Qualified Doctors, Emergency Care, Outdoor Checkup, 24 Hours Service

### About
- **Scenario: about content**
  - Given the user scrolls to the about section
  - Then a heading or paragraph about medical care is displayed
  - And supporting content (stats or text) appears alongside

### Stats
- **Scenario: counter display**
  - Given the user scrolls to the stats section
  - Then 4 counters are visible (patients, doctors, staff, awards or similar)
  - And the section has a parallax background image

### Departments
- **Scenario: department tabs**
  - Given the user scrolls to departments
  - Then tabs are visible for 5+ departments
  - And clicking a tab shows 4 sub-items (Primary Care, Lab Test, Symptom Check, Heart Rate)

### Doctors
- **Scenario: doctor cards**
  - Given the user scrolls to the doctors section
  - Then 4 doctor cards are displayed
  - And each card shows photo, name, specialty, and social links

### Testimonials
- **Scenario: patient quotes**
  - Given the user scrolls to testimonials
  - Then patient testimonial quotes are displayed
  - And the section has a light gray background

### Pricing
- **Scenario: pricing tiers**
  - Given the user scrolls to pricing
  - Then 4 pricing tiers are shown (Basic, Standard, Premium, Platinum)
  - And each tier lists features and a price

### Blog
- **Scenario: recent posts**
  - Given the user scrolls to blog
  - Then 3 blog post cards are displayed
  - And each has an image, title, date, and excerpt

### Footer
- **Scenario: footer columns**
  - Given the user scrolls to the footer
  - Then 6 columns are visible: About, Links, Services, Blog, Opening Hours, Subscribe
  - And the footer has a dark background
  - And a "Component Dock" attribution link is present

## Verification checklist

- [ ] TopBar renders with contact icons and info
- [ ] Navbar has dark bg, logo, 6 nav links, mobile hamburger toggle
- [ ] HeroSlider shows 2+ slides with headings, subtext, CTA buttons, overlay
- [ ] Services shows 4 cards with icons, titles, descriptions
- [ ] About section has text content and supporting stats
- [ ] Stats section has 4 counters with parallax bg
- [ ] Departments has tabbed interface with 5+ tabs, each showing 4 sub-items
- [ ] Doctors shows 4 cards with photo, name, specialty, social links
- [ ] Testimonials shows quotes on light bg
- [ ] Pricing shows 4 tiers with features and prices
- [ ] Blog shows 3 post cards
- [ ] Footer has 6 columns, dark bg, Component Dock link
- [ ] No ColorLib references in app code
- [ ] public/CNAME contains wellnest.free.componentdock.com
- [ ] homepage in package.json matches deploy target
- [ ] placeholder images use picsum.photos
- [ ] Font loaded from Google Fonts: Work Sans
