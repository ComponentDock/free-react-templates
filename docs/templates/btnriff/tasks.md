# Btnriff — Implementation Tasks

Source design: **Bootstrap Buttons 15** (`https://colorlib.com/wp/template/bootstrap-buttons-15/`) → recreation name **btnriff**. Shipped at https://btnriff.free.componentdock.com.

Scope: BtnRiff is a button showcase template featuring a comprehensive collection of Bootstrap-style button variants — solid, outline, rounded, social, dropdown, grouped, checkbox, radio, and toggle-slide buttons. All buttons use a 3D box-shadow depth effect and are displayed in a single-page layout with section headings.

## Component breakdown

Render order as composed in `apps/btnriff/src/App.tsx`:

### 1. SolidButtons
- The template SHALL display a row of 4 solid buttons (primary, secondary, tertiary, quarternary) each with an icon on the right side (heart, trash, paper-plane, cloud-download).
- Scenario — Solid icon buttons render:
  - **WHEN** the page loads
  - **THEN** 4 solid buttons are visible in a row: "Like" (blue, heart icon), "Delete" (teal, trash icon), "Send" (green, paper-plane icon), "Download" (pink, cloud-download icon)
- Scenario — Solid buttons have 3D shadow:
  - **WHEN** the page loads
  - **THEN** each solid button has a 3px 5px offset box-shadow in the button's shadow color

### 2. OutlineButtons
- The template SHALL display a row of 4 outline buttons (outline-primary, outline-secondary, outline-tertiary, outline-quarternary) labeled "Default".
- Scenario — Outline buttons render:
  - **WHEN** the page loads
  - **THEN** 4 outline buttons are visible in a row below the solid buttons, each labeled "Default" with colored border and white background

### 3. RoundedSolidButtons
- No dedicated spec block — hold this band to the design notes.
- Anchors: Default

### 4. RoundedOutlineButtons
- No dedicated spec block — hold this band to the design notes.
- Anchors: Default

### 5. SocialBrandButtons
- No dedicated spec block — hold this band to the design notes.
- Anchors: Solid · Outline · Rounded Solid · Rounded Outline

### 6. DropdownButtons
- The template SHALL display a section with dropdown buttons in 4 colors (primary, secondary, tertiary, quarternary) each opening a dropdown menu with "Action", "Another action", "Something else here".
- Scenario — Dropdown buttons render:
  - **WHEN** the page loads
  - **THEN** a "Dropdown Buttons" subheading is visible and 4 dropdown buttons are shown in a row
- Scenario — Dropdown menu opens:
  - **WHEN** the user clicks a dropdown button
  - **THEN** a dropdown menu appears below the button with 3 menu items

### 7. GroupButtons
- The template SHALL display a row of 4 rounded solid buttons (primary, secondary, tertiary, quarternary) labeled "Default" with 40px border-radius.
- Scenario — Rounded solid buttons render:
  - **WHEN** the page loads
  - **THEN** 4 rounded buttons with solid fills are visible, each labeled "Default" with pill-shaped styling

### 8. Checkboxes
- The template SHALL display custom-styled checkboxes in 5 variants (primary, secondary, tertiary, quarternary, disabled) each checked by default.
- Scenario — Checkboxes render:
  - **WHEN** the page loads
  - **THEN** a "Checkboxes" subheading is visible and 5 custom checkboxes are shown, each with a colored checkmark in the variant color

### 9. Radios
- The template SHALL display custom-styled radio buttons in 5 variants (primary, secondary, tertiary, quarternary, disabled) each selected by default.
- Scenario — Radio buttons render:
  - **WHEN** the page loads
  - **THEN** a "Radios Buttons" subheading is visible and 5 custom radio buttons are shown with colored fill when selected

### 10. SlideToggle
- The template SHALL display 2 toggle slide buttons with ON/OFF labels and smooth animation.
- Scenario — Slide toggles render:
  - **WHEN** the page loads
  - **THEN** a "Slide Button" subheading is visible and 2 toggle switches are shown, one showing "ON" state and one showing "OFF" state
