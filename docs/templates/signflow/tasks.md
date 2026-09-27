# SignFlow (ColorLib Regform 10) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-signflow`. Recreation name: **SignFlow** (NEW name —
> the ColorLib source keeps its name "Colorlib Reg Form V10").

## Source mapping

- **ColorLib item:** "Colorlib Regform 10" (TEMPLATES.md line 2627; section
  "## Registration Forms (37)" at line 2625). The
  `wp/template/colorlib-regform-10/` slug appears exactly ONCE in
  TEMPLATES.md (no dup rows; close-string matches for regform-1/2/3..36
  are other siblings, not duplicates).
- **Source URL:** https://colorlib.com/wp/template/colorlib-regform-10/
- **Preview URL — REACHABLE (verified 2026-09-27 by direct fetch):**
  **`https://colorlib.com/etc/regform/colorlib-regform-10/`**
  (HTTP 200, 2,719 bytes, 73 lines, `<title>Sign Up Form by Colorlib</title>`).
  **The naive `https://preview.colorlib.com/theme/colorlib-regform-10/`
  returns 404** — the regform family lives under
  `colorlib.com/etc/regform/colorlib-regform-<n>/` (path confirmed
  for regform-10). Do not redo this lookup.
- **Preview CSS:** `css/style.css` (hand-written, NO framework, NO Bootstrap)
  — full reset via `:where(html) :is(...)` selector, then custom styles.
  Fonts: Poppins 400/600/700 via local @font-face → **Google Fonts
  `<link>` (400, 600, 700)**. Also uses Material-Design-Iconic-Font
  for checkbox checkmark → **REPLACE with lucide Check icon**.

## Reference research (done — do not redo)

### Screenshot (`colorlib-reg-form-10.jpg`, 800×650 JPEG)

