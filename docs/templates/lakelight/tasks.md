# Lakelight — implementation tasks

`apps/lakelight` recreates the ColorLib **Hero V12** holiday-rental hero (warm sand ground, an eyebrow behind a
28 px orange rule, a three-line display headline with an italic teal last word, three proof points, a portrait lake
photograph with a 120 px bottom-left corner and a floating white stay card, and a five-field white booking panel
that rides up over the picture) under a new name. Read `openspec/specs/template-lakelight/spec.md` first — it
carries every measured number, the token table and the fourteen deltas.
`docs/templates/lakelight/design-notes.md` carries the DOM skeleton, the CSS token block, the screenshot read, the
section-by-section fidelity notes, the adaptation table and the sibling comparison.

Reference: https://preview.colorlib.com/theme/bootstrap/hero-12/ (the slug-only path **404s** — the `bootstrap/`
prefix is the only live one). Source: https://colorlib.com/wp/template/hero-12/.

## 0. Scaffold

- [ ] copy the simplest existing app to `apps/lakelight`; rename the package to
      `@free-react-templates/lakelight`
- [ ] `public/CNAME` = `lakelight.free.componentdock.com`; `"homepage"` =
      `https://lakelight.free.componentdock.com`
- [ ] register the workspace with `npm install` at the root (never hand-edit `package-lock.json`)
- [ ] load **Urbanist** once in `index.html`, with the italic axis:
      `https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,400..800;1,400..800&display=swap` — one
      variable face per style, the **only** webfont, which matches the reference's two binaries
- [ ] no ColorLib string, comment or asset anywhere in the app: the product is **Lakelight**, and none of
      "alpwise", "Wake up somewhere quieter.", the Chamonix / Julian Alps sub-paragraph, "Boathouse on the lake",
      "Braies, South Tyrol", €186, 4,200, 4.9 or "Free cancellation on most stays" may appear
