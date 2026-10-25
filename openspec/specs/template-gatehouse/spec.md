# Template: Gatehouse (Login Forms — an eight-screen authentication flow with one calm green idea)

## Purpose

A **workspace sign-in product** whose whole pitch is that getting into software should feel like
walking into a quiet room. It is not a marketing page with a login box bolted on: it is **eight
connected authentication screens** — sign in, create account, recover access, check your inbox,
reset password, verify code, expired link, confirmed — each one a **46 / 54 split**: a cream story
panel on the left that never changes, and a small 410 px form column on the right that does.

The story panel is the design's memory. Whatever screen you are on, it says the same thing:

> **SPACE TO DO YOUR BEST WORK**
> **Good things / start with / *a little space*.**
> Bring your ideas together.
> Make the next move yours.

…with one italic **Georgia** phrase in the headline, an orbit illustration built from a single
1 px circle plus two hairline halo rings, a **−7°-rotated note card** in pale sage (*A FRESH
PERSPECTIVE / One thing at a time.*) with a green tick disc at its corner, a **+6°-rotated white
chip** that says *↗ Room to grow*, and one 66 px ✳ spark. Nothing is a photograph; the entire
"illustration" is six positioned divs and two unicode glyphs.

The right column is where the state lives, and it is deliberately narrow: a 10 px `01 / SIGN IN`
step label in `2px` letterspacing, a **38 px `−1.6px` heading at weight 550**, one 14 px line of
serif-free prose, then fields whose only decoration is a **1 px `#cad3c9` hairline at 7 px radius**
and a **51 px dark-green button** with an `↗` parked at its right edge. The palette is one green
(`#254e3d`) on cream (`#f6f5ef`) and ink (`#20362c`); the only other colour in the whole kit is the
error red (`#9b342d`).

The register is **soft, first-person, unhurried, and slightly literary**: *"A little focus. A fresh
start. Sign in to your workspace."*, *"Make room for good work."*, *"Let's get you back in."*,
*"One last step."*, *"A fresh start."*, *"You're all set."* No exclamation marks. No stock smiling
people. The product name in the reference is *relay*, with `WORKSPACE` set beside it as a 10 px
uppercase subtitle; the footer signs it *"A calmer way forward."*

Recreation name **Gatehouse** — the structure you pass through to get inside, which is what the
product is, invented here because the ColorLib slug is the starter's own product name.

Recreation of the ColorLib "Relay Auth" design as a React 19 + Vite + Tailwind CSS 4 + TypeScript
single-page application.

- **Source slug:** `relay-auth`
- **ColorLib page:** https://colorlib.com/wp/template/relay-auth/ — **HTTP 200, 110,824 B**; its
  `og:image` is `relay-auth-featured.jpg` (served as **AVIF**, 37,608 B — see §Screenshot analysis)
- **Live preview:** https://preview.colorlib.com/theme/relay-auth/ — **HTTP 200, 4,052 B**,
  `<title>` **"Welcome back. — Relay Auth"**, read 2026-10-25 with `curl -4`
- **Preview build:** hand-written HTML + one stylesheet + one ES-module bundle. **No framework, no
  build step, no external asset** — the stylesheet's own comment says *"Standalone, no external
  dependencies."* Nine documents, five files:

| resource | status | bytes | sha256 (first 16) |
| --- | --- | --- | --- |
| `theme/relay-auth/` (index) | 200 | 4,052 | — |
| `register.html` | 200 | 4,374 | — |
| `forgot-password.html` | 200 | 3,575 | — |
| `check-email.html` | 200 | 3,649 | — |
| `reset-password.html` | 200 | 4,278 | — |
| `verify.html` | 200 | 3,902 | — |
| `expired-link.html` | 200 | 3,287 | — |
| `welcome.html` | 200 | 3,313 | — |
| `setup.html` | 200 | 7,037 | — |
| `assets/style.css` | 200 | 8,591 | `d5cf0438a4e02432` |
| `assets/app.js` | 200 | 5,448 | `2922447ca27b9f23` |
| `assets/auth-adapter.js` | 200 | 1,053 | — |
| `assets/mark.svg` | 200 | 212 | `aa35f7a4f5e4c0f1` |
| `downloads/free/relay-auth.zip` | **404** | — | — |
| `theme/bootstrap/relay-auth/`, `theme/bb/relay-auth/` | **404** | — | — |

The slug-only path is the live one; there is **no archive and no bootstrap variant**, so the live
preview is the sole DOM/CSS reference (nothing to diff against, no "un-versioned twin" claim).

| item | value |
| --- | --- |
| ColorLib source | `relay-auth` — <https://colorlib.com/wp/template/relay-auth/> (HTTP 200) |
| live preview | <https://preview.colorlib.com/theme/relay-auth/> (HTTP 200, **4,052 B**, read 2026-10-25) |
| featured image | `relay-auth-featured.jpg` (AVIF, 37,608 B — a **promo composition**, see below) |
| new app | `apps/gatehouse` · `@free-react-templates/gatehouse` · `gatehouse.free.componentdock.com` |
| stack | Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript strict · Vitest + Testing Library, 100 % coverage |

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-25)

`TEMPLATES.md` is exhausted (every one of its 2,857 rows is `[x]`) but it never listed the whole
catalogue: of the 1,874 distinct `wp/template/<slug>/` links on colorlib.com's 40 listing pages,
**256 are absent from the checklist** — 42 standalone designs and 214 snippet variants. `relay-auth`
is one of the 42 standalone designs and the next item in the queue recorded in
`docs/catalog-coverage.md`; this spec's folder is the prep marker for the *design*, not for a
checklist row. It is the smallest of the 42 (4,052 B) and the only one of them that is a
**multi-document flow** rather than a single page.

## Reference readings (2026-10-25, `curl -4`)

Geometry below is `getBoundingClientRect` + `getComputedStyle` from a headless Chromium pass over
all nine documents at **1440 × 900** and **390 × 844**, after `domcontentloaded` + 900 ms. The
stylesheet is 8,591 B **minified to one line** — every rule quoted here was read out of it, and
every colour was confirmed against the live computed style (CSS values are canonical; the promo
image is not).

## Design tokens (from `assets/style.css` + `getComputedStyle`)

Seven custom properties carry the whole design; everything else is a literal.

```css
:root{
  color-scheme: light;
  --ink:   #20362c;   /* every text colour, every border-black, input text */
  --muted: #627069;   /* intro copy, form status, preview-tools */
  --green: #254e3d;   /* primary button, links, tick disc, reveal button */
  --cream: #f6f5ef;   /* story panel ground, reveal hover, secondary hover */
  --line:  #d8ded6;   /* hairlines, demo-badge border, secondary border */
  --error: #9b342d;   /* field errors, invalid input text */
  --font:  Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
```

### Every other colour in the kit (literals in the sheet — copy them verbatim)

