# Epistle — task outline

Recreation of the ColorLib **Hero V05** design (`hero-05`) at `apps/epistle`. Spec is the authority:
`openspec/specs/template-epistle/spec.md`. Design notes: `docs/templates/epistle/design-notes.md`.
Live reference: `https://preview.colorlib.com/theme/bootstrap/hero-05/` (the slug-only `theme/hero-05/` and
`theme/bb/hero-05/` both 404 — this family lives under `bootstrap/`). Tick boxes only as work ships.

> **One newsletter landing screen** — a cream page with a peach corner glow, a hairline bar (coral italic "The" +
> a bold wordmark, four muted links with a coral underline on the current one), and a two-column hero: white issue
> pill, a **balance-wrapped 73.6 px headline** whose last clause is coral on a highlighter band, a three-line lede,
> a **pill email field with a 5 × 5 px hard ink shadow** containing the coral submit, a hint line, four overlapping
> initials, facing a **three-card rotated stack** (yellow +7°, blue −5°, white issue card −1° with an 8 × 8 px ink
> shadow) and a mint **"Free forever"** sticker at 12°.
>
> **No images.** Four inline SVGs and three gradients do all the drawing. One script, two jobs: the disclosure menu
> and the email validation + success state. This is the **family's first form-driven variant**.
>
> This is the **hero family's variant 5 of 12**, and it breaks two family assumptions: the document is **929 px** at
> 1440 (not 900 — the copy column is 694.8 inside an 854.8 hero, so `align-items:center` has no slack), and the
> page **has interactive state** (a real `<form>` with three outcomes).
>
> Eight numbers decide fidelity: bar **1440 × 73.8**; wordmark **173.45 × 34.09 at (160, 19.34)**; nav
> **297 × 36.8 at (983, 18)**; hero **1200 × 854.8 at (120, 73.8)**; `h1` **594.31 × 300.25 at (160, 210.27)** =
> **73.6 px / 75.072 line box / 4 lines**; field **540 × 66 at (160, 680.91)** with the submit **162 × 50 at
> (530, 688.91)**; stack **439.3 × 460 at (840.7, 271.19)**; sticker rect **113.86²**.
>
> The three ways a port loses it: (1) treating the field as a bordered `<input>` with a button beside it — the
> **field is the pill** and the button sits *inside* its border, which is why focus lives on `:focus-within`;
> (2) reading the rotated cards' rects as their sizes (**399 × 420** boxes measure **447.51 × 465.53**); (3)
> copying the reference's `flex-shrink` artwork — the 110 px issue illustration renders **8 px** at 320 and the
> port must keep it fixed while the card grows instead.

## 1. Scaffold

- [ ] copy the simplest existing app to `apps/epistle`; package `@free-react-templates/epistle`
- [ ] `public/CNAME` = `epistle.free.componentdock.com`; `"homepage"` = `https://epistle.free.componentdock.com`
- [ ] keep `"react": "latest"` / `"react-dom": "latest"`; keep `injectUiSource()` in `vite.config.ts`
- [ ] root `npm install` so `package-lock.json` registers the workspace
      (`grep -c free-react-templates/epistle package-lock.json` ≥ 1)
- [ ] one `<link>`: `https://fonts.googleapis.com/css2?family=Outfit:wght@400..800&display=swap` (**200**) —
      the reference ships the same variable pair under five weight names (400/500/600/700/800)

## 2. Tokens and ground

- [ ] `@theme`: the 21 tokens from the spec's **Design tokens** table (`--color-ground:#fff6ea`,
      `--color-glow:#ffe2cf`, `--color-ink:#231a13`, `--color-muted:#5f5145`, `--color-coral:#d13f26`,
      `--color-coral-soft:#ffd9c9`, `--color-line:#ecdcc8`, `--color-error:#b42318`, … `--color-avatar-4:#10b981`);
      `--font-sans: "Outfit", system-ui, …`; `--gutter: clamp(16px, 4vw, 40px)`
