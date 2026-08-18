# Tangerine (ColorLib Signup Form 04) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-tangerine`.

## Design notes (replication findings)

- **Original:** ColorLib "Signup Form 04" — a single-page split-screen signup
  form (source: https://colorlib.com/wp/template/signup-form-04/).
  TEMPLATES.md line 2818, single copy (`grep -c
'wp/template/signup-form-04/'` = 1). Category: Signup Forms (20).
- **Preview DOM analyzed:**
  https://preview.colorlib.com/theme/bootstrap/signup-form-04/ (HTTP 200,
  ~11.3 KB HTML, `<title>Sign Up #4</title>`). **The bare
  https://preview.colorlib.com/theme/signup-form-04/ URL is 404** — the
  signup-form demos mirror under the `/theme/bootstrap/` path prefix (use
  that pattern for all future `signup-form-*` preps). Stylesheet
  `css/style.css` (~3.3 KB) parsed for tokens; `css/bootstrap.min.css`
  (~178 KB) parsed for `.btn-primary` colors; `js/main.js` is not referenced
  by this demo — the form posts to `#` with no client-side logic. Stack is
  Bootstrap 4 + jQuery + icomoon icon font — recreate all behavior in React
  (no jQuery/Bootstrap/icon font).
- **Screenshot:** `signup-form-04.jpg` (1200×972, verified in the browser):
  left slim kitchen photo (subway tiles, dark wood floating shelves), right
  light-grey panel, centered white card with shadow, dark "Sign Up" heading,
  three light-grey rounded inputs, checked orange checkbox, wide burnt-orange
  "Register" button. Matches the live demo.
- **New name:** Tangerine — single lowercase word evoking the burnt-orange
  `#fb771a` brand accent. NOT "signup-form-04" — never reuse the source name.
- **Structure order (1:1, from the live DOM):** full-height flex row →
  left `.bg` image panel (25%) + right `.contents` panel (75%, `#f6f7fc`) →
  centered `.form-block` white card (max-width 400px, shadow) → centered
  "Sign Up" h3 → email / password / re-type-password `.form-group`s (visible
  labels above inputs) → checkbox row (Agree our Terms and Conditions,
  checked) → full-width "Register" submit. No nav, no footer section beyond
  the required Component Dock line — the form is the whole page.

## Design tokens (reference the spec for full detail)

- Brand orange `#fb771a` (button + checked checkbox), hover `#eb6304`,
  active `#de5e04`, checkbox checked-hover `#fb8633`.
- Right panel `#f6f7fc`, body white, input fill `#efefef`, checkbox fill
  `#e6e6e6`, hover `#ccc`, muted text `#888` / `#b3b3b3`.
- Roboto font (300 body), 54px inputs, 4px radii, card shadow
  `0 15px 30px rgba(0,0,0,0.2)`.

## Tasks

- [ ] Scaffold `apps/tangerine` (copy simplest existing app; package
      `@free-react-templates/tangerine`; `public/CNAME` =
      `tangerine.free.componentdock.com`; homepage
      `https://tangerine.free.componentdock.com`; run `npm install` at root
      so the lockfile registers the workspace).
- [ ] `index.html`: Roboto Google Fonts link; title "Tangerine".
- [ ] `src/index.css`: `@theme` tokens — `--color-brand: #fb771a`,
      `--color-brand-hover: #eb6304`, `--color-panel: #f6f7fc`,
      `--color-input: #efefef`, `--color-checkbox: #e6e6e6`, muted greys,
      `--font-sans: "Roboto"`.
- [ ] Components: - `SignupPage` — the full-height split shell (image panel + form
      panel), owns form state + success state. - `SignupCard` — the white card: heading + form + checkbox + button. - Form fields: email (text), password, re-type (password, masked);
      labels "Your Email" / "Password" / "Re-type Password"; placeholders
      "your-email@gmail.com" / "Your Password" / "Your Password"; 54px,
      `#efefef`, no border, 4px radius, no focus outline. - `TermsCheckbox` — native checkbox visually replaced by a 20×20
      custom square: `#e6e6e6` unchecked, `#fb771a` + white lucide Check
      when checked, checked by default; caption "Agree our Terms and
      Conditions" with linked terms text. - `RegisterButton` — full-width `#fb771a` button "Register", white
      text, hover `#eb6304`; submitting shows an in-page success state
      (the source posts to `#` with no handler).
- [ ] Left panel: `https://picsum.photos/seed/tangerine-1/<w>/<h>` cover
      image (portrait-ish crop; the source photo is a kitchen still-life).
- [ ] Responsive ≤768px: image panel becomes a 200px top banner, form panel
      full width, card padding 25px.
- [ ] Footer line linking https://www.componentdock.com/ ("Component Dock").
- [ ] No icon font — lucide-react Check for the checkbox glyph.
- [ ] Tests (Vitest + Testing Library, 100% coverage): split layout renders,
      labels/placeholders, password masking, checkbox default-checked +
      toggle, success state on register, responsive banner behaviour,
      accessibility queries by label/role.
- [ ] Per-app gate: `npm run verify:app tangerine` (or
      `scripts/verify-app.sh tangerine`).
- [ ] PR `feat/template-tangerine` → merge immediately; no ColorLib strings
      in app code; provenance only in spec/TEMPLATES.md/PR.