| hex | where it is painted |
| --- | --- |
| `#608438` | `:focus-visible` outline, **3 px**, `outline-offset: 4px` (measured `rgb(96,132,56)`) |
| `#183d2c` | `.primary:hover` ground (the only darkened green in the kit) |
| `#66735c` | story eyebrow + story footer text |
| `#4d6840` | the `<em>` italic phrase in the story `h2` |
| `#626d60` | story sub-copy (`Bring your ideas together.`) |
| `#6d776d` | `.step` label (`01 / SIGN IN`) |
| `#647067` | `.demo-badge` text (`INTERACTIVE DEMO`) |
| `#718074` | `.content-footer > p` credit line |
| `#cad3c9` | input / select border |
| `#7e8980` | input placeholder |
| `#e1edc9` | the rotated note card ground |
| `#cddaba` | the note card border |
| `#c1d0a9` | the two `.note-line` bars inside the note |
| `#d8dfcb` | the 1 px orbit circle |
| `#f0f1e7`, `#e0e4d4` | the orbit's two halo rings (`box-shadow: 0 0 0 27px`, then `28px`) |
| `#829465` | the 66 px ✳ spark glyph |
| `#e6e6dc` | the `Room to grow` chip border |
| `#243d2310` | note-card shadow (`0 16px 22px`, **6 %** alpha — an 8-digit hex, keep it) |
| `#21352b0b` | chip shadow (`0 8px 20px`, **4 %** alpha) |
| `#fffafa` | invalid-input ground (`input[aria-invalid=true]`) |
| `#fff5f2` / `#e5bdb7` / `#86362d` | form-error + notice box ground / border / text (`#86362d` is the box text, `--error` is the field text) |
| `#edf5e4` / `#cfddbf` | the green `notice` box ground / border (text is `--green`) |
| `#fafbf7` | `.message-card` ground (screens 04, 07, 08) |
| `#e0edcd` | `.message-icon` 44 px disc |
| `#bac8b5` | `.demo-next` dashed border |
| `#f1f4ec` | `.doc code` / `.doc pre` ground (screen 09) |
| `#eff4e8` | `.doc aside` ground (screen 09) |
| `#ffe9ba` | `<noscript>` bar (do not ship — see D7) |
| `#214c3b` / `#d8f2b3` | the brand mark plate / glyph (draw your own — D2) |

### Radii, shadows, sizes

| token | value | used on |
| --- | --- | --- |
| radius-field | **7 px** | inputs, selects, `.primary`/`.secondary`, note card, error/notice boxes |
| radius-xs | 3 px | note bars, `.doc code` |
| radius-sm | 4 px | `.reveal` button |
| radius-chip | 6 px | `Room to grow` chip |
| radius-card | **10 px** | `.message-card` |
| radius-pill | 30 px | `.demo-badge` |
| round | 50 % | check disc (28 px), `.message-icon` (44 px), orbit (240 px) |
| shadow-note | `0 16px 22px #243d2310` | rotated note card |
| shadow-chip | `0 8px 20px #21352b0b` | `Room to grow` chip |

### Typography — one family, five weights, one serif accent

`Inter` → `ui-sans-serif` → `-apple-system` → `BlinkMacSystemFont` → `"Segoe UI"` → `sans-serif`.
**The reference ships no font file and no Google Fonts `<link>`** — only a `dns-prefetch` to a CDN
it never uses. Inter is therefore used *if the visitor happens to have it*, and the design's real
default is the platform UI sans. The recreation must **load Inter deliberately** (see D4).

| role | size / weight / tracking |
| --- | --- |
| brand wordmark | **29 / 750 / −1.4px** (24 at ≤700) |
| brand subtitle `WORKSPACE` | 10 / 500 / **1.5px**, uppercase, `margin:10px 0 0 4px` |
| eyebrow + `.step` | 10 / 700 / **2px** |
| story `h2` | `clamp(40px, 4.3vw, 65px)` / 1.09 / **500 / −3px** (measured **61.92 px** at 1440) |
| story `h2 em` | Georgia, 400, `#4d6840` |
| story sub-copy | 15 / 1.8 |
| note label | 8 / 1.5px |
| note strong | 28 / 500 / −1px / 1.15 |
| chip | 13 |
| spark | 66 |
| story footer | 11 |
| `h1` | **38 / 550 / −1.6px / 1.13** (34 at ≤950, 36 at ≤700, 32 at ≤360) |
| intro | 14 / 1.75 |
| field label | 12 / **650** |
| input | 15; placeholder 13 |
| `.reveal` | 11 / 650 |
| field error / hint / links / switch / status / resend | 12 |
| `.primary` / `.secondary` | **13 / 600** |
| message card `h2` | 18 / −0.4px / 1.4 |
| message card `p` | 13 |
| `.code` | **28 / 12px tracking / `tabular-nums`** (9 px tracking at ≤360) |
| credit line | 10 |
| `.doc` body | 15 / 1.8; `h2` 23; table 13 (11 at ≤360) |

**Weights 550 and 750 are not static cuts.** They only render as designed with the **variable**
Inter axis, so the recreation loads `css2?family=Inter:wght@400..750&display=swap` (**HTTP 200**
verified) and keeps the odd weights. If an implementer prefers discrete static weights, the
documented substitution is **500 → 500, 550 → 600, 650 → 600, 750 → 700** (a 1-step nudge, not a
redesign), recorded as delta D4b.

### Breakpoints (from the sheet, `max-width`)

| query | effect |
| --- | --- |
| `min-width:1500px` | `.story` padding becomes `44px 16%` |
| `max-width:950px` | story `34px 9%` + `min-height:850`, story-copy `margin-top:60`, `h2` 44; content `34px 28px 22px`; `h1` 34; note left 0 / width 195; chip left 32 %; **brand subtitle hidden**; spark right 0; orbit left 0 |
| `max-width:700px` | `.shell` becomes `block`; story `min-height:0; padding:21px 24px; overflow:visible`; brand 24 with 28 px mark; **brand subtitle visible again**; `.story-copy`, `.illustration`, `.story-footer` **`display:none`**; content `24px` + `min-height:calc(100svh - 74px)`; `main` `46px auto 30px`; `h1` 36; intro `mb 28`; topbar 11; footer `pb 8` |
| `max-width:360px` | content 20; story `18px 20px`; `h1` 32; `.code` tracking 9; badge 8/1px; message card padding 20; `.doc` padding `0 18px`; `.doc table` 11 |

The subtitle rule inverts between 950 and 700 — that is in the reference and is **not** a typo to
"fix": the mobile header shows `relay WORKSPACE`, the tablet header shows `relay` alone.

### Motion

Only one transition exists, and only for people who have not asked for less:

```css
@media (prefers-reduced-motion: no-preference){
  button, a, input { transition: background-color .15s, border-color .15s }
}
```

No keyframes, no scroll animation, no carousel. Reduced motion needs no special casing beyond
honouring this wrapper.

## The split shell — measured geometry

`display:grid; grid-template-columns: minmax(0, 46%) minmax(0, 54%); min-height: 100svh`

