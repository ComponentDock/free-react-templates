# Template: BodyForge (Fitness Center)

## Purpose

BodyForge is a single-page fitness center / gym website in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Fitzone" free template (source:
https://colorlib.com/wp/template/fitzone/), built under a DIFFERENT name
(**BodyForge**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4
+ TypeScript.

The original is a Bootstrap 4 gym website with a bold dark hero banner,
multiple parallax background-image sections (service, discount, friend
area), a 3-column featured classes grid with hover overlays, a 4-column
coach profile grid with social icon hover, a newsletter discount banner,
a BMI calculator form, a client testimonials carousel, and a structured
footer with three widget columns. The primary brand color is a hot pink/magenta
(`#f61b55`) used on all CTAs, accents, and highlights. The body font is
Roboto; headings use Rubik.

**Source:** ColorLib "Fitzone" — https://colorlib.com/wp/template/fitzone/
**Preview URL — REACHABLE (verified 2026-09-19):**
https://preview.colorlib.com/theme/fitzone/
**Preview CSS:** `assets/css/style.css` (43,120 bytes, hand-written,
Bootstrap 4 grid only — no framework component library).
**Fonts:** Google Fonts — Roboto (400, 500, 700) + Rubik (400, 500, 700).
**Icons:** Font Awesome 4.7.0 (replaced with lucide-react in recreation).

## Design Tokens

Extracted from the live preview CSS (`assets/css/style.css`):

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#f61b55` (hot pink/magenta) | `.template-btn` bg, spinner, discount accent, schedule thead, social hover, footer copyright `.color` |
| Body text | `#777` | Body copy, sub-headings, service paragraphs |
| Headings | `#222` | h3, h4, h5, nav links, BMI labels |
| Body font | `"Roboto", sans-serif` | Body, nav links, h1, h2, h6 |
| Heading font | `"Rubik", sans-serif` | h3, h4, h5, `.template-btn` |
| Section bg (light) | `#f5f5f5` | Feature area, BMI area, client area, coach footer, footer default |
| Header bg | `#fff` | `.header-area.main-header` (rounded 5px, margin 0 5%) |
| Button radius | `3px` | `.template-btn`, inputs, hamburger bar |
| Button padding | `13px 24px` | `.template-btn` |
| Button hover | transparent bg, `#222` text, `1px solid #f61b55` border | `.template-btn:hover` |
| Section padding | `130px 0` | `.section-padding` |
| Section top margin | `80px` | `.section-top { margin-bottom: 80px }` |
| Banner bg fallback | `#b0b0b0` | `.banner-bg`, `.service-area`, `.discount-area`, `.friend-area` |
| Footer dark variant | `#080b1c` | `.footer-area.footer` (contact page) |
| Card hover shadow | `0 10px 20px rgba(0,0,0,0.1)` | Feature cards, coach cards, slide cards |
| Feature overlay | `rgba(1,2,12,0.7)` | `.hover-state` on feature images |
| Service overlay | `rgba(108,174,255,0.2)` | `.service-area:after` pseudo-element (right 50%) |

## Section Structure (from live preview DOM)

1. **Header/Navbar** — Logo left, nav links right (home, about us, schedule, trainers, blog w/ dropdown, contact, pages w/ dropdown), "book now" CTA button. White bg, rounded 5px, margin 0 5%.
2. **Banner/Hero** — Full-width dark background image, large white text "feel good" + "breath" (h1/h2, uppercase, Roboto, 150px/90px), "become a member" pink CTA. Text positioned right side (offset col).
3. **About** — Two columns: left has heading "welcome to our best fitness club" + two paragraphs + "learn more" pink CTA; right has an illustration image.
4. **Featured Classes** — Centered heading "featured classes", 3-column grid. Each card: image with hover overlay (dark `rgba(1,2,12,0.7)` + centered "details" button), white footer card below with title + description. Cards have shadow on hover.
5. **Our Service** — Background image section (parallax), heading "our service" (white text), 3 service items each with icon + title + description in a right-offset column. Blue semi-transparent overlay on right 50%.
6. **Our Fitness Coaches** — Centered heading, 4-column grid of coach photos. Each: photo with hover overlay showing social icons (Facebook, Twitter, LinkedIn) on the right side. Below photo: white/light card with name + specialty. Cards shift up on hover.
7. **Discount/Newsletter** — Background image section, centered "25% discount" with pink accent on "discount", sub-text about newsletter coupon, email input + "subscribe" pink button.
8. **BMI Calculator** — Light gray `#f5f5f5` bg, two columns: left has form (age, weight, height, gender, calculated BMI display, "What is bmi" submit button); right has an illustration image.
9. **Happy Client Says** — Centered heading, owl-carousel slider of testimonials. Each slide: circular client photo (70px) + quote text + name + title. Light gray card bg, white on hover with shadow.
10. **Friend/CTA Area** — Background image section, centered "your gym" heading (white) + "become a member" pink CTA.
11. **Footer** — Light gray `#f5f5f5` bg, 3 columns: About Us text, Contact Us (address + phone numbers in pink), Newsletter (email input + arrow button). Bottom bar: copyright text + social icons (Facebook, Twitter, Dribbble, Behance).

## Gherkin Requirements

### Header
- **Scenario: Navbar renders all navigation links**
  - Given the user visits BodyForge
  - Then the navbar shows links: "home", "about us", "schedule", "trainers", "blog", "contact"
  - And a "book now" CTA button is visible

- **Scenario: Navbar is sticky on scroll**
  - Given the user scrolls down the page
  - Then the navbar remains fixed at the top

### Banner/Hero
- **Scenario: Hero banner displays headline and CTA**
  - Given the user views the hero section
  - Then the heading "feel good" and "breath" are displayed
  - And a "become a member" button is visible

### About
- **Scenario: About section shows welcome content**
  - Given the user scrolls to the about section
  - Then the heading "welcome to our best fitness club" is visible
  - And two paragraphs of descriptive text are shown
  - And a "learn more" button is displayed

### Featured Classes
- **Scenario: Featured classes section shows three class cards**
  - Given the user scrolls to the featured classes section
  - Then three class cards are displayed in a grid
  - And each card shows a title and description

- **Scenario: Featured class card hover reveals details button**
  - Given the user hovers over a featured class card
  - Then a "details" button appears over the image

### Our Service
- **Scenario: Service section lists three services**
  - Given the user scrolls to the services section
  - Then three service items are displayed with icon, title, and description
  - And the heading "our service" is visible

### Our Fitness Coaches
- **Scenario: Coaches section shows four coach profiles**
  - Given the user scrolls to the coaches section
  - Then four coach cards are displayed in a grid
  - And each card shows the coach name and specialty

- **Scenario: Coach card hover reveals social links**
  - Given the user hovers over a coach card
  - Then social media icons (Facebook, Twitter, LinkedIn) appear

### Discount/Newsletter
- **Scenario: Discount section displays newsletter signup**
  - Given the user scrolls to the discount section
  - Then "25% discount" heading with pink accent is visible
  - And an email input and "subscribe" button are displayed

### BMI Calculator
- **Scenario: BMI calculator shows input form**
  - Given the user scrolls to the BMI section
  - Then fields for age, weight, height, and gender are displayed
  - And a "your bmi is" readonly output field is shown
  - And a "What is bmi" submit button is visible

### Client Testimonials
- **Scenario: Testimonials carousel shows client reviews**
  - Given the user scrolls to the client section
  - Then a slider with client testimonials is displayed
  - And each testimonial shows a circular photo, quote, name, and title

### Friend/CTA Area
- **Scenario: Friend area shows gym CTA**
  - Given the user scrolls to the friend/CTA section
  - Then a "your gym" heading and "become a member" button are displayed

### Footer
- **Scenario: Footer shows three widget columns**
  - Given the user scrolls to the footer
  - Then "about us", "contact us", and "newsletter" columns are visible

- **Scenario: Footer shows copyright and social links**
  - Given the user views the footer bottom
  - Then copyright text is displayed
  - And social media icons (Facebook, Twitter, Dribbble, Behance) are shown

- **Scenario: Footer links to Component Dock**
  - Given the user views the footer
  - Then a link to "https://www.componentdock.com/" labeled "Component Dock" is present

## Verification Checklist

- [ ] Section order matches: Header → Banner → About → Featured Classes → Service → Coaches → Discount → BMI → Client Testimonials → Friend CTA → Footer
- [ ] Brand color `#f61b55` used on all CTAs (`.template-btn` replacement)
- [ ] Button style: pink bg, white text, uppercase, 3px radius, 13px 24px padding, Rubik font
- [ ] Button hover: transparent bg, dark text, pink border
- [ ] Body font Roboto, heading font Rubik
- [ ] Light sections use `#f5f5f5` background
- [ ] Background image sections use placeholder images (picsum.photos)
- [ ] Featured class cards have dark overlay hover effect with "details" button
- [ ] Coach cards have social icon hover overlay
- [ ] BMI calculator form is interactive (age, weight, height, gender → BMI result)
- [ ] Testimonials carousel/slider functional
- [ ] Footer has three columns + copyright + social icons
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage on all new code
- [ ] `npm run verify:app bodyforge` passes
