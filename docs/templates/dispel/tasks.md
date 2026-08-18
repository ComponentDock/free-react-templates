# Dispel (ColorLib Wizard 11) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-dispel`. Recreation name: **Dispel** (NEW name —
> the ColorLib source keeps its name "Colorlib Wizard 11").

## Source mapping

- **ColorLib item:** "Colorlib Wizard 11" (TEMPLATES.md line 848; section
  "## Bootstrap Wizards (30)" at line 844). The
  `wp/template/colorlib-wizard-11/` slug appears exactly ONCE in
  TEMPLATES.md (no dup rows; close-string matches for wizard-1/10/12..19
  are `-1`/`-11` prefix substrings, not duplicates).
- **Source URL:** https://colorlib.com/wp/template/colorlib-wizard-11/
- **Preview URL — REACHABLE (verified 2026-08-18 by direct fetch + browser
  render):**
  **`https://colorlib.com/etc/bwiz/colorlib-wizard-11/index.html`**
  (HTTP 200, 12,092 bytes, 238 lines, `<title>Sign Up Form</title>`).
  **The naive `https://preview.colorlib.com/theme/colorlib-wizard-11/`
  returns 404** — the whole 30-member wizard family lives under
  `colorlib.com/etc/bwiz/colorlib-wizard-<n>/index.html` (path confirmed
  for wizard-1, wizard-10, wizard-11, wizard-15). Do not redo this lookup.
- **Preview CSS:** `css/style.css` (12,951 bytes, 469 lines — ALL styles,
  hand-written, NO Bootstrap) + `fonts/themify-icons/themify-icons.css`
  (icon font — REPLACE with lucide/inline SVG, do not ship). Scripts:
  `vendor/jquery/jquery.min.js`, `vendor/jquery-validation/dist/jquery.validate.min.js`
  - `additional-methods.min.js`, `vendor/jquery-steps/jquery.steps.min.js`,
    `vendor/minimalist-picker/dobpicker.js`, `js/main.js` (6,261 bytes:
    validate rules + steps init + 3× bespoke list builders + dobPicker ×2).
    Fonts: local Roboto Slab 300/400/700 @font-face → **Google Fonts
    `<link>` (400,700 — 300 is unused by the CSS)**.

## Reference research (done — do not redo)

### Screenshot (`colorlib-free-wizard-11.jpg`, 1200×972 AVIF)

Browsed visually in the browser 2026-08-18 (also confirmed against the
LIVE rendered page — they match). Browser frame: solid salmon/coral
full-viewport page background; white card centered (rounded corners +
soft shadow) holding a centered UPPERCASE dark heading "SIGN UP OFFICE
EMPLOYEE ACCOUNT"; a row of four square step tiles — "Personal" filled
coral with a white person icon, "Contact"/"Offical"/"Payment" grey with
white envelope/star/credit-card icons; below: a coral "Personal
Information:" legend left + "Step 1 / 4" right; bordered inputs with
small labels and red asterisks; Date of birth (Day/Month/Year dropdowns
in a bordered row) side-by-side with Gender (dropdown showing "Male");
coral "Next" button bottom-right. **No photos/imagery anywhere — the
recreation needs NO picsum placeholders** (solid-color page, icon-only
tiles). Aesthetic: warm coral/white, clean, flat, rounded 5px micro-corners
on inputs/buttons/tiles.

### Family shape (series context)

30-member "Bootstrap Wizards" family (`colorlib-wizard-1` … `-30`): all are
jQuery-Steps skeletons differing per member in layout, color scheme, and
field inventory. **Conjure (wizard-1) is the chain seed** — its tokens
(cream `#f9f6f1`, olive `#6d7f52`, 920px card, dot navigation) DO NOT
carry over. **Banish (wizard-10)** is photo-background + near-black `#333`
monochrome, 451px left card, progress bar, UNBLOCKED navigation.
**Dispel (wizard-11) is the THIRD prep and a distinct scheme: SOLID CORAL
page, 630px card, 90px square step TILES, and VALIDATION-GATED
navigation** (the first family member so far with blocked steps + error
states). Sibling preps (wizard-2..9, 12..30) will differ again — never
assume tokens from siblings. The form fields differ per member too
(Dispel = employee sign-up; Banish = registration+payment; Conjure =
registration). Read each member's own HTML/CSS/JS.

### Design tokens (live stylesheet + rendered page, verified 2026-08-18)

