# Parity — design notes (ColorLib Pricing Table V03, `pricing-table-03`)

Companion to `openspec/specs/template-parity/spec.md`. This file carries the raw material: the DOM skeleton, the data
matrix, the prescribed copy, and the per-section fidelity notes with the _reason_ behind each number.

## 1. Paper facts (verified 2026-11-11)

| Item                       | Value                                                                                                                                              |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| preview                    | `theme/bootstrap/pricing-table-03/` **200, 25,337 B** (slug-only **404 9 B**, `bb/` **404 9 B**)                                                   |
| stylesheet                 | `css/style.css?v=02cb6fd2`, **11,928 B**, sha256 `db284bc1…`                                                                                       |
| script                     | `js/snippet.js?v=a8409c87`, **1,334 B**, sha256 `960973d6…`, 44 lines, IIFE, no jQuery                                                             |
| archive                    | `downloads/free/pricing-table-03.zip`, **273,052 B** (claim 267 KB = 266.7 KiB ✓)                                                                  |
| archive twinship           | css **and** js hashes identical to live → the zip is the un-versioned twin                                                                         |
| `index.html`               | archive **25,134 B** vs live **25,337 B**: `<body>` byte-identical except the 11 B `?v=` on the script; 192 B of head metas                        |
| screenshot                 | `pricing-table-03.jpg` **200, 25,409 B, 1200 × 972**, **AVIF behind `.jpg`** (`file` → ISO Media, AVIF)                                            |
| ColorLib page              | **114,766 B**, `datePublished` 2026-09-25T15:12:43, description quotes the table-with-headers design                                               |
| fonts                      | 8 woff2 = **2 binaries** (latin 40,240 B `056e4e24…`, latin-ext 25,868 B `ae1d854f…`), one per subset, repeated for 400/500/600/700 → **variable** |
| weight shape (live, 38 px) | `Analytics that respects` = **390 / 407 / 403 / 411** for 400/500/600/700 — **600 is narrower than 500**                                           |

Only two assets on the page, no CDN call, no `images/` directory — although the archive's `README.md` still advertises
`images/` (the fourth variant in a row whose README lists a folder it does not ship; do not go looking for one).

## 2. DOM skeleton (verbatim shape, class names kept for reference)

```html
<main class="cl-pricing03-demo">
  <section class="cl-pricing03" aria-labelledby="…-title">
    <header class="…__head">
      <p class="…__eyebrow">Compare plans</p>
      <h1 class="…__title" id="…-title">Every Tallyboard feature, side by side</h1>
      <p class="…__lede">
        Plan headers stay pinned while you scroll. Collapse a group to skip past it.
      </p>
      <div class="…__tools">
        <button class="…__all" data-expand="true">Expand all</button>
        <button class="…__all" data-expand="false">Collapse all</button>
      </div>
    </header>
    <table class="…__table">
      <caption class="…__vh">
        Tallyboard plan comparison: Basic, Team and Business
      </caption>
      <colgroup>
        <col class="…__colf" />
        <col span="3" />
      </colgroup>
      <thead>
        <tr>
          <td class="…__corner">
            <span class="…__note">Prices in USD. Annual billing saves 16%.</span>
          </td>
          <th scope="col" id="…-basic">
            <span class="…__plan">Basic</span> <span class="…__price">$0</span>
            <span class="…__per">free for 3 users</span>
            <a class="…__cta" href="#">Sign up<span class="…__vh"> with Basic</span></a>
          </th>
          <th scope="col" id="…-team" class="…__pop">
            <span class="…__tag">Popular</span>
            <span class="…__plan">Team</span> <span class="…__price">$12</span>
            <span class="…__per">per user / month</span>
            <a class="…__cta" href="#">Start trial<span class="…__vh"> with Team</span></a>
          </th>
          <th scope="col" id="…-business">… Business / $24 …</th>
        </tr>
      </thead>
      <tbody class="…__group">
        <!-- ×4 -->
        <tr class="…__ghead">
          <th scope="rowgroup" colspan="4" id="…-g1">
            <button class="…__toggle" aria-expanded="true">
              <span>Projects and tasks</span>
              <span class="…__count">5 features</span>
              <svg class="…__chev" viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
                …
              </svg>
            </button>
          </th>
        </tr>
        <tr class="…__row">
          <th scope="row" id="…-f1" headers="…-g1">Projects</th>
          <td headers="…-g1 …-f1 …-basic"><span class="…__val">5</span></td>
          <td headers="…-g1 …-f1 …-team" class="…__pop"><span class="…__val">Unlimited</span></td>
          <td headers="…-g1 …-f1 …-business"><span class="…__val">Unlimited</span></td>
        </tr>
        …
      </tbody>
      …
    </table>
  </section>
</main>
```

