# Signum (ColorLib Signup Form 19) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-signum`. Recreation name: **Signum** (NEW name —
> the ColorLib source keeps its name "Signup Form 19").

## Source mapping

- **ColorLib item:** "Signup Form 19" (TEMPLATES.md line 2833; section
  "## Signup Forms (20)"). Slug `signup-form-19` appears exactly ONCE in
  TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/signup-form-19/
- **Preview URL — REACHABLE (verified 2026-09-30 by direct fetch):**
  **`https://preview.colorlib.com/theme/bootstrap/signup-form-19/`**
  (HTTP 200, 9,679 bytes, `<title>Sign Up 09</title>`).
  **The naive `https://preview.colorlib.com/theme/signup-form-19/` returns
  404** — this signup-form family lives under `theme/bootstrap/<slug>/`
  (same path as signup-form-13/14/16/18). Do not redo this lookup.
- **Preview CSS:** `css/style.css?v=e5666542` (17,218 bytes) —
  Bootstrap-derived `cl-*` base + hand-written template block starting at
  line 647 (`body` … end). Template overrides: `body` (Lato), `body:after`
  (gradient overlay), `a` (`#1089ff`), `.ftco-section`,
  `.heading-section`, `.img`, `.login-wrap` (+ h3), `.cl-form-group
  label`, `.cl-form-group .icon`, `.field-icon`, `.cl-form-control` (pill
  overrides), `.cl-btn`, `.cl-btn.cl-btn-primary` (`#1089ff`).
- **Scripts:** `js/snippet.js` (eye-toggle behavior only). Icons: inline
  `fa-user-o` / `fa-paper-plane-o` / `fa-lock` / `fa-eye` / `fa-eye-slash`
  SVGs — **REPLACE with lucide-react** (`User`, `Send`, `Lock`, `Eye`,
  `EyeOff`), do not ship the Font Awesome glyphs.
- **Fonts:** Lato via webfont — load **Google Fonts `<link>` (300, 400)**
  in `index.html`; weights used: 300 (card h3), 400 (body/heading/button).
- **Assets:** `images/bg.jpg` = starry-night mountain-lake photo — use
  `https://picsum.photos/seed/signum-1/<w>/<h>` placeholder (e.g.
  1600×1000 to cover the viewport), never the source asset.

## Reference research (done — do not redo)

### Screenshot (`signup-form-19.jpg`, 1200×972)

Browsed visually 2026-09-30 (matches the live preview). Browser chrome
frame; full-bleed starry-night photo (mountain lake, dark blue sky,
stars) tinted blue→violet→pink by the gradient overlay. Centered white
28px title "Sign Up #09" near the top. Centered glass card: thin
translucent-white border, small 4px radius, transparent fill (photo
visible through it). Card heading "Create Your Account" (light white).
Four pill inputs with visible white uppercase labels (FULL NAME, EMAIL
ADDRESS, PASSWORD, PASSWORD), white left icons (user / paper-plane /
lock / lock), eye toggles on both password rows; pill inputs have
translucent-white borders, transparent fills, gray-white placeholder
text. Full-width bright blue pill "Sign Up" button. Below: "I'm already a
member! Sign In" with blue link. No navbar/footer/social sections —
single-card template.

### Live DOM structure (verbatim skeleton)

```
body.img (inline background-image: images/bg.jpg; cover, centered)
  body:after  (gradient overlay: linear-gradient(45deg,#0360ed,#ff5db1),
               opacity .4, z-index -1)
  section.ftco-section (padding 7em 0)
    .cl-container
      .cl-row.cl-justify-content-center
        .cl-col-md-6.cl-text-center.cl-mb-5
          h2.heading-section "Sign Up #09"   (28px, #fff, centered)
      .cl-row.cl-justify-content-center
        .cl-col-md-7.cl-col-lg-5
          .login-wrap  (transparent, border 1px rgba(255,255,255,.2),
                        radius 4px, padding 40px, color rgba(255,255,255,.7))
            h3.cl-text-center.cl-mb-4 "Create Your Account"
                                        (weight 300, 22px, #fff)
            form.signup-form
              .cl-form-group
                label.label "Full Name"
                input.cl-form-control placeholder="John Doe"
                span.icon.fa.fa-user-o  (lucide User, #fff, left 15px)
              .cl-form-group
                label.label "Email Address"
                input.cl-form-control placeholder="johndoe@gmail.com"
                span.icon.fa.fa-paper-plane-o  (lucide Send)
              .cl-form-group
                label.label "Password"
                input#password type=password placeholder="Password"
                span.field-icon.toggle-password  (eye/eye-slash, right 15px,
                                                   rgba(255,255,255,.5))
                span.icon.fa.fa-lock  (lucide Lock)
              .cl-form-group
                label.label "Password"   (SOURCE QUIRK: duplicate label;
                                          confirm field id=password-confirm)
                input#password-confirm type=password placeholder="Password"
                span.field-icon.toggle-password  (independent eye toggle)
                span.icon.fa.fa-lock
              .cl-form-group
                button.cl-form-control.cl-btn.cl-btn-primary.submit "Sign Up"
            p "I'm already a member! " + a[href=#signin] "Sign In"
```

