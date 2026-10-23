# Btnpulse — Implementation Tasks

Source design: **Bootstrap Buttons 04** (`https://colorlib.com/wp/template/bootstrap-buttons-04/`) → recreation name **btnpulse**. Shipped at https://btnpulse.free.componentdock.com.

Scope: Recreation of ColorLib **Bootstrap Buttons 04** (`https://colorlib.com/wp/template/bootstrap-buttons-04/`). Preview URL: `https://preview.colorlib.com/theme/bb/bootstrap-buttons-04/` Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript · Lucide icons. New Name: `btnpulse` (Package: `@free-react-templates/btnpulse`).

## Component breakdown

Render order as composed in `apps/btnpulse/src/App.tsx`:

### 1. SizeButtons
- The app SHALL display buttons in three sizes: Large, Medium, and Small, each labeled.
- Scenario — Display button sizes:
  - **WHEN** the user views the sizes section
  - **THEN** they see three primary-colored buttons labeled "Large", "Medium", "Small"
  - **AND** each button has a small label above it indicating its size
  - **AND** the large button uses `btn-lg` sizing (font 16px, padding 15px 30px)
  - **AND** the default button uses standard sizing (font 12px, padding 8px 25px)
  - **AND** the small button uses `btn-sm` sizing (font 11px, padding 5px 15px)

### 2. ColorButtons
- The app SHALL display all 18 button color variants in a wrapping row.
- Scenario — Display color variants:
  - **WHEN** the user scrolls to the "Button Colors" section
  - **THEN** they see buttons for: Primary, Secondary, Success, Info, Warning, Danger, Light, Orange, Indigo, Pink, Deep Orange, Aqua, Dark, Black, Purple, Blue, Brown, Blue Gray
  - **AND** each button uses the corresponding background color with appropriate text color
  - **AND** all buttons share the same base style (4px radius, uppercase, shadow, hover overlay)

### 3. BlockButton
- The app SHALL display a full-width (block) primary button.
- Scenario — Display full-width button:
  - **WHEN** the user scrolls to the bottom section
  - **THEN** they see a primary-colored button spanning the full container width
  - **AND** the button is labeled "Button"

### 4. Footer
- Every template's footer MUST link to Component Dock.
- Scenario — Footer displayed:
  - **WHEN** the user scrolls to the bottom of the page
  - **THEN** they see a footer with a link to `https://www.componentdock.com/`

### Cross-cutting requirements

- **Page Layout** — The app SHALL display a single-page button showcase centered on a white background.
  - Scenario — Display page: **WHEN** the user visits BtnPulse; **THEN** the page has a white background with centered content in a max-width container; **AND** the content is vertically centered within the viewport
- **Page Title** — The app SHALL display a section heading identifying the template.
  - Scenario — Display title: **WHEN** the user views the page; **THEN** they see a heading "#04 — Bootstrap Buttons" (dark text, 20px size)
- **Button Hover Effect** — All buttons SHALL display a hover animation where a white semi-transparent overlay slides up from the bottom.
  - Scenario — Hover animation: **WHEN** the user hovers over any button; **THEN** a `rgba(255,255,255,0.2)` overlay transitions from 0% to 100% height; **AND** the transition completes in approximately 0.2s
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/btnpulse/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/btnpulse/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Page loads with white background, centered content; [ ] Title heading displays correctly; [ ] Three button sizes render with correct padding/font-size; [ ] All 18 color variants render with correct backgrounds; [ ] Full-width block button spans container; [ ] Hover overlay animation works on all buttons; [ ] Footer links to Component Dock; [ ] No ColorLib references in app code; [ ] `public/CNAME` contains `btnpulse.free.componentdock.com`; [ ] `homepage` in package.json is `https://btnpulse.free.componentdock.com`; [ ] TypeScript compiles without errors; [ ] All tests pass with 100% coverage; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/btnpulse` ships on https://btnpulse.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/btnpulse/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/btnpulse/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/btnpulse/public/CNAME` = `btnpulse.free.componentdock.com`
  and the package `homepage` = `https://btnpulse.free.componentdock.com`.
