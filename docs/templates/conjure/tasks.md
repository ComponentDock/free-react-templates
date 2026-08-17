# Conjure (ColorLib Wizard 1) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-conjure`. Recreation name: **Conjure** (NEW name —
> the ColorLib source keeps its name "Colorlib Wizard 1").

## Source mapping

- **ColorLib item:** "Colorlib Wizard 1" (TEMPLATES.md line 846; section
  "## Bootstrap Wizards (30)" at line 844). The
  `wp/template/colorlib-wizard-1/` slug appears exactly ONCE in
  TEMPLATES.md (no dup rows to mark — the 11 `colorlib-wizard-1` grep hits
  are substring matches for wizard-10..19 rows).
- **Source URL:** https://colorlib.com/wp/template/colorlib-wizard-1/
- **Preview URL — REACHABLE (verified 2026-08-18 by direct fetch AND
  real-browser interaction through all three steps):**
  **`https://colorlib.com/etc/bwiz/colorlib-wizard-1/index.html`**
  (HTTP 200, 5,437 bytes, 143 lines, `<title>FormWizard_v1</title>`).
  **The naive `https://preview.colorlib.com/theme/colorlib-wizard-1/`
  returns 404** — the whole 30-member wizard family lives under
  `colorlib.com/etc/bwiz/colorlib-wizard-<n>/index.html` (path confirmed
  by a public reference: twbs/bootstrap issue #31520 links
  `colorlib.com/etc/bwiz/colorlib-wizard-15/index.html`). Do not redo this
  lookup.
- **Preview CSS:** `css/style.css` (9,381 bytes — ALL styles, hand-written,
  NO Bootstrap) + `fonts/material-design-iconic-font/...` (icon font —
  REPLACE with lucide, do not ship). Scripts: `js/jquery-3.3.1.min.js`,
  `js/jquery.steps.js` (wizard plugin), `js/main.js` (10 lines: steps init
  - dot-checked handler + Forward/Backward handlers + bespoke dropdown
    toggle/select/outside-close). Fonts: local Muli-Regular +
    Muli-SemiBold @font-face → **Google Fonts `<link>` (Muli 400,600)**.

## Reference research (done — do not redo)

### Screenshot (`colorlib-free-wizard-1.jpg`, 1200×972 JPEG)

Browsed visually in the browser 2026-08-18. Warm cream `#f9f6f1` page;
centered white card with soft shadow; left 40%: sneakers photo (blue/purple

- white/green pair, cactus pot, cream wall); right 60%: centered
  "REGISTRATION" in spaced uppercase with thin lines above/below (the h3's
  1px `#dad8e4` border), three small dots below (first filled olive `#6d7f52`,
  others pale `#e9e0cf`), olive subtitle "Please fill with your details", five
  underline-only fields, Male radio filled, long pre-checked consent line,
  single BEIGE "Forward →" button bottom-right (Backward invisible = step-1
  state). Matches the live DOM/CSS exactly. Images are demo photography →
  picsum placeholders.

### Family shape (series context)

30-member "Bootstrap Wizards" family (`colorlib-wizard-1` … `-30`): all are
the same jQuery-Steps skeleton — cream page, split card, dot navigation,
Backward/Forward/Submit row — differing per member in color scheme + product
photos. **Conjure is the FIRST prep of the family (chain seed).** Its token
set: page `#f9f6f1`, olive `#6d7f52`, sand `#e9e0cf`, indigo title
`#453e79`, border `#dad8e4`, underline `#e6e6e6`, dropdown `#81acee`.
Sibling preps (wizard-2..30) will swap these colors — do NOT assume
Conjure's palette carries over. Navigation is NEVER blocked
(`enableAllSteps: true`, zero validation) — do not invent validation.

### Design tokens (live stylesheet + browser-rendered colors, verified 2026-08-18)

