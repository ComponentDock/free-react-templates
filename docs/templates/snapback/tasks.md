# Snapback — task outline

Recreation of the ColorLib **Alert V05** design (`alert-05`) at `apps/snapback`. Spec is the authority:
`openspec/specs/template-snapback/spec.md`. Design notes: `docs/templates/snapback/design-notes.md`.
Live reference: `https://preview.colorlib.com/theme/bootstrap/alert-05/` (the slug-only
`theme/alert-05/` and `theme/bb/alert-05/` are both 404 — this family lives under `bootstrap/`).
Check boxes only as work ships.

> This is **a single file-list panel with two stateful alert bars underneath**, not a page: no header,
> no nav, no footer, no hero, **0 links, 0 images, 0 forms**, 6 ids, 7 buttons, 900 px tall at 1440 with
> no scroll. The reference is **7,080 B of HTML, one 9,646 B stylesheet and a real 3,064 B script**
> (`js/snippet.js`), so the work is two state machines plus arithmetic.
>
> The risk is not a missing band — it is the six things a port flattens: the panel is **`content-box`**
> (`max-width: 640` = **642 outer**, and exactly `vw − 32` below 674); the three dark grounds are
> **distinct** (`#1b2430` undo, `#3a1d12` offline, `#0f3324` online) with their own action and icon
> colours; the bar is **56.3 = 10 + 36.3 + 10** because the **action button** is taller than the copy,
> and it **shrinks to 41.02** when Undo hides; rows and bars need an explicit **`[hidden]{display:none}`**
> rule because both are `display: flex`; the four **chip tints** are the panel's only colour; and both
> bars **animate on load** in the reference, which the port must not reproduce.
>
> Five numbers decide fidelity: panel **642 × 514.7** at (399, 88); header **640 × 90.73**; row
> **640 × 65.59**; stack **640 × 158.59**; bar **608 × 56.3** with text **470.88 × 21.02** and action
> **67.13 × 36.3**.
>
> The reference's own defects are **not** to be reproduced — and one of them is **data loss**: its
> `finalize()` removes the previous pending row from the DOM, so a second delete silently destroys a
> third file, and the undo bar ships announcing a delete that never happened. Also: `is-restored` has
> no CSS rule, the busy state is guarded only in JS, the retry timer is never cleared, the README
> advertises an `images/` folder that does not exist, and the screenshot is a **macOS browser mock-up**
> whose frame must never be adopted.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest static app> apps/snapback` (no router, no forms — only the two bars have
      state); rename the package to `@free-react-templates/snapback`
- [ ] `public/CNAME` = `snapback.free.componentdock.com`; `"homepage"` =
      `https://snapback.free.componentdock.com`; `react`/`react-dom` stay `"latest"`
- [ ] keep `injectUiSource()` in `vite.config.ts` (absolute `@source` for `packages/ui`)
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace
      (`grep -c "free-react-templates/snapback" package-lock.json` → 1)
- [ ] `index.html`: title + **one** `DM Sans` `<link>` (`family=DM+Sans:wght@400;600;700`,
      verified 200 — the shipped woff2 are one variable cut, wght 400–700)

## 1 — Tokens

- [ ] `@theme`: `--color-ground: #eef1f4`, `--color-surface: #ffffff`, `--color-line: #e3e8ee`,
      `--color-ink: #16202b`, `--color-muted: #5a6573`, `--color-well: #f7f9fb`,
      `--color-bar: #1b2430`, `--color-bar-offline: #3a1d12`, `--color-bar-online: #0f3324`,
      `--color-bar-ink: #eef2f6`, `--color-action: #8fd3ff`, `--color-action-offline: #ffc9ab`,
      `--color-action-online: #a6f0cb`
- [ ] chip pairs as tokens too: `--color-chip-doc: #e3eeff` / `--color-chip-doc-ink: #1d4fa8`,
      `--color-chip-img: #fde7f1` / `--color-chip-img-ink: #a3195b`,
      `--color-chip-sheet: #dff5e8` / `--color-chip-sheet-ink: #17693d`,
      `--color-chip-video: #efe7ff` / `--color-chip-video-ink: #5b32b8`
- [ ] panel: `max-w-[640px]` **with `box-sizing: content-box`** (or `max-w-[642px]` border-box with a
      comment) + `border border-line rounded-[18px] shadow-[0_24px_48px_-28px_rgba(22,32,43,.35)]`
- [ ] wrapper: `min-h-screen flex justify-center items-start pt-[clamp(24px,7vw,88px)] px-4`
- [ ] **do not** use the well `#f7f9fb` as an accent; it is the stack ground and the row hover only
- [ ] **do not** collapse the three bar grounds into one; the online repaint is part of the design

## 2 — Tests first (red)

- [ ] `FilePanel.test.tsx`: renders the breadcrumb, one `h1`, the count equal to the **visible** rows,
      and one row per file with a per-file accessible name (`Delete <filename>`)
- [ ] delete → the row disappears, the count decrements, the undo bar appears with the sentence naming
      that file, and **focus is on Undo**
