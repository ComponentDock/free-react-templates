# Template: Formlane (Registration Form)

## Purpose

Recreation of ColorLib "Reg Form V34" (`colorlib-regform-34`) — a two-in-one sign-up/sign-in form template with a split-layout card on a gradient background.

- **Source:** https://colorlib.com/wp/template/colorlib-regform-34/
- **Live preview:** https://colorlib.com/etc/regform/colorlib-regform-34/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category:** Registration / Sign-up Form

## Design tokens (from reference CSS)

| Token                    | Value                           | Notes                          |
| ------------------------ | ------------------------------- | ------------------------------ |
| `--brand-gradient-start` | `#009EFD`                       | Blue, 136deg gradient start    |
| `--brand-gradient-end`   | `#2AF598`                       | Green, 136deg gradient end     |
| `--form-panel-bg`        | `#3D5983`                       | Dark blue-gray right panel     |
| `--active-tab-border`    | `#30E1DF`                       | Teal/cyan accent on active tab |
| `--focus-border`         | `#53C83C`                       | Green underline on input focus |
| `--text-on-dark`         | `#FFFFFF`                       | Text on dark form panel        |
| `--label-color`          | `#F2F2F2`                       | Floating label color           |
| `--inactive-tab`         | `#CCCCCC`                       | Inactive tab text              |
| `--btn-bg`               | `#FFFFFF`                       | Button background              |
| `--btn-text`             | `#333333`                       | Button text                    |
| `--btn-hover-bg`         | `#CCCCCC`                       | Button hover                   |
| `--card-bg`              | `#FFFFFF`                       | Overall card background        |
| `--card-radius`          | `8px`                           | Card border-radius             |
| `--card-shadow`          | `0 8px 20px rgba(0,0,0,0.15)`   | Card elevation                 |
| `--btn-radius`           | `5px`                           | Button border-radius           |
| Font family              | Source Sans Pro (300, 400, 700) | Google Fonts                   |
| Tab font-size            | 28px                            | Tab label size                 |
| Input font-size          | 18px, weight 300                | Input text                     |
| Button font-size         | 18px, weight 700                | Submit button                  |

## Layout structure

1. **Page wrapper (`.page-content`)** — full viewport, gradient background `linear-gradient(136deg, #009EFD 0%, #2AF598 100%)`, flex center both axes.
2. **Card (`.form-v8-content`)** — 937px wide, `#fff` background, `border-radius: 8px`, `box-shadow: 0 8px 20px rgba(0,0,0,0.15)`. Horizontal flex layout (image left, form right). On mobile (≤991px) stacks vertically.
3. **Left panel (`.form-left`)** — hero image (source provides `images/form-v8.jpg`; use placeholder `https://picsum.photos/seed/formlane-hero/480/600`). Border-radius matches card corners.
4. **Right panel (`.form-right`)** — `background: #3D5983`, contains the tab bar + form.
5. **Tab bar (`.tab`)** — horizontal flex with two equal tabs: "Sign Up" (active by default) and "Sign In". Active tab: `font-weight: 700`, `color: #fff`, bottom border `3px solid #30E1DF`. Inactive: `color: #ccc`, bottom border `3px solid rgba(255,255,255,0.2)`.
6. **Sign Up form (default visible)** — fields: Username, E-Mail, Password, Confirm Password. Floating-label pattern: label animates up on focus/valid. Underline: `1px solid rgba(255,255,255,0.2)` → `1px solid #53C83C` on focus. Submit button: "Register" (`#fff` bg, `#333` text, `border-radius: 5px`, `width: 160px`, hover → `#ccc`).
7. **Sign In form (hidden by default)** — fields: Username, E-Mail, Password, Confirm Password. Same styling as Sign Up. Submit button label: "Sign In".

## Requirements

### Requirement: Page renders gradient background

Users SHALL see a diagonal gradient background from blue (#009EFD) to green (#2AF598) filling the viewport.

#### Scenario: Page renders gradient background

- **GIVEN** the user opens Formlane
- **THEN** the page background is a diagonal gradient from blue (#009EFD) to green (#2AF598)
- **AND** the form card is centered in the viewport

### Requirement: Card displays split layout

Users SHALL see a white card with a hero image on the left and a dark form panel on the right.

#### Scenario: Card displays split layout

- **GIVEN** the user opens Formlane on desktop (>991px)
- **THEN** a white card with rounded corners (8px) and drop shadow is visible
- **AND** the left side shows a hero image
- **AND** the right side shows a dark blue-gray (#3D5983) form panel

### Requirement: Tab switching between Sign Up and Sign In

Users SHALL be able to switch between Sign Up and Sign In tabs.

#### Scenario: Tab switching between Sign Up and Sign In

- **GIVEN** the user opens Formlane
- **THEN** the "Sign Up" tab is active with a teal (#30E1DF) bottom border
- **AND** the Sign Up form is visible with fields: Username, E-Mail, Password, Confirm Password
- **WHEN** the user clicks the "Sign In" tab
- **THEN** the "Sign In" tab becomes active with a teal (#30E1DF) bottom border
- **AND** the Sign In form is visible with fields: Username, E-Mail, Password, Confirm Password
- **AND** the Sign Up form is hidden

### Requirement: Floating label animation on input focus

Users SHALL see floating labels that animate up on input focus.

#### Scenario: Floating label animation on input focus

- **GIVEN** the Sign Up form is visible
- **WHEN** the user focuses on the Username input
- **THEN** the label "Username" floats above the input
- **AND** the input underline turns green (#53C83C)

### Requirement: Input validation with :valid pseudo-class

Labels SHALL remain in the floated position when the user has typed a value.

#### Scenario: Input validation with :valid pseudo-class

- **GIVEN** the user has typed a value in the Username field
- **THEN** the label remains in the floated position
- **AND** the underline remains green (#53C83C)

### Requirement: Submit button hover state

Users SHALL see a hover state on the submit button.

#### Scenario: Submit button hover state

- **GIVEN** the form is visible
- **WHEN** the user hovers over the "Register" button
- **THEN** the button background changes from white (#fff) to light gray (#ccc)

### Requirement: Mobile responsive layout

The card SHALL stack vertically on mobile devices (<=991px).

#### Scenario: Mobile responsive layout

- **GIVEN** the user opens Formlane on mobile (<=991px)
- **THEN** the card stacks vertically with image on top
- **AND** the form panel sits below the image
- **AND** the tab bar has appropriate padding for touch targets

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
