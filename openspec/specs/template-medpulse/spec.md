# Template: MedPulse (Medical / Healthcare)

## Purpose

Recreation of the ColorLib **Medex** template as a single-page React 19 + Vite + Tailwind CSS 4 + TypeScript app.

- **Source:** https://colorlib.com/wp/template/medex/
- **Preview:** https://preview.colorlib.com/theme/medex/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/medex-free-template.jpg
- **Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/medpulse`
- **Deploy target:** `https://medpulse.free.componentdock.com`

## Design tokens (extracted from preview CSS)

| Token | Value | Usage |
|---|---|---|
| Brand blue | `#299ADC` | Navbar background, accent color, icon color, heading highlights, appointment form headings |
| Brand green | `#3BC053` | Secondary button, CTA buttons, navbar diagonal accent stripe |
| Font family | Roboto (weights 300, 400, 500, 700, 900) | Global body + headings |
| Body text | `rgba(0,0,0,0.5)` | Paragraphs, form placeholders |
| Heading text | `rgba(0,0,0,0.9)` | h1–h5 base color |
| Light background | `#F8F9FA` | Alternating section backgrounds (`bg-light`) |
| Top bar background | `rgba(0,0,0,0.05)` | Top info bar |
| Button border-radius | `0px` (square) for regular buttons; `50px` (pill) for appointment form CTA | `.btn` base vs `.btn-custom` |
| Button shadow | `0px 24px 36px -11px rgba(0,0,0,0.09)` | All buttons |
| Hero overlay | Black at 15% opacity over background image | `.hero-wrap .overlay` |
| Intro/parallax section | Blue overlay at 80% opacity over background image | `.ftco-intro .overlay` |
| Testimonial/Facts section | Blue `#299ADC` or green `#3BC053` overlay at 80% opacity | `.ftco-facts .overlay` |
| Social icon size | 35×35px circle, white bg, brand blue icon | `.social-media p a` |

## Section structure (top to bottom)

1. **TopBar** — email contact, social icons (Facebook, Twitter, Instagram, Dribbble), "Book An Appointment" CTA pill button
2. **Header** — Logo (flaticon health + "Medex" → renamed), phone number, location address
3. **Navbar** — Dark blue bg (`#299ADC`) with green diagonal stripe accent; links: Home, About, Services, Doctors, Departments, Pricing, Gallery, Blog, Contact; uppercase, letter-spacing 2px, white text
4. **Hero** — Full-width background image (doctor photo) with 15% black overlay; left-aligned content: headline "The Most Valuable Thing is Your Health", subtext, inline appointment form (department dropdown + "Book Appointment" green pill button)
5. **Welcome/Services** — `bg-light`; left 7 cols: "Welcome to [Brand]" heading + 4 service cards in 2-col grid (Emergency Help, Qualified Doctors, Location & Directions, Medical Treatment) — each with icon, title, description; right 5 cols: appointment form (First Name, Last Name, Service dropdown, Phone, Date, Time, Message, "Appointment" green button)
6. **About/Counter** — Two-col: left = image, right = "We Are [Brand] A Healthcare Provider" heading + description + two CTA buttons (primary blue + secondary green)
7. **Intro Banner** — Parallax background image with blue overlay; right-aligned content: "Your Health is Our Priority" heading, subtext, white pill CTA button
8. **Departments** — Centered heading "[Brand] Department"; tabbed layout (3-col nav pills left, content right): Neurology, Cardiology, X-Ray, Dental, Ophthalmology, Other Services; each tab has background image + service details
9. **Doctors** — Centered heading; 4 doctor cards in row: photo, name, specialty, social icons (Twitter, Facebook, Google, Instagram)
10. **Facts/Stats** — Parallax background with green overlay; 4 stat counters (Happy Patients, Medical Specialist, Health Insurance, Award Won)
11. **Blog** — Centered heading; 3 blog cards: featured image, date, title, excerpt, "Read more" link
12. **Testimonials** — Parallax background with blue overlay; testimonial carousel: avatar, name, quote text, star rating
13. **Footer** — Dark background; 5 columns: Brand logo + social, Departments list, Links list, Services list, Contact info (address, phone, email) + newsletter form; bottom bar: copyright + "Made with Component Dock"

## Requirements

### TopBar

#### Scenario: Top bar displays contact info and social links

- **GIVEN** the user loads the page
- **THEN** a top bar shows the email address
- **AND** social media icons for Facebook, Twitter, Instagram, Dribbble are visible
- **AND** a "Book An Appointment" button is displayed with pill shape

### Header

#### Scenario: Header shows brand logo, phone, and location

- **GIVEN** the user loads the page
- **THEN** the brand logo and name are displayed
- **AND** a phone number "+1 234 456 78910" is shown
- **AND** a physical address is shown

### Navbar

#### Scenario: Navigation bar is visible with all links

