# Curemark — Design & Replication Notes

> Template name: **Curemark**
> Recreation of the Medart design by ColorLib
> (https://preview.colorlib.com/theme/medart/)

---

## Provenance

This template is a faithful React recreation of the "Medart" medical
HTML template originally published by ColorLib. Layout structure,
component hierarchy, and visual styling replicate the original; all
code is original React / Tailwind / CSS — no third-party template
markup is copied verbatim.

---

## Design Tokens

| Token             | Value                                               | Usage                           |
| ----------------- | --------------------------------------------------- | ------------------------------- |
| `font-primary`    | `Raleway` (Google Fonts), sans-serif                | Body and headings               |
| `brand-gradient`  | `linear-gradient(270deg, #32c8fa 0%, #587de4 100%)` | Buttons, CTAs, accent areas     |
| `body-text`       | `#404040`                                           | Default body paragraph color    |
| `bg-info-boxes`   | `#f0f4f8`                                           | Info Boxes section background   |
| `bg-departments`  | `#f3f3f3`                                           | Departments section background  |
| `bg-testimonials` | `#eaf1f3`                                           | Testimonials section background |
| `accent-blue`     | `#18a3eb`                                           | Links, icon highlights          |
| `btn-radius`      | `rounded-full` (Tailwind)                           | Primary buttons                 |
| `btn-text`        | `white`                                             | Primary button text             |

### Gradient detail

The brand gradient flows from **cyan (#32c8fa)** on the left to
**blue-purple (#587de4)** on the right (270deg). It is applied to:

- Navbar emergency CTA button
- Hero "Read More" button
- Info box "Emergency" CTA
- Appointment form submit button
- Newsletter subscribe button
- Department "read more" links (on hover, optional)

---

## Section-by-Section Replication Notes

### Navbar

- Fixed / sticky at top with `position: sticky` or `position: fixed`.
- Left: site logo (image or text).
- Center / right: navigation links — Home, About, Services, News, Contact.
- Far right: "Emergency" CTA button with a phone icon (use `FaPhone` or
  similar from react-icons) + `brand-gradient` background.
- On scroll, a subtle box-shadow can enhance the sticky effect.
- Mobile: hamburger menu (use a state-driven slide or dropdown).

### Hero Banner

- Full-width, viewport-height (or ~80vh) section.
- Background image set via CSS `background-image` with `object-fit: cover`.
- Dark semi-transparent overlay (`rgba(0,0,0,0.45)` typical).
- Centered content: headline "The Best Medical Services" in large white
  text, subtitle paragraph below, "Read More" gradient button.
- Text is white on dark overlay; ensure sufficient contrast.

### Info Boxes

- Background: `#f0f4f8`.
- 3 equal-width columns (use CSS Grid `grid-cols-3` or Flexbox).

  1. **Opening Hours** — heading + schedule list (day/time pairs).
  2. **Emergency** — heading + phone number CTA button with gradient.
  3. **Appointment** — heading + form with:
     - Department `<select>` (placeholder: "Select Department")
     - Doctor `<select>` (placeholder: "Select Doctor")
     - Name `<input type="text">`
     - Phone `<input type="tel">`
     - Submit `<button>` with `brand-gradient`.

- Form is presentational in v1 (no backend wiring required).
- Stacks to single column on mobile.

### Departments

- Background: `#f3f3f3`.
- Section heading: "Our Departments".
- 3×3 grid of 9 department cards.
- Departments: Cardiology, Gastroenterology, Medical Lab, Dental Care,
  Surgery, Neurology, Orthopaedy, Pediatry, Ophthalmology.
- Each card:
  - Icon (use `react-icons` or inline SVG — e.g. `FaHeartbeat` for
    Cardiology, `FaFlask` for Medical Lab, etc.).
  - Title (department name).
  - Short description paragraph.
  - "Read More" link.
- Cards have a white background with subtle shadow or border.
- Grid collapses to 1 column on mobile, 2 columns on tablet.

### Testimonials

- Background: `#eaf1f3`.
- Heading (can be "Testimonials" or similar).
- Carousel/slider of testimonial items. Use a lightweight slider
  (e.g. `swiper`, `react-slick`, or pure CSS scroll-snap).
- Each slide: quote text (in italics or with quotation marks),
  avatar image, person's name, and affiliation/title.
- Include prev/next arrows or dot indicators.

### News

- Heading: "The News".
- 3 blog post preview cards in a row.
- Each card:
  - Featured image (top).
  - Post title.
  - Meta line: date, author name, comment count.
  - Excerpt paragraph.
- Cards have white background, optional border/shadow.
- Stacks vertically on mobile.

### Newsletter

- Full-width banner.
- Heading + short call-to-action text.
- Email `<input type="email">` + "Subscribe" button with
  `brand-gradient` and `rounded-full` style.
- Form is presentational in v1.

### Footer

- Dark background (use `#1a1a2e` or `#2d2d44`).
- 3 columns:
  1. **About** — site logo + short description paragraph.
  2. **Contact** — address, phone, email.
  3. **Useful Links** — list of internal/external links.
- Bottom row or within the third column: a link to
  **https://www.componentdock.com/** branded as "Component Dock".
- Light text on dark background for readability.
- Stacks to single column on mobile.

---

## Responsive Breakpoints

| Breakpoint | Adaptation                                               |
| ---------- | -------------------------------------------------------- |
| ≥1024px    | Full desktop layout, 3-column grids                      |
| 768–1023px | Department grid → 2 columns; info boxes may stack        |
| <768px     | Everything stacks to 1 column; hamburger nav; full-width |

---

## Dependencies (suggested)

- **Font**: Google Fonts — Raleway (400, 500, 600, 700).
- **Icons**: `react-icons` (Font Awesome set) for department icons,
  phone icon, social icons.
- **Slider**: `swiper` or `react-slick` for testimonials carousel.
- **Forms**: Native HTML5 form controls with browser validation.

---

## Notes for Builders

1. Start with the layout skeleton (all sections in order) before
   styling individual components.
2. Use Tailwind utility classes where possible; custom CSS only for
   the gradient and any animations.
3. The appointment form is static — no API integration needed in v1.
4. Ensure all interactive elements are keyboard-accessible.
5. Alt text on all images for accessibility.
6. The Component Dock link in the footer must point to
   `https://www.componentdock.com/` with display text "Component Dock".
