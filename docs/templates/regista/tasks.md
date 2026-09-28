# Regista (ColorLib Regform 9) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-regista`. Recreation name: **Regista** (NEW name —
> the ColorLib source keeps its name "Colorlib Reg Form V9").

## Source mapping

- **ColorLib item:** "Colorlib Regform 9" (TEMPLATES.md line 2658; section
  forms area). The `wp/template/colorlib-regform-9/` slug appears in
  TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/colorlib-regform-9/
- **Preview URL — REACHABLE (verified 2026-09-28 by direct fetch):**
  **`https://colorlib.com/etc/regform/colorlib-regform-9/`**
  (HTTP 200, 3,606 bytes, 77 lines, `<title>Sign Up Form by Colorlib</title>`).
  **The naive `https://preview.colorlib.com/theme/colorlib-regform-9/`
  returns 404** — the actual preview lives under `colorlib.com/etc/regform/`.
- **Preview CSS:** `css/style.css` (8,612 bytes, all hand-written, NO
  Bootstrap). Fonts: Poppins 400/600/700 via local @font-face — use Google
  Fonts `<link>`. Material-Design-Iconic-Font for eye icon — REPLACE with
  lucide-react (Eye/EyeOff).

## Reference research (done — do not redo)

### Screenshot (`colorlib-reg-form-9.jpg`, 1200x972 AVIF)

Browsed visually 2026-09-28 (matches the live page).
Browser frame: Full-viewport dark cinematic cityscape background (Batman
themed — urban night scene with rain, dark buildings, dramatic lighting).
Left half of viewport: the dark background image is fully visible. Right half:
a semi-transparent gold/amber panel (`rgba(177,135,77,0.75)`) floats right
covering roughly half the container width. Inside the panel: "Sign up" heading
in white 36px bold Poppins; description text "to get discount 10% when
pre-order "Batman Beyond"" with bold product name; three form fields with
bottom-border separators (Name, Email, Password with eye icon); a checkbox
for terms of service; two pill-shaped buttons side by side — "SIGN UP" (white
bg, gold text) and "SIGN IN" (white border, transparent bg). Aesthetic: dark
cinematic mood, warm gold accent overlay, minimal form on dramatic background.
**One background image (page + container)** and a semi-transparent panel —
no other imagery.

### Design tokens (live stylesheet + rendered page, verified 2026-09-28)

