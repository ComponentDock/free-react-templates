# Template: PopSlide (Newsletter Modal)

## Purpose

PopSlide is a single-page NEWSLETTER SUBSCRIPTION MODAL template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Modal V10" free template (source:
https://colorlib.com/wp/template/modal-10/; preview:
https://preview.colorlib.com/theme/bootstrap/modal-10/), built under a
DIFFERENT name (**PopSlide**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 newsletter subscription modal with:
- A full-viewport section with centered heading "Modal 10" and a
  "Launch Modal 10" pill button (`#3e64ff` primary)
- A centered modal dialog (max-width 500px, soft shadow)
- Modal header: 230px tall with a purple-to-blue gradient overlay
  (`linear-gradient(45deg, #dd00ff, #3e65ff)` at 0.3 opacity) over a
  background image, with a white close button in the top-right corner
- Modal body: overlaps header with -180px top margin, white background,
  "Newsletter" heading (bold, white, Poppins), 200x200px circular email
  icon container (`rgba(255,255,255,0.2)` bg), "Subscribe to our
  newsletter" subheading, and a subscribe form (email input + submit
  button)
- Form input: 52px height, 5px radius, `rgba(0,0,0,0.05)` background,
  focus border `#3e64ff`
- Submit button: 130px wide, `#3e64ff` background, white text
- Font: Poppins (Google Fonts), weights 300–900
- Body text: `#212529`
- Page background: white

**WHAT MAKES POPSLIDE DISTINCT (signature behaviors):**

1. **Gradient-over-image modal header.** The modal header is a 230px
   tall block with a background image overlaid by a 45-degree
   linear-gradient from magenta (`#dd00ff`) to blue (`#3e65ff`) at 30%
   opacity. This creates a duotone/vibrant header effect that bleeds into
   the body via negative margin overlap.

2. **Negative-margin body overlap.** The modal body sits at -180px top
   margin, pulling it upward into the gradient header. This creates a
   layered card effect where the white body card floats over the colorful
   header.

3. **Circular icon container.** A 200x200px circle with translucent white
   background (`rgba(255,255,255,0.2)`) holds the email/envelope icon,
   centered in the header area. The icon is an SVG (email.svg).

4. **Pill-shaped CTA button.** The main launch button and submit button
   use `border-radius: 40px` (fully rounded pill shape), primary color
   `#3e64ff`.

5. **Compact subscribe form.** Two-part horizontal form: email input
   (flex-grow, `rgba(0,0,0,0.05)` bg, no border) + fixed-width submit
   button (130px, `#3e64ff` bg, white text).

## Source mapping

| Field | Value |
|-------|-------|
| ColorLib source name | Modal V10 |
| ColorLib slug | `modal-10` |
| Source URL | https://colorlib.com/wp/template/modal-10/ |
| Preview URL | https://preview.colorlib.com/theme/bootstrap/modal-10/ |
| Recreation name | **PopSlide** |
| App folder | `apps/popslide` |
| Package name | `@free-react-templates/popslide` |
| Deploy URL | https://popslide.free.componentdock.com |

## Design tokens

Extracted from the preview stylesheet (`css/style.css`):

| Token | Value | Usage |
|-------|-------|-------|
| `--brand-primary` | `#3e64ff` | Buttons, focus rings, submit bg |
| `--brand-magenta` | `#dd00ff` | Gradient start (modal header) |
| `--brand-blue` | `#3e65ff` | Gradient end (modal header) |
| `--text-primary` | `#212529` | Body text color |
| `--bg-page` | `#ffffff` | Page/section background |
| `--font-family` | `"Poppins", Arial, sans-serif` | Headings, body (via Google Fonts) |
| `--btn-radius` | `40px` | Pill-shaped buttons |
| `--input-radius` | `5px` | Form input corners |
| `--modal-shadow` | `0px 10px 34px -15px rgba(0,0,0,0.24)` | Modal card shadow |
| `--modal-max-width` | `500px` | Modal dialog max width |
| `--modal-header-height` | `230px` | Gradient header height |
| `--modal-body-overlap` | `-180px` | Negative margin for body overlap |
| `--icon-circle-size` | `200px` | Circular email icon container |
| `--icon-circle-bg` | `rgba(255,255,255,0.2)` | Translucent circle background |
| `--input-height` | `52px` | Form input height |
| `--input-bg` | `rgba(0,0,0,0.05)` | Input field background |
| `--submit-width` | `130px` | Submit button width |

## Gherkin requirements

### Feature: PopSlide Newsletter Modal

  As a site visitor,
  I want to subscribe to a newsletter via a modal popup,
  So that I can receive updates.

  Scenario: Page loads with launch button visible
    Given the page has loaded
    When I view the page
    Then I see a heading "Newsletter Modal"
    And I see a "Subscribe Now" button

  Scenario: Modal opens on button click
    Given the page has loaded
    When I click the "Subscribe Now" button
    Then a modal dialog appears centered on the screen
    And the modal has a gradient header (purple to blue)
    And the modal has a circular email icon
    And the modal has a "Newsletter" heading
    And the modal has a "Subscribe to our newsletter" subheading
    And the modal has an email input field
    And the modal has a "Subscribe" submit button

  Scenario: Modal closes on close button click
    Given the modal is open
    When I click the close button
    Then the modal disappears

  Scenario: Modal closes on overlay click
    Given the modal is open
    When I click outside the modal dialog
    Then the modal disappears

  Scenario: Modal closes on Escape key
    Given the modal is open
    When I press the Escape key
    Then the modal disappears

  Scenario: Email input accepts text
    Given the modal is open
    When I type "user@example.com" in the email input
    Then the input shows "user@example.com"

  Scenario: Subscribe form submission
    Given the modal is open
    And I have entered a valid email address
    When I click the "Subscribe" button
    Then the form submits (prevent default)

  Scenario: Responsive layout on mobile
    Given the viewport is 375px wide
    When I view the page
    Then the launch button is centered
    And the modal is full-width with padding

  Scenario: Modal header gradient visual
    Given the modal is open
    When I inspect the modal header
    Then I see a purple-to-blue gradient overlay
    And the gradient is at 30% opacity
    And the header height is approximately 230px

  Scenario: Body overlaps header
    Given the modal is open
    When I inspect the modal body
    Then the body overlaps the header with negative top margin
    And the body has a white background
    And the body has rounded corners at the top

## Verification checklist

- [ ] Modal opens when launch button is clicked
- [ ] Modal closes on close button, overlay click, and Escape key
- [ ] Gradient header renders with purple-to-blue gradient at 30% opacity
- [ ] Email icon is centered in a 200x200px translucent circle
- [ ] Form has email input (52px height, 5px radius, subtle bg)
- [ ] Submit button is pill-shaped (40px radius), primary blue, 130px wide
- [ ] Body overlaps header via negative margin (-180px)
- [ ] Font is Poppins (Google Fonts) loaded via <link> in index.html
- [ ] Modal max-width is 500px with soft box-shadow
- [ ] Footer links to Component Dock (https://www.componentdock.com/)
- [ ] No ColorLib references in app code
- [ ] Tests pass with 100% coverage
- [ ] TypeCheck passes
- [ ] Lint passes
- [ ] Build succeeds