| element | 1440 × 900 | 390 × 844 |
| --- | --- | --- |
| `.shell` | 1440 × 904 | 390 × 906 |
| `.story` (left) | **662 × 904**, padding `44px 11%` (73 px), `min-height:880` | **390 × 80** — brand bar only |
| `.content` (right) | 778 × 904, padding `42px clamp(28px,5vw,86px) 20px` | 390 × 826 at y=80, padding 24 |
| `.topbar` | 634 × 26 at (734, 42) | 342 × 26 at (24, 104), 11 px |
| `main` | **410 × 508** at (846, 146), `margin:78px auto 38px` | 342 × 502 at (24, 177), `margin:46px auto 30px` |
| brand | 195 × 46 at (73, 44) | 179 × 38 at (24, 21) |
| story `h2` | 517 × 203 at y=206, 61.92 px | hidden |
| `.illustration` | 517 × 250 at y=525 | hidden |
| `.note` | 242 × 220 at (108, 542), `rotate(-7deg)` | hidden |
| `.small-note` | 150 × 68 at (318, 685), `rotate(6deg)` | hidden |
| `.spark` | 55 × 106 glyph box at (519, 543) | hidden |
| `.step` | 410 × 16 at y=146 | same, y=177 |
| `h1` | 410 × 43 at y=181 | 342 × 41 at y=212 |
| `.intro` | 410 × 25 at y=240 | 342 × 25 at y=268 |
| first input | **410 × 52** at y=324 | **342 × 52** at y=348 |
| `.primary` | **410 × 51** at y=534 | **342 × 51** at y=559 |
| `.content-footer` | 410 × 80 at y=803 | 342 × 88 at y=794 |

Document heights: **904** for six of the eight screens, **927** (create account), **929** (check
your inbox), **3,161** (setup guide) at 1440; **906 / 972 / 978 / 4,781** at 390. `scrollWidth ===
clientWidth` on all nine documents at both widths — the reference has **no horizontal overflow**,
which is worth keeping given how much of the story panel is rotated past its own box.

## Screen inventory (nine documents, eight steps + a guide)

| # | document | step label | `h1` | form `data-operation` | fields | primary CTA | success route |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 01 | `index.html` | `01 / SIGN IN` | **Welcome back.** | `signIn` | Email address, Password | Sign in ↗ | `welcome.html` |
| 02 | `register.html` | `02 / CREATE ACCOUNT` | **Make room for good work.** | `signUp` | Full name, Email address, Password (min 12) | Create account ↗ | `verify.html` |
| 03 | `forgot-password.html` | `03 / RECOVER ACCESS` | **Let's get you back in.** | `requestReset` | Email address | Send reset link ↗ | `check-email.html` |
| 04 | `check-email.html` | `04 / CHECK EMAIL` | **Check your inbox.** | — | — | *(message card + resend)* | — |
| 05 | `reset-password.html` | `05 / RESET PASSWORD` | **A fresh start.** | `resetPassword` | Password, Confirm password (min 12) | Save new password ↗ | `index.html?notice=reset` |
| 06 | `verify.html` | `06 / VERIFY ACCOUNT` | **One last step.** | `verifyCode` | Verification code (`[0-9]{6}`) | Verify account ↗ | `welcome.html` |
| 07 | `expired-link.html` | `07 / LINK EXPIRED` | **That link has expired.** | — | — | Request a new link ↗ | `forgot-password.html` |
| 08 | `welcome.html` | `08 / READY TO GO` | **You're all set.** | — | — | Try the flow again ↗ | `index.html` |
| 09 | `setup.html` | *(no step)* | **Make it your own.** | — | — | — | docs layout |

Every screen carries the identical story panel, the identical topbar (`INTERACTIVE DEMO` badge on
the left, `Setup guide ↗` on the right), the identical `Preview settings` details block and the
identical credit line — only `main` changes. That is what makes a screen switcher the right React
shape (D1).

### Screen 01 — Sign in (`index.html`)

`<title>Welcome back. — Relay Auth`; intro *"A little focus. A fresh start. Sign in to your
workspace."*; email `placeholder="you@example.com"`, `autocomplete="email"`; password
`autocomplete="current-password"` with a `Show` reveal button; a right-aligned `Forgot password?`
link (`font-size:12px; margin:-5px 0 25px`); **`Sign in ↗` — the `↗` is `margin-left:auto`, so the
label is left-aligned and the arrow right-aligned inside a centred flex row**; then
`New here? Create an account`. The submit carries `disabled` in the markup and `app.js` sets
`disabled = false` on load — reproduce the *end* state (an enabled button), not the flash (D8).

### Screen 02 — Create account (`register.html`)

Intro *"Create your account and find your rhythm."*; three fields in order (name / email /
password); password `minlength="12"`, `autocomplete="new-password"`, reveal button, and a
`.hint` beneath it: **"Use at least 12 characters. Spaces and passphrases are welcome."**
(`aria-details="password-hint"`). Footer line *"Already have an account? Sign in"*.

### Screen 03 — Recover access (`forgot-password.html`)

Intro *"Enter your email to request a password reset link."*; one email field; CTA
`Send reset link ↗`; below it a centred `← Back to sign in` (the only back-arrow link in the kit).

### Screen 04 — Check your inbox (`check-email.html`)

No form. Intro *"If an account matches that address, a reset link will be sent. Check your spam
folder too."* — deliberately non-committal (anti-enumeration copy). A `.message-card` with the
**`↗` glyph** in a 44 px `#e0edcd` disc, `h2` *"Your next step is in your inbox."*, `p` *"Open the
link in your email to choose a new password."* Then a centred `.resend-row` —
`Resend link` text button plus a `[data-countdown]` span — a **`Try another email address`
secondary** button, a `Back to sign in` switch line, and an `<aside class="demo-next">` that says
*"Preview this flow / No email is sent in this demo."* and links to the demo reset link. The
`demo-next` aside is demo chrome: keep it (it is the only route to screen 05) but it must read as
a preview affordance, never as part of the product's own flow.

### Screen 05 — Reset password (`reset-password.html`)

Two password fields, each with its own `Show` reveal (labels `Password` and `Confirm password`,
the reveal `aria-label` naming its own label). Password hint again under the first field. CTA
`Save new password ↗`. Success routes back to screen 01 **with the notice visible**: `.notice`
(role=`status`) reads *"Demo reset completed. Try signing in next."* For a non-demo wording use
*"Password updated. Sign in with your new password."* — one string, chosen once, asserted once.

### Screen 06 — Verify account (`verify.html`)

One field: `#code`, `inputmode="numeric"`, `pattern="[0-9]{6}"`, `maxlength="6"`,
`autocomplete="one-time-code"`, `placeholder="000000"`, and **`class="code"` for the 28 px / 12 px
tracked, tabular display**. Hint: *"Demo code: **123456**. No message is sent."* CTA
`Verify account ↗`; a centred `Resend code` text button with its own countdown; footer
`Use a different email` → screen 02.

### Screen 07 — Link expired (`expired-link.html`)

No form. Intro *"Request a fresh reset link to continue."*; message card with the **`↻`** glyph,
`h2` *"Let's try that again."*, `p` *"For your account's security, reset links can only be used for
a limited time."*; an `<a class="primary">` (not a button) → screen 03; `Back to sign in` switch.

