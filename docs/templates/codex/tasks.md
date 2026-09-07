# Tasks & Research Notes: Codex (Colorlib Wizard 29)

## Research Summary

- **Source**: Colorlib Wizard 29 (`https://colorlib.com/wp/template/colorlib-wizard-29/`)
- **New Name**: `codex`
- **Live Preview**: `https://colorlib.com/etc/bwiz/colorlib-wizard-29/index.html` (reachable; `preview.colorlib.com` variant is 404)
- **Page Title**: "Au Form Wizard" / "Register Wizard"
- **Design Tokens** (from live CSS):
  - Accent/CTA: `#3155cc` (blue)
  - Button hover: `#1d41b8`
  - Active step circle: `#3d6aff`
  - Inactive tab: `#999`, inactive step circle: `#666`
  - Input border: `#e5e5e5`
  - Card body: `#ffffff` with `box-shadow: 0px 8px 20px rgba(0,0,0,0.15)`, border-radius `5px`
  - Input border-radius: `25px` (pill shape)
  - Button: flush right inside input, right-side border-radius `25px`
  - Tab pill: `162px` wide, `22.5px` border-radius
  - Step circle: `45px` diameter, `50%` border-radius
  - Font: Lato (weights 400, 700)
  - Page: full-viewport background image, `padding-top: 275px` (120px on mobile)

## Section Implementation Plan

1. **Page Background**: Full-viewport background image (Picsum placeholder). Center/cover.
2. **Card Container**: Centered white card (max-width 820px) with rounded corners (5px) and drop shadow.
3. **Card Heading**: "REGISTER WIZARD" — white, uppercase, bold, 50px, centered on the page background (above the white card body).
4. **Step Tab Bar**: Horizontal row of 4 pill-shaped tabs. Each tab = circular step number (45px) + label text. Active tab = blue (#3155cc) background with bright blue (#3d6aff) circle. Inactive = gray (#999) background with dark gray (#666) circle. Separator line below tabs (1px solid #e5e5e5).
5. **Form Steps**: 4 steps, one visible at a time:
   - Step 1: text input, placeholder "Username here"
   - Step 2: email input, placeholder "ex: example@email.com"
   - Step 3: password input, placeholder "Password"
   - Step 4: password input, placeholder "Password" + "Confirm" button
6. **Input + Button Combo**: Pill-shaped input (25px radius, border #e5e5e5) with "next step" / "Confirm" button flush right inside (right-side radius 25px, blue #3155cc background, white bold text).
7. **Navigation Logic**: Tab click or "next step" advances to next step. All steps use `required` attribute for native validation. Password confirmation compares against password field.
8. **Responsive**: Below 768px, tabs stack vertically (full width), padding-top reduces to 120px.
9. **Footer**: Component Dock branded footer linking `https://www.componentdock.com/`.

## Fidelity Notes

- The original uses Bootstrap + jQuery for tab toggling. Replace with React state (controlled active step index).
- The original uses `data-toggle="tab"` and jQuery tab plugin. React manages which tab pane is visible.
- The original input + button combo uses absolute positioning (button inside input). Implement with flexbox or grid for cleaner layout.
- The original card-1 has `background: transparent` (card-body has the white bg + shadow). Replicate this layered look.
- Font: Load Lato from Google Fonts in `index.html`.
- Background image: Use `https://picsum.photos/seed/codex-bg/1920/1080` as placeholder.
- No ColorLib references anywhere in app code — provenance lives only in spec + TEMPLATES.md.
