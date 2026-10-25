# Chalkline (ColorLib Cairn) — Tasks & Design Notes

Prep created 2026-10-25 by the prep stream. It writes **no** app code, touches no
shared file and does not claim a row. Spec lives at
`openspec/specs/template-chalkline/spec.md`; this file is the implementer's
starting brief.

## Identity

| field | value |
| --- | --- |
| New name | **chalkline** — one lowercase word (`apps/chalkline`, `@free-react-templates/chalkline`) |
| Source design | ColorLib **Cairn** (`cairn`), an open-source LMS marketing site |
| ColorLib page | https://colorlib.com/wp/template/cairn/ |
| Live preview | https://preview.colorlib.com/theme/cairn/ (HTTP 200, 110,581 B, `<title>` "Home \| Cairn") |
| Stylesheet | `_astro/Base.5bEd7vXR.css` (64,383 B, sha256 `f430857b…c1167e`) — Astro + Tailwind 4 |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/cairn-template.jpg (JPEG, 2400×1892) |
| Deploy target | `chalkline.free.componentdock.com` |
| Design category | Education / LMS — SaaS marketing landing (single page) |
| Row status | **no `TEMPLATES.md` row** — `grep -c 'wp/template/cairn/'` = 0; see `docs/catalog-coverage.md` |
| Why not `cairn` | `apps/cairn` + `openspec/specs/template-cairn/` already recreate ColorLib **Bootstrap Footer 05** |

### Row to paste (only if the batch decision lands before the PR)

```
- [~] **Cairn** — [colorlib](https://colorlib.com/wp/template/cairn/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/cairn-template.jpg) · [chalkline](https://chalkline.free.componentdock.com)
```

One row, not two. Flip to `[x]` with the subdomain after the merge.

## Structure (1:1, DOM order, measured 1440×900, doc ≈10,776 px)

| # | band | anchor | height | one-line job |
| ---: | --- | --- | ---: | --- |
| 0 | header | — | 81 | sticky translucent bar, 8 labels + filled CTA, drawer below `lg` |
| 1 | hero | — | 1,405 | badge → two-line gradient headline → lead → 3 CTAs → 4 stats → framed photo |
| 2 | counters | — | 238 | 90 / 400 / 31 / 99 counted up in teal on `gray-50` |
| 3 | roles | `#roles` | 1,516 | four role cards, then the 3-group capability matrix + legend |
| 4 | gradebook | `#gradebook` | 1,068 | toolbar card, 7 learners × 6 assessments + Final band pills |
| 5 | standards | `#standards` | 1,990 | 14 standards in 3 groups, status chips (Certified/Supported/Partial/Roadmap) |
| 6 | migration | `#migration` | 1,476 | 9-row Item × Moodle/Canvas/Blackboard table + 4-stage `<ol>` |
| 7 | pricing | `#pricing` | 1,110 | 3 tiers, middle ringed + "Most chosen" ribbon, checks/crosses |
| 8 | FAQ | `#faq` | 929 | 6 independent toggles, +/− control, 300 ms max-height |
| 9 | CTA | `#contact` | 452 | teal gradient + orbs + dot grid, white type, 2 CTAs |
| 10 | footer | — | 511 | brand / Platform / Cooperative / Legal / Stay Updated + bottom bar |

## Task list (TDD order — tests first, per AGENTS.md rule 3)

Copy the simplest existing single-page app (e.g. `apps/manorly` or
`apps/thermly`) as the skeleton, rename the package, then:

1. **Scaffold** — `apps/chalkline` package `@free-react-templates/chalkline`,
   `homepage` + `public/CNAME` = `chalkline.free.componentdock.com`; Outfit +
   JetBrains Mono via Google Fonts `<link>`; `@theme` tokens for the two ramps.
2. **Tokens test** — a unit test that asserts the `@theme` custom properties
   (`--color-primary-600: #188082`, `--color-accent-500: #f45c38`, font stacks)
   so a palette typo fails CI, not review.
3. **Shell** — `Header` (sticky, `white/80`, blur, skip link), `main#main-content`,
   scroll-progress bar, `Footer`. Test: 11 landmarks in order, one `h1`.
4. **Hero** — badge with ping dot, `h1` with `<span>` gradient line, three CTAs,
   four stats, framed `<img>` placeholder. Test: typewriter cycles and settles on
   phrase 1; reduced-motion renders statically; both CTAs are links, play button
   is a `<button>`.
5. **Counters** — `useCountUp` hook (IntersectionObserver + rAF). Test: renders
   final values with `reduce`, animates with `mock` timers otherwise.
6. **Roles + matrix** — data-driven cards array and a `capabilities` array
   (capability, per-role cell type: `full | scoped(label) | none`) rendered as a
   table. Test: 4 cards, 3 group headers, cell states, `sr-only` text.
7. **Gradebook** — fixture of 7 learners × 6 components + final; pure
   `bandFor(mean, hasMissing)` helper returns
   `distinction | merit | pass | atRisk | incomplete`. Test the helper against the
   seven real rows (87.0 → Distinction, 75.9 → Merit, 59.0 → Pass, 46.7 → At risk,
   67.6 with a missing MID → Incomplete) and the cell colour rule.
