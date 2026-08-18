# Enthrall (ColorLib Wizard 14) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-enthrall`. Recreation name: **Enthrall** (NEW name —
> the ColorLib source keeps its name "Colorlib Wizard 14").

## Source mapping

- **ColorLib item:** "Colorlib Wizard 14" (TEMPLATES.md line 851; section
  "## Bootstrap Wizards (30)" at line 844). The
  `wp/template/colorlib-wizard-14/` slug appears exactly ONCE in
  TEMPLATES.md (no dup rows).
- **Source URL:** https://colorlib.com/wp/template/colorlib-wizard-14/
- **Preview URL — REACHABLE (verified 2026-08-18 by direct fetch):**
  **`https://colorlib.com/etc/bwiz/colorlib-wizard-14/index.html`**
  (HTTP 200, 6,333 bytes, 139 lines, `<title>Sign Up Form</title>`).
  **The naive `https://preview.colorlib.com/theme/colorlib-wizard-14/`
  returns 404** — the whole 30-member wizard family lives under
  `colorlib.com/etc/bwiz/colorlib-wizard-<n>/index.html` (path confirmed
  for wizard-1, -10, -11, -12, -13, -14, -15). Do not redo this lookup.
- **Stylesheets:** `css/style.css` (19,055 B, 547 lines — ALL custom CSS,
  SCSS-compiled, **NO Bootstrap at all** — this member is jQuery-Steps only;
  no bootstrap css/js, no acc-wizard) + zmdi icon font
  (`fonts/material-icon/...min.css` — ONLY glyph used is caret-down
  `\f2cb` on the country select → lucide `ChevronDown`, do NOT ship the
  font). Fonts: local Poppins 300–900 @font-face → **Google Fonts
  `<link>` (400, 700 — the demo only uses weight 400 and bold)**.
- **Scripts:** jQuery, jquery.validate + additional-methods (**ACTIVE** —
  rules below), jquery.steps.min.js (**ACTIVE** — `headerTag: "h3"`,
  `bodyTag: "fieldset"`, `transitionEffect: "fade"`, labels
  Previous/Next/Finish, `titleTemplate '<h3 class="title">#title#</h3>'`,
  `onInit` adds inert class `test` to `.actions`), `js/main.js` (4,996 B,
  154 lines — validate init + steps init + `readURL` file preview; the
  country-select→custom-list rebuild AND the inputfile caption-swap are
  COMMENTED OUT blocks).

## Reference research (done — do not redo)

### Screenshot (`colorlib-free-wizard-14.jpg`, 1200×972 AVIF) + live page

Browsed visually in the browser 2026-08-18 (live page at the /etc/bwiz/
URL; the rendered page matches the screenshot). Visual: LIGHT MINT-GREEN
solid page (`#8be7ac`); centered WHITE card (rounded corners, soft drop
shadow); "BUILD YOUR PROFILE" bold black uppercase centered at top; a
three-segment horizontal TAB BAR below it — "About" solid GREEN with
white text (active), "Account" + "Address" light grey with grey text;
content two columns: LEFT circular avatar placeholder (thin dark user
silhouette) + "CHOOSE PICTURE" small bold uppercase caption, RIGHT three
stacked inputs (First Name / Last Name / Email, light grey borders);
bottom-right solid green "NEXT" button with white text. Aesthetic:
clean, airy, pastel-green (fitness/spotify vibe), flat color + thin
borders. **ZERO photos in the template — no picsum placeholders
needed.** No navbar, no footer content in the source.

### Live-computed confirmations (fetched HTML + CSS + JS, 2026-08-18)

- body: SOLID `#8be7ac`, Poppins, `#222`, 14px/1.6, weight 400.
- .container: 990px, `#fff`, radius 10px, shadow
  `0px 3px 9.5px 0.5px rgba(0,0,0,0.15)`; .main padding 160px 0.
- h2: 24px bold uppercase centered, padding-top 30px — "Build your
  profile". h3 (tab titles): 18px bold `#999999` cursor pointer.
- Tabs (.steps ul li a): width 330px per li, flex space-between row;
  a = block, bg `#f8f8f8`, padding 8px 0, centered; `li:hover a` and
  `.current a` = bg `#1ed760` + h3 `#fff`. (`.content h3` display:none
  — in-body titles hidden.)
- Content: padding 0 100px 0 81px, height 335px; `fieldset.current`
  padding-top 85px; fade transition ~400ms. **Recreation: use
  `min-height: 335px` (height in the source — validation messages could
  clip; min-height avoids it, documented improvement).**
- Inputs: transparent bg, 1px `#ebebeb` border, radius 5px, padding
  15px 25px, 14px; focus border 1px `#1ed760` (no shadow); placeholder
  `#999`; select color `#999` (option `#999999`), pointer cursor,
  z-index 10 (abstraction above the caret overlay).
