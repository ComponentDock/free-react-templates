# Template: Playville (Children's Education / Kindergarten)

## Purpose

Recreation of the ColorLib **Kiddos** template as a single-page React app.

- **Source:** https://colorlib.com/wp/template/kiddos/
- **Preview:** https://preview.colorlib.com/theme/kiddos/
- **New name:** `playville` (apps/playville, @free-react-templates/playville)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens (extracted from preview CSS)

| Token            | Value                    | Usage                                      |
| ---------------- | ------------------------ | ------------------------------------------ |
| primary          | #1eaaf1 (sky blue)       | Navbar active, links, icons, counters      |
| secondary        | #fda638 (amber/orange)   | CTA buttons, section headings              |
| tertiary         | #8cc152 (green)          | Service column bg, accent                  |
| quaternary       | #f1453d (red)            | Service column bg, overlay tint            |
| fifth            | #5d50c6 (purple)         | Service column bg, blog date badge, quote  |
| dark             | #232323                  | Footer background                          |
| dark-alt         | #3c312e                  | Secondary dark bg                          |
| bg-light         | #fafafa                  | Alternate section backgrounds              |
| font-body        | "Work Sans", sans-serif   | Body text, 16px, line-height 1.8           |
| font-display     | "Fredericka the Great"    | Decorative/brand headings (hand-drawn)     |
| btn-radius       | 40px (pill)              | All buttons                                |
| icon-circle-bg   | white / #1eaaf1          | Service icons (white circle on color bg)   |
| overlay-opacity  | 0.2–0.4                  | Hero & parallax section overlays           |

## Sections (DOM order from preview)

1. **TopInfoBar** — contact strip (address, email, phone) on primary bg
2. **Navbar** — transparent → white on scroll, brand "Playville", links: Home, About, Teacher, Courses, Pricing, Blog, Contact
3. **HeroSlider** — full-width Swiper carousel, 2 slides, background images + overlay, centered headline + secondary CTA button
4. **ServicesStrip** — 4 equal columns on colored backgrounds (primary/tertiary/fifth/quaternary), each with circular icon + heading + description
5. **WelcomeAbout** — split layout: left column "Welcome to Playville Learning School" (bg-light) with Read More CTA; right column "What We Offer" with 2×2 grid of icon+text feature items
6. **IntroBanner** — full-width parallax section with dark overlay, headline "We Are The Best School For Your Kids", description text
7. **StaffSection** — heading + grid of teacher/staff cards with hover social links reveal
8. **CounterSection** — parallax background with 4 animated stat counters (students, staff, awards, graduates)
9. **Testimonials** — bg-light, Swiper carousel of testimonial cards with user image + quote + name + position
10. **AppointmentForm** — parallax background, heading + contact form (name, email, date, time, message, submit)
11. **BlogSection** — heading + grid of blog entry cards with date badge, image, title, meta
12. **GallerySection** — image grid with hover zoom icon overlay
13. **Footer** — dark bg (#232323), 5 widget columns (About/logo, Categories, Recent Posts, Newsletter subscribe, Contact info), social icons, bottom copyright

## Gherkin requirements

### Feature: TopInfoBar
```gherkin
Scenario: Contact info bar renders
  Given the page loads
  Then I see an address, email, and phone number in a horizontal bar
  And the bar has a blue (primary) background
```

### Feature: Navbar
```gherkin
Scenario: Navigation links present
  Given the page loads
  Then I see a navbar with brand "Playville"
  And nav links: Home, About, Teacher, Courses, Pricing, Blog, Contact

Scenario: Navbar becomes sticky on scroll
  Given I scroll past the hero
  Then the navbar background changes to white
  And the navbar sticks to the top of the viewport
```

### Feature: HeroSlider
```gherkin
Scenario: Hero slider shows slides
  Given the page loads
  Then I see a full-width hero section with a background image
  And a centered headline and a CTA button

Scenario: Slides auto-advance
  Given the hero slider is visible
  When 5 seconds pass
  Then the slider transitions to the next slide
```

### Feature: ServicesStrip
```gherkin
Scenario: Four service columns render
  Given the page loads
  Then I see 4 service columns in a row
  And each column has a circular icon, heading, and description
  And each column has a different background color
```

### Feature: WelcomeAbout
```gherkin
Scenario: Welcome section renders
  Given the page loads
  Then I see a "Welcome to Playville" heading
  And a "Read More" button
  And a "What We Offer" section with 4 feature items in a 2-column grid
```

### Feature: IntroBanner
```gherkin
Scenario: Intro parallax banner renders
  Given the page loads
  Then I see a full-width parallax section with overlay
  And a heading and description text
```

### Feature: StaffSection
```gherkin
Scenario: Staff cards render
  Given the page loads
  Then I see a "Our Teacher" heading
  And teacher cards with image, name, and position
  And hovering a card reveals social media icons

Scenario: Staff hover effect
  Given a staff card is visible
  When I hover over it
  Then the social icons overlay appears
  And the card image shifts slightly
```

### Feature: CounterSection
```gherkin
Scenario: Stats counters render
  Given the page loads
  Then I see 4 stat items with a large number and label
  And each number animates on scroll into view
```

### Feature: Testimonials
```gherkin
Scenario: Testimonials carousel renders
  Given the page loads
  Then I see a testimonials section on light background
  And testimonial cards with user image, quote, name, and position
  And the carousel auto-advances
```

### Feature: AppointmentForm
```gherkin
Scenario: Appointment form renders
  Given the page loads
  Then I see a "Make an Appointment" heading
  And form fields: name, email, date, time, message
  And a submit button
```

### Feature: BlogSection
```gherkin
Scenario: Blog entries render
  Given the page loads
  Then I see a "Latest News" heading
  And blog entry cards with date badge, image, title, and meta info
```

### Feature: GallerySection
```gherkin
Scenario: Gallery grid renders
  Given the page loads
  Then I see an image gallery grid
  And hovering an image shows a zoom icon overlay
```

### Feature: Footer
```gherkin
Scenario: Footer renders
  Given the page loads
  Then I see a dark footer with 5 widget columns
  And a "Component Dock" attribution link
  And social media icon links
```

## Verification checklist

- [ ] All 13 sections present in correct DOM order
- [ ] Design tokens match: primary #1eaaf1, secondary #fda638, tertiary #8cc152, quaternary #f1453d, fifth #5d50c6
- [ ] Font: Work Sans for body, decorative font for brand/display
- [ ] Buttons: pill-shaped (border-radius 40px)
- [ ] Hero: full-width Swiper with overlay + centered headline + CTA
- [ ] Services strip: 4 colored columns with circular white icons
- [ ] Welcome/About: split layout with feature grid
- [ ] Parallax sections: Intro, Counter, Appointment (background-image covers with overlay)
- [ ] Staff cards: hover reveals social icons
- [ ] Counter: animated number counting on scroll
- [ ] Testimonials: Swiper carousel on bg-light
- [ ] Blog: date badge overlay on images
- [ ] Gallery: hover zoom overlay
- [ ] Footer: dark bg, Component Dock link, social icons
- [ ] Responsive: mobile hamburger nav, stacked columns
- [ ] No ColorLib references in app code (provenance only in spec)
