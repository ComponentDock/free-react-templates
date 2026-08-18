# Banish (ColorLib Wizard 10) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-banish`. Recreation name: **Banish** (NEW name —
> the ColorLib source keeps its name "Colorlib Wizard 10").

## Source mapping

- **ColorLib item:** "Colorlib Wizard 10" (TEMPLATES.md line 847; section
  "## Bootstrap Wizards (30)" at line 844). The
  `wp/template/colorlib-wizard-10/` slug appears exactly ONCE in
  TEMPLATES.md (no dup rows).
- **Source URL:** https://colorlib.com/wp/template/colorlib-wizard-10/
- **Preview URL — REACHABLE (verified 2026-08-18 by direct fetch):**
  **`https://colorlib.com/etc/bwiz/colorlib-wizard-10/index.html`**
  (HTTP 200, 11,666 bytes, 247 lines, `<title>FormWizard_v10</title>`).
  **The naive `https://preview.colorlib.com/theme/colorlib-wizard-10/`
  returns 404** — the whole 30-member wizard family lives under
  `colorlib.com/etc/bwiz/colorlib-wizard-<n>/index.html` (path confirmed
  for wizard-1, wizard-10, wizard-15). Do not redo this lookup.
- **Preview CSS:** `css/style.css` (6,550 bytes — ALL styles, hand-written,
  NO Bootstrap) + `fonts/material-design-iconic-font/...` (icon font —
  REPLACE with lucide/inline SVG, do not ship) + `vendor/date-picker/`
  (Air Datepicker — skip; the DOB field stays a plain input). Scripts:
  `js/jquery-3.3.1.min.js`, `js/jquery.steps.js` (wizard plugin),
  `js/main.js` (1,709 bytes: steps init + forward/backward handlers +
  bespoke dropdown toggle/select/outside-close + payment active toggle +
  datepicker init). Fonts: local Poppins-Regular @font-face → **Google
  Fonts `<link>` (Poppins 400,600)**.

## Reference research (done — do not redo)

### Screenshot (`colorlib-free-wizard-10.jpg`, 1200×972 AVIF)

Browsed visually in the browser 2026-08-18. Browser frame; split-screen
design: upper two-thirds a muted sage/teal GREEN WALL, lower third a light
grey/off-white shelf surface; right of the form: a large tropical plant
(Bird-of-Paradise/Monstera-like) in a white wireframe geometric pot + a
smaller bushy plant in a grey cylinder pot; WHITE CARD at left-of-center
(the shot shows a soft shadow + rounded corners — NOT in the live CSS, do
not add them) holding: circular avatar portrait of a woman with brown hair

- small camera/upload badge bottom-right, First Name/Last Name
  side-by-side, stacked Password/Email/Phone/Address/Nation fields with
  right-edge icons, and a dark charcoal "Next →" button at the bottom; below
  the card a progress indicator "1 2 3" with the current number underlined
  (marketing rendering — the live page's bar is a 2px track + 33%-step fill
- numeric markers). Earthy, modern, minimalist aesthetic; dark-grey text;
  dark neutral primary button. The avatar PNG itself (128×126) is a
  photographic portrait (light chestnut hair, pale blue/white collar, light
  background, embedded dark "+" upload badge bottom-right).

### Family shape (series context)

30-member "Bootstrap Wizards" family (`colorlib-wizard-1` … `-30`): all are
jQuery-Steps skeletons differing per member in layout, color scheme, and
field inventory. **Conjure (wizard-1) is the chain seed** — its tokens
(cream `#f9f6f1`, olive `#6d7f52`, 920px centered card, dot navigation) DO
NOT carry over. **Banish (wizard-10) is the SECOND prep**: photo-background
page, near-black `#333` monochrome, 451px left-floated card, progress-BAR
indicator (not dots), payment-grid final step. Sibling preps (wizard-2..9,
11..30) will differ again — never assume tokens from either sibling.
Navigation is NEVER blocked (`enableAllSteps: true`, zero validation) —
do not invent validation.

### Design tokens (live stylesheet + fetched assets, verified 2026-08-18)