### Screen 08 — Ready to go (`welcome.html`)

No form. Intro *"You've reached the end of the preview journey."*; message card with the **`✓`**
glyph, `h2` *"A connected flow, from the first step."*, `p` *"This is a demo confirmation screen. No
real account or authenticated session has been created."* — the honesty is part of the design.
CTA `Try the flow again ↗` → screen 01; footer switch `Explore the setup guide` → screen 09.

### Screen 09 — Setup guide (`setup.html`)

The odd one out and **the only document without the two-column shell**: `.doc` is a single 850 px
column, `margin:50px auto`, padding `0 25px`, with its own brand block (mark + `relay` +
`auth starter`, 10 px uppercase) and no story panel. Content, in order: step eyebrow *"THE WHOLE
JOURNEY, IN ONE PLACE"*, `h1` *"Make it your own."*, a lead paragraph (*"Eight connected
authentication screens. One visual system. Plain HTML, CSS and JavaScript, with no packages, build
step or external assets."*), an `<aside>` disclaimer (*"This download is a frontend starter … A
backend or authentication provider is required for live use."*), `h2 Try every step` + a 8-link
nav, `h2 Run it locally` + a `<pre><code>` block, `h2 What goes where` + a 5-row file table,
`h2 Connect your service` + the `authenticate(operation, data, options)` contract. For the
recreation this becomes a **condensed "How this demo works" view** (D5): the section order stays,
the file table becomes a *screens / behaviour* table, and the `python3 -m http.server` block is
replaced by the repo's own dev command.

## Behaviour the recreation must reproduce (from `assets/app.js`, 5,448 B)

The bundle is 5.4 KB of plain module code and it defines the entire interactive contract:

