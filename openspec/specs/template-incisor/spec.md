# Template: Incisor (Dental)

## Purpose

Recreation of ColorLib's **Dento** template as a free React component.

- **Source slug:** `dento`
- **ColorLib page:** https://colorlib.com/wp/template/dento/
- **Live preview:** https://preview.colorlib.com/theme/dento/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

---

## Design Tokens (extracted from live preview CSS)

| Token            | Value                          | Usage                                        |
| ---------------- | ------------------------------ | -------------------------------------------- |
| `brand`          | `#0891b2` (cyan-600)           | Primary buttons, section heading underline, video play button, newsletter submit, social icon hover |
| `brand-hover`    | `#0e7490` (cyan-700)           | Button hover state                           |
| `bg-light`       | `#f4f4f4`                      | Top bar, dentist cards, comment cards        |
| `bg-dark`        | `#1e293b` (slate-800)          | Dark mode header/footer                      |
| `text-primary`   | `#333333`                      | Body text                                    |
| `text-secondary` | `#707070`                      | Secondary/description text                   |
| `white`          | `#ffffff`                      | On-brand backgrounds, card backgrounds       |
| **Font**         | `Montserrat` (weights 300–400) | Global body + headings                       |
| **Radius (card)**| `.75rem` (12px)                | Cards, pricing table                         |
| **Radius (small)**| `.5rem` (8px)                 | Form inputs                                  |
| **Radius (pill)** | `45px`                        | CTA buttons                                  |
| **Border line**  | 2px solid `#0891b2`            | Section heading underline `.line`            |

---

## Section Structure (top → bottom)

1. **TopHeader** — thin gray bar (`#f4f4f4`): address, phone, email. Right: social icons.
2. **Navbar** — white sticky header, logo left, nav links right, "Booking Now" CTA button (brand bg, white text, rounded).
3. **Hero** — full-width slider (2 slides). Dark overlay on background image. Headline + paragraph + two CTA buttons ("Get Started" brand-fill, "Contact Us" outline).
4. **AboutUs** — 2-column layout: left image, right heading + paragraph + 3 icon features (Experience, Dentist, Modern Equipment, Friendly Staff).
5. **Counters** — 4-column row: 20 Years Of Experience, 700+ Happy Patients, 120 Certificate, 40+ Dentist. Each with icon + count + label.
6. **Services** — "Our Services" heading + 6 service cards (icon + title + short text). Services: Teeth Whitening, Missing Teeth, Cosmetic Dentistry, Examination, Teeth Pain, and one more.
7. **Pricing** — "Pricing" heading + table with columns: Service Names, Stage, Price. ~10 dental service rows with pricing.
8. **Appointment** — "Book An Appointment" heading + form: Name, Phone, Email, Address, Message fields + schedule dropdown + "Booking Now" button.
9. **Dentist** — "Our Dentist" heading + 3 dentist cards: photo, name, specialty, social icons. Cards have `#f4f4f4` bg, circular photos.
10. **Testimonials** — slider with testimonial cards: avatar, quote, patient name + role.
11. **Blog** — "The Latest News" heading + 3 blog cards: image + title + excerpt + date + comment count.
12. **Footer** — dark background. 4 columns: about text, quick links, opening hours, newsletter form. Bottom: social icons.

---

## Gherkin Requirements

### Feature: Incisor — Dental Practice Website Template

#### Scenario: TopHeader displays contact information
  - **Given** the user visits the page
  - **When** the top bar renders
  - **Then** the address "28 Jackson Street, Chicago, 7788569 USA" is shown
  - **And** the email "info@incisor.com" is shown
  - **And** social media icons are displayed on the right

#### Scenario: Navbar is sticky on scroll
  - **Given** the user scrolls past the hero
  - **When** the header becomes sticky
  - **Then** the navbar background changes to white
  - **And** the "Booking Now" CTA button is visible

#### Scenario: Hero section renders slides with CTAs
  - **Given** the user is at the top of the page
  - **When** the hero slider loads
  - **Then** a headline "We Believe Everyone Should Have Easy Access To Great Dental Care" is displayed
  - **And** two CTA buttons ("Get Started" and "Contact Us") are rendered

#### Scenario: AboutUs shows content and features
  - **Given** the user scrolls to the About Us section
  - **When** the section renders
  - **Then** an image is displayed on the left
  - **And** a heading "About Us" with descriptive text appears on the right
  - **And** feature icons (Experience, Dentist, Modern Equipment, Friendly Staff) are shown

#### Scenario: Counters display statistics
  - **Given** the user views the counters section
  - **When** the counters animate
  - **Then** "20" Years Of Experience is displayed
  - **And** "700+" Happy Patients is displayed
  - **And** "120" Certificate is displayed
  - **And** "40+" Dentist is displayed

#### Scenario: Services section lists dental services
  - **Given** the user scrolls to Services
  - **When** the section renders
  - **Then** a heading "Our Services" with underline is shown
  - **And** 6 service cards are displayed each with an icon, title, and description

#### Scenario: Pricing table shows service costs
  - **Given** the user scrolls to Pricing
  - **When** the pricing table renders
  - **Then** a table with columns "Service Names", "Stage", "Price" is shown
  - **And** at least 8 dental service rows with prices are listed

#### Scenario: Appointment form collects booking info
  - **Given** the user scrolls to Book An Appointment
  - **When** the form renders
  - **Then** fields for Name, Phone, Email, Address, and Message are present
  - **And** a schedule dropdown is available
  - **And** a "Booking Now" submit button is rendered

#### Scenario: Dentist section shows team members
  - **Given** the user scrolls to Our Dentist
  - **When** the section renders
  - **Then** 3 dentist cards are displayed
  - **And** each card has a circular photo, name, specialty, and social icons

#### Scenario: Testimonials slider displays patient reviews
  - **Given** the user scrolls to Testimonials
  - **When** the slider renders
  - **Then** testimonial cards with avatar, quote, patient name, and role are shown

#### Scenario: Blog section shows latest news
  - **Given** the user scrolls to The Latest News
  - **When** the section renders
  - **Then** 3 blog cards with image, title, excerpt, date, and comment count are displayed

#### Scenario: Footer provides site info and newsletter
  - **Given** the user scrolls to the footer
  - **When** the footer renders
  - **Then** it has a dark background
  - **And** columns for About, Quick Links, Opening Hours, and Newsletter are shown
  - **And** a newsletter email input + submit button are present
  - **And** social media icons are displayed at the bottom
  - **And** a "Component Dock" link is included

---

## Verification Checklist

- [ ] TopHeader: gray bar, contact info, social icons
- [ ] Navbar: sticky, logo, nav links, "Booking Now" CTA
- [ ] Hero: slider with 2 slides, headline, 2 CTA buttons
- [ ] AboutUs: 2-column, image + features
- [ ] Counters: 4 statistics with icons
- [ ] Services: 6 cards with icons
- [ ] Pricing: table with 8+ rows
- [ ] Appointment: form with 5 fields + schedule + submit
- [ ] Dentist: 3 cards with circular photos
- [ ] Testimonials: slider with review cards
- [ ] Blog: 3 cards with image + metadata
- [ ] Footer: dark, 4 columns, newsletter, social icons
- [ ] All sections use `#0891b2` brand color consistently
- [ ] Montserrat font loaded and applied
- [ ] Component Dock link in footer
- [ ] No ColorLib references in app code
