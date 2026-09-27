# Reglodge (ColorLib Regform 19) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-reglodge`. Recreation name: **Reglodge** (NEW name —
> the ColorLib source keeps its name "Colorlib Regform 19").

## Source mapping

- **ColorLib item:** "Colorlib Regform 19" (TEMPLATES.md line 2635; section
  "## Registration Form" at line 2634). The
  `wp/template/colorlib-regform-19/` slug appears exactly ONCE in
  TEMPLATES.md (no dup rows).
- **Source URL:** https://colorlib.com/wp/template/colorlib-regform-19/
- **Preview URL — UNREACHABLE (404 as of 2026-09-27):**
  `https://preview.colorlib.com/theme/colorlib-regform-19/` returns 404.
  The naive `/theme/` path does not exist for this template.
- **Actual demo URL — REACHABLE (verified 2026-09-27 by direct fetch):**
  **`https://colorlib.com/etc/regform/colorlib-regform-19/`**
  (HTTP 200, 91 lines, `<title>RegistrationForm_v3 by Colorlib</title>`).
  This is a single-file form page — no framework, no JS beyond snippet.
- **Demo CSS:** `css/style.css` (~200 lines — ALL styles, hand-written, NO
  framework). Fonts: local Muli (Regular, SemiBold, Bold @font-face) →
  **Google Fonts `<link>` (Mulish 400, 600, 700)** for React version +
  **Abril Fatface** for heading. Icon font: Material Design Iconic Font
  (zmdi) → **Replace with lucide-react icons**.

## Reference research (done — do not redo)

### Live demo DOM analysis

The demo is a minimal single-page form — NO navbar, NO sections, NO footer
in the original. Structure:

```
<body>
  <div class="wrapper">          <!-- full-viewport, bg image, flex center -->
    <div class="inner">          <!-- white card: max-width 850px, 15px padding -->
      <form>                     <!-- 1px solid #d3cccc border, padded -->
        <h3>Registration Form</h3>  <!-- Abril Fatface, uppercase, 35px, #6d5555 -->
        <div class="cl-form-group">  <!-- 2-column row -->
          <div class="form-wrapper">  <!-- Username: text input + icon -->
            <label>Username:</label>
            <div class="form-holder">
              <i>👤</i>              <!-- zmdi-account-o → lucide User -->
              <input type="text" class="cl-form-control">
            </div>
          </div>
          <div class="form-wrapper">  <!-- Email: text input + @ icon -->
            <label>Email:</label>
            <div class="form-holder">
              <i>@</i>               <!-- literal @ symbol -->
              <input type="text" class="cl-form-control">
            </div>
          </div>
        </div>
        <div class="cl-form-group">  <!-- 2-column row -->
          <div class="form-wrapper">  <!-- Password: password input + lock -->
            <label>Password:</label>
            <div class="form-holder">
              <i>🔒</i>             <!-- zmdi-lock-outline → lucide Lock -->
              <input type="password" placeholder="********">
            </div>
          </div>
          <div class="form-wrapper">  <!-- Repeat Password -->
            <label>Repeat Password:</label>
            <div class="form-holder">
              <i>🔒</i>
              <input type="password" placeholder="********">
            </div>
          </div>
        </div>
        <div class="cl-form-group">  <!-- 2-column row -->
          <div class="form-wrapper">  <!-- Country: select + pin icon -->
            <label>Country:</label>
            <div class="form-holder select">
              <select>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Viet Nam</option>
              </select>
              <i>📍</i>             <!-- zmdi-pin → lucide MapPin -->
            </div>
          </div>
          <div class="form-wrapper">  <!-- Gender: select + face icon -->
            <label>Gender:</label>
            <div class="form-holder select">
              <select>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <i>👤</i>             <!-- zmdi-face → lucide User -->
            </div>
          </div>
        </div>
        <div class="form-end">       <!-- bottom row: checkbox + button -->
          <div class="checkbox">
            <label>
              <input type="checkbox">  <!-- custom styled -->
              <span class="checkmark"></span>
              Lorem ipsum terms...
            </label>
          </div>
          <div class="button-holder">
            <button>Register Now</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</body>
```

No footer in original — **add a minimal footer with Component Dock
attribution** per repo conventions (AGENTS.md rule 5).

### Screenshot analysis (`colorlib-reg-form-19.jpg`)

