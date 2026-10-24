# Keynoter (ColorLib Summit) — Tasks & Design Notes

> Prep artifacts written on `main` by the prep stream. Implementation ships
> later on `feat/template-keynoter`. This folder + the spec are the claim
> marker: the implementer starts from here, no research needed.
> Full measured evidence: `openspec/specs/template-keynoter/spec.md` and
> `docs/templates/keynoter/design-notes.md`.

## Identity

| Thing | Value |
|---|---|
| New name | **Keynoter** (one word, "the person who gives a keynote"; `git grep -il keynoter origin/main` = 0 hits, absent from `TEMPLATES.md`, not a ColorLib slug — `template/keynoter/`, `theme/keynoter/` and `theme/bootstrap/keynoter/` all 404) |
| App / package | `apps/keynoter` · `@free-react-templates/keynoter` |
| Deploy target | `keynoter.free.componentdock.com` |
| Source | ColorLib **Summit** — https://colorlib.com/wp/template/summit/ |
| Preview | https://preview.colorlib.com/theme/summit/ (HTTP 200, **22,465 B** HTML, sha256 `f1d4f1dd…`; `css/style.css` **33,880 B**, sha256 `84fb598d…`; `js/main.js` **4,113 B**, sha256 `cf62540b…`; Bootstrap 4 grid + jQuery 3.3.1 + Owl Carousel 2 + slicknav + jquery.countdown + circle-progress; `<title>` = "The Summit Confference \| Template"; `theme/bootstrap/summit/` **404**, `/downloads/free/summit.zip` **404** — no alias and no archive) |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/summit-free-template.jpg (AVIF 1200×946 — **top fold only**, header + hero + the first ~100px of the Next Event band) |
| Category | Event / conference (single page build of a 5-page theme) |
| TEMPLATES.md rows | lines **1193** (`## Business`) and **1688** (`## Event`) — both `[x]`, wrongly credited to the `summit` app |
| Why no app exists | `docs/row-multiplicity.md` §2 APP-WRONG-DESIGN: the `summit` app's spec names a different ColorLib design (**Confer**, rows 363/949/1671; `row-excl / spec-excl` = 1 / 52) |

## Structure (1:1, DOM order from the live preview, 1440×900, doc ≈5,441px)

1. `#preloder` — full-screen **`#000`**, 40px red (`#f44336`) spinner, fades
   out 400ms after `load` (must never trap a hydrated page).
2. `header.header-section` — **101px, absolute over the hero**, transparent with
   a `linear-gradient(to right, #ff1a6b, #2a34d0)` @ .75 wash behind the bar:
   **160×39** wordmark at x = 15, five **16px/900 uppercase white** nav items
   from x ≈ 353 (`padding: 15px 24px`, active = `#6063ED` pill at 4px radius),
   five 18px white social glyphs and a **55×55 `#6063ED`** search square at the
   right edge (x = 1,370).
3. `div.hero-section` — **976px** Owl carousel of **4** pre-graded crowd photos.
   Active slide's 1,146px column at x = 147: date kicker at **y = 320** (36px/400
   white, superscript ordinals), single `h1` at **y = 384** (**100px / 100px /
   900 / UPPERCASE white**, 3 lines), venue at **y = 696** (36px/700 white).
   Vertical rail of **11px ring dots** (3px border, white → `#ff1a6b`) at
   (1,364, 522). Autoplay 1.2s fade.
4. `section.event-counter` — **241px `#201D6D`**: `h2` "Next Event" 60px/900 at
   y = 1,031, date 24px/400 with a 16px white-on-`#F21E7D` time pill, four
   60px/900 countdown cells (x = 735, 60px apart) labelled Days / Hours /
   Minutes / Seconds.
5. `section.speaker-section.spad` — **978px white** (`padding: 85px 0 100px`):
   `h2` "Keynote Speakers" 60px/900 `#272727` + 88px margin; three **362×501**
   cards (photo **362×412**, duotone, 6px radius, 22px margin; name 30px/900 +
   role 18px/400); centred **231×67** indigo "ALL SPEAKERS".
