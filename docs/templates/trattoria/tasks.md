# Trattoria — implementation tasks

`apps/trattoria` recreates the ColorLib **Hero V08** restaurant hero (a full-bleed dining-room photograph, a
centred two-line wordmark between nav and phone, and a translucent opening-hours card) under a new name. Read
`openspec/specs/template-trattoria/spec.md` first — it carries every measured number, the token table, the traps and
the seven prescribed fixes. `docs/templates/trattoria/design-notes.md` carries the DOM skeleton, the token block and
the section-by-section fidelity notes.

Reference: https://preview.colorlib.com/theme/bootstrap/hero-08/ (the slug-only path 404s — the `bootstrap/`
prefix is the only live one). Source: https://colorlib.com/wp/template/hero-08/.

## 0. Scaffold

- [ ] copy the simplest existing app to `apps/trattoria`; rename the package to
      `@free-react-templates/trattoria`
- [ ] `public/CNAME` = `trattoria.free.componentdock.com`; `"homepage"` = `https://trattoria.free.componentdock.com`
- [ ] register the workspace in `package-lock.json` (`npm install` at the root; lockfile registration is mandatory)
- [ ] load Playfair Display once in `index.html`:
      `https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap`
      (display only — the body stays the **system UI stack**; do not add a text webfont)
- [ ] no ColorLib string, comment or asset anywhere in the app (the wordmark is **trattoria**; the photograph is
      `https://picsum.photos/seed/trattoria-1/1400/933`)

## 1. Tokens

- [ ] `@theme` palette from the spec's Design tokens table: ground `#14100c`, cream `#f6ede0`, soft `#e6d9c6`,
      gold `#e2b86b`, gold-hover `#f0cd8c`, plus `--font-serif`, `--font-sans` (system stack), `--gutter`,
      `--hero-gap`, `--text-display`, `--text-lede`
- [ ] the eighteen `rgba()` washes as arbitrary values — bar rule `.18`, card frame `.22`, card ground `.72`,
      row rules `.22` **dashed**, panel ground `.97`, panel rules `.12`, overlay stops (§1 of design notes)
- [ ] radii: CTA **`rounded-[2px]`** (not `rounded-sm` = 4 px), menu button `rounded-full`, **everything else
      `rounded-none` — the card has no radius**
- [ ] **no `box-shadow` anywhere** (the reference has zero); the card reads as a card from its hairline +
      `backdrop-blur-[12px]`
- [ ] type scale 87.04 (clamp) / 28 / 22 / 18.4 (clamp) / 16 / 14.5 / 14 / 13.5 / 13 / 11

## 2. Shell + photograph (RED first)

- [ ] root `min-h-screen flex flex-col overflow-hidden isolate bg-ground text-cream text-[16px] leading-[1.6]`
- [ ] `<HeroMedia>`: one `<img>` `absolute inset-0 -z-20 h-full w-full object-cover object-[50%_60%]`,
      `width="1400" height="933"`, `alt=""`, `fetchPriority="high"`, and the 24 s zoom
      (`from scale(1.08)`, `ease-out both`) disabled under `prefers-reduced-motion`
- [ ] overlay as one absolutely positioned layer at `-z-10` carrying **two** gradients of `#14100c`:
      `180deg .78 0% / .25 26% / .35 55% / .92 100%` and `90deg .85 0% / .35 60% / .1 100%`
- [ ] at ≤860 the overlay collapses to the single `180deg .75 / .3 @22% / .6 @45% / .95 @70%` set
- [ ] verify `scrollX === 0` and `scrollWidth === clientWidth` at 1440, 960, 520 and 320 (the zoom is clipped)

## 3. Header bar

- [ ] bar `border-b border-[rgba(246,237,224,0.18)]`; inner `mx-auto grid max-w-[1320px] grid-cols-[1fr_auto_1fr]
    items-center gap-6 px-[var(--gutter)] py-[18px]` — height **83.89** at ≥1194 and ≤860, **88.19** at
      861–1193, **81** at ≤520
- [ ] nav first (`aria-label="Main"`), `ul` `flex gap-[26px]`, link `py-1 text-[13.5px] font-medium uppercase
    tracking-[0.12em] text-soft hover:text-white`, four links, `aria-current="page"` on the first with a 1 px
      gold rule at `bottom: -2px`
- [ ] wordmark centred: name `28px/600` serif (`24px` at ≤520) over a `11px/600/[0.3em]` uppercase gold sub-line
      `4px` apart, `text-center` (≥861); the whole thing `177.38 × 46.89` at 1440
- [ ] bar end: phone `text-[14px] tracking-[0.06em] text-soft hover:text-white` with a **real `tel:` href**,
      hidden at ≤1080; gap 12
- [ ] menu button `44 × 44` circle, `border border-[rgba(246,237,224,0.4)] bg-[rgba(20,16,12,0.4)]`,
      `display:none` above 860; hamburger and close icons swap inside the bar's `data-open` state
- [ ] `:focus-visible` = **2 px gold at 4 px offset** everywhere — **ink** on the gold CTA (fix 1)

## 4. Hero grid + copy column

- [ ] `main` `flex flex-1 items-end`; section `mx-auto grid w-full max-w-[1320px] grid-cols-[minmax(0,1fr)_340px]
    items-end gap-[var(--hero-gap)] px-[var(--gutter)]
    pt-[clamp(80px,12vw,180px)] pb-[clamp(40px,6vw,72px)]` — **`items-end`, not `items-center`** (trap 1)
- [ ] verify the section is **1320 × 748.25 at (60, 151.75)** and the document exactly **900** at 1440
- [ ] eyebrow `flex items-center gap-[14px] text-[13px] font-semibold uppercase tracking-[0.24em] text-gold` with a
      `40 × 1` current-color rule (`aria-hidden`)
