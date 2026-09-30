# Signnoir (ColorLib Signup Form 20) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-signnoir`. Recreation name: **Signnoir** (NEW
> name — the ColorLib source keeps its name "Signup Form 20"). Rationale:
> "sign" + French "noir" (black) — the template's identity is dark: charcoal
> page `#313131`, black-and-white photographic left panel, black pill button.

## Source mapping

- **ColorLib item:** "Signup Form 20" (TEMPLATES.md line 2834, "## Signup
  Forms" section — right after prepped Signup Form 19 = Signum). Slug
  `signup-form-20` appears exactly ONCE in TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/signup-form-20/
- **Preview URL — REACHABLE (verified 2026-09-30 by direct fetch):**
  **`https://preview.colorlib.com/theme/bootstrap/signup-form-20/`**
  (HTTP 200, 6,246 bytes, `<title>Sign Up 10</title>`).
  **The naive `https://preview.colorlib.com/theme/signup-form-20/` returns
  404** — this signup-form family lives under `theme/bootstrap/<slug>/`
  (same path as signup-form-13/14/16/18/19). Do not redo this lookup.
- **Preview CSS:** `css/style.css?v=f9414aa6` (20,296 bytes) —
  Bootstrap-derived `cl-*` base + hand-written template block starting at
  `.ftco-section` (char 14,984). Template overrides: `body` (Roboto,
  `#313131`), `a` (`#6807f9`), `.ftco-section`, `.heading-section`, `.img`,
  `.wrap`, `.cl-text-wrap` (+ `:after` overlay, `.text`), `.login-wrap`,
  `.cl-form-group label`, `.cl-form-control`, `.social-wrap`,
  `.checkbox-wrap` (+ `.checkmark`), `.cl-btn`, `.cl-btn.cl-btn-secondary`
  (BLACK override of Bootstrap gray `#6c757d`).
- **Scripts:** none (no eye-toggle — password field is plain). Icons:
  social brand marks as inline SVG (lucide-react removed brand icons —
  precedent template-airwave); checkbox glyphs `\f0c8`/`\f14a` → REPLACE
  with native checkbox + styled check. Do not ship Font Awesome.
- **Fonts:** Roboto via Google Fonts `<link>` (300, 400, 500, 700) in
  `index.html`; weights: 300 (card h3), 400 (body), 500 (labels),
  700 (left-panel h2).
- **Assets:** `images/bg.jpg` = dark abstract black-and-white 3D-boxes
  photo (left panel) — placeholder `https://picsum.photos/seed/signnoir-1/1200/900`,
  never the source asset.

## Reference research (done — do not redo)

### Screenshot (`signup-form-20.jpg`, 1200×972; served as AVIF)

Browsed visually 2026-09-30 (matches the live preview). Browser chrome
frame; dark charcoal page; white centered title "Sign Up #10"; centered
split card: LEFT dark photo panel (black abstract 3D boxes, heavily
darkened) with bottom-aligned white bold "Welcome to signup form" +
gray-white "Far far away…" paragraph; RIGHT white form panel: light
"Create an account" h3; five rows with labels LEFT of inputs (Full Name /
Email Address / Phone no. / Password / Website — light gray fill inputs,
4px radius); dark square checkbox + "I Agree All Statements In Terms Of
Service"; BLACK PILL button "Create an account" (shrinkwrapped, NOT full
width, white text); "or" line divider; "Signup with this services"; three
circular icons (Google G / Facebook f / Twitter bird — thin circle
borders, black glyphs); "I'm already a member! Sign In" with violet link.
Pixel-sampled sanity values (use CSS as canonical): page `#313131`,
button `#000`, inputs ≈ `#f7f7f7`, link violet ≈ `#6807f9`.

### Live DOM structure (verbatim skeleton)

```
section.ftco-section (padding 7em 0; page bg #313131)
  .cl-container
    h2.heading-section "Sign Up #10"  (col-md-6 centered, 28px, #fff)
    .cl-row > .cl-col-lg-10
      .wrap (cl-d-md-flex; radius 5px; shadow; overflow hidden)
        .cl-text-wrap.img (bg images/bg.jpg; :after #000 @ .5; p-4/p-lg-5;
                           align-items-end)
          .text
            h2 "Welcome to signup form"  (700, #fff, 24px, mb-4)
            p "Far far away, behind the word mountains, far from the
               countries Vokalia and Consonantia, there live the blind
               texts."
        .login-wrap (white; p-4/md:p-5)
          h3 "Create an account"  (weight 300, mb-3)
          form.signup-form
            row: label "Full Name" (150px) + input placeholder="Full Name"
            row: label "Email Address" + input placeholder="johndoe@email.com"
            row: label "Phone no." + input placeholder="+01"
            row: label "Password" + input type=password placeholder="Password"
            row: label "Website" + input placeholder="Website"
            checkbox: [x] "I agree all statements in terms of service"
            button.cl-btn.cl-btn-secondary.submit "Create an account"
          .social-wrap
            p.or > span "or"  (::after 1px #e6e6e6 line behind)
            p "Signup with this services"
            p.social-media: 3 × a.social-icon (google/facebook/twitter)
          p.mt-4 "I'm already a member! " + a[href=#signin] "Sign In"
```