| Token       | Value                                  | Use                                                                                                                                                    |
| ----------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Page bg     | SOLID `#fa6d6a`                        | no photo/gradient; `.main` padding 60px 0                                                                                                              |
| Card        | `#fff`, 630px, radius 10px             | `margin: 0 auto`; shadow `0px 3px 9.5px 0.5px rgba(0,0,0,0.1)`; form pad 32px 90px 40px 90px                                                           |
| Brand coral | `#fa5e5b` (hover `#f82d2a`)            | current tile, Next/Submit, step-heading, dropdown hover/selected row; hover darkens                                                                    |
| Ink         | `#222`                                 | body/input/label text, h2, chevrons, list rows                                                                                                         |
| Muted       | `#adadad`                              | inactive tiles, Previous button bg                                                                                                                     |
| Line        | `#ebebeb` 1px                          | input/select-list/date-group borders + dividers                                                                                                        |
| Focus/valid | `#666` 1px                             | input focus + `.valid` border                                                                                                                          |
| Error       | `#ff1212` (asterisk `#b90000`)         | `input.error` border + error icon; icon 13px at top 40px right 20px (absolute, alert glyph)                                                            |
| Font        | 'Roboto Slab' 400/700                  | Google Fonts `<link>` (source local @font-face 300/400/700); base 13px/1.6; legend 17px; h2 20px bold                                                  |
| Tiles       | 90×90px, radius 5px, icon 29px + label | steps row space-between, mb 23px; current = brand coral; mobile: 150px, stacked, centered, mb 20px                                                     |
| Inputs      | 100% block, pad 15px 20px, radius 5px  | 1px `#ebebeb`; appearance unset (native chrome off); labels 13px mb 5px; groups mb 15px                                                                |
| Buttons     | 130×50px, radius 5px, white text       | actions justify-end, 10px gap, mt 25px; Previous `#adadad`; Next/Submit `#fa5e5b`; step-1 Previous `display:none` (NOT slot-reserved)                  |
| Date group  | 266px row / 100% mobile                | 1px `#ebebeb` radius 5px space-between; 3× borderless 90px selects; chevron 30×20px / 10px `#222`; 1px divider between items                           |
| Custom list | absolute w100%, z-index 99, radius 5px | `.init` pad 13px 20px + chevron `\e64b` right 20; option rows pad 5px 20px hidden until open; hover/selected `#fa5e5b` + white; `.select-list` mb 47px |
| Transition  | fade, 300ms                            | step change transition                                                                                                                                 |

Unused in the demo (skip): Themify icon font + `themify-icons.css`
(icons → lucide, do not ship), the date-picker plugin itself (native
`<select>`s — the plugin just fills them), jquery.validate (implement
validation in React state), the source's `alert('Sumited')` (→ inline
success panel).

### Icon mapping (lucide — ALL probed 2026-08-18, `typeof` = object)

| Source glyph (Themify)          | Recreation                                                       |
| ------------------------------- | ---------------------------------------------------------------- |
| `ti-user` (Personal tile)       | lucide `User`                                                    |
| `ti-email` (Contact tile)       | lucide `Mail`                                                    |
| `ti-star` (Offical tile)        | lucide `Star`                                                    |
| `ti-credit-card` (Payment tile) | lucide `CreditCard`                                              |
| `ti-angle-down` / `\e64b`       | lucide `ChevronDown` (date items + list)                         |
| `\e717` (validate error icon)   | lucide `CircleAlert` (AlertCircle also exports; use CircleAlert) |

Probe every icon with `node -e "console.log(typeof require('lucide-react').X)"`
before use (renames bite silently). No brand icons needed in this
template (no social fields).

### Picsum placeholder plan

