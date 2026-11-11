# Belvedere — implementation tasks

`apps/belvedere` recreates the ColorLib **Hero V09** designer-portfolio hero (an arch-cropped portrait with a
rotating sticker and a status pill, a yellow-highlighted headline, a CTA pair, four icon tiles and a three-cell
stats band) under a new name. Read `openspec/specs/template-belvedere/spec.md` first — it carries every measured
number, the token table, the ten traps and the prescribed fixes. `docs/templates/belvedere/design-notes.md` carries
the DOM skeleton, the token block, the screenshot read and the section-by-section fidelity notes.

Reference: https://preview.colorlib.com/theme/bootstrap/hero-09/ (the slug-only path 404s — the `bootstrap/`
prefix is the only live one). Source: https://colorlib.com/wp/template/hero-09/.

## 0. Scaffold

- [ ] copy the simplest existing app to `apps/belvedere`; rename the package to `@free-react-templates/belvedere`
- [ ] `public/CNAME` = `belvedere.free.componentdock.com`; `"homepage"` = `https://belvedere.free.componentdock.com`
- [ ] register the workspace in `package-lock.json` (`npm install` at the root; lockfile registration is mandatory)
- [ ] load **Bricolage Grotesque** once in `index.html`:
      `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400..700&display=swap` (it is the page's
      only face — no serif, no mono, and **do not** ask for weight 800, it clamps to 700)
- [ ] no ColorLib string, comment or asset anywhere in the app (the persona is **Belvedere**, the address is
      `hello@belvedere.design`, the portrait is `https://picsum.photos/seed/belvedere-1/1200/1500`)
