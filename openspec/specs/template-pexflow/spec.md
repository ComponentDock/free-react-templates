# Template: Pexflow (Construction / Engineering Landing)

## Purpose

Pexflow is a single-page construction/engineering company landing template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Pexcon" website template design (see TEMPLATES.md), built under
a **DIFFERENT name** (**Pexflow**) with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Pexcon" — construction/engineering landing template
  (source: https://colorlib.com/wp/template/pexcon/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/pexcon/
  (HTTP 200, 28KB HTML, page title "Excon"). Stylesheets: `css/style.css`
  (208KB, SCSS-compiled), `css/bootstrap.min.css`, `css/animate.css`,
  `css/owl.carousel.min.css`, `css/themify-icons.css`, `css/flaticon.css`,
  `css/magnific-popup.css`, `css/slick.css`. Bootstrap 4 grid + utility classes.
  jQuery + OWL Carousel + Isotope + CounterUp + Magnific Popup for interactivity.
- **Screenshot:** `pexcon-free-template.jpg` (TEMPLATES.md line 1132) —
  construction/engineering company aesthetic, orange brand, light backgrounds.

### Section order (1:1 from DOM)

1. **Navbar** — sticky top, logo left, links right (Home, About, Services,
   Blog, Pages dropdown, Contact), "Get a Quote" CTA button on desktop
2. **Banner/Hero** — full-width light gray (`#f7f7f7`) bg, headline
   "Committed to **Superior** Quality and Results", subtext paragraph,
   "View project" CTA button (`btn_1`)
3. **About** — two-column: left image, right text ("Engineering Your Dreams
   With Us") + two icon features (Certified Company, Experience Employee)
   with flaticon icons
4. **Services** — section title "our services", 3 service cards in 3 columns
   (Better Future, Qualified Trainers, Job Oppurtunity) each with icon,
   description, "read more" link
5. **Experience** — two-column: left text ("We Are Experience in
   Construction") + years counter (20 years of Experience), right image
6. **Projects** — section title "Our Projects", filter bar (All / Buildings /
   Rebuild / Architecture), 3 project image cards with hover overlay
7. **Stats/Counter** — 4-column counter strip: 60 Satisfied Client, 10
   Worldwide Branches, 80 Total Projects, 24 Work Finished, each with an SVG
   icon
8. **Reviews** — "Some Feedback From Client" + OWL Carousel of testimonials
   (client avatar + quote text + location)
9. **Blog** — section title "Recent news", 3 blog cards (image + meta
   comments/likes + title + "read more" link)
10. **Footer** — dark background, 4 columns (logo + about blurb, Best
    Services links, Our Gallery grid, Contact info), copyright bar

### Design tokens (extracted from `css/style.css`)

- **Primary brand:** `#ff5e13` (orange) — buttons, accents, links, hover
  states
- **Secondary / headings:** `#001b5e` (dark navy blue) — h1, h2, h3 text,
  button hover bg
- **Body text:** `#556172` (medium gray-blue)
- **Subtle text:** `#83868c`, `#888888`
- **Backgrounds:**
  - Page default: `#fff` (white)
  - Banner section: `#f7f7f7` (very light gray)
  - Alternate sections: `#fbf9ff` (very light lavender/purple)
  - Counter/footer: `#000` (black)
- **Font:** `"Roboto", sans-serif` — weights 300, 400, 500, 700
- **Button 1 (primary CTA):** bg `#ff5e13`, hover bg `#001b5e`, color
  `#fff`, `border-radius: 4px`, padding ~10px 30px
- **Button 3 (text link):** no bg, color `#ff5e13`, underline via
  `::after` pseudo-element (`#e8e9eb` bar), hover bar color `#ff5e13`
- **Accent gradient (experience section):** `#ff7e5f` (coral) seen in some
  backgrounds
- **Section padding:** `section_padding` class (~100px vertical)

## Gherkin requirements

### Feature: Navbar

Scenario: Navbar displays all navigation links
  Given the page is loaded
  Then the navbar shows links: Home, About, Services, Blog, Contact
  And a "Get a Quote" CTA button is visible on desktop

Scenario: Navbar is sticky on scroll
  Given the user scrolls down
  Then the navbar remains fixed at the top of the viewport

### Feature: Hero / Banner

Scenario: Hero shows headline and CTA
  Given the user views the hero section
  Then a headline "Committed to Superior Quality and Results" is displayed
  And a subtext paragraph is visible
  And a "View project" CTA button is present

Scenario: Hero section has light gray background
  Given the user views the hero section
  Then the background color is #f7f7f7

### Feature: About

Scenario: About section shows image and text
  Given the user scrolls to the about section
  Then a left image and right text column are visible
  And the heading reads "Engineering Your Dreams With Us"
  And two feature items are displayed: "Certified Company" and "Experience Employee"

### Feature: Services

Scenario: Services section displays three service cards
  Given the user scrolls to the services section
  Then a "our services" heading is visible
  And three service cards are shown: "Better Future", "Qualified Trainers", "Job Oppurtunity"
  And each card has an icon, description text, and a "read more" link

### Feature: Experience / Counter

Scenario: Experience section shows years counter
  Given the user scrolls to the experience section
  Then a "We Are Experience in Construction" heading is visible
  And a counter displays "20 years of Experience"
  And a right-side image is displayed

### Feature: Projects

Scenario: Projects section shows filterable gallery
  Given the user scrolls to the projects section
  Then a "Our Projects" heading is visible
  And filter tabs are shown: All, Buildings, Rebuild, Architecture
  And three project cards are displayed with hover overlay

Scenario: Projects filter tabs are interactive
  Given the user clicks "Buildings" filter
  Then only building-type projects are shown

### Feature: Stats / Counter Strip

Scenario: Stats section shows four counters
  Given the user scrolls to the stats section
  Then four stat blocks are displayed: "60 Satisfied Client", "10 Worldwide Branches", "80 Total Projects", "24 Work Finished"
  And each block has an SVG icon

### Feature: Reviews / Testimonials

Scenario: Reviews section shows client testimonials
  Given the user scrolls to the reviews section
  Then a "Some Feedback From Client" heading is visible
  And testimonial cards are shown in a carousel
  And each card shows a client avatar, quote text, and location

### Feature: Blog

Scenario: Blog section shows three recent posts
  Given the user scrolls to the blog section
  Then a "Recent news" heading is visible
  And three blog cards are shown with image, meta (comments, likes), title, and "read more" link

### Feature: Footer

Scenario: Footer displays four columns
  Given the user scrolls to the footer
  Then a logo + about blurb column is visible
  And a "Best Services" links column is visible
  And an "Our Gallery" image grid column is visible
  And a "Contact info" column with address, phone, email is visible

Scenario: Footer includes Component Dock link
  Given the user views the footer
  Then a link to https://www.componentdock.com/ labeled "Component Dock" is present

### Feature: Responsive Design

Scenario: Mobile layout collapses navbar
  Given the viewport is mobile width (< 768px)
  Then the navbar collapses to a hamburger menu toggle

Scenario: Service cards stack vertically on mobile
  Given the viewport is mobile width
  Then service cards stack in a single column

## Verification checklist

- [ ] All 10 sections present in correct order
- [ ] Navbar sticky, all links present, "Get a Quote" CTA on desktop
- [ ] Hero: headline, subtext, CTA button, #f7f7f7 background
- [ ] About: two-column layout, image left, text right, two feature icons
- [ ] Services: 3 cards with icons, descriptions, "read more" links
- [ ] Experience: counter with "20 years", right image
- [ ] Projects: filter tabs (All/Buildings/Rebuild/Architecture), 3 cards with hover overlay
- [ ] Stats: 4 counter blocks with icons and values
- [ ] Reviews: carousel with avatar, quote, location
- [ ] Blog: 3 cards with image, meta, title, "read more" link
- [ ] Footer: 4 columns, copyright bar, Component Dock link
- [ ] Design tokens: #ff5e13 primary, #001b5e secondary, Roboto font, #fbf9ff alternating sections
- [ ] Responsive: hamburger menu, stacking columns on mobile
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] 100% test coverage (lines, functions, branches, statements)
