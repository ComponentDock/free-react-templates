# Harbor — implementation tasks

> **SHIPPED** — this prep's design shipped as `apps/harbor`
> (<https://harbor.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

Recreation of ColorLib **"Deerhost"** (source slug `deerhost` — the hosting
family's **navy + isometric-illustration** page: a `#120851` shell whose hero
carries a light-on-dark headline beside a large isometric city-server
illustration and a white cloud-scallop divider, then a long light body —
periwinkle pill domain-search → 6 service cards on `#eeeffb` → Monthly/Yearly
pricing grid with navy price bands → photo-backed counter band
(`padding-bottom:450px`) → an overlapping "how to build" band
(`margin-top:-405px`) → a discount-checklist CTA → a two-tone navy footer). The
accent everywhere is the periwinkle `#4c57d6`; the type is Montserrat; every
button and input is a `50px` pill; cards are `10px`-rounded white with soft navy
shadows. Preview:
`https://preview.colorlib.com/theme/deerhost/` (HTTP 200; stylesheet
`css/style.min.css?v=3.0.0`).

Spec: `openspec/specs/template-harbor/spec.md`. New name: **harbor** (never
reuse the source slug `deerhost`, the name "Deerhost", its logo/illustration
SVGs, its `img/**` photographs or its copy verbatim). Design notes:
`docs/templates/harbor/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/harbor`
- [ ] Rename package to `@free-react-templates/harbor`; set
      `"homepage": "https://harbor.free.componentdock.com"`
- [ ] `public/CNAME` = `harbor.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/harbor`
      (`grep -c "free-react-templates/harbor" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern)
- [ ] Google Fonts `<link>` in `index.html`: **Montserrat `wght@400;500;700`**.
      No icon font: icons come from `lucide-react`
- [ ] `@theme` tokens in `src/index.css`: `--color-brand: #4c57d6`,
      `--color-brand-dark: #3d47c4`, `--color-navy: #120851`, `--color-navy-deep:
      #0b052f`, `--color-navy-deep-2: #0e0739`, `--color-hairline: #252163`,
      `--color-ink: #111`, `--color-ink-2: #444`, `--color-surface: #fff`,
      `--color-surface-tint: #eeeffb`, radii `50px`/`10px`, font Montserrat

## Spec + TDD

- [ ] `npm run spec:validate` passes for `template-harbor`
- [ ] Write failing tests first (scenario-style `it` blocks mirroring every
      spec scenario), then implement to green, 100% coverage
- [ ] `scripts/verify-app.sh harbor` green (typecheck + lint + knip + fallow +
      vitest 100% + build)

## Sections (order must match the reference 1:1)

- [ ] `Header` — absolute top overlay: info strip (phone + email, Live chat,
      Login/Register; `1px solid #252163` divider) + nav row (own wordmark;
      Home/About/Hosting/Pages▸/News/Contact, active underline, accessible
      dropdown, mobile toggle)
- [ ] `Hero` — navy `#120851` band, 2-slide fade carousel (dots, autoplay),
      each 6/6: eyebrow + big bold white uppercase heading + periwinkle pill CTA
      | own isometric-style illustration; white cloud-scallop SVG divider at the
      bottom
- [ ] `RegisterDomain` — centered title + pill search form (input `54px`/`2px
      solid #4c57d6`/`50px`, `.com ▾` TLD select, "Search" pill), TLD price row
      (`.com/.net/.org/.us/.in` + prices), blurb; labelled controls + polite live
      result; no navigation
- [ ] `Services` — `#eeeffb` band, centered title, 6 white `10px` cards
      (3/row → 2/row) with `h5` + periwinkle price + blurb, hover shadow
      `0 8px 30px #12085133`
- [ ] `Pricing` — left title + right Monthly/Yearly pill toggle (radiogroup,
      swap plan sets), 4 white cards with navy price bands (hover → `#4c57d6`),
      7-item feature lists, "Choose plan" buttons
- [ ] `Achievement` — own picsum photo band (`padding-bottom:450px`), 4 centred
      counters (lucide icons `40px #4c57d6`, count-up over ~4s) with uppercase
      white labels (Clients/Domains/Server/Installs)
- [ ] `Work` — overlapping band (`margin-top:-405px`, top hairline `#62677d`),
      white centered title, 2 items (icon `53px #4c57d6`, periwinkle eyebrow,
      `h3`, paragraph, "Read More" pill)
- [ ] `ChoosePlan` — `col-lg-6` own illustration + bold `h3` + 6-item periwinkle
      checklist + pill CTA
- [ ] `Footer` — two-tone navy top band (`#0b052f` left / `#0e0739` right;
      call-us + phone | Join Now + Log in/Sign Up), text band with wordmark,
      blurb, 4 labelled social icons (lucide), Company/Hosting/Contact columns,
      copyright + **Component Dock** link

## Shared UI / reuse

- [ ] Reuse `packages/ui` (`Button`/`ButtonLink`, `Card`, `cn()`) where it fits;
      do not duplicate primitives
- [ ] Keep the pill (`50px`) button look via a `primary`/`secondary` variant;
      never inline raw hex outside `@theme`

## Assets, copy, accessibility

- [ ] All imagery via `https://picsum.photos/seed/harbor-<n>/<w>/<h>`; icons via
      `lucide-react`; own logo + illustration SVGs; never the source's `img/**`,
      `hero-right.svg`, `choose-plan.svg`, `footer-bg.svg`, `line.png` or CSS
- [ ] Paraphrase all copy (same *kind*, no verbatim source strings)
- [ ] Semantic landmarks (`header`/`nav`/`main`/`footer`), real form labels,
      `aria-label`s on icon-only controls, focus-visible rings, keyboard-operable
      carousel/toggle/mobile menu
- [ ] One Component Dock attribution line (`https://www.componentdock.com/`)
- [ ] Zero `colorlib` / `deerhost` references anywhere in `apps/harbor`

## Finalisation

- [ ] `public/CNAME` + `"homepage"` correct; lockfile registers the workspace
- [ ] `npm install` at repo root committed (no stale lockfile)
- [ ] PR description: source template (ColorLib Deerhost), preview URL
      (`https://preview.colorlib.com/theme/deerhost/` → HTTP 200 + stylesheet),
      tokens used (`#4c57d6` brand, `#120851` navy, Montserrat, `50px` pills /
      `10px` cards, `#eeeffb` services band, `100px` `.spad` rhythm), geometry
      (`padding-bottom:450px` / `margin-top:-405px` overlap) and what differs
      (new name, picsum placeholders, own logo/illustrations/copy, lucide icons,
      added aria/keyboard states + Component Dock credit)
- [ ] Report: what changed, verification results, coverage, commit hash(es),
      push status