- [ ] `h1` serif `500`, `clamp(2.6rem, 1.3rem + 4.6vw, 5.6rem)`, `leading-[1.02]`, `tracking-[-0.02em]`,
      `max-w-[13em]`, `text-balance`, `mt-[18px] mb-5` — **sentence case**, three balanced lines at 1440
- [ ] `<em>` gold italic inside the headline (`fired`), inheriting size and leading
- [ ] standfirst `clamp(1rem, .96rem + .25vw, 1.15rem)` at `leading-[1.6]`, `max-w-[34em]` (**625.6**), soft
- [ ] actions `mt-[34px] flex flex-wrap items-center gap-x-7 gap-y-4`
- [ ] CTA `inline-flex min-h-14 items-center rounded-[2px] bg-gold px-[34px] text-[14px] font-bold uppercase
    tracking-[0.16em] text-ground`, hover `#f0cd8c` + `-translate-y-0.5`
- [ ] secondary link `inline-flex items-center gap-2.5 border-b border-[rgba(246,237,224,0.5)] py-1.5
    text-base font-medium`, hover gold rule and `gap-3.5`, 18 px arrow
- [ ] both anchors **wired** (fix 3) — no `href="#"` left

## 5. Opening-hours card

- [ ] `<aside aria-labelledby>` `w-[340px] max-w-[460px] justify-self-end border border-[rgba(246,237,224,0.22)]
    bg-[rgba(20,16,12,0.72)] p-[26px_28px] backdrop-blur-[12px] rounded-none` (`p-5` at ≤520)
- [ ] `h2` serif `22px/500` at `mb-3.5`
- [ ] `dl` with four `div` rows: `flex justify-between gap-4 border-b border-dashed
    border-[rgba(246,237,224,0.22)] py-[9px] text-[14.5px]`; `dt` soft, `dd` cream `tabular-nums`
- [ ] address `mt-4 flex gap-2.5 text-sm` with a 16 px gold pin; note `mt-1.5 ml-[26px] text-[13.5px] italic`
      soft — the 26 px is the pin's 16 + its 10 gap
- [ ] verify the card is **340 × 360.31 at (992, 467.69)**, rows **42.19**, `dl` **168.75**, and its foot at 828

## 6. Menu (≤860)

- [ ] `is-enhanced` gating, panel `absolute inset-x-0 top-full` with `px-[var(--gutter)] pt-3 pb-6`,
      `bg-[rgba(20,16,12,0.97)]`, 1 px bottom rule — measured **full width × 293.75 at (0, 82.89)**
- [ ] panel links `22px` **serif** blocks at `py-[14px]`, separated by 1 px `rgba(246,237,224,.12)` rules; the gold
      current-page underline hidden there
- [ ] toggle `aria-expanded` + `aria-label`, hamburger/close swap, **document height unchanged** when it opens
- [ ] Escape (refocus the button), outside click, panel link and `matchMedia('(min-width: 861px)')` all close it
- [ ] listeners cleaned up on unmount

## 7. Responsive reshaping

- [ ] ≤1193: nothing in CSS — the four links simply wrap to two lines (bar **88.19**); do **not** add a query, and
      do not `whitespace-nowrap` them (trap 3)
- [ ] ≤1080: phone `display:none`
- [ ] ≤960: one column, card `max-width: 460`, document 900 → **1013**, `h1` 3 → 2 lines
- [ ] ≤520: wordmark 24 px, sub tracking .22em, hero `pt-[38vh]`, photo `75vh` + mask
      (`linear-gradient(180deg,#000 55%,transparent)`), action children `flex-1 basis-full justify-center`,
      card `p-5`
- [ ] re-measure the seams from design-notes §8 if any copy changes (the 2/3-line breaks at **1416, 1226, 428**)

## 8. Footer (added — the reference has none)

- [ ] links `https://www.componentdock.com/` as "Component Dock", **outside** the 100vh shell, `#14100c` ground,
      `rgba(246,237,224,.18)` hairline top, `#e6d9c6` text

## 9. Tests (100 % coverage, TDD)

- [ ] counts: one `h1`, one `h2`, 1 `img` (`alt=""`), 0 `form`, 0 `input`, 1 button, 4 svg, 8 anchors, 3 ids
- [ ] structure: nav before the wordmark before the bar end; the wordmark is two spans; the hours list is a `dl`
      of four `div` rows with `dt`/`dd`
- [ ] menu: open/close by click, Escape (focus returns), outside click, crossing 861; `aria-expanded`/`aria-label`;
      the document does not grow
- [ ] anchors: no `href="#"`; the phone's href matches `/^tel:\+?\d/` (the reference's is redacted)
- [ ] the photograph is one `<img>` with `alt=""`, `width`/`height`, and a deterministic `picsum.photos/seed/...`
      URL — no bundled asset, no imported image module
- [ ] no `colorlib` / `hero-08` / `osteria` string in the app

## 10. Bookkeeping (after the app ships)

- [ ] add the row to `## Bootstrap Heroes (12)` in `TEMPLATES.md` after the last hero row, grammar
      `[colorlib] · ![preview] · [app]`:
      `- [x] **Hero 08** — [colorlib](https://colorlib.com/wp/template/hero-08/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/hero-08.jpg) · [trattoria](https://trattoria.free.componentdock.com)`
- [ ] `npm run readme:status`
- [ ] deploy: `gh workflow run deploy-surge.yml -f app="trattoria"`, then confirm HTTPS 200 + `ssl_verify_result=0`
- [ ] PR body: source template, preview URL, tokens used, what differs (rename, placeholder photograph, wired
      links, real `tel:`, ink CTA focus ring, added footer)
