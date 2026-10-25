# Gatehouse — task outline

Recreation of the ColorLib **Relay Auth** design (`relay-auth`) at `apps/gatehouse`. Spec is the
authority: `openspec/specs/template-gatehouse/spec.md`. Design notes:
`docs/templates/gatehouse/design-notes.md`. Check boxes only as work ships.

> The product is **eight connected authentication screens** — sign in, create account, recover
> access, check your inbox, reset password, verify code, expired link, confirmed — plus a short
> "how this works" view. Every screen is the **same 46 / 54 split**: a cream story panel that never
> changes and a **410 px** form column that does.
> Palette: one green `#254e3d` on cream `#f6f5ef` and ink `#20362c`; the only other hue is the
> error red `#9b342d`. Radii are **7 px** for every field/button/box, 10 px for message cards,
> 30 px only for the demo pill. Type is **Inter** (400..750 — the design really uses 550, 650 and
> 750) with **Georgia italic** for exactly one phrase.
> The reference is **4 KB of HTML per screen, one 8.6 KB stylesheet and a 5.4 KB script**: no
> framework, no font, no photograph. Everything except the brand mark is CSS — the "illustration"
> is an orbit div, a rotated note card, a chip and two unicode glyphs.
> Build the shell + the story panel + screen 01 first, then 02–08 (they are the same layout with
> different fields), then the guide. Copy is in the spec — reproduce it, keep the demo honesty
> (*"No message is sent"*, *"No real account … has been created"*), and rename every `relay` string
> to Gatehouse.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/gatehouse`; rename the package to
      `@free-react-templates/gatehouse`
- [ ] `public/CNAME` = `gatehouse.free.componentdock.com`; `homepage` =
      `https://gatehouse.free.componentdock.com`
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace; verify with
      `grep -c "free-react-templates/gatehouse" package-lock.json`
- [ ] `index.html`: one Google Fonts `<link>` —
      `css2?family=Inter:wght@400..750&display=swap` (verified **HTTP 200**), `preconnect` to
      `fonts.gstatic.com`, `<html lang="en">`
- [ ] `@theme` in `src/index.css`: the seven custom properties, the fourteen literal colours
      (note card, orbit rings, spark, error/notice, message card, disc, chip, code ground),
      `--font-sans: "Inter", …`, `--font-serif: Georgia, serif`, `--radius-field: 7px`,
      `--radius-chip: 6px`, `--radius-card: 10px`, `--radius-pill: 30px`
- [ ] `body`: ink on white, 15 px / 1.6, `-webkit-font-smoothing` per repo convention
- [ ] `:focus-visible { outline: 3px solid var(--color-focus); outline-offset: 4px }` at the root —
      never `outline: none` anywhere
- [ ] `vite.config.ts` registers `injectUiSource()` (copy from an existing app — never a relative
      `@source`)
- [ ] test: `index.css` carries all seven properties + the literal palette; `index.html` has Inter
      with `display=swap` and no second family

## 1 — Primitives

- [ ] `Button` variants: `primary` (`bg-green text-white`, radius 7, `min-height:51px`, 13/600,
      hover `#183d2c`, label left + `↗` right via `ml-auto`), `secondary` (`bg-white text-green`,
      border `--color-line`, hover cream), `text` (transparent, underlined, green), and
      `anchorPrimary` (same visuals as `primary`, rendered as `<a>` for screens 07/08)
- [ ] `Field` — label 12/650 + `mb-8px`, input `min-height:50px` → **52 px** with padding
      `13px 14px`, 1 px `#cad3c9`, radius 7, 15 px, placeholder 13 px `#7e8980`,
      `aria-invalid` → `#9b342d` border + `#fffafa` ground, error span 12 px `#9b342d`
- [ ] `RevealButton` — absolutely positioned `right:8px; top:8px`, 34 px, transparent, 11/650,
      `aria-controls` + `aria-pressed`, label flips `Show`/`Hide`, hover ground cream
