# Baylist — task outline

Recreation of the ColorLib **Card V14** design (`card-14`) at `apps/baylist`. Spec is the authority:
`openspec/specs/template-baylist/spec.md`. Design notes: `docs/templates/baylist/design-notes.md`.
Live reference: `https://preview.colorlib.com/theme/bootstrap/card-14/` (the slug-only
`theme/card-14/` 404s — this family lives under `bootstrap/`). Check boxes only as work ships.

> This is a **single-screen property band, not a site**: a gold eyebrow + one heavy headline over
> three listing cards on warm `#f7f5f1`, each card a 3:2 photograph with a status badge at the
> top-left and a save heart at the top-right, a photo-count pill bottom-right, then price → address →
> area → a hairline beds/baths/sqft row. The reference is **6,311 B of HTML, one 10,207 B stylesheet
> and one 924 B script**, with **3 anchors, 3 buttons, 3 images, 0 forms, 1 keyframe**.
>
> The risk is not a missing band — it is flattening the four things that make it read as a *listing*:
> **the 3:2 photograph that owns 59 % of the card**, **the heart that becomes a solid red shape**,
> **the three different status treatments across three cards**, and **the spec row that wraps on
> *card* width (312 / 311), not on a breakpoint**.
>
> Four numbers decide fidelity: card **377.33 × 423.11** at 1,440; **3 columns at 950, 2 at 949** and
> **2 at 636, 1 at 635**; the `h1` **one line down to 376, two from 375**; spec cells **71 / 89 / 112**
> wrapping to **40.6** tall when the card is **≤311**.
>
> **There is exactly one behaviour:** `aria-pressed` on three hearts, a `#e11d48` fill, and a 0.4 s
> pop that replays on both directions. No counter, no live region, no form, no async.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/baylist`; rename the package to
      `@free-react-templates/baylist`
- [ ] `public/CNAME` = `baylist.free.componentdock.com`; `"homepage"` =
      `https://baylist.free.componentdock.com`; `react`/`react-dom` stay `"latest"`
- [ ] keep `injectUiSource()` in `vite.config.ts` (absolute `@source` for `packages/ui`)
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace
      (`grep -c "free-react-templates/baylist" package-lock.json` → 1)
- [ ] `index.html`: title, description, and one **Urbanist** Google Fonts `<link>`
      (`family=Urbanist:wght@400;600;700;800&display=swap` — verified 200)

## 1 — Tokens

- [ ] `@theme`: `--color-ground: #f7f5f1`, `--color-ink: #0f1c2e`, `--color-muted: #4d5869`,
      `--color-gold: #b7791f`, `--color-gold-soft: #fbbf24`, `--color-gold-ink: #3b2600`,
      `--color-heart: #e11d48`, `--color-rule: #ece8e1`, `--color-media-ground: #e7e2d9`,
      `--radius-card: 20px`, `--radius-pill: 8px`
- [ ] `font-family: Urbanist` on the body; base `15px / 1.45`
- [ ] no `cl-` class names anywhere — Tailwind utilities only

## 2 — Shell and head

- [ ] `main`: `bg-ground text-ink`, content **1,180** centred, `px-4` + vertical
      `clamp(32px, 6vw, 72px)` (Tailwind: `py-8 md:py-[clamp(32px,6vw,72px)]` or a `--pad` token),
      **no** `min-h-screen`
- [ ] eyebrow `<p>`: 14 / 700 / `.1em` / uppercase / `#8a5a00`
- [ ] `h1`: `clamp(28px,3.8vw,42px)` / 800 / `-0.02em` / `leading-[1.1]`; `margin-top: 6px`
- [ ] head `margin-bottom: 28px`; exactly **1 `h1`** on the page

## 3 — Grid

- [ ] `grid grid-cols-[repeat(auto-fit,minmax(min(100%,290px),1fr))] gap-6`
- [ ] verify **3 columns at 950** (tracks exactly 290.00), **2 at 949**; **2 at 636**, **1 at 635**
- [ ] no column breakpoint, no `md:`/`lg:` column override, no JS measurement
- [ ] rows stretch: no `items-start`, no fixed card height

## 4 — Card shell

- [ ] `<article>`: white, `rounded-[20px]`, `overflow-hidden` (this is what clips the photo),
      shadow `0 1px 2px rgba(15,28,46,.06), 0 20px 40px -30px rgba(15,28,46,.45)`
- [ ] hover (pointer devices): `-translate-y-1` + shadow `… 0 30px 50px -30px rgba(15,28,46,.55)`,
      `transition` transform + box-shadow `.3s`
- [ ] no border anywhere; media block itself has **no** radius

## 5 — Media, badge, photo pill

