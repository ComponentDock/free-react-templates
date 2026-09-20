# Template: Scholarium (Education / E-Learning)

## Purpose

Recreation of ColorLib **Unicat** — a multi-section e-learning / university
landing template. The React version lives in `apps/scholarium`.

- **ColorLib source**: https://colorlib.com/wp/template/unicat/
- **Live preview**: https://preview.colorlib.com/theme/unicat/
- **Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Design language**: Professional education — clean white backgrounds,
  cyan-blue accents, Roboto + Roboto Slab typography, Bootstrap-style
  4-column grid, parallax image sections.

## Design tokens

Extracted from the preview's `styles/main_styles.css`.

| Token            | Value                                | Notes                               |
| ---------------- | ------------------------------------ | ----------------------------------- |
| Brand primary    | `#14bdee`                            | Cyan-blue — buttons, active nav, links, accents |
| Dark heading     | `#384158`                            | Section titles, course titles       |
| Body text        | `#76777a`                            | Subtitles, descriptions             |
| Light text       | `#a5a5a5`                            | Top bar, secondary info             |
| White            | `#FFFFFF`                            | Page background, card backgrounds   |
| Light gray bg    | `#f3f3f3`                            | Feature section alternate bg        |
| Dark bg          | `#232323`                            | Top bar, footer background          |
| Brown accent     | `#937c6f`                            | Footer area accent                  |
| Font — body      | `'Roboto', sans-serif`               | All body text                       |
| Font — heading   | `'Roboto Slab', serif`               | Section titles, headings            |
| Border radius    | `3px`                                | Buttons, inputs                     |
| Button bg        | `#14bdee`                            | Primary CTA buttons                 |
| Button text      | `#FFFFFF`                            |                                     |

## Sections (HTML order)

1. **Header** — Top bar (phone, email, register/login) + main nav (Home, About, Courses, Blog, Page, Contact, search, cart icons)
2. **Hero Slider** — Full-width image carousel (3 slides), centered text overlay ("The Premium System Education" / "Future Of Education Technology"), inline search form with keyword input + category dropdown + price dropdown + SEARCH button
3. **Features** — "Welcome To Unicat E-Learning" heading + 4-column icon grid (The Experts, Book & Library, Best Courses, Award & Reward) with icon image + title + description
4. **Popular Courses** — Parallax background, "Popular Online Courses" heading, 3 course cards (image + title + teacher + description + footer with student count, rating, price)
5. **Counter / Registration** — Parallax background, left side: "Register Now" title + description + 4 animated milestones (15 years, 120k, 670+, 320), right side: registration form (name, phone, subject dropdown, message, submit button)
6. **Events** — "Upcoming events" heading, 3 event cards (image, date badge with day/month, title, time, location, description text)
7. **Team** — Parallax background, "The Best Tutors in Town" heading, 4 tutor cards (image, name, specialty, social icons)
8. **Latest News** — "Latest News" heading, 7/5 grid: 1 large featured post (image + title + meta + excerpt + read more) + 4 small posts (title + meta only)
9. **Newsletter** — Parallax background, "sign up for news and offers" + subtitle + email input + subscribe button
10. **Footer** — Dark background, 4 columns: About (logo + text + social), Contact (email, phone, address), Links (Home, About, Contact, Features, Courses, Events, Gallery, FAQs), Mobile (app store images). Copyright bar at bottom.

## Gherkin scenarios

### Hero Slider

```gherkin
Feature: Hero Slider
  Scenario: Displays search form with keyword input, category dropdown, price dropdown, and search button
  Scenario: Search button is styled with brand primary color (#14bdee) and white text
  Scenario: Hero section has a full-width background image overlay
  Scenario: Navigation arrows are visible for carousel navigation
```

### Features

```gherkin
Feature: Features Section
  Scenario: Section title "Welcome To Unicat E-Learning" is centered
  Scenario: 4 feature cards are displayed in a row (desktop) with icon, title, and description
  Scenario: Each feature card is centered with consistent spacing
```

### Popular Courses

```gherkin
Feature: Popular Courses
  Scenario: Section has a parallax background image
  Scenario: 3 course cards displayed in a 3-column grid
  Scenario: Each course card has an image, title, teacher name, description, and footer
  Scenario: Course footer shows student count, rating, and price
  Scenario: Price displays as plain text or with strikethrough for discounted
```

### Counter / Registration

```gherkin
Feature: Counter Registration Section
  Scenario: Left side shows "Register Now" heading, description, and 4 milestone counters
  Scenario: Milestones display numbers with labels (years, k, +)
  Scenario: Right side shows a registration form with name, phone, subject select, message, and submit
  Scenario: Section has a parallax background image
```

### Events

```gherkin
Feature: Events Section
  Scenario: 3 event cards in a 3-column grid
  Scenario: Each event has an image, date badge (day + month), title, time, location, and description
  Scenario: Date badge is styled with accent color
```

### Team

```gherkin
Feature: Team Section
  Scenario: Section has a parallax background image
  Scenario: 4 tutor cards in a 4-column grid (2-column on tablet)
  Scenario: Each card has an image, name, specialty, and social media icons
```

### Latest News

```gherkin
Feature: Latest News
  Scenario: 1 large featured post on the left (image + title + meta + excerpt + "read more" link)
  Scenario: 4 small posts on the right (title + meta only, stacked vertically)
  Scenario: Total of 5 news items visible
```

### Newsletter

```gherkin
Feature: Newsletter
  Scenario: Section has a parallax background image
  Scenario: Title "sign up for news and offers" and subtitle displayed
  Scenario: Email input and subscribe button in a horizontal form
  Scenario: Subscribe button uses brand primary color
```

### Footer

```gherkin
Feature: Footer
  Scenario: 4-column layout: About, Contact, Links, Mobile
  Scenario: About column has logo, description text, and social icons
  Scenario: Contact column shows email, phone, address
  Scenario: Links column shows navigation links
  Scenario: Copyright bar at bottom with Component Dock link
  Scenario: Footer links to https://www.componentdock.com/
```

### Header / Navigation

```gherkin
Feature: Header Navigation
  Scenario: Top bar shows phone, email, and "Register or Login" button
  Scenario: Main nav shows Home, About, Courses, Blog, Page, Contact
  Scenario: Home link is visually active (brand primary color)
  Scenario: Search and cart icons are displayed
  Scenario: Logo shows "Scholarium" with "ium" styled in brand color
```

## Verification checklist

- [ ] All 10 sections present in correct order
- [ ] Brand color #14bdee used for buttons, active nav, accents
- [ ] Roboto body font + Roboto Slab heading font loaded via Google Fonts
- [ ] 3px border-radius on buttons and inputs
- [ ] Parallax backgrounds on Courses, Counter, Team, Newsletter sections
- [ ] Course cards show image, title, teacher, description, footer with stats
- [ ] Event cards show image, date badge, title, time, location
- [ ] Team cards show image, name, specialty, social icons
  - [ ] News section: 1 large + 4 small posts
- [ ] Newsletter form: email input + subscribe button
- [ ] Footer: 4 columns + copyright + Component Dock link
- [ ] Header: top bar + nav + logo
- [ ] Hero slider with search form
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