## Design tokens (from live CSS — canonical)

| Token | Value |
|-------|-------|
| Font | `"Lato", Arial, sans-serif`; body 16px / line-height 1.8 |
| Body text | `gray` (card text is white per overrides) |
| Background photo | `body.img`: `background-size: cover; position: center; no-repeat` (picsum placeholder) |
| Gradient overlay | `body:after`: `linear-gradient(45deg, #0360ed 0%, #ff5db1 100%)`, `opacity: .4`, `z-index: -1` |
| Page heading | 28px / 400 / `#fff`, centered (`.heading-section`) |
| Link / accent | `#1089ff` (`a`, transition `.3s all ease`) |
| Card | transparent fill, `border: 1px solid rgba(255,255,255,0.2)`, radius `4px`, padding `40px`, color `rgba(255,255,255,0.7)` |
| Card h3 | weight 300, 22px, `#fff` |
| Labels | uppercase, 700, 12px, letter-spacing `1px`, `#fff` |
| Left icons | absolute left `15px`, `#fff` |
| Toggle icon | absolute right `15px`, `rgba(255,255,255,0.5)` |
| Inputs | h `52px`, radius `40px`, bg transparent, border `1px solid rgba(255,255,255,0.3)`, text `#fff`/16px, padding-left `40px`, padding-right `20px`, placeholder `rgba(255,255,255,0.5)` |
| Input focus | border `rgba(255,255,255,0.2)`, bg `rgba(255,255,255,0.04)`, NO ring/outline |
| Button | radius `40px`, h `52px`, full width, 15px text, no shadow |
| Button primary | bg `#1089ff`, border `1px solid #1089ff`, text `#fff` |
| Button hover | bg transparent, text `#1089ff`, border stays `#1089ff` |
| Footer line | `p` `rgba(255,255,255,0.7)` + `a` `#1089ff` |
| Columns | heading `col-md-6 text-center mb-5`; card `col-md-7 col-lg-5` |

## Structure order (top to bottom)

1. Page wrapper — full-viewport photo background + 40% blue→pink gradient
   overlay; section `7em` vertical padding, centered column
2. Page heading — "Sign Up #09" (28px, white, centered)
3. Glass card — transparent fill, 1px translucent-white border, 4px
   radius, 40px padding; max-width ≈ 41% on md / 5-of-12 on lg, centered
4. Card heading — "Create Your Account" (light 22px white)
5. Form — name → email → password (+ eye toggle) → confirm password
   (+ independent eye toggle) → blue "Sign Up" pill
6. Sign-in line — "I'm already a member! Sign In"

## Fidelity notes

### Page background
- The signature look: dark photo + `linear-gradient(45deg,#0360ed,#ff5db1)`
  overlay at 40% opacity → blue/violet/pink tint. Implement as fixed/cover
  background image with an absolutely-positioned gradient layer above it
  (`z-index: -1` semantics — photo below, overlay above photo, content
  above both).
- Deterministic picsum placeholder; never the source photo.

### Page heading
- White 28px regular (Lato 400), centered, with `mb-5` (~3rem) below.
- Demo text "Sign Up #09" — paraphrase OK (keep same kind of short
  centered title).

### Glass card
- NOT white, NOT shadowed — transparent fill; the border is the only
  container cue (`1px solid rgba(255,255,255,0.2)`), radius only `4px`.
- Text color inside is `rgba(255,255,255,0.7)`; headings/labels pure
  white.
