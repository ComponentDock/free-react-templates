# Flowcert — Tasks

**Status: implemented 2026-10-25** — `apps/flowcert` ships 77 tests at 100% lines/functions/branches/
statements, the reference re-read live (HTTP 200, 74,502 B, identical h2 order and section ids) and
`scripts/verify-app.sh flowcert` green. Deployment is automatic on merge.

Recreation of ColorLib **"Backstop"** (https://colorlib.com/wp/template/backstop/) as a React 19 +
Vite + Tailwind 4 + TypeScript app under the name **Flowcert** (`apps/flowcert`).

> **No `TEMPLATES.md` row exists for this design yet.** The catalogue is incomplete (see
> `docs/catalog-coverage.md`): `backstop` is one of the 35 standalone designs on
> https://colorlib.com/wp/templates/ that the checklist never listed. Add the row under
> `## Business (365)` *before* opening the PR — the exact line is in the spec, §Purpose.

## Pre-flight (done by the prep stream, 2026-10-24)

- [x] Replication: live preview read (`curl -4`, HTTP 200, 74,502 B, title
      `Backflow testing in Omaha, fixed price and filed the same day | Backstop Backflow`)
- [x] Token sheet measured (`_astro/Base.DGmaIQ3L.css`, 54,746 B, sha256 `669d475db003541d…`) —
      `primary` 50/100/200/300/400/500/600/700/800/900, `ink` 50–900, stock grays below the fold
- [x] Fonts identified: Inter 400/500/600/700/800 + JetBrains Mono 500/700, `@font-face` in an inline
      `<style>` block pointing at the preview's `/cf-fonts`; both faces probed on Google Fonts (200)
- [x] Screenshot read (`backstop-template.jpg`, real JPEG 333,718 B, 2400×1892 — licence strip,
      header, hero, first steps only; the eight lower bands were read from the DOM + sheet)
- [x] Structure extracted from the DOM: `header` + 10 `<section>`s + `footer`; 4 steps, 6 prices,
      6 services, 4 rationale items, 12 towns, 3 reviews, 5 FAQs, 6 quick-book options
- [x] Behaviour read from the kit script (`Base.…BLoalVWc.js`, 16,233 B): exclusive FAQ accordion,
      5 s carousel autoplay with pause-on-hover, mobile disclosure, sticky-header shadow at 50 px,
      scroll-progress, back-to-top at 300 px, cookie strip, IntersectionObserver reveals
- [x] Link census: 41 anchors — 8 live inner routes (all 308→200), 2 dead `#service-areas` fragments,
      3 dead `#` socials, 1 malformed `tel:` URI (recorded as reference defects, not reproduced)
- [x] Name check: `flowcert` free in `apps/`, `openspec/specs/`, `docs/templates/`,
      `git grep -i flowcert origin/main` → empty; all three ColorLib URL forms → 404
- [x] Spec: `openspec/specs/template-flowcert/spec.md`
- [x] Design notes: `docs/templates/flowcert/design-notes.md`

## Scaffold

- [x] Copy the single-app scaffold (`package.json`, `vite.config.ts` with `injectUiSource()`,
      `vitest.config.ts`, `tsconfig.json`, `index.html`, `src/main.tsx`, `src/test/setup.ts`,
      `public/CNAME`)
- [x] `npm install` at the repo root so `package-lock.json` registers the workspace
- [x] `homepage` = `https://flowcert.free.componentdock.com`, `public/CNAME` = same host
- [x] `index.html`: `<title>Flowcert — backflow testing, priced and filed</title>`, meta description,
      Inter + JetBrains Mono `<link>` (`family=Inter:wght@400;500;600;700;800` and
      `family=JetBrains+Mono:wght@500;700`)
- [x] `src/index.css`: `@theme` with the `primary` ramp (`50 #eef4ff`, `100 #dce7fd`, `200 #bfd3fc`,
      `300 #94b5f9`, `400 #628ef3`, `500 #3f6be8`, `600 #2d4fd0`, `700 #263fa8`) and the `ink` ramp
      (`50 #f6f7f9`, `100 #eceef2`, `200 #d8dce4`, `300 #b0b7c6`, `400 #818b9f`, `500 #606a7e`,
      `600 #475061`, `700 #373e4b`, `800 #242932`, `900 #161a20`); radii `lg .5rem` / `xl .75rem` /
      `2xl 1rem`; shadows `card 0 4px 16px -4px #0000001a` and `btn 0 10px 15px -3px #2d4fd040, 0 4px
      6px -4px #2d4fd040`
- [x] `src/data/` typed tables: `steps` (4), `prices` (6), `services` (6), `reasons` (4), `towns` (12),
      `reviews` (3), `faqs` (5), `reasons-for-booking` (6 select options)

## Sections (tests first, reference order)

- [x] **Licence strip** — three label/value pairs, `4.9` + amber star + `380+ reviews`, hidden
      secondary items below `sm`
- [x] **Header** — sticky blurred white, lockup, six links (`#process`, `#pricing`, `#services`,
      `#areas`, `#why-us`, `#contact`), location pill, well-formed `tel:` link, solid CTA; nav on at
      `xl`, city pill at `2xl`; disclosure below `xl` with `aria-expanded` + close on navigate
- [x] **Hero** — eyebrow, two-tone `h1`, lede, rating line, four ticks; card in `lg:col-span-5`
- [x] **Quick-book card** — name / phone / select (placeholder + 6 options), inline demo confirmation,
      no navigation; empty submit blocked
- [x] **Explainer** — `<ol>` of 4, ordinals `01`–`04`, `aria-hidden` rules, blue micro-links
- [x] **Price list** — one hairline block of 6 cells (`gap-px` on `bg-ink-100`), price lines, footnote
- [x] **Why-us** — 4:3 figure + caption, `<dl>` of 4 items with 2 px `primary-600` left borders
- [x] **Services** — same block component as pricing, 6 cells, `Free` on the reminder
- [x] **Coverage** — 12 towns, bordered rows, 2→3 columns, replace-the-list note
- [x] **Reviews** — 3 cards, five labelled stars, initial avatars, carousel with 3/2/1 per view,
      dots, `lg` arrows, 5 s autoplay with pause-on-hover
- [x] **FAQ** — 5 rows, exclusive expansion, `aria-expanded`, `+` rotating 45°
- [x] **Closing band** — `#263fa8`, white solid CTA + 2 px white/40 outline `tel:` CTA
- [x] **Footer** — brand block (3 social tiles, address, phone, email), `Services` 4 / `Company` 4 /
      `Support` 3, `Stay Updated` newsletter with inline confirmation, legal bar with the
      `Component Dock` link to `https://www.componentdock.com/`
- [x] **Chrome** — skip link first, scroll-progress bar, back-to-top past 300 px, cookie strip
      (component state), reveal hook that never traps content under reduced motion

## Polish and gates

- [x] Shared `HairlineGrid` component reused by pricing + services (no duplicated markup)
- [x] `useReveal` hook: no `setState` in an effect, resolves visible without `IntersectionObserver`
- [x] Carousel: fake timers in tests, arrows hidden when the track has one position, `aria-label`s on
      dots and arrows
- [x] Contrast: `#263fa8` band with white text (≥ 4.5:1), `primary-700` price lines on white
      (≥ 4.5:1), `ink-400` fine print checked against its own ground
- [x] No ColorLib / "Backstop" / "backstopbackflow" string anywhere under `apps/flowcert`; images (if
      any) `https://picsum.photos/seed/flowcert-<n>/…`; no copied SVG, font file or stylesheet
- [x] `npx tsc --noEmit`, `npm run lint`, `npm run test:coverage --workspace
      @free-react-templates/flowcert` (100%), `npm run build --workspace
      @free-react-templates/flowcert`, `scripts/verify-app.sh flowcert`
- [x] Row added under `## Business (365)` as `[~]`, then flipped to `[x]` with the surge URL +
      `npm run readme:status` bookkeeping commit
- [x] Footer links `https://www.componentdock.com/` as "Component Dock"

## Deploy

- [ ] `gh workflow run deploy-surge.yml -f app="flowcert"` (or let deploy-on-merge fire)
- [ ] `curl -sSI https://flowcert.free.componentdock.com | head -1` → `HTTP/2 200`,
      `--resolve` probe passes `ssl_verify_result=0`
