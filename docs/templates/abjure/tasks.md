# Abjure (ColorLib Wizard 12) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-abjure`. Recreation name: **Abjure** (NEW name —
> the ColorLib source keeps its name "Colorlib Wizard 12").

## Source mapping

- **ColorLib item:** "Colorlib Wizard 12" (TEMPLATES.md line 849; section
  "## Bootstrap Wizards (30)" at line 844). The
  `wp/template/colorlib-wizard-12/` slug appears exactly ONCE in
  TEMPLATES.md (no dup rows; close-string matches for wizard-1/2/11/21..29
  are prefix substrings, not duplicates).
- **Source URL:** https://colorlib.com/wp/template/colorlib-wizard-12/
- **Preview URL — REACHABLE (verified 2026-08-18 by direct fetch):**
  **`https://colorlib.com/etc/bwiz/colorlib-wizard-12/index.html`**
  (HTTP 200, 3,094 bytes, 77 lines, `<title>Sign Up Form</title>`).
  **The naive `https://preview.colorlib.com/theme/colorlib-wizard-12/`
  returns 404** — the whole 30-member wizard family lives under
  `colorlib.com/etc/bwiz/colorlib-wizard-<n>/index.html` (path confirmed
  for wizard-1, -10, -11, -12, -15). Do not redo this lookup.
- **Preview CSS:** `css/style.css` (8,119 bytes, 323 lines — ALL styles,
  hand-written, NO Bootstrap, NO jquery.steps.css) +
  `fonts/material-icon/css/material-design-iconic-font.min.css` (zmdi icon
  font — REPLACE with lucide, do not ship). Scripts:
  `vendor/jquery/jquery.min.js`, `vendor/jquery-validation/dist/jquery.validate.min.js`
  - `additional-methods.min.js`, `vendor/jquery-steps/jquery.steps.min.js`,
    `js/main.js` (3,708 bytes: validate rules + steps init + footer growth +
    eye toggles). Fonts: local Montserrat 300/400(i)/500/600/700(i)/900
    @font-face → **Google Fonts `<link>` (400, 500, 700 — 300/600/900 are
    unused by the demo CSS)**.

## Reference research (done — do not redo)

### Screenshot (`colorlib-free-wizard-12.jpg`, 1200×972 AVIF)

Browsed visually in the browser 2026-08-18 (matches the live page).
Browser frame: solid flat SKY-BLUE full-viewport background; one white
PILL card centered (highly rounded corners + subtle shadow); left side:
black 22px question "01 . What is your first name ?" with a thin grey
underline below; right side: bright blue CIRCULAR button with a white
right-chevron. Nothing else — no step tiles, no heading, no photos, no
footer on the initial step (footer appears after the first Next click
per main.js). Aesthetic: minimal, flat, monochromatic blue/white, pill
softness. **No imagery anywhere — NO picsum placeholders needed**
(solid-color page, icon-only controls).

### Family shape (series context)

30-member "Bootstrap Wizards" family (`colorlib-wizard-1` … `-30`): all are
jQuery-Steps skeletons differing per member in layout, color scheme, and
field inventory. **Conjure (wizard-1)** is the chain seed (cream
`#f9f6f1`/olive `#6d7f52`, 920px card, dot nav). **Banish (wizard-10)**:
photo background, near-black `#333` monochrome, 451px left card, progress
bar, UNBLOCKED navigation. **Dispel (wizard-11)**: SOLID CORAL `#fa6d6a`
page, 630px card, 90px square step TILES, validation-gated steps.
**Abjure (wizard-12) is the FOURTH prep and a distinct scheme: SOLID
SKY-BLUE `#00a7f6` page, 665px PILL card (60px radius), HIDDEN step nav
(`.steps` display:none — no tiles at all), FIVE single-field steps with
floating-label questions, 90px CIRCULAR chevron buttons, validation on
steps 1–3 ONLY, and a growing dark-blue footer block.** Sibling preps
(wizard-2..9, 13..30) will differ again — never assume tokens from
siblings. Read each member's own HTML/CSS/JS.

### Design tokens (live stylesheet + rendered page, verified 2026-08-18)

