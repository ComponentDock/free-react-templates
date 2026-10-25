# Lexeme — task outline

Recreation of the ColorLib **Card V09** design (`card-09`) at `apps/lexeme`. Spec is the authority:
`openspec/specs/template-lexeme/spec.md`. Design notes: `docs/templates/lexeme/design-notes.md`.
Check boxes only as work ships.

> This is a **band, not a site**: one head (violet eyebrow + 46 px title + one instruction line) over
> four flip cards on a `#f1eefb` ground. The reference is **5,865 B of HTML + one 9,451 B stylesheet +
> 1,358 B of vanilla JS, 4 buttons, 0 anchors, 0 forms, 0 images, 0 keyframes** — and the entire design
> lives *behind* the cards.
> The risk is not a missing band — it is flattening the four details that make it work: **the flip is a
> 3D transform on a `preserve-3d` wrapper inside two `backface-visibility: hidden` faces**, **the
> hover flip and the button flip are two paths that must not fight** (`.is-manual` latch), **the back
> face has to fit a fixed 320 px**, and **reduced motion is a crossfade, not a fast spin**.
>
> Four numbers decide fidelity: the card is **285 × 320** at 1440 and **320 tall at every width**, the
> word is `clamp(32px, 3vw, 40px)` so `la sobremesa` is **2 lines at 1440 and 1 line at 1280 on the same
> 285 px card**, the grid is **4 / 3 / 2 / 1 at 1052 / 792 / 532** (arithmetic, not breakpoints), and the
> back face's content is **307.12 px of 316** — 12.88 px of margin, which is why a longer definition
> clips (defect 3).

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/lexeme`; rename the package to
      `@free-react-templates/lexeme`
- [ ] `public/CNAME` = `lexeme.free.componentdock.com`; `homepage` =
      `https://lexeme.free.componentdock.com`
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace; verify with
      `grep -c "free-react-templates/lexeme" package-lock.json`
- [ ] `index.html`: one Google Fonts `<link>` for **Bricolage Grotesque 400;600;800**
      (`css2?family=Bricolage+Grotesque:wght@400;600;800&display=swap`) + `preconnect` to
      `fonts.gstatic.com` — **not** the reference's six self-hosted `woff2` names (two binaries, a
      variable cut repeated three times)
- [ ] `@theme` in `src/index.css`: `--color-ground: #f1eefb`, `--color-ink: #1e1b2e`,
      `--color-accent: #5b21b6`, `--color-muted: #4a4560`, `--color-well: #f4f2fb`,
      `--radius-card: 24px`, `--font-sans: "Bricolage Grotesque", system-ui, …`
- [ ] `vite.config.ts` registers `injectUiSource()` (copy from an existing app — never a relative
      `@source`)
- [ ] no new dependency: no animation library, no flip/carousel package, no `tailwindcss-3d`; the only
      icon is one rotate glyph (`lucide-react` `RotateCw`, 18 px) or the reference's inline 24-box path
- [ ] **do not port the `:where(html) … { all: revert; }` guard** (60 lines + the
      `::-webkit-datetime-edit` block + a `[hidden]` re-hide) — Tailwind's preflight is the equivalent
- [ ] ⚠️ **box-sizing:** the reference's container is `max-width: 1200px` *content-box*, i.e. **1232 px**
      outer. With Tailwind's border-box write `max-w-[1232px] px-4` (content 1200) — **not**
      `max-w-[1200px] px-4`, which gives a 1168 px grid and **277 px** cards instead of 285

## 1 — Data

- [ ] `src/data/deck.ts`: `type DeckCard = { id, pos, word, say, meaning, example, translation, face, ink }`
      plus `export const DECK_SIZE = 40`
- [ ] the four records exactly as the spec quotes them:
      `noun · feminine` / `la sobremesa` / `/so·bre·ME·sa/` / coral `#ff6b4a` on `#2b0b03`
      · `verb` / `madrugar` / `/ma·dru·GAR/` / indigo `#5b5bf0` on `#fff`
      · `verb` / `estrenar` / `/es·tre·NAR/` / amber `#ffc53d` on `#2e2000`
      · `noun · masculine` / `el antojo` / `/an·TO·jo/` / teal `#14b8a6` on `#022c28`