Census: **1** `h1` / **0** `h2`; **4** `tbody`; **22** `tr` (1 thead + 4 group heads + 17 rows); **6** `button`;
**3** `a` (all `href="#"`); **40** `svg` (36 icons + 4 chevrons); **36** hidden `Included`/`Not included`; **0**
`img`, `form`, `input`, `h3`, `footer`.

## 3. CSS token block (values as shipped, abridged)

```css
body {
  background: #f2f4f3;
  font-family: 'IBM Plex Sans', system-ui, …;
}

.cl-pricing03-demo {
  padding: clamp(36px, 6vw, 80px) 16px;
}

.cl-pricing03 {
  --cl-pricing03-accent: #0f766e;
  --cl-pricing03-tint: #effaf8;
  --cl-pricing03-ink: #0f1f1d;
  --cl-pricing03-muted: #4a5a57;
  --cl-pricing03-line: #e1e7e5;
  max-width: 1080px; /* content box → 1176 outer with 48 px padding */
  margin: 0 auto;
  padding: clamp(24px, 4vw, 48px);
  border-radius: 20px;
  background: #fff;
  box-shadow:
    0 1px 2px rgba(15, 31, 29, 0.05),
    0 20px 50px -30px rgba(15, 31, 29, 0.25);
  color: var(--cl-pricing03-ink);
  font-size: 15px;
  line-height: 1.5;
}
.cl-pricing03 *,
.cl-pricing03 *::before,
.cl-pricing03 *::after {
  box-sizing: border-box;
} /* not the card itself */

.cl-pricing03__table {
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;
}
.cl-pricing03__colf {
  width: 34%;
}

.cl-pricing03__table thead th,
.cl-pricing03__corner {
  position: sticky;
  top: 0;
  z-index: 2;
  padding: 18px 14px 16px;
  border-bottom: 1px solid var(--cl-pricing03-line);
  background: rgba(255, 255, 255, 0.96);
  text-align: left;
  vertical-align: bottom;
}
.cl-pricing03__table thead th.cl-pricing03__pop {
  background: #f0faf8;
  border-radius: 14px 14px 0 0;
}

.cl-pricing03__toggle {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 26px 14px 10px;
  border: 0;
  background: none;
  font: inherit;
  font-size: 15px;
  font-weight: 700;
  text-align: left;
  cursor: pointer;
}
.cl-pricing03__toggle[aria-expanded='false'] .cl-pricing03__chev {
  transform: rotate(-90deg);
}

.cl-pricing03__row th,
.cl-pricing03__row td {
  padding: 13px 14px;
  border-bottom: 1px solid var(--cl-pricing03-line);
  vertical-align: middle;
}
.cl-pricing03__row th {
  color: #26332f;
  font-size: 14.5px;
  font-weight: 400;
  text-align: left;
}
.cl-pricing03__row td {
  font-size: 14px;
}
.cl-pricing03__row:hover th,
.cl-pricing03__row:hover td {
  background: #f7f9f8;
}
.cl-pricing03__row td.cl-pricing03__pop,
.cl-pricing03__row:hover td.cl-pricing03__pop {
  background: var(--cl-pricing03-tint);
}

@media (max-width: 720px) {
  /* card 20px 12px / radius 16, colf 37%, thead 12 6 10, plan 14, price 20,
                               per + cta display:none, rows 11 6, th 13.5, td 12.5 + overflow-wrap:anywhere */
}
```

Behaviour, complete (`js/snippet.js`):

```js
const setGroup = (group, open) => {
  const btn = group.querySelector('.…__toggle')
  btn.setAttribute('aria-expanded', open ? 'true' : 'false')
  group.querySelectorAll('.…__row').forEach((row) => {
    row.hidden = !open
  })
}
// per-toggle click → setGroup(group, current !== 'true')
// both bulk buttons → data-expand="true|false" → setGroup on every group
// at init only: if (matchMedia('(max-width: 720px)').matches) groups.forEach((g, i) => setGroup(g, i === 0));
```