| Token       | Value                                  | Use                                                                                                       |
| ----------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Page bg     | SOLID `#00a7f6`                        | no photo/gradient; `.main` padding 410px 0; SAME blue as the Next circle                                  |
| Card        | `#fff`, 665px, radius **60px** (pill)  | `margin: 0 auto`; shadow `0px 3px 9.5px 0.5px rgba(0,0,0,0.1)`; mobile ≤768px: `calc(100% - 40px)`        |
| Brand deep  | `#0184d2`                              | growing footer block + finished-state page bg (darker blue)                                               |
| Ink         | `#222`                                 | body/label/input text (base 14px bold)                                                                    |
| Label dim   | `#999`                                 | floating label focus state (13px, weight 500)                                                             |
| Line        | `#ebebeb`                              | 3px input bottom rule (focus/valid keep it); Prev circle bg                                               |
| Muted       | `#999`                                 | Prev chevron icon                                                                                         |
| Error       | `#e10000`                              | 3px bottom rule + close-circle icon (18px, top 30px right 0) + red floating label; NO error text          |
| Font        | 'Montserrat' 400/500/700               | Google Fonts `<link>` (source local 300/400/500/600/700/900); base 14px/1.6 bold; labels+inputs 22px bold |
| Content col | 334px                                  | `.content` width; `.wizard` flex space-between, padding `0 15px 0 55px`; field left, actions right        |
| Circles     | 90×90px, radius 50%                    | icon `a` font-size 50px; Prev `#ebebeb` bg + `#999` chevron; Next/Finish `#00a7f6` bg + `#fff` chevron    |
| Inputs      | borderless, 3px `#ebebeb` bottom rule  | 22px bold, padding-top 30px / bottom 3px, 100% block; `appearance` native chrome removed                  |
| Label       | absolute `left:0; top:25px`, 22px bold | focus float: top 4px, 13px, 500, `#999`; valid: `display:none`; error: top 4px, 12px, `#e10000`           |
| Footer      | `#0184d2`, absolute `bottom:-115px`    | appended on FIRST Next; heights 188 (f-0) / 376 (f-1) / 564 (f-2) / 752 (f-3); only grows, never shrinks  |
| Success     | bg `#0184d2`; h1 36px bold white       | centered greeting; container `display:none`                                                               |
| Transition  | fade, 300ms                            | step change transition                                                                                    |

Unused in the demo (skip): the zmdi icon font (icons → lucide, do not
ship), the jQuery Steps header/tiles (CSS hides them), jquery.validate
(implement validation in React state), step-4 footer growth (commented
out in main.js — 752px is the max), the `.form-error .zmdi-arrow-right`
rule (targets a class the demo never renders — no visible effect).

### Icon mapping (lucide — probe ALL with `typeof` before use)

| Source glyph (zmdi)                | Recreation                               |
| ---------------------------------- | ---------------------------------------- |
| `zmdi-chevron-left` (Prev)         | lucide `ChevronLeft`                     |
| `zmdi-chevron-right` (Next/Finish) | lucide `ChevronRight`                    |
| `zmdi-eye` / `zmdi-eye-off`        | lucide `Eye` / `EyeOff`                  |
| `\f1f4` (error close-circle)       | lucide `CircleX` (probe; alias XCircle — |
|                                    | renamed in recent lucide releases)       |

No brand icons needed (no social fields).

### Picsum placeholder plan

