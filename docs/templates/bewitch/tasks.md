# Bewitch (ColorLib Wizard 13) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-bewitch`. Recreation name: **Bewitch** (NEW name —
> the ColorLib source keeps its name "Colorlib Wizard 13").

## Source mapping

- **ColorLib item:** "Colorlib Wizard 13" (TEMPLATES.md line 850; section
  "## Bootstrap Wizards (30)" at line 844). The
  `wp/template/colorlib-wizard-13/` slug appears exactly ONCE in
  TEMPLATES.md (no dup rows; close-string matches for wizard-1/2/3/11/21..29
  are prefix substrings, not duplicates).
- **Source URL:** https://colorlib.com/wp/template/colorlib-wizard-13/
- **Preview URL — REACHABLE (verified 2026-08-18 by direct fetch + browser):**
  **`https://colorlib.com/etc/bwiz/colorlib-wizard-13/index.html`**
  (HTTP 200, 10,539 bytes, 179 lines, `<title>Sign Up Form</title>`).
  **The naive `https://preview.colorlib.com/theme/colorlib-wizard-13/`
  returns 404** — the whole 30-member wizard family lives under
  `colorlib.com/etc/bwiz/colorlib-wizard-<n>/index.html` (path confirmed
  for wizard-1, -10, -11, -12, -13, -15). Do not redo this lookup.
- **Stylesheets:** `css/style.css` (14,212 B, 497 lines — ALL custom CSS,
  SCSS-compiled, no `error` selector anywhere) + Bootstrap 3.3.x
  `vendor/boostrap/bootstrap.min.css` (collapse/panel/accordion) +
  `vendor/acc-wizard-master/release/acc-wizard.min.css` (1,394 B, trivial)
  - zmdi icon font (glyphs `\f2f9` chevron-down, `\f2fe` long-arrow-down →
    lucide, do NOT ship). Fonts: local Roboto Slab 300/400/700 @font-face →
    **Google Fonts `<link>` (400, 700 — 300 unused by the demo CSS)**.
- **Scripts:** jQuery, bootstrap.min.js (collapse), acc-wizard.min.js
  (3,423 B — adds per-form action buttons), jquery.validate +
  additional-methods (LOADED, messages emptied, **NO rules, NO error CSS —
  the form is UNGATED**), jquery.steps.min.js (loaded but UNUSED — the
  whole `.steps()` block is commented out in main.js), dobpicker.js
  (3,573 B — populates the MM/DD/YYYY selects), `js/main.js` (3,333 B —
  accwizard init + active-class toggling + empty validator messages +
  dobPicker init + nationality select→ul rebuild + click handlers).

## Reference research (done — do not redo)

### Screenshot (`colorlib-free-wizard-13.jpg`, 1200×972 AVIF) + live page

Browsed visually in the browser 2026-08-18 (live page at the /etc/bwiz/
URL; the collapsed-state live render matches the screenshot). Visual:
warm golden-orange AERIAL background (aircraft wing at far left, hazy
sunset sky over terrain — soft, desaturated, brownish-orange cast); a
large WHITE card centered with a soft grey drop shadow; three stacked
accordion headings — "BASIC INFOMATION" (bold, dark = active, form open),
"ADDITIONAL INFOMATION" + "SPECIALITIES" (light grey = closed); fields
are light-grey wells (`#f8f8f8`) with black labels and grey placeholders;
gender = two 50×50 icon tiles (male selected: orange border);
DOB trio = MM/DD/YYYY side-by-side; Nationality = "Viet Nam" + vietnam
flag + chevron; orange 140×50 "NEXT" button with a small down arrow.
Aesthetic: clean, modern, travel-flavored, flat white card on warm
photo. **Exactly ONE photo (the body background) — everything else is
purely CSS + tiny PNG icons (gender silhouettes, flags) + the zmdi icon
font.** No navbar, no footer content in the source.

### Live-computed confirmations (browser, 2026-08-18)

- body: `background-image: url(body-bg.jpg)` (cover, center), Roboto
  Slab, `#222`, 14px/1.6.
- .container: 1070px, `#fff`, radius 10px, shadow
  `rgba(0,0,0,.1) 0px 10px 9.9px 0.1px`.
