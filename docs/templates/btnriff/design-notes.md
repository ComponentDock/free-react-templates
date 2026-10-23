# BtnRiff — Design Notes & Task Outline

## Source

- **ColorLib template:** Bootstrap Buttons 15
- **Preview URL:** https://preview.colorlib.com/theme/bb/bootstrap-buttons-15/
- **ColorLib page:** https://colorlib.com/wp/template/bootstrap-buttons-15/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-buttons-15.jpg

## Section Order (fidelity mapping)

1. **Page Title** — "Button #05" heading (32px, `.heading-section`)
2. **Solid Buttons with Icons** — 4 buttons in a row: primary(heart), secondary(trash), tertiary(paper-plane), quarternary(cloud-download). Each has text on left, icon on right in a flex row.
3. **Outline Buttons** — 4 outline variants below the solid row, labeled "Default"
4. **Rounded Solid Buttons** — Same 4 colors but with `border-radius: 40px` (.btn-round)
5. **Rounded Outline Buttons** — Outline variants with 40px border-radius
6. **Social Brand Buttons with Labels** — Twitter/Facebook/Dribbble in 4 columns: solid, outline, rounded solid, rounded outline. Icon+label text.
7. **Dropdown Buttons** — 4 colored dropdowns (primary/secondary/tertiary/quarternary) each with menu items
8. **Group Buttons** — btn-group with solid-outline-solid pattern for primary and secondary
9. **Checkboxes** — Custom styled: primary, secondary, tertiary, quarternary, disabled
10. **Radio Buttons** — Custom styled: primary, secondary, tertiary, quarternary, disabled
11. **Slide Toggle Buttons** — 2 iOS-style toggles with ON/OFF animation
12. **Social Icon-Only Buttons** — Facebook/Twitter/LinkedIn/Pinterest/Dribbble in solid/rounded/outline/rounded-outline
13. **Action Buttons Row** — Watch Photos, Download, Add Comment, Like (with count badge), Create Account
14. **Footer** — Component Dock link

## Design Token Notes

- **4-color brand palette:** Blue `#4f81c7`, Teal `#40bfc1`, Green `#48da79`, Pink `#ff78ae`
- **3D depth effect:** `box-shadow: 3px 5px 0px 0px <shadow-color>` on all solid buttons
- **Shadow colors:** `#3d73c0` (blue), `#39adaf` (teal), `#33d669` (green), `#ff5f9f` (pink)
- **Rounded variant:** `border-radius: 40px` (pill shape)
- **Font:** Poppins (Google Fonts), weights 300–800
- **Section padding:** `7em 0` (ftco-section)
- **Grid:** Bootstrap 4 12-column grid (col-md-3 for 4-col, col-md-4 for 3-col, col-md-6 for 2-col)
- **Social brand colors:** Facebook `#4f69a2`, Twitter `#69b6f0`, LinkedIn `#2884ba`, Pinterest `#d03940`, Dribbble `#ea6294`
- **Toggle switch:** Blue `#03A9F4` for ON state, Red `#F44336` for OFF state
- **Background:** White `#fff`, body text `#212529`

## Task Outline

### Phase 1: Scaffold

- [ ] Copy simplest existing app (e.g. btnbolt) as template
- [ ] Rename package to `@free-react-templates/btnriff`
- [ ] Update `public/CNAME` to `btnriff.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://btnriff.free.componentdock.com`
- [ ] Add Poppins font via Google Fonts link in `index.html`

### Phase 2: Components

- [ ] `src/components/PageTitle.tsx` — "Button #05" heading
- [ ] `src/components/SolidIconButtons.tsx` — 4 solid buttons with icons (heart, trash, paper-plane, cloud-download)
- [ ] `src/components/OutlineButtons.tsx` — 4 outline variant buttons
- [ ] `src/components/RoundedSolidButtons.tsx` — 4 rounded solid buttons
- [ ] `src/components/RoundedOutlineButtons.tsx` — 4 rounded outline buttons
- [ ] `src/components/SocialBrandButtons.tsx` — Twitter/Facebook/Dribbble in 4-col grid with variants
- [ ] `src/components/DropdownButtons.tsx` — 4 colored dropdown buttons with menus
- [ ] `src/components/GroupButtons.tsx` — btn-group solid-outline-solid
- [ ] `src/components/CustomCheckboxes.tsx` — 5 checkbox variants
- [ ] `src/components/CustomRadios.tsx` — 5 radio variants
- [ ] `src/components/SlideToggles.tsx` — 2 toggle switches with animation
- [ ] `src/components/SocialIconButtons.tsx` — 5 social platforms × 4 variants
- [ ] `src/components/ActionButtons.tsx` — Final row with badge
- [ ] `src/components/Footer.tsx` — Component Dock link

### Phase 3: Styling

- [ ] Define brand colors in `index.css` Tailwind theme (`@theme`)
- [ ] Implement 3D box-shadow on solid buttons
- [ ] Implement rounded variant (40px radius)
- [ ] Custom checkbox/radio styling (colored checkmarks, radio fills)
- [ ] Toggle switch animation (CSS transitions)
- [ ] Responsive grid (4-col → 2-col → 1-col on mobile)

### Phase 4: Tests

- [ ] Write tests for each component
- [ ] Ensure 100% coverage

### Phase 5: Deploy

- [ ] Run `scripts/verify-app.sh btnriff`
- [ ] Commit, push, open PR, merge
- [ ] Verify on btnriff.free.componentdock.com
