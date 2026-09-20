# Template: CoursePulse (Education / Online Courses)

## Purpose

Recreation of ColorLib **WebUni** — a free education/online-courses landing page template.

- **Source:** https://colorlib.com/wp/template/webuni/
- **Preview:** https://preview.colorlib.com/theme/webuni/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/coursepulse`
- **App folder:** `apps/coursepulse`
- **Surge target:** `coursepulse.free.componentdock.com`

## Design Tokens (from live preview CSS)

| Token | Value | Notes |
|-------|-------|-------|
| Brand color | `#d82a4e` | Crimson red — buttons, links, hover, search bg, signup bg, category hover |
| Text heading | `#474747` | h2–h6 default |
| Text body | `#878787` | p, subtitles |
| Light background | `#edf4f6` | Category cards, search inputs, section backgrounds |
| Rating gold | `#fbb710` | Star ratings |
| Button dark | `#000` | `.btn-dark` variant |
| Button fade | `#e4edef` | `.btn-fade` variant, text `#1f1f1f` |
| White | `#fff` | Text on dark bg, form backgrounds |
| Font family | `Raleway` (sans-serif) | Weights 400, 500, 600, 700, 800 |
| Button shape | No radius (square corners) | `min-width: 196px`, `padding: 15px 10px`, `font-weight: 600` |
| Category card hover | Background → `#d82a4e`, text → `#fff` | Transition 0.4s |
| Section spacing | `padding: 115px 0` (`.spad`) | Top and bottom |
| Hero height | `948px` | Full-width background image, centered text |
| Hero heading | `60px`, weight 500 | White text |
| Section titles | `48px`, weight 600 | Centered, 110px horizontal padding |

## Section Structure (from live preview DOM, in order)

1. **Navbar** — Logo left, nav links (Home, About us, Courses, News, Contact) right, Login button (`.site-btn.header-btn`). Transparent overlay on hero.
2. **Hero** — Full-width background image, white centered heading "Get The Best Free Online Courses", subtitle text, signup form (Name + Email + "Sign Up Now" button).
3. **Categories** — "Our Course Categories" heading, 6 category cards in 3-col grid. Each card: thumbnail image top, title + description + course count. Hover turns card crimson with white text. Categories: IT Development (120), Web Design (70), Illustration & Drawing (55), Social Media (40), Photoshop (220), Cryptocurrencies (25).
4. **Search** — Crimson background band, "Search your course" heading, white form bar with Course + Category inputs and "Search Course" button.
5. **Featured Courses** — "Featured Courses" heading, filter tabs (All, Finance, Design, Web Development, Photography), 8 course cards in 4-col grid. Each card: thumbnail with price badge ($15), title + description + student count, author avatar + name + role. Uses MixItup-style filtering.
6. **Signup** — Split layout: left side has crimson background with "Sign up to became a teacher" heading, signup form (Name, Email, Phone, Upload Course, submit). Right side has background image.
7. **Banner/CTA** — "Join Our Community Now!" heading + subtitle + "Register Now" button, centered.
8. **Footer** — Dark background. 5 widget columns: Contact Info, Engineering links, Graphic Design links, Development links, Newsletter (email + Subscribe). Bottom bar: Terms & Conditions / Register / Privacy links + copyright line.

## Gherkin Requirements

```gherkin
Feature: CoursePulse — Education Landing Page

  Background:
    Given the user opens the CoursePulse homepage

  Scenario: Navbar displays logo and navigation links
    Then the navbar shows the logo on the left
    And the navbar contains links: Home, About Us, Courses, News, Contact
    And the navbar shows a Login button

  Scenario: Hero section renders with signup form
    Then the hero displays the heading "Get The Best Free Online Courses"
    And the hero shows a descriptive subtitle
    And the hero contains a signup form with Name and Email inputs
    And the signup form has a "Sign Up Now" button

  Scenario: Categories section shows 6 course categories
    Then the categories section displays "Our Course Categories" heading
    And 6 category cards are visible in a 3-column grid
    And each category card shows a thumbnail, title, description, and course count
    When the user hovers over a category card
    Then the card background changes to crimson and text turns white

  Scenario: Search section renders course search form
    Then the search section has a crimson background
    And the search form contains Course and Category inputs
    And the search form has a "Search Course" button

  Scenario: Featured Courses section with filter tabs
    Then the featured courses section shows "Featured Courses" heading
    And filter tabs are visible: All, Finance, Design, Web Development, Photography
    And 8 course cards are displayed in a 4-column grid
    And each course card shows a thumbnail with price badge, title, description, student count, and author info

  Scenario: Signup section with teacher registration form
    Then the signup section shows "Sign up to became a teacher" heading
    And the signup form contains Name, Email, and Phone inputs
    And the form has an Upload Course button and a submit button
    And the right side of the signup section shows a background image

  Scenario: Banner CTA section
    Then the banner section shows "Join Our Community Now!" heading
    And a "Register Now" button is centered below the text

  Scenario: Footer with widgets and copyright
    Then the footer displays 5 widget columns
    And the footer contains a Contact Info section with address, phone, and email
    And the footer contains link columns for Engineering, Graphic Design, and Development
    And the footer contains a Newsletter form with email input and Subscribe button
    And the footer bottom shows Terms & Conditions, Register, and Privacy links
    And the footer bottom shows a copyright line
    And the footer links to Component Dock
```

## Verification Checklist

- [ ] All 8 sections present in correct order (Navbar → Hero → Categories → Search → Featured Courses → Signup → Banner → Footer)
- [ ] Raleway font loaded from Google Fonts
- [ ] Brand color `#d82a4e` applied to buttons, links, hover states, search bg, signup bg
- [ ] Category cards: 3-col grid, hover turns crimson + white text
- [ ] Course cards: 4-col grid, price badge, author info
- [ ] Filter tabs visible (All / Finance / Design / Web Dev / Photography)
- [ ] Signup form: Name, Email, Phone, Upload, Submit
- [ ] Banner CTA centered with Register Now button
- [ ] Footer: 5 columns, newsletter form, copyright, Component Dock link
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code (only in spec/TEMPLATES.md)
- [ ] Placeholder images via `picsum.photos`
- [ ] Responsive layout works (mobile nav toggle, stacked columns)
