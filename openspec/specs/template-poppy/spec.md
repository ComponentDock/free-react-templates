# Template: Poppy (Newsletter Subscription Modal)

## Purpose

Poppy is a single-page newsletter subscription MODAL TEMPLATE in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Modal 10" free template (source:
https://colorlib.com/wp/template/modal-10/), built under a DIFFERENT name
(**Poppy**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4.3 modal template: a centered page with a
"Launch Modal 10" button that opens a centered white modal dialog. The
modal has a header area with a background image overlaid by a purple-to-blue
gradient (`linear-gradient(45deg, #dd00ff 0%, #3e65ff 100%)` at 0.3
opacity), a white close (X) button in the top-right, a circular email icon
(200×200px, `rgba(255,255,255,0.2)` background), a "Newsletter" heading
(h2, bold, white), a "Subscribe to our newsletter" subheading (h4), and an
inline email subscription form with a light gray input and a blue submit
button.

**WHAT MAKES POPPY DISTINCT (signature behaviors):**

1. **Full-page centered layout with launch button.** A white `.ftco-section`
   fills the viewport with a centered heading ("Modal 10") and a blue
   primary button ("Launch Modal 10") that triggers the modal via React
   state.

2. **Gradient-header modal with background image.** The `.modal-header` is
   230px tall with a background image (`images/bg-1.jpg`) overlaid by a
   semi-transparent purple-to-blue gradient (`#dd00ff` → `#3e65ff` at 0.3
   opacity). The close button (white ×) sits absolute top-right at 40×40px.

3. **Circular email icon.** A 200×200px circular div (`border-radius: 50%`,
   `background: rgba(255,255,255,0.2)`) centered in the modal body, containing
   an SVG email icon. The modal body overlaps the header by -180px via
   negative margin.

4. **Inline email subscription form.** A `.subscribe-form` with a
   `.form-group` containing two inline inputs: a text input (placeholder
   "Enter email address", `rgba(0,0,0,0.05)` background, no border) and a
   fixed-width submit button (130×52px, `#3e64ff` background, white text).
   Both inputs have `border-radius: 0` (sharp corners).

5. **Pill-shaped launch button.** The main page button uses
   `border-radius: 40px` (pill shape), `#3e64ff` background, white text,
   and on hover transitions to transparent background with blue text and
   blue border.

## Naming

The ColorLib source name "Modal 10" is FORBIDDEN as the app name (and
"modal" itself must not be reused). **Poppy** is the new, original name —
single lowercase word, kebab-case, no collision with `apps/`,
`openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name (verified
2026-09-06: zero hits for `poppy` in TEMPLATES.md, `ls apps/`,
`openspec/specs/`, `docs/templates/`).

## Design reference (replication findings)

- **Original:** ColorLib "Modal 10" (page title: "Modal V10 - Free
  Newsletter Subscription Modal Template 2026"). Listed in TEMPLATES.md
  under **Bootstrap Modal Templates** (category header around line 805; the
  row at line 811 — `wp/template/modal-10/`). Source slug: `modal-10`.
- **Live preview — REACHABLE (verified 2026-09-06):** The naive
  `https://preview.colorlib.com/theme/modal-10/` returns 404; the REAL
  preview is the bootstrap path
  **`https://preview.colorlib.com/theme/bootstrap/modal-10/`** (HTTP 200,
  HTML body). The page has `<title>Modal 10</title>`, loads Poppins font
  (weights 300–900) via Cloudflare Fonts, and two stylesheets:
  `css/ionicons.min.css` (icon font) + `css/style.css` (Bootstrap 4.3.1
  + custom styles).
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/modal-10.jpg`
  (1200×972px). Shows a white page with a centered "Modal 10" heading and a
  blue pill-shaped "Launch Modal 10" button; the modal is open showing a
  gradient-header card with a circular email icon, "Newsletter" heading,
  "Subscribe to our newsletter" text, and an inline email+subscribe form.
- **DOM structure** (from live preview):
  ```
  <section class="ftco-section">
    <div class="container">
      <div class="row justify-content-center js-fullheight">
        <div class="col-md-6 text-center d-flex align-items-center">
          <div class="wrap w-100">
            <h2 class="mb-2">Modal 10</h2>
            <button class="btn btn-primary py-3 px-4">Launch Modal 10</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="modal fade" id="exampleModalCenter">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header img" style="background-image: url(images/bg-1.jpg)">
          <button class="close"><span class="ion-ios-close"></span></button>
        </div>
        <div class="modal-body pt-md-0 pb-5 px-4 px-md-5 text-center">
          <h2>Newsletter</h2>
          <div class="icon"><img src="images/email.svg" class="img-fluid"></div>
          <h4 class="mb-2">Subscribe to our newsletter</h4>
          <form class="subscribe-form">
            <div class="form-group d-flex">
              <input type="text" class="form-control rounded-left" placeholder="Enter email address">
              <input type="submit" value="Subscribe" class="form-control submit px-3 rounded-right">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  ```
- **CSS tokens extracted from `css/style.css`:**
  - Brand primary: `#3e64ff` (buttons, submit, focus border)
  - Header gradient: `linear-gradient(45deg, #dd00ff 0%, #3e65ff 100%)` at `opacity: 0.3`
  - Font: Poppins (weights 300–900)
  - Button border-radius: `40px` (pill shape)
  - Form input background: `rgba(0,0,0,0.05)`, no border, `border-radius: 0`
  - Submit button: 130×52px, `#3e64ff`, white text, `border-radius: 0`
  - Modal max-width: `500px`
  - Modal shadow: `0px 10px 34px -15px rgba(0,0,0,0.24)`
  - Modal header height: `230px`
  - Close button: 40×40px, white, absolute top-right
  - Email icon circle: 200×200px, `border-radius: 50%`, `rgba(255,255,255,0.2)` bg
  - Body text color: `#212529` (Bootstrap default)
  - Section background: `#fff`
  - H2 in modal body: `font-weight: 700`, white (over gradient header)
  - H4: `font-size: 18px`

## Design Tokens

| Token              | Value                                                        |
| ------------------ | ------------------------------------------------------------ |
| Brand primary      | `#3e64ff`                                                    |
| Gradient start     | `#dd00ff` (magenta)                                          |
| Gradient end       | `#3e65ff` (blue)                                             |
| Gradient angle     | `45deg`                                                      |
| Gradient opacity   | `0.3`                                                        |
| Font family        | Poppins (Google Fonts / Cloudflare, weights 300–900)         |
| Body text          | `#212529`                                                    |
| Button bg (launch) | `#3e64ff` → transparent on hover                             |
| Button text        | `#fff` → `#3e64ff` on hover                                  |
| Button radius      | `40px` (pill)                                                |
| Input bg           | `rgba(0,0,0,0.05)`                                           |
| Input border       | none                                                         |
| Input radius       | `0`                                                          |
| Submit bg          | `#3e64ff`                                                    |
| Submit size        | 130×52px                                                     |
| Submit radius      | `0`                                                          |
| Modal max-width    | `500px`                                                      |
| Modal shadow       | `0px 10px 34px -15px rgba(0,0,0,0.24)`                       |
| Modal header height| `230px`                                                      |
| Close button       | 40×40px, white, absolute top-right                           |
| Icon circle        | 200×200px, `border-radius: 50%`, `rgba(255,255,255,0.2)` bg  |
| Body overlap       | `margin-top: -180px`                                         |

## Requirements

### Requirement: Landing page with modal trigger

The template SHALL display a centered landing section with the site name
"Poppy" as a heading and a "Launch Poppy" button that opens the newsletter
modal dialog.

#### Scenario: Landing renders correctly

- **WHEN** the app loads
- **THEN** the landing section shows the "Poppy" heading (h2) and a
  "Launch Poppy" pill-shaped button (border-radius 40px, #3e64ff bg)

#### Scenario: Clicking launch button opens the modal

- **WHEN** the user clicks the "Launch Poppy" button
- **THEN** a modal dialog appears with `aria-modal="true"` and the
  newsletter content is visible

### Requirement: Modal with gradient header and background image

The modal SHALL display a 230px-tall header area with a background image
overlaid by a semi-transparent purple-to-blue gradient (45deg,
#dd00ff→#3e65ff at 0.3 opacity). A white close (X) button shall be
positioned absolute top-right (40×40px).

#### Scenario: Modal header renders with gradient

- **WHEN** the modal is open
- **THEN** the header area is 230px tall with a background image and a
  gradient overlay at 0.3 opacity

#### Scenario: Close button is visible and positioned correctly

- **WHEN** the modal is open
- **THEN** a white × close button is visible in the top-right corner of the
  header

### Requirement: Newsletter subscription form

The modal body SHALL overlap the header by -180px (negative margin) and
contain: a "Newsletter" heading (h2, bold, white), a circular email icon
(200×200px, rgba(255,255,255,0.2) bg), a "Subscribe to our newsletter"
subheading (h4), and an inline email subscription form with a text input
(placeholder "Enter email address", rgba(0,0,0,0.05) bg, no border,
border-radius 0) and a submit button (130×52px, #3e64ff bg, white text,
border-radius 0).

#### Scenario: Modal body content renders correctly

- **WHEN** the modal is open
- **THEN** the modal body shows "Newsletter" heading, a circular icon area,
  "Subscribe to our newsletter" subheading, and an inline email+submit form

#### Scenario: Email input accepts text

- **WHEN** the user types an email address into the input field
- **THEN** the input displays the typed text

#### Scenario: Form submission is prevented

- **WHEN** the user types in the email input and presses Enter or clicks
  Subscribe
- **THEN** the form submission is prevented (no page reload)

### Requirement: Modal dismissal

The modal SHALL be closable via the close button (X icon), pressing Escape,
or clicking the backdrop overlay outside the modal content.

#### Scenario: Close button dismisses modal

- **WHEN** the user clicks the × close button
- **THEN** the modal closes

#### Scenario: Escape key dismisses modal

- **WHEN** the user presses Escape
- **THEN** the modal closes

#### Scenario: Backdrop click dismisses modal

- **WHEN** the user clicks on the dark backdrop outside the modal content
- **THEN** the modal closes

#### Scenario: Clicking inside modal does not close it

- **WHEN** the user clicks inside the modal content area
- **THEN** the modal remains open

### Requirement: Footer with Component Dock link

The template SHALL display a footer with the template name "Poppy", a short
description, and a "More templates at Component Dock" link pointing to
https://www.componentdock.com/.

#### Scenario: Footer renders correctly

- **WHEN** the page loads
- **THEN** the footer shows "Poppy", a description, and a link to Component
  Dock

### Requirement: Responsive design

The modal SHALL be responsive: on mobile viewports (width < 768px), the
form input and submit button shall stack vertically instead of sitting
inline.

#### Scenario: Mobile layout stacks form elements

- **WHEN** the viewport is less than 768px wide
- **THEN** the email input and Subscribe button stack vertically

## Verification checklist

- [ ] Landing page renders with heading and pill-shaped launch button
- [ ] Launch button opens modal with gradient header
- [ ] Modal header shows background image with gradient overlay
- [ ] Close button (×) is visible and functional
- [ ] Email icon circle renders centered
- [ ] Newsletter heading and subheading display correctly
- [ ] Email input accepts text, has correct styling
- [ ] Subscribe button has correct size and color
- [ ] Form submission is prevented (no page reload)
- [ ] Modal closes via close button, Escape key, and backdrop click
- [ ] Footer shows "Poppy" and Component Dock link
- [ ] Responsive: form stacks on mobile (< 768px)
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
