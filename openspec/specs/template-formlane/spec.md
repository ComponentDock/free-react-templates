# Template: Formlane (Registration Form)

## Purpose

Recreation of ColorLib "Reg Form V34" (`colorlib-regform-34`) — a two-in-one sign-up/sign-in form template with a split-layout card on a gradient background.

- **Source:** https://colorlib.com/wp/template/colorlib-regform-34/
- **Live preview:** https://colorlib.com/etc/regform/colorlib-regform-34/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category:** Registration / Sign-up Form

## Design tokens (from reference CSS)

| Token | Value | Notes |
|---|---|---|
| `--brand-gradient-start` | `#009EFD` | Blue, 136deg gradient start |
| `--brand-gradient-end` | `#2AF598` | Green, 136deg gradient end |
| `--form-panel-bg` | `#3D5983` | Dark blue-gray right panel |
| `--active-tab-border` | `#30E1DF` | Teal/cyan accent on active tab |
| `--focus-border` | `#53C83C` | Green underline on input focus |
| `--text-on-dark` | `#FFFFFF` | Text on dark form panel |
| `--label-color` | `#F2F2F2` | Floating label color |
| `--inactive-tab` | `#CCCCCC` | Inactive tab text |
| `--btn-bg` | `#FFFFFF` | Button background |
| `--btn-text` | `#333333` | Button text |
| `--btn-hover-bg` | `#CCCCCC` | Button hover |
| `--card-bg` | `#FFFFFF` | Overall card background |
| `--card-radius` | `8px` | Card border-radius |
| `--card-shadow` | `0 8px 20px rgba(0,0,0,0.15)` | Card elevation |
| `--btn-radius` | `5px` | Button border-radius |
| Font family | Source Sans Pro (300, 400, 700) | Google Fonts |
| Tab font-size | 28px | Tab label size |
| Input font-size | 18px, weight 300 | Input text |
| Button font-size | 18px, weight 700 | Submit button |

## Layout structure

1. **Page wrapper (`.page-content`)** — full viewport, gradient background `linear-gradient(136deg, #009EFD 0%, #2AF598 100%)`, flex center both axes.
2. **Card (`.form-v8-content`)** — 937px wide, `#fff` background, `border-radius: 8px`, `box-shadow: 0 8px 20px rgba(0,0,0,0.15)`. Horizontal flex layout (image left, form right). On mobile (≤991px) stacks vertically.
3. **Left panel (`.form-left`)** — hero image (source provides `images/form-v8.jpg`; use placeholder `https://picsum.photos/seed/formlane-hero/480/600`). Border-radius matches card corners.
4. **Right panel (`.form-right`)** — `background: #3D5983`, contains the tab bar + form.
5. **Tab bar (`.tab`)** — horizontal flex with two equal tabs: "Sign Up" (active by default) and "Sign In". Active tab: `font-weight: 700`, `color: #fff`, bottom border `3px solid #30E1DF`. Inactive: `color: #ccc`, bottom border `3px solid rgba(255,255,255,0.2)`.
6. **Sign Up form (default visible)** — fields: Username, E-Mail, Password, Confirm Password. Floating-label pattern: label animates up on focus/valid. Underline: `1px solid rgba(255,255,255,0.2)` → `1px solid #53C83C` on focus. Submit button: "Register" (`#fff` bg, `#333` text, `border-radius: 5px`, `width: 160px`, hover → `#ccc`).
7. **Sign In form (hidden by default)** — fields: Username, E-Mail, Password, Confirm Password. Same styling as Sign Up. Submit button label: "Sign In".

## Gherkin scenarios

### Scenario: Page renders gradient background
```gherkin
Given the user opens Formlane
Then the page background is a diagonal gradient from blue (#009EFD) to green (#2AF598)
And the form card is centered in the viewport
```

### Scenario: Card displays split layout
```gherkin
Given the user opens Formlane on desktop (>991px)
Then a white card with rounded corners (8px) and drop shadow is visible
And the left side shows a hero image
And the right side shows a dark blue-gray (#3D5983) form panel
```

### Scenario: Tab switching between Sign Up and Sign In
```gherkin
Given the user opens Formlane
Then the "Sign Up" tab is active with a teal (#30E1DF) bottom border
And the Sign Up form is visible with fields: Username, E-Mail, Password, Confirm Password
When the user clicks the "Sign In" tab
Then the "Sign In" tab becomes active with a teal (#30E1DF) bottom border
And the Sign In form is visible with fields: Username, E-Mail, Password, Confirm Password
And the Sign Up form is hidden
```

### Scenario: Floating label animation on input focus
```gherkin
Given the Sign Up form is visible
When the user focuses on the Username input
Then the label "Username" floats above the input
And the input underline turns green (#53C83C)
And a green underline animation expands from left to right
```

### Scenario: Input validation with :valid pseudo-class
```gherkin
Given the user has typed a value in the Username field
Then the label remains in the floated position
And the underline remains green (#53C83C)
```

### Scenario: Submit button hover state
```gherkin
Given the form is visible
When the user hovers over the "Register" button
Then the button background changes from white (#fff) to light gray (#ccc)
```

### Scenario: Mobile responsive layout
```gherkin
Given the user opens Formlane on mobile (≤991px)
Then the card stacks vertically with image on top
And the form panel sits below the image
And the tab bar has appropriate padding for touch targets
```

## Verification checklist

- [ ] Gradient background renders correctly (136deg, blue→green)
- [ ] Card centered with correct shadow and radius
- [ ] Left panel shows placeholder hero image
- [ ] Right panel has #3D5983 background
- [ ] Two tabs: Sign Up (active default) and Sign In
- [ ] Active tab has teal bottom border (#30E1DF) and bold white text
- [ ] Inactive tab has light gray text and semi-transparent bottom border
- [ ] Tab click switches visible form content
- [ ] Floating labels animate up on focus
- [ ] Focus border turns green (#53C83C) with scaleX animation
- [ ] Register button: white bg, dark text, 5px radius, hover → gray
- [ ] Sign In button: same style, label "Sign In"
- [ ] Mobile: card stacks vertically at ≤991px
- [ ] Footer links to Component Dock (https://www.componentdock.com/)
- [ ] No references to ColorLib in app code