- Width: center via grid; `col-md-7 col-lg-5` equivalents (max ~41% at md,
  ~41.6% at lg — Tailwind `md:w-7/12 lg:w-5/12 mx-auto` or max-w).

### Card heading
- "Create Your Account", Lato 300, 22px, white, centered, mb ~1.5rem.

### Form fields
- Labels are VISIBLE (unlike some siblings): uppercase, bold 12px, 1px
  letter-spacing, white.
- Pills: 52px, radius 40px, transparent fill, 1px translucent-white
  border, left padding 40px (room for the left icon), right 20px.
- Left icons white, absolute left 15px: User (name), Send (email), Lock
  (both passwords). lucide-react only.
- Placeholder text `rgba(255,255,255,0.5)`.
- Focus: border slightly dimmer + barely-there white fill; source kills
  rings/outline — reproduce (but keep `focus-visible` styles per a11y
  checklist, e.g. a subtle ring that matches the aesthetic).

### Password toggles
- Eye icon right-aligned inside the pill (right 15px),
  `rgba(255,255,255,0.5)`; click swaps eye ↔ eye-slash and toggles input
  type. TWO independent toggles (password + confirm).
- Source quirk: the confirm field's label also reads "Password" (id
  `password-confirm`). Keep the duplicate label for pixel fidelity OR
  paraphrase to "Confirm Password" (same kind of content; allowed by
  replication.md) — implementer's choice; note it in the PR either way.
- lucide-react `Eye`/`EyeOff`, `aria-label` for each toggle.

### Sign Up button
- Blue `#1089ff` pill, full width, 52px, white 15px text, 1px `#1089ff`
  border, NO shadow.
- Hover: transparent background, text turns `#1089ff` (border stays) —
  an outline-style hover, unique to this family; keep it.
- `type="submit"`; on submit → no-op/validation per conventions (zod +
  react-hook-form patterns where needed).

### Sign-in line
- `rgba(255,255,255,0.7)` text "I'm already a member! " + `#1089ff` link
  "Sign In" (0.3s color transition).
- Centered below the button with ~1rem top margin (source: `.cl-mb-3` on
  the last group + natural `p` margin).

### Typography
- Lato via Google Fonts `<link>` (weights 300 + 400).
- Body 16px/1.8 gray; page heading 28px/400 white; card h3 22px/300 white;
  labels 12px/700 uppercase white; button 15px/400 white.

### Responsive behavior
- Card centered full-width-minus-margins on mobile; inputs/button stay
  full width. Background photo keeps `cover` behavior at all sizes.
- Heading column collapses to full width on mobile (source `col-md-6`).

## Component outline

- `App.tsx` — page wrapper (photo bg + gradient overlay + centered section)
- `components/PageHeading.tsx` — centered 28px white title
- `components/SignupCard.tsx` — glass card shell: h3 + composes form +
  footer line
- `components/SignupForm.tsx` — four fields + Sign Up button
- `components/PasswordInput.tsx` — pill password field + independent eye
  toggle logic (reuse for the confirm field)
- `src/index.css` — Tailwind entry + `@theme` tokens:
  `--color-accent: #1089ff`, `--color-gradient-from: #0360ed`,
  `--color-gradient-to: #ff5db1`, translucent border/placeholder
  alphas; gradient overlay via
  `bg-[linear-gradient(45deg,#0360ed_0%,#ff5db1_100%)]` + `opacity-40`

## Task outline (for the implementer)

1. Scaffold `apps/signum` from the simplest existing app; rename package
   to `@free-react-templates/signum`; set `CNAME`
   (`signum.free.componentdock.com`) + `"homepage"`; run `npm install` at
   repo root; register `injectUiSource()` in `vite.config.ts`.
2. `index.html`: Lato Google Fonts link (300, 400).
3. `index.css`: `@theme` tokens (accent, gradient endpoints, translucent
   border/placeholder alphas).
4. TDD per component: PageHeading → SignupCard (glass shell) →
   PasswordInput (toggle ×2 independent) → SignupForm (fields + submit) →
   footer line.
5. Tests: getByRole/LabelText; each toggle switches its own input type +
   aria state independently; submit button type=submit; hover styles
   covered via class assertions; 100% coverage.
6. Footer with "Component Dock" link (`https://www.componentdock.com/`);
   no ColorLib strings anywhere in `apps/signum`.
7. `scripts/verify-app.sh signum` green → PR `feat/template-signum` →
   squash merge (deploy follows merge).
