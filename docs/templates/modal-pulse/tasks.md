# Modal-pulse — Implementation Tasks

Source design: **Modal 18** (`https://colorlib.com/wp/template/modal-18/`) → recreation name **modal-pulse**. Shipped at https://modal-pulse.free.componentdock.com.

Scope: Recreation of ColorLib **Modal 18** — a free offer-with-CTA modal template. The modal promotes an exclusive offer or product launch, featuring a centered dialog with an illustration, headline, description, and dual-action buttons (dismiss + primary CTA).

## Component breakdown

Render order as composed in `apps/modal-pulse/src/App.tsx`:

### 1. LaunchSection
- No dedicated spec block — hold this band to the design notes.
- Anchors: ModalPulse · An offer modal for your next project. · Launch modal

### 2. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: ModalPulse · An offer modal for your next project. · More templates at Component Dock

### 3. OfferModal
- The page SHALL display a "Launch modal" button centered on the page, and clicking it SHALL open the modal dialog.
- Scenario — Initial state — trigger button visible:
  - **WHEN** the page loads
  - **THEN** a "Launch modal" button should be visible in the page center
  - **AND** the modal dialog should NOT be visible
- Scenario — Open modal on button click:
  - **WHEN** I click the "Launch modal" button
  - **THEN** the modal dialog should become visible
  - **AND** the modal should be centered vertically and horizontally
  - **AND** the backdrop overlay should dim the page

### Cross-cutting requirements

- **Modal content structure** — The modal SHALL contain an illustration image, heading, description, and action buttons.
  - Scenario — Modal content structure: **WHEN** the modal is open; **THEN** an illustration image should be displayed at the top of the modal; **AND** a heading "Introducing Work from Anywhere" should be visible; **AND** a description paragraph should be visible below the heading; **AND** a "Get the app" primary button should be visible; **AND** a "No thanks" dismiss link should be visible
  - Scenario — Illustration background color: **WHEN** the modal is open; **THEN** the illustration area should have a light cyan background (#b2fcff)
- **Modal dismissal** — The modal SHALL close when the user clicks "No thanks", clicks the backdrop, or presses Escape.
  - Scenario — Dismiss modal via close link: **WHEN** the modal is open; **AND** I click the "No thanks" link; **THEN** the modal dialog should close; **AND** the backdrop overlay should be removed; **AND** the page content should be interactive again
  - Scenario — Dismiss modal via backdrop click: **WHEN** the modal is open; **AND** I click the backdrop overlay area; **THEN** the modal dialog should close
  - Scenario — Dismiss modal via Escape key: **WHEN** the modal is open; **AND** I press the Escape key; **THEN** the modal dialog should close
- **Modal visual styling** — The modal SHALL use specific design tokens matching the ColorLib reference.
  - Scenario — Modal visual styling: **WHEN** the modal is open; **THEN** the modal dialog should have a border radius of 7px; **AND** the modal should have a drop shadow; **AND** the heading text should be bold (#000); **AND** the paragraph text should be gray (#777)
  - Scenario — Button styling: **WHEN** the modal is open; **THEN** the "Get the app" button should have a border radius of 4px; **AND** the "Get the app" button should have primary color styling
- **Accessibility** — The modal SHALL be accessible with proper ARIA attributes and keyboard navigation.
  - Scenario — Accessibility attributes: **WHEN** the modal is open; **THEN** the modal should have role="dialog"; **AND** the modal should have aria-labelledby pointing to the heading; **AND** the modal should have aria-hidden="true" when closed
  - Scenario — Keyboard trap in modal: **WHEN** the modal is open; **THEN** Tab should cycle through focusable elements within the modal; **AND** focus should NOT escape to the page behind the modal; [ ] Modal opens on "Launch modal" button click; [ ] Modal closes on "No thanks" click, backdrop click, Escape key; [ ] Illustration area uses `#b2fcff` light cyan background; [ ] Modal dialog has 7px border radius and heavy drop shadow; [ ] Heading is bold Roboto, paragraph is light gray; [ ] "Get the app" primary button has 4px radius; [ ] Modal is centered vertically and horizontally; [ ] Backdrop overlay dims page when modal is open; [ ] aria-labelledby, role="dialog", aria-hidden attributes present; [ ] Tab focus is trapped within the modal when open; [ ] Footer links to https://www.componentdock.com/; [ ] No references to ColorLib anywhere in app source code

## Verification

- [x] `apps/modal-pulse` ships on https://modal-pulse.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/modal-pulse/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/modal-pulse/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/modal-pulse/public/CNAME` = `modal-pulse.free.componentdock.com`
  and the package `homepage` = `https://modal-pulse.free.componentdock.com`.