## Design tokens (from live CSS — canonical)

| Token | Value |
|-------|-------|
| Font | `"Roboto", Arial, sans-serif`; body 16px/1.8 |
| Page bg | `#313131` (dark charcoal) |
| Body text | `gray` |
| Page heading | 28px / `#fff`, centered |
| Accent/link | `#6807f9` (violet) |
| Section padding | `7em 0` |
| Wrap | radius `5px`, shadow `0px 10px 34px -15px rgba(0,0,0,0.24)`, overflow hidden, `col-lg-10` centered; flex ≥768px, 50/50 panels ≥992px |
| Left panel | photo `cover` center + `#000` `:after` overlay `opacity .5`; text bottom-aligned; padding `1.5rem` / `3rem` lg; text `rgba(255,255,255,0.8)`; h2 700 / `#fff` / 24px |
| Right panel | `#fff`; h3 weight 300 |
| Field label | width `150px`, 500, 14px, `rgba(0,0,0,0.9)` |
| Inputs | h `50px`, radius `4px`, bg `rgba(0,0,0,0.03)`, border none, w `calc(100% - 150px)`, text `#000`/14px, px `20px`, placeholder `rgba(0,0,0,0.3)`; focus: bg `rgba(0,0,0,0.05)`, no ring |
| Checkbox | 15px w400 `rgba(0,0,0,0.4)`, capitalize, pl `30px`; custom check glyph `rgba(0,0,0,0.1)` / checked `#000`; CHECKED by default |
| Button | pill radius `40px`, inline-block (NOT full width), bg `#000`, border `#000`, text `#fff`/15px, shadow `0px 10px 19px -16px rgba(0,0,0,0.29)`; hover: transparent bg + `#000` text |
| "or" divider | `:after` 1px `#e6e6e6` line; span bg `#fff`, px `20px` |
| Social icons | 40×40 circles, border `1px rgba(0,0,0,0.05)`, glyph `#000`/16px, mr `10px`; hover/focus bg `#6807f9` + `#fff` glyph |
| Footer line | `p` + `a` `#6807f9` ("I'm already a member! Sign In") |

## Structure order (top to bottom)
1. Page wrapper (`#313131`, centered container, 7em vertical padding)
2. Page heading — "Sign Up #10" (28px, white, centered)
3. Wrap card — col-lg-10 centered, 5px radius, soft shadow, overflow hidden
4. Left panel — dark photo + black 50% overlay + bottom-aligned welcome text
5. Right panel (white) — "Create an account" (weight 300)
6. Form — Full Name → Email Address → Phone no. → Password → Website
   (label-left rows) + terms checkbox + black pill button
7. Social block — "or" divider + caption + 3 circular brand icons
8. Footer line — "I'm already a member! Sign In"

## Fidelity notes (quick reference — full detail in design-notes.md)

- Page bg `#313131` solid; heading WHITE 28px; `7em` section padding
- Wrap: flex row ≥768px, panels 50% each ≥992px, stacked below 768px.
  Preview's `body { min-width: 992px !important }` is a ColorLib preview
  artifact — do NOT replicate
- Left panel: picsum placeholder (seed `signnoir-1`), black 50% overlay,
  text bottom-aligned, h2 24px/700 + "Far far away…" paragraph
- Field rows: label LEFT in a 150px column (14px/500), input RIGHT
  `calc(100% - 150px)`, 50px tall, `rgba(0,0,0,0.03)` fill, 4px radius,
  borderless; focus darkens fill only — keep label-left at ALL viewports
  (source has no stacking override)
- Checkbox: native input + styled check (no Font Awesome), checked by
  default, capitalized label
- Button: BLACK pill, inline-block (NOT full width), hover inverts to
  transparent/black text — keep the inversion
- Social: "or" line divider (white gap), caption, 3 circles; brand marks
  inline SVG; hover/focus violet `#6807f9`
- A11y fix: wire `htmlFor`/`id` on every label-input pair (source's `for=`
  points at missing ids)

## Implementation outline (for the implementer — not done by prep)

1. `index.html`: Roboto Google Fonts `<link>` (300/400/500/700)
2. `index.css`: `@theme` tokens — page bg `#313131`, accent `#6807f9`,
   wrap shadow, input fill `rgba(0,0,0,0.03)`, overlay black 50%
3. `App.tsx`: dark page wrapper + centered container + 7em padding
4. Components (see design-notes.md Component outline):
   PageHeading / SignupWrap / WelcomePanel / SignupForm / SocialSignup /
   MemberLine
5. Brand icons: small inline-SVG components (Google/Facebook/Twitter) —
   lucide-react has no brand icons
6. Tests: scenario-style Vitest + Testing Library mirroring the spec's
   Gherkin scenarios; 100% coverage; `scripts/verify-app.sh signnoir`
