# Alchemy — Implementation Tasks & Design Notes

## Template Overview

- **Source**: ColorLib Wizard 29 (centered multi-step registration wizard)
- **Source slug**: `colorlib-wizard-29`
- **Preview URL**: `https://colorlib.com/etc/bwiz/colorlib-wizard-29/index.html` (actual preview; `https://preview.colorlib.com/theme/colorlib-wizard-29/` returns 404)
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-29.jpg`
- **Category**: Forms / Multi-step Registration Wizard
- **Description**: Centered card-based 4-step registration wizard with pill-shaped tabs, rounded inputs, integrated next-step buttons, full-page background image

## Structure Order (section-by-section)

### 1. BackgroundLayer (full-page)

- Full viewport (`min-h-screen`)
- Background image: `picsum.photos/seed/alchemy-bg/1920/1080`, cover, centered
- Center content vertically and horizontally with flexbox or grid
- Padding-top: 275px desktop, 120px mobile

### 2. CardHeading (above card body)

- "Register Wizard" text
- Style: white (#fff), uppercase, 50px, bold (700), center-aligned
- Positioned above the card body but visually part of the card overlay
- Note: in the original, the heading sits on the background image above the white card body

### 3. CardBody (the wizard container)

- White background (#fff)
- Border-radius: 5px
- Box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15)
- Max-width: 820px, centered
- Contains: tab list + tab content panels

### 4. TabList (progress indicator)

- Horizontal row of 4 pill-shaped tabs
- Each tab: step number circle (45px, full round) + text label
- Active tab: blue bg (#3155cc), circle bg (#3d6aff), white text
- Inactive tabs: gray bg (#999), circle bg (#666), white text
- Tab pill width: 162px, border-radius: 22.5px
- Step circle: 45px x 45px, border-radius: 50%, font-size 18px
- Tab label: font-weight 700, font-size 15px, text-transform capitalize
- Clicking a tab navigates to that step

### 5. TabContent (step panels)

- Each step: one input group (input + button)
- Input: pill-shaped (border-radius 25px), 1px solid #e5e5e5 border, line-height 48px
- Button: absolute right inside input, bg #3155cc, white text, font-weight 700
- Button hover: bg #1d41b8
- Tab panel padding: 35px top, 43px bottom
- Only the active panel is visible (display: block)

### 6. StepPanels (4 steps)

| Step | Label            | Input Type | Placeholder                | Button Text |
| ---- | ---------------- | ---------- | -------------------------- | ----------- |
| 1    | username         | text       | "Username here"            | "next step" |
| 2    | email            | email      | "ex: example@email.com"   | "next step" |
| 3    | password         | password   | "Password"                 | "next step" |
| 4    | Confirm Password | password   | "Password"                 | "Confirm"   |

### 7. Validation

- All fields are `required`
- Validation error: red text below input (`label.error { color: red }`)
- Block advancement on empty fields

### 8. Footer (Component Dock)

- Standard footer with Component Dock link
- Not in the original template — added per monorepo convention

## Component Architecture

```
App.tsx
├── BackgroundLayer.tsx          (full-page bg with image)
│   └── WizardCard.tsx           (centered card container)
│       ├── CardHeading.tsx      ("Register Wizard" title)
│       └── CardBody.tsx         (white card body)
│           ├── TabList.tsx      (4 pill tabs, horizontal)
│           │   └── TabItem.tsx  (single tab: circle + label)
│           └── StepPanel.tsx    (reusable per-step panel)
│               ├── InputField.tsx  (pill-shaped input)
│               └── NextButton.tsx  (integrated right-side button)
```

## State Management

- `currentStep` (number 1-4): which step is active
- `formData` (object): { username, email, password, confirmPassword }
- `errors` (object): per-field validation errors
- Step advancement: validate current field, advance if valid, show error if not

## Fidelity Notes

- The original uses jQuery + Bootstrap Wizard plugin for step transitions. React implementation should use controlled state (`currentStep`) instead.
- The original tab-click navigation uses `data-toggle="tab"` with jQuery. React: onClick handler sets `currentStep`.
- The "next step" button is positioned absolutely inside the input field in the original. In React, use `relative` input wrapper + `absolute` button overlay.
- Background image in original is `bg-img-01.jpg` from vendor. Use `picsum.photos/seed/alchemy-bg/1920/1080` as deterministic placeholder.
- Font: Lato from Google Fonts (loaded via `<link>` in index.html).
- Original uses Material Design Iconic Font + Font Awesome for icons. Use `lucide-react` for any icons needed.
- The "Confirm" button text on step 4 is a different label from "next step" — handle via conditional rendering.

## Implementation TODO

- [ ] Scaffold `apps/alchemy/` from simplest existing app
- [ ] Update package name to `@free-react-templates/alchemy`
- [ ] Add Lato font via Google Fonts link in `index.html`
- [ ] Create `BackgroundLayer.tsx` with full-page bg image
- [ ] Create `WizardCard.tsx` with centered card container
- [ ] Create `CardHeading.tsx` with "Register Wizard" title
- [ ] Create `CardBody.tsx` with tab list + step panels
- [ ] Create `TabList.tsx` with 4 pill tabs
- [ ] Create `TabItem.tsx` (single tab: circle + label, active/inactive)
- [ ] Create `StepPanel.tsx` (per-step panel with input + button)
- [ ] Create `InputField.tsx` (pill-shaped input, styled per spec)
- [ ] Create `NextButton.tsx` (right-aligned inside input, conditional text)
- [ ] Implement step navigation (forward via button, jump via tab click)
- [ ] Implement field validation (required, show errors)
- [ ] Implement responsive layout (mobile padding, tab wrapping)
- [ ] Write tests (Vitest + RTL, 100% coverage)
- [ ] Verify build and tests pass
- [ ] Update `public/CNAME` and `homepage`
- [ ] Commit and push