**NONE.** Wizard 12 has a SOLID sky-blue page background (`#00a7f6`) and
zero photos — no tiles, no avatar, no imagery. Everything copies over as
CSS + lucide icons. (Do not invent photos the source lacks.)

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/abjure` from the simplest existing app
       (`cp -r apps/<simplest> apps/abjure`), rename package to
       `@free-react-templates/abjure`, add Montserrat 400/500/700
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `abjure.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): Wizard (5 single-field panels; no
       tiles/heading; step 1 initial; Prev inert on step 1 / active
       after; Next gated on steps 1–3, free on 4–5; blur validation;
       valid advance; fade; Finish success greeting), FloatingLabel
       (rest 22px top 25px → focus float 13px `#999` → valid hidden →
       invalid red 12px), StepFields (5 verbatim numbered questions in
       order; email type; passwords type=password + eye toggles), Eye
       toggle (flip type + icon + aria), ErrorState (icon-only, red
       rule, aria-invalid, role=alert), FooterBlock (absent initially →
       188px after first Next → 376/564/752 on further steps → never
       shrinks on Back), Success (greeting with entered first name,
       page `#0184d2`, form gone, no alert), Footer (Component Dock
       credit), App (landmarks, document title "Abjure — Sign-Up Form
       Wizard"). NOTE jsdom: use `fireEvent.click` for the eye toggle
       (user.click simulates hover first) and assert icon via
       `getAttribute('class')` (SVG class is an SVGAnimatedString).
3. [ ] Layout shell: solid sky-blue `#00a7f6` page (`bg-[#00a7f6]`),
       410px 0 vertical padding, centered white card (max-w 665px,
       radius 60px — `rounded-[60px]`, shadow
       `0px 3px 9.5px 0.5px rgba(0,0,0,0.1)`), 334px content column
       left / actions right (`.wizard` space-between, padding
       `0 15px 0 55px`); responsive: card `calc(100% - 40px)` ≤768px,
       no horizontal overflow (the source has no other mobile rules —
       keep the two-circle row or stack it if needed to avoid
       overflow; document any choice).
4. [ ] Single input + floating label component: input borderless with
       3px `#ebebeb` bottom rule (22px bold, pt 30px), label absolute
       at top 25px (22px bold) = the numbered question; focus →
       label floats up (13px, 500, `#999`); valid + blur → label
       hidden; error → label floats red at 12px + 3px `#e10000` rule +
       CircleX icon at the field's top right (18px, `#e10000`,
       `aria-hidden` + `role="alert"` on a visually-hidden live
       region for announcements).
5. [ ] Wizard controller: 5 steps in source order (first_name,
       last_name, email, password, re_password); state per step;
       fade 300ms between steps; validation rules mirroring
       jquery.validate — REQUIRED only on steps 1–3 (passwords never
       block); blur validates the blurred field; Next click validates
       the current step and blocks if invalid (icon-only errors).
6. [ ] Action row: two 90×90px circular buttons (radius 50%), flex row
       `margin 0 -5px` / `li` padding `0 5px`: Prev = ChevronLeft
       `#999` on `#ebebeb` — VISIBLE but `aria-disabled` + inert on
       step 1 (NO display:none — unlike Dispel; the source has no
       hiding rule); Next/Finish = ChevronRight `#fff` on `#00a7f6`;
       Finish acts on step 5 with the same icon.
7. [ ] Growing footer block: render nothing initially; after the first
       Next, a full-width `#0184d2` block anchored below the card
       (absolute bottom, z-index low, or fixed/static block per
       layout choice) with height 188px; on each further forward step
       grow to 376 / 564 / 752px; NEVER shrink on Back.
8. [ ] Success state: Finish (steps 4–5 never block) → hide the form,
       show a centered 36px bold white greeting "Hi, {first name}!"
       (use the entered first name; fall back to "Hi, there!" when
       empty — the source hardcodes "Hi , Hoang !"), page bg turns
       `#0184d2`; no alert, no fake network.
9. [ ] Footer: minimal Component Dock credit linking
       https://www.componentdock.com/.
10. [ ] Run `npm run verify:app -- abjure` (typecheck → lint → vitest
        100% → build) and fix until green. NOTE the coverage-race
        pitfall: if a sibling stream's vitest is running in the shared
        tree it can wipe your `coverage/.tmp`; wait it out and re-run.
11. [ ] Open PR `feat/template-abjure` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL (the `/etc/bwiz/` one), token
        list (sky-blue `#00a7f6` / deep `#0184d2`, Montserrat, 665px
        60px-radius pill card, 90px circular buttons, floating
        labels), and what differs (renamed "Abjure", Montserrat via
        Google Fonts, lucide icons — no zmdi font, NO picsum needed,
        passwords default to type=password (source uses text),
        icon-only errors announced (`aria-invalid` + live region),
        inline success greeting instead of alert, Prev
        disabled-but-visible on step 1, accessible semantics + focus
        rings, Component Dock footer).
12. [ ] Bookkeeping after merge: mark TEMPLATES.md line 849 `[x]` + surge
        URL (`https://abjure.free.componentdock.com`), `npm run
    readme:status`, push.
