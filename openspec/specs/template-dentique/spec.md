# Template: Dentique (Dental Clinic)

## Purpose

Recreation of the ColorLib "Dentamax" template as a modern React 19 + Vite + Tailwind 4 + TypeScript SPA.
- **Source:** [ColorLib Dentamax](https://colorlib.com/wp/template/dentamax/)
- **Preview:** https://preview.colorlib.com/theme/dentamax/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/dentamax-free-template.jpg
- **Stack:** React 19, Vite (latest), Tailwind CSS 4, TypeScript (strict)
- **Package:** `@free-react-templates/dentique`
- **Deploy:** `https://dentique.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and DOM analysis.

### Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-cyan` | `#65d8ea` | Primary accent — navbar active links, buttons, hover states, section highlights |
| `brand-navy` | `#0f4883` | Text headings, appointment section heading, strong type |
| `brand-gold` | `#ffcf94` | Hero overlay gradient, appointment wrap gradient (rgba 0.35) |
| `brand-dark` | `#1b262c` | Footer background, dark section overlays |
| `brand-light` | `#effcfd` | Appointment section fallback bg, light backgrounds |
| `brand-muted` | `#6c8faf` | Secondary text, service descriptions |

### Gradient

The signature gradient used on hero overlay and appointment section:
```
linear-gradient(-45deg, rgba(255,207,148,0.35) 0%, rgba(227,209,163,0.35) 18%, #65d8ea 100%)
```
Gold → cream → cyan diagonal gradient.

### Typography

- **Body font:** Roboto (Google Fonts) — sans-serif
- **Display/headings font:** Arizonia (Google Fonts) — decorative script
- **Heading colors:** `#0f4883` navy, `#212529` dark
- **Body text:** `#212529` dark
- **Muted text:** `#6c757d` gray

### Button Styles

- **Primary CTA:** rounded pill buttons, `border-radius: 50px`, background `#65d8ea` cyan, white text
- **Outline buttons:** transparent bg, cyan border, cyan text
- **Hover:** darkened cyan
- **Font weight:** 500, uppercase letter-spacing on some CTAs

### Section Backgrounds

| Section | Background |
|---------|-----------|
| Hero | Image + diagonal gradient overlay (gold→cyan) |
| Services (4 cards) | `#effcfd` light cyan |
| Services 2 (8 cards) | White |
| About | White with large image |
| Stats/Counter | Image parallax with dark overlay |
| Testimonials | `#effcfd` light cyan |
| Appointment Form | Gradient overlay (gold→cyan diagonal) |
| Intro CTA | Gradient (gold→cyan) |
| Footer | `#1b262c` dark navy |

### Navbar

- Transparent on hero, becomes white with shadow on scroll
- Active link color: `#65d8ea` cyan
- Container width: 1110px, border-radius: 5px
- Logo text (placeholder): `Dentique`

## Requirements (Gherkin)

### Scenario: Hero Section — Slider

```
Given the user loads the page
When the hero section is visible
Then there should be a full-width image slider with at least 2 slides
And each slide shows a headline in script/display font and a subheadline
And each slide has "See Our Services" and "Book An Appointment" CTAs
And a diagonal gradient overlay (gold→cyan) is applied over the images
```

### Scenario: Services Section — 4 Cards

```
Given the user scrolls to the services section
When the section is visible
Then there are exactly 4 service cards in a row
And each card has an icon (Font Awesome or Lucide), title, and description
And the section background is light cyan (#effcfd)
And the titles are: Emergency Service, Qualified Dentist, General Treatment, Online Appointment
```

### Scenario: Services Section — 8 Feature Cards

```
Given the user scrolls to the expanded services section
When the section is visible
Then there are exactly 8 feature cards in 2 rows of 4
And each card has an icon, title, and short description
And the titles include: Easy Booking, Experience, Flexible Schedule, Best Price Guarantee
And the section background is white
```

### Scenario: About Section

```
Given the user scrolls to the about section
When the section is visible
Then there is a heading "We Are Dentique — A Dental Clinic"
And there is descriptive paragraph text
And there is a "Get in touch with us" CTA button
And there is a large image on the right side
```

### Scenario: Stats/Counter Section

```
Given the user scrolls to the stats section
When the section is visible
Then there are 3+ stat counters displayed
And each stat shows a number and a label (e.g. "Years of Experience", "Happy Patients")
And the section uses a parallax background image with dark overlay
```

### Scenario: Testimonials Section

```
Given the user scrolls to the testimonials section
When the section is visible
Then there are 3+ testimonial cards in a carousel or grid
And each card has a quote, author name, and role
And the section background is light (#effcfd)
```

### Scenario: Appointment Form

```
Given the user scrolls to the appointment section
When the section is visible
Then there is a heading "Appointment Form"
And the form contains fields: First Name, Last Name, Phone, Date, Time, Message
And there is a "Make An Appointment" submit button
And the section has a diagonal gradient background (gold→cyan)
```

### Scenario: CTA/Intro Section

```
Given the user scrolls to the intro CTA section
When the section is visible
Then there is a headline and description text
And a CTA button
And the section has a gradient background (gold→cyan)
```

### Scenario: Navbar Behavior

```
Given the page loads
When the navbar is at the top
Then it is transparent with white text
And when the user scrolls down
Then the navbar becomes white with a shadow
And the active link is highlighted in cyan (#65d8ea)
And the nav items are: Home, About, Services, Dentist, Blog, Gallery, Contact
```

### Scenario: Footer

```
Given the user scrolls to the footer
When the footer is visible
Then there is a phone number and email link
And there is a copyright line with "Component Dock" link
And the footer background is dark navy (#1b262c)
And there are light-colored text elements
```

### Scenario: Responsive Layout

```
Given the user views the page on a mobile device (< 768px)
When the layout adapts
Then the navbar collapses to a hamburger menu
And service cards stack vertically
And the hero text remains readable
And the appointment form fields stack vertically
```

### Scenario: Accessibility

```
Given the page loads
When a screen reader navigates the page
Then all images have alt text
And interactive elements are keyboard-focusable
And form inputs have associated labels
And the page has a valid heading hierarchy (h1 → h2 → h3)
```

## Verification Checklist

- [ ] Hero slider renders with 2+ slides and gradient overlay
- [ ] 4 service cards render with icons and correct content
- [ ] 8 expanded service cards render in 2×4 grid
- [ ] About section with image, heading, and CTA
- [ ] Stats counters render with parallax background
- [ ] Testimonials render in carousel/grid
- [ ] Appointment form with all fields functional
- [ ] CTA intro section with gradient
- [ ] Navbar transparent → white on scroll
- [ ] Footer with dark background, contact info, Component Dock link
- [ ] Responsive: mobile hamburger, stacked cards, stacked form
- [ ] Accessibility: alt text, keyboard nav, labels, heading hierarchy
- [ ] No ColorLib references in app code
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `public/CNAME` = `dentique.free.componentdock.com`
- [ ] Package name = `@free-react-templates/dentique`
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Build succeeds
