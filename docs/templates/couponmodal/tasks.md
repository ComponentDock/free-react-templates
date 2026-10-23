# Couponmodal — Implementation Tasks

Source design: **Modal 04** (`https://colorlib.com/wp/template/modal-04/`) → recreation name **couponmodal**. Shipped at https://couponmodal.free.componentdock.com.

Scope: CouponModal is a coupon discount popup template recreating ColorLib Modal 04. It provides a centered modal dialog with a two-column layout: a decorative background image on the left, and a "50% Off" headline, promo code input, and "Start Shopping" CTA on the right.

## Component breakdown

Render order as composed in `apps/couponmodal/src/App.tsx`:

### 1. LaunchSection
- No dedicated spec block — hold this band to the design notes.
- Anchors: CouponModal · A coupon discount popup for your next project. · Launch CouponModal

### 2. Footer
- The template SHALL display a footer with the template name "CouponModal", a short description, and a "More templates at Component Dock" link pointing to https://www.componentdock.com/.
- Scenario — Footer renders correctly:
  - **WHEN** the page loads
  - **THEN** the footer shows "CouponModal", a description, and a link to Component Dock

### 3. CouponModal
- The modal SHALL contain a two-column layout: a left column with a decorative background image, and a right column with a "50% Off" heading (58px bold uppercase), "On all Brands" subheading (16px uppercase), a promo code input with "Enter code" placeholder, and a "Start Shopping" CTA button. A decorative border pseudo-element surrounds the text content area.
- Scenario — Modal displays two-column layout:
  - **WHEN** the modal is open
  - **THEN** the left column shows a background image and the right column shows "50% Off" heading, "On all Brands" subheading, promo code input, and "Start Shopping" button
- Scenario — Close button styling:
  - **WHEN** the modal is open
  - **THEN** the close button is a 40x40px square with teal (#12d3cf) background and white X icon, positioned in the top-right corner
- Scenario — Form submission is prevented:
  - **WHEN** the user types in the promo code input and presses Enter
  - **THEN** the form submission is prevented (no page reload)

### Cross-cutting requirements

- **Landing page with modal trigger** — The template SHALL display a centered landing section with the site name "CouponModal" as a heading, a subtitle, and a "Launch CouponModal" button that opens the coupon modal dialog.
  - Scenario — Landing renders correctly: **WHEN** the app loads; **THEN** the landing section shows the "CouponModal" heading, a subtitle, and a "Launch CouponModal" button
  - Scenario — Clicking launch button opens the modal: **WHEN** the user clicks the "Launch CouponModal" button; **THEN** a modal dialog appears with `aria-modal="true"` and the coupon content is visible
- **Modal dismissal** — The modal SHALL be closable via the close button (X icon), pressing Escape, or clicking the backdrop overlay outside the modal content.
  - Scenario — Close button dismisses modal: **WHEN** the user clicks the X close button; **THEN** the modal closes
  - Scenario — Escape key dismisses modal: **WHEN** the user presses Escape; **THEN** the modal closes
  - Scenario — Backdrop click dismisses modal: **WHEN** the user clicks on the dark backdrop outside the modal content; **THEN** the modal closes
  - Scenario — Clicking inside modal does not close it: **WHEN** the user clicks inside the modal content area; **THEN** the modal remains open
- **Responsive design** — The modal SHALL be responsive: on mobile viewports (width < 768px), the two columns stack vertically and the left column image collapses to 300px minimum height.
  - Scenario — Mobile layout stacks columns: **WHEN** the viewport is less than 768px wide; **THEN** the modal columns stack vertically with the image on top
- **Design tokens** — The template SHALL use Josefin Sans as the primary font (loaded via Google Fonts), teal (#12d3cf) as the brand primary color, white page background, and the modal shall have 700px max-width with no border and a drop shadow of `0px 10px 34px -15px rgba(0,0,0,0.24)`.
  - Scenario — Brand colors are applied: **WHEN** the page renders; **THEN** the teal brand color is used for the close button, CTA button, and form focus states
  - Scenario — Font family is applied: **WHEN** the page renders; **THEN** Josefin Sans is used as the primary font family
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/couponmodal/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/couponmodal/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/couponmodal` ships on https://couponmodal.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/couponmodal/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/couponmodal/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/couponmodal/public/CNAME` = `couponmodal.free.componentdock.com`
  and the package `homepage` = `https://couponmodal.free.componentdock.com`.
