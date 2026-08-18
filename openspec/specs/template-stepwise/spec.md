# Template: Stepwise (Multi-step Sign-Up Form)

## Purpose

Stepwise is a multi-step sign-up wizard in the free-react-templates monorepo.
It is an original React recreation of the ColorLib free "Colorlib Wizard 19"
template design (see TEMPLATES.md line 856; `grep -c
'wp/template/colorlib-wizard-19/'` = 1), built under a DIFFERENT name
(Stepwise — a single lowercase word describing a step-by-step wizard form,
matching the Hiredly/Shutterly naming pattern; no collision with `apps/` or
existing spec folders) per the monorepo naming mandate (never reuse the
ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/colorlib-wizard-19/
(https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-19.jpg).
Category: Wizard — one of the 30 ColorLib "Wizard" mini-templates.

Preview URL: https://preview.colorlib.com/theme/colorlib-wizard-19/ — **404**.
The real demo lives at https://colorlib.com/etc/bwiz/colorlib-wizard-19/index.html
(HTTP 200, ~5.5 KB HTML, `<title>Sign Up Form</title>`, `css/style.css`
~20.7 KB parsed for tokens). The screenshot in TEMPLATES.md
(`colorlib-free-wizard-19.jpg`, 1200×972, viewed in the browser) matches the
demo. This is a jquery-steps wizard demo — no preview.colorlib.com mirror.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Wizard 19" — a single-page multi-step
  sign-up / room-booking wizard. The whole page is one centered white card
  (`max-width 840px`) floating on a soft periwinkle-to-sky-blue gradient
  background. The card's top edge is a 3-tab step bar (Account / Room type /
  Extra details); the active step gets a 3px sky-blue underline and blue
  heading, inactive steps are grey (hover shows the blue underline). Step 1
  (Account): a 2-column grid of inputs — Your Email (email), Country
  (custom dropdown, Viet Nam / United States America), Your password
  (password), Daily budget (custom dropdown, 40$ / 60$) — plus a
  "Subscribe to out newletter" [sic] checkbox (18px bordered box, check glyph
  on toggle). Step 2 (Room type): "What type of room would you want?" radio
  list — Single room / Family room / Business room (Business room checked by
  default) — custom radio dots. Step 3 (Extra details): "Room description"
  textarea with placeholder "Eg : The room must have air conditional . . .".
  Footer action bar: Previous (left, hidden on step 1, grey `#ebebeb` bg,
  `#999` text, hover `#d2d2d2`) and Next/Submit (right, 140×50, sky-blue
  `#6dbdfe` bg, white bold uppercase 15px text). Uses
  jquery-steps + jquery-validation — validate each step before advancing
  (required fields, valid email) and show inline field errors.
- **Preview DOM analyzed:** https://colorlib.com/etc/bwiz/colorlib-wizard-19/index.html
  (HTTP 200, ~5.5 KB HTML; `css/style.css` ~20.7 KB parsed for tokens).
  Structure: `div.main > div.container > form#signup-form.signup-form` with
  three `h3`+`fieldset` pairs (jquery-steps turns each pair into a step;
  steps render as a `.steps` tab bar with an `#ebebeb` bottom border, and
  `.actions` holds the Previous/Next buttons). Also loads a Material Design
  iconic font (`material-design-iconic-font`, glyphs used for the select
  chevron `\f2f9` and the checkbox check `\f26b` — recreate with
  `lucide-react` icons instead). No images at all — the template is
  pure form UI. Stack is jQuery + jquery-steps + jquery-validation, NOT
  Tailwind. All interactivity must be recreated client-side in React.
- **Screenshot note:** `colorlib-free-wizard-19.jpg` (1200×972, viewed in
  the browser): centered white rounded card on a smooth lavender→sky-blue
  gradient; 3 tabs at the top of the card (Account active in blue with
  underline, Room type / Extra details grey); 2×2 form grid (email, country
  dropdown, password, budget dropdown); small grey "Subscribe to our
  newsletter" checkbox; bottom-right solid light-blue "NEXT" button (white
  bold uppercase text). No nav, no hero, no footer — just the form card.

### Design tokens (from css/style.css)

- **Background gradient** (body): `linear-gradient(0deg, #d9afd9 0%, #5a2170
0%, #a1c4fd 0%, #c2e9fb 100%)` — visually a soft periwinkle/`#a1c4fd` →
  sky-blue/`#c2e9fb` wash (the purple stops are collapsed at 0%).
  Recreate as `bg-gradient-to-br from-[#a1c4fd] to-[#c2e9fb]` (the purple
  stops are decorative remnants; the screenshot shows blue-on-blue).
