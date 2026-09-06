# Template: MailBliss (Modal Form)

## Purpose

Recreation of ColorLib "Modal 08" — an email confirmation notification modal with a vibrant gradient header, skewed angle effect, and "You've Got Mail!" message.

- **ColorLib source:** [modal-08](https://colorlib.com/wp/template/modal-08/)
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/modal-08/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-08.jpg
- **New name:** `mailbliss` (apps/mailbliss, @free-react-templates/mailbliss)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Replication Reference

### Source Analysis (fetched 2026-09-06)

**Preview page structure (from live DOM at preview.colorlib.com/theme/bootstrap/modal-08/):**
- Single full-height section with centered content
- Heading "Modal 08" + "Launch Modal 08" button
- Bootstrap modal (centered, fade animation)
- Modal header: gradient background (#915eff purple → #ff8e59 orange), height 230px, with skewed angle effect (ftco-degree-bg: two pseudo-elements with skewY ±10deg creating a V-shaped bottom)
- Close button (X) top-right
- Modal body: positioned with negative margin-top (-180px) to overlap header
  - "You've Got Mail!" heading (white, bold, over the gradient)
  - Circular email icon (200x200px, SVG)
  - "We sent confirmation link to:" subheading (18px)
  - "johndoe@gmail.com" email display (22px, bold, @ symbol in light weight)
- Dependencies: Bootstrap 4, jQuery, Popper.js, Ionicons, Poppins font

**Visual design (from screenshot):**
- White background section
- Centered vertically, full-height layout
- Modal with vivid purple-to-orange gradient header
- Skewed/angled bottom edge on header creating dynamic visual
- Email icon centered in the gradient area
- Clean white body with confirmation message
- No form inputs — purely informational/confirmation modal

### Design Tokens

| Token | Value | Source |
|---|---|---|
| Brand primary | `#007bff` (Bootstrap blue) | CSS `:root` `--primary`, `.btn-primary` |
| Gradient start (purple) | `#915eff` | `.modal-content .modal-header` background |
| Gradient end (orange) | `#ff8e59` | `.modal-content .modal-header` background |
| Gradient angle | `45deg` | linear-gradient direction |
| Text color | `#212529` | `body` color |
| Background | `#fff` | `body` background, `.ftco-section` background |
| Heading in modal (over gradient) | `#fff` | `.modal-content .modal-body h2` color |
| Font family | `Poppins, Arial, sans-serif` | Global styles |
| Font weights used | 300, 400, 500, 600, 700, 800, 900 | @font-face declarations |
| Modal max-width | `600px` | `.modal-dialog` |
| Modal box-shadow | `0px 10px 34px -15px rgba(0,0,0,0.24)` | `.modal-content` |
| Modal header height | `230px` | `.modal-content .modal-header` |
| Modal body margin-top | `-180px` (overlap header) | `.modal-content .modal-body` |
| Email icon size | `200x200px`, `border-radius: 50%` | `.modal-content .modal-body .icon` |
| Close button size | `40x40px` | `.modal-content button.close` |
| Skew effect | `skewY(±10deg)` via pseudo-elements | `.ftco-degree-bg:after`, `.ftco-degree-bg:before` |
| Skew height | `60px` | pseudo-element height |
| Email heading font-weight | `800`, `22px` | `.modal-content .modal-body h3` |
| Email `@` symbol weight | `300` (light) | `.modal-content .modal-body h3 span` |
| Subheading font-size | `18px` | `.modal-content .modal-body h4` |

## Gherkin Requirements

### Feature: MailBliss — Email Confirmation Notification Modal

#### Scenario: Page renders with heading and launch button
- **Given** the user navigates to the MailBliss page
- **When** the page loads
- **Then** the heading "MailBliss" (or equivalent) is visible
- **And** a "Launch Modal" button is visible below the heading
- **And** the page background is white (#fff)
- **And** the content is centered vertically on the page

#### Scenario: Modal opens on launch button click
- **Given** the user is on the MailBliss page
- **When** the user clicks the "Launch Modal" button
- **Then** a centered modal appears with a fade-in animation
- **And** the modal has a gradient header (purple #915eff to orange #ff8e59 at 45deg)
- **And** the modal header has a skewed/angled bottom edge (V-shape from pseudo-elements)
- **And** a close button (X) is visible in the top-right corner
- **And** the background behind the modal is dimmed (backdrop)

#### Scenario: Modal displays confirmation message
- **Given** the modal is open
- **When** the user inspects the modal body
- **Then** a heading "You've Got Mail!" is visible (white text, overlapping the gradient)
- **And** a circular email icon (200x200px) is visible in the gradient area
- **And** the text "We sent confirmation link to:" is visible (18px)
- **And** the email "johndoe@gmail.com" is displayed (22px, bold, @ in light weight)

#### Scenario: Modal header gradient is correctly rendered
- **Given** the modal is open
- **When** the user views the modal header
- **Then** the background is a linear-gradient from #915eff (bottom-left) to #ff8e59 (top-right)
- **And** the gradient angle is 45deg
- **And** the header height is approximately 230px

#### Scenario: Skewed angle effect on header
- **Given** the modal is open
- **When** the user views the bottom edge of the modal header
- **Then** there is a V-shaped skewed effect created by two pseudo-elements
- **And** the left pseudo-element has skewY(10deg)
- **And** the right pseudo-element has skewY(-10deg)
- **And** both pseudo-elements are 60px tall with white background

#### Scenario: Modal body overlaps header
- **Given** the modal is open
- **When** the user views the transition between header and body
- **Then** the modal body overlaps the header by approximately 180px (negative margin-top)
- **And** the email icon appears to sit in the gradient area

#### Scenario: Modal closes on close button click
- **Given** the modal is open
- **When** the user clicks the close button (X)
- **Then** the modal fades out and closes
- **And** the background overlay disappears

#### Scenario: Modal closes on backdrop click
- **Given** the modal is open
- **When** the user clicks outside the modal (on the backdrop)
- **Then** the modal closes

#### Scenario: Modal is keyboard accessible
- **Given** the modal is open
- **When** the user presses the Escape key
- **Then** the modal closes

#### Scenario: Responsive layout
- **Given** the user views the page on a mobile device (width < 768px)
- **When** the page renders
- **Then** the content remains centered and readable
- **And** the modal is properly sized and scrollable if needed

#### Scenario: Accessibility basics
- **Given** the modal is rendered in the DOM
- **When** a screen reader inspects the modal
- **Then** the modal has `role="dialog"` and `aria-labelledby` pointing to the heading
- **And** the close button has `aria-label="Close"`

## Verification Checklist

- [ ] `openspec/specs/template-mailbliss/spec.md` exists with Gherkin scenarios
- [ ] `docs/templates/mailbliss/tasks.md` exists with section breakdown
- [ ] Design tokens extracted and documented
- [ ] Preview DOM structure analyzed and recorded
- [ ] Screenshot visual design noted
- [ ] New name `mailbliss` does not collide with existing apps/ or specs
- [ ] No ColorLib references in planned app code (provenance only in spec/PR)
- [ ] Footer will link Component Dock (https://www.componentdock.com/)
