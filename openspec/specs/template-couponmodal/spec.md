# Template: CouponModal (Bootstrap Modals)

## Purpose

CouponModal is a coupon discount popup template recreating ColorLib Modal 04. It provides a centered modal dialog with a two-column layout: a decorative background image on the left, and a "50% Off" headline, promo code input, and "Start Shopping" CTA on the right. The design uses Josefin Sans font, teal (#12d3cf) brand primary color, and a sharp-cornered modal with drop shadow.

## Design reference (replication findings)

- **Source:** ColorLib "Modal V04" — https://colorlib.com/wp/template/modal-04/
- **Source slug:** `modal-04`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/bootstrap/modal-04/ — **HTTP 200**, 2,971 B, fetched 2026-10-23 (page `<title>`: "Modal 04"). The slug-only path `https://preview.colorlib.com/theme/modal-04/` answers **404**; the live demo is the catalog alias above, recorded so the next prep does not repeat the probe.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/bootstrap/modal-04/css/style.css?v=892c06b3`, fetched 2026-10-23): brand `#12d3cf`, `#007bff`, `#0062cc`, `#0056b3`; dominant neutrals `#6c757d`, `#212529`, `#495057`; type Josefin Sans, Segoe UI, SFMono-Regular. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-04.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/couponmodal` had no recorded reference (docs/replication.md requires one).

## Design tokens

<!-- brand-claim:2026-10-23 -->
| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Brand (stated in this prep) | `#12d3cf` | live sheet paints it ×7 — `background` on `.cl-btn.cl-btn-primary`; style.css?v=892c06b3 (19,825 B, sha256 bdac4f916cec) · <https://preview.colorlib.com/theme/bootstrap/modal-04/> |

Recorded so the palette is machine-readable: the prep already states this colour in its design notes, and this row carries the same value with the live-sheet evidence.

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

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/couponmodal/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/couponmodal/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Landing page with modal trigger — the landing section shows the "CouponModal" heading, a subtitle, and a "Launch CouponModal" button
- [x] Coupon modal with two-column layout — the left column shows a background image and the right column shows "50% Off" heading, "On all Brands" subheading, promo code input, and "Start Shopping" button
- [ ] Modal dismissal — the modal closes
- [ ] Responsive design — the modal columns stack vertically with the image on top