- [ ] `StepLabel` — 10/700/2 px `#6d776d`
- [ ] `MessageCard` — radius 10, padding 27, `#fafbf7`, 1 px line; `MessageIcon` 44 px `#e0edcd`
      disc; `h2` 18/−0.4; `p` 13 muted
- [ ] `ErrorBox` / `Notice` — radius 7, padding `12px 15px`, 13 px; error `#fff5f2`/`#e5bdb7`/`#86362d`,
      notice `#edf5e4`/`#cfddbf`/green
- [ ] `Brand` — new inline SVG 32 × 32 (`rx 10`, `#214c3b` plate, `#d8f2b3` glyph) + wordmark
      29/750/−1.4 + `WORKSPACE` 10/500/1.5 uppercase
- [ ] `SkipLink` — fixed, `top:-80px` → `16px` on focus, white ground, 12 px padding

## 2 — Shell and story panel

- [ ] `Shell` — `grid-cols-[minmax(0,46%)_minmax(0,54%)]`, `min-h-[100svh]`; at ≤700 `block`
- [ ] `StoryPanel` — cream ground, `padding:44px 11%`, `min-h-[880px]`, flex column,
      `overflow:hidden`; identical on screens 01–08
- [ ] story copy block — eyebrow, `h2` `clamp(40px,4.3vw,65px)`/1.09/500/−3 with `<em>` Georgia
      `#4d6840`, two-line sub-copy `#626d60`
- [ ] `OrbitIllustration` — 250 px box, 240 px 1 px circle + 27/28 px halo rings, rotated note
      card (242 × 220, `-7deg`) with label / strong / two bars / 28 px tick disc, white chip
      (150 × 68, `+6deg`) reading `↗ Room to grow`, 66 px `✳`; whole thing `aria-hidden`
- [ ] story footer — `A calmer way forward.` + 28 px `✳`, `margin-top:auto`
- [ ] responsive: `min-width:1500px` padding 16 %; ≤950 padding `34px 9%` + `min-h 850`, `h2` 44,
      subtitle hidden, note 195 px, chip 32 %, orbit/spark pinned; ≤700 header only (80 px, brand
      24 + 28 px mark, subtitle **visible**), copy/illustration/footer not rendered
- [ ] test: 1440 → 662/778 columns, story 904 tall, `h2` 61.92 px; 390 → 80 px header, zero
      overflow

## 3 — Content chrome

- [ ] `Topbar` — 12 px flex row: `INTERACTIVE DEMO` pill (9/1.4, 1 px line, radius 30) +
      `Setup guide ↗`
- [ ] `ContentFooter` — 410 px column, `margin-top:auto`, `border-top` line, `<details>`
      `Preview settings` containing the five-option `scenario` select + five-link screen nav
- [ ] credit line — `Gatehouse · Made by Component Dock`, 10 px `#718074`, centre,
      `https://www.componentdock.com/`
- [ ] `main` — `max-w-[410px]`, `margin:78px auto 38px`, `tabindex="-1"`

## 4 — Screens 01–08

- [ ] **01 Sign in** — `01 / SIGN IN`, **Welcome back.**, intro, email + password + reveal,
      `Forgot password?` right-aligned, `Sign in ↗`, `New here? Create an account`
- [ ] **02 Create account** — `02 / CREATE ACCOUNT`, **Make room for good work.**, name + email +
      password (`minlength=12`) + passphrase hint, `Create account ↗`
- [ ] **03 Recover access** — `03 / RECOVER ACCESS`, **Let's get you back in.**, one email,
      `Send reset link ↗`, `← Back to sign in`
- [ ] **04 Check your inbox** — `04 / CHECK EMAIL`, **Check your inbox.**, `↗` message card,
      `Resend link` + countdown, secondary `Try another email address`, `demo-next` aside → 05
- [ ] **05 Reset password** — `05 / RESET PASSWORD`, **A fresh start.**, two revealed fields +
      hint, `Save new password ↗`, success → 01 **with the notice**
