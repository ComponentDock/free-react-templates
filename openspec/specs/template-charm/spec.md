# Template: Charm (3-Step Form Wizard)

## Purpose

Charm is a single-page three-step SIGN-UP / PROFILE WIZARD in the
free-react-templates monorepo. It is an original React recreation of the
ColorLIB "Colorlib Wizard 6" free template (source:
https://colorlib.com/wp/template/colorlib-wizard-6/), built under a
DIFFERENT name (**Charm**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a jQuery-Steps form wizard (`jquery.steps.js` + jQuery 3.3.1 +
Material Design Iconic Font): a white card on a pastel gradient background.
Section 1 collects a profile picture (avatar upload with placeholder) plus
First Name, Last Name, Team Name (side by side), Email, and Create Password.
Section 2 presents a 2×3 grid of interest icons (Programming, Research,
Teacher, Tour Guide, Business, Artist) each with a background image.
Section 3 collects an address: Street Name, Street Number, City, Country
(in two side-by-side pairs). Navigation is Prev (pink `#f6c2ec`) and
Continue (blue `#aac1f0`) circular-rectangle buttons, with a dot-based step
indicator at the bottom.

- **Source template**: [Colorlib Wizard 6](https://colorlib.com/wp/template/colorlib-wizard-6/)
- **Live preview URL**: `https://colorlib.com/etc/bwiz/colorlib-wizard-6/index.html` (REACHABLE — HTTP 200, 5,386 bytes, 148 lines, `<title>FormWizard_v6</title>`)
- **Preview CSS**: `css/style.css` (9,111 bytes, 377 lines — ALL styling,
  custom written, NO Bootstrap; NO `jquery.steps.min.css`)
- **Preview JS**: `js/main.js` (1,257 bytes, 40 lines: jQuery Steps init +
  custom step-click handlers + form-holder focus toggle)
- **Screenshot fallback**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-6.jpg`
- **Stack**: React 19, Vite, Tailwind CSS 4, TypeScript (strict)

## Naming

The ColorLIB source name "Colorlib Wizard 6" is FORBIDDEN as the app name
(and "wizard" itself must not be reused). **Charm** is the new, original
name — single lowercase word, kebab-case, no collision with `apps/`,
`openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name (verified:
zero hits for `charm` in `ls apps/`, `openspec/specs/`, `docs/templates/`,
and TEMPLATES.md). It continues the magic-practice chain established by the
wizard family preps: Conjure (1), Hexcraft (2), Confwell (3), Formpad (4),
Divine (5) → **Charm (6)**, then Enchant (7), and so on. Source slug +
preview URL are recorded above.

## Design reference (replication findings)

- **Original**: ColorLIB "Colorlib Wizard 6" (page title: "Free 4-Step Order
  Template 2026"; the Colorlib marketing page says "4-step" but the live
  preview HTML defines exactly **3 sections** — Section 1 (profile form),
  Section 2 (interest grid), Section 3 (address form)). Listed in
  TEMPLATES.md under **Bootstrap Wizards (30)** (section header around line
  844; the one and only row at line 874 — `wp/template/colorlib-wizard-6/`
  appears exactly ONCE; close-string matches for wizard-1/2/11/21..29 rows
  are prefix substrings, not duplicates). Member 6 of colorlib-wizard-1 … 30.
- **Live preview — REACHABLE (verified by direct fetch):**
  `https://preview.colorlib.com/theme/colorlib-wizard-6/` returns HTTP 404
  (the naive URL doesn't resolve for ANY wizard member). The REAL preview is
  the family path `https://colorlib.com/etc/bwiz/colorlib-wizard-6/index.html`
  (HTTP 200, 5,386 bytes, 148 lines, `<title>FormWizard_v6</title>` — same
  `/etc/bwz/` path confirmed for wizard-5, -6, -12, -15; confirmed again for
  wizard-6 in this run). Stylesheets: `css/style.css` (9,111 bytes, 377 lines
  — ALL styling, custom written, NO Bootstrap, NO jquery.steps.css),
  `fonts/material-design-iconic-font/css/material-design-iconic-font.css`
  (zmdi icon font — glyphs for chevrons `\\f2ee`/`\\f2ea`, camera `\f27c`;
  replace with lucide, do NOT ship the font). Scripts:
  `js/jquery-3.3.1.min.js`, `js/jquery.steps.js` (wizard plugin), `js/main.js`
  (1,257 bytes: Steps init with `enableAllSteps: true`, `transitionEffect:
  "fade"`, labels next="Continue"/previous="Back"/finish="Finish"; custom
  step-click checked-class toggling; `.forward`/`.backward` handlers;
  `.form-holder` focus → active class toggle). Fonts: local @font-face
  **Poppins-Regular / Poppins-Medium** + **Muli-Bold** → **Google Fonts
  `<link>` (Poppins 400/500/Muli 700)**.
- **Live DOM structure** (from the fetched HTML, 5,386 bytes):
  - `body` (bg: gradient + `form-wizard-bg.jpg` image, `background-size: cover`)
    → `div.wrapper` (max-width 1400px, height 100vh, flex centered)
    → `form` → `div#wizard` (position relative, bg `#fff`, height 554px,
    width 738px, padding 71px 93px 0, border-radius 10px, shadow
    `0px 2px 7px 0px rgba(0,0,0,0.1)`)
    - jQuery Steps renders: `h4` headers (empty — `display: none` via
      `.steps .current-info`), `section` bodies, `ul.steps` (display:none),
      `div.actions` (Prev/Continue buttons).
    - **Section 1 (profile):** `div.form-header` (display:flex) →
      `div.avartar` (width 33.75%) containing `img` (avatar placeholder) +
      `div.avartar-picker` (hidden file input + label "Choose Picture" with
      camera icon) | `div.form-group` (width 66.25%) → `div.form-holder
      active` (First Name), `div.form-holder` (Last Name), `div.form-holder`
      (Team Name) side by side → then `div.form-holder` (Email input,
      type=email) → `div.form-holder` (Create a password, type=password).
    - **Section 2 (interests):** `div.grid` → `div.row` (display:flex) ×2,
      each with 3 `a.grid-item` links with `background-image` CSS:
      Programming, Research, Teacher (row 1); Tour Guide, Business, Artist
      (row 2). Each item: 134px height, 30% width, 7px radius, centered icon
      + label.
    - **Section 3 (address):** `div.form-row` (display:flex) ×2 → each
      contains two `div.form-holder` (Street Name | Street Number; City |
      Country).
  - **Step indicator**: `.steps` (position:absolute, left:50%, bottom:-50px,
    transform translateX(-50%)) → `ul` (flex) → `li a` (10px×10px grey
    `#fff` border circles, 8px margin-right) → `li.current a` (22px wide,
    0.5s transition, 5.5px radius). Hidden on mobile.
  - **Form controls**: `.form-control` (height 46px, border:none, bg
    `#f7f7f7`, width 100%, padding 0 25px, border-radius 23px, color `#333`;
    placeholder color `#808080`, text-transform:uppercase).
  - **Form holders**: `.form-holder` (position:relative, padding-left
    26px, margin-bottom 25px) with `:before` pseudo-element: 10px×10px
    border `2px solid #f6c2ec` (pink), border-radius 50%; `.active` fills
    bg `#f6c2ec`.
  - **Actions bar**: `.actions ul` (flex, space-between when on step>0);
    `li a` (146px wide, 46px height, padding-left 33px, bg
    `#aac1f0` blue, color `#fff`, uppercase, font-weight 400,
    border-radius 23px, transition 0.3s, perspective transform); `:before`
    content `\\f2ee` (zmdi-arrow-right-alt, Material-Design-Iconic-Font,
    13px, absolute top 17px right 32px); `:hover` bg `#98add6` with
    wobble-horizontal animation. `li:first-child a` = Prev: bg
    `#f6c2ec` (pink), padding-left 65px, `:before` content `\\f2ea`
    (zmdi-arrow-left) at left 48px; `:hover` bg `#dbadd2`.
    `li:last-child a` = Next/Continue: padding-left 46px, `:before`
    right 44px. `li[aria-disabled="true"] a { display: none }` (Prev hidden
    when disabled).
  - **No real submit**: `form` has no `action` (the wizard is a demo).

### Screenshot (`colorlib-free-wizard-6.jpg`)

Browsed visually in the browser — confirms the live preview DOM exactly:
- Browser frame (Google Chrome on macOS) with URL `colorlib.com` in the address bar.
- Background: smooth vertical linear gradient from a soft periwinkle blue
  at the top to a gentle lavender/pink at the bottom.
- Large semi-transparent white brush-script text superimposed near the top
  reading "TELL US ABOUT YOURSELF".
- Centered white card with rounded corners (10px radius), soft shadow,
  floating over the background.
- Left side of card (≈1/3): circular avatar placeholder with a smiling
  woman (hair in a bun), thin light purple border; below it "CHOOSE PICTURE"
  text in uppercase with a small camera icon.
- Right side of card (≈2/3): five input fields with very light gray
  (`#f7f7f7`) background, rounded corners (23px), uppercase sans-serif
  placeholder labels: FIRST NAME, LAST NAME, TEAM NAME, EMAIL, CREATE A
  PASSWORD. First Name and Last Name are side by side in a row; others
  full-width.
- Vertical timeline column to the left of inputs: small circles — most
  hollow with thin purple outline, the one aligned with EMAIL is filled
  solid pink/purple.
- "CONTINUE" button at bottom left: pill-shaped (23px radius), muted
  periwinkle blue, white uppercase text with a right-pointing arrow icon.
- Bottom center: three small pagination dots; first two white/hollow,
  third (rightmost) filled pink — indicating the user is on the 3rd step.
- Aesthetic: soft pastel gradient, glassy clean form card, minimalist,
  friendly, modern. Soft purple/pink/lavender/blue palette.

### Field inventory (verbatim from live HTML)

- **Section 1 — Profile:**
  - Avatar image (placeholder `images/avartar.png`)
  - "Choose Picture" label with camera icon (file upload)
  - First Name — text input, uppercase placeholder
  - Last Name — text input, uppercase placeholder (side by side with First Name)
  - Team Name — text input, uppercase placeholder (side by side with First/Last)
  - Email — `type="email"` input
  - Create a password — `type="password"` input
- **Section 2 — Interests:** 2×3 grid of clickable icons with background images:
  - Programming, Research, Teacher, Tour Guide, Business, Artist
- **Section 3 — Address:**
  - Street Name — text input
  - Street Number — text input (side by side with Street Name)
  - City — text input
  - Country — text input (side by side with City)

### Behaviors (from `main.js` + CSS)

- **Steps init:** `headerTag: "h4"`, `bodyTag: "section"`,
  `transitionEffect: "fade"`, `enableAllSteps: true`
  (UNBLOCKED navigation — all steps can be visited without validation),
  `transitionEffectSpeed: 500`. Labels: next="Continue", previous="Back",
  finish="Finish".
- **No validation gating:** `enableAllSteps: true` and no `onStepChanging`
  validation rules — all steps are freely navigable. This is the opposite
  of Divine (wizard-5) if it had gating; Charm (wizard-6) is an open
  progression wizard.
- **Step indicator dots:** at the bottom; `li.current a` is wider (22px)
  with a 0.5s transition; others are 10px circles.
- **Actions buttons:** space-between layout; Prev (`#f6c2ec` pink) hidden
  via `display:none` when `aria-disabled="true"` (first step); Next/Continue
  (`#aac1f0` blue) with white chevron. On step>0, `.actions-next` class
  adds `justify-content: space-between`.
- **Eye toggles:** None (passwords have no eye toggle — type stays
  "password" from the start).
- **Mock success:** None visible — `onFinished` is not overridden; the
  Finish button would submit the form (which has no action). The wizard is
  a pure demo with no real submit behavior.
- **Responsive:** @media (max-width: 767px) → body bg `none`, wrapper
  `height:auto` block, `#wizard` width auto height auto padding 30px 20px
  radius 0 shadow none, `.form-header` block, avatar 100% centered, grid
  rows block, grid-items 100% width, form-rows block, actions ul
  flex-direction column align-items flex-end, `.steps` display none.
- **No images to copy:** replace avatar placeholder, interest icons, and
  background image with `picsum.photos/seed/charm-N` placeholders or solid
  colors. The zmdi icon font → lucide (ChevronLeft, ChevronRight,
  Camera). Do NOT ship the zmdi font.

## Design tokens

> Extracted from the live preview's `css/style.css` (verified by direct
> fetch, HTTP 200, 9,111 bytes). Preview IS reachable at
> `https://colorlib.com/etc/bwz/colorlib-wizard-6/index.html`.

| Token                  | Value                                      | Notes                                          |
| ---------------------- | ------------------------------------------ | ---------------------------------------------- |
| Background (page)      | Linear gradient: periwinkle → lavender/pink| Soft pastel vertical gradient; `cover` size     |
| Background (card)      | `#ffffff` (pure white)                     | `#wizard` card, 738×554px, centered             |
| Card radius            | `10px`                                     | border-radius 10px                             |
| Card shadow            | `0px 2px 7px 0px rgba(0, 0, 0, 0.1)`       | Soft shadow                                    |
| Card padding           | `71px 93px 0`                              | Top 71px, horizontal 93px, no bottom          |
| Card dimensions        | `738px` × `554px`                          | Width × height                                  |
| Text primary           | `#333333`                                  | Body, inputs, labels                           |
| Text muted/secondary   | `#808080`                                  | Placeholder text                               |
| Accent (Next button)   | `#aac1f0` (light periwinkle blue)          | `Continue` button background                    |
| Accent hover           | `#98add6`                                  | Next button hover                              |
| Accent (Prev button)   | `#f6c2ec` (dusty pink)                     | `Back` button background                        |
| Accent hover (Prev)    | `#dbadd2`                                  | Prev button hover                              |
| Accent (step dots)     | `#f6c2ec` (pink, filled) / `#ffffff` (border)| Current step dot filled pink; inactive hollow white border |
| Input background       | `#f7f7f7` (very light gray)                | `.form-control`                                 |
| Input border           | None (borderless)                          | `.form-control { border: none }`               |
| Input radius           | `23px`                                     | Pill-shaped inputs                              |
| Input height           | `46px`                                     | Standard height                                 |
| Input padding          | `0 25px`                                   | Horizontal padding                              |
| Placeholder            | `#808080`, uppercase                       | UPPERCASE placeholder text                      |
| Font family (body)     | `Poppins`, sans-serif (400 Regular)         | Google Fonts `<link>`                           |
| Font family (labels)   | `Muli` / `Poppins-Medium` (500/700)        | Uppercase labels — use Poppins 500/700 from GF    |
| Font size (body)       | `13px`                                     | Base body text size                             |
| Step dot (inactive)    | 10px × 10px, border `#ffffff`              | Circle, 8px margin-right                        |
| Step dot (current)     | 22px wide, 0.5s transition                 | Rounded rectangle (5.5px radius)                |
| Nav button (Next)      | 146px wide × 46px tall, radius 23px        | `#aac1f0` bg, `#fff` text, uppercase, chevron  |
| Nav button (Prev)      | 146px wide × 46px tall, radius 23px        | `#f6c2ec` bg, `#333` text, uppercase, chevron  |
| Avatar column width    | 33.75%                                     | Left side of `.form-header`                     |
| Form column width      | 66.25%                                     | Right side of `.form-header`                    |
| Grid item              | 134px height, 30% width, 7px radius        | Interest grid tiles                             |
| Form holder dot        | 10px × 10px, `2px solid #f6c2ec`            | Decorative circle before each field, active fills pink |

## Gherkin requirements

### Feature: Charm — 3-Step Profile & Order Wizard

  Scenario: Page loads with section 1 active (Profile)
    Given the user opens the Charm page
    Then a three-step wizard should be visible on a pastel gradient background
    And section 1 "Profile" should be displayed and active
    And sections 2 and 3 should be available but not active
    And the form should contain a profile avatar image area
    And the form should contain a "Choose Picture" upload label with a camera icon
    And the form should contain "First Name", "Last Name", and "Team Name" inputs
    And the form should contain an "Email" input field
    And the form should contain a "Create a password" input field
    And a "Continue" button with a right arrow should be visible

  Scenario: Step 1 profile form layout
    Given the user is on section 1 "Profile"
    Then the avatar and "Choose Picture" label should be on the left (≈33.75% width)
    And the First Name, Last Name, Team Name, Email, and Create Password fields should be on the right (≈66.25% width)
    And First Name, Last Name, and Team Name should be side by side in a row
    And the "Create a password" input should be type "password"
    And each input field should have uppercase placeholder text

  Scenario: Step indicator dots
    Given the user is on any step
    Then a horizontal dot indicator should be visible at the bottom of the card
    And the current step's dot should be 22px wide and filled with the pink accent color
    And the inactive step dots should be 10px circles with a white border

  Scenario: Navigation buttons
    Given the user is on section 1
    Then a "Continue" button (blue `#aac1f0` with white chevron) should be visible
    And a "Back" button should not be visible (disabled on step 1)

  Scenario: Navigate to section 2
    Given the user is on section 1
    When the user clicks "Continue"
    Then section 2 (interest grid) should become active
    And a "Back" button (pink `#f6c2ec`) should be visible
    And the step indicator should advance to highlight step 2

  Scenario: Section 2 interest grid
    Given the user is on section 2
    Then a 2×3 grid of interest icons should be displayed:
    Programming, Research, Teacher, Tour Guide, Business, Artist
    And each grid item should be clickable with a background image

  Scenario: Navigate to section 3
    Given the user is on section 2
    When the user clicks "Continue"
    Then section 3 (address form) should become active
    And the step indicator should advance to highlight step 3

  Scenario: Section 3 address form
    Given the user is on section 3
    Then the form should contain "Street Name" and "Street Number" inputs side by side
    And the form should contain "City" and "Country" inputs side by side
    And a "Finish" button should be visible

  Scenario: Back navigation
    Given the user is on section 2 or 3
    When the user clicks "Back"
    Then the wizard should return to the previous section with a fade transition
    And the step indicator should move back

  Scenario: Unblocked navigation
    Given the user is on any step
    When the user clicks on a step dot in the indicator
    Then the wizard should navigate to that step directly (no validation gating)

  Scenario: Responsive layout on mobile
    Given the user opens the page on a viewport width less than 768px
    Then the background gradient should be replaced with a solid color
    And the wizard card should fit the screen width
    And the avatar should stack above the form fields
    And the grid items should be full-width
    And the step indicator dots should be hidden
    And the form rows should stack vertically

## Verification checklist

- [ ] Live preview reachable at `https://colorlib.com/etc/bwz/colorlib-wizard-6/index.html` (HTTP 200)
- [ ] Pastel gradient background (periwinkle → lavender/pink) covers the full viewport
- [ ] White card (738×554px, 10px radius, soft shadow) is centered
- [ ] Section 1: Profile with avatar upload area + First Name, Last Name, Team Name (side by side) + Email + Create Password
- [ ] Section 2: 2×3 interest grid (Programming, Research, Teacher, Tour Guide, Business, Artist)
- [ ] Section 3: Address form (Street Name | Street Number; City | Country)
- [ ] Step indicator: bottom dot row, current = 22px pink filled, inactive = 10px white-bordered circles
- [ ] "Continue" button: blue `#aac1f0`, white text with right chevron, 146×46px, 23px radius
- [ ] "Back" button: pink `#f6c2ec`, `#333` text with left chevron
- [ ] Back button hidden (display:none) on step 1 via `aria-disabled`
- [ ] Inputs: 46px height, `#f7f7f7` bg, 23px radius, borderless, uppercase placeholders
- [ ] Font: Poppins (Google Fonts), 13px body, `#333` text
- [ ] Unblocked navigation (`enableAllSteps: true`) — no validation gating
- [ ] Password field renders as `type="password"` (no eye toggle)
- [ ] Fade transition between sections (500ms)
- [ ] Responsive: background `none`, card width auto, avatar 100% centered, grid items 100%, step dots hidden
- [ ] Footer links to `https://www.componentdock.com/` ("Component Dock")
- [ ] No references to ColorLib in app code (provenance in spec only)
- [ ] Uses `cn()` from `packages/ui` for class composition
- [ ] Icons from lucide-react (ChevronLeft, ChevronRight, Camera) — no zmdi font
- [ ] Placeholder images via `https://picsum.photos/seed/charm-N/...` (avatar, interest icons, background)
- [ ] 100% test coverage (lines, functions, branches, statements)