Preview image: a centered white form card on a full-viewport photographic
background (dark, blurred image). The card has a thin gray border. The
heading "REGISTRATION FORM" is in a decorative serif font (Abril Fatface),
brownish color. Form fields are arranged in two columns with labels above
each input. Fields have left-aligned icons. The "Register Now" button is
amber/orange, right-aligned. A checkbox sits to the left of the button.
Minimal, clean, professional aesthetic. Color palette: white card on dark
photo bg, amber button, brown heading, gray borders.

### Design tokens extracted from `css/style.css`

| Token | Value | Usage |
|-------|-------|-------|
| Body font | Mulish (Muli-Regular) | body, inputs, 13px |
| Heading font | Abril Fatface | h3 heading, 35px |
| Label font | Muli-Bold | form labels, uppercase |
| Button font | Muli-SemiBold | button, checkbox label, 13px |
| Body text color | `#666` | body text |
| Heading color | `#6d5555` | h3 heading (brownish) |
| Input text color | `#333` | input/select text |
| Placeholder color | `#999` | placeholder, icons, checkbox label |
| Button background | `#ea9f48` | button default (amber) |
| Button hover fill | `#f98805` | button:hover (darker orange, scaleX) |
| Button text | `#fff` | button text |
| Inner card bg | `#fff` | `.inner` background |
| Form border | `#d3cccc` | form 1px solid border |
| Input border | `#e6e6e6` | input 1px solid border |
| Checkbox bg | `#ebebeb` | `.checkmark` background |
| Checkbox border | `#ccc` | `.checkmark` border |
| Card max-width | 850px | `.inner` max-width |
| Card padding | 15px | `.inner` padding |
| Form padding | 62px 65px 64px | `form` padding (desktop) |
| Input height | 42px | `.cl-form-control` height |
| Input padding | 0 20px 0 46px | left padding for icon |
| Button size | 152×42px | `button` width/height |
| Column gap | 40px | margin-right on first column |
| Field margin-bottom | 27px | `.form-wrapper` margin-bottom |
| Heading margin-bottom | 48px | `h3` margin-bottom |
| Mobile breakpoint | 767px | `@media (max-width: 767px)` |
| Mobile heading size | 30px | h3 on mobile |
| Mobile button margin | 30px top | button on mobile |

## Implementation task outline

### Phase 1: Scaffold

- [ ] Copy simplest existing app as `apps/reglodge`
- [ ] Rename package to `@free-react-templates/reglodge`
- [ ] Update `public/CNAME` to `reglodge.free.componentdock.com`
- [ ] Update `homepage` in `package.json` to
  `https://reglodge.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile

### Phase 2: Components

- [ ] `FormWrapper.tsx` — Full-viewport flex container with background image
  (picsum.photos placeholder), centered content
- [ ] `FormCard.tsx` — White card, max-width 850px, 15px padding
- [ ] `FormField.tsx` — Reusable form field with label, icon (lucide-react),
  and input/select (supports text, password, select types)
- [ ] `CustomCheckbox.tsx` — Custom-styled checkbox with hidden native input
  and visible checkmark container
- [ ] `RegisterButton.tsx` — Amber button with scaleX hover animation
  (0.3s ease-out, #f98805 fill)
- [ ] `Footer.tsx` — Minimal footer with Component Dock attribution (original
  has no footer — added per repo conventions)

### Phase 3: Composition + polish

- [ ] `App.tsx` — Compose wrapper > card > form (3 field groups + bottom row) > footer
- [ ] `index.css` — Tailwind entry + theme tokens (button colors, form colors)
- [ ] CSS: custom select styling (remove native chevron, add custom ::after chevron)
- [ ] CSS: button hover animation (scaleX from center)
- [ ] CSS: custom checkbox styling (hidden input, styled checkmark)
- [ ] Verify responsive: single column on mobile, no form border, reduced heading

### Phase 4: Testing

- [ ] Write tests for each component (TDD: RED → GREEN → REFACTOR)
- [ ] Test form fields render with correct labels, icons, and input types
- [ ] Test select dropdowns have correct options
- [ ] Test checkbox toggle behavior
- [ ] Test button hover effect (CSS-only, verify class presence)
- [ ] Verify 100% coverage with `npm run test:coverage`
- [ ] Run typecheck + lint
- [ ] Build successfully

### Phase 5: Verification + deploy

- [ ] Run `scripts/verify-app.sh reglodge` (FAST_MODE local gate)
- [ ] Commit, push, open PR, merge
- [ ] Verify Surge deployment at `reglodge.free.componentdock.com`
