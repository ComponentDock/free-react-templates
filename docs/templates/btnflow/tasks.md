# Btnflow — Implementation Tasks

Source design: **Bootstrap Buttons 17** (`https://colorlib.com/wp/template/bootstrap-buttons-17/`) → recreation name **btnflow**. Shipped at https://btnflow.free.componentdock.com.

Scope: BtnFlow is a comprehensive button showcase template featuring an extended collection of Bootstrap-style button variants — solid, outline, rounded, social, dropdown, grouped, checkbox, radio, and toggle-slide buttons. All buttons use a 3D box-shadow depth effect and are displayed in a single-page layout with section headings.

## Component breakdown

Render order as composed in `apps/btnflow/src/App.tsx`:

### 1. SolidButtons
- The template SHALL display a row of 10 solid buttons (blue, indigo, purple, pink, red, orange, yellow, green, teal, cyan) each with an icon on the right side.
- Scenario — Solid icon buttons render:
  - **WHEN** the page loads
  - **THEN** 10 solid buttons are visible in a responsive grid: "Like" (blue, heart icon), "Delete" (indigo, trash icon), "Send" (purple, paper-plane icon), "Download" (pink, cloud-download icon), "Share" (red, share icon), "Edit" (orange, edit icon), "Save" (yellow, save icon), "Print" (green, printer icon), "Settings" (teal, settings icon), "Home" (cyan, home icon)
- Scenario — Solid buttons have 3D shadow:
  - **WHEN** the page loads
  - **THEN** each solid button has a 3px 5px offset box-shadow in the button's shadow color

### 2. OutlineButtons
- The template SHALL display a row of 10 outline buttons labeled "Default" with colored borders and white backgrounds.
- Scenario — Outline buttons render:
  - **WHEN** the page loads
  - **THEN** 10 outline buttons are visible in a responsive grid below the solid buttons, each labeled "Default" with correct border colors

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
- The template SHALL display a section with dropdown buttons in 8 colors (blue, indigo, purple, pink, red, orange, green, teal) each opening a dropdown menu with "Action", "Another action", "Something else here".
- Scenario — Dropdown buttons render:
  - **WHEN** the page loads
  - **THEN** a "Dropdown Buttons" subheading is visible and 8 dropdown buttons are shown in a responsive grid
- Scenario — Dropdown menu opens:
  - **WHEN** the user clicks a dropdown button
  - **THEN** a dropdown menu appears below the button with 3 menu items

### 7. GroupButtons
- The template SHALL display a row of 10 rounded solid buttons labeled "Default" with 40px border-radius.
- Scenario — Rounded solid buttons render:
  - **WHEN** the page loads
  - **THEN** 10 rounded buttons with solid fills are visible, each labeled "Default" with pill-shaped styling

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
  - **THEN** the toggle animates between ON and OFF states with a color transition (brand blue for ON, brand red for OFF)

### 11. SocialIconButtons
- No dedicated spec block — hold this band to the design notes.

### 12. ActionButtons
- The template SHALL display a row of 10 rounded outline buttons labeled "Default".
- Scenario — Rounded outline buttons render:
  - **WHEN** the page loads
  - **THEN** 10 rounded outline buttons are visible, each labeled "Default" with pill-shaped styling

### 13. Footer
- The template SHALL display a footer linking to Component Dock.
- Scenario — Footer renders:
  - **WHEN** the page loads
  - **THEN** a footer is visible with a link to https://www.componentdock.com/ branded as "Component Dock"

### Cross-cutting requirements

- **Page Title** — The template SHALL display a heading "Button #06" at the top of the page.
  - Scenario — Page heading renders: **WHEN** the page loads; **THEN** the heading "Button #06" is visible at the top of the page in the `.heading-section` style (32px font)
- **Social Brand Buttons with Labels (8 Brands)** — The template SHALL display social media buttons (Facebook, Twitter, Google, GitHub, LinkedIn, Instagram, YouTube, Dribbble) in 4 columns showing: solid filled, outline, rounded solid, and rounded outline variants with brand icon and label text.
  - Scenario — Social brand buttons render: **WHEN** the page loads; **THEN** social brand buttons are visible for all 8 platforms in a 4-column grid, with icon+label combinations like "Facebook", "Twitter", "Google", "GitHub", "LinkedIn", "Instagram", "YouTube", "Find us on Dribbble"
- **Group Buttons (3 Groups)** — The template SHALL display button groups with solid-outline-solid combinations for primary, secondary, and tertiary color sets.
  - Scenario — Group buttons render: **WHEN** the page loads; **THEN** a "Group Buttons" subheading is visible and 3 button groups are shown, each with 3 buttons (solid, outline, solid)
- **Social Icon-Only Buttons (8 Brands)** — The template SHALL display social media icon-only buttons for Facebook, Twitter, Google, GitHub, LinkedIn, Instagram, YouTube, Dribbble in solid, rounded, outline, and rounded-outline variants.
  - Scenario — Social icon buttons render: **WHEN** the page loads; **THEN** a "Social Buttons" subheading is visible and rows of icon-only social buttons are shown for all 8 platforms in 4 variant columns
- **Action Buttons Row (5 Buttons)** — The template SHALL display a final row of action buttons with icons: "Watch Photos", "Download", "Add Comment", "Like" with count badge, and "Create Account".
  - Scenario — Action buttons render: **WHEN** the page loads; **THEN** a row of action buttons is visible at the bottom with icons and labels, including a badge count on the "Like" button
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/btnflow/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/btnflow/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] All 10 solid icon buttons render with correct colors and icons; [ ] All 10 outline buttons render with correct border colors; [ ] All 10 rounded solid buttons have 40px border-radius; [ ] All 10 rounded outline buttons have pill shape; [ ] Social brand buttons render in 4-column grid with correct colors for 8 platforms; [ ] Dropdown buttons (8) open menus on click; [ ] Button groups (3) render in solid-outline-solid pattern; [ ] Custom checkboxes (5) show colored checkmarks; [ ] Custom radio buttons (5) show colored selection; [ ] Toggle switches (2) animate between ON/OFF; [ ] Social icon-only buttons render for all 8 platforms in 4 variants; [ ] Action buttons row (5) renders with icons and badge; [ ] Footer links to Component Dock; [ ] All buttons have 3px 5px box-shadow depth effect; [ ] Poppins font is used throughout; [ ] Responsive layout works at mobile widths; [ ] TypeScript strict compilation passes; [ ] Vitest coverage at 100% lines/functions/branches/statements; [ ] App public/CNAME set to `btnflow.free.componentdock.com`; [ ] Footer includes Component Dock branding link (`https://www.componentdock.com/`); [ ] Tailwind `@theme` configuration matches all design tokens; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/btnflow` ships on https://btnflow.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/btnflow/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/btnflow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/btnflow/public/CNAME` = `btnflow.free.componentdock.com`
  and the package `homepage` = `https://btnflow.free.componentdock.com`.
