# Template: Enchant (Multi-step Sign-Up Wizard)

## Purpose

Enchant is a multi-step sign-up wizard in the free-react-templates monorepo.
It is an original React recreation of the ColorLib free "Colorlib Wizard 20"
template design (see TEMPLATES.md line 858; `grep -c
'wp/template/colorlib-wizard-20/'` = 1), built under a DIFFERENT name
(Enchant — a single lowercase word evoking the wizard/magic naming theme of
the sibling wizard preps: Conjure, Conjury, Banish, Dispel, Abjure, Bewitch,
Enthrall, Spellbind, Beguile, Mesmerize, Incant, Stepwise; no collision with
`apps/` or existing spec folders) per the monorepo naming mandate (never
reuse the ColorLib source name), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/colorlib-wizard-20/
(https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-20.jpg).
Category: Wizard — one of the 30 ColorLib "Wizard" mini-templates.

Preview URL: https://preview.colorlib.com/theme/colorlib-wizard-20/ — **404**.
The real demo lives at https://colorlib.com/etc/bwiz/colorlib-wizard-20/index.html
(HTTP 200, ~3.7 KB HTML, `<title>Sign Up Form</title>`, `css/style.css`
~17.6 KB parsed for tokens, `js/main.js` ~0.6 KB). The screenshot in
TEMPLATES.md (`colorlib-free-wizard-20.jpg`, 1200×972, viewed in the
browser) matches the demo. This is a jquery-steps wizard demo — no
preview.colorlib.com mirror.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Wizard 20" — a single-page three-step
  sign-up wizard. The whole page is one centered white card (`330×365`,
  radius 10px) floating on a deep slate-blue → deep-purple gradient
  background. Above the card floats a 3-circle progress bar (Number + label
  per step: Account Setup 01 / Social Profiles 02 / Personal Details 03);
  the active circle is filled with the brand gradient, inactive circles are
  light grey (`#ebebeb` fill, `#999999` number) with a 3px white border, and
  a thin white line connects all three circles behind them. Step 1 (Account
  Setup): heading "Create your account" (source typo "Creat" — fix in copy)
  with three stacked inputs — Email (placeholder "Eg: aucreative@gmail.com"),
  Password, Confirm Password. Step 2 (Social Profiles): heading "Social
  profiles" — Twitter, Facebook, Google Plus inputs. Step 3 (Personal
  Details): heading "Personal Details" — Your name, Phone, Address inputs.
  The action bar sits at the bottom of the card with Previous (hidden on
  step 1) and Next/Submit buttons, both identical gradient pills centered.
  Uses jquery-steps (transitionEffect "fade"; titleTemplate renders
  `title-text` + `title-number` "0#index#" → 01/02/03); finishing shows
  `alert('Sumited')` — recreate as an in-page success state. **No
  validation rules are configured in the source demo** (jquery-validation is
  loaded but `form.steps()` is initialized without validation options), so
  Next advances unconditionally; field values persist when navigating back
  (jquery-steps keeps the fieldset DOM alive).
- **Preview DOM analyzed:** https://colorlib.com/etc/bwiz/colorlib-wizard-20/index.html
  (HTTP 200, ~3.7 KB HTML; `css/style.css` ~17.6 KB parsed for tokens;
  `js/main.js` ~0.6 KB). Structure: `div.main > div.container > form#signup-form`
  with three `h3`+`fieldset` pairs (jquery-steps turns each pair into a
  step; steps render as a `.steps` progress bar with `.title-number` circles
  and a `.title-text` label, `.actions` holds the Previous/Next buttons).
  Also loads a Material Design iconic font
  (`material-design-iconic-font`) — the source stylesheet references it but
  the demo's own CSS does not depend on it for this template (no icon-font
  glyphs in the visible design); recreate without it. No images at all —
  the template is pure form UI. Stack is jQuery + jquery-steps, NOT
  Tailwind. All interactivity must be recreated client-side in React (no
  jQuery).
- **Screenshot note:** `colorlib-free-wizard-20.jpg` (1200×972, viewed in
  the browser): full-screen slate-blue→purple diagonal gradient; white
  rounded card in the center; three circles above the card (01 active with
  dark blue fill, 02/03 light grey), thin connector lines; "CREATE YOUR
  ACCOUNT" bold uppercase dark heading; three bordered input fields
  (email/password/confirm); a single dark blue→purple gradient "Next" button
  at the bottom of the card. Matches the live demo rendered in the browser.

### Design tokens (from css/style.css)

- **Background gradient** (body): `linear-gradient(0deg, #884d80 0%,
#9795f0 0%, #2b5876 0%, #4e4376 100%)` — the earlier stops are collapsed
  at 0%, so the visible wash is deep slate-blue `#2b5876` → deep purple
  `#4e4376`. Recreate as `bg-gradient-to-br from-[#2b5876] to-[#4e4376]`
  (the screenshot shows blue on the left, purple on the right).
