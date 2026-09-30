# Signupflare (ColorLib Signup Form 18) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-signupflare`. Recreation name: **Signupflare** (NEW
> name — the ColorLib source keeps its name "Signup Form 18").

## Source mapping

- **ColorLib item:** "Signup Form 18" (TEMPLATES.md line 2832; section
  "## Signup Forms" area — right after the prepped Signup Form 17 =
  Accountforge). Slug `signup-form-18` appears exactly ONCE in TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/signup-form-18/
- **Preview URL — REACHABLE (verified 2026-09-30 by direct fetch):**
  **`https://preview.colorlib.com/theme/bootstrap/signup-form-18/`**
  (HTTP 200, 4,135 bytes, `<title>Sign Up 08</title>`).
  **The naive `https://preview.colorlib.com/theme/signup-form-18/` returns
  404** — this signup-form family lives under `theme/bootstrap/<slug>/`
  (same path as signup-form-13/14/16). Do not redo this lookup.
- **Preview CSS:** `css/style.css?v=12cad38e` (18,128 bytes) —
  Bootstrap-derived `cl-*` base + hand-written template block starting at
  line 676 (`.ftco-section` … end). Template overrides: `.ftco-section`,
  `.heading-section`, `.login-wrap` (+ `:after`, `h3`, `.img`),
  `.field-icon`, `.cl-form-control` (pill overrides), `.cl-btn`,
  `.cl-btn.cl-btn-primary` (gradient override of Bootstrap blue `#007bff`).
- **Scripts:** `js/snippet.js` (eye-toggle behavior only). Icons: inline
  `fa-eye` / `fa-eye-slash` SVGs — **REPLACE with lucide-react** (`Eye`,
  `EyeOff`), do not ship the Font Awesome glyphs.
- **Fonts:** Lato via webfont — load **Google Fonts `<link>` (300, 400)**
  in `index.html`; weights used: 300 (card h3), 400 (body/heading).
- **Assets:** `images/bg.jpg` = avatar photo — use
  `https://picsum.photos/seed/signupflare-1/<w>/<h>` placeholder, never the
  source asset.

## Reference research (done — do not redo)

### Screenshot (`signup-form-18.jpg`, 1200×972)

Browsed visually 2026-09-30 (matches the live preview). Browser chrome
frame; light gray page; centered black 28px title "Sign Up #08"; centered
white card. Card top: coral→pink gradient band whose bottom edge sweeps
down on the RIGHT side (curved swoop, big radius on bottom-right corner).
Circular avatar (woman on phone) centered, straddling the band's lower
edge, white ring. Below: light "Sign Up" heading; three full-width pill
inputs (very light gray fill, gray placeholder text; password row has a
small gray eye icon at right); full-width gradient pill "Continue" button
(white text); below it gray "I'm already a member! Sign In" with pink
"Sign In" link. No footer/social sections — single-card template.

Pixel-sampled colors (JPEG-blended, for sanity checks only — use the CSS
values as canonical): header band `#e66464` (left) → `#e36281` (right);
button same gradient; inputs `#f7f7f7`; card `#ffffff`; page `#fafafa`.

### Live DOM structure (verbatim skeleton)

```
section.ftco-section (padding 7em 0)
  .cl-container
    h2.heading-section "Sign Up #08"  (col centered, 28px, #000)
    .login-wrap  (white card, radius 5px, shadow, padding 100px 30px 30px)
      .img  (background-image: images/bg.jpg → avatar circle 100px,
             4px white border, centered, margin-bottom 20px)
      h3 "Sign Up"  (weight 300, 22px, #000, centered)
      form.signup-form
        input placeholder="John Doe"
        input placeholder="johndoe@gmail.com"
        input#password-field type=password placeholder="Password"
          + span.field-icon (eye / eye-slash swap, right 15px)
        button.cl-form-control.cl-btn.cl-btn-primary.submit "Continue"
      p "I'm already a member! " + a[href=#signin] "Sign In"
```

## Design tokens (from live CSS — canonical)

| Token | Value |
|-------|-------|
| Font | `"Lato", Arial, sans-serif`; body 16px |
| Page bg | `#fafafa` |
| Body text | `gray` |
| Heading/h3 color | `#000` |
| Accent/link | `#f35587` |
| Gradient | `linear-gradient(135deg, #f75959 0%, #f35587 100%)` |
| Page heading | 28px / 400 / `#000`, centered |
| Card | `#fff`, radius `5px`, shadow `0px 10px 34px -15px rgba(0,0,0,0.24)`, padding `100px 30px 30px 30px` |
| Card header band | `:after` absolute, height `160px`, gradient, `border-radius: 5px 5px 50% 0` (curved bottom-right), `z-index: -1` |
| Avatar | `100×100px`, radius `50%`, `border: 4px solid #fff`, shadow `0px 10px 23px -16px rgba(0,0,0,0.4)`, mb `20px` |
| Card h3 | weight 300, 22px, `#000` |
| Inputs | h `52px`, radius `40px`, bg `rgba(0,0,0,0.03)`, border `none`, text `#000`/16px, px `20px`, placeholder `rgba(0,0,0,0.7)`, focus: no visual change (outline none) |
| Toggle icon | absolute right `15px`, centered, `rgba(0,0,0,0.5)` |
| Button | radius `40px`, gradient bg, border `1px solid #f35587`, text `#fff`/15px, h `52px` (from `.cl-form-control`), full width, hover solid `#f35587` |
| Footer line | `p` gray + `a` `#f35587` |

