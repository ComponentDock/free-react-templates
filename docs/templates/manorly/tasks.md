# Manorly — Tasks

Recreation of ColorLib **Dreamrs** (https://colorlib.com/wp/template/dreamrs/) as a React 19 +
Vite + Tailwind 4 + TypeScript app under the name **Manorly** (`apps/manorly`).

## Pre-flight

- [x] Replication: live preview read (`curl -4`, HTTP 200, 36,309 B, title `Real_state || Home`)
- [x] Token sheet measured (`css/style.css`, 171,589 B, sha256 `f924622c…`)
- [x] Screenshot read (header + hero, 1200×946)
- [x] Name check: `manorly` free in `apps/`, `openspec/specs/`, `docs/templates/`, `TEMPLATES.md`
- [x] Provenance: rows 106 / 1967 / 2587 were false `[x]`s (`APP-WRONG-DESIGN`, skyline → rooftop)
- [x] Spec: `openspec/specs/template-manorly/spec.md`
- [x] Design notes: `docs/templates/manorly/design-notes.md`

## Scaffold

- [x] Copy the single-app scaffold (`package.json`, `vite.config.ts` with `injectUiSource()`,
      `vitest.config.ts` with `globals` + `testTimeout`, `tsconfig.json`, `index.html`,
      `src/main.tsx`, `src/test/setup.ts`, `public/CNAME`)
- [x] `npm install` at the repo root so `package-lock.json` registers the workspace
- [x] `homepage` = `https://manorly.free.componentdock.com`, `public/CNAME` = same host

## Sections (tests first)

- [x] `Header` — mark + wordmark, five links, `Blog`/`Pages` disclosures, mobile panel
- [x] `Hero` — gradient wash over a seeded aerial photograph, eyebrow, `h1`
- [x] `About` — photo framed in brand red, label, heading, paragraph, `Learn More`, three counters
- [x] `Projects` — four category filters, ten cards with badges, visible-count announcement
- [x] `Services` — four `#f4f4f4` cards (the reference repeats `Design & Build`)
- [x] `ServicesBanner` — red "Services." call-out with a `Learn more` link back to the grid
- [x] `Gallery` — `Luxuries Apartment`, four property cards, per-card like toggle
- [x] `Blog` — three teasers with category, date, title and counts
- [x] `Footer` — four columns, newsletter validation, Component Dock credit
- [x] `App` — composes the bands in reference order and sets the document title

## Verification

- [x] `bash scripts/verify-app.sh manorly` (typecheck · lint · 100% coverage · build)
- [x] `npm run spec:validate`
- [x] `grep -c "free-react-templates/manorly" package-lock.json` ≥ 1
- [x] Self-review per `docs/self-review.md`

## Ship + bookkeeping

- [x] Commit (`feat: Manorly — …`), push `feat/template-manorly`, open the PR, squash-merge
- [x] Rows 106 / 1967 / 2587 → `[x]` with `[manorly](https://manorly.free.componentdock.com)`
- [x] `npm run readme:status`, stage `README.md`
- [x] `docs/row-multiplicity.md`: 18 → 17 designs without an app (three dreamrs rows re-pointed)
