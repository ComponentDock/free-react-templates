# Template: LearnSpark (Education / E-Learning)

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

## Gherkin Requirements

### Feature: Navbar

```gherkin
Scenario: Sticky navigation bar
  Given the user scrolls down the page
  Then the navbar should remain fixed at the top
  And it should display the logo on the left
  And nav links: Home, Features, Courses, Testimonial, Blog, FAQs, Contact
  And an "Enroll the Courses" button on the right

Scenario: Mobile hamburger menu
  Given the viewport is narrower than 768px
  When the user taps the hamburger icon
  Then the navigation menu should toggle open
```

### Feature: Welcome Slider (Hero)

```gherkin
Scenario: Hero headline displays
  Given the page loads
  Then the hero section should show "Develop a passion for learning new things."
  And a call-to-action button should be visible
  And slide navigation dots should be present

Scenario: Auto-rotating slides
  Given the hero section is visible
  When 5 seconds pass without user interaction
  Then the slider should advance to the next slide
```

### Feature: Features Section

```gherkin
Scenario: Feature cards display
  Given the features section is in view
  Then 4 feature cards should be visible: Certificate, Expert Instructors, Learn from anywhere, Quality Service
  And each card should have an icon, title, and description

Scenario: Trust counter displays
  Given the features section loads
  Then a counter showing "50,000+ students" should be visible
```

### Feature: Fun Fact Stats

```gherkin
Scenario: Animated counters on scroll
  Given the fun fact section enters the viewport
  Then the stat counters should animate from 0 to their target values
  And the background should be a parallax image with dark overlay
```

### Feature: Trending Courses

```gherkin
Scenario: Course cards grid
  Given the courses section loads
  Then at least 4 course cards should be displayed
  And each card should show an image, category, title, instructor, and enroll button

Scenario: Enroll button interaction
  Given a course card is visible
  When the user clicks the Enroll button
  Then it should respond with a visual hover state (bg changes to navy)
```

### Feature: About Section

```gherkin
Scenario: Split layout displays
  Given the about section is in view
  Then the left side should show the text "Education is the foundation upon which we build our future."
  And the right side should show a video thumbnail with a play button
  And a "Read More" link should be present
```

### Feature: Testimonials

```gherkin
Scenario: Testimonial slider
  Given the testimonial section loads on green background
  Then testimonial cards should be displayed with avatar, name, designation, and quote
  And left/right navigation arrows should be present
  And pagination dots should be visible

Scenario: Testimonial navigation
  Given the testimonial slider is visible
  When the user clicks the next arrow
  Then the next testimonial should slide into view
```

### Feature: Blog Feed

```gherkin
Scenario: Blog cards grid
  Given the blog section loads
  Then 3 blog cards should be displayed
  And each card should show an image, date, author name, title, and excerpt
```

### Feature: FAQs

```gherkin
Scenario: FAQ accordion
  Given the FAQs section loads
  Then at least 3 FAQ items should be visible with question text
  And clicking a question should expand/collapse the answer
```

### Feature: Contact Form

```gherkin
Scenario: Contact form on gray background
  Given the contact section is visible
  Then a form with fields: name, email, subject, message should be present
  And a submit button should be visible
  And contact info (address, phone, email) should display alongside
```

### Feature: Admission / Newsletter

```gherkin
Scenario: Newsletter subscription
  Given the newsletter section loads on green background
  Then "Subscribe Our Newsletter" heading should be visible
  And an email input field should be present
  And a subscribe button should be present
```

### Feature: Footer

```gherkin
Scenario: Footer layout
  Given the page footer is visible
  Then it should have a dark navy background
  And multiple columns: about, quick links, support
  And a "Made with Component Dock" link linking to https://www.componentdock.com/
```

## Verification Checklist

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
