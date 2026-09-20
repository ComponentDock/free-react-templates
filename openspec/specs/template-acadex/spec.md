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

## Gherkin requirements

### Feature: Acadex — Online Courses Education Template

  Background:
    Given the user navigates to the Acadex template page
    Then the page loads with a sticky navbar at the top

  Scenario: Navbar displays logo and navigation links
    When the navbar is visible
    Then the logo "Acadex" is displayed on the left
    And the navigation links "Home", "Courses", "Programs", "Teachers" are shown
    And a "Contact Us" CTA button is visible on the right

  Scenario: Navbar becomes sticky on scroll
    When the user scrolls down past the hero
    Then the navbar sticks to the top of the viewport

  Scenario: Hero section shows headline and signup form
    When the hero section is visible
    Then the heading "Learn From The Expert" is displayed
    And a subtext paragraph is shown below the heading
    And an "Admission Now" button is visible
    And a signup form card appears on the right with email and password fields

  Scenario: Hero signup form has three inputs
    When the signup form is visible
    Then an email input is displayed
    And a password input is displayed
    And a "Re-type Password" input is displayed
    And a "Sign up" submit button is visible

  Scenario: Courses section shows heading
    When the user scrolls to the courses section
    Then the heading "Courses" is displayed

  Scenario: Course cards display in a carousel
    When the courses carousel is visible
    Then 6 course cards are displayed
    And each card shows a course image
    And each card shows a price (e.g. "$20", "$99")
    And each card shows lesson meta ("4 Lessons / 12 week")
    And each card shows a course title and description
    And each card shows student count and comment count
    And Prev/Next navigation buttons are available

  Scenario: Programs section shows three feature rows
    When the user scrolls to the programs section
    Then the heading "Our Programs" is displayed
    And three alternating illustration+text rows are shown
    And each row contains a heading, description text, and two stat items

  Scenario: Teachers section shows teacher grid
    When the user scrolls to the teachers section
    Then the heading "Our Teachers" is displayed
    And 3 teacher cards are shown in a grid
    And each card shows a circular photo, name, position, and bio

  Scenario: Testimonial section shows quote with overlay
    When the user scrolls to the testimonial section
    Then a background image with dark overlay is shown
    And a circular avatar photo is displayed
    And a person's name is shown
    And a blockquote with testimonial text is displayed

  Scenario: Why Choose Us section shows feature list
    When the user scrolls to the Why Choose Us section
    Then the heading "Why Choose Us" is displayed
    And a white card with 6 icon+text feature items is shown
    And a decorative person illustration is displayed

  Scenario: Contact form collects messages
    When the user scrolls to the contact section
    Then a "Message Us" heading is displayed
    And a contact form with First name, Last name, Subject, Email fields is shown
    And a Message textarea is displayed
    And a "Send Message" purple pill button is visible

  Scenario: Footer shows about, links, and subscribe
    When the footer is visible
    Then an "About Acadex" section with description text is displayed
    And navigation links (Home, Courses, Programs, Teachers) are shown
    And an email subscribe form with input and button is displayed
    And a copyright notice with "Component Dock" link is shown

  Scenario: AOS scroll animations trigger on sections
    When the user scrolls down the page
    Then elements with `data-aos="fade-up"` animate into view
    And sections transition smoothly as they enter the viewport

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
