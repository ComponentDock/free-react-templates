# Template: MedCanvas (Medical Landing)

## Purpose

MedCanvas is a single-page medical/healthcare landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Medart" free template (source:
https://colorlib.com/wp/template/medart/), built under a DIFFERENT name
(**MedCanvas**), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

**Preview URL:** https://preview.colorlib.com/theme/medart/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/medart-free-template.jpg

The original is a Bootstrap 4 medical practice landing page with a Swiper
hero slider, appointment booking form, departments grid (9 departments),
testimonial slider (Swiper), news/blog section (3 posts), newsletter
subscribe banner, and a 3-column footer. The design uses a distinctive
blue-to-purple gradient as the primary brand identity — gradient buttons,
gradient section backgrounds (departments area), and rounded UI elements
(20px radius boxes and buttons).

## Design reference (replication findings)

- **Original:** ColorLib "Medart" — medical practice landing template
  (source: https://colorlib.com/wp/template/medart/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/medart/
  (HTTP 200, full rendered DOM + `style.css` extracted). The TEMPLATES.md
  screenshot (`medart-free-template.jpg`) is the visual reference; the
  design below is reconstructed from the DOM structure and CSS tokens.
- **Section order (1:1):** Navbar (Home, About us, Services, News,
  Contact, emergency call button with gradient bg) → Hero Swiper Slider
  (3 slides, "The Best Medical Services" + "Read More" CTA, pagination on
  left) → Homepage Boxes (Opening Hours + Emergency call + Make an
  Appointment form, 3-column layout) → Our Departments (9 department
  cards on gradient background: Cardiology, Gastroenterology, Medical
  Lab, Dental Care, Surgery, Neurology, Orthopaedy, Pediatry,
  Ophthalmology) → Testimonials (Swiper slider, user avatars + quotes)
  → The News (3 blog posts with thumbnails, date/author/comments) →
  Subscribe Banner (newsletter form on dark background image) → Footer
  (About/logo, Contact info, Useful Links + copyright).
- **Design tokens extracted from `style.css`:**

## Design tokens

| Token | Value | Usage |
|-------|-------|-------|
| **Primary brand** | `#18a3eb` (bright sky blue) | Nav active links, active pagination bullets, opening hours border, barfiller tip bg |
| **Gradient primary** | `linear-gradient(270deg, #32c8fa 0%, #587de4 100%)` | CTA buttons (`.button.gradient-bg`), departments section background, appointment submit, emergency call btn |
| **Gradient start** | `rgba(50,200,250,1)` / `#32c8fa` | Light cyan-blue start of gradient |
| **Gradient end** | `rgba(88,125,228,1)` / `#587de4` | Medium blue-purple end of gradient |
| **Body text** | `#404040` (dark grey) | Body text, headings, nav links, button text |
| **Muted text** | `#828282` (medium grey) | Sub-text, descriptions, department descriptions |
| **Heading text** | `#262626` (near-black) | Links, h1 on hero, hamburger bars |
| **Background white** | `#fff` | Nav, page bg, testimonial card bg |
| **Background light** | `#f0f4f8` (very light blue-grey) | Button default bg, form input bg |
| **Border grey** | `#dde4ea` | Box borders (opening hours, emergency, appointment) |
| **Font family** | `"Raleway", sans-serif` (Google Fonts: 200–700) | Body and all headings |
| **Font size base** | `16px` | Body text |
| **Line height** | `1.8` | Body text |
| **Border radius** | `20px` | Buttons, boxes (opening hours, emergency, appointment), testimonial slider card |
| **Button padding** | `12px 50px 10px` | CTA buttons |
| **Button border-bottom** | `3px solid #18a3eb` (default button) | Non-gradient button accent |
| **Subscribe bg** | Dark background image with overlay | Newsletter banner section |
| **Departments bg** | Gradient overlay (`#32c8fa → #587de4`) on dark bg image | Departments section wrap |

### Color palette summary

- Brand blue: `#18a3eb`
- Gradient: `#32c8fa` → `#587de4` (light cyan to medium blue-purple)
- Body: `#404040`
- Muted: `#828282`
- Light bg: `#f0f4f8`
- Border: `#dde4ea`
- Near-black: `#262626`

## Section-by-section requirements

### Requirement: Navbar

The page SHALL display a fixed-top transparent navbar with logo on the left,
navigation links (Home, About us, Services, News, Contact) in the center-right,
and a gradient emergency call button with phone icon.

#### Scenario: Navbar renders on page load

- **WHEN** the user navigates to MedCanvas
- **THEN** the navbar SHALL be visible at the top of the page with:
  - Logo text "MedCanvas" (left-aligned)
  - Navigation links: Home, About us, Services, News, Contact (right-aligned)
  - An emergency call button with gradient background showing a phone icon and number

#### Scenario: Mobile hamburger menu

- **WHEN** the viewport width is less than 992px
- **THEN** the navigation links SHALL be hidden and a hamburger menu icon SHALL appear
- **WHEN** the user taps the hamburger icon
- **THEN** a slide-in sidebar menu SHALL appear from the left with all nav links

#### Scenario: Active link highlight

- **WHEN** the user views the home page
- **THEN** the "Home" link SHALL be highlighted with the brand blue color `#18a3eb`

### Requirement: Hero slider

The page SHALL display a full-width Swiper-style hero carousel with 3 slides,
each showing a medical hero image background, the headline "The Best Medical
Services", a short description paragraph, and a "Read More" gradient CTA button.
Pagination bullets shall appear on the left side as vertical bars.

#### Scenario: Hero renders with first slide

- **WHEN** the page loads
- **THEN** a hero section SHALL be visible with:
  - A background image (picsum placeholder)
  - Headline text "The Best Medical Services"
  - A description paragraph
  - A "Read More" button with gradient background (`#32c8fa → #587de4`)
  - Vertical pagination indicators on the left side

#### Scenario: Hero auto-advances

- **WHEN** the user waits 5 seconds without interacting
- **THEN** the hero SHALL automatically advance to the next slide

#### Scenario: Hero pagination click

- **WHEN** the user clicks a pagination bullet
- **THEN** the hero SHALL transition to the corresponding slide

### Requirement: Homepage boxes (Opening Hours + Emergency + Appointment)

The page SHALL display three side-by-side info boxes below the hero:
1. Opening Hours (with border `#18a3eb` top/left accent)
2. Emergency call box (with gradient CTA button)
3. Make an Appointment form (department/doctor selects, name, phone, submit)

All boxes SHALL have `border-radius: 20px`, `border: 2px solid #dde4ea`,
and floating title labels that break the top border.

#### Scenario: Opening hours displays schedule

- **WHEN** the homepage boxes render
- **THEN** the Opening Hours box SHALL show a schedule list:
  - Monday - Thursday: 8.00 - 19.00
  - Friday: 8.00 - 18.30
  - Saturday: 9.30 - 17.00
  - Sunday: 9.30 - 15.00

#### Scenario: Emergency box shows phone

- **WHEN** the emergency box renders
- **THEN** it SHALL display a gradient call button with a phone icon and the number "+34 586 778 8892"

#### Scenario: Appointment form renders

- **WHEN** the appointment box renders
- **THEN** it SHALL show a form with:
  - "Select Department" dropdown
  - "Select Doctor" dropdown
  - Name text input
  - Phone number input
  - "Book Appointment" submit button with gradient background

#### Scenario: Form submission prevented (no backend)

- **WHEN** the user fills in all fields and clicks "Book Appointment"
- **THEN** the form SHALL prevent default submission and show no error

### Requirement: Our Departments

The page SHALL display a 3-column grid of 9 department cards on a gradient
background (`#32c8fa → #587de4` over a dark background image). Each card
has an icon (lucide-react), department name (h3), description, and "read
more" link. All text is white on the gradient.

#### Scenario: Departments section renders 9 cards

- **WHEN** the departments section scrolls into view
- **THEN** 9 department cards SHALL be visible:
  Cardiology, Gastroenterology, Medical Lab, Dental Care, Surgery,
  Neurology, Orthopaedy, Pediatry, Ophthalmology

#### Scenario: Department card structure

- **WHEN** a department card renders
- **THEN** it SHALL contain:
  - An icon (lucide-react medical icon)
  - A heading (department name, white, 24px bold)
  - A description paragraph (white, 14px)
  - A "read more" link (white, uppercase, 12px bold)

#### Scenario: Departments section has gradient background

- **WHEN** the departments section renders
- **THEN** the wrapper SHALL have a gradient background
  (`linear-gradient(270deg, #32c8fa, #587de4)`) with white text

### Requirement: Testimonials

The page SHALL display a testimonial slider section with a white card
(20px radius, soft shadow) containing testimonial text, user avatar
(circular image), user name, and user affiliation. A decorative background
image appears on the right half.

#### Scenario: Testimonial slider renders

- **WHEN** the testimonial section scrolls into view
- **THEN** a slider SHALL display showing:
  - A paragraph of testimonial text
  - A circular user avatar image
  - User name in bold
  - User affiliation (e.g., "University in UK")

#### Scenario: Testimonial navigation

- **WHEN** the user clicks the pagination dots below the testimonial
- **THEN** the slider SHALL transition to the next testimonial

### Requirement: The News (Blog posts)

The page SHALL display 3 blog post cards in a row, each with a thumbnail
image, post title, metadata (date, author, comment count), and a short
excerpt.

#### Scenario: News section renders 3 posts

- **WHEN** the news section renders
- **THEN** 3 blog post cards SHALL be visible, each containing:
  - A thumbnail image (picsum placeholder)
  - A title heading
  - Date label (e.g., "April 12, 2018")
  - Author label (e.g., "Dr. Jake Williams")
  - Comment count link (e.g., "2 Comments")
  - A short text excerpt

### Requirement: Subscribe banner

The page SHALL display a newsletter subscription banner with a dark
background image, white heading "Subscribe to our newsletter", an email
input field, and a gradient "Subscribe" button.

#### Scenario: Subscribe banner renders

- **WHEN** the subscribe section renders
- **THEN** it SHALL show:
  - Heading "Subscribe to our newsletter" in white (30px, 600 weight)
  - An email input field
  - A "Subscribe" button with gradient background

#### Scenario: Subscribe form submission prevented

- **WHEN** the user enters an email and clicks Subscribe
- **THEN** the form SHALL prevent default submission

### Requirement: Footer

The page SHALL display a 3-column footer with:
1. About section (logo + description + copyright)
2. Contact info (address, phone, email)
3. Useful Links (Home, About us, Departments, Contact, FAQ, Testimonials)

The copyright line MUST link to `https://www.componentdock.com/` branded as
"Component Dock".

#### Scenario: Footer renders

- **WHEN** the user scrolls to the bottom
- **THEN** the footer SHALL display with:
  - Logo + about text in column 1
  - Contact details in column 2
  - Quick links in column 3
  - Copyright with "Made with ❤ by Component Dock" linking to componentdock.com

#### Scenario: Footer links are functional

- **WHEN** the user clicks a footer link
- **THEN** it SHALL navigate to the corresponding section or page

## Verification checklist

- [ ] Navbar renders with logo, links, and gradient emergency button
- [ ] Hero slider renders 3 slides with correct headline and CTA
- [ ] Homepage boxes render with Opening Hours, Emergency, and Appointment form
- [ ] Departments section shows 9 cards on gradient background
- [ ] Testimonial slider renders with user info and navigation
- [ ] News section shows 3 blog post cards
- [ ] Subscribe banner renders with email input and gradient button
- [ ] Footer has 3 columns with Component Dock link in copyright
- [ ] All interactive elements (slider, form, hamburger) work correctly
- [ ] Mobile responsive at 375px, 768px, and 1024px breakpoints
- [ ] Design tokens match: brand blue `#18a3eb`, gradient `#32c8fa → #587de4`, Raleway font, 20px radius
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] Test coverage: 100% lines/functions/branches/statements