| Token         | Value                                                    | Use                                                         |
| ------------- | -------------------------------------------------------- | ----------------------------------------------------------- |
| Page bg       | Dark cinematic image (cover, center)                     | `body` background-image — replace with picsum dark seed     |
| Container bg  | Secondary image (container-bg.png, cover)                | `.cl-container` background-image — replace with picsum seed |
| Form panel    | `rgba(177,135,77,0.75)` (#b18757 at 75% opacity)        | `.signup-content` right-floated, 562px wide                  |
| Text color    | `#fff`                                                   | All text — headings, body, inputs, labels, links            |
| Heading       | 36px bold Poppins, line-height 1.2, `#fff`              | h2 "Sign up"                                                |
| Body text     | 14px weight 600 Poppins, line-height 1.8, `#fff`        | Description paragraph                                       |
| Bold span     | `font-weight: bold`                                      | Highlighted product name ("Batman Beyond")                  |
| Inputs        | borderless, transparent bg, 14px bold Poppins, `#fff`   | Name/Email/Password — bottom border `1px solid #ebebeb`     |
| Placeholder   | 400 weight Poppins, `#fff`                               | Input placeholder text                                      |
| Eye icon      | Float right, position relative, `#fff`                   | Password visibility toggle (Eye/EyeOff SVGs)                |
| Checkbox      | 13px 400 weight Poppins, `#fff`                          | Terms agreement label                                       |
| Checkbox box  | 13x13px, `border: 1px solid #fff`, 2px radius            | Custom checkbox visual                                      |
| Sign Up btn   | White bg `#fff`, gold text `#b18757`, 50px height        | Pill (radius 25px), 130px wide, uppercase 13px, shadow      |
| Sign Up hover | `#e6e6e6` bg                                             | Hover state                                                 |
| Sign In btn   | White border `2px solid #fff`, transparent, `#fff` text  | Pill (radius 25px), 130px wide, same height                 |
| Sign In hover | White bg, gold text `#b18757`                             | Inverts colors on hover                                     |
| Container     | 1123px max-width, centered                               | `.cl-container` — 135px top / 115px bottom padding          |
| Card          | 562px wide, right-floated                                | `.signup-content` within container                          |
| Form padding  | 54px 80px 36px 55px                                      | `.signup-form` inner spacing                                |
| Mobile 992px  | Container: `calc(100% - 30px)`, max-width 100%           | Card: 100% width                                            |
| Mobile 480px  | Buttons: 100% width stacked, margin-right 0              | Form padding: 54px 30px 36px 30px                          |

### Icon mapping (lucide)

| Source glyph (zmdi/SVG)              | Recreation                          |
| ------------------------------------ | ----------------------------------- |
| `zmdi-eye` (show password)           | lucide `Eye`                        |
| `zmdi-eye-off` (hide password)       | lucide `EyeOff`                     |

No other icons needed — checkbox uses native browser appearance.
No brand/social icons — no social links in the original.

### Picsum placeholder plan

- **Page background:** `https://picsum.photos/seed/regista-bg/1920/1080`
  (dark-toned image; the original uses a cinematic dark cityscape)
- **Container background:** Optional — the original has a separate
  container-bg image behind the form area. Can use
  `https://picsum.photos/seed/regista-container/1123/500`
  or skip if the page bg alone is sufficient.

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/regista` from the simplest existing app
       (`cp -r apps/<simplest> apps/regista`), rename package to
       `@free-react-templates/regista`, add Poppins 400/600/700
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `regista.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): App (full-viewport bg, centered
       container, right-floated panel), Heading ("Sign up" h2 + bold
       description), NameInput (text, placeholder "Your Name", bottom
       border), EmailInput (email, placeholder "Email", bottom border),
       PasswordInput (password default, placeholder "Password", bottom
       border, Eye toggle), EyeToggle (click flips type + icon +
       aria-label), TermsCheckbox (checkbox + "Terms of service" link),
       SignUpButton (white bg, gold text, pill, uppercase, hover grey),
       SignInButton (white border, transparent bg, pill, uppercase,
       hover inverted), Footer (Component Dock credit). NOTE jsdom:
       assert icon via `getAttribute('class')` (SVG class is an
       SVGAnimatedString).
3. [ ] Layout shell: full-viewport dark bg (`bg-cover bg-center`),
       centered container (max-w 1123px, 135px top / 115px bottom
       padding), right-floated semi-transparent gold panel (562px,
       `bg-[rgba(177,135,77,0.75)]`); responsive: container
       `calc(100% - 30px)` ≤992px, card 100%.
4. [ ] Heading + description: "Sign up" h2 (36px bold white Poppins),
       description paragraph with bold product name span. Keep text
       generic (e.g., "Get exclusive early access to our latest launch").
5. [ ] Form fields: three inputs (Name, Email, Password) with transparent
       bg, bold white text, bottom border `#ebebeb`, placeholder 400
       weight. Password has Eye/EyeOff toggle (lucide icons, flip
       type + icon + `aria-label`).
6. [ ] Terms checkbox: checkbox input + label with "I agree all statements
       in" + "Terms of service" link. Use native checkbox appearance
       (the original uses `appearance: checkbox`).
7. [ ] Action buttons: two pill buttons side by side — "Sign up" (white
       bg `#fff`, gold text `#b18757`, radius 25px, 130px wide,
       uppercase 13px, shadow `0px 15px 9.9px 0.1px rgba(0,0,0,0.15)`,
       hover `#e6e6e6`) and "Sign in" (2px white border, transparent,
       radius 25px, same dimensions, hover white bg + gold text).
       Mobile ≤480px: full-width stacked.
8. [ ] Footer: minimal Component Dock credit linking
       https://www.componentdock.com/.
9. [ ] Run `npm run verify:app -- regista` (typecheck → lint → vitest
       100% → build) and fix until green.
10. [ ] Open PR `feat/template-regista` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL (`/etc/regform/` one), token
        list (gold `#b18757` overlay, Poppins, pill buttons, dark bg),
        and what differs (renamed "Regista", Poppins via Google Fonts,
        lucide Eye/EyeOff — no zmdi font, picsum placeholders instead
        of Batman imagery, generic discount text instead of "Batman
        Beyond", accessible semantics + focus rings, Component Dock
        footer).
11. [ ] Bookkeeping after merge: mark TEMPLATES.md line 2658 `[x]` +
        surge URL (`https://regista.free.componentdock.com`),
        `npm run readme:status`, push.