- **GIVEN** the user loads the page
- **THEN** a blue navbar is displayed
- **AND** navigation links for Home, About, Services, Doctors, Departments, Pricing, Gallery, Blog, Contact are visible
- **AND** the active link is highlighted

#### Scenario: Navbar toggles on mobile

- **GIVEN** the viewport is less than 992px wide
- **THEN** a hamburger menu button is displayed
- **AND** clicking it expands the navigation links vertically

### Hero

#### Scenario: Hero section shows headline and appointment form

- **GIVEN** the user loads the page
- **THEN** a full-width hero with background image and dark overlay is displayed
- **AND** the headline "The Most Valuable Thing is Your Health" is visible
- **AND** a department dropdown is shown
- **AND** a "Book Appointment" green pill button is visible

### Welcome/Services

#### Scenario: Welcome section shows services and appointment form

- **GIVEN** the user scrolls to the welcome section
- **THEN** a "Welcome to [Brand]" heading is displayed
- **AND** 4 service cards are shown: Emergency Help, Qualified Doctors, Location & Directions, Medical Treatment
- **AND** each service card has an icon, title, and description
- **AND** an appointment form with First Name, Last Name, Service dropdown, Phone, Date, Time, Message fields is visible
- **AND** the "Appointment" button is green

### About/Counter

#### Scenario: About section shows brand info and CTAs

- **GIVEN** the user scrolls to the about section
- **THEN** a background image is displayed on the left
- **AND** a heading "We Are [Brand] A Healthcare Provider" is shown on the right
- **AND** two CTA buttons are visible: primary (blue) and secondary (green)

### Intro Banner

#### Scenario: Intro banner shows call to action

- **GIVEN** the user scrolls to the intro banner
- **THEN** a parallax background with blue overlay is displayed
- **AND** the heading "Your Health is Our Priority" is visible
- **AND** a white pill CTA button "Make An Appointment" is shown

### Departments

#### Scenario: Departments section shows tabbed content

- **GIVEN** the user scrolls to the departments section
- **THEN** a heading "[Brand] Department" is centered
- **AND** tabbed navigation shows: Neurology, Cardiology, X-Ray, Dental, Ophthalmology, Other Services
- **AND** clicking a tab shows that department's content with background image

#### Scenario: Default tab is Neurology

- **GIVEN** the departments section is visible
- **THEN** the Neurology tab is active by default
- **AND** its content is displayed

### Doctors

#### Scenario: Doctors section shows doctor cards

- **GIVEN** the user scrolls to the doctors section
- **THEN** 4 doctor cards are displayed in a row
- **AND** each card shows a photo, doctor name, and specialty
- **AND** each card has social media icons (Twitter, Facebook, Google, Instagram)

### Facts/Stats

#### Scenario: Facts section shows statistics

- **GIVEN** the user scrolls to the facts section
- **THEN** 4 stat counters are displayed: Happy Patients, Medical Specialist, Health Insurance, Award Won
- **AND** the section has a parallax background with green overlay

### Blog

#### Scenario: Blog section shows recent posts

- **GIVEN** the user scrolls to the blog section
- **THEN** 3 blog post cards are displayed
- **AND** each card shows a featured image, date, title, excerpt, and "Read more" link

### Testimonials

#### Scenario: Testimonials section shows reviews

- **GIVEN** the user scrolls to the testimonials section
- **THEN** a testimonial carousel is displayed
- **AND** each testimonial shows an avatar, name, quote, and star rating
- **AND** the section has a parallax background with blue overlay

### Footer

#### Scenario: Footer shows brand info and links

- **GIVEN** the user scrolls to the footer
- **THEN** the brand logo and description are displayed
- **AND** columns for Departments, Links, Services, and Contact info are shown
- **AND** a newsletter email input is visible
- **AND** social media icons are displayed
- **AND** the bottom bar contains copyright text and "Made with Component Dock"

## Verification checklist

- [ ] All 13 sections rendered in correct order
- [ ] Brand blue `#299ADC` used for navbar, accents, highlights
- [ ] Brand green `#3BC053` used for secondary CTAs, diagonal stripe
- [ ] Roboto font loaded and applied
- [ ] Hero has full-width background image with dark overlay
- [ ] Appointment form in hero has pill-shaped layout (50px radius)
- [ ] Service cards have 2-col grid layout with icons
- [ ] Departments use tabbed navigation (left pills, right content)
- [ ] Doctor cards show 4 in a row with social links
- [ ] Facts section has parallax background with counter stats
- [ ] Blog cards show 3 in a row
- [ ] Testimonials use carousel with star ratings
- [ ] Footer has 5 columns + newsletter + Component Dock link
- [ ] No references to ColorLib in app code
- [ ] `public/CNAME` contains `medpulse.free.componentdock.com`
- [ ] `package.json` homepage is `https://medpulse.free.componentdock.com`
- [ ] Tests pass with 100% coverage
- [ ] Build succeeds
