# free-react-templates

A **monorepo** of free, ready-to-use React website templates. Each template is a
production-ready starting point built with the latest versions of the core stack.

## Stack (always latest)

| Layer        | Technology          |
| ------------ | ------------------- |
| **Build**    | Vite                |
| **UI**       | React               |
| **Styling**  | Tailwind CSS v4     |
| **Language** | TypeScript (strict) |

## Structure

```
free-react-templates/
├── apps/
│   └── web/              # The Vite + React demo app
├── packages/
│   └── ui/               # Shared UI components (Button, Card, Badge, cn)
├── package.json          # npm workspaces root
└── tsconfig.base.json    # Shared strict TypeScript config
```

## Getting started

```bash
npm install
npm run dev        # start the web app (http://localhost:5173)
npm run build      # typecheck + production build
npm run typecheck  # typecheck every workspace
```

## Development workflow

- **Spec-driven:** every template has a spec in `openspec/specs/template-<name>/spec.md`
  (GitHub Spec Kit / OpenSpec). Validate with `npm run spec:validate`.
- **TDD, 100% coverage:** write the test first, then implement. `npm run test:coverage`
  enforces 100% lines/functions/branches/statements (root `vitest.config.ts`).
- **Guards (husky):**
  - `pre-commit` — lint-staged (oxlint --fix + prettier --write)
  - `pre-push` — typecheck → lint → test:coverage → build → knip → fallow
- **Quality tools:** oxlint · prettier · knip · fallow (`npm run lint`, `npm run format`,
  `npm run knip`, `npm run fallow`)
- **Checklist:** `TEMPLATES.md` tracks all 1,646 ColorLib template recreations;
  mark an item `[x]` when its template ships.

## Adding a new template

1. Pick the next unchecked item in `TEMPLATES.md`.
2. Write its spec in `openspec/specs/template-<name>/spec.md` (requirements + scenarios).
3. Copy `apps/web` to `apps/<template-name>` — or convert it if it's the next template.
4. Write tests first, implement until coverage is 100%.
5. Run the pre-push chain locally: `npm run typecheck && npm run lint && npm run test:coverage && npm run build && npm run knip && npm run fallow`.
6. Mark the `TEMPLATES.md` item `[x]` and commit conventionally.

## License

TBD