| Token       | Value                                                      | Use                                                                                                                              |
| ----------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Page bg     | photo (sage/teal wall + plants), cover                     | 100vh wrapper (max-w 1400px, margin auto, flex, align-items center); mobile (<768px): bg NONE                                    |
| Card        | `#fff`, 451×656px, NO shadow/radius                        | margin-left 14.7%; inner padding 50px 58px (mobile 30px 20px, auto w/h); card-mobile mb 100px                                    |
| Ink         | `#333` (hover `#4d4d4d`)                                   | text, input underline/placeholder, icons, bar fill, numbers, Next/Finish bg, Back border, active tile                            |
| Track       | `#b7b2ab`                                                  | 2px progress track, 39.91% wide, bottom -52px centered (bottom -40px <1500px, -52px <1199px)                                     |
| Tile border | `#e5e5e5`                                                  | payment item idle border (active: `#333`)                                                                                        |
| Dropdown    | list white, 1px `#4192cb`, hover `#81acee`+white           | Gender/Language selects (options via `rel`)                                                                                      |
| Inputs      | 30px, 1px `#333` underline, w600, placeholder `#333`       | transparent bg; icons right 0, 17px `#333` (13px `.small` centered)                                                              |
| Buttons     | 51px × 118px, 15px, row bottom 50px L/R 58px space-between | Back: transparent + `#333` border/text + arrow-left (pad-left 50); Next/Finish: solid `#333` + white + arrow-right (pad-left 28) |
| Bar fill    | `#333`, 33.33% → 66.67% → 100%, 0.3s                       | `.step-2`/`.step-3` classes on the bar; numbers 13px `#333` (current at left/63.67%, "3" right)                                  |
| Avatar      | 128×126 portrait, centered, mb 29px                        | same image all 3 steps; picsum portrait + optional camera badge (lucide Camera)                                                  |
| Payment     | 2-col grid (47.76% × 53px, mb 15px)                        | logo 34.53% (brand NAME as text — no copied logos) + content 65.47% (card line + expiry line)                                    |
| Font        | Poppins 400 / 600                                          | Google Fonts `<link>` (source uses local @font-face); base 13px                                                                  |
| Transition  | fade, 300ms                                                | step change transition                                                                                                           |

Unused in the demo (skip): Material Design Iconic Font (icons → lucide /
inline SVG, do not ship), the icon-font CSS, Air Datepicker
(`vendor/date-picker/`, `datepicker.js` — the DOB input stays a plain
text input with placeholder "Date of Birth" and a `dd - mm - yyyy` hint;
documented deviation, no new dependency).

### Icon mapping (lucide + inline SVG — all probed 2026-08-18)

| Source glyph (MDI)                                                 | Recreation                                                                    |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| `zmdi-lock-open`                                                   | lucide `Lock` (Password)                                                      |
| `zmdi-email`                                                       | lucide `Mail` (Email)                                                         |
| `zmdi-smartphone-android`                                          | lucide `Smartphone` (Phone)                                                   |
| `zmdi-map`                                                         | lucide `MapPin` (Address)                                                     |
| `zmdi-account-box-o`                                               | lucide `User` (Nation)                                                        |
| `zmdi-caret-down`                                                  | lucide `ChevronDown` (select controls)                                        |
| `zmdi-twitter` / `zmdi-linkedin` / `zmdi-facebook` / `zmdi-google` | inline SVG simple-icons paths — lucide-react has NO brand icons (`undefined`) |
| `\f2ea` arrow-left (Back)                                          | lucide `ArrowLeft`                                                            |
| `\f2ee` arrow-right (Next/Finish)                                  | lucide `ArrowRight`                                                           |
| avatar "+" badge (baked into PNG)                                  | optional lucide `Camera` overlay in a dark circle bottom-right                |

Probe every icon with `node -e "console.log(typeof require('lucide-react').X)"`
before use (brand icons and renames bite silently).

### Picsum placeholder plan

- **Page background:** the sage-wall + plants scene is subject-critical
  (the whole page aesthetic). Pick `https://picsum.photos/seed/banish-bg/<w>/<h>`
  (e.g. 1400/939) and VERIFY the subject (bright+green metric or
  browser_vision) — must read as a calm interior/wall scene, not a dark or
  cityscape shot. Fallback: screen several seeds with the pixel metric
  before committing.
- **Avatar:** a portrait — verified person IDs from the replication skill:
  1027 (profile portrait, dark bg), 64 (golden-hour woman), 823 (woman with
  camera), 996 (backlit woman). Any of these reads as a profile photo;
  choose per actual render and pin the seed + update this note + tests
  together.
