# SubBox — Implementation Tasks

## Source
- ColorLib: Modal 13 (`modal-13`)
- Preview: https://preview.colorlib.com/theme/bootstrap/modal-13/
- New name: `subbox`

## Tasks

### 1. Scaffold app
- [ ] Copy simplest existing app as base
- [ ] Rename package to `@free-react-templates/subbox`
- [ ] Update `vite.config.ts` with `injectUiSource()` pattern
- [ ] Set `public/CNAME` to `subbox.free.componentdock.com`
- [ ] Set `homepage` in `package.json` to `https://subbox.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace

### 2. PageContent component
- [ ] Centered heading: "Modal #3" (h3, mb-4)
- [ ] Launch button: gray (#6c757d / btn-secondary), px-4 py-3, rounded (4px)
- [ ] Full viewport height, centered vertically and horizontally

### 3. ModalDialog component
- [ ] Full-screen overlay/backdrop
- [ ] Centered modal dialog with 7px border-radius
- [ ] Heavy drop-shadow: `0 10px 50px -10px rgba(0,0,0,0.9)`
- [ ] Soft pink background: #f9eaf2
- [ ] No image overlay (unlike Modal 12)
- [ ] Modal closes on Escape key, backdrop click, close button, "No, thanks"
- [ ] Focus trap: tab cycles within modal when open
- [ ] Focus returns to launch button on close

### 4. ModalClose component
- [ ] Top-right positioned close button
- [ ] Black X icon
- [ ] Dismisses modal on click

### 5. ModalLogo component
- [ ] Centered logo/icon above heading
- [ ] Width: 70px
- [ ] Use a simple SVG or lucide-react icon (not original asset)

### 6. ModalForm component
- [ ] Heading: "Exclusives offer from Instagram" (h3, 22px, black #000, centered)
- [ ] Description paragraph (gray #777, centered)
- [ ] Full-width email input with subtle shadow: `0 2px 2px 0 rgba(0,0,0,0.1)`
- [ ] Two side-by-side buttons in 2-column grid:
  - Left: "No, thanks" (secondary/gray, dismisses modal, btn-block)
  - Right: "Subscribe" (primary/blue, btn-block)
- [ ] Small footer text at bottom

### 7. Styling
- [ ] Font: Roboto via Google Fonts link in index.html
- [ ] Body font-weight: 300 (light)
- [ ] Headings: font-weight 400 (regular)
- [ ] Tailwind @theme: primary blue #007bff, secondary gray #6c757d, bg pink #f9eaf2
- [ ] No Bootstrap dependency — pure Tailwind

### 8. Tests (TDD)
- [ ] PageContent renders heading and launch button
- [ ] Clicking launch button opens modal
- [ ] Modal renders logo, heading, description, form, two buttons
- [ ] Close button closes modal
- [ ] "No, thanks" closes modal
- [ ] Escape key closes modal
- [ ] Email form has input and two side-by-side buttons
- [ ] Modal has soft pink background
- [ ] Focus trap works
- [ ] 100% coverage

### 9. Verification
- [ ] `scripts/verify-app.sh subbox` passes
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code

## Design notes

### Structure order (top to bottom)
1. Page background (full viewport, centered content)
2. Launch button (centered, gray)
3. Modal (hidden by default, toggled by state)

### Section-by-section fidelity
- **PageContent**: Matches original — minimal white page with centered heading + gray button
- **ModalDialog**: Matches original centering, radius, shadow; pink bg #f9eaf2
- **ModalClose**: Top-right black X, matches original positioning
- **ModalLogo**: Centered 70px icon above heading
- **ModalForm**: Full-width input with shadow, two side-by-side buttons (6-col each)
- **Colors**: Pink bg #f9eaf2, black headings #000, gray text #777, blue #007bff, gray #6c757d
- **Typography**: Roboto at 300/400 weights matches original
- **Border-radius**: 7px modal, 4px buttons — from original CSS