- [ ] the counter is `Card ${index + 1} of ${DECK_SIZE}` — derived, never a literal per card
- [ ] `·` in the eyebrow and in the pronunciations is **U+00B7**; the examples use **U+201C/U+201D**

## 2 — Head + shell (`App.tsx`, `components/Header.tsx`)

- [ ] `<main className="mx-auto max-w-[1232px] px-4 py-[clamp(36px,6vw,72px)] text-ink">`
- [ ] `<header className="mb-8 max-w-[620px]">` with the eyebrow (`text-sm font-semibold text-accent`),
      the `h1` (`text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.05] tracking-[-0.035em] mt-1.5 mb-2`),
      the sub (`text-base leading-normal text-muted`)
- [ ] one `h1` only; the four card words are `<p>`, **not** headings — the reference has **0 `h2`**
- [ ] the head is **620 × 103.3** and the grid starts at y **207.3** at 1440

## 3 — The flip card (`components/FlipCard.tsx`) — the whole template

- [ ] structure: `<li className="relative min-h-80 [perspective:1200px] text-[15px] leading-[1.45]">`
      → `<button type="button" aria-pressed={…} className="absolute inset-0 z-[3] w-full rounded-3xl bg-transparent">`
      → `<span className="sr-only">Flip card: {word}</span>` → `.inner` (`relative h-full min-h-[inherit]
      [transform-style:preserve-3d] transition-transform duration-700 ease-[cubic-bezier(.3,.8,.3,1)]`)
      → two `absolute inset-0 flex flex-col rounded-3xl p-6 [backface-visibility:hidden] overflow-hidden` faces
- [ ] front: `bg-[var(--face)] text-[var(--ink)] shadow-[0_18px_36px_-20px_rgba(30,27,46,.5)]`
- [ ] back: `border-2 border-[var(--face)] bg-white text-ink shadow-[0_18px_36px_-20px_rgba(30,27,46,.35)]
      [transform:rotateY(180deg)]`