1. **Reveal** — `for (const button of document.querySelectorAll('[data-reveal]'))`: sets
   `input.dataset.password='true'`, then on click flips `type` between `password` and `text`, swaps
   the label `Show` ↔ `Hide`, sets `aria-pressed`, and rewrites `aria-label` as
   `"Hide password"` / `"Show password"` (lowercased from the input's own `<label>` text).
   Measured: after one click `type=text`, label `Hide`, `aria-pressed=true`, `aria-label="Hide password"`.
2. **Validate on submit only** (`form novalidate`, `submit` handler). Error text is generated from
   the input, never hard-coded per field:

   | condition | message |
   | --- | --- |
   | empty | `Enter <label, lowercased>.` → *"Enter email address."*, *"Enter password."*, *"Enter full name."* |
   | `validity.typeMismatch` | `Enter a valid email address.` |
   | below `minlength` | `Use at least 12 characters.` |
   | `patternMismatch` | `Enter all six digits.` |
   | `name="confirm"` and `!== password` | `Your passwords do not match.` |

   Each failing input gets `aria-invalid="true"`, its `#<id>-error` span gets the text, the **first**
   failing input is focused, and submit is aborted. Typing in any input clears **its own** error
   (`input` listener → `fieldError(input, '')`) but the form-level `.form-error` box stays until the
   next submit.
3. **Fake latency** — the adapter awaits **650 ms**, then resolves, or rejects with an `Error`
   whose `code` is `NETWORK` / `RATE_LIMITED` / `EXPIRED` / `REJECTED`. `verifyCode` additionally
   rejects with `REJECTED` unless `code === '123456'`.
4. **Friendly error copy** (exact strings, by code first, then by operation):

   | condition | message |
   | --- | --- |
   | `NETWORK` | `We couldn't connect. Please try again.` |
   | `RATE_LIMITED` | `Too many attempts. Please wait before trying again.` |
   | `EXPIRED` | `This code has expired. Request a new code and try again.` |
   | `verifyCode` rejected | `That code didn't match. Check all six digits and try again.` |
   | `signIn` rejected | `We couldn't sign you in with those details. Check them and try again.` |
   | anything else | `We couldn't complete that request. Please try again.` |

   (Note the typographic apostrophe `’` in the shipped strings — keep it.)
5. **Busy state** — on submit: `busy` guard, submit `disabled`, form `aria-busy="true"`,
   `.form-error` hidden, `.form-status` = *"Please wait…"*. On error: box text + `hidden=false`,
   status cleared, **focus moved to the error box** (it is `tabindex="-1"`), submit re-enabled,
   `aria-busy` removed. On success: `form.reset()` then `location.assign(route)`, and the collected
   `data` object is wiped in `finally` (*"never persist passwords, codes or account data"*).
6. **Routes** — `signIn → welcome`, `signUp → verify`, `requestReset → check-email`,
   `resetPassword → index?notice=reset`, `verifyCode → welcome`; and **`EXPIRED` on `resetPassword`
   short-circuits to `expired-link`** (form reset first, no error text).
7. **Resend cooldown** — `[data-resend]` disables itself, sets `[data-resend-status]` to
   *"Please wait…"*, awaits the adapter, then writes *"Demo resend complete. No message was sent."*
   (or *"If eligible, a new message will be sent."* in live mode), starts a **30 s countdown**
   rendered in `[data-countdown]` as `Try again in {n}s` (ticked every 500 ms), re-enables the
   button at 0, and clears the interval on `pagehide`.
8. **`?notice=reset`** — un-hides `.notice` and writes the reset-complete sentence.
9. **Demo chrome** — the scenario `<select>` (`success` / `rejected` / `network` / `rate` /
   `expired`) is the only input to the fake adapter; it lives inside the `Preview settings`
   `<details>` and is read at submit time.

`assets/auth-adapter.js` is the seam and its own comment is the specification: *"Never implement
real authentication or token validation in browser code."* The recreation keeps that seam as a
typed module (`authenticate(operation, data, { scenario }): Promise<{ ok: true }>`) so the UI can
be tested in every state without a backend, and so the demo never pretends to authenticate.

## Anchor census (nine documents, 96 anchors, **0 dead**)

Probed with `curl -4` on the preview host — every in-app target answers **200**:

| document | anchors | notes |
| --- | --- | --- |
| `index.html` | 11 | includes the story wordmark → itself |
| `register.html` | 10 | |
| `forgot-password.html` | 10 | |
| `check-email.html` | 12 | the only page linking `reset-password.html` |
| `reset-password.html` | 10 | |
| `verify.html` | 10 | |
| `expired-link.html` | 11 | |
| `welcome.html` | 11 | the only page linking `setup.html` twice |
| `setup.html` | 11 | 8-link screen nav, no `#main` skip link |
| **total** | **96** | |

Breakdown: **8** `href="#main"` skip links (every screen except the guide), **79** in-app page
links (`index` 25, `forgot` 12, `register` 11, `verify` 9, `expired` 9, `setup` 9, `reset` 2,
`check-email` 1, `welcome` 1), **9** external `https://colorlib.com/` credit links, and **zero**
bare `#`. In the recreation every one of the 79 must resolve to a real view (D1), the skip link
must exist on every screen, and the 9 credit links become **Component Dock** links (D6).

## Accessibility inventory (present in the reference — keep all of it)

- `<a class="skip" href="#main">Skip to form</a>` — fixed, `top:-80px`, slides to `top:16px` on
  focus; `<main id="main" tabindex="-1">` so the skip target actually receives focus.
- Every input has a real `<label for>`, `autocomplete`, and `aria-describedby` pointing at its
  error span; errors are *also* mirrored by `aria-invalid="true"` and `role="alert"` +
  `tabindex="-1"` on the form-level box, which is **focused** on failure.
- Live regions: `.form-status` and `[data-resend-status]` are `role="status" aria-live="polite"`;
  `.notice` is `role="status"`.
- The reveal button is `type="button"`, `aria-controls`, `aria-pressed`, and re-labels itself.
- `<aside class="story" aria-label="Relay introduction">` → `aria-label="Gatehouse introduction"`.
- Decorative illustration is `aria-hidden="true"`; the mark `<img>` has `alt=""`.
- `:focus-visible` is a 3 px `#608438` outline at 4 px offset — **never removed**.
- `<html lang="en">`, one `<h1>` per screen (the story heading is `<h2>`), one `<main>`.

## Screenshot analysis (`relay-auth-featured.jpg`, AVIF 37,608 B, 1200 × 947)

The ColorLib listing's own image is **a promo composition, not a page capture**: a pale sage ground
(`#e8ebdd`-ish) headed `COLORLIB · HTML / CSS / JAVASCRIPT`, the word *Relay Auth* in a large
grotesque, the strapline *"Eight connected authentication screens. One complete UI starter."*, a
`Frontend template` pill, and a **2 × 2 grid of four browser frames** (Sign in, Create account,
Password recovery, Code verification) each with a thin window chrome and a small title label
centred above it. It confirms the palette (cream/ink/green), the 46/54 split, the italic serif
phrase, the rotated note card, the 410 px form column, and that all eight screens share one shell —
it adds no page that the live DOM does not have. Served as **AVIF despite the `.jpg` name**;
`vision_analyze` rejects the raw bytes, so convert first
(`ffmpeg -i featured.raw featured.png`).

## Deliberate deviations from the reference

| # | deviation | why |
| --- | --- | --- |
| **D1** | **Nine HTML documents become one SPA with nine views** (`signin`, `register`, `recovery`, `check-email`, `reset`, `verify`, `expired`, `welcome`, `how-it-works`), switched by app state and mirrored in `location.hash` (`#sign-in`, `#register`, …) so deep links and tests can address a screen. `location.assign()` becomes `navigate(view)`. | one app per template is a repo rule; a static-site flow cannot ship as nine documents from one Vite entry |
| **D2** | Brand is **Gatehouse**, not *relay*; the mark is a **new inline SVG** (32 × 32, `rx 10`, plate `#214c3b`, glyph `#d8f2b3`) drawn from the same geometry family — the 212 B `assets/mark.svg` is **not** copied | name + asset rules (AGENTS.md 5; replication "never copy assets") |
| **D3** | The demo's *"no information is submitted"* honesty is kept as **UI copy**, and the scenario `<select>` stays — but the adapter is a typed local module that resolves/rejects on a timer and **never performs a request** | the design's whole stance; keeps every state testable |
| **D4** | **Inter is loaded from Google Fonts** (`css2?family=Inter:wght@400..750&display=swap`, HTTP 200 verified) instead of being assumed present | the reference ships no font at all and silently falls back to the system sans |
| **D4b** | If static weights are preferred: **550 → 600, 650 → 600, 750 → 700** | the only documented substitution; do not reflow the type scale |
| **D5** | Screen 09 is recreated as a **condensed "How this demo works" view** (same section order, file table → screens/behaviour table, `python3 -m http.server` block → the repo dev command) | the original document documents a download that does not exist here; a dead `Setup guide ↗` would violate the zero-dead-link rule |
| **D6** | The `Made by Colorlib` credit becomes **`Made by Component Dock`** → `https://www.componentdock.com/`; no ColorLib string, no `relay` product name, no `relay.example` address survives in any app file | AGENTS.md rule 5 |
| **D7** | `<noscript>` bar, `<meta name="robots" content="noindex">`, the `cdnjs` `dns-prefetch`, and the `--font` `dns-prefetch` are dropped | preview-harness artefacts, not design |
| **D8** | The submit renders **enabled** from first paint (the reference ships `disabled` and enables it in JS) | no flash-of-disabled; identical end state |
| **D9** | Placeholder imagery: **none is needed** — the entire illustration is CSS + unicode. If an implementer wants a photograph anywhere, use `https://picsum.photos/seed/gatehouse-<n>/<w>/<h>` | the design has no photography; do not invent any |

## Requirements

### Requirement 1: Split shell and page frame

The app SHALL render every screen inside one two-column shell: a 46 % story panel and a 54 %
content column, both filling at least the viewport height.

#### Scenario: Desktop frame at 1440

- **GIVEN** a 1440 px viewport
- **THEN** `.shell` is `display:grid` with `minmax(0,46%) / minmax(0,54%)` and `min-height:100svh`
- **AND** the story panel measures **662 px** wide and the content column **778 px**
- **AND** the story panel keeps `min-height:880px` and `padding:44px 11%`
- **AND** the content column pads `42px clamp(28px,5vw,86px) 20px`, so the topbar starts at x=734
- **AND** `main` is a **410 px** column, `margin:78px auto 38px`

#### Scenario: One `<main>` per screen

- **GIVEN** any screen
- **THEN** the document has exactly one `<main id="main" tabindex="-1">`, one `<h1>`, one `<h2>` in
  the story panel, and `<html lang="en">`
- **AND** the story panel is `<aside aria-label="Gatehouse introduction">`

### Requirement 2: Story panel (the screen that never changes)

The story panel SHALL be identical on all eight auth screens and SHALL contain, in order, the
brand, the eyebrow, the three-line headline with its italic serif phrase, the two-line sub-copy,
the orbit illustration, and the story footer.

#### Scenario: Content and typography

- **GIVEN** any auth screen at 1440
- **THEN** the brand shows the 32 px mark, `Gatehouse` at **29 px / 750 / −1.4px**, and the
  `WORKSPACE` subtitle at 10 / 500 / 1.5 px uppercase, `margin:10px 0 0 4px`
- **AND** the eyebrow reads `SPACE TO DO YOUR BEST WORK` at 10 / 700 / 2 px in `#66735c`
- **AND** the headline is `Good things / start with / a little space.` at
  `clamp(40px,4.3vw,65px)` / 1.09 / 500 / **−3 px**, with **only** `a little space.` in `<em>`
  Georgia 400 `#4d6840`
- **AND** the sub-copy is `Bring your ideas together.` / `Make the next move yours.` on two lines
  (`<br>`), 15 px / 1.8 / `#626d60`
- **AND** the footer row reads `A calmer way forward.` at 11 px `#66735c` with a 28 px `✳` at the
  far right

#### Scenario: The orbit illustration is CSS, not an image

- **GIVEN** the story panel at ≥950 px
- **THEN** `.illustration` is a 250 px-tall positioned box containing exactly four children
- **AND** `.orbit` is a **240 × 240** circle, 1 px `#d8dfcb`, at `left:20%`, with
  `box-shadow:0 0 0 27px #f0f1e7, 0 0 0 28px #e0e4d4`
- **AND** `.note` is **242 × 220** at `left:9%`, `top:30px`, ground `#e1edc9`, border 1 px
  `#cddaba`, radius 7, padding 24, `transform:rotate(-7deg)`, shadow `0 16px 22px #243d2310`
- **AND** the note holds label `A FRESH PERSPECTIVE` (8 px / 1.5), `One thing / at a time.`
  (28 / 500 / −1px), two `#c1d0a9` bars at 60 % and 40 % width × 4 px, and a **28 px** `#254e3d`
  disc with a white `✓` at `right:20px; bottom:20px`
- **AND** `.small-note` is a white chip, border `#e6e6dc`, radius 6, padding `15px 20px`, 13 px,
  `transform:rotate(6deg)`, reading `↗ Room to grow` with an 8 px gap
- **AND** `.spark` is a 66 px `✳` in `#829465` at `right:3%; top:18px`
- **AND** the whole illustration is `aria-hidden="true"` and uses **no** image asset

### Requirement 3: Content chrome (topbar, preview settings, credit)

Every screen SHALL carry the same topbar, the same `Preview settings` block and the same credit
line; only `main` changes.

#### Scenario: Topbar

- **GIVEN** any screen
- **THEN** the topbar is a 12 px flex row: a pill badge `INTERACTIVE DEMO` (9 px / 1.4 px,
  border 1 px `#d8ded6`, radius 30, padding `5px 10px`, text `#647067`) on the left and
  `Setup guide ↗` on the right
- **AND** the badge must **not** look like a button (no fill, no hover ground)

#### Scenario: Preview settings and credit

- **GIVEN** any screen at 1440
- **THEN** `.content-footer` is a 410 px column pinned to the bottom (`margin-top:auto`), with a
  `border-top:1px solid #d8ded6` above a `<details><summary>Preview settings</summary>`
- **AND** the details contain a labelled `<select id="scenario">` with exactly five options —
  `Successful response`, `Rejected request`, `Network error`, `Too many attempts`,
  `Expired code or link` — and a five-link screen nav (`Sign in`, `Register`, `Recovery`,
  `Verification`, `Expired link`)
- **AND** the credit line reads `Gatehouse · Made by Component Dock`, 10 px `#718074`, centred,
  with the link pointing at `https://www.componentdock.com/`

### Requirement 4: Sign in (screen 01)

#### Scenario: Composition

- **GIVEN** the sign-in view
- **THEN** the step label is `01 / SIGN IN` (10 / 700 / 2 px `#6d776d`), `h1` is **Welcome back.**
  (38 / 550 / −1.6px), the intro is *"A little focus. A fresh start. Sign in to your workspace."*
- **AND** there are two fields, `Email address` (`placeholder="you@example.com"`,
  `autocomplete="email"`) and `Password` (`autocomplete="current-password"`, reveal button `Show`)
- **AND** the fields sit 20 px apart, each **52 px** tall with a 1 px `#cad3c9` border, radius 7,
  padding `13px 14px`, at 15 px
- **AND** `Forgot password?` is right-aligned at 12 px with `margin:-5px 0 25px` and routes to the
  recovery view
- **AND** the CTA is a **410 × 51** full-width `#254e3d` button, radius 7, 13 / 600, label
  `Sign in` left and `↗` right (`margin-left:auto`), hover `#183d2c`
- **AND** below it, centred, `New here?` + a bold `Create an account` link → register view

#### Scenario: Validation on submit

- **GIVEN** both fields empty
- **WHEN** the form is submitted
- **THEN** `Enter email address.` and `Enter password.` appear in the two `12 px #9b342d` error
  spans, both inputs get `aria-invalid="true"` and the invalid ground `#fffafa`
- **AND** focus moves to the first failing input and **nothing is submitted**
- **AND** typing in a field clears **that field's** error immediately

#### Scenario: Malformed email

- **GIVEN** `not-an-email` in the email field and any password
- **WHEN** submitted
- **THEN** the email error reads `Enter a valid email address.` and the password error stays empty

### Requirement 5: Create account (screen 02)

#### Scenario: Three fields, one length rule

- **GIVEN** the register view
- **THEN** the step is `02 / CREATE ACCOUNT`, `h1` is **Make room for good work.**, intro
  *"Create your account and find your rhythm."*
- **AND** fields appear in order: `Full name` (`autocomplete="name"`), `Email address`,
  `Password` (`minlength="12"`, `autocomplete="new-password"`, reveal)
- **AND** the hint under the password reads **"Use at least 12 characters. Spaces and passphrases
  are welcome."** (12 px `#627069`, `margin:-9px 0 21px`), wired with `aria-details`
- **AND** a password of 11 characters fails with `Use at least 12 characters.`
- **AND** the CTA is `Create account ↗`; the footer switch is `Already have an account? Sign in`
- **AND** success routes to the verify view

### Requirement 6: Recover access (screen 03)

#### Scenario: One field, one promise

- **GIVEN** the recovery view
- **THEN** the step is `03 / RECOVER ACCESS`, `h1` is **Let's get you back in.**, intro
  *"Enter your email to request a password reset link."*
- **AND** there is exactly one email field and the CTA is `Send reset link ↗`
- **AND** the switch line is a single centred `← Back to sign in` link to the sign-in view
- **AND** success routes to the check-email view

### Requirement 7: Check your inbox (screen 04)

#### Scenario: Message card instead of a form

- **GIVEN** the check-email view
- **THEN** there is **no input and no submit button**
- **AND** the step is `04 / CHECK EMAIL`, `h1` is **Check your inbox.**, intro *"If an account
  matches that address, a reset link will be sent. Check your spam folder too."*
- **AND** a `.message-card` (radius 10, padding 27, ground `#fafbf7`, border 1 px `#d8ded6`)
  holds a **44 px** `#e0edcd` disc with `↗`, `h2` *"Your next step is in your inbox."*, and `p`
  *"Open the link in your email to choose a new password."*
- **AND** a centred `Resend link` text button (12 px, underlined, `#254e3d`) sits beside a
  countdown span
- **AND** a full-width **secondary** button `Try another email address` (white ground, `#254e3d`
  text, `#d8ded6` border, radius 7, 51 px) routes to recovery, and the switch line is
  `Back to sign in`
- **AND** the `demo-next` aside reads *"Preview this flow / No email is sent in this demo."* and
  links to the reset view

### Requirement 8: Reset password (screen 05)

#### Scenario: Two revealed fields and a match rule

- **GIVEN** the reset view
- **THEN** the step is `05 / RESET PASSWORD`, `h1` is **A fresh start.**, intro *"Choose a new
  password to get back to your workspace."*
- **AND** fields are `Password` and `Confirm password`, both `minlength="12"` and both with their
  own reveal button whose `aria-label` names its own field
- **AND** the hint appears once, under the first field
- **AND** mismatched values fail with `Your passwords do not match.` on the confirm field
- **AND** success routes to the **sign-in view with the notice visible**

#### Scenario: Expired link short-circuits

- **GIVEN** the scenario select on `expired` and a valid pair of passwords
- **WHEN** the form is submitted
- **THEN** no error text is written and the app navigates to the **expired-link view**
- **AND** the form has been reset

### Requirement 9: Verify account (screen 06)

#### Scenario: Six digits, tracked

- **GIVEN** the verify view
- **THEN** the step is `06 / VERIFY ACCOUNT`, `h1` is **One last step.**, intro *"Enter the
  six-digit verification code to continue."*
- **AND** the single field is `#code` with `inputmode="numeric"`, `pattern="[0-9]{6}"`,
  `maxlength="6"`, `autocomplete="one-time-code"`, `placeholder="000000"`
- **AND** it renders at **28 px** with **12 px** letter-spacing and `tabular-nums`, centred
- **AND** the hint reads *"Demo code: **123456**. No message is sent."*
- **AND** the CTA is `Verify account ↗`, followed by a centred `Resend code` text button with its
  own countdown, and the switch line `Use a different email` → register view

#### Scenario: Wrong code and correct code

- **GIVEN** `111111` entered
- **WHEN** submitted
- **THEN** the form-level error reads `That code didn't match. Check all six digits and try again.`
  and the view does **not** change
- **AND** given `123456`, submission routes to the welcome view
- **AND** a non-numeric or short entry fails validation with `Enter all six digits.` before any
  fake request runs

### Requirement 10: Link expired (screen 07)

#### Scenario: A dead end with one way out

- **GIVEN** the expired view
- **THEN** the step is `07 / LINK EXPIRED`, `h1` is **That link has expired.**, intro *"Request a
  fresh reset link to continue."*
- **AND** the message card carries the `↻` glyph in the 44 px disc, `h2` *"Let's try that again."*
  and `p` *"For your account's security, reset links can only be used for a limited time."*
- **AND** the CTA is an **anchor** styled `.primary` (`Request a new link ↗`) → recovery view
- **AND** the switch line is `Back to sign in` → sign-in view

### Requirement 11: Ready to go (screen 08)

#### Scenario: The honest confirmation

- **GIVEN** the welcome view
- **THEN** the step is `08 / READY TO GO`, `h1` is **You're all set.**, intro *"You've reached the
  end of the preview journey."*
- **AND** the message card carries `✓`, `h2` *"A connected flow, from the first step."*, `p`
  *"This is a demo confirmation screen. No real account or authenticated session has been created."*
- **AND** the CTA is `Try the flow again ↗` → sign-in view
- **AND** the switch line is `Explore the setup guide` → the how-it-works view

### Requirement 12: How this demo works (screen 09)

#### Scenario: The doc layout

- **GIVEN** the how-it-works view
- **THEN** it drops the two-column shell and renders a single **850 px** column,
  `margin:50px auto`, `padding:0 25px`, with its own brand block (mark + `Gatehouse` +
  `AUTH STARTER`, 10 px uppercase)
- **AND** the section order is: step eyebrow `THE WHOLE JOURNEY, IN ONE PLACE` → `h1` **Make it
  your own.** → lead paragraph → disclaimer `<aside>` (`#eff4e8`, radius 8, padding `18px 22px`)
  → `How the screens connect` → `Run it locally` → `What goes where` → `Connect your service`
- **AND** the screens section links all eight views, the behaviour table replaces the file table,
  and the code block shows the repo's dev command
- **AND** `<code>` and `<pre>` render on `#f1f4ec` with radius 3 / 8 and `overflow-wrap:anywhere`
- **AND** every link on this view resolves to a real view (no dead `Setup guide ↗` anywhere in
  the app)

### Requirement 13: Submit state machine and error copy

The shared form handler SHALL implement one busy/error/success contract for all five forms.

#### Scenario: Busy, then error

- **GIVEN** a filled form and the scenario select set to `rejected`
- **WHEN** submitted
- **THEN** the submit button is disabled, the form has `aria-busy="true"` and the status reads
  `Please wait…` for **650 ms**
- **AND** then the form-level `.form-error` (radius 7, ground `#fff5f2`, border `#e5bdb7`, text
  `#86362d`, 13 px, padding `12px 15px`, `margin-bottom:22px`) appears with the operation-specific
  sentence, the status clears, **focus moves to the box**, and the button is re-enabled with
  `aria-busy` removed

#### Scenario: Every generated message

- **GIVEN** the scenario select
- **THEN** `network` → `We couldn't connect. Please try again.`
- **AND** `rate` → `Too many attempts. Please wait before trying again.`
- **AND** `expired` on the reset form → navigate to the expired view (no message)
- **AND** any other rejection on sign-in → `We couldn't sign you in with those details. Check them
  and try again.`
- **AND** an unknown operation → `We couldn't complete that request. Please try again.`

#### Scenario: Success resets and navigates

- **GIVEN** a valid form and `Successful response`
- **WHEN** submitted
- **THEN** the form is cleared and the app switches to the routed view
- **AND** the collected field values are discarded (never held in state, never logged, never
  persisted)

### Requirement 14: Resend cooldown

#### Scenario: Thirty seconds, then again

- **GIVEN** the check-email or verify view
- **WHEN** the resend text button is activated
- **THEN** it disables itself and its status reads `Please wait…`
- **AND** after the fake latency it reads `Demo resend complete. No message was sent.` and a
  countdown shows `Try again in 30s` decreasing every 500 ms
- **AND** at zero the countdown empties and the button re-enables
- **AND** the interval is cleared when the view unmounts

### Requirement 15: Password reveal

#### Scenario: Toggle, label, and ARIA

- **GIVEN** a password field with its `Show` button
- **WHEN** the button is activated
- **THEN** the input's `type` becomes `text`, the button label becomes `Hide`, `aria-pressed`
  becomes `true`, and `aria-label` becomes `Hide password`
- **AND** activating it again restores `password` / `Show` / `false` / `Show password`
- **AND** the button is `type="button"` (never submits) and carries `aria-controls`
- **AND** on the reset view each field's button names its own label

### Requirement 16: Responsive behaviour

#### Scenario: Tablet (≤950)

- **GIVEN** a 900 px viewport
- **THEN** the story panel still shows its headline (44 px) but **not** the `WORKSPACE` subtitle
- **AND** the note card narrows to 195 px at `left:0`, the chip moves to `left:32%`, the orbit and
  spark pin to the left/right edges, and the `h1` drops to 34 px

#### Scenario: Phone (≤700)

- **GIVEN** a 390 px viewport
- **THEN** the shell stacks; the story panel becomes an **80 px** cream header holding only the
  brand (24 px, 28 px mark) **with** the `WORKSPACE` subtitle visible again
- **AND** the headline, illustration and story footer are **not rendered**
- **AND** the content column pads 24 px, `main` sits `46px auto 30px` at 342 px wide, the `h1` is
  36 px, inputs are 342 × 52 and the CTA 342 × 51
- **AND** `scrollWidth === clientWidth` (no horizontal scrollbar) at 320 / 390 / 640 / 768 / 950 /
  1280 / 1440

#### Scenario: Small phone (≤360)

- **GIVEN** a 320 px viewport
- **THEN** the `h1` is 32 px, the code field's tracking drops to 9 px, the badge to 8 px / 1 px,
  the message card pads 20 px, and nothing overflows

### Requirement 17: Accessibility contract

#### Scenario: Keyboard path

- **GIVEN** keyboard-only navigation on any screen
- **THEN** the first Tab stop is the `Skip to form` link, which slides into view and moves focus to
  `<main id="main">`
- **AND** every focusable element shows a **3 px `#608438`** outline at **4 px** offset, never
  `outline: none`
- **AND** the reveal button is reachable and operable with Space/Enter

#### Scenario: Announced state

- **GIVEN** a validation failure
- **THEN** the error box is `role="alert"`, receives focus, and each field's message is referenced
  by `aria-describedby` with `aria-invalid="true"` on the input
- **AND** status text (`Please wait…`, resend result, notice) is announced through a
  `role="status" aria-live="polite"` region rather than a silent DOM change

### Requirement 18: Tokens and type fidelity

#### Scenario: The seven custom properties

- **GIVEN** `src/index.css`
- **THEN** `@theme` defines `--color-ink:#20362c`, `--color-muted:#627069`,
  `--color-green:#254e3d`, `--color-cream:#f6f5ef`, `--color-line:#d8ded6`,
  `--color-error:#9b342d`, `--color-focus:#608438`
- **AND** the full literal palette from §Design tokens is present as named tokens (note card,
  orbit rings, spark, error/notice boxes, message card, disc) — no invented hues
- **AND** radii are `--radius-field:7px`, `--radius-chip:6px`, `--radius-card:10px`,
  `--radius-pill:30px`
- **AND** `--font-sans` starts with `"Inter"` and `--font-serif` is `Georgia, serif`
- **AND** no colour outside this spec's table appears in the app

#### Scenario: The odd weights

- **GIVEN** the loaded Inter face
- **THEN** the wordmark renders at 750, field labels and the reveal at 650, and the `h1` at 550
  (variable axis, or the documented static substitution)

### Requirement 19: Provenance and identity

#### Scenario: No ColorLib, one credit

- **GIVEN** any file under `apps/gatehouse`
- **THEN** there is **no** string `colorlib`, `Colorlib`, `relay`, `Relay Auth` or `relay.example`
  — comments included; provenance lives only in this spec, `TEMPLATES.md` and the PR
- **AND** `package.json` names the app `@free-react-templates/gatehouse`, `public/CNAME` is
  `gatehouse.free.componentdock.com`, and `homepage` is `https://gatehouse.free.componentdock.com`
- **AND** the footer links `https://www.componentdock.com/`

## Verification checklist

- [ ] `apps/gatehouse` exists, package `@free-react-templates/gatehouse`, `public/CNAME` =
      `gatehouse.free.componentdock.com`, `homepage` the same, `vite.config.ts` calls
      `injectUiSource()`
- [ ] nine views route correctly and every one of the 9 screen links in the guide + 79 in-app
      links resolves to a view (`0` dead targets, `0` bare `#` except the skip link)
- [ ] shell: 46 / 54 grid, `min-height:100svh`, story `min-height:880`, padding `44px 11%`,
      content `42px clamp(28px,5vw,86px) 20px`, `main` 410 px with `78px auto 38px`
- [ ] story panel: brand 29/750/−1.4 + 10/500/1.5 subtitle, eyebrow 10/700/2, `h2`
      `clamp(40px,4.3vw,65px)`/1.09/500/−3 with Georgia `<em>` `#4d6840`, orbit 240 px + 27/28 px
      halo rings, note 242 × 220 `rotate(-7deg)` with tick disc, chip `rotate(6deg)`, spark 66 px
      `✳`, footer `A calmer way forward.` — all CSS, **no illustration asset**
- [ ] tokens: the seven custom properties + every literal hex from §Design tokens, radii 7 / 6 /
      10 / 30, focus `#608438` 3 px at 4 px offset
- [ ] type: Inter 400..750 from Google Fonts with `display=swap`, `Georgia` only for the italic
      phrase, `h1` 38/550/−1.6, labels 12/650, inputs 15, buttons 13/600
- [ ] screen 01: `01 / SIGN IN`, **Welcome back.**, two fields (email placeholder + password
      reveal), `Forgot password?`, 410 × 51 green CTA with `↗` pinned right, `New here?` switch
- [ ] screen 02: three fields, `minlength=12`, the passphrase hint, `Create account ↗`
- [ ] screen 03: one email field, `Send reset link ↗`, `← Back to sign in`
- [ ] screen 04: **no form**, `↗` message card, resend + countdown, secondary
      `Try another email address`, `demo-next` aside to the reset view
- [ ] screen 05: two revealed fields, confirm-match error, success → sign-in **with the notice**
- [ ] screen 06: `[0-9]{6}` field at 28 px / 12 px tracking / tabular, demo-code hint,
      wrong-code message, resend row
- [ ] screen 07: `↻` card, anchor-styled CTA, no form
- [ ] screen 08: `✓` card with the demo disclaimer, `Try the flow again ↗`
- [ ] screen 09: 850 px doc column, condensed sections, no story panel, no dead `Setup guide` link
- [ ] behaviour: 650 ms fake latency, busy state (`aria-busy`, disabled submit, `Please wait…`),
      the six friendly-error strings, success resets + discards values, `EXPIRED` on reset →
      expired view, 30 s resend cooldown cleared on unmount
- [ ] validation: the five generated messages (`Enter <label>.`, invalid email, 12-char minimum,
      six digits, mismatch), `aria-invalid`, first-failing-input focus, per-field clearing on type
- [ ] chrome: `INTERACTIVE DEMO` pill, `Setup guide ↗`, `Preview settings` details with the
      five-option scenario select, `Made by Component Dock` → componentdock.com
- [ ] responsive: story-copy/illustration hidden at ≤700 (80 px header, subtitle back on),
      subtitle hidden at ≤950, `h1` 34/36/32, zero horizontal overflow at 320 → 1440
- [ ] a11y: skip link → `#main`, one `<h1>`/`<main>`, labels + `aria-describedby` on every field,
      `role="alert"` error box focused on failure, `role="status"` live regions, reveal button
      `aria-pressed` + relabelled, `aria-hidden` illustration
- [ ] reduced motion: the 0.15 s colour transition exists **only** inside
      `@media (prefers-reduced-motion: no-preference)`; no animation anywhere else
- [ ] no `colorlib` / `relay` string in `apps/gatehouse` (comments included); brand mark is a new
      inline SVG (32 × 32, `rx 10`, `#214c3b` plate, `#d8f2b3` glyph)
- [ ] 100 % coverage on `apps/gatehouse`; `scripts/verify-app.sh gatehouse` green
