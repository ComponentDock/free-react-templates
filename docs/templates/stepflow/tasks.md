# Tasks & Design Notes: StepFlow (Colorlib Wizard 6)

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-stepflow`. Recreation name: **StepFlow** (NEW name —
> the ColorLib source keeps its name "Colorlib Wizard 6").

## Source Mapping

- **ColorLib item:** "Colorlib Wizard 6" (TEMPLATES.md line 874; section
  "## Bootstrap Wizards (30)" — NOT under Business).
- **Source URL:** https://colorlib.com/wp/template/colorlib-wizard-6/
- **Preview URL — REACHABLE:** `https://colorlib.com/etc/bwiz/colorlib-wizard-6/index.html`
  (HTTP 200, 5,534 bytes, 77 lines, `<title>FormWizard_v6</title>`).
  **The naive `https://preview.colorlib.com/theme/colorlib-wizard-6/`
  returns 404** — the wizard family lives under
  `colorlib.com/etc/bwiz/colorlib-wizard-<n>/index.html` (same pattern as
  wizard-12 and others).
- **Preview CSS:** `css/style.css` (9,111 bytes, 345 lines — ALL styles,
  hand-written, NO Bootstrap). Scripts: `js/main.js` (1,257 bytes:
  jquery.steps init + click handlers + input focus), `js/jquery-3.3.1.min.js`,
  `js/jquery-steps.js`. Fonts: local Poppins Regular/Medium/SemiBold + Muli
  Bold → **replace with Google Fonts `<link>` (Poppins 400, 500, 600)**.

## Reference Research (done — do not redo)

### Screenshot Analysis (`colorlib-free-wizard-6.jpg`)

Browsed visually. macOS browser frame on a pastel gradient background
(lavender-blue top → pink bottom). Centered white card with large rounded
corners + shadow. Inside: circular avatar placeholder (light blue border),
"CHOOSE PICTURE" link, side-by-side name fields, full-width email + password,
pill-shaped blue "CONTINUE →" button. 3 pagination dots below card.

### Live Preview DOM Structure

**Step 1 — Personal Info:**
- `.form-header` (flexbox): left `.avartar` (33.75% width) with circular
  image + `.avartar-picker` (file input + "Choose Picture" label with camera
  icon), right `.form-group` (66.25%) with 3 `.form-holder` inputs: First
  Name, Last Name, Team Name — each has a `.before` pseudo-element circle
  indicator (10×10, `#f6c2ec` border, filled when `.active`).
- Below: full-width `.form-holder` inputs for Email and Password.

**Step 2 — Role Selection:**
- `.grid` container with 2 `.row` divs (3 cards each):
  Programming, Research, Teacher, Tour Guide, Business, Artist.
- Each `.grid-item`: background-image cover, 134×(30% width), 7px border-radius,
  centered `.inner` with icon `<img>` + `<span>` uppercase label.
- Hover: `box-shadow: 0px 2px 7px rgba(0,0,0,0.25)`.

**Step 3 — Address:**
- Two `.form-row` divs (flex, 50/50 split):
  Row 1: Street Name + Street Number. Row 2: City + Country.
- Same pill input style as Step 1.

**Navigation:**
- `.steps` positioned absolute bottom-center (below card, -50px):
  3 `<li>` dots, `10×10` white circles; current = `22×10` pill.
- `.actions ul`: flex, `actions-next` class on step 2+ (justify-content: space-between).
- "Continue" button: `#aac1f0` bg, 146×46px, pill (border-radius 23px),
  right-arrow icon via `\f2ee` (zmdi-arrow-forward).
- "Back" button (step 2+): `#f6c2ec` bg, pill, left-arrow icon `\f2ea`.
- Hover: color darkens, icon wobble animation.

**Transition:** `transitionEffect: "fade"`, speed 500ms.

### Design Tokens Summary (from CSS)

| Token | Value |
|---|---|
| Font | Poppins (400, 500, 600) via Google Fonts |
| Page bg | Image → gradient fallback: `linear-gradient(135deg, #c2d1f5, #f2c0e2)` |
| Card bg | `#ffffff` |
| Card radius | `10px` |
| Card shadow | `0px 2px 7px rgba(0,0,0,0.1)` |
| Card size | `738×554px` (centered, responsive) |
| Input bg | `#f7f7f7` |
| Input radius | `23px` (pill) |
| Input height | `46px` |
| Circle indicator | `#f6c2ec` border (inactive), filled (active) |
| Continue btn | `#aac1f0`, hover `#98add6` |
| Back btn | `#f6c2ec`, hover `#dbadd2` |
| Button radius | `23px` (pill) |
| Grid card | `134px` height, `30%` width, `7px` radius |
| Grid gap | `27px` |
| Text color | `#808080` (body), `#333` (inputs) |

## Implementation Plan

1. **Component structure:**
   - `src/App.tsx` — wrapper with gradient background, centered wizard card
   - `src/components/WizardCard.tsx` — card container with step state machine
   - `src/components/StepPersonalInfo.tsx` — Step 1: avatar + name fields + email + password
   - `src/components/StepRoleSelection.tsx` — Step 2: 3×2 role card grid
   - `src/components/StepAddress.tsx` — Step 3: address fields
   - `src/components/AvatarPicker.tsx` — circular avatar placeholder + choose picture link
   - `src/components/PaginationDots.tsx` — bottom dots indicator
   - `src/components/NavigationButtons.tsx` — Continue / Back pill buttons
   - `src/components/FormField.tsx` — reusable pill input with circle indicator
   - `src/components/RoleCard.tsx` — single role selection card

2. **State management:** React `useState` for `currentStep` (0–2), `activeField`, `selectedRole`. Wizard steps handled with conditional rendering (no jQuery Steps).

3. **Icons:** Replace Material Design Iconic Font (`zmdi-camera`, `zmdi-arrow-forward`, `zmdi-arrow-back`) with `lucide-react` equivalents (Camera, ArrowRight, ArrowLeft).

4. **Assets:** Use `https://picsum.photos/seed/stepflow-avatar/150/150` for avatar placeholder. Role card backgrounds: `https://picsum.photos/seed/stepflow-{role}/300/134`. Role icons: use `lucide-react` icon components (Code, Flask, GraduationCap, Map, Briefcase, Palette).

5. **Responsive:** On screens < 768px: card full-width, no shadow, no border-radius; avatar section stacks above fields; grid cards full-width stacked; form-row fields full-width; pagination dots hidden.

6. **Footer:** Simple centered "Made with Component Dock" linking to `https://www.componentdock.com/`.
