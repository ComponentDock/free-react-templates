# Stepnova (ColorLib Wizard 25) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-stepnova`. Recreation name: **Stepnova** (NEW name —
> the ColorLib source keeps its name "Colorlib Wizard 25").

## Source mapping

- **ColorLib item:** "Colorlib Wizard 25" (TEMPLATES.md line 865; section
  "## Bootstrap Wizards (30)" at line 844).
- **Source URL:** https://colorlib.com/wp/template/colorlib-wizard-25/
- **Preview URL — REACHABLE (verified 2026-09-07 by direct fetch):**
  **`https://colorlib.com/etc/bwiz/colorlib-wizard-25/index.html`**
  (HTTP 200, `<title>Wizard-v5</title>`).
  **The naive `https://preview.colorlib.com/theme/colorlib-wizard-25/`
  returns 404** — the entire 30-member wizard family lives under
  `colorlib.com/etc/bwiz/colorlib-wizard-<n>/index.html` (path confirmed
  for wizard-12, -25). Do not redo this lookup.
- **Preview CSS:** `css/style.css` (ALL styles, hand-written, NO Bootstrap) +
  `css/nunito-font.css` (local Nunito @font-face) +
  `fonts/material-design-iconic-font/` (zmdi icons → REPLACE with lucide).
  Scripts: `js/jquery-3.3.1.min.js`, `js/jquery.steps.js`, `js/main.js`.
  Fonts: Nunito (local, all weights) → **Google Fonts `<link>` (400, 600, 700)**.

## Reference research (done — do not redo)

### Screenshot (`colorlib-free-wizard-25.jpg`, 1200×972 AVIF)

Pixel analysis performed via PIL. Visual design: dark navy/slate full-viewport
background (`#383a4f`), centered wizard card with muted purple body (`#525575`),
white step header bar with 3 circular step indicators, green action buttons,
form fields with white inputs on purple background. The card casts a
`0px 8px 20px 0px rgba(0,0,0,0.15)` shadow. Aesthetic: clean, professional,
payment/account setup wizard with a dark theme and green accents.

### HTML structure (from live preview, 3 sections)

**Section 1 — Personal Information:**
- First Name + Last Name (side-by-side, 50% each, placeholders "ex: Laura" / "ex: Vaughn")
- Gender: radio buttons (Male default, Female)
- Address Location: full-width, with zmdi-pin icon, placeholder "622 Dixie Path..."
- Phone Number + Zip Code (side-by-side, ~60/40%)
- Date of Birth: three selects (day 15-19, month Jan-May, year 2013-2018)

**Section 2 — Bank Information:**
- Bank Name + Branch Name (side-by-side, Bank has zmdi-search icon)
- Email Address: full-width, email input
- Account Name: full-width, text input
- Account Number: full-width, text input with zmdi-card icon (left-padded)
- Expiry Date: three selects (day, month, year)

**Section 3 — Confirm Details:**
- "Comfirm Details" heading (note: original typo preserved in source)
- Read-only table: Full Name, Email, Phone, Address, Gender, Account Name, Account Number
- Table rows have `rgba(255,255,255,0.2)` borders, `rgba(255,255,255,0.1)` bg

### Design tokens (live stylesheet + rendered page, verified 2026-09-07)

| Token | Value | Use |
| --- | --- | --- |
| Page bg | `#383a4f` | `.page-content`, full viewport flex center |
| Wizard card | `#525575`, 851px, radius 10px | `.wizard-form` inside `.wizard-v5-content` |
| Card shadow | `0px 8px 20px 0px rgba(0,0,0,0.15)` | `.wizard-v5-content` |
| Steps header | `#fff` bg, top-radius 10px | `.steps` with `margin-bottom: 35px` |
| Step icon pending | `rgba(0,0,0,0.1)` bg, `#666` text | 40x40px circle |
| Step icon current | `rgba(37,180,91,0.2)` bg, `#25b45b` border 1px, green text | active step |
| Step icon done | `#25b45b` solid bg, `#fff` text | completed step |
| Step text | `#333` | `.step-text` |
| Brand green | `#25b45b` | buttons, current step, hover `#219c50` |
| Form labels | `#fff` | `.form-holder label` |
| Inputs | `#fff` bg, `3px` radius, `#000` text, Nunito 16px | `input, select` |
| Placeholder (name) | `#999` | first_name, last_name |
| Placeholder (contact) | `#333` | address, phone |
| Placeholder (bank) | `#666` | bank, branch fields |
| Radio | `#fff` text, Male default | `#radio` |
| Select | `#fff` bg, `#666` text, custom arrow | `select` |
| Confirm table bg | `rgba(255,255,255,0.1)` | `.table-responsive`, 5px radius |
| Confirm th | `#ccc`, 16px, weight 400 | 29% width, right border |
| Confirm td | `#fff`, 16px, weight 600 | |
| Confirm border | `rgba(255,255,255,0.2)` | row + column dividers |
| Confirm heading | `#fff`, 25px, weight 600 | `.inner h3` |
| Action buttons | 50x50px circles, `#25b45b`, white icons 26px | `.actions ul li` |
| Button hover | `#219c50` | `.actions ul li:hover` |
| Back button | `opacity: 0` on step 1 | `.actions ul li:first-child` |
| Font | Nunito 400/600/700 (Google Fonts), 18px base | `.wizard-v5-content` |
| Card margin | `160px 0 115px` | desktop |
| Content padding | `10px 220px 5px 45px` (step 0/1 content) | form area |
| Transition | fade, 500ms | jQuery Steps `transitionEffectSpeed: 500` |
| All steps enabled | `enableAllSteps: true` | no validation gating |

