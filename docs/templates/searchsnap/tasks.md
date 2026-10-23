# Searchsnap — Implementation Tasks

Source design: **Search Form Bar 14** (`https://colorlib.com/wp/template/search-form-bar-14/`) → recreation name **searchsnap**. Shipped at https://searchsnap.free.componentdock.com.

Scope: Recreation of ColorLib **Search Form Bar 14** — a full-screen overlay search form with a single centered pill-shaped search bar and an "X" close button in the top-right corner. Minimalist, clean design focused entirely on the search input.

## Component breakdown

Render order as composed in `apps/searchsnap/src/App.tsx`:

### 1. Footer
- The footer SHALL display a link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer links to Component Dock:
  - **GIVEN** the overlay is displayed
  - **THEN** a footer link to https://www.componentdock.com/ is visible
  - **AND** the link text contains "Component Dock"
  - **AND** the link opens in a new tab

### 2. Overlay
- The overlay SHALL fill the entire viewport with a light gray (#f8f9fa) background and center content vertically and horizontally.
- Scenario — Overlay renders full viewport:
  - **GIVEN** the page loads
  - **THEN** the viewport is filled with a light gray background (#f8f9fa)
  - **AND** no other content is visible except the search bar and close button

### 3. CloseButton
- An "X" close button SHALL appear in the top-right corner of the overlay, colored gray (#999999) with a hover state that darkens to #333333.
- Scenario — Close button displays in top-right:
  - **GIVEN** the overlay is displayed
  - **THEN** an "X" close button appears in the top-right corner
  - **AND** the button is gray (#999999) color
  - **WHEN** the user hovers over the close button
  - **THEN** the color darkens to #333333

### 4. SearchBar
- A pill-shaped search bar SHALL be centered vertically and horizontally with a white background, light blue border (2px solid #d0e3f7), and fully rounded corners.
- Scenario — Search bar renders centered:
  - **GIVEN** the overlay is displayed
  - **THEN** a pill-shaped search bar is centered vertically and horizontally
  - **AND** the search bar has a white background
  - **AND** the search bar has a light blue border (2px solid #d0e3f7)
  - **AND** the search bar has fully rounded corners (border-radius ~28px)

### Cross-cutting requirements

- **Close button dismisses overlay** — Clicking the close button SHALL dismiss the overlay and show a "Search closed" message with a reopen option.
  - Scenario — Close button dismisses overlay: **GIVEN** the overlay is displayed; **WHEN** the user clicks the "X" close button; **THEN** the overlay disappears and a "Search closed" message is shown
- **Search input accepts text** — The search bar SHALL contain a text input with "Search..." placeholder text that accepts user input.
  - Scenario — Search input accepts text: **GIVEN** the search bar is displayed; **WHEN** the user clicks inside the search bar; **THEN** a text input receives focus; **AND** the input has placeholder text "Search..."; **AND** the user can type a search query
- **Search button is visible and styled** — A blue "Search" button SHALL appear on the right side of the search bar with pill shape, white text, and blue (#4a8cf7) background.
  - Scenario — Search button is visible and styled: **GIVEN** the search bar is displayed; **THEN** a blue "Search" button appears on the right side of the bar; **AND** the button has a pill shape (border-radius ~24px); **AND** the button text is white; **AND** the button background is blue (#4a8cf7)
- **Search button triggers search action** — Clicking the Search button SHALL trigger a search action with the entered query text.
  - Scenario — Search button triggers search action: **GIVEN** the search bar is displayed with text "vacation"; **WHEN** the user clicks the "Search" button; **THEN** a search submit action is triggered with the entered query
- **Enter key triggers search** — Pressing the Enter key in the search input SHALL trigger the same search action as clicking the Search button.
  - Scenario — Enter key triggers search: **GIVEN** the search bar is displayed with text "beach"; **WHEN** the user presses the Enter key; **THEN** the same search submit action is triggered
- **Responsive layout** — The overlay and search bar SHALL be responsive below `md` (767.98px — the sheet's `.cl-col-md-3`/`.cl-col-md-7` stack there, NOT 640px), with the search bar adjusting width and remaining tappable.
  - Scenario — Responsive layout: **GIVEN** the overlay is displayed on a mobile viewport (<=767.98px — `.cl-col-md-*` stacking, no 640px query exists); **THEN** the search bar width adjusts to fit within screen margins; **AND** the search button remains visible and tappable; **AND** the close button remains accessible
- **No ColorLib references in app code** — The app source code SHALL NOT contain any references to ColorLib, preview.colorlib.com, or colorlib.com. Provenance lives only in the spec, TEMPLATES.md, and PR.
  - Scenario — No ColorLib references in app code: **GIVEN** the app is built; **THEN** no source file in apps/searchsnap/ contains the string "colorlib" (case-insensitive)

## Verification

- [x] `apps/searchsnap` ships on https://searchsnap.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/searchsnap/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/searchsnap/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/searchsnap/public/CNAME` = `searchsnap.free.componentdock.com`
  and the package `homepage` = `https://searchsnap.free.componentdock.com`.