- **Surface:** white card `#fff`, `width: 840px`, `box-shadow: 0px 3px
9.5px 0.5px rgba(0,0,0,0.15)`; page padding `195px 0` (recreate as a
  generous py, e.g. `py-24 md:py-40`); form padding `0 0 54px`; body
  `font-size 15px, line-height 1.92, color #222, font-weight 500`.
- **Brand/sky blue:** `#6dbdfe` — active step underline (3px), step heading
  color, input focus border, Primary button bg, custom-dropdown hover/selected
  row bg (white text), radio/checkbox check accents.
- **Greys:** labels/plain text `#666`; muted/inactive `#999` / `#999999`
  (inactive step headings, placeholders 13px, select chevron, Previous button
  text); borders `#ebebeb` (1px, inputs, step bar bottom border, checkbox
  box, dropdown options); Previous hover bg `#d2d2d2`; dropdown option bg
  `#f8f8f8`.
- **Typography:** "Poppins" (Google Font, load via `<link>` in index.html;
  the CSS references it but the demo HTML does not ship the font file) —
  15px body, 500 weight; step headings h3 18px/700; button text 15px bold
  uppercase; checkbox label 13px/400.
- **Inputs:** height 50px, padding 15px 20px, 1px solid `#ebebeb` border,
  transparent bg, focus border `#6dbdfe`; labels are block-width, uppercase
  (`.label-radio` has `text-transform: uppercase`).
- **Buttons:** 140×50, uppercase bold; Primary `#6dbdfe` bg white text;
  Secondary (Previous) `#ebebeb` bg `#999` text, hover bg `#d2d2d2`.
- **Radii:** none on the card in the CSS (screenshot shows a slightly rounded
  card — add a subtle `rounded-lg` ~8px for the card; controls stay square).
- **Layout:** `.form-group`/`.form-select` are 50% width in a `.form-row`
  (`margin: 0 -15px`, `padding: 0 15px`, `margin-bottom: 15px`); content
  area `padding: 60px 70px 0 80px`, min-height ~410px; action bar absolutely
  positioned bottom-right (`bottom 31px`, `padding-right 70px`). Steps bar
  has `space-between` spacing with `border-bottom: 1px solid #ebebeb`.
  Responsive: <768px stacks the columns and step tabs.

## Requirements

### Requirement: Page shell

The system SHALL render a full-page periwinkle-to-sky-blue gradient
background with a single centered white card containing the whole wizard.

#### Scenario: Wizard page renders

- **GIVEN** the user opens the template
- **THEN** the page background SHALL be a soft periwinkle-to-sky-blue
  gradient (`#a1c4fd` → `#c2e9fb`)
- **AND** a single white card SHALL be centered with a subtle drop shadow
  (`0 3px 9.5px rgba(0,0,0,0.15)`, max-width 840px, slightly rounded)
- **AND** the card SHALL contain a 3-step bar and a step content area

### Requirement: Step bar

The system SHALL render a 3-tab step bar at the top of the card marking the
wizard's position, with the active step highlighted.

#### Scenario: Step bar shows all three steps with the first one active

- **GIVEN** the user opens the template
- **THEN** the step bar SHALL show "Account", "Room type" and "Extra details"
  in order
- **AND** the current step heading SHALL be sky blue `#6dbdfe` with a 3px
  sky-blue underline
- **AND** the inactive step headings SHALL be grey `#999999`
- **AND** the step bar SHALL have a 1px `#ebebeb` bottom border

#### Scenario: Tabs navigate the wizard

- **GIVEN** the step bar is rendered
- **WHEN** the user clicks a tab for a reachable step
- **THEN** the wizard SHALL switch to that step
- **AND** the clicked tab SHALL become the active step with the blue
  underline and `aria-current` set

### Requirement: Step 1 — Account fields

The system SHALL render the Account step as a two-column grid of form fields
plus a newsletter checkbox.

#### Scenario: Account step shows the two-column form fields

- **GIVEN** the wizard starts on the "Account" step
- **THEN** the form SHALL show "Your Email" (email input) and "Country"
  (select with options Viet Nam / United States America) side by side
- **AND** SHALL show "Your password" (password input) and "Daily budget"
  (select with options 40$ / 60$) side by side
- **AND** SHALL show a "Subscribe to our newsletter" checkbox
- **AND** the inputs SHALL have a 1px `#ebebeb` border, 50px height, and a
  sky-blue `#6dbdfe` border on focus