- .au-btn: 140×50, bg `#f65300`, `#fff`, uppercase, weight 700, radius
  5px, `:after` long-arrow-down glyph `\f2fe` at right 42px 16px (renders
  on `<button>`, NOT on the `<input type=submit>`).
- Inputs: bg `#f8f8f8`, radius 5px, padding 13px 20px, border 1px
  transparent; focus = transparent bg + 1px `#f65300` border; placeholder
  `#999`; native appearance removed.
- Panels: headings 18px uppercase bold, 1px `#ebebeb` bottom rule,
  padding-bottom 16px; idle `#999999`, active `#222`; panel margin-bottom
  37px; panel-body padding-top 35px; acc-wizard padding 67px 65px 65px
  30px.
- Radio tiles: 50×50, radius 5px, bg `#f8f8f8`; checked = 1px `#f65300`
  border + `#fff` bg; hover intent = accent bg/border (source's rule
  targets the 0x0 input — recreation puts hover on the tile label).
- DOB selects: transparent borders, `#f8f8f8` bg, padding 14px 20px,
  14px, `#999`; item widths 87/87/152px with 1px `#ebebeb` separators.
- Nationality: `ul#national` absolute (z-index 9, radius 5px); init li
  = `#f8f8f8` bg, padding 14px 20px, color `#222`, chevron-down 18px
  `#999` at right 20px; options hidden until open (`#f8f8f8`, padding
  5px 20px); hover/selected = `#f65300` bg + `#fff`; option imgs
  (flags) get `margin-right: 12px`.
- Plugin-added buttons (live DOM): panel1 form → `Next` (au-btn,
  type=submit); panel2 form → `Go Back` (au-btn au-btn-back, type=reset,
  display:none) + `Next`; panel3 form → `Go Back` (hidden) + the explicit
  `Submit` input (au-btn, type=submit, value "Submit").

### Family shape (series context)

30-member "Bootstrap Wizards" family (`colorlib-wizard-1` … `-30`):
every member is a wizard skeleton with a DIFFERENT widget stack, layout,
color scheme, and field set. Sibling preps: Conjure (wizard-1, chain
seed — cream/olive, 920px card, dot nav, jQuery Steps), Banish
(wizard-10 — photo bg, `#333` monochrome, 451px card, progress bar,
UNBLOCKED nav), Dispel (wizard-11 — SOLID CORAL page, 630px card, 90px
square step TILES, validation-gated steps), Abjure (wizard-12 — SOLID
SKY-BLUE page, 665px PILL card, hidden step nav, single-field steps,
circular chevron buttons, growing footer). **Bewitch (wizard-13) is the
FIFTH prep and a distinct scheme: PHOTO background (warm aerial,
apple-golden), 1070px WHITE card (10px radius), Bootstrap 3 ACCORDION
panels as steps, custom flag-dropdown for Nationality, gender icon
tiles, DOB select trio, orange `#f65300` accent, ZERO validation.**
Sibling preps (wizard-2..9, 14..30) will differ again — never assume
tokens from siblings. Read each member's own HTML/CSS/JS.

### Design tokens (live stylesheet + rendered page, verified 2026-08-18)

