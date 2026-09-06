# ModalGear — Design Notes & Task Outline

## Source
- **ColorLib:** Modal 15 (https://colorlib.com/wp/template/modal-15/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-15/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-15.jpg

## Section Order (from preview HTML)

1. **Page container** — full-viewport centered layout (`height: 100vh`, flex centering)
2. **Heading** — "Modal #5" (renamed to "ModalGear" in our version)
3. **Launch button** — secondary Bootstrap button, `px-4 py-3`, opens modal on click
4. **Modal overlay** — Bootstrap modal with backdrop
5. **Modal content** — two-column flex layout inside white rounded box
   - Left column: promo image (50% width, `background-size: cover`)
   - Right column: signup form content
6. **Form** — three fields (Email, First Name, Password) + submit button + privacy note

## Fidelity Notes

### Layout
- Page: `height: 100vh`, `align-items: center` (vertically + horizontally centered)
- Modal: centered via Bootstrap `.modal-dialog-centered`, `modal-lg` size
- Modal body: `border-radius: 7px`, `overflow: hidden`, deep shadow
- Two-column: `d-flex`, promo image `flex: 0 0 50%`, content `p-4`

### Typography
- Font: Roboto (loaded via Google Fonts), weights 300 and 400
- Body text: #b3b3b3, weight 300
- Modal paragraph: #777, 14px
- Modal heading: #000, 22px
- Custom note: #999, small text; link is #555, weight 900

### Colors
- Brand: Bootstrap default palette (primary blue #007bff, secondary gray #6c757d)
- Modal background: #fff
- Form border: 1px solid #ccc
- Close button: #000

### Interactive Elements
- Launch button: secondary Bootstrap style, `px-4 py-3`, `rounded` (4px)
- Submit button: primary Bootstrap, full-width (`btn-block`), `py-2`
- Form inputs: text, email, password types; no shadow on focus
- Modal: close via × button or backdrop click
- Links: 0.3s all ease transition

### Assets
- Placeholder promo image: use `https://picsum.photos/seed/modalgear-promo/600/800`
- Fonts: Google Fonts `Roboto` (weights 300, 400, 700)
- Icons: lucide-react for close button (×)

## Implementation Tasks

### Core structure
- [ ] Create `apps/modalgear/` directory from simplest existing app
- [ ] Rename package to `@free-react-templates/modalgear`
- [ ] Update `public/CNAME` to `modalgear.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://modalgear.free.componentdock.com`
- [ ] Set up `vite.config.ts` with `injectUiSource()`

### Components
- [ ] `src/App.tsx` — page container with heading + launch button
- [ ] `src/components/ModalLaunch.tsx` — the centered page with heading and button
- [ ] `src/components/SignupModal.tsx` — Bootstrap-style modal with two-column layout
- [ ] `src/components/SignupForm.tsx` — form with email, name, password fields
- [ ] `src/components/Footer.tsx` — Component Dock footer link

### Styling
- [ ] `src/index.css` — Tailwind entry + theme tokens (Roboto font, Bootstrap-like colors)
- [ ] Modal: white bg, 7px radius, deep shadow, centered
- [ ] Two-column: flex, promo image 50%, content 50%
- [ ] Form inputs: 1px #ccc border, no focus shadow
- [ ] Buttons: 4px radius, primary blue submit, secondary gray launch

### Testing
- [ ] Modal opens on launch button click
- [ ] Modal closes on × button click
- [ ] Modal closes on backdrop click
- [ ] Form fields render with correct types
- [ ] Submit button is full-width primary blue
- [ ] Privacy policy note is present with correct styling
- [ ] 100% coverage (lines, functions, branches, statements)

### Verification
- [ ] `npm run spec:validate` passes
- [ ] `scripts/verify-app.sh modalgear` passes (typecheck + lint + tests + build)
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code

## Key Differences from Original
- Renamed from "Modal 15" to "ModalGear"
- Placeholder promo image instead of original asset
- Bootstrap-like styling via Tailwind (not Bootstrap CSS framework)
- Component Dock footer replaces any original attribution
- "resourcess" typo in original corrected to "resources"
