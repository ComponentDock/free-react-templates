# Template: Learnwise (Education & Courses)

## Purpose

Recreation of ColorLib's "Clever" template — an education and online courses website. The React version preserves the same section structure, design tokens, and layout patterns while using modern React 19 + Vite + Tailwind CSS 4 + TypeScript.

- **Source**: [ColorLib Clever](https://colorlib.com/wp/template/clever/)
- **Preview**: https://preview.colorlib.com/theme/clever/
- **Package**: `@free-react-templates/learnwise`
- **Surge target**: `learnwise.free.componentdock.com`

## Design tokens

| Token | Value | Usage |
|---|---|---|
| Primary blue | `#3762f0` | Buttons, links, accent headings |
| Primary blue hover | `#2c56df` | Button hover, link hover |
| Accent yellow | `#e3d21b` | Cool-facts icon accent |
| Text primary | `#1b1b1b` | Body text, headings |
| Text secondary | `#5a5a5a` | Descriptions, meta text |
| Background white | `#ffffff` | Main content background |
| Background light gray | `#f7f7f7` / `#f1f1f1` | Alternating section backgrounds |
| Background gray | `#ebebeb` | Borders, dividers |
| Footer dark | `#252525` | Top footer area |
| Footer darker | `#1f1f1f` | Bottom footer area |
| Register overlay | `rgba(214, 223, 251, 0.7)` | Light blue tint on Register section |
| Font heading | `"Raleway", sans-serif` | Headings, h2-h6 |
| Font body | `"Open Sans", sans-serif` | Body text, paragraphs, meta |
| Button height | `40px` | Primary CTA buttons |
| Button min-width | `160px` | Primary CTA buttons |
| Button radius | `6px` | Rounded corners |
| Border radius | `6px` | Cards, general rounded corners |

## Section structure (top to bottom)

1. **Top Header Bar** — Contact info (phone, email) left-aligned, social icons (Facebook, Instagram, Twitter) right-aligned. Dark bg `#252525` or light `#f7f7f7`.
2. **Navbar** — Logo left, nav links center (Home, Pages dropdown, Courses, Instructors, Blog, Contact), search icon + Register/Login buttons right. Sticky, white background.
3. **Hero** — Full-width parallax background image with dark overlay, centered white text "Let's Study Together" (h2), subtitle paragraph, primary CTA button. Height ~400px.
4. **Cool Facts / Counters** — 4-column grid: icon + large counter number + label. Items: 1912 Success Stories, 123 Dedicated Tutors, 89 Scheduled Events, 56 Available Courses. Light bg.
5. **Popular Courses** — 3-column card grid. Each card: course image, title, meta (author • category), short description, price tag. Subtle bg texture. Section heading "Popular Online Courses".
6. **Best Tutors** — Carousel/slider of tutor cards. Each slide: tutor photo, name, role ("Teacher"), short bio, social icons (Facebook, Instagram, Twitter). Heading "The Best Tutors in Town".
7. **Register Now** — Two-column layout: left side has registration form (Name, Email, select course, textarea, Submit button), right side has "Register Now" heading with countdown/description text. Light blue overlay bg `rgba(214, 223, 251, 0.7)`.
8. **Upcoming Events** — 3-column event cards. Each: event image with date badge overlay + event title, time info (clock icon), fee button. Heading "Upcoming events".
9. **Blog** — 2-column blog cards. Each: blog image, headline, meta (author • category), excerpt. Heading "From Our Blog".
10. **Footer** — Top: logo + copyright. Bottom: contact info (phone, email) + social icons. Dark bg `#252525` / `#1f1f1f`. Must link Component Dock.

## Gherkin scenarios

### Top Header Bar

```gherkin
Scenario: Top header displays contact info and social links
  Given the user visits the homepage
  Then the top header shows "Phone:" with a phone number
  And the top header shows "Email:" with an email address
  And the top header shows social media icon links (Facebook, Instagram, Twitter)

Scenario: Social links open in new tab
  Given the user sees the social icons in the top header
  When the user clicks a social icon
  Then the link opens in a new tab
```

### Navbar

```gherkin
Scenario: Navbar displays all navigation items
  Given the user visits the homepage
  Then the navbar shows links for: Home, Courses, Instructors, Blog, Contact
  And the navbar shows a logo on the left
  And the navbar shows Register and Login buttons

Scenario: Navbar is sticky on scroll
  Given the user scrolls down the page
  Then the navbar remains fixed at the top of the viewport

Scenario: Mobile hamburger menu toggles
  Given the viewport width is less than 768px
  When the user clicks the hamburger icon
  Then the mobile navigation menu slides open
  And the navigation links are visible
```

### Hero Section

```gherkin
Scenario: Hero displays main heading and CTA
  Given the user visits the homepage
  Then the hero section shows "Let's Study Together" heading
  And the hero section shows a primary CTA button
  And the hero section has a background image with dark overlay
```

### Cool Facts / Counters

```gherkin
Scenario: Counters display four statistics
  Given the user scrolls to the cool facts section
  Then four statistics are displayed in a grid:
    | label              | value |
    | Success Stories    | 1912  |
    | Dedicated Tutors   | 123   |
    | Scheduled Events   | 89    |
    | Available Courses  | 56    |
  And each statistic has an icon above the number
```

### Popular Courses

```gherkin
Scenario: Course cards display course information
  Given the user scrolls to the popular courses section
  Then three course cards are displayed in a grid
  And each card shows a course image
  And each card shows a course title
  And each card shows author and category metadata
  And each card shows a short description
  And each card shows a price

Scenario: Section heading displays correctly
  Given the user scrolls to the popular courses section
  Then the heading "Popular Online Courses" is visible
```

### Best Tutors

```gherkin
Scenario: Tutor slides display tutor information
  Given the user scrolls to the best tutors section
  Then a carousel of tutor slides is displayed
  And each slide shows a tutor photo
  And each slide shows the tutor name and role
  And each slide shows a short bio
  And each slide shows social media icon links

Scenario: Carousel navigation works
  Given the tutor carousel is visible
  When the user clicks the next arrow
  Then the next tutor slide is displayed
```

### Register Now

```gherkin
Scenario: Registration form displays all fields
  Given the user scrolls to the register section
  Then a form with Name, Email, Course select, and Message textarea is visible
  And a Submit button is visible
  And the section has a light blue overlay background

Scenario: Form submission validates required fields
  Given the user leaves the Name field empty
  When the user clicks Submit
  Then a validation error is shown for the Name field
```

### Upcoming Events

```gherkin
Scenario: Event cards display event information
  Given the user scrolls to the upcoming events section
  Then three event cards are displayed in a grid
  And each card shows an event image with a date badge
  And each card shows an event title
  And each card shows the event time with a clock icon
  And each card shows an event fee

Scenario: Fee button is interactive
  Given the user sees an event card
  When the user hovers over the fee button
  Then the button changes style (hover state)
```

### Blog

```gherkin
Scenario: Blog cards display post information
  Given the user scrolls to the blog section
  Then two blog cards are displayed in a grid
  And each card shows a blog image
  And each card shows a blog headline
  And each card shows author and category metadata
  And each card shows a short excerpt

Scenario: Blog headline is clickable
  Given the user sees a blog card
  When the user clicks the blog headline
  Then the link navigates to the blog detail page
```

### Footer

```gherkin
Scenario: Footer displays copyright and contact info
  Given the user scrolls to the footer
  Then the footer shows a logo and copyright text
  And the footer shows phone and email contact info
  And the footer shows social media icon links
  And the footer links to Component Dock

Scenario: Footer social links open in new tab
  Given the user sees the social icons in the footer
  When the user clicks a social icon
  Then the link opens in a new tab
```

## Verification checklist

- [ ] All 10 sections present in correct order
- [ ] Top header with contact info and social links
- [ ] Sticky navbar with logo, nav links, search, register/login
- [ ] Hero with parallax background, heading, CTA button
- [ ] Cool facts with 4 counters (1912, 123, 89, 56) and icons
- [ ] Popular courses with 3 cards (image, title, meta, description, price)
- [ ] Best tutors carousel with tutor slides (photo, name, role, bio, social)
- [ ] Register Now split section with form and CTA text
- [ ] Upcoming events with 3 cards (image, date badge, title, time, fee)
- [ ] Blog with 2 cards (image, headline, meta, excerpt)
- [ ] Footer with logo, copyright, contact info, social links, Component Dock link
- [ ] Design tokens: `#3762f0` primary blue, `#e3d21b` accent yellow, Raleway + Open Sans fonts
- [ ] Button style: 40px height, 160px min-width, `#3762f0` bg, uppercase, 6px radius
- [ ] Mobile responsive: hamburger menu, stacked layouts
- [ ] 100% test coverage (lines, functions, branches, statements)