- Avatar: input 0.1px/opacity 0/absolute/z-index -1; label uppercase
  bold centered pointer; figure 154×154 radius 50% margin 0 auto 6px;
  img 100% radius 50%; caption span `choose picture` (no dedicated CSS
  — inherits label). Preview: `readURL()` FileReader → img src swap.
- Medallions: figure 100×100 radius 50% border 2px `#222` flex-centered;
  img filter `invert(30%) grayscale(100%) brightness(70%) contrast(4)`
  (dark silhouette) / none when checked; checked = border 2px `#1ed760`
  - span color `#1ed760`; span bold; inputs 0x0 offscreen; `input:hover`
    rules DEAD (offscreen target) — put hover on the label; `.form-radio`
    margin-top -25px; `.form-flex` padding 0 140px space-around;
    `.label-radio` uppercase bold centered padding-bottom 70px.
- Country: native select (transparent, z-index 10, pointer, `#999`) +
  `.select-icon` absolute (top 0 right 0 bottom 20px, 70×40, z-index 0,
  flex-centered) with zmdi caret-down 30px `#999`; options "" Country /
  "Viet Nam" / "USA". Click handling falls through to the transparent
  select — recreation: caret `pointer-events-none`.
- Actions: padding 0 100px 0 81px; ul inline-block 100%; Previous
  (li:first) float left — transparent bg, `#999999`, 1px `#ebebeb`
  border, 140×50, radius 5px; `.disabled` display:none (hidden on
  step 1); Next/Finish (li:nth-child(2)/:last-child) float right —
  solid `#1ed760`, `#fff`, 140×50, radius 5px, flex-centered.

### Validation (jquery.validate, ACTIVE — unlike Bewitch's empty config)

- Rules: `first_name` required, `last_name` required, `email` required
  - email. Messages: "Please enter your first name" / "Please enter
    your last name" / email-required is a copy-paste bug ("Please enter
    your first name" → recreation: "Please enter your email") / email
    format "Please enter a valid email address!".
- `onfocusout` validates on blur; `onStepChanging` +
  `onFinishing` return `form.valid()` (`ignore: ":disabled,:hidden"` /
  `":disabled"`) — navigation gated by the CURRENT step (steps 2–3 have
  NO rules → never block). `errorPlacement: element.before(error)` —
  error label BEFORE the field. `input.error` = 1px `#f63726` border +
  margin-bottom 20px; `label.error` = 12px `#f63726`, absolute bottom
  17px left 0 (inside the relative `.form-group`). highlight/unhighlight
  toggle `.form-error` on the group (no CSS — inert) and `.error`/
  `.valid` on the element.
- Finish: `onFinished` → `alert('Sumited')` (sic) → recreation: inline
  success state, no alert, no fake network.

### Family shape (series context)

30-member "Bootstrap Wizards" family (`colorlib-wizard-1` … `-30`):
every member is a wizard skeleton with a DIFFERENT widget stack, layout,
color scheme, and field set. Sibling preps: Conjure (wizard-1, chain
seed — cream/olive, 920px card, dot nav), Banish (wizard-10 — photo bg,
`#333` monochrome, 451px card, progress bar), Dispel (wizard-11 — solid
CORAL page, 630px card, square step tiles, validation-gated), Abjure
(wizard-12 — solid SKY-BLUE page, 665px pill card, hidden step nav,
circular chevron buttons), Bewitch (wizard-13 — PHOTO bg, 1070px card,
Bootstrap ACCORDION panels, orange `#f65300`, ZERO validation).
**Enthrall (wizard-14) is the SIXTH prep and a distinct scheme: SOLID
MINT-GREEN page (`#8be7ac`), 990px WHITE card (10px radius), jQuery-Steps
default FLAT TAB strip navigation, ELECTRIC-GREEN `#1ed760` accent,
REAL validation gated to step 1 (name/email required + email format),
circular AVATAR uploader with live FileReader preview, 100px circular
JOB MEDALLIONS (Designer/Coder/Developer), NATIVE country select with
floating caret, outlined Previous + solid Next/Finish.** Sibling preps
(wizard-2..9, 15..30) will differ again — never assume tokens from
siblings. Read each member's own HTML/CSS/JS.

### Design tokens (live stylesheet + rendered page, verified 2026-08-18)

