# Template: Propylaeum (Promo Onboarding Modal)

## Purpose

Propylaeum is a single-page promo/onboarding modal demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Modal 18" free template (source:
https://colorlib.com/wp/template/modal-18/), built under a DIFFERENT name
(**Propylaeum** — the monumental gateway entrance structure before a temple
(e.g. the Propylaea of the Athenian Acropolis), from Greek propylaia; the
eighteenth of the architectural-entrance names for this UI series, after
Portico (Modal 01), Vestibule (Modal 02), Portal (Modal 03), Threshold
(Modal 04), Doorway (Modal 05), Gateway (Modal 06), Lobby (Modal 07), Narthex
(Modal 08), Mezzanine (Modal 09), Ingress (Modal 10), Vestry (Modal 11),
Postern (Modal 12), Rotunda (Modal 13), Concourse (Modal 14), Promenade
(Modal 15), Peristyle (Modal 16), and Parvis (Modal 17) — a propylaeum is the
grand portal one passes through, fitting for this series of entry/transition
dialogs and for this demo's "come in and get the app" onboarding message —
per the monorepo naming mandate: never reuse the ColorLib source name), with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a minimal, centered demo page: a full-viewport light launch
section (`.content` height `100vh`) with a centered heading "Modal #8" and a
**gray (`#6c757d`) button** ("Launch modal", `px-4 py-3`, `border-radius: 4px`)
that opens a centered **medium** Bootstrap modal (`modal-dialog-centered` with
`modal-md` — which has NO rule in this bundle's Bootstrap 4.3.1, so the
dialog falls back to the default **max-width 500px**, like Parvis/Modal 17)
whose dialog is a **7px-ROUNDED WHITE card** (`background-color: #fff`,
`border-radius: 7px`, `overflow: hidden`) with the heavy drop shadow
(`0 10px 50px -10px rgba(0,0,0,0.9)`) on the standard dark blurred Bootstrap
backdrop. It is an **"Introducing Work from Anywhere" promo dialog** stacked
in a SINGLE BLOCK column (`.d-block.main-content` — image ON TOP, text below;
unlike Peristyle/Modal 16's side-by-side 50/50 layout):

1. a full-width flat-vector **illustration band** (`images/undraw_updated_rr85.svg`,
   an undraw-style "work from anywhere" scene, rendered with an inline
   light-cyan `background-color: #b2fcff` — the signature colored strip of
   this demo), then
2. the text block (`.content-text.p-4`): heading **"Introducing Work from
   Anywhere"** (Poppins, weight 900, color `#000`, 22px), a small gray
   intro paragraph (`#777`, 14px), and a right-aligned action row
   (`div.d-flex > div.ml-auto`) with a plain **"No thanks"** text link
   (`.btn.btn-link` — royal blue `#3e64ff`, weight 400, no underline,
   dismisses the modal) and a **royal-blue "Get the app"** submit
   (`.btn.btn-primary.px-4` — **`#3e64ff`**, white text, radius 4px, 10px
   vertical padding).

Distinguishing features vs the rest of the Bootstrap Modal family:

- **ROYAL-BLUE accent family `#3e64ff`** — this bundle's Bootstrap is
  customized so `.btn-primary` AND `.btn-link` are `#3e64ff` blue — NOT the
  burnt orange `#ed5107` of Peristyle/Modal 16 and Parvis/Modal 17, and NOT
  the rose `#fb8691` of Portico/Modal 01. Blue is the ONLY accent color on
  the page (the links and the primary button share it).
- **500px dialog** — `modal-md` has no CSS rule → default 500px (same as
  Parvis; wider than Portico's 450px, narrower than Peristyle's 800px).
- **WHITE 7px-rounded card** — `modal-body` is `#fff` with `border-radius:
7px` (NOT the square `#efefef` card of Modal 17, which had the 4px
  `#ed5107` top bar). Modal 18 has NO top bar, NO square corners — the
  visible card is clean white and softly rounded. (`modal-content.rounded-0`
  forces radius 0 on the TRANSPARENT content wrapper only; the visible white
  body rule wins the eye.)
- **Illustration band with cyan backdrop `#b2fcff`** — the signature visual
  of this demo: a flat vector illustration (dark-haired woman on a purple
  rocky landscape under a cyan gradient sky, floating checkmark speech
  bubbles, dark-blue top strip with a checkmark) rendered at full dialog
  width with an inline light-cyan background on the `<img>` itself.
- **STACKED block layout** — `.d-block.main-content`: image ABOVE text in
  ONE column (the `.promo-img { flex: 0 0 50% }` rule exists in this
  bundle's style.css but is DEAD CODE here — no d-flex on main-content).
- **No header, no close ×, no icons, no form** — the only dismiss paths are
  the "No thanks" link, the backdrop click, and Escape. `main.js` auto-open
  is commented out — the modal opens ONLY via the launch button's data-API.
- **Fonts: page ROBOTO, modal POPPINS** — cf-fonts @font-face blocks load
  Roboto (300/400) for the body AND Poppins (300/400/500/900); the custom
  `.modal { font-family: "Poppins", sans-serif }` rule makes ALL dialog text
  render in Poppins while the launch page stays Roboto.
- **Dead code in the source bundle (do NOT recreate):** `.form-control` /
  `.custom-select` shadow rules (no form present), `.modal-body h2` 18px
  rule (no h2), `.modal .cancel` gray rule (Peristyle leftover), `.logo a
img` / `.logo img` width rules (no logo).

The whole template is ONE interactive surface — the launch button and the
promo modal. Propylaeum recreates the structure 1:1 with matching layout,
tokens, typography, and content kinds (no ColorLib assets copied; the intro
paragraph paraphrased as the same kind of two-sentence filler line; the
illustration replaced by a picsum placeholder under the same cyan band).

> NAMING NOTE: the ColorLib source name `modal-18` / "Modal 18" is FORBIDDEN
> as the app name. **Propylaeum** is the new, original name — single
> lowercase word, no collision with `apps/`, `openspec/specs/`,
> `docs/templates/` or TEMPLATES.md (verified 2026-08-16). Source slug +
> preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Modal 18". Listed in TEMPLATES.md under **Bootstrap
  Modals (20)** (section header line 798; row at line 817). Free
  promo/onboarding-modal component template. The `modal-18` slug appears
  exactly ONCE in TEMPLATES.md (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-16):** the default
  preview URL `https://preview.colorlib.com/theme/modal-18/` returns 404;
  the ColorLib template page reveals the REAL preview URL:
  `https://preview.colorlib.com/theme/bootstrap/modal-18/` (HTTP 200, 18.2KB
  HTML — the whole Bootstrap UI series lives under the `/theme/bootstrap/`
  prefix, same as Parvis/Modal 17). Stylesheets: `css/style.css` (2.9KB —
  the demo's custom styles, token source), `css/bootstrap.min.css` (178KB —
  Bootstrap 4.3.1 CUSTOMIZED: `.btn-primary{color:#fff;background-color:#3e64ff;border-color:#3e64ff}`,
  `.btn-link{font-weight:400;color:#3e64ff;text-decoration:none}`,
  `.btn-secondary` standard `#6c757d`), `fonts/icomoon/style.css` (icon font
  — linked but NOT used in the body), cf-fonts @font-face blocks for Roboto
  (300/400) AND Poppins (300/400/500/900). Structure, copy, and tokens
  below are from the live DOM + both stylesheets. Screenshot
  (`modal-18.jpg`, 1200×972, AVIF, browser-verified 2026-08-16) shows the
  modal OPEN over a light-gray page: a white rounded card with the flat
  illustration band on top (dark-haired woman on purple rock under a cyan
  gradient sky, checkmark speech bubbles, dark-blue strip with a checkmark
  at the top) and, below it, the bold dark heading "Introducing Work from
  Anywhere", a small gray paragraph, and the right-aligned row of a muted
  blue "No thanks" text link and a solid royal-blue rectangular "Get the
  app" button with white text. (The screenshot's browser chrome reads
  "preview.carrd.co" — an artifact of ColorLib's capture tool; the page
  content matches the modal-18 DOM exactly.)
- **Visual design (screenshot + live DOM):** clean and minimal. Light page,
  single centered gray CTA, and one floating white softly-rounded card on
  the dark backdrop. The ONLY accent color is the royal blue **#3e64ff**
  (primary button fill + the "No thanks" link), with the light-cyan
  **#b2fcff** illustration band as the second signature color. Sans-serif
  throughout (Poppins in the dialog, Roboto on the page). No photography —
  the illustration is a flat undraw-style vector.
- **Section order (1:1 from live DOM):**
  1. **Launch section** — `div.container.content` (height `100vh` via
     `.content`; recreate with a full-viewport flex container `min-h-screen`)
     → `div.row.align-items-center.content` → `div.col-12.text-center`:
     - `h3.mb-4` — "Modal #8" (light heading; recreation uses the new brand
       name "Propylaeum").
     - `button.btn.btn-secondary.px-4.py-3` — "Launch modal"
       (`data-toggle="modal" data-target="#exampleModalCenter"`; solid gray
       `#6c757d` fill, white text, radius 4px).
  2. **Modal dialog** — `div.modal.fade#exampleModalCenter` (tabindex="-1",
     `role="dialog"`, `aria-labelledby="exampleModalCenterTitle"`,
     `aria-hidden="true"`; Bootstrap hides it with `display:none` until the
     launch button toggles it; custom: `font-family: Poppins`,
     `border-radius: 7px`, `overflow: hidden`, bg transparent; dark
     backdrop) → `div.modal-dialog.modal-md.modal-dialog-centered` (**NO
     `.modal-md` rule in Bootstrap 4.3.1 → falls back to the default
     max-width 500px**; vertically centered) → `div.modal-content.rounded-0`
     (bg transparent, border none, radius 0 via `!important` — invisible
     wrapper, corners never seen) → `div.modal-body.py-0` (custom: bg
     **#fff**, `border-radius: 7px`, `overflow: hidden`, padding-left/right
     0, `box-shadow: 0 10px 50px -10px rgba(0,0,0,0.9)`):
     - `div.d-block.main-content` (BLOCK column — image stacked ABOVE text):
       - `img src="images/undraw_updated_rr85.svg" alt="Image" class="img-fluid"`
         with inline `style="background-color: #b2fcff;"` (full-width flat
         vector illustration; in the recreation use a picsum placeholder
         <img> carrying the same `#b2fcff` background band so the colored
         strip reads the same; NO ColorLib asset may be copied).
       - `div.content-text.p-4`:
         - `h3.mb-4` — "Introducing Work from Anywhere" (Poppins,
           `font-weight: 900`, color **#000**, font-size **22px** — the
           `.modal-body h3` rule).
         - `p.mb-4` — "All their equipment and instruments are alive. The
           sky was this is cloudless and of a deep dark blue. A shining
           crescent far beneath the flying vessel." (color **#777**,
           font-size 14px; ColorLib generic filler — paraphrase as the same
           kind of two-line intro).
         - `div.d-flex` → `div.ml-auto` (right-aligned action row):
           - `a.btn.btn-link` "No thanks" (`data-dismiss="modal"`; font
             weight 400, color **#3e64ff**, NO underline — the dismiss link).
           - `a.btn.btn-primary.px-4` "Get the app" (royal blue **#3e64ff**
             fill, white text, radius 4px, 10px vertical padding via the
             custom `.modal .btn-primary` padding rule, `px-4` horizontal).
  3. **Footer** — the original has NO footer; per monorepo convention add a
     minimal attribution footer linking `https://www.componentdock.com/`
     ("Component Dock") so every shipped template carries the required link.
- **Design tokens:**
  - Accent royal blue **#3e64ff** (theme-color) — `.btn-primary` fill +
    border (white text) AND `.btn-link` text color; the ONLY accent on the
    page (the "Get the app" button and the "No thanks" link share it).
  - Signature cyan band **#b2fcff** — inline background-color on the
    illustration `<img>` (the colored strip behind the flat vector art).
  - Launch CTA gray **#6c757d** (`.btn-secondary` fill + border, white
    text).
  - Backgrounds: page **#fff** (default body/section); modal-body **#fff**
    (white card — NOT `#efefef` like Parvis); modal backdrop `#000` with
    Bootstrap fade (`rgba(0,0,0,0.5)`); illustration band `#b2fcff`.
  - Shadows: modal card `0 10px 50px -10px rgba(0,0,0,0.9)` (heavy, like the
    whole family).
  - Text: modal h3 **#000** (22px, weight **900**, Poppins); modal p **#777**
    (14px); global p **#b3b3b3** (weight 300 — the base paragraph color on
    the launch page); `.btn-link` **#3e64ff** (weight 400, no underline).
  - Font: **Poppins** (300/400/500/900 loaded via cf-fonts) for ALL modal
    text (custom `.modal { font-family: "Poppins", sans-serif }`); **Roboto**
    (300/400 loaded) for the page body/headings. Recreation: Google Fonts
    `<link>`s for BOTH Roboto (300/400) and Poppins (300/400/500/900) in
    index.html; body stack Roboto, dialog stack Poppins.
  - Buttons: `.btn` base radius **4px** (all buttons — NOT a pill), border
    none; launch `px-4 py-3` (≈48px tall); "Get the app" `px-4` + 10px
    vertical padding ≈ 42px tall; "No thanks" is an underlined-free text
    link (weight 400), NOT a button fill.
  - Modal: dialog max-width **500px** (default — `modal-md` has no rule in
    this bundle); visible card radius **7px** (white `modal-body`), content
    wrapper radius 0 (transparent, invisible); card shadow
    `0 10px 50px -10px rgba(0,0,0,0.9)`; body padding `p-4` (1.5rem) around
    the text block.
  - Rhythm: single centered column `col-12`, `.content` = full viewport
    height (recreate with `min-h-screen` flex centering, no JS resize
    needed). NO header/close button/icon circle — the modal body is
    illustration band + text + action row.
