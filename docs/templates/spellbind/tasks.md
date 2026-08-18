# Spellbind (ColorLib Wizard 15) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-spellbind`. Recreation name: **Spellbind** (NEW
> name — the ColorLib source keeps its name "Colorlib Wizard 15").

## Source mapping

- **ColorLib item:** "Colorlib Wizard 15" (TEMPLATES.md line 852; section
  "## Bootstrap Wizards (30)" at line 844). The
  `wp/template/colorlib-wizard-15/` slug appears exactly ONCE in
  TEMPLATES.md (no dup rows). NOTE: TEMPLATES.md sorts wizard rows as
  STRINGS (1, 10, 11, 12, 13, 14, 15, 16 … 19, 2, 20 …) — wizard-2..9
  rows sort at lines 857–875, AFTER 15. So Spellbind (15) was the first
  unprepped item when this prep ran.
- **Source URL:** https://colorlib.com/wp/template/colorlib-wizard-15/
- **Preview URL — REACHABLE (verified 2026-08-18 by direct fetch):**
  **`https://colorlib.com/etc/bwiz/colorlib-wizard-15/index.html`**
  (HTTP 200, 10,076 bytes, 181 lines, `<title>Sign Up Form</title>`).
  **The naive `https://preview.colorlib.com/theme/colorlib-wizard-15/`
  returns 404** — the whole 30-member wizard family lives under
  `colorlib.com/etc/bwiz/colorlib-wizard-<n>/index.html` (path confirmed
  for wizard-1, -10, -11, -12, -13, -14, -15). Do not redo this lookup.
- **Stylesheets:** `css/style.css` (15,014 B, 567 lines — ALL custom CSS,
  SCSS-compiled, **NO Bootstrap at all** — jQuery-Steps + noUiSlider only)
  - zmdi icon font (`fonts/material-icon/...min.css` — visible glyphs:
    alert-circle `\f135` (validation), search `\f21a`; replace ALL with
    lucide, do NOT ship the font). Fonts: local **Roboto Slab 300/400/700**
    @font-face → **Google Fonts `<link>` (400, 700 — the demo only uses
    weight 400 body and bold)**.
- **Scripts:** jQuery, jquery.validate + additional-methods (**ACTIVE but
  MINIMAL** — one rule, blank messages), jquery.steps.min.js (**ACTIVE** —
  `headerTag: "h3"`, `bodyTag: "fieldset"`, `transitionEffect: "fade"`,
  **`stepsOrientation: "vertical"`**, `titleTemplate: '<div
class="title"><span class="step-number">#index#</span><span
class="step-text">#title#</span></div>'`, labels Previous/Next/Finish),
  minimalist-picker dobpicker.js (**ACTIVE**), nouislider.min.js +
  wNumb.js (**ACTIVE**), `js/main.js` (3,931 B — validate init + steps
  init + the inert `.footer-N` append hack + dobPicker init + noUiSlider
  init).

## Reference research (done — do not redo)

### Screenshot (`colorlib-free-wizard-15.jpg`, 1200×972) + live page

Browsed visually in the browser 2026-08-18. Visual: the browser window
shows a clean, light-looking page — the WHITE 1400px container fills the
viewport (the CSS `body` is dark `#222`; only the page edges would show
it). LEFT: a VERTICAL STEPPER — solid BLUE circle "1" beside bold
"Personal info" (active), grey circles "2 Connect Bank Account" and
"3 Set Financial Goals", thin faint vertical line connecting the
circles. RIGHT: "Personal information" heading + subtitle; First/Last
inputs side-by-side; Email + example hint; Phone; Birth Date (three
boxes captioned MM / DD / YYYY); SSN; bottom-right a SOLID BLUE
rectangular "NEXT" button with white text. Inputs white with subtle
light-grey borders. Aesthetic: professional, secure, uncluttered
FINTECH/BANKING onboarding. **The only photos in the whole template are
the 8 tiny bank-logo cards on step 2 — recreated as text/lucide cards;
NO picsum placeholders needed.**