- [ ] the decorative disc: `::after`-equivalent as an absolutely positioned `<span aria-hidden>` —
      `absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-white/[.18]`, and the hint gets `relative z-[1]`
      (the disc **must** stay clipped by the face's `overflow-hidden`; front `scrollHeight − clientHeight
      === 40` is the check, not a bug report)
- [ ] front runs: pill (`self-start rounded-full border-[1.5px] border-current px-2.5 py-1 text-[13px]
      font-semibold`), word (`mt-auto mb-1 text-[clamp(32px,3vw,40px)] font-extrabold leading-none
      tracking-[-0.03em]` with `lang="es"`), say (`mb-auto text-[15px] font-semibold opacity-85`),
      hint (`self-end inline-flex items-center gap-1.5 text-sm font-semibold`)
- [ ] back runs: label (`text-[12.5px] font-semibold uppercase tracking-[0.1em] text-accent`),
      meaning (`mt-2 mb-3.5 text-[19px] font-semibold leading-[1.3]`),
      example (`rounded-xl bg-well px-3 py-2.5 text-[15px] font-semibold` with `lang="es"`),
      translation (`mt-1.5 text-sm text-muted`), counter (`mt-auto pt-3 text-[13px] font-semibold text-muted`)
- [ ] ⚠️ **the back face fits only because of the copy** — 307.12 px of 316 at 1440. Add a guard:
      `overflow-hidden` **plus** `overscroll`-free internal scroll is *not* the answer; either let the
      card grow (`min-h-80` with the faces in flow) or clamp the meaning to 3 lines and test the longest
      definition at card width 240 (**fix defect 3**)
- [ ] state: `flipped` + `manual` as two booleans (or one `'auto' | 'flipped' | 'manual'` union), set from
      `onClick` / `onPointerEnter` / `onKeyDown` for Escape — never `setState` inside a `useEffect`
      (`react(set-state-in-effect)` is an error here); derive nothing from the DOM
- [ ] hover: keep it **CSS-only** for the decorative case
      (`[@media(hover:hover)]:hover:[transform:rotateY(180deg)]` gated by the manual flag), and mirror
      `aria-pressed` / `aria-hidden` from `onPointerEnter` (**fix defect 1**)
- [ ] Escape: `onKeyDown` on the button; clears the flip, keeps the hover latch
- [ ] reduced motion: `motion-reduce:transition-none` **and** a crossfade path —
      `motion-reduce:[transform:none]` on the inner wrapper, back face `opacity-0` →
      `opacity-100` with `transition-opacity duration-200 linear`, front the inverse. Add a plain CSS
      block in `index.css` if the variant stack gets unreadable; **do not** leave the rotation in place
      at `0s` (that is a visible 180° snap, not the reference's crossfade)
- [ ] 24 px radius on **all three** (front, back, button) so the focus outline's rect matches the tile
- [ ] focus ring: `focus-visible:outline-3 focus-visible:outline-ink focus-visible:outline-offset-4`
      (drawn outside the tile on the lavender ground, 14.67:1)

## 4 — Grid (`components/Deck.tsx`)

- [ ] `<ul className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5 list-none m-0 p-0">`
- [ ] four `<li>`s, one per record, `style={{ '--face': c.face, '--ink': c.ink }}`
- [ ] no column media query — verify 1052 / 792 / 532 by measurement, not by adding `md:` classes
- [ ] 0 anchors, 0 forms, 0 images on the page; 4 focusable elements

## 5 — Footer

- [ ] one line linking `https://www.componentdock.com/` as "Component Dock" (repo rule). It is the only
      addition to the reference, which has no footer
- [ ] no `colorlib`, `card-09` or `Card V09` string anywhere in `apps/lexeme`

## 6 — Tests (TDD: write these first, red)

- [ ] `FlipCard.test.tsx`: renders pill / word / say / hint; the button's accessible name is
      "Flip card: <word>"; `aria-pressed` starts `"false"`
- [ ] click toggles `aria-pressed`, the flipped transform class and `aria-hidden` on both faces; a second
      click restores
- [ ] Escape on a flipped card restores it and leaves the manual flag; Escape on an unflipped card does
      nothing
- [ ] `pointerEnter` on card 1 flips **only** card 1 (query the other three)
- [ ] `Deck.test.tsx`: 4 `<li>`, 4 buttons, the four words in order, `Card 1 of 40` … `Card 4 of 40`
- [ ] `Header.test.tsx`: eyebrow, `h1`, sub-line text; exactly one `h1` and no `h2`
- [ ] `App.test.tsx`: ground colour token class, the Component Dock link, `lang="en"` on the shell
- [ ] coverage: 100 % lines/functions/branches/statements — the reduced-motion branch needs a test that
      forces `matchMedia('(prefers-reduced-motion: reduce)')` (jsdom: stub `matchMedia`)

## 7 — Verification

- [ ] `npm run verify:app lexeme` (typecheck + lint + knip + fallow + 100 % coverage tests + build)
- [ ] `PATH=/root/free-react-templates/node_modules/.bin:$PATH openspec validate template-lexeme --type spec`
- [ ] Playwright spot-checks from the spec's checklist: 320 px card height at 8 widths; `la sobremesa`
      2 lines at 1440 / 1 line at 1280; 4/3/2/1 at 1052/792/532; `scrollX 0` at 320–1440;
      `prefers-reduced-motion` → `transform: none` + crossfade; `hasTouch` context → one tap flips
- [ ] `TEMPLATES.md`: add the `Card 09` row under `## Bootstrap Cards (20)` **after the last shipped
      card row**, then `npm run readme:status`

## 8 — Ship

- [ ] branch `feat/template-lexeme`, PR with the provenance block (source `card-09`, preview URL, the
      four face/ink pairs, the deltas you took), squash-merge, deploy, then flip the row to `[x]` with
      the live URL
