# Alms (ColorLib Givehope) — Tasks

> Written by this run's implementer stream: the design had no prepped spec
> because TEMPLATES.md row 1270 credited `apps/givehope`, an app that renders
> the "Bcharity" design already shipped as `givemore`. Implementation ships on
> `feat/template-alms`.

## 1. Spec & research

- [x] Fetch the live preview (`/theme/givehope/`, HTTP 200, 31,363 B) and its
      `css/style.css` (23,189 B, sha256 `48b382c5…`)
- [x] Extract section order, copy anchors, palette and type scale from the DOM
      and the sheet (see `design-notes.md`)
- [x] View the screenshot (`givehope-free-template.jpg`) for the hero, counter
      panel and three-up icon row treatment
- [x] Write `openspec/specs/template-alms/spec.md` (Gherkin, 10 requirements)

## 2. Scaffold

- [x] `apps/alms` from an existing app, package
      `@free-react-templates/alms`, homepage
      `https://alms.free.componentdock.com`, `public/CNAME`
- [x] Keep `injectUiSource()` in `vite.config.ts`
- [x] Google Fonts Dosis + Overpass in `index.html`
- [x] `@theme` tokens for yellow `#f7ca44`, ink, body, band, footer
- [x] `npm install` at the repo root so `package-lock.json` registers the
      workspace

## 3. Sections (TDD, one component + test each)

- [x] `Navbar` — wordmark, seven links, hamburger panel open/close
- [x] `Hero` — 70vh photo, scrim, headline, play link
- [x] `Counter` — yellow panel figures + "Who Are We?" column
- [x] `Features` — Our Mission / Make Donations / We Need Volunteers
- [x] `Fundraisers` — six cards, 40 % progress bars, raised/goal summary
- [x] `Donations` — four donor cards with amount + cause
- [x] `SuccessStory` — yellow overlay band, raised total, story link
- [x] `News` — three post cards with date badges
- [x] `Volunteer` — name/email form, validation, confirmation
- [x] `Footer` — three columns, copyright, Component Dock link

## 4. Verify & ship

- [x] `bash scripts/verify-app.sh alms` (typecheck + lint + 100 % coverage + build)
- [x] `npm run spec:validate`
- [x] Self-review (`docs/self-review.md`)
- [x] PR to `main` with source, preview URL, tokens, coverage, screenshots note
- [x] Merge immediately, then bookkeeping: TEMPLATES.md row 1270 re-pointed
      from `givehope` to `alms`, `npm run readme:status`