Browsed visually in the browser 2026-09-27 (matches the live page).
Browser frame: light blue (#e7f0fd) full-viewport background; one white
CARD centered (subtle shadow, 10px radius, 520px wide); large semi-transparent
"Sign up" watermark heading (white, 174px, 50% opacity) positioned at
top-right overlapping the card area. Inside the card: "What type of user
are you?" heading (24px bold centered), three radio-button pill toggles
(New bee / Average / Master), three stacked text inputs with left-aligned
labels (Full name, Email, Password) sharing borders (connected field stack),
a checkbox "I agree all statements in Terms of service", a full-width blue
"Create account" button, and "Already have an account? Log in" text below.
Aesthetic: clean, minimal, registration-focused, blue/white/grey palette.

### Design tokens (live stylesheet + rendered page, verified 2026-09-27)

| Token       | Value                                  | Use                                                                                                       |
| ----------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Page bg     | `#e7f0fd` (light blue)                 | `.main` padding 150px 0; no photo/gradient                                                                |
| Card        | `#fff`, 520px, radius **10px**         | `margin: 0 auto`; shadow `0px 10px 9.9px 0.1px rgba(0,0,0,0.05)`; mobile ≤768px: `calc(100% - 30px)`   |
| Primary     | `#1da0f2` (blue)                       | active radio bg, submit button bg, links, checkbox link                                                   |
| Primary hover| `#0c85d0`                              | submit button hover                                                                                       |
| Ink         | `#222`                                 | body/label/h2 text (base 14px bold)                                                                       |
| Muted       | `#888`                                 | inactive radio text, input labels, login text                                                             |
| Border      | `#ebebeb`                              | 2px input borders, radio pill borders                                                                     |
| Font        | Poppins 400/600/700                    | Google Fonts `<link>`; base 14px/1.8 line-height, 600 weight                                               |
| Watermark   | 174px, 700 weight, `#fff`, opacity 0.5 | positioned absolute, top -149px, right 105px, z-index 9                                                   |
| h2          | 24px, 700 weight, `#222`, center       | line-height 2.5, margin-bottom 40px                                                                       |
| Radio pills | border 2px `#ebebeb`, radius 5px       | unchecked: white bg, `#888` text; checked/hover: `#1da0f2` bg + `#fff` text; padding 11px 31px           |
| Inputs      | border 2px `#ebebeb`, 100% width       | font 14px bold Poppins; padding 16px 30px 16px 140px (labels positioned absolute left 28px, top 50%)      |
| Name input  | top-left + top-right radius 5px        | top of connected stack                                                                                    |
| Email input | no vertical borders (left+right only)  | middle of connected stack                                                                                 |
| Password    | bottom-left + bottom-right radius 5px  | bottom of connected stack                                                                                 |
| Checkbox    | custom styled, border 2px `#ebebeb`    | checkmark via MD icon font → **use lucide Check**; label color `#888`; margin-top 27px, margin-bottom 45px |
| Submit      | bg `#1da0f2`, `#fff` text              | 13px bold Poppins, radius 5px, padding 15px 20px; hover: `#0c85d0`                                        |
| Login link  | center, `#888` text                    | "Already have an account ?" + "Log in" as blue `#1da0f2` link; margin-top 63px                            |

Unused in the demo (skip): the Material-Design-Iconic-Font (replace
checkbox checkmark with lucide Check icon), jQuery (implement in React
state), the form POST action (no server — show success state).

### Icon mapping (lucide)

| Source glyph (MD icon font)          | Recreation                               |
| ------------------------------------ | ---------------------------------------- |
| `\f26b` (checkbox checkmark)         | lucide `Check`                           |

No other icons needed (no social fields, no eye toggles, no close buttons).

### Picsum placeholder plan

**NONE.** SignFlow has a solid light-blue page background and zero photos.
Everything copies over as CSS + lucide icons. (Do not invent photos the
source lacks.)

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/signflow` from the simplest existing app
       (`cp -r apps/<simplest> apps/signflow`), rename package to
       `@free-react-templates/signflow`, add Poppins 400/600/700
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `signflow.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): App (landmarks, document title "SignFlow
       — Registration Form"), Watermark (h1 "Sign up", 174px white 50%
       opacity), Card (centered white, 520px, 10px radius, shadow),
       RadioButtonGroup (3 options, default "New bee", highlight on
       select with blue bg), FormInput (left-aligned label inside field,
       connected border stack: name top radius, password bottom radius,
       email no vertical borders), TermsCheckbox (checkmark icon,
       "Terms of service" link), SubmitButton (full-width blue, text
       "Create account", success state on submit), LoginLink ("Already
       have an account?" + "Log in"), Footer (Component Dock credit).
3. [ ] Layout shell: light blue `#e7f0fd` page, 150px vertical padding,
       centered white card (max-w 520px, radius 10px, shadow
       `0px 10px 9.9px 0.1px rgba(0,0,0,0.05)`). Responsive: card
       `calc(100% - 30px)` at ≤768px.
4. [ ] Watermark heading: absolute-positioned h1 "Sign up" at top-right
       area (174px, weight 700, white, opacity 0.5, z-index 9).
       Responsive: hide or scale down on mobile.
5. [ ] Radio button group: heading "What type of user are you?" (24px
       centered bold), three pill-style radio options. Hidden native
       inputs, styled labels as the visible toggles. Default "New bee"
       checked. Checked state: bg `#1da0f2`, text `#fff`. Hover state:
       same as checked. Border 2px `#ebebeb`, radius 5px. Responsive:
       stack vertically at ≤575px.
6. [ ] Form inputs: three stacked inputs (Full name, Email, Password)
       with left-aligned labels positioned absolute inside the field.
       Connected border style: name has top radius, email has no vertical
       borders, password has bottom radius. Border 2px `#ebebeb`, font
       14px bold Poppins, padding 16px 30px 16px 140px. Label: position
       absolute left 28px top 50%, transform translateY(-50%), 600 weight,
       `#888`.
7. [ ] Terms checkbox: custom-styled checkbox with lucide Check icon
       when checked. Label text "I agree all statements in" + blue link
       "Terms of service". Margin-top 27px, margin-bottom 45px.
8. [ ] Submit button: full-width, bg `#1da0f2`, white text, 13px bold
       Poppins, radius 5px, padding 15px 20px. Hover: `#0c85d0`. On
       click: validate all fields + checkbox, show success state.
9. [ ] Success state: hide form, show centered "Registration successful!"
       message. Simple state toggle (no server call).
10. [ ] Login link: centered text "Already have an account?" with blue
       "Log in" link below the form, margin-top 63px.
11. [ ] Footer: minimal Component Dock credit linking
       https://www.componentdock.com/.
12. [ ] Run `npm run verify:app -- signflow` (typecheck → lint → vitest
       100% → build) and fix until green.
13. [ ] Open PR `feat/template-signflow` → merge immediately
       (`gh pr merge --squash --delete-branch`); PR description must
       include: source URL, preview URL (the `/etc/regform/` one), token
       list (light blue `#e7f0fd`, primary `#1da0f2`, Poppins 400/600/700,
       520px 10px-radius card, radio pills, connected input stack,
       watermark heading), and what differs (renamed "SignFlow", Poppins
       via Google Fonts, lucide Check icon instead of MD icon font,
       React state instead of jQuery, no server POST, accessible
       semantics + focus rings, Component Dock footer).
14. [ ] Bookkeeping after merge: mark TEMPLATES.md line 2627 `[x]` +
       surge URL (`https://signflow.free.componentdock.com`), `npm run
       readme:status`, push.
