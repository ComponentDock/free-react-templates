# Template: LearnSpark (Education / E-Learning)
<!-- prep-status: shipped-as=laurel -->
> **SHIPPED-UNDER** — the ColorLib `educrown` design this prep describes already
> ships as `apps/laurel` (<https://laurel.free.componentdock.com>).
> Do not scaffold `apps/learnspark`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-laurel/spec.md`.

## Purpose

Recreation of **ColorLib "Educrown"** — a free education/e-learning website
template focused on online courses, instructors, and enrollment.

- **Source slug:** `educrown`
- **ColorLib page:** https://colorlib.com/wp/template/educrown/
- **Preview URL:** https://preview.colorlib.com/theme/educrown/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/educrown-free-template.jpeg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New name:** `learnspark` (apps/learnspark, @free-react-templates/learnspark)
- **Surge domain:** learnspark.free.componentdock.com

## Design Tokens (extracted from preview CSS)

### Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| primary | `#3ee792` | Main brand green — CTA buttons, testimonial nav, accents |
| primary-dark | `#31dc89` | Enroll button bg, slightly darker green |
| primary-light | `#d3ffea` | Enroll button idle bg, section tints |
| navy | `#171932` | Dark backgrounds — footer, hero overlay, button hover |
| charcoal | `#000000` | Fun-fact area overlay (60% opacity) |
| gray | `#586082` | Testimonial nav hover, muted text |
| light-gray | `#c7c7c7` | Borders, dividers |
| silver | `#cacfda` | Secondary muted |
| white | `#ffffff` | Card backgrounds, testimonial section bg |

### Typography

- **Body font:** Google Fonts — loaded via `<link>` (likely "Montserrat" or
  "Open Sans" — inspect preview `<head>` for exact family; fallback:
  sans-serif)
- **Icon font:** FontAwesome (icon class prefix `fa-`)
- **Font weight:** 600 for buttons and headings

### Buttons

- **Enroll button (nav):** bg `#d3ffea`, color `#0be27a`, border-radius
  `50px` (pill), padding `10px 15px`, text-transform capitalize
- **Enroll button (nav) hover:** bg `#171932`, color `#ffffff`
- **Enroll button (course card):** bg `#31dc89`, color `#ffffff`,
  border-radius `50px`, font-weight 600
- **Enroll button (course card) hover:** bg `#171932`

### Section Backgrounds

| Section | Background |
|---------|-----------|
| Welcome slider | Dark overlay image (hero) |
| Features top | White (`#ffffff`) |
| Fun fact (stats) | Background image `fact-bg.jpg` with 60% black overlay |
| Courses | White (`#ffffff`) |
| About | White (`#ffffff`) |
| Testimonial | Green theme (`#3ee792` bg) |
| Blog | White (`#ffffff`) |
| FAQs | White (`#ffffff`) |
| Contact | Sky gray bg (`#d3ffea`) |
| Admission/Newsletter | Green theme (`#3ee792` bg) |
| Footer | Dark navy (`#171932`) |

### Spacing

- Section padding: `padding-100-70` (fun fact), `padding-100-50` (faqs),
  `padding-50-50` (admission), `section-padding` (general ~100px top/bottom)

## Section Structure (from preview DOM, in order)

1. **Navbar** — sticky top, logo left, nav links (Home, Features, Courses,
   Testimonial, Blog, FAQs, Contact), "Enroll the Courses" CTA button right
2. **Welcome Slider (Hero)** — full-width slider with dark overlay,
   headline "Develop a passion for learning new things.", CTA buttons,
   slide dots/pagination
3. **Features Top** — 4-column feature cards: Certificate, Expert Instructors,
   Learn from anywhere, Quality Service. Each has icon + title + description.
   "Educrown is trusted by 50,000+ student." counter below.
4. **Fun Fact / Stats** — parallax background image with dark overlay,
   animated counters (students enrolled, courses, certificates, etc.)
5. **Trending Courses** — section title "Our Trending Courses", grid of
   course cards (image, category tag, title, instructor name, "Enroll" button)
   — at least 4 courses shown
6. **About** — split layout: left text block ("Education is the foundation
   upon which we build our future.") + right video popup thumbnail.
   Read More button.
7. **Testimonials** — green theme background, slider with testimonial cards
   (avatar, name, designation, quote), owl-carousel navigation
8. **Blog Feed** — section title "From Our Blog", 3-column blog cards
   (image, date, author, title, excerpt)
9. **FAQs** — accordion-style FAQ items with expand/collapse. At least 3
   questions shown.
10. **Contact** — sky gray background, heading "Any question in mind? Don't
    Worry Contact Us.", contact form (name, email, subject, message, submit)
    + contact info (address, phone, email)
11. **Admission / Newsletter** — green theme background, "Addmission are
    now open" + "Subscribe Our Newsletter" with email input + subscribe button
12. **Footer** — dark navy background, multiple columns: about text,
    quick links, support links, newsletter. "Made with Component Dock" link.

## Requirements

### Feature: Navbar

#### Scenario: Sticky navigation bar

- **GIVEN** the user scrolls down the page
- **THEN** the navbar should remain fixed at the top
- **AND** it should display the logo on the left
- **AND** nav links: Home, Features, Courses, Testimonial, Blog, FAQs, Contact
- **AND** an "Enroll the Courses" button on the right

#### Scenario: Mobile hamburger menu

- **GIVEN** the viewport is narrower than 768px
- **WHEN** the user taps the hamburger icon
- **THEN** the navigation menu should toggle open

### Feature: Welcome Slider (Hero)

#### Scenario: Hero headline displays

- **GIVEN** the page loads
- **THEN** the hero section should show "Develop a passion for learning new things."
- **AND** a call-to-action button should be visible
- **AND** slide navigation dots should be present

#### Scenario: Auto-rotating slides

- **GIVEN** the hero section is visible
- **WHEN** 5 seconds pass without user interaction
- **THEN** the slider should advance to the next slide

### Feature: Features Section

#### Scenario: Feature cards display

- **GIVEN** the features section is in view
- **THEN** 4 feature cards should be visible: Certificate, Expert Instructors, Learn from anywhere, Quality Service
- **AND** each card should have an icon, title, and description

#### Scenario: Trust counter displays

- **GIVEN** the features section loads
- **THEN** a counter showing "50,000+ students" should be visible

### Feature: Fun Fact Stats

#### Scenario: Animated counters on scroll

- **GIVEN** the fun fact section enters the viewport
- **THEN** the stat counters should animate from 0 to their target values
- **AND** the background should be a parallax image with dark overlay

### Feature: Trending Courses

#### Scenario: Course cards grid

- **GIVEN** the courses section loads
- **THEN** at least 4 course cards should be displayed
- **AND** each card should show an image, category, title, instructor, and enroll button

#### Scenario: Enroll button interaction

- **GIVEN** a course card is visible
- **WHEN** the user clicks the Enroll button
- **THEN** it should respond with a visual hover state (bg changes to navy)

### Feature: About Section

#### Scenario: Split layout displays

- **GIVEN** the about section is in view
- **THEN** the left side should show the text "Education is the foundation upon which we build our future."
- **AND** the right side should show a video thumbnail with a play button
- **AND** a "Read More" link should be present

### Feature: Testimonials

#### Scenario: Testimonial slider

- **GIVEN** the testimonial section loads on green background
- **THEN** testimonial cards should be displayed with avatar, name, designation, and quote
- **AND** left/right navigation arrows should be present
- **AND** pagination dots should be visible

#### Scenario: Testimonial navigation

- **GIVEN** the testimonial slider is visible
- **WHEN** the user clicks the next arrow
- **THEN** the next testimonial should slide into view

### Feature: Blog Feed

#### Scenario: Blog cards grid

- **GIVEN** the blog section loads
- **THEN** 3 blog cards should be displayed
- **AND** each card should show an image, date, author name, title, and excerpt

### Feature: FAQs

#### Scenario: FAQ accordion

- **GIVEN** the FAQs section loads
- **THEN** at least 3 FAQ items should be visible with question text
- **AND** clicking a question should expand/collapse the answer

### Feature: Contact Form

#### Scenario: Contact form on gray background

- **GIVEN** the contact section is visible
- **THEN** a form with fields: name, email, subject, message should be present
- **AND** a submit button should be visible
- **AND** contact info (address, phone, email) should display alongside

### Feature: Admission / Newsletter

#### Scenario: Newsletter subscription

- **GIVEN** the newsletter section loads on green background
- **THEN** "Subscribe Our Newsletter" heading should be visible
- **AND** an email input field should be present
- **AND** a subscribe button should be present

### Feature: Footer

#### Scenario: Footer layout

- **GIVEN** the page footer is visible
- **THEN** it should have a dark navy background
- **AND** multiple columns: about, quick links, support
- **AND** a "Made with Component Dock" link linking to https://www.componentdock.com/

## Verification checklist

- [ ] Navbar: sticky on scroll, mobile hamburger, correct nav links, CTA button
- [ ] Hero: headline text, auto-sliding, CTA buttons, slide dots
- [ ] Features: 4 cards with icons + titles + descriptions, trust counter
- [ ] Fun fact: parallax bg, animated counters, dark overlay
- [ ] Courses: grid of 4+ cards, each with image/category/title/enroll
- [ ] About: split layout, text + video popup, Read More link
- [ ] Testimonials: green bg, slider with avatars/arrows/dots
- [ ] Blog: 3 cards with image/date/author/title/excerpt
- [ ] FAQs: accordion with expand/collapse, 3+ questions
- [ ] Contact: form fields + contact info on gray bg
- [ ] Newsletter: green bg, email input, subscribe button
- [ ] Footer: dark navy, multi-column, Component Dock link
- [ ] Responsive: mobile/tablet/desktop breakpoints
- [ ] No ColorLib references in app code (comments, strings, etc.)
- [ ] Placeholder images via picsum.photos
- [ ] 100% test coverage
