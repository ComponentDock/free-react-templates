# Regbloom (ColorLib Regform 35) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-regbloom`. Recreation name: **Regbloom** (NEW name —
> the ColorLib source keeps its name "Colorlib Regform 35").

## Source mapping

- **ColorLib item:** "Colorlib Regform 35" (TEMPLATES.md line 2651; first
  unchecked item in the regform section). The
  `wp/template/colorlib-regform-35/` slug appears exactly ONCE in
  TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/colorlib-regform-35/
- **Preview URL — UNREACHABLE (verified 2026-09-28):**
  `https://preview.colorlib.com/theme/colorlib-regform-35/` returns 404.
  All design tokens derived from the TEMPLATES.md screenshot only.
- **Screenshot:** `colorlib-reg-form-35.jpg` (1200×972 AVIF → converted to
  PNG for visual analysis).

## Reference research (done — do not redo)

### Screenshot analysis (`colorlib-reg-form-35.jpg`)

Browsed visually via vision_analyze 2026-09-28 (preview URL was 404).

**Overall layout:**
- Full-viewport solid steel-blue background (~`#4A7FB5`)
- Single card centered horizontally and vertically
- Below card: plain white section filling remaining viewport

**Card:**
- ~700–800px wide, rounded corners (~12–16px radius)
- Background: concert/crowd photo with dark semi-transparent overlay
  (`rgba(0,0,0,0.5)` or similar) creating a moody atmospheric look
- Contains all form content

**Heading:**
- "Registration Form" — white, bold, sans-serif (~24–28px), centered
- Short white horizontal divider line (~60px wide, ~2px thick) below heading

**Form fields (2×2 grid):**
- Row 1: "Your Name" | "Your Email"
- Row 2: "Your Password" | "Comfirm Password" (note: original has typo)
- Each field: pill-shaped (border-radius ~25–30px), semi-transparent dark
  background (`rgba(255,255,255,0.1)`), white/light placeholder text,
  subtle white border (~1px solid rgba white)
- Adequate padding (~12–16px vertical, ~20px horizontal)

**Register button:**
- Coral/salmon background (`~#E8735A`), white text
- Pill-shaped (border-radius ~25–30px matching inputs)
- Centered below the form fields
- ~14px font size

**Below card:**
- Plain white section fills the viewport below the card
- No visible footer content in the screenshot

### Design decisions for implementation

1. **Background image:** Use `https://picsum.photos/seed/regbloom-concert/1200/800`
   as a placeholder for the concert/crowd photo, with dark overlay.

2. **Font:** Use Poppins (Google Fonts) — matches the clean sans-serif look
   in the screenshot. Weights: 400 (body), 600 (heading), 400 (inputs).

3. **Layout:** CSS Grid or Flexbox for the 2×2 input grid. Card uses flex
   column with gap spacing.

4. **Validation:** Original has NO client-side validation. The recreation
   should add basic HTML5 validation (required fields) for usability,
   while keeping the visual design identical.

5. **Footer:** Add a minimal Component Dock footer link in the white section
   below the card (required by AGENTS.md rule 5).

## Task outline

1. **Create app scaffold**
   - Copy simplest existing app (e.g., `apps/aurora` or similar minimal template)
   - Rename package to `@free-react-templates/regbloom`
   - Update `public/CNAME` to `regbloom.free.componentdock.com`
   - Update `homepage` in `package.json`

2. **Build layout**
   - Full-viewport blue background (`#4A7FB5`)
   - Centered card with dark photo overlay
   - White section below card

3. **Build card content**
   - "Registration Form" heading (white, bold, centered)
   - White divider line below heading
   - 2×2 grid of pill-shaped inputs
   - Coral "Register" button centered below

4. **Style components**
   - Pill-shaped inputs with transparent dark bg
   - Coral button (`#E8735A`) with pill shape
   - Responsive: stack inputs to 1 column on mobile

5. **Write tests**
   - Component renders heading, divider, 4 inputs, button
   - Button triggers form submission
   - Responsive layout works

6. **Add footer**
   - Component Dock link in the white section below the card

7. **Run verification**
   - `npm run verify:app regbloom`
   - 100% coverage check
