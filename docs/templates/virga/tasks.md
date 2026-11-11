# Virga — implementation tasks

`apps/virga` recreates the ColorLib **Hero V10** edge-hosting hero (a radially masked 56 px line grid under one
breathing glow, a centred two-line headline with a gradient block tail, a white CTA beside a terminal-style command
chip, and a four-cell stats band with a twelve-bar uptime strip) under a new name. Read
`openspec/specs/template-virga/spec.md` first — it carries every measured number, the token table and the eleven
traps. `docs/templates/virga/design-notes.md` carries the DOM skeleton, the CSS token block, the screenshot read,
the section-by-section fidelity notes and the sibling comparison.

Reference: https://preview.colorlib.com/theme/bootstrap/hero-10/ (the slug-only path 404s — the `bootstrap/`
prefix is the only live one). Source: https://colorlib.com/wp/template/hero-10/.

## 0. Scaffold

- [ ] copy the simplest existing app to `apps/virga`; rename the package to `@free-react-templates/virga`
- [ ] `public/CNAME` = `virga.free.componentdock.com`; `"homepage"` = `https://virga.free.componentdock.com`
- [ ] register the workspace in `package-lock.json` (`npm install` at the root; lockfile registration is mandatory)
- [ ] load **Geist** once in `index.html`:
      `https://fonts.googleapis.com/css2?family=Geist:wght@400..700&display=swap` — one variable face, and the
      **only** webfont; the command chip uses the system mono stack (`ui-monospace, Menlo, Consolas`)
- [ ] no ColorLib string, comment or asset anywhere in the app: the product is **Virga**, the command is
      `npx virga deploy`, and none of "Stratus", "318 cities", "99.995%", "2.4M", "118 countries", "27 ms" or the
      source sub-paragraph may appear
