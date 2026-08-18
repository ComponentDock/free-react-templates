# Template: Joinup (Registration Signup Form — Split-Screen)

## Purpose

Joinup is a single-page REGISTRATION SIGNUP FORM in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Signup Form 05"
free template (source: https://colorlib.com/wp/template/signup-form-05/), built
under a DIFFERENT name (**Joinup** — "join up", an English phrasal verb meaning
to register/join; single lowercase word, no collision with `apps/`, existing
`openspec/specs/` folders, or `docs/templates/` folders — verified
2026-08-18), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a static Bootstrap 4 page (`<title>Sign Up #5</title>`): a
SPLIT-SCREEN layout — a full-height lifestyle photograph occupying the left
25% of the viewport (`.bg`, `background-size: cover`) and, on the right 75%,
a light blue-grey (`#f6f7fc`) area that flex-centers a WHITE form card
(`.form-block`, max-width 500px, 40px padding, drop shadow
`0 15px 30px 0 rgba(0,0,0,0.2)`). The card holds a centered uppercase "Sign
Up" heading, a 3-field form (Email, Password, Re-type Password), a custom
checkbox whose caption embeds inline "Terms and Conditions" and "Privacy
Policy" links, a full-width orange **Register** submit button, a centered
"or" divider, and three full-width brand-colored social buttons ("Register
with Facebook/Twitter/Google"). The brand accent is a warm ORANGE `#fb771a`
(button + checked checkbox); inputs are borderless light-grey `#efefef`
fields with 4px radius and 54px height; the font is Roboto (300 weight body,
400 headings).

**Preview URL — REACHABLE ONLY under the bootstrap path (verified 2026-08-18
by direct fetch):**
**`https://preview.colorlib.com/theme/bootstrap/signup-form-05/`** (HTTP 200,
12,070 bytes, 89 lines). **The naive
`https://preview.colorlib.com/theme/signup-form-05/` returns 404** — the whole
signup-form family lives under the `/theme/bootstrap/` path. Do not redo this
lookup.

**Source behavior (signature of the page):**

- **No JavaScript behavior at all.** The form posts to `#` (page reload); the
  page's `main.js` only wires Bootstrap accordion collapse handlers — there is
  NO accordion/collapse element on this page, so it is fully inert. jQuery,
  popper and bootstrap.min.js are loaded but unused. The owl.carousel CSS is
  loaded but no carousel exists. The recreation therefore defines its own
  client-side validation + success state (see Requirements) following the
  repo's form conventions — the source has ZERO validation.
- **Split-screen layout.** `.half` is `d-md-flex` (flex from the `md`
  breakpoint up): `.bg` (photo) is 25% width on the LEFT, `.contents` (form
  area, `#f6f7fc`) is 75% on the right. On mobile (≤767.98px) the two stack:
  the photo becomes a full-width 200px band on top and the form area takes
  the full width below. `.half` and `.half .container > .row` are
  `height: 100vh; min-height: 900px` — the split fills the viewport on
  desktop.
- **Card floats ON the grey area only** (unlike sibling "Signup Form 03" →
  Enroll, whose card straddles the photo band with a −300px pull). The card
  is centered by bootstrap grid (`row align-items-center
justify-content-center` + `col-md-12` + `mx-auto`) and is WHITE with a
  pronounced drop shadow — flat corners, no border radius.
- **Custom checkbox with INLINE links.** The consent control uses the classic
  Bootstrap-4 custom checkbox: a 20×20 rounded-4px indicator (`#e6e6e6` idle,
  hover `#ccc`, checked `#fb771a` with a WHITE check glyph from the icomoon
  font, codepoint `\e5ca` — a material "check"; lucide `Check` in the
  recreation). The native input is visually hidden (opacity 0, z-index −1)
  and ships `checked="checked"`. The label caption is a full sentence with
  the "Terms and Conditions" and "Privacy Policy" links INSIDE the label —
  in React, links must NOT be wrapped inside the `<label>` (label-click would
  toggle the checkbox when the user is trying to follow the link); render the
  caption text + links as siblings next to the checkbox control instead.
- **Social button row.** Below the "or" divider, three full-width buttons in
  brand colors: Facebook `#3b5998`, Twitter `#1da1f2`, Google `#ea4335`, each
  with a brand glyph (icomoon icon font → lucide/inline SVG in the
  recreation) + text "Register with Facebook/Twitter/Google". The source
  defines no hover states for these — the recreation adds a sensible
  darken/opacity hover per repo a11y conventions.

**WHAT MAKES JOINUP DISTINCT (signature behaviors):**

1. **The 25/75 split-screen.** Most ColorLib signup forms (e.g. Signup Form
   03 → Enroll) are vertical. Joinup is a true side-by-side split: a tall
   lifestyle photo pinned to the left edge, the form centered on the right —
   and the photo panel collapses to a 200px band on mobile.
2. **Shadowed floating card.** Unlike Enroll's flat borderless card, Joinup's
   card has a pronounced `0 15px 30px rgba(0,0,0,0.2)` drop shadow — it reads
   as a floating panel on the grey canvas.
3. **Consent sentence with inline policy links.** The checkbox caption embeds
   two underlined grey links inline in the sentence ("…you're okay with our
   Terms and Conditions and our Privacy Policy.") — the links are part of the
   copy, not a separate row.
4. **Social login row.** Three brand-colored full-width buttons with icon
   glyphs + "or" divider — the only color in the design besides the orange
   button.
5. **Zero-javascript original.** No validation, no effects, no navigation.
   The recreation must ADD usable behavior (validation, success feedback,
   inert-`#` link handling) without changing the visual design.

## Naming

- NEW name: **Joinup** (single lowercase word; phrasal verb "join up" =
  register/enlist); package `@free-react-templates/joinup`, app folder
  `apps/joinup`, deploy target `https://joinup.free.componentdock.com`
  (`public/CNAME`), homepage `https://joinup.free.componentdock.com`.
- Source keeps its name "Signup Form 05" — the mapping lives ONLY in this
  spec, TEMPLATES.md, and the PR (no ColorLib strings in app files).
- Name check: `joinup` collides with nothing — not in `ls apps/` (497
  folders), not in `openspec/specs/` (879 folders), not in
  `docs/templates/`, no occurrence in TEMPLATES.md, no `feat:` commit on
  origin/main referencing it (verified 2026-08-18).

## Design reference (replication findings)

- **Original:** ColorLib "Signup Form 05" — `<title>Sign Up #5</title>`
  (Bootstrap 4 signup/form family; TEMPLATES.md section "## Signup Forms
  (20)", single row at line 2819 — NOT duplicated in the Registration Forms
  section, verified `grep -c 'wp/template/signup-form-05/'` = 1 on
  2026-08-18).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/bootstrap/signup-form-05/
  (HTTP 200; `css/style.css` 3,616 B / 169 lines of custom SCSS-compiled CSS +
  `css/bootstrap.min.css` 178 KB customized build + `fonts/icomoon/style.css`
  icon font + `css/owl.carousel.min.css` loaded-unused). jQuery 3.3.1 +
  popper + bootstrap.min.js + `main.js` (accordion collapse wiring only) all
  INERT on this page. NOT Tailwind — all interactivity must be recreated
  client-side in React.
- **Screenshot note:** `signup-form-05.jpg` (1200×972, AVIF on the CDN,
  viewed in the browser): split-screen registration page — left ~quarter
  shows a bright lifestyle kitchen interior (white subway-tile backsplash,
  dark wood floating shelves with a terracotta pot, white ceramic jar,
  vintage kitchen scale, wire basket with greenery); right side on a very
  light cool grey shows a centered white card with a subtle drop shadow,
  uppercase "SIGN UP" heading, three light-grey rounded inputs (Email,
  Password, Re-type Password), an orange-checked consent checkbox with
  underlined Terms/Privacy links, a solid orange full-width "Register"
  button, a small "or" divider, and three full-width social buttons (dark
  blue Facebook, light blue Twitter, red Google) with brand glyphs. Clean,
  modern, minimalist, Material-influenced: neutral greys + single orange
  focal point. The live rendered page + parsed stylesheets are the
  authoritative reference.

### Design tokens (extracted from `css/style.css` + `css/bootstrap.min.css`)

- **Brand (orange):** `#fb771a` — Bootstrap-customized `.btn-primary`
  background + border (submit button), checked checkbox indicator. Hover
  `#eb6304` (border `#de5e04`); focus ring `0 0 0 0.2rem rgba(252,139,60,.5)`.
  Checkbox checked-hover `#fb8633`.
- **Ambient / section bg:** form area `#f6f7fc` (`.half .contents`); page
  body `#fff`; left photo panel `.bg` = `images/bg_1.jpg` (kitchen interior),
  `background-size: cover; background-position: center`.
- **Card:** `#fff`, `max-width: 500px`, padding `40px` (25px ≤767.98px),
  `box-shadow: 0 15px 30px 0 rgba(0,0,0,0.2)`; NO border, NO radius (flat
  corners).
- **Inputs (`.form-control`):** `border: none; border-radius: 4px; height:
54px; background: #efefef`; focus in source: bg → `#fff`, border
  `#fdc197`, ring `rgba(251,119,26,.25)` (recreation adds the ring as an
  accessible `focus-visible` treatment; repo a11y rules).
- **Checkbox (`.control`):** 14px label, caption color `#888`, padding-left
  30px; indicator 20×20, radius 4px, bg `#e6e6e6` (hover `#ccc`), checked
  `#fb771a` + white 16px check glyph (icomoon `\e5ca` → lucide `Check`);
  native input visually hidden (opacity 0, z-index −1); ships checked.
- **Typo:** font Roboto everywhere (Google Fonts / CF @font-face, weights 300
  - 400 loaded; body weight 300, `p` color `#b3b3b3`; `h3` heading 400,
    uppercase via `.text-uppercase`, "Sign Up" 20px-ish h3 default). Google
    Fonts `<link>` 300/400/700 in the recreation.
- **Links:** `a` color `#888`, underline, `0.3s all ease` transition
  (Terms-and-Conditions / Privacy-Policy links inside the checkbox caption).
- **Buttons:** Bootstrap `.btn` radius 4px (0.25rem), `py-2` (≈10px block
  padding), full-width (`btn-block`): primary bg `#fb771a` (hover `#eb6304`);
  social — facebook `#3b5998`, twitter `#1da1f2`, google `#ea4335` — white
  text, icon glyph + label, NO source hover (add darken on hover).
- **Divider:** "or" — small centered span, `my-3 d-block`, default grey-ish
  text color (Bootstrap body color `#212529` muted by size).
- **Layout:** `.half` `display:flex` from `md`; `.bg` 25% / `.contents` 75%
  width, `height: 100vh; min-height: 900px`; ≤767.98px — `.bg` 100% × 200px
  band, `.contents` 100%. Form area centers the card with flex + grid
  (`row align-items-center justify-content-center` + `col-md-12` +
  `mx-auto`).

### Section structure (from the live DOM — the ENTIRE page)

1. `div.d-md-flex.half` (viewport-height split):
   - `div.bg` — LEFT 25%: inline `background-image: url('images/bg_1.jpg')`,
     cover; mobile: full-width 200px band on top.
   - `div.contents` — RIGHT 75%, bg `#f6f7fc`, flex-centered:
     - `div.container > div.row.align-items-center.justify-content-center >
div.col-md-12` → `div.form-block.mx-auto` (white card, max-w 500,
       pad 40, shadow):
       - `div.text-center.mb-5` → `h3.text-uppercase` "Sign Up".
       - `form[action="#"][method="post"]`:
         - `div.form-group` → `label[for=username]` "Email" +
           `input.form-control#username[type=text]` placeholder
           "your-email@gmail.com".
         - `div.form-group.last.mb-3` → `label[for=password]` "Password" +
           `input.form-control#password[type=password]` placeholder
           "Your Password".
         - `div.form-group.last.mb-3` → `label[for=re-password]`
           "Re-type Password" + `input.form-control#re-password
[type=password]` placeholder "Re-type Your Password".
         - `div.d-sm-flex.mb-5.align-items-center` →
           `label.control.control--checkbox.mb-0` containing
           `span.caption` "Creating an account means you're okay with our
           [a]Terms and Conditions[/a] and our [a]Privacy Policy[/a]." +
           `input[type=checkbox][checked]` + `div.control__indicator`.
           (Recreation: caption text + links rendered as siblings of the
           checkbox input, NOT wrapped in the label, so clicking a policy
           link does not toggle the checkbox.)
         - `input[type=submit][value="Register"]` —
           `btn.btn-block.py-2.btn-primary` (full-width orange Register).
         - `span.text-center.my-3.d-block` "or".
         - `div` of 3 social links, each `a.btn.btn-block.py-2` +
           `span.icon-*` glyph: `btn-facebook` "Register with Facebook",
           `btn-twitter` "Register with Twitter", `btn-google` "Register
           with Google".
2. No navbar, no hero, no footer, no other sections — the ENTIRE page is the
   split + form card. The repo standard Component Dock footer gets added by
   the implementation (every template's footer MUST link
   https://www.componentdock.com/).

## Requirements

### Requirement: Split-screen layout shell

The system SHALL render a full-viewport split-screen: a photo panel pinned to
the left and a form area on the right, collapsing to a photo band above the
form on mobile.

#### Scenario: Desktop split

- **GIVEN** the Joinup app is rendered on a desktop viewport (≥768px)
- **WHEN** the page loads
- **THEN** the left 25% of the viewport SHALL show a full-height cover
  photograph (lifestyle/kitchen-interior style placeholder)
- **AND** the right 75% SHALL have a `#f6f7fc` background
- **AND** the split SHALL be at least 900px tall (100vh)

#### Scenario: Mobile stacking

- **GIVEN** the viewport is ≤767.98px wide
- **WHEN** the page renders
- **THEN** the photo SHALL become a full-width 200px band at the top
- **AND** the form area SHALL take the full width beneath it
- **AND** the page SHALL have no horizontal overflow

### Requirement: Card + heading

The system SHALL render a white floating card centered in the form area with
an uppercase heading.

#### Scenario: Card appearance

- **GIVEN** the form area is rendered
- **WHEN** the user looks at the center of the right panel
- **THEN** a white card SHALL be centered with max-width 500px, 40px padding
  (25px on mobile), and a `0 15px 30px rgba(0,0,0,0.2)` drop shadow
- **AND** the card SHALL have flat corners (no border radius)

#### Scenario: Heading

- **GIVEN** the card is rendered
- **WHEN** the user reads the top of the card
- **THEN** it SHALL show the heading "Sign Up" in uppercase Roboto,
  centered above the form

### Requirement: Form fields

The system SHALL render three labelled fields: Email, Password, and
Re-type Password.

#### Scenario: Field content

- **GIVEN** the form is rendered
- **WHEN** the user reads the fields
- **THEN** SHALL be an Email text field with placeholder
  "your-email@gmail.com" labelled "Email"
- **AND** SHALL be a Password field (masked input) with placeholder
  "Your Password" labelled "Password"
- **AND** SHALL be a Re-type Password field (masked input) with placeholder
  "Re-type Your Password" labelled "Re-type Password"

#### Scenario: Field styling

- **GIVEN** the fields are rendered
- **WHEN** the user focuses a field
- **THEN** each field SHALL have a borderless `#efefef` background, 4px
  radius, and 54px height
- **AND** SHALL show a visible focus ring (orange-tinted, matching
  `rgba(251,119,26,.25)`) for keyboard users

### Requirement: Consent checkbox with inline policy links

The system SHALL render the consent control with the caption sentence and two
inline underlined links, checked by default.

#### Scenario: Consent control

- **GIVEN** the form is rendered
- **WHEN** the user reads the row below the fields
- **THEN** a custom 20×20 checkbox SHALL show with a grey `#e6e6e6`
  indicator and accept the checked state by default (orange `#fb771a`
  indicator with a white check)
- **AND** the caption SHALL read "Creating an account means you're okay
  with our Terms and Conditions and our Privacy Policy." with "Terms and
  Conditions" and "Privacy Policy" as grey underlined links
- **AND** clicking a policy link SHALL NOT toggle the checkbox (links are
  rendered outside the label element)

### Requirement: Submit button

The system SHALL render a full-width orange "Register" submit button.

#### Scenario: Submit button

- **GIVEN** the form is rendered
- **WHEN** the user looks below the checkbox row
- **THEN** a full-width button SHALL read "Register" with an orange
  `#fb771a` background and white text
- **AND** SHALL darken to `#eb6304` on hover

### Requirement: Divider and social buttons

The system SHALL render an "or" divider and three brand-colored social
registration buttons.

#### Scenario: Social row

- **GIVEN** the form is rendered
- **WHEN** the user looks below the Register button
- **THEN** a small centered "or" divider SHALL separate the primary button
  from the social row
- **AND** SHALL be three full-width buttons: "Register with Facebook"
  (`#3b5998`), "Register with Twitter" (`#1da1f2`), and "Register with
  Google" (`#ea4335`) — white text, each with a brand glyph

#### Scenario: Social link behavior

- **GIVEN** the user clicks a social button
- **WHEN** the click is registered
- **THEN** the app SHALL NOT navigate or reload (source links are inert `#`
  placeholders — render as buttons/links with `preventDefault` and no-op or
  a disabled state per repo conventions)

### Requirement: Form validation and success (recreation addition)

The system SHALL validate the form client-side and show a success state
without a page reload (the source has zero validation — this is added per
repo form conventions).

#### Scenario: Validation errors

- **GIVEN** the user submits an invalid form
- **WHEN** the user clicks Register
- **THEN** SHALL show per-field errors for: missing or malformed email,
  password shorter than 8 characters, mismatching password confirmation,
  and an unchecked consent checkbox
- **AND** the register action SHALL be blocked until the form is valid

#### Scenario: Success state

- **GIVEN** the user submits a valid form
- **WHEN** validation passes
- **THEN** the form SHALL be replaced by an inline success panel with a
  check icon and a confirmation message
- **AND** the app SHALL NOT reload the page or navigate away

### Requirement: Footer

The system SHALL render the repo-standard footer linking Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is fully scrolled
- **WHEN** the user reaches the bottom
- **THEN** a footer SHALL show a "Made with Component Dock" / "More templates
  at Component Dock" line linking https://www.componentdock.com/
- **AND** SHALL NOT reference ColorLib anywhere in the app code

## Verification checklist

- [ ] Spec validates: `npm run spec:validate`
- [ ] TDD: tests written before implementation; `npm run test:coverage` at
      100% lines/functions/branches/statements (per-app gate via
      `scripts/verify-app.sh joinup`)
- [ ] Design tokens from this spec applied in `@theme` (brand `#fb771a`,
      brand-hover `#eb6304`, area `#f6f7fc`, card `#fff`, field `#efefef`,
      caption/link `#888`, para `#b3b3b3`, checkbox-idle `#e6e6e6`,
      facebook `#3b5998`, twitter `#1da1f2`, google `#ea4335`)
- [ ] Roboto (300/400/700) loaded via Google Fonts `<link>` in index.html
- [ ] Section structure + order matches the live DOM 1:1 (photo panel →
      form area → card: heading → fields → consent → Register → "or" →
      social row) — then the repo-standard footer
- [ ] Placeholder image: left photo panel via
      `https://picsum.photos/seed/joinup-1/<w>/<h>` (tall, cover crop, e.g.
      1200×1600); NO assets copied from ColorLib
- [ ] Split-screen: 25/75 flex split ≥900px tall on desktop; ≤768px photo
      becomes a 200px band; no horizontal overflow
- [ ] Card: white, max-w 500px, 40px padding (25px mobile), shadow
      `0 15px 30px rgba(0,0,0,0.2)`, flat corners
- [ ] Inputs: borderless `#efefef`, r4, h-54; orange-tinted focus ring;
      label-click focuses input
- [ ] Consent row: custom checkbox checked by default, `#e6e6e6`→`#fb771a`
      indicator with white `Check` icon; caption sentence with grey
      underlined Terms + Privacy links rendered OUTSIDE the label so link
      clicks don't toggle the checkbox
- [ ] Buttons: full-width Register `#fb771a` (hover `#eb6304`); social
      buttons Facebook/Twitter/Google brand colors with white text and
      brand glyphs, darken on hover, inert clicks (preventDefault, no
      navigation)
- [ ] Icons from lucide-react or inline SVG (`Check`, Facebook, Twitter,
      Chrome/brand glyphs, `CircleCheck` for success). Verify every lucide
      export with the typeof probe; NO fontawesome / icomoon / icon fonts
- [ ] Interactivity client-side only: validation (zod schema: email format,
      password ≥8, match, terms checked), inline success panel, focus
      rings (no jquery/bootstrap/owl)
- [ ] Footer links Component Dock (https://www.componentdock.com/) —
      replaces the original "Colorlib" credit; no colorlib.com /
      preview.colorlib.com strings in any app file
- [ ] TEMPLATES.md: mark the single "Signup Form 05" row (line 2819) `[x]` +
      surge URL + readme:status when shipped
- [ ] Deploy check: merged PR → Deploy to Surge.sh workflow green + surge
      URL (joinup.free.componentdock.com) returns 200
