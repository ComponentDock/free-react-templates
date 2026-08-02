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
│   ├── aurora/          # Template: Aurora (personal/business landing)
│   ├── drift/           # Template: Drift (404 error page)
│   └── orbit/           # Template: Orbit (404 error page, space theme)
├── packages/
│   └── ui/              # Shared UI components (Button, ButtonLink, Card, Badge, cn)
├── package.json         # npm workspaces root
└── tsconfig.base.json   # Shared strict TypeScript config
```

> **One app per template:** every template lives in its own folder under `apps/`,
> named after the template (e.g. `apps/aurora` for the Aurora template).

## Getting started

```bash
npm install
npm run dev        # start the web app (http://localhost:5173)
npm run build      # typecheck + production build
npm run typecheck  # typecheck every workspace
```

## AI-assisted development

This repo is optimized for AI-driven development. **Start at [`AGENTS.md`](./AGENTS.md)** —
it is the binding contract for AI agents (read docs first, spec-first, TDD,
verification gates, self-review). Supporting docs:

| Doc                                            | Contents                                                            |
| ---------------------------------------------- | ------------------------------------------------------------------- |
| [`docs/ai-context.md`](docs/ai-context.md)     | Architecture, stack, workflows, known issues                        |
| [`docs/conventions.md`](docs/conventions.md)   | File structure, naming, component/error-handling patterns           |
| [`docs/contracts.md`](docs/contracts.md)       | Public API and data contracts                                       |
| [`docs/verification.md`](docs/verification.md) | The full gate: commands, failure policy, coverage                   |
| [`docs/replication.md`](docs/replication.md)   | Faithful template recreation: preview DOM + CSS tokens + screenshot |
| [`docs/deployment.md`](docs/deployment.md)     | Surge.sh deploys — one subdomain per template                       |
| [`docs/self-review.md`](docs/self-review.md)   | Change-impact analysis + self-review checklists                     |
| [`docs/adr/`](docs/adr/)                       | Architecture decision records                                       |
| [`CRONJOB.md`](CRONJOB.md)                     | The hourly scheduled jobs driving this repo                         |

> **Model note:** development agents working on this repo run on
> `opencode-go/deepseek-v4-flash` (via Hermes Agent, opencode-go provider).

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
3. Create the app folder `apps/<template-name>` (copy an existing template, e.g. `apps/aurora`).
4. Write tests first, implement until coverage is 100%.
5. Run the pre-push chain locally: `npm run typecheck && npm run lint && npm run test:coverage && npm run build && npm run knip && npm run fallow`.
6. Mark the `TEMPLATES.md` item `[x]` and commit conventionally.

## License

TBD
