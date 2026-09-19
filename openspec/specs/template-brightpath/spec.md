# Template: BrightPath (Education / Courses)

## Purpose

BrightPath is a single-page education and online-courses landing page template
in the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Clever" education template design, built under a different name
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Original ColorLib source:** "Clever" — Education & Courses Template
- **ColorLib page:** https://colorlib.com/wp/template/clever/
- **Live preview:** https://preview.colorlib.com/theme/clever/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/clever-free-template.jpg

## Design reference (replication findings)

- **Original:** ColorLib "Clever" — education/courses landing page with a dark
  image hero overlay, stat counters, popular courses grid, tutor carousel,
  registration form + countdown, upcoming events, blog posts, and a dark
  two-tone footer.
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/clever/`
  (HTTP 200, ~659 lines HTML). DOM + `style.css` (1964 lines) extracted and
  analyzed; tokens below come from that stylesheet. Screenshot viewed via URL
  reference.
- **Visual design (from live preview DOM + CSS):** clean education aesthetic —
  blue `#3762f0` brand on a light `#f7f7f7` / white canvas. Gray top header bar
  with phone + email + social icons. White sticky navbar with logo left, nav
  links centered (Home, Pages dropdown, Courses, Instructors, Blog, Contact),
  search input + Register/Login buttons right. Hero: full-width background image
  with dark overlay (`rgba(0,0,0,0.6)`), centered white text "Let's Study
  Together" + blue "Get Started" button. Four stat counters (Success Stories,
  Dedicated Tutors, Scheduled Events, Available Courses) on light gray. Popular
  Online Courses: 3-column card grid with course images, instructor name,
  category, description, seat count, star rating, and price/Free badge. Best
  Tutors: carousel of tutor cards with circular thumbnails, name, role, blurb,
  social icons — blue hover background. Register Now: split layout — left:
  white rounded form (Name, Email, Phone, Site, Send Message button), right:
  countdown timer — both over a translucent blue `rgba(214,223,251,0.7)` overlay.
  Upcoming Events: 3-column event cards with images, date badge, title, time,
  price. Blog: 2-column posts with images, headline, author, category, blurb.
  Footer: top (dark `#252525`) with logo + copyright, bottom (darker `#1f1f1f`)
  with contact info + social icons. Yellow accent `#e3d21b` on star ratings.
  Font families: **Raleway** (headings), **Open Sans** (body). Border radius 6px
  on buttons and cards.

## Design tokens

| Token | Value | Usage |
|-------|-------|-------|
| `brand` | `#3762f0` | Primary blue — buttons, active states, sticky nav, "Free" badges |
| `brand-hover` | `#2c56df` | Darker blue — button hover, active states |
| `accent-yellow` | `#e3d21b` | Star ratings on course cards |
| `accent-light-blue` | `#d7e0fc` | Register/Login button active/hover background |
| `bg-light` | `#f7f7f7` | Top header, cool facts, course card meta, body background |
| `bg-white` | `#ffffff` | Navbar, course cards, registration form, popular courses bg |
| `text-primary` | `rgba(0,0,0,0.8)` | Body text (dark) |
| `text-secondary` | `#5a5a5a` | Secondary body text |
| `text-muted` | `rgba(0,0,0,0.3)` | Meta text, inactive links |
| `text-white` | `#ffffff` | Hero text, footer, overlay text |
| `footer-top` | `#252525` | Top footer background |
| `footer-bottom` | `#1f1f1f` | Bottom footer background |
| `overlay` | `rgba(0,0,0,0.6)` | Hero background overlay |
| `register-overlay` | `rgba(214,223,251,0.7)` | Register Now section translucent blue |
| `font-heading` | `"Raleway", sans-serif` | Headings, navbar links |
| `font-body` | `"Open Sans", sans-serif` | Body text, meta, footer |
| `radius` | `6px` | Buttons, form inputs, cards |
| `section-padding` | `100px 0` | Standard section spacing |

## Section order (1:1 from DOM)

1. **Top Header Bar** — gray `#f7f7f7` strip: phone + email links left, "Follow us" + social icons (Facebook, Instagram, Twitter) right.
2. **Navbar** — white, logo left, nav links (Home, Pages dropdown, Courses, Instructors, Blog, Contact) center, search input + Register/Login buttons right. Sticky on scroll. Mobile hamburger toggle.
3. **Hero** — full-width background image with dark overlay, centered white heading "Let's Study Together", blue "Get Started" CTA button.
4. **Cool Facts (Stats)** — 4-column row on light gray: icon + counter number + label (Success Stories: 1912, Dedicated Tutors: 123, Scheduled Events: 89, Available Courses: 56). Fade-in animation.
5. **Popular Courses** — section heading "Popular Online Courses", 3-column card grid. Each card: course image top, course content (title, instructor + category meta, description), seat/rating/price bar bottom. One card marked "Free" with blue badge. Cards have subtle shadow and hover effect.
6. **Best Tutors** — section heading "The Best Tutors in Town", horizontal carousel of 5 tutor cards. Each: circular thumbnail, name, role "Teacher", blurb paragraph, social icon row. Cards have hover effect with blue background overlay.
7. **Register Now** — split layout on translucent blue overlay. Left: white rounded form card with heading "Courses For Free", 4 fields (Name, Email, Phone, Site), full-width blue "Send Message" button. Right: "Register Now" heading, descriptive paragraph, countdown timer (days/hours/min/sec).
8. **Upcoming Events** — section heading "Upcoming events", 3-column event cards. Each: event image with date badge overlay, event title, date/time row, price/Free badge.
9. **Blog** — section heading "From Our Blog", 2-column blog cards. Each: blog image, headline, author + category meta, description paragraph.
10. **Footer** — two-part: top (dark `#252525`): logo + copyright text; bottom (darker `#1f1f1f`): phone + email left, social icons right. Footer MUST link `https://www.componentdock.com/` as "Component Dock".

