# Template: Selfcraft (Personal / vCard Website)

## Purpose

Selfcraft is a personal vCard / portfolio website in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Personify" free
template (source: https://colorlib.com/wp/template/personify/, preview:
https://preview.colorlib.com/theme/personify/), built under a DIFFERENT name
(**Selfcraft**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a multi-page personal/vCard site with a distinctive split
layout: the left half holds scrollable main content (bio, portfolio, resume,
contact), while the right half is a fixed full-height profile image. Navigation
is an offcanvas menu (slides in from the right, dark navy background) with
links to Bio, Portfolio, Resume, and Contact pages. The template uses Open Sans
for body text and Playfair Display for headings, with a coral/rose pink accent
color (#F73859).

**WHAT MAKES SELFCRAFT DISTINCT (signature behaviors):**

1. **Split-screen layout with fixed profile image.** On screens ≥576px, the
   viewport is split 50/50: left half is scrollable `<main>` content (7%
   padding), right half is a fixed `<aside>` showing a full-viewport profile
   image (`background-size: cover`, `position: fixed`). On mobile (<576px),
   the profile image stacks above the content as a 400px-tall banner.
2. **Offcanvas slide-in menu.** A "Menu" toggle (fixed top-right, uppercase
   13px, letter-spacing 0.1em) slides a 240px-wide panel from the right edge.
   The panel has a dark navy (#283149) background, white nav links (18px),
   and social icon row. The `.site-wrap` translates -240px when open. Active
   link is highlighted in coral (#F73859).
3. **Four-section single-page design.** Bio (hero with name, title, bio
   paragraphs, social links), Portfolio (grid of projects with coral overlay
   hover effect), Resume (experience + education timeline lists), Contact
   (form with name, email, phone, message, and Send Message button).
4. **Portfolio hover overlay.** Each portfolio item gets a coral (#F73859)
   overlay that fades in on hover, with white project name and subtitle text
   centered vertically.
5. **Minimalist aesthetic.** White background, generous whitespace, clean
   typography hierarchy. No heavy graphics or gradients. The only accent
   color is the coral/rose pink.

## Design Tokens

Extracted from the preview CSS (style.css + bootstrap.css):

| Token             | Value                                       | Source                    |
| ----------------- | ------------------------------------------- | ------------------------- |
| **Body font**     | "Open Sans", Arial, sans-serif              | `font-family` on `body`   |
| **Heading font**  | "Playfair Display", Times, serif            | `font-family` on `h1-h3`  |
| **Body color**    | `#b3b3b3` (medium grey)                     | `color` on `body`         |
| **Heading color** | `#000000` (black)                           | `color` on `h1, h2, h3`   |
| **Accent / brand**| `#F73859` (coral/rose pink)                 | `.btn-primary:hover`, `.offcanvas_menu ul li.active a`, `.custom-media .icon span`, portfolio overlay |
| **Button hover**  | `#f96982` (lighter coral variant)           | `.btn.btn-primary:hover`  |
| **Nav menu bg**   | `#283149` (dark navy)                       | `.offcanvas_menu`         |
| **Page bg**       | `#ffffff` (white)                           | `body` background         |
| **Loader accent** | `#f4b214` (yellow/gold)                     | loader spinner stroke     |
| **Body size**     | 15px, line-height 1.8, weight 400           | `body`                    |
| **Btn style**     | uppercase, 13px, letter-spacing 0.2em, border-radius 0, border-width 2px | `.btn` |
| **Form input**    | height 50px, border-width 2px, no shadow    | `.form-control`           |
| **Portfolio hover**| coral overlay, white text, transition 0.3s | `.portfolio-list li a`    |

## Layout Structure

The original template has FOUR separate HTML pages (Bio, Portfolio, Resume,
Contact) sharing the same split layout. The React recreation consolidates
these into a single-page app with route/tab switching.

### Shared Layout (all views)
- `<aside>` — fixed profile image (right half, ≥576px; stacked banner on mobile)
- `<main>` — scrollable content area (left half)
- Offcanvas menu toggle — fixed top-right
- Offcanvas menu panel — slides from right, 240px wide, dark navy bg

### Bio Page (default view)
- `<h1>` — "Hi, I'm [Name]" (Playfair Display)
- `<p class="lead">` — Title/role (e.g. "Web Designer & Developer")
- Bio paragraphs (2-3 paragraphs of descriptive text)
- Social links row (Twitter, Facebook, Instagram as text links)

### Portfolio Page
- `<h1>` — "Portfolio"
- Portfolio grid: list of project items, each with:
  - Image (placeholder via picsum.photos)
  - Coral overlay on hover
  - Project name (h3) + subtitle (span), white text, centered

### Resume Page
- `<h1>` — "Experience"
- Resume list: timeline of experience items, each with:
  - Date (grey, 0.6 opacity)
  - Role + Company (h3, 24px, black)
  - Description paragraph
- `<h1>` — "Education"
- Resume list: education items (same format)

### Contact Page
- `<h1>` — "Contact Me"
- Form with four fields:
  - Full Name (text input, 50px height, 2px border)
  - Email Address (text input)
  - Phone (text input)
  - Message (textarea)
  - Send Message button (btn-primary, full-width)

## Gherkin Requirements

### Feature: Selfcraft — Personal vCard Website

#### Scenario: Bio page renders by default
  Given the user opens the Selfcraft site
  Then the Bio view is displayed
  And the heading "Hi, I'm Kate Woodman" is visible
  And the subtitle "Web Designer & Developer" is visible
  And social links (Twitter, Facebook, Instagram) are visible

#### Scenario: Offcanvas menu toggle
  Given the user is on any view
  When the user clicks the "Menu" toggle button
  Then the offcanvas menu slides in from the right
  And the menu shows links: Bio, Portfolio, Resume, Contact
  And the menu shows social icons (Twitter, Facebook, Instagram)

#### Scenario: Offcanvas menu navigation
  Given the offcanvas menu is open
  When the user clicks "Portfolio"
  Then the Portfolio view is displayed
  And the offcanvas menu closes

#### Scenario: Mobile responsive layout
  Given the viewport width is less than 576px
  Then the profile image appears as a 400px banner above the content
  And the main content is full-width below the banner
  And the navbar has a black background

#### Scenario: Portfolio grid with hover overlay
  Given the user navigates to the Portfolio view
  Then a grid of project items is displayed
  And each project shows an image
  When the user hovers over a project item
  Then a coral (#F73859) overlay appears
  And the project name and subtitle are visible in white

#### Scenario: Resume timeline
  Given the user navigates to the Resume view
  Then the "Experience" section shows a list of job entries
  And each entry has a date, role + company, and description
  And the "Education" section shows a list of education entries

#### Scenario: Contact form
  Given the user navigates to the Contact view
  Then a form with Full Name, Email, Phone, and Message fields is visible
  And a "Send Message" button is visible
  And the form fields have 50px height and 2px borders

#### Scenario: Profile image fixed on desktop
  Given the viewport width is 576px or greater
  Then the profile image is fixed on the right half of the viewport
  And the main content scrolls independently on the left half

#### Scenario: Design tokens applied
  Given the Selfcraft site loads
  Then the body font is "Open Sans"
  And the heading font is "Playfair Display"
  And the accent color is coral (#F73859)
  And the offcanvas menu background is dark navy (#283149)
  And buttons are uppercase with 0.2em letter-spacing and no border-radius

## Verification Checklist

- [ ] Split layout: 50/50 on desktop, stacked on mobile (<576px)
- [ ] Profile image: fixed right half (desktop), 400px banner (mobile)
- [ ] Offcanvas menu: 240px from right, dark navy bg, slides with site-wrap transform
- [ ] Four views: Bio, Portfolio, Resume, Contact
- [ ] Bio: heading, subtitle, bio paragraphs, social links
- [ ] Portfolio: grid with coral hover overlay
- [ ] Resume: experience + education timeline lists
- [ ] Contact: form with four fields + submit button
- [ ] Fonts: Open Sans (body), Playfair Display (headings)
- [ ] Accent color: #F73859 throughout (buttons, active states, portfolio overlay, icons)
- [ ] Footer links to Component Dock (https://www.componentdock.com/)
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] 100% test coverage
- [ ] Spec + docs at openspec/specs/template-selfcraft/ and docs/templates/selfcraft/
