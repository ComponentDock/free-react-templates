# Banderole — task outline

Recreation of the ColorLib **Alert V04** design (`alert-04`) at `apps/banderole`. Spec is the
authority: `openspec/specs/template-banderole/spec.md`. Design notes:
`docs/templates/banderole/design-notes.md`. Live reference:
`https://preview.colorlib.com/theme/bootstrap/alert-04/` (the slug-only `theme/alert-04/` and
`theme/bb/alert-04/` are both 404 — this family lives under `bootstrap/`). Check boxes only as work
ships.

> This is **a landing page whose top band is a dismissible announcement**, not a component demo in a
> frame: bar → header → hero, **900 px tall at 1440**, no scroll, no footer band, no form, one image
> count of zero. The reference is **2,790 B of HTML, one 10,161 B stylesheet and a real 1,970 B
> script** (`js/snippet.js` exists in this variant — unlike `alert-03`), so there *is* behaviour to
> port: dismiss, persist, restore, focus management, reduced-motion branch.
>
> The risk is not a missing band — it is the five things a port flattens: the gradient is **100deg**
> (top-left → bottom-right), not `to-r`; the bar's height is **57.75 = 12 + 33.75 + 12** because the
> **glass CTA** is taller than the text; the collapse is a **grid row track** (`1fr → 0fr` + opacity)
> with a `transitionend`-or-500 ms end, not `display: none`; the **lime `#bef264` is only the tag and
> the banner focus ring**; and the close button **starts at `top: 50%` and jumps to `top: 10px`** at
> ≤640 while the padding steps `12/64 → 12/56/14/16`.
>
> Five numbers decide fidelity: bar **1440 × 57.75**; CTA **222 × 33.75** at (934.1, 12); close
> **36 × 36** at right **14**; header **1168 × 72** at x **136**; hero `h1` **68 px / 138.72** over two
> lines inside an **868 px** box at x **286**.
>
> The reference's own defects are **not** to be reproduced: **5 dead `#` fragments**
> (`#release-notes`, `#features`, `#pricing`, `#journal`, `#start` — the document has only `#top`), a
> restore control that is **visible and useless while the bar is up**, a README advertising an
> `images/` folder that does not exist, a phantom `.cl-alert04-page` class with no rule, a dead
> `.cl-icon` selector, and a screenshot that is a **macOS browser mock-up** whose frame must never be
> adopted.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest static app> apps/banderole` (no router, no forms — only the bar has state);
      rename the package to `@free-react-templates/banderole`
- [ ] `public/CNAME` = `banderole.free.componentdock.com`; `"homepage"` =
      `https://banderole.free.componentdock.com`; `react`/`react-dom` stay `"latest"`
- [ ] keep `injectUiSource()` in `vite.config.ts` (absolute `@source` for `packages/ui`)
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace
      (`grep -c "free-react-templates/banderole" package-lock.json` → 1)
- [ ] `index.html`: title + **one** `Space Grotesk` `<link>` (`family=Space+Grotesk:wght@400..700`,
      verified 200 — the shipped woff2 are one variable cut)

## 1 — Tokens

- [ ] `@theme`: `--color-banner-from: #14532d`, `--color-banner-to: #0f766e`,
      `--color-banner-ink: #f0fdf4`, `--color-banner-lime: #bef264`, `--color-banner-tag-ink: #14350f`,
      `--color-ground: #f6f4ee`, `--color-ink: #14281c`, `--color-body: #445248`,
      `--color-muted: #3b4a40`, `--color-kicker: #0f766e`, `--color-demo: #56645a`,
      `--color-reset: #0f5f58`, `--color-accent-dark: #0f3f22`, `--color-mark-ink: #bbf7d0`
- [ ] the bar's gradient is a **class value**, not a token: `bg-[linear-gradient(100deg,var(--color-banner-from),var(--color-banner-to))]`
      (or a `bg-banner` utility); **never** `bg-gradient-to-r`
- [ ] the CTA's glass is `bg-white/14` + `shadow-[inset_0_0_0_1px_rgba(255,255,255,.28)]` — if the
      contrast check at the teal end fails (**4.17**), raise it to `bg-white/22`