| Token          | Value                           | Use                                                                                                                                           |
| -------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Page bg        | PHOTO (cover, center)           | `images/body-bg.jpg` (45 KB, 1900×1276): warm golden-orange aerial wing/sunset flight view                                                    |
| Card           | `#fff`, 1070px, radius **10px** | shadow `0px 10px 9.9px 0.1px rgba(0,0,0,0.1)`; `.main` padding 130px 0; ≤992px: `calc(100% - 40px)`                                           |
| Accent         | `#f65300` (burnt orange)        | buttons, focus borders, radio-checked border, dropdown hover/selected bg                                                                      |
| Well           | `#f8f8f8`                       | inputs/selects/textarea/dropdown/radio-tile resting bg; radius 5px                                                                            |
| Ink            | `#222`                          | body text, labels, active-panel heading, dropdown option text                                                                                 |
| Heading idle   | `#999999`                       | closed-panel heading links (placeholder + dropdown chevron are `#999`)                                                                        |
| Line           | `#ebebeb`                       | panel-heading bottom border; DOB separators                                                                                                   |
| Font           | 'Roboto Slab' 400/700           | Google Fonts `<link>` (source local 300/400/700; 300 unused); base 14px/1.6/400                                                               |
| Panel headings | 18px uppercase bold             | 1px line bottom border, padding-bottom 16px, cursor pointer; idle `#999999`, active `#222`                                                    |
| Inputs         | well bg, radius 5px, 13px 20px  | border 1px transparent; focus: transparent bg + 1px accent; placeholder `#999`; textarea 174px                                                |
| Radio tiles    | 50×50, radius 5px               | well bg; checked: accent border + `#fff` bg; hover: accent (label-hover, recreation)                                                          |
| DOB trio       | 87/87/152px items               | 1px line separators after first two; select: well bg, 14px 20px, `#999`                                                                       |
| Dropdown       | absolute overlay, z-index 9     | init row: well bg, 14px 20px, chevron-down 18px `#999`; options: well bg; hover/selected accent+white                                         |
| Buttons        | 140×50, radius 5px              | accent bg + `#fff` uppercase bold; Next = `<button>` WITH long-arrow-down glyph; Submit = `<input>` WITHOUT glyph; `au-btn-back` display:none |
| Validation     | **NONE**                        | no rules, empty messages, no error CSS — nothing blocks                                                                                       |
| Success        | inline message                  | source POSTs without action (reload); commented alert; recreation: inline confirmation                                                        |
| Collapse       | ~350ms                          | Bootstrap accordion transition                                                                                                                |

Unused in the demo (skip): the zmdi icon font (→ lucide), the
jquery.steps init (fully commented out — jQuery Steps is dead weight),
validation (empty messages, no rules, no error CSS), the `h2` style
block (no h2 exists in the markup), the `.form-radio input:hover` rule
(offscreen target), theme colour `.container` `.active` z-index stack
(the z-index only matters for the DOB separators layer).

### Icon mapping (lucide — probe ALL with `typeof` before use)

| Source glyph/asset                                              | Recreation                                                                                          |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| zmdi chevron-down `\f2f9` (dropdown)                            | lucide `ChevronDown`                                                                                |
| zmdi long-arrow-down `\f2fe` (au-btn)                           | lucide `ArrowDown` (Next buttons only)                                                              |
| `images/icon-male.png` / `icon-female.png` (17×25 / 17×23 PNGs) | inline SVG silhouettes or unicode ♂ / ♀ glyphs in the 50×50 tiles (no asset copy)                   |
| `images/icon-vietnam.png` / `icon-usa.png` (flag PNGs)          | DROPPED — text-only dropdown options, documented deviation Or a tiny inline Vietnam flag if desired |

No brand icons needed (no social fields).

### Picsum placeholder plan

**ONE photo needed: the page background** (body-bg.jpg — warm
golden-orange aerial/sunset flight view). Seeded picsum URLs are ARBITRARY
— screen candidates before pinning (see the seed-screening method in
`skills/research/colorlib-template-replication`): curl candidates at
480×270, rank with a warm+bright pixel metric (fraction of pixels with
r > b+15 AND r+g+b > 450 — a golden-hour sky/clouds scene should score

> 0.5; dark/forest/urban scenes score low), browser-verify the top 1–2
> at full size, then pin e.g. `https://picsum.photos/id/<n>/1900/1276` in
> the data file and update spec + tests + docs together. NO verified warm-
> aerial ID exists in the skill's verified list yet — do not assume one;
> the metric screen must run first. (Fallback that definitely works if
> screening is inconclusive: keep it simple — a warm solid-gradient
> fallback is NOT faithful; run the screen.)

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/bewitch` from the simplest existing app
       (`cp -r apps/<simplest> apps/bewitch`), rename package to
       `@free-react-templates/bewitch`, add Roboto Slab 400/700 Google
       Fonts `<link>` in index.html, set `public/CNAME` =
       `bewitch.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json (`npm install --package-lock-only`).
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): App (page bg image present, card, three
       headings in order, panel 1 open on load, document title "Bewitch
       — Sign-Up Wizard"), Accordion (click closes the previous panel,
       aria-expanded flips, heading colors via class), BasicInfo (name
       fields + labels + placeholders; gender tiles: male default
       selected, click swaps + aria-checked; DOB trio: MM/DD/YYYY
       defaults, options populated incl. zero-padded days + Jan..Dec +
       year window; Nationality custom dropdown: init "Viet Nam",
       open/close toggles, option click updates + stores value + hover
       class), AdditionalInfo (email/phone/city/pincode with labels +
       placeholders + types), Specialities (textarea + Submit),
       NavButtons (Next after panels 1–2 with ArrowDown; NO back control
       anywhere; panel 3 = Submit only), Submit (inline success message,
       no navigation, no alert), Footer (Component Dock credit).
       NOTE jsdom: query the collapsed panels' content with
       `within(panelRegion)` after expanding where needed; the accordion
       hides closed bodies — assert visibility via the open state, not
       `getByRole` default filters.
