# Template: Astute (Education & Courses Landing)

## Purpose

Astute is a single-page online education/courses landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Clever" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Clever" — education & courses landing template
  (source: https://colorlib.com/wp/template/clever/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/clever/
  (HTTP 200, ~80 KB, title "Clever - Education & Courses Template | Home").
  Stylesheets: `style.css` (main) + Bootstrap 4 + owl.carousel + animate
  + magnific-popup + font-awesome + classy-nav plugins. No section IDs;
  Bootstrap 4 grid + utility classes. Fonts: Google Fonts `Open Sans`
  (300–700) + `Raleway` (300–700) via `@import` in style.css.
- **Screenshot:** `clever-free-template.jpg` (TEMPLATES.md line 1626) —
  education landing page with a dark hero overlay, blue-accented buttons,
  stat counters, course cards, tutor carousel, register form, events
  grid, and blog cards. Clean, professional education aesthetic with a
  subtle texture background in multiple sections.
- **Visual design (from DOM + CSS tokens):** Education-platform landing
  page — hero is a full-width image with a dark overlay (`rgba(0,0,0,0.2)`),
  headline "Let's Study Together" + blue "Get Started" pill button. White
  body sections. Primary **`#3762F0`** blue (brand, CTA fill, spinner,
  active states), hover-darker **`#2C56DF`** (button hover), light blue
  tint **`#D7E0FC`** (register-now section overlay), yellow accent
  **`#E3D21B`** (events countdown blocks), near-black **`#1F1F1F`** /
  **`#252525`** headings, grey **`#5A5A5A`** body text, **`#B3B3B3`**
  muted, white **`#FFFFFF`** on dark sections. Fonts: Open Sans for
  headings/body, Raleway for paragraphs. Pill buttons (radius 50px,
  height 40px, min-width 160px). Section padding 100px top/bottom. Subtle
  texture repeat background on courses and register sections. The demo
  brands itself "Clever"; recreation uses the NEW name **Astute**.

## Design tokens

| Token | Value | Usage |
|-------|-------|-------|
| Brand blue | `#3762F0` | CTA buttons, active states, spinner |
| Hover blue | `#2C56DF` | Button hover/focus states |
| Light blue tint | `#D7E0FC` | Register-now section overlay |
| Yellow accent | `#E3D21B` | Events countdown number blocks |
| Headings | `#1F1F1F` / `#252525` | h1–h6, section headings |
| Body text | `#5A5A5A` | Paragraphs, body copy |
| Muted text | `#B3B3B3` | Secondary/muted text |
| Border grey | `#EBEBEB` | Form input borders, btn-2 border |
| Background grey | `#F1F1F1` / `#F7F7F7` | Preloader, subtle bg |
| Font — headings | `Open Sans` (300–700) | h1–h6, nav, links |
| Font — body | `Raleway` (300–700) | p tags, paragraphs |
| Button radius | `50px` (pill) | All `.clever-btn` CTA buttons |
| Button height | `40px` | CTA buttons |
| Button min-width | `160px` | CTA buttons |
| Section padding | `100px 0` | All major sections |
| Overlay (hero) | `rgba(0,0,0,0.2)` | Hero bg-overlay-2by5 |
| Overlay (footer) | `rgba(0,0,0,0.91)` | Footer dark overlay |
| Form input radius | `6px` | Register form inputs |

## Structure (1:1 section order)

1. **Header** (`header.header-area`)
   - Top bar: phone + email contact info (left) + social follow icons (right)
   - Navbar: logo (left), nav links (Home, Pages dropdown, Courses, Instructors, Blog, Contact), search input, Register/Login buttons
   - Mobile: hamburger toggler with slide-in menu

2. **Hero** (`section.hero-area`)
   - Full-width background image with dark overlay (2by5)
   - Centered content: headline "Let's Study Together", "Get Started" pill CTA button

3. **Cool Facts / Stats** (`section.cool-facts-area`)
   - 4-column grid of stat counters: icon + animated number + label
   - Items: 1912 Success Stories, 123 Dedicated Tutors, 89 Scheduled Events, 56 Available Courses
   - White background, padding-top 100px

4. **Popular Courses** (`section.popular-courses-area`)
   - Subtle texture repeat background
   - Section heading "Popular Online Courses"
   - 3-column grid of course cards: image thumbnail, course title, course info, price/date footer
   - Cards have image top, content bottom with meta (date + fee)

5. **Best Tutors** (`section.best-tutors-area`)
   - White background, section heading "The Best Tutors in Town"
   - Owl Carousel of tutor slides: tutor image (left), info card (right) with name, role, bio, social icons
   - 5 slides (Alex Parker repeated in source — use different tutor names in recreation)

6. **Register Now** (`section.register-now`)
   - Texture background + light blue overlay (`rgba(214,223,251,0.7)`)
   - Flex layout: left 45% form (Name, Email, Phone, Site fields + "Send Message" CTA), right 45% countdown promo (heading, description, countdown blocks with yellow bg)

7. **Upcoming Events** (`section.upcoming-events`)
   - White background, section heading "Upcoming events"
   - 3-column grid: event card with image thumbnail + date badge overlay + title, date/time + fee below
   - Events: Networking Day ($45), Open Doors Day (Free), Creative Leadership ($45)

8. **Blog** (`section.blog-area`)
   - White background, section heading "From Our Blog"
   - 2-column grid: blog card with image, headline, author/category meta, excerpt paragraph

9. **Footer** (`footer.footer-area`)
   - Top footer: logo + copyright (Component Dock link)
   - Bottom footer: contact info (phone, email) + social follow icons

## Gherkin scenarios

### Header

```gherkin
Feature: Header navigation
  Scenario: Top bar displays contact info and social links
    Given the user is on the homepage
    Then the top bar shows phone number and email address
    And social media icons (Facebook, Instagram, Twitter) are visible

  Scenario: Navbar shows all navigation links
    Given the user is on the homepage
    Then the navbar displays Home, Pages, Courses, Instructors, Blog, Contact
    And a search input is visible
    And Register and Login buttons are visible

  Scenario: Mobile menu toggles on hamburger click
    Given the user is on a mobile viewport
    When the user clicks the hamburger icon
    Then the navigation menu slides into view
```

### Hero

```gherkin
Feature: Hero section
  Scenario: Hero displays headline and CTA
    Given the user is on the homepage
    Then the hero section shows "Let's Study Together" headline
    And a "Get Started" pill button is visible
    And the hero has a dark background overlay
```

### Cool Facts / Stats

```gherkin
Feature: Stats section
  Scenario: Four stat counters are displayed
    Given the user scrolls to the stats section
    Then 4 stat items are shown in a row
    And each stat has an icon, number, and label
    And the labels are "Success Stories", "Dedicated Tutors", "Scheduled Events", "Available Courses"
```

### Popular Courses

```gherkin
Feature: Popular courses section
  Scenario: Course cards display correctly
    Given the user scrolls to the courses section
    Then the section heading reads "Popular Online Courses"
    And 3 course cards are displayed in a grid
    And each card shows an image, title, and price/date
```

### Best Tutors

```gherkin
Feature: Tutors carousel
  Scenario: Tutor carousel shows tutor slides
    Given the user scrolls to the tutors section
    Then the section heading reads "The Best Tutors in Town"
    And a carousel of tutor cards is displayed
    And each card shows a photo, name, role, bio, and social icons
```

### Register Now

```gherkin
Feature: Register now section
  Scenario: Registration form and countdown are visible
    Given the user scrolls to the register section
    Then a form with Name, Email, Phone, Site fields is displayed
    And a "Send Message" button is visible
    And a countdown/promo area is displayed to the right of the form
    And the section has a light blue tinted background
```

### Upcoming Events

```gherkin
Feature: Events section
  Scenario: Event cards show correct information
    Given the user scrolls to the events section
    Then the section heading reads "Upcoming events"
    And 3 event cards are displayed
    And each card has a thumbnail, date badge, title, time, and fee
```

### Blog

```gherkin
Feature: Blog section
  Scenario: Blog posts are displayed
    Given the user scrolls to the blog section
    Then the section heading reads "From Our Blog"
    And 2 blog cards are displayed
    And each card shows an image, headline, author, category, and excerpt
```

### Footer

```gherkin
Feature: Footer
  Scenario: Footer shows copyright and contact info
    Given the user scrolls to the footer
    Then a logo and copyright notice are visible
    And the copyright links to Component Dock
    And phone and email contact info are displayed
    And social media follow icons are visible
```

## Verification checklist

- [ ] All 9 sections present in correct order
- [ ] Brand color `#3762F0` used for CTA buttons and active states
- [ ] Hover color `#2C56DF` on button hover
- [ ] Pill-shaped buttons (radius 50px)
- [ ] Open Sans for headings, Raleway for body text (via Google Fonts)
- [ ] Texture background on courses and register sections
- [ ] Light blue overlay (`#D7E0FC` at 70% opacity) on register section
- [ ] Hero with dark overlay (2by5 style, 20% black)
- [ ] Stats counters in 4-column grid with icons
- [ ] Tutor carousel with slides
- [ ] Register form (4 fields + submit) + countdown promo side-by-side
- [ ] Events grid (3 cards) with date badges and fees
- [ ] Blog grid (2 cards) with meta info
- [ ] Footer: top logo + copyright (Component Dock link), bottom contact + socials
- [ ] Mobile responsive: hamburger menu, stacked layouts on small screens
- [ ] No references to ColorLib in app code (provenance in spec only)
