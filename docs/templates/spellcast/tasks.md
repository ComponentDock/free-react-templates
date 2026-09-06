# Spellcast (Colorlib Wizard 9) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-spellcast`. Recreation name: **Spellcast** (NEW name
> — the ColorLib source keeps its name "Colorlib Wizard 9").

## Source mapping

- **ColorLib item:** "Colorlib Wizard 9" (TEMPLATES.md line 877; section
  "## Bootstrap Wizards (30)" at line 846). The
  `wp/template/colorlib-wizard-9/` slug appears exactly ONCE in
  TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/colorlib-wizard-9/
- **Preview URL — REACHABLE via alternative path (verified 2026-09-06):**
  **`https://colorlib.com/etc/bwiz/colorlib-wizard-9/index.html`** (HTTP
  200, 10,419 bytes, `<title>FormWizard_v9</title>`). **The naive
  `https://preview.colorlib.com/theme/colorlib-wizard-9/` returns 404** —
  the whole 30-member wizard family lives under
  `colorlib.com/etc/bwiz/colorlib-wizard-<n>/index.html`.
- **Preview CSS:** `css/style.css` (5,915 bytes — ALL styles, hand-written,
  NO Bootstrap). Icon font: Material Design Iconic Font → **replace with
  lucide-react** (do NOT ship the font). Scripts: `js/jquery-3.3.1.min.js`,
  `js/jquery.steps.js` (wizard plugin), `js/main.js` (steps init).
  Fonts: local Poppins-Regular/Medium/SemiBold @font-face → **Google Fonts
  `<link>` (Poppins 400, 500, 600)**.

## Reference research (done — do not redo)

### Screenshot (`colorlib-free-wizard-9.jpg`, AVIF format)

Downloaded from ColorLib CDN (200 OK). The image shows a full-viewport page
with a blue-toned background image. Centered on the page is a white card
(wizard panel) with generous padding. Inside the card: a large blue heading
in uppercase with letter-spacing, a step counter "1 / 3" in the top-right
corner (light gray), form fields arranged in 2-column rows with left-aligned
icons, and a button row at the bottom. The overall aesthetic is clean and
modern with a blue brand color. The background appears to be a gradient or
photographic texture — the recreation will use a CSS gradient instead of the
proprietary image.

### Family shape (series context)

30-member "Bootstrap Wizards" family (`colorlib-wizard-1` … `-30`): all are
the same jQuery-Steps skeleton — page bg, centered card, numeric/dot
navigation, Backward/Forward/Submit row — differing per member in color scheme
+ form content. **Spellcast fills the wizard-9 gap** (the only member without
a spec). Its token set: brand blue `#3377c0`, hover `#3b87d9`, border `#ccc`,
text `#999`, label `#333`, grid-inactive `#b3b3b3`, grid-active `#3377c0`.
Sibling specs exist for all other members (wizard-1 through -30 except -9).

### Design tokens (live stylesheet, verified 2026-09-06)

| Token        | Value                          | Use                                                                                           |
| ------------ | ------------------------------ | --------------------------------------------------------------------------------------------- |
| Page bg      | image/gradient cover 100vh     | body background (recreation: CSS gradient)                                                    |
| Wrapper bg   | repeating pattern              | `.wrapper` 819px, padding 7px (recreation: subtle texture)                                    |
| Card         | `#fff`, 548px tall             | `.wizard` white bg, padding 64px 58px 0                                                       |
| Brand blue   | `#3377c0` (hover `#3b87d9`)    | h3 headings, active grid label, button bg, input focus border                                 |
| Border       | `#ccc`                         | Input borders, step counter text                                                               |
| Text/muted   | `#999`                         | Body text, input text, placeholder                                                             |
| Label        | `#333`                         | Form labels                                                                                    |
| Grid-inactive| `#b3b3b3`                      | Inactive grid item label background                                                            |
| Grid-active  | `#3377c0`                      | Active grid item label background                                                              |
| Font         | Poppins 400 / 500 / 600       | Google Fonts `<link>` (source uses local @font-face files)                                     |
| Input        | 42px, 1px `#ccc`, pad-left 46px| Full-box inputs with left icons                                                                |
| Button       | 42px × 112px, uppercase        | outline first (back), solid rest (forward/submit); hover `#3b87d9`                             |
| h3           | 35px, 600, uppercase, 3px ls   | Section headings, blue `#3377c0`, centered                                                     |
| Grid item    | 31.25% wide                    | 3×2 flex grid, thumb 86%, label 14% (vertical writing-mode)                                   |
| Step counter | 40px number + 15px "/ 3"       | CSS `:before`/`:after` on `ul`, position absolute top-right                                    |

### Live-verified behaviors (2026-09-06, from HTML analysis)

Step 1 renders USER PROFILE + 6 fields in 3 rows (Full Name, Education Level,
Email ID, Phone Number, Specialization, Date of Birth). Step counter shows
"1 / 3". Backward is disabled with message "Your must fill all fields, to be
able to continue". Forward is solid blue. Clicking Forward → step 2:
RESIDENTIAL ADDRESS + Country select + Street Address + Apartment + Town/City
+ County + Postcode/Zip (password). Clicking Forward → step 3: WHAT ARE YOU
DOING? + 6-item grid (Programming active by default, vertical labels, blue
active/gray inactive). Navigation never blocked (enableAllSteps). No validation.