| Token        | Value                                                                       | Use                                                                                                     |
| ------------ | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Page bg      | `#f9f6f1`                                                                   | wrapper, 100vh flex-center (mobile: 1201px, bg none)                                                    |
| Card         | `#fff`, `0 0 5px rgba(0,0,0,.2)`                                            | 920px wide (≤991px 768px); 40% image / 60% form; both 521px                                             |
| Title        | `#453e79`/`#dad8e4`                                                         | h3 "Registration": 22px Muli 600, uppercase, 7px tracking, 1px border, pad 5px 15px, mb 75px            |
| Subtitle     | `#6d7f52`, 20px Muli 600                                                    | step subtitle p, centered, mb 26px                                                                      |
| Accent olive | `#6d7f52` (hover `#849963`, link-hover `#89b843`)                           | active/checked dots, enabled Forward/Submit, links                                                      |
| Sand         | `#e9e0cf` (hover `#cfc7b8`)                                                 | idle dots + 58×2px connectors, beige Backward/Forward, focus underline                                  |
| Inputs       | 37px, 2px `#e6e6e6` underline, `#666` / `#999`                              | underline-only fields; focus underline → sand; textarea 99px, pad 8px 0                                 |
| Dropdown     | box 37px underline; list white, 1px `#81acee`, hover `#81acee`+white        | "Your country" + caret; US / UK / Viet Nam                                                              |
| Ticks        | 13px circle, 1px `#999` ring                                                | radio filled `#999` + white check (11px); checkbox 7px `#999` dot; consent w 63%, mt 41px (24px step 3) |
| Buttons      | 41px tall; 144/135/124px; 20px gap                                          | bottom 55px right 51px overlay; Backward chevron-left, Forward chevron-right, Submit check              |
| Button state | beige + `#666` while Backward disabled; olive + white once Backward enabled | disabled Backward `opacity: 0` but keeps its 144px slot                                                 |
| Dots         | 12px circles, 78px gap                                                      | overlay top 27.44% right 30% (mobile top 52% centered); checked fill transition 0.6s                    |
| Font         | Muli 400 / 600                                                              | Google Fonts `<link>` (source uses local @font-face files)                                              |
| Transition   | fade, 500ms                                                                 | step change transition                                                                                  |

Unused in the demo (skip): Material Design Iconic Font stylesheet (icons →
lucide ChevronLeft/ChevronRight/Check), Bootstrap.

### Live-verified behaviors (2026-08-18, real browser)

Step 1 renders REGISTRATION + 5 underlined fields + Male checked + consent
checked; dot row = 3 tabs (empty titles, dots only); Backward present but
TRANSPARENT, Forward beige. Clicking Forward → step 2: Address/City/Zip +
country dropdown; Backward + Forward now BOTH visible, Forward OLIVE (the
`li[aria-disabled=false] ~ li a` rule flips every later button green);
country dropdown opens on click (white list, 3 options), selecting Viet Nam
swaps the box text, outside click closes. Clicking Forward → step 3:
textarea "Your messagere here!" + terms link checkbox + SUBMIT (olive).
Field values persist across steps. No validation anywhere.

## Implementation checklist

1. [ ] Scaffold `apps/conjure` (copy the simplest existing app; package
       `@free-react-templates/conjure`; CNAME `conjure.free.componentdock.com`;
       homepage `https://conjure.free.componentdock.com`); `npm install` at
       root to register the workspace.
2. [ ] `src/index.css` — `@theme` tokens: page `#f9f6f1`, card shadow, accent
       `#6d7f52` (+ hovers), sand `#e9e0cf`, title `#453e79` + border
       `#dad8e4`, ink `#666`, muted `#999`, line `#e6e6e6`, dropdown
       `#81acee`, tick `#999`; Muli Google Fonts `<link>` (400,600). NO
       ColorLib strings in any file — replace provenance comments with token
       notes (e.g. "olive accent: #6d7f52 / sand: #e9e0cf").
3. [ ] Components: `Wizard` (step state, dot list, tabpanels, nav buttons,
       fade transition, footer) + per-step content components
       (`RegistrationStep`, `AdditionalInfoStep`, `MessageStep`) + a
       reusable `UnderlineInput` / `Tick` (radio+checkbox) / `CountrySelect`
       — reuse `packages/ui` (`cn()`, Button) where sensible.
