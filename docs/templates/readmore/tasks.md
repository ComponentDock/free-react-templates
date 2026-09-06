# ReadMore — Implementation Tasks

## Source
- ColorLib: Modal 12 (`modal-12`)
- Preview: https://preview.colorlib.com/theme/bootstrap/modal-12/
- New name: `readmore`

## Tasks

### 1. Scaffold app
- [ ] Copy simplest existing app as base (e.g. `apps/popup` if small, or another minimal one)
- [ ] Rename package to `@free-react-templates/readmore`
- [ ] Update `vite.config.ts` with `injectUiSource()` pattern
- [ ] Set `public/CNAME` to `readmore.free.componentdock.com`
- [ ] Set `homepage` in `package.json` to `https://readmore.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace

### 2. PageContent component
- [ ] Centered heading: "Modal #2" (h3, mb-4)
- [ ] Launch button: blue (#007bff), px-4 py-3, rounded (4px)
- [ ] Full viewport height, centered vertically and horizontally

### 3. ModalOverlay component
- [ ] Full-screen overlay/backdrop
- [ ] Centered modal dialog with 7px border-radius
- [ ] Heavy drop-shadow: `0 10px 50px -10px rgba(0,0,0,0.9)`
- [ ] Modal closes on Escape key, backdrop click, close button, "Maybe later"
- [ ] Focus trap: tab cycles within modal when open
- [ ] Focus returns to launch button on close

### 4. ModalHeader component
- [ ] Three-column row: logo (left), "Exclusive Offer" heading h2 18px (center), close X button (right)
- [ ] Bottom border: `1px solid rgba(255,255,255,0.3)`, padding-bottom 10px
- [ ] White text throughout
- [ ] Close button: white X icon, dismisses modal

### 5. ModalBody component
- [ ] Background image with `background-size: cover`, `background-position: center`
- [ ] Dark overlay: `rgba(0,0,0,0.5)` pseudo-element
- [ ] Placeholder image: `https://picsum.photos/seed/readmore-hero/800/600`
- [ ] "Get a free Ebook" heading (h3, 22px, white)
- [ ] Description paragraph (white, font-weight 300)
- [ ] Inline form: email input (transparent border, no focus shadow) + "Subscribe" button (blue primary)
- [ ] "Maybe later" link: `rgba(255,255,255,0.5)`, bold, 13px, hover to white

### 6. Styling
- [ ] Font: Roboto via Google Fonts link in index.html
- [ ] Body font-weight: 300 (light)
- [ ] Headings: font-weight 400 (regular)
- [ ] Tailwind @theme: primary blue #007bff, overlay black, text light gray
- [ ] No Bootstrap dependency — pure Tailwind

### 7. Tests (TDD)
- [ ] PageContent renders heading and launch button
- [ ] Clicking launch button opens modal
- [ ] Modal renders header with logo, title, close button
- [ ] Modal renders body with heading, description, form, "Maybe later"
- [ ] Close button closes modal
- [ ] "Maybe later" closes modal
- [ ] Escape key closes modal
- [ ] Email form has input and submit button
- [ ] Modal has background image with overlay
- [ ] Focus trap works
- [ ] 100% coverage

### 8. Verification
- [ ] `scripts/verify-app.sh readmore` passes
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code

## Design notes

### Structure order (top to bottom)
1. Page background (full viewport, centered content)
2. Launch button (centered)
3. Modal (hidden by default, toggled by state)

### Section-by-section fidelity
- **PageContent**: Matches original — minimal white page with centered heading + button
- **Modal**: Matches original centering, radius, shadow exactly
- **ModalHeader**: 3-column flex layout matches original Bootstrap row
- **ModalBody**: Background image + overlay matches; form is inline flex (input + button side by side) on desktop, stacks on mobile
- **Colors**: Bootstrap primary blue (#007bff), white text, dark overlay — all from original CSS
- **Typography**: Roboto at 300/400 weights matches original
- **Border-radius**: 7px modal, 4px buttons — from original CSS