- Scenario — Toggle animation works:
  - **WHEN** the user clicks a toggle switch
  - **THEN** the toggle animates between ON and OFF states with a color transition (blue for ON, red for OFF)

### 11. SocialIconButtons
- No dedicated spec block — hold this band to the design notes.

### 12. ActionButtons
- The template SHALL display a row of 4 rounded outline buttons labeled "Default".
- Scenario — Rounded outline buttons render:
  - **WHEN** the page loads
  - **THEN** 4 rounded outline buttons are visible, each labeled "Default" with pill-shaped styling

### 13. Footer
- The template SHALL display a footer linking to Component Dock.
- Scenario — Footer renders:
  - **WHEN** the page loads
  - **THEN** a footer is visible with a link to https://www.componentdock.com/ branded as "Component Dock"

### Cross-cutting requirements

- **Page Title** — The template SHALL display a heading "Button #05" at the top of the page.
  - Scenario — Page heading renders: **WHEN** the page loads; **THEN** the heading "Button #05" is visible at the top of the page in the `.heading-section` style (32px font)
- **Social Brand Buttons with Labels** — The template SHALL display social media buttons (Twitter, Facebook, Dribbble) in 4 columns showing: solid filled, outline, rounded solid, and rounded outline variants with brand icon and label text.
  - Scenario — Social brand buttons render: **WHEN** the page loads; **THEN** social brand buttons are visible for Twitter, Facebook, and Dribbble in a 4-column grid, with icon+label combinations like "Twitter", "Facebook", "Find us on Dribbble"
- **Group Buttons** — The template SHALL display button groups with solid-outline-solid combinations for primary and secondary colors.
  - Scenario — Group buttons render: **WHEN** the page loads; **THEN** a "Group Buttons" subheading is visible and 2 button groups are shown, each with 3 buttons (solid, outline, solid)
- **Social Icon-Only Buttons** — The template SHALL display social media icon-only buttons for Facebook, Twitter, LinkedIn, Pinterest, and Dribbble in solid, rounded, outline, and rounded-outline variants.
  - Scenario — Social icon buttons render: **WHEN** the page loads; **THEN** a "Social Buttons" subheading is visible and rows of icon-only social buttons are shown for Facebook (blue), Twitter (light blue), LinkedIn (dark blue), Pinterest (red), Dribbble (pink)
- **Action Buttons Row** — The template SHALL display a final row of action buttons with icons: "Watch Photos", "Download", "Add Comment", "Like" with count badge, and "Create Account".
  - Scenario — Action buttons render: **WHEN** the page loads; **THEN** a row of action buttons is visible at the bottom with icons and labels, including a badge count on the "Like" button
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/btnriff/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/btnriff/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] All 4 solid icon buttons render with correct colors and icons; [ ] All 4 outline buttons render with correct border colors; [ ] All 4 rounded solid buttons have 40px border-radius; [ ] All 4 rounded outline buttons have pill shape; [ ] Social brand buttons render in 4-column grid with correct colors; [ ] Dropdown buttons open menus on click; [ ] Button groups render in solid-outline-solid pattern; [ ] Custom checkboxes show colored checkmarks; [ ] Custom radio buttons show colored selection; [ ] Toggle switches animate between ON/OFF; [ ] Social icon-only buttons render for all 5 platforms; [ ] Action buttons row renders with icons and badge; [ ] Footer links to Component Dock; [ ] All buttons have 3px 5px box-shadow depth effect; [ ] Poppins font is used throughout; [ ] Responsive layout works at mobile widths; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/btnriff` ships on https://btnriff.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/btnriff/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/btnriff/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/btnriff/public/CNAME` = `btnriff.free.componentdock.com`
  and the package `homepage` = `https://btnriff.free.componentdock.com`.