- **Surface:** white card `#fff`, `width: 330px`, `height: 365px`,
  `border-radius: 10px`, `box-shadow: 0px 5px 9.5px 0.5px rgba(0,0,0,0.1)`;
  page padding `270px 0` (recreate as a generous py, e.g. `py-24 md:py-40`);
  container width 373px centered; `fieldset` (step content) padding
  `0 42px 37px`-ish (`padding-left: 42px; padding-right: 37px`); body
  `font-size 13px, line-height 1.92, color #222, font-weight 500`.
- **Brand gradient:** `linear-gradient(0deg, #a1c4fd 0%, #884d80 0%,
#2b5876 0%, #4e4376 100%)` — visually a periwinkle `#a1c4fd` → deep purple
  `#4e4376` wash. Used for: the active step circle, the button background,
  and the input focus border (border-image). Recreate as
  `from-[#a1c4fd] via-[#2b5876] to-[#4e4376]` gradient utilities.
- **Greys:** light grey `#ebebeb` — inactive circle fill, input borders
  (1px); number/text grey `#999 / #999999` — inactive circle numbers,
  input placeholders (13px); dark `#222` — body text, step heading (h2),
  input text; button hover `#090909`.
- **Typography:** "Poppins" (Google Font, load via `<link>` in index.html;
  the source ships weights 300–900 as @font-face) — 13px body 500 weight;
  step headings h2 16px/700 uppercase centered; step labels (title-text)
  12px/700 white with `text-shadow: 3px 4px 5px rgba(0,0,0,0.2)`; circle
  numbers 13px (active 16px).
- **Inputs:** width 100%, height 40px, padding 15px 20px, 1px solid
  `#ebebeb` border, `border-radius: 5px`, transparent bg, font 13px/500,
  color `#222`; placeholder `#999`; on focus the border becomes the brand
  gradient border-image (recreate as a gradient border via `border-image`
  or a wrapper ring) and the placeholder darkens to `#222`. No visible
  labels in the source — only placeholders (add accessible labels in the
  recreation).
- **Buttons:** 120×40, `border-radius: 5px`, brand-gradient background,
  white text; hover background `#090909` (darkens). Previous and Next/Submit
  share the exact same style; Previous is hidden on step 1 (`.disabled {
display: none }`). Action bar absolutely positioned at the card bottom
  (`bottom: 40px`, full width, buttons centered with 5px gaps).
- **Step bar:** `.title-number` 44×44 circle, `border-radius: 50%`, 3px
  solid white border, `#ebebeb` fill, `#999999` 13px number, shadow
  `0 5px 9.5px 0.5px rgba(0,0,0,0.2)`; active circle gets the brand
  gradient and 16px white number. `.title-text` 12px bold white label below
  the circle. A white connector line (`8px` tall, `290px` wide) sits behind
  the circles at the vertical middle of the circle row (`bottom: 22px`).
  Steps bar spacing `space-between`, `padding-bottom: 20px`.
- **Radii:** 10px card, 5px inputs/buttons, 50% circles.
- **Layout:** `.content` card centered; form groups stacked (`.form-group`
  `padding-bottom: 20px`), one input per row (no two-column grid in this
  template — every step is a vertical stack of 3 inputs). Responsive:
  ≤480px container `calc(100% - 40px)`, card width 100%, fieldset padding
  20px, buttons 100px; ≤400px connector line 230px, labels padded 0 10px.

## Requirements

### Requirement: Page shell

The system SHALL render a full-page deep slate-blue-to-purple gradient
background with a single centered white card containing the whole wizard.

#### Scenario: Wizard page renders

- **GIVEN** the user opens the template
- **THEN** the page background SHALL be a deep slate-blue to purple gradient
  (`#2b5876` → `#4e4376`)
- **AND** a single white card SHALL be centered (width ~330px, radius ~10px,
  drop shadow `0 5px 9.5px rgba(0,0,0,0.1)`) with generous vertical spacing
  around it
- **AND** the card SHALL contain a step progress bar, a step content area,
  and an action bar

### Requirement: Step progress bar

The system SHALL render a 3-step progress bar above the card with a numbered
circle and label per step, highlighting the current step.

#### Scenario: Progress bar shows all three steps with the first active

- **GIVEN** the user opens the template
- **THEN** the progress bar SHALL show three circles numbered 01, 02 and 03
  with labels "Account Setup", "Social Profiles" and "Personal Details"
- **AND** the active step's circle SHALL be filled with the brand gradient
  (`#a1c4fd` → `#4e4376`) with a white number
- **AND** the inactive circles SHALL have a light grey `#ebebeb` fill,
  a 3px white border and grey `#999999` numbers
- **AND** a thin white connector line SHALL join the three circles

#### Scenario: Progress bar tracks the current step

- **GIVEN** the user advances to the "Social Profiles" step
- **THEN** the "Social Profiles" circle SHALL become the active gradient
  circle with `aria-current` set
- **AND** the previous circle SHALL show as completed (gradient fill) or
  otherwise clearly visited-styled