4. [ ] Step data: three steps with exact subtitles ("Please fill with your
       details" / "Please fill with additional info" / "Send an optional
       message") + field definitions (placeholders verbatim: First Name,
       Last Name, Your Email, Phone Number, Age, Address, City, Zip Code;
       message textarea placeholder, consent lines).
5. [ ] Layout: cream full-viewport wrapper, flex-centered white card
       (max-w 920px), 40% image column (`picsum.photos/seed/conjure-<n>/368/521`
       per step) + 60% form column (pt 65px px 51px); h3 "Registration"
       (uppercase, 7px tracking, bordered, indigo); olive 20px subtitle;
       underline-only inputs (37px, 2px `#e6e6e6`, `#666`, placeholder
       `#999`, focus underline sand); responsive <768px stacking
       (image 100%, form 100% w/ 50px 20px 30px pad, wrapper 1201px,
       centered dots/buttons).
6. [ ] Step dots: three 12px circles with 58×2px connectors; checked/first
       olive, idle sand (0.6s fill transition); click navigates directly +
       marks progress; `role=tablist` + `aria-selected` + `aria-controls`;
       NO textual labels (dots only).
7. [ ] Navigation: Backward/Forward/Submit buttons overlaid bottom-right
       (bottom 55px right 51px), 41px, widths 144/135/124, 20px gap,
       lucide ChevronLeft/ChevronRight/Check; step 1: Backward hidden-but-
       slot-keeping (use `invisible` + aria-hidden/disabled), Forward beige;
       steps 2–3: Backward beige + Forward/Submit olive (white);
       hovers `#cfc7b8` / `#849963`; never blocked; fade 500ms; values
       persist; Submit decorative (no submit). Real `<button>`s, visible
       focus-visible rings, back-on-step-1 out of tab order.
8. [ ] Country select (step 2): 37px underline box "Your country" `#999` +
       caret-down; toggling list below (white, 1px `#81acee`, options US/UK/
       Viet Nam, hover `#81acee` white); select swaps text + closes; outside
       click closes; `aria-expanded`, `role=listbox`/`option`,
       `aria-selected`.
9. [ ] Ticks: radio group Male/Female (13px ring `#999`, checked fill `#999` + white Check 11px, 26px gap, Male default checked), consent
       checkboxes pre-checked (13px ring + 7px `#999` dot; step-1 line
       "Nor again is there anyone who loves or pursues or desires to
       obtaini." at 63% width mt 41px; step-3 "Please accept terms and
       conditions ?" with `#6d7f52` link at mt 24px).
10. [ ] Tests (TDD, 100% coverage): Wizard (renders 3 dots + current panel;
        initial step 1; Forward→2→3; Backward back; dot jumps + progress
        marking; step-1 Backward hidden + out of tab order; button color
        classes per step; Submit on step 3; no validation blocking; values
        persist; fade class applied); RegistrationStep (fields+placeholders,
        Male preselected, consent checked, underline focus color);
        AdditionalInfoStep (fields, dropdown open/close/select/outside-
        click/hover class); MessageStep (textarea + terms link); Tick
        component (both variants); CountrySelect (aria states); Footer
        (Component Dock credit); App composition (landmarks, document title
        "Conjure — Registration Form Wizard"). jsdom notes: use
        `fireEvent.click` for the dropdown + ticks (label-wrapped inputs
        toggle via click; user.click's hover-first simulation is fine for
        buttons but keep ticks simple); MemoryStorage polyfill from
        `apps/cura/src/test/setup.ts` if localStorage is needed.
11. [ ] Run `npm run verify:app -- conjure` (typecheck → lint → vitest 100% →
        build) and fix until green.
12. [ ] Open PR `feat/template-conjure` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL (the `/etc/bwiz/` one), token list,
        and what differs (renamed "Conjure", Muli via Google Fonts, lucide
        icons, picsum placeholders, Component Dock footer, accessible
        semantics + focus rings).
13. [ ] Bookkeeping after merge: mark TEMPLATES.md line 846 `[x]` + surge
        URL, `npm run readme:status`, push.
