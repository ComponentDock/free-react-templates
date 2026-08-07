# AI Context

Everything an AI agent needs to understand this project before writing code.

## Domain

A curated collection of **free, production-ready React website templates**. Each
template is an original React implementation inspired by a free ColorLib design
(see `TEMPLATES.md` for the mapping) built under a **different name** with a
consistent stack. No ColorLib assets are copied — designs are recreated from
scratch.

## Architecture

```
free-react-templates/
├── apps/                     # One folder per template (e.g. aurora/, drift/)
│   ├── aurora/               # Template "Aurora" — personal/business landing
│   ├── azure/                # Template "Azure" — 404 error page (watermark + blue pill)
│   ├── blaze/                # Template "Blaze" — 404 error page (bold red exclamation)
│   ├── cloud/                # Template "Cloud" — 404 error page (minimalist cloud)
│   ├── cove/                 # Template "Cove" — 404 error page (emoji in light circle)
│   ├── drift/                # Template "Drift" — 404 error page
│   ├── driven/               # Template "Driven" — app/digital-marketing landing (ColorLib Sasu)
│   ├── flick/                # Template "Flick" — 404 error page (animated spark)
│   ├── lagoon/               # Template "Lagoon" — 404 error page (teal sad-face)
│   ├── nova/                 # Template "Nova" — 404 error page (gradient 404 + social tiles)
│   ├── orbit/                # Template "Orbit" — 404 error page (space theme)
│   ├── punch/                # Template "Punch" — 404 error page (bold Oops + orange CTA)
│   ├── query/                # Template "Query" — 404 error page (gray 404 + search bar)
│   ├── scarlet/              # Template "Scarlet" — 404 error page (photo + red overlay)
│   ├── slice/                # Template "Slice" — 404 error page (tight cut digits)
│   ├── sky/                  # Template "Sky" — 404 error page (blue zero + search bar)
│   ├── tears/                # Template "Tears" — 404 error page (crying emoji)
│   ├── thepetcare/           # Template "Thepetcare" — animal care & donation landing
│   └── vista/                # Template "Vista" — 404 error page (image background)
│       ├── src/              # main.tsx, App.tsx, components/, test setup
│       ├── index.html
│       ├── vite.config.ts    # react + tailwindcss plugins, '@' alias -> ./src
│       └── vitest.config.ts  # jsdom, globals, setup file
├── packages/
│   └── ui/                   # Shared UI: Button, ButtonLink, Card (compound), Badge, cn()
├── openspec/
│   └── specs/template-<name>/spec.md   # Per-template specs (GitHub Spec Kit)
├── docs/                     # AI context, conventions, contracts, ADRs
│   └── templates/<name>/     # Per-template prep: tasks/todo outline, notes
│                             # (prepared on main while a PR awaits review)
├── .specify/                 # Spec Kit workflow scaffolding
├── TEMPLATES.md              # ColorLib backlog checklist (1,646 items)
├── AGENTS.md                 # AI coding rules (read first)
├── vitest.config.ts          # Projects (apps/*, packages/*) + 100% coverage
└── tsconfig.base.json        # Shared strict TS config
```

Key decisions (details in `docs/adr/`):

- **Monorepo, one app per template** (`ADR-0001`) — apps/ contains only templates.
- **Spec-driven with OpenSpec/Spec Kit** (`ADR-0002`) — each template has a spec.
- **TDD with 100% coverage + guard chain** (`ADR-0003`) — husky pre-commit
  (lint-staged) and pre-push (full gate).

## Stack & tooling

| Concern         | Tool                                                                                                        |
| --------------- | ----------------------------------------------------------------------------------------------------------- |
| Build / dev     | Vite 8                                                                                                      |
| UI              | React 19 (automatic JSX runtime — no `React` import needed)                                                 |
| Styling         | Tailwind CSS 4 (`@import 'tailwindcss'`, `@custom-variant dark` for class-based dark mode, `@theme` tokens) |
| Language        | TypeScript 7, strict, `noUncheckedIndexedAccess`                                                            |
| Tests           | Vitest 4 + Testing Library + jsdom                                                                          |
| Coverage        | v8 provider, 100% thresholds (root `vitest.config.ts`)                                                      |
| Form validation | zod (typed schemas; `z.infer` form types)                                                                   |
| Lint            | oxlint (`react-in-jsx-scope` off — automatic runtime)                                                       |
| Format          | Prettier                                                                                                    |
| Dead code       | knip + fallow-rs (`.fallowrc.json`)                                                                         |
| Specs           | OpenSpec CLI 1.7 (`@fission-ai/openspec`)                                                                   |
| Hooks           | husky: pre-commit (lint-staged) + pre-push (full gate)                                                      |

## Workflows

### Template pipeline (driven by an hourly cron job)

1. Pick first `[~]`/`- [ ]` item in `TEMPLATES.md`.
2. Write `openspec/specs/template-<name>/spec.md` (requirements + scenarios).
3. Create `apps/<name>` (copy simplest existing app; rename workspace package).
4. Tests first → implement → `npm run test:coverage` at 100%.
5. Full gate → commit conventionally → push → mark `TEMPLATES.md` item `[x]`.

### Daily development

`npm run dev` (aurora workspace) · `npm test` · `npm run test:coverage` ·
`npm run typecheck` · `npm run lint` · `npm run build` · `npm run knip` ·
`npm run fallow` · `npm run spec:validate`.

## Known issues & quirks

- **Barrel-file coverage artifact:** `packages/ui/src/index.ts` (pure re-exports)
  shows 0% in the v8 report but has no executable statements — it does not affect
  the 100% aggregate or the thresholds. Do not "fix" it.
- **Accessible-name whitespace:** JSX text + a `<span>` on separate lines can
  collapse the space in the accessible name (`"production-readyReact"`). In tests,
  match headings via `{ level: 1 }` + `textContent` regex instead of
  `name: /.../`.
- **Testing Library cleanup:** workspace vitest configs set `globals: true` —
  required for RTL auto-cleanup. Do not remove.
- **Vitest timeout is per-workspace:** the root `vitest.config.ts`
  `testTimeout: 15000` only applies to the root project. Each workspace
  `vitest.config.ts` sets its own `testTimeout: 15000` (added to fix flaky
  "Test timed out in 5000ms" failures for heavy App renders in the parallel
  suite). Keep the line in any new app's config.
- **Tailwind v4 dark mode:** `dark:` utilities require the
  `@custom-variant dark (&:where(.dark, .dark *))` in `src/index.css`; toggling
  is done by a `.dark` class on `<html>`.
- **TypeScript 7:** the Go-native compiler is "latest" here. It emits
  `TS5112` when files are passed on the command line (tooling quirk, not a code
  error). Builds run `tsc --noEmit` per workspace.
- **CSS in coverage:** `**/*.css` is excluded from coverage reports.
- **`fallow` health output:** "✗ 0 above threshold" is a healthy summary line,
  not an issue.
- **git identity:** commits on this host use the machine identity unless a repo
  `user.name`/`user.email` is set locally.