- **AND** the "Personal Details" circle SHALL remain inactive grey until
  reached

### Requirement: Step 1 — Account Setup

The system SHALL render the Account Setup step as a vertical stack of
credential inputs under the heading "Create your account".

#### Scenario: Account step shows email and password fields

- **GIVEN** the wizard starts on the "Account Setup" step
- **THEN** the step SHALL show the heading "Create your account" (fixing the
  source typo "Creat")
- **AND** SHALL show an Email input with placeholder
  "Eg: aucreative@gmail.com"
- **AND** SHALL show a Password input with placeholder "Password"
- **AND** SHALL show a Confirm Password input with placeholder
  "Confirm Password"
- **AND** the inputs SHALL have a 1px `#ebebeb` border, 40px height, 5px
  radius and a gradient border on focus

### Requirement: Step 2 — Social Profiles

The system SHALL render the Social Profiles step as three social-handle
inputs under the heading "Social profiles".

#### Scenario: Social profiles step shows the three social inputs

- **GIVEN** the user advances to the "Social Profiles" step
- **THEN** the step SHALL show the heading "Social profiles"
- **AND** SHALL show text inputs with placeholders "Twitter", "Facebook"
  and "Google Plus"

### Requirement: Step 3 — Personal Details

The system SHALL render the Personal Details step as three contact-inputs
under the heading "Personal Details", and SHALL complete the wizard on
submit.

#### Scenario: Personal details step collects contact info

- **GIVEN** the user advances to the "Personal Details" step
- **THEN** the step SHALL show the heading "Personal Details"
- **AND** SHALL show text inputs with placeholders "Your name", "Phone" and
  "Address"
- **WHEN** the user clicks Submit
- **THEN** the wizard SHALL show a success state confirming the submission

### Requirement: Wizard navigation

The system SHALL render Previous and Next/Submit actions in the card's
action bar, with the Previous button hidden on the first step and entered
values preserved when navigating back.

#### Scenario: Previous button steps back through the wizard

- **GIVEN** the user is on a step after the first
- **THEN** a "Previous" button SHALL be visible on the action bar,
  styled identically to the primary button (brand gradient, white text)
- **WHEN** the user clicks Previous
- **THEN** the wizard SHALL return to the previous step and preserve all
  entered field values
- **AND** the Previous button SHALL be hidden on the first step

#### Scenario: Action bar on the last step

- **GIVEN** the user is on the "Personal Details" step
- **THEN** the primary action SHALL read "Submit"
- **WHEN** the user submits
- **THEN** a success state SHALL be shown in place of the form (the source
  demo shows a native `alert('Sumited')` — recreate as an in-page success
  message)

### Requirement: Accessibility

The system SHALL be keyboard and screen-reader accessible.

#### Scenario: Wizard is accessible

- **GIVEN** the wizard is rendered
- **THEN** every input SHALL have an accessible name matching its purpose
  (visible label or `aria-label`, since the source only ships placeholders)
- **AND** the active step SHALL be marked with `aria-current`
- **AND** the step progress elements SHALL be labelled
- **AND** buttons SHALL have visible focus rings
- **AND** the Previous/Next actions SHALL be reachable and operable by
  keyboard

### Requirement: Responsive layout

The system SHALL adapt to small screens.

#### Scenario: Wizard adapts to small viewports

- **GIVEN** the viewport is narrower than 480px
- **THEN** the card SHALL fill the viewport width minus margins
- **AND** the fieldset padding SHALL reduce to ~20px
- **AND** the buttons SHALL shrink to 100px wide and remain centered
- **AND** the progress bar SHALL remain readable with tap-target-sized
  labels and circles

## Verification checklist

- [ ] White card on deep slate-blue→purple gradient, centered, 10px radius,
      subtle shadow.
- [ ] 3-circle progress bar (01 Account Setup / 02 Social Profiles /
      03 Personal Details) with gradient active circle, grey inactive
      circles, white connector line.
- [ ] Step 1: "Create your account" heading + Email / Password / Confirm
      Password inputs (placeholders as in the source).
- [ ] Step 2: "Social profiles" heading + Twitter / Facebook / Google Plus.
- [ ] Step 3: "Personal Details" heading + Your name / Phone / Address.
- [ ] Previous/Next gradient buttons — Previous hidden on step 1, values
      preserved on back-navigation, Submit shows in-page success state.
- [ ] Inputs 40px, 1px `#ebebeb` border, 5px radius, gradient border on
      focus, placeholder `#999`.
- [ ] Poppins font loaded via Google Fonts link; tokens in `@theme`
      (`brand` gradient colors `#a1c4fd` / `#2b5876` / `#4e4376`).
- [ ] No external icon fonts — any icons via lucide-react.
- [ ] Footer links to https://www.componentdock.com/ ("Component Dock").
- [ ] No ColorLib references in app code; provenance only in this spec,
      TEMPLATES.md and the PR.
- [ ] Placeholder-free; no asset copies from the source.