| Token          | Value                           | Use                                                                                                                             |
| -------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Page bg        | `#8be7ac` (solid mint green)    | NO background image; `.main` padding 160px 0                                                                                    |
| Accent         | `#1ed760` (electric green)      | current/hover tabs, Next/Finish buttons, input focus border, checked medallion border + label, checked icon color               |
| Card           | `#fff`, 990px, radius **10px**  | shadow `0px 3px 9.5px 0.5px rgba(0,0,0,0.15)`; ≤992px: `calc(100% - 40px)`                                                      |
| Tab idle       | `#f8f8f8`                       | flat full-width tab bars (no pill), padding 8px 0; title 18px bold `#999999`                                                    |
| Ink            | `#222`                          | body text, h2, idle medallion border (2px)                                                                                      |
| Muted          | `#999999` / `#999`              | tab titles, select text, caret, placeholders, Previous button text                                                              |
| Line           | `#ebebeb`                       | input borders (1px), Previous button border (1px)                                                                               |
| Error          | `#f63726`                       | invalid input border (1px) + 12px message text; message placed BEFORE the input (errorPlacement)                                |
| Font           | 'Poppins' 400/700               | Google Fonts `<link>` (source declares 300–900; demo uses 400 + bold); base 14px/1.6/400                                        |
| Inputs         | transparent bg, 1px line border | radius 5px, padding 15px 25px; focus: 1px accent; placeholder `#999`; select: `#999` + pointer + z-index 10                     |
| Avatar         | 154×154 circle, radius 50%      | hidden file input (0.1px/opacity 0/z-index -1) + uppercase bold label; live FileReader preview; caption ALWAYS "choose picture" |
| Medallions     | 100×100 circle, radius 50%      | 2px `#222` border idle + dark-silhouette icon (CSS filter); checked: 2px accent + color icon + accent bold label; Coder default |
| Country select | native select + floating caret  | caret: lucide `ChevronDown` 30px `#999`, `pointer-events-none`, right-aligned; options "" Country / Viet Nam / USA              |
| Buttons        | 140×50, radius 5px              | Next/Finish solid accent + `#fff` float right; Previous outlined (`#999999`, 1px line) float left, `display:none` on step 1     |
| Validation     | step-1 only                     | required first/last/email + email format; errors on blur + blocked navigation; steps 2–3 ungated                                |
| Success        | inline message                  | source `alert('Sumited')` (sic); recreation: inline confirmation, no alert                                                      |

Unused in the demo (skip): zmdi icon font (→ lucide), the commented-out
country dropdown rebuild, the commented-out inputfile caption swap, the
`multiple` attribute + `data-multiple-caption` on the file input (dead —
caption swap commented out; keep the input single-file semantics with
`files[0]` preview as in `readURL`), the `.form-error` group class (no
CSS), `.steps .test` (inert), the `input:hover` medallion rules
(offscreen target — hover goes on the label), `h3` base color outside
tabs (only used inside tab bars).

### Icon mapping (lucide — probe ALL with `typeof` before use)

| Source glyph/asset                                | Recreation                                                           |
| ------------------------------------------------- | -------------------------------------------------------------------- |
| zmdi caret-down `\f2cb` (country select)          | lucide `ChevronDown` (30px-ish, `#999`, `pointer-events-none`)       |
| `images/your-picture.png` (avatar silhouette PNG) | lucide `UserRound` (or `User`) inside the 154px circle, neutral grey |
| `images/icon-1.png` — Designer                    | lucide `PenTool` (or `Palette`)                                      |
| `images/icon-2.png` — Coder (default checked)     | lucide `Code`                                                        |
| `images/icon-3.png` — Developer                   | lucide `AppWindow` (or `Braces`)                                     |

Idle icon treatment (mirror the CSS filter → dark silhouette): `text`
slate-800/neutral-800 on the lucide icon; checked: `text-[#1ed760]`.
Medallion circle: `border-2` `#222` idle / `#1ed760` checked; label bold
`#222` idle / `#1ed760` checked. No brand/social icons needed.

### Placeholder media plan