## Structure order (top to bottom)
1. Page wrapper (`#fafafa`, section `7em` vertical padding, centered column)
2. Page heading — "Sign Up #08" (28px, black, centered)
3. Card — white, radius 5px, soft shadow, max-width ~500px (col-lg-5)
4. Gradient header band — 160px, coral→pink, curved bottom-right corner
5. Avatar — 100px circle, white ring, overlapping the band
6. Card heading — "Sign Up" (light 22px)
7. Form — name → email → password (+ eye toggle) → gradient "Continue" pill
8. Footer line — "I'm already a member! Sign In"

## Fidelity notes

### Page background
- Solid `#fafafa` full viewport; NO gradient/image.
- Large vertical breathing room (`7em` ≈ 112px) above/below the card block.

### Page heading
- Black 28px regular, centered, with margin below (`.cl-mb-5` ≈ 3rem).
- Demo text "Sign Up #08" — paraphrase OK (keep same kind of short centered
  title; e.g. "Sign Up 08" or "Sign Up #08").

### Card
- White, radius 5px (subtle — NOT pill, NOT 16px), soft down-shadow.
- The gradient band is an absolutely-positioned `:after` BEHIND content
  (`z-index: -1`) — implement with an absolutely positioned div inside a
  `relative overflow-hidden` card (card needs `overflow: hidden` for the
  50% radius to clip the band).
- The band's signature detail: `border-radius: 5px 5px 50% 0` — flat-ish
  left, big curved sweep on the bottom-RIGHT. Keep this exact asymmetry.
- Card top padding 100px reserves space so content starts below the 160px band.

### Avatar
- 100px circle, 4px WHITE border, subtle shadow, centered, pulled up so it
  straddles the band's lower edge (band 160px, avatar sits in the padding
  zone). Deterministic picsum seed.

### Card heading
- "Sign Up", Lato 300, 22px, black, centered, ~1.5rem margin below.

### Inputs
- Pill radius 40px, height 52px, faint gray fill `rgba(0,0,0,0.03)`,
  NO border, NO focus ring (source explicitly kills outline/shadow).
- Placeholders: "John Doe", "johndoe@gmail.com", "Password".
- Add visually-hidden `<label>`s (a11y requirement; source relies on
  placeholders only — keep the visible pill look identical).

### Password toggle
- Eye icon right-aligned inside the pill (right 15px), gray
  `rgba(0,0,0,0.5)`; click swaps eye ↔ eye-slash and toggles input type.
- lucide-react `Eye`/`EyeOff`, `aria-label` for the toggle.

### Continue button
- Same gradient as the header band, pill 40px radius, full width, 52px,
  white 15px text, 1px `#f35587` border.
- Hover: solid `#f35587` background (per source CSS).
- `type="submit"`; on submit → no-op/validation per conventions (zod +
  react-hook-form patterns where needed).

### Sign-in line
- Gray body text "I'm already a member! " + pink link "Sign In"
  (`#f35587`, no underline at rest, underline on hover per base `a:hover`).
- Centered below the button with ~1rem top margin.

### Typography
- Lato via Google Fonts `<link>` (weights 300 + 400).
- Body 16px/400 gray; page heading 28px/400 black; card h3 22px/300 black;
  button 15px/400 white.

### Responsive behavior
- Card max-width ~500px (col-lg-5 equivalent), centered; on mobile full
  width with side margins; inputs/button stay full width.
- Gradient band height can stay fixed (160px); avatar stays centered.

## Component outline
- `App.tsx` — page wrapper (`#fafafa` bg, centered section)
- `components/PageHeading.tsx` — centered 28px title
- `components/SignupCard.tsx` — card shell: gradient band div, avatar,
  h3, composes form + footer line
- `components/SignupForm.tsx` — name/email/password fields + Continue button
- `components/PasswordInput.tsx` — password pill field + eye toggle logic
- `src/index.css` — Tailwind entry + `@theme` tokens:
  `--color-brand-from: #f75959`, `--color-brand-to: #f35587`,
  `--color-page: #fafafa`, `--color-accent: #f35587`; gradient utility
  via `bg-[linear-gradient(135deg,#f75959_0%,#f35587_100%)]` (or a small
  `bg-brand-gradient` in `@theme`)

## Task outline (for the implementer)
1. Scaffold `apps/signupflare` from the simplest existing app; rename
   package to `@free-react-templates/signupflare`; set `CNAME`
   (`signupflare.free.componentdock.com`) + `"homepage"`; run `npm install`
   at repo root; register `injectUiSource()` in `vite.config.ts`.
2. `index.html`: Lato Google Fonts link (300, 400).
3. `index.css`: `@theme` tokens (brand gradient endpoints, page bg, accent).
4. TDD per component: PageHeading → SignupCard (band + avatar) →
   PasswordInput (toggle) → SignupForm (fields + submit) → footer line.
5. Tests: getByRole/LabelText; toggle switches input type + aria state;
   submit button type=submit; 100% coverage.
6. Footer with "Component Dock" link (`https://www.componentdock.com/`);
   no ColorLib strings anywhere in `apps/signupflare`.
7. `scripts/verify-app.sh signupflare` green → PR
   `feat/template-signupflare` → squash merge (deploy follows merge).
