# Thermly — Tasks

Recreation of ColorLib **"Airwise"** (https://colorlib.com/wp/template/airwise/) as a React 19 +
Vite + Tailwind 4 + TypeScript app under the name **Thermly** (`apps/thermly`).

> **No `TEMPLATES.md` row exists for this design yet.** The catalogue is incomplete (see
> `docs/catalog-coverage.md`): `airwise` is one of 35 standalone designs on
> https://colorlib.com/wp/templates/ that `TEMPLATES.md` never listed. Add the row under
> `## Business (365)` *before* opening the PR — the row line is in the spec, §Purpose.

## Pre-flight (done by the prep stream, 2026-10-24)

- [x] Replication: live preview read (`curl -4`, HTTP 200, 94,591 B, title
      `HVAC repair and installation in Fresno, booked by the hour | Airwise Heating & Air`)
- [x] Token sheet measured (`_astro/Base.C_WkB4-N.css`, 60,585 B, sha256 `be1904cfd3e7ff18…`)
- [x] Screenshot read (`airwise-template.jpg`, AVIF 79,408 B, decoded 2400×1892) **plus** a Playwright
      full-page render (1440 × 7,459) for the eight bands the screenshot does not show
- [x] Structure extracted from the DOM: 10 `<section>` bands, 12 service cards with prices, 5 FAQ
      rows, 3 plans, 3 reviews, 16 towns, booking widget with a taken-slot table
- [x] Behaviour read from the four inline scripts: season default by month, day chips re-dated from
      `new Date()`, taken windows disabled, summary + confirmation strings, FAQ rows independent
- [x] Name check: `thermly` free in `apps/`, `openspec/specs/`, `docs/templates/`, `TEMPLATES.md`
- [x] Spec: `openspec/specs/template-thermly/spec.md`
- [x] Design notes: `docs/templates/thermly/design-notes.md`

## Scaffold

- [ ] Copy the single-app scaffold (`package.json`, `vite.config.ts` with `injectUiSource()`,
      `vitest.config.ts`, `tsconfig.json`, `index.html`, `src/main.tsx`, `src/test/setup.ts`,
      `public/CNAME`)
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace
- [ ] `homepage` = `https://thermly.free.componentdock.com`, `public/CNAME` = same host
- [ ] `index.html`: `<title>Thermly — heating, cooling and air quality</title>`, meta description,
      Plus Jakarta Sans `<link>` (400/500/600/700/800)
- [ ] `src/index.css`: `@theme` with the `primary` ramp (`50 #effafa`, `100 #d6f2f2`, `200 #aae4e5`,
      `400 #3eb2b5`, `500 #22979b`, `600 #187e83`, `700 #156669`, `800 #145256`), the `heat` ramp
      (`600 #a9691a`, `700 #8a5517`), and the `ink` ramp (`50 #f5f7f8`, `100 #e8ecee`, `200 #ced6d9`,
      `400 #6e8085`, `500 #4d5e63`, `600 #334347`, `700 #243134`, `800 #182225`, `900 #0f1719`)

## Sections (tests first, reference order)

- [ ] `Header` — sticky blurred white bar, mark + `Thermly`, six in-page links, location, `tel:` link,
      `Book a visit` CTA, mobile disclosure with `aria-expanded`
- [ ] `Hero` — `ink-50` split: eyebrow pill, `h1 Pick your arrival window right now.`, lede, `4.8`
      rating line, four ticks; booking card in the right column at `lg`
- [ ] `BookingWidget` — 5 service pills, 7 day chips re-dated from an **injected** `today`, 4 windows
      with the demo taken-slot table, name/phone/address, live summary, confirmation region
- [ ] `SeasonServices` — month-injected default (heating Oct–Mar, else cooling), `Cooling`/`Heating`
      `aria-pressed` pills, 6 cards per season in a 3 × 2 hairline-divided grid, price lines with the
      seasonal accent (`primary-700` / `heat-700`), sample-data footnote
- [ ] `WhyWindow` — photo left (alt text), eyebrow, h2 `The appointment is the product`, lede, four
      reason blocks
- [ ] `Process` — `01`/`02`/`03` steps with duration notes on white
- [ ] `Plans` — three cards `$14` / `$24` / `$39`, middle emphasised + `Most chosen`, feature ticks,
      CTAs, illustrative-pricing footnote
- [ ] `ServiceAreas` — sixteen towns in one list, three columns, copy about window coverage
- [ ] `Reviews` — `gray-50` ground, three white `rounded-2xl` cards, labelled five-star ratings,
      initial avatars, name + town
- [ ] `Faq` — five independent `aria-expanded` rows, `+`/`−` control, hairline dividers
- [ ] `ClosingCta` — `#156669` band, white solid `Book a visit` + white outline `tel:` link
- [ ] `Footer` — five columns, newsletter with validation + inline confirmation, socials, legal bar,
      `Component Dock` link to `https://www.componentdock.com/`, cookie strip
- [ ] `App` — composes the bands in reference order, sets the document title, skip link to `#main-content`

## Test plan (Vitest + Testing Library, 100% enforced)

- [ ] Booking: day selection re-dates the chips from the injected date; selecting day + window writes
      the summary; a taken window is `disabled` and reads `Taken`; submit with a complete choice shows
      the confirmation; submit without a window is blocked
- [ ] Season: `today = 2026-11-05` → heating panel + `Heating` pressed; `2026-06-05` → cooling panel;
      clicking each pill swaps heading, description and panel; accents swap
- [ ] FAQ: each row toggles independently; `aria-expanded` and the glyph flip; no exclusivity
- [ ] Plans: three tiers, `Most chosen` only on the middle card
- [ ] Areas: exactly sixteen list items
- [ ] Reviews: five labelled stars per card, name + town rendered
- [ ] Newsletter: empty submit blocked, valid submit shows the inline confirmation

## Verification

- [ ] `bash scripts/verify-app.sh thermly` (typecheck · lint · 100% coverage · build)
- [ ] `node scripts/audit-naming.mjs` — `thermly` ≠ `airwise`
- [ ] `grep -ril "colorlib\|airwise" apps/thermly` → empty
- [ ] `grep -c "free-react-templates/thermly" package-lock.json` ≥ 1
- [ ] Self-review per `docs/self-review.md`

## Ship + bookkeeping

- [ ] `feat/template-thermly` branch → PR → `gh pr merge --squash --delete-branch`
- [ ] Add the `## Business (365)` row (see spec §Purpose for the exact line), flip to `[x]`
- [ ] README status line + Surge deploy (`workflow_dispatch` or the push trigger)
- [ ] Verify `https://thermly.free.componentdock.com` returns HTTPS 200 with `ssl_verify_result=0`
      (`bash scripts/audit-deployments.sh`)