- **Recreation approach:** light full-viewport centered page (h3
  "Propylaeum" + gray "Launch modal" button); the modal is a state-driven
  overlay (open on button click, close on "No thanks"/backdrop/Escape) — no
  Bootstrap dependency: `role="dialog"` `aria-modal="true"` semantics, dark
  backdrop fade, centered 500px WHITE card with 7px radius and the source's
  heavy shadow. Content column: full-width illustration band — a picsum
  placeholder `<img>` (e.g. `https://picsum.photos/seed/propylaeum-1/800/450`,
  subject suggesting work/travel/laptop) with the source's light-cyan
  `#b2fcff` background band on the image element — then the p-4 text block:
  "Introducing Work from Anywhere" (Poppins 900, #000, 22px), the gray
  #777 14px intro line (paraphrased), and the right-aligned action row:
  royal-blue `#3e64ff` "Get the app" button + "No thanks" link (same blue,
  no underline) that closes the modal. Then the mandatory minimal Component
  Dock footer. Icons: NONE (the source has no glyphs — skip lucide
  entirely). Fonts: Google Fonts Roboto (300/400) + Poppins (300/400/500/900)
  via `<link>` in index.html. IMPORTANT: the accent is ROYAL BLUE `#3e64ff`
  — do NOT reuse Parvis/Modal 17's burnt orange `#ed5107`; and the card is
  WHITE with 7px radius — NOT Parvis's square `#efefef` with the orange top
  bar.

## Requirements

### Requirement: Launch page

The system SHALL render a full-viewport centered page with a heading and a
launch button.

#### Scenario: Centered launch section

- **GIVEN** the Propylaeum app is rendered
- **WHEN** the page loads
- **THEN** a white full-viewport section SHALL show a centered heading
  ("Propylaeum" — the new brand name in place of "Modal #8")
- **AND** it SHALL show a gray (`#6c757d`) button labeled "Launch modal"
  with 4px radius and `px-4 py-3` proportions
- **AND** the button SHALL have white text

### Requirement: Modal dialog

The system SHALL open a centered modal dialog on launch and dismiss it on
close.

#### Scenario: Open modal

- **GIVEN** the Propylaeum app is rendered
- **WHEN** the user clicks the launch button
- **THEN** a dark backdrop SHALL fade in over the page
- **AND** a centered dialog (max-width ~500px) SHALL appear with `role="dialog"`
  and `aria-modal="true"` semantics
- **AND** the dialog SHALL be a WHITE (`#fff`) card with 7px-rounded corners
  topped by an illustration band (unlike Parvis/Modal 17's square `#efefef`
  card with the 4px orange top bar — NO top bar in this demo)
- **AND** the card SHALL carry the source's shadow
  (`0 10px 50px -10px rgba(0,0,0,0.9)`)

#### Scenario: Close modal

- **WHEN** the modal is open
- **THEN** clicking the backdrop, pressing Escape, or clicking "No thanks"
  SHALL dismiss the modal
- **AND** focus SHALL be moved into the dialog on open and restored to the
  launch button on close
- **AND** the dialog SHALL have NO close × button (matching the source — no
  header, no glyph)

### Requirement: Modal content

The system SHALL render the promotion dialog contents.

#### Scenario: Illustration band

- **GIVEN** the modal is open
- **THEN** the dialog SHALL show a full-width image band at the top
- **AND** the band SHALL carry the light-cyan `#b2fcff` background (the
  source's inline `background-color` on the `<img>` — recreated with a
  picsum placeholder image on the same colored band, never the ColorLib
  asset)
- **AND** the image SHALL be a decorative `alt="Image"`-equivalent
  (empty-ish alt or a descriptive paraphrase — the source alt is "Image")

#### Scenario: Promo heading and copy

- **WHEN** the modal is open
- **THEN** beneath the illustration band it SHALL show the heading
  "Introducing Work from Anywhere" in Poppins weight 900, black (#000),
  ~22px
- **AND** it SHALL show a small gray (#777, 14px) intro paragraph beneath it
  (paraphrased two-sentence filler of the same kind)

#### Scenario: Action row

- **WHEN** the modal is open
- **THEN** a right-aligned row SHALL show a "No thanks" link (royal blue
  `#3e64ff`, weight 400, NO underline) that dismisses the modal
- **AND** it SHALL show a royal-blue (`#3e64ff`) "Get the app" button with
  white text, 4px radius, and `px-4` + 10px vertical padding proportions
  (≈42px tall) on the same row to its right

### Requirement: Form behavior

There is no form in the source. The system SHALL keep the "Get the app" CTA
inert (a plain `<a href="#">` in the source that does nothing on click) — a
client-side demo, matching the rest of the family.

#### Scenario: Get the app link

- **GIVEN** the modal is open
- **WHEN** the user activates "Get the app"
- **THEN** the app SHALL NOT navigate (client-side demo — keep the source's
  inert behavior or show a benign success state, matching the rest of the
  family)

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Propylaeum app is rendered
- **WHEN** the footer displays
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded as
  "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text)

### Requirement: Page composition

The system SHALL compose the page with a main landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Propylaeum app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the launch section in the main landmark and
  the Component Dock footer in the contentinfo landmark
- **AND** the document title SHALL be "Propylaeum — Promo Modal"

## Verification checklist

- [ ] `openspec/specs/template-propylaeum/spec.md` exists on main with the
      full section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/propylaeum/tasks.md` exists on main with design notes
      and the implementation task outline.
- [ ] Fidelity: structure matches the Modal 18 preview DOM 1:1
      (full-viewport centered launch section → gray "Launch modal" CTA →
      centered 500px WHITE 7px-rounded card: `#b2fcff` illustration band →
      "Introducing Work from Anywhere" / intro line → right-aligned "No
      thanks" link + royal-blue "Get the app" button) → minimal Component
      Dock footer. NO close button, NO header, NO icons, NO form.
- [ ] Tokens used in the app: royal blue `#3e64ff` (primary + link — NOT the
      burnt orange `#ed5107` of Parvis/Modal 17), cyan band `#b2fcff`,
      launch gray `#6c757d`, card `#fff`, h3 `#000` (22px, weight 900),
      modal p `#777` (14px), global p `#b3b3b3` w300, card shadow
      `0 10px 50px -10px rgba(0,0,0,0.9)`; fonts: Poppins
      (300/400/500/900) for ALL dialog text + Roboto (300/400) for the page,
      both via Google Fonts `<link>`s; all buttons 4px radius (NO pill).
- [ ] Image: picsum placeholder under the `#b2fcff` band (deterministic seed
      e.g. `propylaeum-1`), subject suggesting work/travel/laptop; NO
      ColorLib asset.
- [ ] No ColorLib references in `apps/propylaeum` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] No lucide icons (the source uses no glyphs).
- [ ] Implementer gate: `scripts/verify-app.sh propylaeum` (typecheck + lint + 100% coverage tests + build) and `npm run spec:validate`.