- **Payment logos:** NEVER copy the brand PNGs. Render the brand name as
  styled uppercase text in the `payment-logo` slot ("VISA", "MASTERCARD",
  "GIROPAY", "CARTE BLEUE", "PAYPAL", "IDEAL", "MISTER CASH", "MAESTRO")
  and paraphrase the repeated "Visa ... 8314" / "Express 06/21" lines into
  distinct per-brand card/expiry pairs (content-kind latitude — the source
  repeats the same two lines on all 8 tiles).

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/banish` from the simplest existing app
       (`cp -r apps/<simplest> apps/banish`), rename package to
       `@free-react-templates/banish`, add Poppins 400/600 Google Fonts
       `<link>` in index.html, set `public/CNAME` =
       `banish.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): Wizard (3 panels; initial step 1; Next→2→3;
       Back back; progress bar width 33/67/100% + current-number marker per
       step; step-1 Back invisible + out of tab order; button styles per
       step; Finish on step 3; no validation blocking; values persist;
       fade class applied), Step1 (avatar + fields + placeholders + icons),
       Step2 (selects + DOB + slogan + social pairs), Step3 (heading +
       8 tiles + first active + click changes active), Select (open/close/
       select/outside-click/aria states), PaymentTile (active state),
       Footer (Component Dock credit), App (landmarks, document title
       "Banish — Registration Form Wizard").
3. [ ] Layout shell: full-viewport photo bg (`bg-cover bg-bottom
   bg-center`), 100vh flex wrapper (max-w 1400px), card 451px
       (`margin-left: 14.7%`, white, 50px 58px padding); progress bar
       positioned below the card (2px track `#b7b2ab`, width 39.91%,
       centered, fill `#333` animated by step-state class); responsive
       <768px: no bg, auto-width card, static button row below, stacked
       payment grid, full-width bar.
4. [ ] Avatar + step 1 registration: centered avatar (same portrait all
       steps, optional camera badge), First/Last Name 2-col (50% / 25px gap),
       stacked Password/Email/Phone/Address/Nation underline-only inputs
       (30px, 1px `#333`, w600, `#333` placeholder, right-edge lucide
       icons).
5. [ ] Step 2 personal/social: Gender + Language custom selects (underline
       control, ChevronDown, white list 1px `#4192cb`, hover `#81acee`,
       option click sets text from value + closes, outside click closes,
       aria-expanded/listbox/option; NOTE jsdom: toggle with fireEvent.click
       — user.click simulates hover first and can double-toggle), DOB plain
       input ("Date of Birth" + `dd - mm - yyyy` hint), Slogan input,
       Twitter/LinkedIn + Facebook/Google pairs (inline SVG brand glyphs).
6. [ ] Step 3 payment: h6 "Payment Method", 8 tiles in a 2-col grid
       (1-col mobile), brand-name text in the logo slot + paraphrased card/
       expiry lines, first tile active on load (`#333` border), click swaps
       active (aria-pressed).
7. [ ] Navigation: Back/Next/Finish `<button>`s inset bottom (50px, L/R
       58px, space-between), 51×118px, Back outlined (hover fills
       `#4d4d4d`), Next/Finish solid `#333`; step-1 Back `invisible` +
       `aria-hidden` + `tabIndex={-1}` (keeps slot); fade 300ms between
       steps; Finish decorative (button, no submit); values persist; never
       blocked. Progress bar classes follow the current step (`.step-2`/
       `.step-3` equivalents).
8. [ ] Footer: minimal Component Dock credit linking
       https://www.componentdock.com/.
9. [ ] Run `npm run verify:app -- banish` (typecheck → lint → vitest 100%
       → build) and fix until green. NOTE the coverage-race pitfall: if a
       sibling stream's vitest is running in the shared tree it can wipe
       your `coverage/.tmp`; wait it out and re-run.
10. [ ] Open PR `feat/template-banish` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL (the `/etc/bwiz/` one), token list,
        and what differs (renamed "Banish", Poppins via Google Fonts,
        lucide/inline-SVG icons, picsum placeholders, brand names as text —
        no logo images, plain DOB input — no datepicker, accessible semantics
    - focus rings, Component Dock footer).
11. [ ] Bookkeeping after merge: mark TEMPLATES.md line 847 `[x]` + surge
        URL (`https://banish.free.componentdock.com`), `npm run
  readme:status`, push.