- [ ] media wrapper `relative aspect-[3/2] bg-[#e7e2d9]`
- [ ] `<img src="https://picsum.photos/seed/baylist-1/800/540" width={800} height={540}
      className="block h-full w-full object-cover">` — first two `fetchPriority="high"`, third
      `loading="lazy"`; keep descriptive alts
- [ ] status badge `absolute top-3.5 left-3.5 rounded-lg px-3 py-1.5 text-[13px] font-bold`:
      ink/white · `#fbbf24`/`#3b2600` · white/ink
- [ ] photo pill `absolute right-3.5 bottom-3.5 inline-flex items-center gap-[5px] rounded-lg
      bg-[rgba(15,28,46,.72)] px-[9px] py-1 text-[12.5px] font-semibold text-white`, `Images` glyph
      **15 px** `strokeWidth={2}`, `aria-hidden`

## 6 — Save heart

- [ ] `<button type="button" aria-pressed={…}>` `absolute top-2.5 right-2.5 z-[2] grid h-11 w-11
      place-items-center rounded-full bg-white/95 shadow-[0_4px_14px_rgba(0,0,0,.18)]`
- [ ] `Heart` glyph **22 px**, `strokeWidth={2}`, `strokeLinejoin="round"`;
      `fill="none"` → `fill="currentColor"` when pressed
- [ ] `aria-label` per card ("Save 14 Seaview Terrace to favourites") **and** a flip on press
      ("Remove … from favourites") — spec defect 3
- [ ] pressed: `text-heart` + solid fill; hover: `scale-[1.08]` + heart colour
- [ ] focus ring **3 px `#fbbf24`** at **2 px** offset, outside the circle

## 7 — Body copy

- [ ] body `px-5 pt-[18px] pb-5`; price `<p>` 26 / 800 / `-0.02em` / 1.1
- [ ] `<h2>` 17 / 700, `my-1.5 mb-0.5`, containing the card's **only** `<a>` (ink, no underline)
- [ ] anchor `::after` overlay: `absolute inset-0 rounded-[20px]` at `z-1` → `after:absolute
      after:inset-0 after:rounded-[20px] after:z-[1]`; focus ring on that overlay: 3 px `#b7791f` at
      `-3px` offset
- [ ] area line 14.5 / `#4d5869`, middle dot between the clauses
- [ ] **no** `href="#"`; a real route or a non-anchor

## 8 — Spec row

- [ ] `<ul class="mt-4 grid grid-cols-[repeat(3,auto)] justify-between gap-0 border-t border-rule
      pt-3.5 text-sm text-muted">`
- [ ] `<li class="inline-flex items-center gap-1.5">`; cells 2–3 `border-l border-rule pl-3.5`
- [ ] `<strong class="font-bold text-ink">` around the numbers only; comma thousands
- [ ] glyphs **19 × 19** stroke `#b7791f` at `strokeWidth={1.7}` — bed and bath stroked, **area glyph
      filled** (`fill="currentColor" stroke="none"`)
- [ ] verify the wrap: cells **20.3** tall at card **312**, **40.6** at **311** (row 35.3 → 55.6)

## 9 — Behaviour

- [ ] saved set in React state, seeded from `data.ts` (`initiallySaved` on card 2)
- [ ] click toggles `aria-pressed`, flips the label, fills the heart
- [ ] pop: `@keyframes` `scale(1) → 1.35 → 1` over `.4s`; replay on **both** directions via a state
      counter used as the animation `key`; clear on `onAnimationEnd`
- [ ] `prefers-reduced-motion: reduce` → no lift, no hover scale, no pop; state still changes
- [ ] **no** counter, no `role="status"`, no `aria-live` — this design has none

## 10 — Footer

- [ ] one Component Dock attribution line under the grid in the same content column, linking
      `https://www.componentdock.com/` as "Component Dock"

## 11 — Tests (TDD, 100 % coverage)

- [ ] RED first: page shell, head copy, three cards' copy (price / address / area / three specs),
      three badge variants, three photo counts, six focusables in *button → link* order
- [ ] hearts: initial states (false / true / false), click flips `aria-pressed`, label flips, fill
      class flips, pop key changes on both directions, presses are independent
- [ ] no `a[href="#"]`; every `<img>` has a non-empty alt; every glyph is `aria-hidden`
- [ ] `prefers-reduced-motion` path renders the same state (CSS-only assertion via class, not media)

## 12 — Docs, a11y and ship

- [ ] `npm run verify:app baylist` (typecheck + lint + knip + fallow + coverage + build)
- [ ] `openspec validate template-baylist --type spec`
- [ ] add the `TEMPLATES.md` row from the spec, directly after the last `Card NN` row, marked `[x]`
      with the live URL; `npm run readme:status`
- [ ] footer Component Dock link present; no ColorLib/`card-14`/`cl-card14` strings in `apps/baylist`