### Behavior (from main.js)

- jQuery Steps plugin: `headerTag: "h2"`, `bodyTag: "section"`, `transitionEffect: "fade"`, `enableAllSteps: true`, `autoFocus: true`, `transitionEffectSpeed: 500`
- `onStepChanging`: copies all field values into the confirmation table (Full Name = first + last, Email, Phone, Address, Gender, Account Name, Account Number)
- No validation logic (always returns `true`)
- Back button hidden on step 1 via CSS `opacity: 0`

### Icon mapping (lucide — probe ALL with `typeof` before use)

| Source glyph (zmdi) | Recreation |
| --- | --- |
| `zmdi-check` (step header) | lucide `Check` |
| `zmdi-chevron-right` (Next/Finish) | lucide `ChevronRight` |
| `zmdi-chevron-left` (Back) | lucide `ChevronLeft` |
| `zmdi-pin` (address icon) | lucide `MapPin` |
| `zmdi-search` (bank name icon) | lucide `Search` |
| `zmdi-card` (account number icon) | lucide `CreditCard` |

### Picsum placeholder plan

**NONE.** This wizard has a solid dark navy page background (`#383a4f`) and
zero photos — no tiles, no avatars, no imagery. Everything is CSS + form fields
+ lucide icons. (Do not invent photos the source lacks.)

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/stepnova` from the simplest existing app
       (`cp -r apps/<simplest> apps/stepnova`), rename package to
       `@free-react-templates/stepnova`, add Nunito 400/600/700
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `stepnova.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): Wizard (3 sections; step 1 initial;
       Back hidden on step 1, visible after; all steps always enabled;
       fade 500ms), StepIndicator (3 circles: pending gray, current
       green-border, done solid green), PersonalInfo (First+Last
       side-by-side, Gender radios Male default, Address full-width
       with MapPin, Phone+Zip side-by-side, DOB 3 selects), BankInfo
       (Bank+Branch side-by-side with Search icon, Email email type,
       Account Name, Account Number with CreditCard icon, Expiry
       selects), ConfirmDetails ("Confirm Details" heading, 7-row
       table with th/td), Footer (Component Dock credit), App
       (landmarks, document title "Stepnova — Account Setup Wizard").
3. [ ] Layout shell: dark navy `#383a4f` page (`bg-[#383a4f]`), flex
       center, centered card (max-w 851px, `bg-[#525575]`, radius 10px,
       shadow `0px 8px 20px 0px rgba(0,0,0,0.15)`); responsive:
       margin `180px 20px` ≤1199px.
4. [ ] Steps header: white bar (top-radius 10px, `mb-9`), flex
       space-between, 3 step items each 33.33% width with 40x40px
       circles (pending: `bg-black/10 text-gray-500`; current:
       `bg-green-100 border border-green-500 text-green-500`; done:
       `bg-green-500 text-white`), Check icon in each, step text
       `#333`.
5. [ ] Personal Information form: form rows flex with 13px padding,
       First+Last name 50% each (white bg, 3px radius, 16px Nunito),
       Gender radios (white text, Male default), Address full-width
       with MapPin icon (absolute positioned), Phone+Zip side-by-side
       (~60/40%), DOB three selects (day/month/year, ~16.7% each,
       `mr-5` gap).
6. [ ] Bank Information form: Bank+Branch side-by-side (Bank has
       Search icon), Email full-width (type="email"), Account Name
       full-width, Account Number full-width with CreditCard icon
       (left padding 50px), Expiry Date three selects same as DOB.
7. [ ] Confirm Details: heading "Confirm Details" (25px bold white),
       read-only table (full width, `bg-white/10`, 5px radius, th
       `#ccc` 400, td `#fff` 600, borders `white/20`). Populate via
       state passed from wizard controller.
8. [ ] Wizard controller: 3 steps, React state for currentStep,
       onStepChanging copies all values to confirmation data,
       `enableAllSteps: true` (always navigate), fade transition
       500ms, autoFocus on first field.
9. [ ] Action row: two 50x50px circular buttons (radius 50%),
       flex space-between, `px-12 pb-12` padding. Back = ChevronLeft
       on `#25b45b` (hidden on step 1 via opacity), Next/Finish =
       ChevronRight on `#25b45b`, hover `#219c50`.
10. [ ] Footer: minimal Component Dock credit linking
       https://www.componentdock.com/.
11. [ ] Run `npm run verify:app -- stepnova` (typecheck → lint → vitest
       100% → build) and fix until green.
12. [ ] Open PR `feat/template-stepnova` → merge immediately
       (`gh pr merge --squash --delete-branch`); PR description must
       include: source URL, preview URL (the `/etc/bwiz/` one), token
       list (dark navy `#383a4f` / purple `#525575` / green `#25b45b`,
       Nunito font, 851px card, 50px circular buttons), and what
       differs (renamed "Stepnova", Nunito via Google Fonts, lucide
       icons — no zmdi font, NO picsum needed, all steps always enabled,
       no validation, typo "Comfirm" corrected to "Confirm" in heading,
       Component Dock footer).
13. [ ] Bookkeeping after merge: mark TEMPLATES.md line 865 `[x]` + surge
       URL (`https://stepnova.free.componentdock.com`), `npm run
       readme:status`, push.