## 4. Screenshot read

1200 × 972, **AVIF** inside a `.jpg`, macOS mock-up on a grey surround, page ≈ 1140 px wide (≈ 0.79 scale). What it
actually establishes:

- the card's **white-on-cool-grey** isolation and its 20 px radius; the shadow is soft and wide, not a card edge;
- the **left-aligned** head — eyebrow, big `h1`, one lede line, then the two small ghost buttons sitting **left**, not
  centred (this is the family's only left-aligned head — `ratecard` and `tallyboard` are both centred);
- the plan header row is **bottom-aligned**: the `$0/$12/$24` prices line up on one baseline while the corner note
  hangs at the very bottom of the same row;
- the **Popular** pill sits _inside_ the tinted cell, above the plan name, with the tint's 14 px rounded top corners
  visible on both sides — the tint reads as a **column**, not as a card;
- tick = filled teal circle with a white check; cross = thin grey ×, no circle;
- the group rows are **full-width text rows** with a count and a right-aligned chevron — they look like accordion
  headers, not like table rows;
- everything below _Reporting_'s header is cut off, so the screenshot cannot tell you the page height.

Do not adopt: the window chrome, the drop shadow around the mock-up, the grey surround.

## 5. Prescribed copy (use verbatim; it reproduces the whole ladder)

Product: **Parity** (the app name). The reference's own copy says _Tallyboard_ — the app name of the previous variant in
this family — and must not survive into the port.

| Slot          | String                                                                                                            |
| ------------- | ----------------------------------------------------------------------------------------------------------------- |
| eyebrow       | `Compare plans`                                                                                                   |
| h1            | `Every Parity feature, side by side`                                                                              |
| lede          | `Plan headers stay pinned while you scroll. Collapse a group to skip past it.`                                    |
| tools         | `Expand all` / `Collapse all`                                                                                     |
| corner note   | `Prices in USD. Annual billing saves 16%.` → **prefer** `Prices in USD, per user, billed monthly.` (see delta 10) |
| caption       | `Parity plan comparison: Basic, Team and Business`                                                                |
| plan Basic    | `Basic` · `$0` · `free for 3 users` · `Sign up`                                                                   |
| plan Team     | `Popular` · `Team` · `$12` · `per user / month` · `Start trial`                                                   |
| plan Business | `Business` · `$24` · `per user / month` · `Start trial`                                                           |

### The data matrix (17 rows, verbatim — ✓ tick, × cross, value as shown)

|   # | Group              | Feature                   | Basic         | Team        | Business         |
| --: | ------------------ | ------------------------- | ------------- | ----------- | ---------------- |
|   1 | Projects and tasks | Projects                  | 5             | Unlimited   | Unlimited        |
|   2 |                    | Task lists and boards     | ✓             | ✓           | ✓                |
|   3 |                    | Timeline and Gantt view   | ×             | ✓           | ✓                |
|   4 |                    | Recurring tasks           | ×             | ✓           | ✓                |
|   5 |                    | Custom fields             | 3 per project | Unlimited   | Unlimited        |
|   6 | Collaboration      | Guests                    | ×             | 10          | Unlimited        |
|   7 |                    | File storage              | 2 GB          | 100 GB      | 1 TB             |
|   8 |                    | Comments and mentions     | ✓             | ✓           | ✓                |
|   9 |                    | Proofing and approvals    | ×             | ×           | ✓                |
|  10 | Reporting          | Workload view             | ×             | ✓           | ✓                |
|  11 |                    | Time tracking             | ×             | ✓           | ✓                |
|  12 |                    | Portfolio dashboards      | ×             | ×           | ✓                |
|  13 |                    | Scheduled PDF reports     | ×             | ×           | ✓                |
|  14 | Security and admin | Two-factor authentication | ✓             | ✓           | ✓                |
|  15 |                    | SAML single sign-on       | ×             | ×           | ✓                |
|  16 |                    | Audit log                 | ×             | ×           | 1-year retention |
|  17 |                    | Support                   | Help centre   | Email, 24 h | Priority chat    |

Counts to assert: Basic **3 ✓ / 10 × / 4 values**, Team **7 / 5 / 5**, Business **11 / 0 / 6** → 21 ticks, 15 crosses,
15 value cells. Note rows 2, 14 and 8 are all-tick rows and row 9 is a cross-cross-tick row; they exist to keep the
tinted column readable when three ticks run side by side.

## 6. Section-by-section fidelity notes

**Main / card.** `padding: clamp(36px, 6vw, 80px) 16px` — the `6vw` only binds between 600 and 1334, so 1440 sits at
the 80 px cap and the whole page's top offset is a clamp artefact, not a design constant. The card's `max-width: 1080`
is a **content** width (no `box-sizing` on the card itself; only its subtree gets `border-box`). That single missing
declaration is the difference between a 1176 card and a 1080 card — see spec delta 2.

**Head.** Left-aligned on a 1080 content box. `h1` margin `8 0 8`, `clamp(26px,3.6vw,38px)`, `-.02em` → **43.69** at
1440 and **29.89** from 721 down (26 px floor). The eyebrow is 13/700 with `.06em` uppercase and the accent — the only
letter-spaced text in the body.

**Toolbar.** Two ghost buttons with a **1.25 : 1** border; the reference relies on the shadow and the label alone. Keep
the geometry, fix the border colour (spec delta 13). The buttons never disable themselves: after "Collapse all",
"Collapse all" is a no-op and still looks active. That is the reference; a port may disable both appropriately, but if
it does, say so.

**Table.** `table-layout: fixed` with a 34 % first column is what stops the feature names from widening the table and
what keeps all 17 rows at one height on desktop. `border-collapse: separate` is required for two independent reasons:
sticky cells keep their own 1 px bottom rule, and the featured header's 14 px top radius renders at all. The `<col>`
remainder splits as 237.59 / 237.59 / **237.63** — a 0.04 px asymmetry that no one can see and that equality
assertions will trip on.

**Sticky header.** Engages at scrollY **315.94** (the table's top) and never releases: at the maximum scroll (804) the
table's bottom is still at 772.44, so the header is pinned over live rows for the entire page. It is **193.75 px**
tall — 21.5 % of a 900 px viewport — and it is **96 %** opaque, so rows ghost through it by 4 %; the `blur(6px)` inside
`@supports` is what hides that in practice.

**Plan header cells.** Bottom-aligned with `padding: 18 14 16`. The pill is `display: inline-block`, so it sits in its
own line box inside the cell's 22.5 px strut — the box is 21.25 but the line is ≈ 23.25, which is why the row adds up
to 193.75 rather than 191.75. A port that converts the pill to a flex item will lose 2 px off the header row and 2 px
off 20 downstream numbers.

**Featured column.** Fill only: `#f0faf8` header (radius 14 14 0 0) and `#effaf8` body (square bottom). The two tints
differ by one value in blue — visible as a faint step where the header meets row 1. Keep both or unify; do not
accidentally give the body cells the header's tint _and_ a radius (the reference has neither).

**Group heads.** The toggle is a full-width flex row with `padding: 26px 14px 10px` — the 26 px top padding is what
gives the groups their airiness, the 10 px bottom keeps the rule close. Counts are static strings ("5 features"), never
recomputed. The chevron rotates **−90°** when collapsed (pointing right), not 180°.

**Rows.** 48.75 on desktop; the featured `td` keeps its tint on hover, which is the one rule that out-specifies the row
hover. `overflow-wrap: anywhere` appears **only** inside the ≤ 720 block, which is why the desktop table never breaks a
value mid-word and why `1-year retention` (111.23 px of text in a 111.0 px cell at 721) is the tightest row on the
page.

**Mobile step at 720.** Four independent changes land on one query: card padding + radius, `colf` 34 → 37 %, the
header's type and padding, and the removal of `__per` + `__cta`. The table gets **32.66 px wider** at the narrower
viewport because the card's horizontal padding drops 28.84 → 12, and the page gets **232 px shorter** because the
header loses 97 px and 17 rows lose 5.5 px each. The loss of the CTAs is the variant's real defect.

**Motion.** Three transitions, zero keyframes: the chevron's transform, the CTA's colour and background. The
`prefers-reduced-motion` block kills exactly those three.

## 7. Source → React adaptation table

| Source                                               | React / Tailwind port                                                                                                                    |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `:where(html) … { all: revert }` firewall (30 rules) | delete; preflight already does it — but keep `border-collapse: separate`, explicit `text-align: left` on `th`, and the hidden-label clip |
| `max-width: 1080px` on a content-box card            | `max-width: calc(1080px + 2 * var(--pad))` under `border-box`                                                                            |
| 8 `@font-face` over 2 variable binaries              | one Google `css2` link, **ASCII subset only** (`U+0000-00FF`), weights 400–700                                                           |
| `--cl-pricing03-*` on the section class              | `@theme` tokens (`--color-accent`, `--color-tint`, …)                                                                                    |
| `row.hidden = !open`                                 | `hidden={!open}` on each `<tr>`; rows stay mounted                                                                                       |
| `matchMedia` at init                                 | one read at mount, no listener (reproduce the reference)                                                                                 |
| `data-expand="true                                   | false"` on two buttons                                                                                                                   | two `onClick` setters over `Record<GroupId, boolean>` |
| `<svg>` chevron with `stroke="currentColor"`         | `lucide-react`'s `ChevronDown` at `size={18}` (identical geometry)                                                                       |
| tick: `circle r=10` + white 2 px path                | inline `<svg>` — not a lucide glyph (lucide's `CheckCircle2` is an outline)                                                              |
| cross: two 2 px strokes                              | `lucide-react`'s `X` at `size={20} strokeWidth={2}`, colour `--color-cross`                                                              |
| three `href="#"` CTAs                                | `https://www.componentdock.com/` (house pattern)                                                                                         |
| no footer                                            | one Component Dock strip on the same ground                                                                                              |

## 8. Sibling comparison (the `pricing-table` family)

| Variant | App                        | Device                                                                                               | Height at 1440 | Status           |
| ------- | -------------------------- | ---------------------------------------------------------------------------------------------------- | -------------: | ---------------- |
| 1       | `ratecard` (`6211c30be`)   | four cards, featured = **2 px ring + `-16px` offset + straddling pill**                              |           1120 | prepped, unbuilt |
| 2       | `tallyboard` (`d7c78c0c0`) | four cards + **monthly/annual switch with a 600 ms count-up**; featured = **fill only**, flag inside |            919 | prepped, unbuilt |
| **3**   | **`parity`** (this prep)   | **a real `<table>`**: sticky plan header, 4 collapsible `<tbody>`s, 17 rows, **no cards at all**     |       **1704** | prepped          |
| 6       | —                          | (4,550 B — live, unread)                                                                             |              — | not prepped      |
| 12      | —                          | (6,683 B — live, unread)                                                                             |              — | not prepped      |

Two things do **not** carry across the family: the featured-card treatment (three variants, three devices) and the
height (919 → 1120 → **1704** — this one is nearly twice either sibling because it is a 17-row matrix, not a card row).
What does carry: the teal-on-white accent band, the fill-only "pop" tint idea, and the 3 px accent focus ring with a
2 px offset.

## 9. Measurement notes (how these numbers were taken)

- Preview fetched with `curl -4` (the host's IPv6 is blocked for `colorlib.com`; the preview host answers either way
  but `-4` is the house rule).
- Chromium via node Playwright (`/root/free-templates-firebase/node_modules/playwright`), 1440 × 900, after
  `document.fonts.ready` + 400 ms.
- Screenshot: `curl` → `file` reads **AVIF** → `PIL.Image.open(...).convert('RGB').save('png')` before viewing.
- **Port replica**: the reference's own `style.css` with the eight `@font-face` blocks replaced by two Google faces
  (`font-weight: 100 900`, latin + latin-ext) and `Tallyboard` → `Parity` in the markup, served over
  `python3 -m http.server` on `127.0.0.1` (file:// font loading is unreliable). Every "port" number in the spec was
  read off that page, not computed.
- Font sanity: `CSS.getPlatformFontsForNode` on `.cl-pricing03__title` must return only
  `IBM Plex Sans / IBMPlexSans-Regular / isCustomFont: true`. The first replica attempt returned **26 of 34 glyphs from
  DejaVu Sans** because the `@font-face` pointed at Google's **cyrillic-ext** file — the ASCII subset is the one whose
  `unicode-range` starts `U+0000-00FF`. That mistake inflated every width by 3–20 % **in the wrong direction** and
  `document.fonts.check()` still answered `true`.
- Contrast computed from sRGB relative luminance (WCAG 2.2 formula), not sampled from screenshots.

## 10. Port verification (2026-11-12, `apps/parity`)

Measured on the built app (`vite build`, `python3 -m http.server`, Chromium 1440 × 900, after `document.fonts.ready` +
300 ms). Every reading below is the **port's**, taken from `getBoundingClientRect`; the spec's table is above.

| Reading                          |                                             Spec (port) |                                                                           Port as built |
| -------------------------------- | ------------------------------------------------------: | --------------------------------------------------------------------------------------: |
| `main`                           |                             1440 × 1704.44, pad `80 16` |                                                         **1440 × 1704.44**, pad `80 16` |
| card                             |                             1176 × 1544.44 at (132, 80) |                                                         **1176 × 1544.44** at (132, 80) |
| head                             |                             1080 × 155.94 at (180, 128) |                                                         **1080 × 155.94** at (180, 128) |
| toolbar buttons                  |                                97 × 36.25 / 105 × 36.25 |                                                              **97 / 105**, height 36.25 |
| table                            |                          1080 × 1260.5 at (180, 315.94) |                                                      **1080 × 1260.5** at (180, 315.94) |
| columns                          |                       367.19 / 237.59 / 237.59 / 237.63 |                                                   **367.19 / 237.59 / 237.59 / 237.63** |
| thead row                        |                                                  193.75 |                                                                              **193.75** |
| pill                             |                       64.63 × 21.25 at (798.78, 334.94) |                                                   **64.63 × 21.25** at (798.78, 334.94) |
| plan / price / per / CTA         | 25.5 @362.19 · 34.5 @389.69 · 19.5 @424.19 · 37 @455.69 |  **identical** (Basic's CTA is **82** wide — its label is `Sign up`, not `Start trial`) |
| group 1 head                     |                          59.5 (toggle 58.5) at y 509.69 |                                                             **59.5 / 58.5** at y 509.69 |
| rows                             |                                                   48.75 |                                                                               **48.75** |
| groups                           |                          303.25 / 254.5 / 254.5 / 254.5 |                                                      **303.25 / 254.5 / 254.5 / 254.5** |
| sticky at scroll 200 / 400 / 804 |                                          115.94 / 0 / 0 |                                                                      **115.94 / 0 / 0** |
| collapse g1                      |                                                    −243 |                                                              **−244** (243.75, rounded) |
| collapse all                     |                      doc → viewport floor, table 431.75 |                                     **919** = 900 floor + 43.5 footer; table **431.75** |
| fresh load at 390                |                                   doc 923, table 584.75 | doc **1071**, table **584.75** — the **+104.5** is the phone CTA block (delta 8, below) |
| resize 1440 → 390                |                            all four stay open, doc 1598 |                                                          **all four open, doc 1598.28** |
| height ladder 1280…721           |                                             1698 … 1579 |                                                          **1698.03 … 1578.8** (≤0.4 px) |
| 721 → 720 inversion              |                                      table 631.34 → 664 |                                                               **631.34 → 664** (+32.66) |
| horizontal overflow              |                                        0 at every width |                                        **0 at all 26 probed widths**, `scrollX` stays 0 |
| fonts                            |             `IBMPlexSans-Regular`, `isCustomFont: true` |                            **confirmed via `CSS.getPlatformFontsForNode`** on `.pt-cta` |

Deltas this port carries on purpose (all in the PR body):

1. **Phone CTA block** (spec delta 8): three anchors below the table, rendered only on a page that loaded ≤ 720. At 390
   they wrap to two rows, which is the **+104.5** in the mobile ladder above. The desktop ladder is untouched.
2. **`Sign up` CTA is 82 wide**, not 97: the reference's 97 was measured on `Start trial`. Same padding, shorter label.
3. **Mobile row seam**: `Task lists and boards` takes its third line at 390 (63.5) rather than at 389 (60.5) — a
   **1 px** column-width seam, and the spec's own note says to assert row heights rather than copy.
4. The two contrast repairs are in (`cross` `#6b7a76`, `control-line` `#8a9793`), so the toolbar's border is visibly
   darker than the reference's and the crosses are darker than the reference's.