## Implementation checklist

1. [ ] Scaffold `apps/spellcast` (copy the simplest existing app; package
       `@free-react-templates/spellcast`; CNAME
       `spellcast.free.componentdock.com`; homepage
       `https://spellcast.free.componentdock.com`); `npm install` at root
       to register the workspace.
2. [ ] `src/index.css` — `@theme` tokens: brand `#3377c0` (+ hover
       `#3b87d9`), border `#ccc`, text `#999`, label `#333`, grid-inactive
       `#b3b3b3`, grid-active `#3377c0`; Poppins Google Fonts `<link>`
       (400, 500, 600). NO ColorLib strings in any file — replace
       provenance comments with token notes (e.g. "brand blue: #3377c0").
3. [ ] Components: `Wizard` (step state, step counter, tabpanels, nav
       buttons, fade transition, footer) + per-step content components
       (`UserProfileStep`, `ResidentialAddressStep`, `ActivitySelectionStep`)
       + reusable `FormInput` (left-icon style) / `ActivityGrid` (3×2
       clickable cards) — reuse `packages/ui` (`cn()`, Button) where
       sensible.
4. [ ] Step data: three steps with exact headings ("User profile",
       "Residential address", "What are you doing?") + field definitions
       (placeholders: Full Name, Education Level, Email ID, Phone Number,
       Specialization, Date of Birth, Country, Street Address, Apartment,
       Town / City, County, Postcode / Zip) + activity grid items
       (Programming, Sports, Business, Tour Guide, Art-Design, Doctor).
5. [ ] Layout: full-viewport bg (CSS gradient or solid), centered wrapper
       (819px, subtle pattern), white wizard card (548px tall, padding
       64px 58px 0); h3 headings (35px, 600, uppercase, 3px ls, blue
       `#3377c0`, centered); step counter top-right (40px number + 15px
       "/ 3" in `#ccc`); responsive <768px stacking.
6. [ ] Form inputs: 42px, 1px `#ccc` border, `padding-left: 46px`, text
       `#999`, placeholder `#999`; left icon 17px absolutely positioned
       (left 15px, center); focus border → `#3377c0`. Date of Birth:
       datepicker (native `<input type="date">` or simple picker component).
7. [ ] Country select (step 2): native `<select>` with
       `-moz-appearance: none; -webkit-appearance: none`, custom
       chevron-down icon right 15px; options US/UK/Viet Nam.
       Postcode/Zip: `type="password"` with eye toggle icon (lucide
       Eye/EyeOff).
8. [ ] Activity grid (step 3): 3×2 flex, 31.25% items, each with thumb
       image (`picsum.photos/seed/spellcast-<n>/260/180`) at 86% width +
       vertical label at 14% (`writing-mode: tb-rl`, rotate -180deg, 11px
       uppercase, gray `#b3b3b3` bg → active blue `#3377c0` bg, white
       text); click toggles `.active`; hover reduces image opacity 0.6;
       Programming active by default.
9. [ ] Navigation: Backward/Forward/Submit buttons bottom of card
       (`margin-top: 42px`, `justify-content: space-between`), 42px ×
       112px, uppercase, letter-spacing 1px, Poppins-Medium; first button
       outline (transparent bg, 1px `#3377c0`, `#3377c0` text), others
       solid (`#3377c0` bg, white text); hovers `#3b87d9`; step 1:
       Backward disabled with message "Your must fill all fields, to be
       able to continue" (verbatim, replacing button); no validation
       blocking; fade 500ms; values persist; Submit decorative. Real
       `<button>`s, visible focus-visible rings.
10. [ ] Tests (TDD, 100% coverage): Wizard (renders step counter + current
        panel; initial step 1; Forward→2→3; Backward back; step counter
        updates; step-1 Backward disabled with message; button styles per
        step; Submit on step 3; no validation blocking; values persist;
        fade transition); UserProfileStep (6 fields + placeholders, left
        icons, focus border); ResidentialAddressStep (select dropdown +
        password toggle); ActivitySelectionStep (6 grid items, active
        state, click toggles, hover opacity); App composition (landmarks,
        document title "Spellcast — Multi-Step Form Wizard"). jsdom notes:
        use `fireEvent.click` for grid items and select; user.click for
        buttons.
11. [ ] Run `npm run verify:app -- spellcast` (typecheck → lint → vitest
        100% → build) and fix until green.
12. [ ] Open PR `feat/template-spellcast` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL (the `/etc/bwiz/` one), token
        list, and what differs (renamed "Spellcast", Poppins via Google
        Fonts, lucide icons, picsum placeholders, Component Dock footer,
        accessible semantics + focus rings).
13. [ ] Bookkeeping after merge: mark TEMPLATES.md line 877 `[x]` + surge
        URL, `npm run readme:status`, push.
