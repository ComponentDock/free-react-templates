# Template: Acadex (Education — Online Courses Platform)

## Purpose

Acadex is a single-page online-courses/education landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Oneschool" free template (source:
https://colorlib.com/wp/template/oneschool/), built under a DIFFERENT name
(**Acadex**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

**Preview URL:** https://preview.colorlib.com/theme/oneschool/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/oneschool-free-template.jpg

The original is a Bootstrap 4 + jQuery page with AOS scroll animations, an
Owl Carousel course carousel, parallax hero, and sticky navbar. It targets
an online education platform: courses with pricing, programs showcase,
teacher profiles, testimonials, and a contact form.

## Design tokens (extracted from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| **Primary brand** | `#7971ea` (medium purple/violet) | Navbar active, buttons, form submit, icons |
| **Secondary accent** | `#615dc2` (darker purple) | Hover states |
| **Tertiary accent** | `#4f45e3` (deep purple) | Alternate accent |
| **Contact accent** | `#1c4b82` (dark navy blue) | Contact form area |
| **Font family** | `"Muli"`, sans-serif (Google Fonts: Muli 300,400,700,900) | Body and headings |
| **Body color** | `gray` | Body text |
| **Heading color** | `#000` | h1-h5, `.text-black` |
| **Body background** | `#fff` (white) | Page background |
| **Section alt bg** | `#edf0f5` (light blue-gray) | Alternate `.site-section` backgrounds |
| **Section alt bg 2** | `#f4f5f9` (lighter gray) | Contact section `.bg-light` |
| **Overlay bg** | `rgba(0,0,0,0.7)` (dark semi-transparent) | Hero and parallax section overlays |
| **Button radius** | `pill` (very high border-radius, `btn-pill`) | All primary buttons |
| **Body line-height** | `1.7` | Spacious paragraph rhythm |
| **Body font-weight** | `300` (light) | Body text is light weight |
| **Section padding** | `4rem 0` | Consistent vertical section rhythm |

## Section structure (from live preview DOM — order is 1:1)

1. **Navbar** — sticky top (`py-4`, `js-sticky-header`). Logo text left
   ("Acadex"), centered nav links: Home → Courses → Programs → Teachers.
   Right CTA button: "Contact Us" (purple `btn-primary btn-pill`).

2. **Hero / Intro** (`#home-section`, `.intro-section`) — full-width
   parallax background image. Split layout: left side (col-lg-6):
   `<h1>` "Learn From The Expert" + subtext + purple pill button "Admission
   Now". Right side (col-lg-5): white "Sign Up" form card with email,
   password, re-type password inputs + purple pill submit button. AOS
   fade-up animations on all elements.

3. **Courses Title** (`#courses-section`, `.courses-title`) — centered
   section with `<h2 class="section-title">Courses</h2>`. Light background
   (`#edf0f5`).

4. **Courses Carousel** (`.courses-entry-wrap`) — Owl Carousel of 6 course
   cards. Each card: top image, price badge (e.g. "$20", "$99"), lesson
   meta ("4 Lessons / 12 week" with clock icon), course title + blurb,
   bottom stats bar (student count + comments). Prev/Next buttons below
   carousel. White card backgrounds on light section bg.

5. **Programs** (`#programs-section`) — centered heading "Our Programs" +
   intro text. THREE alternating rows:
   - Row 1: illustration LEFT, text RIGHT — "We Are Excellent In Education"
     + 2 stat items (Yearly Graduates, Universities Worldwide)
   - Row 2: text LEFT (order-reversed on lg), illustration RIGHT — "Strive
     for Excellent" + same 2 stat items
   - Row 3: illustration LEFT, text RIGHT — "Education is life" + same 2
     stat items
   Each stat item has a circular icon wrapper + text.

6. **Teachers** (`#teachers-section`) — centered heading "Our Teachers" +
   intro text. 3-column grid of teacher cards: circular photo (w-50,
   rounded-circle), name, position ("Physics Teacher"), bio text.

7. **Testimonials** (`.bg-image.overlay`) — parallax background image with
   dark overlay. Centered: small circular photo, name, blockquote with
   large quotes.

8. **Why Choose Us** — centered heading + decorative SVG blobs (background
   decoration). Left column: white card with 6 icon+text feature items
   (Yearly Graduates, Universities, Professionals, Knowledge, Courses,
   Best Teachers). Right column: transparent person illustration image.

9. **Contact** (`#contact-section`, `.bg-light`) — light gray background.
   Centered form: First name, Last name (side by side), Subject, Email,
   Message textarea. Purple pill "Send Message" button.

10. **Footer** (`.footer-section.bg-white`) — 3-column: About text + nav
    links + email subscribe form (input + button). Bottom copyright bar
    with border-top.

## Requirements

### Feature: Acadex — Online Courses Education Template

  Background:
- **GIVEN** the user navigates to the Acadex template page
- **THEN** the page loads with a sticky navbar at the top

#### Scenario: Navbar displays logo and navigation links

- **WHEN** the navbar is visible
- **THEN** the logo "Acadex" is displayed on the left
- **AND** the navigation links "Home", "Courses", "Programs", "Teachers" are shown
- **AND** a "Contact Us" CTA button is visible on the right

#### Scenario: Navbar becomes sticky on scroll

- **WHEN** the user scrolls down past the hero
- **THEN** the navbar sticks to the top of the viewport

#### Scenario: Hero section shows headline and signup form

- **WHEN** the hero section is visible
- **THEN** the heading "Learn From The Expert" is displayed
- **AND** a subtext paragraph is shown below the heading
- **AND** an "Admission Now" button is visible
- **AND** a signup form card appears on the right with email and password fields

#### Scenario: Hero signup form has three inputs

- **WHEN** the signup form is visible
- **THEN** an email input is displayed
- **AND** a password input is displayed
- **AND** a "Re-type Password" input is displayed
- **AND** a "Sign up" submit button is visible

#### Scenario: Courses section shows heading

- **WHEN** the user scrolls to the courses section
- **THEN** the heading "Courses" is displayed

#### Scenario: Course cards display in a carousel

- **WHEN** the courses carousel is visible
- **THEN** 6 course cards are displayed
- **AND** each card shows a course image
- **AND** each card shows a price (e.g. "$20", "$99")
- **AND** each card shows lesson meta ("4 Lessons / 12 week")
- **AND** each card shows a course title and description
- **AND** each card shows student count and comment count
- **AND** Prev/Next navigation buttons are available

#### Scenario: Programs section shows three feature rows

- **WHEN** the user scrolls to the programs section
- **THEN** the heading "Our Programs" is displayed
- **AND** three alternating illustration+text rows are shown
- **AND** each row contains a heading, description text, and two stat items

#### Scenario: Teachers section shows teacher grid

- **WHEN** the user scrolls to the teachers section
- **THEN** the heading "Our Teachers" is displayed
- **AND** 3 teacher cards are shown in a grid
- **AND** each card shows a circular photo, name, position, and bio

#### Scenario: Testimonial section shows quote with overlay

- **WHEN** the user scrolls to the testimonial section
- **THEN** a background image with dark overlay is shown
- **AND** a circular avatar photo is displayed
- **AND** a person's name is shown
- **AND** a blockquote with testimonial text is displayed

#### Scenario: Why Choose Us section shows feature list

- **WHEN** the user scrolls to the Why Choose Us section
- **THEN** the heading "Why Choose Us" is displayed
- **AND** a white card with 6 icon+text feature items is shown
- **AND** a decorative person illustration is displayed

#### Scenario: Contact form collects messages

- **WHEN** the user scrolls to the contact section
- **THEN** a "Message Us" heading is displayed
- **AND** a contact form with First name, Last name, Subject, Email fields is shown
- **AND** a Message textarea is displayed
- **AND** a "Send Message" purple pill button is visible

#### Scenario: Footer shows about, links, and subscribe

- **WHEN** the footer is visible
- **THEN** an "About Acadex" section with description text is displayed
- **AND** navigation links (Home, Courses, Programs, Teachers) are shown
- **AND** an email subscribe form with input and button is displayed
- **AND** a copyright notice with "Component Dock" link is shown

#### Scenario: AOS scroll animations trigger on sections

- **WHEN** the user scrolls down the page
- **THEN** elements with `data-aos="fade-up"` animate into view
- **AND** sections transition smoothly as they enter the viewport

## Verification checklist

- [ ] All 10 sections present in correct order
- [ ] Sticky navbar with logo, nav links, and CTA button
- [ ] Hero: split layout with headline+button left, signup form right
- [ ] Hero: background image with parallax effect
- [ ] Courses: 6 cards in carousel with price, meta, stats
- [ ] Courses: Prev/Next navigation controls
- [ ] Programs: 3 alternating rows with illustrations and stats
- [ ] Teachers: 3-column grid with circular photos
- [ ] Testimonials: background image overlay with quote
- [ ] Why Choose Us: feature list card + illustration
- [ ] Contact: form with all fields (first/last name, subject, email, message)
- [ ] Footer: 3-column layout + subscribe + copyright
- [ ] Brand color #7971ea used for buttons, accents, icons
- [ ] Muli (Mulish) font loaded via Google Fonts
- [ ] Pill-shaped buttons (`.btn-pill` style)
- [ ] Placeholder images from picsum.photos
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
- [ ] `apps/acadex/public/CNAME` = `acadex.free.componentdock.com`
- [ ] `apps/acadex/package.json` homepage = `https://acadex.free.componentdock.com`