### Live-computed confirmations (fetched HTML + CSS + JS, 2026-08-18)

- body: SOLID `#222` (dark charcoal), Roboto Slab, `#222`, 14px/1.6,
  weight 400; `.main` padding 50px 0, z-index 99.
- .container: **1400px**, `#fff`, `margin: 0 auto`, NO radius, NO
  shadow; ≤1024px: `calc(100% - 40px)` / max-width 100%.
- Layout (desktop): `.vertical .steps` float LEFT width **310px**;
  `.vertical .content` + `.vertical .actions` float RIGHT width
  **1090px**; ≤1024px: all float none, width 100%.
- Timeline: `ul` flex column, padding 60px 0 0 40px; li padding-bottom
  40px, z-index 99; `ul:after` = connector 2px × 180px `#ebebeb`, left
  64px, top 50%, translateY(-50%), z-index 9 (behind the circles);
  40×40 circles (`border-radius: 50%`, bg `#ebebeb`, number `#999`,
  **border 5px solid #fff**, bold, margin-right 15px) + bold title
  `#999`; `.current .title .step-number` bg **`#4966b1`** + number
  `#fff`; `.current .title .step-text` `#4966b1`.
- Content: bg `#f8f8f8`, height 800px (900 ≤992px, 1050 ≤480px);
  **recreation: `min-height` (fixed heights + validation icon could
  clip — documented improvement)**; fieldset padding 45px left / 55px
  right / 45px top; `.content h3` display none (in-body step titles
  hidden — the timeline is the heading layer); per-step visible `h2`
  30px + `p.desc` `#555` margin-bottom 40px.
- Step 1 fields: width 680px; `.form-label` 16px block mb 10px;
  input = 100%, 1px `#ebebeb`, height 50px, padding 0 20px, `#222`
  bold 14px; `.text-input` = 12px `#999` block mt 5px, inner `<span>`
  `#222` bold; `.form-flex` (First/Last) margin 0 -10px, children 50%
  padding 0 10px; `.form-group`/`.form-date` mb 18px relative;
  `.form-date-group` flex (1px transparent border, radius 5px);
  `.form-date-item` 100px wide, mr 10px, overflow hidden; selects =
  native, 1px `#ebebeb`, height 50px, padding 0 20px, z-index 10,
  pointer, **bg #fff**, `#222` bold, leading empty option.
- dobPicker: days 1..31 numeric; months **Jan, Feb, Mar, Apr, May, Jun,
  Jul, Aug, Sep, Octr (sic — use "Oct"), Nov, Dec**; years
  currentYear … currentYear − 120 DESCENDING (maximumAge 120,
  minimumAge 0); captions "MM"/"DD"/"YYYY" are `.text-input` spans
  below each select.
- Step 2: `#find_bank` 680px pad 0 55px, placeholder weight 400;
  `.submit` 150px bg `#666` `#fff` weight 400 hover `#4d4d4d`;
  `.form-icon` absolute top 12px left 20px 18px `#999` (zmdi search →
  lucide `Search`); `.form-find` flex + padding-bottom 70px +
  border-bottom 1px `#ebebeb`; `.choose-bank-desc` `#666` padding
  30px 0 35px; 8 tiles: input 0×0 offscreen (`width:0;height:0;
position:absolute;left:-9999px`), label 223×133 transparent bg 1px
  transparent border, img 100%/100%; `:checked + label` border 1px
  solid `#4966b1`; **dead hover rule** (`.form-radio-flex input:hover`
  targets the 0×0 input) → hover on the label; margins 0 -15px / items
  padding 0 15px mb 25px; bank_1 checked by default.
- Step 3: `#slider-margin` track 9px `#e8e8e8` radius 0 margin-top
  110px; `.noUi-connect` `#4966b1`; handle 15×30 `#e8e8e8` + 1px
  `#4966b1` border, radius 0, top −12; tooltip bottom 33px transparent
  16px `#4966b1`; pips "$100"/"$2000" 16px `#666` top −50 (`:before`
  content '$'); `.your-money` 16px `#222` padding-top 62px; `.money`
  28px bold. Config: start 1100, step 100, range 100–2000,
  connect [true,false], tooltips [true], pips values [100, 2000]
  density 4, wNumb `$ `prefix 0 decimals **no thousands separator**.
Update handler writes handle 0 →`#value-lower`; `#value-upper`
  NEVER written (single handle) — ONE readout only.
- Actions: bg `#f8f8f8`, padding-bottom 90px; ul padding 45/55px;
  Previous (li:first) float left — bg `#e8e8e8` color `#999` 140×50
  flex-centered; `.disabled` display none (hidden on step 1);
  Next/Finish float right — bg `#4966b1` `#fff` 140×50; ≤480px buttons
  100px.
- Footer hack: main.js appends `<div class="footer footer-N">` to
  `.container` and class-swaps on each step change — **NO `.footer` CSS
  exists (grep count 0)** → inert; skip it in the recreation.

### Validation (jquery.validate, ACTIVE but minimal)

- Rules: ONLY `email: { email: true }`. NO required rules. NO rules on
  name/phone/birth/SSN/bank/slider.
- Messages: `jQuery.extend(jQuery.validator.messages, {…})` blanks ALL
  defaults. `errorPlacement: element.before(error)`; `onfocusout`
  validates the blurred field. `label.error` = absolute top 0 right 0 +
  `:after` zmdi alert-circle `\f135` (13px `#f63726`, right 20px, top
  50px); `input.error` = 1px `#f63726` border. **No message text is ever
  shown** — the error UI is border + red icon. Recreation: red border +
  lucide `AlertCircle` icon at the field's top-right + `aria-invalid` +
  `aria-describedby` text (a11y improvement, documented).
- Steps navigation: `onStepChanging` / `onFinishing` return
  `form.valid()` (`ignore: ":disabled,:hidden"` / `":disabled"`) —
  navigation gated by email validity on every step change.
- Finish: `onFinished` → `alert('Submited')` (sic — "Submited", another
  spelling bug after Enthrall's "Sumited") → recreation: inline success,
  no alert, no fake network.

### Family shape (series context)

30-member "Bootstrap Wizards" family (`colorlib-wizard-1` … `-30`):
every member is a wizard skeleton with a DIFFERENT widget stack, layout,
color scheme, and field set. Sibling preps: Conjure (wizard-1, chain
seed — cream/olive, 920px card, dot nav), Banish (wizard-10 — photo bg,
`#333` monochrome, progress bar), Dispel (wizard-11 — solid coral page,
square step tiles), Abjure (wizard-12 — solid sky-blue page, hidden
step nav, circular chevron buttons), Bewitch (wizard-13 — photo bg,
accordion panels, orange `#f65300`, zero validation), Enthrall
(wizard-14 — mint-green page, 990px card, flat tab strip, electric
green `#1ed760`). **Spellbind (wizard-15) is the SEVENTH prep and a
distinct scheme: DARK `#222` page, WIDE 1400px WHITE container,
VERTICAL numbered-circle timeline, MEDIUM BLUE `#4966b1` accent,
banking content (personal info + bank search/tiles + money slider),
near-zero validation (email format only, blank messages).** Sibling
preps (wizard-16..19, 2..9, 20..30) will differ again — never assume
tokens from siblings. Read each member's own HTML/CSS/JS.

### Design tokens (live stylesheet + rendered page, verified 2026-08-18)

| Token         | Value                               | Use                                                                                                                                   |
| ------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Page bg       | `#222` (dark charcoal)              | NO background image; `.main` padding 50px 0                                                                                           |
| Container     | `#fff`, 1400px                      | centered, NO radius/shadow; ≤1024px: `calc(100% - 40px)`                                                                              |
| Accent        | `#4966b1` (medium blue)             | current step circle bg + title, checked bank-tile border (1px), slider connect + handle border + tooltip, Next/Finish bg              |
| Panel         | `#f8f8f8`                           | content + actions right column bg                                                                                                     |
| Ink           | `#222`                              | body text, h2, bold input text, `.text-input` inner span, "Your money" label                                                          |
| Muted         | `#999` / `#666` / `#555`            | idle step number/title, captions, search icon, Previous text / Search-btn bg, choose-bank desc, pip labels / `p.desc`                 |
| Line          | `#ebebeb`                           | input/select borders (1px), connector line (2px), idle circle bg (40×40, 5px white border), `.form-find` bottom border                |
| Button prev   | bg `#e8e8e8`, text `#999`           | 140×50, float left, hidden on step 1                                                                                                  |
| Slider colors | track/handle `#e8e8e8`              | connect `#4966b1`, handle 1px accent border, tooltip 16px accent                                                                      |
| Error         | `#f63726`                           | input 1px border + alert icon top-right (zmdi `\f135` → lucide `AlertCircle`); NO text messages                                       |
| Font          | 'Roboto Slab' 400/700               | Google Fonts `<link>` (source declares 300–700; demo uses 400 + bold); base 14px/1.6/400; h2 30px; label 16px; captions 12px          |
| Date selects  | 3 × 100px native selects            | dobPicker: Jan–Dec (**Oct**, typo "Octr" fixed), days 1–31, years current→current−120 DESC, empty leading option; captions MM/DD/YYYY |
| Bank search   | 680px input + 150px Search button   | input pad 0 55px, placeholder "Ex. Techcombank"; button bg `#666` hover `#4d4d4d`; search icon left 18px `#999`; bottom border line   |
| Bank tiles    | 8 × 223×133 cards                   | radios, first checked, checked = 1px accent border, hover on label (source rule dead); breakpoints 190×120 / 100×65 / 90×61           |
| Slider        | $100–$2,000, step 100, start $1,100 | single handle, blue fill from min, tooltip above, pips $100/$2000, "$ " prefix, NO thousands separator, 0 decimals                    |
| Buttons       | 140×50                              | Next/Finish solid accent + white float right; Previous `#e8e8e8`/`#999` float left, hidden on step 1; ≤480px: 100px                   |
| Validation    | email format only                   | no required rules, blank messages, red border + icon on blur/step change; navigation gated until email valid                          |
| Success       | inline message                      | source `alert('Submited')` (sic); recreation: inline confirmation, no alert                                                           |
| Responsive    | 1024 / 992 / 768 / 480px            | 1024: container calc, stack columns, find_bank 100%, tiles 190×120; 992: content 900px, tiles 100×65; 768: fields 100%, flex          |
|               |                                     | column, 30px paddings, pips 94%; 480: date/search columns, content 1050px, buttons 100px, tiles 90×61                                 |

Unused in the demo (skip): zmdi icon font (→ lucide), the inert
`.footer-N` append hack (no CSS), `.content h3` (hidden), the dead
`input:hover` bank-tile rule (hover on label), the never-written
`#value-upper` readout (single readout only), `additional-methods.js`
(loaded but unused — no extra rules registered).

### Icon mapping (lucide)

| Source glyph/asset                     | Recreation                                                    |
| -------------------------------------- | ------------------------------------------------------------- |
| zmdi alert-circle `\f135` (validation) | lucide `AlertCircle` (13–16px, `#f63726`, top-right of field) |
| zmdi search `\f21a` (bank search)      | lucide `Search` (18px, `#999`, left 20px of the input)        |
| `images/bank-1.jpg`…`bank-8.jpg`       | 8 text/lucide bank cards — see plan below                     |

Bank-tile plan (the only imagery in the template — NOT shipped): render
each tile as a white 223×133 card with a lucide `Landmark` glyph (or
`Building2`) at ~40px in `#4966b1` and a bank name underneath, e.g.
Techcombank, Vietcombank, BIDV, VPBank, ACB, MBBank, Sacombank, SHB
(invented/paraphrased list — the source images have no readable names in
the DOM). First tile ("Techcombank") checked by default. If a pure-text
card looks too bare, add a subtle 1px `#ebebeb` inner border — but keep
the checked state as the source: 1px solid `#4966b1` outer border.

### Placeholder media plan

**NO picsum placeholders needed** — zero photographs (bank logos
recreated as text/lucide cards). No image screening required.

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/spellbind` from the simplest existing app
       (`cp -r apps/<simplest> apps/spellbind`), rename package to
       `@free-react-templates/spellbind`, add Roboto Slab 400/700
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `spellbind.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json (`npm install --package-lock-only`).
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): App (dark `#222` page, 1400px white
       container, two-column desktop layout, timeline with 3 tabs and
       aria-selected, Personal info current on load), Timeline (click
       switches step + blue circle class flip + connector line),
       PersonalInfoStep (Name First/Last with captions, Email + example
       hint, Phone, Birth Date selects with dobPicker ranges —
       months Jan..Dec, days 1..31, years current down to current−120
       descending, empty leading option, MM/DD/YYYY captions, SSN),
       BankStep (Find Your Bank input + search icon, Search button,
       "Or choose from these popular bank", 8 radio tiles with
       aria-checked, first checked, click swaps + blue border, hover
       shows border), GoalsStep (range slider labelled "Your money you
       can spend per month", value $100–$2000 step 100, readout "$ NNNN"
       no thousands separator, "$100"/"$2000" end labels), Actions (no
       Previous on step 1; Previous on step 2; Next → next step; Finish
       on step 3), Validation (invalid email on blur/next → red border +
       AlertCircle icon + aria-invalid; valid email clears; other fields
       NEVER validate; Next blocked while email invalid), Success
       (Finish → inline message, no alert, no navigation), Footer
       (Component Dock credit).
3. [ ] Page shell: `body` bg `#222`, `.main` 50px 0, container
       `max-w-[1400px] mx-auto bg-white`; two columns on desktop
       (`lg:flex-row`): timeline `lg:w-[310px]` + panel
       `lg:w-[1090px] bg-[#f8f8f8]`; ≤1024px: stack, container
       `calc(100% - 40px)`. Content area `min-h` per breakpoint
       (800/900/1050) instead of fixed height (documented improvement).
4. [ ] Timeline: `<nav>` with `role="tablist"` + three
       `role="tab"` items, each a flex row: 40×40 circle
       (`rounded-full bg-[#ebebeb] border-[5px] border-white`, number
       `#999` bold) + bold title `#999`; current: circle `bg-[#4966b1]` + white number + title `text-[#4966b1]`; connector: absolute 2px
       `#ebebeb` line behind the circles (left-aligned at the circle
       centers, vertically centered); `aria-selected`/`aria-controls`
       wired; panels `role="tabpanel"` + `aria-labelledby`. Fade
       transition ~400ms between steps.
5. [ ] Personal info step: 30px h2 "Personal information" + `#555`
       desc (typo "infomation"→"information" fixed); Name label + flex
       row of First/Last inputs (50% each, captions "First"/"Last" 12px
       `#999` below); Email (type=email) + caption "Example :
       &lt;address&gt;" (bold dark); Phone; Birth Date: label + 3 native
       selects (MM/DD/YYYY captions below; options Jan–Dec incl Oct,
       1–31, currentYear … currentYear−120 descending, leading empty
       option); SSN. All inputs: h-50, 1px `#ebebeb`, px-5, bold
       `#222`, focus-visible ring (a11y addition).
6. [ ] Validation (ONLY email format — do NOT add required rules):
       validate on blur and before any step change; invalid → 1px
       `#f63726` border + lucide `AlertCircle` icon absolutely at the
       field's top-right + `aria-invalid` + visually-hidden
       `aria-describedby` message ("Please enter a valid email
       address"); clear on fix. Name/phone/birth/SSN/bank/slider NEVER
       validated. Gate Next/timeline navigation while email invalid.
7. [ ] Connect Bank Account step: "Connect Bank Account" h2 + desc;
       Find Your Bank label + flex row: input (px-[55px], placeholder
       "Ex. Techcombank") with lucide `Search` icon absolute left-5
       top-3, grey button "Search" (150px, bg `#666` hover `#4d4d4d`
       white); `.form-find` bottom border 1px `#ebebeb` + pb-[70px];
       "Or choose from these popular bank" (`#666`); 8 radio tiles
       (offscreen inputs + labels 223×133, flex-wrap, first checked):
       checked = 1px solid `#4966b1`, hover = same border on the label;
       tile content = lucide `Landmark` + bank name (Techcombank,
       Vietcombank, BIDV, VPBank, ACB, MBBank, Sacombank, SHB);
       `<fieldset>` + `<legend class="sr-only">` (a11y).
8. [ ] Set Financial Goals step: "Set Financial Goals" h2 + desc
       ("Set up your money limit to reach the future plan"); labelled
       range control (`role="slider"` or native range input) starting
       at 1100, min 100, max 2000, step 100: track 9px `#e8e8e8`,
       fill from min to handle `#4966b1`, rectangular handle 15×30 with
       1px `#4966b1` border, floating tooltip (16px `#4966b1`) above,
       "$100"/"$2000" end labels (`#666`, 16px); readout 16px `#222`
       "Your money you can spend per month :" + 28px bold value
       formatted "$ " + no thousands separator; ONE readout only.
       (Native `<input type="range">` styled w/ Tailwind is fine;
       keep `aria-valuenow` synced.)
9. [ ] Actions: bottom action bar on the `#f8f8f8` panel: Previous
       (140×50, bg `#e8e8e8`, `#999`, left, hidden on step 1 — render
       nothing when step 1 is current) + Next/Finish (140×50, bg
       `#4966b1`, white, right; "Next" steps 1–2, "Finish" step 3).
       Finish submits: inline success message replacing the form
       ("Thanks — your account setup is complete!"), no alert, no
       navigation, no fake network.
10. [ ] Footer: minimal Component Dock credit linking
        https://www.componentdock.com/.
11. [ ] Run `npm run verify:app -- spellbind` (typecheck → lint → vitest
        100% → build) and fix until green. NOTE the coverage-race
        pitfall: if a sibling stream's vitest is running in the shared
        tree it can wipe your `coverage/.tmp`; wait it out and re-run.
12. [ ] Open PR `feat/template-spellbind` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL (the `/etc/bwiz/` one), token
        list (dark page `#222`, white 1400px container, medium blue
        `#4966b1`, panel `#f8f8f8`, `#ebebeb` lines, `#e8e8e8` prev
        button/slider track, error `#f63726`, Roboto Slab 400/700),
        and what differs (renamed "Spellbind", Roboto Slab via Google
        Fonts, lucide icons — no zmdi font/logo images, bank tiles are
        text/lucide cards, tab/radio/slider semantics + focus rings +
        aria-invalid/aria-describedby, "Octr"→"Oct" + "infomation"→
        "information" typo fixes, hover on bank-tile labels, min-height
        content, single money readout ("$ 1100"…"$ 2000"), no fake
        network — inline success message instead of the source's
        `alert('Submited')`, Component Dock footer).
13. [ ] Bookkeeping after merge: mark TEMPLATES.md line 852 `[x]` + surge
        URL (`https://spellbind.free.componentdock.com`), `npm run
    readme:status`, push.
