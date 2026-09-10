# Charm (Colorlib Wizard 6) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-charm`. Recreation name: **Charm** (NEW name —
> the ColorLIB source keeps its name "Colorlib Wizard 6").

## Source mapping

- **ColorLIB item**: "Colorlib Wizard 6" (TEMPLATES.md line 874; section
  "## Bootstrap Wizards (30)" at line 844). The
  `wp/template/colorlib-wizard-6/` slug appears exactly ONCE in
  TEMPLATES.md (no dup rows; close-string matches for wizard-1/2/11/21..29
  rows are prefix substrings, not duplicates). Member 6 of colorlib-wizard-1 … 30.
- **Source URL**: https://colorlib.com/wp/template/colorlib-wizard-6/
- **Live preview URL — REACHABLE (verified by direct fetch):**
  `https://colorlib.com/etc/bwz/colorlib-wizard-6/index.html`
  (HTTP 200, 5,386 bytes, 148 lines, `<title>FormWizard_v6</title>`).
  (The naive `https://preview.colorlib.com/theme/colorlib-wizard-6/`
  returns 404 — the whole wizard family lives under
  `https://colorlib.com/etc/bwz/colorlib-wizard-<n>/index.html`. Do not
  redo this lookup.)
- **Preview CSS**: `css/style.css` (9,111 bytes, 377 lines — ALL styling,
  custom written, NO Bootstrap, NO jquery.steps.css)
- **Preview JS**: `js/main.js` (1,257 bytes, 40 lines: jQuery Steps init +
  custom step-click handlers + form-holder focus toggle)
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-6.jpg`

## Reference research (done — do not redo)

### Live preview DOM (fetched + saved to /tmp)

**3 sections** in `#wizard` (738×554px, white bg, 10px radius, shadow, padding 71px 93px 0):

- **Section 1 — Profile** (`div.form-header`, display:flex):
  - Left (33.75% width): `div.avartar` → `img` (avatar placeholder) +
    `div.avartar-picker` → hidden file input + label "Choose Picture"
    (uppercase, 800 weight) with camera icon.
  - Right (66.25% width): `div.form-group` → three side-by-side `div.form-holder`
    (First Name, Last Name, Team Name) → then full-width `div.form-holder`
    (Email, type=email) → `div.form-holder` (Create a password, type=password).

- **Section 2 — Interests** (`div.grid`):
  - Two `div.row` (display:flex), each with 3 `a.grid-item` links (30% width,
    134px height, 7px radius, background-image, centered icon + label):
    Row 1: Programming, Research, Teacher. Row 2: Tour Guide, Business, Artist.

- **Section 3 — Address** (`div.form-row` ×2):
  - Row 1: Street Name | Street Number
  - Row 2: City | Country

### Key JavaScript (`main.js`)

- `$("#wizard").steps({` with `headerTag: "h4"`, `bodyTag: "section"`,
  `transitionEffect: "fade"`, `enableAllSteps: true`, `transitionEffectSpeed: 500`.
- `onStepChanging` adds/removes `.actions-next` class (space-between) —
  NO validation gating (all steps freely navigable).
- No `onFinishing`/`onFinished` override — the Finish button submits the
  form (which has no action = demo, no real submit).
- Custom step-dot click: adds `.checked` class to parent + siblings.
- `.forward` triggers `steps('next')`, `.backward` triggers `steps('previous')`.
- `.form-holder` focus → removes `.active` from all, adds to current.

### Design tokens (from `css/style.css`)

| Token             | Value                                  | Notes                              |
| ----------------- | -------------------------------------- | ---------------------------------- |
| Page bg           | Gradient: periwinkle → lavender/pink   | `background: url(form-wizard-bg.jpg)` + gradient; `cover` |
| Card bg           | `#ffffff`                              | `#wizard`, 738×554px               |
| Card radius       | `10px`                                 | border-radius                      |
| Card shadow       | `0px 2px 7px 0px rgba(0,0,0,0.1)`      |                                    |
| Card padding      | `71px 93px 0`                          | Top 71px, sides 93px               |
| Text primary      | `#333333`                              | body, inputs, labels               |
| Text muted        | `#808080`                              | placeholders                       |
| Accent (Next)     | `#aac1f0` (periwinkle blue)            | Continue button bg                 |
| Accent hover      | `#98add6`                              | Next button hover                  |
| Accent (Prev)     | `#f6c2ec` (dusty pink)                 | Back button bg                     |
| Accent prev hover| `#dbadd2`                              | Prev button hover                  |
| Accent (dots)     | `#f6c2ec` (current) / `#ffffff` (border) | Step indicator dots             |
| Input bg          | `#f7f7f7`                              | `.form-control`                    |
| Input radius      | `23px`                                 | Pill-shaped inputs                 |
| Input height      | `46px`                                 |                                    |
| Font family       | `Poppins` 400/500, `Muli` 700          | Google Fonts — Poppins 400/500/700 |
| Font size         | `13px`                                 | Base body                          |
| Nav button        | 146px × 46px, radius 23px              | Continue (blue) / Back (pink)      |
| Avatar col        | 33.75%                                 | Left of `.form-header`             |
| Form col          | 66.25%                                 | Right of `.form-header`            |
| Grid item         | 134px height, 30% width, 7px radius    | Interest grid tiles                |
| Form holder dot   | 10px × 10px, `2px solid #f6c2ec`       | `:before` pseudo on `.form-holder` |