- [ ] undo → the row is back **as the same element** (`document.querySelectorAll` length is constant —
      the reference's `remove()` defect must fail this test), the count returns, the Undo button hides
      and focus returns to that row's trash button
- [ ] delete twice → the first delete is **committed** (its row stays gone) and **no other row leaves
      the DOM**; the bar describes only the second file
- [ ] restored state is visually distinct and **does not persist** (auto-clear or a dismiss control)
- [ ] `ConnectionBar.test.tsx`: offline copy is a `role="alert"`, Retry → spinner + "Retrying…" +
      real `disabled`/`aria-busy`; after the 1.2 s timer → online colours, "Back online." copy and a
      **Dismiss** label; Dismiss hides the bar and focuses the `h1`
- [ ] unmounting mid-retry leaves no pending state update (fake timers + `cleanup`)
- [ ] reduced motion (mock `matchMedia`) → the bar entrance is not animated; the spinner is slowed,
      not stopped
- [ ] token test: the four chip pairs, the three bar grounds and the three action colours are present
      with those exact hexes; the panel computes to a 642 px outer box at 1440
- [ ] coverage stays **100 %** lines / functions / branches / statements

## 3 — Build

- [ ] `src/data/files.ts` — five files (`doc`/`img`/`sheet`/`video` kinds, name, size, edited-at) and
      a **new host brand** (the reference's shared drive becomes **Quietquill**); no source slug or
      source site name anywhere
- [ ] `src/components/FilePanel.tsx` — owns the file array + `pending` id, the count, and the two bars;
      the file list is never mutated by a delete until the delete is committed
- [ ] `src/components/FileRow.tsx` — chip, 15/600 filename over 13 px meta, 38 × 38 trash button named
      `Delete <filename>`; hidden rows use the `hidden` **utility**, not the attribute on a flex row
- [ ] `src/components/UndoBar.tsx` — `role="status"` copy, Undo action, entrance animation only when
      it appears in response to a delete; restored state distinct + self-clearing
- [ ] `src/components/ConnectionBar.tsx` — three-state machine (`offline → busy → online → dismissed`),
      `lucide-react` `WifiOff` / `CheckCircle2` / a spinner, `aria-busy`, timer cleared on unmount
- [ ] `src/App.tsx` — wrapper (`min-h-screen`, the `clamp` padding) + `FilePanel`; **no** `setState`
      inside an effect for a derived value (oxlint react-compiler rules)
- [ ] footer line linking `https://www.componentdock.com/` as "Component Dock" (a slim line under the
      panel — the reference has none, and the house rule requires it)

## 4 — Fidelity pass (measure, do not eyeball)

- [ ] 1440: panel **642 × 514.7** at (399, 88); header **640 × 90.73**; path **193.7 × 18.84**;
      `h1` **193.7 × 31.89** (22/31.9, ls −0.22); meta **40 × 20.3**
- [ ] rows **640 × 65.59** at y 180.73 / 246.33 / 311.92 / 377.52 (four rows — the reference's hidden
      fifth is a **defect**, not a feature); chip **40 × 34.5**; name **494 × 40.59**; trash **38 × 38**
- [ ] stack **640 × 158.59** at y 443.11; bars **608 × 56.3** at y 461.11 and 527.41; text
      **470.88 × 21.02**; action **67.13 × 36.3**
- [ ] undo restored state: bar **41.02** (`10 + 21.02 + 10`) and it **goes away**
- [ ] width ladder: panel **642 ≥674**, `vw − 32` below; header **84.73 ≤480** and **116.63 ≤315**;
      rows **61.59 ≤480**; undo copy 1 line **≥435** / 2 **≤434** / 3 **≤320**; connection copy
      1 line **≥534** / 2 **≤533** / 3 **≤376** / 4 **≤304**; row 5 wraps at **≤339**, three lines **≤314**
- [ ] no horizontal overflow at 300 / 304 / 314 / 315 / 316 / 320 / 360 / 375 / 390 / 414 / 434 / 435 /
      480 / 481 / 533 / 534 / 560 / 640 / 673 / 674 / 700 / 768 / 900 / 1024 / 1440
- [ ] contrast spot-check: muted on the well **5.61** (the weakest text pair), Retry **10.40**,
      Undo **9.64**, Dismiss **10.50** — no "improvement" of the palette

## 5 — Ship

- [ ] `npm run verify:app snapback`
- [ ] `openspec validate template-snapback --type spec`
- [ ] `TEMPLATES.md`: add the `Alert 05` row as the **fifth** entry of `## Bootstrap Alerts (12)`,
      between `## Bootstrap Accordions (20)` and `## Bootstrap Buttons (20)`, grammar
      `[colorlib] · [snapback] · ![preview]` — re-read the neighbours immediately before pushing
- [ ] `npm run readme:status`
- [ ] PR body: source template, preview URL, tokens used, deltas (renamed brand, no decoy hidden row,
      the committed-delete model, the self-clearing restored state, the cleared retry timer)
- [ ] deploy + `curl -I https://snapback.free.componentdock.com` → 200, `ssl_verify_result=0`
