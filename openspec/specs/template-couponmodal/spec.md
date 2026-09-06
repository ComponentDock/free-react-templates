## Purpose

CouponModal is a coupon discount popup template recreating ColorLib Modal 04. It provides a centered modal dialog with a two-column layout: a decorative background image on the left, and a "50% Off" headline, promo code input, and "Start Shopping" CTA on the right. The design uses Josefin Sans font, teal (#12d3cf) brand primary color, and a sharp-cornered modal with drop shadow.

## Requirements

### Requirement: Landing page with modal trigger

The template SHALL display a centered landing section with the site name "CouponModal" as a heading, a subtitle, and a "Launch CouponModal" button that opens the coupon modal dialog.

#### Scenario: Landing renders correctly

- **WHEN** the app loads
- **THEN** the landing section shows the "CouponModal" heading, a subtitle, and a "Launch CouponModal" button

#### Scenario: Clicking launch button opens the modal

- **WHEN** the user clicks the "Launch CouponModal" button
- **THEN** a modal dialog appears with `aria-modal="true"` and the coupon content is visible

### Requirement: Coupon modal with two-column layout

The modal SHALL contain a two-column layout: a left column with a decorative background image, and a right column with a "50% Off" heading (58px bold uppercase), "On all Brands" subheading (16px uppercase), a promo code input with "Enter code" placeholder, and a "Start Shopping" CTA button. A decorative border pseudo-element surrounds the text content area.

#### Scenario: Modal displays two-column layout

- **WHEN** the modal is open
- **THEN** the left column shows a background image and the right column shows "50% Off" heading, "On all Brands" subheading, promo code input, and "Start Shopping" button

#### Scenario: Close button styling

- **WHEN** the modal is open
- **THEN** the close button is a 40x40px square with teal (#12d3cf) background and white X icon, positioned in the top-right corner

#### Scenario: Form submission is prevented

- **WHEN** the user types in the promo code input and presses Enter
- **THEN** the form submission is prevented (no page reload)

### Requirement: Modal dismissal

The modal SHALL be closable via the close button (X icon), pressing Escape, or clicking the backdrop overlay outside the modal content.

#### Scenario: Close button dismisses modal

- **WHEN** the user clicks the X close button
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

The template SHALL display a footer with the template name "CouponModal", a short description, and a "More templates at Component Dock" link pointing to https://www.componentdock.com/.

#### Scenario: Footer renders correctly

- **WHEN** the page loads
- **THEN** the footer shows "CouponModal", a description, and a link to Component Dock

### Requirement: Responsive design

The modal SHALL be responsive: on mobile viewports (width < 768px), the two columns stack vertically and the left column image collapses to 300px minimum height.

#### Scenario: Mobile layout stacks columns

- **WHEN** the viewport is less than 768px wide
- **THEN** the modal columns stack vertically with the image on top

### Requirement: Design tokens

The template SHALL use Josefin Sans as the primary font (loaded via Google Fonts), teal (#12d3cf) as the brand primary color, white page background, and the modal shall have 700px max-width with no border and a drop shadow of `0px 10px 34px -15px rgba(0,0,0,0.24)`.

#### Scenario: Brand colors are applied

- **WHEN** the page renders
- **THEN** the teal brand color is used for the close button, CTA button, and form focus states

#### Scenario: Font family is applied

- **WHEN** the page renders
- **THEN** Josefin Sans is used as the primary font family