**NONE.** Wizard 11 has a SOLID coral page background (`#fa6d6a`) and zero
photos — tiles are icon-only, no avatar, no imagery. Everything copies
over as CSS + lucide icons. (Do not invent photos that the source lacks.)

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/dispel` from the simplest existing app
       (`cp -r apps/<simplest> apps/dispel`), rename package to
       `@free-react-templates/dispel`, add Roboto Slab 400/700 Google
       Fonts `<link>` in index.html, set `public/CNAME` =
       `dispel.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): Wizard (4 panels; initial step 1; tile
       states — current coral, unvisited disabled, visited clickable;
       Next blocked when invalid; blur validation; valid advance; fade;
       Previous hidden on step 1 / shown after; Submit success panel),
       Step1 (name fields + asterisks, date group Day/Month/Year ranges + defaults, gender list), Step2 (email/phone/address/country),
       Step3 (4 official fields), Step4 (bank/holder/expiry/payment
       type/card/CVC), DateGroup (3 selects + defaults + chevrons),
       CustomList (open/close/select/hover/aria states), ErrorField
       (error icon + aria-invalid + valid flip), Footer (Component Dock
       credit), App (landmarks, document title "Dispel — Sign-Up Form
       Wizard"). NOTE jsdom: custom-list toggles are CLICK-based in the
       source — use `fireEvent.click` (user.click simulates hover first
       and can double-toggle on hover-sensitive widgets).
3. [ ] Layout shell: coral `#fa6d6a` page (`bg-[#fa6d6a]`), 60px 0
       vertical padding, centered white card (max-w 630px, radius 10px,
       shadow `0px 3px 9.5px 0.5px rgba(0,0,0,0.1)`), uppercase 20px
       bold centered title, form padding `32px 90px 40px 90px`
       (30px sides <480px); responsive: card `calc(100% - 40px)`,
       stacked rows <768px.
4. [ ] Tile step row: 4 buttons (User/Mail/Star/CreditCard + label) in
       a space-between row (90×90px, radius 5px, `#adadad` inactive /
       `#fa5e5b` current, white icon+text); unvisited tabs
       `aria-disabled` + non-interactive; visited tabs clickable;
       `aria-selected` on current — mobile: 150px, stacked, centered.
5. [ ] Step 1 Personal: First name*, Last name*, date group (3 native
       selects in a bordered 266px box: Day 01–31 / Month Jan–Dec / Year
       current−120..current, defaults "Day"/"Month"/"Year", chevrons +
       dividers) + Gender custom list (160px; Male / Female), User name*,
       Password*. Label+asterisk pattern; inputs 15px 20px padding, 1px
       `#ebebeb`, radius 5px.
6. [ ] Custom list widget (shared component, used by Gender / Country /
       Payment type): closed control = first option + ChevronDown;
       click opens bordered list (z-index above siblings); option click
       sets text + selected + closes; hover `#fa5e5b` + white; expose
       listbox/option ARIA + `aria-expanded`; outside click closes
       (optional but good).
7. [ ] Steps 2–4 panels: Contact (Email*, Phone* number, Address*,
       Country list), Official (Employee ID*, Designation*, Department*,
       Working hours*), Payment (Bank Name*, Holder Name*, expiry date
       group + Payment type list, Card Number* number + CVC* in a row).
8. [ ] Validation-navigation: React-state validation mirroring
       jquery.validate — required fields per step; `onBlur` per-field
       validate; Next blocked while current step invalid (`aria-invalid` + red `#ff1212` border + CircleAlert icon at the field row's top
       right, 13px); valid fields flip to `#666` border; error text is
       EMPTY (icon-only — no message copy); fade 300ms between steps;
       Previous hidden entirely on step 1 (conditional render — it's
       `display:none` in the source, no slot), grey `#adadad` on steps
       2–4; labels Previous / Next / Submit.
9. [ ] Submit success: on step 4 Submit (all valid) → replace the panel
       content with an inline success state ("Account created" +
       friendly line; no alert, no fake network); test asserts the
       success panel appears and the form disappears.
10. [ ] Footer: minimal Component Dock credit linking
        https://www.componentdock.com/.
11. [ ] Run `npm run verify:app -- dispel` (typecheck → lint → vitest
        100% → build) and fix until green. NOTE the coverage-race
        pitfall: if a sibling stream's vitest is running in the shared
        tree it can wipe your `coverage/.tmp`; wait it out and re-run.
12. [ ] Open PR `feat/template-dispel` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL (the `/etc/bwiz/` one), token
        list (coral `#fa6d6a`/`#fa5e5b`, Roboto Slab, 90px tiles,
        130×50px buttons), and what differs (renamed "Dispel", Roboto
        Slab via Google Fonts, lucide icons — no themify font, NO picsum
        needed, fixed source typos EMPLYEE/Offical/Informaltion,
        validation errors icon-only + announced (`aria-invalid`), inline
        success panel instead of `alert('Sumited')`, accessible
        semantics + focus rings, Component Dock footer).
13. [ ] Bookkeeping after merge: mark TEMPLATES.md line 848 `[x]` + surge
        URL (`https://dispel.free.componentdock.com`), `npm run
    readme:status`, push.