6. `section.workshop-section` — **784px `#f3f3f3`** (85px bottom margin):
   photo flush left, **612px** wide (`calc(50% - 108px)`, full height); text
   column **588px at x = 720** (`padding: 185px 0 155px`): `h4` "Workshops"
   24px/700, `h2` 60px/700/72, 18px copy, **More Info** (indigo 200×67) +
   **Buy Tickets** (`#4ACA59` 206×67), 27px apart.
7. `section.speak-about.spad` — **1,330px white** (`padding: 0 0 70px`):
   `h2` "We will speak about" + **six 362×520** `#f5f5f5` cards (3 columns,
   6px radius, 30px gap): topic 36px/900/50 with 198px bottom margin, byline
   absolute at `left: 35px; bottom: 36px`; hover flood
   `#FB3ABE → #F149E3` (0.4s) with white text.
8. `section.subscribe-form` — **519px** purple photo band (`padding: 85px 0
   100px`): `h2` 60px/900 white with the source's `margin-bottom: -60px`, 18px
   white copy (82px below), **830×62** transparent `2px #F1F1F1` field (6px
   radius, white italic placeholder @ .35) + **200×62** `#4ACA59` "subscribe".
9. `footer.footer-section` — **528px `#201D6D`** (`padding-top: 80px`): four
   **294px** columns (headings 24px/900, items 18px/400 white @ .5, 24px
   apart; pink `#D51E7B` contact glyphs, 33px indent) + **95px** copyright bar
   behind a **1px `#F21E7D`** rule (14px white @ .5, rendered year, five social
   glyphs, terms right).

## Task list (implementation order, TDD)

### 0. Claim (implementer, not prep)

- [ ] `git fetch origin`, branch `feat/template-keynoter`.
- [ ] Re-open rows **1193** and **1688** in `TEMPLATES.md` (`[x]` → `[ ]`),
      commit and push the claim (they are false `[x]` — see §2 of
      `docs/row-multiplicity.md`). Do NOT touch `apps/summit`.
- [ ] Copy the smallest shipped app (`apps/amberline` is a good base), rename to
      `keynoter`, set `@free-react-templates/keynoter`, `public/CNAME`,
      `homepage`.

### 1. Scaffold + tokens

- [ ] `vite.config.ts` keeps `injectUiSource()`; `src/index.css` `@theme` block
      with `--color-brand: #6063ed`, `--color-navy: #201d6d`,
      `--color-action: #4aca59`, `--color-pink: #f21e7d`,
      `--color-hero-start: #ff1a6b`, `--color-hero-end: #2a34d0`,
      `--color-card: #f5f5f5`, `--color-band: #f3f3f3`,
      `--color-ink: #272727`, `--color-body: #484848`.
- [ ] `index.html`: Lato 400/700/900 via
      `https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap`,
      Keynoter `<title>` + meta description, `preconnect` to
      `fonts.gstatic.com` and `picsum.photos`.
- [ ] Test first: shell renders 9 bands in order, one `h1`, no `href="#"`.

### 2. Header + search overlay

- [ ] Absolute 101px header over the hero; gradient wash at .75 behind the bar.
- [ ] 160px wordmark (text or inline SVG, no source PNG), five nav items
      (`#speakers`, `#workshops`, `#talks`, `#contact`, Home → `#top`), five
      social glyphs (`aria-label`ed buttons/links), 55×55 search square.
- [ ] Active-section tracking sets the `#6063ED` pill.
- [ ] Mobile ≤767: labelled menu button + drawer (`aria-expanded`, Escape,
      focus return), social glyphs inside the drawer.
- [ ] Search overlay: `#073B4C`, 0.3s fade, 500px panel, ~399px field,
      100×50 `#233EDE` submit, close at top-right, focus in/out, Escape closes.
- [ ] Tests: nav targets exist, drawer toggles, overlay opens/closes and clears.

### 3. Hero carousel

