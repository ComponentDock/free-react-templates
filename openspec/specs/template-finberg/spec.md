# Template: Finberg (Finance Landing Page)

## Purpose

Finberg is a single-page finance/loan landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Finlone" free template (source: https://colorlib.com/wp/template/finlone/),
preview: https://preview.colorlib.com/theme/finlone/, built under a
DIFFERENT name (**Finberg**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 finance landing page featuring: transparent
header over a full-width hero with background image + loan calculator form;
about section with image and counter; services carousel (loan types);
parallax testimonial section; client statistics grid; how-it-works
accordion FAQ; and a footer with newsletter subscribe form.

## Design Tokens

Extracted from the live preview CSS (`assets/css/style.css`):

| Token                | Value                          | Usage                                      |
|----------------------|--------------------------------|---------------------------------------------|
| `brand`              | `#0BDE8C` (green)              | Buttons, links, form accents, scroll-to-top |
| `secondary`          | `#0077FF` (blue)               | Header sticky bar bg, form labels           |
| `heading`            | `#204570` (dark navy)          | All h1–h6 color                             |
| `body-text`          | `#3F4854`                      | Paragraph text                              |
| `accent-purple`      | `#A03AF9`                      | Section subtitle span color                 |
| `gray-bg`            | `#F4F6F9`                      | Services section, FAQ section background    |
| `hero-bg`            | `url(assets/img/hero/h1_hero1.jpg)` | Hero slider background image           |
| `testimonial-bg`     | `url(assets/img/gallery/section_bg1.jpg)` | Parallax testimonial background  |
| `font-heading`       | `"Heebo", sans-serif`          | All headings, nav links, buttons            |
| `font-body`          | `"Open Sans", sans-serif`      | Paragraphs, form inputs, body text          |
| `btn-radius`         | `0px` (square)                 | Primary `.btn` elements                     |
| `submit-btn-radius`  | `0px`                          | Form submit button                          |
| `form-radius`        | `0px`                          | Form wrapper, inputs, selects               |
| `button-hover`       | `#27CB8B` (darker green)       | `.btn::before` hover fill                   |

## Section Structure (from live preview DOM)

1. **Header** — transparent overlay on hero; nav links (Home, Loan, About, FAQ, Blog dropdown, Contact); right CTA button "Apply For Loan"
2. **Hero Slider** — full-width bg image (950px height); left: headline "Get Loan for your business growth or startup" + subtext + "How it Work" CTA; right: loan calculator form (amount select, period select, name input, phone input, "Continue" submit)
3. **About Area** — two-column: left image with counter overlay (99+ likes icon); right text heading "Thousands of customers trust our company" + two paragraphs + "Learn More" button
4. **Services Area** (gray bg) — heading "Loan for your business & startup"; three loan type cards (Student Loan, Business Loan, Startup Loan) each with image + description + "Apply For Loan" button
5. **Testimonial Area** — parallax background; centered testimonial slider with quotes and author names (Robart Miller, Robert Bruse)
6. **Clients/Counter Area** — 2x2 grid: counter stats (2000+ Loan Approval, 99% Satisfied Customers) interspersed with client images
7. **How It Works** — heading "How it works" with service steps/explanation
8. **FAQ Area** (gray bg) — accordion with 4 items ("Attention and hold it long enough?", "Hold it long enough?", etc.)
9. **Footer** — three columns: logo + contact info + social icons; useful links; newsletter subscribe form; bottom copyright bar

## Gherkin Scenarios

### Scenario: Header navigation and CTA
  GIVEN the user loads the Finberg page
  WHEN they observe the header
  THEN they see nav links: Home, Loan, About, FAQ, Blog, Contact
  AND an "Apply For Loan" CTA button is visible on the right

### Scenario: Hero section displays loan form
  GIVEN the user loads the page
  WHEN they look at the hero section
  THEN they see a headline "Get Loan for your business growth or startup"
  AND a loan calculator form on the right with amount/period selects, name and phone inputs
  AND a "Continue" submit button

### Scenario: About section content
  GIVEN the user scrolls past the hero
  WHEN they reach the about section
  THEN they see an image on the left with a counter overlay
  AND heading text "Thousands of customers trust our company"
  AND a "Learn More" button

### Scenario: Services section shows loan types
  GIVEN the user scrolls to the services area
  WHEN the services section is visible
  THEN they see a heading "Loan for your business & startup"
  AND three loan type cards: Student Loan, Business Loan, Startup Loan
  AND each card has an "Apply For Loan" button

### Scenario: Testimonial slider
  GIVEN the user scrolls to the testimonial area
  WHEN they view the testimonial section
  THEN they see a parallax background
  AND testimonial quotes with author attributions

### Scenario: Client statistics
  GIVEN the user scrolls past testimonials
  WHEN the clients/counter area is visible
  THEN they see counter stats: "2000+" Loan Approval and "99%" Satisfied Customers

### Scenario: FAQ accordion
  GIVEN the user scrolls to the FAQ section
  WHEN they click an accordion header
  THEN the corresponding answer expands
  AND clicking another header collapses the previous

### Scenario: Footer newsletter
  GIVEN the user scrolls to the footer
  WHEN they see the newsletter section
  THEN they see an email input and a "Subscribe" button
  AND contact info, useful links, and social icons are present

## Verification Checklist

- [ ] Header: transparent over hero, sticky on scroll with blue bar
- [ ] Hero: bg image, headline, subtext, form card with selects/inputs
- [ ] About: image + counter overlay, heading, text, CTA button
- [ ] Services: gray bg, 3 loan cards with images and buttons
- [ ] Testimonials: parallax bg, testimonial slider
- [ ] Clients: 2x2 stats grid with counters
- [ ] How It Works: section with steps/explanation
- [ ] FAQ: accordion with 4 items
- [ ] Footer: 3-column layout, newsletter form, copyright
- [ ] All buttons use brand green (#0BDE8C) with square corners
- [ ] Fonts: Heebo headings, Open Sans body
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Specs and provenance only in spec/docs/TEMPLATES.md