- [ ] shell: `min-height:100vh; display:flex; flex-direction:column; overflow:hidden`, background `#fff6ea`,
      `color: ink`, `font-size:16px`, `line-height:1.55`, Outfit
- [ ] `::before` glow: `62vw` square, radius 50 %, `right:-12vw; top:-20vw`,
      `radial-gradient(circle, #ffe2cf 0%, rgba(255,226,207,0) 68%)`, `pointer-events:none` → **892.8²** at 1440
- [ ] `--text-display: clamp(2.4rem, 1.3rem + 4.2vw, 4.6rem)` and `--text-lede: clamp(1.05rem, 1rem + .3vw, 1.22rem)`;
      Tailwind's scale cannot express either
- [ ] `main`: `flex:1; display:flex; align-items:center` — centres the hero **only when it fits** (it does not at 1440)

## 3. Header

- [ ] bar: `position:relative; z-index:5; border-bottom: 1px solid var(--color-line)`; inner `max-width:1200;
      margin:0 auto; display:flex; align-items:center; gap:24px; padding: 18px var(--gutter)` → **1200 × 72.8**
- [ ] wordmark: `<a>` with `<span class="italic font-medium text-coral">The</span>` + the name at
      `22px / 800 / -.03em`; no mark, no tile → **173.45 × 34.09** at (160, 19.34)
- [ ] nav: `margin-left:auto`, `ul` flex `gap:28`; links `padding: 6px 0`, `16px / 500`, muted → **297 × 36.8**
      at (983, 18); "Latest" **49** wide