### Screenshot (`colorlib-free-wizard-6.jpg`)

Browsed visually in the browser — confirms the live preview DOM exactly:
- Browser frame (Google Chrome on macOS), URL `colorlib.com`.
- Background: smooth vertical linear gradient from soft periwinkle blue
  (top) to gentle lavender/pink (bottom).
- Semi-transparent white brush-script text "TELL US ABOUT YOURSELF" near
  the top.
- Centered white card with 10px rounded corners, soft shadow, floating
  over the background.
- Left side (≈1/3 of card): circular avatar placeholder (smiling woman,
  hair in a bun, light purple border) + "CHOOSE PICTURE" text with
  camera icon below.
- Right side (≈2/3): five input fields — FIRST NAME, LAST NAME, TEAM NAME
  (side by side), EMAIL, CREATE A PASSWORD — with `#f7f7f7` light gray
  backgrounds, 23px rounded corners, uppercase placeholder labels.
- Vertical timeline column left of inputs: small circles, current (EMAIL)
  filled pink, others hollow with thin purple outline.
- "CONTINUE" button at bottom left: pill-shaped (23px radius), muted
  periwinkle blue, white uppercase text with right arrow icon.
- Bottom center: three pagination dots, third (rightmost) filled pink
  (indicating step 3 of 3).
- Aesthetic: soft pastel gradient, clean white form card, minimalist,
  friendly, modern.

### Icon mapping (lucide — replace zmdi)

| Source glyph (zmdi)   | Recreation       |
| --------------------- | ---------------- |
| `zmdi-chevron-right`  | lucide `ChevronRight` |
| `zmdi-chevron-left`   | lucide `ChevronLeft`  |
| `zmdi-camera`         | lucide `Camera`       |

### Picsum placeholder plan

The source uses local image files not suitable for copying:
- `images/avartar.png` (avatar) → `https://picsum.photos/seed/charm-avatar/96/96`
- `images/form-wizard-bg.jpg` (page background) → solid gradient via Tailwind
  (or `https://picsum.photos/seed/charm-bg/1400/800` as fallback)
- `images/{programming,research,teacher,tour-guide,business,artist}-bg.jpg`
  (grid backgrounds) → `https://picsum.photos/seed/charm-grid-N/150/150`
- `images/{programming,research,teacher,tour-guide,business,artist}.png`
  (grid icons) → `https://picsum.photos/seed/charm-icon-N/48/48`

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/charm` from the simplest existing app
       (`cp -r apps/<simplest> apps/charm`), rename package to
       `@free-react-templates/charm`, add Poppins 400/500/700 Google Font
       `<link>` in index.html, set `public/CNAME` =
       `charm.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): 3-step wizard (Profile, Interests,
       Address); pastel gradient background; white card with 10px radius;
       avatar + "Choose Picture"; side-by-side inputs; interest grid;
       address form; step indicator dots; Continue/Back buttons; unblocked
       navigation; responsive layout; Footer (Component Dock credit).
3. [ ] Layout shell: pastel gradient background + centered white card
       (738px max, 10px radius, shadow).
4. [ ] Step indicator: bottom dot row (10px circles, current = 22px pink
       filled, inactive = 10px white-bordered). Hidden on mobile.
5. [ ] Section 1 — Profile: avatar image + "Choose Picture" label (left),
       First/Last Name + Team Name (side by side), Email, Create Password
       (right). All inputs 46px height, `#f7f7f7` bg, 23px radius,
       uppercase placeholders.
6. [ ] Section 2 — Interests: 2×3 grid of clickable tiles
       (Programming, Research, Teacher, Tour Guide, Business, Artist).
7. [ ] Section 3 — Address: Street Name | Street Number (row), City |
       Country (row).
8. [ ] Navigation: Continue button (blue `#aac1f0`), Back button (pink
       `#f6c2ec`), Back hidden on step 1. `enableAllSteps: true` — no
       validation gating.
9. [ ] Responsive: @media max-width 767px — background `none` (solid),
       card width auto, avatar 100% centered, grid items 100%, step dots
       hidden, form rows stack.
10. [ ] Footer: minimal Component Dock credit linking
       https://www.componentdock.com/.
11. [ ] Run `npm run verify:app -- charm` (typecheck → lint → vitest
       100% → build) and fix until green.
12. [ ] Open PR `feat/template-charm` → merge immediately
       (`gh pr merge --squash --delete-branch`); PR description must
       include: source URL, live preview URL
       (https://colorlib.com/etc/bwz/colorlib-wizard-6/index.html),
       token list (pastel gradient bg, white card, `#f6c2ec` pink accent,
       `#aac1f0` blue accent, `#f7f7f7` inputs, 23px radius, Poppins font),
       and what differs (renamed "Charm", Poppins via Google Fonts,
       lucide icons — no zmdi font, picsum placeholders for avatar/icons/
       bg, unblocked navigation).
13. [ ] Bookkeeping after merge: mark TEMPLATES.md line 874 `[x]` + surge
       URL (`https://charm.free.componentdock.com`), `npm run
       readme:status`, push.