- [ ] register `injectUiSource()` in `vite.config.ts` (copy an existing app's config verbatim)

## 1. Tokens

- [ ] `@theme`: `--color-ground #07090f`, `--color-ink #f4f6fb`, `--color-muted #9aa3b8`,
      `--color-line rgb(255 255 255 / .1)`, `--color-sky #7dd3fc`, `--color-violet #a78bfa`,
      `--color-hint #86efac`, `--color-bar #4ade80`, `--color-dip #facc15`,
      `--color-panel-top rgb(255 255 255 / .043)`, `--color-panel-bot rgb(255 255 255 / .016)`,
      `--gutter clamp(16px,4vw,40px)`
- [ ] panel fill: `linear-gradient(180deg, var(--color-panel-top), var(--color-panel-bot))` — the stats band only
- [ ] the CTA's single shadow: `0 0 0 1px rgb(255 255 255 / .2), 0 10px 30px -10px rgb(125 211 252 / .6)`
- [ ] radii: pill **`rounded-full`**, band **`rounded-[20px]`, CTA / chip / menu button `rounded-[10px]`, nav link and
      header buttons `rounded-lg` (8), bars `rounded-[2px]`
- [ ] type scale 92.8 / 43.2 / 18.72 / 16 / 14.5 / 13.5 / 13 / 12.5 with line heights 92.8 / 45.36 / 29.016 /
      24.8 / 22.475 / 19.375 / 20.15 / 19.375 (body is 16 px / 1.55 = 24.8)

## 2. Shell + background field

- [ ] root: `relative isolate flex min-h-screen flex-col overflow-hidden bg-ground text-ink text-[16px] leading-[1.55]`
- [ ] grid layer: absolutely positioned `inset-0 -z-[2]`, two 1 px `var(--color-line)` linear gradients on a
      `56px 56px` tile, `background-position: center top`, masked with
      `radial-gradient(ellipse 70% 60% at 50% 30%, #000 20%, transparent 75%)` — keep the `-webkit-mask-image` twin
- [ ] glow: absolutely positioned `-z-[1]`, `top-[-260px]`, `left-1/2 -translate-x-1/2`, `h-[520px] w-[900px]`,
      `rounded-full`, `blur-[20px]`,
      `radial-gradient(closest-side, rgb(125 211 252 / .35), rgb(167 139 250 / .18) 55%, transparent)`, animating
      `cl-hero10-breathe` **8s ease-in-out infinite** (50 %: `opacity .7`, `scale 1.08`)
- [ ] below **861** the glow is **520** wide with `top: -200px`
- [ ] both layers `aria-hidden` + `pointer-events-none`; the shell's `overflow: hidden` is what clips the glow
- [ ] test: `offsetWidth` of the glow is **900** at 1440 and **520** at 860 — never assert its rect while the
      animation runs

## 3. Header bar (RED first)

- [ ] `<header>`: `relative z-[5] border-b border-line bg-[rgb(7_9_15_/_0.5)] backdrop-blur-[10px]`
- [ ] inner: `mx-auto flex max-w-[1200px] items-center gap-9 px-[var(--gutter)] py-[14px]`
- [ ] wordmark: `<a href="#top">` with a 24 px two-stop gradient triangle (lucide `Triangle` filled with
      `#7dd3fc`→`#a78bfa`, or an inline SVG with a `linearGradient`), label 18 px/600 `tracking-[-0.02em]`, `gap-2.5`
- [ ] nav: `<nav aria-label="Main">` → `flex flex-1 items-center justify-between gap-5`; links
      `px-3 py-2 text-[14.5px] rounded-lg` with `aria-current="page"` on one; the four links sit in a `gap-1` row
- [ ] end cluster: "Sign in" `px-3 py-2 text-[14.5px]`; "Deploy now" `rounded-lg bg-ink px-4 py-2 text-[14.5px]
      font-semibold text-ground`
- [ ] **set link colours on the element** (`text-muted` / `text-ink`), not through an inherited anchor rule — the
      reference's `a { color: inherit }` silently repaints every single-class colour to ink
- [ ] menu button: `hidden` above 860; at ≤860 `grid size-[42px] place-items-center rounded-[10px] border border-line
      bg-white/[0.04]` with `aria-expanded`, `aria-controls` and a swapping `aria-label`
- [ ] ≤860: nav becomes `absolute top-full inset-x-0` over `#0b0e17`, `flex-col items-stretch gap-3 px-[var(--gutter)]
      pt-3 pb-5 border-b border-line`, links at 17 px `px-2 py-3`, the two end buttons `flex-1 text-center p-3`
      with the sign-in carrying the 1 px border
- [ ] behaviour: toggles `.is-open`, closes on link click / `Escape` (focus back to the button) / outside click /
      `matchMedia('(min-width: 861px)')`; **without JS the nav wraps** — the dropdown must be progressive
- [ ] tests: open → `aria-expanded="true"`, panel visible, `X` shown; `Escape` → closed + focus on the button;
      outside click → closed; a link click → closed

## 4. Hero content

- [ ] `main`: `flex flex-1 items-center`; `<section id="platform">`:
      `mx-auto flex w-full max-w-[1200px] flex-col items-center px-[var(--gutter)] pt-[clamp(48px,8vw,104px)]
      pb-[clamp(40px,6vw,72px)] text-center`
- [ ] announce pill `<a href="#network">`: inline-flex `items-center gap-2.5 rounded-full border border-line
      bg-white/[0.04] py-1 pl-1 pr-3 text-[14px]`, hover → `border-sky/50`; the tag `rounded-full px-2.5 py-0.5
      text-[12.5px] font-bold text-ground` on `linear-gradient(90deg,#7dd3fc,#a78bfa)`; a 14 px
      `ChevronRight` after the sentence
- [ ] `h1`: `mt-[26px] mb-5 text-[clamp(2.6rem,1.2rem+5.4vw,5.8rem)] font-semibold leading-none
      tracking-[-0.05em] [text-wrap:balance]`; the tail is a **`block` `span`** with
      `bg-[linear-gradient(90deg,#bae6fd,#7dd3fc_35%,#a78bfa)] bg-clip-text text-transparent`
- [ ] sub: `max-w-[38em] text-[clamp(1rem,.96rem+.3vw,1.17rem)] leading-[1.55] text-muted`
- [ ] actions: `mt-[34px] flex flex-wrap items-center justify-center gap-3`; at ≤520 `w-full` with each child
      `flex-1 basis-full justify-center`
- [ ] CTA `<a>`: `inline-flex min-h-[50px] items-center rounded-[10px] px-6 text-base font-semibold text-ground
      bg-[linear-gradient(180deg,#fff,#dfe5f2)] shadow-[…]` + `hover:-translate-y-0.5`
- [ ] command chip `<p>`: `inline-flex min-h-[50px] items-center gap-2 rounded-[10px] border border-line
      bg-white/[0.03] px-5 font-mono text-[14.5px] text-muted` with an `aria-hidden` `$` and an ink `<code>`
- [ ] tests: `h1` is one heading with the tail inside it; the tail is `display: block`; the sub is capped at 711.36
      at 1440; both actions are 50 tall and the row is 112 tall at 520

## 5. Stats band

- [ ] `<dl id="network">`: `mt-[clamp(48px,7vw,88px)] grid w-full grid-cols-1 rounded-[20px] border border-line
      bg-[linear-gradient(180deg,…)] text-left sm:grid-cols-2 lg:grid-cols-4` (break the 960 ladder explicitly with
      `min-[961px]:grid-cols-4`, since Tailwind's `lg` is 1024)
- [ ] cells: `p-6 px-[26px]` with `border-l border-line` from the second cell, `border-l-0` on the first, and at
      ≤960 drop the left border on the third cell while adding `border-t` to cells 3 and 4
- [ ] `dt` 13.5 px muted; `dd` `mt-1.5 grid gap-1.5`; number `text-[clamp(1.9rem,1.4rem+1.5vw,2.7rem)]
      font-semibold leading-[1.05] tracking-[-0.04em] tabular-nums`; hint 13 px `text-hint`
- [ ] cell 2's strip: `flex h-4 gap-[3px]` with 12 `i` elements `flex-1 max-w-[10px] rounded-[2px] bg-bar`, the
      **tenth** `bg-dip`, whole strip `aria-hidden`, plus an `sr-only` sentence carrying the uptime fact
- [ ] ≤520: cells `p-[18px] px-4`, `dt` 12.5 px, number `text-[1.6rem]`
- [ ] tests: 4 columns at 961 / 2 at 960 with the top border on 3–4; 12 bars with exactly one `is-dip`; the band is
      148.42 at 1440 and 231.75 at 520

## 6. Footer, anchors, a11y

- [ ] slim footer inside the shell: 13 px muted, a single `https://www.componentdock.com/` link labelled
      **"Component Dock"**, no new colour, font or radius, no ColorLib mention
- [ ] zero dead anchors: wordmark / "Platform" / "Sign in" → `#top`; "Network" and the pill → `#network`;
      "Docs" / "Pricing" / "Deploy now" / the CTA → `https://www.componentdock.com/` with
      `target="_blank" rel="noreferrer noopener"`
- [ ] focus ring: `2px` `var(--color-sky)` at `3px` offset on every focusable element
- [ ] `prefers-reduced-motion: reduce` → `animation: none`, `transition: none` (`!important`)
- [ ] test: no `href="#"` in the DOM; `Escape` behaviour; reduced-motion computed styles

## 7. Gate

- [ ] `npm run verify:app virga` (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-virga --type spec`
- [ ] measured sweep at 320 / 360 / 390 / 520 / 521 / 640 / 860 / 861 / 900 / 960 / 961 / 1200 / 1280 / 1364 / 1440 /
      1920 against the document ladder in the spec (994 / 974 / 933 / 900 … 909 / 906 / 920 / 942 / 900 / 904 / 916)
- [ ] `scrollWidth === clientWidth` and `scrollX = 0` at every width in the sweep
- [ ] PR body: source template, preview URL, token table, and the deltas (new name, new copy, Geist from Google
      Fonts, lucide icons, real anchors, the added Component Dock footer)
