# Presto — implementation tasks

> **SHIPPED** — this prep's design shipped as `apps/presto`
> (<https://presto.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

Recreation of ColorLib **"Fastes"** (source slug `fastes` — the hosting family's
**coral-on-violet** page: a `#73469F`→`#3B2774` gradient hero with layered wave
silhouettes and a white cloud-scallop divider, a centred caption over a white
pill domain-search bar with a circular peach `#FFBF81` button and a four-item
coloured TLD row, then three `8px`-rounded white pricing cards that overlap the
hero by `margin-top:-138px`, a 6-item feature grid (`padding-top:160px`), a
`#C57EFC`-chip support band, a map band repeating the features title, a dark
2-slide testimonial band, a seven-mark logo strip, a dark four-question FAQ band,
a split "Commitment to Security" band, a `#F8FCFF` help CTA and a purple footer
with a newsletter form. The accent is coral `#FA8F77` (outline `#FD8F5F`); the
type is Poppins; buttons and inputs are `30px` pills. Preview:
`https://preview.colorlib.com/theme/fastes/` (HTTP 200; stylesheet
`assets/css/style.css`).

Spec: `openspec/specs/template-presto/spec.md`. New name: **presto** (never reuse
the source slug `fastes`, the name "Fastes", its logo/hero/feature images, its
`img/**` photographs or its copy verbatim). Design notes:
`docs/templates/presto/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/presto`
- [ ] Rename package to `@free-react-templates/presto`; set
      `"homepage": "https://presto.free.componentdock.com"`
- [ ] `public/CNAME` = `presto.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/presto`
      (`grep -c "free-react-templates/presto" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern)
- [ ] Google Fonts `<link>` in `index.html`:
      **Poppins `wght@300;400;500;600;700`**. No icon font: icons come from
      `lucide-react`
- [ ] `@theme` tokens in `src/index.css`: `--color-brand: #FA8F77`,
      `--color-brand-deep: #ee7b61`, `--color-coral: #FD8F5F`,
      `--color-peach: #FFBF81`, `--color-violet: #73469F`,
      `--color-violet-deep: #3B2774`, `--color-lilac: #C57EFC`,
      `--color-ink: #140C40`, `--color-body: #646D77`,
      `--color-muted: #717081`, `--color-footer-link: #C2C5DB`,
      `--color-footer-border: #695CAE`, `--color-line: #E7E6EB`,
      `--color-surface: #fff`, `--color-surface-soft: #F8FCFF`, radii
      `30px`/`8px`/`10px`/`14px`, font Poppins

## Spec + TDD

- [ ] `npm run spec:validate` passes for `template-presto`
- [ ] Write failing tests first (scenario-style `it` blocks mirroring every
      spec scenario), then implement to green, 100% coverage
- [ ] `scripts/verify-app.sh presto` green (typecheck + lint + knip + fallow +
      vitest 100% + build)

## Sections (order must match the reference 1:1)

- [ ] `Header` — absolute transparent overlay: own wordmark; Home / About /
      Services / Help / Blog▸ (submenu: Blog, Blog Details, Elements) / Contact
      (`16px`, capitalize, white, hover coral); own phone number + filled coral
      pill "Sign In"; accessible dropdown + mobile toggle
- [ ] `Hero` — violet `#73469F`→`#3B2774` gradient + own wave SVGs
      (`min-height:890px`), centred eyebrow + bold white uppercase `h1`
      (45/29/19px), white pill search bar (65px, `30px` radius, globe left,
      circular peach `#FFBF81` button right), four-item coloured TLD row
      (`#ff7474`/`#ffdd74`/`#74ff9f`/`#748bff`, white prices, `#73469F`
      separators, `.org` not the source's `.rog`), own cloud-scallop SVG divider;
      labelled controls, submit does not navigate
- [ ] `PricingTriple` — three white cards (`8px` radius,
      `0 8px 26px rgba(67,40,124,.08)`, `padding:70px 0`) in an area with
      `margin-top:-138px` (`-78px` md, `0` sm); icon + plan `h4` (25px/600) +
      "Starting at" (`15px #3B4855`) + coral price (`#FD8F5F` 32px) with
      `/ month` `span` (12px `#838a9b`) + `#E7E6EB` divider + 5-item list
      (`16px/300 #717081`) + outline pill "Get Started" that fills `#FA8F77`
- [ ] `Features` — light cover band, `padding-top:160px`, centred title +
      blurb (`mb-90`), **six** flex items in 3 columns (own coral lucide icon +
      `h3` 25px/`#140C40` + `p` 15px/`#646D77`, `line-height:1.8`); topics kept
      distinct (do not reproduce the source's duplicate item)
- [ ] `Support` — cover band `pt-130 pb-130`: white two-line title +
      translucent blurb left; right exactly two `#C57EFC` `10px` chips
      (`padding:35px 20px`) with 36px white icons and `20px/500 #fff` text — own
      phone number + "Chat with experts" action
- [ ] `MapBand` — repeats the features title 1:1 (source quirk) + blurb
      (`mb-90`), then a full-width 600px lazy `iframe` map with a `title`
      attribute (own location, not the source coordinates);
      `section-padding40` rhythm
- [ ] `Testimonials` — dark cover band (`padding-top:190px;
      padding-bottom:90px`): white title + blurb left, 2-slide slider right with
      picsum portraits, white quote `p` (20px/400) and founder
      name/role (`span` 21px/500); labelled dots with `aria-current`, arrow keys,
      autoplay paused on hover/focus and under `prefers-reduced-motion`
- [ ] `BrandStrip` — bordered row (`.brand-border`, `50px/40px`) with exactly
      seven own muted text/SVG marks; never the source `brand*.png`
- [ ] `Faq` — dark cover band (`section-padding30`): centred white title +
      translucent blurb (`mb-90`), **four** items in two columns, each a white
      `Q.` span (20px) + `.pera` (`padding-left:28px`) with `h2` 20px white and
      `p` 15px `rgba(255,255,255,.6)`; `margin-bottom:50px`
- [ ] `Commitment` — `about-area2` 6/6: own illustration left, caption right
      (`h2` + `p.mb-40` + outline pill "Learn More" that fills `#FD8F5F`);
      stacks at md
- [ ] `HelpCta` — `#F8FCFF` band, `.wants-wrapper` (`80px 30px`, →`70px 20px`):
      `h2` 35px/700 + `p` 18px left; filled `.btn` "Contact Us" (mr-20) +
      outline `.border-btn` "Live Chat" right
- [ ] `Footer` — purple cover band (own placeholder/gradient),
      `footer-padding` 160/50: **Company / Products / Support** columns
      (`h4` 22px/400 `#C2C5DB`, five links each `#C2C5DB`/300, hover coral +
      `padding-left:5px`) + logo & newsletter column (own logo, subscribe line,
      e-mail input `43px`/`1px solid #695CAE`/`14px` radius centered text, coral
      full-width "Subscribe" `10px` radius, three round `40×40` `#fff`-bordered
      social links with hover fill `#FA8F77`); hairline + centred copyright with
      the **Component Dock** link; labelled form with local validation, fresh
      error text `#FA8F77` and a polite live-region success message
- [ ] `BackToTop` — fixed coral `50×50` circle (`right:31px; bottom:18px`),
      labelled, appears after scroll, keyboard reachable
- [ ] `StickyHeader` — scrolled state only: fixed `#fff` bar with
      `box-shadow:0 10px 15px rgba(25,25,25,.1)`

## Shared UI / reuse

- [ ] Reuse `packages/ui` (`Button`/`ButtonLink`, `Card`, `cn()`) where it fits;
      do not duplicate primitives
- [ ] Keep the `30px` pill look via `primary` (filled `#FA8F77`) and `secondary`
      (outline `#FD8F5F`) variants; never inline raw hex outside `@theme`

## Assets, copy, accessibility

- [ ] All imagery via `https://picsum.photos/seed/presto-<n>/<w>/<h>`; icons via
      `lucide-react`; own logo, wave shapes, scallop divider and illustrations;
      never the source's `img/**` (`h1_hero.png`, `section_bg0*.png`,
      `price1.png`, `right-icon.png`, `brand*.png`, `testimonial.png`,
      `about1.png`, `footer_bg.png`, `logo*.png`) or its CSS
- [ ] Paraphrase all copy (same *kind*, no verbatim source strings); own contact
      details (never `+880 156 278 256` / `+10 367 456 3678`)
- [ ] Semantic landmarks (`header`/`nav`/`main`/`footer`), real form labels,
      `aria-label`s on icon-only controls (search, socials, back-to-top),
      focus-visible rings, keyboard-operable dropdown/slider/mobile menu,
      reduced-motion respected
- [ ] One Component Dock attribution line (`https://www.componentdock.com/`)
- [ ] Zero `colorlib` / "Fastes" / `fastes` references anywhere in
      `apps/presto`

## Finalisation

- [ ] `public/CNAME` + `"homepage"` correct; lockfile registers the workspace
- [ ] `npm install` at repo root committed (no stale lockfile)
- [ ] PR description: source template (ColorLib Fastes), preview URL
      (`https://preview.colorlib.com/theme/fastes/` → HTTP 200 + stylesheet
      `assets/css/style.css`), tokens used (brand `#FA8F77`, outline `#FD8F5F`,
      peach `#FFBF81`, violet `#73469F`/`#3B2774`, lilac `#C57EFC`, heading
      `#140C40`, `#F8FCFF` help band, Poppins, `30px` pills / `8px` cards /
      `10px` chips), geometry (`min-height:890px` hero, `-138px` pricing overlap,
      `padding-top:160px` features, `mb-90` titles) and what differs (new name,
      `.rog`→`.org` correction, picsum placeholders, own logo/waves/scallop/
      illustrations/copy, lucide icons, added aria/keyboard states + Component
      Dock credit)
- [ ] Report: what changed, verification results, coverage, commit hash(es),
      push status
