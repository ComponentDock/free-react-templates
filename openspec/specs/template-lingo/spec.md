# Template: Lingo (Education / Language Learning)

## Purpose

Recreation of [ColorLib "Lingua"](https://colorlib.com/wp/template/lingua/)
using React 19 + Vite + Tailwind CSS 4 + TypeScript.

- **Source slug:** `lingua`
- **Preview URL:** https://preview.colorlib.com/theme/lingua/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/lingua-free-template.jpg
- **Stack:** Vite (latest) + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens

Extracted from the preview's `styles/main_style.css`:

### Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-brand-primary` | `#2e21df` | Deep indigo — CTA buttons, course mark badges, accent |
| `--color-brand-secondary` | `#937c6f` | Warm taupe/brown — register section background |
| `--color-brand-accent` | `#f9cf0e` | Golden yellow — free course badge, hover states |
| `--color-dark-bg` | `#252525` | Hero section background, footer background |
| `--color-dark-alt` | `#232323` | Footer body background |
| `--color-light-bg` | `#f1f1f1` | Courses section background |
| `--color-white` | `#FFFFFF` | Card backgrounds, instructor section, events section |
| `--color-text-primary` | `#000000` | Headings |
| `--color-text-muted` | `#7c7c7c` / `#929292` | Body text, subtitles |

### Typography

| Element | Font | Weight | Notes |
|---|---|---|---|
| Body / Headings | Poppins | 400, 500, 600, 700 | Primary font |
| Secondary | Montserrat | 400 | Used sparingly for accents |

### Buttons & badges

- CTA button ("get started"): white text on indigo `#2e21df` background, `border-radius: 3px`, padding ~14px 35px, uppercase, bold
- Course "free" badge: golden `#f9cf0e` background, `border-radius: 3px`, uppercase text
- Course "paid" mark: indigo `#2e21df` background, same radius

### Section backgrounds (top to bottom)

1. Hero: dark `#252525` with background image
2. Courses: light `#f1f1f1`
3. Instructors: white `#FFFFFF`
4. Register: warm taupe `#937c6f`
5. Events: white `#FFFFFF`
6. Blog: light gray `#f1f1f1` (left categories) + white (right featured post)
7. Footer: dark `#232323`

## Section structure (DOM order)

1. **Header** — top bar (phone number, language dropdown, social icons) + main nav (Home, Courses, Instructors, Events, Blog, Contact) + search icon + hamburger mobile menu
2. **Hero** — dark background image, centered headline "Learn Languages Easily", subtitle, CTA button "get started"
3. **Courses** — section title "Our Courses", 3-column grid of course cards (image, title, instructor name + language tag, lorem ipsum description, footer with student count + star rating, free/paid badge overlay)
4. **Instructors** — section title "Meet Our Team", 3-column grid of instructor cards (circular photo, name, "Teacher" title, short bio, social media icons)
5. **Register** — taupe background, "Courses For Free" title, registration form (4 fields: name, email, phone, subject), countdown timer area
6. **Events** — section title "Upcoming Events", 3-column grid of event cards (image with date overlay badge showing day + month, title, category tag)
7. **Blog** — split layout: left side has title "From Our Blog" + 6-category grid (travel, languages, cultures, fashion, cooking, hobbies — each with image + title); right side has featured post with large image + category tag + title + description
8. **Footer** — newsletter subscribe (logo + "Subscribe" title + input), About Us column, Help & Support column, Privacy & Terms column + copyright bar

## Gherkin requirements

```gherkin
Feature: Lingo — Language Learning Website Template

  Background:
    Given the template is loaded at the root URL

  Scenario: Header navigation renders all links
    Then I should see a navigation bar with links: Home, Courses, Instructors, Events, Blog, Contact
    And a search icon is visible in the header
    And a hamburger menu icon is visible for mobile

  Scenario: Hero section displays correctly
    Then I should see a dark background section
    And the headline "Learn Languages Easily" is displayed
    And a "get started" CTA button is visible

  Scenario: Courses section shows course cards
    Then I should see a section titled "Our Courses"
    And 3 course cards are displayed in a grid
    And each card shows an image, title, instructor name, language tag, description, student count, and star rating
    And course badges show "Free" (golden) or a price (indigo)

  Scenario: Instructors section shows team members
    Then I should see a section titled "Meet Our Team"
    And 3 instructor cards are displayed
    And each card shows a circular photo, name, "Teacher" title, bio, and social icons

  Scenario: Register section has a form
    Then I should see a taupe/brown background section
    And the title "Courses For Free" is displayed
    And a registration form with fields for name, email, phone, and subject is present
    And a countdown timer area is visible

  Scenario: Events section shows upcoming events
    Then I should see a section titled "Upcoming Events"
    And 3 event cards are displayed
    And each card shows an image, date badge (day + month), title, and category tag

  Scenario: Blog section shows categories and featured post
    Then I should see a section titled "From Our Blog"
    And 6 blog category cards are shown on the left (travel, languages, cultures, fashion, cooking, hobbies)
    And a featured blog post with image, category, title, and description is shown on the right

  Scenario: Footer has newsletter and columns
    Then I should see a dark footer
    And a newsletter subscribe input is present
    And columns for About Us, Help & Support, and Privacy & Terms are shown
    And a copyright bar is at the bottom
    And the footer links to https://www.componentdock.com/

  Scenario: Responsive layout works on mobile
    When I resize to mobile viewport (375px)
    Then the hamburger menu icon is visible
    And course cards stack vertically
    And instructor cards stack vertically
    And event cards stack vertically
    And the blog section stacks vertically
```

## Verification checklist

- [ ] All 8 sections rendered in correct order
- [ ] Header nav has 6 links + search + hamburger
- [ ] Hero: dark bg, headline, subtitle, CTA button
- [ ] Courses: 3 cards with image, title, instructor, language, description, students, rating, badge
- [ ] Instructors: 3 cards with circular photo, name, title, bio, social icons
- [ ] Register: taupe bg, form with 4 fields, countdown area
- [ ] Events: 3 cards with image, date badge, title, tag
- [ ] Blog: 6 category cards + 1 featured post
- [ ] Footer: newsletter, 3 columns, copyright, Component Dock link
- [ ] Mobile responsive: hamburger menu, stacked grids
- [ ] Design tokens match: brand indigo `#2e21df`, taupe `#937c6f`, golden `#f9cf0e`, dark `#252525`
- [ ] Fonts: Poppins (primary), Montserrat (secondary)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