## Gherkin scenarios

### Top Header Bar
- **Scenario: Top header displays contact info and social links**
  - Given the user visits the BrightPath homepage
  - Then a top header bar is visible at the top of the page
  - And it shows a phone number and email address
  - And it shows "Follow us" text with Facebook, Instagram, and Twitter social icons

### Navbar
- **Scenario: Navbar displays logo and navigation links**
  - Given the user visits the BrightPath homepage
  - Then a navbar is visible below the top header
  - And it shows a logo on the left
  - And it shows navigation links: Home, Courses, Instructors, Blog, Contact
  - And it shows a search input
  - And it shows Register and Login buttons on the right

- **Scenario: Navbar becomes sticky on scroll**
  - Given the user scrolls down past the hero
  - Then the navbar sticks to the top of the viewport
  - And it maintains a white background

### Hero
- **Scenario: Hero displays headline and CTA**
  - Given the user visits the BrightPath homepage
  - Then a full-width hero section is visible
  - And it shows the heading "Let's Study Together" in white text
  - And it shows a blue "Get Started" button centered below the heading

### Cool Facts
- **Scenario: Stats counters are displayed**
  - Given the user visits the BrightPath homepage
  - Then four stat counters are visible in a row
  - And each shows an icon, a number, and a label
  - And the labels are "Success Stories", "Dedicated Tutors", "Scheduled Events", "Available Courses"

### Popular Courses
- **Scenario: Course cards are displayed in a grid**
  - Given the user visits the BrightPath homepage
  - Then a "Popular Online Courses" section is visible
  - And three course cards are shown in a grid
  - And each card has a course image, title, instructor name, category, description, seat count, star rating, and price

- **Scenario: Free course shows Free badge**
  - Given the user views the Popular Courses section
  - Then at least one course card shows a "Free" badge in blue

### Best Tutors
- **Scenario: Tutor carousel is displayed**
  - Given the user visits the BrightPath homepage
  - Then a "The Best Tutors in Town" section is visible
  - And a horizontal carousel of tutor cards is shown
  - And each card has a circular thumbnail, name, role, blurb, and social icons

### Register Now
- **Scenario: Registration form and countdown are displayed**
  - Given the user visits the BrightPath homepage
  - Then a "Register Now" section is visible
  - And a contact form is shown on the left with Name, Email, Phone, Site fields and a "Send Message" button
  - And a countdown timer is shown on the right with days, hours, minutes, seconds

### Upcoming Events
- **Scenario: Event cards are displayed**
  - Given the user visits the BrightPath homepage
  - Then an "Upcoming events" section is visible
  - And three event cards are shown in a grid
  - And each card has an event image, date badge, event title, date/time, and price

### Blog
- **Scenario: Blog posts are displayed**
  - Given the user visits the BrightPath homepage
  - Then a "From Our Blog" section is visible
  - And two blog post cards are shown
  - And each card has an image, headline, author, category, and description

### Footer
- **Scenario: Footer displays branding and contact info**
  - Given the user visits the BrightPath homepage
  - Then a footer is visible at the bottom
  - And the top footer area has a dark background with logo and copyright
  - And the bottom footer area has phone and email on the left and social icons on the right

- **Scenario: Footer links to Component Dock**
  - Given the user visits the BrightPath homepage
  - Then the footer contains a link to `https://www.componentdock.com/`
  - And the link text reads "Component Dock"

## Verification checklist

- [ ] Section order matches DOM: Top Header → Navbar → Hero → Cool Facts → Popular Courses → Best Tutors → Register Now → Upcoming Events → Blog → Footer
- [ ] Brand color `#3762f0` used for buttons, active nav, "Free" badges
- [ ] Accent yellow `#e3d21b` used for star ratings
- [ ] Light blue `#d7e0fc` used for Register/Login button hover
- [ ] Footer dark backgrounds: `#252525` top, `#1f1f1f` bottom
- [ ] Register Now section has translucent blue overlay `rgba(214,223,251,0.7)`
- [ ] Border radius 6px on buttons and form inputs
- [ ] Google Fonts: Raleway (headings) + Open Sans (body)
- [ ] Hero has dark image overlay with centered white text + blue CTA
- [ ] Stat counters show 4 items with icons and numbers
- [ ] Course cards show image + title + meta + rating + price
- [ ] Tutor carousel shows circular thumbnails with hover effect
- [ ] Registration form has 4 fields + submit button
- [ ] Events show 3 cards with image, date badge, title, time, price
- [ ] Blog shows 2 cards with image, headline, meta, description
- [ ] Footer links to https://www.componentdock.com/ (Component Dock)
- [ ] No references to ColorLib in any app code, comments, or filenames
- [ ] Package name: `@free-react-templates/brightpath`
- [ ] CNAME: `brightpath.free.componentdock.com`
- [ ] All images use `https://picsum.photos/seed/brightpath-<n>/<w>/<h>` placeholders