- [ ] register `injectUiSource()` in `vite.config.ts` (copy an existing app's config verbatim)

## 1. Tokens

- [ ] `@theme`: `--color-sand #f7efe3`, `--color-ink #102a27`, `--color-muted #4b5f5b`, `--color-teal #0e5c55`,
      `--color-orange #e0703a`, `--color-line #e4d8c6`, `--color-field #f8f3ea`, `--color-field-hover #faf6ef`,
      `--color-field-focus #f1f8f6`, `--color-on-orange #1c0d04`, `--color-submit-hover #f08a55`,
      `--color-placeholder` (darkened from `#6a7874` so it clears 4.5 on white, `#f8f3ea` **and** `#faf6ef`),
      `--color-ring` (darkened from `#e0703a` so it clears 3 : 1 on sand **and** on white),
      `--gutter clamp(16px, 4vw, 48px)`
- [ ] radii: photo **`32px 32px 32px 120px`**, panel **24**, card + submit **18**, field **16**, menu button **12**,
      nav link **10**, `Log in` **999**
- [ ] type scale 89.6 / 85.12 / 23 / 19.52 / 30.26 / 18 / 17 / 16.5 / 16 / 15.5 / 15 / 14 / 13 / 20.14 with the line
      heights from the spec (`h1` `.95`, sub 30.26, body 16 px / 1.55 = 24.8)
- [ ] the two shadows verbatim: card `0 16px 36px -16px rgb(16 42 39 / .45)`, panel
      `0 30px 60px -30px rgb(16 42 39 / .45), 0 0 0 1px rgb(16 42 39 / .06)`, mobile panel
      `0 24px 48px -18px rgb(16 42 39 / .4)`

## 2. Shell + header bar (RED first)

- [ ] root `flex min-h-screen flex-col bg-sand text-ink text-[16px] leading-[1.55]`
- [ ] bar `relative z-[5]`; inner `mx-auto flex max-w-[1320px] items-center gap-[36px] px-[var(--gutter)] py-5`
- [ ] logo `inline-flex items-center gap-[10px] text-[23px] font-extrabold tracking-[-.03em]` + a 30 × 30 SVG tile
      (`rx=9`, `#0e5c55`) with a two-peak path in `#f7efe3` — `lucide-react`'s `Mountain` cannot reproduce the tile,
      so keep a small local SVG or a `rounded-[9px] bg-teal` span with a mountain glyph inside
- [ ] nav `flex flex-1 items-center justify-between gap-5`; links row `flex gap-1`; each link
      `rounded-[10px] px-[14px] py-2 text-[16px] font-semibold` with `hover:bg-ink/6` and
      `aria-current: text-teal` — **paint resting links `text-muted`** (the reference's ink is a specificity accident)
- [ ] `Log in` `rounded-full border border-ink px-5 py-[10px] text-[16px] font-bold` with
      `hover:bg-ink hover:text-sand` (the border is **1 px**, not 1.5)
- [ ] menu button `hidden max-[860px]:grid size-11 place-items-center rounded-xl border border-ink`
- [ ] menu panel ≤860: `absolute left-[var(--gutter)] right-[var(--gutter)] top-[calc(100%-4px)] flex-col gap-[10px]
      rounded-[20px] bg-white p-3` — `hidden` unless open; links `p-3 text-[18px]`, `Log in` centred
- [ ] menu behaviour: `aria-expanded` + `aria-controls` + a label that flips to "Close menu"; close on link click,
      on `Escape` (**focus returns to the button**), on an outside click, and on any viewport growth past 860
- [ ] tests: bar child widths at 1440 (logo **118.17**, links **72 / 119 / 82 / 138**, `Log in` **86**), the
      non-current link's colour, `Escape` closing and refocusing, outside-click closing

## 3. Copy column (RED first)

- [ ] hero `mx-auto grid w-full max-w-[1320px] grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-x-[clamp(32px,5vw,72px)]
      px-[var(--gutter)] pt-[clamp(16px,3vw,32px)] pb-[clamp(40px,5vw,64px)]`
      with areas `"copy media" / "search search"`
- [ ] main `flex flex-1 items-center` — **this** is what puts the hero at y **146.38**
- [ ] copy block `self-center pb-[72px]`
- [ ] eyebrow `inline-flex items-center gap-[10px] text-[15px] font-bold text-teal` with a `before` bar
      `h-[2px] w-[28px] bg-orange`
- [ ] `h1` `my-4 mb-[18px] text-[clamp(2.7rem,1.3rem+5vw,5.6rem)] font-extrabold leading-[.95]
      tracking-[-.045em]` + `<em>` `font-bold italic text-teal`
- [ ] sub `max-w-[30em] text-[clamp(1.05rem,1rem+.3vw,1.22rem)] leading-[1.55] text-muted`
- [ ] proof `mt-[26px] flex flex-wrap gap-x-[26px] gap-y-[10px] text-[15px] text-muted` with
      `strong text-[17px] font-bold text-ink`
- [ ] tests: three headline lines at 1440 with widths **323.78 / 434.72 / 269.75**; the proof row **2 rows** with
      the third item wrapping; the em's computed `color`/`font-style`

## 4. Photograph + stay card (RED first)

- [ ] figure `relative m-0` (grid area `media`), stretched by the row — do **not** set a height on it
- [ ] `img` `block w-full object-cover` with `height: clamp(380px, 58vh, 600px)` at ≥901, `360` at ≤900, `300` at
      ≤520, and `border-radius: 32px 32px 32px 120px` (→ `28 28 28 80` → `24 24 24 64`); `width`/`height` attrs
      **900 × 960**; `alt` describes the photograph
- [ ] source: `https://picsum.photos/seed/lakelight-1/900/960` (never the source asset)
- [ ] card `absolute right-[28px] top-[28px] grid min-w-[230px] gap-[2px] rounded-[18px] bg-white/95 px-4 py-3.5
      text-[14px] shadow-[0_16px_36px_-16px_rgb(16_42_39_/_.45)]`
- [ ] card rows: title `flex justify-between text-[15.5px] font-bold` with the rating `font-semibold
      aria-label="Rated 4.96 out of 5"`; place `text-muted`; price with `strong text-[18px] font-bold`
- [ ] ≤520: card becomes a bar `left-[14px] right-[14px] top-[14px] min-w-0 px-3.5 py-3`
- [ ] tests: img **603.44 × 522** with that radius at 1440; card **257.91 × 109.59** at (1046.09, 206.38); at 520
      the card is `img width − 28`; the figure is **46.34** taller than the image
- [ ] decide and document the 1440 × 600 quirk: reproduce the **124 px** sand gap, or stretch the image to the row

## 5. Search panel (RED first)

- [ ] form `relative z-[2] grid grid-cols-[1.5fr_1fr_1fr_1fr_auto] items-stretch rounded-[24px] bg-white p-[10px]
      shadow-[…]` with `margin: -64px 0 0 clamp(0px,6vw,96px)`
- [ ] field `relative flex min-w-0 flex-col justify-center rounded-[16px] px-[18px] py-[10px] transition-colors`
      with `hover:bg-[#faf6ef]` and `focus-within:bg-[#f1f8f6] focus-within:shadow-[inset_0_0_0_2px_var(--color-teal)]`
- [ ] separator: `field + field::before` → `absolute left-0 top-[20%] bottom-[20%] w-px bg-line`, hidden while
      either neighbour is hovered/focused (`peer`-free CSS or a small `:has()` rule)
- [ ] label `text-[13px] font-bold uppercase tracking-[.04em] text-ink`; control `w-full min-w-0 border-0
      bg-transparent p-0 py-[2px] text-[16.5px] font-medium outline-none`
- [ ] `Where` is `type="text"` with a **5-option** `<datalist>` of invented places; the two dates are
      `type="date"`; `Guests` is a `<select>` with `1 / 2 (default) / 3 / 4 / 5–6 / 7–8` and the chevron drawn as a
      `background-image` data URI (or an absolutely positioned `ChevronDown`)
- [ ] submit `ml-2 flex min-h-16 items-center justify-center gap-[10px] rounded-[18px] bg-orange px-[30px]
      text-[17px] font-extrabold text-on-orange hover:bg-[#f08a55] active:scale-[.98]` with `Search` (20 px)
- [ ] status `col-span-full px-[18px] text-[16px] font-semibold text-teal` with `padding: 10px 18px 6px` when
      non-empty, carrying `role="status"`
- [ ] tests: panel **1137.61 × 93.7** at (194.39, 682.72); fields **320.86 / 213.92 / 213.91 / 213.91** at h
      **73.7**; submit **147.02 × 73.7**; the empty status is 0 tall and the filled one **40.8**

## 6. Booking logic (RED first)

- [ ] `iso(d)` → local `YYYY-MM-DD`; `addDays(v, n)` → parse at `T12:00:00`, `setDate(+n)`
- [ ] defaults on mount: check-in `today + 21`, check-out `check-in + 3`, `in.min = today`, `out.min = in + 1`
- [ ] on a check-in change: `out.min = in + 1`, and roll the check-out forward if it now precedes it
- [ ] on submit: `preventDefault()`; if the form is invalid, **replace** the status with a specific message and
      return; otherwise print
      `Searching stays in <place> for <guests>, <d MMM> to <d MMM> (<n> night|nights)…`
      with `Math.round((out − in) / 86400000)`, `toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })`
      and **U+2026**
- [ ] keep the status wired to `role="status"`; never leave a previous sentence on screen (a reference defect)
- [ ] the `<select>` font-settle hack: re-measure once after `document.fonts.ready` (or verify the width is stable)
- [ ] tests: defaults for a frozen clock; the roll-forward; `1 night` vs `3 nights`; the exact sentence; the invalid
      paths (empty place, `out < min`) replacing the message

## 7. Responsive ladder

- [ ] **≤1080**: panel `grid-cols-2 gap-[6px] ml-0`, fields `bg-[#f8f3ea]`, separators `hidden`, submit
      `col-span-full mt-[2px]`
- [ ] **≤900**: hero `grid-cols-1` with areas `copy / media / search`, copy `pb-[28px]`, image `360` +
      `28 28 28 80`, panel `-mt-12 mx-3`
- [ ] **≤860**: bar swaps the links for the menu button and settles at **84**
- [ ] **≤520**: image `300` + `24 24 24 64`; card full-inset; panel `grid-cols-2 p-2 -mt-10 mx-0 rounded-[22px]`;
      `Where` and `Guests` span both columns; fields `px-3`; controls `text-[16px]`; submit `min-h-14`; proof
      `gap-[6px_18px] text-[14px]`
- [ ] tests at 1080 / 900 / 860 / 520 / 320 against the spec's rects, and the line-count ladder
      (h1 **3 / 1 / 2 / 3**, sub **4 / 3 / 2**, proof **3 / 2 / 1** rows)

## 8. Accessibility + the two repairs

- [ ] one `h1`; `nav aria-label="Main"`; real `<button>` for the menu; a `<label for>` per control; `aria-current`
      on exactly one link; `role="status"` on the message; `aria-label` on the star rating's wrapper
- [ ] **darken the focus ring** so it clears **3 : 1** on sand *and* on white; **darken the placeholder** so it
      clears **4.5 : 1** on white, `#f8f3ea` and `#faf6ef`; assert both in a contrast test
- [ ] `prefers-reduced-motion` → all transitions `0s`; assert there is **no `@keyframes`** in the app
- [ ] tab order: wordmark → four links → `Log in` → four fields → submit; the wrapper's teal inset ring is the
      visible focus, never the UA outline

## 9. Content

- [ ] invent a brand and a place-set: a range, five destinations (for the datalist), three proof figures, one stay
      card (`name · place · sleeps n · €N / night`) and a display headline of **three short words + an italic
      accent phrase ending in a period**
- [ ] keep the *kinds* from the spec — do not copy any source string
- [ ] the footer: one slim strip inside the shell linking `https://www.componentdock.com/` labelled
      **"Component Dock"**; no ColorLib mention, no separate background band

## 10. Verify + ship

- [ ] `npm run verify:app lakelight` (typecheck + lint + 100 % coverage + build)
- [ ] `PATH=/root/free-react-templates/node_modules/.bin:$PATH openspec validate template-lakelight --type spec`
- [ ] the spec's full verification checklist, item by item
- [ ] Playwright at 1440 / 1080 / 900 / 860 / 520 / 320: `scrollWidth === clientWidth`, `scrollX = 0`
- [ ] add the `TEMPLATES.md` row in `## Bootstrap Heroes (12)` **after** whichever hero rows exist at that moment:
      `- [ ] **Hero 12** — [colorlib](https://colorlib.com/wp/template/hero-12/) ·
      ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/hero-12.jpg) ·
      [lakelight](https://lakelight.free.componentdock.com)` — then flip it to `[x]` and add the README status line
- [ ] commit `feat: Lakelight — holiday-rental booking hero (ColorLib Hero V12)`, PR, `gh pr merge --squash
      --delete-branch`
- [ ] deploy to `https://lakelight.free.componentdock.com` and verify HTTPS 200