- [ ] current link: ink + a **3 px** coral bar, `border-radius: 3px 3px 0 0`, `bottom:-19px` (lands on the bar's rule)
- [ ] focus-visible on every `a`/`button`: `outline: 3px solid var(--color-coral); outline-offset: 3px` —
      **except the coral submit**, which takes an **ink** ring (see §7)
- [ ] menu button: `display:none` at ≥861; ≤860 it is **44 × 44**, circular, `1.5px` ink border (computes 2 px),
      `margin-left:auto`, `aria-expanded` / `aria-controls` / label

## 4. The disclosure menu (behaviour 1 of 2)

- [ ] `isEnhanced` is always true in React: render the button under the `max-width:860` rule, the panel absolute
      at `top:100%`, full width, cream, `2px` ink bottom border, `padding: 8px gutter 16px`
- [ ] panel links: `padding: 14px 0`, `20px / 600`, hairline `#ecdcc8` rules, **no** current-page bar
- [ ] toggle: click flips open, sets `aria-expanded`, `aria-label` "Open menu" / "Close menu", swaps the two icons
- [ ] close on: Escape (and return focus to the button), outside click, link click, and
      `matchMedia('(min-width: 861px)')`
- [ ] bar height: **73.8** at ≥861, **81** at ≤860 (44 + 36 + 1) — this moves everything below it
- [ ] clean up every listener on unmount

## 5. Copy column

- [ ] `<IssuePill>`: `inline-flex; gap:10; padding: 6px 14px; border-radius:999px; background:#fff;
      box-shadow: 0 0 0 1px #ecdcc8; 14.5px/600` → **242 × 34.47** at (160, 153.8); dot **8 × 8** coral with
      `box-shadow: 0 0 0 4px #ffd9c9`, `aria-hidden` (a *shadow*, not a border — a border changes the width)
- [ ] `<Headline>`: one `<h1>` with the last clause in an `<em>` — `font-style:normal`, coral, and
      `background: linear-gradient(transparent 70%, #ffd9c9 70%)`; `text-wrap: balance`;
      `margin: 22px 0 18px` → **594.31 × 300.25**, **73.6 / 75.072 / 4 lines**, `<em>` **431.73** wide as **one**
      rect at every width (**228.05** at 320)
- [ ] `<Lede>`: `max-width: 32em`, muted, `clamp(1.05rem, 1rem + .3vw, 1.22rem)` → **594.31 × 90.7**, 3 lines
- [ ] `<ReaderProof>`: `flex-wrap; gap:12; margin-top:30; 15px` muted, count in `<strong>` ink; four **36 × 36**
      circles with `margin-left:-9` (first 0) and a `2.5px` cream ring → group **117** wide, `aria-hidden`;
      row heights **36 / 71.25 / 94.5** at ≥498 / 361–497 / ≤360

## 6. Signup block (behaviour 2 of 2)

- [ ] wrapper `max-width:540; margin-top:32` → **540 × 131.38** at (160, 651.22)
- [ ] `<label for>` at `14px/600`, `margin-bottom:8`; `aria-describedby` = hint **and** error ids
- [ ] `<EmailField>`: the **field** is the pill — `flex; align-items:center; gap:8; padding: 6px 6px 6px 18px;
      border: 2px solid ink; border-radius:999px; background:#fff; box-shadow: 5px 5px 0 ink` → **540 × 66**;
      `:focus-within` flips the shadow to coral and the input keeps `outline: none`
- [ ] icon **20 × 20** at (180, 703.91) muted; input `flex:1; min-width:0; height:48; border:0;
      background:transparent; font-size:17px`, placeholder `#857566` → **314 × 48** at (208, 689.91)
- [ ] submit **162 × 50** at (530, 688.91): `padding: 0 24px; border-radius:999px; background:coral;
      color:#fff; 16px/700`; hover `#b23117`; active `scale(.97)`
- [ ] hint `14px` muted, `margin-top:14`, **540 × 21.69** at (160, 760.91); error `#b42318`, `14.5px/600`,
      `role="alert"`, rendered only when non-empty (the reference gets this from `:empty{display:none}`)
- [ ] validation: empty → "Please enter your email address."; no TLD (`alchie@studio`) → "That email looks
      incomplete. Try something like name@studio.com."; set `aria-invalid`, tint border + shadow `#b42318`,
      focus the input, and grow the block **131.38 → 161.84** (document 929 → 959)
- [ ] **fix:** derive the message and `aria-invalid` from the value on every change — the reference leaves the
      *old* message on screen while an invalid string is edited (measured)
- [ ] `<SuccessBox role="status">`: `is-sent` hides the form and shows the box — `flex; gap:14;
      padding: 16px 20px; border: 2px solid ink; border-radius:20px; background:#e7f6ec;
      box-shadow: 5px 5px 0 ink`; 40 px check disc `#137a3a`; text "You are on the list. We sent a confirmation
      link to {address}. Issue #214 arrives Sunday morning." → **85.59** tall, document **900** at 1440
- [ ] **fix:** announce once — keep `role="status"`, do **not** move focus into the live region
- [ ] **fix:** the submit's focus-visible ring is **ink**, not coral (1 : 1 against the button in the reference)

## 7. Issue stack

- [ ] `<IssueStack aria-hidden="true">`: `position:relative; min-height:460` → **439.3 × 460** at (840.7, 271.19)
- [ ] three cards, each a **399 × 420** box (`height:420`, `inset: 20px 10px auto 30px`,
      `border: 2px solid ink`, `border-radius:24px`): B `#ffd35c` + `rotate(7deg) translate(18px,8px)`,
      C `#9ad7ff` + `rotate(-5deg) translate(-14px,10px)`, A white + `rotate(-1deg)` + `8px 8px 0 ink`
- [ ] hover the stack → A settles to `rotate(0) translateY(-6px)`, `.4s cubic-bezier(.2,.8,.2,1)`
- [ ] `<IssueCard>` contents: head (40 px coral "SD" tile radius **12**, name `14/700`, muted "Issue #213 · 6 min
      read", `padding-bottom:14`, `1px dashed #ecdcc8`), title `25px/700/1.15/-.02em` (2 lines), art grid
      `2fr 1fr` / `1fr 1fr`, `gap:8`, height **110**, and three list rows (`14.5px`, coral `<b>` numerals)
- [ ] **fix:** `flex: none` on the art + `height:auto; min-height:420` on the card, so the art stays **110**
      (the reference collapses it to **60.92** at 961 and **8** at 320)
- [ ] **fix:** at ≤520 keep the yellow card's right edge inside the viewport — the reference loses **8.2 px**
      at 390 and **8.5 px** at 320 to the shell's `overflow:hidden`
- [ ] `<Sticker>`: **96 × 96** at `right:-6; top:-8`, `border:2px solid ink`, radius 50 %, `#c8f0d2`,
      `15px/800/1.05`, `text-align:center`, `rotate(12deg)`; ≤520 → **80 × 80**, `13px`, `right:0; top:-6`

## 8. Breakpoints

- [ ] **960**: hero to one column (`grid-template-columns:1fr`), stack `width:min(100%,440px);
      min-height:440; margin:0 auto`, copy **883.22** wide, document **900 → 1203**
- [ ] **860**: nav → disclosure, bar **73.8 → 81**
- [ ] **520**: field wraps (`border-radius:22; padding:6`), submit `flex: 1 1 100%`, cards `height:370`,
      inset `16px 14px auto`, padding `20`, title `21px`, art `90`, sticker `80`; field **66 → 122**,
      document **521 → 520 is +16**
- [ ] no 640/768 rules: between 520 and 959 the ladder is pure fluid type

## 9. Footer and routes (deltas)

- [ ] `<footer>` after the hero: cream ground, `#ecdcc8` hairline, muted `14px`, linking
      `https://www.componentdock.com/` as "Component Dock" — the reference has **no footer**
- [ ] give the five `#` anchors real destinations; exactly **one** carries `aria-current="page"`
- [ ] contrast fixes: `#b23117` for the 22 px wordmark "The" and any small coral text (4.41 → 6.28); darken the
      violet avatar or its initials (4.33 → 4.5+)
- [ ] no `colorlib` / `preview.colorlib.com` / `hero-05` strings anywhere in `apps/epistle` — provenance lives in
      the spec, `TEMPLATES.md` and the PR

## 10. Tests (100 % coverage, TDD — write these first)

- [ ] header: 4 links, one `aria-current`, wordmark text "The Epistle"
- [ ] menu: closed by default; click opens (`aria-expanded`, label, icons); Escape closes **and** returns focus;
      outside click closes; link click closes
- [ ] form: empty submit → exact message, `aria-invalid="true"`, focus on the input, no navigation
- [ ] form: `alchie@studio` → the *incomplete* message; typing a still-invalid value keeps the **current**
      message (not the previous one); typing a valid value clears message + `aria-invalid`
- [ ] form: valid submit → form hidden, success box visible, address echoed, `role="status"` present,
      **no** programmatic focus into the live region
- [ ] stack: three cards, B/C empty, whole stack `aria-hidden`; four avatars from the data array
- [ ] footer link points at `https://www.componentdock.com/`

## 11. Verification

- [ ] `npm run verify:app epistle` (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-epistle --type spec`
- [ ] at 1440 × 900, motion disabled: the eight numbers at the top of this file, plus field **540 × 66**,
      input **314 × 48**, submit **162 × 50**, sticker rect **113.86²**
- [ ] document heights: **929** at 1440, **900** at 1192 and 961, **901** at 1193, **1203** at 960,
      **1182** at 860, **1175** at 861, **1165** at 520, **1149** at 521, **1299** at 320
- [ ] `scrollX === 0` and `scrollWidth === clientWidth` at every width in the spec's checklist
- [ ] `h1` lines **4 / 2 / 3 / 4** at ≥961 / 664–960 / 383–663 / ≤382; type **38.4** at ≤419
- [ ] rotated cards measured with `offsetWidth/offsetHeight` = **399 × 420** each
- [ ] the art renders **110** px at 1440, 961 and 320 (the reference renders 116.04 / 60.92 / 8)
- [ ] no back-card clip at 390/320; no horizontal scrolling anywhere
- [ ] `git grep -il 'colorlib\|hero-05' apps/epistle` → no hits