**NO picsum placeholders needed** — the template has zero photographs
(solid `#8be7ac` page, flat card, PNG icons only). Avatar + job icons
recreate as lucide glyphs (see mapping). No image screening required.

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/enthrall` from the simplest existing app
       (`cp -r apps/<simplest> apps/enthrall`), rename package to
       `@free-react-templates/enthrall`, add Poppins 400/700 Google
       Fonts `<link>` in index.html, set `public/CNAME` =
       `enthrall.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json (`npm install --package-lock-only`).
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): App (mint page bg, 990px card, h2
       "Build your profile", tablist with 3 tabs, About current on
       load), Tabs (click switches step + aria-selected flips + green
       class on current, hover class on idle), AboutStep (hidden file
       input + label with "choose picture", picking a file shows
       preview + caption unchanged — mock `URL.createObjectURL`;
       First/Last/Email inputs with placeholders; empty submit/blur →
       red border + messages per field; invalid email → "Please enter a
       valid email address!"; valid input clears error), AccountStep
       (question text, three radios Designer/Coder/Developer with
       aria-checked, Coder default, click swaps selection), AddressStep
       (street/city inputs, native country select with options
       Country/Viet Nam/USA + caret icon), Actions (no Previous on
       step 1; Previous appears on step 2; Next → step 2; Finish on
       step 3), Validation gating (Next blocked while About invalid),
       Success (Finish → inline success message, no alert, no
       navigation), Footer (Component Dock credit).
3. [ ] Page shell: `body` bg `#8be7ac`, `.main` 160px 0, white card
       (`max-w-[990px]`, `rounded-[10px]`, shadow
       `0px 3px 9.5px 0.5px rgba(0,0,0,0.15)`, `mx-auto`), h2 24px
       bold uppercase centered pt-8; responsive ≤992px:
       `calc(100% - 40px)`; ≤480px: form px-8. Use `min-h-[335px]`
       content area (not fixed height — validation messages must not
       clip; documented improvement).
4. [ ] Tab strip: three tabs in a flex row (`justify-between`), each
       `w-[330px]` (`flex-1` on mobile) `bg-[#f8f8f8]` py-2 centered;
       title 18px bold `#999999`; current + hover: `bg-[#1ed760]` +
       white title. Semantics: `role="tablist"`/`role="tab"`/
       `aria-selected`/`aria-controls`; panels
       `role="tabpanel"` + `aria-labelledby`. Fade transition ~400ms
       between steps (CSS animation or keyed mount).
5. [ ] About step: flex row (uploader left, three fields right);
       uploader = visually hidden file input + `<label htmlFor>`
       wrapping a 154px circle (`rounded-full`, `UserRound` icon) +
       "choose picture" uppercase bold caption; `onChange` →
       `URL.createObjectURL(file)` preview into the circle (revoke on
       re-pick); caption text never changes. Fields: First Name / Last
       Name / Email with labels, placeholder, `px-[25px] py-[15px]`
       inputs, 1px `#ebebeb` border, focus border `#1ed760` +
       focus-visible ring (a11y addition, documented).
6. [ ] Validation: first/last required; email required + format.
       Messages: "Please enter your first name" / "Please enter your
       last name" / "Please enter your email" / "Please enter a valid
       email address!". Invalid: 1px `#f63726` border + 12px red
       message associated via `aria-describedby` + `aria-invalid`;
       clear on fix. Validate on blur and before any step change
       (source parity); gate Next/tab navigation while About invalid.
       Steps 2–3 UNGATED (no rules — do NOT add any).
7. [ ] Account step: `.label-radio` "What are you doing ?" (uppercase
       bold centered, pb-[70px] + mt-[-25px] pull-up on the row);
       three 100px medallions in a row (`justify-around`, px-[140px]
       desktop → px-10 mobile): offscreen radios (`sr-only`-style) +
       labels with 2px-border circles, lucide icons (PenTool / Code /
       AppWindow), bold labels; Coder checked by default; checked =
       green border + green icon + green label; hover = border
       highlights (label hover — recreation, source's rule is dead).
       Group as `<fieldset>` with `<legend>` (a11y).
8. [ ] Address step: two two-column rows (`street_name` +
       `street_number`; `city` + `country`); country = native `<select>`
       styled transparent + `#999` + pointer with options
       "" Country / Viet Nam / USA + relative wrapper with absolute
       `ChevronDown` right (`pointer-events-none`, `#999`).
9. [ ] Actions: Previous (outlined: transparent, `#999999`, 1px
       `#ebebeb` border, 140×50, left; hidden on step 1) + Next/Finish
       (solid `#1ed760` white 140×50, right; "Next" steps 1–2,
       "Finish" step 3). Finish submits: inline success message
       replacing the form ("Thanks — your profile was submitted!"),
       no alert, no navigation, no fake network.
10. [ ] Footer: minimal Component Dock credit linking
        https://www.componentdock.com/.
11. [ ] Run `npm run verify:app -- enthrall` (typecheck → lint → vitest
        100% → build) and fix until green. NOTE the coverage-race
        pitfall: if a sibling stream's vitest is running in the shared
        tree it can wipe your `coverage/.tmp`; wait it out and re-run.
12. [ ] Open PR `feat/template-enthrall` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL (the `/etc/bwiz/` one), token
        list (mint page `#8be7ac`, electric green `#1ed760`, white
        990px/10px-radius card, Poppins 400/700, `#f8f8f8` tab bars,
        `#ebebeb` input borders, error `#f63726`, 140×50 buttons), and
        what differs (renamed "Enthrall", Poppins via Google Fonts,
        lucide icons — no zmdi font/PNGs, NO picsum photos needed,
        tab/radio/listbox semantics + focus rings + `aria-invalid`,
        email-required message typo fixed, hover on medallion labels,
        `min-height` content area, no fake network — inline success
        message instead of the source's alert, Component Dock footer).
13. [ ] Bookkeeping after merge: mark TEMPLATES.md line 851 `[x]` + surge
        URL (`https://enthrall.free.componentdock.com`), `npm run
    readme:status`, push.