### Requirement: Validation on Account step

The system SHALL validate the Account step before allowing the user to
advance, showing inline error messages.

#### Scenario: Account step requires valid inputs before advancing

- **GIVEN** the user is on the "Account" step
- **WHEN** the user clicks Next with empty fields
- **THEN** inline error messages SHALL appear for the empty required fields
- **AND** the user SHALL stay on the "Account" step
- **WHEN** the user types an invalid email and clicks Next
- **THEN** an email format error SHALL appear
- **WHEN** the user fills a valid email, password, country and budget and
  clicks Next
- **THEN** the wizard SHALL advance to the "Room type" step

### Requirement: Step 2 — Room type radios

The system SHALL render the Room type step as a radio group of three room
options with one preselected.

#### Scenario: Room type step offers three room options

- **GIVEN** the user is on the "Room type" step
- **THEN** the step SHALL show "What type of room would you want?" with radio
  options "Single room", "Family room" and "Business room"
- **AND** "Business room" SHALL be selected by default
- **WHEN** the user selects another room
- **THEN** only the selected radio SHALL be marked as checked
- **AND** the step bar SHALL mark "Room type" as the active step
- **WHEN** the user clicks Next
- **THEN** the wizard SHALL advance to the "Extra details" step

### Requirement: Step 3 — Extra details

The system SHALL render the Extra details step as a room-description textarea
and SHALL complete the wizard on submit.

#### Scenario: Extra details step collects a room description

- **GIVEN** the user is on the "Extra details" step
- **THEN** the step SHALL show a "Room description" textarea with the
  placeholder "Eg: The room must have air conditional..."
- **WHEN** the user clicks Submit with an empty textarea
- **THEN** an inline required error SHALL appear
- **WHEN** the user types a description and clicks Submit
- **THEN** the wizard SHALL complete with a success state
- **AND** the step bar SHALL mark "Extra details" as the active step

### Requirement: Wizard navigation

The system SHALL render Previous/Next actions in the card's action bar, with
the Previous button hidden on the first step and values preserved when
navigating back.

#### Scenario: Previous button steps back through the wizard

- **GIVEN** the user is on a step after the first
- **THEN** a "Previous" button SHALL be visible on the left of the action bar
  (grey `#ebebeb` background, `#999` text, hover `#d2d2d2`)
- **WHEN** the user clicks Previous
- **THEN** the wizard SHALL return to the previous step and preserve entered
  values
- **AND** the Previous button SHALL be hidden on the first step

#### Scenario: Action bar on the last step

- **GIVEN** the user is on the "Extra details" step
- **THEN** the primary action SHALL read "Submit"
- **WHEN** the user completes the form and submits
- **THEN** a success state SHALL be shown confirming the submission

### Requirement: Accessibility

The system SHALL be keyboard and screen-reader accessible.

#### Scenario: Wizard is accessible

- **GIVEN** the wizard is rendered
- **THEN** every input, select, radio and textarea SHALL have an associated
  visible label
- **AND** the step tabs SHALL be operable with `aria-current` on the active
  step
- **AND** buttons SHALL have visible focus rings
- **AND** icon-only affordances SHALL have aria-labels

### Requirement: Responsive layout

The system SHALL adapt to small screens.

#### Scenario: Wizard adapts to small viewports

- **GIVEN** the viewport is narrower than 768px
- **THEN** the card SHALL fill the viewport width minus margins
- **AND** the two-column field rows SHALL stack into one column
- **AND** the step tabs SHALL remain readable and tap-target sized

## Verification checklist

- [ ] White card on periwinkle→sky-blue gradient, centered, subtle shadow.
- [ ] 3-step bar (Account / Room type / Extra details) with active underline.
- [ ] Step 1: email, country, password, budget + newsletter checkbox (2×2 grid).
- [ ] Step 2: three room-type radios, Business room preselected.
- [ ] Step 3: room description textarea with placeholder.
- [ ] Per-step validation (required + email format) with inline errors.
- [ ] Previous/Next actions — Previous hidden on step 1, values preserved on
      back-navigation, success state after submit.
- [ ] Poppins font loaded via Google Fonts link; tokens in `@theme`
      (`brand` = `#6dbdfe`).
- [ ] Icons via lucide-react (chevron, check) — no external font files.
- [ ] Footer links to https://www.componentdock.com/ ("Component Dock").
- [ ] No ColorLib references in app code; provenance only in this spec,
      TEMPLATES.md and the PR.
- [ ] Placeholder-free; no asset copies from the source.