8. **Standards** — 14-row data array grouped in 3; chip variant map. Test: counts
   per status (5/7/1/1) and that no chip falls back to a default colour.
9. **Migration** — 9-row comparison data + 4 stages in an `<ol>`. Test: order,
   `Rebuild` styling, stage durations.
10. **Pricing** — 3 plans, features with `included: boolean`, ribbon on the middle
    plan only, equal-height list flex. Test: ribbon appears once; CTA variants
    differ between middle and sides.
11. **FAQ** — accordion with independent state; `aria-expanded`, `aria-controls`,
    +/− icon swap; keyboard activation. Test: two rows open at once.
12. **CTA + footer** — gradient band, two CTAs, 5-column footer, newsletter with
    local success state (no network). Test: submit shows confirmation and clears.
13. **Gates** — `scripts/verify-app.sh chalkline` (typecheck, lint, 100 %
    coverage, build), then `openspec validate template-chalkline --type spec`.
14. **Ship** — PR (title carries the row if one was added), squash-merge, then the
    `[x]` flip and the surge URL.

## Fidelity notes (the things that are easy to get wrong)

- **Two ramps, one accent.** Teal carries structure (chips, counters, checks,
  bands); coral carries *trouble and emphasis* (scores < 50, "At risk",
  "Rebuild", the "Most chosen" ribbon, the accent meta labels in the roles band,
  the migration band's chip). Do not tint buttons with accent.
- **Hero CTA is `primary-700`, not `primary-600`.** `#186769` with
  `shadow-lg shadow-primary-900/20`. The pricing middle CTA *is* `primary-600`.
- **Headline gradient is text-clipped**, `#188082 → #3bbcbc`, left to right.
  Keep the full phrase in the DOM on the first paint so tests and screen readers
  never see an empty span.
- **Mono is not decoration**: every eyebrow chip, table label, score, price unit,
  duration and "who does it" line is JetBrains Mono. Numbers in tables use
  `tabular-nums`.
- **The gradebook is a real table**, sticky first column, sideways scroll with a
  visible hint below `lg`. Missing submissions are em dashes, not blanks — the
  copy says so explicitly.
- **Alternating grounds**: white / `gray-50` with `border-y gray-200` only on the
  tinted bands (counters, gradebook, migration). Padding `py-20 lg:py-28`
  everywhere except the counter band (`py-16 lg:py-20`).
- **Equal card heights** in pricing and in the stage row; the source uses flex
  column + `flex-1` blurbs, not fixed heights.
- **Accordion is independent**, not single-open. That detail is visible when you
  click two rows.
- **Tables must not collapse on mobile** — they scroll. Collapsing them is the
  most common way this design gets rebuilt wrong.

## Deltas from the source (document in the PR)

1. **Light theme only.** The source ships `dark:` variants for every band
   (`gray-950/900` grounds). The recreation targets the light design; no theme
   toggle, no `prefers-color-scheme` branch.
2. **No preloader.** The source shows a full-screen spinner until its Astro
   islands hydrate; a Vite SPA paints immediately, so the preloader is dropped
   (the scroll-progress bar and skip link are kept).
3. **No cookie-consent banner.** Nothing is tracked, so the source's
   "Decline / Accept All" bar is not reproduced.
4. **Inner pages are out of scope.** Source links `/about`, `/blog`, `/pricing`,
   `/contact`, `/privacy`, `/terms`, `/elements`. The single-page build maps the
   five section labels to anchors, drops About/Notes, and keeps one CTA target
   (`#contact`).
5. **Video is a modal-free affordance.** The source's "Watch the 4-minute tour"
   opens a YouTube embed (its own preview ships a placeholder video id). Keep the
   button, drop the third-party embed, and show a local poster/dialog instead.
6. **Logo and hero photograph are placeholders** — a text wordmark, `lucide-react`
   marks, and `picsum.photos/seed/chalkline-<n>/…`. No source asset is copied.
7. **Copy is paraphrased** at the same length and register (numbers, standard
   names and stage names kept, because they are the design's content).

## Copy

Keep the *kind* of content, not the source sentences:

- hero: badge line, two-line claim, 2-sentence subclaim, primary + secondary CTA,
  play-link label, four stat pairs
- roles: eyebrow, headline, lead, 4 × (meta label, role name, blurb), matrix, legend
- gradebook: course line, cohort/meta line, 2 chips, 7 column heads with weights,
  7 learner rows (name, group, 6 scores, band), 3 legend items
- standards: eyebrow, headline, lead, 3 group titles + blurbs, 14 × (code, name,
  description, status), footnote
- migration: eyebrow, headline, lead, 9 comparison rows, legend, 4 × (stage,
  duration, title, blurb, who), median footnote
- pricing: eyebrow, headline, lead, 3 × (plan, claim, price, unit, note, feature
  list, CTA), ribbon label
- FAQ: eyebrow, headline, lead, 6 × (question, 2–4 sentence answer)
- CTA: headline, subline, two CTA labels
- footer: blurb, 3 socials, email, licence line, 3 link columns, newsletter label
  + blurb + placeholder + button, bottom bar