- [ ] **do not** use the lime for the primary button; its fill is `#14532d` (hover `#0f3f22`)

## 2 — Tests first (red)

- [ ] `AnnouncementBar.test.tsx`: renders tag "New", bold hook + sentence, CTA with accessible name
      "Read the release notes", close button named **"Dismiss announcement"**
- [ ] dismiss → `onDismiss` called, `localStorage` key written, focus lands on the `h1`
      (`document.activeElement === h1`, `tabIndex === -1`)
- [ ] restore → key deleted, bar visible, focus on the CTA, control hidden while the bar is up
- [ ] persisted state: a factory that seeds `localStorage` renders the bar `hidden` on first paint
- [ ] reduced motion (mock `matchMedia` → matches) → `hidden` immediately, no `is-closing` class
- [ ] `SiteHeader.test.tsx`: 3 nav links resolve to real ids (no dead `#`)
- [ ] `Hero.test.tsx`: single `h1`, one primary CTA, restore line only when dismissed
- [ ] token test: the gradient string contains `100deg`; the tag is the only `#bef264` fill
- [ ] coverage stays **100 %** lines / functions / branches / statements

## 3 — Build

- [ ] `src/components/AnnouncementBar.tsx` — `<aside aria-label="Announcement">`, grid-row collapse,
      `data-key` prop, close + CTA, `closing` state with the 500 ms fallback cleared on unmount
- [ ] `src/components/SiteHeader.tsx` — 28 px rounded-square mark (lucide glyph inside, `stroke 2`),
      20/700 wordmark, 3 links, wrap at ≤400
- [ ] `src/components/Hero.tsx` — kicker, `h1` (`ref` + `tabIndex={-1}`), paragraph, primary button,
      conditional restore line
- [ ] `src/App.tsx` — owns the visibility state and the store namespace (`banderole:announcement`),
      passes `onDismiss` / `onRestore`; no `setState` inside an effect (oxlint react-compiler rules)
- [ ] footer line linking `https://www.componentdock.com/` as "Component Dock"
- [ ] no `apps/banderole/**` file may contain the source slug or the source site's name — the host
      brand becomes **Quietquill**, the storage key `banderole:announcement`

## 4 — Fidelity pass (measure, do not eyeball)

- [ ] 1440: bar **57.75**, msg **630.2 × 21.75** at (283.9, 18), tag **46.2 × 21.4**, CTA
      **222 × 33.75** at (934.1, 12), close **36 × 36** at right 14
- [ ] header **1168 × 72** at (136, 57.75); logo **134 × 28** at (160, 79.8); nav **231 × 21** at
      (1049, 83.2)
- [ ] hero **868 × 608.4** at (286, 129.8); `h1` **138.72** (2 lines at 68 px, ls −2.38);
      paragraph **560 × 83.7**; button **183 × 47**
- [ ] wrap ladder: one row at **1001**, two at **1000** (57.75 / 87.50); copy 2 lines at **700**
      (109.25), 3 at **420** (133.00), 4 at **320** (154.75)
- [ ] header **64** at ≤640, **97** at ≤400; hero padding-top **110 → 48**; `h1` **68 → 36**
- [ ] dismiss animation: 0 px, `is-closing` added then removed, header reaches `y 0`, focus `h1`
- [ ] no horizontal overflow at all 26 probed widths

## 5 — Ship

- [ ] `npm run verify:app banderole`
- [ ] `openspec validate template-banderole --type spec`
- [ ] `TEMPLATES.md`: add the `Alert 04` row as the **fourth** entry of `## Bootstrap Alerts (12)`,
      between `## Bootstrap Accordions (20)` and `## Bootstrap Buttons (20)`, grammar
      `[colorlib] · [banderole] · ![preview]` — re-read the neighbours immediately before pushing
- [ ] `npm run readme:status`
- [ ] PR body: source template, preview URL, tokens used, deltas (renamed brand, placeholder-free page,
      the 5 fixed fragments, the gated restore control)
- [ ] deploy + `curl -I https://banderole.free.componentdock.com` → 200, `ssl_verify_result=0`