- [ ] register `injectUiSource()` in `vite.config.ts` (copy an existing app's config verbatim)

## 1. Tokens

- [ ] `@theme`: `--color-ground #e8f0fa`, `--color-disc #d4e3f7`, `--color-ink #0f1f3d`, `--color-muted #43526e`,
      `--color-brand #2456d6`, `--color-brand-deep #1b45b5`, `--color-sun #ffd23f`, `--color-card #ffffff`,
      `--color-frame #cbd9ee`, `--color-ping #34d399`, `--gutter clamp(16px,4vw,48px)`,
      `--hero-gap clamp(36px,6vw,96px)`
- [ ] the root's background is one declaration: `radial-gradient(circle at 18% 70%, var(--color-disc) 0 22%,
      transparent 22.2%), var(--color-ground)` — with `circle` the stops resolve against the farthest corner
      (**≈ 298 px** radius on a 1440 × 944 box), and the disc is meant to be clipped by the viewport
- [ ] the five coloured shadows as arbitrary values: frame `0 30px 60px -30px rgb(15 31 61 / .45)`, pill
      `0 12px 24px -10px rgb(15 31 61 / .5)`, CTA `0 10px 22px -12px rgb(36 86 214 / .8)`, sticker
      `0 10px 20px -10px rgb(15 31 61 / .5)`, current nav pill `0 1px 2px rgb(15 31 61 / .08)`
- [ ] the ink `rgba()` derivations: nav hover `.07`, meta rule `.14`, ghost border `.2`, ghost ground
      `rgb(255 255 255 / .6)`
- [ ] radii: pills **`rounded-full`**, frame top **`rounded-t-full`** + bottom **`rounded-b-[28px]`**, CTAs
      **`rounded-[14px]`**, tiles **`rounded-xl`** (12 px)
- [ ] type scale 68.8 (clamp) / 18.4 (clamp) / 17 / 16 / 14.5 / 12.5 with line heights 71.552 / 28.52 / 26.35 /
      24.8 / 22.475 / 19.375

## 2. Shell + bar (RED first)

- [ ] root: `flex min-h-screen flex-col overflow-hidden bg-ground text-ink text-[16px] leading-[1.55]`
- [ ] `<header>`: `mx-auto flex w-full max-w-[1180px] items-center justify-between gap-4 px-[var(--gutter)] py-6`
- [ ] wordmark: `<a href="#top">` with a 34 px ink disc (`grid place-items-center rounded-full bg-ink text-sun
      text-[20px] font-bold pb-[3px]`, `aria-hidden` glyph) + the studio name at 18 px/600, `gap-2.5`
- [ ] nav: `<nav aria-label="Main">` with three pills (`px-3.5 py-2 rounded-full font-medium`, `gap-1`); the
      current one is `bg-card text-ink shadow-[0_1px_2px_rgb(15_31_61_/_0.08)]` and carries `aria-current="page"`,
      the others `text-muted hover:bg-ink/[0.07] hover:text-ink`
- [ ] **fix the reference's clip:** below 380 the bar wraps (nav on its own line, centred) or the wordmark text is
      hidden, so all three labels are fully visible at **320**
- [ ] test: at 320 every nav label's `getBoundingClientRect().right <= 320` and `scrollWidth === clientWidth`

## 3. The portrait block

- [ ] `main`: `flex flex-1 items-center`; `<section>`: `mx-auto grid w-full max-w-[1180px]
      grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] items-center gap-[var(--hero-gap)] px-[var(--gutter)]
      pt-[clamp(20px,4vw,48px)] pb-[clamp(48px,7vw,88px)]`, collapsing to one column at **900**
- [ ] portrait wrapper: `relative max-w-[420px]` (+ `mx-auto w-[min(72%,320px)]` at ≤900, `w-[70%]` at ≤520)
- [ ] frame: `aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[28px] border-[6px] border-card bg-frame
      shadow-[0_30px_60px_-30px_rgb(15_31_61_/_0.45)]`, `group` on the wrapper
- [ ] `<img>`: `h-full w-full object-cover object-[50%_30%] saturate-[1.05]
      transition-transform duration-[600ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.04]`, 4:5
      placeholder source, descriptive `alt`
- [ ] sticker: `<span aria-hidden>` 64 px `rounded-full bg-sun text-ink grid place-items-center
      shadow-[0_10px_20px_-10px_rgb(15_31_61_/_0.5)]` at `top-[12%] right-[-22px]` with a 30 px star glyph and
      `motion-safe:animate-[belvedere-turn_12s_linear_infinite]`; 52 px / `right-[-18px]` / 24 px glyph at ≤520
- [ ] status pill: `<p>` `absolute bottom-[-18px] left-1/2 -translate-x-1/2 inline-flex items-center gap-2.5
      whitespace-nowrap rounded-full bg-ink px-[18px] py-2.5 text-[14.5px] font-medium text-white
      shadow-[0_12px_24px_-10px_rgb(15_31_61_/_0.5)]`; 13.5 px / `px-3.5 py-2.25` at ≤520
- [ ] ping dot: 10 px `rounded-full bg-ping` with an `::after` clone animating `scale(2.8)` + `opacity:0` over
      **1.8 s** infinite, `aria-hidden` (assert the phrase is announced once)
- [ ] tests: frame is `aspect-ratio: 4/5` with a **6 px** border; the sticker's **offset** box is 64 (52 at 520);
      the pill's computed ground is ink and its text white

## 4. The copy column

- [ ] intro: `<p>` 18.4 px/500 `text-muted`, `clamp(1rem,.96rem+.25vw,1.15rem)`
- [ ] `h1`: `text-[clamp(2.3rem,1.3rem+3.6vw,4.3rem)] font-bold leading-[1.04] tracking-[-.035em] text-balance
      my-4 mb-5`
- [ ] highlight: `<mark className="bg-sun text-inherit rounded-[.18em] px-[.12em]
      [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">` — padding/radius in **em** so they
      scale, and the band must paint the font's inline box (taller than the line box), not the line box
- [ ] bio: 18.4 px/400 `text-muted max-w-[34em]`
- [ ] tests: the `<mark>` is a real `mark` inside the `h1` with `background-color: #ffd23f`; the `h1` is exactly
      one element and contains the phrase

## 5. The CTA pair

- [ ] actions: `mt-[30px] flex flex-wrap gap-3`, `justify-center` at ≤900, each child `flex-1 basis-full` at ≤520
- [ ] primary: `inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-[14px] bg-brand px-[22px]
      font-semibold text-white shadow-[0_10px_22px_-12px_rgb(36_86_214_/_0.8)] hover:bg-brand-deep
      hover:-translate-y-0.5 transition`, 18 px envelope icon
- [ ] **set the white explicitly** — the reference needs `color:#fff !important` because its base
      `a { color: inherit }` out-specifies the class; assert the computed colour is white (6.22 : 1), never ink
      (2.63 : 1)
- [ ] secondary: `inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-[14px] border-[1.5px]
      border-ink/20 bg-white/60 px-[22px] font-semibold hover:border-ink hover:bg-white transition`, with the
      trailing size span `text-muted font-normal`
- [ ] tests: both are 52 px tall; the pair wraps to two rows when its container is under 534 px (901–1034 and
      ≤580), and each child is full width at ≤520

## 6. The meta band

- [ ] `<div>`: `mt-9 flex flex-wrap items-center gap-x-9 gap-y-5 border-t border-ink/[0.14] pt-[26px]`,
      `justify-center` at ≤900
- [ ] social: `<ul aria-label="Elsewhere">` of four `<a>` tiles — 44 px, `rounded-xl bg-card text-ink grid
      place-items-center`, `gap-2`, hover `bg-ink text-sun -translate-y-0.5`, each with an `aria-label` and a 20 px
      `lucide-react` glyph
- [ ] **fix the ring:** the ink-filled hover state must not keep the blue ring — use
      `focus-visible:outline-sun` (11.33 : 1) on that state; the global ring stays `outline-brand` (5.41 on ground)
- [ ] stats: `<dl>` of three `div > dt + dd`, `gap-x-7 gap-y-3`; `dt` `text-[12.5px] font-medium uppercase
      tracking-[1px] text-muted`, `dd` `text-[17px] font-semibold`
- [ ] tests: four tiles and three pairs; one row at copy ≥600, two rows below **and above** it (the 1440 two-row
      state is intended — do not "fix" it)

## 7. Motion

- [ ] two keyframes only: `belvedere-ping` (to `scale(2.8)` + `opacity:0`) and `belvedere-turn`
      (to `rotate(360deg)`), the second `12s linear infinite`
- [ ] hover transitions `.2s` on colour/transform, `.6s` on the portrait scale; **no JavaScript anywhere**
- [ ] `prefers-reduced-motion: reduce` → both animations and every transition off (the reference uses
      `!important`); test that the sticker's rect equals its 64 px offset box in that mode

## 8. Footer, docs and gates

- [ ] slim footer inside the shell, below the hero: 13 px muted text on the same ground, no border, centred, one
      link to `https://www.componentdock.com/` labelled **"Component Dock"**; adds ≈ 40–56 px (documented delta)
- [ ] zero `href="#"`: wordmark + three nav pills resolve to a real `#top`, the CV button is a real
      `mailto:hello@belvedere.design?subject=CV%20request`, the four tiles are real external profiles with
      `rel="noreferrer noopener"`
- [ ] no `<script>` in the app and no `colorlib`/`hero-09`/`marenholt`/`polder` string anywhere in `apps/belvedere`
- [ ] `npm run verify:app belvedere` (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-belvedere --type spec` is valid
- [ ] `TEMPLATES.md`: add the Hero 09 row in the `## Bootstrap Heroes (12)` section, **after** whichever hero rows
      exist at that moment, in the `[colorlib] · ![preview] · [app]` grammar — and re-read the surrounding lines
      immediately before pushing
- [ ] 100 % coverage on the app; the measured checklist at the end of the spec is the acceptance test