- [ ] **06 Verify account** — `06 / VERIFY ACCOUNT`, **One last step.**, `[0-9]{6}` field at
      28 px / 12 px tracking / tabular, demo-code hint, `Verify account ↗`, resend row,
      `Use a different email`
- [ ] **07 Link expired** — `07 / LINK EXPIRED`, **That link has expired.**, `↻` card, anchor CTA
      `Request a new link ↗`
- [ ] **08 Ready to go** — `08 / READY TO GO`, **You're all set.**, `✓` card with the demo
      disclaimer, `Try the flow again ↗`, `Explore the setup guide`
- [ ] **09 How this demo works** — 850 px `.doc` column, own brand block, condensed sections in
      order, behaviour table instead of the file table, repo dev command in the code block
- [ ] test: one test per screen asserting step label, `h1`, field count, CTA label and route

## 5 — Behaviour (the seam)

- [ ] `authenticate(operation, data, { scenario })` — typed module, **650 ms** delay, resolves
      `{ ok: true }`, rejects `Error` with `code` ∈ `NETWORK | RATE_LIMITED | EXPIRED | REJECTED`;
      `verifyCode` rejects unless `code === '123456'`; **no network call, no storage**
- [ ] `routes` — `signIn → welcome`, `signUp → verify`, `requestReset → check-email`,
      `resetPassword → sign-in?notice=reset`, `verifyCode → welcome`; `EXPIRED` on `resetPassword`
      → `expired` view
- [ ] `validate(form)` — the five generated messages (`Enter <label>.` / `Enter a valid email
      address.` / `Use at least 12 characters.` / `Enter all six digits.` /
      `Your passwords do not match.`), `aria-invalid`, `#<id>-error` text, focus first failure
- [ ] busy state — `aria-busy="true"`, submit disabled, `Please wait…`; error → box shown **and
      focused**, status cleared, button back; success → reset + navigate + discard values
- [ ] friendly error map — the six exact strings from the spec (typographic `’` kept)
- [ ] `useResend` — disable → `Please wait…` → result sentence → 30 s countdown
      (`Try again in {n}s`, 500 ms tick) → re-enable; interval cleared on unmount
- [ ] `?notice=reset` equivalent — the reset success notice renders once on arrival at screen 01
- [ ] tests: every message, the 650 ms busy window (fake timers), the expired short-circuit, the
      cooldown tick-down, and that no fetch/localStorage is ever touched

## 6 — Parity and a11y

- [ ] every one of the 79 in-app links resolves to a view; `0` dead targets; skip link on all
      eight screens
- [ ] one `<h1>` per screen, `<main id="main" tabindex="-1">`, `<aside aria-label="Gatehouse
      introduction">`, `lang="en"`
- [ ] `role="alert"` + focus on failure; `role="status" aria-live="polite"` for `Please wait…`,
      resend results and the notice
- [ ] reveal buttons `type="button"` + `aria-controls` + `aria-pressed` + relabelled `aria-label`
- [ ] focus ring 3 px `#608438` at 4 px offset on **every** focusable element
- [ ] transition only inside `@media (prefers-reduced-motion: no-preference)`
- [ ] no `colorlib` / `relay` string in `apps/gatehouse` (comments included)
- [ ] `public/` contains no ColorLib asset; the mark SVG is drawn here (32 × 32, `rx 10`)
- [ ] zero horizontal overflow at 320 / 390 / 640 / 768 / 950 / 1280 / 1440

## 7 — Ship

- [ ] `scripts/verify-app.sh gatehouse` green (typecheck + lint + knip + fallow + tests at 100 %
      coverage + build)
- [ ] `npm run spec:validate` clean for `template-gatehouse`
- [ ] PR: source `relay-auth`, preview URL, tokens used, deviations D1–D9 listed, note that the
      source is a nine-document static kit recreated as one SPA with nine views
- [ ] after merge: add the `TEMPLATES.md` row under `## Login Forms` (the line the spec carries),
      then `[~] → [x]` + Surge URL + `npm run readme:status`
