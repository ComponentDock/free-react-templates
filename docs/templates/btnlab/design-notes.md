# BtnLab — Design Notes & Task Outline

Source: ColorLib Bootstrap Buttons 13
Preview: https://preview.colorlib.com/theme/bb/bootstrap-buttons-13/
New name: btnlab (apps/btnlab, @free-react-templates/btnlab)

## Page Structure (Section Order)

1. **Header / Hero** — Centered heading "Button #03" on dark background (#222222), white text (Poppins font).
2. **Default Buttons Grid** — 4x4 grid of solid buttons in 5 colors (primary, secondary, tertiary, quaternary, white) + 4x4 grid of outline buttons + buttons with trailing/leading icons.
3. **Social Buttons** — Social media buttons (Twitter, Facebook, Dribbble, LinkedIn, Pinterest) in multiple layouts: icon-only squares, icon+label with share counts, full-width connected styles.
4. **Dropdown Buttons** — 4 dropdown buttons (one per brand color) with white dropdown menus and box-shadow.
5. **Group Buttons** — 2 connected button groups with mixed solid/outline buttons.
6. **Checkboxes** — Custom Ionicons-based checkboxes in 5 color variants.
7. **Radios** — Custom circular radio buttons in 5 color variants.
8. **Action Buttons Row** — Mixed action buttons (Watch Photos, Download, Add Comment, Like, Create Account).
9. **Footer** — Component Dock attribution link.

## Section-by-Section Fidelity Notes

### Hero

- Title: "Button #03" — white, centered, Poppins font.
- Background: body bg `#222222`.
- No subtitle, no CTA — clean minimal header.

### Default Buttons Grid

- 5 color variants: primary `#3e64ff`, secondary `#bd83ce`, tertiary `#8105d8`, quaternary `#52de97`, white `#fff`.
- Each variant has: solid, outline, link, round, small, large versions.
- Button style: sharp corners (`border-radius: 2px`), `padding: 14px 18px`, `text-transform: uppercase`, `font-size: 13px`, `font-weight: 500`.
- Shadow: `0px 10px 20px -6px rgba(0,0,0,0.12)` → hover: `0px 12px 20px -6px rgba(0,0,0,0.21)`.
- Icon buttons use Ionicons in original; we'll use Lucide React icons.

### Social Buttons

- 5 social brands: Twitter `#69b6f0`, Facebook `#4f69a2`, Dribbble `#ea6294`, LinkedIn `#2884ba`, Pinterest `#d03940`.
- Layouts: icon-only (small square), icon+label, icon+label+count, full-width.
- 4 rows of social buttons showing different layouts.

### Dropdown Buttons

- 4 buttons with caret icons, each in a brand color.
- Dropdown menu: white bg, `box-shadow: 0px 10px 34px -20px rgba(0,0,0,0.41)`.
- Items: `13px` font, `color: rgba(0,0,0,0.7)`, transparent hover bg.

### Group Buttons

- Two groups of 3 connected buttons each.
- First group: Primary solid, Outline, Primary solid.
- Second group: Primary solid, Outline, Primary solid.

### Checkboxes

- Custom hidden-input + Ionicons font icons.
- 5 variants: primary `#3e64ff`, secondary `#bd83ce`, tertiary `#8105d8`, quaternary `#52de97`, dark `#343a40`.
- Labels: "Primary", "Success", "Danger", "Warning", "Disabled".
- Checked = checkmark icon (`\f148`), unchecked = empty square (`\f15c`).

### Radios

- Custom hidden-input + styled circles.
- Dark circle bg `#222`, colored inner dot when checked.
- 5 variants same as checkboxes.
- Labels: "Primary", "Success", "Danger", "Warning", "Disabled".

### Action Buttons Row

- Row of mixed-style buttons: "WATCH PHOTOS" (icon), "DOWNLOAD" (icon), icon-only, "ADD COMMENT", icon-only, "LIKE 2" (icon), "CREATE ACCOUNT".
- Uses primary button styling.

## Implementation Tasks

- [ ] Scaffold `apps/btnlab/` from a minimal existing app (copy + rename package).
- [ ] Install dependencies and verify build.
- [ ] Create `src/components/Hero.tsx` — heading on dark bg.
- [ ] Create `src/components/DefaultButtons.tsx` — solid + outline + icon button grid.
- [ ] Create `src/components/SocialButtons.tsx` — 5 brand colors, multiple layouts.
- [ ] Create `src/components/DropdownButtons.tsx` — dropdown menus with shadow.
- [ ] Create `src/components/GroupButtons.tsx` — connected button groups.
- [ ] Create `src/components/Checkboxes.tsx` — custom Ionicons-style checkboxes.
- [ ] Create `src/components/Radios.tsx` — custom radio buttons.
- [ ] Create `src/components/ActionButtons.tsx` — mixed action button row.
- [ ] Create `src/App.tsx` — compose all sections.
- [ ] Write tests for all components (100% coverage).
- [ ] Add `public/CNAME` and `"homepage"` to package.json.
- [ ] Verify: typecheck, lint, test:coverage, build all pass.