- [ ] 976px band; four picsum photos; single CSS gradient wash
      `to right, #ff1a6b → #2a34d0` at ≈.75 over each (the source's duotone is
      baked into its JPEGs — never copy them).
- [ ] Kicker (36px/400 white, superscript ordinals), `h1` 100px/100/900
      uppercase white over 3 lines, venue 36px/700 white.
- [ ] Autoplay 1.2s, pause on hover, `prefers-reduced-motion` stops rotation,
      dot rail 11px rings at `right: 65px` (vertical, 10px apart).
- [ ] Inactive slides must not expose headings (`aria-hidden` copy).
- [ ] Tests: exactly one `h1`, slide change updates the active dot, reduced
      motion freezes autoplay.

### 4. Next Event counter

- [ ] 241px `#201D6D` band; 60px/900 heading, date + `#F21E7D` time pill.
- [ ] Real countdown to a future `NEXT_EVENT` constant (source's 2019 target
      renders 00 — do not copy); pads to 2 digits; ticks each second; cleans up
      its interval on unmount.
- [ ] Tests with fake timers: initial render, tick decrements, zero-floor, no
      interval leak, label text.

### 5. Keynote speakers

- [ ] 60px/900 title + 88px margin; three 362px cards (portrait 362×412 with
      the duotone wash, 6px radius); 30px/900 name + 18px/400 role, distinct
      names/roles; centred 231×67 indigo "ALL SPEAKERS" → `#talks`.
- [ ] Tests: three cards, three unique names, link target.

### 6. Workshop split

- [ ] 784px `#f3f3f3`; flush-left photo 612px (`calc(50% - 108px)`), text
      column at 50% (`padding: 185px 0 155px`); `h4` 24/700, `h2` 60/700/72,
      18px copy; More Info (indigo) + Buy Tickets (green).
- [ ] ≤767 stacks (500px photo, 100px top padding, `h2` 53px → 35px at ≤479).
- [ ] Tests: both CTAs exist with distinct styles and real targets; no overflow
      at 390.

### 7. "We will speak about" grid

- [ ] Six cards, 362×520, `#f5f5f5`, 6px radius, 34/18/40/35 padding; topic
      36/900/50 with 198px bottom margin; byline pinned bottom-left.
- [ ] Hover AND `:focus-visible` flood `#FB3ABE → #F149E3` in 0.4s, text →
      white; 2 columns ≤991, 1 column ≤767.
- [ ] Tests: six distinct topics, focusable cards, class/aria state on
      hover/focus, tallest topic does not clip.

### 8. Subscribe band

- [ ] 519px photo band with the source's negative-margin heading rhythm; 18px
      white copy; 830×62 field + 200×62 `#4ACA59` button in a flex row with
      `gap` (never the source's absolute overlap).
- [ ] Validation: `aria-invalid` + inline error, `aria-live` success, no
      network; stacks ≤767 with the button under the field.
- [ ] Tests: empty/invalid/valid paths, live region text, layout classes.

### 9. Footer + attribution

- [ ] 528px `#201D6D`; four 294px columns (24/900 headings, 18/400 white @ .5,
      24px apart; pink glyphs, 33px indent); 1px `#F21E7D` rule; 95px
      copyright bar with rendered year, five social glyphs, terms link.
- [ ] Footer credits https://www.componentdock.com/ as "Component Dock".
- [ ] Tests: four column headings, rendered year, attribution link.

### 10. Verify + ship

- [ ] `scripts/verify-app.sh keynoter` (typecheck, lint, 100% coverage, build).
- [ ] `git grep -i colorlib apps/keynoter` = 0 and `git grep -i summit
      apps/keynoter` = 0.
- [ ] 1440 + 390 screenshots compared band-by-band with
      `docs/templates/keynoter/design-notes.md`.
- [ ] `npm install` at the root so `package-lock.json` registers the workspace.
- [ ] PR → squash merge → rows 1193/1688 `[x]` + surge URL + `npm run
      readme:status` → `gh workflow run deploy-surge.yml -f app="keynoter"`.