3. [ ] Page shell: photo background (`bg-[url(...)]` or inline style
       with the pinned picsum URL, cover/center), `.main` 130px 0
       padding, white card (`max-w-[1070px]`, `rounded-[10px]`, shadow
       `0px 10px 9.9px 0.1px rgba(0,0,0,0.1)`, `mx-auto`); responsive
       ≤992px: card `calc(100% - 40px)`; acc-wizard padding
       `67px 65px 65px 30px` (≤768px: 30px left/right).
4. [ ] Accordion component: three panels; heading = 18px uppercase bold
       (open: `#222` / closed: `#999999`), 1px `#ebebeb` bottom rule,
       cursor pointer, `aria-expanded` + `aria-controls`; body region
       labelled by heading; one open at a time; ~350ms expand/collapse
       transition; first open on load; panel margin-bottom 37px,
       body padding-top 35px. The headings are ALSO the back-navigation
       (no Back buttons exist).
5. [ ] Shared field primitives: `Field` (label above grey well input —
       label block 100% mb-1, input well bg `#f8f8f8` radius 5px
       padding 13px 20px, border transparent; focus: transparent bg +
       1px `#f65300` border + visible focus ring — a11y addition,
       documented), `TextArea` (174px), `SelectWell` (well-styled select
       with 14px 20px padding, `#999` text).
6. [ ] Panel 1 form: two-column name row (First/Last), Gender tiles
       (two 50×50 labelled radio tiles, male checked; lucide-free inline
       SVG/unicode silhouettes; hover = accent border), DOB trio
       (87/87/152px items, separators; selects populated: MM/DD/YYYY
       defaults + Jan..Dec + 01..31 zero-padded + currentYear-120..
       currentYear), Nationality custom dropdown (init row well + chevron
       `ChevronDown` right; listbox toggles; Viet Nam default / USA;
       hover + selected accent bg/white; NO flags — text-only, documented
       deviation).
7. [ ] Panels 2–3 forms: Additional (email/phone/city/pincode rows) and
       Specialities (textarea + Submit input styled as the orange button
       — NO arrow glyph on Submit, faithful to `<input>`).
8. [ ] Footer: minimal Component Dock credit linking
       https://www.componentdock.com/.
9. [ ] Run `npm run verify:app -- bewitch` (typecheck → lint → vitest
       100% → build) and fix until green. NOTE the coverage-race
       pitfall: if a sibling stream's vitest is running in the shared
       tree it can wipe your `coverage/.tmp`; wait it out and re-run.
10. [ ] Open PR `feat/template-bewitch` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL (the `/etc/bwiz/` one), token
        list (burnt-orange `#f65300`, grey wells `#f8f8f8`, Roboto Slab,
        1070px/10px-radius card, warm aerial photos bg, 140×50 buttons),
        and what differs (renamed "Bewitch", Roboto Slab via Google
        Fonts, lucide `ChevronDown`/`ArrowDown` — no zmdi font, ONE
        subject-screened picsum placeholder for the body photo, typo
        fixes ("Information"/"Specialties"), gender silhouettes as inline
        SVG/unicode instead of PNGs, NO flag images (text-only
        nationality dropdown), no Back controls (source hides them), no
        blocking validation (source has none), inline success message
        instead of a reload, accessible accordion/radio/listbox semantics
    - focus rings + Component Dock footer).
11. [ ] Bookkeeping after merge: mark TEMPLATES.md line 850 `[x]` + surge
        URL (`https://bewitch.free.componentdock.com`), `npm run
   readme:status`, push.
